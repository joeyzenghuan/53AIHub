import { i as G } from "./vue-demi-71ba0ef2.js";
import { ak as H, e as M, aj as q, au as $, k as T, f as tt, V as et, q as E, av as B, a5 as st, g as nt, b as ot, n as ct, a7 as rt, j as ut } from "./@vue-3b855f7b.js";
/*!
* pinia v2.3.1
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
let D;
const k = (t) => D = t, J = Symbol();
function L(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var x;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(x || (x = {}));
function vt() {
  const t = H(true), c = t.run(() => M({}));
  let s = [], e = [];
  const r = q({ install(u) {
    k(r), r._a = u, u.provide(J, r), u.config.globalProperties.$pinia = r, e.forEach((f) => s.push(f)), e = [];
  }, use(u) {
    return !this._a && !G ? e.push(u) : s.push(u), this;
  }, _p: s, _a: null, _e: t, _s: /* @__PURE__ */ new Map(), state: c });
  return r;
}
const K = () => {
};
function F(t, c, s, e = K) {
  t.push(c);
  const r = () => {
    const u = t.indexOf(c);
    u > -1 && (t.splice(u, 1), e());
  };
  return !s && nt() && ot(r), r;
}
function p(t, ...c) {
  t.slice().forEach((s) => {
    s(...c);
  });
}
const at = (t) => t(), A = Symbol(), I = Symbol();
function O(t, c) {
  t instanceof Map && c instanceof Map ? c.forEach((s, e) => t.set(e, s)) : t instanceof Set && c instanceof Set && c.forEach(t.add, t);
  for (const s in c) {
    if (!c.hasOwnProperty(s))
      continue;
    const e = c[s], r = t[s];
    L(r) && L(e) && t.hasOwnProperty(s) && !E(e) && !B(e) ? t[s] = O(r, e) : t[s] = e;
  }
  return t;
}
const ft = Symbol();
function it(t) {
  return !L(t) || !t.hasOwnProperty(ft);
}
const { assign: y } = Object;
function lt(t) {
  return !!(E(t) && t.effect);
}
function ht(t, c, s, e) {
  const { state: r, actions: u, getters: f } = c, a = s.state.value[t];
  let P;
  function b() {
    a || (s.state.value[t] = r ? r() : {});
    const S = rt(s.state.value[t]);
    return y(S, u, Object.keys(f || {}).reduce((v, d) => (v[d] = q(ut(() => {
      k(s);
      const m = s._s.get(t);
      return f[d].call(m, m);
    })), v), {}));
  }
  return P = z(t, b, c, s, e, true), P;
}
function z(t, c, s = {}, e, r, u) {
  let f;
  const a = y({ actions: {} }, s), P = { deep: true };
  let b, S, v = [], d = [], m;
  const _ = e.state.value[t];
  !u && !_ && (e.state.value[t] = {}), M({});
  let W;
  function N(o) {
    let n;
    b = S = false, typeof o == "function" ? (o(e.state.value[t]), n = { type: x.patchFunction, storeId: t, events: m }) : (O(e.state.value[t], o), n = { type: x.patchObject, payload: o, storeId: t, events: m });
    const i = W = Symbol();
    ct().then(() => {
      W === i && (b = true);
    }), S = true, p(v, n, e.state.value[t]);
  }
  const Q = u ? function() {
    const { state: n } = s, i = n ? n() : {};
    this.$patch((j) => {
      y(j, i);
    });
  } : K;
  function U() {
    f.stop(), v = [], d = [], e._s.delete(t);
  }
  const V = (o, n = "") => {
    if (A in o)
      return o[I] = n, o;
    const i = function() {
      k(e);
      const j = Array.from(arguments), C = [], R = [];
      function Y(l) {
        C.push(l);
      }
      function Z(l) {
        R.push(l);
      }
      p(d, { args: j, name: i[I], store: h, after: Y, onError: Z });
      let w;
      try {
        w = o.apply(this && this.$id === t ? this : h, j);
      } catch (l) {
        throw p(R, l), l;
      }
      return w instanceof Promise ? w.then((l) => (p(C, l), l)).catch((l) => (p(R, l), Promise.reject(l))) : (p(C, w), w);
    };
    return i[A] = true, i[I] = n, i;
  }, X = { _p: e, $id: t, $onAction: F.bind(null, d), $patch: N, $reset: Q, $subscribe(o, n = {}) {
    const i = F(v, o, n.detached, () => j()), j = f.run(() => tt(() => e.state.value[t], (C) => {
      (n.flush === "sync" ? S : b) && o({ storeId: t, type: x.direct, events: m }, C);
    }, y({}, P, n)));
    return i;
  }, $dispose: U }, h = et(X);
  e._s.set(t, h);
  const g = (e._a && e._a.runWithContext || at)(() => e._e.run(() => (f = H()).run(() => c({ action: V }))));
  for (const o in g) {
    const n = g[o];
    if (E(n) && !lt(n) || B(n))
      u || (_ && it(n) && (E(n) ? n.value = _[o] : O(n, _[o])), e.state.value[t][o] = n);
    else if (typeof n == "function") {
      const i = V(n, o);
      g[o] = i, a.actions[o] = n;
    }
  }
  return y(h, g), y(st(h), g), Object.defineProperty(h, "$state", { get: () => e.state.value[t], set: (o) => {
    N((n) => {
      y(n, o);
    });
  } }), e._p.forEach((o) => {
    y(h, f.run(() => o({ store: h, app: e._a, pinia: e, options: a })));
  }), _ && u && s.hydrate && s.hydrate(h.$state, _), b = true, S = true, h;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function dt(t, c, s) {
  let e, r;
  const u = typeof c == "function";
  typeof t == "string" ? (e = t, r = u ? s : c) : (r = t, e = t.id);
  function f(a, P) {
    const b = $();
    return a = a || (b ? T(J, null) : null), a && k(a), a = D, a._s.has(e) || (u ? z(e, c, r, a) : ht(e, r, a)), a._s.get(e);
  }
  return f.$id = e, f;
}
export {
  vt as c,
  dt as d
};
