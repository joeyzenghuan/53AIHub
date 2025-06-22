import { y as yf, U as Bs, aI as bf, Y as wf, o as xf, $ as me, bh as vf, ad as kf, cD as Sf, __tla as __tla_0 } from "./index-8579fe4a.js";
let E, D, Pd, L, ub, Q, ge, ct, db, ys, po;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let nr = [], va = [];
  (() => {
    let n = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
    for (let t = 0, e = 0; t < n.length; t++)
      (t % 2 ? va : nr).push(e = e + n[t]);
  })();
  function Cf(n) {
    if (n < 768)
      return false;
    for (let t = 0, e = nr.length; ; ) {
      let i = t + e >> 1;
      if (n < nr[i])
        e = i;
      else if (n >= va[i])
        t = i + 1;
      else
        return true;
      if (t == e)
        return false;
    }
  }
  function Po(n) {
    return n >= 127462 && n <= 127487;
  }
  const _o = 8205;
  function Af(n, t, e = true, i = true) {
    return (e ? ka : Mf)(n, t, i);
  }
  function ka(n, t, e) {
    if (t == n.length)
      return t;
    t && Sa(n.charCodeAt(t)) && Ca(n.charCodeAt(t - 1)) && t--;
    let i = Es(n, t);
    for (t += Io(i); t < n.length; ) {
      let s = Es(n, t);
      if (i == _o || s == _o || e && Cf(s))
        t += Io(s), i = s;
      else if (Po(s)) {
        let r = 0, o = t - 2;
        for (; o >= 0 && Po(Es(n, o)); )
          r++, o -= 2;
        if (r % 2 == 0)
          break;
        t += 2;
      } else
        break;
    }
    return t;
  }
  function Mf(n, t, e) {
    for (; t > 0; ) {
      let i = ka(n, t - 2, e);
      if (i < t)
        return i;
      t--;
    }
    return 0;
  }
  function Es(n, t) {
    let e = n.charCodeAt(t);
    if (!Ca(e) || t + 1 == n.length)
      return e;
    let i = n.charCodeAt(t + 1);
    return Sa(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
  }
  function Sa(n) {
    return n >= 56320 && n < 57344;
  }
  function Ca(n) {
    return n >= 55296 && n < 56320;
  }
  function Io(n) {
    return n < 65536 ? 1 : 2;
  }
  class W {
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
      [t, e] = hi(this, t, e);
      let s = [];
      return this.decompose(0, t, s, 2), i.length && i.decompose(0, i.length, s, 3), this.decompose(e, this.length, s, 1), Jt.from(s, this.length - (e - t) + i.length);
    }
    append(t) {
      return this.replace(this.length, this.length, t);
    }
    slice(t, e = this.length) {
      [t, e] = hi(this, t, e);
      let i = [];
      return this.decompose(t, e, i, 0), Jt.from(i, e - t);
    }
    eq(t) {
      if (t == this)
        return true;
      if (t.length != this.length || t.lines != this.lines)
        return false;
      let e = this.scanIdentical(t, 1), i = this.length - this.scanIdentical(t, -1), s = new Ei(this), r = new Ei(t);
      for (let o = e, l = e; ; ) {
        if (s.next(o), r.next(o), o = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
          return false;
        if (l += s.value.length, s.done || l >= i)
          return true;
      }
    }
    iter(t = 1) {
      return new Ei(this, t);
    }
    iterRange(t, e = this.length) {
      return new Aa(this, t, e);
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
      return new Ma(i);
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
      return t.length == 1 && !t[0] ? W.empty : t.length <= 32 ? new X(t) : Jt.from(X.split(t, []));
    }
  }
  class X extends W {
    constructor(t, e = Df(t)) {
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
          return new Of(s, l, i, o);
        s = l + 1, i++;
      }
    }
    decompose(t, e, i, s) {
      let r = t <= 0 && e >= this.length ? this : new X(No(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
      if (s & 1) {
        let o = i.pop(), l = _n(r.text, o.text.slice(), 0, r.length);
        if (l.length <= 32)
          i.push(new X(l, o.length + r.length));
        else {
          let a = l.length >> 1;
          i.push(new X(l.slice(0, a)), new X(l.slice(a)));
        }
      } else
        i.push(r);
    }
    replace(t, e, i) {
      if (!(i instanceof X))
        return super.replace(t, e, i);
      [t, e] = hi(this, t, e);
      let s = _n(this.text, _n(i.text, No(this.text, 0, t)), e), r = this.length + i.length - (e - t);
      return s.length <= 32 ? new X(s, r) : Jt.from(X.split(s, []), r);
    }
    sliceString(t, e = this.length, i = `
`) {
      [t, e] = hi(this, t, e);
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
        i.push(r), s += r.length + 1, i.length == 32 && (e.push(new X(i, s)), i = [], s = -1);
      return s > -1 && e.push(new X(i, s)), e;
    }
  }
  class Jt extends W {
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
      if ([t, e] = hi(this, t, e), i.lines < this.lines)
        for (let s = 0, r = 0; s < this.children.length; s++) {
          let o = this.children[s], l = r + o.length;
          if (t >= r && e <= l) {
            let a = o.replace(t - r, e - r, i), h = this.lines - o.lines + a.lines;
            if (a.lines < h >> 5 - 1 && a.lines > h >> 5 + 1) {
              let c = this.children.slice();
              return c[s] = a, new Jt(c, this.length - (e - t) + i.length);
            }
            return super.replace(r, l, a);
          }
          r = l + 1;
        }
      return super.replace(t, e, i);
    }
    sliceString(t, e = this.length, i = `
`) {
      [t, e] = hi(this, t, e);
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
      if (!(t instanceof Jt))
        return 0;
      let i = 0, [s, r, o, l] = e > 0 ? [
        0,
        0,
        this.children.length,
        t.children.length
      ] : [
        this.children.length - 1,
        t.children.length - 1,
        -1,
        -1
      ];
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
        return new X(d, e);
      }
      let s = Math.max(32, i >> 5), r = s << 1, o = s >> 1, l = [], a = 0, h = -1, c = [];
      function f(d) {
        let p;
        if (d.lines > r && d instanceof Jt)
          for (let g of d.children)
            f(g);
        else
          d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof X && a && (p = c[c.length - 1]) instanceof X && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new X(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > s && u(), a += d.lines, h += d.length + 1, c.push(d));
      }
      function u() {
        a != 0 && (l.push(c.length == 1 ? c[0] : Jt.from(c, h)), h = -1, a = c.length = 0);
      }
      for (let d of t)
        f(d);
      return u(), l.length == 1 ? l[0] : new Jt(l, e);
    }
  }
  W.empty = new X([
    ""
  ], 0);
  function Df(n) {
    let t = -1;
    for (let e of n)
      t += e.length + 1;
    return t;
  }
  function _n(n, t, e = 0, i = 1e9) {
    for (let s = 0, r = 0, o = true; r < n.length && s <= i; r++) {
      let l = n[r], a = s + l.length;
      a >= e && (a > i && (l = l.slice(0, i - s)), s < e && (l = l.slice(e - s)), o ? (t[t.length - 1] += l, o = false) : t.push(l)), s = a + 1;
    }
    return t;
  }
  function No(n, t, e) {
    return _n(n, [
      ""
    ], t, e);
  }
  class Ei {
    constructor(t, e = 1) {
      this.dir = e, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [
        t
      ], this.offsets = [
        e > 0 ? 1 : (t instanceof X ? t.text.length : t.children.length) << 1
      ];
    }
    nextInner(t, e) {
      for (this.done = this.lineBreak = false; ; ) {
        let i = this.nodes.length - 1, s = this.nodes[i], r = this.offsets[i], o = r >> 1, l = s instanceof X ? s.text.length : s.children.length;
        if (o == (e > 0 ? l : 0)) {
          if (i == 0)
            return this.done = true, this.value = "", this;
          e > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
        } else if ((r & 1) == (e > 0 ? 0 : 1)) {
          if (this.offsets[i] += e, t == 0)
            return this.lineBreak = true, this.value = `
`, this;
          t--;
        } else if (s instanceof X) {
          let a = s.text[o + (e < 0 ? -1 : 0)];
          if (this.offsets[i] += e, a.length > Math.max(0, t))
            return this.value = t == 0 ? a : e > 0 ? a.slice(t) : a.slice(0, a.length - t), this;
          t -= a.length;
        } else {
          let a = s.children[o + (e < 0 ? -1 : 0)];
          t > a.length ? (t -= a.length, this.offsets[i] += e) : (e < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(e > 0 ? 1 : (a instanceof X ? a.text.length : a.children.length) << 1));
        }
      }
    }
    next(t = 0) {
      return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir);
    }
  }
  class Aa {
    constructor(t, e, i) {
      this.value = "", this.done = false, this.cursor = new Ei(t, e > i ? -1 : 1), this.pos = e > i ? t.length : 0, this.from = Math.min(e, i), this.to = Math.max(e, i);
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
  class Ma {
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
  typeof Symbol < "u" && (W.prototype[Symbol.iterator] = function() {
    return this.iter();
  }, Ei.prototype[Symbol.iterator] = Aa.prototype[Symbol.iterator] = Ma.prototype[Symbol.iterator] = function() {
    return this;
  });
  class Of {
    constructor(t, e, i, s) {
      this.from = t, this.to = e, this.number = i, this.text = s;
    }
    get length() {
      return this.to - this.from;
    }
  }
  function hi(n, t, e) {
    return t = Math.max(0, Math.min(n.length, t)), [
      t,
      Math.max(t, Math.min(n.length, e))
    ];
  }
  function ht(n, t, e = true, i = true) {
    return Af(n, t, e, i);
  }
  function Tf(n) {
    return n >= 56320 && n < 57344;
  }
  function Bf(n) {
    return n >= 55296 && n < 56320;
  }
  function vt(n, t) {
    let e = n.charCodeAt(t);
    if (!Bf(e) || t + 1 == n.length)
      return e;
    let i = n.charCodeAt(t + 1);
    return Tf(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
  }
  function Qr(n) {
    return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
  }
  function Xt(n) {
    return n < 65536 ? 1 : 2;
  }
  const sr = /\r\n?|\n/;
  var bt = function(n) {
    return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n;
  }(bt || (bt = {}));
  class ne {
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
      rr(this, t, e);
    }
    get invertedDesc() {
      let t = [];
      for (let e = 0; e < this.sections.length; ) {
        let i = this.sections[e++], s = this.sections[e++];
        s < 0 ? t.push(i, s) : t.push(s, i);
      }
      return new ne(t);
    }
    composeDesc(t) {
      return this.empty ? t : t.empty ? this : Da(this, t);
    }
    mapDesc(t, e = false) {
      return t.empty ? this : or(this, t, e);
    }
    mapPos(t, e = -1, i = bt.Simple) {
      let s = 0, r = 0;
      for (let o = 0; o < this.sections.length; ) {
        let l = this.sections[o++], a = this.sections[o++], h = s + l;
        if (a < 0) {
          if (h > t)
            return r + (t - s);
          r += l;
        } else {
          if (i != bt.Simple && h >= t && (i == bt.TrackDel && s < t && h > t || i == bt.TrackBefore && s < t || i == bt.TrackAfter && h > t))
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
      return new ne(t);
    }
    static create(t) {
      return new ne(t);
    }
  }
  class et extends ne {
    constructor(t, e) {
      super(t), this.inserted = e;
    }
    apply(t) {
      if (this.length != t.length)
        throw new RangeError("Applying change set to a document with the wrong length");
      return rr(this, (e, i, s, r, o) => t = t.replace(s, s + (i - e), o), false), t;
    }
    mapDesc(t, e = false) {
      return or(this, t, e, true);
    }
    invert(t) {
      let e = this.sections.slice(), i = [];
      for (let s = 0, r = 0; s < e.length; s += 2) {
        let o = e[s], l = e[s + 1];
        if (l >= 0) {
          e[s] = l, e[s + 1] = o;
          let a = s >> 1;
          for (; i.length < a; )
            i.push(W.empty);
          i.push(o ? t.slice(r, r + o) : W.empty);
        }
        r += o;
      }
      return new et(e, i);
    }
    compose(t) {
      return this.empty ? t : t.empty ? this : Da(this, t, true);
    }
    map(t, e = false) {
      return t.empty ? this : or(this, t, e, true);
    }
    iterChanges(t, e = false) {
      rr(this, t, e);
    }
    get desc() {
      return ne.create(this.sections);
    }
    filter(t) {
      let e = [], i = [], s = [], r = new Fi(this);
      t:
        for (let o = 0, l = 0; ; ) {
          let a = o == t.length ? 1e9 : t[o++];
          for (; l < a || l == a && r.len == 0; ) {
            if (r.done)
              break t;
            let c = Math.min(r.len, a - l);
            ft(s, c, -1);
            let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
            ft(e, c, f), f > 0 && xe(i, e, r.text), r.forward(c), l += c;
          }
          let h = t[o++];
          for (; l < h; ) {
            if (r.done)
              break t;
            let c = Math.min(r.len, h - l);
            ft(e, c, -1), ft(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), l += c;
          }
        }
      return {
        changes: new et(e, i),
        filtered: ne.create(s)
      };
    }
    toJSON() {
      let t = [];
      for (let e = 0; e < this.sections.length; e += 2) {
        let i = this.sections[e], s = this.sections[e + 1];
        s < 0 ? t.push(i) : s == 0 ? t.push([
          i
        ]) : t.push([
          i
        ].concat(this.inserted[e >> 1].toJSON()));
      }
      return t;
    }
    static of(t, e, i) {
      let s = [], r = [], o = 0, l = null;
      function a(c = false) {
        if (!c && !s.length)
          return;
        o < e && ft(s, e - o, -1);
        let f = new et(s, r);
        l = l ? l.compose(f.map(l)) : f, s = [], r = [], o = 0;
      }
      function h(c) {
        if (Array.isArray(c))
          for (let f of c)
            h(f);
        else if (c instanceof et) {
          if (c.length != e)
            throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${e})`);
          a(), l = l ? l.compose(c.map(l)) : c;
        } else {
          let { from: f, to: u = f, insert: d } = c;
          if (f > u || f < 0 || u > e)
            throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${e})`);
          let p = d ? typeof d == "string" ? W.of(d.split(i || sr)) : d : W.empty, g = p.length;
          if (f == u && g == 0)
            return;
          f < o && a(), f > o && ft(s, f - o, -1), ft(s, u - f, g), xe(r, s, p), o = u;
        }
      }
      return h(t), a(!l), l;
    }
    static empty(t) {
      return new et(t ? [
        t,
        -1
      ] : [], []);
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
              i.push(W.empty);
            i[s] = W.of(r.slice(1)), e.push(r[0], i[s].length);
          }
        }
      }
      return new et(e, i);
    }
    static createSet(t, e) {
      return new et(t, e);
    }
  }
  function ft(n, t, e, i = false) {
    if (t == 0 && e <= 0)
      return;
    let s = n.length - 2;
    s >= 0 && e <= 0 && e == n[s + 1] ? n[s] += t : s >= 0 && t == 0 && n[s] == 0 ? n[s + 1] += e : i ? (n[s] += t, n[s + 1] += e) : n.push(t, e);
  }
  function xe(n, t, e) {
    if (e.length == 0)
      return;
    let i = t.length - 2 >> 1;
    if (i < n.length)
      n[n.length - 1] = n[n.length - 1].append(e);
    else {
      for (; n.length < i; )
        n.push(W.empty);
      n.push(e);
    }
  }
  function rr(n, t, e) {
    let i = n.inserted;
    for (let s = 0, r = 0, o = 0; o < n.sections.length; ) {
      let l = n.sections[o++], a = n.sections[o++];
      if (a < 0)
        s += l, r += l;
      else {
        let h = s, c = r, f = W.empty;
        for (; h += l, c += a, a && i && (f = f.append(i[o - 2 >> 1])), !(e || o == n.sections.length || n.sections[o + 1] < 0); )
          l = n.sections[o++], a = n.sections[o++];
        t(s, h, r, c, f), s = h, r = c;
      }
    }
  }
  function or(n, t, e, i = false) {
    let s = [], r = i ? [] : null, o = new Fi(n), l = new Fi(t);
    for (let a = -1; ; ) {
      if (o.done && l.len || l.done && o.len)
        throw new Error("Mismatched change set lengths");
      if (o.ins == -1 && l.ins == -1) {
        let h = Math.min(o.len, l.len);
        ft(s, h, -1), o.forward(h), l.forward(h);
      } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !e))) {
        let h = l.len;
        for (ft(s, l.ins, -1); h; ) {
          let c = Math.min(o.len, h);
          o.ins >= 0 && a < o.i && o.len <= c && (ft(s, 0, o.ins), r && xe(r, s, o.text), a = o.i), o.forward(c), h -= c;
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
        ft(s, h, a < o.i ? o.ins : 0), r && a < o.i && xe(r, s, o.text), a = o.i, o.forward(o.len - c);
      } else {
        if (o.done && l.done)
          return r ? et.createSet(s, r) : ne.create(s);
        throw new Error("Mismatched change set lengths");
      }
    }
  }
  function Da(n, t, e = false) {
    let i = [], s = e ? [] : null, r = new Fi(n), o = new Fi(t);
    for (let l = false; ; ) {
      if (r.done && o.done)
        return s ? et.createSet(i, s) : ne.create(i);
      if (r.ins == 0)
        ft(i, r.len, 0, l), r.next();
      else if (o.len == 0 && !o.done)
        ft(i, 0, o.ins, l), s && xe(s, i, o.text), o.next();
      else {
        if (r.done || o.done)
          throw new Error("Mismatched change set lengths");
        {
          let a = Math.min(r.len2, o.len), h = i.length;
          if (r.ins == -1) {
            let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
            ft(i, a, c, l), s && c && xe(s, i, o.text);
          } else
            o.ins == -1 ? (ft(i, r.off ? 0 : r.len, a, l), s && xe(s, i, r.textBit(a))) : (ft(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && xe(s, i, o.text));
          l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), r.forward2(a), o.forward(a);
        }
      }
    }
  }
  class Fi {
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
      return e >= t.length ? W.empty : t[e];
    }
    textBit(t) {
      let { inserted: e } = this.set, i = this.i - 2 >> 1;
      return i >= e.length && !t ? W.empty : e[i].slice(this.off, t == null ? void 0 : this.off + t);
    }
    forward(t) {
      t == this.len ? this.next() : (this.len -= t, this.off += t);
    }
    forward2(t) {
      this.ins == -1 ? this.forward(t) : t == this.ins ? this.next() : (this.ins -= t, this.off += t);
    }
  }
  class Ne {
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
      return this.empty ? i = s = t.mapPos(this.from, e) : (i = t.mapPos(this.from, 1), s = t.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new Ne(i, s, this.flags);
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
      return {
        anchor: this.anchor,
        head: this.head
      };
    }
    static fromJSON(t) {
      if (!t || typeof t.anchor != "number" || typeof t.head != "number")
        throw new RangeError("Invalid JSON representation for SelectionRange");
      return b.range(t.anchor, t.head);
    }
    static create(t, e, i) {
      return new Ne(t, e, i);
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
      return this.ranges.length == 1 ? this : new b([
        this.main
      ], 0);
    }
    addRange(t, e = true) {
      return b.create([
        t
      ].concat(this.ranges), e ? 0 : this.mainIndex + 1);
    }
    replaceRange(t, e = this.mainIndex) {
      let i = this.ranges.slice();
      return i[e] = t, b.create(i, this.mainIndex);
    }
    toJSON() {
      return {
        ranges: this.ranges.map((t) => t.toJSON()),
        main: this.mainIndex
      };
    }
    static fromJSON(t) {
      if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length)
        throw new RangeError("Invalid JSON representation for EditorSelection");
      return new b(t.ranges.map((e) => Ne.fromJSON(e)), t.main);
    }
    static single(t, e = t) {
      return new b([
        b.range(t, e)
      ], 0);
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
      return Ne.create(t, t, (e == 0 ? 0 : e < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (s ?? 16777215) << 6);
    }
    static range(t, e, i, s) {
      let r = (i ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
      return e < t ? Ne.create(e, t, 48 | r) : Ne.create(t, e, (e > t ? 8 : 0) | r);
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
  function Oa(n, t) {
    for (let e of n.ranges)
      if (e.to > t)
        throw new RangeError("Selection points outside of document");
  }
  let Zr = 0;
  class T {
    constructor(t, e, i, s, r) {
      this.combine = t, this.compareInput = e, this.compare = i, this.isStatic = s, this.id = Zr++, this.default = t([]), this.extensions = typeof r == "function" ? r(this) : r;
    }
    get reader() {
      return this;
    }
    static define(t = {}) {
      return new T(t.combine || ((e) => e), t.compareInput || ((e, i) => e === i), t.compare || (t.combine ? (e, i) => e === i : to), !!t.static, t.enables);
    }
    of(t) {
      return new In([], this, 0, t);
    }
    compute(t, e) {
      if (this.isStatic)
        throw new Error("Can't compute a static facet");
      return new In(t, this, 1, e);
    }
    computeN(t, e) {
      if (this.isStatic)
        throw new Error("Can't compute a static facet");
      return new In(t, this, 2, e);
    }
    from(t, e) {
      return e || (e = (i) => i), this.compute([
        t
      ], (i) => e(i.field(t)));
    }
  }
  function to(n, t) {
    return n == t || n.length == t.length && n.every((e, i) => e === t[i]);
  }
  class In {
    constructor(t, e, i, s) {
      this.dependencies = t, this.facet = e, this.type = i, this.value = s, this.id = Zr++;
    }
    dynamicSlot(t) {
      var e;
      let i = this.value, s = this.facet.compareInput, r = this.id, o = t[r] >> 1, l = this.type == 2, a = false, h = false, c = [];
      for (let f of this.dependencies)
        f == "doc" ? a = true : f == "selection" ? h = true : ((e = t[f.id]) !== null && e !== void 0 ? e : 1) & 1 || c.push(t[f.id]);
      return {
        create(f) {
          return f.values[o] = i(f), 1;
        },
        update(f, u) {
          if (a && u.docChanged || h && (u.docChanged || u.selection) || lr(f, c)) {
            let d = i(f);
            if (l ? !Fo(d, f.values[o], s) : !s(d, f.values[o]))
              return f.values[o] = d, 1;
          }
          return 0;
        },
        reconfigure: (f, u) => {
          let d, p = u.config.address[r];
          if (p != null) {
            let g = Un(u, p);
            if (this.dependencies.every((m) => m instanceof T ? u.facet(m) === f.facet(m) : m instanceof ct ? u.field(m, false) == f.field(m, false) : true) || (l ? Fo(d = i(f), g, s) : s(d = i(f), g)))
              return f.values[o] = g, 0;
          } else
            d = i(f);
          return f.values[o] = d, 1;
        }
      };
    }
  }
  function Fo(n, t, e) {
    if (n.length != t.length)
      return false;
    for (let i = 0; i < n.length; i++)
      if (!e(n[i], t[i]))
        return false;
    return true;
  }
  function lr(n, t) {
    let e = false;
    for (let i of t)
      Ri(n, i) & 1 && (e = true);
    return e;
  }
  function Ef(n, t, e) {
    let i = e.map((a) => n[a.id]), s = e.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = n[t.id] >> 1;
    function l(a) {
      let h = [];
      for (let c = 0; c < i.length; c++) {
        let f = Un(a, i[c]);
        if (s[c] == 2)
          for (let u of f)
            h.push(u);
        else
          h.push(f);
      }
      return t.combine(h);
    }
    return {
      create(a) {
        for (let h of i)
          Ri(a, h);
        return a.values[o] = l(a), 1;
      },
      update(a, h) {
        if (!lr(a, r))
          return 0;
        let c = l(a);
        return t.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
      },
      reconfigure(a, h) {
        let c = lr(a, i), f = h.config.facets[t.id], u = h.facet(t);
        if (f && !c && to(e, f))
          return a.values[o] = u, 0;
        let d = l(a);
        return t.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
      }
    };
  }
  const hn = T.define({
    static: true
  });
  ct = class {
    constructor(t, e, i, s, r) {
      this.id = t, this.createF = e, this.updateF = i, this.compareF = s, this.spec = r, this.provides = void 0;
    }
    static define(t) {
      let e = new ct(Zr++, t.create, t.update, t.compare || ((i, s) => i === s), t);
      return t.provide && (e.provides = t.provide(e)), e;
    }
    create(t) {
      let e = t.facet(hn).find((i) => i.field == this);
      return ((e == null ? void 0 : e.create) || this.createF)(t);
    }
    slot(t) {
      let e = t[this.id] >> 1;
      return {
        create: (i) => (i.values[e] = this.create(i), 1),
        update: (i, s) => {
          let r = i.values[e], o = this.updateF(r, s);
          return this.compareF(r, o) ? 0 : (i.values[e] = o, 1);
        },
        reconfigure: (i, s) => {
          let r = i.facet(hn), o = s.facet(hn), l;
          return (l = r.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (i.values[e] = l.create(i), 1) : s.config.address[this.id] != null ? (i.values[e] = s.field(this), 0) : (i.values[e] = this.create(i), 1);
        }
      };
    }
    init(t) {
      return [
        this,
        hn.of({
          field: this,
          create: t
        })
      ];
    }
    get extension() {
      return this;
    }
  };
  const Le = {
    lowest: 4,
    low: 3,
    default: 2,
    high: 1,
    highest: 0
  };
  function xi(n) {
    return (t) => new Ta(t, n);
  }
  const Ke = {
    highest: xi(Le.highest),
    high: xi(Le.high),
    default: xi(Le.default),
    low: xi(Le.low),
    lowest: xi(Le.lowest)
  };
  class Ta {
    constructor(t, e) {
      this.inner = t, this.prec = e;
    }
  }
  class Zi {
    of(t) {
      return new ar(this, t);
    }
    reconfigure(t) {
      return Zi.reconfigure.of({
        compartment: this,
        extension: t
      });
    }
    get(t) {
      return t.config.compartments.get(this);
    }
  }
  class ar {
    constructor(t, e) {
      this.compartment = t, this.inner = e;
    }
  }
  class Kn {
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
      for (let u of Rf(t, e, o))
        u instanceof ct ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
      let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
      for (let u of s)
        l[u.id] = h.length << 1, h.push((d) => u.slot(d));
      let c = i == null ? void 0 : i.config.facets;
      for (let u in r) {
        let d = r[u], p = d[0].facet, g = c && c[u] || [];
        if (d.every((m) => m.type == 0))
          if (l[p.id] = a.length << 1 | 1, to(g, d))
            a.push(i.facet(p));
          else {
            let m = p.combine(d.map((y) => y.value));
            a.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
          }
        else {
          for (let m of d)
            m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = h.length << 1, h.push((y) => m.dynamicSlot(y)));
          l[p.id] = h.length << 1, h.push((m) => Ef(m, p, d));
        }
      }
      let f = h.map((u) => u(l));
      return new Kn(t, o, f, l, a, r);
    }
  }
  function Rf(n, t, e) {
    let i = [
      [],
      [],
      [],
      [],
      []
    ], s = /* @__PURE__ */ new Map();
    function r(o, l) {
      let a = s.get(o);
      if (a != null) {
        if (a <= l)
          return;
        let h = i[a].indexOf(o);
        h > -1 && i[a].splice(h, 1), o instanceof ar && e.delete(o.compartment);
      }
      if (s.set(o, l), Array.isArray(o))
        for (let h of o)
          r(h, l);
      else if (o instanceof ar) {
        if (e.has(o.compartment))
          throw new RangeError("Duplicate use of compartment in extensions");
        let h = t.get(o.compartment) || o.inner;
        e.set(o.compartment, h), r(h, l);
      } else if (o instanceof Ta)
        r(o.inner, o.prec);
      else if (o instanceof ct)
        i[l].push(o), o.provides && r(o.provides, l);
      else if (o instanceof In)
        i[l].push(o), o.facet.extensions && r(o.facet.extensions, Le.default);
      else {
        let h = o.extension;
        if (!h)
          throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
        r(h, l);
      }
    }
    return r(n, Le.default), i.reduce((o, l) => o.concat(l));
  }
  function Ri(n, t) {
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
  function Un(n, t) {
    return t & 1 ? n.config.staticValues[t >> 1] : n.values[t >> 1];
  }
  const Ba = T.define(), hr = T.define({
    combine: (n) => n.some((t) => t),
    static: true
  }), Ea = T.define({
    combine: (n) => n.length ? n[0] : void 0,
    static: true
  }), Ra = T.define(), La = T.define(), Pa = T.define(), _a = T.define({
    combine: (n) => n.length ? n[0] : false
  });
  class pe {
    constructor(t, e) {
      this.type = t, this.value = e;
    }
    static define() {
      return new Lf();
    }
  }
  class Lf {
    of(t) {
      return new pe(this, t);
    }
  }
  class Pf {
    constructor(t) {
      this.map = t;
    }
    of(t) {
      return new L(this, t);
    }
  }
  L = class {
    constructor(t, e) {
      this.type = t, this.value = e;
    }
    map(t) {
      let e = this.type.map(this.value, t);
      return e === void 0 ? void 0 : e == this.value ? this : new L(this.type, e);
    }
    is(t) {
      return this.type == t;
    }
    static define(t = {}) {
      return new Pf(t.map || ((e) => e));
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
  };
  L.reconfigure = L.define();
  L.appendConfig = L.define();
  class it {
    constructor(t, e, i, s, r, o) {
      this.startState = t, this.changes = e, this.selection = i, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && Oa(i, e.newLength), r.some((l) => l.type == it.time) || (this.annotations = r.concat(it.time.of(Date.now())));
    }
    static create(t, e, i, s, r, o) {
      return new it(t, e, i, s, r, o);
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
      let e = this.annotation(it.userEvent);
      return !!(e && (e == t || e.length > t.length && e.slice(0, t.length) == t && e[t.length] == "."));
    }
  }
  it.time = pe.define();
  it.userEvent = pe.define();
  it.addToHistory = pe.define();
  it.remote = pe.define();
  function _f(n, t) {
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
  function Ia(n, t, e) {
    var i;
    let s, r, o;
    return e ? (s = t.changes, r = et.empty(t.changes.length), o = n.changes.compose(t.changes)) : (s = t.changes.map(n.changes), r = n.changes.mapDesc(t.changes, true), o = n.changes.compose(s)), {
      changes: o,
      selection: t.selection ? t.selection.map(r) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(s),
      effects: L.mapEffects(n.effects, s).concat(L.mapEffects(t.effects, r)),
      annotations: n.annotations.length ? n.annotations.concat(t.annotations) : t.annotations,
      scrollIntoView: n.scrollIntoView || t.scrollIntoView
    };
  }
  function cr(n, t, e) {
    let i = t.selection, s = ni(t.annotations);
    return t.userEvent && (s = s.concat(it.userEvent.of(t.userEvent))), {
      changes: t.changes instanceof et ? t.changes : et.of(t.changes || [], e, n.facet(Ea)),
      selection: i && (i instanceof b ? i : b.single(i.anchor, i.head)),
      effects: ni(t.effects),
      annotations: s,
      scrollIntoView: !!t.scrollIntoView
    };
  }
  function Na(n, t, e) {
    let i = cr(n, t.length ? t[0] : {}, n.doc.length);
    t.length && t[0].filter === false && (e = false);
    for (let r = 1; r < t.length; r++) {
      t[r].filter === false && (e = false);
      let o = !!t[r].sequential;
      i = Ia(i, cr(n, t[r], o ? i.changes.newLength : n.doc.length), o);
    }
    let s = it.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
    return Nf(e ? If(s) : s);
  }
  function If(n) {
    let t = n.startState, e = true;
    for (let s of t.facet(Ra)) {
      let r = s(n);
      if (r === false) {
        e = false;
        break;
      }
      Array.isArray(r) && (e = e === true ? r : _f(e, r));
    }
    if (e !== true) {
      let s, r;
      if (e === false)
        r = n.changes.invertedDesc, s = et.empty(t.doc.length);
      else {
        let o = n.changes.filter(e);
        s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
      }
      n = it.create(t, s, n.selection && n.selection.map(r), L.mapEffects(n.effects, r), n.annotations, n.scrollIntoView);
    }
    let i = t.facet(La);
    for (let s = i.length - 1; s >= 0; s--) {
      let r = i[s](n);
      r instanceof it ? n = r : Array.isArray(r) && r.length == 1 && r[0] instanceof it ? n = r[0] : n = Na(t, ni(r), false);
    }
    return n;
  }
  function Nf(n) {
    let t = n.startState, e = t.facet(Pa), i = n;
    for (let s = e.length - 1; s >= 0; s--) {
      let r = e[s](n);
      r && Object.keys(r).length && (i = Ia(i, cr(t, r, n.changes.newLength), true));
    }
    return i == n ? n : it.create(t, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
  }
  const Ff = [];
  function ni(n) {
    return n == null ? Ff : Array.isArray(n) ? n : [
      n
    ];
  }
  var J = function(n) {
    return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
  }(J || (J = {}));
  const Hf = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  let fr;
  try {
    fr = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
  } catch {
  }
  function Wf(n) {
    if (fr)
      return fr.test(n);
    for (let t = 0; t < n.length; t++) {
      let e = n[t];
      if (/\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || Hf.test(e)))
        return true;
    }
    return false;
  }
  function Vf(n) {
    return (t) => {
      if (!/\S/.test(t))
        return J.Space;
      if (Wf(t))
        return J.Word;
      for (let e = 0; e < n.length; e++)
        if (t.indexOf(n[e]) > -1)
          return J.Word;
      return J.Other;
    };
  }
  class I {
    constructor(t, e, i, s, r, o) {
      this.config = t, this.doc = e, this.selection = i, this.values = s, this.status = t.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
      for (let l = 0; l < this.config.dynamicSlots.length; l++)
        Ri(this, l << 1);
      this.computeSlot = null;
    }
    field(t, e = true) {
      let i = this.config.address[t.id];
      if (i == null) {
        if (e)
          throw new RangeError("Field is not present in this state");
        return;
      }
      return Ri(this, i), Un(this, i);
    }
    update(...t) {
      return Na(this, t, true);
    }
    applyTransaction(t) {
      let e = this.config, { base: i, compartments: s } = e;
      for (let l of t.effects)
        l.is(Zi.reconfigure) ? (e && (s = /* @__PURE__ */ new Map(), e.compartments.forEach((a, h) => s.set(h, a)), e = null), s.set(l.value.compartment, l.value.extension)) : l.is(L.reconfigure) ? (e = null, i = l.value) : l.is(L.appendConfig) && (e = null, i = ni(i).concat(l.value));
      let r;
      e ? r = t.startState.values.slice() : (e = Kn.resolve(i, s, this), r = new I(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
      let o = t.startState.facet(hr) ? t.newSelection : t.newSelection.asSingle();
      new I(e, t.newDoc, o, r, (l, a) => a.update(l, t), t);
    }
    replaceSelection(t) {
      return typeof t == "string" && (t = this.toText(t)), this.changeByRange((e) => ({
        changes: {
          from: e.from,
          to: e.to,
          insert: t
        },
        range: b.cursor(e.from + t.length)
      }));
    }
    changeByRange(t) {
      let e = this.selection, i = t(e.ranges[0]), s = this.changes(i.changes), r = [
        i.range
      ], o = ni(i.effects);
      for (let l = 1; l < e.ranges.length; l++) {
        let a = t(e.ranges[l]), h = this.changes(a.changes), c = h.map(s);
        for (let u = 0; u < l; u++)
          r[u] = r[u].map(c);
        let f = s.mapDesc(h, true);
        r.push(a.range.map(f)), s = s.compose(c), o = L.mapEffects(o, c).concat(L.mapEffects(ni(a.effects), f));
      }
      return {
        changes: s,
        selection: b.create(r, e.mainIndex),
        effects: o
      };
    }
    changes(t = []) {
      return t instanceof et ? t : et.of(t, this.doc.length, this.facet(I.lineSeparator));
    }
    toText(t) {
      return W.of(t.split(this.facet(I.lineSeparator) || sr));
    }
    sliceDoc(t = 0, e = this.doc.length) {
      return this.doc.sliceString(t, e, this.lineBreak);
    }
    facet(t) {
      let e = this.config.address[t.id];
      return e == null ? t.default : (Ri(this, e), Un(this, e));
    }
    toJSON(t) {
      let e = {
        doc: this.sliceDoc(),
        selection: this.selection.toJSON()
      };
      if (t)
        for (let i in t) {
          let s = t[i];
          s instanceof ct && this.config.address[s.id] != null && (e[i] = s.spec.toJSON(this.field(t[i]), this));
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
      return I.create({
        doc: t.doc,
        selection: b.fromJSON(t.selection),
        extensions: e.extensions ? s.concat([
          e.extensions
        ]) : s
      });
    }
    static create(t = {}) {
      let e = Kn.resolve(t.extensions || [], /* @__PURE__ */ new Map()), i = t.doc instanceof W ? t.doc : W.of((t.doc || "").split(e.staticFacet(I.lineSeparator) || sr)), s = t.selection ? t.selection instanceof b ? t.selection : b.single(t.selection.anchor, t.selection.head) : b.single(0);
      return Oa(s, i.length), e.staticFacet(hr) || (s = s.asSingle()), new I(e, i, s, e.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
    }
    get tabSize() {
      return this.facet(I.tabSize);
    }
    get lineBreak() {
      return this.facet(I.lineSeparator) || `
`;
    }
    get readOnly() {
      return this.facet(_a);
    }
    phrase(t, ...e) {
      for (let i of this.facet(I.phrases))
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
      for (let r of this.facet(Ba))
        for (let o of r(this, e, i))
          Object.prototype.hasOwnProperty.call(o, t) && s.push(o[t]);
      return s;
    }
    charCategorizer(t) {
      return Vf(this.languageDataAt("wordChars", t).join(""));
    }
    wordAt(t) {
      let { text: e, from: i, length: s } = this.doc.lineAt(t), r = this.charCategorizer(t), o = t - i, l = t - i;
      for (; o > 0; ) {
        let a = ht(e, o, false);
        if (r(e.slice(a, o)) != J.Word)
          break;
        o = a;
      }
      for (; l < s; ) {
        let a = ht(e, l);
        if (r(e.slice(l, a)) != J.Word)
          break;
        l = a;
      }
      return o == l ? null : b.range(o + i, l + i);
    }
  }
  I.allowMultipleSelections = hr;
  I.tabSize = T.define({
    combine: (n) => n.length ? n[0] : 4
  });
  I.lineSeparator = Ea;
  I.readOnly = _a;
  I.phrases = T.define({
    compare(n, t) {
      let e = Object.keys(n), i = Object.keys(t);
      return e.length == i.length && e.every((s) => n[s] == t[s]);
    }
  });
  I.languageData = Ba;
  I.changeFilter = Ra;
  I.transactionFilter = La;
  I.transactionExtender = Pa;
  Zi.reconfigure = L.define();
  function re(n, t, e = {}) {
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
  class Ve {
    eq(t) {
      return this == t;
    }
    range(t, e = t) {
      return ur.create(t, e, this);
    }
  }
  Ve.prototype.startSide = Ve.prototype.endSide = 0;
  Ve.prototype.point = false;
  Ve.prototype.mapMode = bt.TrackDel;
  let ur = class Fa {
    constructor(t, e, i) {
      this.from = t, this.to = e, this.value = i;
    }
    static create(t, e, i) {
      return new Fa(t, e, i);
    }
  };
  function dr(n, t) {
    return n.from - t.from || n.value.startSide - t.value.startSide;
  }
  class eo {
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
      return {
        mapped: i.length ? new eo(s, r, i, l) : null,
        pos: o
      };
    }
  }
  class H {
    constructor(t, e, i, s) {
      this.chunkPos = t, this.chunk = e, this.nextLayer = i, this.maxPoint = s;
    }
    static create(t, e, i, s) {
      return new H(t, e, i, s);
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
      if (i && (e = e.slice().sort(dr)), this.isEmpty)
        return e.length ? H.of(e) : this;
      let l = new Ha(this, null, -1).goto(0), a = 0, h = [], c = new fe();
      for (; l.value || a < e.length; )
        if (a < e.length && (l.from - e[a].from || l.startSide - e[a].value.startSide) >= 0) {
          let f = e[a++];
          c.addInner(f.from, f.to, f.value) || h.push(f);
        } else
          l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == e.length || this.chunkEnd(l.chunkIndex) < e[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(ur.create(l.from, l.to, l.value))), l.next());
      return c.finishInner(this.nextLayer.isEmpty && !h.length ? H.empty : this.nextLayer.update({
        add: h,
        filter: o,
        filterFrom: s,
        filterTo: r
      }));
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
      return e.length == 0 ? r : new H(i, e, r || H.empty, s);
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
      return Hi.from([
        this
      ]).goto(t);
    }
    get isEmpty() {
      return this.nextLayer == this;
    }
    static iter(t, e = 0) {
      return Hi.from(t).goto(e);
    }
    static compare(t, e, i, s, r = -1) {
      let o = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = Ho(o, l, i), h = new vi(o, a, r), c = new vi(l, a, r);
      i.iterGaps((f, u, d) => Wo(h, f, c, u, d, s)), i.empty && i.length == 0 && Wo(h, 0, c, 0, 0, s);
    }
    static eq(t, e, i = 0, s) {
      s == null && (s = 1e9 - 1);
      let r = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0), o = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0);
      if (r.length != o.length)
        return false;
      if (!r.length)
        return true;
      let l = Ho(r, o), a = new vi(r, l, 0).goto(i), h = new vi(o, l, 0).goto(i);
      for (; ; ) {
        if (a.to != h.to || !pr(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
          return false;
        if (a.to > s)
          return true;
        a.next(), h.next();
      }
    }
    static spans(t, e, i, s, r = -1) {
      let o = new vi(t, null, r).goto(e), l = e, a = o.openStart;
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
      let i = new fe();
      for (let s of t instanceof ur ? [
        t
      ] : e ? zf(t) : t)
        i.add(s.from, s.to, s.value);
      return i.finish();
    }
    static join(t) {
      if (!t.length)
        return H.empty;
      let e = t[t.length - 1];
      for (let i = t.length - 2; i >= 0; i--)
        for (let s = t[i]; s != H.empty; s = s.nextLayer)
          e = new H(s.chunkPos, s.chunk, e, Math.max(s.maxPoint, e.maxPoint));
      return e;
    }
  }
  H.empty = new H([], [], null, -1);
  function zf(n) {
    if (n.length > 1)
      for (let t = n[0], e = 1; e < n.length; e++) {
        let i = n[e];
        if (dr(t, i) > 0)
          return n.slice().sort(dr);
        t = i;
      }
    return n;
  }
  H.empty.nextLayer = H.empty;
  class fe {
    finishChunk(t) {
      this.chunks.push(new eo(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
    }
    constructor() {
      this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
    }
    add(t, e, i) {
      this.addInner(t, e, i) || (this.nextLayer || (this.nextLayer = new fe())).add(t, e, i);
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
      return this.finishInner(H.empty);
    }
    finishInner(t) {
      if (this.from.length && this.finishChunk(false), this.chunks.length == 0)
        return t;
      let e = H.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
      return this.from = null, e;
    }
  }
  function Ho(n, t, e) {
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
  class Ha {
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
  class Hi {
    constructor(t) {
      this.heap = t;
    }
    static from(t, e = null, i = -1) {
      let s = [];
      for (let r = 0; r < t.length; r++)
        for (let o = t[r]; !o.isEmpty; o = o.nextLayer)
          o.maxPoint >= i && s.push(new Ha(o, e, i, r));
      return s.length == 1 ? s[0] : new Hi(s);
    }
    get startSide() {
      return this.value ? this.value.startSide : 0;
    }
    goto(t, e = -1e9) {
      for (let i of this.heap)
        i.goto(t, e);
      for (let i = this.heap.length >> 1; i >= 0; i--)
        Rs(this.heap, i);
      return this.next(), this;
    }
    forward(t, e) {
      for (let i of this.heap)
        i.forward(t, e);
      for (let i = this.heap.length >> 1; i >= 0; i--)
        Rs(this.heap, i);
      (this.to - t || this.value.endSide - e) < 0 && this.next();
    }
    next() {
      if (this.heap.length == 0)
        this.from = this.to = 1e9, this.value = null, this.rank = -1;
      else {
        let t = this.heap[0];
        this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), Rs(this.heap, 0);
      }
    }
  }
  function Rs(n, t) {
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
  class vi {
    constructor(t, e, i) {
      this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Hi.from(t, e, i);
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
      cn(this.active, t), cn(this.activeTo, t), cn(this.activeRank, t), this.minActive = Vo(this.active, this.activeTo);
    }
    addActive(t) {
      let e = 0, { value: i, to: s, rank: r } = this.cursor;
      for (; e < this.activeRank.length && (r - this.activeRank[e] || s - this.activeTo[e]) > 0; )
        e++;
      fn(this.active, e, i), fn(this.activeTo, e, s), fn(this.activeRank, e, r), t && fn(t, e, this.cursor.from), this.minActive = Vo(this.active, this.activeTo);
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
          this.removeActive(s), i && cn(i, s);
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
  function Wo(n, t, e, i, s, r) {
    n.goto(t), e.goto(i);
    let o = i + s, l = i, a = i - t;
    for (; ; ) {
      let h = n.to + a - e.to, c = h || n.endSide - e.endSide, f = c < 0 ? n.to + a : e.to, u = Math.min(f, o);
      if (n.point || e.point ? n.point && e.point && (n.point == e.point || n.point.eq(e.point)) && pr(n.activeForPoint(n.to), e.activeForPoint(e.to)) || r.comparePoint(l, u, n.point, e.point) : u > l && !pr(n.active, e.active) && r.compareRange(l, u, n.active, e.active), f > o)
        break;
      (h || n.openEnd != e.openEnd) && r.boundChange && r.boundChange(f), l = f, c <= 0 && n.next(), c >= 0 && e.next();
    }
  }
  function pr(n, t) {
    if (n.length != t.length)
      return false;
    for (let e = 0; e < n.length; e++)
      if (n[e] != t[e] && !n[e].eq(t[e]))
        return false;
    return true;
  }
  function cn(n, t) {
    for (let e = t, i = n.length - 1; e < i; e++)
      n[e] = n[e + 1];
    n.pop();
  }
  function fn(n, t, e) {
    for (let i = n.length - 1; i >= t; i--)
      n[i + 1] = n[i];
    n[t] = e;
  }
  function Vo(n, t) {
    let e = -1, i = 1e9;
    for (let s = 0; s < t.length; s++)
      (t[s] - i || n[s].endSide - n[e].endSide) < 0 && (e = s, i = t[s]);
    return e;
  }
  function yi(n, t, e = n.length) {
    let i = 0;
    for (let s = 0; s < e && s < n.length; )
      n.charCodeAt(s) == 9 ? (i += t - i % t, s++) : (i++, s = ht(n, s));
    return i;
  }
  function gr(n, t, e, i) {
    for (let s = 0, r = 0; ; ) {
      if (r >= t)
        return s;
      if (s == n.length)
        break;
      r += n.charCodeAt(s) == 9 ? e - r % e : 1, s = ht(n, s);
    }
    return i === true ? -1 : n.length;
  }
  const mr = "\u037C", zo = typeof Symbol > "u" ? "__" + mr : Symbol.for(mr), yr = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), qo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
  class Ae {
    constructor(t, e) {
      this.rules = [];
      let { finish: i } = e || {};
      function s(o) {
        return /^@/.test(o) ? [
          o
        ] : o.split(/,\s*/);
      }
      function r(o, l, a, h) {
        let c = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
        if (f && l == null)
          return a.push(o[0] + ";");
        for (let d in l) {
          let p = l[d];
          if (/&/.test(d))
            r(d.split(/,\s*/).map((g) => o.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)), p, a);
          else if (p && typeof p == "object") {
            if (!f)
              throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
            r(s(d), p, c, u);
          } else
            p != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
        }
        (c.length || u) && a.push((i && !f && !h ? o.map(i) : o).join(", ") + " {" + c.join(" ") + "}");
      }
      for (let o in t)
        r(s(o), t[o], this.rules);
    }
    getRules() {
      return this.rules.join(`
`);
    }
    static newName() {
      let t = qo[zo] || 1;
      return qo[zo] = t + 1, mr + t.toString(36);
    }
    static mount(t, e, i) {
      let s = t[yr], r = i && i.nonce;
      s ? r && s.setNonce(r) : s = new qf(t, r), s.mount(Array.isArray(e) ? e : [
        e
      ], t);
    }
  }
  let $o = /* @__PURE__ */ new Map();
  class qf {
    constructor(t, e) {
      let i = t.ownerDocument || t, s = i.defaultView;
      if (!t.head && t.adoptedStyleSheets && s.CSSStyleSheet) {
        let r = $o.get(i);
        if (r)
          return t[yr] = r;
        this.sheet = new s.CSSStyleSheet(), $o.set(i, this);
      } else
        this.styleTag = i.createElement("style"), e && this.styleTag.setAttribute("nonce", e);
      this.modules = [], t[yr] = this;
    }
    mount(t, e) {
      let i = this.sheet, s = 0, r = 0;
      for (let o = 0; o < t.length; o++) {
        let l = t[o], a = this.modules.indexOf(l);
        if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
          if (this.modules.splice(r++, 0, l), i)
            for (let h = 0; h < l.rules.length; h++)
              i.insertRule(l.rules[h], s++);
        } else {
          for (; r < a; )
            s += this.modules[r++].rules.length;
          s += l.rules.length, r++;
        }
      }
      if (i)
        e.adoptedStyleSheets.indexOf(this.sheet) < 0 && (e.adoptedStyleSheets = [
          this.sheet,
          ...e.adoptedStyleSheets
        ]);
      else {
        let o = "";
        for (let a = 0; a < this.modules.length; a++)
          o += this.modules[a].getRules() + `
`;
        this.styleTag.textContent = o;
        let l = e.head || e;
        this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
      }
    }
    setNonce(t) {
      this.styleTag && this.styleTag.getAttribute("nonce") != t && this.styleTag.setAttribute("nonce", t);
    }
  }
  var Me = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  }, Wi = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"'
  }, $f = typeof navigator < "u" && /Mac/.test(navigator.platform), jf = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
  for (var lt = 0; lt < 10; lt++)
    Me[48 + lt] = Me[96 + lt] = String(lt);
  for (var lt = 1; lt <= 24; lt++)
    Me[lt + 111] = "F" + lt;
  for (var lt = 65; lt <= 90; lt++)
    Me[lt] = String.fromCharCode(lt + 32), Wi[lt] = String.fromCharCode(lt);
  for (var Ls in Me)
    Wi.hasOwnProperty(Ls) || (Wi[Ls] = Me[Ls]);
  function Kf(n) {
    var t = $f && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || jf && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", e = !t && n.key || (n.shiftKey ? Wi : Me)[n.keyCode] || n.key || "Unidentified";
    return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
  }
  function $() {
    var n = arguments[0];
    typeof n == "string" && (n = document.createElement(n));
    var t = 1, e = arguments[1];
    if (e && typeof e == "object" && e.nodeType == null && !Array.isArray(e)) {
      for (var i in e)
        if (Object.prototype.hasOwnProperty.call(e, i)) {
          var s = e[i];
          typeof s == "string" ? n.setAttribute(i, s) : s != null && (n[i] = s);
        }
      t++;
    }
    for (; t < arguments.length; t++)
      Wa(n, arguments[t]);
    return n;
  }
  function Wa(n, t) {
    if (typeof t == "string")
      n.appendChild(document.createTextNode(t));
    else if (t != null)
      if (t.nodeType != null)
        n.appendChild(t);
      else if (Array.isArray(t))
        for (var e = 0; e < t.length; e++)
          Wa(n, t[e]);
      else
        throw new RangeError("Unsupported child node: " + t);
  }
  function Vi(n) {
    let t;
    return n.nodeType == 11 ? t = n.getSelection ? n : n.ownerDocument : t = n, t.getSelection();
  }
  function br(n, t) {
    return t ? n == t || n.contains(t.nodeType != 1 ? t.parentNode : t) : false;
  }
  function Nn(n, t) {
    if (!t.anchorNode)
      return false;
    try {
      return br(n, t.anchorNode);
    } catch {
      return false;
    }
  }
  function ci(n) {
    return n.nodeType == 3 ? qe(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
  }
  function Li(n, t, e, i) {
    return e ? jo(n, t, e, i, -1) || jo(n, t, e, i, 1) : false;
  }
  function ze(n) {
    for (var t = 0; ; t++)
      if (n = n.previousSibling, !n)
        return t;
  }
  function Gn(n) {
    return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
  }
  function jo(n, t, e, i, s) {
    for (; ; ) {
      if (n == e && t == i)
        return true;
      if (t == (s < 0 ? 0 : se(n))) {
        if (n.nodeName == "DIV")
          return false;
        let r = n.parentNode;
        if (!r || r.nodeType != 1)
          return false;
        t = ze(n) + (s < 0 ? 0 : 1), n = r;
      } else if (n.nodeType == 1) {
        if (n = n.childNodes[t + (s < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false")
          return false;
        t = s < 0 ? se(n) : 0;
      } else
        return false;
    }
  }
  function se(n) {
    return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
  }
  function tn(n, t) {
    let e = t ? n.left : n.right;
    return {
      left: e,
      right: e,
      top: n.top,
      bottom: n.bottom
    };
  }
  function Uf(n) {
    let t = n.visualViewport;
    return t ? {
      left: 0,
      right: t.width,
      top: 0,
      bottom: t.height
    } : {
      left: 0,
      right: n.innerWidth,
      top: 0,
      bottom: n.innerHeight
    };
  }
  function Va(n, t) {
    let e = t.width / n.offsetWidth, i = t.height / n.offsetHeight;
    return (e > 0.995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - n.offsetWidth) < 1) && (e = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(t.height - n.offsetHeight) < 1) && (i = 1), {
      scaleX: e,
      scaleY: i
    };
  }
  function Gf(n, t, e, i, s, r, o, l) {
    let a = n.ownerDocument, h = a.defaultView || window;
    for (let c = n, f = false; c && !f; )
      if (c.nodeType == 1) {
        let u, d = c == a.body, p = 1, g = 1;
        if (d)
          u = Uf(h);
        else {
          if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = true), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
            c = c.assignedSlot || c.parentNode;
            continue;
          }
          let w = c.getBoundingClientRect();
          ({ scaleX: p, scaleY: g } = Va(c, w)), u = {
            left: w.left,
            right: w.left + c.clientWidth * p,
            top: w.top,
            bottom: w.top + c.clientHeight * g
          };
        }
        let m = 0, y = 0;
        if (s == "nearest")
          t.top < u.top ? (y = t.top - (u.top + o), e > 0 && t.bottom > u.bottom + y && (y = t.bottom - u.bottom + o)) : t.bottom > u.bottom && (y = t.bottom - u.bottom + o, e < 0 && t.top - y < u.top && (y = t.top - (u.top + o)));
        else {
          let w = t.bottom - t.top, v = u.bottom - u.top;
          y = (s == "center" && w <= v ? t.top + w / 2 - v / 2 : s == "start" || s == "center" && e < 0 ? t.top - o : t.bottom - v + o) - u.top;
        }
        if (i == "nearest" ? t.left < u.left ? (m = t.left - (u.left + r), e > 0 && t.right > u.right + m && (m = t.right - u.right + r)) : t.right > u.right && (m = t.right - u.right + r, e < 0 && t.left < u.left + m && (m = t.left - (u.left + r))) : m = (i == "center" ? t.left + (t.right - t.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? t.left - r : t.right - (u.right - u.left) + r) - u.left, m || y)
          if (d)
            h.scrollBy(m, y);
          else {
            let w = 0, v = 0;
            if (y) {
              let S = c.scrollTop;
              c.scrollTop += y / g, v = (c.scrollTop - S) * g;
            }
            if (m) {
              let S = c.scrollLeft;
              c.scrollLeft += m / p, w = (c.scrollLeft - S) * p;
            }
            t = {
              left: t.left - w,
              top: t.top - v,
              right: t.right - w,
              bottom: t.bottom - v
            }, w && Math.abs(w - m) < 1 && (i = "nearest"), v && Math.abs(v - y) < 1 && (s = "nearest");
          }
        if (d)
          break;
        (t.top < u.top || t.bottom > u.bottom || t.left < u.left || t.right > u.right) && (t = {
          left: Math.max(t.left, u.left),
          right: Math.min(t.right, u.right),
          top: Math.max(t.top, u.top),
          bottom: Math.min(t.bottom, u.bottom)
        }), c = c.assignedSlot || c.parentNode;
      } else if (c.nodeType == 11)
        c = c.host;
      else
        break;
  }
  function Yf(n) {
    let t = n.ownerDocument, e, i;
    for (let s = n.parentNode; s && !(s == t.body || e && i); )
      if (s.nodeType == 1)
        !i && s.scrollHeight > s.clientHeight && (i = s), !e && s.scrollWidth > s.clientWidth && (e = s), s = s.assignedSlot || s.parentNode;
      else if (s.nodeType == 11)
        s = s.host;
      else
        break;
    return {
      x: e,
      y: i
    };
  }
  class Jf {
    constructor() {
      this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
    }
    eq(t) {
      return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
    }
    setRange(t) {
      let { anchorNode: e, focusNode: i } = t;
      this.set(e, Math.min(t.anchorOffset, e ? se(e) : 0), i, Math.min(t.focusOffset, i ? se(i) : 0));
    }
    set(t, e, i, s) {
      this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = s;
    }
  }
  let Ge = null;
  function za(n) {
    if (n.setActive)
      return n.setActive();
    if (Ge)
      return n.focus(Ge);
    let t = [];
    for (let e = n; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode)
      ;
    if (n.focus(Ge == null ? {
      get preventScroll() {
        return Ge = {
          preventScroll: true
        }, true;
      }
    } : void 0), !Ge) {
      Ge = false;
      for (let e = 0; e < t.length; ) {
        let i = t[e++], s = t[e++], r = t[e++];
        i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
      }
    }
  }
  let Ko;
  function qe(n, t, e = t) {
    let i = Ko || (Ko = document.createRange());
    return i.setEnd(n, e), i.setStart(n, t), i;
  }
  function si(n, t, e, i) {
    let s = {
      key: t,
      code: t,
      keyCode: e,
      which: e,
      cancelable: true
    };
    i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
    let r = new KeyboardEvent("keydown", s);
    r.synthetic = true, n.dispatchEvent(r);
    let o = new KeyboardEvent("keyup", s);
    return o.synthetic = true, n.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
  }
  function Xf(n) {
    for (; n; ) {
      if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host))
        return n;
      n = n.assignedSlot || n.parentNode;
    }
    return null;
  }
  function qa(n) {
    for (; n.attributes.length; )
      n.removeAttributeNode(n.attributes[0]);
  }
  function Qf(n, t) {
    let e = t.focusNode, i = t.focusOffset;
    if (!e || t.anchorNode != e || t.anchorOffset != i)
      return false;
    for (i = Math.min(i, se(e)); ; )
      if (i) {
        if (e.nodeType != 1)
          return false;
        let s = e.childNodes[i - 1];
        s.contentEditable == "false" ? i-- : (e = s, i = se(e));
      } else {
        if (e == n)
          return true;
        i = ze(e), e = e.parentNode;
      }
  }
  function $a(n) {
    return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
  }
  function ja(n, t) {
    for (let e = n, i = t; ; ) {
      if (e.nodeType == 3 && i > 0)
        return {
          node: e,
          offset: i
        };
      if (e.nodeType == 1 && i > 0) {
        if (e.contentEditable == "false")
          return null;
        e = e.childNodes[i - 1], i = se(e);
      } else if (e.parentNode && !Gn(e))
        i = ze(e), e = e.parentNode;
      else
        return null;
    }
  }
  function Ka(n, t) {
    for (let e = n, i = t; ; ) {
      if (e.nodeType == 3 && i < e.nodeValue.length)
        return {
          node: e,
          offset: i
        };
      if (e.nodeType == 1 && i < e.childNodes.length) {
        if (e.contentEditable == "false")
          return null;
        e = e.childNodes[i], i = 0;
      } else if (e.parentNode && !Gn(e))
        i = ze(e) + 1, e = e.parentNode;
      else
        return null;
    }
  }
  class ut {
    constructor(t, e, i = true) {
      this.node = t, this.offset = e, this.precise = i;
    }
    static before(t, e) {
      return new ut(t.parentNode, ze(t), e);
    }
    static after(t, e) {
      return new ut(t.parentNode, ze(t) + 1, e);
    }
  }
  const io = [];
  class K {
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
              let l = K.get(r);
              (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r);
            }
            o.sync(t, e), o.flags &= -8;
          }
          if (r = s ? s.nextSibling : i.firstChild, e && !e.written && e.node == i && r != o.dom && (e.written = true), o.dom.parentNode == i)
            for (; r && r != o.dom; )
              r = Uo(r);
          else
            i.insertBefore(o.dom, r);
          s = o.dom;
        }
        for (r = s ? s.nextSibling : i.firstChild, r && e && e.node == i && (e.written = true); r; )
          r = Uo(r);
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
        let s = se(t) == 0 ? 0 : e == 0 ? -1 : 1;
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
      for (; i && !K.get(i); )
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
      return {
        from: r,
        to: l < 0 ? i + this.length : l,
        startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
        endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
      };
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
    replaceChildren(t, e, i = io) {
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
      return new Ua(this.children, t, this.children.length);
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
  K.prototype.breakAfter = 0;
  function Uo(n) {
    let t = n.nextSibling;
    return n.parentNode.removeChild(n), t;
  }
  class Ua {
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
  function Ga(n, t, e, i, s, r, o, l, a) {
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
  function Ya(n, t, e, i, s, r) {
    let o = n.childCursor(), { i: l, off: a } = o.findPos(e, 1), { i: h, off: c } = o.findPos(t, -1), f = t - e;
    for (let u of i)
      f += u.length;
    n.length += f, Ga(n, h, c, l, a, i, 0, s, r);
  }
  let kt = typeof navigator < "u" ? navigator : {
    userAgent: "",
    vendor: "",
    platform: ""
  }, wr = typeof document < "u" ? document : {
    documentElement: {
      style: {}
    }
  };
  const xr = /Edge\/(\d+)/.exec(kt.userAgent), Ja = /MSIE \d/.test(kt.userAgent), vr = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(kt.userAgent), gs = !!(Ja || vr || xr), Go = !gs && /gecko\/(\d+)/i.test(kt.userAgent), Ps = !gs && /Chrome\/(\d+)/.exec(kt.userAgent), Yo = "webkitFontSmoothing" in wr.documentElement.style, Xa = !gs && /Apple Computer/.test(kt.vendor), Jo = Xa && (/Mobile\/\w+/.test(kt.userAgent) || kt.maxTouchPoints > 2);
  var O = {
    mac: Jo || /Mac/.test(kt.platform),
    windows: /Win/.test(kt.platform),
    linux: /Linux|X11/.test(kt.platform),
    ie: gs,
    ie_version: Ja ? wr.documentMode || 6 : vr ? +vr[1] : xr ? +xr[1] : 0,
    gecko: Go,
    gecko_version: Go ? +(/Firefox\/(\d+)/.exec(kt.userAgent) || [
      0,
      0
    ])[1] : 0,
    chrome: !!Ps,
    chrome_version: Ps ? +Ps[1] : 0,
    ios: Jo,
    android: /Android\b/.test(kt.userAgent),
    webkit: Yo,
    safari: Xa,
    webkit_version: Yo ? +(/\bAppleWebKit\/(\d+)/.exec(kt.userAgent) || [
      0,
      0
    ])[1] : 0,
    tabSize: wr.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
  };
  const Zf = 256;
  class Vt extends K {
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
      return this.flags & 8 || i && (!(i instanceof Vt) || this.length - (e - t) + i.length > Zf || i.flags & 8) ? false : (this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e), this.markDirty(), true);
    }
    split(t) {
      let e = new Vt(this.text.slice(t));
      return this.text = this.text.slice(0, t), this.markDirty(), e.flags |= this.flags & 8, e;
    }
    localPosFromDOM(t, e) {
      return t == this.dom ? e : e ? this.text.length : 0;
    }
    domAtPos(t) {
      return new ut(this.dom, t);
    }
    domBoundsAround(t, e, i) {
      return {
        from: i,
        to: i + this.length,
        startDOM: this.dom,
        endDOM: this.dom.nextSibling
      };
    }
    coordsAt(t, e) {
      return tu(this.dom, t, e);
    }
  }
  class ue extends K {
    constructor(t, e = [], i = 0) {
      super(), this.mark = t, this.children = e, this.length = i;
      for (let s of e)
        s.setParent(this);
    }
    setAttrs(t) {
      if (qa(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs)
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
      return i && (!(i instanceof ue && i.mark.eq(this.mark)) || t && r <= 0 || e < this.length && o <= 0) ? false : (Ya(this, t, e, i ? i.children.slice() : [], r - 1, o - 1), this.markDirty(), true);
    }
    split(t) {
      let e = [], i = 0, s = -1, r = 0;
      for (let l of this.children) {
        let a = i + l.length;
        a > t && e.push(i < t ? l.split(t - i) : l), s < 0 && i >= t && (s = r), i = a, r++;
      }
      let o = this.length - t;
      return this.length = t, s > -1 && (this.children.length = s, this.markDirty()), new ue(this.mark, e, o);
    }
    domAtPos(t) {
      return Qa(this, t);
    }
    coordsAt(t, e) {
      return th(this, t, e);
    }
  }
  function tu(n, t, e) {
    let i = n.nodeValue.length;
    t > i && (t = i);
    let s = t, r = t, o = 0;
    t == 0 && e < 0 || t == i && e >= 0 ? O.chrome || O.gecko || (t ? (s--, o = 1) : r < i && (r++, o = -1)) : e < 0 ? s-- : r < i && r++;
    let l = qe(n, s, r).getClientRects();
    if (!l.length)
      return null;
    let a = l[(o ? o < 0 : e >= 0) ? 0 : l.length - 1];
    return O.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? tn(a, o < 0) : a || null;
  }
  class ve extends K {
    static create(t, e, i) {
      return new ve(t, e, i);
    }
    constructor(t, e, i) {
      super(), this.widget = t, this.length = e, this.side = i, this.prevWidget = null;
    }
    split(t) {
      let e = ve.create(this.widget, this.length - t, this.side);
      return this.length -= t, e;
    }
    sync(t) {
      (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
    }
    getSide() {
      return this.side;
    }
    merge(t, e, i, s, r, o) {
      return i && (!(i instanceof ve) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? false : (this.length = t + (i ? i.length : 0) + (this.length - e), true);
    }
    become(t) {
      return t instanceof ve && t.side == this.side && this.widget.constructor == t.widget.constructor ? (this.widget.compare(t.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, true) : false;
    }
    ignoreMutation() {
      return true;
    }
    ignoreEvent(t) {
      return this.widget.ignoreEvent(t);
    }
    get overrideDOMText() {
      if (this.length == 0)
        return W.empty;
      let t = this;
      for (; t.parent; )
        t = t.parent;
      let { view: e } = t, i = e && e.state.doc, s = this.posAtStart;
      return i ? i.slice(s, s + this.length) : W.empty;
    }
    domAtPos(t) {
      return (this.length ? t == 0 : this.side > 0) ? ut.before(this.dom) : ut.after(this.dom, t == this.length);
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
      return tn(r, !o);
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
  class fi extends K {
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
      return t instanceof fi && t.side == this.side;
    }
    split() {
      return new fi(this.side);
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
      return this.side > 0 ? ut.before(this.dom) : ut.after(this.dom);
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
      return W.empty;
    }
    get isHidden() {
      return true;
    }
  }
  Vt.prototype.children = ve.prototype.children = fi.prototype.children = io;
  function Qa(n, t) {
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
    return new ut(e, 0);
  }
  function Za(n, t, e) {
    let i, { children: s } = n;
    e > 0 && t instanceof ue && s.length && (i = s[s.length - 1]) instanceof ue && i.mark.eq(t.mark) ? Za(i, t.children[0], e - 1) : (s.push(t), t.setParent(n)), n.length += t.length;
  }
  function th(n, t, e) {
    let i = null, s = -1, r = null, o = -1;
    function l(h, c) {
      for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
        let d = h.children[f], p = u + d.length;
        p >= c && (d.children.length ? l(d, c - u) : (!r || r.isHidden && (e > 0 || iu(r, d))) && (p > c || u == p && d.getSide() > 0) ? (r = d, o = c - u) : (u < c || u == p && d.getSide() < 0 && !d.isHidden) && (i = d, s = c - u)), u = p;
      }
    }
    l(n, t);
    let a = (e < 0 ? i : r) || i || r;
    return a ? a.coordsAt(Math.max(0, a == i ? s : o), e) : eu(n);
  }
  function eu(n) {
    let t = n.dom.lastChild;
    if (!t)
      return n.dom.getBoundingClientRect();
    let e = ci(t);
    return e[e.length - 1] || null;
  }
  function iu(n, t) {
    let e = n.coordsAt(0, 1), i = t.coordsAt(0, 1);
    return e && i && i.top < e.bottom;
  }
  function kr(n, t) {
    for (let e in n)
      e == "class" && t.class ? t.class += " " + n.class : e == "style" && t.style ? t.style += ";" + n.style : t[e] = n[e];
    return t;
  }
  const Xo = /* @__PURE__ */ Object.create(null);
  function Yn(n, t, e) {
    if (n == t)
      return true;
    n || (n = Xo), t || (t = Xo);
    let i = Object.keys(n), s = Object.keys(t);
    if (i.length - (e && i.indexOf(e) > -1 ? 1 : 0) != s.length - (e && s.indexOf(e) > -1 ? 1 : 0))
      return false;
    for (let r of i)
      if (r != e && (s.indexOf(r) == -1 || n[r] !== t[r]))
        return false;
    return true;
  }
  function Sr(n, t, e) {
    let i = false;
    if (t)
      for (let s in t)
        e && s in e || (i = true, s == "style" ? n.style.cssText = "" : n.removeAttribute(s));
    if (e)
      for (let s in e)
        t && t[s] == e[s] || (i = true, s == "style" ? n.style.cssText = e[s] : n.setAttribute(s, e[s]));
    return i;
  }
  function nu(n) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let e = 0; e < n.attributes.length; e++) {
      let i = n.attributes[e];
      t[i.name] = i.value;
    }
    return t;
  }
  ge = class {
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
  };
  var wt = function(n) {
    return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
  }(wt || (wt = {}));
  E = class extends Ve {
    constructor(t, e, i, s) {
      super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = s;
    }
    get heightRelevant() {
      return false;
    }
    static mark(t) {
      return new en(t);
    }
    static widget(t) {
      let e = Math.max(-1e4, Math.min(1e4, t.side || 0)), i = !!t.block;
      return e += i && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new De(t, e, e, i, t.widget || null, false);
    }
    static replace(t) {
      let e = !!t.block, i, s;
      if (t.isBlockGap)
        i = -5e8, s = 4e8;
      else {
        let { start: r, end: o } = eh(t, e);
        i = (r ? e ? -3e8 : -1 : 5e8) - 1, s = (o ? e ? 2e8 : 1 : -6e8) + 1;
      }
      return new De(t, i, s, e, t.widget || null, true);
    }
    static line(t) {
      return new nn(t);
    }
    static set(t, e = false) {
      return H.of(t, e);
    }
    hasHeight() {
      return this.widget ? this.widget.estimatedHeight > -1 : false;
    }
  };
  E.none = H.empty;
  class en extends E {
    constructor(t) {
      let { start: e, end: i } = eh(t);
      super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null;
    }
    eq(t) {
      var e, i;
      return this == t || t instanceof en && this.tagName == t.tagName && (this.class || ((e = this.attrs) === null || e === void 0 ? void 0 : e.class)) == (t.class || ((i = t.attrs) === null || i === void 0 ? void 0 : i.class)) && Yn(this.attrs, t.attrs, "class");
    }
    range(t, e = t) {
      if (t >= e)
        throw new RangeError("Mark decorations may not be empty");
      return super.range(t, e);
    }
  }
  en.prototype.point = false;
  class nn extends E {
    constructor(t) {
      super(-2e8, -2e8, null, t);
    }
    eq(t) {
      return t instanceof nn && this.spec.class == t.spec.class && Yn(this.spec.attributes, t.spec.attributes);
    }
    range(t, e = t) {
      if (e != t)
        throw new RangeError("Line decoration ranges must be zero-length");
      return super.range(t, e);
    }
  }
  nn.prototype.mapMode = bt.TrackBefore;
  nn.prototype.point = true;
  class De extends E {
    constructor(t, e, i, s, r, o) {
      super(e, i, r, t), this.block = s, this.isReplace = o, this.mapMode = s ? e <= 0 ? bt.TrackBefore : bt.TrackAfter : bt.TrackDel;
    }
    get type() {
      return this.startSide != this.endSide ? wt.WidgetRange : this.startSide <= 0 ? wt.WidgetBefore : wt.WidgetAfter;
    }
    get heightRelevant() {
      return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
    }
    eq(t) {
      return t instanceof De && su(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
    }
    range(t, e = t) {
      if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0))
        throw new RangeError("Invalid range for replacement decoration");
      if (!this.isReplace && e != t)
        throw new RangeError("Widget decorations can only have zero-length ranges");
      return super.range(t, e);
    }
  }
  De.prototype.point = true;
  function eh(n, t = false) {
    let { inclusiveStart: e, inclusiveEnd: i } = n;
    return e == null && (e = n.inclusive), i == null && (i = n.inclusive), {
      start: e ?? t,
      end: i ?? t
    };
  }
  function su(n, t) {
    return n == t || !!(n && t && n.compare(t));
  }
  function Fn(n, t, e, i = 0) {
    let s = e.length - 1;
    s >= 0 && e[s] + i >= n ? e[s] = Math.max(e[s], t) : e.push(n, t);
  }
  class tt extends K {
    constructor() {
      super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
    }
    merge(t, e, i, s, r, o) {
      if (i) {
        if (!(i instanceof tt))
          return false;
        this.dom || i.transferDOM(this);
      }
      return s && this.setDeco(i ? i.attrs : null), Ya(this, t, e, i ? i.children.slice() : [], r, o), true;
    }
    split(t) {
      let e = new tt();
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
      Yn(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t);
    }
    append(t, e) {
      Za(this, t, e);
    }
    addLineDeco(t) {
      let e = t.spec.attributes, i = t.spec.class;
      e && (this.attrs = kr(e, this.attrs || {})), i && (this.attrs = kr({
        class: i
      }, this.attrs || {}));
    }
    domAtPos(t) {
      return Qa(this, t);
    }
    reuseDOM(t) {
      t.nodeName == "DIV" && (this.setDOM(t), this.flags |= 6);
    }
    sync(t, e) {
      var i;
      this.dom ? this.flags & 4 && (qa(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Sr(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
      let s = this.dom.lastChild;
      for (; s && K.get(s) instanceof ue; )
        s = s.lastChild;
      if (!s || !this.length || s.nodeName != "BR" && ((i = K.get(s)) === null || i === void 0 ? void 0 : i.isEditable) == false && (!O.ios || !this.children.some((r) => r instanceof Vt))) {
        let r = document.createElement("BR");
        r.cmIgnore = true, this.dom.appendChild(r);
      }
    }
    measureTextSize() {
      if (this.children.length == 0 || this.length > 20)
        return null;
      let t = 0, e;
      for (let i of this.children) {
        if (!(i instanceof Vt) || /[^ -~]/.test(i.text))
          return null;
        let s = ci(i.dom);
        if (s.length != 1)
          return null;
        t += s[0].width, e = s[0].height;
      }
      return t ? {
        lineHeight: this.dom.getBoundingClientRect().height,
        charWidth: t / this.length,
        textHeight: e
      } : null;
    }
    coordsAt(t, e) {
      let i = th(this, t, e);
      if (!this.children.length && i && this.parent) {
        let { heightOracle: s } = this.parent.view.viewState, r = i.bottom - i.top;
        if (Math.abs(r - s.lineHeight) < 2 && s.textHeight < r) {
          let o = (r - s.textHeight) / 2;
          return {
            top: i.top + o,
            bottom: i.bottom - o,
            left: i.left,
            right: i.left
          };
        }
      }
      return i;
    }
    become(t) {
      return t instanceof tt && this.children.length == 0 && t.children.length == 0 && Yn(this.attrs, t.attrs) && this.breakAfter == t.breakAfter;
    }
    covers() {
      return true;
    }
    static find(t, e) {
      for (let i = 0, s = 0; i < t.children.length; i++) {
        let r = t.children[i], o = s + r.length;
        if (o >= e) {
          if (r instanceof tt)
            return r;
          if (o > e)
            break;
        }
        s = o + r.breakAfter;
      }
      return null;
    }
  }
  class ce extends K {
    constructor(t, e, i) {
      super(), this.widget = t, this.length = e, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
    }
    merge(t, e, i, s, r, o) {
      return i && (!(i instanceof ce) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? false : (this.length = t + (i ? i.length : 0) + (this.length - e), true);
    }
    domAtPos(t) {
      return t == 0 ? ut.before(this.dom) : ut.after(this.dom, t == this.length);
    }
    split(t) {
      let e = this.length - t;
      this.length = t;
      let i = new ce(this.widget, e, this.deco);
      return i.breakAfter = this.breakAfter, i;
    }
    get children() {
      return io;
    }
    sync(t) {
      (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
    }
    get overrideDOMText() {
      return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : W.empty;
    }
    domBoundsAround() {
      return null;
    }
    become(t) {
      return t instanceof ce && t.widget.constructor == this.widget.constructor ? (t.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.deco = t.deco, this.breakAfter = t.breakAfter, true) : false;
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
      return i || (this.widget instanceof Cr ? null : tn(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0));
    }
    destroy() {
      super.destroy(), this.dom && this.widget.destroy(this.dom);
    }
    covers(t) {
      let { startSide: e, endSide: i } = this.deco;
      return e == i ? false : t < 0 ? e < 0 : i > 0;
    }
  }
  class Cr extends ge {
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
  class Pi {
    constructor(t, e, i, s) {
      this.doc = t, this.pos = e, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = true, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e;
    }
    posCovered() {
      if (this.content.length == 0)
        return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
      let t = this.content[this.content.length - 1];
      return !(t.breakAfter || t instanceof ce && t.deco.endSide < 0);
    }
    getLine() {
      return this.curLine || (this.content.push(this.curLine = new tt()), this.atCursorPos = true), this.curLine;
    }
    flushBuffer(t = this.bufferMarks) {
      this.pendingBuffer && (this.curLine.append(un(new fi(-1), t), t.length), this.pendingBuffer = 0);
    }
    addBlockWidget(t) {
      this.flushBuffer(), this.curLine = null, this.content.push(t);
    }
    finish(t) {
      this.pendingBuffer && t <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(t && this.content.length && this.content[this.content.length - 1] instanceof ce) && this.getLine();
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
        this.flushBuffer(e.slice(e.length - i)), this.getLine().append(un(new Vt(this.text.slice(this.textOff, this.textOff + s)), e), i), this.atCursorPos = true, this.textOff += s, t -= s, i = 0;
      }
    }
    span(t, e, i, s) {
      this.buildText(e - t, i, s), this.pos = e, this.openStart < 0 && (this.openStart = s);
    }
    point(t, e, i, s, r, o) {
      if (this.disallowBlockEffectsFor[o] && i instanceof De) {
        if (i.block)
          throw new RangeError("Block decorations may not be specified via plugins");
        if (e > this.doc.lineAt(this.pos).to)
          throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
      }
      let l = e - t;
      if (i instanceof De)
        if (i.block)
          i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new ce(i.widget || ui.block, l, i));
        else {
          let a = ve.create(i.widget || ui.inline, l, l ? 0 : i.startSide), h = this.atCursorPos && !a.isEditable && r <= s.length && (t < e || i.startSide > 0), c = !a.isEditable && (t < e || r > s.length || i.startSide <= 0), f = this.getLine();
          this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), h && (f.append(un(new fi(1), s), r), r = s.length + Math.max(0, r - s.length)), f.append(un(a, s), r), this.atCursorPos = c, this.pendingBuffer = c ? t < e || r > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice());
        }
      else
        this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
      l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = r);
    }
    static build(t, e, i, s, r) {
      let o = new Pi(t, e, i, r);
      return o.openEnd = H.spans(s, e, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
    }
  }
  function un(n, t) {
    for (let e of t)
      n = new ue(e, [
        n
      ], n.length);
    return n;
  }
  class ui extends ge {
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
  ui.inline = new ui("span");
  ui.block = new ui("div");
  var Y = function(n) {
    return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
  }(Y || (Y = {}));
  const $e = Y.LTR, no = Y.RTL;
  function ih(n) {
    let t = [];
    for (let e = 0; e < n.length; e++)
      t.push(1 << +n[e]);
    return t;
  }
  const ru = ih("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), ou = ih("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Ar = /* @__PURE__ */ Object.create(null), Kt = [];
  for (let n of [
    "()",
    "[]",
    "{}"
  ]) {
    let t = n.charCodeAt(0), e = n.charCodeAt(1);
    Ar[t] = e, Ar[e] = -t;
  }
  function nh(n) {
    return n <= 247 ? ru[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? ou[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1;
  }
  const lu = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
  class ke {
    get dir() {
      return this.level % 2 ? no : $e;
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
  function sh(n, t) {
    if (n.length != t.length)
      return false;
    for (let e = 0; e < n.length; e++) {
      let i = n[e], s = t[e];
      if (i.from != s.from || i.to != s.to || i.direction != s.direction || !sh(i.inner, s.inner))
        return false;
    }
    return true;
  }
  const j = [];
  function au(n, t, e, i, s) {
    for (let r = 0; r <= i.length; r++) {
      let o = r ? i[r - 1].to : t, l = r < i.length ? i[r].from : e, a = r ? 256 : s;
      for (let h = o, c = a, f = a; h < l; h++) {
        let u = nh(n.charCodeAt(h));
        u == 512 ? u = c : u == 8 && f == 4 && (u = 16), j[h] = u == 4 ? 2 : u, u & 7 && (f = u), c = u;
      }
      for (let h = o, c = a, f = a; h < l; h++) {
        let u = j[h];
        if (u == 128)
          h < l - 1 && c == j[h + 1] && c & 24 ? u = j[h] = c : j[h] = 256;
        else if (u == 64) {
          let d = h + 1;
          for (; d < l && j[d] == 64; )
            d++;
          let p = h && c == 8 || d < e && j[d] == 8 ? f == 1 ? 1 : 8 : 256;
          for (let g = h; g < d; g++)
            j[g] = p;
          h = d - 1;
        } else
          u == 8 && f == 1 && (j[h] = 1);
        c = u, u & 7 && (f = u);
      }
    }
  }
  function hu(n, t, e, i, s) {
    let r = s == 1 ? 2 : 1;
    for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
      let h = o ? i[o - 1].to : t, c = o < i.length ? i[o].from : e;
      for (let f = h, u, d, p; f < c; f++)
        if (d = Ar[u = n.charCodeAt(f)])
          if (d < 0) {
            for (let g = l - 3; g >= 0; g -= 3)
              if (Kt[g + 1] == -d) {
                let m = Kt[g + 2], y = m & 2 ? s : m & 4 ? m & 1 ? r : s : 0;
                y && (j[f] = j[Kt[g]] = y), l = g;
                break;
              }
          } else {
            if (Kt.length == 189)
              break;
            Kt[l++] = f, Kt[l++] = u, Kt[l++] = a;
          }
        else if ((p = j[f]) == 2 || p == 1) {
          let g = p == s;
          a = g ? 0 : 1;
          for (let m = l - 3; m >= 0; m -= 3) {
            let y = Kt[m + 2];
            if (y & 2)
              break;
            if (g)
              Kt[m + 2] |= 2;
            else {
              if (y & 4)
                break;
              Kt[m + 2] |= 4;
            }
          }
        }
    }
  }
  function cu(n, t, e, i) {
    for (let s = 0, r = i; s <= e.length; s++) {
      let o = s ? e[s - 1].to : n, l = s < e.length ? e[s].from : t;
      for (let a = o; a < l; ) {
        let h = j[a];
        if (h == 256) {
          let c = a + 1;
          for (; ; )
            if (c == l) {
              if (s == e.length)
                break;
              c = e[s++].to, l = s < e.length ? e[s].from : t;
            } else if (j[c] == 256)
              c++;
            else
              break;
          let f = r == 1, u = (c < t ? j[c] : i) == 1, d = f == u ? f ? 1 : 2 : i;
          for (let p = c, g = s, m = g ? e[g - 1].to : n; p > a; )
            p == m && (p = e[--g].from, m = g ? e[g - 1].to : n), j[--p] = d;
          a = c;
        } else
          r = h, a++;
      }
    }
  }
  function Mr(n, t, e, i, s, r, o) {
    let l = i % 2 ? 2 : 1;
    if (i % 2 == s % 2)
      for (let a = t, h = 0; a < e; ) {
        let c = true, f = false;
        if (h == r.length || a < r[h].from) {
          let g = j[a];
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
                    if (j[m] == l)
                      break t;
                    break;
                  }
                }
              if (h++, u)
                u.push(g);
              else {
                g.from > a && o.push(new ke(a, g.from, d));
                let m = g.direction == $e != !(d % 2);
                Dr(n, m ? i + 1 : i, s, g.inner, g.from, g.to, o), a = g.to;
              }
              p = g.to;
            } else {
              if (p == e || (c ? j[p] != l : j[p] == l))
                break;
              p++;
            }
        u ? Mr(n, a, p, i + 1, s, u, o) : a < p && o.push(new ke(a, p, d)), a = p;
      }
    else
      for (let a = e, h = r.length; a > t; ) {
        let c = true, f = false;
        if (!h || a > r[h - 1].to) {
          let g = j[a - 1];
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
                    if (j[m - 1] == l)
                      break t;
                    break;
                  }
                }
              if (u)
                u.push(g);
              else {
                g.to < a && o.push(new ke(g.to, a, d));
                let m = g.direction == $e != !(d % 2);
                Dr(n, m ? i + 1 : i, s, g.inner, g.from, g.to, o), a = g.from;
              }
              p = g.from;
            } else {
              if (p == t || (c ? j[p - 1] != l : j[p - 1] == l))
                break;
              p--;
            }
        u ? Mr(n, p, a, i + 1, s, u, o) : p < a && o.push(new ke(p, a, d)), a = p;
      }
  }
  function Dr(n, t, e, i, s, r, o) {
    let l = t % 2 ? 2 : 1;
    au(n, s, r, i, l), hu(n, s, r, i, l), cu(s, r, i, l), Mr(n, s, r, t, e, i, o);
  }
  function fu(n, t, e) {
    if (!n)
      return [
        new ke(0, 0, t == no ? 1 : 0)
      ];
    if (t == $e && !e.length && !lu.test(n))
      return rh(n.length);
    if (e.length)
      for (; n.length > j.length; )
        j[j.length] = 256;
    let i = [], s = t == $e ? 0 : 1;
    return Dr(n, s, s, e, 0, n.length, i), i;
  }
  function rh(n) {
    return [
      new ke(0, n, 0)
    ];
  }
  let oh = "";
  function uu(n, t, e, i, s) {
    var r;
    let o = i.head - n.from, l = ke.find(t, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), a = t[l], h = a.side(s, e);
    if (o == h) {
      let u = l += s ? 1 : -1;
      if (u < 0 || u >= t.length)
        return null;
      a = t[l = u], o = a.side(!s, e), h = a.side(s, e);
    }
    let c = ht(n.text, o, a.forward(s, e));
    (c < a.from || c > a.to) && (c = h), oh = n.text.slice(Math.min(o, c), Math.max(o, c));
    let f = l == (s ? t.length - 1 : 0) ? null : t[l + (s ? 1 : -1)];
    return f && c == h && f.level + (s ? 0 : 1) < a.level ? b.cursor(f.side(!s, e) + n.from, f.forward(s, e) ? 1 : -1, f.level) : b.cursor(c + n.from, a.forward(s, e) ? -1 : 1, a.level);
  }
  function du(n, t, e) {
    for (let i = t; i < e; i++) {
      let s = nh(n.charCodeAt(i));
      if (s == 1)
        return $e;
      if (s == 2 || s == 4)
        return no;
    }
    return $e;
  }
  const lh = T.define(), ah = T.define(), hh = T.define(), ch = T.define(), Or = T.define(), fh = T.define(), uh = T.define(), so = T.define(), ro = T.define(), dh = T.define({
    combine: (n) => n.some((t) => t)
  }), ph = T.define({
    combine: (n) => n.some((t) => t)
  }), gh = T.define();
  class ri {
    constructor(t, e = "nearest", i = "nearest", s = 5, r = 5, o = false) {
      this.range = t, this.y = e, this.x = i, this.yMargin = s, this.xMargin = r, this.isSnapshot = o;
    }
    map(t) {
      return t.empty ? this : new ri(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
    }
    clip(t) {
      return this.range.to <= t.doc.length ? this : new ri(b.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
    }
  }
  const dn = L.define({
    map: (n, t) => n.map(t)
  }), mh = L.define();
  function Ct(n, t, e) {
    let i = n.facet(ch);
    i.length ? i[0](t) : window.onerror && window.onerror(String(t), e, void 0, void 0, t) || (e ? console.error(e + ":", t) : console.error(t));
  }
  const ae = T.define({
    combine: (n) => n.length ? n[0] : true
  });
  let pu = 0;
  const Ze = T.define({
    combine(n) {
      return n.filter((t, e) => {
        for (let i = 0; i < e; i++)
          if (n[i].plugin == t.plugin)
            return false;
        return true;
      });
    }
  });
  Q = class {
    constructor(t, e, i, s, r) {
      this.id = t, this.create = e, this.domEventHandlers = i, this.domEventObservers = s, this.baseExtensions = r(this), this.extension = this.baseExtensions.concat(Ze.of({
        plugin: this,
        arg: void 0
      }));
    }
    of(t) {
      return this.baseExtensions.concat(Ze.of({
        plugin: this,
        arg: t
      }));
    }
    static define(t, e) {
      const { eventHandlers: i, eventObservers: s, provide: r, decorations: o } = e || {};
      return new Q(pu++, t, i, s, (l) => {
        let a = [];
        return o && a.push(zi.of((h) => {
          let c = h.plugin(l);
          return c ? o(c) : E.none;
        })), r && a.push(r(l)), a;
      });
    }
    static fromClass(t, e) {
      return Q.define((i, s) => new t(i, s), e);
    }
  };
  class _s {
    constructor(t) {
      this.spec = t, this.mustUpdate = null, this.value = null;
    }
    get plugin() {
      return this.spec && this.spec.plugin;
    }
    update(t) {
      if (this.value) {
        if (this.mustUpdate) {
          let e = this.mustUpdate;
          if (this.mustUpdate = null, this.value.update)
            try {
              this.value.update(e);
            } catch (i) {
              if (Ct(e.state, i, "CodeMirror plugin crashed"), this.value.destroy)
                try {
                  this.value.destroy();
                } catch {
                }
              this.deactivate();
            }
        }
      } else if (this.spec)
        try {
          this.value = this.spec.plugin.create(t, this.spec.arg);
        } catch (e) {
          Ct(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
        }
      return this;
    }
    destroy(t) {
      var e;
      if (!((e = this.value) === null || e === void 0) && e.destroy)
        try {
          this.value.destroy();
        } catch (i) {
          Ct(t.state, i, "CodeMirror plugin crashed");
        }
    }
    deactivate() {
      this.spec = this.value = null;
    }
  }
  const yh = T.define(), oo = T.define(), zi = T.define(), bh = T.define(), lo = T.define(), wh = T.define();
  function Qo(n, t) {
    let e = n.state.facet(wh);
    if (!e.length)
      return e;
    let i = e.map((r) => r instanceof Function ? r(n) : r), s = [];
    return H.spans(i, t.from, t.to, {
      point() {
      },
      span(r, o, l, a) {
        let h = r - t.from, c = o - t.from, f = s;
        for (let u = l.length - 1; u >= 0; u--, a--) {
          let d = l[u].spec.bidiIsolate, p;
          if (d == null && (d = du(t.text, h, c)), a > 0 && f.length && (p = f[f.length - 1]).to == h && p.direction == d)
            p.to = c, f = p.inner;
          else {
            let g = {
              from: h,
              to: c,
              direction: d,
              inner: []
            };
            f.push(g), f = g.inner;
          }
        }
      }
    }), s;
  }
  const xh = T.define();
  function ao(n) {
    let t = 0, e = 0, i = 0, s = 0;
    for (let r of n.state.facet(xh)) {
      let o = r(n);
      o && (o.left != null && (t = Math.max(t, o.left)), o.right != null && (e = Math.max(e, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
    }
    return {
      left: t,
      right: e,
      top: i,
      bottom: s
    };
  }
  const Mi = T.define();
  class It {
    constructor(t, e, i, s) {
      this.fromA = t, this.toA = e, this.fromB = i, this.toB = s;
    }
    join(t) {
      return new It(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
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
          if (d <= p && new It(d + h, p + h, d, p).addToSet(i), u > c)
            break;
          r += 2;
        }
        if (!a)
          return i;
        new It(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
      }
    }
  }
  class Jn {
    constructor(t, e, i) {
      this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = et.empty(this.startState.doc.length);
      for (let r of i)
        this.changes = this.changes.compose(r.changes);
      let s = [];
      this.changes.iterChangedRanges((r, o, l, a) => s.push(new It(r, o, l, a))), this.changedRanges = s;
    }
    static create(t, e, i) {
      return new Jn(t, e, i);
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
  class Zo extends K {
    get length() {
      return this.view.state.doc.length;
    }
    constructor(t) {
      super(), this.view = t, this.decorations = [], this.dynamicDecorationMap = [
        false
      ], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = E.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [
        new tt()
      ], this.children[0].setParent(this), this.updateDeco(), this.updateInner([
        new It(0, 0, 0, t.state.doc.length)
      ], 0, null);
    }
    update(t) {
      var e;
      let i = t.changedRanges;
      this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: c }) => c < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
      let s = -1;
      this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? s = this.domChanged.newSel.head : !vu(t.changes, this.hasComposition) && !t.selectionSet && (s = t.state.selection.main.head));
      let r = s > -1 ? mu(this.view, t.changes, s) : null;
      if (this.domChanged = null, this.hasComposition) {
        this.markedForComposition.clear();
        let { from: h, to: c } = this.hasComposition;
        i = new It(h, c, t.changes.mapPos(h, -1), t.changes.mapPos(c, 1)).addToSet(i.slice());
      }
      this.hasComposition = r ? {
        from: r.range.fromB,
        to: r.range.toB
      } : null, (O.ie || O.chrome) && !r && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = true);
      let o = this.decorations, l = this.updateDeco(), a = wu(o, l, t.changes);
      return i = It.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? false : (this.updateInner(i, t.startState.doc.length, r), t.transactions.length && (this.lastUpdate = Date.now()), true);
    }
    updateInner(t, e, i) {
      this.view.viewState.mustMeasureContent = true, this.updateChildren(t, e, i);
      let { observer: s } = this.view;
      s.ignore(() => {
        this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
        let o = O.chrome || O.ios ? {
          node: s.selectionRange.focusNode,
          written: false
        } : void 0;
        this.sync(this.view, o), this.flags &= -8, o && (o.written || s.selectionRange.focusNode != o.node) && (this.forceSelection = true), this.dom.style.height = "";
      }), this.markedForComposition.forEach((o) => o.flags &= -9);
      let r = [];
      if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
        for (let o of this.children)
          o instanceof ce && o.widget instanceof Cr && r.push(o.dom);
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
          let S = Pi.build(this.view.state.doc, c, i.range.fromB, this.decorations, this.dynamicDecorationMap), x = Pi.build(this.view.state.doc, i.range.toB, f, this.decorations, this.dynamicDecorationMap);
          d = S.breakAtStart, p = S.openStart, g = x.openEnd;
          let k = this.compositionView(i);
          x.breakAtStart ? k.breakAfter = 1 : x.content.length && k.merge(k.length, k.length, x.content[0], false, x.openStart, 0) && (k.breakAfter = x.content[0].breakAfter, x.content.shift()), S.content.length && k.merge(0, 0, S.content[S.content.length - 1], true, 0, S.openEnd) && S.content.pop(), u = S.content.concat(k).concat(x.content);
        } else
          ({ content: u, breakAtStart: d, openStart: p, openEnd: g } = Pi.build(this.view.state.doc, c, f, this.decorations, this.dynamicDecorationMap));
        let { i: m, off: y } = r.findPos(h, 1), { i: w, off: v } = r.findPos(a, -1);
        Ga(this, w, v, m, y, u, d, p, g);
      }
      i && this.fixCompositionDOM(i);
    }
    updateEditContextFormatting(t) {
      this.editContextFormatting = this.editContextFormatting.map(t.changes);
      for (let e of t.transactions)
        for (let i of e.effects)
          i.is(mh) && (this.editContextFormatting = i.value);
    }
    compositionView(t) {
      let e = new Vt(t.text.nodeValue);
      e.flags |= 8;
      for (let { deco: s } of t.marks)
        e = new ue(s, [
          e
        ], e.length);
      let i = new tt();
      return i.append(e, 0), i;
    }
    fixCompositionDOM(t) {
      let e = (r, o) => {
        o.flags |= 8 | (o.children.some((a) => a.flags & 7) ? 1 : 0), this.markedForComposition.add(o);
        let l = K.get(r);
        l && l != o && (l.dom = null), o.setDOM(r);
      }, i = this.childPos(t.range.fromB, 1), s = this.children[i.i];
      e(t.line, s);
      for (let r = t.marks.length - 1; r >= -1; r--)
        i = s.childPos(i.off, 1), s = s.children[i.i], e(r >= 0 ? t.marks[r].node : t.text, s);
    }
    updateSelection(t = false, e = false) {
      (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
      let i = this.view.root.activeElement, s = i == this.dom, r = !s && !(this.view.state.facet(ae) || this.dom.tabIndex > -1) && Nn(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
      if (!(s || e || r))
        return;
      let o = this.forceSelection;
      this.forceSelection = false;
      let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
      if (O.gecko && l.empty && !this.hasComposition && gu(a)) {
        let f = document.createTextNode("");
        this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)), a = h = new ut(f, 0), o = true;
      }
      let c = this.view.observer.selectionRange;
      (o || !c.focusNode || (!Li(a.node, a.offset, c.anchorNode, c.anchorOffset) || !Li(h.node, h.offset, c.focusNode, c.focusOffset)) && !this.suppressWidgetCursorChange(c, l)) && (this.view.observer.ignore(() => {
        O.android && O.chrome && this.dom.contains(c.focusNode) && xu(c.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({
          preventScroll: true
        }));
        let f = Vi(this.view.root);
        if (f)
          if (l.empty) {
            if (O.gecko) {
              let u = yu(a.node, a.offset);
              if (u && u != 3) {
                let d = (u == 1 ? ja : Ka)(a.node, a.offset);
                d && (a = new ut(d.node, d.offset));
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
            l.anchor > l.head && ([a, h] = [
              h,
              a
            ]), u.setEnd(h.node, h.offset), u.setStart(a.node, a.offset), f.removeAllRanges(), f.addRange(u);
          }
        r && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
      }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new ut(c.anchorNode, c.anchorOffset), this.impreciseHead = h.precise ? null : new ut(c.focusNode, c.focusOffset);
    }
    suppressWidgetCursorChange(t, e) {
      return this.hasComposition && e.empty && Li(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
    }
    enforceCursorAssoc() {
      if (this.hasComposition)
        return;
      let { view: t } = this, e = t.state.selection.main, i = Vi(t.root), { anchorNode: s, anchorOffset: r } = t.observer.selectionRange;
      if (!i || !e.empty || !e.assoc || !i.modify)
        return;
      let o = tt.find(this, e.head);
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
        let r = K.get(e.childNodes[s]);
        r instanceof tt && (i = r.domAtPos(0));
      }
      for (let s = t.offset - 1; !i && s >= 0; s--) {
        let r = K.get(e.childNodes[s]);
        r instanceof tt && (i = r.domAtPos(r.length));
      }
      return i ? new ut(i.node, i.offset, true) : t;
    }
    nearest(t) {
      for (let e = t; e; ) {
        let i = K.get(e);
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
        if (i < s.length || s instanceof tt)
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
        if (h <= t && (h < t || l.covers(-1)) && (a > t || l.covers(1)) && (!i || l instanceof tt && !(i instanceof tt && e >= 0)))
          i = l, s = h;
        else if (i && h == t && a == t && l instanceof ce && Math.abs(e) < 2) {
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
      if (!(s instanceof tt))
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
      if (!(s instanceof Vt))
        return null;
      let r = ht(s.text, i);
      if (r == i)
        return null;
      let o = qe(s.dom, i, r).getClientRects();
      for (let l = 0; l < o.length; l++) {
        let a = o[l];
        if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
          return a;
      }
      return null;
    }
    measureVisibleLineHeights(t) {
      let e = [], { from: i, to: s } = t, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == Y.LTR;
      for (let h = 0, c = 0; c < this.children.length; c++) {
        let f = this.children[c], u = h + f.length;
        if (u > s)
          break;
        if (h >= i) {
          let d = f.dom.getBoundingClientRect();
          if (e.push(d.height), o) {
            let p = f.dom.lastChild, g = p ? ci(p) : [];
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
      return getComputedStyle(this.children[e].dom).direction == "rtl" ? Y.RTL : Y.LTR;
    }
    measureTextSize() {
      for (let r of this.children)
        if (r instanceof tt) {
          let o = r.measureTextSize();
          if (o)
            return o;
        }
      let t = document.createElement("div"), e, i, s;
      return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
        this.dom.appendChild(t);
        let r = ci(t.firstChild)[0];
        e = t.getBoundingClientRect().height, i = r ? r.width / 27 : 7, s = r ? r.height : e, t.remove();
      }), {
        lineHeight: e,
        charWidth: i,
        textHeight: s
      };
    }
    childCursor(t = this.length) {
      let e = this.children.length;
      return e && (t -= this.children[--e].length), new Ua(this.children, t, e);
    }
    computeBlockGapDeco() {
      let t = [], e = this.view.viewState;
      for (let i = 0, s = 0; ; s++) {
        let r = s == e.viewports.length ? null : e.viewports[s], o = r ? r.from - 1 : this.length;
        if (o > i) {
          let l = (e.lineBlockAt(o).bottom - e.lineBlockAt(i).top) / this.view.scaleY;
          t.push(E.replace({
            widget: new Cr(l),
            block: true,
            inclusive: true,
            isBlockGap: true
          }).range(i, o));
        }
        if (!r)
          break;
        i = r.to + 1;
      }
      return E.set(t);
    }
    updateDeco() {
      let t = 1, e = this.view.state.facet(zi).map((r) => (this.dynamicDecorationMap[t++] = typeof r == "function") ? r(this.view) : r), i = false, s = this.view.state.facet(bh).map((r, o) => {
        let l = typeof r == "function";
        return l && (i = true), l ? r(this.view) : r;
      });
      for (s.length && (this.dynamicDecorationMap[t++] = i, e.push(H.join(s))), this.decorations = [
        this.editContextFormatting,
        ...e,
        this.computeBlockGapDeco(),
        this.view.viewState.lineGapDeco
      ]; t < this.decorations.length; )
        this.dynamicDecorationMap[t++] = false;
      return this.decorations;
    }
    scrollIntoView(t) {
      if (t.isSnapshot) {
        let h = this.view.viewState.lineBlockAt(t.range.head);
        this.view.scrollDOM.scrollTop = h.top - t.yMargin, this.view.scrollDOM.scrollLeft = t.xMargin;
        return;
      }
      for (let h of this.view.state.facet(gh))
        try {
          if (h(this.view, t.range, t))
            return true;
        } catch (c) {
          Ct(this.view.state, c, "scroll handler");
        }
      let { range: e } = t, i = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1), s;
      if (!i)
        return;
      !e.empty && (s = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (i = {
        left: Math.min(i.left, s.left),
        top: Math.min(i.top, s.top),
        right: Math.max(i.right, s.right),
        bottom: Math.max(i.bottom, s.bottom)
      });
      let r = ao(this.view), o = {
        left: i.left - r.left,
        top: i.top - r.top,
        right: i.right + r.right,
        bottom: i.bottom + r.bottom
      }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
      Gf(this.view.scrollDOM, o, e.head < e.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, l), -l), Math.max(Math.min(t.yMargin, a), -a), this.view.textDirection == Y.LTR);
    }
  }
  function gu(n) {
    return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
  }
  function vh(n, t) {
    let e = n.observer.selectionRange;
    if (!e.focusNode)
      return null;
    let i = ja(e.focusNode, e.focusOffset), s = Ka(e.focusNode, e.focusOffset), r = i || s;
    if (s && i && s.node != i.node) {
      let l = K.get(s.node);
      if (!l || l instanceof Vt && l.text != s.node.nodeValue)
        r = s;
      else if (n.docView.lastCompositionAfterCursor) {
        let a = K.get(i.node);
        !a || a instanceof Vt && a.text != i.node.nodeValue || (r = s);
      }
    }
    if (n.docView.lastCompositionAfterCursor = r != i, !r)
      return null;
    let o = t - r.offset;
    return {
      from: o,
      to: o + r.node.nodeValue.length,
      node: r.node
    };
  }
  function mu(n, t, e) {
    let i = vh(n, e);
    if (!i)
      return null;
    let { node: s, from: r, to: o } = i, l = s.nodeValue;
    if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l)
      return null;
    let a = t.invertedDesc, h = new It(a.mapPos(r), a.mapPos(o), r, o), c = [];
    for (let f = s.parentNode; ; f = f.parentNode) {
      let u = K.get(f);
      if (u instanceof ue)
        c.push({
          node: f,
          deco: u.mark
        });
      else {
        if (u instanceof tt || f.nodeName == "DIV" && f.parentNode == n.contentDOM)
          return {
            range: h,
            text: s,
            marks: c,
            line: f
          };
        if (f != n.contentDOM)
          c.push({
            node: f,
            deco: new en({
              inclusive: true,
              attributes: nu(f),
              tagName: f.tagName.toLowerCase()
            })
          });
        else
          return null;
      }
    }
  }
  function yu(n, t) {
    return n.nodeType != 1 ? 0 : (t && n.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < n.childNodes.length && n.childNodes[t].contentEditable == "false" ? 2 : 0);
  }
  let bu = class {
    constructor() {
      this.changes = [];
    }
    compareRange(t, e) {
      Fn(t, e, this.changes);
    }
    comparePoint(t, e) {
      Fn(t, e, this.changes);
    }
    boundChange(t) {
      Fn(t, t, this.changes);
    }
  };
  function wu(n, t, e) {
    let i = new bu();
    return H.compare(n, t, e, i), i.changes;
  }
  function xu(n, t) {
    for (let e = n; e && e != t; e = e.assignedSlot || e.parentNode)
      if (e.nodeType == 1 && e.contentEditable == "false")
        return true;
    return false;
  }
  function vu(n, t) {
    let e = false;
    return t && n.iterChangedRanges((i, s) => {
      i < t.to && s > t.from && (e = true);
    }), e;
  }
  function ku(n, t, e = 1) {
    let i = n.charCategorizer(t), s = n.doc.lineAt(t), r = t - s.from;
    if (s.length == 0)
      return b.cursor(t);
    r == 0 ? e = 1 : r == s.length && (e = -1);
    let o = r, l = r;
    e < 0 ? o = ht(s.text, r, false) : l = ht(s.text, r);
    let a = i(s.text.slice(o, l));
    for (; o > 0; ) {
      let h = ht(s.text, o, false);
      if (i(s.text.slice(h, o)) != a)
        break;
      o = h;
    }
    for (; l < s.length; ) {
      let h = ht(s.text, l);
      if (i(s.text.slice(l, h)) != a)
        break;
      l = h;
    }
    return b.range(o + s.from, l + s.from);
  }
  function Su(n, t) {
    return t.left > n ? t.left - n : Math.max(0, n - t.right);
  }
  function Cu(n, t) {
    return t.top > n ? t.top - n : Math.max(0, n - t.bottom);
  }
  function Is(n, t) {
    return n.top < t.bottom - 1 && n.bottom > t.top + 1;
  }
  function tl(n, t) {
    return t < n.top ? {
      top: t,
      left: n.left,
      right: n.right,
      bottom: n.bottom
    } : n;
  }
  function el(n, t) {
    return t > n.bottom ? {
      top: n.top,
      left: n.left,
      right: n.right,
      bottom: t
    } : n;
  }
  function Tr(n, t, e) {
    let i, s, r, o, l = false, a, h, c, f;
    for (let p = n.firstChild; p; p = p.nextSibling) {
      let g = ci(p);
      for (let m = 0; m < g.length; m++) {
        let y = g[m];
        s && Is(s, y) && (y = tl(el(y, s.bottom), s.top));
        let w = Su(t, y), v = Cu(e, y);
        if (w == 0 && v == 0)
          return p.nodeType == 3 ? il(p, t, e) : Tr(p, t, e);
        (!i || o > v || o == v && r > w) && (i = p, s = y, r = w, o = v, l = w ? t < y.left ? m > 0 : m < g.length - 1 : true), w == 0 ? e > y.bottom && (!c || c.bottom < y.bottom) ? (a = p, c = y) : e < y.top && (!f || f.top > y.top) && (h = p, f = y) : c && Is(c, y) ? c = el(c, y.bottom) : f && Is(f, y) && (f = tl(f, y.top));
      }
    }
    if (c && c.bottom >= e ? (i = a, s = c) : f && f.top <= e && (i = h, s = f), !i)
      return {
        node: n,
        offset: 0
      };
    let u = Math.max(s.left, Math.min(s.right, t));
    if (i.nodeType == 3)
      return il(i, u, e);
    if (l && i.contentEditable != "false")
      return Tr(i, u, e);
    let d = Array.prototype.indexOf.call(n.childNodes, i) + (t >= (s.left + s.right) / 2 ? 1 : 0);
    return {
      node: n,
      offset: d
    };
  }
  function il(n, t, e) {
    let i = n.nodeValue.length, s = -1, r = 1e9, o = 0;
    for (let l = 0; l < i; l++) {
      let a = qe(n, l, l + 1).getClientRects();
      for (let h = 0; h < a.length; h++) {
        let c = a[h];
        if (c.top == c.bottom)
          continue;
        o || (o = t - c.left);
        let f = (c.top > e ? c.top - e : e - c.bottom) - 1;
        if (c.left - 1 <= t && c.right + 1 >= t && f < r) {
          let u = t >= (c.left + c.right) / 2, d = u;
          if ((O.chrome || O.gecko) && qe(n, l).getBoundingClientRect().left == c.right && (d = !u), f <= 0)
            return {
              node: n,
              offset: l + (d ? 1 : 0)
            };
          s = l + (d ? 1 : 0), r = f;
        }
      }
    }
    return {
      node: n,
      offset: s > -1 ? s : o > 0 ? n.nodeValue.length : 0
    };
  }
  function kh(n, t, e, i = -1) {
    var s, r;
    let o = n.contentDOM.getBoundingClientRect(), l = o.top + n.viewState.paddingTop, a, { docHeight: h } = n.viewState, { x: c, y: f } = t, u = f - l;
    if (u < 0)
      return 0;
    if (u > h)
      return n.state.doc.length;
    for (let S = n.viewState.heightOracle.textHeight / 2, x = false; a = n.elementAtHeight(u), a.type != wt.Text; )
      for (; u = i > 0 ? a.bottom + S : a.top - S, !(u >= 0 && u <= h); ) {
        if (x)
          return e ? null : 0;
        x = true, i = -i;
      }
    f = l + u;
    let d = a.from;
    if (d < n.viewport.from)
      return n.viewport.from == 0 ? 0 : e ? null : nl(n, o, a, c, f);
    if (d > n.viewport.to)
      return n.viewport.to == n.state.doc.length ? n.state.doc.length : e ? null : nl(n, o, a, c, f);
    let p = n.dom.ownerDocument, g = n.root.elementFromPoint ? n.root : p, m = g.elementFromPoint(c, f);
    m && !n.contentDOM.contains(m) && (m = null), m || (c = Math.max(o.left + 1, Math.min(o.right - 1, c)), m = g.elementFromPoint(c, f), m && !n.contentDOM.contains(m) && (m = null));
    let y, w = -1;
    if (m && ((s = n.docView.nearest(m)) === null || s === void 0 ? void 0 : s.isEditable) != false) {
      if (p.caretPositionFromPoint) {
        let S = p.caretPositionFromPoint(c, f);
        S && ({ offsetNode: y, offset: w } = S);
      } else if (p.caretRangeFromPoint) {
        let S = p.caretRangeFromPoint(c, f);
        S && ({ startContainer: y, startOffset: w } = S, (!n.contentDOM.contains(y) || O.safari && Au(y, w, c) || O.chrome && Mu(y, w, c)) && (y = void 0));
      }
      y && (w = Math.min(se(y), w));
    }
    if (!y || !n.docView.dom.contains(y)) {
      let S = tt.find(n.docView, d);
      if (!S)
        return u > a.top + a.height / 2 ? a.to : a.from;
      ({ node: y, offset: w } = Tr(S.dom, c, f));
    }
    let v = n.docView.nearest(y);
    if (!v)
      return null;
    if (v.isWidget && ((r = v.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
      let S = v.dom.getBoundingClientRect();
      return t.y < S.top || t.y <= S.bottom && t.x <= (S.left + S.right) / 2 ? v.posAtStart : v.posAtEnd;
    } else
      return v.localPosFromDOM(y, w) + v.posAtStart;
  }
  function nl(n, t, e, i, s) {
    let r = Math.round((i - t.left) * n.defaultCharacterWidth);
    if (n.lineWrapping && e.height > n.defaultLineHeight * 1.5) {
      let l = n.viewState.heightOracle.textHeight, a = Math.floor((s - e.top - (n.defaultLineHeight - l) * 0.5) / l);
      r += a * n.viewState.heightOracle.lineLength;
    }
    let o = n.state.sliceDoc(e.from, e.to);
    return e.from + gr(o, r, n.state.tabSize);
  }
  function Au(n, t, e) {
    let i, s = n;
    if (n.nodeType != 3 || t != (i = n.nodeValue.length))
      return false;
    for (; ; ) {
      let r = s.nextSibling;
      if (r) {
        if (r.nodeName == "BR")
          break;
        return false;
      } else {
        let o = s.parentNode;
        if (!o || o.nodeName == "DIV")
          break;
        s = o;
      }
    }
    return qe(n, i - 1, i).getBoundingClientRect().right > e;
  }
  function Mu(n, t, e) {
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
    let i = n.nodeType == 1 ? n.getBoundingClientRect() : qe(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
    return e - i.left > 5;
  }
  function Br(n, t, e) {
    let i = n.lineBlockAt(t);
    if (Array.isArray(i.type)) {
      let s;
      for (let r of i.type) {
        if (r.from > t)
          break;
        if (!(r.to < t)) {
          if (r.from < t && r.to > t)
            return r;
          (!s || r.type == wt.Text && (s.type != r.type || (e < 0 ? r.from < t : r.to > t))) && (s = r);
        }
      }
      return s || i;
    }
    return i;
  }
  function Du(n, t, e, i) {
    let s = Br(n, t.head, t.assoc || -1), r = !i || s.type != wt.Text || !(n.lineWrapping || s.widgetLineBreaks) ? null : n.coordsAtPos(t.assoc < 0 && t.head > s.from ? t.head - 1 : t.head);
    if (r) {
      let o = n.dom.getBoundingClientRect(), l = n.textDirectionAt(s.from), a = n.posAtCoords({
        x: e == (l == Y.LTR) ? o.right - 1 : o.left + 1,
        y: (r.top + r.bottom) / 2
      });
      if (a != null)
        return b.cursor(a, e ? -1 : 1);
    }
    return b.cursor(e ? s.to : s.from, e ? -1 : 1);
  }
  function sl(n, t, e, i) {
    let s = n.state.doc.lineAt(t.head), r = n.bidiSpans(s), o = n.textDirectionAt(s.from);
    for (let l = t, a = null; ; ) {
      let h = uu(s, r, o, l, e), c = oh;
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
  function Ou(n, t, e) {
    let i = n.state.charCategorizer(t), s = i(e);
    return (r) => {
      let o = i(r);
      return s == J.Space && (s = o), s == o;
    };
  }
  function Tu(n, t, e, i) {
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
      let p = l + (u + d) * r, g = kh(n, {
        x: f,
        y: p
      }, false, r);
      if (p < a.top || p > a.bottom || (r < 0 ? g < s : g > s)) {
        let m = n.docView.coordsForChar(g), y = !m || p < m.top ? -1 : 1;
        return b.cursor(g, y, void 0, o);
      }
    }
  }
  function Hn(n, t, e) {
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
  function Ns(n, t, e) {
    let i = Hn(n.state.facet(lo).map((s) => s(n)), e.from, t.head > e.from ? -1 : 1);
    return i == e.from ? e : b.cursor(i, i < e.from ? 1 : -1);
  }
  const Di = "\uFFFF";
  class Bu {
    constructor(t, e) {
      this.points = t, this.text = "", this.lineSeparator = e.facet(I.lineSeparator);
    }
    append(t) {
      this.text += t;
    }
    lineBreak() {
      this.text += Di;
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
        let l = K.get(s), a = K.get(o);
        (l && a ? l.breakAfter : (l ? l.breakAfter : Gn(s)) || Gn(o) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > r) && this.lineBreak(), s = o;
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
      let e = K.get(t), i = e && e.overrideDOMText;
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
        (t.nodeType == 3 ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + (Eu(t, i.node, i.offset) ? e : 0));
    }
  }
  function Eu(n, t, e) {
    for (; ; ) {
      if (!t || e < se(t))
        return false;
      if (t == n)
        return true;
      e = ze(t) + 1, t = t.parentNode;
    }
  }
  class rl {
    constructor(t, e) {
      this.node = t, this.offset = e, this.pos = -1;
    }
  }
  class Ru {
    constructor(t, e, i, s) {
      this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = e > -1;
      let { impreciseHead: r, impreciseAnchor: o } = t.docView;
      if (t.state.readOnly && e > -1)
        this.newSel = null;
      else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, i, 0))) {
        let l = r || o ? [] : _u(t), a = new Bu(l, t.state);
        a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Iu(l, this.bounds.from);
      } else {
        let l = t.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !br(t.contentDOM, l.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !br(t.contentDOM, l.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(l.anchorNode, l.anchorOffset), c = t.viewport;
        if ((O.ios || O.chrome) && t.state.selection.main.empty && a != h && (c.from > 0 || c.to < t.state.doc.length)) {
          let f = Math.min(a, h), u = Math.max(a, h), d = c.from - f, p = c.to - u;
          (d == 0 || d == 1 || f == 0) && (p == 0 || p == -1 || u == t.state.doc.length) && (a = 0, h = t.state.doc.length);
        }
        this.newSel = b.single(h, a);
      }
    }
  }
  function Sh(n, t) {
    let e, { newSel: i } = t, s = n.state.selection.main, r = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
    if (t.bounds) {
      let { from: o, to: l } = t.bounds, a = s.from, h = null;
      (r === 8 || O.android && t.text.length < l - o) && (a = s.to, h = "end");
      let c = Pu(n.state.doc.sliceString(o, l, Di), t.text, a - o, h);
      c && (O.chrome && r == 13 && c.toB == c.from + 2 && t.text.slice(c.from, c.toB) == Di + Di && c.toB--, e = {
        from: o + c.from,
        to: o + c.toA,
        insert: W.of(t.text.slice(c.from, c.toB).split(Di))
      });
    } else
      i && (!n.hasFocus && n.state.facet(ae) || i.main.eq(s)) && (i = null);
    if (!e && !i)
      return false;
    if (!e && t.typeOver && !s.empty && i && i.main.empty ? e = {
      from: s.from,
      to: s.to,
      insert: n.state.doc.slice(s.from, s.to)
    } : (O.mac || O.android) && e && e.from == e.to && e.from == s.head - 1 && /^\. ?$/.test(e.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && e.insert.length == 2 && (i = b.single(i.main.anchor - 1, i.main.head - 1)), e = {
      from: e.from,
      to: e.to,
      insert: W.of([
        e.insert.toString().replace(".", " ")
      ])
    }) : e && e.from >= s.from && e.to <= s.to && (e.from != s.from || e.to != s.to) && s.to - s.from - (e.to - e.from) <= 4 ? e = {
      from: s.from,
      to: s.to,
      insert: n.state.doc.slice(s.from, e.from).append(e.insert).append(n.state.doc.slice(e.to, s.to))
    } : O.chrome && e && e.from == e.to && e.from == s.head && e.insert.toString() == `
 ` && n.lineWrapping && (i && (i = b.single(i.main.anchor - 1, i.main.head - 1)), e = {
      from: s.from,
      to: s.to,
      insert: W.of([
        " "
      ])
    }), e)
      return ho(n, e, i, r);
    if (i && !i.main.eq(s)) {
      let o = false, l = "select";
      return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (o = true), l = n.inputState.lastSelectionOrigin), n.dispatch({
        selection: i,
        scrollIntoView: o,
        userEvent: l
      }), true;
    } else
      return false;
  }
  function ho(n, t, e, i = -1) {
    if (O.ios && n.inputState.flushIOSKey(t))
      return true;
    let s = n.state.selection.main;
    if (O.android && (t.to == s.to && (t.from == s.from || t.from == s.from - 1 && n.state.sliceDoc(t.from, s.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && si(n.contentDOM, "Enter", 13) || (t.from == s.from - 1 && t.to == s.to && t.insert.length == 0 || i == 8 && t.insert.length < t.to - t.from && t.to > s.head) && si(n.contentDOM, "Backspace", 8) || t.from == s.from && t.to == s.to + 1 && t.insert.length == 0 && si(n.contentDOM, "Delete", 46)))
      return true;
    let r = t.insert.toString();
    n.inputState.composing >= 0 && n.inputState.composing++;
    let o, l = () => o || (o = Lu(n, t, e));
    return n.state.facet(fh).some((a) => a(n, t.from, t.to, r, l)) || n.dispatch(l()), true;
  }
  function Lu(n, t, e) {
    let i, s = n.state, r = s.selection.main;
    if (t.from >= r.from && t.to <= r.to && t.to - t.from >= (r.to - r.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && n.inputState.composing < 0) {
      let l = r.from < t.from ? s.sliceDoc(r.from, t.from) : "", a = r.to > t.to ? s.sliceDoc(t.to, r.to) : "";
      i = s.replaceSelection(n.state.toText(l + t.insert.sliceString(0, void 0, n.state.lineBreak) + a));
    } else {
      let l = s.changes(t), a = e && e.main.to <= l.newLength ? e.main : void 0;
      if (s.selection.ranges.length > 1 && n.inputState.composing >= 0 && t.to <= r.to && t.to >= r.to - 10) {
        let h = n.state.sliceDoc(t.from, t.to), c, f = e && vh(n, e.main.head);
        if (f) {
          let p = t.insert.length - (t.to - t.from);
          c = {
            from: f.from,
            to: f.to - p
          };
        } else
          c = n.state.doc.lineAt(r.head);
        let u = r.to - t.to, d = r.to - r.from;
        i = s.changeByRange((p) => {
          if (p.from == r.from && p.to == r.to)
            return {
              changes: l,
              range: a || p.map(l)
            };
          let g = p.to - u, m = g - h.length;
          if (p.to - p.from != d || n.state.sliceDoc(m, g) != h || p.to >= c.from && p.from <= c.to)
            return {
              range: p
            };
          let y = s.changes({
            from: m,
            to: g,
            insert: t.insert
          }), w = p.to - r.to;
          return {
            changes: y,
            range: a ? b.range(Math.max(0, a.anchor + w), Math.max(0, a.head + w)) : p.map(y)
          };
        });
      } else
        i = {
          changes: l,
          selection: a && s.selection.replaceRange(a)
        };
    }
    let o = "input.type";
    return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = false, o += ".compose", n.inputState.compositionFirstChange && (o += ".start", n.inputState.compositionFirstChange = false)), s.update(i, {
      userEvent: o,
      scrollIntoView: true
    });
  }
  function Pu(n, t, e, i) {
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
    return {
      from: r,
      toA: o,
      toB: l
    };
  }
  function _u(n) {
    let t = [];
    if (n.root.activeElement != n.contentDOM)
      return t;
    let { anchorNode: e, anchorOffset: i, focusNode: s, focusOffset: r } = n.observer.selectionRange;
    return e && (t.push(new rl(e, i)), (s != e || r != i) && t.push(new rl(s, r))), t;
  }
  function Iu(n, t) {
    if (n.length == 0)
      return null;
    let e = n[0].pos, i = n.length == 2 ? n[1].pos : e;
    return e > -1 && i > -1 ? b.single(e + t, i + t) : null;
  }
  class Nu {
    setSelectionOrigin(t) {
      this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
    }
    constructor(t) {
      this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, O.safari && t.contentDOM.addEventListener("input", () => null), O.gecko && Zu(t.contentDOM.ownerDocument);
    }
    handleEvent(t) {
      !ju(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(t.type, t)) : this.runHandlers(t.type, t));
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
      let e = Fu(t), i = this.handlers, s = this.view.contentDOM;
      for (let r in e)
        if (r != "scroll") {
          let o = !e[r].handlers.length, l = i[r];
          l && o != !l.handlers.length && (s.removeEventListener(r, this.handleEvent), l = null), l || s.addEventListener(r, this.handleEvent, {
            passive: o
          });
        }
      for (let r in i)
        r != "scroll" && !e[r] && s.removeEventListener(r, this.handleEvent);
      this.handlers = e;
    }
    keydown(t) {
      if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
        return true;
      if (this.tabFocusMode > 0 && t.keyCode != 27 && Ah.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), O.android && O.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8))
        return this.view.observer.delayAndroidKey(t.key, t.keyCode), true;
      let e;
      return O.ios && !t.synthetic && !t.altKey && !t.metaKey && ((e = Ch.find((i) => i.keyCode == t.keyCode)) && !t.ctrlKey || Hu.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), true) : (t.keyCode != 229 && this.view.observer.forceFlush(), false);
    }
    flushIOSKey(t) {
      let e = this.pendingIOSKey;
      return !e || e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString()) ? false : (this.pendingIOSKey = void 0, si(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : void 0));
    }
    ignoreDuringComposition(t) {
      return /^key/.test(t.type) ? this.composing > 0 ? true : O.safari && !O.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = false, true) : false : false;
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
  function ol(n, t) {
    return (e, i) => {
      try {
        return t.call(n, i, e);
      } catch (s) {
        Ct(e.state, s);
      }
    };
  }
  function Fu(n) {
    let t = /* @__PURE__ */ Object.create(null);
    function e(i) {
      return t[i] || (t[i] = {
        observers: [],
        handlers: []
      });
    }
    for (let i of n) {
      let s = i.spec, r = s && s.plugin.domEventHandlers, o = s && s.plugin.domEventObservers;
      if (r)
        for (let l in r) {
          let a = r[l];
          a && e(l).handlers.push(ol(i.value, a));
        }
      if (o)
        for (let l in o) {
          let a = o[l];
          a && e(l).observers.push(ol(i.value, a));
        }
    }
    for (let i in zt)
      e(i).handlers.push(zt[i]);
    for (let i in Ft)
      e(i).observers.push(Ft[i]);
    return t;
  }
  const Ch = [
    {
      key: "Backspace",
      keyCode: 8,
      inputType: "deleteContentBackward"
    },
    {
      key: "Enter",
      keyCode: 13,
      inputType: "insertParagraph"
    },
    {
      key: "Enter",
      keyCode: 13,
      inputType: "insertLineBreak"
    },
    {
      key: "Delete",
      keyCode: 46,
      inputType: "deleteContentForward"
    }
  ], Hu = "dthko", Ah = [
    16,
    17,
    18,
    20,
    91,
    92,
    224,
    225
  ], pn = 6;
  function gn(n) {
    return Math.max(0, n) * 0.7 + 8;
  }
  function Wu(n, t) {
    return Math.max(Math.abs(n.clientX - t.clientX), Math.abs(n.clientY - t.clientY));
  }
  class Vu {
    constructor(t, e, i, s) {
      this.view = t, this.startEvent = e, this.style = i, this.mustSelect = s, this.scrollSpeed = {
        x: 0,
        y: 0
      }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = Yf(t.contentDOM), this.atoms = t.state.facet(lo).map((o) => o(t));
      let r = t.contentDOM.ownerDocument;
      r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(I.allowMultipleSelections) && zu(t, e), this.dragging = $u(t, e) && Oh(e) == 1 ? null : false;
    }
    start(t) {
      this.dragging === false && this.select(t);
    }
    move(t) {
      if (t.buttons == 0)
        return this.destroy();
      if (this.dragging || this.dragging == null && Wu(this.startEvent, t) < 10)
        return;
      this.select(this.lastEvent = t);
      let e = 0, i = 0, s = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
      this.scrollParents.x && ({ left: s, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
      let a = ao(this.view);
      t.clientX - a.left <= s + pn ? e = -gn(s - t.clientX) : t.clientX + a.right >= o - pn && (e = gn(t.clientX - o)), t.clientY - a.top <= r + pn ? i = -gn(r - t.clientY) : t.clientY + a.bottom >= l - pn && (i = gn(t.clientY - l)), this.setScrollSpeed(e, i);
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
      this.scrollSpeed = {
        x: t,
        y: e
      }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
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
          let o = Hn(this.atoms, s.from, 0);
          o != s.from && (r = b.cursor(o, -1));
        } else {
          let o = Hn(this.atoms, s.from, -1), l = Hn(this.atoms, s.to, 1);
          (o != s.from || l != s.to) && (r = b.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
        }
        r && (e || (e = t.ranges.slice()), e[i] = r);
      }
      return e ? b.create(e, t.mainIndex) : t;
    }
    select(t) {
      let { view: e } = this, i = this.skipAtoms(this.style.get(t, this.extend, this.multiple));
      (this.mustSelect || !i.eq(e.state.selection, this.dragging === false)) && this.view.dispatch({
        selection: i,
        userEvent: "select.pointer"
      }), this.mustSelect = false;
    }
    update(t) {
      t.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
    }
  }
  function zu(n, t) {
    let e = n.state.facet(lh);
    return e.length ? e[0](t) : O.mac ? t.metaKey : t.ctrlKey;
  }
  function qu(n, t) {
    let e = n.state.facet(ah);
    return e.length ? e[0](t) : O.mac ? !t.altKey : !t.ctrlKey;
  }
  function $u(n, t) {
    let { main: e } = n.state.selection;
    if (e.empty)
      return false;
    let i = Vi(n.root);
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
  function ju(n, t) {
    if (!t.bubbles)
      return true;
    if (t.defaultPrevented)
      return false;
    for (let e = t.target, i; e != n.contentDOM; e = e.parentNode)
      if (!e || e.nodeType == 11 || (i = K.get(e)) && i.ignoreEvent(t))
        return false;
    return true;
  }
  const zt = /* @__PURE__ */ Object.create(null), Ft = /* @__PURE__ */ Object.create(null), Mh = O.ie && O.ie_version < 15 || O.ios && O.webkit_version < 604;
  function Ku(n) {
    let t = n.dom.parentNode;
    if (!t)
      return;
    let e = t.appendChild(document.createElement("textarea"));
    e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
      n.focus(), e.remove(), Dh(n, e.value);
    }, 50);
  }
  function ms(n, t, e) {
    for (let i of n.facet(t))
      e = i(e, n);
    return e;
  }
  function Dh(n, t) {
    t = ms(n.state, so, t);
    let { state: e } = n, i, s = 1, r = e.toText(t), o = r.lines == e.selection.ranges.length;
    if (Er != null && e.selection.ranges.every((a) => a.empty) && Er == r.toString()) {
      let a = -1;
      i = e.changeByRange((h) => {
        let c = e.doc.lineAt(h.from);
        if (c.from == a)
          return {
            range: h
          };
        a = c.from;
        let f = e.toText((o ? r.line(s++).text : t) + e.lineBreak);
        return {
          changes: {
            from: c.from,
            insert: f
          },
          range: b.cursor(h.from + f.length)
        };
      });
    } else
      o ? i = e.changeByRange((a) => {
        let h = r.line(s++);
        return {
          changes: {
            from: a.from,
            to: a.to,
            insert: h.text
          },
          range: b.cursor(a.from + h.length)
        };
      }) : i = e.replaceSelection(r);
    n.dispatch(i, {
      userEvent: "input.paste",
      scrollIntoView: true
    });
  }
  Ft.scroll = (n) => {
    n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
  };
  zt.keydown = (n, t) => (n.inputState.setSelectionOrigin("select"), t.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3), false);
  Ft.touchstart = (n, t) => {
    n.inputState.lastTouchTime = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
  };
  Ft.touchmove = (n) => {
    n.inputState.setSelectionOrigin("select.pointer");
  };
  zt.mousedown = (n, t) => {
    if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)
      return false;
    let e = null;
    for (let i of n.state.facet(hh))
      if (e = i(n, t), e)
        break;
    if (!e && t.button == 0 && (e = Yu(n, t)), e) {
      let i = !n.hasFocus;
      n.inputState.startMouseSelection(new Vu(n, t, e, i)), i && n.observer.ignore(() => {
        za(n.contentDOM);
        let r = n.root.activeElement;
        r && !r.contains(n.contentDOM) && r.blur();
      });
      let s = n.inputState.mouseSelection;
      if (s)
        return s.start(t), s.dragging === false;
    }
    return false;
  };
  function ll(n, t, e, i) {
    if (i == 1)
      return b.cursor(t, e);
    if (i == 2)
      return ku(n.state, t, e);
    {
      let s = tt.find(n.docView, t), r = n.state.doc.lineAt(s ? s.posAtEnd : t), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
      return l < n.state.doc.length && l == r.to && l++, b.range(o, l);
    }
  }
  let al = (n, t, e) => t >= e.top && t <= e.bottom && n >= e.left && n <= e.right;
  function Uu(n, t, e, i) {
    let s = tt.find(n.docView, t);
    if (!s)
      return 1;
    let r = t - s.posAtStart;
    if (r == 0)
      return 1;
    if (r == s.length)
      return -1;
    let o = s.coordsAt(r, -1);
    if (o && al(e, i, o))
      return -1;
    let l = s.coordsAt(r, 1);
    return l && al(e, i, l) ? 1 : o && o.bottom >= i ? -1 : 1;
  }
  function hl(n, t) {
    let e = n.posAtCoords({
      x: t.clientX,
      y: t.clientY
    }, false);
    return {
      pos: e,
      bias: Uu(n, e, t.clientX, t.clientY)
    };
  }
  const Gu = O.ie && O.ie_version <= 11;
  let cl = null, fl = 0, ul = 0;
  function Oh(n) {
    if (!Gu)
      return n.detail;
    let t = cl, e = ul;
    return cl = n, ul = Date.now(), fl = !t || e > Date.now() - 400 && Math.abs(t.clientX - n.clientX) < 2 && Math.abs(t.clientY - n.clientY) < 2 ? (fl + 1) % 3 : 1;
  }
  function Yu(n, t) {
    let e = hl(n, t), i = Oh(t), s = n.state.selection;
    return {
      update(r) {
        r.docChanged && (e.pos = r.changes.mapPos(e.pos), s = s.map(r.changes));
      },
      get(r, o, l) {
        let a = hl(n, r), h, c = ll(n, a.pos, a.bias, i);
        if (e.pos != a.pos && !o) {
          let f = ll(n, e.pos, e.bias, i), u = Math.min(f.from, c.from), d = Math.max(f.to, c.to);
          c = u < c.from ? b.range(u, d) : b.range(d, u);
        }
        return o ? s.replaceRange(s.main.extend(c.from, c.to)) : l && i == 1 && s.ranges.length > 1 && (h = Ju(s, a.pos)) ? h : l ? s.addRange(c) : b.create([
          c
        ]);
      }
    };
  }
  function Ju(n, t) {
    for (let e = 0; e < n.ranges.length; e++) {
      let { from: i, to: s } = n.ranges[e];
      if (i <= t && s >= t)
        return b.create(n.ranges.slice(0, e).concat(n.ranges.slice(e + 1)), n.mainIndex == e ? 0 : n.mainIndex - (n.mainIndex > e ? 1 : 0));
    }
    return null;
  }
  zt.dragstart = (n, t) => {
    let { selection: { main: e } } = n.state;
    if (t.target.draggable) {
      let s = n.docView.nearest(t.target);
      if (s && s.isWidget) {
        let r = s.posAtStart, o = r + s.length;
        (r >= e.to || o <= e.from) && (e = b.range(r, o));
      }
    }
    let { inputState: i } = n;
    return i.mouseSelection && (i.mouseSelection.dragging = true), i.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", ms(n.state, ro, n.state.sliceDoc(e.from, e.to))), t.dataTransfer.effectAllowed = "copyMove"), false;
  };
  zt.dragend = (n) => (n.inputState.draggedContent = null, false);
  function dl(n, t, e, i) {
    if (e = ms(n.state, so, e), !e)
      return;
    let s = n.posAtCoords({
      x: t.clientX,
      y: t.clientY
    }, false), { draggedContent: r } = n.inputState, o = i && r && qu(n, t) ? {
      from: r.from,
      to: r.to
    } : null, l = {
      from: s,
      insert: e
    }, a = n.state.changes(o ? [
      o,
      l
    ] : l);
    n.focus(), n.dispatch({
      changes: a,
      selection: {
        anchor: a.mapPos(s, -1),
        head: a.mapPos(s, 1)
      },
      userEvent: o ? "move.drop" : "input.drop"
    }), n.inputState.draggedContent = null;
  }
  zt.drop = (n, t) => {
    if (!t.dataTransfer)
      return false;
    if (n.state.readOnly)
      return true;
    let e = t.dataTransfer.files;
    if (e && e.length) {
      let i = Array(e.length), s = 0, r = () => {
        ++s == e.length && dl(n, t, i.filter((o) => o != null).join(n.state.lineBreak), false);
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
        return dl(n, t, i, true), true;
    }
    return false;
  };
  zt.paste = (n, t) => {
    if (n.state.readOnly)
      return true;
    n.observer.flush();
    let e = Mh ? null : t.clipboardData;
    return e ? (Dh(n, e.getData("text/plain") || e.getData("text/uri-list")), true) : (Ku(n), false);
  };
  function Xu(n, t) {
    let e = n.dom.parentNode;
    if (!e)
      return;
    let i = e.appendChild(document.createElement("textarea"));
    i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = t, i.focus(), i.selectionEnd = t.length, i.selectionStart = 0, setTimeout(() => {
      i.remove(), n.focus();
    }, 50);
  }
  function Qu(n) {
    let t = [], e = [], i = false;
    for (let s of n.selection.ranges)
      s.empty || (t.push(n.sliceDoc(s.from, s.to)), e.push(s));
    if (!t.length) {
      let s = -1;
      for (let { from: r } of n.selection.ranges) {
        let o = n.doc.lineAt(r);
        o.number > s && (t.push(o.text), e.push({
          from: o.from,
          to: Math.min(n.doc.length, o.to + 1)
        })), s = o.number;
      }
      i = true;
    }
    return {
      text: ms(n, ro, t.join(n.lineBreak)),
      ranges: e,
      linewise: i
    };
  }
  let Er = null;
  zt.copy = zt.cut = (n, t) => {
    let { text: e, ranges: i, linewise: s } = Qu(n.state);
    if (!e && !s)
      return false;
    Er = s ? e : null, t.type == "cut" && !n.state.readOnly && n.dispatch({
      changes: i,
      scrollIntoView: true,
      userEvent: "delete.cut"
    });
    let r = Mh ? null : t.clipboardData;
    return r ? (r.clearData(), r.setData("text/plain", e), true) : (Xu(n, e), false);
  };
  const Th = pe.define();
  function Bh(n, t) {
    let e = [];
    for (let i of n.facet(uh)) {
      let s = i(n, t);
      s && e.push(s);
    }
    return e.length ? n.update({
      effects: e,
      annotations: Th.of(true)
    }) : null;
  }
  function Eh(n) {
    setTimeout(() => {
      let t = n.hasFocus;
      if (t != n.inputState.notifiedFocused) {
        let e = Bh(n.state, t);
        e ? n.dispatch(e) : n.update([]);
      }
    }, 10);
  }
  Ft.focus = (n) => {
    n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), Eh(n);
  };
  Ft.blur = (n) => {
    n.observer.clearSelectionRange(), Eh(n);
  };
  Ft.compositionstart = Ft.compositionupdate = (n) => {
    n.observer.editContext || (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = true), n.inputState.composing < 0 && (n.inputState.composing = 0));
  };
  Ft.compositionend = (n) => {
    n.observer.editContext || (n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = true, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, O.chrome && O.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
      n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
    }, 50));
  };
  Ft.contextmenu = (n) => {
    n.inputState.lastContextMenu = Date.now();
  };
  zt.beforeinput = (n, t) => {
    var e, i;
    if (t.inputType == "insertReplacementText" && n.observer.editContext) {
      let r = (e = t.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain"), o = t.getTargetRanges();
      if (r && o.length) {
        let l = o[0], a = n.posAtDOM(l.startContainer, l.startOffset), h = n.posAtDOM(l.endContainer, l.endOffset);
        return ho(n, {
          from: a,
          to: h,
          insert: n.state.toText(r)
        }, null), true;
      }
    }
    let s;
    if (O.chrome && O.android && (s = Ch.find((r) => r.inputType == t.inputType)) && (n.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
      let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
      setTimeout(() => {
        var o;
        (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
      }, 100);
    }
    return O.ios && t.inputType == "deleteContentForward" && n.observer.flushSoon(), O.safari && t.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => Ft.compositionend(n, t), 20), false;
  };
  const pl = /* @__PURE__ */ new Set();
  function Zu(n) {
    pl.has(n) || (pl.add(n), n.addEventListener("copy", () => {
    }), n.addEventListener("cut", () => {
    }));
  }
  const gl = [
    "pre-wrap",
    "normal",
    "pre-line",
    "break-spaces"
  ];
  let di = false;
  function ml() {
    di = false;
  }
  class td {
    constructor(t) {
      this.lineWrapping = t, this.doc = W.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
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
      return gl.indexOf(t) > -1 != this.lineWrapping;
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
      let l = gl.indexOf(t) > -1, a = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != l;
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
  class ed {
    constructor(t, e) {
      this.from = t, this.heights = e, this.index = 0;
    }
    get more() {
      return this.index < this.heights.length;
    }
  }
  class Qt {
    constructor(t, e, i, s, r) {
      this.from = t, this.length = e, this.top = i, this.height = s, this._content = r;
    }
    get type() {
      return typeof this._content == "number" ? wt.Text : Array.isArray(this._content) ? this._content : this._content.type;
    }
    get to() {
      return this.from + this.length;
    }
    get bottom() {
      return this.top + this.height;
    }
    get widget() {
      return this._content instanceof De ? this._content.widget : null;
    }
    get widgetLineBreaks() {
      return typeof this._content == "number" ? this._content : 0;
    }
    join(t) {
      let e = (Array.isArray(this._content) ? this._content : [
        this
      ]).concat(Array.isArray(t._content) ? t._content : [
        t
      ]);
      return new Qt(this.from, this.length + t.length, this.top, this.height + t.height, e);
    }
  }
  var G = function(n) {
    return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
  }(G || (G = {}));
  const Wn = 1e-3;
  class xt {
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
      this.height != t && (Math.abs(this.height - t) > Wn && (di = true), this.height = t);
    }
    replace(t, e, i) {
      return xt.of(i);
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
        let { fromA: a, toA: h, fromB: c, toB: f } = s[l], u = r.lineAt(a, G.ByPosNoHeight, i.setDoc(e), 0, 0), d = u.to >= h ? u : r.lineAt(h, G.ByPosNoHeight, i, 0, 0);
        for (f += d.to - h, h = d.to; l > 0 && u.from <= s[l - 1].toA; )
          a = s[l - 1].fromA, c = s[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, G.ByPosNoHeight, i, 0, 0));
        c += u.from - a, a = u.from;
        let p = co.build(i.setDoc(o), t, c, f);
        r = Xn(r, r.replace(a, h, p));
      }
      return r.updateHeight(i, 0);
    }
    static empty() {
      return new Ot(0, 0);
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
      return t[e - 1] == null ? (o = 1, e--) : t[e] == null && (o = 1, i++), new id(xt.of(t.slice(0, e)), o, xt.of(t.slice(i)));
    }
  }
  function Xn(n, t) {
    return n == t ? n : (n.constructor != t.constructor && (di = true), t);
  }
  xt.prototype.size = 1;
  class Rh extends xt {
    constructor(t, e, i) {
      super(t, e), this.deco = i;
    }
    blockAt(t, e, i, s) {
      return new Qt(s, this.length, i, this.height, this.deco || 0);
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
  class Ot extends Rh {
    constructor(t, e) {
      super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
    }
    blockAt(t, e, i, s) {
      return new Qt(s, this.length, i, this.height, this.breaks);
    }
    replace(t, e, i) {
      let s = i[0];
      return i.length == 1 && (s instanceof Ot || s instanceof ot && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof ot ? s = new Ot(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = false), s) : xt.of(i);
    }
    updateHeight(t, e = 0, i = false, s) {
      return s && s.from <= e && s.more ? this.setHeight(s.heights[s.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight), this.outdated = false, this;
    }
    toString() {
      return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
    }
  }
  class ot extends xt {
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
      return {
        firstLine: i,
        lastLine: s,
        perLine: o,
        perChar: l
      };
    }
    blockAt(t, e, i, s) {
      let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(e, s);
      if (e.lineWrapping) {
        let h = s + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length)), c = e.doc.lineAt(h), f = l + c.length * a, u = Math.max(i, t - f / 2);
        return new Qt(c.from, c.length, u, f, 0);
      } else {
        let h = Math.max(0, Math.min(o - r, Math.floor((t - i) / l))), { from: c, length: f } = e.doc.line(r + h);
        return new Qt(c, f, i + l * h, l, 0);
      }
    }
    lineAt(t, e, i, s, r) {
      if (e == G.ByHeight)
        return this.blockAt(t, i, s, r);
      if (e == G.ByPosNoHeight) {
        let { from: d, to: p } = i.doc.lineAt(t);
        return new Qt(d, p - d, 0, 0, 0);
      }
      let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), h = i.doc.lineAt(t), c = l + h.length * a, f = h.number - o, u = s + l * f + a * (h.from - r - f);
      return new Qt(h.from, h.length, Math.max(s, Math.min(u, s + this.height - c)), c, 0);
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
        o(new Qt(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
      }
    }
    replace(t, e, i) {
      let s = this.length - e;
      if (s > 0) {
        let r = i[i.length - 1];
        r instanceof ot ? i[i.length - 1] = new ot(r.length + s) : i.push(null, new ot(s - 1));
      }
      if (t > 0) {
        let r = i[0];
        r instanceof ot ? i[0] = new ot(t + r.length) : i.unshift(new ot(t - 1), null);
      }
      return xt.of(i);
    }
    decomposeLeft(t, e) {
      e.push(new ot(t - 1), null);
    }
    decomposeRight(t, e) {
      e.push(null, new ot(this.length - t - 1));
    }
    updateHeight(t, e = 0, i = false, s) {
      let r = e + this.length;
      if (s && s.from <= e + this.length && s.more) {
        let o = [], l = Math.max(e, s.from), a = -1;
        for (s.from > e && o.push(new ot(s.from - e - 1).updateHeight(t, e)); l <= r && s.more; ) {
          let c = t.doc.lineAt(l).length;
          o.length && o.push(null);
          let f = s.heights[s.index++];
          a == -1 ? a = f : Math.abs(f - a) >= Wn && (a = -2);
          let u = new Ot(c, f);
          u.outdated = false, o.push(u), l += c + 1;
        }
        l <= r && o.push(null, new ot(r - l).updateHeight(t, l));
        let h = xt.of(o);
        return (a < 0 || Math.abs(h.height - this.height) >= Wn || Math.abs(a - this.heightMetrics(t, e).perLine) >= Wn) && (di = true), Xn(this, h);
      } else
        (i || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = false);
      return this;
    }
    toString() {
      return `gap(${this.length})`;
    }
  }
  class id extends xt {
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
      let o = s + this.left.height, l = r + this.left.length + this.break, a = e == G.ByHeight ? t < o : t < l, h = a ? this.left.lineAt(t, e, i, s, r) : this.right.lineAt(t, e, i, o, l);
      if (this.break || (a ? h.to < l : h.from > l))
        return h;
      let c = e == G.ByPosNoHeight ? G.ByPosNoHeight : G.ByPos;
      return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, s, r).join(h);
    }
    forEachLine(t, e, i, s, r, o) {
      let l = s + this.left.height, a = r + this.left.length + this.break;
      if (this.break)
        t < a && this.left.forEachLine(t, e, i, s, r, o), e >= a && this.right.forEachLine(t, e, i, l, a, o);
      else {
        let h = this.lineAt(a, G.ByPos, i, s, r);
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
      if (t > 0 && yl(r, o - 1), e < this.length) {
        let l = r.length;
        this.decomposeRight(e, r), yl(r, l);
      }
      return xt.of(r);
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
      return t.size > 2 * e.size || e.size > 2 * t.size ? xt.of(this.break ? [
        t,
        null,
        e
      ] : [
        t,
        e
      ]) : (this.left = Xn(this.left, t), this.right = Xn(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
    }
    updateHeight(t, e = 0, i = false, s) {
      let { left: r, right: o } = this, l = e + r.length + this.break, a = null;
      return s && s.from <= e + r.length && s.more ? a = r = r.updateHeight(t, e, i, s) : r.updateHeight(t, e, i), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(t, l, i, s) : o.updateHeight(t, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
    }
    toString() {
      return this.left + (this.break ? " " : "-") + this.right;
    }
  }
  function yl(n, t) {
    let e, i;
    n[t] == null && (e = n[t - 1]) instanceof ot && (i = n[t + 1]) instanceof ot && n.splice(t - 1, 3, new ot(e.length + 1 + i.length));
  }
  const nd = 5;
  class co {
    constructor(t, e) {
      this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
    }
    get isCovered() {
      return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    }
    span(t, e) {
      if (this.lineStart > -1) {
        let i = Math.min(e, this.lineEnd), s = this.nodes[this.nodes.length - 1];
        s instanceof Ot ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new Ot(i - this.pos, -1)), this.writtenTo = i, e > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
      }
      this.pos = e;
    }
    point(t, e, i) {
      if (t < e || i.heightRelevant) {
        let s = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
        s < 0 && (s = this.oracle.lineHeight);
        let o = e - t;
        i.block ? this.addBlock(new Rh(o, s, i)) : (o || r || s >= nd) && this.addLineDeco(s, r, o);
      } else
        e > t && this.span(t, e);
      this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
    }
    enterLine() {
      if (this.lineStart > -1)
        return;
      let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
      this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new Ot(this.pos - t, -1)), this.writtenTo = this.pos;
    }
    blankContent(t, e) {
      let i = new ot(e - t);
      return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
    }
    ensureLine() {
      this.enterLine();
      let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
      if (t instanceof Ot)
        return t;
      let e = new Ot(0, -1);
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
      this.lineStart > -1 && !(e instanceof Ot) && !this.isCovered ? this.nodes.push(new Ot(0, -1)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
      let i = t;
      for (let s of this.nodes)
        s instanceof Ot && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
      return this.nodes;
    }
    static build(t, e, i, s) {
      let r = new co(i, t);
      return H.spans(e, i, s, r, 0), r.finish(i);
    }
  }
  function sd(n, t, e) {
    let i = new rd();
    return H.compare(n, t, e, i, 0), i.changes;
  }
  class rd {
    constructor() {
      this.changes = [];
    }
    compareRange() {
    }
    comparePoint(t, e, i, s) {
      (t < e || i && i.heightRelevant || s && s.heightRelevant) && Fn(t, e, this.changes, 5);
    }
  }
  function od(n, t) {
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
    return {
      left: r - e.left,
      right: Math.max(r, o) - e.left,
      top: l - (e.top + t),
      bottom: Math.max(l, a) - (e.top + t)
    };
  }
  function ld(n) {
    let t = n.getBoundingClientRect(), e = n.ownerDocument.defaultView || window;
    return t.left < e.innerWidth && t.right > 0 && t.top < e.innerHeight && t.bottom > 0;
  }
  function ad(n, t) {
    let e = n.getBoundingClientRect();
    return {
      left: 0,
      right: e.right - e.left,
      top: t,
      bottom: e.bottom - (e.top + t)
    };
  }
  class Fs {
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
      return E.replace({
        widget: new hd(this.displaySize * (e ? t.scaleY : t.scaleX), e)
      }).range(this.from, this.to);
    }
  }
  class hd extends ge {
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
  class bl {
    constructor(t) {
      this.state = t, this.pixelViewport = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: 0
      }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = wl, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = Y.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
      let e = t.facet(oo).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
      this.heightOracle = new td(e), this.stateDeco = t.facet(zi).filter((i) => typeof i != "function"), this.heightMap = xt.empty().applyChanges(this.stateDeco, W.empty, this.heightOracle.setDoc(t.doc), [
        new It(0, 0, 0, t.doc.length)
      ]);
      for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
        ;
      this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = E.set(this.lineGaps.map((i) => i.draw(this, false))), this.computeVisibleRanges();
    }
    updateForViewport() {
      let t = [
        this.viewport
      ], { main: e } = this.state.selection;
      for (let i = 0; i <= 1; i++) {
        let s = i ? e.head : e.anchor;
        if (!t.some(({ from: r, to: o }) => s >= r && s <= o)) {
          let { from: r, to: o } = this.lineBlockAt(s);
          t.push(new mn(r, o));
        }
      }
      return this.viewports = t.sort((i, s) => i.from - s.from), this.updateScaler();
    }
    updateScaler() {
      let t = this.scaler;
      return this.scaler = this.heightMap.height <= 7e6 ? wl : new fo(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2;
    }
    updateViewportLines() {
      this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
        this.viewportLines.push(Oi(t, this.scaler));
      });
    }
    update(t, e = null) {
      this.state = t.state;
      let i = this.stateDeco;
      this.stateDeco = this.state.facet(zi).filter((c) => typeof c != "function");
      let s = t.changedRanges, r = It.extendWithRanges(s, sd(i, this.stateDeco, t ? t.changes : et.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
      ml(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || di) && (t.flags |= 2), l ? (this.scrollAnchorPos = t.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
      let a = r.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
      (e && (e.range.head < a.from || e.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, e));
      let h = a.from != this.viewport.from || a.to != this.viewport.to;
      this.viewport = a, t.flags |= this.updateForViewport(), (h || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(t.changes), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(ph) && (this.mustEnforceCursorAssoc = true);
    }
    measure(t) {
      let e = t.contentDOM, i = window.getComputedStyle(e), s = this.heightOracle, r = i.whiteSpace;
      this.defaultTextDirection = i.direction == "rtl" ? Y.RTL : Y.LTR;
      let o = this.heightOracle.mustRefreshForWrapping(r), l = e.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
      this.contentDOMHeight = l.height, this.mustMeasureContent = false;
      let h = 0, c = 0;
      if (l.width && l.height) {
        let { scaleX: S, scaleY: x } = Va(e, l);
        (S > 5e-3 && Math.abs(this.scaleX - S) > 5e-3 || x > 5e-3 && Math.abs(this.scaleY - x) > 5e-3) && (this.scaleX = S, this.scaleY = x, h |= 16, o = a = true);
      }
      let f = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
      (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, h |= 18), this.editorWidth != t.scrollDOM.clientWidth && (s.lineWrapping && (a = true), this.editorWidth = t.scrollDOM.clientWidth, h |= 16);
      let d = t.scrollDOM.scrollTop * this.scaleY;
      this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = $a(t.scrollDOM);
      let p = (this.printing ? ad : od)(e, this.paddingTop), g = p.top - this.pixelViewport.top, m = p.bottom - this.pixelViewport.bottom;
      this.pixelViewport = p;
      let y = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
      if (y != this.inView && (this.inView = y, y && (a = true)), !this.inView && !this.scrollTarget && !ld(t.dom))
        return 0;
      let w = l.width;
      if ((this.contentDOMWidth != w || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = t.scrollDOM.clientHeight, h |= 16), a) {
        let S = t.docView.measureVisibleLineHeights(this.viewport);
        if (s.mustRefreshForHeights(S) && (o = true), o || s.lineWrapping && Math.abs(w - this.contentDOMWidth) > s.charWidth) {
          let { lineHeight: x, charWidth: k, textHeight: A } = t.docView.measureTextSize();
          o = x > 0 && s.refresh(r, x, k, A, w / k, S), o && (t.docView.minWidth = 0, h |= 16);
        }
        g > 0 && m > 0 ? c = Math.max(g, m) : g < 0 && m < 0 && (c = Math.min(g, m)), ml();
        for (let x of this.viewports) {
          let k = x.from == this.viewport.from ? S : t.docView.measureVisibleLineHeights(x);
          this.heightMap = (o ? xt.empty().applyChanges(this.stateDeco, W.empty, this.heightOracle, [
            new It(0, 0, 0, t.state.doc.length)
          ]) : this.heightMap).updateHeight(s, 0, o, new ed(x.from, k));
        }
        di && (h |= 2);
      }
      let v = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
      return v && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || v) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, t)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, t.docView.enforceCursorAssoc()), h;
    }
    get visibleTop() {
      return this.scaler.fromDOM(this.pixelViewport.top);
    }
    get visibleBottom() {
      return this.scaler.fromDOM(this.pixelViewport.bottom);
    }
    getViewport(t, e) {
      let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new mn(s.lineAt(o - i * 1e3, G.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, G.ByHeight, r, 0, 0).to);
      if (e) {
        let { head: h } = e.range;
        if (h < a.from || h > a.to) {
          let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(h, G.ByPos, r, 0, 0), u;
          e.y == "center" ? u = (f.top + f.bottom) / 2 - c / 2 : e.y == "start" || e.y == "nearest" && h < a.from ? u = f.top : u = f.bottom - c, a = new mn(s.lineAt(u - 1e3 / 2, G.ByHeight, r, 0, 0).from, s.lineAt(u + c + 1e3 / 2, G.ByHeight, r, 0, 0).to);
        }
      }
      return a;
    }
    mapViewport(t, e) {
      let i = e.mapPos(t.from, -1), s = e.mapPos(t.to, 1);
      return new mn(this.heightMap.lineAt(i, G.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, G.ByPos, this.heightOracle, 0, 0).to);
    }
    viewportIsAppropriate({ from: t, to: e }, i = 0) {
      if (!this.inView)
        return true;
      let { top: s } = this.heightMap.lineAt(t, G.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(e, G.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
      return (t == 0 || s <= o - Math.max(10, Math.min(-i, 250))) && (e == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) && s > o - 2 * 1e3 && r < l + 2 * 1e3;
    }
    mapLineGaps(t, e) {
      if (!t.length || e.empty)
        return t;
      let i = [];
      for (let s of t)
        e.touchesRange(s.from, s.to) || i.push(new Fs(e.mapPos(s.from), e.mapPos(s.to), s.size, s.displaySize));
      return i;
    }
    ensureLineGaps(t, e) {
      let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, r = s >> 1, o = s << 1;
      if (this.defaultTextDirection != Y.LTR && !i)
        return [];
      let l = [], a = (c, f, u, d) => {
        if (f - c < r)
          return;
        let p = this.state.selection.main, g = [
          p.from
        ];
        p.empty || g.push(p.to);
        for (let y of g)
          if (y > c && y < f) {
            a(c, y - 10, u, d), a(y + 10, f, u, d);
            return;
          }
        let m = fd(t, (y) => y.from >= u.from && y.to <= u.to && Math.abs(y.from - c) < r && Math.abs(y.to - f) < r && !g.some((w) => y.from < w && y.to > w));
        if (!m) {
          if (f < u.to && e && i && e.visibleRanges.some((v) => v.from <= f && v.to >= f)) {
            let v = e.moveToLineBoundary(b.cursor(f), false, true).head;
            v > c && (f = v);
          }
          let y = this.gapSize(u, c, f, d), w = i || y < 2e6 ? y : 2e6;
          m = new Fs(c, f, y, w);
        }
        l.push(m);
      }, h = (c) => {
        if (c.length < o || c.type != wt.Text)
          return;
        let f = cd(c.from, c.to, this.stateDeco);
        if (f.total < o)
          return;
        let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
        if (i) {
          let g = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, y;
          if (u != null) {
            let w = bn(f, u), v = ((this.visibleBottom - this.visibleTop) / 2 + g) / c.height;
            m = w - v, y = w + v;
          } else
            m = (this.visibleTop - c.top - g) / c.height, y = (this.visibleBottom - c.top + g) / c.height;
          d = yn(f, m), p = yn(f, y);
        } else {
          let g = f.total * this.heightOracle.charWidth, m = s * this.heightOracle.charWidth, y = 0;
          if (g > 2e6)
            for (let k of t)
              k.from >= c.from && k.from < c.to && k.size != k.displaySize && k.from * this.heightOracle.charWidth + y < this.pixelViewport.left && (y = k.size - k.displaySize);
          let w = this.pixelViewport.left + y, v = this.pixelViewport.right + y, S, x;
          if (u != null) {
            let k = bn(f, u), A = ((v - w) / 2 + m) / g;
            S = k - A, x = k + A;
          } else
            S = (w - m) / g, x = (v + m) / g;
          d = yn(f, S), p = yn(f, x);
        }
        d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
      };
      for (let c of this.viewportLines)
        Array.isArray(c.type) ? c.type.forEach(h) : h(c);
      return l;
    }
    gapSize(t, e, i, s) {
      let r = bn(s, i) - bn(s, e);
      return this.heightOracle.lineWrapping ? t.height * r : s.total * this.heightOracle.charWidth * r;
    }
    updateLineGaps(t) {
      Fs.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = E.set(t.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
    }
    computeVisibleRanges(t) {
      let e = this.stateDeco;
      this.lineGaps.length && (e = e.concat(this.lineGapDeco));
      let i = [];
      H.spans(e, this.viewport.from, this.viewport.to, {
        span(r, o) {
          i.push({
            from: r,
            to: o
          });
        },
        point() {
        }
      }, 20);
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
      return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || Oi(this.heightMap.lineAt(t, G.ByPos, this.heightOracle, 0, 0), this.scaler);
    }
    lineBlockAtHeight(t) {
      return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e) => e.top <= t && e.bottom >= t) || Oi(this.heightMap.lineAt(this.scaler.fromDOM(t), G.ByHeight, this.heightOracle, 0, 0), this.scaler);
    }
    scrollAnchorAt(t) {
      let e = this.lineBlockAtHeight(t + 8);
      return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
    }
    elementAtHeight(t) {
      return Oi(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
    }
    get docHeight() {
      return this.scaler.toDOM(this.heightMap.height);
    }
    get contentHeight() {
      return this.docHeight + this.paddingTop + this.paddingBottom;
    }
  }
  class mn {
    constructor(t, e) {
      this.from = t, this.to = e;
    }
  }
  function cd(n, t, e) {
    let i = [], s = n, r = 0;
    return H.spans(e, n, t, {
      span() {
      },
      point(o, l) {
        o > s && (i.push({
          from: s,
          to: o
        }), r += o - s), s = l;
      }
    }, 20), s < t && (i.push({
      from: s,
      to: t
    }), r += t - s), {
      total: r,
      ranges: i
    };
  }
  function yn({ total: n, ranges: t }, e) {
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
  function bn(n, t) {
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
  function fd(n, t) {
    for (let e of n)
      if (t(e))
        return e;
  }
  const wl = {
    toDOM(n) {
      return n;
    },
    fromDOM(n) {
      return n;
    },
    scale: 1,
    eq(n) {
      return n == this;
    }
  };
  class fo {
    constructor(t, e, i) {
      let s = 0, r = 0, o = 0;
      this.viewports = i.map(({ from: l, to: a }) => {
        let h = e.lineAt(l, G.ByPos, t, 0, 0).top, c = e.lineAt(a, G.ByPos, t, 0, 0).bottom;
        return s += c - h, {
          from: l,
          to: a,
          top: h,
          bottom: c,
          domTop: 0,
          domBottom: 0
        };
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
      return t instanceof fo ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, i) => e.from == t.viewports[i].from && e.to == t.viewports[i].to) : false;
    }
  }
  function Oi(n, t) {
    if (t.scale == 1)
      return n;
    let e = t.toDOM(n.top), i = t.toDOM(n.bottom);
    return new Qt(n.from, n.length, e, i - e, Array.isArray(n._content) ? n._content.map((s) => Oi(s, t)) : n._content);
  }
  const wn = T.define({
    combine: (n) => n.join(" ")
  }), Rr = T.define({
    combine: (n) => n.indexOf(true) > -1
  }), Lr = Ae.newName(), Lh = Ae.newName(), Ph = Ae.newName(), _h = {
    "&light": "." + Lh,
    "&dark": "." + Ph
  };
  function Pr(n, t, e) {
    return new Ae(t, {
      finish(i) {
        return /&/.test(i) ? i.replace(/&\w*/, (s) => {
          if (s == "&")
            return n;
          if (!e || !e[s])
            throw new RangeError(`Unsupported selector: ${s}`);
          return e[s];
        }) : n + " " + i;
      }
    });
  }
  const ud = Pr("." + Lr, {
    "&": {
      position: "relative !important",
      boxSizing: "border-box",
      "&.cm-focused": {
        outline: "1px dotted #212121"
      },
      display: "flex !important",
      flexDirection: "column"
    },
    ".cm-scroller": {
      display: "flex !important",
      alignItems: "flex-start !important",
      fontFamily: "monospace",
      lineHeight: 1.4,
      height: "100%",
      overflowX: "auto",
      position: "relative",
      zIndex: 0,
      overflowAnchor: "none"
    },
    ".cm-content": {
      margin: 0,
      flexGrow: 2,
      flexShrink: 0,
      display: "block",
      whiteSpace: "pre",
      wordWrap: "normal",
      boxSizing: "border-box",
      minHeight: "100%",
      padding: "4px 0",
      outline: "none",
      "&[contenteditable=true]": {
        WebkitUserModify: "read-write-plaintext-only"
      }
    },
    ".cm-lineWrapping": {
      whiteSpace_fallback: "pre-wrap",
      whiteSpace: "break-spaces",
      wordBreak: "break-word",
      overflowWrap: "anywhere",
      flexShrink: 1
    },
    "&light .cm-content": {
      caretColor: "black"
    },
    "&dark .cm-content": {
      caretColor: "white"
    },
    ".cm-line": {
      display: "block",
      padding: "0 2px 0 6px"
    },
    ".cm-layer": {
      position: "absolute",
      left: 0,
      top: 0,
      contain: "size style",
      "& > *": {
        position: "absolute"
      }
    },
    "&light .cm-selectionBackground": {
      background: "#d9d9d9"
    },
    "&dark .cm-selectionBackground": {
      background: "#222"
    },
    "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
      background: "#d7d4f0"
    },
    "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
      background: "#233"
    },
    ".cm-cursorLayer": {
      pointerEvents: "none"
    },
    "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
      animation: "steps(1) cm-blink 1.2s infinite"
    },
    "@keyframes cm-blink": {
      "0%": {},
      "50%": {
        opacity: 0
      },
      "100%": {}
    },
    "@keyframes cm-blink2": {
      "0%": {},
      "50%": {
        opacity: 0
      },
      "100%": {}
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeft: "1.2px solid black",
      marginLeft: "-0.6px",
      pointerEvents: "none"
    },
    ".cm-cursor": {
      display: "none"
    },
    "&dark .cm-cursor": {
      borderLeftColor: "#ddd"
    },
    ".cm-dropCursor": {
      position: "absolute"
    },
    "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
      display: "block"
    },
    ".cm-iso": {
      unicodeBidi: "isolate"
    },
    ".cm-announced": {
      position: "fixed",
      top: "-10000px"
    },
    "@media print": {
      ".cm-announced": {
        display: "none"
      }
    },
    "&light .cm-activeLine": {
      backgroundColor: "#cceeff44"
    },
    "&dark .cm-activeLine": {
      backgroundColor: "#99eeff33"
    },
    "&light .cm-specialChar": {
      color: "red"
    },
    "&dark .cm-specialChar": {
      color: "#f78"
    },
    ".cm-gutters": {
      flexShrink: 0,
      display: "flex",
      height: "100%",
      boxSizing: "border-box",
      insetInlineStart: 0,
      zIndex: 200
    },
    "&light .cm-gutters": {
      backgroundColor: "#f5f5f5",
      color: "#6c6c6c",
      borderRight: "1px solid #ddd"
    },
    "&dark .cm-gutters": {
      backgroundColor: "#333338",
      color: "#ccc"
    },
    ".cm-gutter": {
      display: "flex !important",
      flexDirection: "column",
      flexShrink: 0,
      boxSizing: "border-box",
      minHeight: "100%",
      overflow: "hidden"
    },
    ".cm-gutterElement": {
      boxSizing: "border-box"
    },
    ".cm-lineNumbers .cm-gutterElement": {
      padding: "0 3px 0 5px",
      minWidth: "20px",
      textAlign: "right",
      whiteSpace: "nowrap"
    },
    "&light .cm-activeLineGutter": {
      backgroundColor: "#e2f2ff"
    },
    "&dark .cm-activeLineGutter": {
      backgroundColor: "#222227"
    },
    ".cm-panels": {
      boxSizing: "border-box",
      position: "sticky",
      left: 0,
      right: 0,
      zIndex: 300
    },
    "&light .cm-panels": {
      backgroundColor: "#f5f5f5",
      color: "black"
    },
    "&light .cm-panels-top": {
      borderBottom: "1px solid #ddd"
    },
    "&light .cm-panels-bottom": {
      borderTop: "1px solid #ddd"
    },
    "&dark .cm-panels": {
      backgroundColor: "#333338",
      color: "white"
    },
    ".cm-dialog": {
      padding: "2px 19px 4px 6px",
      position: "relative",
      "& label": {
        fontSize: "80%"
      }
    },
    ".cm-dialog-close": {
      position: "absolute",
      top: "3px",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      fontSize: "14px",
      padding: "0"
    },
    ".cm-tab": {
      display: "inline-block",
      overflow: "hidden",
      verticalAlign: "bottom"
    },
    ".cm-widgetBuffer": {
      verticalAlign: "text-top",
      height: "1em",
      width: 0,
      display: "inline"
    },
    ".cm-placeholder": {
      color: "#888",
      display: "inline-block",
      verticalAlign: "top",
      userSelect: "none"
    },
    ".cm-highlightSpace": {
      backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
      backgroundPosition: "center"
    },
    ".cm-highlightTab": {
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
      backgroundSize: "auto 100%",
      backgroundPosition: "right 90%",
      backgroundRepeat: "no-repeat"
    },
    ".cm-trailingSpace": {
      backgroundColor: "#ff332255"
    },
    ".cm-button": {
      verticalAlign: "middle",
      color: "inherit",
      fontSize: "70%",
      padding: ".2em 1em",
      borderRadius: "1px"
    },
    "&light .cm-button": {
      backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
      border: "1px solid #888",
      "&:active": {
        backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
      }
    },
    "&dark .cm-button": {
      backgroundImage: "linear-gradient(#393939, #111)",
      border: "1px solid #888",
      "&:active": {
        backgroundImage: "linear-gradient(#111, #333)"
      }
    },
    ".cm-textfield": {
      verticalAlign: "middle",
      color: "inherit",
      fontSize: "70%",
      border: "1px solid silver",
      padding: ".2em .5em"
    },
    "&light .cm-textfield": {
      backgroundColor: "white"
    },
    "&dark .cm-textfield": {
      border: "1px solid #555",
      backgroundColor: "inherit"
    }
  }, _h), dd = {
    childList: true,
    characterData: true,
    subtree: true,
    attributes: true,
    characterDataOldValue: true
  }, Hs = O.ie && O.ie_version <= 11;
  class pd {
    constructor(t) {
      this.view = t, this.active = false, this.editContext = null, this.selectionRange = new Jf(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
        for (let i of e)
          this.queue.push(i);
        (O.ie && O.ie_version <= 11 || O.ios && t.composing) && e.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
      }), window.EditContext && t.constructor.EDIT_CONTEXT !== false && !(O.chrome && O.chrome_version < 126) && (this.editContext = new md(t), t.state.facet(ae) && (t.contentDOM.editContext = this.editContext.editContext)), Hs && (this.onCharData = (e) => {
        this.queue.push({
          target: e.target,
          type: "characterData",
          oldValue: e.prevValue
        }), this.flushSoon();
      }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
        var e;
        ((e = this.view.docView) === null || e === void 0 ? void 0 : e.lastUpdate) < Date.now() - 75 && this.onResize();
      }), this.resizeScroll.observe(t.scrollDOM)), this.addWindowListeners(this.win = t.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
        this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
      }, {
        threshold: [
          0,
          1e-3
        ]
      }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
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
      if (i.state.facet(ae) ? i.root.activeElement != this.dom : !Nn(this.dom, s))
        return;
      let r = s.anchorNode && i.docView.nearest(s.anchorNode);
      if (r && r.ignoreEvent(t)) {
        e || (this.selectionChanged = false);
        return;
      }
      (O.ie && O.ie_version <= 11 || O.android && O.chrome) && !i.state.selection.main.empty && s.focusNode && Li(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(false);
    }
    readSelectionRange() {
      let { view: t } = this, e = Vi(t.root);
      if (!e)
        return false;
      let i = O.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && gd(this.view, e) || e;
      if (!i || this.selectionRange.eq(i))
        return false;
      let s = Nn(this.dom, i);
      return s && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && Qf(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), false) : (this.selectionRange.setRange(i), s && (this.selectionChanged = true), true);
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
      this.active || (this.observer.observe(this.dom, dd), Hs && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
    }
    stop() {
      this.active && (this.active = false, this.observer.disconnect(), Hs && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
    }
    clear() {
      this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
    }
    delayAndroidKey(t, e) {
      var i;
      if (!this.delayedAndroidKey) {
        let s = () => {
          let r = this.delayedAndroidKey;
          r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && si(this.dom, r.key, r.keyCode));
        };
        this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
      }
      (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = {
        key: t,
        keyCode: e,
        force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
      });
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
      return {
        from: e,
        to: i,
        typeOver: s
      };
    }
    readChange() {
      let { from: t, to: e, typeOver: i } = this.processRecords(), s = this.selectionChanged && Nn(this.dom, this.selectionRange);
      if (t < 0 && !s)
        return null;
      t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
      let r = new Ru(this.view, t, e, i);
      return this.view.docView.domChanged = {
        newSel: r.newSel ? r.newSel.main : null
      }, r;
    }
    flush(t = true) {
      if (this.delayedFlush >= 0 || this.delayedAndroidKey)
        return false;
      t && this.readSelectionRange();
      let e = this.readChange();
      if (!e)
        return this.view.requestMeasure(), false;
      let i = this.view.state, s = Sh(this.view, e);
      return this.view.state == i && (e.domChanged || e.newSel && !e.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), s;
    }
    readMutation(t) {
      let e = this.view.docView.nearest(t.target);
      if (!e || e.ignoreMutation(t))
        return null;
      if (e.markDirty(t.type == "attributes"), t.type == "attributes" && (e.flags |= 4), t.type == "childList") {
        let i = xl(e, t.previousSibling || t.target.previousSibling, -1), s = xl(e, t.nextSibling || t.target.nextSibling, 1);
        return {
          from: i ? e.posAfter(i) : e.posAtStart,
          to: s ? e.posBefore(s) : e.posAtEnd,
          typeOver: false
        };
      } else
        return t.type == "characterData" ? {
          from: e.posAtStart,
          to: e.posAtEnd,
          typeOver: t.target.nodeValue == t.oldValue
        } : null;
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
      this.editContext && (this.editContext.update(t), t.startState.facet(ae) != t.state.facet(ae) && (t.view.contentDOM.editContext = t.state.facet(ae) ? this.editContext.editContext : null));
    }
    destroy() {
      var t, e, i;
      this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
      for (let s of this.scrollTargets)
        s.removeEventListener("scroll", this.onScroll);
      this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
    }
  }
  function xl(n, t, e) {
    for (; t; ) {
      let i = K.get(t);
      if (i && i.parent == n)
        return i;
      let s = t.parentNode;
      t = s != n.dom ? s : e > 0 ? t.nextSibling : t.previousSibling;
    }
    return null;
  }
  function vl(n, t) {
    let e = t.startContainer, i = t.startOffset, s = t.endContainer, r = t.endOffset, o = n.docView.domAtPos(n.state.selection.main.anchor);
    return Li(o.node, o.offset, s, r) && ([e, i, s, r] = [
      s,
      r,
      e,
      i
    ]), {
      anchorNode: e,
      anchorOffset: i,
      focusNode: s,
      focusOffset: r
    };
  }
  function gd(n, t) {
    if (t.getComposedRanges) {
      let s = t.getComposedRanges(n.root)[0];
      if (s)
        return vl(n, s);
    }
    let e = null;
    function i(s) {
      s.preventDefault(), s.stopImmediatePropagation(), e = s.getTargetRanges()[0];
    }
    return n.contentDOM.addEventListener("beforeinput", i, true), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, true), e ? vl(n, e) : null;
  }
  class md {
    constructor(t) {
      this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t.state);
      let e = this.editContext = new window.EditContext({
        text: t.state.doc.sliceString(this.from, this.to),
        selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
        selectionEnd: this.toContextPos(t.state.selection.main.head)
      });
      this.handlers.textupdate = (i) => {
        let s = t.state.selection.main, { anchor: r, head: o } = s, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
        t.inputState.composing >= 0 && !this.composing && (this.composing = {
          contextBase: i.updateRangeStart,
          editorBase: l,
          drifted: false
        });
        let h = {
          from: l,
          to: a,
          insert: W.of(i.text.split(`
`))
        };
        if (h.from == this.from && r < this.from ? h.from = r : h.to == this.to && r > this.to && (h.to = r), h.from == h.to && !h.insert.length) {
          let c = b.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
          c.main.eq(s) || t.dispatch({
            selection: c,
            userEvent: "select"
          });
          return;
        }
        if ((O.mac || O.android) && h.from == o - 1 && /^\. ?$/.test(i.text) && t.contentDOM.getAttribute("autocorrect") == "off" && (h = {
          from: l,
          to: a,
          insert: W.of([
            i.text.replace(".", " ")
          ])
        }), this.pendingContextChange = h, !t.state.readOnly) {
          let c = this.to - this.from + (h.to - h.from + h.insert.length);
          ho(t, h, b.single(this.toEditorPos(i.selectionStart, c), this.toEditorPos(i.selectionEnd, c)));
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
              s.push(E.mark({
                attributes: {
                  style: c
                }
              }).range(a, h));
            }
          }
        }
        t.dispatch({
          effects: mh.of(E.set(s))
        });
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
      this.measureReq = {
        read: (i) => {
          this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
          let s = Vi(i.root);
          s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
        }
      };
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
  D = class {
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
      return !!this.inputState && this.inputState.composing > 0;
    }
    get compositionStarted() {
      return !!this.inputState && this.inputState.composing >= 0;
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
      this.dispatchTransactions = t.dispatchTransactions || i && ((s) => s.forEach((r) => i(r, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = t.root || Xf(t.parent) || document, this.viewState = new bl(t.state || I.create(t)), t.scrollTo && t.scrollTo.is(dn) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Ze).map((s) => new _s(s));
      for (let s of this.plugins)
        s.update(this);
      this.observer = new pd(this), this.inputState = new Nu(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Zo(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e = document.fonts) === null || e === void 0) && e.ready && document.fonts.ready.then(() => this.requestMeasure());
    }
    dispatch(...t) {
      let e = t.length == 1 && t[0] instanceof it ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [
        this.state.update(...t)
      ];
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
      t.some((u) => u.annotation(Th)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = Bh(r, o), a || (l = 1));
      let h = this.observer.delayedAndroidKey, c = null;
      if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(I.phrases) != this.state.facet(I.phrases))
        return this.setState(r);
      s = Jn.create(this, r, t), s.flags |= l;
      let f = this.viewState.scrollTarget;
      try {
        this.updateState = 2;
        for (let u of t) {
          if (f && (f = f.map(u.changes)), u.scrollIntoView) {
            let { main: d } = u.state.selection;
            f = new ri(d.empty ? d : b.cursor(d.head, d.head > d.anchor ? -1 : 1));
          }
          for (let d of u.effects)
            d.is(dn) && (f = d.value.clip(this.state));
        }
        this.viewState.update(s, f), this.bidiCache = Qn.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), e = this.docView.update(s), this.state.facet(Mi) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((u) => u.isUserEvent("select.pointer")));
      } finally {
        this.updateState = 0;
      }
      if (s.startState.facet(wn) != s.state.facet(wn) && (this.viewState.mustMeasureContent = true), (e || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !s.empty)
        for (let u of this.state.facet(Or))
          try {
            u(s);
          } catch (d) {
            Ct(this.state, d, "update listener");
          }
      (a || c) && Promise.resolve().then(() => {
        a && this.state == a.startState && this.dispatch(a), c && !Sh(this, c) && h.force && si(this.contentDOM, h.key, h.keyCode);
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
        this.viewState = new bl(t), this.plugins = t.facet(Ze).map((i) => new _s(i)), this.pluginMap.clear();
        for (let i of this.plugins)
          i.update(this);
        this.docView.destroy(), this.docView = new Zo(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
      } finally {
        this.updateState = 0;
      }
      e && this.focus(), this.requestMeasure();
    }
    updatePlugins(t) {
      let e = t.startState.facet(Ze), i = t.state.facet(Ze);
      if (e != i) {
        let s = [];
        for (let r of i) {
          let o = e.indexOf(r);
          if (o < 0)
            s.push(new _s(r));
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
            Ct(this.state, i, "doc view update listener");
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
            if ($a(i))
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
          a & 4 || ([this.measureRequests, h] = [
            h,
            this.measureRequests
          ]);
          let c = h.map((d) => {
            try {
              return d.read(this);
            } catch (p) {
              return Ct(this.state, p), kl;
            }
          }), f = Jn.create(this, this.state, []), u = false;
          f.flags |= a, e ? e.flags |= a : e = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f), u && this.docViewUpdate());
          for (let d = 0; d < h.length; d++)
            if (c[d] != kl)
              try {
                let p = h[d];
                p.write && p.write(c[d], this);
              } catch (p) {
                Ct(this.state, p);
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
        for (let l of this.state.facet(Or))
          l(e);
    }
    get themeClasses() {
      return Lr + " " + (this.state.facet(Rr) ? Ph : Lh) + " " + this.state.facet(wn);
    }
    updateAttrs() {
      let t = Sl(this, yh, {
        class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
      }), e = {
        spellcheck: "false",
        autocorrect: "off",
        autocapitalize: "off",
        writingsuggestions: "false",
        translate: "no",
        contenteditable: this.state.facet(ae) ? "true" : "false",
        class: "cm-content",
        style: `${O.tabSize}: ${this.state.tabSize}`,
        role: "textbox",
        "aria-multiline": "true"
      };
      this.state.readOnly && (e["aria-readonly"] = "true"), Sl(this, oo, e);
      let i = this.observer.ignore(() => {
        let s = Sr(this.contentDOM, this.contentAttrs, e), r = Sr(this.dom, this.editorAttrs, t);
        return s || r;
      });
      return this.editorAttrs = t, this.contentAttrs = e, i;
    }
    showAnnouncements(t) {
      let e = true;
      for (let i of t)
        for (let s of i.effects)
          if (s.is(D.announce)) {
            e && (this.announceDOM.textContent = ""), e = false;
            let r = this.announceDOM.appendChild(document.createElement("div"));
            r.textContent = s.value;
          }
    }
    mountStyles() {
      this.styleModules = this.state.facet(Mi);
      let t = this.state.facet(D.cspNonce);
      Ae.mount(this.root, this.styleModules.concat(ud).reverse(), t ? {
        nonce: t
      } : void 0);
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
      return (e === void 0 || e && e.plugin != t) && this.pluginMap.set(t, e = this.plugins.find((i) => i.plugin == t) || null), e && e.update(this).value;
    }
    get documentTop() {
      return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
    }
    get documentPadding() {
      return {
        top: this.viewState.paddingTop,
        bottom: this.viewState.paddingBottom
      };
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
      return Ns(this, t, sl(this, t, e, i));
    }
    moveByGroup(t, e) {
      return Ns(this, t, sl(this, t, e, (i) => Ou(this, t.head, i)));
    }
    visualLineSide(t, e) {
      let i = this.bidiSpans(t), s = this.textDirectionAt(t.from), r = i[e ? i.length - 1 : 0];
      return b.cursor(r.side(e, s) + t.from, r.forward(!e, s) ? 1 : -1);
    }
    moveToLineBoundary(t, e, i = true) {
      return Du(this, t, e, i);
    }
    moveVertically(t, e, i) {
      return Ns(this, t, Tu(this, t, e, i));
    }
    domAtPos(t) {
      return this.docView.domAtPos(t);
    }
    posAtDOM(t, e = 0) {
      return this.docView.posFromDOM(t, e);
    }
    posAtCoords(t, e = true) {
      return this.readMeasured(), kh(this, t, e);
    }
    coordsAtPos(t, e = 1) {
      this.readMeasured();
      let i = this.docView.coordsAt(t, e);
      if (!i || i.left == i.right)
        return i;
      let s = this.state.doc.lineAt(t), r = this.bidiSpans(s), o = r[ke.find(r, t - s.from, -1, e)];
      return tn(i, o.dir == Y.LTR == e > 0);
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
      return !this.state.facet(dh) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
    }
    get lineWrapping() {
      return this.viewState.heightOracle.lineWrapping;
    }
    bidiSpans(t) {
      if (t.length > yd)
        return rh(t.length);
      let e = this.textDirectionAt(t.from), i;
      for (let r of this.bidiCache)
        if (r.from == t.from && r.dir == e && (r.fresh || sh(r.isolates, i = Qo(this, t))))
          return r.order;
      i || (i = Qo(this, t));
      let s = fu(t.text, e, i);
      return this.bidiCache.push(new Qn(t.from, t.to, e, i, true, s)), s;
    }
    get hasFocus() {
      var t;
      return (this.dom.ownerDocument.hasFocus() || O.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
    }
    focus() {
      this.observer.ignore(() => {
        za(this.contentDOM), this.docView.updateSelection();
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
      return dn.of(new ri(typeof t == "number" ? b.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
    }
    scrollSnapshot() {
      let { scrollTop: t, scrollLeft: e } = this.scrollDOM, i = this.viewState.scrollAnchorAt(t);
      return dn.of(new ri(b.cursor(i.from), "start", "start", i.top - t, e, true));
    }
    setTabFocusMode(t) {
      t == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t == "boolean" ? this.inputState.tabFocusMode = t ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t);
    }
    static domEventHandlers(t) {
      return Q.define(() => ({}), {
        eventHandlers: t
      });
    }
    static domEventObservers(t) {
      return Q.define(() => ({}), {
        eventObservers: t
      });
    }
    static theme(t, e) {
      let i = Ae.newName(), s = [
        wn.of(i),
        Mi.of(Pr(`.${i}`, t))
      ];
      return e && e.dark && s.push(Rr.of(true)), s;
    }
    static baseTheme(t) {
      return Ke.lowest(Mi.of(Pr("." + Lr, t, _h)));
    }
    static findFromDOM(t) {
      var e;
      let i = t.querySelector(".cm-content"), s = i && K.get(i) || K.get(t);
      return ((e = s == null ? void 0 : s.rootView) === null || e === void 0 ? void 0 : e.view) || null;
    }
  };
  D.styleModule = Mi;
  D.inputHandler = fh;
  D.clipboardInputFilter = so;
  D.clipboardOutputFilter = ro;
  D.scrollHandler = gh;
  D.focusChangeEffect = uh;
  D.perLineTextDirection = dh;
  D.exceptionSink = ch;
  D.updateListener = Or;
  D.editable = ae;
  D.mouseSelectionStyle = hh;
  D.dragMovesSelection = ah;
  D.clickAddsSelectionRange = lh;
  D.decorations = zi;
  D.outerDecorations = bh;
  D.atomicRanges = lo;
  D.bidiIsolatedRanges = wh;
  D.scrollMargins = xh;
  D.darkTheme = Rr;
  D.cspNonce = T.define({
    combine: (n) => n.length ? n[0] : ""
  });
  D.contentAttributes = oo;
  D.editorAttributes = yh;
  D.lineWrapping = D.contentAttributes.of({
    class: "cm-lineWrapping"
  });
  D.announce = L.define();
  const yd = 4096, kl = {};
  class Qn {
    constructor(t, e, i, s, r, o) {
      this.from = t, this.to = e, this.dir = i, this.isolates = s, this.fresh = r, this.order = o;
    }
    static update(t, e) {
      if (e.empty && !t.some((r) => r.fresh))
        return t;
      let i = [], s = t.length ? t[t.length - 1].dir : Y.LTR;
      for (let r = Math.max(0, t.length - 10); r < t.length; r++) {
        let o = t[r];
        o.dir == s && !e.touchesRange(o.from, o.to) && i.push(new Qn(e.mapPos(o.from, 1), e.mapPos(o.to, -1), o.dir, o.isolates, false, o.order));
      }
      return i;
    }
  }
  function Sl(n, t, e) {
    for (let i = n.state.facet(t), s = i.length - 1; s >= 0; s--) {
      let r = i[s], o = typeof r == "function" ? r(n) : r;
      o && kr(o, e);
    }
    return e;
  }
  const bd = O.mac ? "mac" : O.windows ? "win" : O.linux ? "linux" : "key";
  function wd(n, t) {
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
  function xn(n, t, e) {
    return t.altKey && (n = "Alt-" + n), t.ctrlKey && (n = "Ctrl-" + n), t.metaKey && (n = "Meta-" + n), e !== false && t.shiftKey && (n = "Shift-" + n), n;
  }
  let xd, Cl;
  xd = Ke.default(D.domEventHandlers({
    keydown(n, t) {
      return Nh(Ih(t.state), n, t, "editor");
    }
  }));
  ys = T.define({
    enables: xd
  });
  Cl = /* @__PURE__ */ new WeakMap();
  function Ih(n) {
    let t = n.facet(ys), e = Cl.get(t);
    return e || Cl.set(t, e = Sd(t.reduce((i, s) => i.concat(s), []))), e;
  }
  function vd(n, t, e) {
    return Nh(Ih(n.state), t, n, e);
  }
  let we = null;
  const kd = 4e3;
  function Sd(n, t = bd) {
    let e = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (o, l) => {
      let a = i[o];
      if (a == null)
        i[o] = l;
      else if (a != l)
        throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
    }, r = (o, l, a, h, c) => {
      var f, u;
      let d = e[o] || (e[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((y) => wd(y, t));
      for (let y = 1; y < p.length; y++) {
        let w = p.slice(0, y).join(" ");
        s(w, true), d[w] || (d[w] = {
          preventDefault: true,
          stopPropagation: false,
          run: [
            (v) => {
              let S = we = {
                view: v,
                prefix: w,
                scope: o
              };
              return setTimeout(() => {
                we == S && (we = null);
              }, kd), true;
            }
          ]
        });
      }
      let g = p.join(" ");
      s(g, false);
      let m = d[g] || (d[g] = {
        preventDefault: false,
        stopPropagation: false,
        run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || []
      });
      a && m.run.push(a), h && (m.preventDefault = true), c && (m.stopPropagation = true);
    };
    for (let o of n) {
      let l = o.scope ? o.scope.split(" ") : [
        "editor"
      ];
      if (o.any)
        for (let h of l) {
          let c = e[h] || (e[h] = /* @__PURE__ */ Object.create(null));
          c._any || (c._any = {
            preventDefault: false,
            stopPropagation: false,
            run: []
          });
          let { any: f } = o;
          for (let u in c)
            c[u].run.push((d) => f(d, _r));
        }
      let a = o[t] || o.key;
      if (a)
        for (let h of l)
          r(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
    }
    return e;
  }
  let _r = null;
  function Nh(n, t, e, i) {
    _r = t;
    let s = Kf(t), r = vt(s, 0), o = Xt(r) == s.length && s != " ", l = "", a = false, h = false, c = false;
    we && we.view == e && we.scope == i && (l = we.prefix + " ", Ah.indexOf(t.keyCode) < 0 && (h = true, we = null));
    let f = /* @__PURE__ */ new Set(), u = (m) => {
      if (m) {
        for (let y of m.run)
          if (!f.has(y) && (f.add(y), y(e)))
            return m.stopPropagation && (c = true), true;
        m.preventDefault && (m.stopPropagation && (c = true), h = true);
      }
      return false;
    }, d = n[i], p, g;
    return d && (u(d[l + xn(s, t, !o)]) ? a = true : o && (t.altKey || t.metaKey || t.ctrlKey) && !(O.windows && t.ctrlKey && t.altKey) && (p = Me[t.keyCode]) && p != s ? (u(d[l + xn(p, t, true)]) || t.shiftKey && (g = Wi[t.keyCode]) != s && g != p && u(d[l + xn(g, t, false)])) && (a = true) : o && t.shiftKey && u(d[l + xn(s, t, true)]) && (a = true), !a && u(d._any) && (a = true)), h && (a = true), a && c && t.stopPropagation(), _r = null, a;
  }
  class sn {
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
        let r = Fh(t);
        return [
          new sn(e, s.left - r.left, s.top - r.top, null, s.bottom - s.top)
        ];
      } else
        return Cd(t, e, i);
    }
  }
  function Fh(n) {
    let t = n.scrollDOM.getBoundingClientRect();
    return {
      left: (n.textDirection == Y.LTR ? t.left : t.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX,
      top: t.top - n.scrollDOM.scrollTop * n.scaleY
    };
  }
  function Al(n, t, e, i) {
    let s = n.coordsAtPos(t, e * 2);
    if (!s)
      return i;
    let r = n.dom.getBoundingClientRect(), o = (s.top + s.bottom) / 2, l = n.posAtCoords({
      x: r.left + 1,
      y: o
    }), a = n.posAtCoords({
      x: r.right - 1,
      y: o
    });
    return l == null || a == null ? i : {
      from: Math.max(i.from, Math.min(l, a)),
      to: Math.min(i.to, Math.max(l, a))
    };
  }
  function Cd(n, t, e) {
    if (e.to <= n.viewport.from || e.from >= n.viewport.to)
      return [];
    let i = Math.max(e.from, n.viewport.from), s = Math.min(e.to, n.viewport.to), r = n.textDirection == Y.LTR, o = n.contentDOM, l = o.getBoundingClientRect(), a = Fh(n), h = o.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = l.right - (c ? parseInt(c.paddingRight) : 0), d = Br(n, i, 1), p = Br(n, s, -1), g = d.type == wt.Text ? d : null, m = p.type == wt.Text ? p : null;
    if (g && (n.lineWrapping || d.widgetLineBreaks) && (g = Al(n, i, 1, g)), m && (n.lineWrapping || p.widgetLineBreaks) && (m = Al(n, s, -1, m)), g && m && g.from == m.from && g.to == m.to)
      return w(v(e.from, e.to, g));
    {
      let x = g ? v(e.from, null, g) : S(d, false), k = m ? v(null, e.to, m) : S(p, true), A = [];
      return (g || d).to < (m || p).from - (g && m ? 1 : 0) || d.widgetLineBreaks > 1 && x.bottom + n.defaultLineHeight / 2 < k.top ? A.push(y(f, x.bottom, u, k.top)) : x.bottom < k.top && n.elementAtHeight((x.bottom + k.top) / 2).type == wt.Text && (x.bottom = k.top = (x.bottom + k.top) / 2), w(x).concat(A).concat(w(k));
    }
    function y(x, k, A, P) {
      return new sn(t, x - a.left, k - a.top, A - x, P - k);
    }
    function w({ top: x, bottom: k, horizontal: A }) {
      let P = [];
      for (let N = 0; N < A.length; N += 2)
        P.push(y(A[N], x, A[N + 1], k));
      return P;
    }
    function v(x, k, A) {
      let P = 1e9, N = -1e9, q = [];
      function _(V, U, mt, Mt, $t) {
        let rt = n.coordsAtPos(V, V == A.to ? -2 : 2), Et = n.coordsAtPos(mt, mt == A.from ? 2 : -2);
        !rt || !Et || (P = Math.min(rt.top, Et.top, P), N = Math.max(rt.bottom, Et.bottom, N), $t == Y.LTR ? q.push(r && U ? f : rt.left, r && Mt ? u : Et.right) : q.push(!r && Mt ? f : Et.left, !r && U ? u : rt.right));
      }
      let R = x ?? A.from, z = k ?? A.to;
      for (let V of n.visibleRanges)
        if (V.to > R && V.from < z)
          for (let U = Math.max(V.from, R), mt = Math.min(V.to, z); ; ) {
            let Mt = n.state.doc.lineAt(U);
            for (let $t of n.bidiSpans(Mt)) {
              let rt = $t.from + Mt.from, Et = $t.to + Mt.from;
              if (rt >= mt)
                break;
              Et > U && _(Math.max(rt, U), x == null && rt <= R, Math.min(Et, mt), k == null && Et >= z, $t.dir);
            }
            if (U = Mt.to + 1, U >= mt)
              break;
          }
      return q.length == 0 && _(R, x == null, z, k == null, n.textDirection), {
        top: P,
        bottom: N,
        horizontal: q
      };
    }
    function S(x, k) {
      let A = l.top + (k ? x.top : x.bottom);
      return {
        top: A,
        bottom: A,
        horizontal: []
      };
    }
  }
  function Ad(n, t) {
    return n.constructor == t.constructor && n.eq(t);
  }
  class Md {
    constructor(t, e) {
      this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
        read: this.measure.bind(this),
        write: this.draw.bind(this)
      }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t);
    }
    update(t) {
      t.startState.facet(Vn) != t.state.facet(Vn) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq));
    }
    docViewUpdate(t) {
      this.layer.updateOnDocViewUpdate !== false && t.requestMeasure(this.measureReq);
    }
    setOrder(t) {
      let e = 0, i = t.facet(Vn);
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
      if (t.length != this.drawn.length || t.some((e, i) => !Ad(e, this.drawn[i]))) {
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
  const Vn = T.define();
  function Hh(n) {
    return [
      Q.define((t) => new Md(t, n)),
      Vn.of(n)
    ];
  }
  const qi = T.define({
    combine(n) {
      return re(n, {
        cursorBlinkRate: 1200,
        drawRangeCursor: true
      }, {
        cursorBlinkRate: (t, e) => Math.min(t, e),
        drawRangeCursor: (t, e) => t || e
      });
    }
  });
  function Dd(n = {}) {
    return [
      qi.of(n),
      Od,
      Td,
      Bd,
      ph.of(true)
    ];
  }
  function Wh(n) {
    return n.startState.facet(qi) != n.state.facet(qi);
  }
  const Od = Hh({
    above: true,
    markers(n) {
      let { state: t } = n, e = t.facet(qi), i = [];
      for (let s of t.selection.ranges) {
        let r = s == t.selection.main;
        if (s.empty || e.drawRangeCursor) {
          let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : b.cursor(s.head, s.head > s.anchor ? -1 : 1);
          for (let a of sn.forRange(n, o, l))
            i.push(a);
        }
      }
      return i;
    },
    update(n, t) {
      n.transactions.some((i) => i.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
      let e = Wh(n);
      return e && Ml(n.state, t), n.docChanged || n.selectionSet || e;
    },
    mount(n, t) {
      Ml(t.state, n);
    },
    class: "cm-cursorLayer"
  });
  function Ml(n, t) {
    t.style.animationDuration = n.facet(qi).cursorBlinkRate + "ms";
  }
  const Td = Hh({
    above: false,
    markers(n) {
      return n.state.selection.ranges.map((t) => t.empty ? [] : sn.forRange(n, "cm-selectionBackground", t)).reduce((t, e) => t.concat(e));
    },
    update(n, t) {
      return n.docChanged || n.selectionSet || n.viewportChanged || Wh(n);
    },
    class: "cm-selectionLayer"
  }), Bd = Ke.highest(D.theme({
    ".cm-line": {
      "& ::selection, &::selection": {
        backgroundColor: "transparent !important"
      },
      caretColor: "transparent !important"
    },
    ".cm-content": {
      caretColor: "transparent !important",
      "& :focus": {
        caretColor: "initial !important",
        "&::selection, & ::selection": {
          backgroundColor: "Highlight !important"
        }
      }
    }
  })), Vh = L.define({
    map(n, t) {
      return n == null ? null : t.mapPos(n);
    }
  }), Ti = ct.define({
    create() {
      return null;
    },
    update(n, t) {
      return n != null && (n = t.changes.mapPos(n)), t.effects.reduce((e, i) => i.is(Vh) ? i.value : e, n);
    }
  }), Ed = Q.fromClass(class {
    constructor(n) {
      this.view = n, this.cursor = null, this.measureReq = {
        read: this.readPos.bind(this),
        write: this.drawCursor.bind(this)
      };
    }
    update(n) {
      var t;
      let e = n.state.field(Ti);
      e == null ? this.cursor != null && ((t = this.cursor) === null || t === void 0 || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(Ti) != e || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
    }
    readPos() {
      let { view: n } = this, t = n.state.field(Ti), e = t != null && n.coordsAtPos(t);
      if (!e)
        return null;
      let i = n.scrollDOM.getBoundingClientRect();
      return {
        left: e.left - i.left + n.scrollDOM.scrollLeft * n.scaleX,
        top: e.top - i.top + n.scrollDOM.scrollTop * n.scaleY,
        height: e.bottom - e.top
      };
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
      this.view.state.field(Ti) != n && this.view.dispatch({
        effects: Vh.of(n)
      });
    }
  }, {
    eventObservers: {
      dragover(n) {
        this.setDropPos(this.view.posAtCoords({
          x: n.clientX,
          y: n.clientY
        }));
      },
      dragleave(n) {
        (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
      },
      dragend() {
        this.setDropPos(null);
      },
      drop() {
        this.setDropPos(null);
      }
    }
  });
  function Rd() {
    return [
      Ti,
      Ed
    ];
  }
  function Dl(n, t, e, i, s) {
    t.lastIndex = 0;
    for (let r = n.iterRange(e, i), o = e, l; !r.next().done; o += r.value.length)
      if (!r.lineBreak)
        for (; l = t.exec(r.value); )
          s(o + l.index, l);
  }
  function Ld(n, t) {
    let e = n.visibleRanges;
    if (e.length == 1 && e[0].from == n.viewport.from && e[0].to == n.viewport.to)
      return e;
    let i = [];
    for (let { from: s, to: r } of e)
      s = Math.max(n.state.doc.lineAt(s).from, s - t), r = Math.min(n.state.doc.lineAt(r).to, r + t), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = r : i.push({
        from: s,
        to: r
      });
    return i;
  }
  Pd = class {
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
      let e = new fe(), i = e.add.bind(e);
      for (let { from: s, to: r } of Ld(t, this.maxLength))
        Dl(t.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, t, o, i));
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
        if (l >= o) {
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
            Dl(t.state.doc, this.regexp, c, f, (g, m) => this.addMatch(m, t, g, p));
          e = e.update({
            filterFrom: c,
            filterTo: f,
            filter: (g, m) => g < c || m > f,
            add: u
          });
        }
      }
      return e;
    }
  };
  const Ir = /x/.unicode != null ? "gu" : "g", _d = new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, Ir), Id = {
    0: "null",
    7: "bell",
    8: "backspace",
    10: "newline",
    11: "vertical tab",
    13: "carriage return",
    27: "escape",
    8203: "zero width space",
    8204: "zero width non-joiner",
    8205: "zero width joiner",
    8206: "left-to-right mark",
    8207: "right-to-left mark",
    8232: "line separator",
    8237: "left-to-right override",
    8238: "right-to-left override",
    8294: "left-to-right isolate",
    8295: "right-to-left isolate",
    8297: "pop directional isolate",
    8233: "paragraph separator",
    65279: "zero width no-break space",
    65532: "object replacement"
  };
  let Ws = null;
  function Nd() {
    var n;
    if (Ws == null && typeof document < "u" && document.body) {
      let t = document.body.style;
      Ws = ((n = t.tabSize) !== null && n !== void 0 ? n : t.MozTabSize) != null;
    }
    return Ws || false;
  }
  const zn = T.define({
    combine(n) {
      let t = re(n, {
        render: null,
        specialChars: _d,
        addSpecialChars: null
      });
      return (t.replaceTabs = !Nd()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, Ir)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, Ir)), t;
    }
  });
  function Fd(n = {}) {
    return [
      zn.of(n),
      Hd()
    ];
  }
  let Ol = null;
  function Hd() {
    return Ol || (Ol = Q.fromClass(class {
      constructor(n) {
        this.view = n, this.decorations = E.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(zn)), this.decorations = this.decorator.createDeco(n);
      }
      makeDecorator(n) {
        return new Pd({
          regexp: n.specialChars,
          decoration: (t, e, i) => {
            let { doc: s } = e.state, r = vt(t[0], 0);
            if (r == 9) {
              let o = s.lineAt(i), l = e.state.tabSize, a = yi(o.text, l, i - o.from);
              return E.replace({
                widget: new qd((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
              });
            }
            return this.decorationCache[r] || (this.decorationCache[r] = E.replace({
              widget: new zd(n, r)
            }));
          },
          boundary: n.replaceTabs ? void 0 : /[^]/
        });
      }
      update(n) {
        let t = n.state.facet(zn);
        n.startState.facet(zn) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
      }
    }, {
      decorations: (n) => n.decorations
    }));
  }
  const Wd = "\u2022";
  function Vd(n) {
    return n >= 32 ? Wd : n == 10 ? "\u2424" : String.fromCharCode(9216 + n);
  }
  class zd extends ge {
    constructor(t, e) {
      super(), this.options = t, this.code = e;
    }
    eq(t) {
      return t.code == this.code;
    }
    toDOM(t) {
      let e = Vd(this.code), i = t.state.phrase("Control character") + " " + (Id[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, e);
      if (s)
        return s;
      let r = document.createElement("span");
      return r.textContent = e, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r;
    }
    ignoreEvent() {
      return false;
    }
  }
  class qd extends ge {
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
  function $d() {
    return Kd;
  }
  const jd = E.line({
    class: "cm-activeLine"
  }), Kd = Q.fromClass(class {
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
        s.from > t && (e.push(jd.range(s.from)), t = s.from);
      }
      return E.set(e);
    }
  }, {
    decorations: (n) => n.decorations
  });
  class Ud extends ge {
    constructor(t) {
      super(), this.content = t;
    }
    toDOM(t) {
      let e = document.createElement("span");
      return e.className = "cm-placeholder", e.style.pointerEvents = "none", e.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(t) : this.content.cloneNode(true)), e.setAttribute("aria-hidden", "true"), e;
    }
    coordsAt(t) {
      let e = t.firstChild ? ci(t.firstChild) : [];
      if (!e.length)
        return null;
      let i = window.getComputedStyle(t.parentNode), s = tn(e[0], i.direction != "rtl"), r = parseInt(i.lineHeight);
      return s.bottom - s.top > r * 1.5 ? {
        left: s.left,
        right: s.right,
        top: s.top,
        bottom: s.top + r
      } : s;
    }
    ignoreEvent() {
      return false;
    }
  }
  function Gd(n) {
    let t = Q.fromClass(class {
      constructor(e) {
        this.view = e, this.placeholder = n ? E.set([
          E.widget({
            widget: new Ud(n),
            side: 1
          }).range(0)
        ]) : E.none;
      }
      get decorations() {
        return this.view.state.doc.length ? E.none : this.placeholder;
      }
    }, {
      decorations: (e) => e.decorations
    });
    return typeof n == "string" ? [
      t,
      D.contentAttributes.of({
        "aria-placeholder": n
      })
    ] : t;
  }
  const Nr = 2e3;
  function Yd(n, t, e) {
    let i = Math.min(t.line, e.line), s = Math.max(t.line, e.line), r = [];
    if (t.off > Nr || e.off > Nr || t.col < 0 || e.col < 0) {
      let o = Math.min(t.off, e.off), l = Math.max(t.off, e.off);
      for (let a = i; a <= s; a++) {
        let h = n.doc.line(a);
        h.length <= l && r.push(b.range(h.from + o, h.to + l));
      }
    } else {
      let o = Math.min(t.col, e.col), l = Math.max(t.col, e.col);
      for (let a = i; a <= s; a++) {
        let h = n.doc.line(a), c = gr(h.text, o, n.tabSize, true);
        if (c < 0)
          r.push(b.cursor(h.to));
        else {
          let f = gr(h.text, l, n.tabSize);
          r.push(b.range(h.from + c, h.from + f));
        }
      }
    }
    return r;
  }
  function Jd(n, t) {
    let e = n.coordsAtPos(n.viewport.from);
    return e ? Math.round(Math.abs((e.left - t) / n.defaultCharacterWidth)) : -1;
  }
  function Tl(n, t) {
    let e = n.posAtCoords({
      x: t.clientX,
      y: t.clientY
    }, false), i = n.state.doc.lineAt(e), s = e - i.from, r = s > Nr ? -1 : s == i.length ? Jd(n, t.clientX) : yi(i.text, n.state.tabSize, e - i.from);
    return {
      line: i.number,
      col: r,
      off: s
    };
  }
  function Xd(n, t) {
    let e = Tl(n, t), i = n.state.selection;
    return e ? {
      update(s) {
        if (s.docChanged) {
          let r = s.changes.mapPos(s.startState.doc.line(e.line).from), o = s.state.doc.lineAt(r);
          e = {
            line: o.number,
            col: e.col,
            off: Math.min(e.off, o.length)
          }, i = i.map(s.changes);
        }
      },
      get(s, r, o) {
        let l = Tl(n, s);
        if (!l)
          return i;
        let a = Yd(n.state, e, l);
        return a.length ? o ? b.create(a.concat(i.ranges)) : b.create(a) : i;
      }
    } : null;
  }
  function Qd(n) {
    let t = (n == null ? void 0 : n.eventFilter) || ((e) => e.altKey && e.button == 0);
    return D.mouseSelectionStyle.of((e, i) => t(i) ? Xd(e, i) : null);
  }
  const Zd = {
    Alt: [
      18,
      (n) => !!n.altKey
    ],
    Control: [
      17,
      (n) => !!n.ctrlKey
    ],
    Shift: [
      16,
      (n) => !!n.shiftKey
    ],
    Meta: [
      91,
      (n) => !!n.metaKey
    ]
  }, tp = {
    style: "cursor: crosshair"
  };
  function ep(n = {}) {
    let [t, e] = Zd[n.key || "Alt"], i = Q.fromClass(class {
      constructor(s) {
        this.view = s, this.isDown = false;
      }
      set(s) {
        this.isDown != s && (this.isDown = s, this.view.update([]));
      }
    }, {
      eventObservers: {
        keydown(s) {
          this.set(s.keyCode == t || e(s));
        },
        keyup(s) {
          (s.keyCode == t || !e(s)) && this.set(false);
        },
        mousemove(s) {
          this.set(e(s));
        }
      }
    });
    return [
      i,
      D.contentAttributes.of((s) => {
        var r;
        return !((r = s.plugin(i)) === null || r === void 0) && r.isDown ? tp : null;
      })
    ];
  }
  const ki = "-10000px";
  class zh {
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
  function ip(n) {
    let t = n.dom.ownerDocument.documentElement;
    return {
      top: 0,
      left: 0,
      bottom: t.clientHeight,
      right: t.clientWidth
    };
  }
  const Vs = T.define({
    combine: (n) => {
      var t, e, i;
      return {
        position: O.ios ? "absolute" : ((t = n.find((s) => s.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
        parent: ((e = n.find((s) => s.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
        tooltipSpace: ((i = n.find((s) => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || ip
      };
    }
  }), Bl = /* @__PURE__ */ new WeakMap(), uo = Q.fromClass(class {
    constructor(n) {
      this.view = n, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
      let t = n.state.facet(Vs);
      this.position = t.position, this.parent = t.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = {
        read: this.readMeasure.bind(this),
        write: this.writeMeasure.bind(this),
        key: this
      }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new zh(n, po, (e, i) => this.createTooltip(e, i), (e) => {
        this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
      }), this.above = this.manager.tooltips.map((e) => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
        Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
      }, {
        threshold: [
          1
        ]
      }) : null, this.observeIntersection(), n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
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
      let e = t || n.geometryChanged, i = n.state.facet(Vs);
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
      return e.dom.style.position = this.position, e.dom.style.top = ki, e.dom.style.left = "0px", this.container.insertBefore(e.dom, i), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e;
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
        if (O.gecko)
          e = r.offsetParent != this.container.ownerDocument.body;
        else if (r.style.top == ki && r.style.left == "0px") {
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
      let i = this.view.scrollDOM.getBoundingClientRect(), s = ao(this.view);
      return {
        visible: {
          left: i.left + s.left,
          top: i.top + s.top,
          right: i.right - s.right,
          bottom: i.bottom - s.bottom
        },
        parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
        pos: this.manager.tooltips.map((r, o) => {
          let l = this.manager.tooltipViews[o];
          return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
        }),
        size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
        space: this.view.state.facet(Vs).tooltipSpace(this.view),
        scaleX: n,
        scaleY: t,
        makeAbsolute: e
      };
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
          c.style.top = ki;
          continue;
        }
        let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, g = u.right - u.left, m = (t = Bl.get(h)) !== null && t !== void 0 ? t : u.bottom - u.top, y = h.offset || sp, w = this.view.textDirection == Y.LTR, v = u.width > i.right - i.left ? w ? i.left : i.right - u.width : w ? Math.max(i.left, Math.min(f.left - (d ? 14 : 0) + y.x, i.right - g)) : Math.min(Math.max(i.left, f.left - g + (d ? 14 : 0) - y.x), i.right - g), S = this.above[l];
        !a.strictSide && (S ? f.top - m - p - y.y < i.top : f.bottom + m + p + y.y > i.bottom) && S == i.bottom - f.bottom > f.top - i.top && (S = this.above[l] = !S);
        let x = (S ? f.top - i.top : i.bottom - f.bottom) - p;
        if (x < m && h.resize !== false) {
          if (x < this.view.defaultLineHeight) {
            c.style.top = ki;
            continue;
          }
          Bl.set(h, m), c.style.height = (m = x) / r + "px";
        } else
          c.style.height && (c.style.height = "");
        let k = S ? f.top - m - p - y.y : f.bottom + p + y.y, A = v + g;
        if (h.overlap !== true)
          for (let P of o)
            P.left < A && P.right > v && P.top < k + m && P.bottom > k && (k = S ? P.top - m - 2 - p : P.bottom + p + 2);
        if (this.position == "absolute" ? (c.style.top = (k - n.parent.top) / r + "px", El(c, (v - n.parent.left) / s)) : (c.style.top = k / r + "px", El(c, v / s)), d) {
          let P = f.left + (w ? y.x : -y.x) - (v + 14 - 7);
          d.style.left = P / s + "px";
        }
        h.overlap !== true && o.push({
          left: v,
          top: k,
          right: A,
          bottom: k + m
        }), c.classList.toggle("cm-tooltip-above", S), c.classList.toggle("cm-tooltip-below", !S), h.positioned && h.positioned(n.space);
      }
    }
    maybeMeasure() {
      if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
        for (let n of this.manager.tooltipViews)
          n.dom.style.top = ki;
    }
  }, {
    eventObservers: {
      scroll() {
        this.maybeMeasure();
      }
    }
  });
  function El(n, t) {
    let e = parseInt(n.style.left, 10);
    (isNaN(e) || Math.abs(t - e) > 1) && (n.style.left = t + "px");
  }
  let np, sp, Zn;
  np = D.baseTheme({
    ".cm-tooltip": {
      zIndex: 500,
      boxSizing: "border-box"
    },
    "&light .cm-tooltip": {
      border: "1px solid #bbb",
      backgroundColor: "#f5f5f5"
    },
    "&light .cm-tooltip-section:not(:first-child)": {
      borderTop: "1px solid #bbb"
    },
    "&dark .cm-tooltip": {
      backgroundColor: "#333338",
      color: "white"
    },
    ".cm-tooltip-arrow": {
      height: "7px",
      width: `${7 * 2}px`,
      position: "absolute",
      zIndex: -1,
      overflow: "hidden",
      "&:before, &:after": {
        content: "''",
        position: "absolute",
        width: 0,
        height: 0,
        borderLeft: "7px solid transparent",
        borderRight: "7px solid transparent"
      },
      ".cm-tooltip-above &": {
        bottom: "-7px",
        "&:before": {
          borderTop: "7px solid #bbb"
        },
        "&:after": {
          borderTop: "7px solid #f5f5f5",
          bottom: "1px"
        }
      },
      ".cm-tooltip-below &": {
        top: "-7px",
        "&:before": {
          borderBottom: "7px solid #bbb"
        },
        "&:after": {
          borderBottom: "7px solid #f5f5f5",
          top: "1px"
        }
      }
    },
    "&dark .cm-tooltip .cm-tooltip-arrow": {
      "&:before": {
        borderTopColor: "#333338",
        borderBottomColor: "#333338"
      },
      "&:after": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent"
      }
    }
  });
  sp = {
    x: 0,
    y: 0
  };
  po = T.define({
    enables: [
      uo,
      np
    ]
  });
  Zn = T.define({
    combine: (n) => n.reduce((t, e) => t.concat(e), [])
  });
  class bs {
    static create(t) {
      return new bs(t);
    }
    constructor(t) {
      this.view = t, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new zh(t, Zn, (e, i) => this.createHostedView(e, i), (e) => e.dom.remove());
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
  const rp = po.compute([
    Zn
  ], (n) => {
    let t = n.facet(Zn);
    return t.length === 0 ? null : {
      pos: Math.min(...t.map((e) => e.pos)),
      end: Math.max(...t.map((e) => {
        var i;
        return (i = e.end) !== null && i !== void 0 ? i : e.pos;
      })),
      create: bs.create,
      above: t[0].above,
      arrow: t.some((e) => e.arrow)
    };
  });
  class op {
    constructor(t, e, i, s, r) {
      this.view = t, this.source = e, this.field = i, this.setHover = s, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
        x: 0,
        y: 0,
        target: t.dom,
        time: 0
      }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
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
      if (i instanceof ve)
        s = i.posAtStart;
      else {
        if (s = t.posAtCoords(e), s == null)
          return;
        let l = t.coordsAtPos(s);
        if (!l || e.y < l.top || e.y > l.bottom || e.x < l.left - t.defaultCharacterWidth || e.x > l.right + t.defaultCharacterWidth)
          return;
        let a = t.bidiSpans(t.state.doc.lineAt(s)).find((c) => c.from <= s && c.to >= s), h = a && a.dir == Y.RTL ? -1 : 1;
        r = e.x < l.left ? -h : h;
      }
      let o = this.source(t, s, r);
      if (o == null ? void 0 : o.then) {
        let l = this.pending = {
          pos: s
        };
        o.then((a) => {
          this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && t.dispatch({
            effects: this.setHover.of(Array.isArray(a) ? a : [
              a
            ])
          }));
        }, (a) => Ct(t.state, a, "hover tooltip"));
      } else
        o && !(Array.isArray(o) && !o.length) && t.dispatch({
          effects: this.setHover.of(Array.isArray(o) ? o : [
            o
          ])
        });
    }
    get tooltip() {
      let t = this.view.plugin(uo), e = t ? t.manager.tooltips.findIndex((i) => i.create == bs.create) : -1;
      return e > -1 ? t.manager.tooltipViews[e] : null;
    }
    mousemove(t) {
      var e, i;
      this.lastMove = {
        x: t.clientX,
        y: t.clientY,
        target: t.target,
        time: Date.now()
      }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
      let { active: s, tooltip: r } = this;
      if (s.length && r && !lp(r.dom, t) || this.pending) {
        let { pos: o } = s[0] || this.pending, l = (i = (e = s[0]) === null || e === void 0 ? void 0 : e.end) !== null && i !== void 0 ? i : o;
        (o == l ? this.view.posAtCoords(this.lastMove) != o : !ap(this.view, o, l, t.clientX, t.clientY)) && (this.view.dispatch({
          effects: this.setHover.of([])
        }), this.pending = null);
      }
    }
    mouseleave(t) {
      clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
      let { active: e } = this;
      if (e.length) {
        let { tooltip: i } = this;
        i && i.dom.contains(t.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({
          effects: this.setHover.of([])
        });
      }
    }
    watchTooltipLeave(t) {
      let e = (i) => {
        t.removeEventListener("mouseleave", e), this.active.length && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({
          effects: this.setHover.of([])
        });
      };
      t.addEventListener("mouseleave", e);
    }
    destroy() {
      clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
    }
  }
  const vn = 4;
  function lp(n, t) {
    let { left: e, right: i, top: s, bottom: r } = n.getBoundingClientRect(), o;
    if (o = n.querySelector(".cm-tooltip-arrow")) {
      let l = o.getBoundingClientRect();
      s = Math.min(l.top, s), r = Math.max(l.bottom, r);
    }
    return t.clientX >= e - vn && t.clientX <= i + vn && t.clientY >= s - vn && t.clientY <= r + vn;
  }
  function ap(n, t, e, i, s, r) {
    let o = n.scrollDOM.getBoundingClientRect(), l = n.documentTop + n.documentPadding.top + n.contentHeight;
    if (o.left > i || o.right < i || o.top > s || Math.min(o.bottom, l) < s)
      return false;
    let a = n.posAtCoords({
      x: i,
      y: s
    }, false);
    return a >= t && a <= e;
  }
  function hp(n, t = {}) {
    let e = L.define(), i = ct.define({
      create() {
        return [];
      },
      update(s, r) {
        if (s.length && (t.hideOnChange && (r.docChanged || r.selection) ? s = [] : t.hideOn && (s = s.filter((o) => !t.hideOn(r, o))), r.docChanged)) {
          let o = [];
          for (let l of s) {
            let a = r.changes.mapPos(l.pos, -1, bt.TrackDel);
            if (a != null) {
              let h = Object.assign(/* @__PURE__ */ Object.create(null), l);
              h.pos = a, h.end != null && (h.end = r.changes.mapPos(h.end)), o.push(h);
            }
          }
          s = o;
        }
        for (let o of r.effects)
          o.is(e) && (s = o.value), o.is(cp) && (s = []);
        return s;
      },
      provide: (s) => Zn.from(s)
    });
    return {
      active: i,
      extension: [
        i,
        Q.define((s) => new op(s, n, i, e, t.hoverTime || 300)),
        rp
      ]
    };
  }
  function qh(n, t) {
    let e = n.plugin(uo);
    if (!e)
      return null;
    let i = e.manager.tooltips.indexOf(t);
    return i < 0 ? null : e.manager.tooltipViews[i];
  }
  const cp = L.define(), Rl = T.define({
    combine(n) {
      let t, e;
      for (let i of n)
        t = t || i.topContainer, e = e || i.bottomContainer;
      return {
        topContainer: t,
        bottomContainer: e
      };
    }
  });
  function $i(n, t) {
    let e = n.plugin($h), i = e ? e.specs.indexOf(t) : -1;
    return i > -1 ? e.panels[i] : null;
  }
  const $h = Q.fromClass(class {
    constructor(n) {
      this.input = n.state.facet(ji), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((e) => e(n));
      let t = n.state.facet(Rl);
      this.top = new kn(n, true, t.topContainer), this.bottom = new kn(n, false, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
      for (let e of this.panels)
        e.dom.classList.add("cm-panel"), e.mount && e.mount();
    }
    update(n) {
      let t = n.state.facet(Rl);
      this.top.container != t.topContainer && (this.top.sync([]), this.top = new kn(n.view, true, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new kn(n.view, false, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
      let e = n.state.facet(ji);
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
  }, {
    provide: (n) => D.scrollMargins.of((t) => {
      let e = t.plugin(n);
      return e && {
        top: e.top.scrollMargin(),
        bottom: e.bottom.scrollMargin()
      };
    })
  });
  class kn {
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
            t = Ll(t);
          t = t.nextSibling;
        } else
          this.dom.insertBefore(e.dom, t);
      for (; t; )
        t = Ll(t);
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
  function Ll(n) {
    let t = n.nextSibling;
    return n.remove(), t;
  }
  const ji = T.define({
    enables: $h
  });
  class de extends Ve {
    compare(t) {
      return this == t || this.constructor == t.constructor && this.eq(t);
    }
    eq(t) {
      return false;
    }
    destroy(t) {
    }
  }
  de.prototype.elementClass = "";
  de.prototype.toDOM = void 0;
  de.prototype.mapMode = bt.TrackBefore;
  de.prototype.startSide = de.prototype.endSide = -1;
  de.prototype.point = true;
  const qn = T.define(), fp = T.define(), up = {
    class: "",
    renderEmptyElements: false,
    elementStyle: "",
    markers: () => H.empty,
    lineMarker: () => null,
    widgetMarker: () => null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {}
  }, _i = T.define();
  function dp(n) {
    return [
      jh(),
      _i.of({
        ...up,
        ...n
      })
    ];
  }
  const Fr = T.define({
    combine: (n) => n.some((t) => t)
  });
  function jh(n) {
    let t = [
      pp
    ];
    return n && n.fixed === false && t.push(Fr.of(true)), t;
  }
  const pp = Q.fromClass(class {
    constructor(n) {
      this.view = n, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(_i).map((t) => new _l(n, t));
      for (let t of this.gutters)
        this.dom.appendChild(t.dom);
      this.fixed = !n.state.facet(Fr), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(false), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
    }
    update(n) {
      if (this.updateGutters(n)) {
        let t = this.prevViewport, e = n.view.viewport, i = Math.min(t.to, e.to) - Math.max(t.from, e.from);
        this.syncGutters(i < (e.to - e.from) * 0.8);
      }
      n.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(Fr) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = n.view.viewport;
    }
    syncGutters(n) {
      let t = this.dom.nextSibling;
      n && this.dom.remove();
      let e = H.iter(this.view.state.facet(qn), this.view.viewport.from), i = [], s = this.gutters.map((r) => new gp(r, this.view.viewport, -this.view.documentPadding.top));
      for (let r of this.view.viewportLineBlocks)
        if (i.length && (i = []), Array.isArray(r.type)) {
          let o = true;
          for (let l of r.type)
            if (l.type == wt.Text && o) {
              Hr(e, i, l.from);
              for (let a of s)
                a.line(this.view, l, i);
              o = false;
            } else if (l.widget)
              for (let a of s)
                a.widget(this.view, l);
        } else if (r.type == wt.Text) {
          Hr(e, i, r.from);
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
      let t = n.startState.facet(_i), e = n.state.facet(_i), i = n.docChanged || n.heightChanged || n.viewportChanged || !H.eq(n.startState.facet(qn), n.state.facet(qn), n.view.viewport.from, n.view.viewport.to);
      if (t == e)
        for (let s of this.gutters)
          s.update(n) && (i = true);
      else {
        i = true;
        let s = [];
        for (let r of e) {
          let o = t.indexOf(r);
          o < 0 ? s.push(new _l(this.view, r)) : (this.gutters[o].update(n), s.push(this.gutters[o]));
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
  }, {
    provide: (n) => D.scrollMargins.of((t) => {
      let e = t.plugin(n);
      return !e || e.gutters.length == 0 || !e.fixed ? null : t.textDirection == Y.LTR ? {
        left: e.dom.offsetWidth * t.scaleX
      } : {
        right: e.dom.offsetWidth * t.scaleX
      };
    })
  });
  function Pl(n) {
    return Array.isArray(n) ? n : [
      n
    ];
  }
  function Hr(n, t, e) {
    for (; n.value && n.from <= e; )
      n.from == e && t.push(n.value), n.next();
  }
  class gp {
    constructor(t, e, i) {
      this.gutter = t, this.height = i, this.i = 0, this.cursor = H.iter(t.markers, e.from);
    }
    addElement(t, e, i) {
      let { gutter: s } = this, r = (e.top - this.height) / t.scaleY, o = e.height / t.scaleY;
      if (this.i == s.elements.length) {
        let l = new Kh(t, o, r, i);
        s.elements.push(l), s.dom.appendChild(l.dom);
      } else
        s.elements[this.i].update(t, o, r, i);
      this.height = e.bottom, this.i++;
    }
    line(t, e, i) {
      let s = [];
      Hr(this.cursor, s, e.from), i.length && (s = s.concat(i));
      let r = this.gutter.config.lineMarker(t, e, s);
      r && s.unshift(r);
      let o = this.gutter;
      s.length == 0 && !o.config.renderEmptyElements || this.addElement(t, e, s);
    }
    widget(t, e) {
      let i = this.gutter.config.widgetMarker(t, e.widget, e), s = i ? [
        i
      ] : null;
      for (let r of t.state.facet(fp)) {
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
  class _l {
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
      this.markers = Pl(e.markers(t)), e.initialSpacer && (this.spacer = new Kh(t, 0, 0, [
        e.initialSpacer(t)
      ]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
    }
    update(t) {
      let e = this.markers;
      if (this.markers = Pl(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
        let s = this.config.updateSpacer(this.spacer.markers[0], t);
        s != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [
          s
        ]);
      }
      let i = t.view.viewport;
      return !H.eq(this.markers, e, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : false);
    }
    destroy() {
      for (let t of this.elements)
        t.destroy();
    }
  }
  class Kh {
    constructor(t, e, i, s) {
      this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, s);
    }
    update(t, e, i, s) {
      this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), mp(this.markers, s) || this.setMarkers(t, s);
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
  function mp(n, t) {
    if (n.length != t.length)
      return false;
    for (let e = 0; e < n.length; e++)
      if (!n[e].compare(t[e]))
        return false;
    return true;
  }
  const yp = T.define(), bp = T.define(), ti = T.define({
    combine(n) {
      return re(n, {
        formatNumber: String,
        domEventHandlers: {}
      }, {
        domEventHandlers(t, e) {
          let i = Object.assign({}, t);
          for (let s in e) {
            let r = i[s], o = e[s];
            i[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
          }
          return i;
        }
      });
    }
  });
  class zs extends de {
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
  function qs(n, t) {
    return n.state.facet(ti).formatNumber(t, n.state);
  }
  const wp = _i.compute([
    ti
  ], (n) => ({
    class: "cm-lineNumbers",
    renderEmptyElements: false,
    markers(t) {
      return t.state.facet(yp);
    },
    lineMarker(t, e, i) {
      return i.some((s) => s.toDOM) ? null : new zs(qs(t, t.state.doc.lineAt(e.from).number));
    },
    widgetMarker: (t, e, i) => {
      for (let s of t.state.facet(bp)) {
        let r = s(t, e, i);
        if (r)
          return r;
      }
      return null;
    },
    lineMarkerChange: (t) => t.startState.facet(ti) != t.state.facet(ti),
    initialSpacer(t) {
      return new zs(qs(t, Il(t.state.doc.lines)));
    },
    updateSpacer(t, e) {
      let i = qs(e.view, Il(e.view.state.doc.lines));
      return i == t.number ? t : new zs(i);
    },
    domEventHandlers: n.facet(ti).domEventHandlers
  }));
  function xp(n = {}) {
    return [
      ti.of(n),
      jh(),
      wp
    ];
  }
  function Il(n) {
    let t = 9;
    for (; t < n; )
      t = t * 10 + 9;
    return t;
  }
  const vp = new class extends de {
    constructor() {
      super(...arguments), this.elementClass = "cm-activeLineGutter";
    }
  }(), kp = qn.compute([
    "selection"
  ], (n) => {
    let t = [], e = -1;
    for (let i of n.selection.ranges) {
      let s = n.doc.lineAt(i.head).from;
      s > e && (e = s, t.push(vp.range(s)));
    }
    return H.of(t);
  });
  function Sp() {
    return kp;
  }
  const Cp = 1024;
  let Ap = 0;
  class $s {
    constructor(t, e) {
      this.from = t, this.to = e;
    }
  }
  class F {
    constructor(t = {}) {
      this.id = Ap++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
        throw new Error("This node type doesn't define a deserialize function");
      });
    }
    add(t) {
      if (this.perNode)
        throw new RangeError("Can't add per-node props to node types");
      return typeof t != "function" && (t = Ht.match(t)), (e) => {
        let i = t(e);
        return i === void 0 ? null : [
          this,
          i
        ];
      };
    }
  }
  F.closedBy = new F({
    deserialize: (n) => n.split(" ")
  });
  F.openedBy = new F({
    deserialize: (n) => n.split(" ")
  });
  F.group = new F({
    deserialize: (n) => n.split(" ")
  });
  F.isolate = new F({
    deserialize: (n) => {
      if (n && n != "rtl" && n != "ltr" && n != "auto")
        throw new RangeError("Invalid value for isolate: " + n);
      return n || "auto";
    }
  });
  F.contextHash = new F({
    perNode: true
  });
  F.lookAhead = new F({
    perNode: true
  });
  F.mounted = new F({
    perNode: true
  });
  class ts {
    constructor(t, e, i) {
      this.tree = t, this.overlay = e, this.parser = i;
    }
    static get(t) {
      return t && t.props && t.props[F.mounted.id];
    }
  }
  const Mp = /* @__PURE__ */ Object.create(null);
  class Ht {
    constructor(t, e, i, s = 0) {
      this.name = t, this.props = e, this.id = i, this.flags = s;
    }
    static define(t) {
      let e = t.props && t.props.length ? /* @__PURE__ */ Object.create(null) : Mp, i = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), s = new Ht(t.name || "", e, t.id, i);
      if (t.props) {
        for (let r of t.props)
          if (Array.isArray(r) || (r = r(s)), r) {
            if (r[0].perNode)
              throw new RangeError("Can't store a per-node prop on a node type");
            e[r[0].id] = r[1];
          }
      }
      return s;
    }
    prop(t) {
      return this.props[t.id];
    }
    get isTop() {
      return (this.flags & 1) > 0;
    }
    get isSkipped() {
      return (this.flags & 2) > 0;
    }
    get isError() {
      return (this.flags & 4) > 0;
    }
    get isAnonymous() {
      return (this.flags & 8) > 0;
    }
    is(t) {
      if (typeof t == "string") {
        if (this.name == t)
          return true;
        let e = this.prop(F.group);
        return e ? e.indexOf(t) > -1 : false;
      }
      return this.id == t;
    }
    static match(t) {
      let e = /* @__PURE__ */ Object.create(null);
      for (let i in t)
        for (let s of i.split(" "))
          e[s] = t[i];
      return (i) => {
        for (let s = i.prop(F.group), r = -1; r < (s ? s.length : 0); r++) {
          let o = e[r < 0 ? i.name : s[r]];
          if (o)
            return o;
        }
      };
    }
  }
  Ht.none = new Ht("", /* @__PURE__ */ Object.create(null), 0, 8);
  const Sn = /* @__PURE__ */ new WeakMap(), Nl = /* @__PURE__ */ new WeakMap();
  var at;
  (function(n) {
    n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
  })(at || (at = {}));
  class dt {
    constructor(t, e, i, s, r) {
      if (this.type = t, this.children = e, this.positions = i, this.length = s, this.props = null, r && r.length) {
        this.props = /* @__PURE__ */ Object.create(null);
        for (let [o, l] of r)
          this.props[typeof o == "number" ? o : o.id] = l;
      }
    }
    toString() {
      let t = ts.get(this);
      if (t && !t.overlay)
        return t.tree.toString();
      let e = "";
      for (let i of this.children) {
        let s = i.toString();
        s && (e && (e += ","), e += s);
      }
      return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "") : e;
    }
    cursor(t = 0) {
      return new Vr(this.topNode, t);
    }
    cursorAt(t, e = 0, i = 0) {
      let s = Sn.get(this) || this.topNode, r = new Vr(s);
      return r.moveTo(t, e), Sn.set(this, r._tree), r;
    }
    get topNode() {
      return new Nt(this, 0, 0, null);
    }
    resolve(t, e = 0) {
      let i = Ki(Sn.get(this) || this.topNode, t, e, false);
      return Sn.set(this, i), i;
    }
    resolveInner(t, e = 0) {
      let i = Ki(Nl.get(this) || this.topNode, t, e, true);
      return Nl.set(this, i), i;
    }
    resolveStack(t, e = 0) {
      return Tp(this, t, e);
    }
    iterate(t) {
      let { enter: e, leave: i, from: s = 0, to: r = this.length } = t, o = t.mode || 0, l = (o & at.IncludeAnonymous) > 0;
      for (let a = this.cursor(o | at.IncludeAnonymous); ; ) {
        let h = false;
        if (a.from <= r && a.to >= s && (!l && a.type.isAnonymous || e(a) !== false)) {
          if (a.firstChild())
            continue;
          h = true;
        }
        for (; h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
          if (!a.parent())
            return;
          h = true;
        }
      }
    }
    prop(t) {
      return t.perNode ? this.props ? this.props[t.id] : void 0 : this.type.prop(t);
    }
    get propValues() {
      let t = [];
      if (this.props)
        for (let e in this.props)
          t.push([
            +e,
            this.props[e]
          ]);
      return t;
    }
    balance(t = {}) {
      return this.children.length <= 8 ? this : yo(Ht.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, i, s) => new dt(this.type, e, i, s, this.propValues), t.makeTree || ((e, i, s) => new dt(Ht.none, e, i, s)));
    }
    static build(t) {
      return Bp(t);
    }
  }
  dt.empty = new dt(Ht.none, [], [], 0);
  class go {
    constructor(t, e) {
      this.buffer = t, this.index = e;
    }
    get id() {
      return this.buffer[this.index - 4];
    }
    get start() {
      return this.buffer[this.index - 3];
    }
    get end() {
      return this.buffer[this.index - 2];
    }
    get size() {
      return this.buffer[this.index - 1];
    }
    get pos() {
      return this.index;
    }
    next() {
      this.index -= 4;
    }
    fork() {
      return new go(this.buffer, this.index);
    }
  }
  class Oe {
    constructor(t, e, i) {
      this.buffer = t, this.length = e, this.set = i;
    }
    get type() {
      return Ht.none;
    }
    toString() {
      let t = [];
      for (let e = 0; e < this.buffer.length; )
        t.push(this.childString(e)), e = this.buffer[e + 3];
      return t.join(",");
    }
    childString(t) {
      let e = this.buffer[t], i = this.buffer[t + 3], s = this.set.types[e], r = s.name;
      if (/\W/.test(r) && !s.isError && (r = JSON.stringify(r)), t += 4, i == t)
        return r;
      let o = [];
      for (; t < i; )
        o.push(this.childString(t)), t = this.buffer[t + 3];
      return r + "(" + o.join(",") + ")";
    }
    findChild(t, e, i, s, r) {
      let { buffer: o } = this, l = -1;
      for (let a = t; a != e && !(Uh(r, s, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
        ;
      return l;
    }
    slice(t, e, i) {
      let s = this.buffer, r = new Uint16Array(e - t), o = 0;
      for (let l = t, a = 0; l < e; ) {
        r[a++] = s[l++], r[a++] = s[l++] - i;
        let h = r[a++] = s[l++] - i;
        r[a++] = s[l++] - t, o = Math.max(o, h);
      }
      return new Oe(r, o, this.set);
    }
  }
  function Uh(n, t, e, i) {
    switch (n) {
      case -2:
        return e < t;
      case -1:
        return i >= t && e < t;
      case 0:
        return e < t && i > t;
      case 1:
        return e <= t && i > t;
      case 2:
        return i > t;
      case 4:
        return true;
    }
  }
  function Ki(n, t, e, i) {
    for (var s; n.from == n.to || (e < 1 ? n.from >= t : n.from > t) || (e > -1 ? n.to <= t : n.to < t); ) {
      let o = !i && n instanceof Nt && n.index < 0 ? null : n.parent;
      if (!o)
        return n;
      n = o;
    }
    let r = i ? 0 : at.IgnoreOverlays;
    if (i)
      for (let o = n, l = o.parent; l; o = l, l = o.parent)
        o instanceof Nt && o.index < 0 && ((s = l.enter(t, e, r)) === null || s === void 0 ? void 0 : s.from) != o.from && (n = l);
    for (; ; ) {
      let o = n.enter(t, e, r);
      if (!o)
        return n;
      n = o;
    }
  }
  class Gh {
    cursor(t = 0) {
      return new Vr(this, t);
    }
    getChild(t, e = null, i = null) {
      let s = Fl(this, t, e, i);
      return s.length ? s[0] : null;
    }
    getChildren(t, e = null, i = null) {
      return Fl(this, t, e, i);
    }
    resolve(t, e = 0) {
      return Ki(this, t, e, false);
    }
    resolveInner(t, e = 0) {
      return Ki(this, t, e, true);
    }
    matchContext(t) {
      return Wr(this.parent, t);
    }
    enterUnfinishedNodesBefore(t) {
      let e = this.childBefore(t), i = this;
      for (; e; ) {
        let s = e.lastChild;
        if (!s || s.to != e.to)
          break;
        s.type.isError && s.from == s.to ? (i = e, e = s.prevSibling) : e = s;
      }
      return i;
    }
    get node() {
      return this;
    }
    get next() {
      return this.parent;
    }
  }
  class Nt extends Gh {
    constructor(t, e, i, s) {
      super(), this._tree = t, this.from = e, this.index = i, this._parent = s;
    }
    get type() {
      return this._tree.type;
    }
    get name() {
      return this._tree.type.name;
    }
    get to() {
      return this.from + this._tree.length;
    }
    nextChild(t, e, i, s, r = 0) {
      for (let o = this; ; ) {
        for (let { children: l, positions: a } = o._tree, h = e > 0 ? l.length : -1; t != h; t += e) {
          let c = l[t], f = a[t] + o.from;
          if (Uh(s, i, f, f + c.length)) {
            if (c instanceof Oe) {
              if (r & at.ExcludeBuffers)
                continue;
              let u = c.findChild(0, c.buffer.length, e, i - f, s);
              if (u > -1)
                return new Se(new Dp(o, c, t, f), null, u);
            } else if (r & at.IncludeAnonymous || !c.type.isAnonymous || mo(c)) {
              let u;
              if (!(r & at.IgnoreMounts) && (u = ts.get(c)) && !u.overlay)
                return new Nt(u.tree, f, t, o);
              let d = new Nt(c, f, t, o);
              return r & at.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(e < 0 ? c.children.length - 1 : 0, e, i, s);
            }
          }
        }
        if (r & at.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? t = o.index + e : t = e < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
          return null;
      }
    }
    get firstChild() {
      return this.nextChild(0, 1, 0, 4);
    }
    get lastChild() {
      return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
    }
    childAfter(t) {
      return this.nextChild(0, 1, t, 2);
    }
    childBefore(t) {
      return this.nextChild(this._tree.children.length - 1, -1, t, -2);
    }
    enter(t, e, i = 0) {
      let s;
      if (!(i & at.IgnoreOverlays) && (s = ts.get(this._tree)) && s.overlay) {
        let r = t - this.from;
        for (let { from: o, to: l } of s.overlay)
          if ((e > 0 ? o <= r : o < r) && (e < 0 ? l >= r : l > r))
            return new Nt(s.tree, s.overlay[0].from + this.from, -1, this);
      }
      return this.nextChild(0, 1, t, e, i);
    }
    nextSignificantParent() {
      let t = this;
      for (; t.type.isAnonymous && t._parent; )
        t = t._parent;
      return t;
    }
    get parent() {
      return this._parent ? this._parent.nextSignificantParent() : null;
    }
    get nextSibling() {
      return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
    }
    get prevSibling() {
      return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
    }
    get tree() {
      return this._tree;
    }
    toTree() {
      return this._tree;
    }
    toString() {
      return this._tree.toString();
    }
  }
  function Fl(n, t, e, i) {
    let s = n.cursor(), r = [];
    if (!s.firstChild())
      return r;
    if (e != null) {
      for (let o = false; !o; )
        if (o = s.type.is(e), !s.nextSibling())
          return r;
    }
    for (; ; ) {
      if (i != null && s.type.is(i))
        return r;
      if (s.type.is(t) && r.push(s.node), !s.nextSibling())
        return i == null ? r : [];
    }
  }
  function Wr(n, t, e = t.length - 1) {
    for (let i = n; e >= 0; i = i.parent) {
      if (!i)
        return false;
      if (!i.type.isAnonymous) {
        if (t[e] && t[e] != i.name)
          return false;
        e--;
      }
    }
    return true;
  }
  class Dp {
    constructor(t, e, i, s) {
      this.parent = t, this.buffer = e, this.index = i, this.start = s;
    }
  }
  class Se extends Gh {
    get name() {
      return this.type.name;
    }
    get from() {
      return this.context.start + this.context.buffer.buffer[this.index + 1];
    }
    get to() {
      return this.context.start + this.context.buffer.buffer[this.index + 2];
    }
    constructor(t, e, i) {
      super(), this.context = t, this._parent = e, this.index = i, this.type = t.buffer.set.types[t.buffer.buffer[i]];
    }
    child(t, e, i) {
      let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], t, e - this.context.start, i);
      return r < 0 ? null : new Se(this.context, this, r);
    }
    get firstChild() {
      return this.child(1, 0, 4);
    }
    get lastChild() {
      return this.child(-1, 0, 4);
    }
    childAfter(t) {
      return this.child(1, t, 2);
    }
    childBefore(t) {
      return this.child(-1, t, -2);
    }
    enter(t, e, i = 0) {
      if (i & at.ExcludeBuffers)
        return null;
      let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
      return r < 0 ? null : new Se(this.context, this, r);
    }
    get parent() {
      return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(t) {
      return this._parent ? null : this.context.parent.nextChild(this.context.index + t, t, 0, 4);
    }
    get nextSibling() {
      let { buffer: t } = this.context, e = t.buffer[this.index + 3];
      return e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new Se(this.context, this._parent, e) : this.externalSibling(1);
    }
    get prevSibling() {
      let { buffer: t } = this.context, e = this._parent ? this._parent.index + 4 : 0;
      return this.index == e ? this.externalSibling(-1) : new Se(this.context, this._parent, t.findChild(e, this.index, -1, 0, 4));
    }
    get tree() {
      return null;
    }
    toTree() {
      let t = [], e = [], { buffer: i } = this.context, s = this.index + 4, r = i.buffer[this.index + 3];
      if (r > s) {
        let o = i.buffer[this.index + 1];
        t.push(i.slice(s, r, o)), e.push(0);
      }
      return new dt(this.type, t, e, this.to - this.from);
    }
    toString() {
      return this.context.buffer.childString(this.index);
    }
  }
  function Yh(n) {
    if (!n.length)
      return null;
    let t = 0, e = n[0];
    for (let r = 1; r < n.length; r++) {
      let o = n[r];
      (o.from > e.from || o.to < e.to) && (e = o, t = r);
    }
    let i = e instanceof Nt && e.index < 0 ? null : e.parent, s = n.slice();
    return i ? s[t] = i : s.splice(t, 1), new Op(s, e);
  }
  class Op {
    constructor(t, e) {
      this.heads = t, this.node = e;
    }
    get next() {
      return Yh(this.heads);
    }
  }
  function Tp(n, t, e) {
    let i = n.resolveInner(t, e), s = null;
    for (let r = i instanceof Nt ? i : i.context.parent; r; r = r.parent)
      if (r.index < 0) {
        let o = r.parent;
        (s || (s = [
          i
        ])).push(o.resolve(t, e)), r = o;
      } else {
        let o = ts.get(r.tree);
        if (o && o.overlay && o.overlay[0].from <= t && o.overlay[o.overlay.length - 1].to >= t) {
          let l = new Nt(o.tree, o.overlay[0].from + r.from, -1, r);
          (s || (s = [
            i
          ])).push(Ki(l, t, e, false));
        }
      }
    return s ? Yh(s) : i;
  }
  class Vr {
    get name() {
      return this.type.name;
    }
    constructor(t, e = 0) {
      if (this.mode = e, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, t instanceof Nt)
        this.yieldNode(t);
      else {
        this._tree = t.context.parent, this.buffer = t.context;
        for (let i = t._parent; i; i = i._parent)
          this.stack.unshift(i.index);
        this.bufferNode = t, this.yieldBuf(t.index);
      }
    }
    yieldNode(t) {
      return t ? (this._tree = t, this.type = t.type, this.from = t.from, this.to = t.to, true) : false;
    }
    yieldBuf(t, e) {
      this.index = t;
      let { start: i, buffer: s } = this.buffer;
      return this.type = e || s.set.types[s.buffer[t]], this.from = i + s.buffer[t + 1], this.to = i + s.buffer[t + 2], true;
    }
    yield(t) {
      return t ? t instanceof Nt ? (this.buffer = null, this.yieldNode(t)) : (this.buffer = t.context, this.yieldBuf(t.index, t.type)) : false;
    }
    toString() {
      return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
    }
    enterChild(t, e, i) {
      if (!this.buffer)
        return this.yield(this._tree.nextChild(t < 0 ? this._tree._tree.children.length - 1 : 0, t, e, i, this.mode));
      let { buffer: s } = this.buffer, r = s.findChild(this.index + 4, s.buffer[this.index + 3], t, e - this.buffer.start, i);
      return r < 0 ? false : (this.stack.push(this.index), this.yieldBuf(r));
    }
    firstChild() {
      return this.enterChild(1, 0, 4);
    }
    lastChild() {
      return this.enterChild(-1, 0, 4);
    }
    childAfter(t) {
      return this.enterChild(1, t, 2);
    }
    childBefore(t) {
      return this.enterChild(-1, t, -2);
    }
    enter(t, e, i = this.mode) {
      return this.buffer ? i & at.ExcludeBuffers ? false : this.enterChild(1, t, e) : this.yield(this._tree.enter(t, e, i));
    }
    parent() {
      if (!this.buffer)
        return this.yieldNode(this.mode & at.IncludeAnonymous ? this._tree._parent : this._tree.parent);
      if (this.stack.length)
        return this.yieldBuf(this.stack.pop());
      let t = this.mode & at.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
      return this.buffer = null, this.yieldNode(t);
    }
    sibling(t) {
      if (!this.buffer)
        return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t, t, 0, 4, this.mode)) : false;
      let { buffer: e } = this.buffer, i = this.stack.length - 1;
      if (t < 0) {
        let s = i < 0 ? 0 : this.stack[i] + 4;
        if (this.index != s)
          return this.yieldBuf(e.findChild(s, this.index, -1, 0, 4));
      } else {
        let s = e.buffer[this.index + 3];
        if (s < (i < 0 ? e.buffer.length : e.buffer[this.stack[i] + 3]))
          return this.yieldBuf(s);
      }
      return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + t, t, 0, 4, this.mode)) : false;
    }
    nextSibling() {
      return this.sibling(1);
    }
    prevSibling() {
      return this.sibling(-1);
    }
    atLastNode(t) {
      let e, i, { buffer: s } = this;
      if (s) {
        if (t > 0) {
          if (this.index < s.buffer.buffer.length)
            return false;
        } else
          for (let r = 0; r < this.index; r++)
            if (s.buffer.buffer[r + 3] < this.index)
              return false;
        ({ index: e, parent: i } = s);
      } else
        ({ index: e, _parent: i } = this._tree);
      for (; i; { index: e, _parent: i } = i)
        if (e > -1)
          for (let r = e + t, o = t < 0 ? -1 : i._tree.children.length; r != o; r += t) {
            let l = i._tree.children[r];
            if (this.mode & at.IncludeAnonymous || l instanceof Oe || !l.type.isAnonymous || mo(l))
              return false;
          }
      return true;
    }
    move(t, e) {
      if (e && this.enterChild(t, 0, 4))
        return true;
      for (; ; ) {
        if (this.sibling(t))
          return true;
        if (this.atLastNode(t) || !this.parent())
          return false;
      }
    }
    next(t = true) {
      return this.move(1, t);
    }
    prev(t = true) {
      return this.move(-1, t);
    }
    moveTo(t, e = 0) {
      for (; (this.from == this.to || (e < 1 ? this.from >= t : this.from > t) || (e > -1 ? this.to <= t : this.to < t)) && this.parent(); )
        ;
      for (; this.enterChild(1, t, e); )
        ;
      return this;
    }
    get node() {
      if (!this.buffer)
        return this._tree;
      let t = this.bufferNode, e = null, i = 0;
      if (t && t.context == this.buffer)
        t:
          for (let s = this.index, r = this.stack.length; r >= 0; ) {
            for (let o = t; o; o = o._parent)
              if (o.index == s) {
                if (s == this.index)
                  return o;
                e = o, i = r + 1;
                break t;
              }
            s = this.stack[--r];
          }
      for (let s = i; s < this.stack.length; s++)
        e = new Se(this.buffer, e, this.stack[s]);
      return this.bufferNode = new Se(this.buffer, e, this.index);
    }
    get tree() {
      return this.buffer ? null : this._tree._tree;
    }
    iterate(t, e) {
      for (let i = 0; ; ) {
        let s = false;
        if (this.type.isAnonymous || t(this) !== false) {
          if (this.firstChild()) {
            i++;
            continue;
          }
          this.type.isAnonymous || (s = true);
        }
        for (; ; ) {
          if (s && e && e(this), s = this.type.isAnonymous, !i)
            return;
          if (this.nextSibling())
            break;
          this.parent(), i--, s = true;
        }
      }
    }
    matchContext(t) {
      if (!this.buffer)
        return Wr(this.node.parent, t);
      let { buffer: e } = this.buffer, { types: i } = e.set;
      for (let s = t.length - 1, r = this.stack.length - 1; s >= 0; r--) {
        if (r < 0)
          return Wr(this._tree, t, s);
        let o = i[e.buffer[this.stack[r]]];
        if (!o.isAnonymous) {
          if (t[s] && t[s] != o.name)
            return false;
          s--;
        }
      }
      return true;
    }
  }
  function mo(n) {
    return n.children.some((t) => t instanceof Oe || !t.type.isAnonymous || mo(t));
  }
  function Bp(n) {
    var t;
    let { buffer: e, nodeSet: i, maxBufferLength: s = Cp, reused: r = [], minRepeatType: o = i.types.length } = n, l = Array.isArray(e) ? new go(e, e.length) : e, a = i.types, h = 0, c = 0;
    function f(x, k, A, P, N, q) {
      let { id: _, start: R, end: z, size: V } = l, U = c, mt = h;
      for (; V < 0; )
        if (l.next(), V == -1) {
          let le = r[_];
          A.push(le), P.push(R - x);
          return;
        } else if (V == -3) {
          h = _;
          return;
        } else if (V == -4) {
          c = _;
          return;
        } else
          throw new RangeError(`Unrecognized record size: ${V}`);
      let Mt = a[_], $t, rt, Et = R - x;
      if (z - R <= s && (rt = m(l.pos - k, N))) {
        let le = new Uint16Array(rt.size - rt.skip), Rt = l.pos - rt.size, jt = le.length;
        for (; l.pos > Rt; )
          jt = y(rt.start, le, jt);
        $t = new Oe(le, z - rt.start, i), Et = rt.start - x;
      } else {
        let le = l.pos - V;
        l.next();
        let Rt = [], jt = [], Ee = _ >= o ? _ : -1, Ue = 0, an = z;
        for (; l.pos > le; )
          Ee >= 0 && l.id == Ee && l.size >= 0 ? (l.end <= an - s && (p(Rt, jt, R, Ue, l.end, an, Ee, U, mt), Ue = Rt.length, an = l.end), l.next()) : q > 2500 ? u(R, le, Rt, jt) : f(R, le, Rt, jt, Ee, q + 1);
        if (Ee >= 0 && Ue > 0 && Ue < Rt.length && p(Rt, jt, R, Ue, R, an, Ee, U, mt), Rt.reverse(), jt.reverse(), Ee > -1 && Ue > 0) {
          let Lo = d(Mt, mt);
          $t = yo(Mt, Rt, jt, 0, Rt.length, 0, z - R, Lo, Lo);
        } else
          $t = g(Mt, Rt, jt, z - R, U - z, mt);
      }
      A.push($t), P.push(Et);
    }
    function u(x, k, A, P) {
      let N = [], q = 0, _ = -1;
      for (; l.pos > k; ) {
        let { id: R, start: z, end: V, size: U } = l;
        if (U > 4)
          l.next();
        else {
          if (_ > -1 && z < _)
            break;
          _ < 0 && (_ = V - s), N.push(R, z, V), q++, l.next();
        }
      }
      if (q) {
        let R = new Uint16Array(q * 4), z = N[N.length - 2];
        for (let V = N.length - 3, U = 0; V >= 0; V -= 3)
          R[U++] = N[V], R[U++] = N[V + 1] - z, R[U++] = N[V + 2] - z, R[U++] = U;
        A.push(new Oe(R, N[2] - z, i)), P.push(z - x);
      }
    }
    function d(x, k) {
      return (A, P, N) => {
        let q = 0, _ = A.length - 1, R, z;
        if (_ >= 0 && (R = A[_]) instanceof dt) {
          if (!_ && R.type == x && R.length == N)
            return R;
          (z = R.prop(F.lookAhead)) && (q = P[_] + R.length + z);
        }
        return g(x, A, P, N, q, k);
      };
    }
    function p(x, k, A, P, N, q, _, R, z) {
      let V = [], U = [];
      for (; x.length > P; )
        V.push(x.pop()), U.push(k.pop() + A - N);
      x.push(g(i.types[_], V, U, q - N, R - q, z)), k.push(N - A);
    }
    function g(x, k, A, P, N, q, _) {
      if (q) {
        let R = [
          F.contextHash,
          q
        ];
        _ = _ ? [
          R
        ].concat(_) : [
          R
        ];
      }
      if (N > 25) {
        let R = [
          F.lookAhead,
          N
        ];
        _ = _ ? [
          R
        ].concat(_) : [
          R
        ];
      }
      return new dt(x, k, A, P, _);
    }
    function m(x, k) {
      let A = l.fork(), P = 0, N = 0, q = 0, _ = A.end - s, R = {
        size: 0,
        start: 0,
        skip: 0
      };
      t:
        for (let z = A.pos - x; A.pos > z; ) {
          let V = A.size;
          if (A.id == k && V >= 0) {
            R.size = P, R.start = N, R.skip = q, q += 4, P += 4, A.next();
            continue;
          }
          let U = A.pos - V;
          if (V < 0 || U < z || A.start < _)
            break;
          let mt = A.id >= o ? 4 : 0, Mt = A.start;
          for (A.next(); A.pos > U; ) {
            if (A.size < 0)
              if (A.size == -3)
                mt += 4;
              else
                break t;
            else
              A.id >= o && (mt += 4);
            A.next();
          }
          N = Mt, P += V, q += mt;
        }
      return (k < 0 || P == x) && (R.size = P, R.start = N, R.skip = q), R.size > 4 ? R : void 0;
    }
    function y(x, k, A) {
      let { id: P, start: N, end: q, size: _ } = l;
      if (l.next(), _ >= 0 && P < o) {
        let R = A;
        if (_ > 4) {
          let z = l.pos - (_ - 4);
          for (; l.pos > z; )
            A = y(x, k, A);
        }
        k[--A] = R, k[--A] = q - x, k[--A] = N - x, k[--A] = P;
      } else
        _ == -3 ? h = P : _ == -4 && (c = P);
      return A;
    }
    let w = [], v = [];
    for (; l.pos > 0; )
      f(n.start || 0, n.bufferStart || 0, w, v, -1, 0);
    let S = (t = n.length) !== null && t !== void 0 ? t : w.length ? v[0] + w[0].length : 0;
    return new dt(a[n.topID], w.reverse(), v.reverse(), S);
  }
  const Hl = /* @__PURE__ */ new WeakMap();
  function $n(n, t) {
    if (!n.isAnonymous || t instanceof Oe || t.type != n)
      return 1;
    let e = Hl.get(t);
    if (e == null) {
      e = 1;
      for (let i of t.children) {
        if (i.type != n || !(i instanceof dt)) {
          e = 1;
          break;
        }
        e += $n(n, i);
      }
      Hl.set(t, e);
    }
    return e;
  }
  function yo(n, t, e, i, s, r, o, l, a) {
    let h = 0;
    for (let p = i; p < s; p++)
      h += $n(n, t[p]);
    let c = Math.ceil(h * 1.5 / 8), f = [], u = [];
    function d(p, g, m, y, w) {
      for (let v = m; v < y; ) {
        let S = v, x = g[v], k = $n(n, p[v]);
        for (v++; v < y; v++) {
          let A = $n(n, p[v]);
          if (k + A >= c)
            break;
          k += A;
        }
        if (v == S + 1) {
          if (k > c) {
            let A = p[S];
            d(A.children, A.positions, 0, A.children.length, g[S] + w);
            continue;
          }
          f.push(p[S]);
        } else {
          let A = g[v - 1] + p[v - 1].length - x;
          f.push(yo(n, p, g, S, v, x, A, null, a));
        }
        u.push(x + w - r);
      }
    }
    return d(t, e, i, s, 0), (l || a)(f, u, o);
  }
  class He {
    constructor(t, e, i, s, r = false, o = false) {
      this.from = t, this.to = e, this.tree = i, this.offset = s, this.open = (r ? 1 : 0) | (o ? 2 : 0);
    }
    get openStart() {
      return (this.open & 1) > 0;
    }
    get openEnd() {
      return (this.open & 2) > 0;
    }
    static addTree(t, e = [], i = false) {
      let s = [
        new He(0, t.length, t, 0, false, i)
      ];
      for (let r of e)
        r.to > t.length && s.push(r);
      return s;
    }
    static applyChanges(t, e, i = 128) {
      if (!e.length)
        return t;
      let s = [], r = 1, o = t.length ? t[0] : null;
      for (let l = 0, a = 0, h = 0; ; l++) {
        let c = l < e.length ? e[l] : null, f = c ? c.fromA : 1e9;
        if (f - a >= i)
          for (; o && o.from < f; ) {
            let u = o;
            if (a >= u.from || f <= u.to || h) {
              let d = Math.max(u.from, a) - h, p = Math.min(u.to, f) - h;
              u = d >= p ? null : new He(d, p, u.tree, u.offset + h, l > 0, !!c);
            }
            if (u && s.push(u), o.to > f)
              break;
            o = r < t.length ? t[r++] : null;
          }
        if (!c)
          break;
        a = c.toA, h = c.toA - c.toB;
      }
      return s;
    }
  }
  class Ep {
    startParse(t, e, i) {
      return typeof t == "string" && (t = new Rp(t)), i = i ? i.length ? i.map((s) => new $s(s.from, s.to)) : [
        new $s(0, 0)
      ] : [
        new $s(0, t.length)
      ], this.createParse(t, e || [], i);
    }
    parse(t, e, i) {
      let s = this.startParse(t, e, i);
      for (; ; ) {
        let r = s.advance();
        if (r)
          return r;
      }
    }
  }
  class Rp {
    constructor(t) {
      this.string = t;
    }
    get length() {
      return this.string.length;
    }
    chunk(t) {
      return this.string.slice(t);
    }
    get lineChunks() {
      return false;
    }
    read(t, e) {
      return this.string.slice(t, e);
    }
  }
  new F({
    perNode: true
  });
  let Lp = 0;
  class Lt {
    constructor(t, e, i, s) {
      this.name = t, this.set = e, this.base = i, this.modified = s, this.id = Lp++;
    }
    toString() {
      let { name: t } = this;
      for (let e of this.modified)
        e.name && (t = `${e.name}(${t})`);
      return t;
    }
    static define(t, e) {
      let i = typeof t == "string" ? t : "?";
      if (t instanceof Lt && (e = t), e == null ? void 0 : e.base)
        throw new Error("Can not derive from a modified tag");
      let s = new Lt(i, [], null, []);
      if (s.set.push(s), e)
        for (let r of e.set)
          s.set.push(r);
      return s;
    }
    static defineModifier(t) {
      let e = new es(t);
      return (i) => i.modified.indexOf(e) > -1 ? i : es.get(i.base || i, i.modified.concat(e).sort((s, r) => s.id - r.id));
    }
  }
  let Pp = 0;
  class es {
    constructor(t) {
      this.name = t, this.instances = [], this.id = Pp++;
    }
    static get(t, e) {
      if (!e.length)
        return t;
      let i = e[0].instances.find((l) => l.base == t && _p(e, l.modified));
      if (i)
        return i;
      let s = [], r = new Lt(t.name, s, t, e);
      for (let l of e)
        l.instances.push(r);
      let o = Ip(e);
      for (let l of t.set)
        if (!l.modified.length)
          for (let a of o)
            s.push(es.get(l, a));
      return r;
    }
  }
  function _p(n, t) {
    return n.length == t.length && n.every((e, i) => e == t[i]);
  }
  function Ip(n) {
    let t = [
      []
    ];
    for (let e = 0; e < n.length; e++)
      for (let i = 0, s = t.length; i < s; i++)
        t.push(t[i].concat(n[e]));
    return t.sort((e, i) => i.length - e.length);
  }
  function Np(n) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let e in n) {
      let i = n[e];
      Array.isArray(i) || (i = [
        i
      ]);
      for (let s of e.split(" "))
        if (s) {
          let r = [], o = 2, l = s;
          for (let f = 0; ; ) {
            if (l == "..." && f > 0 && f + 3 == s.length) {
              o = 1;
              break;
            }
            let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
            if (!u)
              throw new RangeError("Invalid path: " + s);
            if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), f += u[0].length, f == s.length)
              break;
            let d = s[f++];
            if (f == s.length && d == "!") {
              o = 0;
              break;
            }
            if (d != "/")
              throw new RangeError("Invalid path: " + s);
            l = s.slice(f);
          }
          let a = r.length - 1, h = r[a];
          if (!h)
            throw new RangeError("Invalid path: " + s);
          let c = new is(i, o, a > 0 ? r.slice(0, a) : null);
          t[h] = c.sort(t[h]);
        }
    }
    return Jh.add(t);
  }
  const Jh = new F();
  class is {
    constructor(t, e, i, s) {
      this.tags = t, this.mode = e, this.context = i, this.next = s;
    }
    get opaque() {
      return this.mode == 0;
    }
    get inherit() {
      return this.mode == 1;
    }
    sort(t) {
      return !t || t.depth < this.depth ? (this.next = t, this) : (t.next = this.sort(t.next), t);
    }
    get depth() {
      return this.context ? this.context.length : 0;
    }
  }
  is.empty = new is([], 2, null);
  function Xh(n, t) {
    let e = /* @__PURE__ */ Object.create(null);
    for (let r of n)
      if (!Array.isArray(r.tag))
        e[r.tag.id] = r.class;
      else
        for (let o of r.tag)
          e[o.id] = r.class;
    let { scope: i, all: s = null } = t || {};
    return {
      style: (r) => {
        let o = s;
        for (let l of r)
          for (let a of l.set) {
            let h = e[a.id];
            if (h) {
              o = o ? o + " " + h : h;
              break;
            }
          }
        return o;
      },
      scope: i
    };
  }
  function Fp(n, t) {
    let e = null;
    for (let i of n) {
      let s = i.style(t);
      s && (e = e ? e + " " + s : s);
    }
    return e;
  }
  function Hp(n, t, e, i = 0, s = n.length) {
    let r = new Wp(i, Array.isArray(t) ? t : [
      t
    ], e);
    r.highlightRange(n.cursor(), i, s, "", r.highlighters), r.flush(s);
  }
  class Wp {
    constructor(t, e, i) {
      this.at = t, this.highlighters = e, this.span = i, this.class = "";
    }
    startSpan(t, e) {
      e != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = e);
    }
    flush(t) {
      t > this.at && this.class && this.span(this.at, t, this.class);
    }
    highlightRange(t, e, i, s, r) {
      let { type: o, from: l, to: a } = t;
      if (l >= i || a <= e)
        return;
      o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
      let h = s, c = Vp(t) || is.empty, f = Fp(r, c.tags);
      if (f && (h && (h += " "), h += f, c.mode == 1 && (s += (s ? " " : "") + f)), this.startSpan(Math.max(e, l), h), c.opaque)
        return;
      let u = t.tree && t.tree.prop(F.mounted);
      if (u && u.overlay) {
        let d = t.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((m) => !m.scope || m.scope(u.tree.type)), g = t.firstChild();
        for (let m = 0, y = l; ; m++) {
          let w = m < u.overlay.length ? u.overlay[m] : null, v = w ? w.from + l : a, S = Math.max(e, y), x = Math.min(i, v);
          if (S < x && g)
            for (; t.from < x && (this.highlightRange(t, S, x, s, r), this.startSpan(Math.min(x, t.to), h), !(t.to >= v || !t.nextSibling())); )
              ;
          if (!w || v > i)
            break;
          y = w.to + l, y > e && (this.highlightRange(d.cursor(), Math.max(e, w.from + l), Math.min(i, y), "", p), this.startSpan(Math.min(i, y), h));
        }
        g && t.parent();
      } else if (t.firstChild()) {
        u && (s = "");
        do
          if (!(t.to <= e)) {
            if (t.from >= i)
              break;
            this.highlightRange(t, e, i, s, r), this.startSpan(Math.min(i, t.to), h);
          }
        while (t.nextSibling());
        t.parent();
      }
    }
  }
  function Vp(n) {
    let t = n.type.prop(Jh);
    for (; t && t.context && !n.matchContext(t.context); )
      t = t.next;
    return t || null;
  }
  const C = Lt.define, Cn = C(), ye = C(), Wl = C(ye), Vl = C(ye), be = C(), An = C(be), js = C(be), Yt = C(), Re = C(Yt), Ut = C(), Gt = C(), zr = C(), Si = C(zr), Mn = C(), M = {
    comment: Cn,
    lineComment: C(Cn),
    blockComment: C(Cn),
    docComment: C(Cn),
    name: ye,
    variableName: C(ye),
    typeName: Wl,
    tagName: C(Wl),
    propertyName: Vl,
    attributeName: C(Vl),
    className: C(ye),
    labelName: C(ye),
    namespace: C(ye),
    macroName: C(ye),
    literal: be,
    string: An,
    docString: C(An),
    character: C(An),
    attributeValue: C(An),
    number: js,
    integer: C(js),
    float: C(js),
    bool: C(be),
    regexp: C(be),
    escape: C(be),
    color: C(be),
    url: C(be),
    keyword: Ut,
    self: C(Ut),
    null: C(Ut),
    atom: C(Ut),
    unit: C(Ut),
    modifier: C(Ut),
    operatorKeyword: C(Ut),
    controlKeyword: C(Ut),
    definitionKeyword: C(Ut),
    moduleKeyword: C(Ut),
    operator: Gt,
    derefOperator: C(Gt),
    arithmeticOperator: C(Gt),
    logicOperator: C(Gt),
    bitwiseOperator: C(Gt),
    compareOperator: C(Gt),
    updateOperator: C(Gt),
    definitionOperator: C(Gt),
    typeOperator: C(Gt),
    controlOperator: C(Gt),
    punctuation: zr,
    separator: C(zr),
    bracket: Si,
    angleBracket: C(Si),
    squareBracket: C(Si),
    paren: C(Si),
    brace: C(Si),
    content: Yt,
    heading: Re,
    heading1: C(Re),
    heading2: C(Re),
    heading3: C(Re),
    heading4: C(Re),
    heading5: C(Re),
    heading6: C(Re),
    contentSeparator: C(Yt),
    list: C(Yt),
    quote: C(Yt),
    emphasis: C(Yt),
    strong: C(Yt),
    link: C(Yt),
    monospace: C(Yt),
    strikethrough: C(Yt),
    inserted: C(),
    deleted: C(),
    changed: C(),
    invalid: C(),
    meta: Mn,
    documentMeta: C(Mn),
    annotation: C(Mn),
    processingInstruction: C(Mn),
    definition: Lt.defineModifier("definition"),
    constant: Lt.defineModifier("constant"),
    function: Lt.defineModifier("function"),
    standard: Lt.defineModifier("standard"),
    local: Lt.defineModifier("local"),
    special: Lt.defineModifier("special")
  };
  for (let n in M) {
    let t = M[n];
    t instanceof Lt && (t.name = n);
  }
  Xh([
    {
      tag: M.link,
      class: "tok-link"
    },
    {
      tag: M.heading,
      class: "tok-heading"
    },
    {
      tag: M.emphasis,
      class: "tok-emphasis"
    },
    {
      tag: M.strong,
      class: "tok-strong"
    },
    {
      tag: M.keyword,
      class: "tok-keyword"
    },
    {
      tag: M.atom,
      class: "tok-atom"
    },
    {
      tag: M.bool,
      class: "tok-bool"
    },
    {
      tag: M.url,
      class: "tok-url"
    },
    {
      tag: M.labelName,
      class: "tok-labelName"
    },
    {
      tag: M.inserted,
      class: "tok-inserted"
    },
    {
      tag: M.deleted,
      class: "tok-deleted"
    },
    {
      tag: M.literal,
      class: "tok-literal"
    },
    {
      tag: M.string,
      class: "tok-string"
    },
    {
      tag: M.number,
      class: "tok-number"
    },
    {
      tag: [
        M.regexp,
        M.escape,
        M.special(M.string)
      ],
      class: "tok-string2"
    },
    {
      tag: M.variableName,
      class: "tok-variableName"
    },
    {
      tag: M.local(M.variableName),
      class: "tok-variableName tok-local"
    },
    {
      tag: M.definition(M.variableName),
      class: "tok-variableName tok-definition"
    },
    {
      tag: M.special(M.variableName),
      class: "tok-variableName2"
    },
    {
      tag: M.definition(M.propertyName),
      class: "tok-propertyName tok-definition"
    },
    {
      tag: M.typeName,
      class: "tok-typeName"
    },
    {
      tag: M.namespace,
      class: "tok-namespace"
    },
    {
      tag: M.className,
      class: "tok-className"
    },
    {
      tag: M.macroName,
      class: "tok-macroName"
    },
    {
      tag: M.propertyName,
      class: "tok-propertyName"
    },
    {
      tag: M.operator,
      class: "tok-operator"
    },
    {
      tag: M.comment,
      class: "tok-comment"
    },
    {
      tag: M.meta,
      class: "tok-meta"
    },
    {
      tag: M.invalid,
      class: "tok-invalid"
    },
    {
      tag: M.punctuation,
      class: "tok-punctuation"
    }
  ]);
  var Ks;
  const Bi = new F(), zp = new F();
  class te {
    constructor(t, e, i = [], s = "") {
      this.data = t, this.name = s, I.prototype.hasOwnProperty("tree") || Object.defineProperty(I.prototype, "tree", {
        get() {
          return pt(this);
        }
      }), this.parser = e, this.extension = [
        Te.of(this),
        I.languageData.of((r, o, l) => {
          let a = zl(r, o, l), h = a.type.prop(Bi);
          if (!h)
            return [];
          let c = r.facet(h), f = a.type.prop(zp);
          if (f) {
            let u = a.resolve(o - a.from, l);
            for (let d of f)
              if (d.test(u, r)) {
                let p = r.facet(d.facet);
                return d.type == "replace" ? p : p.concat(c);
              }
          }
          return c;
        })
      ].concat(i);
    }
    isActiveAt(t, e, i = -1) {
      return zl(t, e, i).type.prop(Bi) == this.data;
    }
    findRegions(t) {
      let e = t.facet(Te);
      if ((e == null ? void 0 : e.data) == this.data)
        return [
          {
            from: 0,
            to: t.doc.length
          }
        ];
      if (!e || !e.allowsNesting)
        return [];
      let i = [], s = (r, o) => {
        if (r.prop(Bi) == this.data) {
          i.push({
            from: o,
            to: o + r.length
          });
          return;
        }
        let l = r.prop(F.mounted);
        if (l) {
          if (l.tree.prop(Bi) == this.data) {
            if (l.overlay)
              for (let a of l.overlay)
                i.push({
                  from: a.from + o,
                  to: a.to + o
                });
            else
              i.push({
                from: o,
                to: o + r.length
              });
            return;
          } else if (l.overlay) {
            let a = i.length;
            if (s(l.tree, l.overlay[0].from + o), i.length > a)
              return;
          }
        }
        for (let a = 0; a < r.children.length; a++) {
          let h = r.children[a];
          h instanceof dt && s(h, r.positions[a] + o);
        }
      };
      return s(pt(t), 0), i;
    }
    get allowsNesting() {
      return true;
    }
  }
  te.setState = L.define();
  function zl(n, t, e) {
    let i = n.facet(Te), s = pt(n).topNode;
    if (!i || i.allowsNesting)
      for (let r = s; r; r = r.enter(t, e, at.ExcludeBuffers))
        r.type.isTop && (s = r);
    return s;
  }
  function pt(n) {
    let t = n.field(te.state, false);
    return t ? t.tree : dt.empty;
  }
  class qp {
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
  let Ci = null;
  class ns {
    constructor(t, e, i = [], s, r, o, l, a) {
      this.parser = t, this.state = e, this.fragments = i, this.tree = s, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
    }
    static create(t, e, i) {
      return new ns(t, e, [], dt.empty, 0, i, [], null);
    }
    startParse() {
      return this.parser.startParse(new qp(this.state.doc), this.fragments);
    }
    work(t, e) {
      return e != null && e >= this.state.doc.length && (e = void 0), this.tree != dt.empty && this.isDone(e ?? this.state.doc.length) ? (this.takeTree(), true) : this.withContext(() => {
        var i;
        if (typeof t == "number") {
          let s = Date.now() + t;
          t = () => Date.now() > s;
        }
        for (this.parse || (this.parse = this.startParse()), e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e); ; ) {
          let s = this.parse.advance();
          if (s)
            if (this.fragments = this.withoutTempSkipped(He.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (e ?? this.state.doc.length))
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
      }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(He.addTree(this.tree, this.fragments, true)), this.parse = null);
    }
    withContext(t) {
      let e = Ci;
      Ci = this;
      try {
        return t();
      } finally {
        Ci = e;
      }
    }
    withoutTempSkipped(t) {
      for (let e; e = this.tempSkipped.pop(); )
        t = ql(t, e.from, e.to);
      return t;
    }
    changes(t, e) {
      let { fragments: i, tree: s, treeLen: r, viewport: o, skipped: l } = this;
      if (this.takeTree(), !t.empty) {
        let a = [];
        if (t.iterChangedRanges((h, c, f, u) => a.push({
          fromA: h,
          toA: c,
          fromB: f,
          toB: u
        })), i = He.applyChanges(i, a), s = dt.empty, r = 0, o = {
          from: t.mapPos(o.from, -1),
          to: t.mapPos(o.to, 1)
        }, this.skipped.length) {
          l = [];
          for (let h of this.skipped) {
            let c = t.mapPos(h.from, 1), f = t.mapPos(h.to, -1);
            c < f && l.push({
              from: c,
              to: f
            });
          }
        }
      }
      return new ns(this.parser, e, i, s, r, o, l, this.scheduleOn);
    }
    updateViewport(t) {
      if (this.viewport.from == t.from && this.viewport.to == t.to)
        return false;
      this.viewport = t;
      let e = this.skipped.length;
      for (let i = 0; i < this.skipped.length; i++) {
        let { from: s, to: r } = this.skipped[i];
        s < t.to && r > t.from && (this.fragments = ql(this.fragments, s, r), this.skipped.splice(i--, 1));
      }
      return this.skipped.length >= e ? false : (this.reset(), true);
    }
    reset() {
      this.parse && (this.takeTree(), this.parse = null);
    }
    skipUntilInView(t, e) {
      this.skipped.push({
        from: t,
        to: e
      });
    }
    static getSkippingParser(t) {
      return new class extends Ep {
        createParse(e, i, s) {
          let r = s[0].from, o = s[s.length - 1].to;
          return {
            parsedPos: r,
            advance() {
              let a = Ci;
              if (a) {
                for (let h of s)
                  a.tempSkipped.push(h);
                t && (a.scheduleOn = a.scheduleOn ? Promise.all([
                  a.scheduleOn,
                  t
                ]) : t);
              }
              return this.parsedPos = o, new dt(Ht.none, [], [], o - r);
            },
            stoppedAt: null,
            stopAt() {
            }
          };
        }
      }();
    }
    isDone(t) {
      t = Math.min(t, this.state.doc.length);
      let e = this.fragments;
      return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
    }
    static get() {
      return Ci;
    }
  }
  function ql(n, t, e) {
    return He.applyChanges(n, [
      {
        fromA: t,
        toA: e,
        fromB: t,
        toB: e
      }
    ]);
  }
  class pi {
    constructor(t) {
      this.context = t, this.tree = t.tree;
    }
    apply(t) {
      if (!t.docChanged && this.tree == this.context.tree)
        return this;
      let e = this.context.changes(t.changes, t.state), i = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
      return e.work(20, i) || e.takeTree(), new pi(e);
    }
    static init(t) {
      let e = Math.min(3e3, t.doc.length), i = ns.create(t.facet(Te).parser, t, {
        from: 0,
        to: e
      });
      return i.work(20, e) || i.takeTree(), new pi(i);
    }
  }
  te.state = ct.define({
    create: pi.init,
    update(n, t) {
      for (let e of t.effects)
        if (e.is(te.setState))
          return e.value;
      return t.startState.facet(Te) != t.state.facet(Te) ? pi.init(t.state) : n.apply(t);
    }
  });
  let Qh = (n) => {
    let t = setTimeout(() => n(), 500);
    return () => clearTimeout(t);
  };
  typeof requestIdleCallback < "u" && (Qh = (n) => {
    let t = -1, e = setTimeout(() => {
      t = requestIdleCallback(n, {
        timeout: 500 - 100
      });
    }, 100);
    return () => t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
  });
  const Us = typeof navigator < "u" && (!((Ks = navigator.scheduling) === null || Ks === void 0) && Ks.isInputPending) ? () => navigator.scheduling.isInputPending() : null, $p = Q.fromClass(class {
    constructor(t) {
      this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
    }
    update(t) {
      let e = this.view.state.field(te.state).context;
      (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), (t.docChanged || t.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
    }
    scheduleWork() {
      if (this.working)
        return;
      let { state: t } = this.view, e = t.field(te.state);
      (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = Qh(this.work));
    }
    work(t) {
      this.working = null;
      let e = Date.now();
      if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
        return;
      let { state: i, viewport: { to: s } } = this.view, r = i.field(te.state);
      if (r.tree == r.context.tree && r.context.isDone(s + 1e5))
        return;
      let o = Date.now() + Math.min(this.chunkBudget, 100, t && !Us ? Math.max(25, t.timeRemaining() - 5) : 1e9), l = r.context.treeLen < s && i.doc.length > s + 1e3, a = r.context.work(() => Us && Us() || Date.now() > o, s + (l ? 0 : 1e5));
      this.chunkBudget -= Date.now() - e, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({
        effects: te.setState.of(new pi(r.context))
      })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
    }
    checkAsyncSchedule(t) {
      t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(() => this.scheduleWork()).catch((e) => Ct(this.view.state, e)).then(() => this.workScheduled--), t.scheduleOn = null);
    }
    destroy() {
      this.working && this.working();
    }
    isWorking() {
      return !!(this.working || this.workScheduled > 0);
    }
  }, {
    eventHandlers: {
      focus() {
        this.scheduleWork();
      }
    }
  }), Te = T.define({
    combine(n) {
      return n.length ? n[0] : null;
    },
    enables: (n) => [
      te.state,
      $p,
      D.contentAttributes.compute([
        n
      ], (t) => {
        let e = t.facet(n);
        return e && e.name ? {
          "data-language": e.name
        } : {};
      })
    ]
  }), jp = T.define(), ws = T.define({
    combine: (n) => {
      if (!n.length)
        return "  ";
      let t = n[0];
      if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0]))
        throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
      return t;
    }
  });
  function ss(n) {
    let t = n.facet(ws);
    return t.charCodeAt(0) == 9 ? n.tabSize * t.length : t.length;
  }
  function Ui(n, t) {
    let e = "", i = n.tabSize, s = n.facet(ws)[0];
    if (s == "	") {
      for (; t >= i; )
        e += "	", t -= i;
      s = " ";
    }
    for (let r = 0; r < t; r++)
      e += s;
    return e;
  }
  function bo(n, t) {
    n instanceof I && (n = new xs(n));
    for (let i of n.state.facet(jp)) {
      let s = i(n, t);
      if (s !== void 0)
        return s;
    }
    let e = pt(n.state);
    return e.length >= t ? Up(n, e, t) : null;
  }
  class xs {
    constructor(t, e = {}) {
      this.state = t, this.options = e, this.unit = ss(t);
    }
    lineAt(t, e = 1) {
      let i = this.state.doc.lineAt(t), { simulateBreak: s, simulateDoubleBreak: r } = this.options;
      return s != null && s >= i.from && s <= i.to ? r && s == t ? {
        text: "",
        from: t
      } : (e < 0 ? s < t : s <= t) ? {
        text: i.text.slice(s - i.from),
        from: s
      } : {
        text: i.text.slice(0, s - i.from),
        from: i.from
      } : i;
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
      return yi(t, this.state.tabSize, e);
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
  const Kp = new F();
  function Up(n, t, e) {
    let i = t.resolveStack(e), s = t.resolveInner(e, -1).resolve(e, 0).enterUnfinishedNodesBefore(e);
    if (s != i.node) {
      let r = [];
      for (let o = s; o && !(o.from < i.node.from || o.to > i.node.to || o.from == i.node.from && o.type == i.node.type); o = o.parent)
        r.push(o);
      for (let o = r.length - 1; o >= 0; o--)
        i = {
          node: r[o],
          next: i
        };
    }
    return Zh(i, n, e);
  }
  function Zh(n, t, e) {
    for (let i = n; i; i = i.next) {
      let s = Yp(i.node);
      if (s)
        return s(wo.create(t, e, i));
    }
    return 0;
  }
  function Gp(n) {
    return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
  }
  function Yp(n) {
    let t = n.type.prop(Kp);
    if (t)
      return t;
    let e = n.firstChild, i;
    if (e && (i = e.type.prop(F.closedBy))) {
      let s = n.lastChild, r = s && i.indexOf(s.name) > -1;
      return (o) => Zp(o, true, 1, void 0, r && !Gp(o) ? s.from : void 0);
    }
    return n.parent == null ? Jp : null;
  }
  function Jp() {
    return 0;
  }
  class wo extends xs {
    constructor(t, e, i) {
      super(t.state, t.options), this.base = t, this.pos = e, this.context = i;
    }
    get node() {
      return this.context.node;
    }
    static create(t, e, i) {
      return new wo(t, e, i);
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
        if (Xp(i, t))
          break;
        e = this.state.doc.lineAt(i.from);
      }
      return this.lineIndent(e.from);
    }
    continue() {
      return Zh(this.context.next, this.base, this.pos);
    }
  }
  function Xp(n, t) {
    for (let e = t; e; e = e.parent)
      if (n == e)
        return true;
    return false;
  }
  function Qp(n) {
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
        return {
          from: e.from,
          to: e.to + h
        };
      }
      l = a.to;
    }
  }
  function Zp(n, t, e, i, s) {
    let r = n.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || s == n.pos + o, a = t ? Qp(n) : null;
    return a ? l ? n.column(a.from) : n.column(a.to) : n.baseIndent + (l ? 0 : n.unit * e);
  }
  const tg = 200;
  function eg() {
    return I.transactionFilter.of((n) => {
      if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete"))
        return n;
      let t = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
      if (!t.length)
        return n;
      let e = n.newDoc, { head: i } = n.newSelection.main, s = e.lineAt(i);
      if (i > s.from + tg)
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
        let f = bo(o, c.from);
        if (f == null)
          continue;
        let u = /^\s*/.exec(c.text)[0], d = Ui(o, f);
        u != d && a.push({
          from: c.from,
          to: c.from + u.length,
          insert: d
        });
      }
      return a.length ? [
        n,
        {
          changes: a,
          sequential: true
        }
      ] : n;
    });
  }
  const ig = T.define(), ng = new F();
  function sg(n, t, e) {
    let i = pt(n);
    if (i.length < e)
      return null;
    let s = i.resolveStack(e, 1), r = null;
    for (let o = s; o; o = o.next) {
      let l = o.node;
      if (l.to <= e || l.from > e)
        continue;
      if (r && l.from < t)
        break;
      let a = l.type.prop(ng);
      if (a && (l.to < i.length - 50 || i.length == n.doc.length || !rg(l))) {
        let h = a(l, n);
        h && h.from <= e && h.from >= t && h.to > e && (r = h);
      }
    }
    return r;
  }
  function rg(n) {
    let t = n.lastChild;
    return t && t.to == n.to && t.type.isError;
  }
  function rs(n, t, e) {
    for (let i of n.facet(ig)) {
      let s = i(n, t, e);
      if (s)
        return s;
    }
    return sg(n, t, e);
  }
  function tc(n, t) {
    let e = t.mapPos(n.from, 1), i = t.mapPos(n.to, -1);
    return e >= i ? void 0 : {
      from: e,
      to: i
    };
  }
  const vs = L.define({
    map: tc
  }), rn = L.define({
    map: tc
  });
  function ec(n) {
    let t = [];
    for (let { head: e } of n.state.selection.ranges)
      t.some((i) => i.from <= e && i.to >= e) || t.push(n.lineBlockAt(e));
    return t;
  }
  const je = ct.define({
    create() {
      return E.none;
    },
    update(n, t) {
      n = n.map(t.changes);
      for (let e of t.effects)
        if (e.is(vs) && !og(n, e.value.from, e.value.to)) {
          let { preparePlaceholder: i } = t.state.facet(xo), s = i ? E.replace({
            widget: new dg(i(t.state, e.value))
          }) : $l;
          n = n.update({
            add: [
              s.range(e.value.from, e.value.to)
            ]
          });
        } else
          e.is(rn) && (n = n.update({
            filter: (i, s) => e.value.from != i || e.value.to != s,
            filterFrom: e.value.from,
            filterTo: e.value.to
          }));
      if (t.selection) {
        let e = false, { head: i } = t.selection.main;
        n.between(i, i, (s, r) => {
          s < i && r > i && (e = true);
        }), e && (n = n.update({
          filterFrom: i,
          filterTo: i,
          filter: (s, r) => r <= i || s >= i
        }));
      }
      return n;
    },
    provide: (n) => D.decorations.from(n),
    toJSON(n, t) {
      let e = [];
      return n.between(0, t.doc.length, (i, s) => {
        e.push(i, s);
      }), e;
    },
    fromJSON(n) {
      if (!Array.isArray(n) || n.length % 2)
        throw new RangeError("Invalid JSON for fold state");
      let t = [];
      for (let e = 0; e < n.length; ) {
        let i = n[e++], s = n[e++];
        if (typeof i != "number" || typeof s != "number")
          throw new RangeError("Invalid JSON for fold state");
        t.push($l.range(i, s));
      }
      return E.set(t, true);
    }
  });
  function os(n, t, e) {
    var i;
    let s = null;
    return (i = n.field(je, false)) === null || i === void 0 || i.between(t, e, (r, o) => {
      (!s || s.from > r) && (s = {
        from: r,
        to: o
      });
    }), s;
  }
  function og(n, t, e) {
    let i = false;
    return n.between(t, t, (s, r) => {
      s == t && r == e && (i = true);
    }), i;
  }
  function ic(n, t) {
    return n.field(je, false) ? t : t.concat(L.appendConfig.of(sc()));
  }
  const lg = (n) => {
    for (let t of ec(n)) {
      let e = rs(n.state, t.from, t.to);
      if (e)
        return n.dispatch({
          effects: ic(n.state, [
            vs.of(e),
            nc(n, e)
          ])
        }), true;
    }
    return false;
  }, ag = (n) => {
    if (!n.state.field(je, false))
      return false;
    let t = [];
    for (let e of ec(n)) {
      let i = os(n.state, e.from, e.to);
      i && t.push(rn.of(i), nc(n, i, false));
    }
    return t.length && n.dispatch({
      effects: t
    }), t.length > 0;
  };
  function nc(n, t, e = true) {
    let i = n.state.doc.lineAt(t.from).number, s = n.state.doc.lineAt(t.to).number;
    return D.announce.of(`${n.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${s}.`);
  }
  const hg = (n) => {
    let { state: t } = n, e = [];
    for (let i = 0; i < t.doc.length; ) {
      let s = n.lineBlockAt(i), r = rs(t, s.from, s.to);
      r && e.push(vs.of(r)), i = (r ? n.lineBlockAt(r.to) : s).to + 1;
    }
    return e.length && n.dispatch({
      effects: ic(n.state, e)
    }), !!e.length;
  }, cg = (n) => {
    let t = n.state.field(je, false);
    if (!t || !t.size)
      return false;
    let e = [];
    return t.between(0, n.state.doc.length, (i, s) => {
      e.push(rn.of({
        from: i,
        to: s
      }));
    }), n.dispatch({
      effects: e
    }), true;
  }, fg = [
    {
      key: "Ctrl-Shift-[",
      mac: "Cmd-Alt-[",
      run: lg
    },
    {
      key: "Ctrl-Shift-]",
      mac: "Cmd-Alt-]",
      run: ag
    },
    {
      key: "Ctrl-Alt-[",
      run: hg
    },
    {
      key: "Ctrl-Alt-]",
      run: cg
    }
  ], ug = {
    placeholderDOM: null,
    preparePlaceholder: null,
    placeholderText: "\u2026"
  }, xo = T.define({
    combine(n) {
      return re(n, ug);
    }
  });
  function sc(n) {
    let t = [
      je,
      mg
    ];
    return n && t.push(xo.of(n)), t;
  }
  function rc(n, t) {
    let { state: e } = n, i = e.facet(xo), s = (o) => {
      let l = n.lineBlockAt(n.posAtDOM(o.target)), a = os(n.state, l.from, l.to);
      a && n.dispatch({
        effects: rn.of(a)
      }), o.preventDefault();
    };
    if (i.placeholderDOM)
      return i.placeholderDOM(n, s, t);
    let r = document.createElement("span");
    return r.textContent = i.placeholderText, r.setAttribute("aria-label", e.phrase("folded code")), r.title = e.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = s, r;
  }
  const $l = E.replace({
    widget: new class extends ge {
      toDOM(n) {
        return rc(n, null);
      }
    }()
  });
  class dg extends ge {
    constructor(t) {
      super(), this.value = t;
    }
    eq(t) {
      return this.value == t.value;
    }
    toDOM(t) {
      return rc(t, this.value);
    }
  }
  const pg = {
    openText: "\u2304",
    closedText: "\u203A",
    markerDOM: null,
    domEventHandlers: {},
    foldingChanged: () => false
  };
  class Gs extends de {
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
  function gg(n = {}) {
    let t = {
      ...pg,
      ...n
    }, e = new Gs(t, true), i = new Gs(t, false), s = Q.fromClass(class {
      constructor(o) {
        this.from = o.viewport.from, this.markers = this.buildMarkers(o);
      }
      update(o) {
        (o.docChanged || o.viewportChanged || o.startState.facet(Te) != o.state.facet(Te) || o.startState.field(je, false) != o.state.field(je, false) || pt(o.startState) != pt(o.state) || t.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
      }
      buildMarkers(o) {
        let l = new fe();
        for (let a of o.viewportLineBlocks) {
          let h = os(o.state, a.from, a.to) ? i : rs(o.state, a.from, a.to) ? e : null;
          h && l.add(a.from, a.from, h);
        }
        return l.finish();
      }
    }), { domEventHandlers: r } = t;
    return [
      s,
      dp({
        class: "cm-foldGutter",
        markers(o) {
          var l;
          return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || H.empty;
        },
        initialSpacer() {
          return new Gs(t, false);
        },
        domEventHandlers: {
          ...r,
          click: (o, l, a) => {
            if (r.click && r.click(o, l, a))
              return true;
            let h = os(o.state, l.from, l.to);
            if (h)
              return o.dispatch({
                effects: rn.of(h)
              }), true;
            let c = rs(o.state, l.from, l.to);
            return c ? (o.dispatch({
              effects: vs.of(c)
            }), true) : false;
          }
        }
      }),
      sc()
    ];
  }
  const mg = D.baseTheme({
    ".cm-foldPlaceholder": {
      backgroundColor: "#eee",
      border: "1px solid #ddd",
      color: "#888",
      borderRadius: ".2em",
      margin: "0 1px",
      padding: "0 1px",
      cursor: "pointer"
    },
    ".cm-foldGutter span": {
      padding: "0 1px",
      cursor: "pointer"
    }
  });
  class ks {
    constructor(t, e) {
      this.specs = t;
      let i;
      function s(l) {
        let a = Ae.newName();
        return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
      }
      const r = typeof e.all == "string" ? e.all : e.all ? s(e.all) : void 0, o = e.scope;
      this.scope = o instanceof te ? (l) => l.prop(Bi) == o.data : o ? (l) => l == o : void 0, this.style = Xh(t.map((l) => ({
        tag: l.tag,
        class: l.class || s(Object.assign({}, l, {
          tag: null
        }))
      })), {
        all: r
      }).style, this.module = i ? new Ae(i) : null, this.themeType = e.themeType;
    }
    static define(t, e) {
      return new ks(t, e || {});
    }
  }
  const qr = T.define(), oc = T.define({
    combine(n) {
      return n.length ? [
        n[0]
      ] : null;
    }
  });
  function Ys(n) {
    let t = n.facet(qr);
    return t.length ? t : n.facet(oc);
  }
  function yg(n, t) {
    let e = [
      wg
    ], i;
    return n instanceof ks && (n.module && e.push(D.styleModule.of(n.module)), i = n.themeType), (t == null ? void 0 : t.fallback) ? e.push(oc.of(n)) : i ? e.push(qr.computeN([
      D.darkTheme
    ], (s) => s.facet(D.darkTheme) == (i == "dark") ? [
      n
    ] : [])) : e.push(qr.of(n)), e;
  }
  class bg {
    constructor(t) {
      this.markCache = /* @__PURE__ */ Object.create(null), this.tree = pt(t.state), this.decorations = this.buildDeco(t, Ys(t.state)), this.decoratedTo = t.viewport.to;
    }
    update(t) {
      let e = pt(t.state), i = Ys(t.state), s = i != Ys(t.startState), { viewport: r } = t.view, o = t.changes.mapPos(this.decoratedTo, 1);
      e.length < r.to && !s && e.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(t.changes), this.decoratedTo = o) : (e != this.tree || t.viewportChanged || s) && (this.tree = e, this.decorations = this.buildDeco(t.view, i), this.decoratedTo = r.to);
    }
    buildDeco(t, e) {
      if (!e || !this.tree.length)
        return E.none;
      let i = new fe();
      for (let { from: s, to: r } of t.visibleRanges)
        Hp(this.tree, e, (o, l, a) => {
          i.add(o, l, this.markCache[a] || (this.markCache[a] = E.mark({
            class: a
          })));
        }, s, r);
      return i.finish();
    }
  }
  const wg = Ke.high(Q.fromClass(bg, {
    decorations: (n) => n.decorations
  })), xg = ks.define([
    {
      tag: M.meta,
      color: "#404740"
    },
    {
      tag: M.link,
      textDecoration: "underline"
    },
    {
      tag: M.heading,
      textDecoration: "underline",
      fontWeight: "bold"
    },
    {
      tag: M.emphasis,
      fontStyle: "italic"
    },
    {
      tag: M.strong,
      fontWeight: "bold"
    },
    {
      tag: M.strikethrough,
      textDecoration: "line-through"
    },
    {
      tag: M.keyword,
      color: "#708"
    },
    {
      tag: [
        M.atom,
        M.bool,
        M.url,
        M.contentSeparator,
        M.labelName
      ],
      color: "#219"
    },
    {
      tag: [
        M.literal,
        M.inserted
      ],
      color: "#164"
    },
    {
      tag: [
        M.string,
        M.deleted
      ],
      color: "#a11"
    },
    {
      tag: [
        M.regexp,
        M.escape,
        M.special(M.string)
      ],
      color: "#e40"
    },
    {
      tag: M.definition(M.variableName),
      color: "#00f"
    },
    {
      tag: M.local(M.variableName),
      color: "#30a"
    },
    {
      tag: [
        M.typeName,
        M.namespace
      ],
      color: "#085"
    },
    {
      tag: M.className,
      color: "#167"
    },
    {
      tag: [
        M.special(M.variableName),
        M.macroName
      ],
      color: "#256"
    },
    {
      tag: M.definition(M.propertyName),
      color: "#00c"
    },
    {
      tag: M.comment,
      color: "#940"
    },
    {
      tag: M.invalid,
      color: "#f00"
    }
  ]), vg = D.baseTheme({
    "&.cm-focused .cm-matchingBracket": {
      backgroundColor: "#328c8252"
    },
    "&.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: "#bb555544"
    }
  }), lc = 1e4, ac = "()[]{}", hc = T.define({
    combine(n) {
      return re(n, {
        afterCursor: true,
        brackets: ac,
        maxScanDistance: lc,
        renderMatch: Cg
      });
    }
  }), kg = E.mark({
    class: "cm-matchingBracket"
  }), Sg = E.mark({
    class: "cm-nonmatchingBracket"
  });
  function Cg(n) {
    let t = [], e = n.matched ? kg : Sg;
    return t.push(e.range(n.start.from, n.start.to)), n.end && t.push(e.range(n.end.from, n.end.to)), t;
  }
  const Ag = ct.define({
    create() {
      return E.none;
    },
    update(n, t) {
      if (!t.docChanged && !t.selection)
        return n;
      let e = [], i = t.state.facet(hc);
      for (let s of t.state.selection.ranges) {
        if (!s.empty)
          continue;
        let r = ee(t.state, s.head, -1, i) || s.head > 0 && ee(t.state, s.head - 1, 1, i) || i.afterCursor && (ee(t.state, s.head, 1, i) || s.head < t.state.doc.length && ee(t.state, s.head + 1, -1, i));
        r && (e = e.concat(i.renderMatch(r, t.state)));
      }
      return E.set(e, true);
    },
    provide: (n) => D.decorations.from(n)
  }), Mg = [
    Ag,
    vg
  ];
  function Dg(n = {}) {
    return [
      hc.of(n),
      Mg
    ];
  }
  const Og = new F();
  function $r(n, t, e) {
    let i = n.prop(t < 0 ? F.openedBy : F.closedBy);
    if (i)
      return i;
    if (n.name.length == 1) {
      let s = e.indexOf(n.name);
      if (s > -1 && s % 2 == (t < 0 ? 1 : 0))
        return [
          e[s + t]
        ];
    }
    return null;
  }
  function jr(n) {
    let t = n.type.prop(Og);
    return t ? t(n.node) : n;
  }
  function ee(n, t, e, i = {}) {
    let s = i.maxScanDistance || lc, r = i.brackets || ac, o = pt(n), l = o.resolveInner(t, e);
    for (let a = l; a; a = a.parent) {
      let h = $r(a.type, e, r);
      if (h && a.from < a.to) {
        let c = jr(a);
        if (c && (e > 0 ? t >= c.from && t < c.to : t > c.from && t <= c.to))
          return Tg(n, t, e, a, c, h, r);
      }
    }
    return Bg(n, t, e, o, l.type, s, r);
  }
  function Tg(n, t, e, i, s, r, o) {
    let l = i.parent, a = {
      from: s.from,
      to: s.to
    }, h = 0, c = l == null ? void 0 : l.cursor();
    if (c && (e < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
      do
        if (e < 0 ? c.to <= i.from : c.from >= i.to) {
          if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
            let f = jr(c);
            return {
              start: a,
              end: f ? {
                from: f.from,
                to: f.to
              } : void 0,
              matched: true
            };
          } else if ($r(c.type, e, o))
            h++;
          else if ($r(c.type, -e, o)) {
            if (h == 0) {
              let f = jr(c);
              return {
                start: a,
                end: f && f.from < f.to ? {
                  from: f.from,
                  to: f.to
                } : void 0,
                matched: false
              };
            }
            h--;
          }
        }
      while (e < 0 ? c.prevSibling() : c.nextSibling());
    return {
      start: a,
      matched: false
    };
  }
  function Bg(n, t, e, i, s, r, o) {
    let l = e < 0 ? n.sliceDoc(t - 1, t) : n.sliceDoc(t, t + 1), a = o.indexOf(l);
    if (a < 0 || a % 2 == 0 != e > 0)
      return null;
    let h = {
      from: e < 0 ? t - 1 : t,
      to: e > 0 ? t + 1 : t
    }, c = n.doc.iterRange(t, e > 0 ? n.doc.length : 0), f = 0;
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
              return {
                start: h,
                end: {
                  from: p + g,
                  to: p + g + 1
                },
                matched: y >> 1 == a >> 1
              };
            f--;
          }
      }
      e > 0 && (u += d.length);
    }
    return c.done ? {
      start: h,
      matched: false
    } : null;
  }
  const Eg = /* @__PURE__ */ Object.create(null), jl = [
    Ht.none
  ], Kl = [], Ul = /* @__PURE__ */ Object.create(null), Rg = /* @__PURE__ */ Object.create(null);
  for (let [n, t] of [
    [
      "variable",
      "variableName"
    ],
    [
      "variable-2",
      "variableName.special"
    ],
    [
      "string-2",
      "string.special"
    ],
    [
      "def",
      "variableName.definition"
    ],
    [
      "tag",
      "tagName"
    ],
    [
      "attribute",
      "attributeName"
    ],
    [
      "type",
      "typeName"
    ],
    [
      "builtin",
      "variableName.standard"
    ],
    [
      "qualifier",
      "modifier"
    ],
    [
      "error",
      "invalid"
    ],
    [
      "header",
      "heading"
    ],
    [
      "property",
      "propertyName"
    ]
  ])
    Rg[n] = Lg(Eg, t);
  function Js(n, t) {
    Kl.indexOf(n) > -1 || (Kl.push(n), console.warn(t));
  }
  function Lg(n, t) {
    let e = [];
    for (let l of t.split(" ")) {
      let a = [];
      for (let h of l.split(".")) {
        let c = n[h] || M[h];
        c ? typeof c == "function" ? a.length ? a = a.map(c) : Js(h, `Modifier ${h} used at start of tag`) : a.length ? Js(h, `Tag ${h} used as modifier`) : a = Array.isArray(c) ? c : [
          c
        ] : Js(h, `Unknown highlighting tag ${h}`);
      }
      for (let h of a)
        e.push(h);
    }
    if (!e.length)
      return 0;
    let i = t.replace(/ /g, "_"), s = i + " " + e.map((l) => l.id), r = Ul[s];
    if (r)
      return r.id;
    let o = Ul[s] = Ht.define({
      id: jl.length,
      name: i,
      props: [
        Np({
          [i]: e
        })
      ]
    });
    return jl.push(o), o.id;
  }
  Y.RTL, Y.LTR;
  const Pg = (n) => {
    let { state: t } = n, e = t.doc.lineAt(t.selection.main.from), i = ko(n.state, e.from);
    return i.line ? _g(n) : i.block ? Ng(n) : false;
  };
  function vo(n, t) {
    return ({ state: e, dispatch: i }) => {
      if (e.readOnly)
        return false;
      let s = n(t, e);
      return s ? (i(e.update(s)), true) : false;
    };
  }
  const _g = vo(Wg, 0), Ig = vo(cc, 0), Ng = vo((n, t) => cc(n, t, Hg(t)), 0);
  function ko(n, t) {
    let e = n.languageDataAt("commentTokens", t, 1);
    return e.length ? e[0] : {};
  }
  const Ai = 50;
  function Fg(n, { open: t, close: e }, i, s) {
    let r = n.sliceDoc(i - Ai, i), o = n.sliceDoc(s, s + Ai), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, h = r.length - l;
    if (r.slice(h - t.length, h) == t && o.slice(a, a + e.length) == e)
      return {
        open: {
          pos: i - l,
          margin: l && 1
        },
        close: {
          pos: s + a,
          margin: a && 1
        }
      };
    let c, f;
    s - i <= 2 * Ai ? c = f = n.sliceDoc(i, s) : (c = n.sliceDoc(i, i + Ai), f = n.sliceDoc(s - Ai, s));
    let u = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(f)[0].length, p = f.length - d - e.length;
    return c.slice(u, u + t.length) == t && f.slice(p, p + e.length) == e ? {
      open: {
        pos: i + u + t.length,
        margin: /\s/.test(c.charAt(u + t.length)) ? 1 : 0
      },
      close: {
        pos: s - d - e.length,
        margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0
      }
    } : null;
  }
  function Hg(n) {
    let t = [];
    for (let e of n.selection.ranges) {
      let i = n.doc.lineAt(e.from), s = e.to <= i.to ? i : n.doc.lineAt(e.to);
      s.from > i.from && s.from == e.to && (s = e.to == i.to + 1 ? i : n.doc.lineAt(e.to - 1));
      let r = t.length - 1;
      r >= 0 && t[r].to > i.from ? t[r].to = s.to : t.push({
        from: i.from + /^\s*/.exec(i.text)[0].length,
        to: s.to
      });
    }
    return t;
  }
  function cc(n, t, e = t.selection.ranges) {
    let i = e.map((r) => ko(t, r.from).block);
    if (!i.every((r) => r))
      return null;
    let s = e.map((r, o) => Fg(t, i[o], r.from, r.to));
    if (n != 2 && !s.every((r) => r))
      return {
        changes: t.changes(e.map((r, o) => s[o] ? [] : [
          {
            from: r.from,
            insert: i[o].open + " "
          },
          {
            from: r.to,
            insert: " " + i[o].close
          }
        ]))
      };
    if (n != 1 && s.some((r) => r)) {
      let r = [];
      for (let o = 0, l; o < s.length; o++)
        if (l = s[o]) {
          let a = i[o], { open: h, close: c } = l;
          r.push({
            from: h.pos - a.open.length,
            to: h.pos + h.margin
          }, {
            from: c.pos - c.margin,
            to: c.pos + a.close.length
          });
        }
      return {
        changes: r
      };
    }
    return null;
  }
  function Wg(n, t, e = t.selection.ranges) {
    let i = [], s = -1;
    for (let { from: r, to: o } of e) {
      let l = i.length, a = 1e9, h = ko(t, r).line;
      if (h) {
        for (let c = r; c <= o; ) {
          let f = t.doc.lineAt(c);
          if (f.from > s && (r == o || o > f.from)) {
            s = f.from;
            let u = /^\s*/.exec(f.text)[0].length, d = u == f.length, p = f.text.slice(u, u + h.length) == h ? u : -1;
            u < f.text.length && u < a && (a = u), i.push({
              line: f,
              comment: p,
              token: h,
              indent: u,
              empty: d,
              single: false
            });
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
        (f || !c) && r.push({
          from: l.from + h,
          insert: a + " "
        });
      let o = t.changes(r);
      return {
        changes: o,
        selection: t.selection.map(o, 1)
      };
    } else if (n != 1 && i.some((r) => r.comment >= 0)) {
      let r = [];
      for (let { line: o, comment: l, token: a } of i)
        if (l >= 0) {
          let h = o.from + l, c = h + a.length;
          o.text[c - o.from] == " " && c++, r.push({
            from: h,
            to: c
          });
        }
      return {
        changes: r
      };
    }
    return null;
  }
  const Kr = pe.define(), Vg = pe.define(), zg = T.define(), fc = T.define({
    combine(n) {
      return re(n, {
        minDepth: 100,
        newGroupDelay: 500,
        joinToEvent: (t, e) => e
      }, {
        minDepth: Math.max,
        newGroupDelay: Math.min,
        joinToEvent: (t, e) => (i, s) => t(i, s) || e(i, s)
      });
    }
  }), uc = ct.define({
    create() {
      return ie.empty;
    },
    update(n, t) {
      let e = t.state.facet(fc), i = t.annotation(Kr);
      if (i) {
        let a = At.fromTransaction(t, i.selection), h = i.side, c = h == 0 ? n.undone : n.done;
        return a ? c = ls(c, c.length, e.minDepth, a) : c = gc(c, t.startState.selection), new ie(h == 0 ? i.rest : c, h == 0 ? c : i.rest);
      }
      let s = t.annotation(Vg);
      if ((s == "full" || s == "before") && (n = n.isolate()), t.annotation(it.addToHistory) === false)
        return t.changes.empty ? n : n.addMapping(t.changes.desc);
      let r = At.fromTransaction(t), o = t.annotation(it.time), l = t.annotation(it.userEvent);
      return r ? n = n.addChanges(r, o, l, e, t) : t.selection && (n = n.addSelection(t.startState.selection, o, l, e.newGroupDelay)), (s == "full" || s == "after") && (n = n.isolate()), n;
    },
    toJSON(n) {
      return {
        done: n.done.map((t) => t.toJSON()),
        undone: n.undone.map((t) => t.toJSON())
      };
    },
    fromJSON(n) {
      return new ie(n.done.map(At.fromJSON), n.undone.map(At.fromJSON));
    }
  });
  function qg(n = {}) {
    return [
      uc,
      fc.of(n),
      D.domEventHandlers({
        beforeinput(t, e) {
          let i = t.inputType == "historyUndo" ? dc : t.inputType == "historyRedo" ? Ur : null;
          return i ? (t.preventDefault(), i(e)) : false;
        }
      })
    ];
  }
  function Ss(n, t) {
    return function({ state: e, dispatch: i }) {
      if (!t && e.readOnly)
        return false;
      let s = e.field(uc, false);
      if (!s)
        return false;
      let r = s.pop(n, e, t);
      return r ? (i(r), true) : false;
    };
  }
  const dc = Ss(0, false), Ur = Ss(1, false), $g = Ss(0, true), jg = Ss(1, true);
  class At {
    constructor(t, e, i, s, r) {
      this.changes = t, this.effects = e, this.mapped = i, this.startSelection = s, this.selectionsAfter = r;
    }
    setSelAfter(t) {
      return new At(this.changes, this.effects, this.mapped, this.startSelection, t);
    }
    toJSON() {
      var t, e, i;
      return {
        changes: (t = this.changes) === null || t === void 0 ? void 0 : t.toJSON(),
        mapped: (e = this.mapped) === null || e === void 0 ? void 0 : e.toJSON(),
        startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
        selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
      };
    }
    static fromJSON(t) {
      return new At(t.changes && et.fromJSON(t.changes), [], t.mapped && ne.fromJSON(t.mapped), t.startSelection && b.fromJSON(t.startSelection), t.selectionsAfter.map(b.fromJSON));
    }
    static fromTransaction(t, e) {
      let i = Pt;
      for (let s of t.startState.facet(zg)) {
        let r = s(t);
        r.length && (i = i.concat(r));
      }
      return !i.length && t.changes.empty ? null : new At(t.changes.invert(t.startState.doc), i, void 0, e || t.startState.selection, Pt);
    }
    static selection(t) {
      return new At(void 0, Pt, void 0, void 0, t);
    }
  }
  function ls(n, t, e, i) {
    let s = t + 1 > e + 20 ? t - e - 1 : 0, r = n.slice(s, t);
    return r.push(i), r;
  }
  function Kg(n, t) {
    let e = [], i = false;
    return n.iterChangedRanges((s, r) => e.push(s, r)), t.iterChangedRanges((s, r, o, l) => {
      for (let a = 0; a < e.length; ) {
        let h = e[a++], c = e[a++];
        l >= h && o <= c && (i = true);
      }
    }), i;
  }
  function Ug(n, t) {
    return n.ranges.length == t.ranges.length && n.ranges.filter((e, i) => e.empty != t.ranges[i].empty).length === 0;
  }
  function pc(n, t) {
    return n.length ? t.length ? n.concat(t) : n : t;
  }
  const Pt = [], Gg = 200;
  function gc(n, t) {
    if (n.length) {
      let e = n[n.length - 1], i = e.selectionsAfter.slice(Math.max(0, e.selectionsAfter.length - Gg));
      return i.length && i[i.length - 1].eq(t) ? n : (i.push(t), ls(n, n.length - 1, 1e9, e.setSelAfter(i)));
    } else
      return [
        At.selection([
          t
        ])
      ];
  }
  function Yg(n) {
    let t = n[n.length - 1], e = n.slice();
    return e[n.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), e;
  }
  function Xs(n, t) {
    if (!n.length)
      return n;
    let e = n.length, i = Pt;
    for (; e; ) {
      let s = Jg(n[e - 1], t, i);
      if (s.changes && !s.changes.empty || s.effects.length) {
        let r = n.slice(0, e);
        return r[e - 1] = s, r;
      } else
        t = s.mapped, e--, i = s.selectionsAfter;
    }
    return i.length ? [
      At.selection(i)
    ] : Pt;
  }
  function Jg(n, t, e) {
    let i = pc(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(t)) : Pt, e);
    if (!n.changes)
      return At.selection(i);
    let s = n.changes.map(t), r = t.mapDesc(n.changes, true), o = n.mapped ? n.mapped.composeDesc(r) : r;
    return new At(s, L.mapEffects(n.effects, t), o, n.startSelection.map(r), i);
  }
  const Xg = /^(input\.type|delete)($|\.)/;
  class ie {
    constructor(t, e, i = 0, s = void 0) {
      this.done = t, this.undone = e, this.prevTime = i, this.prevUserEvent = s;
    }
    isolate() {
      return this.prevTime ? new ie(this.done, this.undone) : this;
    }
    addChanges(t, e, i, s, r) {
      let o = this.done, l = o[o.length - 1];
      return l && l.changes && !l.changes.empty && t.changes && (!i || Xg.test(i)) && (!l.selectionsAfter.length && e - this.prevTime < s.newGroupDelay && s.joinToEvent(r, Kg(l.changes, t.changes)) || i == "input.type.compose") ? o = ls(o, o.length - 1, s.minDepth, new At(t.changes.compose(l.changes), pc(L.mapEffects(t.effects, l.changes), l.effects), l.mapped, l.startSelection, Pt)) : o = ls(o, o.length, s.minDepth, t), new ie(o, Pt, e, i);
    }
    addSelection(t, e, i, s) {
      let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Pt;
      return r.length > 0 && e - this.prevTime < s && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && Ug(r[r.length - 1], t) ? this : new ie(gc(this.done, t), this.undone, e, i);
    }
    addMapping(t) {
      return new ie(Xs(this.done, t), Xs(this.undone, t), this.prevTime, this.prevUserEvent);
    }
    pop(t, e, i) {
      let s = t == 0 ? this.done : this.undone;
      if (s.length == 0)
        return null;
      let r = s[s.length - 1], o = r.selectionsAfter[0] || e.selection;
      if (i && r.selectionsAfter.length)
        return e.update({
          selection: r.selectionsAfter[r.selectionsAfter.length - 1],
          annotations: Kr.of({
            side: t,
            rest: Yg(s),
            selection: o
          }),
          userEvent: t == 0 ? "select.undo" : "select.redo",
          scrollIntoView: true
        });
      if (r.changes) {
        let l = s.length == 1 ? Pt : s.slice(0, s.length - 1);
        return r.mapped && (l = Xs(l, r.mapped)), e.update({
          changes: r.changes,
          selection: r.startSelection,
          effects: r.effects,
          annotations: Kr.of({
            side: t,
            rest: l,
            selection: o
          }),
          filter: false,
          userEvent: t == 0 ? "undo" : "redo",
          scrollIntoView: true
        });
      } else
        return null;
    }
  }
  ie.empty = new ie(Pt, Pt);
  const Qg = [
    {
      key: "Mod-z",
      run: dc,
      preventDefault: true
    },
    {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: Ur,
      preventDefault: true
    },
    {
      linux: "Ctrl-Shift-z",
      run: Ur,
      preventDefault: true
    },
    {
      key: "Mod-u",
      run: $g,
      preventDefault: true
    },
    {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: jg,
      preventDefault: true
    }
  ];
  function bi(n, t) {
    return b.create(n.ranges.map(t), n.mainIndex);
  }
  function oe(n, t) {
    return n.update({
      selection: t,
      scrollIntoView: true,
      userEvent: "select"
    });
  }
  function qt({ state: n, dispatch: t }, e) {
    let i = bi(n.selection, e);
    return i.eq(n.selection, true) ? false : (t(oe(n, i)), true);
  }
  function Cs(n, t) {
    return b.cursor(t ? n.to : n.from);
  }
  function mc(n, t) {
    return qt(n, (e) => e.empty ? n.moveByChar(e, t) : Cs(e, t));
  }
  function gt(n) {
    return n.textDirectionAt(n.state.selection.main.head) == Y.LTR;
  }
  const yc = (n) => mc(n, !gt(n)), bc = (n) => mc(n, gt(n));
  function wc(n, t) {
    return qt(n, (e) => e.empty ? n.moveByGroup(e, t) : Cs(e, t));
  }
  const Zg = (n) => wc(n, !gt(n)), tm = (n) => wc(n, gt(n));
  function em(n, t, e) {
    if (t.type.prop(e))
      return true;
    let i = t.to - t.from;
    return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(t.from, t.to))) || t.firstChild;
  }
  function As(n, t, e) {
    let i = pt(n).resolveInner(t.head), s = e ? F.closedBy : F.openedBy;
    for (let a = t.head; ; ) {
      let h = e ? i.childAfter(a) : i.childBefore(a);
      if (!h)
        break;
      em(n, h, s) ? i = h : a = e ? h.to : h.from;
    }
    let r = i.type.prop(s), o, l;
    return r && (o = e ? ee(n, i.from, 1) : ee(n, i.to, -1)) && o.matched ? l = e ? o.end.to : o.end.from : l = e ? i.to : i.from, b.cursor(l, e ? -1 : 1);
  }
  const im = (n) => qt(n, (t) => As(n.state, t, !gt(n))), nm = (n) => qt(n, (t) => As(n.state, t, gt(n)));
  function xc(n, t) {
    return qt(n, (e) => {
      if (!e.empty)
        return Cs(e, t);
      let i = n.moveVertically(e, t);
      return i.head != e.head ? i : n.moveToLineBoundary(e, t);
    });
  }
  const vc = (n) => xc(n, false), kc = (n) => xc(n, true);
  function Sc(n) {
    let t = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2, e = 0, i = 0, s;
    if (t) {
      for (let r of n.state.facet(D.scrollMargins)) {
        let o = r(n);
        (o == null ? void 0 : o.top) && (e = Math.max(o == null ? void 0 : o.top, e)), (o == null ? void 0 : o.bottom) && (i = Math.max(o == null ? void 0 : o.bottom, i));
      }
      s = n.scrollDOM.clientHeight - e - i;
    } else
      s = (n.dom.ownerDocument.defaultView || window).innerHeight;
    return {
      marginTop: e,
      marginBottom: i,
      selfScroll: t,
      height: Math.max(n.defaultLineHeight, s - 5)
    };
  }
  function Cc(n, t) {
    let e = Sc(n), { state: i } = n, s = bi(i.selection, (o) => o.empty ? n.moveVertically(o, t, e.height) : Cs(o, t));
    if (s.eq(i.selection))
      return false;
    let r;
    if (e.selfScroll) {
      let o = n.coordsAtPos(i.selection.main.head), l = n.scrollDOM.getBoundingClientRect(), a = l.top + e.marginTop, h = l.bottom - e.marginBottom;
      o && o.top > a && o.bottom < h && (r = D.scrollIntoView(s.main.head, {
        y: "start",
        yMargin: o.top - a
      }));
    }
    return n.dispatch(oe(i, s), {
      effects: r
    }), true;
  }
  const Gl = (n) => Cc(n, false), Gr = (n) => Cc(n, true);
  function Be(n, t, e) {
    let i = n.lineBlockAt(t.head), s = n.moveToLineBoundary(t, e);
    if (s.head == t.head && s.head != (e ? i.to : i.from) && (s = n.moveToLineBoundary(t, e, false)), !e && s.head == i.from && i.length) {
      let r = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
      r && t.head != i.from + r && (s = b.cursor(i.from + r));
    }
    return s;
  }
  const sm = (n) => qt(n, (t) => Be(n, t, true)), rm = (n) => qt(n, (t) => Be(n, t, false)), om = (n) => qt(n, (t) => Be(n, t, !gt(n))), lm = (n) => qt(n, (t) => Be(n, t, gt(n))), am = (n) => qt(n, (t) => b.cursor(n.lineBlockAt(t.head).from, 1)), hm = (n) => qt(n, (t) => b.cursor(n.lineBlockAt(t.head).to, -1));
  function cm(n, t, e) {
    let i = false, s = bi(n.selection, (r) => {
      let o = ee(n, r.head, -1) || ee(n, r.head, 1) || r.head > 0 && ee(n, r.head - 1, 1) || r.head < n.doc.length && ee(n, r.head + 1, -1);
      if (!o || !o.end)
        return r;
      i = true;
      let l = o.start.from == r.head ? o.end.to : o.end.from;
      return e ? b.range(r.anchor, l) : b.cursor(l);
    });
    return i ? (t(oe(n, s)), true) : false;
  }
  const fm = ({ state: n, dispatch: t }) => cm(n, t, false);
  function Wt(n, t) {
    let e = bi(n.state.selection, (i) => {
      let s = t(i);
      return b.range(i.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
    });
    return e.eq(n.state.selection) ? false : (n.dispatch(oe(n.state, e)), true);
  }
  function Ac(n, t) {
    return Wt(n, (e) => n.moveByChar(e, t));
  }
  const Mc = (n) => Ac(n, !gt(n)), Dc = (n) => Ac(n, gt(n));
  function Oc(n, t) {
    return Wt(n, (e) => n.moveByGroup(e, t));
  }
  const um = (n) => Oc(n, !gt(n)), dm = (n) => Oc(n, gt(n)), pm = (n) => Wt(n, (t) => As(n.state, t, !gt(n))), gm = (n) => Wt(n, (t) => As(n.state, t, gt(n)));
  function Tc(n, t) {
    return Wt(n, (e) => n.moveVertically(e, t));
  }
  const Bc = (n) => Tc(n, false), Ec = (n) => Tc(n, true);
  function Rc(n, t) {
    return Wt(n, (e) => n.moveVertically(e, t, Sc(n).height));
  }
  const Yl = (n) => Rc(n, false), Jl = (n) => Rc(n, true), mm = (n) => Wt(n, (t) => Be(n, t, true)), ym = (n) => Wt(n, (t) => Be(n, t, false)), bm = (n) => Wt(n, (t) => Be(n, t, !gt(n))), wm = (n) => Wt(n, (t) => Be(n, t, gt(n))), xm = (n) => Wt(n, (t) => b.cursor(n.lineBlockAt(t.head).from)), vm = (n) => Wt(n, (t) => b.cursor(n.lineBlockAt(t.head).to)), Xl = ({ state: n, dispatch: t }) => (t(oe(n, {
    anchor: 0
  })), true), Ql = ({ state: n, dispatch: t }) => (t(oe(n, {
    anchor: n.doc.length
  })), true), Zl = ({ state: n, dispatch: t }) => (t(oe(n, {
    anchor: n.selection.main.anchor,
    head: 0
  })), true), ta = ({ state: n, dispatch: t }) => (t(oe(n, {
    anchor: n.selection.main.anchor,
    head: n.doc.length
  })), true), km = ({ state: n, dispatch: t }) => (t(n.update({
    selection: {
      anchor: 0,
      head: n.doc.length
    },
    userEvent: "select"
  })), true), Sm = ({ state: n, dispatch: t }) => {
    let e = Ms(n).map(({ from: i, to: s }) => b.range(i, Math.min(s + 1, n.doc.length)));
    return t(n.update({
      selection: b.create(e),
      userEvent: "select"
    })), true;
  }, Cm = ({ state: n, dispatch: t }) => {
    let e = bi(n.selection, (i) => {
      let s = pt(n), r = s.resolveStack(i.from, 1);
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
    return e.eq(n.selection) ? false : (t(oe(n, e)), true);
  }, Am = ({ state: n, dispatch: t }) => {
    let e = n.selection, i = null;
    return e.ranges.length > 1 ? i = b.create([
      e.main
    ]) : e.main.empty || (i = b.create([
      b.cursor(e.main.head)
    ])), i ? (t(oe(n, i)), true) : false;
  };
  function on(n, t) {
    if (n.state.readOnly)
      return false;
    let e = "delete.selection", { state: i } = n, s = i.changeByRange((r) => {
      let { from: o, to: l } = r;
      if (o == l) {
        let a = t(r);
        a < o ? (e = "delete.backward", a = Dn(n, a, false)) : a > o && (e = "delete.forward", a = Dn(n, a, true)), o = Math.min(o, a), l = Math.max(l, a);
      } else
        o = Dn(n, o, false), l = Dn(n, l, true);
      return o == l ? {
        range: r
      } : {
        changes: {
          from: o,
          to: l
        },
        range: b.cursor(o, o < r.head ? -1 : 1)
      };
    });
    return s.changes.empty ? false : (n.dispatch(i.update(s, {
      scrollIntoView: true,
      userEvent: e,
      effects: e == "delete.selection" ? D.announce.of(i.phrase("Selection deleted")) : void 0
    })), true);
  }
  function Dn(n, t, e) {
    if (n instanceof D)
      for (let i of n.state.facet(D.atomicRanges).map((s) => s(n)))
        i.between(t, t, (s, r) => {
          s < t && r > t && (t = e ? r : s);
        });
    return t;
  }
  const Lc = (n, t, e) => on(n, (i) => {
    let s = i.from, { state: r } = n, o = r.doc.lineAt(s), l, a;
    if (e && !t && s > o.from && s < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, s - o.from))) {
      if (l[l.length - 1] == "	")
        return s - 1;
      let h = yi(l, r.tabSize), c = h % ss(r) || ss(r);
      for (let f = 0; f < c && l[l.length - 1 - f] == " "; f++)
        s--;
      a = s;
    } else
      a = ht(o.text, s - o.from, t, t) + o.from, a == s && o.number != (t ? r.doc.lines : 1) ? a += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, s - o.from)) && (a = ht(o.text, a - o.from, false, false) + o.from);
    return a;
  }), Yr = (n) => Lc(n, false, true), Pc = (n) => Lc(n, true, false), _c = (n, t) => on(n, (e) => {
    let i = e.head, { state: s } = n, r = s.doc.lineAt(i), o = s.charCategorizer(i);
    for (let l = null; ; ) {
      if (i == (t ? r.to : r.from)) {
        i == e.head && r.number != (t ? s.doc.lines : 1) && (i += t ? 1 : -1);
        break;
      }
      let a = ht(r.text, i - r.from, t) + r.from, h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from), c = o(h);
      if (l != null && c != l)
        break;
      (h != " " || i != e.head) && (l = c), i = a;
    }
    return i;
  }), Ic = (n) => _c(n, false), Mm = (n) => _c(n, true), Dm = (n) => on(n, (t) => {
    let e = n.lineBlockAt(t.head).to;
    return t.head < e ? e : Math.min(n.state.doc.length, t.head + 1);
  }), Om = (n) => on(n, (t) => {
    let e = n.moveToLineBoundary(t, false).head;
    return t.head > e ? e : Math.max(0, t.head - 1);
  }), Tm = (n) => on(n, (t) => {
    let e = n.moveToLineBoundary(t, true).head;
    return t.head < e ? e : Math.min(n.state.doc.length, t.head + 1);
  }), Bm = ({ state: n, dispatch: t }) => {
    if (n.readOnly)
      return false;
    let e = n.changeByRange((i) => ({
      changes: {
        from: i.from,
        to: i.to,
        insert: W.of([
          "",
          ""
        ])
      },
      range: b.cursor(i.from)
    }));
    return t(n.update(e, {
      scrollIntoView: true,
      userEvent: "input"
    })), true;
  }, Em = ({ state: n, dispatch: t }) => {
    if (n.readOnly)
      return false;
    let e = n.changeByRange((i) => {
      if (!i.empty || i.from == 0 || i.from == n.doc.length)
        return {
          range: i
        };
      let s = i.from, r = n.doc.lineAt(s), o = s == r.from ? s - 1 : ht(r.text, s - r.from, false) + r.from, l = s == r.to ? s + 1 : ht(r.text, s - r.from, true) + r.from;
      return {
        changes: {
          from: o,
          to: l,
          insert: n.doc.slice(s, l).append(n.doc.slice(o, s))
        },
        range: b.cursor(l)
      };
    });
    return e.changes.empty ? false : (t(n.update(e, {
      scrollIntoView: true,
      userEvent: "move.character"
    })), true);
  };
  function Ms(n) {
    let t = [], e = -1;
    for (let i of n.selection.ranges) {
      let s = n.doc.lineAt(i.from), r = n.doc.lineAt(i.to);
      if (!i.empty && i.to == r.from && (r = n.doc.lineAt(i.to - 1)), e >= s.number) {
        let o = t[t.length - 1];
        o.to = r.to, o.ranges.push(i);
      } else
        t.push({
          from: s.from,
          to: r.to,
          ranges: [
            i
          ]
        });
      e = r.number + 1;
    }
    return t;
  }
  function Nc(n, t, e) {
    if (n.readOnly)
      return false;
    let i = [], s = [];
    for (let r of Ms(n)) {
      if (e ? r.to == n.doc.length : r.from == 0)
        continue;
      let o = n.doc.lineAt(e ? r.to + 1 : r.from - 1), l = o.length + 1;
      if (e) {
        i.push({
          from: r.to,
          to: o.to
        }, {
          from: r.from,
          insert: o.text + n.lineBreak
        });
        for (let a of r.ranges)
          s.push(b.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
      } else {
        i.push({
          from: o.from,
          to: r.from
        }, {
          from: r.to,
          insert: n.lineBreak + o.text
        });
        for (let a of r.ranges)
          s.push(b.range(a.anchor - l, a.head - l));
      }
    }
    return i.length ? (t(n.update({
      changes: i,
      scrollIntoView: true,
      selection: b.create(s, n.selection.mainIndex),
      userEvent: "move.line"
    })), true) : false;
  }
  const Rm = ({ state: n, dispatch: t }) => Nc(n, t, false), Lm = ({ state: n, dispatch: t }) => Nc(n, t, true);
  function Fc(n, t, e) {
    if (n.readOnly)
      return false;
    let i = [];
    for (let s of Ms(n))
      e ? i.push({
        from: s.from,
        insert: n.doc.slice(s.from, s.to) + n.lineBreak
      }) : i.push({
        from: s.to,
        insert: n.lineBreak + n.doc.slice(s.from, s.to)
      });
    return t(n.update({
      changes: i,
      scrollIntoView: true,
      userEvent: "input.copyline"
    })), true;
  }
  const Pm = ({ state: n, dispatch: t }) => Fc(n, t, false), _m = ({ state: n, dispatch: t }) => Fc(n, t, true), Im = (n) => {
    if (n.state.readOnly)
      return false;
    let { state: t } = n, e = t.changes(Ms(t).map(({ from: s, to: r }) => (s > 0 ? s-- : r < t.doc.length && r++, {
      from: s,
      to: r
    }))), i = bi(t.selection, (s) => {
      let r;
      if (n.lineWrapping) {
        let o = n.lineBlockAt(s.head), l = n.coordsAtPos(s.head, s.assoc || 1);
        l && (r = o.bottom + n.documentTop - l.bottom + n.defaultLineHeight / 2);
      }
      return n.moveVertically(s, true, r);
    }).map(e);
    return n.dispatch({
      changes: e,
      selection: i,
      scrollIntoView: true,
      userEvent: "delete.line"
    }), true;
  };
  function Nm(n, t) {
    if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(t - 1, t + 1)))
      return {
        from: t,
        to: t
      };
    let e = pt(n).resolveInner(t), i = e.childBefore(t), s = e.childAfter(t), r;
    return i && s && i.to <= t && s.from >= t && (r = i.type.prop(F.closedBy)) && r.indexOf(s.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(s.from).from && !/\S/.test(n.sliceDoc(i.to, s.from)) ? {
      from: i.to,
      to: s.from
    } : null;
  }
  const ea = Hc(false), Fm = Hc(true);
  function Hc(n) {
    return ({ state: t, dispatch: e }) => {
      if (t.readOnly)
        return false;
      let i = t.changeByRange((s) => {
        let { from: r, to: o } = s, l = t.doc.lineAt(r), a = !n && r == o && Nm(t, r);
        n && (r = o = (o <= l.to ? l : t.doc.lineAt(o)).to);
        let h = new xs(t, {
          simulateBreak: r,
          simulateDoubleBreak: !!a
        }), c = bo(h, r);
        for (c == null && (c = yi(/^\s*/.exec(t.doc.lineAt(r).text)[0], t.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
          o++;
        a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
        let f = [
          "",
          Ui(t, c)
        ];
        return a && f.push(Ui(t, h.lineIndent(l.from, -1))), {
          changes: {
            from: r,
            to: o,
            insert: W.of(f)
          },
          range: b.cursor(r + 1 + f[1].length)
        };
      });
      return e(t.update(i, {
        scrollIntoView: true,
        userEvent: "input"
      })), true;
    };
  }
  function So(n, t) {
    let e = -1;
    return n.changeByRange((i) => {
      let s = [];
      for (let o = i.from; o <= i.to; ) {
        let l = n.doc.lineAt(o);
        l.number > e && (i.empty || i.to > l.from) && (t(l, s, i), e = l.number), o = l.to + 1;
      }
      let r = n.changes(s);
      return {
        changes: s,
        range: b.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1))
      };
    });
  }
  const Hm = ({ state: n, dispatch: t }) => {
    if (n.readOnly)
      return false;
    let e = /* @__PURE__ */ Object.create(null), i = new xs(n, {
      overrideIndentation: (r) => {
        let o = e[r];
        return o ?? -1;
      }
    }), s = So(n, (r, o, l) => {
      let a = bo(i, r.from);
      if (a == null)
        return;
      /\S/.test(r.text) || (a = 0);
      let h = /^\s*/.exec(r.text)[0], c = Ui(n, a);
      (h != c || l.from < r.from + h.length) && (e[r.from] = a, o.push({
        from: r.from,
        to: r.from + h.length,
        insert: c
      }));
    });
    return s.changes.empty || t(n.update(s, {
      userEvent: "indent"
    })), true;
  }, Wc = ({ state: n, dispatch: t }) => n.readOnly ? false : (t(n.update(So(n, (e, i) => {
    i.push({
      from: e.from,
      insert: n.facet(ws)
    });
  }), {
    userEvent: "input.indent"
  })), true), Vc = ({ state: n, dispatch: t }) => n.readOnly ? false : (t(n.update(So(n, (e, i) => {
    let s = /^\s*/.exec(e.text)[0];
    if (!s)
      return;
    let r = yi(s, n.tabSize), o = 0, l = Ui(n, Math.max(0, r - ss(n)));
    for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); )
      o++;
    i.push({
      from: e.from + o,
      to: e.from + s.length,
      insert: l.slice(o)
    });
  }), {
    userEvent: "delete.dedent"
  })), true), Wm = (n) => (n.setTabFocusMode(), true), Vm = [
    {
      key: "Ctrl-b",
      run: yc,
      shift: Mc,
      preventDefault: true
    },
    {
      key: "Ctrl-f",
      run: bc,
      shift: Dc
    },
    {
      key: "Ctrl-p",
      run: vc,
      shift: Bc
    },
    {
      key: "Ctrl-n",
      run: kc,
      shift: Ec
    },
    {
      key: "Ctrl-a",
      run: am,
      shift: xm
    },
    {
      key: "Ctrl-e",
      run: hm,
      shift: vm
    },
    {
      key: "Ctrl-d",
      run: Pc
    },
    {
      key: "Ctrl-h",
      run: Yr
    },
    {
      key: "Ctrl-k",
      run: Dm
    },
    {
      key: "Ctrl-Alt-h",
      run: Ic
    },
    {
      key: "Ctrl-o",
      run: Bm
    },
    {
      key: "Ctrl-t",
      run: Em
    },
    {
      key: "Ctrl-v",
      run: Gr
    }
  ], zm = [
    {
      key: "ArrowLeft",
      run: yc,
      shift: Mc,
      preventDefault: true
    },
    {
      key: "Mod-ArrowLeft",
      mac: "Alt-ArrowLeft",
      run: Zg,
      shift: um,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowLeft",
      run: om,
      shift: bm,
      preventDefault: true
    },
    {
      key: "ArrowRight",
      run: bc,
      shift: Dc,
      preventDefault: true
    },
    {
      key: "Mod-ArrowRight",
      mac: "Alt-ArrowRight",
      run: tm,
      shift: dm,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowRight",
      run: lm,
      shift: wm,
      preventDefault: true
    },
    {
      key: "ArrowUp",
      run: vc,
      shift: Bc,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowUp",
      run: Xl,
      shift: Zl
    },
    {
      mac: "Ctrl-ArrowUp",
      run: Gl,
      shift: Yl
    },
    {
      key: "ArrowDown",
      run: kc,
      shift: Ec,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowDown",
      run: Ql,
      shift: ta
    },
    {
      mac: "Ctrl-ArrowDown",
      run: Gr,
      shift: Jl
    },
    {
      key: "PageUp",
      run: Gl,
      shift: Yl
    },
    {
      key: "PageDown",
      run: Gr,
      shift: Jl
    },
    {
      key: "Home",
      run: rm,
      shift: ym,
      preventDefault: true
    },
    {
      key: "Mod-Home",
      run: Xl,
      shift: Zl
    },
    {
      key: "End",
      run: sm,
      shift: mm,
      preventDefault: true
    },
    {
      key: "Mod-End",
      run: Ql,
      shift: ta
    },
    {
      key: "Enter",
      run: ea,
      shift: ea
    },
    {
      key: "Mod-a",
      run: km
    },
    {
      key: "Backspace",
      run: Yr,
      shift: Yr
    },
    {
      key: "Delete",
      run: Pc
    },
    {
      key: "Mod-Backspace",
      mac: "Alt-Backspace",
      run: Ic
    },
    {
      key: "Mod-Delete",
      mac: "Alt-Delete",
      run: Mm
    },
    {
      mac: "Mod-Backspace",
      run: Om
    },
    {
      mac: "Mod-Delete",
      run: Tm
    }
  ].concat(Vm.map((n) => ({
    mac: n.key,
    run: n.run,
    shift: n.shift
  }))), qm = [
    {
      key: "Alt-ArrowLeft",
      mac: "Ctrl-ArrowLeft",
      run: im,
      shift: pm
    },
    {
      key: "Alt-ArrowRight",
      mac: "Ctrl-ArrowRight",
      run: nm,
      shift: gm
    },
    {
      key: "Alt-ArrowUp",
      run: Rm
    },
    {
      key: "Shift-Alt-ArrowUp",
      run: Pm
    },
    {
      key: "Alt-ArrowDown",
      run: Lm
    },
    {
      key: "Shift-Alt-ArrowDown",
      run: _m
    },
    {
      key: "Escape",
      run: Am
    },
    {
      key: "Mod-Enter",
      run: Fm
    },
    {
      key: "Alt-l",
      mac: "Ctrl-l",
      run: Sm
    },
    {
      key: "Mod-i",
      run: Cm,
      preventDefault: true
    },
    {
      key: "Mod-[",
      run: Vc
    },
    {
      key: "Mod-]",
      run: Wc
    },
    {
      key: "Mod-Alt-\\",
      run: Hm
    },
    {
      key: "Shift-Mod-k",
      run: Im
    },
    {
      key: "Shift-Mod-\\",
      run: fm
    },
    {
      key: "Mod-/",
      run: Pg
    },
    {
      key: "Alt-A",
      run: Ig
    },
    {
      key: "Ctrl-m",
      mac: "Shift-Alt-m",
      run: Wm
    }
  ].concat(zm), $m = {
    key: "Tab",
    run: Wc,
    shift: Vc
  }, ia = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
  class gi {
    constructor(t, e, i = 0, s = t.length, r, o) {
      this.test = o, this.value = {
        from: 0,
        to: 0
      }, this.done = false, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = t.iterRange(i, s), this.bufferStart = i, this.normalize = r ? (l) => r(ia(l)) : ia, this.query = this.normalize(e);
    }
    peek() {
      if (this.bufferPos == this.buffer.length) {
        if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
          return -1;
        this.bufferPos = 0, this.buffer = this.iter.value;
      }
      return vt(this.buffer, this.bufferPos);
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
        let e = Qr(t), i = this.bufferStart + this.bufferPos;
        this.bufferPos += Xt(t);
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
        this.query.charCodeAt(o) == t && (o == this.query.length - 1 ? s = {
          from: this.matches[r + 1],
          to: i
        } : (this.matches[r]++, l = true)), l || (this.matches.splice(r, 2), r -= 2);
      }
      return this.query.charCodeAt(0) == t && (this.query.length == 1 ? s = {
        from: e,
        to: i
      } : this.matches.push(1, e)), s && this.test && !this.test(s.from, s.to, this.buffer, this.bufferStart) && (s = null), s;
    }
  }
  typeof Symbol < "u" && (gi.prototype[Symbol.iterator] = function() {
    return this;
  });
  const zc = {
    from: -1,
    to: -1,
    match: /.*/.exec("")
  }, Co = "gm" + (/x/.unicode == null ? "" : "u");
  class qc {
    constructor(t, e, i, s = 0, r = t.length) {
      if (this.text = t, this.to = r, this.curLine = "", this.done = false, this.value = zc, /\\[sWDnr]|\n|\r|\[\^/.test(e))
        return new $c(t, e, i, s, r);
      this.re = new RegExp(e, Co + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = t.iter();
      let o = t.lineAt(s);
      this.curLineStart = o.from, this.matchPos = as(t, s), this.getLine(this.curLineStart);
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
          if (this.matchPos = as(this.text, s + (i == s ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < s || i > this.value.to) && (!this.test || this.test(i, s, e)))
            return this.value = {
              from: i,
              to: s,
              match: e
            }, this;
          t = this.matchPos - this.curLineStart;
        } else if (this.curLineStart + this.curLine.length < this.to)
          this.nextLine(), t = 0;
        else
          return this.done = true, this;
      }
    }
  }
  const Qs = /* @__PURE__ */ new WeakMap();
  class oi {
    constructor(t, e) {
      this.from = t, this.text = e;
    }
    get to() {
      return this.from + this.text.length;
    }
    static get(t, e, i) {
      let s = Qs.get(t);
      if (!s || s.from >= i || s.to <= e) {
        let l = new oi(e, t.sliceString(e, i));
        return Qs.set(t, l), l;
      }
      if (s.from == e && s.to == i)
        return s;
      let { text: r, from: o } = s;
      return o > e && (r = t.sliceString(e, o) + r, o = e), s.to < i && (r += t.sliceString(s.to, i)), Qs.set(t, new oi(o, r)), new oi(e, r.slice(e - o, i - o));
    }
  }
  class $c {
    constructor(t, e, i, s, r) {
      this.text = t, this.to = r, this.done = false, this.value = zc, this.matchPos = as(t, s), this.re = new RegExp(e, Co + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = oi.get(t, s, this.chunkEnd(s + 5e3));
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
            return this.value = {
              from: i,
              to: s,
              match: e
            }, this.matchPos = as(this.text, s + (i == s ? 1 : 0)), this;
        }
        if (this.flat.to == this.to)
          return this.done = true, this;
        this.flat = oi.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
      }
    }
  }
  typeof Symbol < "u" && (qc.prototype[Symbol.iterator] = $c.prototype[Symbol.iterator] = function() {
    return this;
  });
  function jm(n) {
    try {
      return new RegExp(n, Co), true;
    } catch {
      return false;
    }
  }
  function as(n, t) {
    if (t >= n.length)
      return t;
    let e = n.lineAt(t), i;
    for (; t < e.to && (i = e.text.charCodeAt(t - e.from)) >= 56320 && i < 57344; )
      t++;
    return t;
  }
  function Jr(n) {
    let t = String(n.state.doc.lineAt(n.state.selection.main.head).number), e = $("input", {
      class: "cm-textfield",
      name: "line",
      value: t
    }), i = $("form", {
      class: "cm-gotoLine",
      onkeydown: (r) => {
        r.keyCode == 27 ? (r.preventDefault(), n.dispatch({
          effects: Ii.of(false)
        }), n.focus()) : r.keyCode == 13 && (r.preventDefault(), s());
      },
      onsubmit: (r) => {
        r.preventDefault(), s();
      }
    }, $("label", n.state.phrase("Go to line"), ": ", e), " ", $("button", {
      class: "cm-button",
      type: "submit"
    }, n.state.phrase("go")), $("button", {
      name: "close",
      onclick: () => {
        n.dispatch({
          effects: Ii.of(false)
        }), n.focus();
      },
      "aria-label": n.state.phrase("close"),
      type: "button"
    }, [
      "\xD7"
    ]));
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
      n.dispatch({
        effects: [
          Ii.of(false),
          D.scrollIntoView(g.from, {
            y: "center"
          })
        ],
        selection: g
      }), n.focus();
    }
    return {
      dom: i
    };
  }
  const Ii = L.define(), na = ct.define({
    create() {
      return true;
    },
    update(n, t) {
      for (let e of t.effects)
        e.is(Ii) && (n = e.value);
      return n;
    },
    provide: (n) => ji.from(n, (t) => t ? Jr : null)
  }), Km = (n) => {
    let t = $i(n, Jr);
    if (!t) {
      let e = [
        Ii.of(true)
      ];
      n.state.field(na, false) == null && e.push(L.appendConfig.of([
        na,
        Um
      ])), n.dispatch({
        effects: e
      }), t = $i(n, Jr);
    }
    return t && t.dom.querySelector("input").select(), true;
  }, Um = D.baseTheme({
    ".cm-panel.cm-gotoLine": {
      padding: "2px 6px 4px",
      position: "relative",
      "& label": {
        fontSize: "80%"
      },
      "& [name=close]": {
        position: "absolute",
        top: "0",
        bottom: "0",
        right: "4px",
        backgroundColor: "inherit",
        border: "none",
        font: "inherit",
        padding: "0"
      }
    }
  }), Gm = {
    highlightWordAroundCursor: false,
    minSelectionLength: 1,
    maxMatches: 100,
    wholeWords: false
  }, jc = T.define({
    combine(n) {
      return re(n, Gm, {
        highlightWordAroundCursor: (t, e) => t || e,
        minSelectionLength: Math.min,
        maxMatches: Math.min
      });
    }
  });
  function Ym(n) {
    let t = [
      t0,
      Zm
    ];
    return n && t.push(jc.of(n)), t;
  }
  const Jm = E.mark({
    class: "cm-selectionMatch"
  }), Xm = E.mark({
    class: "cm-selectionMatch cm-selectionMatch-main"
  });
  function sa(n, t, e, i) {
    return (e == 0 || n(t.sliceDoc(e - 1, e)) != J.Word) && (i == t.doc.length || n(t.sliceDoc(i, i + 1)) != J.Word);
  }
  function Qm(n, t, e, i) {
    return n(t.sliceDoc(e, e + 1)) == J.Word && n(t.sliceDoc(i - 1, i)) == J.Word;
  }
  const Zm = Q.fromClass(class {
    constructor(n) {
      this.decorations = this.getDeco(n);
    }
    update(n) {
      (n.selectionSet || n.docChanged || n.viewportChanged) && (this.decorations = this.getDeco(n.view));
    }
    getDeco(n) {
      let t = n.state.facet(jc), { state: e } = n, i = e.selection;
      if (i.ranges.length > 1)
        return E.none;
      let s = i.main, r, o = null;
      if (s.empty) {
        if (!t.highlightWordAroundCursor)
          return E.none;
        let a = e.wordAt(s.head);
        if (!a)
          return E.none;
        o = e.charCategorizer(s.head), r = e.sliceDoc(a.from, a.to);
      } else {
        let a = s.to - s.from;
        if (a < t.minSelectionLength || a > 200)
          return E.none;
        if (t.wholeWords) {
          if (r = e.sliceDoc(s.from, s.to), o = e.charCategorizer(s.head), !(sa(o, e, s.from, s.to) && Qm(o, e, s.from, s.to)))
            return E.none;
        } else if (r = e.sliceDoc(s.from, s.to), !r)
          return E.none;
      }
      let l = [];
      for (let a of n.visibleRanges) {
        let h = new gi(e.doc, r, a.from, a.to);
        for (; !h.next().done; ) {
          let { from: c, to: f } = h.value;
          if ((!o || sa(o, e, c, f)) && (s.empty && c <= s.from && f >= s.to ? l.push(Xm.range(c, f)) : (c >= s.to || f <= s.from) && l.push(Jm.range(c, f)), l.length > t.maxMatches))
            return E.none;
        }
      }
      return E.set(l);
    }
  }, {
    decorations: (n) => n.decorations
  }), t0 = D.baseTheme({
    ".cm-selectionMatch": {
      backgroundColor: "#99ff7780"
    },
    ".cm-searchMatch .cm-selectionMatch": {
      backgroundColor: "transparent"
    }
  }), e0 = ({ state: n, dispatch: t }) => {
    let { selection: e } = n, i = b.create(e.ranges.map((s) => n.wordAt(s.head) || b.cursor(s.head)), e.mainIndex);
    return i.eq(e) ? false : (t(n.update({
      selection: i
    })), true);
  };
  function i0(n, t) {
    let { main: e, ranges: i } = n.selection, s = n.wordAt(e.head), r = s && s.from == e.from && s.to == e.to;
    for (let o = false, l = new gi(n.doc, t, i[i.length - 1].to); ; )
      if (l.next(), l.done) {
        if (o)
          return null;
        l = new gi(n.doc, t, 0, Math.max(0, i[i.length - 1].from - 1)), o = true;
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
  const n0 = ({ state: n, dispatch: t }) => {
    let { ranges: e } = n.selection;
    if (e.some((r) => r.from === r.to))
      return e0({
        state: n,
        dispatch: t
      });
    let i = n.sliceDoc(e[0].from, e[0].to);
    if (n.selection.ranges.some((r) => n.sliceDoc(r.from, r.to) != i))
      return false;
    let s = i0(n, i);
    return s ? (t(n.update({
      selection: n.selection.addRange(b.range(s.from, s.to), false),
      effects: D.scrollIntoView(s.to)
    })), true) : false;
  }, wi = T.define({
    combine(n) {
      return re(n, {
        top: false,
        caseSensitive: false,
        literal: false,
        regexp: false,
        wholeWord: false,
        createPanel: (t) => new g0(t),
        scrollToMatch: (t) => D.scrollIntoView(t)
      });
    }
  });
  class Kc {
    constructor(t) {
      this.search = t.search, this.caseSensitive = !!t.caseSensitive, this.literal = !!t.literal, this.regexp = !!t.regexp, this.replace = t.replace || "", this.valid = !!this.search && (!this.regexp || jm(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!t.wholeWord;
    }
    unquote(t) {
      return this.literal ? t : t.replace(/\\([nrt\\])/g, (e, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
    }
    eq(t) {
      return this.search == t.search && this.replace == t.replace && this.caseSensitive == t.caseSensitive && this.regexp == t.regexp && this.wholeWord == t.wholeWord;
    }
    create() {
      return this.regexp ? new l0(this) : new r0(this);
    }
    getCursor(t, e = 0, i) {
      let s = t.doc ? t : I.create({
        doc: t
      });
      return i == null && (i = s.doc.length), this.regexp ? Xe(this, s, e, i) : Je(this, s, e, i);
    }
  }
  class Uc {
    constructor(t) {
      this.spec = t;
    }
  }
  function Je(n, t, e, i) {
    return new gi(t.doc, n.unquoted, e, i, n.caseSensitive ? void 0 : (s) => s.toLowerCase(), n.wholeWord ? s0(t.doc, t.charCategorizer(t.selection.main.head)) : void 0);
  }
  function s0(n, t) {
    return (e, i, s, r) => ((r > e || r + s.length < i) && (r = Math.max(0, e - 2), s = n.sliceString(r, Math.min(n.length, i + 2))), (t(hs(s, e - r)) != J.Word || t(cs(s, e - r)) != J.Word) && (t(cs(s, i - r)) != J.Word || t(hs(s, i - r)) != J.Word));
  }
  class r0 extends Uc {
    constructor(t) {
      super(t);
    }
    nextMatch(t, e, i) {
      let s = Je(this.spec, t, i, t.doc.length).nextOverlapping();
      if (s.done) {
        let r = Math.min(t.doc.length, e + this.spec.unquoted.length);
        s = Je(this.spec, t, 0, r).nextOverlapping();
      }
      return s.done || s.value.from == e && s.value.to == i ? null : s.value;
    }
    prevMatchInRange(t, e, i) {
      for (let s = i; ; ) {
        let r = Math.max(e, s - 1e4 - this.spec.unquoted.length), o = Je(this.spec, t, r, s), l = null;
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
      let i = Je(this.spec, t, 0, t.doc.length), s = [];
      for (; !i.next().done; ) {
        if (s.length >= e)
          return null;
        s.push(i.value);
      }
      return s;
    }
    highlight(t, e, i, s) {
      let r = Je(this.spec, t, Math.max(0, e - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, t.doc.length));
      for (; !r.next().done; )
        s(r.value.from, r.value.to);
    }
  }
  function Xe(n, t, e, i) {
    return new qc(t.doc, n.search, {
      ignoreCase: !n.caseSensitive,
      test: n.wholeWord ? o0(t.charCategorizer(t.selection.main.head)) : void 0
    }, e, i);
  }
  function hs(n, t) {
    return n.slice(ht(n, t, false), t);
  }
  function cs(n, t) {
    return n.slice(t, ht(n, t));
  }
  function o0(n) {
    return (t, e, i) => !i[0].length || (n(hs(i.input, i.index)) != J.Word || n(cs(i.input, i.index)) != J.Word) && (n(cs(i.input, i.index + i[0].length)) != J.Word || n(hs(i.input, i.index + i[0].length)) != J.Word);
  }
  class l0 extends Uc {
    nextMatch(t, e, i) {
      let s = Xe(this.spec, t, i, t.doc.length).next();
      return s.done && (s = Xe(this.spec, t, 0, e).next()), s.done ? null : s.value;
    }
    prevMatchInRange(t, e, i) {
      for (let s = 1; ; s++) {
        let r = Math.max(e, i - s * 1e4), o = Xe(this.spec, t, r, i), l = null;
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
      let i = Xe(this.spec, t, 0, t.doc.length), s = [];
      for (; !i.next().done; ) {
        if (s.length >= e)
          return null;
        s.push(i.value);
      }
      return s;
    }
    highlight(t, e, i, s) {
      let r = Xe(this.spec, t, Math.max(0, e - 250), Math.min(i + 250, t.doc.length));
      for (; !r.next().done; )
        s(r.value.from, r.value.to);
    }
  }
  const Gi = L.define(), Ao = L.define(), Ce = ct.define({
    create(n) {
      return new Zs(Xr(n).create(), null);
    },
    update(n, t) {
      for (let e of t.effects)
        e.is(Gi) ? n = new Zs(e.value.create(), n.panel) : e.is(Ao) && (n = new Zs(n.query, e.value ? Mo : null));
      return n;
    },
    provide: (n) => ji.from(n, (t) => t.panel)
  });
  class Zs {
    constructor(t, e) {
      this.query = t, this.panel = e;
    }
  }
  const a0 = E.mark({
    class: "cm-searchMatch"
  }), h0 = E.mark({
    class: "cm-searchMatch cm-searchMatch-selected"
  }), c0 = Q.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = this.highlight(n.state.field(Ce));
    }
    update(n) {
      let t = n.state.field(Ce);
      (t != n.startState.field(Ce) || n.docChanged || n.selectionSet || n.viewportChanged) && (this.decorations = this.highlight(t));
    }
    highlight({ query: n, panel: t }) {
      if (!t || !n.spec.valid)
        return E.none;
      let { view: e } = this, i = new fe();
      for (let s = 0, r = e.visibleRanges, o = r.length; s < o; s++) {
        let { from: l, to: a } = r[s];
        for (; s < o - 1 && a > r[s + 1].from - 2 * 250; )
          a = r[++s].to;
        n.highlight(e.state, l, a, (h, c) => {
          let f = e.state.selection.ranges.some((u) => u.from == h && u.to == c);
          i.add(h, c, f ? h0 : a0);
        });
      }
      return i.finish();
    }
  }, {
    decorations: (n) => n.decorations
  });
  function ln(n) {
    return (t) => {
      let e = t.state.field(Ce, false);
      return e && e.query.spec.valid ? n(t, e) : Jc(t);
    };
  }
  const fs = ln((n, { query: t }) => {
    let { to: e } = n.state.selection.main, i = t.nextMatch(n.state, e, e);
    if (!i)
      return false;
    let s = b.single(i.from, i.to), r = n.state.facet(wi);
    return n.dispatch({
      selection: s,
      effects: [
        Do(n, i),
        r.scrollToMatch(s.main, n)
      ],
      userEvent: "select.search"
    }), Yc(n), true;
  }), us = ln((n, { query: t }) => {
    let { state: e } = n, { from: i } = e.selection.main, s = t.prevMatch(e, i, i);
    if (!s)
      return false;
    let r = b.single(s.from, s.to), o = n.state.facet(wi);
    return n.dispatch({
      selection: r,
      effects: [
        Do(n, s),
        o.scrollToMatch(r.main, n)
      ],
      userEvent: "select.search"
    }), Yc(n), true;
  }), f0 = ln((n, { query: t }) => {
    let e = t.matchAll(n.state, 1e3);
    return !e || !e.length ? false : (n.dispatch({
      selection: b.create(e.map((i) => b.range(i.from, i.to))),
      userEvent: "select.search.matches"
    }), true);
  }), u0 = ({ state: n, dispatch: t }) => {
    let e = n.selection;
    if (e.ranges.length > 1 || e.main.empty)
      return false;
    let { from: i, to: s } = e.main, r = [], o = 0;
    for (let l = new gi(n.doc, n.sliceDoc(i, s)); !l.next().done; ) {
      if (r.length > 1e3)
        return false;
      l.value.from == i && (o = r.length), r.push(b.range(l.value.from, l.value.to));
    }
    return t(n.update({
      selection: b.create(r, o),
      userEvent: "select.search.matches"
    })), true;
  }, ra = ln((n, { query: t }) => {
    let { state: e } = n, { from: i, to: s } = e.selection.main;
    if (e.readOnly)
      return false;
    let r = t.nextMatch(e, i, i);
    if (!r)
      return false;
    let o = r, l = [], a, h, c = [];
    o.from == i && o.to == s && (h = e.toText(t.getReplacement(o)), l.push({
      from: o.from,
      to: o.to,
      insert: h
    }), o = t.nextMatch(e, o.from, o.to), c.push(D.announce.of(e.phrase("replaced match on line $", e.doc.lineAt(i).number) + ".")));
    let f = n.state.changes(l);
    return o && (a = b.single(o.from, o.to).map(f), c.push(Do(n, o)), c.push(e.facet(wi).scrollToMatch(a.main, n))), n.dispatch({
      changes: f,
      selection: a,
      effects: c,
      userEvent: "input.replace"
    }), true;
  }), d0 = ln((n, { query: t }) => {
    if (n.state.readOnly)
      return false;
    let e = t.matchAll(n.state, 1e9).map((s) => {
      let { from: r, to: o } = s;
      return {
        from: r,
        to: o,
        insert: t.getReplacement(s)
      };
    });
    if (!e.length)
      return false;
    let i = n.state.phrase("replaced $ matches", e.length) + ".";
    return n.dispatch({
      changes: e,
      effects: D.announce.of(i),
      userEvent: "input.replace.all"
    }), true;
  });
  function Mo(n) {
    return n.state.facet(wi).createPanel(n);
  }
  function Xr(n, t) {
    var e, i, s, r, o;
    let l = n.selection.main, a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
    if (t && !a)
      return t;
    let h = n.facet(wi);
    return new Kc({
      search: ((e = t == null ? void 0 : t.literal) !== null && e !== void 0 ? e : h.literal) ? a : a.replace(/\n/g, "\\n"),
      caseSensitive: (i = t == null ? void 0 : t.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive,
      literal: (s = t == null ? void 0 : t.literal) !== null && s !== void 0 ? s : h.literal,
      regexp: (r = t == null ? void 0 : t.regexp) !== null && r !== void 0 ? r : h.regexp,
      wholeWord: (o = t == null ? void 0 : t.wholeWord) !== null && o !== void 0 ? o : h.wholeWord
    });
  }
  function Gc(n) {
    let t = $i(n, Mo);
    return t && t.dom.querySelector("[main-field]");
  }
  function Yc(n) {
    let t = Gc(n);
    t && t == n.root.activeElement && t.select();
  }
  const Jc = (n) => {
    let t = n.state.field(Ce, false);
    if (t && t.panel) {
      let e = Gc(n);
      if (e && e != n.root.activeElement) {
        let i = Xr(n.state, t.query.spec);
        i.valid && n.dispatch({
          effects: Gi.of(i)
        }), e.focus(), e.select();
      }
    } else
      n.dispatch({
        effects: [
          Ao.of(true),
          t ? Gi.of(Xr(n.state, t.query.spec)) : L.appendConfig.of(y0)
        ]
      });
    return true;
  }, Xc = (n) => {
    let t = n.state.field(Ce, false);
    if (!t || !t.panel)
      return false;
    let e = $i(n, Mo);
    return e && e.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({
      effects: Ao.of(false)
    }), true;
  }, p0 = [
    {
      key: "Mod-f",
      run: Jc,
      scope: "editor search-panel"
    },
    {
      key: "F3",
      run: fs,
      shift: us,
      scope: "editor search-panel",
      preventDefault: true
    },
    {
      key: "Mod-g",
      run: fs,
      shift: us,
      scope: "editor search-panel",
      preventDefault: true
    },
    {
      key: "Escape",
      run: Xc,
      scope: "editor search-panel"
    },
    {
      key: "Mod-Shift-l",
      run: u0
    },
    {
      key: "Mod-Alt-g",
      run: Km
    },
    {
      key: "Mod-d",
      run: n0,
      preventDefault: true
    }
  ];
  class g0 {
    constructor(t) {
      this.view = t;
      let e = this.query = t.state.field(Ce).query.spec;
      this.commit = this.commit.bind(this), this.searchField = $("input", {
        value: e.search,
        placeholder: Dt(t, "Find"),
        "aria-label": Dt(t, "Find"),
        class: "cm-textfield",
        name: "search",
        form: "",
        "main-field": "true",
        onchange: this.commit,
        onkeyup: this.commit
      }), this.replaceField = $("input", {
        value: e.replace,
        placeholder: Dt(t, "Replace"),
        "aria-label": Dt(t, "Replace"),
        class: "cm-textfield",
        name: "replace",
        form: "",
        onchange: this.commit,
        onkeyup: this.commit
      }), this.caseField = $("input", {
        type: "checkbox",
        name: "case",
        form: "",
        checked: e.caseSensitive,
        onchange: this.commit
      }), this.reField = $("input", {
        type: "checkbox",
        name: "re",
        form: "",
        checked: e.regexp,
        onchange: this.commit
      }), this.wordField = $("input", {
        type: "checkbox",
        name: "word",
        form: "",
        checked: e.wholeWord,
        onchange: this.commit
      });
      function i(s, r, o) {
        return $("button", {
          class: "cm-button",
          name: s,
          onclick: r,
          type: "button"
        }, o);
      }
      this.dom = $("div", {
        onkeydown: (s) => this.keydown(s),
        class: "cm-search"
      }, [
        this.searchField,
        i("next", () => fs(t), [
          Dt(t, "next")
        ]),
        i("prev", () => us(t), [
          Dt(t, "previous")
        ]),
        i("select", () => f0(t), [
          Dt(t, "all")
        ]),
        $("label", null, [
          this.caseField,
          Dt(t, "match case")
        ]),
        $("label", null, [
          this.reField,
          Dt(t, "regexp")
        ]),
        $("label", null, [
          this.wordField,
          Dt(t, "by word")
        ]),
        ...t.state.readOnly ? [] : [
          $("br"),
          this.replaceField,
          i("replace", () => ra(t), [
            Dt(t, "replace")
          ]),
          i("replaceAll", () => d0(t), [
            Dt(t, "replace all")
          ])
        ],
        $("button", {
          name: "close",
          onclick: () => Xc(t),
          "aria-label": Dt(t, "close"),
          type: "button"
        }, [
          "\xD7"
        ])
      ]);
    }
    commit() {
      let t = new Kc({
        search: this.searchField.value,
        caseSensitive: this.caseField.checked,
        regexp: this.reField.checked,
        wholeWord: this.wordField.checked,
        replace: this.replaceField.value
      });
      t.eq(this.query) || (this.query = t, this.view.dispatch({
        effects: Gi.of(t)
      }));
    }
    keydown(t) {
      vd(this.view, t, "search-panel") ? t.preventDefault() : t.keyCode == 13 && t.target == this.searchField ? (t.preventDefault(), (t.shiftKey ? us : fs)(this.view)) : t.keyCode == 13 && t.target == this.replaceField && (t.preventDefault(), ra(this.view));
    }
    update(t) {
      for (let e of t.transactions)
        for (let i of e.effects)
          i.is(Gi) && !i.value.eq(this.query) && this.setQuery(i.value);
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
      return this.view.state.facet(wi).top;
    }
  }
  function Dt(n, t) {
    return n.state.phrase(t);
  }
  const On = 30, Tn = /[\s\.,:;?!]/;
  function Do(n, { from: t, to: e }) {
    let i = n.state.doc.lineAt(t), s = n.state.doc.lineAt(e).to, r = Math.max(i.from, t - On), o = Math.min(s, e + On), l = n.state.sliceDoc(r, o);
    if (r != i.from) {
      for (let a = 0; a < On; a++)
        if (!Tn.test(l[a + 1]) && Tn.test(l[a])) {
          l = l.slice(a);
          break;
        }
    }
    if (o != s) {
      for (let a = l.length - 1; a > l.length - On; a--)
        if (!Tn.test(l[a - 1]) && Tn.test(l[a])) {
          l = l.slice(0, a);
          break;
        }
    }
    return D.announce.of(`${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`);
  }
  const m0 = D.baseTheme({
    ".cm-panel.cm-search": {
      padding: "2px 6px 4px",
      position: "relative",
      "& [name=close]": {
        position: "absolute",
        top: "0",
        right: "4px",
        backgroundColor: "inherit",
        border: "none",
        font: "inherit",
        padding: 0,
        margin: 0
      },
      "& input, & button, & label": {
        margin: ".2em .6em .2em 0"
      },
      "& input[type=checkbox]": {
        marginRight: ".2em"
      },
      "& label": {
        fontSize: "80%",
        whiteSpace: "pre"
      }
    },
    "&light .cm-searchMatch": {
      backgroundColor: "#ffff0054"
    },
    "&dark .cm-searchMatch": {
      backgroundColor: "#00ffff8a"
    },
    "&light .cm-searchMatch-selected": {
      backgroundColor: "#ff6a0054"
    },
    "&dark .cm-searchMatch-selected": {
      backgroundColor: "#ff00ff8a"
    }
  }), y0 = [
    Ce,
    Ke.low(c0),
    m0
  ];
  class Qc {
    constructor(t, e, i, s) {
      this.state = t, this.pos = e, this.explicit = i, this.view = s, this.abortListeners = [], this.abortOnDocChange = false;
    }
    tokenBefore(t) {
      let e = pt(this.state).resolveInner(this.pos, -1);
      for (; e && t.indexOf(e.name) < 0; )
        e = e.parent;
      return e ? {
        from: e.from,
        to: this.pos,
        text: this.state.sliceDoc(e.from, this.pos),
        type: e.type
      } : null;
    }
    matchBefore(t) {
      let e = this.state.doc.lineAt(this.pos), i = Math.max(e.from, this.pos - 250), s = e.text.slice(i - e.from, this.pos - e.from), r = s.search(Zc(t, false));
      return r < 0 ? null : {
        from: i + r,
        to: this.pos,
        text: s.slice(r)
      };
    }
    get aborted() {
      return this.abortListeners == null;
    }
    addEventListener(t, e, i) {
      t == "abort" && this.abortListeners && (this.abortListeners.push(e), i && i.onDocChange && (this.abortOnDocChange = true));
    }
  }
  function oa(n) {
    let t = Object.keys(n).join(""), e = /\w/.test(t);
    return e && (t = t.replace(/\w/g, "")), `[${e ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
  }
  function b0(n) {
    let t = /* @__PURE__ */ Object.create(null), e = /* @__PURE__ */ Object.create(null);
    for (let { label: s } of n) {
      t[s[0]] = true;
      for (let r = 1; r < s.length; r++)
        e[s[r]] = true;
    }
    let i = oa(t) + oa(e) + "*$";
    return [
      new RegExp("^" + i),
      new RegExp(i)
    ];
  }
  function w0(n) {
    let t = n.map((s) => typeof s == "string" ? {
      label: s
    } : s), [e, i] = t.every((s) => /^\w+$/.test(s.label)) ? [
      /\w*$/,
      /\w+$/
    ] : b0(t);
    return (s) => {
      let r = s.matchBefore(i);
      return r || s.explicit ? {
        from: r ? r.from : s.pos,
        options: t,
        validFor: e
      } : null;
    };
  }
  class la {
    constructor(t, e, i, s) {
      this.completion = t, this.source = e, this.match = i, this.score = s;
    }
  }
  function We(n) {
    return n.selection.main.from;
  }
  function Zc(n, t) {
    var e;
    let { source: i } = n, s = t && i[0] != "^", r = i[i.length - 1] != "$";
    return !s && !r ? n : new RegExp(`${s ? "^" : ""}(?:${i})${r ? "$" : ""}`, (e = n.flags) !== null && e !== void 0 ? e : n.ignoreCase ? "i" : "");
  }
  const tf = pe.define();
  function x0(n, t, e, i) {
    let { main: s } = n.selection, r = e - s.from, o = i - s.from;
    return Object.assign(Object.assign({}, n.changeByRange((l) => {
      if (l != s && e != i && n.sliceDoc(l.from + r, l.from + o) != n.sliceDoc(e, i))
        return {
          range: l
        };
      let a = n.toText(t);
      return {
        changes: {
          from: l.from + r,
          to: i == s.from ? l.to : l.from + o,
          insert: a
        },
        range: b.cursor(l.from + r + a.length)
      };
    })), {
      scrollIntoView: true,
      userEvent: "input.complete"
    });
  }
  const aa = /* @__PURE__ */ new WeakMap();
  function v0(n) {
    if (!Array.isArray(n))
      return n;
    let t = aa.get(n);
    return t || aa.set(n, t = w0(n)), t;
  }
  const ds = L.define(), Yi = L.define();
  class k0 {
    constructor(t) {
      this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
      for (let e = 0; e < t.length; ) {
        let i = vt(t, e), s = Xt(i);
        this.chars.push(i);
        let r = t.slice(e, e + s), o = r.toUpperCase();
        this.folded.push(vt(o == r ? r.toLowerCase() : o, 0)), e += s;
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
        let w = vt(t, 0), v = Xt(w), S = v == t.length ? 0 : -100;
        if (w != e[0])
          if (w == i[0])
            S += -200;
          else
            return null;
        return this.ret(S, [
          0,
          v
        ]);
      }
      let l = t.indexOf(this.pattern);
      if (l == 0)
        return this.ret(t.length == this.pattern.length ? 0 : -100, [
          0,
          this.pattern.length
        ]);
      let a = e.length, h = 0;
      if (l < 0) {
        for (let w = 0, v = Math.min(t.length, 200); w < v && h < a; ) {
          let S = vt(t, w);
          (S == e[h] || S == i[h]) && (s[h++] = w), w += Xt(S);
        }
        if (h < a)
          return null;
      }
      let c = 0, f = 0, u = false, d = 0, p = -1, g = -1, m = /[a-z]/.test(t), y = true;
      for (let w = 0, v = Math.min(t.length, 200), S = 0; w < v && f < a; ) {
        let x = vt(t, w);
        l < 0 && (c < a && x == e[c] && (r[c++] = w), d < a && (x == e[d] || x == i[d] ? (d == 0 && (p = w), g = w + 1, d++) : d = 0));
        let k, A = x < 255 ? x >= 48 && x <= 57 || x >= 97 && x <= 122 ? 2 : x >= 65 && x <= 90 ? 1 : 0 : (k = Qr(x)) != k.toLowerCase() ? 1 : k != k.toUpperCase() ? 2 : 0;
        (!w || A == 1 && m || S == 0 && A != 0) && (e[f] == x || i[f] == x && (u = true) ? o[f++] = w : o.length && (y = false)), S = A, w += Xt(x);
      }
      return f == a && o[0] == 0 && y ? this.result(-100 + (u ? -200 : 0), o, t) : d == a && p == 0 ? this.ret(-200 - t.length + (g == t.length ? 0 : -100), [
        0,
        g
      ]) : l > -1 ? this.ret(-700 - t.length, [
        l,
        l + this.pattern.length
      ]) : d == a ? this.ret(-200 + -700 - t.length, [
        p,
        g
      ]) : f == a ? this.result(-100 + (u ? -200 : 0) + -700 + (y ? 0 : -1100), o, t) : e.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, t);
    }
    result(t, e, i) {
      let s = [], r = 0;
      for (let o of e) {
        let l = o + (this.astral ? Xt(vt(i, o)) : 1);
        r && s[r - 1] == o ? s[r - 1] = l : (s[r++] = o, s[r++] = l);
      }
      return this.ret(t - i.length, s);
    }
  }
  class S0 {
    constructor(t) {
      this.pattern = t, this.matched = [], this.score = 0, this.folded = t.toLowerCase();
    }
    match(t) {
      if (t.length < this.pattern.length)
        return null;
      let e = t.slice(0, this.pattern.length), i = e == this.pattern ? 0 : e.toLowerCase() == this.folded ? -200 : null;
      return i == null ? null : (this.matched = [
        0,
        e.length
      ], this.score = i + (t.length == this.pattern.length ? 0 : -100), this);
    }
  }
  const nt = T.define({
    combine(n) {
      return re(n, {
        activateOnTyping: true,
        activateOnCompletion: () => false,
        activateOnTypingDelay: 100,
        selectOnOpen: true,
        override: null,
        closeOnBlur: true,
        maxRenderedOptions: 100,
        defaultKeymap: true,
        tooltipClass: () => "",
        optionClass: () => "",
        aboveCursor: false,
        icons: true,
        addToOptions: [],
        positionInfo: C0,
        filterStrict: false,
        compareCompletions: (t, e) => t.label.localeCompare(e.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (t, e) => t && e,
        closeOnBlur: (t, e) => t && e,
        icons: (t, e) => t && e,
        tooltipClass: (t, e) => (i) => ha(t(i), e(i)),
        optionClass: (t, e) => (i) => ha(t(i), e(i)),
        addToOptions: (t, e) => t.concat(e),
        filterStrict: (t, e) => t || e
      });
    }
  });
  function ha(n, t) {
    return n ? t ? n + " " + t : n : t;
  }
  function C0(n, t, e, i, s, r) {
    let o = n.textDirection == Y.RTL, l = o, a = false, h = "top", c, f, u = t.left - s.left, d = s.right - t.right, p = i.right - i.left, g = i.bottom - i.top;
    if (l && u < Math.min(p, d) ? l = false : !l && d < Math.min(p, u) && (l = true), p <= (l ? u : d))
      c = Math.max(s.top, Math.min(e.top, s.bottom - g)) - t.top, f = Math.min(400, l ? u : d);
    else {
      a = true, f = Math.min(400, (o ? t.right : s.right - t.left) - 30);
      let w = s.bottom - t.bottom;
      w >= g || w > t.top ? c = e.bottom - t.top : (h = "bottom", c = t.bottom - e.top);
    }
    let m = (t.bottom - t.top) / r.offsetHeight, y = (t.right - t.left) / r.offsetWidth;
    return {
      style: `${h}: ${c / m}px; max-width: ${f / y}px`,
      class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
    };
  }
  function A0(n) {
    let t = n.addToOptions.slice();
    return n.icons && t.push({
      render(e) {
        let i = document.createElement("div");
        return i.classList.add("cm-completionIcon"), e.type && i.classList.add(...e.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)), i.setAttribute("aria-hidden", "true"), i;
      },
      position: 20
    }), t.push({
      render(e, i, s, r) {
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
      },
      position: 50
    }, {
      render(e) {
        if (!e.detail)
          return null;
        let i = document.createElement("span");
        return i.className = "cm-completionDetail", i.textContent = e.detail, i;
      },
      position: 80
    }), t.sort((e, i) => e.position - i.position).map((e) => e.render);
  }
  function tr(n, t, e) {
    if (n <= e)
      return {
        from: 0,
        to: n
      };
    if (t < 0 && (t = 0), t <= n >> 1) {
      let s = Math.floor(t / e);
      return {
        from: s * e,
        to: (s + 1) * e
      };
    }
    let i = Math.floor((n - t) / e);
    return {
      from: n - (i + 1) * e,
      to: n - i * e
    };
  }
  class M0 {
    constructor(t, e, i) {
      this.view = t, this.stateField = e, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
        read: () => this.measureInfo(),
        write: (a) => this.placeInfo(a),
        key: this
      }, this.space = null, this.currentClass = "";
      let s = t.state.field(e), { options: r, selected: o } = s.open, l = t.state.facet(nt);
      this.optionContent = A0(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = tr(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (a) => {
        let { options: h } = t.state.field(e).open;
        for (let c = a.target, f; c && c != this.dom; c = c.parentNode)
          if (c.nodeName == "LI" && (f = /-(\d+)$/.exec(c.id)) && +f[1] < h.length) {
            this.applyCompletion(t, h[+f[1]]), a.preventDefault();
            return;
          }
      }), this.dom.addEventListener("focusout", (a) => {
        let h = t.state.field(this.stateField, false);
        h && h.tooltip && t.state.facet(nt).closeOnBlur && a.relatedTarget != t.contentDOM && t.dispatch({
          effects: Yi.of(null)
        });
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
        (!s.open || s.open.options != r) && (this.range = tr(r.length, o, t.state.facet(nt).maxRenderedOptions), this.showOptions(r, i.id)), this.updateSel(), l != ((e = s.open) === null || e === void 0 ? void 0 : e.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
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
      if ((e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = tr(e.options.length, e.selected, this.view.state.facet(nt).maxRenderedOptions), this.showOptions(e.options, t.id)), this.updateSelectedOption(e.selected)) {
        this.destroyInfo();
        let { completion: i } = e.options[e.selected], { info: s } = i;
        if (!s)
          return;
        let r = typeof s == "string" ? document.createTextNode(s) : s(i);
        if (!r)
          return;
        "then" in r ? r.then((o) => {
          o && this.view.state.field(this.stateField, false) == t && this.addInfoPane(o, i);
        }).catch((o) => Ct(this.view.state, o, "completion info")) : this.addInfoPane(r, i);
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
      return e && O0(this.list, e), e;
    }
    measureInfo() {
      let t = this.dom.querySelector("[aria-selected]");
      if (!t || !this.info)
        return null;
      let e = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), s = t.getBoundingClientRect(), r = this.space;
      if (!r) {
        let o = this.dom.ownerDocument.documentElement;
        r = {
          left: 0,
          top: 0,
          right: o.clientWidth,
          bottom: o.clientHeight
        };
      }
      return s.top > Math.min(r.bottom, e.bottom) - 10 || s.bottom < Math.max(r.top, e.top) + 10 ? null : this.view.state.facet(nt).positionInfo(this.view, e, s, i, r, this.dom);
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
  function D0(n, t) {
    return (e) => new M0(e, n, t);
  }
  function O0(n, t) {
    let e = n.getBoundingClientRect(), i = t.getBoundingClientRect(), s = e.height / n.offsetHeight;
    i.top < e.top ? n.scrollTop -= (e.top - i.top) / s : i.bottom > e.bottom && (n.scrollTop += (i.bottom - e.bottom) / s);
  }
  function ca(n) {
    return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
  }
  function T0(n, t) {
    let e = [], i = null, s = (h) => {
      e.push(h);
      let { section: c } = h.completion;
      if (c) {
        i || (i = []);
        let f = typeof c == "string" ? c : c.name;
        i.some((u) => u.name == f) || i.push(typeof c == "string" ? {
          name: f
        } : c);
      }
    }, r = t.facet(nt);
    for (let h of n)
      if (h.hasResult()) {
        let c = h.result.getMatch;
        if (h.result.filter === false)
          for (let f of h.result.options)
            s(new la(f, h.source, c ? c(f) : [], 1e9 - e.length));
        else {
          let f = t.sliceDoc(h.from, h.to), u, d = r.filterStrict ? new S0(f) : new k0(f);
          for (let p of h.result.options)
            if (u = d.match(p.label)) {
              let g = p.displayLabel ? c ? c(p, u.matched) : [] : u.matched;
              s(new la(p, h.source, g, u.score + (p.boost || 0)));
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
      !l || l.label != c.label || l.detail != c.detail || l.type != null && c.type != null && l.type != c.type || l.apply != c.apply || l.boost != c.boost ? o.push(h) : ca(h.completion) > ca(l) && (o[o.length - 1] = h), l = h.completion;
    }
    return o;
  }
  class ei {
    constructor(t, e, i, s, r, o) {
      this.options = t, this.attrs = e, this.tooltip = i, this.timestamp = s, this.selected = r, this.disabled = o;
    }
    setSelected(t, e) {
      return t == this.selected || t >= this.options.length ? this : new ei(this.options, fa(e, t), this.tooltip, this.timestamp, t, this.disabled);
    }
    static build(t, e, i, s, r, o) {
      if (s && !o && t.some((h) => h.isPending))
        return s.setDisabled();
      let l = T0(t, e);
      if (!l.length)
        return s && t.some((h) => h.isPending) ? s.setDisabled() : null;
      let a = e.facet(nt).selectOnOpen ? 0 : -1;
      if (s && s.selected != a && s.selected != -1) {
        let h = s.options[s.selected].completion;
        for (let c = 0; c < l.length; c++)
          if (l[c].completion == h) {
            a = c;
            break;
          }
      }
      return new ei(l, fa(i, a), {
        pos: t.reduce((h, c) => c.hasResult() ? Math.min(h, c.from) : h, 1e8),
        create: _0,
        above: r.aboveCursor
      }, s ? s.timestamp : Date.now(), a, false);
    }
    map(t) {
      return new ei(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), {
        pos: t.mapPos(this.tooltip.pos)
      }), this.timestamp, this.selected, this.disabled);
    }
    setDisabled() {
      return new ei(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
    }
  }
  class ps {
    constructor(t, e, i) {
      this.active = t, this.id = e, this.open = i;
    }
    static start() {
      return new ps(L0, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
    }
    update(t) {
      let { state: e } = t, i = e.facet(nt), r = (i.override || e.languageDataAt("autocomplete", We(e)).map(v0)).map((a) => (this.active.find((c) => c.source == a) || new _t(a, this.active.some((c) => c.state != 0) ? 1 : 0)).update(t, i));
      r.length == this.active.length && r.every((a, h) => a == this.active[h]) && (r = this.active);
      let o = this.open, l = t.effects.some((a) => a.is(Oo));
      o && t.docChanged && (o = o.map(t.changes)), t.selection || r.some((a) => a.hasResult() && t.changes.touchesRange(a.from, a.to)) || !B0(r, this.active) || l ? o = ei.build(r, e, this.id, o, i, l) : o && o.disabled && !r.some((a) => a.isPending) && (o = null), !o && r.every((a) => !a.isPending) && r.some((a) => a.hasResult()) && (r = r.map((a) => a.hasResult() ? new _t(a.source, 0) : a));
      for (let a of t.effects)
        a.is(nf) && (o = o && o.setSelected(a.value, this.id));
      return r == this.active && o == this.open ? this : new ps(r, this.id, o);
    }
    get tooltip() {
      return this.open ? this.open.tooltip : null;
    }
    get attrs() {
      return this.open ? this.open.attrs : this.active.length ? E0 : R0;
    }
  }
  function B0(n, t) {
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
  const E0 = {
    "aria-autocomplete": "list"
  }, R0 = {};
  function fa(n, t) {
    let e = {
      "aria-autocomplete": "list",
      "aria-haspopup": "listbox",
      "aria-controls": n
    };
    return t > -1 && (e["aria-activedescendant"] = n + "-" + t), e;
  }
  const L0 = [];
  function ef(n, t) {
    if (n.isUserEvent("input.complete")) {
      let i = n.annotation(tf);
      if (i && t.activateOnCompletion(i))
        return 12;
    }
    let e = n.isUserEvent("input.type");
    return e && t.activateOnTyping ? 5 : e ? 1 : n.isUserEvent("delete.backward") ? 2 : n.selection ? 8 : n.docChanged ? 16 : 0;
  }
  class _t {
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
      let i = ef(t, e), s = this;
      (i & 8 || i & 16 && this.touches(t)) && (s = new _t(s.source, 0)), i & 4 && s.state == 0 && (s = new _t(this.source, 1)), s = s.updateFor(t, i);
      for (let r of t.effects)
        if (r.is(ds))
          s = new _t(s.source, 1, r.value);
        else if (r.is(Yi))
          s = new _t(s.source, 0);
        else if (r.is(Oo))
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
      return t.changes.touchesRange(We(t.state));
    }
  }
  class li extends _t {
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
      let r = t.changes.mapPos(this.from), o = t.changes.mapPos(this.to, 1), l = We(t.state);
      if (l > o || !s || e & 2 && (We(t.startState) == this.from || l < this.limit))
        return new _t(this.source, e & 4 ? 1 : 0);
      let a = t.changes.mapPos(this.limit);
      return P0(s.validFor, t.state, r, o) ? new li(this.source, this.explicit, a, s, r, o) : s.update && (s = s.update(s, r, o, new Qc(t.state, l, false))) ? new li(this.source, this.explicit, a, s, s.from, (i = s.to) !== null && i !== void 0 ? i : We(t.state)) : new _t(this.source, 1, this.explicit);
    }
    map(t) {
      return t.empty ? this : (this.result.map ? this.result.map(this.result, t) : this.result) ? new li(this.source, this.explicit, t.mapPos(this.limit), this.result, t.mapPos(this.from), t.mapPos(this.to, 1)) : new _t(this.source, 0);
    }
    touches(t) {
      return t.changes.touchesRange(this.from, this.to);
    }
  }
  function P0(n, t, e, i) {
    if (!n)
      return false;
    let s = t.sliceDoc(e, i);
    return typeof n == "function" ? n(s, e, i, t) : Zc(n, true).test(s);
  }
  const Oo = L.define({
    map(n, t) {
      return n.map((e) => e.map(t));
    }
  }), nf = L.define(), St = ct.define({
    create() {
      return ps.start();
    },
    update(n, t) {
      return n.update(t);
    },
    provide: (n) => [
      po.from(n, (t) => t.tooltip),
      D.contentAttributes.from(n, (t) => t.attrs)
    ]
  });
  function To(n, t) {
    const e = t.completion.apply || t.completion.label;
    let i = n.state.field(St).active.find((s) => s.source == t.source);
    return i instanceof li ? (typeof e == "string" ? n.dispatch(Object.assign(Object.assign({}, x0(n.state, e, i.from, i.to)), {
      annotations: tf.of(t.completion)
    })) : e(n, t.completion, i.from, i.to), true) : false;
  }
  const _0 = D0(St, To);
  function Bn(n, t = "option") {
    return (e) => {
      let i = e.state.field(St, false);
      if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < e.state.facet(nt).interactionDelay)
        return false;
      let s = 1, r;
      t == "page" && (r = qh(e, i.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
      let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + s * (n ? 1 : -1) : n ? 0 : o - 1;
      return l < 0 ? l = t == "page" ? 0 : o - 1 : l >= o && (l = t == "page" ? o - 1 : 0), e.dispatch({
        effects: nf.of(l)
      }), true;
    };
  }
  const I0 = (n) => {
    let t = n.state.field(St, false);
    return n.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < n.state.facet(nt).interactionDelay ? false : To(n, t.open.options[t.open.selected]);
  }, ua = (n) => n.state.field(St, false) ? (n.dispatch({
    effects: ds.of(true)
  }), true) : false, N0 = (n) => {
    let t = n.state.field(St, false);
    return !t || !t.active.some((e) => e.state != 0) ? false : (n.dispatch({
      effects: Yi.of(null)
    }), true);
  };
  class F0 {
    constructor(t, e) {
      this.active = t, this.context = e, this.time = Date.now(), this.updates = [], this.done = void 0;
    }
  }
  const H0 = 50, W0 = 1e3, V0 = Q.fromClass(class {
    constructor(n) {
      this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0;
      for (let t of n.state.field(St).active)
        t.isPending && this.startQuery(t);
    }
    update(n) {
      let t = n.state.field(St), e = n.state.facet(nt);
      if (!n.selectionSet && !n.docChanged && n.startState.field(St) == t)
        return;
      let i = n.transactions.some((r) => {
        let o = ef(r, e);
        return o & 8 || (r.selection || r.docChanged) && !(o & 3);
      });
      for (let r = 0; r < this.running.length; r++) {
        let o = this.running[r];
        if (i || o.context.abortOnDocChange && n.docChanged || o.updates.length + n.transactions.length > H0 && Date.now() - o.time > W0) {
          for (let l of o.context.abortListeners)
            try {
              l();
            } catch (a) {
              Ct(this.view.state, a);
            }
          o.context.abortListeners = null, this.running.splice(r--, 1);
        } else
          o.updates.push(...n.transactions);
      }
      this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), n.transactions.some((r) => r.effects.some((o) => o.is(ds))) && (this.pendingStart = true);
      let s = this.pendingStart ? 50 : e.activateOnTypingDelay;
      if (this.debounceUpdate = t.active.some((r) => r.isPending && !this.running.some((o) => o.active.source == r.source)) ? setTimeout(() => this.startUpdate(), s) : -1, this.composing != 0)
        for (let r of n.transactions)
          r.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
    }
    startUpdate() {
      this.debounceUpdate = -1, this.pendingStart = false;
      let { state: n } = this.view, t = n.field(St);
      for (let e of t.active)
        e.isPending && !this.running.some((i) => i.active.source == e.source) && this.startQuery(e);
      this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(nt).updateSyncTime));
    }
    startQuery(n) {
      let { state: t } = this.view, e = We(t), i = new Qc(t, e, n.explicit, this.view), s = new F0(n, i);
      this.running.push(s), Promise.resolve(n.source(i)).then((r) => {
        s.context.aborted || (s.done = r || null, this.scheduleAccept());
      }, (r) => {
        this.view.dispatch({
          effects: Yi.of(null)
        }), Ct(this.view.state, r);
      });
    }
    scheduleAccept() {
      this.running.every((n) => n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(nt).updateSyncTime));
    }
    accept() {
      var n;
      this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
      let t = [], e = this.view.state.facet(nt), i = this.view.state.field(St);
      for (let s = 0; s < this.running.length; s++) {
        let r = this.running[s];
        if (r.done === void 0)
          continue;
        if (this.running.splice(s--, 1), r.done) {
          let l = We(r.updates.length ? r.updates[0].startState : this.view.state), a = Math.min(l, r.done.from + (r.active.explicit ? 0 : 1)), h = new li(r.active.source, r.active.explicit, a, r.done, r.done.from, (n = r.done.to) !== null && n !== void 0 ? n : l);
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
            let l = new _t(r.active.source, 0);
            for (let a of r.updates)
              l = l.update(a, e);
            l.isPending || t.push(l);
          } else
            this.startQuery(o);
      }
      (t.length || i.open && i.open.disabled) && this.view.dispatch({
        effects: Oo.of(t)
      });
    }
  }, {
    eventHandlers: {
      blur(n) {
        let t = this.view.state.field(St, false);
        if (t && t.tooltip && this.view.state.facet(nt).closeOnBlur) {
          let e = t.open && qh(this.view, t.open.tooltip);
          (!e || !e.dom.contains(n.relatedTarget)) && setTimeout(() => this.view.dispatch({
            effects: Yi.of(null)
          }), 10);
        }
      },
      compositionstart() {
        this.composing = 1;
      },
      compositionend() {
        this.composing == 3 && setTimeout(() => this.view.dispatch({
          effects: ds.of(false)
        }), 20), this.composing = 0;
      }
    }
  }), z0 = typeof navigator == "object" && /Win/.test(navigator.platform), q0 = Ke.highest(D.domEventHandlers({
    keydown(n, t) {
      let e = t.state.field(St, false);
      if (!e || !e.open || e.open.disabled || e.open.selected < 0 || n.key.length > 1 || n.ctrlKey && !(z0 && n.altKey) || n.metaKey)
        return false;
      let i = e.open.options[e.open.selected], s = e.active.find((o) => o.source == i.source), r = i.completion.commitCharacters || s.result.commitCharacters;
      return r && r.indexOf(n.key) > -1 && To(t, i), false;
    }
  })), $0 = D.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
      "& > ul": {
        fontFamily: "monospace",
        whiteSpace: "nowrap",
        overflow: "hidden auto",
        maxWidth_fallback: "700px",
        maxWidth: "min(700px, 95vw)",
        minWidth: "250px",
        maxHeight: "10em",
        height: "100%",
        listStyle: "none",
        margin: 0,
        padding: 0,
        "& > li, & > completion-section": {
          padding: "1px 3px",
          lineHeight: 1.2
        },
        "& > li": {
          overflowX: "hidden",
          textOverflow: "ellipsis",
          cursor: "pointer"
        },
        "& > completion-section": {
          display: "list-item",
          borderBottom: "1px solid silver",
          paddingLeft: "0.5em",
          opacity: 0.7
        }
      }
    },
    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#17c",
      color: "white"
    },
    "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: "#777"
    },
    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#347",
      color: "white"
    },
    "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: "#444"
    },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
      content: '"\xB7\xB7\xB7"',
      opacity: 0.5,
      display: "block",
      textAlign: "center"
    },
    ".cm-tooltip.cm-completionInfo": {
      position: "absolute",
      padding: "3px 9px",
      width: "max-content",
      maxWidth: "400px",
      boxSizing: "border-box",
      whiteSpace: "pre-line"
    },
    ".cm-completionInfo.cm-completionInfo-left": {
      right: "100%"
    },
    ".cm-completionInfo.cm-completionInfo-right": {
      left: "100%"
    },
    ".cm-completionInfo.cm-completionInfo-left-narrow": {
      right: "30px"
    },
    ".cm-completionInfo.cm-completionInfo-right-narrow": {
      left: "30px"
    },
    "&light .cm-snippetField": {
      backgroundColor: "#00000022"
    },
    "&dark .cm-snippetField": {
      backgroundColor: "#ffffff22"
    },
    ".cm-snippetFieldPosition": {
      verticalAlign: "text-top",
      width: 0,
      height: "1.15em",
      display: "inline-block",
      margin: "0 -0.7px -.7em",
      borderLeft: "1.4px dotted #888"
    },
    ".cm-completionMatchedText": {
      textDecoration: "underline"
    },
    ".cm-completionDetail": {
      marginLeft: "0.5em",
      fontStyle: "italic"
    },
    ".cm-completionIcon": {
      fontSize: "90%",
      width: ".8em",
      display: "inline-block",
      textAlign: "center",
      paddingRight: ".6em",
      opacity: "0.6",
      boxSizing: "content-box"
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
      "&:after": {
        content: "'\u0192'"
      }
    },
    ".cm-completionIcon-class": {
      "&:after": {
        content: "'\u25CB'"
      }
    },
    ".cm-completionIcon-interface": {
      "&:after": {
        content: "'\u25CC'"
      }
    },
    ".cm-completionIcon-variable": {
      "&:after": {
        content: "'\u{1D465}'"
      }
    },
    ".cm-completionIcon-constant": {
      "&:after": {
        content: "'\u{1D436}'"
      }
    },
    ".cm-completionIcon-type": {
      "&:after": {
        content: "'\u{1D461}'"
      }
    },
    ".cm-completionIcon-enum": {
      "&:after": {
        content: "'\u222A'"
      }
    },
    ".cm-completionIcon-property": {
      "&:after": {
        content: "'\u25A1'"
      }
    },
    ".cm-completionIcon-keyword": {
      "&:after": {
        content: "'\u{1F511}\uFE0E'"
      }
    },
    ".cm-completionIcon-namespace": {
      "&:after": {
        content: "'\u25A2'"
      }
    },
    ".cm-completionIcon-text": {
      "&:after": {
        content: "'abc'",
        fontSize: "50%",
        verticalAlign: "middle"
      }
    }
  }), Ji = {
    brackets: [
      "(",
      "[",
      "{",
      "'",
      '"'
    ],
    before: ")]}:;>",
    stringPrefixes: []
  }, Fe = L.define({
    map(n, t) {
      let e = t.mapPos(n, -1, bt.TrackAfter);
      return e ?? void 0;
    }
  }), Bo = new class extends Ve {
  }();
  Bo.startSide = 1;
  Bo.endSide = -1;
  const sf = ct.define({
    create() {
      return H.empty;
    },
    update(n, t) {
      if (n = n.map(t.changes), t.selection) {
        let e = t.state.doc.lineAt(t.selection.main.head);
        n = n.update({
          filter: (i) => i >= e.from && i <= e.to
        });
      }
      for (let e of t.effects)
        e.is(Fe) && (n = n.update({
          add: [
            Bo.range(e.value, e.value + 1)
          ]
        }));
      return n;
    }
  });
  function j0() {
    return [
      U0,
      sf
    ];
  }
  const er = "()[]{}<>\xAB\xBB\xBB\xAB\uFF3B\uFF3D\uFF5B\uFF5D";
  function rf(n) {
    for (let t = 0; t < er.length; t += 2)
      if (er.charCodeAt(t) == n)
        return er.charAt(t + 1);
    return Qr(n < 128 ? n : n + 1);
  }
  function of(n, t) {
    return n.languageDataAt("closeBrackets", t)[0] || Ji;
  }
  const K0 = typeof navigator == "object" && /Android\b/.test(navigator.userAgent), U0 = D.inputHandler.of((n, t, e, i) => {
    if ((K0 ? n.composing : n.compositionStarted) || n.state.readOnly)
      return false;
    let s = n.state.selection.main;
    if (i.length > 2 || i.length == 2 && Xt(vt(i, 0)) == 1 || t != s.from || e != s.to)
      return false;
    let r = J0(n.state, i);
    return r ? (n.dispatch(r), true) : false;
  }), G0 = ({ state: n, dispatch: t }) => {
    if (n.readOnly)
      return false;
    let i = of(n, n.selection.main.head).brackets || Ji.brackets, s = null, r = n.changeByRange((o) => {
      if (o.empty) {
        let l = X0(n.doc, o.head);
        for (let a of i)
          if (a == l && Ds(n.doc, o.head) == rf(vt(a, 0)))
            return {
              changes: {
                from: o.head - a.length,
                to: o.head + a.length
              },
              range: b.cursor(o.head - a.length)
            };
      }
      return {
        range: s = o
      };
    });
    return s || t(n.update(r, {
      scrollIntoView: true,
      userEvent: "delete.backward"
    })), !s;
  }, Y0 = [
    {
      key: "Backspace",
      run: G0
    }
  ];
  function J0(n, t) {
    let e = of(n, n.selection.main.head), i = e.brackets || Ji.brackets;
    for (let s of i) {
      let r = rf(vt(s, 0));
      if (t == s)
        return r == s ? ty(n, s, i.indexOf(s + s + s) > -1, e) : Q0(n, s, r, e.before || Ji.before);
      if (t == r && lf(n, n.selection.main.from))
        return Z0(n, s, r);
    }
    return null;
  }
  function lf(n, t) {
    let e = false;
    return n.field(sf).between(0, n.doc.length, (i) => {
      i == t && (e = true);
    }), e;
  }
  function Ds(n, t) {
    let e = n.sliceString(t, t + 2);
    return e.slice(0, Xt(vt(e, 0)));
  }
  function X0(n, t) {
    let e = n.sliceString(t - 2, t);
    return Xt(vt(e, 0)) == e.length ? e : e.slice(1);
  }
  function Q0(n, t, e, i) {
    let s = null, r = n.changeByRange((o) => {
      if (!o.empty)
        return {
          changes: [
            {
              insert: t,
              from: o.from
            },
            {
              insert: e,
              from: o.to
            }
          ],
          effects: Fe.of(o.to + t.length),
          range: b.range(o.anchor + t.length, o.head + t.length)
        };
      let l = Ds(n.doc, o.head);
      return !l || /\s/.test(l) || i.indexOf(l) > -1 ? {
        changes: {
          insert: t + e,
          from: o.head
        },
        effects: Fe.of(o.head + t.length),
        range: b.cursor(o.head + t.length)
      } : {
        range: s = o
      };
    });
    return s ? null : n.update(r, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
  function Z0(n, t, e) {
    let i = null, s = n.changeByRange((r) => r.empty && Ds(n.doc, r.head) == e ? {
      changes: {
        from: r.head,
        to: r.head + e.length,
        insert: e
      },
      range: b.cursor(r.head + e.length)
    } : i = {
      range: r
    });
    return i ? null : n.update(s, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
  function ty(n, t, e, i) {
    let s = i.stringPrefixes || Ji.stringPrefixes, r = null, o = n.changeByRange((l) => {
      if (!l.empty)
        return {
          changes: [
            {
              insert: t,
              from: l.from
            },
            {
              insert: t,
              from: l.to
            }
          ],
          effects: Fe.of(l.to + t.length),
          range: b.range(l.anchor + t.length, l.head + t.length)
        };
      let a = l.head, h = Ds(n.doc, a), c;
      if (h == t) {
        if (da(n, a))
          return {
            changes: {
              insert: t + t,
              from: a
            },
            effects: Fe.of(a + t.length),
            range: b.cursor(a + t.length)
          };
        if (lf(n, a)) {
          let u = e && n.sliceDoc(a, a + t.length * 3) == t + t + t ? t + t + t : t;
          return {
            changes: {
              from: a,
              to: a + u.length,
              insert: u
            },
            range: b.cursor(a + u.length)
          };
        }
      } else {
        if (e && n.sliceDoc(a - 2 * t.length, a) == t + t && (c = pa(n, a - 2 * t.length, s)) > -1 && da(n, c))
          return {
            changes: {
              insert: t + t + t + t,
              from: a
            },
            effects: Fe.of(a + t.length),
            range: b.cursor(a + t.length)
          };
        if (n.charCategorizer(a)(h) != J.Word && pa(n, a, s) > -1 && !ey(n, a, t, s))
          return {
            changes: {
              insert: t + t,
              from: a
            },
            effects: Fe.of(a + t.length),
            range: b.cursor(a + t.length)
          };
      }
      return {
        range: r = l
      };
    });
    return r ? null : n.update(o, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
  function da(n, t) {
    let e = pt(n).resolveInner(t + 1);
    return e.parent && e.from == t;
  }
  function ey(n, t, e, i) {
    let s = pt(n).resolveInner(t, -1), r = i.reduce((o, l) => Math.max(o, l.length), 0);
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
  function pa(n, t, e) {
    let i = n.charCategorizer(t);
    if (i(n.sliceDoc(t - 1, t)) != J.Word)
      return t;
    for (let s of e) {
      let r = t - s.length;
      if (n.sliceDoc(r, t) == s && i(n.sliceDoc(r - 1, r)) != J.Word)
        return r;
    }
    return -1;
  }
  function iy(n = {}) {
    return [
      q0,
      St,
      nt.of(n),
      V0,
      ny,
      $0
    ];
  }
  const af = [
    {
      key: "Ctrl-Space",
      run: ua
    },
    {
      mac: "Alt-`",
      run: ua
    },
    {
      key: "Escape",
      run: N0
    },
    {
      key: "ArrowDown",
      run: Bn(true)
    },
    {
      key: "ArrowUp",
      run: Bn(false)
    },
    {
      key: "PageDown",
      run: Bn(true, "page")
    },
    {
      key: "PageUp",
      run: Bn(false, "page")
    },
    {
      key: "Enter",
      run: I0
    }
  ], ny = Ke.highest(ys.computeN([
    nt
  ], (n) => n.facet(nt).defaultKeymap ? [
    af
  ] : []));
  class ga {
    constructor(t, e, i) {
      this.from = t, this.to = e, this.diagnostic = i;
    }
  }
  class Pe {
    constructor(t, e, i) {
      this.diagnostics = t, this.panel = e, this.selected = i;
    }
    static init(t, e, i) {
      let s = i.facet(Xi).markerFilter;
      s && (t = s(t, i));
      let r = t.slice().sort((c, f) => c.from - f.from || c.to - f.to), o = new fe(), l = [], a = 0;
      for (let c = 0; ; ) {
        let f = c == r.length ? null : r[c];
        if (!f && !l.length)
          break;
        let u, d;
        for (l.length ? (u = a, d = l.reduce((g, m) => Math.min(g, m.to), f && f.from > u ? f.from : 1e8)) : (u = f.from, d = f.to, l.push(f), c++); c < r.length; ) {
          let g = r[c];
          if (g.from == u && (g.to > g.from || g.to == u))
            l.push(g), c++, d = Math.min(g.to, d);
          else {
            d = Math.min(g.from, d);
            break;
          }
        }
        let p = my(l);
        if (l.some((g) => g.from == g.to || g.from == g.to - 1 && i.doc.lineAt(g.from).to == g.from))
          o.add(u, u, E.widget({
            widget: new uy(p),
            diagnostics: l.slice()
          }));
        else {
          let g = l.reduce((m, y) => y.markClass ? m + " " + y.markClass : m, "");
          o.add(u, d, E.mark({
            class: "cm-lintRange cm-lintRange-" + p + g,
            diagnostics: l.slice(),
            inclusiveEnd: l.some((m) => m.to > d)
          }));
        }
        a = d;
        for (let g = 0; g < l.length; g++)
          l[g].to <= a && l.splice(g--, 1);
      }
      let h = o.finish();
      return new Pe(h, e, mi(h));
    }
  }
  function mi(n, t = null, e = 0) {
    let i = null;
    return n.between(e, 1e9, (s, r, { spec: o }) => {
      if (!(t && o.diagnostics.indexOf(t) < 0))
        if (!i)
          i = new ga(s, r, t || o.diagnostics[0]);
        else {
          if (o.diagnostics.indexOf(i.diagnostic) < 0)
            return false;
          i = new ga(i.from, r, i.diagnostic);
        }
    }), i;
  }
  function sy(n, t) {
    let e = t.pos, i = t.end || e, s = n.state.facet(Xi).hideOn(n, e, i);
    if (s != null)
      return s;
    let r = n.startState.doc.lineAt(t.pos);
    return !!(n.effects.some((o) => o.is(hf)) || n.changes.touchesRange(r.from, Math.max(r.to, i)));
  }
  function ry(n, t) {
    return n.field(Bt, false) ? t : t.concat(L.appendConfig.of(yy));
  }
  const hf = L.define(), Eo = L.define(), cf = L.define(), Bt = ct.define({
    create() {
      return new Pe(E.none, null, null);
    },
    update(n, t) {
      if (t.docChanged && n.diagnostics.size) {
        let e = n.diagnostics.map(t.changes), i = null, s = n.panel;
        if (n.selected) {
          let r = t.changes.mapPos(n.selected.from, 1);
          i = mi(e, n.selected.diagnostic, r) || mi(e, null, r);
        }
        !e.size && s && t.state.facet(Xi).autoPanel && (s = null), n = new Pe(e, s, i);
      }
      for (let e of t.effects)
        if (e.is(hf)) {
          let i = t.state.facet(Xi).autoPanel ? e.value.length ? Qi.open : null : n.panel;
          n = Pe.init(e.value, i, t.state);
        } else
          e.is(Eo) ? n = new Pe(n.diagnostics, e.value ? Qi.open : null, n.selected) : e.is(cf) && (n = new Pe(n.diagnostics, n.panel, e.value));
      return n;
    },
    provide: (n) => [
      ji.from(n, (t) => t.panel),
      D.decorations.from(n, (t) => t.diagnostics)
    ]
  }), oy = E.mark({
    class: "cm-lintRange cm-lintRange-active"
  });
  function ly(n, t, e) {
    let { diagnostics: i } = n.state.field(Bt), s, r = -1, o = -1;
    i.between(t - (e < 0 ? 1 : 0), t + (e > 0 ? 1 : 0), (a, h, { spec: c }) => {
      if (t >= a && t <= h && (a == h || (t > a || e > 0) && (t < h || e < 0)))
        return s = c.diagnostics, r = a, o = h, false;
    });
    let l = n.state.facet(Xi).tooltipFilter;
    return s && l && (s = l(s, n.state)), s ? {
      pos: r,
      end: o,
      above: n.state.doc.lineAt(r).to < o,
      create() {
        return {
          dom: ay(n, s)
        };
      }
    } : null;
  }
  function ay(n, t) {
    return $("ul", {
      class: "cm-tooltip-lint"
    }, t.map((e) => uf(n, e, false)));
  }
  const hy = (n) => {
    let t = n.state.field(Bt, false);
    (!t || !t.panel) && n.dispatch({
      effects: ry(n.state, [
        Eo.of(true)
      ])
    });
    let e = $i(n, Qi.open);
    return e && e.dom.querySelector(".cm-panel-lint ul").focus(), true;
  }, ma = (n) => {
    let t = n.state.field(Bt, false);
    return !t || !t.panel ? false : (n.dispatch({
      effects: Eo.of(false)
    }), true);
  }, cy = (n) => {
    let t = n.state.field(Bt, false);
    if (!t)
      return false;
    let e = n.state.selection.main, i = t.diagnostics.iter(e.to + 1);
    return !i.value && (i = t.diagnostics.iter(0), !i.value || i.from == e.from && i.to == e.to) ? false : (n.dispatch({
      selection: {
        anchor: i.from,
        head: i.to
      },
      scrollIntoView: true
    }), true);
  }, fy = [
    {
      key: "Mod-Shift-m",
      run: hy,
      preventDefault: true
    },
    {
      key: "F8",
      run: cy
    }
  ], Xi = T.define({
    combine(n) {
      return Object.assign({
        sources: n.map((t) => t.source).filter((t) => t != null)
      }, re(n.map((t) => t.config), {
        delay: 750,
        markerFilter: null,
        tooltipFilter: null,
        needsRefresh: null,
        hideOn: () => null
      }, {
        needsRefresh: (t, e) => t ? e ? (i) => t(i) || e(i) : t : e
      }));
    }
  });
  function ff(n) {
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
  function uf(n, t, e) {
    var i;
    let s = e ? ff(t.actions) : [];
    return $("li", {
      class: "cm-diagnostic cm-diagnostic-" + t.severity
    }, $("span", {
      class: "cm-diagnosticText"
    }, t.renderMessage ? t.renderMessage(n) : t.message), (i = t.actions) === null || i === void 0 ? void 0 : i.map((r, o) => {
      let l = false, a = (u) => {
        if (u.preventDefault(), l)
          return;
        l = true;
        let d = mi(n.state.field(Bt).diagnostics, t);
        d && r.apply(n, d.from, d.to);
      }, { name: h } = r, c = s[o] ? h.indexOf(s[o]) : -1, f = c < 0 ? h : [
        h.slice(0, c),
        $("u", h.slice(c, c + 1)),
        h.slice(c + 1)
      ];
      return $("button", {
        type: "button",
        class: "cm-diagnosticAction",
        onclick: a,
        onmousedown: a,
        "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${s[o]})"`}.`
      }, f);
    }), t.source && $("div", {
      class: "cm-diagnosticSource"
    }, t.source));
  }
  class uy extends ge {
    constructor(t) {
      super(), this.sev = t;
    }
    eq(t) {
      return t.sev == this.sev;
    }
    toDOM() {
      return $("span", {
        class: "cm-lintPoint cm-lintPoint-" + this.sev
      });
    }
  }
  class ya {
    constructor(t, e) {
      this.diagnostic = e, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = uf(t, e, true), this.dom.id = this.id, this.dom.setAttribute("role", "option");
    }
  }
  class Qi {
    constructor(t) {
      this.view = t, this.items = [];
      let e = (s) => {
        if (s.keyCode == 27)
          ma(this.view), this.view.focus();
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
          let { diagnostic: r } = this.items[this.selectedIndex], o = ff(r.actions);
          for (let l = 0; l < o.length; l++)
            if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
              let a = mi(this.view.state.field(Bt).diagnostics, r);
              a && r.actions[l].apply(t, a.from, a.to);
            }
        } else
          return;
        s.preventDefault();
      }, i = (s) => {
        for (let r = 0; r < this.items.length; r++)
          this.items[r].dom.contains(s.target) && this.moveSelection(r);
      };
      this.list = $("ul", {
        tabIndex: 0,
        role: "listbox",
        "aria-label": this.view.state.phrase("Diagnostics"),
        onkeydown: e,
        onclick: i
      }), this.dom = $("div", {
        class: "cm-panel-lint"
      }, this.list, $("button", {
        type: "button",
        name: "close",
        "aria-label": this.view.state.phrase("close"),
        onclick: () => ma(this.view)
      }, "\xD7")), this.update();
    }
    get selectedIndex() {
      let t = this.view.state.field(Bt).selected;
      if (!t)
        return -1;
      for (let e = 0; e < this.items.length; e++)
        if (this.items[e].diagnostic == t.diagnostic)
          return e;
      return -1;
    }
    update() {
      let { diagnostics: t, selected: e } = this.view.state.field(Bt), i = 0, s = false, r = null, o = /* @__PURE__ */ new Set();
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
          f < 0 ? (u = new ya(this.view, c), this.items.splice(i, 0, u), s = true) : (u = this.items[f], f > i && (this.items.splice(i, f - i), s = true)), e && u.diagnostic == e.diagnostic ? u.dom.hasAttribute("aria-selected") || (u.dom.setAttribute("aria-selected", "true"), r = u) : u.dom.hasAttribute("aria-selected") && u.dom.removeAttribute("aria-selected"), i++;
        }
      }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
        s = true, this.items.pop();
      this.items.length == 0 && (this.items.push(new ya(this.view, {
        from: -1,
        to: -1,
        severity: "info",
        message: this.view.state.phrase("No diagnostics")
      })), s = true), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({
        key: this,
        read: () => ({
          sel: r.dom.getBoundingClientRect(),
          panel: this.list.getBoundingClientRect()
        }),
        write: ({ sel: l, panel: a }) => {
          let h = a.height / this.list.offsetHeight;
          l.top < a.top ? this.list.scrollTop -= (a.top - l.top) / h : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / h);
        }
      })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s && this.sync();
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
      let e = this.view.state.field(Bt), i = mi(e.diagnostics, this.items[t].diagnostic);
      i && this.view.dispatch({
        selection: {
          anchor: i.from,
          head: i.to
        },
        scrollIntoView: true,
        effects: cf.of(i)
      });
    }
    static open(t) {
      return new Qi(t);
    }
  }
  function dy(n, t = 'viewBox="0 0 40 40"') {
    return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(n)}</svg>')`;
  }
  function En(n) {
    return dy(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
  }
  const py = D.baseTheme({
    ".cm-diagnostic": {
      padding: "3px 6px 3px 8px",
      marginLeft: "-1px",
      display: "block",
      whiteSpace: "pre-wrap"
    },
    ".cm-diagnostic-error": {
      borderLeft: "5px solid #d11"
    },
    ".cm-diagnostic-warning": {
      borderLeft: "5px solid orange"
    },
    ".cm-diagnostic-info": {
      borderLeft: "5px solid #999"
    },
    ".cm-diagnostic-hint": {
      borderLeft: "5px solid #66d"
    },
    ".cm-diagnosticAction": {
      font: "inherit",
      border: "none",
      padding: "2px 4px",
      backgroundColor: "#444",
      color: "white",
      borderRadius: "3px",
      marginLeft: "8px",
      cursor: "pointer"
    },
    ".cm-diagnosticSource": {
      fontSize: "70%",
      opacity: 0.7
    },
    ".cm-lintRange": {
      backgroundPosition: "left bottom",
      backgroundRepeat: "repeat-x",
      paddingBottom: "0.7px"
    },
    ".cm-lintRange-error": {
      backgroundImage: En("#d11")
    },
    ".cm-lintRange-warning": {
      backgroundImage: En("orange")
    },
    ".cm-lintRange-info": {
      backgroundImage: En("#999")
    },
    ".cm-lintRange-hint": {
      backgroundImage: En("#66d")
    },
    ".cm-lintRange-active": {
      backgroundColor: "#ffdd9980"
    },
    ".cm-tooltip-lint": {
      padding: 0,
      margin: 0
    },
    ".cm-lintPoint": {
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "-2px",
        borderLeft: "3px solid transparent",
        borderRight: "3px solid transparent",
        borderBottom: "4px solid #d11"
      }
    },
    ".cm-lintPoint-warning": {
      "&:after": {
        borderBottomColor: "orange"
      }
    },
    ".cm-lintPoint-info": {
      "&:after": {
        borderBottomColor: "#999"
      }
    },
    ".cm-lintPoint-hint": {
      "&:after": {
        borderBottomColor: "#66d"
      }
    },
    ".cm-panel.cm-panel-lint": {
      position: "relative",
      "& ul": {
        maxHeight: "100px",
        overflowY: "auto",
        "& [aria-selected]": {
          backgroundColor: "#ddd",
          "& u": {
            textDecoration: "underline"
          }
        },
        "&:focus [aria-selected]": {
          background_fallback: "#bdf",
          backgroundColor: "Highlight",
          color_fallback: "white",
          color: "HighlightText"
        },
        "& u": {
          textDecoration: "none"
        },
        padding: 0,
        margin: 0
      },
      "& [name=close]": {
        position: "absolute",
        top: "0",
        right: "2px",
        background: "inherit",
        border: "none",
        font: "inherit",
        padding: 0,
        margin: 0
      }
    }
  });
  function gy(n) {
    return n == "error" ? 4 : n == "warning" ? 3 : n == "info" ? 2 : 1;
  }
  function my(n) {
    let t = "hint", e = 1;
    for (let i of n) {
      let s = gy(i.severity);
      s > e && (e = s, t = i.severity);
    }
    return t;
  }
  const yy = [
    Bt,
    D.decorations.compute([
      Bt
    ], (n) => {
      let { selected: t, panel: e } = n.field(Bt);
      return !t || !e || t.from == t.to ? E.none : E.set([
        oy.range(t.from, t.to)
      ]);
    }),
    hp(ly, {
      hideOn: sy
    }),
    py
  ], by = (() => [
    xp(),
    Sp(),
    Fd(),
    qg(),
    gg(),
    Dd(),
    Rd(),
    I.allowMultipleSelections.of(true),
    eg(),
    yg(xg, {
      fallback: true
    }),
    Dg(),
    j0(),
    iy(),
    Qd(),
    ep(),
    $d(),
    Ym(),
    ys.of([
      ...Y0,
      ...qm,
      ...p0,
      ...Qg,
      ...fg,
      ...af,
      ...fy
    ])
  ])();
  var wy = Object.freeze({
    autofocus: false,
    disabled: false,
    indentWithTab: true,
    tabSize: 2,
    placeholder: "",
    autoDestroy: true,
    extensions: [
      by
    ]
  }), xy = Symbol("vue-codemirror-global-config"), yt, vy = function(n) {
    var t = n.onUpdate, e = n.onChange, i = n.onFocus, s = n.onBlur, r = function(o, l) {
      var a = {};
      for (var h in o)
        Object.prototype.hasOwnProperty.call(o, h) && l.indexOf(h) < 0 && (a[h] = o[h]);
      if (o != null && typeof Object.getOwnPropertySymbols == "function") {
        var c = 0;
        for (h = Object.getOwnPropertySymbols(o); c < h.length; c++)
          l.indexOf(h[c]) < 0 && Object.prototype.propertyIsEnumerable.call(o, h[c]) && (a[h[c]] = o[h[c]]);
      }
      return a;
    }(n, [
      "onUpdate",
      "onChange",
      "onFocus",
      "onBlur"
    ]);
    return I.create({
      doc: r.doc,
      selection: r.selection,
      extensions: (Array.isArray(r.extensions) ? r.extensions : [
        r.extensions
      ]).concat([
        D.updateListener.of(function(o) {
          t(o), o.docChanged && e(o.state.doc.toString(), o), o.focusChanged && (o.view.hasFocus ? i(o) : s(o));
        })
      ])
    });
  }, Qe = function(n) {
    var t = new Zi();
    return {
      compartment: t,
      run: function(e) {
        t.get(n.state) ? n.dispatch({
          effects: t.reconfigure(e)
        }) : n.dispatch({
          effects: L.appendConfig.of(t.of(e))
        });
      }
    };
  }, ba = function(n, t) {
    var e = Qe(n), i = e.compartment, s = e.run;
    return function(r) {
      var o = i.get(n.state);
      s(r ?? o !== t ? t : []);
    };
  }, Rn = {
    type: Boolean,
    default: void 0
  }, ky = {
    autofocus: Rn,
    disabled: Rn,
    indentWithTab: Rn,
    tabSize: Number,
    placeholder: String,
    style: Object,
    autoDestroy: Rn,
    phrases: Object,
    root: Object,
    extensions: Array,
    selection: Object
  }, Sy = {
    modelValue: {
      type: String,
      default: ""
    }
  }, Cy = Object.assign(Object.assign({}, ky), Sy);
  (function(n) {
    n.Change = "change", n.Update = "update", n.Focus = "focus", n.Blur = "blur", n.Ready = "ready", n.ModelUpdate = "update:modelValue";
  })(yt || (yt = {}));
  var _e = {};
  _e[yt.Change] = function(n, t) {
    return true;
  }, _e[yt.Update] = function(n) {
    return true;
  }, _e[yt.Focus] = function(n) {
    return true;
  }, _e[yt.Blur] = function(n) {
    return true;
  }, _e[yt.Ready] = function(n) {
    return true;
  };
  var df = {};
  df[yt.ModelUpdate] = _e[yt.Change];
  let Ay, My;
  Ay = Object.assign(Object.assign({}, _e), df);
  My = yf({
    name: "VueCodemirror",
    props: Object.assign({}, Cy),
    emits: Object.assign({}, Ay),
    setup: function(n, t) {
      var e = Bs(), i = Bs(), s = Bs(), r = Object.assign(Object.assign({}, wy), bf(xy, {})), o = wf(function() {
        var l = {};
        return Object.keys(Sf(n)).forEach(function(a) {
          var h;
          a !== "modelValue" && (l[a] = (h = n[a]) !== null && h !== void 0 ? h : r[a]);
        }), l;
      });
      return xf(function() {
        var l;
        i.value = vy({
          doc: n.modelValue,
          selection: o.value.selection,
          extensions: (l = r.extensions) !== null && l !== void 0 ? l : [],
          onFocus: function(h) {
            return t.emit(yt.Focus, h);
          },
          onBlur: function(h) {
            return t.emit(yt.Blur, h);
          },
          onUpdate: function(h) {
            return t.emit(yt.Update, h);
          },
          onChange: function(h, c) {
            h !== n.modelValue && (t.emit(yt.Change, h, c), t.emit(yt.ModelUpdate, h, c));
          }
        }), s.value = function(h) {
          return new D(Object.assign({}, h));
        }({
          state: i.value,
          parent: e.value,
          root: o.value.root
        });
        var a = function(h) {
          var c = function() {
            return h.state.doc.toString();
          }, f = Qe(h).run, u = ba(h, [
            D.editable.of(false),
            I.readOnly.of(true)
          ]), d = ba(h, ys.of([
            $m
          ])), p = Qe(h).run, g = Qe(h).run, m = Qe(h).run, y = Qe(h).run;
          return {
            focus: function() {
              return h.focus();
            },
            getDoc: c,
            setDoc: function(w) {
              w !== c() && h.dispatch({
                changes: {
                  from: 0,
                  to: h.state.doc.length,
                  insert: w
                }
              });
            },
            reExtensions: f,
            toggleDisabled: u,
            toggleIndentWithTab: d,
            setTabSize: function(w) {
              p([
                I.tabSize.of(w),
                ws.of(" ".repeat(w))
              ]);
            },
            setPhrases: function(w) {
              g([
                I.phrases.of(w)
              ]);
            },
            setPlaceholder: function(w) {
              m(Gd(w));
            },
            setStyle: function(w) {
              w === void 0 && (w = {}), y(D.theme({
                "&": Object.assign({}, w)
              }));
            }
          };
        }(s.value);
        me(function() {
          return n.modelValue;
        }, function(h) {
          h !== a.getDoc() && a.setDoc(h);
        }), me(function() {
          return n.extensions;
        }, function(h) {
          return a.reExtensions(h || []);
        }, {
          immediate: true
        }), me(function() {
          return o.value.disabled;
        }, function(h) {
          return a.toggleDisabled(h);
        }, {
          immediate: true
        }), me(function() {
          return o.value.indentWithTab;
        }, function(h) {
          return a.toggleIndentWithTab(h);
        }, {
          immediate: true
        }), me(function() {
          return o.value.tabSize;
        }, function(h) {
          return a.setTabSize(h);
        }, {
          immediate: true
        }), me(function() {
          return o.value.phrases;
        }, function(h) {
          return a.setPhrases(h || {});
        }, {
          immediate: true
        }), me(function() {
          return o.value.placeholder;
        }, function(h) {
          return a.setPlaceholder(h);
        }, {
          immediate: true
        }), me(function() {
          return o.value.style;
        }, function(h) {
          return a.setStyle(h);
        }, {
          immediate: true
        }), o.value.autofocus && a.focus(), t.emit(yt.Ready, {
          state: i.value,
          view: s.value,
          container: e.value
        });
      }), vf(function() {
        o.value.autoDestroy && s.value && function(l) {
          l.destroy();
        }(s.value);
      }), function() {
        return kf("div", {
          class: "v-codemirror",
          style: {
            display: "contents"
          },
          ref: e
        });
      };
    }
  });
  ub = My;
  const Dy = "/console/static/wasm/tiktoken_bg-bd1395a3.wasm", Oy = async (n = {}, t) => {
    let e;
    if (t.startsWith("data:")) {
      const i = t.replace(/^data:.*?base64,/, "");
      let s;
      if (typeof Buffer == "function" && typeof Buffer.from == "function")
        s = Buffer.from(i, "base64");
      else if (typeof atob == "function") {
        const r = atob(i);
        s = new Uint8Array(r.length);
        for (let o = 0; o < r.length; o++)
          s[o] = r.charCodeAt(o);
      } else
        throw new Error("Cannot decode base64-encoded data URL");
      e = await WebAssembly.instantiate(s, n);
    } else {
      const i = await fetch(t), s = i.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && s.startsWith("application/wasm"))
        e = await WebAssembly.instantiateStreaming(i, n);
      else {
        const r = await i.arrayBuffer();
        e = await WebAssembly.instantiate(r, n);
      }
    }
    return e.instance.exports;
  };
  let B;
  function Ty(n) {
    B = n;
  }
  const By = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let pf = new By("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  pf.decode();
  let Ln = null;
  function ai() {
    return (Ln === null || Ln.byteLength === 0) && (Ln = new Uint8Array(B.memory.buffer)), Ln;
  }
  function Os(n, t) {
    return n = n >>> 0, pf.decode(ai().subarray(n, n + t));
  }
  const he = new Array(128).fill(void 0);
  he.push(void 0, null, true, false);
  let Ni = he.length;
  function Zt(n) {
    Ni === he.length && he.push(he.length + 1);
    const t = Ni;
    return Ni = he[t], he[t] = n, t;
  }
  function gf(n, t) {
    try {
      return n.apply(this, t);
    } catch (e) {
      B.__wbindgen_export_0(Zt(e));
    }
  }
  function Ts(n) {
    return he[n];
  }
  function Ey(n) {
    n < 132 || (he[n] = Ni, Ni = n);
  }
  function ii(n) {
    const t = Ts(n);
    return Ey(n), t;
  }
  let Tt = 0;
  const Ry = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let jn = new Ry("utf-8");
  const Ly = typeof jn.encodeInto == "function" ? function(n, t) {
    return jn.encodeInto(n, t);
  } : function(n, t) {
    const e = jn.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    };
  };
  function Ie(n, t, e) {
    if (e === void 0) {
      const l = jn.encode(n), a = t(l.length, 1) >>> 0;
      return ai().subarray(a, a + l.length).set(l), Tt = l.length, a;
    }
    let i = n.length, s = t(i, 1) >>> 0;
    const r = ai();
    let o = 0;
    for (; o < i; o++) {
      const l = n.charCodeAt(o);
      if (l > 127)
        break;
      r[s + o] = l;
    }
    if (o !== i) {
      o !== 0 && (n = n.slice(o)), s = e(s, i, i = o + n.length * 3, 1) >>> 0;
      const l = ai().subarray(s + o, s + i), a = Ly(n, l);
      o += a.written, s = e(s, i, o, 1) >>> 0;
    }
    return Tt = o, s;
  }
  function Py(n) {
    return n == null;
  }
  let Ye = null;
  function Z() {
    return (Ye === null || Ye.buffer.detached === true || Ye.buffer.detached === void 0 && Ye.buffer !== B.memory.buffer) && (Ye = new DataView(B.memory.buffer)), Ye;
  }
  let Pn = null;
  function mf() {
    return (Pn === null || Pn.byteLength === 0) && (Pn = new Uint32Array(B.memory.buffer)), Pn;
  }
  function wa(n, t) {
    return n = n >>> 0, mf().subarray(n / 4, n / 4 + t);
  }
  function _y(n, t) {
    const e = t(n.length * 1, 1) >>> 0;
    return ai().set(n, e / 1), Tt = n.length, e;
  }
  function Iy(n, t) {
    const e = t(n.length * 4, 4) >>> 0;
    return mf().set(n, e / 4), Tt = n.length, e;
  }
  function xa(n, t) {
    return n = n >>> 0, ai().subarray(n / 1, n / 1 + t);
  }
  db = function(n, t) {
    if (B == null)
      throw new Error("tiktoken: WASM binary has not been propery initialized.");
    try {
      const r = B.__wbindgen_add_to_stack_pointer(-16), o = Ie(n, B.__wbindgen_export_1, B.__wbindgen_export_2), l = Tt;
      B.get_encoding(r, o, l, Zt(t));
      var e = Z().getInt32(r + 4 * 0, true), i = Z().getInt32(r + 4 * 1, true), s = Z().getInt32(r + 4 * 2, true);
      if (s)
        throw ii(i);
      return Ro.__wrap(e);
    } finally {
      B.__wbindgen_add_to_stack_pointer(16);
    }
  };
  const ir = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => B.__wbg_tiktoken_free(n >>> 0, 1));
  class Ro {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ro.prototype);
      return e.__wbg_ptr = t, ir.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ir.unregister(this), t;
    }
    free() {
      if (B == null)
        throw new Error("tiktoken: WASM binary has not been propery initialized.");
      const t = this.__destroy_into_raw();
      B.__wbg_tiktoken_free(t, 0);
    }
    constructor(t, e, i) {
      if (B == null)
        throw new Error("tiktoken: WASM binary has not been propery initialized.");
      const s = Ie(t, B.__wbindgen_export_1, B.__wbindgen_export_2), r = Tt, o = Ie(i, B.__wbindgen_export_1, B.__wbindgen_export_2), l = Tt, a = B.tiktoken_new(s, r, Zt(e), o, l);
      return this.__wbg_ptr = a >>> 0, ir.register(this, this.__wbg_ptr, this), this;
    }
    get name() {
      try {
        const i = B.__wbindgen_add_to_stack_pointer(-16);
        B.tiktoken_name(i, this.__wbg_ptr);
        var t = Z().getInt32(i + 4 * 0, true), e = Z().getInt32(i + 4 * 1, true);
        let s;
        return t !== 0 && (s = Os(t, e).slice(), B.__wbindgen_export_3(t, e * 1, 1)), s;
      } finally {
        B.__wbindgen_add_to_stack_pointer(16);
      }
    }
    encode(t, e, i) {
      if (B == null)
        throw new Error("tiktoken: WASM binary has not been propery initialized.");
      try {
        const h = B.__wbindgen_add_to_stack_pointer(-16), c = Ie(t, B.__wbindgen_export_1, B.__wbindgen_export_2), f = Tt;
        B.tiktoken_encode(h, this.__wbg_ptr, c, f, Zt(e), Zt(i));
        var s = Z().getInt32(h + 4 * 0, true), r = Z().getInt32(h + 4 * 1, true), o = Z().getInt32(h + 4 * 2, true), l = Z().getInt32(h + 4 * 3, true);
        if (l)
          throw ii(o);
        var a = wa(s, r).slice();
        return B.__wbindgen_export_3(s, r * 4, 4), a;
      } finally {
        B.__wbindgen_add_to_stack_pointer(16);
      }
    }
    encode_ordinary(t) {
      if (B == null)
        throw new Error("tiktoken: WASM binary has not been propery initialized.");
      try {
        const r = B.__wbindgen_add_to_stack_pointer(-16), o = Ie(t, B.__wbindgen_export_1, B.__wbindgen_export_2), l = Tt;
        B.tiktoken_encode_ordinary(r, this.__wbg_ptr, o, l);
        var e = Z().getInt32(r + 4 * 0, true), i = Z().getInt32(r + 4 * 1, true), s = wa(e, i).slice();
        return B.__wbindgen_export_3(e, i * 4, 4), s;
      } finally {
        B.__wbindgen_add_to_stack_pointer(16);
      }
    }
    encode_with_unstable(t, e, i) {
      if (B == null)
        throw new Error("tiktoken: WASM binary has not been propery initialized.");
      try {
        const l = B.__wbindgen_add_to_stack_pointer(-16), a = Ie(t, B.__wbindgen_export_1, B.__wbindgen_export_2), h = Tt;
        B.tiktoken_encode_with_unstable(l, this.__wbg_ptr, a, h, Zt(e), Zt(i));
        var s = Z().getInt32(l + 4 * 0, true), r = Z().getInt32(l + 4 * 1, true), o = Z().getInt32(l + 4 * 2, true);
        if (o)
          throw ii(r);
        return ii(s);
      } finally {
        B.__wbindgen_add_to_stack_pointer(16);
      }
    }
    encode_single_token(t) {
      if (B == null)
        throw new Error("tiktoken: WASM binary has not been propery initialized.");
      const e = _y(t, B.__wbindgen_export_1), i = Tt;
      return B.tiktoken_encode_single_token(this.__wbg_ptr, e, i) >>> 0;
    }
    decode(t) {
      if (B == null)
        throw new Error("tiktoken: WASM binary has not been propery initialized.");
      try {
        const r = B.__wbindgen_add_to_stack_pointer(-16), o = Iy(t, B.__wbindgen_export_1), l = Tt;
        B.tiktoken_decode(r, this.__wbg_ptr, o, l);
        var e = Z().getInt32(r + 4 * 0, true), i = Z().getInt32(r + 4 * 1, true), s = xa(e, i).slice();
        return B.__wbindgen_export_3(e, i * 1, 1), s;
      } finally {
        B.__wbindgen_add_to_stack_pointer(16);
      }
    }
    decode_single_token_bytes(t) {
      if (B == null)
        throw new Error("tiktoken: WASM binary has not been propery initialized.");
      try {
        const r = B.__wbindgen_add_to_stack_pointer(-16);
        B.tiktoken_decode_single_token_bytes(r, this.__wbg_ptr, t);
        var e = Z().getInt32(r + 4 * 0, true), i = Z().getInt32(r + 4 * 1, true), s = xa(e, i).slice();
        return B.__wbindgen_export_3(e, i * 1, 1), s;
      } finally {
        B.__wbindgen_add_to_stack_pointer(16);
      }
    }
    token_byte_values() {
      if (B == null)
        throw new Error("tiktoken: WASM binary has not been propery initialized.");
      const t = B.tiktoken_token_byte_values(this.__wbg_ptr);
      return ii(t);
    }
  }
  function Ny() {
    return gf(function(n, t) {
      const e = JSON.parse(Os(n, t));
      return Zt(e);
    }, arguments);
  }
  function Fy() {
    return gf(function(n) {
      const t = JSON.stringify(Ts(n));
      return Zt(t);
    }, arguments);
  }
  function Hy(n, t) {
    const e = new Error(Os(n, t));
    return Zt(e);
  }
  function Wy(n) {
    return Ts(n) === void 0;
  }
  function Vy(n) {
    ii(n);
  }
  function zy(n, t) {
    if (B == null)
      throw new Error("tiktoken: WASM binary has not been propery initialized.");
    const e = Ts(t), i = typeof e == "string" ? e : void 0;
    var s = Py(i) ? 0 : Ie(i, B.__wbindgen_export_1, B.__wbindgen_export_2), r = Tt;
    Z().setInt32(n + 4 * 1, r, true), Z().setInt32(n + 4 * 0, s, true);
  }
  function qy(n, t) {
    throw new Error(Os(n, t));
  }
  URL = globalThis.URL;
  const st = await Oy({
    "./tiktoken_bg.js": {
      __wbindgen_object_drop_ref: Vy,
      __wbindgen_is_undefined: Wy,
      __wbg_stringify_f7ed6987935b4a24: Fy,
      __wbindgen_string_get: zy,
      __wbindgen_error_new: Hy,
      __wbg_parse_def2e24ef1252aff: Ny,
      __wbindgen_throw: qy
    }
  }, Dy), $y = st.memory, jy = st.__wbg_tiktoken_free, Ky = st.tiktoken_new, Uy = st.tiktoken_name, Gy = st.tiktoken_encode, Yy = st.tiktoken_encode_ordinary, Jy = st.tiktoken_encode_with_unstable, Xy = st.tiktoken_encode_single_token, Qy = st.tiktoken_decode, Zy = st.tiktoken_decode_single_token_bytes, tb = st.tiktoken_token_byte_values, eb = st.get_encoding, ib = st.encoding_for_model, nb = st.__wbindgen_export_0, sb = st.__wbindgen_export_1, rb = st.__wbindgen_export_2, ob = st.__wbindgen_add_to_stack_pointer, lb = st.__wbindgen_export_3, ab = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_tiktoken_free: jy,
    __wbindgen_add_to_stack_pointer: ob,
    __wbindgen_export_0: nb,
    __wbindgen_export_1: sb,
    __wbindgen_export_2: rb,
    __wbindgen_export_3: lb,
    encoding_for_model: ib,
    get_encoding: eb,
    memory: $y,
    tiktoken_decode: Qy,
    tiktoken_decode_single_token_bytes: Zy,
    tiktoken_encode: Gy,
    tiktoken_encode_ordinary: Yy,
    tiktoken_encode_single_token: Xy,
    tiktoken_encode_with_unstable: Jy,
    tiktoken_name: Uy,
    tiktoken_new: Ky,
    tiktoken_token_byte_values: tb
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Ty(ab);
});
export {
  E as D,
  D as E,
  Pd as M,
  L as S,
  ub as T,
  Q as V,
  ge as W,
  __tla,
  ct as a,
  db as g,
  ys as k,
  po as s
};
