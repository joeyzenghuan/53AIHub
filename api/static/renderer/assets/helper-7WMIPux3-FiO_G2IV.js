var yn = { value: () => {
} };
function Vt() {
  for (var t2 = 0, n = arguments.length, e = {}, r; t2 < n; ++t2) {
    if (!(r = arguments[t2] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new W(e);
}
function W(t2) {
  this._ = t2;
}
function xn(t2, n) {
  return t2.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
W.prototype = Vt.prototype = {
  constructor: W,
  on: function(t2, n) {
    var e = this._, r = xn(t2 + "", e), i, s = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++s < o; )
        if ((i = (t2 = r[s]).type) && (i = vn(e[i], t2.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++s < o; )
      if (i = (t2 = r[s]).type)
        e[i] = Et(e[i], t2.name, n);
      else if (n == null)
        for (i in e)
          e[i] = Et(e[i], t2.name, null);
    return this;
  },
  copy: function() {
    var t2 = {}, n = this._;
    for (var e in n)
      t2[e] = n[e].slice();
    return new W(t2);
  },
  call: function(t2, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, s; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t2))
      throw new Error("unknown type: " + t2);
    for (s = this._[t2], r = 0, i = s.length; r < i; ++r)
      s[r].value.apply(n, e);
  },
  apply: function(t2, n, e) {
    if (!this._.hasOwnProperty(t2))
      throw new Error("unknown type: " + t2);
    for (var r = this._[t2], i = 0, s = r.length; i < s; ++i)
      r[i].value.apply(n, e);
  }
};
function vn(t2, n) {
  for (var e = 0, r = t2.length, i; e < r; ++e)
    if ((i = t2[e]).name === n)
      return i.value;
}
function Et(t2, n, e) {
  for (var r = 0, i = t2.length; r < i; ++r)
    if (t2[r].name === n) {
      t2[r] = yn, t2 = t2.slice(0, r).concat(t2.slice(r + 1));
      break;
    }
  return e != null && t2.push({ name: n, value: e }), t2;
}
var ct = "http://www.w3.org/1999/xhtml";
const Ct = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ct,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ot(t2) {
  var n = t2 += "", e = n.indexOf(":");
  return e >= 0 && (n = t2.slice(0, e)) !== "xmlns" && (t2 = t2.slice(e + 1)), Ct.hasOwnProperty(n) ? { space: Ct[n], local: t2 } : t2;
}
function mn(t2) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === ct && n.documentElement.namespaceURI === ct ? n.createElement(t2) : n.createElementNS(e, t2);
  };
}
function bn(t2) {
  return function() {
    return this.ownerDocument.createElementNS(t2.space, t2.local);
  };
}
function Bt(t2) {
  var n = ot(t2);
  return (n.local ? bn : mn)(n);
}
function $n() {
}
function vt(t2) {
  return t2 == null ? $n : function() {
    return this.querySelector(t2);
  };
}
function Nn(t2) {
  typeof t2 != "function" && (t2 = vt(t2));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = new Array(o), u, l, f = 0; f < o; ++f)
      (u = s[f]) && (l = t2.call(u, u.__data__, f, s)) && ("__data__" in u && (l.__data__ = u.__data__), a[f] = l);
  return new w(r, this._parents);
}
function An(t2) {
  return t2 == null ? [] : Array.isArray(t2) ? t2 : Array.from(t2);
}
function kn() {
  return [];
}
function Yt(t2) {
  return t2 == null ? kn : function() {
    return this.querySelectorAll(t2);
  };
}
function En(t2) {
  return function() {
    return An(t2.apply(this, arguments));
  };
}
function Cn(t2) {
  typeof t2 == "function" ? t2 = En(t2) : t2 = Yt(t2);
  for (var n = this._groups, e = n.length, r = [], i = [], s = 0; s < e; ++s)
    for (var o = n[s], a = o.length, u, l = 0; l < a; ++l)
      (u = o[l]) && (r.push(t2.call(u, u.__data__, l, o)), i.push(u));
  return new w(r, i);
}
function Ut(t2) {
  return function() {
    return this.matches(t2);
  };
}
function Gt(t2) {
  return function(n) {
    return n.matches(t2);
  };
}
var Sn = Array.prototype.find;
function Mn(t2) {
  return function() {
    return Sn.call(this.children, t2);
  };
}
function Tn() {
  return this.firstElementChild;
}
function Rn(t2) {
  return this.select(t2 == null ? Tn : Mn(typeof t2 == "function" ? t2 : Gt(t2)));
}
var In = Array.prototype.filter;
function Pn() {
  return Array.from(this.children);
}
function qn(t2) {
  return function() {
    return In.call(this.children, t2);
  };
}
function Fn(t2) {
  return this.selectAll(t2 == null ? Pn : qn(typeof t2 == "function" ? t2 : Gt(t2)));
}
function Ln(t2) {
  typeof t2 != "function" && (t2 = Ut(t2));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = [], u, l = 0; l < o; ++l)
      (u = s[l]) && t2.call(u, u.__data__, l, s) && a.push(u);
  return new w(r, this._parents);
}
function Kt(t2) {
  return new Array(t2.length);
}
function Dn() {
  return new w(this._enter || this._groups.map(Kt), this._parents);
}
function tt(t2, n) {
  this.ownerDocument = t2.ownerDocument, this.namespaceURI = t2.namespaceURI, this._next = null, this._parent = t2, this.__data__ = n;
}
tt.prototype = {
  constructor: tt,
  appendChild: function(t2) {
    return this._parent.insertBefore(t2, this._next);
  },
  insertBefore: function(t2, n) {
    return this._parent.insertBefore(t2, n);
  },
  querySelector: function(t2) {
    return this._parent.querySelector(t2);
  },
  querySelectorAll: function(t2) {
    return this._parent.querySelectorAll(t2);
  }
};
function Hn(t2) {
  return function() {
    return t2;
  };
}
function Xn(t2, n, e, r, i, s) {
  for (var o = 0, a, u = n.length, l = s.length; o < l; ++o)
    (a = n[o]) ? (a.__data__ = s[o], r[o] = a) : e[o] = new tt(t2, s[o]);
  for (; o < u; ++o)
    (a = n[o]) && (i[o] = a);
}
function On(t2, n, e, r, i, s, o) {
  var a, u, l = /* @__PURE__ */ new Map(), f = n.length, c = s.length, h = new Array(f), _;
  for (a = 0; a < f; ++a)
    (u = n[a]) && (h[a] = _ = o.call(u, u.__data__, a, n) + "", l.has(_) ? i[a] = u : l.set(_, u));
  for (a = 0; a < c; ++a)
    _ = o.call(t2, s[a], a, s) + "", (u = l.get(_)) ? (r[a] = u, u.__data__ = s[a], l.delete(_)) : e[a] = new tt(t2, s[a]);
  for (a = 0; a < f; ++a)
    (u = n[a]) && l.get(h[a]) === u && (i[a] = u);
}
function zn(t2) {
  return t2.__data__;
}
function Vn(t2, n) {
  if (!arguments.length)
    return Array.from(this, zn);
  var e = n ? On : Xn, r = this._parents, i = this._groups;
  typeof t2 != "function" && (t2 = Hn(t2));
  for (var s = i.length, o = new Array(s), a = new Array(s), u = new Array(s), l = 0; l < s; ++l) {
    var f = r[l], c = i[l], h = c.length, _ = Bn(t2.call(f, f && f.__data__, l, r)), p = _.length, d = a[l] = new Array(p), b = o[l] = new Array(p), G = u[l] = new Array(h);
    e(f, c, d, b, G, _, n);
    for (var A = 0, E = 0, R, L; A < p; ++A)
      if (R = d[A]) {
        for (A >= E && (E = A + 1); !(L = b[E]) && ++E < p; )
          ;
        R._next = L || null;
      }
  }
  return o = new w(o, r), o._enter = a, o._exit = u, o;
}
function Bn(t2) {
  return typeof t2 == "object" && "length" in t2 ? t2 : Array.from(t2);
}
function Yn() {
  return new w(this._exit || this._groups.map(Kt), this._parents);
}
function Un(t2, n, e) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t2 == "function" ? (r = t2(r), r && (r = r.selection())) : r = r.append(t2 + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? s.remove() : e(s), r && i ? r.merge(i).order() : i;
}
function Gn(t2) {
  for (var n = t2.selection ? t2.selection() : t2, e = this._groups, r = n._groups, i = e.length, s = r.length, o = Math.min(i, s), a = new Array(i), u = 0; u < o; ++u)
    for (var l = e[u], f = r[u], c = l.length, h = a[u] = new Array(c), _, p = 0; p < c; ++p)
      (_ = l[p] || f[p]) && (h[p] = _);
  for (; u < i; ++u)
    a[u] = e[u];
  return new w(a, this._parents);
}
function Kn() {
  for (var t2 = this._groups, n = -1, e = t2.length; ++n < e; )
    for (var r = t2[n], i = r.length - 1, s = r[i], o; --i >= 0; )
      (o = r[i]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Zn(t2) {
  t2 || (t2 = Qn);
  function n(c, h) {
    return c && h ? t2(c.__data__, h.__data__) : !c - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var o = e[s], a = o.length, u = i[s] = new Array(a), l, f = 0; f < a; ++f)
      (l = o[f]) && (u[f] = l);
    u.sort(n);
  }
  return new w(i, this._parents).order();
}
function Qn(t2, n) {
  return t2 < n ? -1 : t2 > n ? 1 : t2 >= n ? 0 : NaN;
}
function Wn() {
  var t2 = arguments[0];
  return arguments[0] = this, t2.apply(null, arguments), this;
}
function Jn() {
  return Array.from(this);
}
function jn() {
  for (var t2 = this._groups, n = 0, e = t2.length; n < e; ++n)
    for (var r = t2[n], i = 0, s = r.length; i < s; ++i) {
      var o = r[i];
      if (o)
        return o;
    }
  return null;
}
function te() {
  let t2 = 0;
  for (const n of this)
    ++t2;
  return t2;
}
function ne() {
  return !this.node();
}
function ee(t2) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], s = 0, o = i.length, a; s < o; ++s)
      (a = i[s]) && t2.call(a, a.__data__, s, i);
  return this;
}
function re(t2) {
  return function() {
    this.removeAttribute(t2);
  };
}
function ie(t2) {
  return function() {
    this.removeAttributeNS(t2.space, t2.local);
  };
}
function se(t2, n) {
  return function() {
    this.setAttribute(t2, n);
  };
}
function oe(t2, n) {
  return function() {
    this.setAttributeNS(t2.space, t2.local, n);
  };
}
function ae(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t2) : this.setAttribute(t2, e);
  };
}
function ue(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t2.space, t2.local) : this.setAttributeNS(t2.space, t2.local, e);
  };
}
function le(t2, n) {
  var e = ot(t2);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? ie : re : typeof n == "function" ? e.local ? ue : ae : e.local ? oe : se)(e, n));
}
function Zt(t2) {
  return t2.ownerDocument && t2.ownerDocument.defaultView || t2.document && t2 || t2.defaultView;
}
function fe(t2) {
  return function() {
    this.style.removeProperty(t2);
  };
}
function ce(t2, n, e) {
  return function() {
    this.style.setProperty(t2, n, e);
  };
}
function he(t2, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t2) : this.style.setProperty(t2, r, e);
  };
}
function _e(t2, n, e) {
  return arguments.length > 1 ? this.each((n == null ? fe : typeof n == "function" ? he : ce)(t2, n, e ?? "")) : q(this.node(), t2);
}
function q(t2, n) {
  return t2.style.getPropertyValue(n) || Zt(t2).getComputedStyle(t2, null).getPropertyValue(n);
}
function pe(t2) {
  return function() {
    delete this[t2];
  };
}
function de(t2, n) {
  return function() {
    this[t2] = n;
  };
}
function ge(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t2] : this[t2] = e;
  };
}
function we(t2, n) {
  return arguments.length > 1 ? this.each((n == null ? pe : typeof n == "function" ? ge : de)(t2, n)) : this.node()[t2];
}
function Qt(t2) {
  return t2.trim().split(/^|\s+/);
}
function mt(t2) {
  return t2.classList || new Wt(t2);
}
function Wt(t2) {
  this._node = t2, this._names = Qt(t2.getAttribute("class") || "");
}
Wt.prototype = {
  add: function(t2) {
    var n = this._names.indexOf(t2);
    n < 0 && (this._names.push(t2), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t2) {
    var n = this._names.indexOf(t2);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t2) {
    return this._names.indexOf(t2) >= 0;
  }
};
function Jt(t2, n) {
  for (var e = mt(t2), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function jt(t2, n) {
  for (var e = mt(t2), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function ye(t2) {
  return function() {
    Jt(this, t2);
  };
}
function xe(t2) {
  return function() {
    jt(this, t2);
  };
}
function ve(t2, n) {
  return function() {
    (n.apply(this, arguments) ? Jt : jt)(this, t2);
  };
}
function me(t2, n) {
  var e = Qt(t2 + "");
  if (arguments.length < 2) {
    for (var r = mt(this.node()), i = -1, s = e.length; ++i < s; )
      if (!r.contains(e[i]))
        return false;
    return true;
  }
  return this.each((typeof n == "function" ? ve : n ? ye : xe)(e, n));
}
function be() {
  this.textContent = "";
}
function $e(t2) {
  return function() {
    this.textContent = t2;
  };
}
function Ne(t2) {
  return function() {
    var n = t2.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Ae(t2) {
  return arguments.length ? this.each(t2 == null ? be : (typeof t2 == "function" ? Ne : $e)(t2)) : this.node().textContent;
}
function ke() {
  this.innerHTML = "";
}
function Ee(t2) {
  return function() {
    this.innerHTML = t2;
  };
}
function Ce(t2) {
  return function() {
    var n = t2.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Se(t2) {
  return arguments.length ? this.each(t2 == null ? ke : (typeof t2 == "function" ? Ce : Ee)(t2)) : this.node().innerHTML;
}
function Me() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Te() {
  return this.each(Me);
}
function Re() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ie() {
  return this.each(Re);
}
function Pe(t2) {
  var n = typeof t2 == "function" ? t2 : Bt(t2);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function qe() {
  return null;
}
function Fe(t2, n) {
  var e = typeof t2 == "function" ? t2 : Bt(t2), r = n == null ? qe : typeof n == "function" ? n : vt(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Le() {
  var t2 = this.parentNode;
  t2 && t2.removeChild(this);
}
function De() {
  return this.each(Le);
}
function He() {
  var t2 = this.cloneNode(false), n = this.parentNode;
  return n ? n.insertBefore(t2, this.nextSibling) : t2;
}
function Xe() {
  var t2 = this.cloneNode(true), n = this.parentNode;
  return n ? n.insertBefore(t2, this.nextSibling) : t2;
}
function Oe(t2) {
  return this.select(t2 ? Xe : He);
}
function ze(t2) {
  return arguments.length ? this.property("__data__", t2) : this.node().__data__;
}
function Ve(t2) {
  return function(n) {
    t2.call(this, n, this.__data__);
  };
}
function Be(t2) {
  return t2.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Ye(t2) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, s; e < i; ++e)
        s = n[e], (!t2.type || s.type === t2.type) && s.name === t2.name ? this.removeEventListener(s.type, s.listener, s.options) : n[++r] = s;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Ue(t2, n, e) {
  return function() {
    var r = this.__on, i, s = Ve(n);
    if (r) {
      for (var o = 0, a = r.length; o < a; ++o)
        if ((i = r[o]).type === t2.type && i.name === t2.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t2.type, s, e), i = { type: t2.type, name: t2.name, value: n, listener: s, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Ge(t2, n, e) {
  var r = Be(t2 + ""), i, s = r.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, l = a.length, f; u < l; ++u)
        for (i = 0, f = a[u]; i < s; ++i)
          if ((o = r[i]).type === f.type && o.name === f.name)
            return f.value;
    }
    return;
  }
  for (a = n ? Ue : Ye, i = 0; i < s; ++i)
    this.each(a(r[i], n, e));
  return this;
}
function tn(t2, n, e) {
  var r = Zt(t2), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, false, false)), t2.dispatchEvent(i);
}
function Ke(t2, n) {
  return function() {
    return tn(this, t2, n);
  };
}
function Ze(t2, n) {
  return function() {
    return tn(this, t2, n.apply(this, arguments));
  };
}
function Qe(t2, n) {
  return this.each((typeof n == "function" ? Ze : Ke)(t2, n));
}
function* We() {
  for (var t2 = this._groups, n = 0, e = t2.length; n < e; ++n)
    for (var r = t2[n], i = 0, s = r.length, o; i < s; ++i)
      (o = r[i]) && (yield o);
}
var nn = [null];
function w(t2, n) {
  this._groups = t2, this._parents = n;
}
function Y() {
  return new w([[document.documentElement]], nn);
}
function Je() {
  return this;
}
w.prototype = Y.prototype = {
  constructor: w,
  select: Nn,
  selectAll: Cn,
  selectChild: Rn,
  selectChildren: Fn,
  filter: Ln,
  data: Vn,
  enter: Dn,
  exit: Yn,
  join: Un,
  merge: Gn,
  selection: Je,
  order: Kn,
  sort: Zn,
  call: Wn,
  nodes: Jn,
  node: jn,
  size: te,
  empty: ne,
  each: ee,
  attr: le,
  style: _e,
  property: we,
  classed: me,
  text: Ae,
  html: Se,
  raise: Te,
  lower: Ie,
  append: Pe,
  insert: Fe,
  remove: De,
  clone: Oe,
  datum: ze,
  on: Ge,
  dispatch: Qe,
  [Symbol.iterator]: We
};
function Li(t2) {
  return typeof t2 == "string" ? new w([[document.querySelector(t2)]], [document.documentElement]) : new w([[t2]], nn);
}
function bt(t2, n, e) {
  t2.prototype = n.prototype = e, e.constructor = t2;
}
function en(t2, n) {
  var e = Object.create(t2.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function U() {
}
var O = 0.7, nt = 1 / O, P = "\\s*([+-]?\\d+)\\s*", z = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", v = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", je = /^#([0-9a-f]{3,8})$/, tr = new RegExp(`^rgb\\(${P},${P},${P}\\)$`), nr = new RegExp(`^rgb\\(${v},${v},${v}\\)$`), er = new RegExp(`^rgba\\(${P},${P},${P},${z}\\)$`), rr = new RegExp(`^rgba\\(${v},${v},${v},${z}\\)$`), ir = new RegExp(`^hsl\\(${z},${v},${v}\\)$`), sr = new RegExp(`^hsla\\(${z},${v},${v},${z}\\)$`), St = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
bt(U, V, {
  copy(t2) {
    return Object.assign(new this.constructor(), this, t2);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Mt,
  // Deprecated! Use color.formatHex.
  formatHex: Mt,
  formatHex8: or,
  formatHsl: ar,
  formatRgb: Tt,
  toString: Tt
});
function Mt() {
  return this.rgb().formatHex();
}
function or() {
  return this.rgb().formatHex8();
}
function ar() {
  return rn(this).formatHsl();
}
function Tt() {
  return this.rgb().formatRgb();
}
function V(t2) {
  var n, e;
  return t2 = (t2 + "").trim().toLowerCase(), (n = je.exec(t2)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Rt(n) : e === 3 ? new g(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? K(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? K(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = tr.exec(t2)) ? new g(n[1], n[2], n[3], 1) : (n = nr.exec(t2)) ? new g(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = er.exec(t2)) ? K(n[1], n[2], n[3], n[4]) : (n = rr.exec(t2)) ? K(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ir.exec(t2)) ? qt(n[1], n[2] / 100, n[3] / 100, 1) : (n = sr.exec(t2)) ? qt(n[1], n[2] / 100, n[3] / 100, n[4]) : St.hasOwnProperty(t2) ? Rt(St[t2]) : t2 === "transparent" ? new g(NaN, NaN, NaN, 0) : null;
}
function Rt(t2) {
  return new g(t2 >> 16 & 255, t2 >> 8 & 255, t2 & 255, 1);
}
function K(t2, n, e, r) {
  return r <= 0 && (t2 = n = e = NaN), new g(t2, n, e, r);
}
function ur(t2) {
  return t2 instanceof U || (t2 = V(t2)), t2 ? (t2 = t2.rgb(), new g(t2.r, t2.g, t2.b, t2.opacity)) : new g();
}
function ht(t2, n, e, r) {
  return arguments.length === 1 ? ur(t2) : new g(t2, n, e, r ?? 1);
}
function g(t2, n, e, r) {
  this.r = +t2, this.g = +n, this.b = +e, this.opacity = +r;
}
bt(g, ht, en(U, {
  brighter(t2) {
    return t2 = t2 == null ? nt : Math.pow(nt, t2), new g(this.r * t2, this.g * t2, this.b * t2, this.opacity);
  },
  darker(t2) {
    return t2 = t2 == null ? O : Math.pow(O, t2), new g(this.r * t2, this.g * t2, this.b * t2, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new g(M(this.r), M(this.g), M(this.b), et(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: It,
  // Deprecated! Use color.formatHex.
  formatHex: It,
  formatHex8: lr,
  formatRgb: Pt,
  toString: Pt
}));
function It() {
  return `#${S(this.r)}${S(this.g)}${S(this.b)}`;
}
function lr() {
  return `#${S(this.r)}${S(this.g)}${S(this.b)}${S((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Pt() {
  const t2 = et(this.opacity);
  return `${t2 === 1 ? "rgb(" : "rgba("}${M(this.r)}, ${M(this.g)}, ${M(this.b)}${t2 === 1 ? ")" : `, ${t2})`}`;
}
function et(t2) {
  return isNaN(t2) ? 1 : Math.max(0, Math.min(1, t2));
}
function M(t2) {
  return Math.max(0, Math.min(255, Math.round(t2) || 0));
}
function S(t2) {
  return t2 = M(t2), (t2 < 16 ? "0" : "") + t2.toString(16);
}
function qt(t2, n, e, r) {
  return r <= 0 ? t2 = n = e = NaN : e <= 0 || e >= 1 ? t2 = n = NaN : n <= 0 && (t2 = NaN), new y(t2, n, e, r);
}
function rn(t2) {
  if (t2 instanceof y)
    return new y(t2.h, t2.s, t2.l, t2.opacity);
  if (t2 instanceof U || (t2 = V(t2)), !t2)
    return new y();
  if (t2 instanceof y)
    return t2;
  t2 = t2.rgb();
  var n = t2.r / 255, e = t2.g / 255, r = t2.b / 255, i = Math.min(n, e, r), s = Math.max(n, e, r), o = NaN, a = s - i, u = (s + i) / 2;
  return a ? (n === s ? o = (e - r) / a + (e < r) * 6 : e === s ? o = (r - n) / a + 2 : o = (n - e) / a + 4, a /= u < 0.5 ? s + i : 2 - s - i, o *= 60) : a = u > 0 && u < 1 ? 0 : o, new y(o, a, u, t2.opacity);
}
function fr(t2, n, e, r) {
  return arguments.length === 1 ? rn(t2) : new y(t2, n, e, r ?? 1);
}
function y(t2, n, e, r) {
  this.h = +t2, this.s = +n, this.l = +e, this.opacity = +r;
}
bt(y, fr, en(U, {
  brighter(t2) {
    return t2 = t2 == null ? nt : Math.pow(nt, t2), new y(this.h, this.s, this.l * t2, this.opacity);
  },
  darker(t2) {
    return t2 = t2 == null ? O : Math.pow(O, t2), new y(this.h, this.s, this.l * t2, this.opacity);
  },
  rgb() {
    var t2 = this.h % 360 + (this.h < 0) * 360, n = isNaN(t2) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new g(
      lt(t2 >= 240 ? t2 - 240 : t2 + 120, i, r),
      lt(t2, i, r),
      lt(t2 < 120 ? t2 + 240 : t2 - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new y(Ft(this.h), Z(this.s), Z(this.l), et(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t2 = et(this.opacity);
    return `${t2 === 1 ? "hsl(" : "hsla("}${Ft(this.h)}, ${Z(this.s) * 100}%, ${Z(this.l) * 100}%${t2 === 1 ? ")" : `, ${t2})`}`;
  }
}));
function Ft(t2) {
  return t2 = (t2 || 0) % 360, t2 < 0 ? t2 + 360 : t2;
}
function Z(t2) {
  return Math.max(0, Math.min(1, t2 || 0));
}
function lt(t2, n, e) {
  return (t2 < 60 ? n + (e - n) * t2 / 60 : t2 < 180 ? e : t2 < 240 ? n + (e - n) * (240 - t2) / 60 : n) * 255;
}
const $t = (t2) => () => t2;
function sn(t2, n) {
  return function(e) {
    return t2 + e * n;
  };
}
function cr(t2, n, e) {
  return t2 = Math.pow(t2, e), n = Math.pow(n, e) - t2, e = 1 / e, function(r) {
    return Math.pow(t2 + r * n, e);
  };
}
function Di(t2, n) {
  var e = n - t2;
  return e ? sn(t2, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : $t(isNaN(t2) ? n : t2);
}
function hr(t2) {
  return (t2 = +t2) == 1 ? on : function(n, e) {
    return e - n ? cr(n, e, t2) : $t(isNaN(n) ? e : n);
  };
}
function on(t2, n) {
  var e = n - t2;
  return e ? sn(t2, e) : $t(isNaN(t2) ? n : t2);
}
const Lt = function t(n) {
  var e = hr(n);
  function r(i, s) {
    var o = e((i = ht(i)).r, (s = ht(s)).r), a = e(i.g, s.g), u = e(i.b, s.b), l = on(i.opacity, s.opacity);
    return function(f) {
      return i.r = o(f), i.g = a(f), i.b = u(f), i.opacity = l(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function k(t2, n) {
  return t2 = +t2, n = +n, function(e) {
    return t2 * (1 - e) + n * e;
  };
}
var _t = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ft = new RegExp(_t.source, "g");
function _r(t2) {
  return function() {
    return t2;
  };
}
function pr(t2) {
  return function(n) {
    return t2(n) + "";
  };
}
function dr(t2, n) {
  var e = _t.lastIndex = ft.lastIndex = 0, r, i, s, o = -1, a = [], u = [];
  for (t2 = t2 + "", n = n + ""; (r = _t.exec(t2)) && (i = ft.exec(n)); )
    (s = i.index) > e && (s = n.slice(e, s), a[o] ? a[o] += s : a[++o] = s), (r = r[0]) === (i = i[0]) ? a[o] ? a[o] += i : a[++o] = i : (a[++o] = null, u.push({ i: o, x: k(r, i) })), e = ft.lastIndex;
  return e < n.length && (s = n.slice(e), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? u[0] ? pr(u[0].x) : _r(n) : (n = u.length, function(l) {
    for (var f = 0, c; f < n; ++f)
      a[(c = u[f]).i] = c.x(l);
    return a.join("");
  });
}
var Dt = 180 / Math.PI, pt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function an(t2, n, e, r, i, s) {
  var o, a, u;
  return (o = Math.sqrt(t2 * t2 + n * n)) && (t2 /= o, n /= o), (u = t2 * e + n * r) && (e -= t2 * u, r -= n * u), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, u /= a), t2 * r < n * e && (t2 = -t2, n = -n, u = -u, o = -o), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(n, t2) * Dt,
    skewX: Math.atan(u) * Dt,
    scaleX: o,
    scaleY: a
  };
}
var Q;
function gr(t2) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t2 + "");
  return n.isIdentity ? pt : an(n.a, n.b, n.c, n.d, n.e, n.f);
}
function wr(t2) {
  return t2 == null || (Q || (Q = document.createElementNS("http://www.w3.org/2000/svg", "g")), Q.setAttribute("transform", t2), !(t2 = Q.transform.baseVal.consolidate())) ? pt : (t2 = t2.matrix, an(t2.a, t2.b, t2.c, t2.d, t2.e, t2.f));
}
function un(t2, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function s(l, f, c, h, _, p) {
    if (l !== c || f !== h) {
      var d = _.push("translate(", null, n, null, e);
      p.push({ i: d - 4, x: k(l, c) }, { i: d - 2, x: k(f, h) });
    } else
      (c || h) && _.push("translate(" + c + n + h + e);
  }
  function o(l, f, c, h) {
    l !== f ? (l - f > 180 ? f += 360 : f - l > 180 && (l += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: k(l, f) })) : f && c.push(i(c) + "rotate(" + f + r);
  }
  function a(l, f, c, h) {
    l !== f ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: k(l, f) }) : f && c.push(i(c) + "skewX(" + f + r);
  }
  function u(l, f, c, h, _, p) {
    if (l !== c || f !== h) {
      var d = _.push(i(_) + "scale(", null, ",", null, ")");
      p.push({ i: d - 4, x: k(l, c) }, { i: d - 2, x: k(f, h) });
    } else
      (c !== 1 || h !== 1) && _.push(i(_) + "scale(" + c + "," + h + ")");
  }
  return function(l, f) {
    var c = [], h = [];
    return l = t2(l), f = t2(f), s(l.translateX, l.translateY, f.translateX, f.translateY, c, h), o(l.rotate, f.rotate, c, h), a(l.skewX, f.skewX, c, h), u(l.scaleX, l.scaleY, f.scaleX, f.scaleY, c, h), l = f = null, function(_) {
      for (var p = -1, d = h.length, b; ++p < d; )
        c[(b = h[p]).i] = b.x(_);
      return c.join("");
    };
  };
}
var yr = un(gr, "px, ", "px)", "deg)"), xr = un(wr, ", ", ")", ")"), F = 0, H = 0, D = 0, ln = 1e3, rt, X, it = 0, T = 0, at = 0, B = typeof performance == "object" && performance.now ? performance : Date, fn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t2) {
  setTimeout(t2, 17);
};
function Nt() {
  return T || (fn(vr), T = B.now() + at);
}
function vr() {
  T = 0;
}
function st() {
  this._call = this._time = this._next = null;
}
st.prototype = cn.prototype = {
  constructor: st,
  restart: function(t2, n, e) {
    if (typeof t2 != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? Nt() : +e) + (n == null ? 0 : +n), !this._next && X !== this && (X ? X._next = this : rt = this, X = this), this._call = t2, this._time = e, dt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, dt());
  }
};
function cn(t2, n, e) {
  var r = new st();
  return r.restart(t2, n, e), r;
}
function mr() {
  Nt(), ++F;
  for (var t2 = rt, n; t2; )
    (n = T - t2._time) >= 0 && t2._call.call(void 0, n), t2 = t2._next;
  --F;
}
function Ht() {
  T = (it = B.now()) + at, F = H = 0;
  try {
    mr();
  } finally {
    F = 0, $r(), T = 0;
  }
}
function br() {
  var t2 = B.now(), n = t2 - it;
  n > ln && (at -= n, it = t2);
}
function $r() {
  for (var t2, n = rt, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t2 = n, n = n._next) : (e = n._next, n._next = null, n = t2 ? t2._next = e : rt = e);
  X = t2, dt(r);
}
function dt(t2) {
  if (!F) {
    H && (H = clearTimeout(H));
    var n = t2 - T;
    n > 24 ? (t2 < 1 / 0 && (H = setTimeout(Ht, t2 - B.now() - at)), D && (D = clearInterval(D))) : (D || (it = B.now(), D = setInterval(br, ln)), F = 1, fn(Ht));
  }
}
function Xt(t2, n, e) {
  var r = new st();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t2(i + n);
  }, n, e), r;
}
var Nr = Vt("start", "end", "cancel", "interrupt"), Ar = [], hn = 0, Ot = 1, gt = 2, J = 3, zt = 4, wt = 5, j = 6;
function ut(t2, n, e, r, i, s) {
  var o = t2.__transition;
  if (!o)
    t2.__transition = {};
  else if (e in o)
    return;
  kr(t2, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Nr,
    tween: Ar,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: hn
  });
}
function At(t2, n) {
  var e = x(t2, n);
  if (e.state > hn)
    throw new Error("too late; already scheduled");
  return e;
}
function m(t2, n) {
  var e = x(t2, n);
  if (e.state > J)
    throw new Error("too late; already running");
  return e;
}
function x(t2, n) {
  var e = t2.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function kr(t2, n, e) {
  var r = t2.__transition, i;
  r[n] = e, e.timer = cn(s, 0, e.time);
  function s(l) {
    e.state = Ot, e.timer.restart(o, e.delay, e.time), e.delay <= l && o(l - e.delay);
  }
  function o(l) {
    var f, c, h, _;
    if (e.state !== Ot)
      return u();
    for (f in r)
      if (_ = r[f], _.name === e.name) {
        if (_.state === J)
          return Xt(o);
        _.state === zt ? (_.state = j, _.timer.stop(), _.on.call("interrupt", t2, t2.__data__, _.index, _.group), delete r[f]) : +f < n && (_.state = j, _.timer.stop(), _.on.call("cancel", t2, t2.__data__, _.index, _.group), delete r[f]);
      }
    if (Xt(function() {
      e.state === J && (e.state = zt, e.timer.restart(a, e.delay, e.time), a(l));
    }), e.state = gt, e.on.call("start", t2, t2.__data__, e.index, e.group), e.state === gt) {
      for (e.state = J, i = new Array(h = e.tween.length), f = 0, c = -1; f < h; ++f)
        (_ = e.tween[f].value.call(t2, t2.__data__, e.index, e.group)) && (i[++c] = _);
      i.length = c + 1;
    }
  }
  function a(l) {
    for (var f = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = wt, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t2, f);
    e.state === wt && (e.on.call("end", t2, t2.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = j, e.timer.stop(), delete r[n];
    for (var l in r)
      return;
    delete t2.__transition;
  }
}
function Er(t2, n) {
  var e = t2.__transition, r, i, s = true, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        s = false;
        continue;
      }
      i = r.state > gt && r.state < wt, r.state = j, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t2, t2.__data__, r.index, r.group), delete e[o];
    }
    s && delete t2.__transition;
  }
}
function Cr(t2) {
  return this.each(function() {
    Er(this, t2);
  });
}
function Sr(t2, n) {
  var e, r;
  return function() {
    var i = m(this, t2), s = i.tween;
    if (s !== e) {
      r = e = s;
      for (var o = 0, a = r.length; o < a; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Mr(t2, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var s = m(this, t2), o = s.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var a = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = a;
          break;
        }
      u === l && i.push(a);
    }
    s.tween = i;
  };
}
function Tr(t2, n) {
  var e = this._id;
  if (t2 += "", arguments.length < 2) {
    for (var r = x(this.node(), e).tween, i = 0, s = r.length, o; i < s; ++i)
      if ((o = r[i]).name === t2)
        return o.value;
    return null;
  }
  return this.each((n == null ? Sr : Mr)(e, t2, n));
}
function kt(t2, n, e) {
  var r = t2._id;
  return t2.each(function() {
    var i = m(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return x(i, r).value[n];
  };
}
function _n(t2, n) {
  var e;
  return (typeof n == "number" ? k : n instanceof V ? Lt : (e = V(n)) ? (n = e, Lt) : dr)(t2, n);
}
function Rr(t2) {
  return function() {
    this.removeAttribute(t2);
  };
}
function Ir(t2) {
  return function() {
    this.removeAttributeNS(t2.space, t2.local);
  };
}
function Pr(t2, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = this.getAttribute(t2);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function qr(t2, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = this.getAttributeNS(t2.space, t2.local);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function Fr(t2, n, e) {
  var r, i, s;
  return function() {
    var o, a = e(this), u;
    return a == null ? void this.removeAttribute(t2) : (o = this.getAttribute(t2), u = a + "", o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a)));
  };
}
function Lr(t2, n, e) {
  var r, i, s;
  return function() {
    var o, a = e(this), u;
    return a == null ? void this.removeAttributeNS(t2.space, t2.local) : (o = this.getAttributeNS(t2.space, t2.local), u = a + "", o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a)));
  };
}
function Dr(t2, n) {
  var e = ot(t2), r = e === "transform" ? xr : _n;
  return this.attrTween(t2, typeof n == "function" ? (e.local ? Lr : Fr)(e, r, kt(this, "attr." + t2, n)) : n == null ? (e.local ? Ir : Rr)(e) : (e.local ? qr : Pr)(e, r, n));
}
function Hr(t2, n) {
  return function(e) {
    this.setAttribute(t2, n.call(this, e));
  };
}
function Xr(t2, n) {
  return function(e) {
    this.setAttributeNS(t2.space, t2.local, n.call(this, e));
  };
}
function Or(t2, n) {
  var e, r;
  function i() {
    var s = n.apply(this, arguments);
    return s !== r && (e = (r = s) && Xr(t2, s)), e;
  }
  return i._value = n, i;
}
function zr(t2, n) {
  var e, r;
  function i() {
    var s = n.apply(this, arguments);
    return s !== r && (e = (r = s) && Hr(t2, s)), e;
  }
  return i._value = n, i;
}
function Vr(t2, n) {
  var e = "attr." + t2;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = ot(t2);
  return this.tween(e, (r.local ? Or : zr)(r, n));
}
function Br(t2, n) {
  return function() {
    At(this, t2).delay = +n.apply(this, arguments);
  };
}
function Yr(t2, n) {
  return n = +n, function() {
    At(this, t2).delay = n;
  };
}
function Ur(t2) {
  var n = this._id;
  return arguments.length ? this.each((typeof t2 == "function" ? Br : Yr)(n, t2)) : x(this.node(), n).delay;
}
function Gr(t2, n) {
  return function() {
    m(this, t2).duration = +n.apply(this, arguments);
  };
}
function Kr(t2, n) {
  return n = +n, function() {
    m(this, t2).duration = n;
  };
}
function Zr(t2) {
  var n = this._id;
  return arguments.length ? this.each((typeof t2 == "function" ? Gr : Kr)(n, t2)) : x(this.node(), n).duration;
}
function Qr(t2, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    m(this, t2).ease = n;
  };
}
function Wr(t2) {
  var n = this._id;
  return arguments.length ? this.each(Qr(n, t2)) : x(this.node(), n).ease;
}
function Jr(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    m(this, t2).ease = e;
  };
}
function jr(t2) {
  if (typeof t2 != "function")
    throw new Error();
  return this.each(Jr(this._id, t2));
}
function ti(t2) {
  typeof t2 != "function" && (t2 = Ut(t2));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = [], u, l = 0; l < o; ++l)
      (u = s[l]) && t2.call(u, u.__data__, l, s) && a.push(u);
  return new N(r, this._parents, this._name, this._id);
}
function ni(t2) {
  if (t2._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t2._groups, r = n.length, i = e.length, s = Math.min(r, i), o = new Array(r), a = 0; a < s; ++a)
    for (var u = n[a], l = e[a], f = u.length, c = o[a] = new Array(f), h, _ = 0; _ < f; ++_)
      (h = u[_] || l[_]) && (c[_] = h);
  for (; a < r; ++a)
    o[a] = n[a];
  return new N(o, this._parents, this._name, this._id);
}
function ei(t2) {
  return (t2 + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function ri(t2, n, e) {
  var r, i, s = ei(n) ? At : m;
  return function() {
    var o = s(this, t2), a = o.on;
    a !== r && (i = (r = a).copy()).on(n, e), o.on = i;
  };
}
function ii(t2, n) {
  var e = this._id;
  return arguments.length < 2 ? x(this.node(), e).on.on(t2) : this.each(ri(e, t2, n));
}
function si(t2) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t2)
        return;
    n && n.removeChild(this);
  };
}
function oi() {
  return this.on("end.remove", si(this._id));
}
function ai(t2) {
  var n = this._name, e = this._id;
  typeof t2 != "function" && (t2 = vt(t2));
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, l = s[o] = new Array(u), f, c, h = 0; h < u; ++h)
      (f = a[h]) && (c = t2.call(f, f.__data__, h, a)) && ("__data__" in f && (c.__data__ = f.__data__), l[h] = c, ut(l[h], n, e, h, l, x(f, e)));
  return new N(s, this._parents, n, e);
}
function ui(t2) {
  var n = this._name, e = this._id;
  typeof t2 != "function" && (t2 = Yt(t2));
  for (var r = this._groups, i = r.length, s = [], o = [], a = 0; a < i; ++a)
    for (var u = r[a], l = u.length, f, c = 0; c < l; ++c)
      if (f = u[c]) {
        for (var h = t2.call(f, f.__data__, c, u), _, p = x(f, e), d = 0, b = h.length; d < b; ++d)
          (_ = h[d]) && ut(_, n, e, d, h, p);
        s.push(h), o.push(f);
      }
  return new N(s, o, n, e);
}
var li = Y.prototype.constructor;
function fi() {
  return new li(this._groups, this._parents);
}
function ci(t2, n) {
  var e, r, i;
  return function() {
    var s = q(this, t2), o = (this.style.removeProperty(t2), q(this, t2));
    return s === o ? null : s === e && o === r ? i : i = n(e = s, r = o);
  };
}
function pn(t2) {
  return function() {
    this.style.removeProperty(t2);
  };
}
function hi(t2, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = q(this, t2);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function _i(t2, n, e) {
  var r, i, s;
  return function() {
    var o = q(this, t2), a = e(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(t2), q(this, t2))), o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a));
  };
}
function pi(t2, n) {
  var e, r, i, s = "style." + n, o = "end." + s, a;
  return function() {
    var u = m(this, t2), l = u.on, f = u.value[s] == null ? a || (a = pn(n)) : void 0;
    (l !== e || i !== f) && (r = (e = l).copy()).on(o, i = f), u.on = r;
  };
}
function di(t2, n, e) {
  var r = (t2 += "") == "transform" ? yr : _n;
  return n == null ? this.styleTween(t2, ci(t2, r)).on("end.style." + t2, pn(t2)) : typeof n == "function" ? this.styleTween(t2, _i(t2, r, kt(this, "style." + t2, n))).each(pi(this._id, t2)) : this.styleTween(t2, hi(t2, r, n), e).on("end.style." + t2, null);
}
function gi(t2, n, e) {
  return function(r) {
    this.style.setProperty(t2, n.call(this, r), e);
  };
}
function wi(t2, n, e) {
  var r, i;
  function s() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && gi(t2, o, e)), r;
  }
  return s._value = n, s;
}
function yi(t2, n, e) {
  var r = "style." + (t2 += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, wi(t2, n, e ?? ""));
}
function xi(t2) {
  return function() {
    this.textContent = t2;
  };
}
function vi(t2) {
  return function() {
    var n = t2(this);
    this.textContent = n ?? "";
  };
}
function mi(t2) {
  return this.tween("text", typeof t2 == "function" ? vi(kt(this, "text", t2)) : xi(t2 == null ? "" : t2 + ""));
}
function bi(t2) {
  return function(n) {
    this.textContent = t2.call(this, n);
  };
}
function $i(t2) {
  var n, e;
  function r() {
    var i = t2.apply(this, arguments);
    return i !== e && (n = (e = i) && bi(i)), n;
  }
  return r._value = t2, r;
}
function Ni(t2) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t2 == null)
    return this.tween(n, null);
  if (typeof t2 != "function")
    throw new Error();
  return this.tween(n, $i(t2));
}
function Ai() {
  for (var t2 = this._name, n = this._id, e = dn(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, u, l = 0; l < a; ++l)
      if (u = o[l]) {
        var f = x(u, n);
        ut(u, t2, e, l, o, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new N(r, this._parents, t2, e);
}
function ki() {
  var t2, n, e = this, r = e._id, i = e.size();
  return new Promise(function(s, o) {
    var a = { value: o }, u = { value: function() {
      --i === 0 && s();
    } };
    e.each(function() {
      var l = m(this, r), f = l.on;
      f !== t2 && (n = (t2 = f).copy(), n._.cancel.push(a), n._.interrupt.push(a), n._.end.push(u)), l.on = n;
    }), i === 0 && s();
  });
}
var Ei = 0;
function N(t2, n, e, r) {
  this._groups = t2, this._parents = n, this._name = e, this._id = r;
}
function dn() {
  return ++Ei;
}
var $ = Y.prototype;
N.prototype = {
  constructor: N,
  select: ai,
  selectAll: ui,
  selectChild: $.selectChild,
  selectChildren: $.selectChildren,
  filter: ti,
  merge: ni,
  selection: fi,
  transition: Ai,
  call: $.call,
  nodes: $.nodes,
  node: $.node,
  size: $.size,
  empty: $.empty,
  each: $.each,
  on: ii,
  attr: Dr,
  attrTween: Vr,
  style: di,
  styleTween: yi,
  text: mi,
  textTween: Ni,
  remove: oi,
  tween: Tr,
  delay: Ur,
  duration: Zr,
  ease: Wr,
  easeVarying: jr,
  end: ki,
  [Symbol.iterator]: $[Symbol.iterator]
};
function Ci(t2) {
  return ((t2 *= 2) <= 1 ? t2 * t2 * t2 : (t2 -= 2) * t2 * t2 + 2) / 2;
}
var Si = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ci
};
function Mi(t2, n) {
  for (var e; !(e = t2.__transition) || !(e = e[n]); )
    if (!(t2 = t2.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ti(t2) {
  var n, e;
  t2 instanceof N ? (n = t2._id, t2 = t2._name) : (n = dn(), (e = Si).time = Nt(), t2 = t2 == null ? null : t2 + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, u, l = 0; l < a; ++l)
      (u = o[l]) && ut(u, t2, n, l, o, e || Mi(u, n));
  return new N(r, this._parents, t2, n);
}
Y.prototype.interrupt = Cr;
Y.prototype.transition = Ti;
const yt = Math.PI, xt = 2 * yt, C = 1e-6, Ri = xt - C;
function gn(t2) {
  this._ += t2[0];
  for (let n = 1, e = t2.length; n < e; ++n)
    this._ += arguments[n] + t2[n];
}
function Ii(t2) {
  let n = Math.floor(t2);
  if (!(n >= 0))
    throw new Error(`invalid digits: ${t2}`);
  if (n > 15)
    return gn;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Pi {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? gn : Ii(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, s, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +s},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, s) {
    if (n = +n, e = +e, r = +r, i = +i, s = +s, s < 0)
      throw new Error(`negative radius: ${s}`);
    let o = this._x1, a = this._y1, u = r - n, l = i - e, f = o - n, c = a - e, h = f * f + c * c;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > C)
      if (!(Math.abs(c * u - l * f) > C) || !s)
        this._append`L${this._x1 = n},${this._y1 = e}`;
      else {
        let _ = r - o, p = i - a, d = u * u + l * l, b = _ * _ + p * p, G = Math.sqrt(d), A = Math.sqrt(h), E = s * Math.tan((yt - Math.acos((d + h - b) / (2 * G * A))) / 2), R = E / A, L = E / G;
        Math.abs(R - 1) > C && this._append`L${n + R * f},${e + R * c}`, this._append`A${s},${s},0,0,${+(c * _ > f * p)},${this._x1 = n + L * u},${this._y1 = e + L * l}`;
      }
  }
  arc(n, e, r, i, s, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0)
      throw new Error(`negative radius: ${r}`);
    let a = r * Math.cos(i), u = r * Math.sin(i), l = n + a, f = e + u, c = 1 ^ o, h = o ? i - s : s - i;
    this._x1 === null ? this._append`M${l},${f}` : (Math.abs(this._x1 - l) > C || Math.abs(this._y1 - f) > C) && this._append`L${l},${f}`, r && (h < 0 && (h = h % xt + xt), h > Ri ? this._append`A${r},${r},0,1,${c},${n - a},${e - u}A${r},${r},0,1,${c},${this._x1 = l},${this._y1 = f}` : h > C && this._append`A${r},${r},0,${+(h >= yt)},${c},${this._x1 = n + r * Math.cos(s)},${this._y1 = e + r * Math.sin(s)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Hi(t2) {
  return function() {
    return t2;
  };
}
function Xi(t2) {
  let n = 3;
  return t2.digits = function(e) {
    if (!arguments.length)
      return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0))
        throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t2;
  }, () => new Pi(n);
}
var Oi = Array.prototype.slice;
function zi(t2) {
  return typeof t2 == "object" && "length" in t2 ? t2 : Array.from(t2);
}
function Vi(t2) {
  return t2[0];
}
function Bi(t2) {
  return t2[1];
}
class wn {
  constructor(n, e) {
    this._context = n, this._x = e;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(n, e) {
    switch (n = +n, e = +e, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(n, e) : this._context.moveTo(n, e);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + n) / 2, this._y0, this._x0, e, n, e) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + e) / 2, n, this._y0, n, e);
        break;
      }
    }
    this._x0 = n, this._y0 = e;
  }
}
function Yi(t2) {
  return new wn(t2, true);
}
function Ui(t2) {
  return new wn(t2, false);
}
function I(t2, n, e) {
  this.k = t2, this.x = n, this.y = e;
}
I.prototype = {
  constructor: I,
  scale: function(t2) {
    return t2 === 1 ? this : new I(this.k * t2, this.x, this.y);
  },
  translate: function(t2, n) {
    return t2 === 0 & n === 0 ? this : new I(this.k, this.x + this.k * t2, this.y + this.k * n);
  },
  apply: function(t2) {
    return [t2[0] * this.k + this.x, t2[1] * this.k + this.y];
  },
  applyX: function(t2) {
    return t2 * this.k + this.x;
  },
  applyY: function(t2) {
    return t2 * this.k + this.y;
  },
  invert: function(t2) {
    return [(t2[0] - this.x) / this.k, (t2[1] - this.y) / this.k];
  },
  invertX: function(t2) {
    return (t2 - this.x) / this.k;
  },
  invertY: function(t2) {
    return (t2 - this.y) / this.k;
  },
  rescaleX: function(t2) {
    return t2.copy().domain(t2.range().map(this.invertX, this).map(t2.invert, t2));
  },
  rescaleY: function(t2) {
    return t2.copy().domain(t2.range().map(this.invertY, this).map(t2.invert, t2));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var qi = new I(1, 0, 0);
Fi.prototype = I.prototype;
function Fi(t2) {
  for (; !t2.__zoom; )
    if (!(t2 = t2.parentNode))
      return qi;
  return t2.__zoom;
}
const Gi = (t2, n = Date.now() + ".png") => {
  try {
    const e = t2.getBoundingClientRect(), r = Math.round(e.width), i = Math.round(e.height);
    if (r === 0 || i === 0)
      throw new Error("SVG尺寸无效");
    const s = document.createElement("canvas"), o = s.getContext("2d");
    if (s.width = r * 2, s.height = i * 2, !o)
      throw new Error("无法获取Canvas上下文");
    o.fillStyle = "#ffffff", o.fillRect(0, 0, s.width, s.height), o.scale(2, 2);
    const a = new XMLSerializer().serializeToString(t2), l = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(a)))}`, f = new Image();
    new Promise((h, _) => {
      f.onload = () => h(f), f.onerror = () => _(new Error("图片加载失败")), f.src = l;
    }).then((h) => {
      o.drawImage(h, 0, 0, r, i);
      try {
        const _ = s.toDataURL("image/png"), p = document.createElement("a");
        p.href = _, p.download = n, document.body.appendChild(p), p.click(), document.body.removeChild(p);
      } catch (_) {
        console.error("PNG转换或下载失败:", _);
      }
    }).catch((h) => {
      console.error("图片处理过程失败:", h);
    });
  } catch (e) {
    console.error("SVG转PNG下载失败:", e);
  }
};
function Ki(t2, n) {
  const e = (r) => {
    t2.contains(r.target) || n();
  };
  return document.addEventListener("click", e, true), {
    destroy() {
      document.removeEventListener("click", e, true);
    }
  };
}
export {
  $t as $,
  Bi as B,
  Di as D,
  Er as E,
  Fi as F,
  Gi as G,
  Hi as H,
  I,
  Ki as K,
  Li as L,
  Oi as O,
  Ui as U,
  Vi as V,
  Xi as X,
  Yi as Y,
  Vt as a,
  bt as b,
  U as c,
  V as d,
  en as e,
  Lt as f,
  g,
  dr as h,
  k,
  on as o,
  qi as q,
  ur as u,
  zi as z
};
