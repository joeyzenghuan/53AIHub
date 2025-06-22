import { g as wn } from "./_commonjsHelpers-725317a4.js";
import { y as yr, ad as _n, r as Lt, ak as Sn, aq as On, u as Ee, j as Pn, e as xn, b as In } from "./index-8579fe4a.js";
function V(e) {
  "@babel/helpers - typeof";
  return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, V(e);
}
function jn(e, t) {
  if (V(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (V(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gr(e) {
  var t = jn(e, "string");
  return V(t) == "symbol" ? t : t + "";
}
function Z(e, t, r) {
  return (t = gr(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : e[t] = r, e;
}
function Tt(e, t, r, n, o, i, a) {
  try {
    var l = e[i](a), c = l.value;
  } catch (u) {
    return void r(u);
  }
  l.done ? t(c) : Promise.resolve(c).then(n, o);
}
function z(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function a(c) {
        Tt(i, n, o, a, l, "next", c);
      }
      function l(c) {
        Tt(i, n, o, a, l, "throw", c);
      }
      a(void 0);
    });
  };
}
var Er = { exports: {} }, br = { exports: {} };
(function(e) {
  function t(r, n) {
    this.v = r, this.k = n;
  }
  e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
})(br);
var wr = br.exports, _r = { exports: {} }, Sr = { exports: {} };
(function(e) {
  function t(r, n, o, i) {
    var a = Object.defineProperty;
    try {
      a({}, "", {});
    } catch {
      a = 0;
    }
    e.exports = t = function(c, u, s, h) {
      if (u)
        a ? a(c, u, { value: s, enumerable: !h, configurable: !h, writable: !h }) : c[u] = s;
      else {
        var d = function(v, g) {
          t(c, v, function(p) {
            return this._invoke(v, g, p);
          });
        };
        d("next", 0), d("throw", 1), d("return", 2);
      }
    }, e.exports.__esModule = true, e.exports.default = e.exports, t(r, n, o, i);
  }
  e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
})(Sr);
var Or = Sr.exports;
(function(e) {
  var t = Or;
  function r() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var n, o, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", l = i.toStringTag || "@@toStringTag";
    function c(p, m, E, O) {
      var S = m && m.prototype instanceof s ? m : s, j = Object.create(S.prototype);
      return t(j, "_invoke", function(A, L, M) {
        var T, x, C, R = 0, G = M || [], N = false, J = { p: 0, n: 0, v: n, a: w, f: w.bind(n, 4), d: function(b, _) {
          return T = b, x = 0, C = n, J.n = _, u;
        } };
        function w(y, b) {
          for (x = y, C = b, o = 0; !N && R && !_ && o < G.length; o++) {
            var _, P = G[o], I = J.p, D = P[2];
            y > 3 ? (_ = D === b) && (C = P[(x = P[4]) ? 5 : (x = 3, 3)], P[4] = P[5] = n) : P[0] <= I && ((_ = y < 2 && I < P[1]) ? (x = 0, J.v = b, J.n = P[1]) : I < D && (_ = y < 3 || P[0] > b || b > D) && (P[4] = y, P[5] = b, J.n = D, x = 0));
          }
          if (_ || y > 1)
            return u;
          throw N = true, b;
        }
        return function(y, b, _) {
          if (R > 1)
            throw TypeError("Generator is already running");
          for (N && b === 1 && w(b, _), x = b, C = _; (o = x < 2 ? n : C) || !N; ) {
            T || (x ? x < 3 ? (x > 1 && (J.n = -1), w(x, C)) : J.n = C : J.v = C);
            try {
              if (R = 2, T) {
                if (x || (y = "next"), o = T[y]) {
                  if (!(o = o.call(T, C)))
                    throw TypeError("iterator result is not an object");
                  if (!o.done)
                    return o;
                  C = o.value, x < 2 && (x = 0);
                } else
                  x === 1 && (o = T.return) && o.call(T), x < 2 && (C = TypeError("The iterator does not provide a '" + y + "' method"), x = 1);
                T = n;
              } else if ((o = (N = J.n < 0) ? C : A.call(L, J)) !== u)
                break;
            } catch (P) {
              T = n, x = 1, C = P;
            } finally {
              R = 1;
            }
          }
          return { value: o, done: N };
        };
      }(p, E, O), true), j;
    }
    var u = {};
    function s() {
    }
    function h() {
    }
    function d() {
    }
    o = Object.getPrototypeOf;
    var f = [][a] ? o(o([][a]())) : (t(o = {}, a, function() {
      return this;
    }), o), v = d.prototype = s.prototype = Object.create(f);
    function g(p) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(p, d) : (p.__proto__ = d, t(p, l, "GeneratorFunction")), p.prototype = Object.create(v), p;
    }
    return h.prototype = d, t(v, "constructor", d), t(d, "constructor", h), h.displayName = "GeneratorFunction", t(d, l, "GeneratorFunction"), t(v), t(v, l, "Generator"), t(v, a, function() {
      return this;
    }), t(v, "toString", function() {
      return "[object Generator]";
    }), (e.exports = r = function() {
      return { w: c, m: g };
    }, e.exports.__esModule = true, e.exports.default = e.exports)();
  }
  e.exports = r, e.exports.__esModule = true, e.exports.default = e.exports;
})(_r);
var Pr = _r.exports, xr = { exports: {} }, Ir = { exports: {} }, jr = { exports: {} };
(function(e) {
  var t = wr, r = Or;
  function n(o, i) {
    function a(c, u, s, h) {
      try {
        var d = o[c](u), f = d.value;
        return f instanceof t ? i.resolve(f.v).then(function(v) {
          a("next", v, s, h);
        }, function(v) {
          a("throw", v, s, h);
        }) : i.resolve(f).then(function(v) {
          d.value = v, s(d);
        }, function(v) {
          return a("throw", v, s, h);
        });
      } catch (v) {
        h(v);
      }
    }
    var l;
    this.next || (r(n.prototype), r(n.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
      return this;
    })), r(this, "_invoke", function(c, u, s) {
      function h() {
        return new i(function(d, f) {
          a(c, s, d, f);
        });
      }
      return l = l ? l.then(h, h) : h();
    }, true);
  }
  e.exports = n, e.exports.__esModule = true, e.exports.default = e.exports;
})(jr);
var Lr = jr.exports;
(function(e) {
  var t = Pr, r = Lr;
  function n(o, i, a, l, c) {
    return new r(t().w(o, i, a, l), c || Promise);
  }
  e.exports = n, e.exports.__esModule = true, e.exports.default = e.exports;
})(Ir);
var Tr = Ir.exports;
(function(e) {
  var t = Tr;
  function r(n, o, i, a, l) {
    var c = t(n, o, i, a, l);
    return c.next().then(function(u) {
      return u.done ? u.value : c.next();
    });
  }
  e.exports = r, e.exports.__esModule = true, e.exports.default = e.exports;
})(xr);
var Ln = xr.exports, Cr = { exports: {} };
(function(e) {
  function t(r) {
    var n = Object(r), o = [];
    for (var i in n)
      o.unshift(i);
    return function a() {
      for (; o.length; )
        if ((i = o.pop()) in n)
          return a.value = i, a.done = false, a;
      return a.done = true, a;
    };
  }
  e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
})(Cr);
var Tn = Cr.exports, Ar = { exports: {} }, Rr = { exports: {} };
(function(e) {
  function t(r) {
    "@babel/helpers - typeof";
    return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, e.exports.__esModule = true, e.exports.default = e.exports, t(r);
  }
  e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
})(Rr);
var Cn = Rr.exports;
(function(e) {
  var t = Cn.default;
  function r(n) {
    if (n != null) {
      var o = n[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], i = 0;
      if (o)
        return o.call(n);
      if (typeof n.next == "function")
        return n;
      if (!isNaN(n.length))
        return { next: function() {
          return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
        } };
    }
    throw new TypeError(t(n) + " is not iterable");
  }
  e.exports = r, e.exports.__esModule = true, e.exports.default = e.exports;
})(Ar);
var An = Ar.exports;
(function(e) {
  var t = wr, r = Pr, n = Ln, o = Tr, i = Lr, a = Tn, l = An;
  function c() {
    var u = r(), s = u.m(c), h = (Object.getPrototypeOf ? Object.getPrototypeOf(s) : s.__proto__).constructor;
    function d(g) {
      var p = typeof g == "function" && g.constructor;
      return !!p && (p === h || (p.displayName || p.name) === "GeneratorFunction");
    }
    var f = { throw: 1, return: 2, break: 3, continue: 3 };
    function v(g) {
      var p, m;
      return function(E) {
        p || (p = { stop: function() {
          return m(E.a, 2);
        }, catch: function() {
          return E.v;
        }, abrupt: function(S, j) {
          return m(E.a, f[S], j);
        }, delegateYield: function(S, j, A) {
          return p.resultName = j, m(E.d, l(S), A);
        }, finish: function(S) {
          return m(E.f, S);
        } }, m = function(S, j, A) {
          E.p = p.prev, E.n = p.next;
          try {
            return S(j, A);
          } finally {
            p.next = E.n;
          }
        }), p.resultName && (p[p.resultName] = E.v, p.resultName = void 0), p.sent = E.v, p.next = E.n;
        try {
          return g.call(this, p);
        } finally {
          E.p = p.prev, E.n = p.next;
        }
      };
    }
    return (e.exports = c = function() {
      return { wrap: function(m, E, O, S) {
        return u.w(v(m), E, O, S && S.reverse());
      }, isGeneratorFunction: d, mark: u.m, awrap: function(m, E) {
        return new t(m, E);
      }, AsyncIterator: i, async: function(m, E, O, S, j) {
        return (d(E) ? o : n)(v(m), E, O, S, j);
      }, keys: a, values: l };
    }, e.exports.__esModule = true, e.exports.default = e.exports)();
  }
  e.exports = c, e.exports.__esModule = true, e.exports.default = e.exports;
})(Er);
var Rn = Er.exports, Fe = Rn(), Un = Fe;
try {
  regeneratorRuntime = Fe;
} catch {
  typeof globalThis == "object" ? globalThis.regeneratorRuntime = Fe : Function("r", "regeneratorRuntime = r")(Fe);
}
const k = wn(Un);
function Mn(e) {
  if (Array.isArray(e))
    return e;
}
function Dn(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, i, a, l = [], c = true, u = false;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = false;
      } else
        for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = true)
          ;
    } catch (s) {
      u = true, o = s;
    } finally {
      try {
        if (!c && r.return != null && (a = r.return(), Object(a) !== a))
          return;
      } finally {
        if (u)
          throw o;
      }
    }
    return l;
  }
}
function ut(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ur(e, t) {
  if (e) {
    if (typeof e == "string")
      return ut(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ut(e, t) : void 0;
  }
}
function Nn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ue(e, t) {
  return Mn(e) || Dn(e, t) || Ur(e, t) || Nn();
}
function Wn(e) {
  if (Array.isArray(e))
    return ut(e);
}
function kn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Jn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ve(e) {
  return Wn(e) || kn(e) || Ur(e) || Jn();
}
var Ce = "data-wujie-id", Be = "data-wujie-script-id", Mr = "data-wujie-Flag", ct = "data-container-position-flag", He = "data-container-overflow-flag", _t = "data-loading-flag", Ct = "data-wujie-attach-css-flag", Fn = "wujie_iframe", De = "_wujie_all_event", $n = "position: fixed; z-index: 2147483647; visibility: hidden; inset: 0px; backface-visibility: hidden;", Bn = "position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; z-index:1;", Hn = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="30px" viewBox="0 0 24 30">
<rect x="0" y="13" width="4" height="5" fill="#909090">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
<rect x="10" y="13" width="4" height="5" fill="#909090">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
<rect x="20" y="13" width="4" height="5" fill="#909090">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
</svg>`, Gn = "url\u53C2\u6570\u4E3A\u7A7A", Dr = "\u5B50\u5E94\u7528\u8C03\u7528reload\u65E0\u6CD5\u751F\u6548", Nr = "\u6B64\u62A5\u9519\u53EF\u4EE5\u5FFD\u7565\uFF0Ciframe\u4E3B\u52A8\u4E2D\u65AD\u4E3B\u5E94\u7528\u4EE3\u7801\u5728\u5B50\u5E94\u7528\u8FD0\u884C", Qn = Nr + "\uFF0C\u8BE6\u89C1\uFF1Ahttps://github.com/Tencent/wujie/issues/54", At = "\u4E8B\u4EF6\u8BA2\u9605\u6570\u91CF\u4E3A\u7A7A", qn = "window\u4E0A\u4E0D\u5B58\u5728fetch\u5C5E\u6027\uFF0C\u9700\u8981\u81EA\u884Cpolyfill", Yn = "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u65E0\u754C\uFF0C\u5B50\u5E94\u7528\u5C06\u91C7\u7528iframe\u65B9\u5F0F\u6E32\u67D3", Te = "\u811A\u672C\u8BF7\u6C42\u51FA\u73B0\u9519\u8BEF", rt = "\u6837\u5F0F\u8BF7\u6C42\u51FA\u73B0\u9519\u8BEF", Rt = "html\u8BF7\u6C42\u51FA\u73B0\u9519\u8BEF", Ut = "\u65E0\u754C\u7EC4\u4EF6\u77ED\u65F6\u95F4\u91CD\u590D\u6E32\u67D3\u4E86\u4E24\u6B21\uFF0C\u53EF\u80FD\u5B58\u5728\u6027\u80FD\u95EE\u9898\u8BF7\u68C0\u67E5\u4EE3\u7801", Xn = "\u76EE\u6807Script\u5C1A\u672A\u51C6\u5907\u597D\u6216\u5DF2\u7ECF\u88AB\u79FB\u9664", Vn = "\u4E0D\u652F\u6301document.getElementById()\u4F20\u5165\u7279\u6B8A\u5B57\u7B26\uFF0C\u8BF7\u53C2\u8003document.querySelector\u6587\u6863";
function ue(e) {
  return typeof e == "function";
}
function zn(e) {
  return (e == null ? void 0 : e.toUpperCase()) === "LINK" || (e == null ? void 0 : e.toUpperCase()) === "STYLE" || (e == null ? void 0 : e.toUpperCase()) === "SCRIPT" || (e == null ? void 0 : e.toUpperCase()) === "IFRAME";
}
var Wr = window.Proxy && window.CustomElementRegistry, Zn = typeof document.all == "function" && typeof document.all > "u", Mt = /* @__PURE__ */ new WeakMap(), Ge = function(t) {
  if (Mt.has(t))
    return true;
  var r = Zn ? typeof t == "function" && typeof t < "u" : typeof t == "function";
  return r && Mt.set(t, r), r;
}, nt = /* @__PURE__ */ new WeakMap();
function kr(e) {
  if (nt.has(e))
    return nt.get(e);
  var t = e.name.indexOf("bound ") === 0 && !e.hasOwnProperty("prototype");
  return nt.set(e, t), t;
}
var ot = /* @__PURE__ */ new WeakMap();
function St(e) {
  var t = e.prototype && e.prototype.constructor === e && Object.getOwnPropertyNames(e.prototype).length > 1;
  if (t)
    return true;
  if (ot.has(e))
    return ot.get(e);
  var r = t;
  if (!r) {
    var n = e.toString(), o = /^function\b\s[A-Z].*/, i = /^class\b/;
    r = o.test(n) || i.test(n);
  }
  return ot.set(e, r), r;
}
var Q = /* @__PURE__ */ new WeakMap();
function Kn(e, t) {
  Ge(t) && !kr(t) && !St(t) && (Q.has(e) ? Q.get(e).has(t) || Q.get(e).set(t, t) : (Q.set(e, /* @__PURE__ */ new WeakMap()), Q.get(e).set(t, t)));
}
function je(e, t) {
  var r = e[t];
  if (Q.has(e) && Q.get(e).has(r))
    return Q.get(e).get(r);
  if (Ge(r) && !kr(r) && !St(r)) {
    var n = Function.prototype.bind.call(r, e);
    Q.has(e) || Q.set(e, /* @__PURE__ */ new WeakMap()), Q.get(e).set(r, n);
    for (var o in r)
      n[o] = r[o];
    return r.hasOwnProperty("prototype") && !n.hasOwnProperty("prototype") && Object.defineProperty(n, "prototype", { value: r.prototype, enumerable: false, writable: true }), n;
  }
  return r;
}
function Jr(e) {
  return window.document.querySelector("iframe[".concat(Ce, '="').concat(e, '"]'));
}
function ze(e, t) {
  Object.keys(t).forEach(function(r) {
    e.setAttribute(r, t[r]);
  });
}
function Fr(e) {
  if (!e)
    throw ee(Gn), new Error();
  var t = te(e), r = t.protocol + "//" + t.host, n = t.pathname + t.search + t.hash;
  return n.startsWith("/") || (n = "/" + n), { urlElement: t, appHostPath: r, appRoutePath: n };
}
function te(e) {
  var t = window.document.createElement("a");
  return t.href = e, t.href = t.href, t;
}
function xe(e) {
  var t = e.search || "";
  return Ve(new URLSearchParams(t).entries()).reduce(function(r, n) {
    return r[n[0]] = n[1], r;
  }, {});
}
function $r(e) {
  var t = xe(te(window.location.href));
  return Object.keys(t).includes(e);
}
function be(e, t, r) {
  var n = e.Element.prototype.setAttribute;
  t.prototype.setAttribute = function(u, s) {
    var h = s;
    u === r && (h = ce(s, this.baseURI || "", true)), n.call(this, u, h);
  };
  var o = Object.getOwnPropertyDescriptor(t.prototype, r), i = o.enumerable, a = o.configurable, l = o.get, c = o.set;
  Object.defineProperty(t.prototype, r, { enumerable: i, configurable: a, get: function() {
    return l.call(this);
  }, set: function(s) {
    c.call(this, ce(s, this.baseURI, true));
  } });
}
function Ze(e) {
  var t = e;
  return t.protocol + "//" + t.host + t.pathname;
}
function ce(e, t, r) {
  try {
    return e && (r && e.startsWith("#") ? e : new URL(e, t).href);
  } catch {
    return e;
  }
}
function eo(e, t) {
  var r, n = te(window.location.href), o = xe(n);
  n = null;
  var i = o[e] || "", a = (r = i.match(/^{([^}]*)}/)) === null || r === void 0 ? void 0 : r[1];
  return t && a ? i.replace("{".concat(a, "}"), t[a]) : i;
}
var Ot = window.requestIdleCallback || function(e) {
  return setTimeout(e, 1);
};
function Br(e) {
  return typeof e == "string" ? document.querySelector(e) : e;
}
function H(e, t) {
  var r;
  (r = console) === null || r === void 0 || r.warn("[wujie warn]: ".concat(e), t);
}
function ee(e, t) {
  var r;
  (r = console) === null || r === void 0 || r.error("[wujie error]: ".concat(e), t);
}
function lt(e) {
  var t = e.indexOf(">") + 1, r = e.lastIndexOf("<");
  return e.substring(t, r);
}
function to(e) {
  if (V(e) === "object")
    return "/";
  try {
    var t = new URL(e, location.href), r = t.origin, n = t.pathname, o = n.split("/");
    return o.pop(), "".concat(r).concat(o.join("/"), "/");
  } catch (i) {
    return console.warn(i), "";
  }
}
function Ke(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return e.reduce(function(i, a) {
      return ue(a) ? a.apply(void 0, [i].concat(n)) : i;
    }, t || "");
  };
}
function Le(e) {
  Promise.resolve().then(e);
}
function q(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    n[o - 2] = arguments[o];
  try {
    e && e.length > 0 && e.map(function(i) {
      return i[t];
    }).filter(function(i) {
      return ue(i);
    }).forEach(function(i) {
      return i.apply(void 0, n);
    });
  } catch (i) {
    ee(i);
  }
}
function et(e) {
  var t;
  return ((t = e.tagName) === null || t === void 0 ? void 0 : t.toUpperCase()) === "SCRIPT";
}
var ro = 1;
function Hr(e, t) {
  if (et(e)) {
    var r = t || String(ro++);
    e.setAttribute(Be, r);
  }
}
function Gr(e) {
  return et(e) ? e.getAttribute(Be) : null;
}
function Qr(e, t) {
  return { name: e.name, el: e.el || (t == null ? void 0 : t.el), url: e.url || (t == null ? void 0 : t.url), html: e.html || (t == null ? void 0 : t.html), exec: e.exec !== void 0 ? e.exec : t == null ? void 0 : t.exec, replace: e.replace || (t == null ? void 0 : t.replace), fetch: e.fetch || (t == null ? void 0 : t.fetch), props: e.props || (t == null ? void 0 : t.props), sync: e.sync !== void 0 ? e.sync : t == null ? void 0 : t.sync, prefix: e.prefix || (t == null ? void 0 : t.prefix), loading: e.loading || (t == null ? void 0 : t.loading), attrs: e.attrs !== void 0 ? e.attrs : (t == null ? void 0 : t.attrs) || {}, degradeAttrs: e.degradeAttrs !== void 0 ? e.degradeAttrs : (t == null ? void 0 : t.degradeAttrs) || {}, fiber: e.fiber !== void 0 ? e.fiber : (t == null ? void 0 : t.fiber) !== void 0 ? t == null ? void 0 : t.fiber : true, alive: e.alive !== void 0 ? e.alive : t == null ? void 0 : t.alive, degrade: e.degrade !== void 0 ? e.degrade : t == null ? void 0 : t.degrade, plugins: e.plugins || (t == null ? void 0 : t.plugins), lifecycles: { beforeLoad: e.beforeLoad || (t == null ? void 0 : t.beforeLoad), beforeMount: e.beforeMount || (t == null ? void 0 : t.beforeMount), afterMount: e.afterMount || (t == null ? void 0 : t.afterMount), beforeUnmount: e.beforeUnmount || (t == null ? void 0 : t.beforeUnmount), afterUnmount: e.afterUnmount || (t == null ? void 0 : t.afterUnmount), activated: e.activated || (t == null ? void 0 : t.activated), deactivated: e.deactivated || (t == null ? void 0 : t.deactivated), loadError: e.loadError || (t == null ? void 0 : t.loadError) } };
}
function Ne(e, t, r) {
  var n;
  typeof window.CustomEvent == "function" ? n = new CustomEvent(t, { detail: r }) : (n = document.createEvent("CustomEvent"), n.initCustomEvent(t, true, false, r)), e.dispatchEvent(n);
}
function qr() {
  throw H(Qn), new Error(Nr);
}
var no = /(<script[\s\S]*?>)[\s\S]*?<\/script>/gi, oo = /<(script)\s+((?!type=('|")text\/ng-template\3)[^])*?>[^]*?<\/\1>/i, Dt = /.*\ssrc=('|")?([^>'"\s]+)/, io = /.*\stype=('|")?([^>'"\s]+)/, ao = /.*\sentry\s*.*/, uo = /.*\sasync\s*.*/, co = /.*\sdefer\s*.*/, lo = /.*\snomodule\s*.*/, so = /.*\stype=('|")?module('|")?\s*.*/, fo = /<(link)\s+[^]*?>/gi, po = /\srel=('|")?(preload|prefetch|modulepreload)\1/, Nt = /.*\shref=('|")?([^>'"\s]+)/, vo = /.*\sas=('|")?font\1.*/, ho = /<style[^>]*>[\s\S]*?<\/style>/gi, mo = /\s+rel=('|")?stylesheet\1.*/, yo = /.*\shref=('|")?([^>'"\s]+)/, go = /<!--([\s\S]*?)-->/g, Eo = /<link(\s+|\s+[^]+\s+)ignore(\s*|\s+[^]*|=[^]*)>/i, bo = /<style(\s+|\s+[^]+\s+)ignore(\s*|\s+[^]*|=[^]*)>/i, wo = /<script(\s+|\s+[^]+\s+)ignore(\s*|\s+[^]*|=[^]*)>/i, _o = /.*\scrossorigin=?('|")?(use-credentials|anonymous)?('|")?/i;
function Wt(e) {
  return e.startsWith("//") || e.startsWith("http://") || e.startsWith("https://");
}
function kt(e, t) {
  return new URL(e, t).toString();
}
function So(e) {
  var t = ["text/javascript", "module", "application/javascript", "text/ecmascript", "application/ecmascript", "importmap"];
  return !e || t.indexOf(e) !== -1;
}
function pe(e) {
  var t = /<[-\w]+\s+([^>]*)>/i, r = t.exec(e);
  if (!r)
    return {};
  for (var n = r[1], o = /([^\s=]+)\s*=\s*(['"])(.*?)\2/g, i = {}, a; (a = o.exec(n)) !== null; ) {
    var l = a[1], c = a[3];
    i[l] = c;
  }
  return i;
}
function Oo() {
  var e = window.document.createElement("script");
  return "noModule" in e;
}
var st = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return "<!-- ".concat(r ? "prefetch/preload/modulepreload" : "", " link ").concat(t, " replaced by wujie -->");
}, Yr = function(t) {
  return "<!-- inline-style-".concat(t, " replaced by wujie -->");
}, Po = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "<!-- ".concat(r, " script ").concat(t, " replaced by wujie -->");
}, xo = "<!-- inline scripts replaced by wujie -->", We = function(t) {
  return "<!-- ignore asset ".concat(t || "file", " replaced by wujie -->");
}, Jt = function(t, r) {
  return "<!-- ".concat(r ? "nomodule" : "module", " script ").concat(t, " ignored by wujie -->");
};
function Io(e, t, r) {
  var n = [], o = [], i = null, a = Oo(), l = e.replace(go, "").replace(fo, function(u) {
    var s = !!u.match(mo);
    if (s) {
      var h = u.match(yo), d = u.match(Eo);
      if (h) {
        var f = h && h[2], v = f;
        return f && !Wt(f) && (v = kt(f, t)), d ? We(v) : (o.push({ src: v }), st(v));
      }
    }
    var g = u.match(po) && u.match(Nt) && !u.match(vo);
    if (g) {
      var p = u.match(Nt), m = Ue(p, 3), E = m[2];
      return st(E, true);
    }
    return u;
  }).replace(ho, function(u) {
    if (bo.test(u))
      return We("style file");
    var s = lt(u);
    return o.push({ src: "", content: s }), Yr(o.length - 1);
  }).replace(no, function(u, s) {
    var h = s.match(wo), d = !!s.match(so), f = s.match(_o), v = (f == null ? void 0 : f[2]) || "", g = a && !!s.match(lo) || !a && d, p = s.match(io), m = p && p[2];
    if (!So(m))
      return u;
    if (oo.test(u) && s.match(Dt)) {
      var E = s.match(ao), O = s.match(Dt), S = O && O[2];
      if (i && E)
        throw new SyntaxError("You should not set multiply entry script!");
      if (S && !Wt(S) && (S = kt(S, t)), i = i || E && S, h)
        return We(S || "js file");
      if (g)
        return Jt(S || "js file", a);
      if (S) {
        var j = !!s.match(uo), A = !!s.match(co);
        return n.push(j || A ? { async: j, defer: A, src: S, module: d, crossorigin: !!f, crossoriginType: v, attrs: pe(u) } : { src: S, module: d, crossorigin: !!f, crossoriginType: v, attrs: pe(u) }), Po(S, j && "async" || A && "defer" || "");
      }
      return u;
    } else {
      if (h)
        return We("js file");
      if (g)
        return Jt("js file", a);
      var L = lt(u), M = L.split(/[\r\n]+/).every(function(T) {
        return !T.trim() || T.trim().startsWith("//");
      });
      return !M && L && n.push({ src: "", content: L, module: d, crossorigin: !!f, crossoriginType: v, attrs: pe(u) }), xo;
    }
  }), c = { template: l, scripts: n, styles: o, entry: i || n[n.length - 1] };
  return typeof r == "function" && (c = r(c)), c;
}
function ft(e) {
  var t = e.plugins, r = e.replace;
  return function(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", i = arguments.length > 2 ? arguments[2] : void 0;
    return Ke(t.map(function(a) {
      return a.cssLoader;
    }))(r ? r(n) : n, o, i);
  };
}
function jo(e) {
  var t = e.plugins, r = e.replace;
  return function(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", i = arguments.length > 2 ? arguments[2] : void 0;
    return Ke(t.map(function(a) {
      return a.jsLoader;
    }))(r ? r(n) : n, o, i);
  };
}
function Qe(e, t) {
  var r = t.map(function(o) {
    return o[e];
  }).filter(function(o) {
    return o == null ? void 0 : o.length;
  }), n = r.reduce(function(o, i) {
    return o.concat(i);
  }, []);
  return e === "cssBeforeLoaders" ? n.reverse() : n;
}
function ie(e, t) {
  return t.map(function(r) {
    return r[e];
  }).filter(function(r) {
    return r == null ? void 0 : r.length;
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}
function ae(e, t) {
  return t.some(function(r) {
    return typeof r == "string" ? e === r : r.test(e);
  });
}
function Lo(e, t, r) {
  var n = t ? ce(t, r) : r, o = /url\((['"]?)((?:[^()]+|\((?:[^()]+|\([^()]*\))*\))*)(\1)\)/g;
  return e.replace(o, function(i, a, l, c) {
    var u = /^data:/, s = u.test(l);
    return s ? i : "url(".concat(a).concat(ce(l, n)).concat(c, ")");
  });
}
var Ft = { cssLoader: Lo, cssBeforeLoaders: [{ content: "html {view-transition-name: none;}" }] };
function Xr(e) {
  return Array.isArray(e) ? [Ft].concat(Ve(e)) : [Ft];
}
function $t(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $t(Object(r), true).forEach(function(n) {
      Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $t(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var To = {}, it = {}, at = {};
if (!window.fetch)
  throw ee(qn), new Error();
var Pt = window.fetch.bind(window);
function Co(e) {
  return e;
}
function Vr(e, t, r) {
  return dt.apply(this, arguments);
}
function dt() {
  return dt = z(k.mark(function e(t, r, n) {
    var o, i, a, l;
    return k.wrap(function(u) {
      for (; ; )
        switch (u.prev = u.next) {
          case 0:
            return o = Ze(t.proxyLocation), i = Ke(t.plugins.map(function(s) {
              return s.cssLoader;
            })), a = n().map(function(s) {
              var h = s.src, d = s.ignore, f = s.contentPromise;
              return { src: h, ignore: d, contentPromise: f.then(function(v) {
                return i(v, h, o);
              }) };
            }), u.next = 5, Ao(r, a);
          case 5:
            return l = u.sent, u.abrupt("return", t.replace ? t.replace(l) : l);
          case 7:
          case "end":
            return u.stop();
        }
    }, e);
  })), dt.apply(this, arguments);
}
function Ao(e, t) {
  return pt.apply(this, arguments);
}
function pt() {
  return pt = z(k.mark(function e(t, r) {
    var n;
    return k.wrap(function(i) {
      for (; ; )
        switch (i.prev = i.next) {
          case 0:
            return n = t, i.abrupt("return", Promise.all(r.map(function(a, l) {
              return a.contentPromise.then(function(c) {
                a.src ? n = n.replace(st(a.src), a.ignore ? '<link href="'.concat(a.src, '" rel="stylesheet" type="text/css">') : "<style>/* ".concat(a.src, " */").concat(c, "</style>")) : c && (n = n.replace(Yr(l), "<style>/* inline-style-".concat(l, " */").concat(c, "</style>")));
              });
            })).then(function() {
              return n;
            }));
          case 2:
          case "end":
            return i.stop();
        }
    }, e);
  })), pt.apply(this, arguments);
}
var Ro = function(t) {
  return t.startsWith("<");
}, $e = function(t, r, n, o, i) {
  return r[t] || (r[t] = n(t).then(function(a) {
    if (a.status >= 400) {
      if (r[t] = null, o)
        return ee(rt, { src: t, response: a }), i == null ? void 0 : i(t, new Error(rt)), "";
      throw ee(Te, { src: t, response: a }), i == null ? void 0 : i(t, new Error(Te)), new Error(Te);
    }
    return a.text();
  }).catch(function(a) {
    return r[t] = null, o ? (ee(rt, t), i == null ? void 0 : i(t, a), "") : (ee(Te, t), i == null ? void 0 : i(t, a), "");
  }));
};
function qe(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pt, r = arguments.length > 2 ? arguments[2] : void 0;
  return e.map(function(n) {
    var o = n.src, i = n.content, a = n.ignore;
    return i ? { src: "", contentPromise: Promise.resolve(i) } : Ro(o) ? { src: "", contentPromise: Promise.resolve(lt(o)) } : { src: o, ignore: a, contentPromise: a ? Promise.resolve("") : $e(o, To, t, true, r) };
  });
}
function zr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pt, r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0;
  return e.map(function(o) {
    var i = o.src, a = o.async, l = o.defer, c = o.module, u = o.ignore, s = null;
    return (a || l) && i && !c ? s = new Promise(function(h, d) {
      return n ? Ot(function() {
        return $e(i, it, t, false, r).then(h, d);
      }) : $e(i, it, t, false, r).then(h, d);
    }) : c && i || u ? s = Promise.resolve("") : i ? s = $e(i, it, t, false, r) : s = Promise.resolve(o.content), c && !a && (o.defer = true), Se(Se({}, o), {}, { contentPromise: s });
  });
}
function vt(e) {
  var t, r, n = e.url, o = e.opts, i = e.html, a = (t = o.fetch) !== null && t !== void 0 ? t : Pt, l = (r = o.fiber) !== null && r !== void 0 ? r : true, c = o.plugins, u = o.loadError, s = c ? Ke(c.map(function(m) {
    return m.htmlLoader;
  })) : Co, h = ie("jsExcludes", c), d = ie("cssExcludes", c), f = ie("jsIgnores", c), v = ie("cssIgnores", c), g = to, p = function(E, O, S) {
    return (O ? Promise.resolve(O) : a(E).then(function(j) {
      return j.status >= 400 ? (ee(Rt, { url: E, response: j }), u == null ? void 0 : u(E, new Error(Rt)), "") : j.text();
    }).catch(function(j) {
      return at[E] = null, u == null ? void 0 : u(E, j), Promise.reject(j);
    })).then(function(j) {
      var A = g(E), L = Io(S(j), A), M = L.template, T = L.scripts, x = L.styles;
      return { template: M, assetPublicPath: A, getExternalScripts: function() {
        return zr(T.filter(function(R) {
          return !R.src || !ae(R.src, h);
        }).map(function(R) {
          return Se(Se({}, R), {}, { ignore: R.src && ae(R.src, f) });
        }), a, u, l);
      }, getExternalStyleSheets: function() {
        return qe(x.filter(function(R) {
          return !R.src || !ae(R.src, d);
        }).map(function(R) {
          return Se(Se({}, R), {}, { ignore: R.src && ae(R.src, v) });
        }), a, u);
      } };
    });
  };
  return o != null && o.plugins.some(function(m) {
    return m.htmlLoader;
  }) ? p(n, i, s) : at[n] || (at[n] = p(n, i, s));
}
function xt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, gr(n.key), n);
  }
}
function It(e, t, r) {
  return t && Bt(e.prototype, t), r && Bt(e, r), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function Uo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mo(e, t) {
  if (t && (V(t) == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Uo(e);
}
function Ae(e) {
  return Ae = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ae(e);
}
function Re(e, t) {
  return Re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Re(e, t);
}
function Do(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: true, configurable: true } }), Object.defineProperty(e, "prototype", { writable: false }), t && Re(e, t);
}
function No(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Zr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Zr = function() {
    return !!e;
  })();
}
function Wo(e, t, r) {
  if (Zr())
    return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && Re(o, r.prototype), o;
}
function ht(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ht = function(n) {
    if (n === null || !No(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n))
        return t.get(n);
      t.set(n, o);
    }
    function o() {
      return Wo(n, arguments, Ae(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, { constructor: { value: o, enumerable: false, writable: true, configurable: true } }), Re(o, n);
  }, ht(e);
}
function Ht(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ht(Object(r), true).forEach(function(n) {
      Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ht(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Y = function(e) {
  if ((e = window.__WUJIE_INJECT) !== null && e !== void 0 && e.idToSandboxMap)
    return window.__WUJIE_INJECT.idToSandboxMap;
  var t = window.__POWERED_BY_WUJIE__ ? window.__WUJIE.inject.idToSandboxMap : /* @__PURE__ */ new Map();
  return window.__WUJIE_INJECT = Oe(Oe({}, window.__WUJIE_INJECT), {}, { idToSandboxMap: t }), t;
}();
function ne(e) {
  var t;
  return ((t = Y.get(e)) === null || t === void 0 ? void 0 : t.wujie) || null;
}
function Kr(e) {
  var t;
  return ((t = Y.get(e)) === null || t === void 0 ? void 0 : t.options) || null;
}
function ko(e, t) {
  var r = Y.get(e);
  r ? Y.set(e, Oe(Oe({}, r), {}, { wujie: t })) : Y.set(e, { wujie: t });
}
function Jo(e) {
  var t = Y.get(e);
  t != null && t.options && Y.set(e, { options: t.options }), Y.delete(e);
}
function Fo(e, t) {
  var r = Y.get(e);
  r ? Y.set(e, Oe(Oe({}, r), {}, { options: t })) : Y.set(e, { options: t });
}
var $ = { modifyLocalProperties: ["createElement", "createTextNode", "documentURI", "URL", "getElementsByTagName", "getElementById"], modifyProperties: ["createElement", "createTextNode", "documentURI", "URL", "getElementsByTagName", "getElementsByClassName", "getElementsByName", "getElementById", "querySelector", "querySelectorAll", "documentElement", "scrollingElement", "forms", "images", "links"], shadowProperties: ["activeElement", "childElementCount", "children", "firstElementChild", "firstChild", "fullscreenElement", "lastElementChild", "pictureInPictureElement", "pointerLockElement", "styleSheets"], shadowMethods: ["append", "contains", "getSelection", "elementFromPoint", "elementsFromPoint", "getAnimations", "replaceChildren"], documentProperties: ["characterSet", "compatMode", "contentType", "designMode", "dir", "doctype", "embeds", "fullscreenEnabled", "hidden", "implementation", "lastModified", "pictureInPictureEnabled", "plugins", "readyState", "referrer", "visibilityState", "fonts"], documentMethods: ["execCommand", "caretPositionFromPoint", "createRange", "exitFullscreen", "exitPictureInPicture", "getElementsByTagNameNS", "hasFocus", "prepend"], documentEvents: ["onpointerlockchange", "onpointerlockerror", "onbeforecopy", "onbeforecut", "onbeforepaste", "onfreeze", "onresume", "onsearch", "onfullscreenchange", "onfullscreenerror", "onsecuritypolicyviolation", "onvisibilitychange"], ownerProperties: ["head", "body"] }, Gt = ["DOMContentLoaded", "readystatechange"], $o = ["onreadystatechange"], Qt = ["fullscreenchange", "fullscreenerror", "selectionchange", "visibilitychange", "wheel", "keydown", "keypress", "keyup"], qt = ["gotpointercapture", "lostpointercapture"], Yt = ["hashchange", "popstate", "DOMContentLoaded", "load", "beforeunload", "unload", "message", "error", "unhandledrejection"], Bo = ["onload", "onbeforeunload", "onunload", "onerror", "onunhandledrejection"], Ho = { IMG: "src", A: "href", SOURCE: "src" }, Go = ["getComputedStyle", "visualViewport", "matchMedia", "DOMParser"], Qo = [/animationFrame$/i, /resizeObserver$|mutationObserver$|intersectionObserver$/i, /height$|width$|left$/i, /^screen/i, /CSSStyleSheet$/i, /X$|Y$/], en = HTMLElement.prototype.appendChild, tn = HTMLElement.prototype.removeChild, Xt = HTMLElement.prototype.contains, qo = HTMLHeadElement.prototype.insertBefore, Yo = HTMLBodyElement.prototype.insertBefore, Vt = HTMLStyleElement.prototype.insertAdjacentElement, jt = Node.prototype.addEventListener, tt = Node.prototype.removeEventListener, zt = window.addEventListener, Zt = window.removeEventListener, ve = Node.prototype.appendChild, he = window.__POWERED_BY_WUJIE__ ? window.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__ : Document.prototype.querySelector;
function Kt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function we(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kt(Object(r), true).forEach(function(n) {
      Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kt(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Xo(e, t) {
  return Object.defineProperties(e, { srcElement: { get: t }, target: { get: t } }), e;
}
function ke(e, t) {
  var r = new CustomEvent(t), n = Xo(r, function() {
    return e;
  });
  ue(e["on".concat(t)]) ? e["on".concat(t)](n) : e.dispatchEvent(n);
}
function fe(e, t) {
  if (!(!e.innerHTML || t.degrade)) {
    var r = function() {
      var o = ln([e.sheet]), i = Ue(o, 2), a = i[0], l = i[1];
      a && t.shadowRoot.head.appendChild(a), l && t.shadowRoot.host.appendChild(l), e._patcher = void 0;
    };
    e._patcher && clearTimeout(e._patcher), e._patcher = setTimeout(r, 50);
  }
}
function Vo(e, t, r, n) {
  var o;
  if (e._hasPatchStyle)
    return;
  var i = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML"), a = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerText"), l = Object.getOwnPropertyDescriptor(Node.prototype, "textContent"), c = (o = e.sheet) === null || o === void 0 ? void 0 : o.insertRule;
  function u() {
    c && (e.sheet.insertRule = function(s, h) {
      return i ? e.innerHTML += s : e.innerText += s, c.call(e.sheet, s, h);
    });
  }
  u(), i && Object.defineProperties(e, { innerHTML: { get: function() {
    return i.get.call(e);
  }, set: function(h) {
    var d = this;
    i.set.call(e, t(h, "", n)), Le(function() {
      return fe(d, r);
    });
  } } }), Object.defineProperties(e, { innerText: { get: function() {
    return a.get.call(e);
  }, set: function(h) {
    var d = this;
    a.set.call(e, t(h, "", n)), Le(function() {
      return fe(d, r);
    });
  } }, textContent: { get: function() {
    return l.get.call(e);
  }, set: function(h) {
    var d = this;
    l.set.call(e, t(h, "", n)), Le(function() {
      return fe(d, r);
    });
  } }, appendChild: { value: function(h) {
    var d = this;
    if (Le(function() {
      return fe(d, r);
    }), h.nodeType === Node.TEXT_NODE) {
      var f = ve.call(e, e.ownerDocument.createTextNode(t(h.textContent, "", n)));
      return u(), f;
    } else
      return ve(h);
  } }, insertAdjacentElement: { value: function(h, d) {
    if (d.nodeName === "STYLE") {
      Le(function() {
        return fe(d, r);
      });
      var f = Vt.call(this, h, d);
      return r.styleSheetElements.push(d), f;
    } else
      return Vt.call(this, h, d);
  } }, _hasPatchStyle: { get: function() {
    return true;
  } } });
}
var er = Promise.resolve();
function Je(e) {
  return function(r, n) {
    var o = this, i = r, a = e.rawDOMAppendOrInsertBefore, l = e.wujieId, c = ne(l), u = c.styleSheetElements, s = c.replace, h = c.fetch, d = c.plugins, f = c.iframe, v = c.lifecycles, g = c.proxyLocation, p = c.fiber;
    if (!zn(i.tagName) || !l) {
      var m = a.call(this, i, n);
      return re(i, f.contentWindow), q(d, "appendOrInsertElementHook", i, f.contentWindow), m;
    }
    var E = f.contentDocument, O = Ze(g);
    if (i.tagName) {
      var S;
      switch ((S = i.tagName) === null || S === void 0 ? void 0 : S.toUpperCase()) {
        case "LINK": {
          var j = i, A = j.href, L = j.rel, M = j.type, T = L === "stylesheet" || M === "text/css" || A.endsWith(".css");
          if (!T) {
            var x = a.call(this, i, n);
            return q(d, "appendOrInsertElementHook", i, f.contentWindow), x;
          }
          A && !ae(A, ie("cssExcludes", d)) && qe([{ src: A, ignore: ae(A, ie("cssIgnores", d)) }], h, v.loadError).forEach(function(B) {
            var le = B.src, se = B.ignore, Me = B.contentPromise;
            return Me.then(function(gn) {
              var En = pe(i.outerHTML);
              if (se && le)
                a.call(o, i, n);
              else {
                var Ie = E.createElement("style"), bn = ft({ plugins: d, replace: s });
                Ie.innerHTML = bn(gn, le, O), u.push(Ie), ze(Ie, En), a.call(o, Ie, n), fe(Ie, c), ke(i, "load");
              }
              i = null;
            }, function() {
              ke(i, "error"), i = null;
            });
          });
          var C = E.createComment("dynamic link ".concat(A, " replaced by wujie"));
          return a.call(this, C, n);
        }
        case "STYLE": {
          var R = r;
          u.push(R);
          var G = R.innerHTML, N = ft({ plugins: d, replace: s });
          G && (R.innerHTML = N(G, "", O));
          var J = a.call(this, i, n);
          return Vo(R, N, c, O), fe(R, c), q(d, "appendOrInsertElementHook", i, f.contentWindow), J;
        }
        case "SCRIPT": {
          Hr(i);
          var w = i, y = w.src, b = w.text, _ = w.type, P = w.crossOrigin;
          if (y && !ae(y, ie("jsExcludes", d))) {
            var I = function(le) {
              if (c.iframe === null)
                return H(Ut);
              var se = function() {
                ke(i, "load"), i = null;
              };
              X(we(we({}, le), {}, { onload: se }), c.iframe.contentWindow, i);
            }, D = { src: y, module: _ === "module", crossorigin: P !== null, crossoriginType: P || "", ignore: ae(y, ie("jsIgnores", d)), attrs: pe(i.outerHTML) };
            zr([D], h, v.loadError, p).forEach(function(B) {
              er = er.then(function() {
                return B.contentPromise.then(function(le) {
                  var se;
                  if (c.execQueue === null)
                    return H(Ut);
                  var Me = (se = c.execQueue) === null || se === void 0 ? void 0 : se.length;
                  c.execQueue.push(function() {
                    return p ? c.requestIdleCallback(function() {
                      I(we(we({}, B), {}, { content: le }));
                    }) : I(we(we({}, B), {}, { content: le }));
                  }), Me || c.execQueue.shift()();
                }, function() {
                  ke(i, "error"), i = null;
                });
              });
            });
          } else {
            var W, F = (W = c.execQueue) === null || W === void 0 ? void 0 : W.length;
            c.execQueue.push(function() {
              return p ? c.requestIdleCallback(function() {
                X({ src: null, content: b, attrs: pe(i.outerHTML) }, c.iframe.contentWindow, i);
              }) : X({ src: null, content: b, attrs: pe(i.outerHTML) }, c.iframe.contentWindow, i);
            }), F || c.execQueue.shift()();
          }
          var K = E.createComment("dynamic script ".concat(y, " replaced by wujie"));
          return a.call(this, K, n);
        }
        case "IFRAME": {
          if (i.getAttribute(Mr) === "")
            return ve.call(he.call(this.ownerDocument, "html"), i);
          var U = a.call(this, i, n);
          return q(d, "appendOrInsertElementHook", i, f.contentWindow), U;
        }
      }
    }
  };
}
function rn(e, t) {
  var r = Gr(e), n = ne(t), o = n.iframe, i = o.contentWindow.__WUJIE_RAW_DOCUMENT_HEAD__.querySelector("script[".concat(Be, "='").concat(r, "']"));
  return i === null && H(Xn, "<script ".concat(Be, "='").concat(r, "'/>")), { targetScript: i, iframe: o };
}
function tr(e) {
  return function(r) {
    var n = r, o = e.rawElementContains, i = e.wujieId;
    if (n && et(n)) {
      var a = rn(n, i), l = a.targetScript;
      return l !== null;
    }
    return o(n);
  };
}
function zo(e) {
  return function(r) {
    var n = r, o = e.rawElementRemoveChild, i = e.wujieId;
    if (n && et(n)) {
      var a = rn(n, i), l = a.targetScript, c = a.iframe;
      return l !== null ? c.contentWindow.__WUJIE_RAW_DOCUMENT_HEAD__.removeChild(l) : null;
    }
    return o(n);
  };
}
function rr(e) {
  var t = /* @__PURE__ */ new Map();
  e._cacheListeners = t, e.addEventListener = function(r, n, o) {
    var i = t.get(r) || [];
    return t.set(r, [].concat(Ve(i), [n])), jt.call(e, r, n, o);
  }, e.removeEventListener = function(r, n, o) {
    var i = t.get(r), a = i == null ? void 0 : i.indexOf(n);
    return i != null && i.length && a !== -1 && i.splice(a, 1), tt.call(e, r, n, o);
  };
}
function nr(e) {
  var t = e._cacheListeners;
  Ve(t.entries()).forEach(function(r) {
    var n = Ue(r, 2), o = n[0], i = n[1];
    i.forEach(function(a) {
      return tt.call(e, o, a);
    });
  });
}
function nn(e, t, r) {
  r || (rr(e.head), rr(e.body)), e.head.appendChild = Je({ rawDOMAppendOrInsertBefore: ve, wujieId: t }), e.head.insertBefore = Je({ rawDOMAppendOrInsertBefore: qo, wujieId: t }), e.head.removeChild = zo({ rawElementRemoveChild: tn.bind(e.head), wujieId: t }), e.head.contains = tr({ rawElementContains: Xt.bind(e.head), wujieId: t }), e.contains = tr({ rawElementContains: Xt.bind(e), wujieId: t }), e.body.appendChild = Je({ rawDOMAppendOrInsertBefore: ve, wujieId: t }), e.body.insertBefore = Je({ rawDOMAppendOrInsertBefore: Yo, wujieId: t });
}
function or(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? or(Object(r), true).forEach(function(n) {
      Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : or(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zo(e, t, r) {
  return t = Ae(t), Mo(e, on() ? Reflect.construct(t, r || [], Ae(e).constructor) : t.apply(e, r));
}
function on() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (on = function() {
    return !!e;
  })();
}
var Ko = { ":root": ":host" };
function ei() {
  var e = window.customElements;
  if (e && !(e != null && e.get("wujie-app"))) {
    var t = function(r) {
      function n() {
        return xt(this, n), Zo(this, n, arguments);
      }
      return Do(n, r), It(n, [{ key: "connectedCallback", value: function() {
        if (!this.shadowRoot) {
          var i = this.attachShadow({ mode: "open" }), a = ne(this.getAttribute(Ce));
          re(i, a.iframe.contentWindow), a.shadowRoot = i;
        }
      } }, { key: "disconnectedCallback", value: function() {
        var i = ne(this.getAttribute(Ce));
        i == null ? void 0 : i.unmount();
      } }]);
    }(ht(HTMLElement));
    e == null ? void 0 : e.define("wujie-app", t);
  }
}
function ti(e) {
  var t = window.document.createElement("wujie-app");
  return t.setAttribute(Ce, e), t.classList.add(Fn), t;
}
function me(e, t) {
  var r = Br(t);
  return r && !r.contains(e) && (r.querySelector("div[".concat(_t, "]")) || de(r), e && en.call(r, e)), r;
}
function an(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = oi(e, r), o = me(n, t), i = n.contentWindow.document;
  return i.open(), i.write("<!DOCTYPE html><html><head></head><body></body></html>"), i.close(), { iframe: n, container: o };
}
function un(e, t) {
  return mt.apply(this, arguments);
}
function mt() {
  return mt = z(k.mark(function e(t, r) {
    var n, o, i, a, l, c, u, s;
    return k.wrap(function(d) {
      for (; ; )
        switch (d.prev = d.next) {
          case 0:
            return n = t.iframe.contentDocument, o = t.plugins, i = t.replace, a = t.proxyLocation, l = ft({ plugins: o, replace: i }), c = Qe("cssBeforeLoaders", o), u = Qe("cssAfterLoaders", o), s = Ze(a), d.next = 8, Promise.all([Promise.all(qe(c, t.fetch, t.lifecycles.loadError).map(function(f) {
              var v = f.src, g = f.contentPromise;
              return g.then(function(p) {
                return { src: v, content: p };
              });
            })).then(function(f) {
              f.forEach(function(v) {
                var g = v.src, p = v.content;
                if (p) {
                  var m = n.createElement("style");
                  m.setAttribute("type", "text/css"), m.appendChild(n.createTextNode(p && l(p, g, s)));
                  var E = r.querySelector("head"), O = r.querySelector("body");
                  r.insertBefore(m, E || O || r.firstChild);
                }
              });
            }), Promise.all(qe(u, t.fetch, t.lifecycles.loadError).map(function(f) {
              var v = f.src, g = f.contentPromise;
              return g.then(function(p) {
                return { src: v, content: p };
              });
            })).then(function(f) {
              f.forEach(function(v) {
                var g = v.src, p = v.content;
                if (p) {
                  var m = n.createElement("style");
                  m.setAttribute("type", "text/css"), m.appendChild(n.createTextNode(p && l(p, g, s))), r.appendChild(m);
                }
              });
            })]).then(function() {
              return r;
            }, function() {
              return r;
            });
          case 8:
            return d.abrupt("return", d.sent);
          case 9:
          case "end":
            return d.stop();
        }
    }, e);
  })), mt.apply(this, arguments);
}
function ri(e, t, r) {
  var n = e.querySelector("head"), o = e.querySelector("body");
  if (n) {
    for (; n.firstChild; )
      ve.call(t, n.firstChild.cloneNode(true)), n.removeChild(n.firstChild);
    n.parentNode.replaceChild(t, n);
  }
  if (o) {
    for (; o.firstChild; )
      ve.call(r, o.firstChild.cloneNode(true)), o.removeChild(o.firstChild);
    o.parentNode.replaceChild(r, o);
  }
  return e;
}
function cn(e, t) {
  var r = e.__WUJIE, n = r.head, o = r.body, i = r.alive, a = r.execFlag, l = e.document, c = new DOMParser(), u = c.parseFromString(t, "text/html"), s = u.documentElement, h = s.attributes, d = l.createElement("html");
  d.innerHTML = t;
  for (var f = 0; f < h.length; f++)
    d.setAttribute(h[f].name, h[f].value);
  !i && a ? d = ri(d, n, o) : (r.head = d.querySelector("head"), r.body = d.querySelector("body"));
  for (var v = l.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, null, false), g = v.currentNode; g; ) {
    re(g, e);
    var p = Ho[g.tagName], m = g[p];
    p && g.setAttribute(p, ce(m, g.baseURI || "")), g = v.nextNode();
  }
  if (!d.querySelector("head")) {
    var E = l.createElement("head");
    d.appendChild(E);
  }
  if (!d.querySelector("body")) {
    var O = l.createElement("body");
    d.appendChild(O);
  }
  return d;
}
function ni(e, t, r) {
  return yt.apply(this, arguments);
}
function yt() {
  return yt = z(k.mark(function e(t, r, n) {
    var o, i, a;
    return k.wrap(function(c) {
      for (; ; )
        switch (c.prev = c.next) {
          case 0:
            return o = cn(r, n), c.next = 3, un(r.__WUJIE, o);
          case 3:
            i = c.sent, t.appendChild(i), a = document.createElement("div"), a.setAttribute("style", $n), i.insertBefore(a, i.firstChild), t.head = t.querySelector("head"), t.body = t.querySelector("body"), Object.defineProperty(t.firstChild, "parentNode", { enumerable: true, configurable: true, get: function() {
              return r.document;
            } }), nn(t, r.__WUJIE.id, false);
          case 12:
          case "end":
            return c.stop();
        }
    }, e);
  })), yt.apply(this, arguments);
}
function oi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = document.createElement("iframe"), n = "height:100%;width:100%";
  return ze(r, ir(ir({}, t), {}, Z({ style: [n, t.style].join(";") }, Ce, e))), r;
}
function ar(e, t, r) {
  return gt.apply(this, arguments);
}
function gt() {
  return gt = z(k.mark(function e(t, r, n) {
    var o, i;
    return k.wrap(function(l) {
      for (; ; )
        switch (l.prev = l.next) {
          case 0:
            return o = cn(r, n), l.next = 3, un(r.__WUJIE, o);
          case 3:
            i = l.sent, t.replaceChild(i, t.documentElement), Object.defineProperty(t.documentElement, "parentNode", { enumerable: true, configurable: true, get: function() {
              return r.document;
            } }), nn(t, r.__WUJIE.id, true);
          case 7:
          case "end":
            return l.stop();
        }
    }, e);
  })), gt.apply(this, arguments);
}
function de(e) {
  for (; e != null && e.firstChild; )
    tn.call(e, e.firstChild);
}
function ii(e, t) {
  var r = Br(e);
  de(r);
  var n = null;
  try {
    n = window.getComputedStyle(r);
  } catch {
    return;
  }
  n.position === "static" ? (r.setAttribute(ct, n.position), r.setAttribute(He, n.overflow === "visible" ? "" : n.overflow), r.style.setProperty("position", "relative"), r.style.setProperty("overflow", "hidden")) : ["relative", "sticky"].includes(n.position) && (r.setAttribute(He, n.overflow === "visible" ? "" : n.overflow), r.style.setProperty("overflow", "hidden"));
  var o = document.createElement("div");
  o.setAttribute(_t, ""), o.setAttribute("style", Bn), t ? o.appendChild(t) : o.innerHTML = Hn, r.appendChild(o);
}
function ur(e) {
  var t = e.getAttribute(ct), r = e.getAttribute(He);
  t && e.style.removeProperty("position"), r !== null && (r ? e.style.setProperty("overflow", r) : e.style.removeProperty("overflow")), e.removeAttribute(ct), e.removeAttribute(He);
  var n = e.querySelector("div[".concat(_t, "]"));
  n && e.removeChild(n);
}
function ln(e) {
  for (var t = [], r = [], n = /:root/g, o = 0; o < e.length; o++)
    for (var i, a, l = (i = (a = e[o]) === null || a === void 0 ? void 0 : a.cssRules) !== null && i !== void 0 ? i : [], c = 0; c < l.length; c++) {
      var u = l[c].cssText;
      n.test(u) && t.push(u.replace(n, function(d) {
        return Ko[d];
      })), l[c].type === CSSRule.FONT_FACE_RULE && r.push(u);
    }
  var s = null, h = null;
  return t.length && (s = window.document.createElement("style"), s.innerHTML = t.join("")), r.length && (h = window.document.createElement("style"), h.innerHTML = r.join("")), [s, h];
}
function Pe(e) {
  var t = e.__WUJIE, r = t.sync, n = t.id, o = t.prefix, i = te(window.location.href), a = xe(i);
  if (!r && !a[n])
    return i = null;
  var l = e.location.pathname + e.location.search + e.location.hash, c = "";
  o && Object.keys(o).forEach(function(s) {
    var h = o[s];
    l.startsWith(h) && (!c || h.length > o[c].length) && (c = s);
  }), r ? a[n] = window.encodeURIComponent(c ? l.replace(o[c], "{".concat(c, "}")) : l) : delete a[n];
  var u = "?" + Object.keys(a).map(function(s) {
    return s + "=" + a[s];
  }).join("&");
  i.search = u, i.href !== window.location.href && window.history.replaceState(null, "", i.href), i = null;
}
function ai(e) {
  var t = e.location, r = t.pathname, n = t.search, o = t.hash, i = e.__WUJIE, a = i.id, l = i.url, c = i.sync, u = i.execFlag, s = i.prefix, h = i.inject, d = c && !u ? eo(a, s) : l, f = (/^http/.test(d) ? null : d) || l, v = Fr(f), g = v.appRoutePath, p = r + n + o;
  p !== g && e.history.replaceState(null, "", h.mainHostPath + g);
}
function ui() {
  var e = te(window.location.href), t = xe(e);
  Object.keys(t).forEach(function(n) {
    var o = ne(n);
    o && o.execFlag && o.sync && !o.hrefFlag && !o.activeFlag && delete t[n];
  });
  var r = "?" + Object.keys(t).map(function(n) {
    return n + "=" + window.decodeURIComponent(t[n]);
  }).join("&");
  e.search = r, e.href !== window.location.href && window.history.replaceState(null, "", e.href), e = null;
}
function ci(e, t) {
  var r = te(window.location.href), n = xe(r);
  n[e] = window.encodeURIComponent(t);
  var o = "?" + Object.keys(n).map(function(i) {
    return i + "=" + n[i];
  }).join("&");
  r.search = o, window.history.pushState(null, "", r.href), r = null;
}
function li() {
  window.addEventListener("popstate", function() {
    var e = te(window.location.href), t = xe(e);
    e = null, Object.keys(t).map(function(r) {
      return ne(r);
    }).filter(function(r) {
      return r;
    }).forEach(function(r) {
      var n = t[r.id], o = he.call(r.iframe.contentDocument, "body");
      if (/http/.test(n))
        r.degrade ? (me(r.document.documentElement, o), Xe(window.decodeURIComponent(n), Jr(r.id).parentElement, r.degradeAttrs)) : Xe(window.decodeURIComponent(n), r.shadowRoot.host.parentElement, r.degradeAttrs), r.hrefFlag = true;
      else if (r.hrefFlag) {
        if (r.degrade) {
          var i = an(r.id, r.el, r.degradeAttrs), a = i.iframe;
          sn(a.contentWindow, r.iframe.contentWindow), a.contentWindow.onunload = function() {
            r.unmount();
          }, a.contentDocument.appendChild(o.firstElementChild), r.document = a.contentDocument;
        } else
          me(r.shadowRoot.host, r.el);
        r.hrefFlag = false;
      }
    });
  });
}
function cr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cr(Object(r), true).forEach(function(n) {
      Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function si(e) {
  e.__WUJIE_EVENTLISTENER__ = e.__WUJIE_EVENTLISTENER__ || /* @__PURE__ */ new Set(), e.addEventListener = function(r, n, o) {
    if (q(e.__WUJIE.plugins, "windowAddEventListenerHook", e, r, n, o), e.__WUJIE_EVENTLISTENER__.add({ type: r, listener: n, options: o }), Yt.includes(r) || V(o) === "object" && o.targetWindow) {
      var i = V(o) === "object" && o.targetWindow ? o == null ? void 0 : o.targetWindow : e;
      return zt.call(i, r, n, o);
    }
    zt.call(window.__WUJIE_RAW_WINDOW__ || window, r, n, o);
  }, e.removeEventListener = function(r, n, o) {
    if (q(e.__WUJIE.plugins, "windowRemoveEventListenerHook", e, r, n, o), e.__WUJIE_EVENTLISTENER__.forEach(function(a) {
      a.listener === n && a.type === r && o == a.options && e.__WUJIE_EVENTLISTENER__.delete(a);
    }), Yt.includes(r) || V(o) === "object" && o.targetWindow) {
      var i = V(o) === "object" && o.targetWindow ? o == null ? void 0 : o.targetWindow : e;
      return Zt.call(i, r, n, o);
    }
    Zt.call(window.__WUJIE_RAW_WINDOW__ || window, r, n, o);
  };
}
function lr(e, t, r) {
  e.__WUJIE = t, e.__WUJIE_PUBLIC_PATH__ = r + "/", e.$wujie = t.provide, e.__WUJIE_RAW_WINDOW__ = e;
}
function fi(e, t, r) {
  var n = e.history, o = n.pushState, i = n.replaceState;
  n.pushState = function(a, l, c) {
    var u = r + e.location.pathname + e.location.search + e.location.hash, s = ce(c == null ? void 0 : c.replace(t, ""), u), h = c === void 0;
    o.call(n, a, l, h ? void 0 : s), !h && (sr(e, t, r), Pe(e));
  }, n.replaceState = function(a, l, c) {
    var u = r + e.location.pathname + e.location.search + e.location.hash, s = ce(c == null ? void 0 : c.replace(t, ""), u), h = c === void 0;
    i.call(n, a, l, h ? void 0 : s), !h && (sr(e, t, r), Pe(e));
  };
}
function sr(e, t, r) {
  var n, o = new URL((n = e.location.href) === null || n === void 0 ? void 0 : n.replace(r, ""), t), i = he.call(e.document, "base");
  i && i.setAttribute("href", t + o.pathname);
}
function di(e) {
  function t(n) {
    var o = e[n];
    try {
      return typeof o == "function" && !St(o) ? e[n] = window[n].bind(window) : e[n] = window[n], true;
    } catch (i) {
      return H(i.message), false;
    }
  }
  Object.getOwnPropertyNames(e).forEach(function(n) {
    if (n === "getSelection") {
      Object.defineProperty(e, n, { get: function() {
        return e.document[n];
      } });
      return;
    }
    if (Go.includes(n)) {
      t(n);
      return;
    }
    Qo.some(function(o) {
      return o.test(n) && n in e.parent ? t(n) : false;
    });
  });
  var r = Object.getOwnPropertyNames(window).filter(function(n) {
    return /^on/.test(n);
  }).filter(function(n) {
    return !Bo.includes(n);
  });
  r.forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n) || { enumerable: true, writable: true };
    try {
      Object.defineProperty(e, n, { enumerable: o.enumerable, configurable: true, get: function() {
        return window[n];
      }, set: o.writable || o.set ? function(i) {
        window[n] = typeof i == "function" ? i.bind(e) : i;
      } : void 0 });
    } catch (i) {
      H(i.message);
    }
  }), q(e.__WUJIE.plugins, "windowPropertyOverride", e);
}
function pi(e) {
  var t = e.__WUJIE;
  e.Node.prototype.addEventListener = function(r, n, o) {
    var i = t.elementEventCacheMap.get(this);
    return i ? i.find(function(a) {
      return a.type === r && a.handler === n;
    }) || i.push({ type: r, handler: n, options: o }) : t.elementEventCacheMap.set(this, [{ type: r, handler: n, options: o }]), jt.call(this, r, n, o);
  }, e.Node.prototype.removeEventListener = function(r, n, o) {
    var i = t.elementEventCacheMap.get(this);
    if (i) {
      var a = i == null ? void 0 : i.findIndex(function(l) {
        return l.type === r && l.handler === n;
      });
      i.splice(a, 1);
    }
    return i != null && i.length || t.elementEventCacheMap.delete(this), tt.call(this, r, n, o);
  };
}
function vi(e, t) {
  for (var r = t.__WUJIE, n = /* @__PURE__ */ new WeakMap(), o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, null, false), i = o.currentNode; i; ) {
    var a = r.elementEventCacheMap.get(i);
    a != null && a.length && (n.set(i, a), a.forEach(function(l) {
      i.addEventListener(l.type, l.handler, l.options);
    })), i = o.nextNode();
  }
  r.elementEventCacheMap = n;
}
function hi(e, t, r) {
  var n = r.__WUJIE, o = /* @__PURE__ */ new WeakMap(), i = n.elementEventCacheMap.get(e);
  i != null && i.length && (o.set(t, i), i.forEach(function(a) {
    t.addEventListener(a.type, a.handler, a.options);
  })), n.elementEventCacheMap = o;
}
function sn(e, t) {
  Object.defineProperty(e.Event.prototype, "timeStamp", { get: function() {
    return t.document.createEvent("Event").timeStamp;
  } });
}
function mi(e) {
  var t = e.__WUJIE, r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  e.Document.prototype.addEventListener = function(f, v, g) {
    if (v) {
      var p = r.get(v), m = n.get(v);
      if (p || (p = typeof v == "function" ? v.bind(this) : v, r.set(v, p)), m ? m.includes(f) || m.push(f) : n.set(v, [f]), q(e.__WUJIE.plugins, "documentAddEventListenerHook", e, f, p, g), Gt.includes(f))
        return jt.call(this, f, p, g);
      if (t.degrade)
        return t.document.addEventListener(f, p, g);
      if (Qt.includes(f))
        return window.document.addEventListener(f, p, g);
      if (qt.includes(f)) {
        window.document.addEventListener(f, p, g), t.shadowRoot.addEventListener(f, p, g);
        return;
      }
      t.shadowRoot.addEventListener(f, p, g);
    }
  }, e.Document.prototype.removeEventListener = function(f, v, g) {
    var p = r.get(v), m = n.get(v);
    if (p) {
      if (m != null && m.includes(f) && (m.splice(m.indexOf(f), 1), m.length || (r.delete(v), n.delete(v))), q(e.__WUJIE.plugins, "documentRemoveEventListenerHook", e, f, p, g), Gt.includes(f))
        return tt.call(this, f, p, g);
      if (t.degrade)
        return t.document.removeEventListener(f, p, g);
      if (Qt.includes(f))
        return window.document.removeEventListener(f, p, g);
      if (qt.includes(f)) {
        window.document.removeEventListener(f, p, g), t.shadowRoot.removeEventListener(f, p, g);
        return;
      }
      t.shadowRoot.removeEventListener(f, p, g);
    }
  };
  var o = Object.keys(e.HTMLElement.prototype).filter(function(f) {
    return /^on/.test(f);
  }), i = Object.keys(e.Document.prototype).filter(function(f) {
    return /^on/.test(f);
  }).filter(function(f) {
    return !$o.includes(f);
  });
  o.filter(function(f) {
    return i.includes(f);
  }).forEach(function(f) {
    var v = Object.getOwnPropertyDescriptor(e.Document.prototype, f) || { enumerable: true, writable: true };
    try {
      Object.defineProperty(e.Document.prototype, f, { enumerable: v.enumerable, configurable: true, get: function() {
        return t.degrade ? t.document[f] : t.shadowRoot.firstElementChild[f];
      }, set: v.writable || v.set ? function(g) {
        var p = typeof g == "function" ? g.bind(e.document) : g;
        t.degrade ? t.document[f] = p : t.shadowRoot.firstElementChild[f] = p;
      } : void 0 });
    } catch (g) {
      H(g.message);
    }
  });
  var a = $.ownerProperties, l = $.modifyProperties, c = $.shadowProperties, u = $.shadowMethods, s = $.documentProperties, h = $.documentMethods, d = $.documentEvents;
  l.concat(c, u, s, h).forEach(function(f) {
    var v = Object.getOwnPropertyDescriptor(e.Document.prototype, f) || { enumerable: true, writable: true };
    try {
      Object.defineProperty(e.Document.prototype, f, { enumerable: v.enumerable, configurable: true, get: function() {
        return t.proxyDocument[f];
      }, set: void 0 });
    } catch (g) {
      H(g.message);
    }
  }), d.forEach(function(f) {
    var v = Object.getOwnPropertyDescriptor(e.Document.prototype, f) || { enumerable: true, writable: true };
    try {
      Object.defineProperty(e.Document.prototype, f, { enumerable: v.enumerable, configurable: true, get: function() {
        return (t.degrade ? t : window).document[f];
      }, set: v.writable || v.set ? function(g) {
        (t.degrade ? t : window).document.removeEventListener(f, r.get(g)), (t.degrade ? t : window).document.addEventListener(f, typeof g == "function" ? g.bind(e.document) : g), r.set(g, g.bind(e.document));
      } : void 0 });
    } catch (g) {
      H(g.message);
    }
  }), a.forEach(function(f) {
    Object.defineProperty(e.document, f, { enumerable: true, configurable: true, get: function() {
      return t.proxyDocument[f];
    }, set: void 0 });
  }), q(e.__WUJIE.plugins, "documentPropertyOverride", e);
}
function yi(e) {
  var t = e.Node.prototype.getRootNode, r = e.Node.prototype.appendChild, n = e.Node.prototype.insertBefore, o = e.Node.prototype.removeChild;
  e.Node.prototype.getRootNode = function(i) {
    var a = t.call(this, i);
    return a === e.__WUJIE.shadowRoot ? e.document : a;
  }, e.Node.prototype.appendChild = function(i) {
    var a = r.call(this, i);
    return re(i, e), a;
  }, e.Node.prototype.insertBefore = function(i, a) {
    var l = n.call(this, i, a);
    return re(i, e), l;
  }, e.Node.prototype.removeChild = function(i) {
    var a;
    try {
      a = o.call(this, i);
    } catch {
      var l;
      console.warn("Failed to removeChild: ".concat(i.nodeName.toLowerCase(), " is not a child of ").concat(this.nodeName.toLowerCase(), ", try again with parentNode attribute. ")), i.isConnected && ue((l = i.parentNode) === null || l === void 0 ? void 0 : l.removeChild) && i.parentNode.removeChild(i);
    }
    return re(i, e), a;
  };
}
function gi(e) {
  be(e, e.HTMLImageElement, "src"), be(e, e.HTMLAnchorElement, "href"), be(e, e.HTMLSourceElement, "src"), be(e, e.HTMLLinkElement, "href"), be(e, e.HTMLScriptElement, "src"), be(e, e.HTMLMediaElement, "src");
}
function Ei(e, t) {
  var r = e.document, n = r.createElement("base"), o = te(e.location.href), i = te(t);
  n.setAttribute("href", i.protocol + "//" + i.host + o.pathname), r.head.appendChild(n);
}
function bi(e, t, r, n) {
  var o = e.document, i = window.document.implementation.createHTMLDocument(""), a = o.importNode(i.documentElement, true);
  o.documentElement ? o.replaceChild(a, o.documentElement) : o.appendChild(a), e.__WUJIE_RAW_DOCUMENT_HEAD__ = o.head, e.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__ = e.Document.prototype.querySelector, e.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__ = e.Document.prototype.querySelectorAll, e.__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__ = e.Document.prototype.createElement, e.__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__ = e.Document.prototype.createTextNode, Ei(e, t.url), fi(e, n, r), si(e), t.degrade && pi(e), wi(e), di(e), mi(e), yi(e), gi(e);
}
function fn(e, t) {
  var r = e.contentWindow, n = r.document, o = Date.now() + 5e3;
  return new Promise(function(i) {
    function a() {
      setTimeout(function() {
        var l;
        try {
          l = r.document;
        } catch {
          l = null;
        }
        if ((!l || l == n) && Date.now() < o) {
          a();
          return;
        }
        if (t) {
          var c = r.location.href;
          l.open(), l.close();
          var u = Date.now() + 1e3, s = function() {
            if (Date.now() > u) {
              Oi(), e.src = t.mainHostPath, fn(e, false).then(i);
              return;
            }
            r.location.href === c ? setTimeout(s, 1) : i();
          };
          s();
          return;
        }
        r.stop ? r.stop() : l.execCommand("Stop"), i();
      }, 1);
    }
    a();
  });
}
function re(e, t) {
  var r = t.__WUJIE.proxyLocation;
  if (!e._hasPatch) {
    try {
      Object.defineProperties(e, { baseURI: { configurable: true, get: function() {
        return r.protocol + "//" + r.host + r.pathname;
      }, set: void 0 }, ownerDocument: { configurable: true, get: function() {
        return t.document;
      } }, _hasPatch: { get: function() {
        return true;
      } } });
    } catch (n) {
      console.warn(n);
    }
    q(t.__WUJIE.plugins, "patchElementHook", e, t);
  }
}
function wi(e) {
  e.addEventListener("hashchange", function() {
    return Pe(e);
  }), e.addEventListener("popstate", function() {
    Pe(e);
  });
}
function X(e, t, r) {
  var n = e, o = n.src, i = n.module, a = n.content, l = n.crossorigin, c = n.crossoriginType, u = n.async, s = n.attrs, h = n.callback, d = n.onload, f = t.document.createElement("script"), v = t.document.createElement("script"), g = t.__WUJIE, p = g.replace, m = g.plugins, E = g.proxyLocation, O = jo({ plugins: m, replace: p }), S = O(a, o, Ze(E));
  if (s && Object.keys(s).filter(function(x) {
    return !Object.keys(e).includes(x);
  }).forEach(function(x) {
    return f.setAttribute(x, String(s[x]));
  }), a) {
    !t.__WUJIE.degrade && !i && (s == null ? void 0 : s.type) !== "importmap" && (S = `(function(window, self, global, location) {
      `.concat(S, `
}).bind(window.__WUJIE.proxy)(
  window.__WUJIE.proxy,
  window.__WUJIE.proxy,
  window.__WUJIE.proxy,
  window.__WUJIE.proxyLocation,
);`));
    var j = Object.getOwnPropertyDescriptor(f, "src");
    if (j != null && j.configurable || !j)
      try {
        Object.defineProperty(f, "src", { get: function() {
          return o || "";
        } });
      } catch (x) {
        console.warn(x);
      }
  } else
    o && f.setAttribute("src", o), l && f.setAttribute("crossorigin", c);
  i && f.setAttribute("type", "module"), f.textContent = S || "", v.textContent = "if(window.__WUJIE.execQueue && window.__WUJIE.execQueue.length){ window.__WUJIE.execQueue.shift()()}";
  var A = he.call(t.document, "head"), L = function() {
    return !u && A.appendChild(v);
  }, M = function() {
    d == null ? void 0 : d(), L();
  };
  if (/^<!DOCTYPE html/i.test(S))
    return ee(Te, e), L();
  r && Hr(f, Gr(r));
  var T = !a && o;
  T && (f.onload = M, f.onerror = M), A.appendChild(f), h == null ? void 0 : h(t), q(m, "appendOrInsertElementHook", f, t, r), !T && M();
}
function Xe(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = window.document.createElement("iframe"), o = "height:100%;width:100%";
  ze(n, Ye(Ye({}, r), {}, { src: e, style: [o, r.style].join(";") })), me(n, t);
}
var _i = function() {
  var e = "wujie:disableSandboxEmptyPageURL", t = false;
  try {
    t = localStorage.getItem(e) === "true";
  } catch {
  }
  if (t || typeof URL > "u" || typeof URL.createObjectURL != "function")
    return [function() {
      return "";
    }, function() {
    }];
  var r = "", n = function() {
    if (t)
      return "";
    if (r)
      return r;
    var a = new Blob(["<!DOCTYPE html><html><head></head><body></body></html>"], { type: "text/html" });
    return r = URL.createObjectURL(a), r;
  }, o = function() {
    t = true;
    try {
      localStorage.setItem(e, "true");
    } catch {
    }
  };
  return [n, o];
}(), dn = Ue(_i, 2), Si = dn[0], Oi = dn[1];
function Pi(e, t, r, n, o) {
  var i = t && t.src, a = false;
  i || (i = Si(), a = !!i, i || (i = r));
  var l = window.document.createElement("iframe"), c = Ye(Ye({ style: "display: none" }, t), {}, Z({ src: i, name: e.id }, Mr, ""));
  ze(l, c), window.document.body.appendChild(l);
  var u = l.contentWindow;
  return lr(u, e, n), e.iframeReady = fn(l, a && { mainHostPath: r }).then(function() {
    u.__WUJIE || lr(u, e, n), bi(u, e, r, n), $r(u.__WUJIE.id) || u.history.replaceState(null, "", r + o);
  }), l;
}
function pn(e, t, r) {
  var n = e.contentWindow.__WUJIE, o = n.shadowRoot, i = n.id, a = n.degrade, l = n.document, c = n.degradeAttrs, u = t;
  if (!/^http/.test(u)) {
    var s = te(u);
    u = r + s.pathname + s.search + s.hash, s = null;
  }
  if (e.contentWindow.__WUJIE.hrefFlag = true, a) {
    var h = he.call(e.contentDocument, "body");
    me(l.documentElement, h), Xe(window.decodeURIComponent(u), Jr(i).parentElement, c);
  } else
    Xe(u, o.host.parentElement, c);
  return ci(i, u), true;
}
function xi(e, t, r, n) {
  var o = new Proxy(e.contentWindow, { get: function(c, u) {
    if (u === "location")
      return c.__WUJIE.proxyLocation;
    if (u === "self" || u === "window" && Object.getOwnPropertyDescriptor(window, "window").get)
      return c.__WUJIE.proxy;
    if (u === "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__" || u === "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__")
      return c[u];
    var s = Object.getOwnPropertyDescriptor(c, u);
    return (s == null ? void 0 : s.configurable) === false && (s == null ? void 0 : s.writable) === false ? c[u] : je(c, u);
  }, set: function(c, u, s) {
    return Kn(c, s), c[u] = s, true;
  }, has: function(c, u) {
    return u in c;
  } }), i = new Proxy({}, { get: function(c, u) {
    var s = window.document, h = e.contentWindow.__WUJIE, d = h.shadowRoot, f = h.proxyLocation;
    d || qr();
    var v = e.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__, g = e.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__;
    if (u === "createElement" || u === "createTextNode")
      return new Proxy(s[u], { apply: function(M, T, x) {
        var C = u === "createElement" ? v : g, R = C.apply(e.contentDocument, x);
        return re(R, e.contentWindow), R;
      } });
    if (u === "documentURI" || u === "URL")
      return f.href;
    if (u === "getElementsByTagName" || u === "getElementsByClassName" || u === "getElementsByName")
      return new Proxy(d.querySelectorAll, { apply: function(M, T, x) {
        var C = x[0];
        if (T !== e.contentDocument)
          return T[u].apply(T, x);
        if (u === "getElementsByTagName" && C === "script")
          return e.contentDocument.scripts;
        u === "getElementsByClassName" && (C = "." + C), u === "getElementsByName" && (C = '[name="'.concat(C, '"]'));
        var R;
        try {
          R = M.call(d, C);
        } catch {
          R = [];
        }
        return R;
      } });
    if (u === "getElementById")
      return new Proxy(d.querySelector, { apply: function(M, T, x) {
        if (T !== e.contentDocument) {
          var C;
          return (C = T[u]) === null || C === void 0 ? void 0 : C.apply(T, x);
        }
        try {
          return M.call(d, '[id="'.concat(x[0], '"]')) || e.contentWindow.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__.call(e.contentWindow.document, "#".concat(x[0]));
        } catch {
          return H(Vn), null;
        }
      } });
    if (u === "querySelector" || u === "querySelectorAll") {
      var p = { querySelector: "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__", querySelectorAll: "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__" };
      return new Proxy(d[u], { apply: function(M, T, x) {
        if (T !== e.contentDocument) {
          var C;
          return (C = T[u]) === null || C === void 0 ? void 0 : C.apply(T, x);
        }
        return M.apply(d, x) || (x[0] === "base" ? null : e.contentWindow[p[u]].call(e.contentWindow.document, x[0]));
      } });
    }
    if (u === "documentElement" || u === "scrollingElement")
      return d.firstElementChild;
    if (u === "forms")
      return d.querySelectorAll("form");
    if (u === "images")
      return d.querySelectorAll("img");
    if (u === "links")
      return d.querySelectorAll("a");
    var m = $.ownerProperties, E = $.shadowProperties, O = $.shadowMethods, S = $.documentProperties, j = $.documentMethods;
    if (m.concat(E).includes(u.toString()))
      return u === "activeElement" && d.activeElement === null ? d.body : d[u];
    if (O.includes(u.toString())) {
      var A;
      return (A = je(d, u)) !== null && A !== void 0 ? A : je(s, u);
    }
    if (S.includes(u.toString()))
      return s[u];
    if (j.includes(u.toString()))
      return je(s, u);
  } }), a = new Proxy({}, { get: function(c, u) {
    var s = e.contentWindow.location;
    return u === "host" || u === "hostname" || u === "protocol" || u === "port" || u === "origin" ? t[u] : u === "href" ? s[u].replace(r, n) : u === "reload" ? (H(Dr), function() {
      return null;
    }) : u === "replace" ? new Proxy(s[u], { apply: function(d, f, v) {
      var g;
      return d.call(s, (g = v[0]) === null || g === void 0 ? void 0 : g.replace(n, r));
    } }) : je(s, u);
  }, set: function(c, u, s) {
    return u === "href" ? pn(e, s, n) : (e.contentWindow.location[u] = s, true);
  }, ownKeys: function() {
    return Object.keys(e.contentWindow.location).filter(function(c) {
      return c !== "reload";
    });
  }, getOwnPropertyDescriptor: function(c, u) {
    return { enumerable: true, configurable: true, value: this[u] };
  } });
  return { proxyWindow: o, proxyDocument: i, proxyLocation: a };
}
function Ii(e, t, r, n) {
  var o = {}, i = e.contentWindow.__WUJIE;
  Object.defineProperties(o, { createElement: { get: function() {
    return function() {
      for (var E = arguments.length, O = new Array(E), S = 0; S < E; S++)
        O[S] = arguments[S];
      var j = e.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__.apply(e.contentDocument, O);
      return re(j, e.contentWindow), j;
    };
  } }, createTextNode: { get: function() {
    return function() {
      for (var E = arguments.length, O = new Array(E), S = 0; S < E; S++)
        O[S] = arguments[S];
      var j = e.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__.apply(e.contentDocument, O);
      return re(j, e.contentWindow), j;
    };
  } }, documentURI: { get: function() {
    return i.proxyLocation.href;
  } }, URL: { get: function() {
    return i.proxyLocation.href;
  } }, getElementsByTagName: { get: function() {
    return function() {
      var E = arguments.length <= 0 ? void 0 : arguments[0];
      return E === "script" ? e.contentDocument.scripts : i.document.getElementsByTagName(E);
    };
  } }, getElementById: { get: function() {
    return function() {
      var E = arguments.length <= 0 ? void 0 : arguments[0];
      return i.document.getElementById(E) || e.contentWindow.__WUJIE_RAW_DOCUMENT_HEAD__.querySelector("#".concat(E));
    };
  } } });
  var a = $.modifyLocalProperties, l = $.modifyProperties, c = $.ownerProperties, u = $.shadowProperties, s = $.shadowMethods, h = $.documentProperties, d = $.documentMethods;
  l.filter(function(m) {
    return !a.includes(m);
  }).concat(c, u, s, h, d).forEach(function(m) {
    Object.defineProperty(o, m, { get: function() {
      var O, S = (O = i.document) === null || O === void 0 ? void 0 : O[m];
      return Ge(S) ? S.bind(i.document) : S;
    } });
  });
  var f = {}, v = e.contentWindow.location, g = Object.keys(v), p = ["host", "hostname", "port", "protocol", "port"];
  return p.forEach(function(m) {
    f[m] = t[m];
  }), Object.defineProperties(f, { href: { get: function() {
    return v.href.replace(r, n);
  }, set: function(E) {
    pn(e, E, n);
  } }, reload: { get: function() {
    return H(Dr), function() {
      return null;
    };
  } } }), g.filter(function(m) {
    return !p.concat(["href", "reload"]).includes(m);
  }).forEach(function(m) {
    Object.defineProperty(f, m, { get: function() {
      return Ge(v[m]) ? v[m].bind(v) : v[m];
    } });
  }), { proxyDocument: o, proxyLocation: f };
}
function fr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fr(Object(r), true).forEach(function(n) {
      Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var _e = function(e) {
  if ((e = window.__WUJIE_INJECT) !== null && e !== void 0 && e.appEventObjMap)
    return window.__WUJIE_INJECT.appEventObjMap;
  var t = window.__POWERED_BY_WUJIE__ ? window.__WUJIE.inject.appEventObjMap : /* @__PURE__ */ new Map();
  return window.__WUJIE_INJECT = dr(dr({}, window.__WUJIE_INJECT), {}, { appEventObjMap: t }), t;
}(), vn = function() {
  function e(t) {
    xt(this, e), this.id = t, this.$clear(), _e.get(this.id) || _e.set(this.id, {}), this.eventObj = _e.get(this.id);
  }
  return It(e, [{ key: "$on", value: function(r, n) {
    var o = this.eventObj[r];
    return o ? (o.includes(n) || o.push(n), this) : (this.eventObj[r] = [n], this);
  } }, { key: "$onAll", value: function(r) {
    return this.$on(De, r);
  } }, { key: "$once", value: function(r, n) {
    var o = (function() {
      this.$off(r, o), n.apply(void 0, arguments);
    }).bind(this);
    this.$on(r, o);
  } }, { key: "$off", value: function(r, n) {
    var o = this.eventObj[r];
    if (!r || !o || !o.length)
      return H("".concat(r, " ").concat(At)), this;
    for (var i, a = o.length; a--; )
      if (i = o[a], i === n) {
        o.splice(a, 1);
        break;
      }
    return this;
  } }, { key: "$offAll", value: function(r) {
    return this.$off(De, r);
  } }, { key: "$emit", value: function(r) {
    var n = [], o = [];
    if (_e.forEach(function(v) {
      v[r] && (n = n.concat(v[r])), v[De] && (o = o.concat(v[De]));
    }), !r || n.length === 0 && o.length === 0)
      H("".concat(r, " ").concat(At));
    else
      try {
        for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
          a[l - 1] = arguments[l];
        for (var c = 0, u = n.length; c < u; c++) {
          var s;
          (s = n)[c].apply(s, a);
        }
        for (var h = 0, d = o.length; h < d; h++) {
          var f;
          (f = o)[h].apply(f, [r].concat(a));
        }
      } catch (v) {
        ee(v);
      }
    return this;
  } }, { key: "$clear", value: function() {
    var r, n = (r = _e.get(this.id)) !== null && r !== void 0 ? r : {}, o = Object.keys(n);
    return o.forEach(function(i) {
      return delete n[i];
    }), this;
  } }]);
}();
function pr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pr(Object(r), true).forEach(function(n) {
      Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var hn = function() {
  function e(t) {
    xt(this, e), Z(this, "elementEventCacheMap", /* @__PURE__ */ new WeakMap()), window.__POWERED_BY_WUJIE__ ? this.inject = window.__WUJIE.inject : this.inject = { idToSandboxMap: Y, appEventObjMap: _e, mainHostPath: window.location.protocol + "//" + window.location.host };
    var r = t.name, n = t.url, o = t.attrs, i = t.fiber, a = t.degradeAttrs, l = t.degrade, c = t.lifecycles, u = t.plugins;
    this.id = r, this.fiber = i, this.degrade = l || !Wr, this.bus = new vn(this.id), this.url = n, this.degradeAttrs = a, this.provide = { bus: this.bus }, this.styleSheetElements = [], this.execQueue = [], this.lifecycles = c, this.plugins = Xr(u);
    var s = Fr(n), h = s.urlElement, d = s.appHostPath, f = s.appRoutePath, v = this.inject.mainHostPath;
    if (this.iframe = Pi(this, o, v, d, f), this.degrade) {
      var g = Ii(this.iframe, h, v, d), p = g.proxyDocument, m = g.proxyLocation;
      this.proxyDocument = p, this.proxyLocation = m;
    } else {
      var E = xi(this.iframe, h, v, d), O = E.proxyWindow, S = E.proxyDocument, j = E.proxyLocation;
      this.proxy = O, this.proxyDocument = S, this.proxyLocation = j;
    }
    this.provide.location = this.proxyLocation, ko(this.id, this);
  }
  return It(e, [{ key: "active", value: function() {
    var t = z(k.mark(function n(o) {
      var i = this, a, l, c, u, s, h, d, f, v, g, p, m, E, O, S, j;
      return k.wrap(function(L) {
        for (; ; )
          switch (L.prev = L.next) {
            case 0:
              return a = o.sync, l = o.url, c = o.el, u = o.template, s = o.props, h = o.alive, d = o.prefix, f = o.fetch, v = o.replace, this.url = l, this.sync = a, this.alive = h, this.hrefFlag = false, this.prefix = d ?? this.prefix, this.replace = v ?? this.replace, this.provide.props = s ?? this.provide.props, this.activeFlag = true, L.next = 11, this.iframeReady;
            case 11:
              if (g = this.iframe.contentWindow, p = f ? function(M, T) {
                return f(typeof M == "string" ? ce(M, i.proxyLocation.href) : M, T);
              } : this.fetch, p && (g.fetch = p, this.fetch = p), this.execFlag && this.alive || ai(g), Pe(g), this.template = u ?? this.template, !this.degrade) {
                L.next = 38;
                break;
              }
              if (m = he.call(g.document, "body"), E = an(this.id, c ?? m, this.degradeAttrs), O = E.iframe, S = E.container, this.el = S, c && de(m), sn(O.contentWindow, g), O.contentWindow.onunload = function() {
                i.unmount();
              }, !this.document) {
                L.next = 34;
                break;
              }
              if (!this.alive) {
                L.next = 29;
                break;
              }
              O.contentDocument.replaceChild(this.document.documentElement, O.contentDocument.documentElement), vi(O.contentDocument.documentElement, g), L.next = 32;
              break;
            case 29:
              return L.next = 31, ar(O.contentDocument, this.iframe.contentWindow, this.template);
            case 31:
              hi(this.document.documentElement, O.contentDocument.documentElement, g);
            case 32:
              L.next = 36;
              break;
            case 34:
              return L.next = 36, ar(O.contentDocument, this.iframe.contentWindow, this.template);
            case 36:
              return this.document = O.contentDocument, L.abrupt("return");
            case 38:
              if (!this.shadowRoot) {
                L.next = 44;
                break;
              }
              if (this.el = me(this.shadowRoot.host, c), !this.alive) {
                L.next = 42;
                break;
              }
              return L.abrupt("return");
            case 42:
              L.next = 46;
              break;
            case 44:
              j = he.call(g.document, "body"), this.el = me(ti(this.id), c ?? j);
            case 46:
              return L.next = 48, ni(this.shadowRoot, g, this.template);
            case 48:
              this.patchCssRules(), this.provide.shadowRoot = this.shadowRoot;
            case 50:
            case "end":
              return L.stop();
          }
      }, n, this);
    }));
    function r(n) {
      return t.apply(this, arguments);
    }
    return r;
  }() }, { key: "requestIdleCallback", value: function(r) {
    var n = this;
    return Ot(function() {
      n.iframe && r.apply(n);
    });
  } }, { key: "start", value: function() {
    var t = z(k.mark(function n(o) {
      var i = this, a, l, c, u, s, h, d, f, v;
      return k.wrap(function(p) {
        for (; ; )
          switch (p.prev = p.next) {
            case 0:
              return this.execFlag = true, p.next = 3, o();
            case 3:
              if (a = p.sent, this.iframe) {
                p.next = 6;
                break;
              }
              return p.abrupt("return");
            case 6:
              return l = this.iframe.contentWindow, l.__POWERED_BY_WUJIE__ = true, c = Qe("jsBeforeLoaders", this.plugins), u = Qe("jsAfterLoaders", this.plugins), s = [], h = [], d = [], a.forEach(function(m) {
                m.defer ? d.push(m) : m.async ? h.push(m) : s.push(m);
              }), c.forEach(function(m) {
                i.execQueue.push(function() {
                  return i.fiber ? i.requestIdleCallback(function() {
                    return X(m, l);
                  }) : X(m, l);
                });
              }), s.concat(d).forEach(function(m) {
                i.execQueue.push(function() {
                  return m.contentPromise.then(function(E) {
                    return i.fiber ? i.requestIdleCallback(function() {
                      return X(oe(oe({}, m), {}, { content: E }), l);
                    }) : X(oe(oe({}, m), {}, { content: E }), l);
                  });
                });
              }), h.forEach(function(m) {
                m.contentPromise.then(function(E) {
                  i.fiber ? i.requestIdleCallback(function() {
                    return X(oe(oe({}, m), {}, { content: E }), l);
                  }) : X(oe(oe({}, m), {}, { content: E }), l);
                });
              }), this.execQueue.push(this.fiber ? function() {
                return i.requestIdleCallback(function() {
                  return i.mount();
                });
              } : function() {
                return i.mount();
              }), f = function() {
                var E;
                Ne(l.document, "DOMContentLoaded"), Ne(l, "DOMContentLoaded"), (E = i.execQueue.shift()) === null || E === void 0 || E();
              }, this.execQueue.push(this.fiber ? function() {
                return i.requestIdleCallback(f);
              } : f), u.forEach(function(m) {
                i.execQueue.push(function() {
                  return i.fiber ? i.requestIdleCallback(function() {
                    return X(m, l);
                  }) : X(m, l);
                });
              }), v = function() {
                var E;
                Ne(l.document, "readystatechange"), Ne(l, "load"), (E = i.execQueue.shift()) === null || E === void 0 || E();
              }, this.execQueue.push(this.fiber ? function() {
                return i.requestIdleCallback(v);
              } : v), (this.alive || !ue(this.iframe.contentWindow.__WUJIE_UNMOUNT)) && ur(this.el), this.execQueue.shift()(), p.abrupt("return", new Promise(function(m) {
                i.execQueue.push(function() {
                  var E;
                  m(), (E = i.execQueue.shift()) === null || E === void 0 || E();
                });
              }));
            case 26:
            case "end":
              return p.stop();
          }
      }, n, this);
    }));
    function r(n) {
      return t.apply(this, arguments);
    }
    return r;
  }() }, { key: "mount", value: function() {
    var r;
    if (!this.mountFlag) {
      if (ue(this.iframe.contentWindow.__WUJIE_MOUNT)) {
        var n, o, i, a;
        ur(this.el), (n = this.lifecycles) === null || n === void 0 || (o = n.beforeMount) === null || o === void 0 || o.call(n, this.iframe.contentWindow), this.iframe.contentWindow.__WUJIE_MOUNT(), (i = this.lifecycles) === null || i === void 0 || (a = i.afterMount) === null || a === void 0 || a.call(i, this.iframe.contentWindow), this.mountFlag = true;
      }
      if (this.alive) {
        var l, c;
        (l = this.lifecycles) === null || l === void 0 || (c = l.activated) === null || c === void 0 || c.call(l, this.iframe.contentWindow);
      }
      (r = this.execQueue.shift()) === null || r === void 0 || r();
    }
  } }, { key: "unmount", value: function() {
    var t = z(k.mark(function n() {
      var o, i, a, l, c, u, s;
      return k.wrap(function(d) {
        for (; ; )
          switch (d.prev = d.next) {
            case 0:
              if (this.activeFlag = false, ui(), this.alive && ((o = this.lifecycles) === null || o === void 0 || (i = o.deactivated) === null || i === void 0 || i.call(o, this.iframe.contentWindow)), this.mountFlag) {
                d.next = 5;
                break;
              }
              return d.abrupt("return");
            case 5:
              if (!(ue(this.iframe.contentWindow.__WUJIE_UNMOUNT) && !this.alive && !this.hrefFlag)) {
                d.next = 15;
                break;
              }
              return (a = this.lifecycles) === null || a === void 0 || (l = a.beforeUnmount) === null || l === void 0 || l.call(a, this.iframe.contentWindow), d.next = 9, this.iframe.contentWindow.__WUJIE_UNMOUNT();
            case 9:
              (c = this.lifecycles) === null || c === void 0 || (u = c.afterUnmount) === null || u === void 0 || u.call(c, this.iframe.contentWindow), this.mountFlag = false, (s = this.bus) === null || s === void 0 || s.$clear(), this.degrade || (de(this.shadowRoot), nr(this.head), nr(this.body)), de(this.head), de(this.body);
            case 15:
            case "end":
              return d.stop();
          }
      }, n, this);
    }));
    function r() {
      return t.apply(this, arguments);
    }
    return r;
  }() }, { key: "destroy", value: function() {
    var t = z(k.mark(function n() {
      var o, i;
      return k.wrap(function(l) {
        for (; ; )
          switch (l.prev = l.next) {
            case 0:
              return l.next = 2, this.unmount();
            case 2:
              this.bus.$clear(), this.shadowRoot = null, this.proxy = null, this.proxyDocument = null, this.proxyLocation = null, this.execQueue = null, this.provide = null, this.degradeAttrs = null, this.styleSheetElements = null, this.bus = null, this.replace = null, this.fetch = null, this.execFlag = null, this.mountFlag = null, this.hrefFlag = null, this.document = null, this.head = null, this.body = null, this.elementEventCacheMap = null, this.lifecycles = null, this.plugins = null, this.provide = null, this.inject = null, this.execQueue = null, this.prefix = null, this.el && (de(this.el), this.el = null), this.iframe && (i = this.iframe.contentWindow, i != null && i.__WUJIE_EVENTLISTENER__ && i.__WUJIE_EVENTLISTENER__.forEach(function(c) {
                i.removeEventListener(c.type, c.listener, c.options);
              }), (o = this.iframe.parentNode) === null || o === void 0 || o.removeChild(this.iframe), this.iframe = null), Jo(this.id);
            case 30:
            case "end":
              return l.stop();
          }
      }, n, this);
    }));
    function r() {
      return t.apply(this, arguments);
    }
    return r;
  }() }, { key: "rebuildStyleSheets", value: function() {
    var r = this;
    this.styleSheetElements && this.styleSheetElements.length && this.styleSheetElements.forEach(function(n) {
      en.call(r.degrade ? r.document.head : r.shadowRoot.head, n);
    }), this.patchCssRules();
  } }, { key: "patchCssRules", value: function() {
    if (!this.degrade && !this.shadowRoot.host.hasAttribute(Ct)) {
      var r = ln(Array.from(this.iframe.contentDocument.querySelectorAll("style")).map(function(a) {
        return a.sheet;
      })), n = Ue(r, 2), o = n[0], i = n[1];
      o && (this.shadowRoot.head.appendChild(o), this.styleSheetElements.push(o)), i && this.shadowRoot.host.appendChild(i), (o || i) && this.shadowRoot.host.setAttribute(Ct, "");
    }
  } }]);
}();
function vr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ji(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vr(Object(r), true).forEach(function(n) {
      Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Et = new vn(Date.now().toString());
window.__WUJIE && !window.__POWERED_BY_WUJIE__ && qr();
li();
ei();
Wr || H(Yn);
function Li(e) {
  e.name && Fo(e.name, e);
}
function Ti(e) {
  return bt.apply(this, arguments);
}
function bt() {
  return bt = z(k.mark(function e(t) {
    var r, n, o, i, a, l, c, u, s, h, d, f, v, g, p, m, E, O, S, j, A, L, M, T, x, C, R, G, N, J, w, y, b, _, P, I, D, W, F;
    return k.wrap(function(U) {
      for (; ; )
        switch (U.prev = U.next) {
          case 0:
            if (o = ne(t.name), i = Kr(t.name), a = Qr(t, i), l = a.name, c = a.url, u = a.html, s = a.replace, h = a.fetch, d = a.props, f = a.attrs, v = a.degradeAttrs, g = a.fiber, p = a.alive, m = a.degrade, E = a.sync, O = a.prefix, S = a.el, j = a.loading, A = a.plugins, L = a.lifecycles, !o) {
              U.next = 41;
              break;
            }
            if (o.plugins = Xr(A), o.lifecycles = L, M = o.iframe.contentWindow, !o.preload) {
              U.next = 11;
              break;
            }
            return U.next = 11, o.preload;
          case 11:
            if (!p) {
              U.next = 26;
              break;
            }
            return U.next = 14, o.active({ url: c, sync: E, prefix: O, el: S, props: d, alive: p, fetch: h, replace: s });
          case 14:
            if (o.execFlag) {
              U.next = 22;
              break;
            }
            return (C = o.lifecycles) === null || C === void 0 || (R = C.beforeLoad) === null || R === void 0 || R.call(C, o.iframe.contentWindow), U.next = 18, vt({ url: c, html: u, opts: { fetch: h || window.fetch, plugins: o.plugins, loadError: o.lifecycles.loadError, fiber: g } });
          case 18:
            return G = U.sent, N = G.getExternalScripts, U.next = 22, o.start(N);
          case 22:
            return (T = o.lifecycles) === null || T === void 0 || (x = T.activated) === null || x === void 0 || x.call(T, o.iframe.contentWindow), U.abrupt("return", function() {
              return o.destroy();
            });
          case 26:
            if (!ue(M.__WUJIE_MOUNT)) {
              U.next = 39;
              break;
            }
            return U.next = 29, o.unmount();
          case 29:
            return U.next = 31, o.active({ url: c, sync: E, prefix: O, el: S, props: d, alive: p, fetch: h, replace: s });
          case 31:
            return o.rebuildStyleSheets(), (J = o.lifecycles) === null || J === void 0 || (w = J.beforeMount) === null || w === void 0 || w.call(J, o.iframe.contentWindow), M.__WUJIE_MOUNT(), (y = o.lifecycles) === null || y === void 0 || (b = y.afterMount) === null || b === void 0 || b.call(y, o.iframe.contentWindow), o.mountFlag = true, U.abrupt("return", function() {
              return o.destroy();
            });
          case 39:
            return U.next = 41, o.destroy();
          case 41:
            return ii(S, j), _ = new hn({ name: l, url: c, attrs: f, degradeAttrs: v, fiber: g, degrade: m, plugins: A, lifecycles: L }), (r = _.lifecycles) === null || r === void 0 || (n = r.beforeLoad) === null || n === void 0 || n.call(r, _.iframe.contentWindow), U.next = 46, vt({ url: c, html: u, opts: { fetch: h || window.fetch, plugins: _.plugins, loadError: _.lifecycles.loadError, fiber: g } });
          case 46:
            return P = U.sent, I = P.template, D = P.getExternalScripts, W = P.getExternalStyleSheets, U.next = 52, Vr(_, I, W);
          case 52:
            return F = U.sent, U.next = 55, _.active({ url: c, sync: E, prefix: O, template: F, el: S, props: d, alive: p, fetch: h, replace: s });
          case 55:
            return U.next = 57, _.start(D);
          case 57:
            return U.abrupt("return", function() {
              return _.destroy();
            });
          case 58:
          case "end":
            return U.stop();
        }
    }, e);
  })), bt.apply(this, arguments);
}
function Ci(e) {
  Ot(function() {
    if (!(ne(e.name) || $r(e.name))) {
      var t = Kr(e.name), r = Qr(ji({}, e), t), n = r.name, o = r.url, i = r.html, a = r.props, l = r.alive, c = r.replace, u = r.fetch, s = r.exec, h = r.attrs, d = r.degradeAttrs, f = r.fiber, v = r.degrade, g = r.prefix, p = r.plugins, m = r.lifecycles, E = new hn({ name: n, url: o, attrs: h, degradeAttrs: d, fiber: f, degrade: v, plugins: p, lifecycles: m });
      if (E.preload)
        return E.preload;
      var O = function() {
        var S = z(k.mark(function j() {
          var A, L, M, T, x, C, R;
          return k.wrap(function(N) {
            for (; ; )
              switch (N.prev = N.next) {
                case 0:
                  return (A = E.lifecycles) === null || A === void 0 || (L = A.beforeLoad) === null || L === void 0 || L.call(A, E.iframe.contentWindow), N.next = 3, vt({ url: o, html: i, opts: { fetch: u || window.fetch, plugins: E.plugins, loadError: E.lifecycles.loadError, fiber: f } });
                case 3:
                  return M = N.sent, T = M.template, x = M.getExternalScripts, C = M.getExternalStyleSheets, N.next = 9, Vr(E, T, C);
                case 9:
                  return R = N.sent, N.next = 12, E.active({ url: o, props: a, prefix: g, alive: l, template: R, fetch: u, replace: c });
                case 12:
                  if (!s) {
                    N.next = 17;
                    break;
                  }
                  return N.next = 15, E.start(x);
                case 15:
                  N.next = 19;
                  break;
                case 17:
                  return N.next = 19, x();
                case 19:
                case "end":
                  return N.stop();
              }
          }, j);
        }));
        return function() {
          return S.apply(this, arguments);
        };
      }();
      E.preload = O();
    }
  });
}
function mn(e) {
  var t = ne(e);
  t && t.destroy();
}
function ye(e) {
  "@babel/helpers - typeof";
  return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ye(e);
}
function hr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ai(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hr(Object(r), true).forEach(function(n) {
      yn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wt() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  wt = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(w, y, b) {
    w[y] = b.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", l = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function u(w, y, b) {
    return Object.defineProperty(w, y, { value: b, enumerable: true, configurable: true, writable: true }), w[y];
  }
  try {
    u({}, "");
  } catch {
    u = function(b, _, P) {
      return b[_] = P;
    };
  }
  function s(w, y, b, _) {
    var P = y && y.prototype instanceof m ? y : m, I = Object.create(P.prototype), D = new N(_ || []);
    return o(I, "_invoke", { value: x(w, b, D) }), I;
  }
  function h(w, y, b) {
    try {
      return { type: "normal", arg: w.call(y, b) };
    } catch (_) {
      return { type: "throw", arg: _ };
    }
  }
  t.wrap = s;
  var d = "suspendedStart", f = "suspendedYield", v = "executing", g = "completed", p = {};
  function m() {
  }
  function E() {
  }
  function O() {
  }
  var S = {};
  u(S, a, function() {
    return this;
  });
  var j = Object.getPrototypeOf, A = j && j(j(J([])));
  A && A !== r && n.call(A, a) && (S = A);
  var L = O.prototype = m.prototype = Object.create(S);
  function M(w) {
    ["next", "throw", "return"].forEach(function(y) {
      u(w, y, function(b) {
        return this._invoke(y, b);
      });
    });
  }
  function T(w, y) {
    function b(P, I, D, W) {
      var F = h(w[P], w, I);
      if (F.type !== "throw") {
        var K = F.arg, U = K.value;
        return U && ye(U) == "object" && n.call(U, "__await") ? y.resolve(U.__await).then(function(B) {
          b("next", B, D, W);
        }, function(B) {
          b("throw", B, D, W);
        }) : y.resolve(U).then(function(B) {
          K.value = B, D(K);
        }, function(B) {
          return b("throw", B, D, W);
        });
      }
      W(F.arg);
    }
    var _;
    o(this, "_invoke", { value: function(I, D) {
      function W() {
        return new y(function(F, K) {
          b(I, D, F, K);
        });
      }
      return _ = _ ? _.then(W, W) : W();
    } });
  }
  function x(w, y, b) {
    var _ = d;
    return function(P, I) {
      if (_ === v)
        throw Error("Generator is already running");
      if (_ === g) {
        if (P === "throw")
          throw I;
        return { value: e, done: true };
      }
      for (b.method = P, b.arg = I; ; ) {
        var D = b.delegate;
        if (D) {
          var W = C(D, b);
          if (W) {
            if (W === p)
              continue;
            return W;
          }
        }
        if (b.method === "next")
          b.sent = b._sent = b.arg;
        else if (b.method === "throw") {
          if (_ === d)
            throw _ = g, b.arg;
          b.dispatchException(b.arg);
        } else
          b.method === "return" && b.abrupt("return", b.arg);
        _ = v;
        var F = h(w, y, b);
        if (F.type === "normal") {
          if (_ = b.done ? g : f, F.arg === p)
            continue;
          return { value: F.arg, done: b.done };
        }
        F.type === "throw" && (_ = g, b.method = "throw", b.arg = F.arg);
      }
    };
  }
  function C(w, y) {
    var b = y.method, _ = w.iterator[b];
    if (_ === e)
      return y.delegate = null, b === "throw" && w.iterator.return && (y.method = "return", y.arg = e, C(w, y), y.method === "throw") || b !== "return" && (y.method = "throw", y.arg = new TypeError("The iterator does not provide a '" + b + "' method")), p;
    var P = h(_, w.iterator, y.arg);
    if (P.type === "throw")
      return y.method = "throw", y.arg = P.arg, y.delegate = null, p;
    var I = P.arg;
    return I ? I.done ? (y[w.resultName] = I.value, y.next = w.nextLoc, y.method !== "return" && (y.method = "next", y.arg = e), y.delegate = null, p) : I : (y.method = "throw", y.arg = new TypeError("iterator result is not an object"), y.delegate = null, p);
  }
  function R(w) {
    var y = { tryLoc: w[0] };
    1 in w && (y.catchLoc = w[1]), 2 in w && (y.finallyLoc = w[2], y.afterLoc = w[3]), this.tryEntries.push(y);
  }
  function G(w) {
    var y = w.completion || {};
    y.type = "normal", delete y.arg, w.completion = y;
  }
  function N(w) {
    this.tryEntries = [{ tryLoc: "root" }], w.forEach(R, this), this.reset(true);
  }
  function J(w) {
    if (w || w === "") {
      var y = w[a];
      if (y)
        return y.call(w);
      if (typeof w.next == "function")
        return w;
      if (!isNaN(w.length)) {
        var b = -1, _ = function P() {
          for (; ++b < w.length; )
            if (n.call(w, b))
              return P.value = w[b], P.done = false, P;
          return P.value = e, P.done = true, P;
        };
        return _.next = _;
      }
    }
    throw new TypeError(ye(w) + " is not iterable");
  }
  return E.prototype = O, o(L, "constructor", { value: O, configurable: true }), o(O, "constructor", { value: E, configurable: true }), E.displayName = u(O, c, "GeneratorFunction"), t.isGeneratorFunction = function(w) {
    var y = typeof w == "function" && w.constructor;
    return !!y && (y === E || (y.displayName || y.name) === "GeneratorFunction");
  }, t.mark = function(w) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(w, O) : (w.__proto__ = O, u(w, c, "GeneratorFunction")), w.prototype = Object.create(L), w;
  }, t.awrap = function(w) {
    return { __await: w };
  }, M(T.prototype), u(T.prototype, l, function() {
    return this;
  }), t.AsyncIterator = T, t.async = function(w, y, b, _, P) {
    P === void 0 && (P = Promise);
    var I = new T(s(w, y, b, _), P);
    return t.isGeneratorFunction(y) ? I : I.next().then(function(D) {
      return D.done ? D.value : I.next();
    });
  }, M(L), u(L, c, "Generator"), u(L, a, function() {
    return this;
  }), u(L, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(w) {
    var y = Object(w), b = [];
    for (var _ in y)
      b.push(_);
    return b.reverse(), function P() {
      for (; b.length; ) {
        var I = b.pop();
        if (I in y)
          return P.value = I, P.done = false, P;
      }
      return P.done = true, P;
    };
  }, t.values = J, N.prototype = { constructor: N, reset: function(y) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = false, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(G), !y)
      for (var b in this)
        b.charAt(0) === "t" && n.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = e);
  }, stop: function() {
    this.done = true;
    var y = this.tryEntries[0].completion;
    if (y.type === "throw")
      throw y.arg;
    return this.rval;
  }, dispatchException: function(y) {
    if (this.done)
      throw y;
    var b = this;
    function _(K, U) {
      return D.type = "throw", D.arg = y, b.next = K, U && (b.method = "next", b.arg = e), !!U;
    }
    for (var P = this.tryEntries.length - 1; P >= 0; --P) {
      var I = this.tryEntries[P], D = I.completion;
      if (I.tryLoc === "root")
        return _("end");
      if (I.tryLoc <= this.prev) {
        var W = n.call(I, "catchLoc"), F = n.call(I, "finallyLoc");
        if (W && F) {
          if (this.prev < I.catchLoc)
            return _(I.catchLoc, true);
          if (this.prev < I.finallyLoc)
            return _(I.finallyLoc);
        } else if (W) {
          if (this.prev < I.catchLoc)
            return _(I.catchLoc, true);
        } else {
          if (!F)
            throw Error("try statement without catch or finally");
          if (this.prev < I.finallyLoc)
            return _(I.finallyLoc);
        }
      }
    }
  }, abrupt: function(y, b) {
    for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
      var P = this.tryEntries[_];
      if (P.tryLoc <= this.prev && n.call(P, "finallyLoc") && this.prev < P.finallyLoc) {
        var I = P;
        break;
      }
    }
    I && (y === "break" || y === "continue") && I.tryLoc <= b && b <= I.finallyLoc && (I = null);
    var D = I ? I.completion : {};
    return D.type = y, D.arg = b, I ? (this.method = "next", this.next = I.finallyLoc, p) : this.complete(D);
  }, complete: function(y, b) {
    if (y.type === "throw")
      throw y.arg;
    return y.type === "break" || y.type === "continue" ? this.next = y.arg : y.type === "return" ? (this.rval = this.arg = y.arg, this.method = "return", this.next = "end") : y.type === "normal" && b && (this.next = b), p;
  }, finish: function(y) {
    for (var b = this.tryEntries.length - 1; b >= 0; --b) {
      var _ = this.tryEntries[b];
      if (_.finallyLoc === y)
        return this.complete(_.completion, _.afterLoc), G(_), p;
    }
  }, catch: function(y) {
    for (var b = this.tryEntries.length - 1; b >= 0; --b) {
      var _ = this.tryEntries[b];
      if (_.tryLoc === y) {
        var P = _.completion;
        if (P.type === "throw") {
          var I = P.arg;
          G(_);
        }
        return I;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(y, b, _) {
    return this.delegate = { iterator: J(y), resultName: b, nextLoc: _ }, this.method === "next" && (this.arg = e), p;
  } }, t;
}
function mr(e, t, r, n, o, i, a) {
  try {
    var l = e[i](a), c = l.value;
  } catch (u) {
    return void r(u);
  }
  l.done ? t(c) : Promise.resolve(c).then(n, o);
}
function Ri(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function a(c) {
        mr(i, n, o, a, l, "next", c);
      }
      function l(c) {
        mr(i, n, o, a, l, "throw", c);
      }
      a(void 0);
    });
  };
}
function yn(e, t, r) {
  return (t = Ui(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : e[t] = r, e;
}
function Ui(e) {
  var t = Mi(e, "string");
  return ye(t) == "symbol" ? t : t + "";
}
function Mi(e, t) {
  if (ye(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ye(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Di = { name: "WujieVue", props: { width: { type: String, default: "" }, height: { type: String, default: "" }, name: { type: String, default: "" }, loading: { type: HTMLElement, default: void 0 }, url: { type: String, default: "" }, sync: { type: Boolean, default: void 0 }, prefix: { type: Object, default: void 0 }, alive: { type: Boolean, default: void 0 }, props: { type: Object, default: void 0 }, attrs: { type: Object, default: void 0 }, replace: { type: Function, default: void 0 }, fetch: { type: Function, default: void 0 }, fiber: { type: Boolean, default: void 0 }, degrade: { type: Boolean, default: void 0 }, plugins: { type: Array, default: null }, beforeLoad: { type: Function, default: null }, beforeMount: { type: Function, default: null }, afterMount: { type: Function, default: null }, beforeUnmount: { type: Function, default: null }, afterUnmount: { type: Function, default: null }, activated: { type: Function, default: null }, deactivated: { type: Function, default: null }, loadError: { type: Function, default: null }, style: { type: Object, default: void 0 } }, data: function() {
  return { startAppQueue: Promise.resolve() };
}, mounted: function() {
  var t = this;
  this.name && (window.__WUJIE_QUEUE ? window.__WUJIE_QUEUE[this.name] ? this.startAppQueue = window.__WUJIE_QUEUE[this.name] : window.__WUJIE_QUEUE[this.name] = this.startAppQueue : window.__WUJIE_QUEUE = yn({}, this.name, this.startAppQueue)), Et.$onAll(this.handleEmit), this.execStartApp(), this.$watch(function() {
    return t.name + t.url;
  }, function() {
    return t.execStartApp();
  });
}, methods: { handleEmit: function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  this.$emit.apply(this, [t].concat(n));
}, startApp: function() {
  var t = this;
  return Ri(wt().mark(function r() {
    return wt().wrap(function(o) {
      for (; ; )
        switch (o.prev = o.next) {
          case 0:
            return o.prev = 0, o.next = 3, Ti({ name: t.name, url: t.url, el: t.$refs.wujie, loading: t.loading, alive: t.alive, fetch: t.fetch, props: t.props, attrs: t.attrs, replace: t.replace, sync: t.sync, prefix: t.prefix, fiber: t.fiber, degrade: t.degrade, plugins: t.plugins, beforeLoad: t.beforeLoad, beforeMount: t.beforeMount, afterMount: t.afterMount, beforeUnmount: t.beforeUnmount, afterUnmount: t.afterUnmount, activated: t.activated, deactivated: t.deactivated, loadError: t.loadError });
          case 3:
            o.next = 8;
            break;
          case 5:
            o.prev = 5, o.t0 = o.catch(0), console.log(o.t0);
          case 8:
          case "end":
            return o.stop();
        }
    }, r, null, [[0, 5]]);
  }))();
}, execStartApp: function() {
  this.startAppQueue = this.startAppQueue.then(this.startApp), window.__WUJIE_QUEUE[this.name] = this.startAppQueue;
}, destroy: function() {
  mn(this.name);
} }, beforeDestroy: function() {
  Et.$offAll(this.handleEmit);
}, render: function() {
  return _n("div", { style: Ai({ width: this.width, height: this.height }, this.style), ref: "wujie" });
} }, ge = yr(Di);
ge.setupApp = Li;
ge.preloadApp = Ci;
ge.bus = Et;
ge.destroyApp = mn;
ge.install = function(e) {
  e.component("WujieVue", ge);
};
const ki = yr({ __name: "index", setup(e) {
  const t = Lt("km"), r = Lt("http://agent.hub.53ai.com/space"), n = Sn(), o = On();
  return (i, a) => Ee(n).info.user_id && Ee(o).info.eid ? (In(), Pn(Ee(ge), { key: 0, width: "100%", height: "100%", props: { data: { userInfo: Ee(n).info, enterpriseInfo: Ee(o).info }, methods: { logoff: Ee(n).logoff } }, name: t.value, url: r.value, sync: true }, null, 8, ["props", "name", "url"])) : xn("", true);
} });
export {
  ki as default
};
