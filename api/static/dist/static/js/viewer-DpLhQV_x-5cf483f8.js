import { v as jn, r as R, o as Bn, a as Dn, b as S, c as H, d, m as Y, p as j, q as nt, t as B, e as J, f as v, D as g, F as Vt, w as k, u as T, S as q, l as P, j as Fn, s as Vn, T as Ut, x as Un } from "./index-8579fe4a.js";
import { d as Wn } from "./copy-NOBrwKqN-54f5154b.js";
var Gn = { value: () => {
} };
function hn() {
  for (var t2 = 0, n = arguments.length, e = {}, r; t2 < n; ++t2) {
    if (!(r = arguments[t2] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new dt(e);
}
function dt(t2) {
  this._ = t2;
}
function Jn(t2, n) {
  return t2.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
dt.prototype = hn.prototype = { constructor: dt, on: function(t2, n) {
  var e = this._, r = Jn(t2 + "", e), i, a = -1, o = r.length;
  if (arguments.length < 2) {
    for (; ++a < o; )
      if ((i = (t2 = r[a]).type) && (i = Kn(e[i], t2.name)))
        return i;
    return;
  }
  if (n != null && typeof n != "function")
    throw new Error("invalid callback: " + n);
  for (; ++a < o; )
    if (i = (t2 = r[a]).type)
      e[i] = Wt(e[i], t2.name, n);
    else if (n == null)
      for (i in e)
        e[i] = Wt(e[i], t2.name, null);
  return this;
}, copy: function() {
  var t2 = {}, n = this._;
  for (var e in n)
    t2[e] = n[e].slice();
  return new dt(t2);
}, call: function(t2, n) {
  if ((i = arguments.length - 2) > 0)
    for (var e = new Array(i), r = 0, i, a; r < i; ++r)
      e[r] = arguments[r + 2];
  if (!this._.hasOwnProperty(t2))
    throw new Error("unknown type: " + t2);
  for (a = this._[t2], r = 0, i = a.length; r < i; ++r)
    a[r].value.apply(n, e);
}, apply: function(t2, n, e) {
  if (!this._.hasOwnProperty(t2))
    throw new Error("unknown type: " + t2);
  for (var r = this._[t2], i = 0, a = r.length; i < a; ++i)
    r[i].value.apply(n, e);
} };
function Kn(t2, n) {
  for (var e = 0, r = t2.length, i; e < r; ++e)
    if ((i = t2[e]).name === n)
      return i.value;
}
function Wt(t2, n, e) {
  for (var r = 0, i = t2.length; r < i; ++r)
    if (t2[r].name === n) {
      t2[r] = Gn, t2 = t2.slice(0, r).concat(t2.slice(r + 1));
      break;
    }
  return e != null && t2.push({ name: n, value: e }), t2;
}
var Ct = "http://www.w3.org/1999/xhtml";
const Gt = { svg: "http://www.w3.org/2000/svg", xhtml: Ct, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
function $t(t2) {
  var n = t2 += "", e = n.indexOf(":");
  return e >= 0 && (n = t2.slice(0, e)) !== "xmlns" && (t2 = t2.slice(e + 1)), Gt.hasOwnProperty(n) ? { space: Gt[n], local: t2 } : t2;
}
function Qn(t2) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Ct && n.documentElement.namespaceURI === Ct ? n.createElement(t2) : n.createElementNS(e, t2);
  };
}
function Zn(t2) {
  return function() {
    return this.ownerDocument.createElementNS(t2.space, t2.local);
  };
}
function fn(t2) {
  var n = $t(t2);
  return (n.local ? Zn : Qn)(n);
}
function te() {
}
function Xt(t2) {
  return t2 == null ? te : function() {
    return this.querySelector(t2);
  };
}
function ne(t2) {
  typeof t2 != "function" && (t2 = Xt(t2));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), u, l, c = 0; c < o; ++c)
      (u = a[c]) && (l = t2.call(u, u.__data__, c, a)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new w(r, this._parents);
}
function ee(t2) {
  return t2 == null ? [] : Array.isArray(t2) ? t2 : Array.from(t2);
}
function re() {
  return [];
}
function pn(t2) {
  return t2 == null ? re : function() {
    return this.querySelectorAll(t2);
  };
}
function ie(t2) {
  return function() {
    return ee(t2.apply(this, arguments));
  };
}
function ae(t2) {
  typeof t2 == "function" ? t2 = ie(t2) : t2 = pn(t2);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, u, l = 0; l < s; ++l)
      (u = o[l]) && (r.push(t2.call(u, u.__data__, l, o)), i.push(u));
  return new w(r, i);
}
function dn(t2) {
  return function() {
    return this.matches(t2);
  };
}
function _n(t2) {
  return function(n) {
    return n.matches(t2);
  };
}
var oe = Array.prototype.find;
function se(t2) {
  return function() {
    return oe.call(this.children, t2);
  };
}
function ue() {
  return this.firstElementChild;
}
function le(t2) {
  return this.select(t2 == null ? ue : se(typeof t2 == "function" ? t2 : _n(t2)));
}
var ce = Array.prototype.filter;
function he() {
  return Array.from(this.children);
}
function fe(t2) {
  return function() {
    return ce.call(this.children, t2);
  };
}
function pe(t2) {
  return this.selectAll(t2 == null ? he : fe(typeof t2 == "function" ? t2 : _n(t2)));
}
function de(t2) {
  typeof t2 != "function" && (t2 = dn(t2));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], u, l = 0; l < o; ++l)
      (u = a[l]) && t2.call(u, u.__data__, l, a) && s.push(u);
  return new w(r, this._parents);
}
function vn(t2) {
  return new Array(t2.length);
}
function _e() {
  return new w(this._enter || this._groups.map(vn), this._parents);
}
function mt(t2, n) {
  this.ownerDocument = t2.ownerDocument, this.namespaceURI = t2.namespaceURI, this._next = null, this._parent = t2, this.__data__ = n;
}
mt.prototype = { constructor: mt, appendChild: function(t2) {
  return this._parent.insertBefore(t2, this._next);
}, insertBefore: function(t2, n) {
  return this._parent.insertBefore(t2, n);
}, querySelector: function(t2) {
  return this._parent.querySelector(t2);
}, querySelectorAll: function(t2) {
  return this._parent.querySelectorAll(t2);
} };
function ve(t2) {
  return function() {
    return t2;
  };
}
function me(t2, n, e, r, i, a) {
  for (var o = 0, s, u = n.length, l = a.length; o < l; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new mt(t2, a[o]);
  for (; o < u; ++o)
    (s = n[o]) && (i[o] = s);
}
function ge(t2, n, e, r, i, a, o) {
  var s, u, l = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (u = n[s]) && (f[s] = p = o.call(u, u.__data__, s, n) + "", l.has(p) ? i[s] = u : l.set(p, u));
  for (s = 0; s < h; ++s)
    p = o.call(t2, a[s], s, a) + "", (u = l.get(p)) ? (r[s] = u, u.__data__ = a[s], l.delete(p)) : e[s] = new mt(t2, a[s]);
  for (s = 0; s < c; ++s)
    (u = n[s]) && l.get(f[s]) === u && (i[s] = u);
}
function ye(t2) {
  return t2.__data__;
}
function we(t2, n) {
  if (!arguments.length)
    return Array.from(this, ye);
  var e = n ? ge : me, r = this._parents, i = this._groups;
  typeof t2 != "function" && (t2 = ve(t2));
  for (var a = i.length, o = new Array(a), s = new Array(a), u = new Array(a), l = 0; l < a; ++l) {
    var c = r[l], h = i[l], f = h.length, p = be(t2.call(c, c && c.__data__, l, r)), _ = p.length, m = s[l] = new Array(_), b = o[l] = new Array(_), F = u[l] = new Array(f);
    e(c, h, m, b, F, p, n);
    for (var x = 0, M = 0, $, X; x < _; ++x)
      if ($ = m[x]) {
        for (x >= M && (M = x + 1); !(X = b[M]) && ++M < _; )
          ;
        $._next = X || null;
      }
  }
  return o = new w(o, r), o._enter = s, o._exit = u, o;
}
function be(t2) {
  return typeof t2 == "object" && "length" in t2 ? t2 : Array.from(t2);
}
function xe() {
  return new w(this._exit || this._groups.map(vn), this._parents);
}
function $e(t2, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t2 == "function" ? (r = t2(r), r && (r = r.selection())) : r = r.append(t2 + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function ke(t2) {
  for (var n = t2.selection ? t2.selection() : t2, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), u = 0; u < o; ++u)
    for (var l = e[u], c = r[u], h = l.length, f = s[u] = new Array(h), p, _ = 0; _ < h; ++_)
      (p = l[_] || c[_]) && (f[_] = p);
  for (; u < i; ++u)
    s[u] = e[u];
  return new w(s, this._parents);
}
function Ae() {
  for (var t2 = this._groups, n = -1, e = t2.length; ++n < e; )
    for (var r = t2[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Ne(t2) {
  t2 || (t2 = Me);
  function n(h, f) {
    return h && f ? t2(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, u = i[a] = new Array(s), l, c = 0; c < s; ++c)
      (l = o[c]) && (u[c] = l);
    u.sort(n);
  }
  return new w(i, this._parents).order();
}
function Me(t2, n) {
  return t2 < n ? -1 : t2 > n ? 1 : t2 >= n ? 0 : NaN;
}
function Ee() {
  var t2 = arguments[0];
  return arguments[0] = this, t2.apply(null, arguments), this;
}
function Ce() {
  return Array.from(this);
}
function ze() {
  for (var t2 = this._groups, n = 0, e = t2.length; n < e; ++n)
    for (var r = t2[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o)
        return o;
    }
  return null;
}
function Se() {
  let t2 = 0;
  for (const n of this)
    ++t2;
  return t2;
}
function Te() {
  return !this.node();
}
function qe(t2) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t2.call(s, s.__data__, a, i);
  return this;
}
function Pe(t2) {
  return function() {
    this.removeAttribute(t2);
  };
}
function Le(t2) {
  return function() {
    this.removeAttributeNS(t2.space, t2.local);
  };
}
function Ie(t2, n) {
  return function() {
    this.setAttribute(t2, n);
  };
}
function Xe(t2, n) {
  return function() {
    this.setAttributeNS(t2.space, t2.local, n);
  };
}
function Oe(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t2) : this.setAttribute(t2, e);
  };
}
function Re(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t2.space, t2.local) : this.setAttributeNS(t2.space, t2.local, e);
  };
}
function He(t2, n) {
  var e = $t(t2);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Le : Pe : typeof n == "function" ? e.local ? Re : Oe : e.local ? Xe : Ie)(e, n));
}
function mn(t2) {
  return t2.ownerDocument && t2.ownerDocument.defaultView || t2.document && t2 || t2.defaultView;
}
function Ye(t2) {
  return function() {
    this.style.removeProperty(t2);
  };
}
function je(t2, n, e) {
  return function() {
    this.style.setProperty(t2, n, e);
  };
}
function Be(t2, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t2) : this.style.setProperty(t2, r, e);
  };
}
function De(t2, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Ye : typeof n == "function" ? Be : je)(t2, n, e ?? "")) : Z(this.node(), t2);
}
function Z(t2, n) {
  return t2.style.getPropertyValue(n) || mn(t2).getComputedStyle(t2, null).getPropertyValue(n);
}
function Fe(t2) {
  return function() {
    delete this[t2];
  };
}
function Ve(t2, n) {
  return function() {
    this[t2] = n;
  };
}
function Ue(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t2] : this[t2] = e;
  };
}
function We(t2, n) {
  return arguments.length > 1 ? this.each((n == null ? Fe : typeof n == "function" ? Ue : Ve)(t2, n)) : this.node()[t2];
}
function gn(t2) {
  return t2.trim().split(/^|\s+/);
}
function Ot(t2) {
  return t2.classList || new yn(t2);
}
function yn(t2) {
  this._node = t2, this._names = gn(t2.getAttribute("class") || "");
}
yn.prototype = { add: function(t2) {
  var n = this._names.indexOf(t2);
  n < 0 && (this._names.push(t2), this._node.setAttribute("class", this._names.join(" ")));
}, remove: function(t2) {
  var n = this._names.indexOf(t2);
  n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
}, contains: function(t2) {
  return this._names.indexOf(t2) >= 0;
} };
function wn(t2, n) {
  for (var e = Ot(t2), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function bn(t2, n) {
  for (var e = Ot(t2), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Ge(t2) {
  return function() {
    wn(this, t2);
  };
}
function Je(t2) {
  return function() {
    bn(this, t2);
  };
}
function Ke(t2, n) {
  return function() {
    (n.apply(this, arguments) ? wn : bn)(this, t2);
  };
}
function Qe(t2, n) {
  var e = gn(t2 + "");
  if (arguments.length < 2) {
    for (var r = Ot(this.node()), i = -1, a = e.length; ++i < a; )
      if (!r.contains(e[i]))
        return false;
    return true;
  }
  return this.each((typeof n == "function" ? Ke : n ? Ge : Je)(e, n));
}
function Ze() {
  this.textContent = "";
}
function tr(t2) {
  return function() {
    this.textContent = t2;
  };
}
function nr(t2) {
  return function() {
    var n = t2.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function er(t2) {
  return arguments.length ? this.each(t2 == null ? Ze : (typeof t2 == "function" ? nr : tr)(t2)) : this.node().textContent;
}
function rr() {
  this.innerHTML = "";
}
function ir(t2) {
  return function() {
    this.innerHTML = t2;
  };
}
function ar(t2) {
  return function() {
    var n = t2.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function or(t2) {
  return arguments.length ? this.each(t2 == null ? rr : (typeof t2 == "function" ? ar : ir)(t2)) : this.node().innerHTML;
}
function sr() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ur() {
  return this.each(sr);
}
function lr() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function cr() {
  return this.each(lr);
}
function hr(t2) {
  var n = typeof t2 == "function" ? t2 : fn(t2);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function fr() {
  return null;
}
function pr(t2, n) {
  var e = typeof t2 == "function" ? t2 : fn(t2), r = n == null ? fr : typeof n == "function" ? n : Xt(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function dr() {
  var t2 = this.parentNode;
  t2 && t2.removeChild(this);
}
function _r() {
  return this.each(dr);
}
function vr() {
  var t2 = this.cloneNode(false), n = this.parentNode;
  return n ? n.insertBefore(t2, this.nextSibling) : t2;
}
function mr() {
  var t2 = this.cloneNode(true), n = this.parentNode;
  return n ? n.insertBefore(t2, this.nextSibling) : t2;
}
function gr(t2) {
  return this.select(t2 ? mr : vr);
}
function yr(t2) {
  return arguments.length ? this.property("__data__", t2) : this.node().__data__;
}
function wr(t2) {
  return function(n) {
    t2.call(this, n, this.__data__);
  };
}
function br(t2) {
  return t2.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function xr(t2) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t2.type || a.type === t2.type) && a.name === t2.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function $r(t2, n, e) {
  return function() {
    var r = this.__on, i, a = wr(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t2.type && i.name === t2.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t2.type, a, e), i = { type: t2.type, name: t2.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function kr(t2, n, e) {
  var r = br(t2 + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? $r : xr, i = 0; i < a; ++i)
    this.each(s(r[i], n, e));
  return this;
}
function xn(t2, n, e) {
  var r = mn(t2), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, false, false)), t2.dispatchEvent(i);
}
function Ar(t2, n) {
  return function() {
    return xn(this, t2, n);
  };
}
function Nr(t2, n) {
  return function() {
    return xn(this, t2, n.apply(this, arguments));
  };
}
function Mr(t2, n) {
  return this.each((typeof n == "function" ? Nr : Ar)(t2, n));
}
function* Er() {
  for (var t2 = this._groups, n = 0, e = t2.length; n < e; ++n)
    for (var r = t2[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var $n = [null];
function w(t2, n) {
  this._groups = t2, this._parents = n;
}
function lt() {
  return new w([[document.documentElement]], $n);
}
function Cr() {
  return this;
}
w.prototype = lt.prototype = { constructor: w, select: ne, selectAll: ae, selectChild: le, selectChildren: pe, filter: de, data: we, enter: _e, exit: xe, join: $e, merge: ke, selection: Cr, order: Ae, sort: Ne, call: Ee, nodes: Ce, node: ze, size: Se, empty: Te, each: qe, attr: He, style: De, property: We, classed: Qe, text: er, html: or, raise: ur, lower: cr, append: hr, insert: pr, remove: _r, clone: gr, datum: yr, on: kr, dispatch: Mr, [Symbol.iterator]: Er };
function qa(t2) {
  return typeof t2 == "string" ? new w([[document.querySelector(t2)]], [document.documentElement]) : new w([[t2]], $n);
}
function Rt(t2, n, e) {
  t2.prototype = n.prototype = e, e.constructor = t2;
}
function kn(t2, n) {
  var e = Object.create(t2.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function ct() {
}
var at = 0.7, gt = 1 / at, Q = "\\s*([+-]?\\d+)\\s*", ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", E = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", zr = /^#([0-9a-f]{3,8})$/, Sr = new RegExp(`^rgb\\(${Q},${Q},${Q}\\)$`), Tr = new RegExp(`^rgb\\(${E},${E},${E}\\)$`), qr = new RegExp(`^rgba\\(${Q},${Q},${Q},${ot}\\)$`), Pr = new RegExp(`^rgba\\(${E},${E},${E},${ot}\\)$`), Lr = new RegExp(`^hsl\\(${ot},${E},${E}\\)$`), Ir = new RegExp(`^hsla\\(${ot},${E},${E},${ot}\\)$`), Jt = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
Rt(ct, st, { copy(t2) {
  return Object.assign(new this.constructor(), this, t2);
}, displayable() {
  return this.rgb().displayable();
}, hex: Kt, formatHex: Kt, formatHex8: Xr, formatHsl: Or, formatRgb: Qt, toString: Qt });
function Kt() {
  return this.rgb().formatHex();
}
function Xr() {
  return this.rgb().formatHex8();
}
function Or() {
  return An(this).formatHsl();
}
function Qt() {
  return this.rgb().formatRgb();
}
function st(t2) {
  var n, e;
  return t2 = (t2 + "").trim().toLowerCase(), (n = zr.exec(t2)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Zt(n) : e === 3 ? new y(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? ht(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? ht(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Sr.exec(t2)) ? new y(n[1], n[2], n[3], 1) : (n = Tr.exec(t2)) ? new y(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = qr.exec(t2)) ? ht(n[1], n[2], n[3], n[4]) : (n = Pr.exec(t2)) ? ht(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Lr.exec(t2)) ? en(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ir.exec(t2)) ? en(n[1], n[2] / 100, n[3] / 100, n[4]) : Jt.hasOwnProperty(t2) ? Zt(Jt[t2]) : t2 === "transparent" ? new y(NaN, NaN, NaN, 0) : null;
}
function Zt(t2) {
  return new y(t2 >> 16 & 255, t2 >> 8 & 255, t2 & 255, 1);
}
function ht(t2, n, e, r) {
  return r <= 0 && (t2 = n = e = NaN), new y(t2, n, e, r);
}
function Rr(t2) {
  return t2 instanceof ct || (t2 = st(t2)), t2 ? (t2 = t2.rgb(), new y(t2.r, t2.g, t2.b, t2.opacity)) : new y();
}
function zt(t2, n, e, r) {
  return arguments.length === 1 ? Rr(t2) : new y(t2, n, e, r ?? 1);
}
function y(t2, n, e, r) {
  this.r = +t2, this.g = +n, this.b = +e, this.opacity = +r;
}
Rt(y, zt, kn(ct, { brighter(t2) {
  return t2 = t2 == null ? gt : Math.pow(gt, t2), new y(this.r * t2, this.g * t2, this.b * t2, this.opacity);
}, darker(t2) {
  return t2 = t2 == null ? at : Math.pow(at, t2), new y(this.r * t2, this.g * t2, this.b * t2, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new y(W(this.r), W(this.g), W(this.b), yt(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: tn, formatHex: tn, formatHex8: Hr, formatRgb: nn, toString: nn }));
function tn() {
  return `#${U(this.r)}${U(this.g)}${U(this.b)}`;
}
function Hr() {
  return `#${U(this.r)}${U(this.g)}${U(this.b)}${U((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nn() {
  const t2 = yt(this.opacity);
  return `${t2 === 1 ? "rgb(" : "rgba("}${W(this.r)}, ${W(this.g)}, ${W(this.b)}${t2 === 1 ? ")" : `, ${t2})`}`;
}
function yt(t2) {
  return isNaN(t2) ? 1 : Math.max(0, Math.min(1, t2));
}
function W(t2) {
  return Math.max(0, Math.min(255, Math.round(t2) || 0));
}
function U(t2) {
  return t2 = W(t2), (t2 < 16 ? "0" : "") + t2.toString(16);
}
function en(t2, n, e, r) {
  return r <= 0 ? t2 = n = e = NaN : e <= 0 || e >= 1 ? t2 = n = NaN : n <= 0 && (t2 = NaN), new A(t2, n, e, r);
}
function An(t2) {
  if (t2 instanceof A)
    return new A(t2.h, t2.s, t2.l, t2.opacity);
  if (t2 instanceof ct || (t2 = st(t2)), !t2)
    return new A();
  if (t2 instanceof A)
    return t2;
  t2 = t2.rgb();
  var n = t2.r / 255, e = t2.g / 255, r = t2.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, u = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new A(o, s, u, t2.opacity);
}
function Yr(t2, n, e, r) {
  return arguments.length === 1 ? An(t2) : new A(t2, n, e, r ?? 1);
}
function A(t2, n, e, r) {
  this.h = +t2, this.s = +n, this.l = +e, this.opacity = +r;
}
Rt(A, Yr, kn(ct, { brighter(t2) {
  return t2 = t2 == null ? gt : Math.pow(gt, t2), new A(this.h, this.s, this.l * t2, this.opacity);
}, darker(t2) {
  return t2 = t2 == null ? at : Math.pow(at, t2), new A(this.h, this.s, this.l * t2, this.opacity);
}, rgb() {
  var t2 = this.h % 360 + (this.h < 0) * 360, n = isNaN(t2) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
  return new y(Mt(t2 >= 240 ? t2 - 240 : t2 + 120, i, r), Mt(t2, i, r), Mt(t2 < 120 ? t2 + 240 : t2 - 120, i, r), this.opacity);
}, clamp() {
  return new A(rn(this.h), ft(this.s), ft(this.l), yt(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const t2 = yt(this.opacity);
  return `${t2 === 1 ? "hsl(" : "hsla("}${rn(this.h)}, ${ft(this.s) * 100}%, ${ft(this.l) * 100}%${t2 === 1 ? ")" : `, ${t2})`}`;
} }));
function rn(t2) {
  return t2 = (t2 || 0) % 360, t2 < 0 ? t2 + 360 : t2;
}
function ft(t2) {
  return Math.max(0, Math.min(1, t2 || 0));
}
function Mt(t2, n, e) {
  return (t2 < 60 ? n + (e - n) * t2 / 60 : t2 < 180 ? e : t2 < 240 ? n + (e - n) * (240 - t2) / 60 : n) * 255;
}
const Ht = (t2) => () => t2;
function Nn(t2, n) {
  return function(e) {
    return t2 + e * n;
  };
}
function jr(t2, n, e) {
  return t2 = Math.pow(t2, e), n = Math.pow(n, e) - t2, e = 1 / e, function(r) {
    return Math.pow(t2 + r * n, e);
  };
}
function Pa(t2, n) {
  var e = n - t2;
  return e ? Nn(t2, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Ht(isNaN(t2) ? n : t2);
}
function Br(t2) {
  return (t2 = +t2) == 1 ? Mn : function(n, e) {
    return e - n ? jr(n, e, t2) : Ht(isNaN(n) ? e : n);
  };
}
function Mn(t2, n) {
  var e = n - t2;
  return e ? Nn(t2, e) : Ht(isNaN(t2) ? n : t2);
}
const an = function t(n) {
  var e = Br(n);
  function r(i, a) {
    var o = e((i = zt(i)).r, (a = zt(a)).r), s = e(i.g, a.g), u = e(i.b, a.b), l = Mn(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function D(t2, n) {
  return t2 = +t2, n = +n, function(e) {
    return t2 * (1 - e) + n * e;
  };
}
var St = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Et = new RegExp(St.source, "g");
function Dr(t2) {
  return function() {
    return t2;
  };
}
function Fr(t2) {
  return function(n) {
    return t2(n) + "";
  };
}
function Vr(t2, n) {
  var e = St.lastIndex = Et.lastIndex = 0, r, i, a, o = -1, s = [], u = [];
  for (t2 = t2 + "", n = n + ""; (r = St.exec(t2)) && (i = Et.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, u.push({ i: o, x: D(r, i) })), e = Et.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? u[0] ? Fr(u[0].x) : Dr(n) : (n = u.length, function(l) {
    for (var c = 0, h; c < n; ++c)
      s[(h = u[c]).i] = h.x(l);
    return s.join("");
  });
}
var on = 180 / Math.PI, En = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function Cn(t2, n, e, r, i, a) {
  var o, s, u;
  return (o = Math.sqrt(t2 * t2 + n * n)) && (t2 /= o, n /= o), (u = t2 * e + n * r) && (e -= t2 * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t2 * r < n * e && (t2 = -t2, n = -n, u = -u, o = -o), { translateX: i, translateY: a, rotate: Math.atan2(n, t2) * on, skewX: Math.atan(u) * on, scaleX: o, scaleY: s };
}
var pt;
function Ur(t2) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t2 + "");
  return n.isIdentity ? En : Cn(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Wr(t2) {
  return t2 == null || (pt || (pt = document.createElementNS("http://www.w3.org/2000/svg", "g")), pt.setAttribute("transform", t2), !(t2 = pt.transform.baseVal.consolidate())) ? En : (t2 = t2.matrix, Cn(t2.a, t2.b, t2.c, t2.d, t2.e, t2.f));
}
function zn(t2, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function a(l, c, h, f, p, _) {
    if (l !== h || c !== f) {
      var m = p.push("translate(", null, n, null, e);
      _.push({ i: m - 4, x: D(l, h) }, { i: m - 2, x: D(c, f) });
    } else
      (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(l, c, h, f) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: D(l, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(l, c, h, f) {
    l !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: D(l, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function u(l, c, h, f, p, _) {
    if (l !== h || c !== f) {
      var m = p.push(i(p) + "scale(", null, ",", null, ")");
      _.push({ i: m - 4, x: D(l, h) }, { i: m - 2, x: D(c, f) });
    } else
      (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(l, c) {
    var h = [], f = [];
    return l = t2(l), c = t2(c), a(l.translateX, l.translateY, c.translateX, c.translateY, h, f), o(l.rotate, c.rotate, h, f), s(l.skewX, c.skewX, h, f), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, h, f), l = c = null, function(p) {
      for (var _ = -1, m = f.length, b; ++_ < m; )
        h[(b = f[_]).i] = b.x(p);
      return h.join("");
    };
  };
}
var Gr = zn(Ur, "px, ", "px)", "deg)"), Jr = zn(Wr, ", ", ")", ")"), tt = 0, rt = 0, et = 0, Sn = 1e3, wt, it, bt = 0, G = 0, kt = 0, ut = typeof performance == "object" && performance.now ? performance : Date, Tn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t2) {
  setTimeout(t2, 17);
};
function Yt() {
  return G || (Tn(Kr), G = ut.now() + kt);
}
function Kr() {
  G = 0;
}
function xt() {
  this._call = this._time = this._next = null;
}
xt.prototype = qn.prototype = { constructor: xt, restart: function(t2, n, e) {
  if (typeof t2 != "function")
    throw new TypeError("callback is not a function");
  e = (e == null ? Yt() : +e) + (n == null ? 0 : +n), !this._next && it !== this && (it ? it._next = this : wt = this, it = this), this._call = t2, this._time = e, Tt();
}, stop: function() {
  this._call && (this._call = null, this._time = 1 / 0, Tt());
} };
function qn(t2, n, e) {
  var r = new xt();
  return r.restart(t2, n, e), r;
}
function Qr() {
  Yt(), ++tt;
  for (var t2 = wt, n; t2; )
    (n = G - t2._time) >= 0 && t2._call.call(void 0, n), t2 = t2._next;
  --tt;
}
function sn() {
  G = (bt = ut.now()) + kt, tt = rt = 0;
  try {
    Qr();
  } finally {
    tt = 0, ti(), G = 0;
  }
}
function Zr() {
  var t2 = ut.now(), n = t2 - bt;
  n > Sn && (kt -= n, bt = t2);
}
function ti() {
  for (var t2, n = wt, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t2 = n, n = n._next) : (e = n._next, n._next = null, n = t2 ? t2._next = e : wt = e);
  it = t2, Tt(r);
}
function Tt(t2) {
  if (!tt) {
    rt && (rt = clearTimeout(rt));
    var n = t2 - G;
    n > 24 ? (t2 < 1 / 0 && (rt = setTimeout(sn, t2 - ut.now() - kt)), et && (et = clearInterval(et))) : (et || (bt = ut.now(), et = setInterval(Zr, Sn)), tt = 1, Tn(sn));
  }
}
function un(t2, n, e) {
  var r = new xt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t2(i + n);
  }, n, e), r;
}
var ni = hn("start", "end", "cancel", "interrupt"), ei = [], Pn = 0, ln = 1, qt = 2, _t = 3, cn = 4, Pt = 5, vt = 6;
function At(t2, n, e, r, i, a) {
  var o = t2.__transition;
  if (!o)
    t2.__transition = {};
  else if (e in o)
    return;
  ri(t2, e, { name: n, index: r, group: i, on: ni, tween: ei, time: a.time, delay: a.delay, duration: a.duration, ease: a.ease, timer: null, state: Pn });
}
function jt(t2, n) {
  var e = N(t2, n);
  if (e.state > Pn)
    throw new Error("too late; already scheduled");
  return e;
}
function C(t2, n) {
  var e = N(t2, n);
  if (e.state > _t)
    throw new Error("too late; already running");
  return e;
}
function N(t2, n) {
  var e = t2.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function ri(t2, n, e) {
  var r = t2.__transition, i;
  r[n] = e, e.timer = qn(a, 0, e.time);
  function a(l) {
    e.state = ln, e.timer.restart(o, e.delay, e.time), e.delay <= l && o(l - e.delay);
  }
  function o(l) {
    var c, h, f, p;
    if (e.state !== ln)
      return u();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === _t)
          return un(o);
        p.state === cn ? (p.state = vt, p.timer.stop(), p.on.call("interrupt", t2, t2.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = vt, p.timer.stop(), p.on.call("cancel", t2, t2.__data__, p.index, p.group), delete r[c]);
      }
    if (un(function() {
      e.state === _t && (e.state = cn, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = qt, e.on.call("start", t2, t2.__data__, e.index, e.group), e.state === qt) {
      for (e.state = _t, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t2, t2.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(l) {
    for (var c = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = Pt, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t2, c);
    e.state === Pt && (e.on.call("end", t2, t2.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = vt, e.timer.stop(), delete r[n];
    for (var l in r)
      return;
    delete t2.__transition;
  }
}
function ii(t2, n) {
  var e = t2.__transition, r, i, a = true, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = false;
        continue;
      }
      i = r.state > qt && r.state < Pt, r.state = vt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t2, t2.__data__, r.index, r.group), delete e[o];
    }
    a && delete t2.__transition;
  }
}
function ai(t2) {
  return this.each(function() {
    ii(this, t2);
  });
}
function oi(t2, n) {
  var e, r;
  return function() {
    var i = C(this, t2), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function si(t2, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var a = C(this, t2), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    a.tween = i;
  };
}
function ui(t2, n) {
  var e = this._id;
  if (t2 += "", arguments.length < 2) {
    for (var r = N(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t2)
        return o.value;
    return null;
  }
  return this.each((n == null ? oi : si)(e, t2, n));
}
function Bt(t2, n, e) {
  var r = t2._id;
  return t2.each(function() {
    var i = C(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return N(i, r).value[n];
  };
}
function Ln(t2, n) {
  var e;
  return (typeof n == "number" ? D : n instanceof st ? an : (e = st(n)) ? (n = e, an) : Vr)(t2, n);
}
function li(t2) {
  return function() {
    this.removeAttribute(t2);
  };
}
function ci(t2) {
  return function() {
    this.removeAttributeNS(t2.space, t2.local);
  };
}
function hi(t2, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t2);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function fi(t2, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t2.space, t2.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function pi(t2, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), u;
    return s == null ? void this.removeAttribute(t2) : (o = this.getAttribute(t2), u = s + "", o === u ? null : o === r && u === i ? a : (i = u, a = n(r = o, s)));
  };
}
function di(t2, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t2.space, t2.local) : (o = this.getAttributeNS(t2.space, t2.local), u = s + "", o === u ? null : o === r && u === i ? a : (i = u, a = n(r = o, s)));
  };
}
function _i(t2, n) {
  var e = $t(t2), r = e === "transform" ? Jr : Ln;
  return this.attrTween(t2, typeof n == "function" ? (e.local ? di : pi)(e, r, Bt(this, "attr." + t2, n)) : n == null ? (e.local ? ci : li)(e) : (e.local ? fi : hi)(e, r, n));
}
function vi(t2, n) {
  return function(e) {
    this.setAttribute(t2, n.call(this, e));
  };
}
function mi(t2, n) {
  return function(e) {
    this.setAttributeNS(t2.space, t2.local, n.call(this, e));
  };
}
function gi(t2, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && mi(t2, a)), e;
  }
  return i._value = n, i;
}
function yi(t2, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && vi(t2, a)), e;
  }
  return i._value = n, i;
}
function wi(t2, n) {
  var e = "attr." + t2;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = $t(t2);
  return this.tween(e, (r.local ? gi : yi)(r, n));
}
function bi(t2, n) {
  return function() {
    jt(this, t2).delay = +n.apply(this, arguments);
  };
}
function xi(t2, n) {
  return n = +n, function() {
    jt(this, t2).delay = n;
  };
}
function $i(t2) {
  var n = this._id;
  return arguments.length ? this.each((typeof t2 == "function" ? bi : xi)(n, t2)) : N(this.node(), n).delay;
}
function ki(t2, n) {
  return function() {
    C(this, t2).duration = +n.apply(this, arguments);
  };
}
function Ai(t2, n) {
  return n = +n, function() {
    C(this, t2).duration = n;
  };
}
function Ni(t2) {
  var n = this._id;
  return arguments.length ? this.each((typeof t2 == "function" ? ki : Ai)(n, t2)) : N(this.node(), n).duration;
}
function Mi(t2, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    C(this, t2).ease = n;
  };
}
function Ei(t2) {
  var n = this._id;
  return arguments.length ? this.each(Mi(n, t2)) : N(this.node(), n).ease;
}
function Ci(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    C(this, t2).ease = e;
  };
}
function zi(t2) {
  if (typeof t2 != "function")
    throw new Error();
  return this.each(Ci(this._id, t2));
}
function Si(t2) {
  typeof t2 != "function" && (t2 = dn(t2));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], u, l = 0; l < o; ++l)
      (u = a[l]) && t2.call(u, u.__data__, l, a) && s.push(u);
  return new I(r, this._parents, this._name, this._id);
}
function Ti(t2) {
  if (t2._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t2._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var u = n[s], l = e[s], c = u.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = u[p] || l[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new I(o, this._parents, this._name, this._id);
}
function qi(t2) {
  return (t2 + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Pi(t2, n, e) {
  var r, i, a = qi(n) ? jt : C;
  return function() {
    var o = a(this, t2), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function Li(t2, n) {
  var e = this._id;
  return arguments.length < 2 ? N(this.node(), e).on.on(t2) : this.each(Pi(e, t2, n));
}
function Ii(t2) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t2)
        return;
    n && n.removeChild(this);
  };
}
function Xi() {
  return this.on("end.remove", Ii(this._id));
}
function Oi(t2) {
  var n = this._name, e = this._id;
  typeof t2 != "function" && (t2 = Xt(t2));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], u = s.length, l = a[o] = new Array(u), c, h, f = 0; f < u; ++f)
      (c = s[f]) && (h = t2.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), l[f] = h, At(l[f], n, e, f, l, N(c, e)));
  return new I(a, this._parents, n, e);
}
function Ri(t2) {
  var n = this._name, e = this._id;
  typeof t2 != "function" && (t2 = pn(t2));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, h = 0; h < l; ++h)
      if (c = u[h]) {
        for (var f = t2.call(c, c.__data__, h, u), p, _ = N(c, e), m = 0, b = f.length; m < b; ++m)
          (p = f[m]) && At(p, n, e, m, f, _);
        a.push(f), o.push(c);
      }
  return new I(a, o, n, e);
}
var Hi = lt.prototype.constructor;
function Yi() {
  return new Hi(this._groups, this._parents);
}
function ji(t2, n) {
  var e, r, i;
  return function() {
    var a = Z(this, t2), o = (this.style.removeProperty(t2), Z(this, t2));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function In(t2) {
  return function() {
    this.style.removeProperty(t2);
  };
}
function Bi(t2, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = Z(this, t2);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Di(t2, n, e) {
  var r, i, a;
  return function() {
    var o = Z(this, t2), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t2), Z(this, t2))), o === u ? null : o === r && u === i ? a : (i = u, a = n(r = o, s));
  };
}
function Fi(t2, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var u = C(this, t2), l = u.on, c = u.value[a] == null ? s || (s = In(n)) : void 0;
    (l !== e || i !== c) && (r = (e = l).copy()).on(o, i = c), u.on = r;
  };
}
function Vi(t2, n, e) {
  var r = (t2 += "") == "transform" ? Gr : Ln;
  return n == null ? this.styleTween(t2, ji(t2, r)).on("end.style." + t2, In(t2)) : typeof n == "function" ? this.styleTween(t2, Di(t2, r, Bt(this, "style." + t2, n))).each(Fi(this._id, t2)) : this.styleTween(t2, Bi(t2, r, n), e).on("end.style." + t2, null);
}
function Ui(t2, n, e) {
  return function(r) {
    this.style.setProperty(t2, n.call(this, r), e);
  };
}
function Wi(t2, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && Ui(t2, o, e)), r;
  }
  return a._value = n, a;
}
function Gi(t2, n, e) {
  var r = "style." + (t2 += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, Wi(t2, n, e ?? ""));
}
function Ji(t2) {
  return function() {
    this.textContent = t2;
  };
}
function Ki(t2) {
  return function() {
    var n = t2(this);
    this.textContent = n ?? "";
  };
}
function Qi(t2) {
  return this.tween("text", typeof t2 == "function" ? Ki(Bt(this, "text", t2)) : Ji(t2 == null ? "" : t2 + ""));
}
function Zi(t2) {
  return function(n) {
    this.textContent = t2.call(this, n);
  };
}
function ta(t2) {
  var n, e;
  function r() {
    var i = t2.apply(this, arguments);
    return i !== e && (n = (e = i) && Zi(i)), n;
  }
  return r._value = t2, r;
}
function na(t2) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t2 == null)
    return this.tween(n, null);
  if (typeof t2 != "function")
    throw new Error();
  return this.tween(n, ta(t2));
}
function ea() {
  for (var t2 = this._name, n = this._id, e = Xn(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, u, l = 0; l < s; ++l)
      if (u = o[l]) {
        var c = N(u, n);
        At(u, t2, e, l, o, { time: c.time + c.delay + c.duration, delay: 0, duration: c.duration, ease: c.ease });
      }
  return new I(r, this._parents, t2, e);
}
function ra() {
  var t2, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, u = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var l = C(this, r), c = l.on;
      c !== t2 && (n = (t2 = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && a();
  });
}
var ia = 0;
function I(t2, n, e, r) {
  this._groups = t2, this._parents = n, this._name = e, this._id = r;
}
function Xn() {
  return ++ia;
}
var L = lt.prototype;
I.prototype = { constructor: I, select: Oi, selectAll: Ri, selectChild: L.selectChild, selectChildren: L.selectChildren, filter: Si, merge: Ti, selection: Yi, transition: ea, call: L.call, nodes: L.nodes, node: L.node, size: L.size, empty: L.empty, each: L.each, on: Li, attr: _i, attrTween: wi, style: Vi, styleTween: Gi, text: Qi, textTween: na, remove: Xi, tween: ui, delay: $i, duration: Ni, ease: Ei, easeVarying: zi, end: ra, [Symbol.iterator]: L[Symbol.iterator] };
function aa(t2) {
  return ((t2 *= 2) <= 1 ? t2 * t2 * t2 : (t2 -= 2) * t2 * t2 + 2) / 2;
}
var oa = { time: null, delay: 0, duration: 250, ease: aa };
function sa(t2, n) {
  for (var e; !(e = t2.__transition) || !(e = e[n]); )
    if (!(t2 = t2.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function ua(t2) {
  var n, e;
  t2 instanceof I ? (n = t2._id, t2 = t2._name) : (n = Xn(), (e = oa).time = Yt(), t2 = t2 == null ? null : t2 + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, u, l = 0; l < s; ++l)
      (u = o[l]) && At(u, t2, n, l, o, e || sa(u, n));
  return new I(r, this._parents, t2, n);
}
lt.prototype.interrupt = ai;
lt.prototype.transition = ua;
const Lt = Math.PI, It = 2 * Lt, V = 1e-6, la = It - V;
function On(t2) {
  this._ += t2[0];
  for (let n = 1, e = t2.length; n < e; ++n)
    this._ += arguments[n] + t2[n];
}
function ca(t2) {
  let n = Math.floor(t2);
  if (!(n >= 0))
    throw new Error(`invalid digits: ${t2}`);
  if (n > 15)
    return On;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class ha {
  constructor(n) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = n == null ? On : ca(n);
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
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0)
      throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, u = r - n, l = i - e, c = o - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > V)
      if (!(Math.abs(h * u - l * c) > V) || !a)
        this._append`L${this._x1 = n},${this._y1 = e}`;
      else {
        let p = r - o, _ = i - s, m = u * u + l * l, b = p * p + _ * _, F = Math.sqrt(m), x = Math.sqrt(f), M = a * Math.tan((Lt - Math.acos((m + f - b) / (2 * F * x))) / 2), $ = M / x, X = M / F;
        Math.abs($ - 1) > V && this._append`L${n + $ * c},${e + $ * h}`, this._append`A${a},${a},0,0,${+(h * p > c * _)},${this._x1 = n + X * u},${this._y1 = e + X * l}`;
      }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0)
      throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, c = e + u, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > V || Math.abs(this._y1 - c) > V) && this._append`L${l},${c}`, r && (f < 0 && (f = f % It + It), f > la ? this._append`A${r},${r},0,1,${h},${n - s},${e - u}A${r},${r},0,1,${h},${this._x1 = l},${this._y1 = c}` : f > V && this._append`A${r},${r},0,${+(f >= Lt)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function La(t2) {
  return function() {
    return t2;
  };
}
function Ia(t2) {
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
  }, () => new ha(n);
}
var Xa = Array.prototype.slice;
function Oa(t2) {
  return typeof t2 == "object" && "length" in t2 ? t2 : Array.from(t2);
}
function Ra(t2) {
  return t2[0];
}
function Ha(t2) {
  return t2[1];
}
class Rn {
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
function Ya(t2) {
  return new Rn(t2, true);
}
function ja(t2) {
  return new Rn(t2, false);
}
function K(t2, n, e) {
  this.k = t2, this.x = n, this.y = e;
}
K.prototype = { constructor: K, scale: function(t2) {
  return t2 === 1 ? this : new K(this.k * t2, this.x, this.y);
}, translate: function(t2, n) {
  return t2 === 0 & n === 0 ? this : new K(this.k, this.x + this.k * t2, this.y + this.k * n);
}, apply: function(t2) {
  return [t2[0] * this.k + this.x, t2[1] * this.k + this.y];
}, applyX: function(t2) {
  return t2 * this.k + this.x;
}, applyY: function(t2) {
  return t2 * this.k + this.y;
}, invert: function(t2) {
  return [(t2[0] - this.x) / this.k, (t2[1] - this.y) / this.k];
}, invertX: function(t2) {
  return (t2 - this.x) / this.k;
}, invertY: function(t2) {
  return (t2 - this.y) / this.k;
}, rescaleX: function(t2) {
  return t2.copy().domain(t2.range().map(this.invertX, this).map(t2.invert, t2));
}, rescaleY: function(t2) {
  return t2.copy().domain(t2.range().map(this.invertY, this).map(t2.invert, t2));
}, toString: function() {
  return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
} };
var fa = new K(1, 0, 0);
pa.prototype = K.prototype;
function pa(t2) {
  for (; !t2.__zoom; )
    if (!(t2 = t2.parentNode))
      return fa;
  return t2.__zoom;
}
function da(t2, n) {
  const e = (r) => {
    t2 && (t2.contains(r.target) || n());
  };
  return document.addEventListener("click", e, true), { destroy() {
    document.removeEventListener("click", e, true);
  } };
}
const _a = { class: "diagram-viewer__header" }, va = { class: "diagram-viewer__tabs-container" }, ma = { key: 0, class: "diagram-viewer__tabs" }, ga = { key: 0, class: "diagram-viewer__center" }, ya = { class: "diagram-viewer__actions" }, wa = { class: "diagram-viewer__icon" }, ba = { class: "diagram-viewer__icon" }, xa = { class: "diagram-viewer__dropdown-menu" }, $a = { key: 1, class: "diagram-viewer__line" }, ka = { class: "diagram-viewer__actions" }, Aa = { class: "diagram-viewer__code", key: "code" }, Na = { class: "diagram-viewer__code-pre" }, Ma = { class: "diagram-viewer__content-tooltip" }, Ea = { class: "diagram-viewer__actions" }, Ca = { class: "diagram-viewer__zoom-level" }, za = { __name: "viewer", props: { value: { type: String, default: "" } }, emits: ["refresh", "zoomIn", "zoomOut", "fullscreen", "select", "unselect", "zoomChange", "downloadImage", "copyImage"], setup(t2, { emit: n }) {
  const e = t2, r = R(1), i = R(null), a = n, o = R(null), s = R("image"), u = R(false), l = R(false), c = R(false), h = R(false), f = () => {
    c.value = true, a("select");
  }, p = () => {
    u.value = !u.value;
  };
  let _;
  const m = () => {
    _ && clearTimeout(_), h.value = true;
  }, b = () => {
    _ && clearTimeout(_), _ = setTimeout(() => {
      h.value = false;
    }, 600);
  }, F = () => {
    a("refresh"), r.value = 1;
  }, x = () => {
    a("zoomIn"), r.value = +(r.value * 1.2).toFixed(2);
  }, M = () => {
    a("zoomOut"), r.value = +(r.value / 1.2).toFixed(2);
  }, $ = () => {
    l.value = !l.value, a("fullscreen", l.value);
  }, X = () => {
    u.value = false, a("downloadImage");
  }, Dt = async () => {
    a("copyImage"), u.value = false;
  }, Hn = () => {
    Wn(e.value), u.value = false;
  }, Ft = (z) => {
    r.value = z.detail;
  };
  let Nt;
  return Bn(() => {
    Nt = da(o.value, () => {
      u.value = false, c.value = false, a("unselect");
    }), i.value && i.value.addEventListener("zoomChange", Ft);
  }), Dn(() => {
    Nt == null ? void 0 : Nt.destroy(), i.value && i.value.removeEventListener("zoomChange", Ft);
  }), (z, O) => (S(), H("div", { class: nt(["diagram-viewer__container", { "is-hovered": h.value }]), onMouseenter: m, onMouseleave: b }, [d("div", { class: nt(["diagram-viewer", { "diagram-viewer--fixed": l.value }]) }, [Y(d("div", _a, [d("div", va, [l.value ? (S(), H("div", ma, [d("div", { class: nt(["diagram-viewer__tab", { "diagram-viewer__tab--active": s.value === "image" }]), onClick: O[0] || (O[0] = (Yn) => s.value = "image") }, B(z.$hubx_t("hubx.bubble.image")), 3), d("div", { class: nt(["diagram-viewer__tab", { "diagram-viewer__tab--active": s.value === "code" }]), onClick: O[1] || (O[1] = (Yn) => s.value = "code") }, B(z.$hubx_t("hubx.bubble.code")), 3)])) : J("", true)]), l.value && s.value === "image" ? (S(), H("div", ga, [d("span", { class: "diagram-viewer__icon", onClick: X }, [v(g, { size: "18px", name: "download" }), d("span", null, B(z.$hubx_t("hubx.bubble.download_image")), 1)]), d("span", { class: "diagram-viewer__icon", onClick: Dt }, [v(g, { size: "18px", name: "copy" }), d("span", null, B(z.$hubx_t("hubx.bubble.copy_image")), 1)])])) : J("", true), Y(d("div", ya, [l.value ? J("", true) : (S(), H(Vt, { key: 0 }, [d("div", { class: "diagram-viewer__dropdown", ref_key: "dropdownRef", ref: o }, [d("span", { class: "diagram-viewer__dropdown-trigger", onClick: p }, [d("span", wa, [v(g, { size: "18px", name: "download" })]), d("span", ba, [v(g, { size: "10px", name: "down" })])]), Y(d("div", xa, [d("div", { class: "diagram-viewer__dropdown-item", onClick: X }, B(z.$hubx_t("hubx.bubble.download_image")), 1), d("div", { class: "diagram-viewer__dropdown-item", onClick: Dt }, B(z.$hubx_t("hubx.bubble.copy_image")), 1)], 512), [[j, u.value]])], 512), O[2] || (O[2] = d("div", { class: "diagram-viewer__line" }, null, -1))], 64)), v(P, { content: T(q).global.t("hubx.bubble.zoom_out"), placement: "top", trigger: "hover" }, { default: k(() => [d("span", { class: "diagram-viewer__icon", onClick: M }, [v(g, { size: "18px", name: "zoom-out" })])]), _: 1 }, 8, ["content"]), v(P, { content: T(q).global.t("hubx.bubble.zoom_in"), placement: "top", trigger: "hover" }, { default: k(() => [d("span", { class: "diagram-viewer__icon", onClick: x }, [v(g, { size: "18px", name: "zoom-in" })])]), _: 1 }, 8, ["content"]), v(P, { content: T(q).global.t("hubx.bubble.adaption"), placement: "top", trigger: "hover" }, { default: k(() => [d("span", { class: "diagram-viewer__icon", onClick: F }, [v(g, { size: "18px", name: "fullscreen" })])]), _: 1 }, 8, ["content"]), l.value ? (S(), H("div", $a)) : J("", true), l.value ? (S(), H("span", { key: 2, class: "diagram-viewer__icon", onClick: $ }, [v(g, { size: "18px", name: "close" })])) : (S(), Fn(P, { key: 3, content: T(q).global.t("hubx.bubble.fullscreen"), placement: "top", trigger: "hover" }, { default: k(() => [d("span", { class: "diagram-viewer__icon", onClick: $ }, [v(g, { size: "18px", name: "expand" })])]), _: 1 }, 8, ["content"]))], 512), [[j, s.value === "image"]]), Y(d("div", ka, [v(P, { content: T(q).global.t("hubx.bubble.copy"), placement: "top", trigger: "hover" }, { default: k(() => [d("span", { class: "diagram-viewer__icon", onClick: Hn }, [v(g, { size: "18px", name: "copy" })])]), _: 1 }, 8, ["content"])], 512), [[j, s.value === "code"]])], 512), [[j, l.value]]), d("div", { class: nt(["diagram-viewer__content", { "diagram-viewer__content--selected": !l.value && (c.value || h.value) }]), onClick: f }, [v(Ut, { name: "slide-fade", mode: "out-in" }, { default: k(() => [Y(d("div", { class: "diagram-viewer__image-content", ref_key: "imageContentRef", ref: i, onDblclick: $ }, [Vn(z.$slots, "image-content", {}, void 0, true)], 544), [[j, s.value === "image"]])]), _: 3 }), v(Ut, { name: "slide-fade", mode: "out-in" }, { default: k(() => [Y(d("div", Aa, [d("pre", Na, B(t2.value), 1)], 512), [[j, s.value === "code"]])]), _: 1 }), Y(d("div", Ma, [Y(d("div", Ea, [l.value ? J("", true) : (S(), H(Vt, { key: 0 }, [v(P, { content: T(q).global.t("hubx.bubble.adaption"), placement: "top", trigger: "hover" }, { default: k(() => [d("span", { class: "diagram-viewer__icon", onClick: F }, [v(g, { size: "18px", name: "fullscreen" })])]), _: 1 }, 8, ["content"]), O[3] || (O[3] = d("div", { class: "diagram-viewer__line" }, null, -1))], 64)), v(P, { content: T(q).global.t("hubx.bubble.zoom_out"), placement: "top", trigger: "hover" }, { default: k(() => [d("span", { class: "diagram-viewer__icon", onClick: M }, [v(g, { size: "18px", name: "zoom-out" })])]), _: 1 }, 8, ["content"]), d("span", Ca, B((r.value * 100).toFixed(0)) + "%", 1), v(P, { content: T(q).global.t("hubx.bubble.zoom_in"), placement: "top", trigger: "hover" }, { default: k(() => [d("span", { class: "diagram-viewer__icon", onClick: x }, [v(g, { size: "18px", name: "zoom-in" })])]), _: 1 }, 8, ["content"])], 512), [[j, s.value === "image"]])], 512), [[j, c.value && !l.value]])], 2)], 2), c.value || h.value ? (S(), H("div", { key: 0, class: "diagram-viewer__float-tooltip", onMouseenter: m, onMouseleave: b }, [v(P, { content: T(q).global.t("hubx.bubble.fullscreen"), placement: "left", trigger: "hover" }, { default: k(() => [d("span", { class: "diagram-viewer__icon diagram-viewer__icon--float", onClick: Un($, ["stop"]) }, [v(g, { size: "16px", name: "expand" })])]), _: 1 }, 8, ["content"])], 32)) : J("", true)], 34));
} }, Ba = jn(za, [["__scopeId", "data-v-3bdfcf74"]]);
export {
  Mn as A,
  ja as B,
  Ia as D,
  qa as F,
  Xa as H,
  Pa as L,
  Ha as O,
  Oa as P,
  Vr as U,
  Ya as V,
  K as W,
  Ra as X,
  Ba as Y,
  pa as _,
  Rt as a,
  Rr as b,
  ct as c,
  D as d,
  Ht as e,
  hn as f,
  st as g,
  fa as h,
  kn as k,
  an as o,
  da as p,
  La as q,
  ii as r,
  y as w
};
