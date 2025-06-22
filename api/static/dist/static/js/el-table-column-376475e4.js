import { dY as un, dZ as dn, dw as cn, ae as zt, d_ as gt, d$ as fn, cI as il, cQ as ul, e0 as pn, e1 as hn, dq as gn, e2 as vn, e3 as mn, e4 as dl, cL as Ct, cN as bn, cP as yn, e5 as Cn, e6 as wn, e7 as Sn, e8 as Dt, e9 as xn, ea as En, cO as Nn, eb as Pn, ec as _n, af as Ke, aP as He, bm as dt, y as Z, aV as Te, Y as $, b as O, c as U, t as ie, j as ne, w as le, ao as cl, u as R, G as Ve, a$ as ze, aI as Ne, b1 as fl, c0 as pl, bf as hl, aU as re, r as N, $ as oe, ce as de, f as te, F as We, K as Ge, q as j, d as q, a5 as Rn, bs as at, i as Ae, e as be, dO as Fn, d8 as Vt, dP as Ln, by as kn, br as he, H as Tn, c6 as Ot, bD as gl, h as ce, ed as zn, aT as On, ax as vl, bx as Mn, ad as H, b0 as ml, cS as Je, bF as ke, b5 as Ee, X as xe, bB as Wn, bq as Oe, az as bl, ee as jt, ef as yl, W as $n, dt as qt, bc as ct, b7 as Hn, n as Fe, bd as An, M as Bn, bI as In, cT as Kn, bk as Dn, cB as ot, aJ as Se, ay as Mt, L as Ye, m as Be, s as Le, eg as Cl, o as je, bG as Vn, a as vt, bb as ft, ch as jn, dM as Ue, b9 as Qe, Z as qn, c5 as Ut, bT as Yt, bg as Un, bh as wl, a7 as qe, p as Xt, bz as Yn, eh as Xn, cl as Gn, aS as Jn, aH as Qn, bZ as Zn, a3 as ea, bW as ta, a9 as la, R as Gt, a4 as na, a6 as aa, I as oa } from "./index-8579fe4a.js";
import { v as sa } from "./el-loading-8747b309.js";
import { E as $e } from "./el-checkbox-a21716fc.js";
import "./el-tag-0b6baecb.js";
import { d as ra, E as ia, a as ua } from "./el-select-8a770a23.js";
import { E as Sl } from "./el-scrollbar-4065fe54.js";
import { d as Jt, S as Qt } from "./sortable.esm-7ba019b6.js";
import { i as da } from "./isEqual-8c73ec38.js";
import { d as pt } from "./debounce-484109dd.js";
function ca(e, t) {
  return un(dn(e, t, cn), e + "");
}
function fa(e, t, l) {
  if (!zt(l))
    return false;
  var n = typeof t;
  return (n == "number" ? gt(l) && fn(t, l.length) : n == "string" && t in l) ? il(l[t], e) : false;
}
function pa(e) {
  return ca(function(t, l) {
    var n = -1, o = l.length, s = o > 1 ? l[o - 1] : void 0, i = o > 2 ? l[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (o--, s) : void 0, i && fa(l[0], l[1], i) && (s = o < 3 ? void 0 : s, o = 1), t = Object(t); ++n < o; ) {
      var r = l[n];
      r && e(t, r, n, s);
    }
    return t;
  });
}
var ha = "[object Object]", ga = Function.prototype, va = Object.prototype, xl = ga.toString, ma = va.hasOwnProperty, ba = xl.call(Object);
function ya(e) {
  if (!ul(e) || pn(e) != ha)
    return false;
  var t = hn(e);
  if (t === null)
    return true;
  var l = ma.call(t, "constructor") && t.constructor;
  return typeof l == "function" && l instanceof l && xl.call(l) == ba;
}
function Ca(e) {
  return function(t, l, n) {
    for (var o = -1, s = Object(t), i = n(t), r = i.length; r--; ) {
      var a = i[e ? r : ++o];
      if (l(s[a], a, s) === false)
        break;
    }
    return t;
  };
}
var wa = Ca();
const El = wa;
function Sa(e, t) {
  return e && El(e, t, gn);
}
function xa(e, t) {
  return function(l, n) {
    if (l == null)
      return l;
    if (!gt(l))
      return e(l, n);
    for (var o = l.length, s = t ? o : -1, i = Object(l); (t ? s-- : ++s < o) && n(i[s], s, i) !== false; )
      ;
    return l;
  };
}
var Ea = xa(Sa);
const Na = Ea;
function wt(e, t, l) {
  (l !== void 0 && !il(e[t], l) || l === void 0 && !(t in e)) && vn(e, t, l);
}
function Pa(e) {
  return ul(e) && gt(e);
}
function St(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function _a(e) {
  return mn(e, dl(e));
}
function Ra(e, t, l, n, o, s, i) {
  var r = St(e, l), a = St(t, l), d = i.get(a);
  if (d) {
    wt(e, l, d);
    return;
  }
  var c = s ? s(r, a, l + "", e, t, i) : void 0, f = c === void 0;
  if (f) {
    var v = Ct(a), b = !v && bn(a), m = !v && !b && yn(a);
    c = a, v || b || m ? Ct(r) ? c = r : Pa(r) ? c = Cn(r) : b ? (f = false, c = wn(a, true)) : m ? (f = false, c = Sn(a, true)) : c = [] : ya(a) || Dt(a) ? (c = r, Dt(r) ? c = _a(r) : (!zt(r) || xn(r)) && (c = En(a))) : f = false;
  }
  f && (i.set(a, c), o(c, a, n, s, i), i.delete(a)), wt(e, l, c);
}
function Nl(e, t, l, n, o) {
  e !== t && El(t, function(s, i) {
    if (o || (o = new Nn()), zt(s))
      Ra(e, t, i, l, Nl, n, o);
    else {
      var r = n ? n(St(e, i), s, i + "", e, t, o) : void 0;
      r === void 0 && (r = s), wt(e, i, r);
    }
  }, dl);
}
function Fa(e, t) {
  var l = -1, n = gt(e) ? Array(e.length) : [];
  return Na(e, function(o, s, i) {
    n[++l] = t(o, s, i);
  }), n;
}
function La(e, t) {
  var l = Ct(e) ? Pn : Fa;
  return l(e, ra(t));
}
function ka(e, t) {
  return _n(La(e, t), 1);
}
function Ze(e) {
  return e === null;
}
var Ta = pa(function(e, t, l) {
  Nl(e, t, l);
});
const Pl = Ta, za = (e) => Ke ? window.requestAnimationFrame(e) : setTimeout(e, 16), _l = Symbol("elPaginationKey"), Oa = He({ disabled: Boolean, currentPage: { type: Number, default: 1 }, prevText: { type: String }, prevIcon: { type: dt } }), Ma = { click: (e) => e instanceof MouseEvent }, Wa = Z({ name: "ElPaginationPrev" }), $a = Z({ ...Wa, props: Oa, emits: Ma, setup(e) {
  const t = e, { t: l } = Te(), n = $(() => t.disabled || t.currentPage <= 1);
  return (o, s) => (O(), U("button", { type: "button", class: "btn-prev", disabled: R(n), "aria-label": o.prevText || R(l)("el.pagination.prev"), "aria-disabled": R(n), onClick: (i) => o.$emit("click", i) }, [o.prevText ? (O(), U("span", { key: 0 }, ie(o.prevText), 1)) : (O(), ne(R(Ve), { key: 1 }, { default: le(() => [(O(), ne(cl(o.prevIcon)))]), _: 1 }))], 8, ["disabled", "aria-label", "aria-disabled", "onClick"]));
} });
var Ha = ze($a, [["__file", "prev.vue"]]);
const Aa = He({ disabled: Boolean, currentPage: { type: Number, default: 1 }, pageCount: { type: Number, default: 50 }, nextText: { type: String }, nextIcon: { type: dt } }), Ba = Z({ name: "ElPaginationNext" }), Ia = Z({ ...Ba, props: Aa, emits: ["click"], setup(e) {
  const t = e, { t: l } = Te(), n = $(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
  return (o, s) => (O(), U("button", { type: "button", class: "btn-next", disabled: R(n), "aria-label": o.nextText || R(l)("el.pagination.next"), "aria-disabled": R(n), onClick: (i) => o.$emit("click", i) }, [o.nextText ? (O(), U("span", { key: 0 }, ie(o.nextText), 1)) : (O(), ne(R(Ve), { key: 1 }, { default: le(() => [(O(), ne(cl(o.nextIcon)))]), _: 1 }))], 8, ["disabled", "aria-label", "aria-disabled", "onClick"]));
} });
var Ka = ze(Ia, [["__file", "next.vue"]]);
const Wt = () => Ne(_l, {}), Da = He({ pageSize: { type: Number, required: true }, pageSizes: { type: fl(Array), default: () => pl([10, 20, 30, 40, 50, 100]) }, popperClass: { type: String }, disabled: Boolean, teleported: Boolean, size: { type: String, values: hl }, appendSizeTo: String }), Va = Z({ name: "ElPaginationSizes" }), ja = Z({ ...Va, props: Da, emits: ["page-size-change"], setup(e, { emit: t }) {
  const l = e, { t: n } = Te(), o = re("pagination"), s = Wt(), i = N(l.pageSize);
  oe(() => l.pageSizes, (d, c) => {
    if (!da(d, c) && de(d)) {
      const f = d.includes(l.pageSize) ? l.pageSize : l.pageSizes[0];
      t("page-size-change", f);
    }
  }), oe(() => l.pageSize, (d) => {
    i.value = d;
  });
  const r = $(() => l.pageSizes);
  function a(d) {
    var c;
    d !== i.value && (i.value = d, (c = s.handleSizeChange) == null || c.call(s, Number(d)));
  }
  return (d, c) => (O(), U("span", { class: j(R(o).e("sizes")) }, [te(R(ua), { "model-value": i.value, disabled: d.disabled, "popper-class": d.popperClass, size: d.size, teleported: d.teleported, "validate-event": false, "append-to": d.appendSizeTo, onChange: a }, { default: le(() => [(O(true), U(We, null, Ge(R(r), (f) => (O(), ne(R(ia), { key: f, value: f, label: f + R(n)("el.pagination.pagesize") }, null, 8, ["value", "label"]))), 128))]), _: 1 }, 8, ["model-value", "disabled", "popper-class", "size", "teleported", "append-to"])], 2));
} });
var qa = ze(ja, [["__file", "sizes.vue"]]);
const Ua = He({ size: { type: String, values: hl } }), Ya = Z({ name: "ElPaginationJumper" }), Xa = Z({ ...Ya, props: Ua, setup(e) {
  const { t } = Te(), l = re("pagination"), { pageCount: n, disabled: o, currentPage: s, changeEvent: i } = Wt(), r = N(), a = $(() => {
    var f;
    return (f = r.value) != null ? f : s == null ? void 0 : s.value;
  });
  function d(f) {
    r.value = f ? +f : "";
  }
  function c(f) {
    f = Math.trunc(+f), i == null ? void 0 : i(f), r.value = void 0;
  }
  return (f, v) => (O(), U("span", { class: j(R(l).e("jump")), disabled: R(o) }, [q("span", { class: j([R(l).e("goto")]) }, ie(R(t)("el.pagination.goto")), 3), te(R(Rn), { size: f.size, class: j([R(l).e("editor"), R(l).is("in-pagination")]), min: 1, max: R(n), disabled: R(o), "model-value": R(a), "validate-event": false, "aria-label": R(t)("el.pagination.page"), type: "number", "onUpdate:modelValue": d, onChange: c }, null, 8, ["size", "class", "max", "disabled", "model-value", "aria-label"]), q("span", { class: j([R(l).e("classifier")]) }, ie(R(t)("el.pagination.pageClassifier")), 3)], 10, ["disabled"]));
} });
var Ga = ze(Xa, [["__file", "jumper.vue"]]);
const Ja = He({ total: { type: Number, default: 1e3 } }), Qa = Z({ name: "ElPaginationTotal" }), Za = Z({ ...Qa, props: Ja, setup(e) {
  const { t } = Te(), l = re("pagination"), { disabled: n } = Wt();
  return (o, s) => (O(), U("span", { class: j(R(l).e("total")), disabled: R(n) }, ie(R(t)("el.pagination.total", { total: o.total })), 11, ["disabled"]));
} });
var eo = ze(Za, [["__file", "total.vue"]]);
const to = He({ currentPage: { type: Number, default: 1 }, pageCount: { type: Number, required: true }, pagerCount: { type: Number, default: 7 }, disabled: Boolean }), lo = Z({ name: "ElPaginationPager" }), no = Z({ ...lo, props: to, emits: [at], setup(e, { emit: t }) {
  const l = e, n = re("pager"), o = re("icon"), { t: s } = Te(), i = N(false), r = N(false), a = N(false), d = N(false), c = N(false), f = N(false), v = $(() => {
    const u = l.pagerCount, p = (u - 1) / 2, h = Number(l.currentPage), g = Number(l.pageCount);
    let S = false, C = false;
    g > u && (h > u - p && (S = true), h < g - p && (C = true));
    const P = [];
    if (S && !C) {
      const z = g - (u - 2);
      for (let k = z; k < g; k++)
        P.push(k);
    } else if (!S && C)
      for (let z = 2; z < u; z++)
        P.push(z);
    else if (S && C) {
      const z = Math.floor(u / 2) - 1;
      for (let k = h - z; k <= h + z; k++)
        P.push(k);
    } else
      for (let z = 2; z < g; z++)
        P.push(z);
    return P;
  }), b = $(() => ["more", "btn-quickprev", o.b(), n.is("disabled", l.disabled)]), m = $(() => ["more", "btn-quicknext", o.b(), n.is("disabled", l.disabled)]), y = $(() => l.disabled ? -1 : 0);
  Ae(() => {
    const u = (l.pagerCount - 1) / 2;
    i.value = false, r.value = false, l.pageCount > l.pagerCount && (l.currentPage > l.pagerCount - u && (i.value = true), l.currentPage < l.pageCount - u && (r.value = true));
  });
  function w(u = false) {
    l.disabled || (u ? a.value = true : d.value = true);
  }
  function _(u = false) {
    u ? c.value = true : f.value = true;
  }
  function T(u) {
    const p = u.target;
    if (p.tagName.toLowerCase() === "li" && Array.from(p.classList).includes("number")) {
      const h = Number(p.textContent);
      h !== l.currentPage && t(at, h);
    } else
      p.tagName.toLowerCase() === "li" && Array.from(p.classList).includes("more") && E(u);
  }
  function E(u) {
    const p = u.target;
    if (p.tagName.toLowerCase() === "ul" || l.disabled)
      return;
    let h = Number(p.textContent);
    const g = l.pageCount, S = l.currentPage, C = l.pagerCount - 2;
    p.className.includes("more") && (p.className.includes("quickprev") ? h = S - C : p.className.includes("quicknext") && (h = S + C)), Number.isNaN(+h) || (h < 1 && (h = 1), h > g && (h = g)), h !== S && t(at, h);
  }
  return (u, p) => (O(), U("ul", { class: j(R(n).b()), onClick: E, onKeyup: kn(T, ["enter"]) }, [u.pageCount > 0 ? (O(), U("li", { key: 0, class: j([[R(n).is("active", u.currentPage === 1), R(n).is("disabled", u.disabled)], "number"]), "aria-current": u.currentPage === 1, "aria-label": R(s)("el.pagination.currentPage", { pager: 1 }), tabindex: R(y) }, " 1 ", 10, ["aria-current", "aria-label", "tabindex"])) : be("v-if", true), i.value ? (O(), U("li", { key: 1, class: j(R(b)), tabindex: R(y), "aria-label": R(s)("el.pagination.prevPages", { pager: u.pagerCount - 2 }), onMouseenter: (h) => w(true), onMouseleave: (h) => a.value = false, onFocus: (h) => _(true), onBlur: (h) => c.value = false }, [(a.value || c.value) && !u.disabled ? (O(), ne(R(Fn), { key: 0 })) : (O(), ne(R(Vt), { key: 1 }))], 42, ["tabindex", "aria-label", "onMouseenter", "onMouseleave", "onFocus", "onBlur"])) : be("v-if", true), (O(true), U(We, null, Ge(R(v), (h) => (O(), U("li", { key: h, class: j([[R(n).is("active", u.currentPage === h), R(n).is("disabled", u.disabled)], "number"]), "aria-current": u.currentPage === h, "aria-label": R(s)("el.pagination.currentPage", { pager: h }), tabindex: R(y) }, ie(h), 11, ["aria-current", "aria-label", "tabindex"]))), 128)), r.value ? (O(), U("li", { key: 2, class: j(R(m)), tabindex: R(y), "aria-label": R(s)("el.pagination.nextPages", { pager: u.pagerCount - 2 }), onMouseenter: (h) => w(), onMouseleave: (h) => d.value = false, onFocus: (h) => _(), onBlur: (h) => f.value = false }, [(d.value || f.value) && !u.disabled ? (O(), ne(R(Ln), { key: 0 })) : (O(), ne(R(Vt), { key: 1 }))], 42, ["tabindex", "aria-label", "onMouseenter", "onMouseleave", "onFocus", "onBlur"])) : be("v-if", true), u.pageCount > 1 ? (O(), U("li", { key: 3, class: j([[R(n).is("active", u.currentPage === u.pageCount), R(n).is("disabled", u.disabled)], "number"]), "aria-current": u.currentPage === u.pageCount, "aria-label": R(s)("el.pagination.currentPage", { pager: u.pageCount }), tabindex: R(y) }, ie(u.pageCount), 11, ["aria-current", "aria-label", "tabindex"])) : be("v-if", true)], 42, ["onKeyup"]));
} });
var ao = ze(no, [["__file", "pager.vue"]]);
const pe = (e) => typeof e != "number", oo = He({ pageSize: Number, defaultPageSize: Number, total: Number, pageCount: Number, pagerCount: { type: Number, validator: (e) => he(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1, default: 7 }, currentPage: Number, defaultCurrentPage: Number, layout: { type: String, default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ") }, pageSizes: { type: fl(Array), default: () => pl([10, 20, 30, 40, 50, 100]) }, popperClass: { type: String, default: "" }, prevText: { type: String, default: "" }, prevIcon: { type: dt, default: () => Tn }, nextText: { type: String, default: "" }, nextIcon: { type: dt, default: () => Ot }, teleported: { type: Boolean, default: true }, small: Boolean, size: gl, background: Boolean, disabled: Boolean, hideOnSinglePage: Boolean, appendSizeTo: String }), so = { "update:current-page": (e) => he(e), "update:page-size": (e) => he(e), "size-change": (e) => he(e), change: (e, t) => he(e) && he(t), "current-change": (e) => he(e), "prev-click": (e) => he(e), "next-click": (e) => he(e) }, Zt = "ElPagination";
var ro = Z({ name: Zt, props: oo, emits: so, setup(e, { emit: t, slots: l }) {
  const { t: n } = Te(), o = re("pagination"), s = ce().vnode.props || {}, i = zn(), r = $(() => {
    var p;
    return e.small ? "small" : (p = e.size) != null ? p : i.value;
  });
  On({ from: "small", replacement: "size", version: "3.0.0", scope: "el-pagination", ref: "https://element-plus.org/zh-CN/component/pagination.html" }, $(() => !!e.small));
  const a = "onUpdate:currentPage" in s || "onUpdate:current-page" in s || "onCurrentChange" in s, d = "onUpdate:pageSize" in s || "onUpdate:page-size" in s || "onSizeChange" in s, c = $(() => {
    if (pe(e.total) && pe(e.pageCount) || !pe(e.currentPage) && !a)
      return false;
    if (e.layout.includes("sizes")) {
      if (pe(e.pageCount)) {
        if (!pe(e.total) && !pe(e.pageSize) && !d)
          return false;
      } else if (!d)
        return false;
    }
    return true;
  }), f = N(pe(e.defaultPageSize) ? 10 : e.defaultPageSize), v = N(pe(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), b = $({ get() {
    return pe(e.pageSize) ? f.value : e.pageSize;
  }, set(p) {
    pe(e.pageSize) && (f.value = p), d && (t("update:page-size", p), t("size-change", p));
  } }), m = $(() => {
    let p = 0;
    return pe(e.pageCount) ? pe(e.total) || (p = Math.max(1, Math.ceil(e.total / b.value))) : p = e.pageCount, p;
  }), y = $({ get() {
    return pe(e.currentPage) ? v.value : e.currentPage;
  }, set(p) {
    let h = p;
    p < 1 ? h = 1 : p > m.value && (h = m.value), pe(e.currentPage) && (v.value = h), a && (t("update:current-page", h), t("current-change", h));
  } });
  oe(m, (p) => {
    y.value > p && (y.value = p);
  }), oe([y, b], (p) => {
    t(at, ...p);
  }, { flush: "post" });
  function w(p) {
    y.value = p;
  }
  function _(p) {
    b.value = p;
    const h = m.value;
    y.value > h && (y.value = h);
  }
  function T() {
    e.disabled || (y.value -= 1, t("prev-click", y.value));
  }
  function E() {
    e.disabled || (y.value += 1, t("next-click", y.value));
  }
  function u(p, h) {
    p && (p.props || (p.props = {}), p.props.class = [p.props.class, h].join(" "));
  }
  return vl(_l, { pageCount: m, disabled: $(() => e.disabled), currentPage: y, changeEvent: w, handleSizeChange: _ }), () => {
    var p, h;
    if (!c.value)
      return Mn(Zt, n("el.pagination.deprecationWarning")), null;
    if (!e.layout || e.hideOnSinglePage && m.value <= 1)
      return null;
    const g = [], S = [], C = H("div", { class: o.e("rightwrapper") }, S), P = { prev: H(Ha, { disabled: e.disabled, currentPage: y.value, prevText: e.prevText, prevIcon: e.prevIcon, onClick: T }), jumper: H(Ga, { size: r.value }), pager: H(ao, { currentPage: y.value, pageCount: m.value, pagerCount: e.pagerCount, onChange: w, disabled: e.disabled }), next: H(Ka, { disabled: e.disabled, currentPage: y.value, pageCount: m.value, nextText: e.nextText, nextIcon: e.nextIcon, onClick: E }), sizes: H(qa, { pageSize: b.value, pageSizes: e.pageSizes, popperClass: e.popperClass, disabled: e.disabled, teleported: e.teleported, size: r.value, appendSizeTo: e.appendSizeTo }), slot: (h = (p = l == null ? void 0 : l.default) == null ? void 0 : p.call(l)) != null ? h : null, total: H(eo, { total: pe(e.total) ? 0 : e.total }) }, z = e.layout.split(",").map((A) => A.trim());
    let k = false;
    return z.forEach((A) => {
      if (A === "->") {
        k = true;
        return;
      }
      k ? S.push(P[A]) : g.push(P[A]);
    }), u(g[0], o.is("first")), u(g[g.length - 1], o.is("last")), k && S.length > 0 && (u(S[0], o.is("first")), u(S[S.length - 1], o.is("last")), g.push(C)), H("div", { class: [o.b(), o.is("background", e.background), o.m(r.value)] }, g);
  };
} });
const io = ml(ro), mt = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, uo = function(e, t, l, n, o) {
  if (!t && !n && (!o || de(o) && !o.length))
    return e;
  Ee(l) ? l = l === "descending" ? -1 : 1 : l = l && l < 0 ? -1 : 1;
  const s = n ? null : function(r, a) {
    return o ? (de(o) || (o = [o]), o.map((d) => Ee(d) ? qt(r, d) : d(r, a, e))) : (t !== "$key" && ct(r) && "$value" in r && (r = r.$value), [ct(r) ? qt(r, t) : r]);
  }, i = function(r, a) {
    if (n)
      return n(r.value, a.value);
    for (let d = 0, c = r.key.length; d < c; d++) {
      if (r.key[d] < a.key[d])
        return -1;
      if (r.key[d] > a.key[d])
        return 1;
    }
    return 0;
  };
  return e.map((r, a) => ({ value: r, index: a, key: s ? s(r, a) : null })).sort((r, a) => {
    let d = i(r, a);
    return d || (d = r.index - a.index), d * +l;
  }).map((r) => r.value);
}, Rl = function(e, t) {
  let l = null;
  return e.columns.forEach((n) => {
    n.id === t && (l = n);
  }), l;
}, co = function(e, t) {
  let l = null;
  for (let n = 0; n < e.columns.length; n++) {
    const o = e.columns[n];
    if (o.columnKey === t) {
      l = o;
      break;
    }
  }
  return l || Wn("ElTable", `No column matching with column-key: ${t}`), l;
}, el = function(e, t, l) {
  const n = (t.className || "").match(new RegExp(`${l}-table_[^\\s]+`, "gm"));
  return n ? Rl(e, n[0]) : null;
}, ue = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (Ee(t)) {
    if (!t.includes("."))
      return `${e[t]}`;
    const l = t.split(".");
    let n = e;
    for (const o of l)
      n = n[o];
    return `${n}`;
  } else if (xe(t))
    return t.call(null, e);
}, Ie = function(e, t, l = false, n = "children") {
  const o = e || [], s = {};
  return o.forEach((i, r) => {
    if (s[ue(i, t)] = { row: i, index: r }, l) {
      const a = i[n];
      de(a) && Object.assign(s, Ie(a, t, true, n));
    }
  }), s;
};
function fo(e, t) {
  const l = {};
  let n;
  for (n in e)
    l[n] = e[n];
  for (n in t)
    if (Je(t, n)) {
      const o = t[n];
      ke(o) || (l[n] = o);
    }
  return l;
}
function $t(e) {
  return e === "" || ke(e) || (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function Fl(e) {
  return e === "" || ke(e) || (e = $t(e), Number.isNaN(e) && (e = 80)), e;
}
function po(e) {
  return he(e) ? e : Ee(e) ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function ho(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, l) => (...n) => t(l(...n)));
}
function ht(e, t, l, n, o, s) {
  let i = s ?? 0, r = false;
  const a = e.indexOf(t), d = a !== -1, c = o == null ? void 0 : o.call(null, t, i), f = (b) => {
    b === "add" ? e.push(t) : e.splice(a, 1), r = true;
  }, v = (b) => {
    let m = 0;
    const y = (n == null ? void 0 : n.children) && b[n.children];
    return y && de(y) && (m += y.length, y.forEach((w) => {
      m += v(w);
    })), m;
  };
  return (!o || c) && (Oe(l) ? l && !d ? f("add") : !l && d && f("remove") : f(d ? "remove" : "add")), !(n == null ? void 0 : n.checkStrictly) && (n == null ? void 0 : n.children) && de(t[n.children]) && t[n.children].forEach((b) => {
    const m = ht(e, b, l ?? !d, n, o, i + 1);
    i += v(b) + 1, m && (r = m);
  }), r;
}
function go(e, t, l = "children", n = "hasChildren") {
  const o = (i) => !(de(i) && i.length);
  function s(i, r, a) {
    t(i, r, a), r.forEach((d) => {
      if (d[n]) {
        t(d, null, a + 1);
        return;
      }
      const c = d[l];
      o(c) || s(d, c, a + 1);
    });
  }
  e.forEach((i) => {
    if (i[n]) {
      t(i, null, 0);
      return;
    }
    const r = i[l];
    o(r) || s(i, r, 0);
  });
}
const vo = (e, t, l, n) => {
  const o = { strategy: "fixed", ...e.popperOptions }, s = xe(n.tooltipFormatter) ? n.tooltipFormatter({ row: l, column: n, cellValue: yl(l, n.property).value }) : void 0;
  return $n(s) ? { slotContent: s, content: null, ...e, popperOptions: o } : { slotContent: null, content: s ?? t, ...e, popperOptions: o };
};
let me = null;
function mo(e, t, l, n, o, s) {
  const i = vo(e, t, l, n), r = { ...i, slotContent: void 0 };
  if ((me == null ? void 0 : me.trigger) === o) {
    const b = me.vm.component;
    Pl(b.props, r), i.slotContent && (b.slots.content = () => [i.slotContent]);
    return;
  }
  me == null ? void 0 : me();
  const a = s == null ? void 0 : s.refs.tableWrapper, d = a == null ? void 0 : a.dataset.prefix, c = te(bl, { virtualTriggering: true, virtualRef: o, appendTo: a, placement: "top", transition: "none", offset: 0, hideAfter: 0, ...r }, i.slotContent ? { content: () => i.slotContent } : void 0);
  c.appContext = { ...s.appContext, ...s };
  const f = document.createElement("div");
  jt(c, f), c.component.exposed.onOpen();
  const v = a == null ? void 0 : a.querySelector(`.${d}-scrollbar__wrap`);
  me = () => {
    jt(null, f), v == null ? void 0 : v.removeEventListener("scroll", me), me = null;
  }, me.trigger = o, me.vm = c, v == null ? void 0 : v.addEventListener("scroll", me);
}
function Ll(e) {
  return e.children ? ka(e.children, Ll) : [e];
}
function tl(e, t) {
  return e + t.colSpan;
}
const kl = (e, t, l, n) => {
  let o = 0, s = e;
  const i = l.states.columns.value;
  if (n) {
    const a = Ll(n[e]);
    o = i.slice(0, i.indexOf(a[0])).reduce(tl, 0), s = o + a.reduce(tl, 0) - 1;
  } else
    o = e;
  let r;
  switch (t) {
    case "left":
      s < l.states.fixedLeafColumnsLength.value && (r = "left");
      break;
    case "right":
      o >= i.length - l.states.rightFixedLeafColumnsLength.value && (r = "right");
      break;
    default:
      s < l.states.fixedLeafColumnsLength.value ? r = "left" : o >= i.length - l.states.rightFixedLeafColumnsLength.value && (r = "right");
  }
  return r ? { direction: r, start: o, after: s } : {};
}, Ht = (e, t, l, n, o, s = 0) => {
  const i = [], { direction: r, start: a, after: d } = kl(t, l, n, o);
  if (r) {
    const c = r === "left";
    i.push(`${e}-fixed-column--${r}`), c && d + s === n.states.fixedLeafColumnsLength.value - 1 ? i.push("is-last-column") : !c && a - s === n.states.columns.value.length - n.states.rightFixedLeafColumnsLength.value && i.push("is-first-column");
  }
  return i;
};
function ll(e, t) {
  return e + (Ze(t.realWidth) || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const At = (e, t, l, n) => {
  const { direction: o, start: s = 0, after: i = 0 } = kl(e, t, l, n);
  if (!o)
    return;
  const r = {}, a = o === "left", d = l.states.columns.value;
  return a ? r.left = d.slice(0, s).reduce(ll, 0) : r.right = d.slice(i + 1).reverse().reduce(ll, 0), r;
}, De = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function bo(e) {
  const t = ce(), l = N(false), n = N([]);
  return { updateExpandRows: () => {
    const a = e.data.value || [], d = e.rowKey.value;
    if (l.value)
      n.value = a.slice();
    else if (d) {
      const c = Ie(n.value, d);
      n.value = a.reduce((f, v) => {
        const b = ue(v, d);
        return c[b] && f.push(v), f;
      }, []);
    } else
      n.value = [];
  }, toggleRowExpansion: (a, d) => {
    ht(n.value, a, d) && t.emit("expand-change", a, n.value.slice());
  }, setExpandRowKeys: (a) => {
    t.store.assertRowKey();
    const d = e.data.value || [], c = e.rowKey.value, f = Ie(d, c);
    n.value = a.reduce((v, b) => {
      const m = f[b];
      return m && v.push(m.row), v;
    }, []);
  }, isRowExpanded: (a) => {
    const d = e.rowKey.value;
    return d ? !!Ie(n.value, d)[ue(a, d)] : n.value.includes(a);
  }, states: { expandRows: n, defaultExpandAll: l } };
}
function yo(e) {
  const t = ce(), l = N(null), n = N(null), o = (d) => {
    t.store.assertRowKey(), l.value = d, i(d);
  }, s = () => {
    l.value = null;
  }, i = (d) => {
    const { data: c, rowKey: f } = e;
    let v = null;
    f.value && (v = (R(c) || []).find((b) => ue(b, f.value) === d)), n.value = v, t.emit("current-change", n.value, null);
  };
  return { setCurrentRowKey: o, restoreCurrentRowKey: s, setCurrentRowByKey: i, updateCurrentRow: (d) => {
    const c = n.value;
    if (d && d !== c) {
      n.value = d, t.emit("current-change", n.value, c);
      return;
    }
    !d && c && (n.value = null, t.emit("current-change", null, c));
  }, updateCurrentRowData: () => {
    const d = e.rowKey.value, c = e.data.value || [], f = n.value;
    if (!c.includes(f) && f) {
      if (d) {
        const v = ue(f, d);
        i(v);
      } else
        n.value = null;
      Ze(n.value) && t.emit("current-change", null, f);
    } else
      l.value && (i(l.value), s());
  }, states: { _currentRowKey: l, currentRow: n } };
}
function Co(e) {
  const t = N([]), l = N({}), n = N(16), o = N(false), s = N({}), i = N("hasChildren"), r = N("children"), a = N(false), d = ce(), c = $(() => {
    if (!e.rowKey.value)
      return {};
    const u = e.data.value || [];
    return v(u);
  }), f = $(() => {
    const u = e.rowKey.value, p = Object.keys(s.value), h = {};
    return p.length && p.forEach((g) => {
      if (s.value[g].length) {
        const S = { children: [] };
        s.value[g].forEach((C) => {
          const P = ue(C, u);
          S.children.push(P), C[i.value] && !h[P] && (h[P] = { children: [] });
        }), h[g] = S;
      }
    }), h;
  }), v = (u) => {
    const p = e.rowKey.value, h = {};
    return go(u, (g, S, C) => {
      const P = ue(g, p);
      de(S) ? h[P] = { children: S.map((z) => ue(z, p)), level: C } : o.value && (h[P] = { children: [], lazy: true, level: C });
    }, r.value, i.value), h;
  }, b = (u = false, p = ((h) => (h = d.store) == null ? void 0 : h.states.defaultExpandAll.value)()) => {
    var h;
    const g = c.value, S = f.value, C = Object.keys(g), P = {};
    if (C.length) {
      const z = R(l), k = [], A = (B, Y) => {
        if (u)
          return t.value ? p || t.value.includes(Y) : !!(p || (B == null ? void 0 : B.expanded));
        {
          const X = p || t.value && t.value.includes(Y);
          return !!((B == null ? void 0 : B.expanded) || X);
        }
      };
      C.forEach((B) => {
        const Y = z[B], X = { ...g[B] };
        if (X.expanded = A(Y, B), X.lazy) {
          const { loaded: F = false, loading: x = false } = Y || {};
          X.loaded = !!F, X.loading = !!x, k.push(B);
        }
        P[B] = X;
      });
      const W = Object.keys(S);
      o.value && W.length && k.length && W.forEach((B) => {
        const Y = z[B], X = S[B].children;
        if (k.includes(B)) {
          if (P[B].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          P[B].children = X;
        } else {
          const { loaded: F = false, loading: x = false } = Y || {};
          P[B] = { lazy: true, loaded: !!F, loading: !!x, expanded: A(Y, B), children: X, level: "" };
        }
      });
    }
    l.value = P, (h = d.store) == null || h.updateTableScrollY();
  };
  oe(() => t.value, () => {
    b(true);
  }), oe(() => c.value, () => {
    b();
  }), oe(() => f.value, () => {
    b();
  });
  const m = (u) => {
    t.value = u, b();
  }, y = (u) => o.value && u && "loaded" in u && !u.loaded, w = (u, p) => {
    d.store.assertRowKey();
    const h = e.rowKey.value, g = ue(u, h), S = g && l.value[g];
    if (g && S && "expanded" in S) {
      const C = S.expanded;
      p = ke(p) ? !S.expanded : p, l.value[g].expanded = p, C !== p && d.emit("expand-change", u, p), y(S) && T(u, g, S), d.store.updateTableScrollY();
    }
  }, _ = (u) => {
    d.store.assertRowKey();
    const p = e.rowKey.value, h = ue(u, p), g = l.value[h];
    y(g) ? T(u, h, g) : w(u, void 0);
  }, T = (u, p, h) => {
    const { load: g } = d.props;
    g && !l.value[p].loaded && (l.value[p].loading = true, g(u, h, (S) => {
      if (!de(S))
        throw new TypeError("[ElTable] data must be an array");
      l.value[p].loading = false, l.value[p].loaded = true, l.value[p].expanded = true, S.length && (s.value[p] = S), d.emit("expand-change", u, true);
    }));
  };
  return { loadData: T, loadOrToggle: _, toggleTreeExpansion: w, updateTreeExpandKeys: m, updateTreeData: b, updateKeyChildren: (u, p) => {
    const { lazy: h, rowKey: g } = d.props;
    if (h) {
      if (!g)
        throw new Error("[Table] rowKey is required in updateKeyChild");
      s.value[u] && (s.value[u] = p);
    }
  }, normalize: v, states: { expandRowKeys: t, treeData: l, indent: n, lazy: o, lazyTreeNodeMap: s, lazyColumnIdentifier: i, childrenColumnName: r, checkStrictly: a } };
}
const wo = (e, t) => {
  const l = t.sortingColumn;
  return !l || Ee(l.sortable) ? e : uo(e, t.sortProp, t.sortOrder, l.sortMethod, l.sortBy);
}, st = (e) => {
  const t = [];
  return e.forEach((l) => {
    l.children && l.children.length > 0 ? t.push.apply(t, st(l.children)) : t.push(l);
  }), t;
};
function So() {
  var e;
  const t = ce(), { size: l } = Hn((e = t.proxy) == null ? void 0 : e.$props), n = N(null), o = N([]), s = N([]), i = N(false), r = N([]), a = N([]), d = N([]), c = N([]), f = N([]), v = N([]), b = N([]), m = N([]), y = [], w = N(0), _ = N(0), T = N(0), E = N(false), u = N([]), p = N(false), h = N(false), g = N(null), S = N({}), C = N(null), P = N(null), z = N(null), k = N(null), A = N(null), W = $(() => n.value ? Ie(u.value, n.value) : void 0);
  oe(o, () => {
    var L;
    t.state && (F(false), t.props.tableLayout === "auto" && ((L = t.refs.tableHeaderRef) == null || L.updateFixedColumnStyle()));
  }, { deep: true });
  const B = () => {
    if (!n.value)
      throw new Error("[ElTable] prop row-key is required");
  }, Y = (L) => {
    var K;
    (K = L.children) == null || K.forEach((D) => {
      D.fixed = L.fixed, Y(D);
    });
  }, X = () => {
    r.value.forEach((ee) => {
      Y(ee);
    }), c.value = r.value.filter((ee) => [true, "left"].includes(ee.fixed));
    const L = r.value.find((ee) => ee.type === "selection");
    let K;
    L && L.fixed !== "right" && !c.value.includes(L) && r.value.indexOf(L) === 0 && c.value.length && (c.value.unshift(L), K = true), f.value = r.value.filter((ee) => ee.fixed === "right");
    const D = r.value.filter((ee) => (K ? ee.type !== "selection" : true) && !ee.fixed);
    a.value = [].concat(c.value).concat(D).concat(f.value);
    const V = st(D), G = st(c.value), Q = st(f.value);
    w.value = V.length, _.value = G.length, T.value = Q.length, d.value = [].concat(G).concat(V).concat(Q), i.value = c.value.length > 0 || f.value.length > 0;
  }, F = (L, K = false) => {
    L && X(), K ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, x = (L) => W.value ? !!W.value[ue(L, n.value)] : u.value.includes(L), M = () => {
    E.value = false;
    const L = u.value;
    u.value = [], L.length && t.emit("selection-change", []);
  }, I = () => {
    var L, K;
    let D;
    if (n.value) {
      D = [];
      const V = (K = (L = t == null ? void 0 : t.store) == null ? void 0 : L.states) == null ? void 0 : K.childrenColumnName.value, G = Ie(o.value, n.value, true, V);
      for (const Q in W.value)
        Je(W.value, Q) && !G[Q] && D.push(W.value[Q].row);
    } else
      D = u.value.filter((V) => !o.value.includes(V));
    if (D.length) {
      const V = u.value.filter((G) => !D.includes(G));
      u.value = V, t.emit("selection-change", V.slice());
    }
  }, J = () => (u.value || []).slice(), ae = (L, K, D = true, V = false) => {
    var G, Q, ee, _e;
    const Re = { children: (Q = (G = t == null ? void 0 : t.store) == null ? void 0 : G.states) == null ? void 0 : Q.childrenColumnName.value, checkStrictly: (_e = (ee = t == null ? void 0 : t.store) == null ? void 0 : ee.states) == null ? void 0 : _e.checkStrictly.value };
    if (ht(u.value, L, K, Re, V ? void 0 : g.value, o.value.indexOf(L))) {
      const lt = (u.value || []).slice();
      D && t.emit("select", lt, L), t.emit("selection-change", lt);
    }
  }, fe = () => {
    var L, K;
    const D = h.value ? !E.value : !(E.value || u.value.length);
    E.value = D;
    let V = false, G = 0;
    const Q = (K = (L = t == null ? void 0 : t.store) == null ? void 0 : L.states) == null ? void 0 : K.rowKey.value, { childrenColumnName: ee } = t.store.states, _e = { children: ee.value, checkStrictly: false };
    o.value.forEach((Re, tt) => {
      const lt = tt + G;
      ht(u.value, Re, D, _e, g.value, lt) && (V = true), G += se(ue(Re, Q));
    }), V && t.emit("selection-change", u.value ? u.value.slice() : []), t.emit("select-all", (u.value || []).slice());
  }, ge = () => {
    o.value.forEach((L) => {
      const K = ue(L, n.value), D = W.value[K];
      D && (u.value[D.index] = L);
    });
  }, we = () => {
    var L;
    if (((L = o.value) == null ? void 0 : L.length) === 0) {
      E.value = false;
      return;
    }
    const { childrenColumnName: K } = t.store.states;
    let D = 0, V = 0;
    const G = (ee) => {
      var _e;
      for (const Re of ee) {
        const tt = g.value && g.value.call(null, Re, D);
        if (x(Re))
          V++;
        else if (!g.value || tt)
          return false;
        if (D++, (_e = Re[K.value]) != null && _e.length && !G(Re[K.value]))
          return false;
      }
      return true;
    }, Q = G(o.value || []);
    E.value = V === 0 ? false : Q;
  }, se = (L) => {
    var K;
    if (!t || !t.store)
      return 0;
    const { treeData: D } = t.store.states;
    let V = 0;
    const G = (K = D.value[L]) == null ? void 0 : K.children;
    return G && (V += G.length, G.forEach((Q) => {
      V += se(Q);
    })), V;
  }, ye = (L, K) => {
    de(L) || (L = [L]);
    const D = {};
    return L.forEach((V) => {
      S.value[V.id] = K, D[V.columnKey || V.id] = K;
    }), D;
  }, Ce = (L, K, D) => {
    P.value && P.value !== L && (P.value.order = null), P.value = L, z.value = K, k.value = D;
  }, et = () => {
    let L = R(s);
    Object.keys(S.value).forEach((K) => {
      const D = S.value[K];
      if (!D || D.length === 0)
        return;
      const V = Rl({ columns: d.value }, K);
      V && V.filterMethod && (L = L.filter((G) => D.some((Q) => V.filterMethod.call(null, Q, G, V))));
    }), C.value = L;
  }, It = () => {
    o.value = wo(C.value, { sortingColumn: P.value, sortProp: z.value, sortOrder: k.value });
  }, jl = (L = void 0) => {
    L && L.filter || et(), It();
  }, ql = (L) => {
    const { tableHeaderRef: K } = t.refs;
    if (!K)
      return;
    const D = Object.assign({}, K.filterPanels), V = Object.keys(D);
    if (V.length)
      if (Ee(L) && (L = [L]), de(L)) {
        const G = L.map((Q) => co({ columns: d.value }, Q));
        V.forEach((Q) => {
          const ee = G.find((_e) => _e.id === Q);
          ee && (ee.filteredValue = []);
        }), t.store.commit("filterChange", { column: G, values: [], silent: true, multi: true });
      } else
        V.forEach((G) => {
          const Q = d.value.find((ee) => ee.id === G);
          Q && (Q.filteredValue = []);
        }), S.value = {}, t.store.commit("filterChange", { column: {}, values: [], silent: true });
  }, Ul = () => {
    P.value && (Ce(null, null, null), t.store.commit("changeSortCondition", { silent: true }));
  }, { setExpandRowKeys: Yl, toggleRowExpansion: Kt, updateExpandRows: Xl, states: Gl, isRowExpanded: Jl } = bo({ data: o, rowKey: n }), { updateTreeExpandKeys: Ql, toggleTreeExpansion: Zl, updateTreeData: en, updateKeyChildren: tn, loadOrToggle: ln, states: nn } = Co({ data: o, rowKey: n }), { updateCurrentRowData: an, updateCurrentRow: on, setCurrentRowKey: sn, states: rn } = yo({ data: o, rowKey: n });
  return { assertRowKey: B, updateColumns: X, scheduleLayout: F, isSelected: x, clearSelection: M, cleanSelection: I, getSelectionRows: J, toggleRowSelection: ae, _toggleAllSelection: fe, toggleAllSelection: null, updateSelectionByRowKey: ge, updateAllSelected: we, updateFilters: ye, updateCurrentRow: on, updateSort: Ce, execFilter: et, execSort: It, execQuery: jl, clearFilter: ql, clearSort: Ul, toggleRowExpansion: Kt, setExpandRowKeysAdapter: (L) => {
    Yl(L), Ql(L);
  }, setCurrentRowKey: sn, toggleRowExpansionAdapter: (L, K) => {
    d.value.some(({ type: V }) => V === "expand") ? Kt(L, K) : Zl(L, K);
  }, isRowExpanded: Jl, updateExpandRows: Xl, updateCurrentRowData: an, loadOrToggle: ln, updateTreeData: en, updateKeyChildren: tn, states: { tableSize: l, rowKey: n, data: o, _data: s, isComplex: i, _columns: r, originColumns: a, columns: d, fixedColumns: c, rightFixedColumns: f, leafColumns: v, fixedLeafColumns: b, rightFixedLeafColumns: m, updateOrderFns: y, leafColumnsLength: w, fixedLeafColumnsLength: _, rightFixedLeafColumnsLength: T, isAllSelected: E, selection: u, reserveSelection: p, selectOnIndeterminate: h, selectable: g, filters: S, filteredData: C, sortingColumn: P, sortProp: z, sortOrder: k, hoverRow: A, ...Gl, ...nn, ...rn } };
}
function xt(e, t) {
  return e.map((l) => {
    var n;
    return l.id === t.id ? t : ((n = l.children) != null && n.length && (l.children = xt(l.children, t)), l);
  });
}
function Et(e) {
  e.forEach((t) => {
    var l, n;
    t.no = (l = t.getColumnIndex) == null ? void 0 : l.call(t), (n = t.children) != null && n.length && Et(t.children);
  }), e.sort((t, l) => t.no - l.no);
}
function xo() {
  const e = ce(), t = So();
  return { ns: re("table"), ...t, mutations: { setData(i, r) {
    const a = R(i._data) !== r;
    i.data.value = r, i._data.value = r, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), R(i.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : a ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
  }, insertColumn(i, r, a, d) {
    const c = R(i._columns);
    let f = [];
    a ? (a && !a.children && (a.children = []), a.children.push(r), f = xt(c, a)) : (c.push(r), f = c), Et(f), i._columns.value = f, i.updateOrderFns.push(d), r.type === "selection" && (i.selectable.value = r.selectable, i.reserveSelection.value = r.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
  }, updateColumnOrder(i, r) {
    var a;
    ((a = r.getColumnIndex) == null ? void 0 : a.call(r)) !== r.no && (Et(i._columns.value), e.$ready && e.store.updateColumns());
  }, removeColumn(i, r, a, d) {
    const c = R(i._columns) || [];
    if (a)
      a.children.splice(a.children.findIndex((v) => v.id === r.id), 1), Fe(() => {
        var v;
        ((v = a.children) == null ? void 0 : v.length) === 0 && delete a.children;
      }), i._columns.value = xt(c, a);
    else {
      const v = c.indexOf(r);
      v > -1 && (c.splice(v, 1), i._columns.value = c);
    }
    const f = i.updateOrderFns.indexOf(d);
    f > -1 && i.updateOrderFns.splice(f, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
  }, sort(i, r) {
    const { prop: a, order: d, init: c } = r;
    if (a) {
      const f = R(i.columns).find((v) => v.property === a);
      f && (f.order = d, e.store.updateSort(f, a, d), e.store.commit("changeSortCondition", { init: c }));
    }
  }, changeSortCondition(i, r) {
    const { sortingColumn: a, sortProp: d, sortOrder: c } = i, f = R(a), v = R(d), b = R(c);
    Ze(b) && (i.sortingColumn.value = null, i.sortProp.value = null);
    const m = { filter: true };
    e.store.execQuery(m), (!r || !(r.silent || r.init)) && e.emit("sort-change", { column: f, prop: v, order: b }), e.store.updateTableScrollY();
  }, filterChange(i, r) {
    const { column: a, values: d, silent: c } = r, f = e.store.updateFilters(a, d);
    e.store.execQuery(), c || e.emit("filter-change", f), e.store.updateTableScrollY();
  }, toggleAllSelection() {
    e.store.toggleAllSelection();
  }, rowSelectedChanged(i, r) {
    e.store.toggleRowSelection(r), e.store.updateAllSelected();
  }, setHoverRow(i, r) {
    i.hoverRow.value = r;
  }, setCurrentRow(i, r) {
    e.store.updateCurrentRow(r);
  } }, commit: function(i, ...r) {
    const a = e.store.mutations;
    if (a[i])
      a[i].apply(e, [e.store.states].concat(r));
    else
      throw new Error(`Action not found: ${i}`);
  }, updateTableScrollY: function() {
    Fe(() => e.layout.updateScrollY.apply(e.layout));
  } };
}
const Xe = { rowKey: "rowKey", defaultExpandAll: "defaultExpandAll", selectOnIndeterminate: "selectOnIndeterminate", indent: "indent", lazy: "lazy", data: "data", "treeProps.hasChildren": { key: "lazyColumnIdentifier", default: "hasChildren" }, "treeProps.children": { key: "childrenColumnName", default: "children" }, "treeProps.checkStrictly": { key: "checkStrictly", default: false } };
function Eo(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const l = xo();
  return l.toggleAllSelection = pt(l._toggleAllSelection, 10), Object.keys(Xe).forEach((n) => {
    Tl(zl(t, n), n, l);
  }), No(l, t), l;
}
function No(e, t) {
  Object.keys(Xe).forEach((l) => {
    oe(() => zl(t, l), (n) => {
      Tl(n, l, e);
    });
  });
}
function Tl(e, t, l) {
  let n = e, o = Xe[t];
  ct(Xe[t]) && (o = o.key, n = n || Xe[t].default), l.states[o].value = n;
}
function zl(e, t) {
  if (t.includes(".")) {
    const l = t.split(".");
    let n = e;
    return l.forEach((o) => {
      n = n[o];
    }), n;
  } else
    return e[t];
}
class Po {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = true, this.showHeader = true, this.height = N(null), this.scrollX = N(false), this.scrollY = N(false), this.bodyWidth = N(null), this.fixedWidth = N(null), this.rightFixedWidth = N(null), this.gutterWidth = 0;
    for (const l in t)
      Je(t, l) && (An(this[l]) ? this[l].value = t[l] : this[l] = t[l]);
    if (!this.table)
      throw new Error("Table is required for Table Layout");
    if (!this.store)
      throw new Error("Store is required for Table Layout");
  }
  updateScrollY() {
    const t = this.height.value;
    if (Ze(t))
      return false;
    const l = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (l == null ? void 0 : l.wrapRef)) {
      let n = true;
      const o = this.scrollY.value;
      return n = l.wrapRef.scrollHeight > l.wrapRef.clientHeight, this.scrollY.value = n, o !== n;
    }
    return false;
  }
  setHeight(t, l = "height") {
    if (!Ke)
      return;
    const n = this.table.vnode.el;
    if (t = po(t), this.height.value = Number(t), !n && (t || t === 0))
      return Fe(() => this.setHeight(t, l));
    he(t) ? (n.style[l] = `${t}px`, this.updateElsHeight()) : Ee(t) && (n.style[l] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((n) => {
      n.isColumnGroup ? t.push.apply(t, n.columns) : t.push(n);
    }), t;
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers("scrollable");
  }
  headerDisplayNone(t) {
    if (!t)
      return true;
    let l = t;
    for (; l.tagName !== "DIV"; ) {
      if (getComputedStyle(l).display === "none")
        return true;
      l = l.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    if (!Ke)
      return;
    const t = this.fit, l = this.table.vnode.el.clientWidth;
    let n = 0;
    const o = this.getFlattenColumns(), s = o.filter((a) => !he(a.width));
    if (o.forEach((a) => {
      he(a.width) && a.realWidth && (a.realWidth = null);
    }), s.length > 0 && t) {
      if (o.forEach((a) => {
        n += Number(a.width || a.minWidth || 80);
      }), n <= l) {
        this.scrollX.value = false;
        const a = l - n;
        if (s.length === 1)
          s[0].realWidth = Number(s[0].minWidth || 80) + a;
        else {
          const d = s.reduce((v, b) => v + Number(b.minWidth || 80), 0), c = a / d;
          let f = 0;
          s.forEach((v, b) => {
            if (b === 0)
              return;
            const m = Math.floor(Number(v.minWidth || 80) * c);
            f += m, v.realWidth = Number(v.minWidth || 80) + m;
          }), s[0].realWidth = Number(s[0].minWidth || 80) + a - f;
        }
      } else
        this.scrollX.value = true, s.forEach((a) => {
          a.realWidth = Number(a.minWidth);
        });
      this.bodyWidth.value = Math.max(n, l), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      o.forEach((a) => {
        !a.width && !a.minWidth ? a.realWidth = 80 : a.realWidth = Number(a.width || a.minWidth), n += a.realWidth;
      }), this.scrollX.value = n > l, this.bodyWidth.value = n;
    const i = this.store.states.fixedColumns.value;
    if (i.length > 0) {
      let a = 0;
      i.forEach((d) => {
        a += Number(d.realWidth || d.width);
      }), this.fixedWidth.value = a;
    }
    const r = this.store.states.rightFixedColumns.value;
    if (r.length > 0) {
      let a = 0;
      r.forEach((d) => {
        a += Number(d.realWidth || d.width);
      }), this.rightFixedWidth.value = a;
    }
    this.notifyObservers("columns");
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const l = this.observers.indexOf(t);
    l !== -1 && this.observers.splice(l, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((n) => {
      var o, s;
      switch (t) {
        case "columns":
          (o = n.state) == null || o.onColumnsChange(this);
          break;
        case "scrollable":
          (s = n.state) == null || s.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: _o } = $e, Ro = Z({ name: "ElTableFilterPanel", components: { ElCheckbox: $e, ElCheckboxGroup: _o, ElScrollbar: Sl, ElTooltip: bl, ElIcon: Ve, ArrowDown: Bn, ArrowUp: In }, directives: { ClickOutside: Kn }, props: { placement: { type: String, default: "bottom-start" }, store: { type: Object }, column: { type: Object }, upDataColumn: { type: Function }, appendTo: Dn.appendTo }, setup(e) {
  const t = ce(), { t: l } = Te(), n = re("table-filter"), o = t == null ? void 0 : t.parent;
  o.filterPanels.value[e.column.id] || (o.filterPanels.value[e.column.id] = t);
  const s = N(false), i = N(null), r = $(() => e.column && e.column.filters), a = $(() => e.column.filterClassName ? `${n.b()} ${e.column.filterClassName}` : n.b()), d = $({ get: () => {
    var p;
    return (((p = e.column) == null ? void 0 : p.filteredValue) || [])[0];
  }, set: (p) => {
    c.value && (ot(p) ? c.value.splice(0, 1) : c.value.splice(0, 1, p));
  } }), c = $({ get() {
    return e.column ? e.column.filteredValue || [] : [];
  }, set(p) {
    e.column && e.upDataColumn("filteredValue", p);
  } }), f = $(() => e.column ? e.column.filterMultiple : true), v = (p) => p.value === d.value, b = () => {
    s.value = false;
  }, m = (p) => {
    p.stopPropagation(), s.value = !s.value;
  }, y = () => {
    s.value = false;
  }, w = () => {
    E(c.value), b();
  }, _ = () => {
    c.value = [], E(c.value), b();
  }, T = (p) => {
    d.value = p, ot(p) ? E([]) : E(c.value), b();
  }, E = (p) => {
    e.store.commit("filterChange", { column: e.column, values: p }), e.store.updateAllSelected();
  };
  oe(s, (p) => {
    e.column && e.upDataColumn("filterOpened", p);
  }, { immediate: true });
  const u = $(() => {
    var p, h;
    return (h = (p = i.value) == null ? void 0 : p.popperRef) == null ? void 0 : h.contentRef;
  });
  return { tooltipVisible: s, multiple: f, filterClassName: a, filteredValue: c, filterValue: d, filters: r, handleConfirm: w, handleReset: _, handleSelect: T, isPropAbsent: ot, isActive: v, t: l, ns: n, showFilterPanel: m, hideFilterPanel: y, popperPaneRef: u, tooltip: i };
} });
function Fo(e, t, l, n, o, s) {
  const i = Se("el-checkbox"), r = Se("el-checkbox-group"), a = Se("el-scrollbar"), d = Se("arrow-up"), c = Se("arrow-down"), f = Se("el-icon"), v = Se("el-tooltip"), b = Mt("click-outside");
  return O(), ne(v, { ref: "tooltip", visible: e.tooltipVisible, offset: 0, placement: e.placement, "show-arrow": false, "stop-popper-mouse-event": false, teleported: "", effect: "light", pure: "", "popper-class": e.filterClassName, persistent: "", "append-to": e.appendTo }, { content: le(() => [e.multiple ? (O(), U("div", { key: 0 }, [q("div", { class: j(e.ns.e("content")) }, [te(a, { "wrap-class": e.ns.e("wrap") }, { default: le(() => [te(r, { modelValue: e.filteredValue, "onUpdate:modelValue": (m) => e.filteredValue = m, class: j(e.ns.e("checkbox-group")) }, { default: le(() => [(O(true), U(We, null, Ge(e.filters, (m) => (O(), ne(i, { key: m.value, value: m.value }, { default: le(() => [Ye(ie(m.text), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "class"])]), _: 1 }, 8, ["wrap-class"])], 2), q("div", { class: j(e.ns.e("bottom")) }, [q("button", { class: j({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }), disabled: e.filteredValue.length === 0, type: "button", onClick: e.handleConfirm }, ie(e.t("el.table.confirmFilter")), 11, ["disabled", "onClick"]), q("button", { type: "button", onClick: e.handleReset }, ie(e.t("el.table.resetFilter")), 9, ["onClick"])], 2)])) : (O(), U("ul", { key: 1, class: j(e.ns.e("list")) }, [q("li", { class: j([e.ns.e("list-item"), { [e.ns.is("active")]: e.isPropAbsent(e.filterValue) }]), onClick: (m) => e.handleSelect(null) }, ie(e.t("el.table.clearFilter")), 11, ["onClick"]), (O(true), U(We, null, Ge(e.filters, (m) => (O(), U("li", { key: m.value, class: j([e.ns.e("list-item"), e.ns.is("active", e.isActive(m))]), label: m.value, onClick: (y) => e.handleSelect(m.value) }, ie(m.text), 11, ["label", "onClick"]))), 128))], 2))]), default: le(() => [Be((O(), U("span", { class: j([`${e.ns.namespace.value}-table__column-filter-trigger`, `${e.ns.namespace.value}-none-outline`]), onClick: e.showFilterPanel }, [te(f, null, { default: le(() => [Le(e.$slots, "filter-icon", {}, () => [e.column.filterOpened ? (O(), ne(d, { key: 0 })) : (O(), ne(c, { key: 1 }))])]), _: 3 })], 10, ["onClick"])), [[b, e.hideFilterPanel, e.popperPaneRef]])]), _: 3 }, 8, ["visible", "placement", "popper-class", "append-to"]);
}
var Lo = ze(Ro, [["render", Fo], ["__file", "filter-panel.vue"]]);
function Bt(e) {
  const t = ce();
  Cl(() => {
    l.value.addObserver(t);
  }), je(() => {
    n(l.value), o(l.value);
  }), Vn(() => {
    n(l.value), o(l.value);
  }), vt(() => {
    l.value.removeObserver(t);
  });
  const l = $(() => {
    const s = e.layout;
    if (!s)
      throw new Error("Can not find table layout.");
    return s;
  }), n = (s) => {
    var i;
    const r = ((i = e.vnode.el) == null ? void 0 : i.querySelectorAll("colgroup > col")) || [];
    if (!r.length)
      return;
    const a = s.getFlattenColumns(), d = {};
    a.forEach((c) => {
      d[c.id] = c;
    });
    for (let c = 0, f = r.length; c < f; c++) {
      const v = r[c], b = v.getAttribute("name"), m = d[b];
      m && v.setAttribute("width", m.realWidth || m.width);
    }
  }, o = (s) => {
    var i, r;
    const a = ((i = e.vnode.el) == null ? void 0 : i.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let c = 0, f = a.length; c < f; c++)
      a[c].setAttribute("width", s.scrollY.value ? s.gutterWidth : "0");
    const d = ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll("th.gutter")) || [];
    for (let c = 0, f = d.length; c < f; c++) {
      const v = d[c];
      v.style.width = s.scrollY.value ? `${s.gutterWidth}px` : "0", v.style.display = s.scrollY.value ? "" : "none";
    }
  };
  return { tableLayout: l.value, onColumnsChange: n, onScrollableChange: o };
}
const Pe = Symbol("ElTable");
function ko(e, t) {
  const l = ce(), n = Ne(Pe), o = (y) => {
    y.stopPropagation();
  }, s = (y, w) => {
    !w.filters && w.sortable ? m(y, w, false) : w.filterable && !w.sortable && o(y), n == null ? void 0 : n.emit("header-click", w, y);
  }, i = (y, w) => {
    n == null ? void 0 : n.emit("header-contextmenu", w, y);
  }, r = N(null), a = N(false), d = N({}), c = (y, w) => {
    if (Ke && !(w.children && w.children.length > 0) && r.value && e.border) {
      a.value = true;
      const _ = n;
      t("set-drag-visible", true);
      const E = (_ == null ? void 0 : _.vnode.el).getBoundingClientRect().left, u = l.vnode.el.querySelector(`th.${w.id}`), p = u.getBoundingClientRect(), h = p.left - E + 30;
      ft(u, "noclick"), d.value = { startMouseLeft: y.clientX, startLeft: p.right - E, startColumnLeft: p.left - E, tableLeft: E };
      const g = _ == null ? void 0 : _.refs.resizeProxy;
      g.style.left = `${d.value.startLeft}px`, document.onselectstart = function() {
        return false;
      }, document.ondragstart = function() {
        return false;
      };
      const S = (P) => {
        const z = P.clientX - d.value.startMouseLeft, k = d.value.startLeft + z;
        g.style.left = `${Math.max(h, k)}px`;
      }, C = () => {
        if (a.value) {
          const { startColumnLeft: P, startLeft: z } = d.value, A = Number.parseInt(g.style.left, 10) - P;
          w.width = w.realWidth = A, _ == null ? void 0 : _.emit("header-dragend", w.width, z - P, w, y), requestAnimationFrame(() => {
            e.store.scheduleLayout(false, true);
          }), document.body.style.cursor = "", a.value = false, r.value = null, d.value = {}, t("set-drag-visible", false);
        }
        document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", C), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          Qe(u, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", S), document.addEventListener("mouseup", C);
    }
  }, f = (y, w) => {
    var _;
    if (w.children && w.children.length > 0)
      return;
    const T = y.target;
    if (!jn(T))
      return;
    const E = T == null ? void 0 : T.closest("th");
    if (!(!w || !w.resizable || !E) && !a.value && e.border) {
      const u = E.getBoundingClientRect(), p = document.body.style, h = ((_ = E.parentNode) == null ? void 0 : _.lastElementChild) === E, g = e.allowDragLastColumn || !h;
      u.width > 12 && u.right - y.clientX < 8 && g ? (p.cursor = "col-resize", Ue(E, "is-sortable") && (E.style.cursor = "col-resize"), r.value = w) : a.value || (p.cursor = "", Ue(E, "is-sortable") && (E.style.cursor = "pointer"), r.value = null);
    }
  }, v = () => {
    Ke && (document.body.style.cursor = "");
  }, b = ({ order: y, sortOrders: w }) => {
    if (y === "")
      return w[0];
    const _ = w.indexOf(y || null);
    return w[_ > w.length - 2 ? 0 : _ + 1];
  }, m = (y, w, _) => {
    var T;
    y.stopPropagation();
    const E = w.order === _ ? null : _ || b(w), u = (T = y.target) == null ? void 0 : T.closest("th");
    if (u && Ue(u, "noclick")) {
      Qe(u, "noclick");
      return;
    }
    if (!w.sortable)
      return;
    const p = y.currentTarget;
    if (["ascending", "descending"].some((P) => Ue(p, P) && !w.sortOrders.includes(P)))
      return;
    const h = e.store.states;
    let g = h.sortProp.value, S;
    const C = h.sortingColumn.value;
    (C !== w || C === w && Ze(C.order)) && (C && (C.order = null), h.sortingColumn.value = w, g = w.property), E ? S = w.order = E : S = w.order = null, h.sortProp.value = g, h.sortOrder.value = S, n == null ? void 0 : n.store.commit("changeSortCondition");
  };
  return { handleHeaderClick: s, handleHeaderContextMenu: i, handleMouseDown: c, handleMouseMove: f, handleMouseOut: v, handleSortClick: m, handleFilterClick: o };
}
function To(e) {
  const t = Ne(Pe), l = re("table");
  return { getHeaderRowStyle: (r) => {
    const a = t == null ? void 0 : t.props.headerRowStyle;
    return xe(a) ? a.call(null, { rowIndex: r }) : a;
  }, getHeaderRowClass: (r) => {
    const a = [], d = t == null ? void 0 : t.props.headerRowClassName;
    return Ee(d) ? a.push(d) : xe(d) && a.push(d.call(null, { rowIndex: r })), a.join(" ");
  }, getHeaderCellStyle: (r, a, d, c) => {
    var f;
    let v = (f = t == null ? void 0 : t.props.headerCellStyle) != null ? f : {};
    xe(v) && (v = v.call(null, { rowIndex: r, columnIndex: a, row: d, column: c }));
    const b = At(a, c.fixed, e.store, d);
    return De(b, "left"), De(b, "right"), Object.assign({}, v, b);
  }, getHeaderCellClass: (r, a, d, c) => {
    const f = Ht(l.b(), a, c.fixed, e.store, d), v = [c.id, c.order, c.headerAlign, c.className, c.labelClassName, ...f];
    c.children || v.push("is-leaf"), c.sortable && v.push("is-sortable");
    const b = t == null ? void 0 : t.props.headerCellClassName;
    return Ee(b) ? v.push(b) : xe(b) && v.push(b.call(null, { rowIndex: r, columnIndex: a, row: d, column: c })), v.push(l.e("cell")), v.filter((m) => !!m).join(" ");
  } };
}
const Ol = (e) => {
  const t = [];
  return e.forEach((l) => {
    l.children ? (t.push(l), t.push.apply(t, Ol(l.children))) : t.push(l);
  }), t;
}, Ml = (e) => {
  let t = 1;
  const l = (s, i) => {
    if (i && (s.level = i.level + 1, t < s.level && (t = s.level)), s.children) {
      let r = 0;
      s.children.forEach((a) => {
        l(a, s), r += a.colSpan;
      }), s.colSpan = r;
    } else
      s.colSpan = 1;
  };
  e.forEach((s) => {
    s.level = 1, l(s, void 0);
  });
  const n = [];
  for (let s = 0; s < t; s++)
    n.push([]);
  return Ol(e).forEach((s) => {
    s.children ? (s.rowSpan = 1, s.children.forEach((i) => i.isSubColumn = true)) : s.rowSpan = t - s.level + 1, n[s.level - 1].push(s);
  }), n;
};
function zo(e) {
  const t = Ne(Pe), l = $(() => Ml(e.store.states.originColumns.value));
  return { isGroup: $(() => {
    const s = l.value.length > 1;
    return s && t && (t.state.isGroup.value = true), s;
  }), toggleAllSelection: (s) => {
    s.stopPropagation(), t == null ? void 0 : t.store.commit("toggleAllSelection");
  }, columnRows: l };
}
var Oo = Z({ name: "ElTableHeader", components: { ElCheckbox: $e }, props: { fixed: { type: String, default: "" }, store: { required: true, type: Object }, border: Boolean, defaultSort: { type: Object, default: () => ({ prop: "", order: "" }) }, appendFilterPanelTo: { type: String }, allowDragLastColumn: { type: Boolean } }, setup(e, { emit: t }) {
  const l = ce(), n = Ne(Pe), o = re("table"), s = N({}), { onColumnsChange: i, onScrollableChange: r } = Bt(n), a = (n == null ? void 0 : n.props.tableLayout) === "auto", d = qn(/* @__PURE__ */ new Map()), c = N(), f = () => {
    setTimeout(() => {
      d.size > 0 && (d.forEach((P, z) => {
        const k = c.value.querySelector(`.${z.replace(/\s/g, ".")}`);
        if (k) {
          const A = k.getBoundingClientRect().width;
          P.width = A;
        }
      }), d.clear());
    });
  };
  oe(d, f), je(async () => {
    await Fe(), await Fe();
    const { prop: P, order: z } = e.defaultSort;
    n == null ? void 0 : n.store.commit("sort", { prop: P, order: z, init: true }), f();
  });
  const { handleHeaderClick: v, handleHeaderContextMenu: b, handleMouseDown: m, handleMouseMove: y, handleMouseOut: w, handleSortClick: _, handleFilterClick: T } = ko(e, t), { getHeaderRowStyle: E, getHeaderRowClass: u, getHeaderCellStyle: p, getHeaderCellClass: h } = To(e), { isGroup: g, toggleAllSelection: S, columnRows: C } = zo(e);
  return l.state = { onColumnsChange: i, onScrollableChange: r }, l.filterPanels = s, { ns: o, filterPanels: s, onColumnsChange: i, onScrollableChange: r, columnRows: C, getHeaderRowClass: u, getHeaderRowStyle: E, getHeaderCellClass: h, getHeaderCellStyle: p, handleHeaderClick: v, handleHeaderContextMenu: b, handleMouseDown: m, handleMouseMove: y, handleMouseOut: w, handleSortClick: _, handleFilterClick: T, isGroup: g, toggleAllSelection: S, saveIndexSelection: d, isTableLayoutAuto: a, theadRef: c, updateFixedColumnStyle: f };
}, render() {
  const { ns: e, isGroup: t, columnRows: l, getHeaderCellStyle: n, getHeaderCellClass: o, getHeaderRowClass: s, getHeaderRowStyle: i, handleHeaderClick: r, handleHeaderContextMenu: a, handleMouseDown: d, handleMouseMove: c, handleSortClick: f, handleMouseOut: v, store: b, $parent: m, saveIndexSelection: y, isTableLayoutAuto: w } = this;
  let _ = 1;
  return H("thead", { ref: "theadRef", class: { [e.is("group")]: t } }, l.map((T, E) => H("tr", { class: s(E), key: E, style: i(E) }, T.map((u, p) => {
    u.rowSpan > _ && (_ = u.rowSpan);
    const h = o(E, p, T, u);
    return w && u.fixed && y.set(h, u), H("th", { class: h, colspan: u.colSpan, key: `${u.id}-thead`, rowspan: u.rowSpan, style: n(E, p, T, u), onClick: (g) => {
      g.currentTarget.classList.contains("noclick") || r(g, u);
    }, onContextmenu: (g) => a(g, u), onMousedown: (g) => d(g, u), onMousemove: (g) => c(g, u), onMouseout: v }, [H("div", { class: ["cell", u.filteredValue && u.filteredValue.length > 0 ? "highlight" : ""] }, [u.renderHeader ? u.renderHeader({ column: u, $index: p, store: b, _self: m }) : u.label, u.sortable && H("span", { onClick: (g) => f(g, u), class: "caret-wrapper" }, [H("i", { onClick: (g) => f(g, u, "ascending"), class: "sort-caret ascending" }), H("i", { onClick: (g) => f(g, u, "descending"), class: "sort-caret descending" })]), u.filterable && H(Lo, { store: b, placement: u.filterPlacement || "bottom-start", appendTo: m.appendFilterPanelTo, column: u, upDataColumn: (g, S) => {
      u[g] = S;
    } }, { "filter-icon": () => u.renderFilterIcon ? u.renderFilterIcon({ filterOpened: u.filterOpened }) : null })])]);
  }))));
} });
function bt(e, t, l = 0.03) {
  return e - t > l;
}
function Mo(e) {
  const t = Ne(Pe), l = N(""), n = N(H("div")), o = (m, y, w) => {
    var _;
    const T = t, E = mt(m);
    let u;
    const p = (_ = T == null ? void 0 : T.vnode.el) == null ? void 0 : _.dataset.prefix;
    E && (u = el({ columns: e.store.states.columns.value }, E, p), u && (T == null ? void 0 : T.emit(`cell-${w}`, y, u, E, m))), T == null ? void 0 : T.emit(`row-${w}`, y, u, m);
  }, s = (m, y) => {
    o(m, y, "dblclick");
  }, i = (m, y) => {
    e.store.commit("setCurrentRow", y), o(m, y, "click");
  }, r = (m, y) => {
    o(m, y, "contextmenu");
  }, a = pt((m) => {
    e.store.commit("setHoverRow", m);
  }, 30), d = pt(() => {
    e.store.commit("setHoverRow", null);
  }, 30), c = (m) => {
    const y = window.getComputedStyle(m, null), w = Number.parseInt(y.paddingLeft, 10) || 0, _ = Number.parseInt(y.paddingRight, 10) || 0, T = Number.parseInt(y.paddingTop, 10) || 0, E = Number.parseInt(y.paddingBottom, 10) || 0;
    return { left: w, right: _, top: T, bottom: E };
  }, f = (m, y, w) => {
    let _ = y.target.parentNode;
    for (; m > 1 && (_ = _ == null ? void 0 : _.nextSibling, !(!_ || _.nodeName !== "TR")); )
      w(_, "hover-row hover-fixed-row"), m--;
  };
  return { handleDoubleClick: s, handleClick: i, handleContextMenu: r, handleMouseEnter: a, handleMouseLeave: d, handleCellMouseEnter: (m, y, w) => {
    var _, T, E;
    const u = t, p = mt(m), h = (_ = u == null ? void 0 : u.vnode.el) == null ? void 0 : _.dataset.prefix;
    let g;
    if (p) {
      g = el({ columns: e.store.states.columns.value }, p, h), p.rowSpan > 1 && f(p.rowSpan, m, ft);
      const M = u.hoverState = { cell: p, column: g, row: y };
      u == null ? void 0 : u.emit("cell-mouse-enter", M.row, M.column, M.cell, m);
    }
    if (!w)
      return;
    const S = m.target.querySelector(".cell");
    if (!(Ue(S, `${h}-tooltip`) && S.childNodes.length))
      return;
    const C = document.createRange();
    C.setStart(S, 0), C.setEnd(S, S.childNodes.length);
    const { width: P, height: z } = C.getBoundingClientRect(), { width: k, height: A } = S.getBoundingClientRect(), { top: W, left: B, right: Y, bottom: X } = c(S), F = B + Y, x = W + X;
    bt(P + F, k) || bt(z + x, A) || bt(S.scrollWidth, k) ? mo(w, p.innerText || p.textContent, y, g, p, u) : ((T = me) == null ? void 0 : T.trigger) === p && ((E = me) == null || E());
  }, handleCellMouseLeave: (m) => {
    const y = mt(m);
    if (!y)
      return;
    y.rowSpan > 1 && f(y.rowSpan, m, Qe);
    const w = t == null ? void 0 : t.hoverState;
    t == null ? void 0 : t.emit("cell-mouse-leave", w == null ? void 0 : w.row, w == null ? void 0 : w.column, w == null ? void 0 : w.cell, m);
  }, tooltipContent: l, tooltipTrigger: n };
}
function Wo(e) {
  const t = Ne(Pe), l = re("table");
  return { getRowStyle: (d, c) => {
    const f = t == null ? void 0 : t.props.rowStyle;
    return xe(f) ? f.call(null, { row: d, rowIndex: c }) : f || null;
  }, getRowClass: (d, c) => {
    const f = [l.e("row")];
    (t == null ? void 0 : t.props.highlightCurrentRow) && d === e.store.states.currentRow.value && f.push("current-row"), e.stripe && c % 2 === 1 && f.push(l.em("row", "striped"));
    const v = t == null ? void 0 : t.props.rowClassName;
    return Ee(v) ? f.push(v) : xe(v) && f.push(v.call(null, { row: d, rowIndex: c })), f;
  }, getCellStyle: (d, c, f, v) => {
    const b = t == null ? void 0 : t.props.cellStyle;
    let m = b ?? {};
    xe(b) && (m = b.call(null, { rowIndex: d, columnIndex: c, row: f, column: v }));
    const y = At(c, e == null ? void 0 : e.fixed, e.store);
    return De(y, "left"), De(y, "right"), Object.assign({}, m, y);
  }, getCellClass: (d, c, f, v, b) => {
    const m = Ht(l.b(), c, e == null ? void 0 : e.fixed, e.store, void 0, b), y = [v.id, v.align, v.className, ...m], w = t == null ? void 0 : t.props.cellClassName;
    return Ee(w) ? y.push(w) : xe(w) && y.push(w.call(null, { rowIndex: d, columnIndex: c, row: f, column: v })), y.push(l.e("cell")), y.filter((_) => !!_).join(" ");
  }, getSpan: (d, c, f, v) => {
    let b = 1, m = 1;
    const y = t == null ? void 0 : t.props.spanMethod;
    if (xe(y)) {
      const w = y({ row: d, column: c, rowIndex: f, columnIndex: v });
      de(w) ? (b = w[0], m = w[1]) : ct(w) && (b = w.rowspan, m = w.colspan);
    }
    return { rowspan: b, colspan: m };
  }, getColspanRealWidth: (d, c, f) => {
    if (c < 1)
      return d[f].realWidth;
    const v = d.map(({ realWidth: b, width: m }) => b || m).slice(f, f + c);
    return Number(v.reduce((b, m) => Number(b) + Number(m), -1));
  } };
}
const $o = Z({ name: "TableTdWrapper" }), Ho = Z({ ...$o, props: { colspan: { type: Number, default: 1 }, rowspan: { type: Number, default: 1 } }, setup(e) {
  return (t, l) => (O(), U("td", { colspan: e.colspan, rowspan: e.rowspan }, [Le(t.$slots, "default")], 8, ["colspan", "rowspan"]));
} });
var Ao = ze(Ho, [["__file", "td-wrapper.vue"]]);
function Bo(e) {
  const t = Ne(Pe), l = re("table"), { handleDoubleClick: n, handleClick: o, handleContextMenu: s, handleMouseEnter: i, handleMouseLeave: r, handleCellMouseEnter: a, handleCellMouseLeave: d, tooltipContent: c, tooltipTrigger: f } = Mo(e), { getRowStyle: v, getRowClass: b, getCellStyle: m, getCellClass: y, getSpan: w, getColspanRealWidth: _ } = Wo(e), T = $(() => e.store.states.columns.value.findIndex(({ type: g }) => g === "default")), E = (g, S) => {
    const C = t.props.rowKey;
    return C ? ue(g, C) : S;
  }, u = (g, S, C, P = false) => {
    const { tooltipEffect: z, tooltipOptions: k, store: A } = e, { indent: W, columns: B } = A.states, Y = b(g, S);
    let X = true;
    return C && (Y.push(l.em("row", `level-${C.level}`)), X = C.display), H("tr", { style: [X ? null : { display: "none" }, v(g, S)], class: Y, key: E(g, S), onDblclick: (x) => n(x, g), onClick: (x) => o(x, g), onContextmenu: (x) => s(x, g), onMouseenter: () => i(S), onMouseleave: r }, B.value.map((x, M) => {
      const { rowspan: I, colspan: J } = w(g, x, S, M);
      if (!I || !J)
        return null;
      const ae = Object.assign({}, x);
      ae.realWidth = _(B.value, J, M);
      const fe = { store: e.store, _self: e.context || t, column: ae, row: g, $index: S, cellIndex: M, expanded: P };
      M === T.value && C && (fe.treeNode = { indent: C.level * W.value, level: C.level }, Oe(C.expanded) && (fe.treeNode.expanded = C.expanded, "loading" in C && (fe.treeNode.loading = C.loading), "noLazyChildren" in C && (fe.treeNode.noLazyChildren = C.noLazyChildren)));
      const ge = `${E(g, S)},${M}`, we = ae.columnKey || ae.rawColumnKey || "", se = x.showOverflowTooltip && Pl({ effect: z }, k, x.showOverflowTooltip);
      return H(Ao, { style: m(S, M, g, x), class: y(S, M, g, x, J - 1), key: `${we}${ge}`, rowspan: I, colspan: J, onMouseenter: (ye) => a(ye, g, se), onMouseleave: d }, { default: () => p(M, x, fe) });
    }));
  }, p = (g, S, C) => S.renderCell(C);
  return { wrappedRowRender: (g, S) => {
    const C = e.store, { isRowExpanded: P, assertRowKey: z } = C, { treeData: k, lazyTreeNodeMap: A, childrenColumnName: W, rowKey: B } = C.states, Y = C.states.columns.value;
    if (Y.some(({ type: F }) => F === "expand")) {
      const F = P(g), x = u(g, S, void 0, F), M = t.renderExpanded;
      if (!M)
        return console.error("[Element Error]renderExpanded is required."), x;
      const I = [[x]];
      return (t.props.preserveExpandedContent || F) && I[0].push(H("tr", { key: `expanded-row__${x.key}`, style: { display: F ? "" : "none" } }, [H("td", { colspan: Y.length, class: `${l.e("cell")} ${l.e("expanded-cell")}` }, [M({ row: g, $index: S, store: C, expanded: F })])])), I;
    } else if (Object.keys(k.value).length) {
      z();
      const F = ue(g, B.value);
      let x = k.value[F], M = null;
      x && (M = { expanded: x.expanded, level: x.level, display: true }, Oe(x.lazy) && (Oe(x.loaded) && x.loaded && (M.noLazyChildren = !(x.children && x.children.length)), M.loading = x.loading));
      const I = [u(g, S, M)];
      if (x) {
        let J = 0;
        const ae = (ge, we) => {
          ge && ge.length && we && ge.forEach((se) => {
            const ye = { display: we.display && we.expanded, level: we.level + 1, expanded: false, noLazyChildren: false, loading: false }, Ce = ue(se, B.value);
            if (ot(Ce))
              throw new Error("For nested data item, row-key is required.");
            if (x = { ...k.value[Ce] }, x && (ye.expanded = x.expanded, x.level = x.level || ye.level, x.display = !!(x.expanded && ye.display), Oe(x.lazy) && (Oe(x.loaded) && x.loaded && (ye.noLazyChildren = !(x.children && x.children.length)), ye.loading = x.loading)), J++, I.push(u(se, S + J, ye)), x) {
              const et = A.value[Ce] || se[W.value];
              ae(et, x);
            }
          });
        };
        x.display = true;
        const fe = A.value[F] || g[W.value];
        ae(fe, x);
      }
      return I;
    } else
      return u(g, S, void 0);
  }, tooltipContent: c, tooltipTrigger: f };
}
const Io = { store: { required: true, type: Object }, stripe: Boolean, tooltipEffect: String, tooltipOptions: { type: Object }, context: { default: () => ({}), type: Object }, rowClassName: [String, Function], rowStyle: [Object, Function], fixed: { type: String, default: "" }, highlight: Boolean };
var Ko = Z({ name: "ElTableBody", props: Io, setup(e) {
  const t = ce(), l = Ne(Pe), n = re("table"), { wrappedRowRender: o, tooltipContent: s, tooltipTrigger: i } = Bo(e), { onColumnsChange: r, onScrollableChange: a } = Bt(l), d = [];
  return oe(e.store.states.hoverRow, (c, f) => {
    var v;
    const b = t == null ? void 0 : t.vnode.el, m = Array.from((b == null ? void 0 : b.children) || []).filter((_) => _ == null ? void 0 : _.classList.contains(`${n.e("row")}`));
    let y = c;
    const w = (v = m[y]) == null ? void 0 : v.childNodes;
    if (w == null ? void 0 : w.length) {
      let _ = 0;
      Array.from(w).reduce((E, u, p) => {
        var h, g;
        return ((h = w[p]) == null ? void 0 : h.colSpan) > 1 && (_ = (g = w[p]) == null ? void 0 : g.colSpan), u.nodeName !== "TD" && _ === 0 && E.push(p), _ > 0 && _--, E;
      }, []).forEach((E) => {
        var u;
        for (y = c; y > 0; ) {
          const p = (u = m[y - 1]) == null ? void 0 : u.childNodes;
          if (p[E] && p[E].nodeName === "TD" && p[E].rowSpan > 1) {
            ft(p[E], "hover-cell"), d.push(p[E]);
            break;
          }
          y--;
        }
      });
    } else
      d.forEach((_) => Qe(_, "hover-cell")), d.length = 0;
    !e.store.states.isComplex.value || !Ke || za(() => {
      const _ = m[f], T = m[c];
      _ && !_.classList.contains("hover-fixed-row") && Qe(_, "hover-row"), T && ft(T, "hover-row");
    });
  }), vt(() => {
    var c;
    (c = me) == null || c();
  }), { ns: n, onColumnsChange: r, onScrollableChange: a, wrappedRowRender: o, tooltipContent: s, tooltipTrigger: i };
}, render() {
  const { wrappedRowRender: e, store: t } = this, l = t.states.data.value || [];
  return H("tbody", { tabIndex: -1 }, [l.reduce((n, o) => n.concat(e(o, n.length)), [])]);
} });
function Do() {
  var e;
  const t = Ne(Pe), l = t == null ? void 0 : t.store, n = $(() => {
    var a;
    return (a = l == null ? void 0 : l.states.fixedLeafColumnsLength.value) != null ? a : 0;
  }), o = $(() => {
    var a;
    return (a = l == null ? void 0 : l.states.rightFixedColumns.value.length) != null ? a : 0;
  }), s = $(() => {
    var a;
    return (a = l == null ? void 0 : l.states.columns.value.length) != null ? a : 0;
  }), i = $(() => {
    var a;
    return (a = l == null ? void 0 : l.states.fixedColumns.value.length) != null ? a : 0;
  }), r = $(() => {
    var a;
    return (a = l == null ? void 0 : l.states.rightFixedColumns.value.length) != null ? a : 0;
  });
  return { leftFixedLeafCount: n, rightFixedLeafCount: o, columnsCount: s, leftFixedCount: i, rightFixedCount: r, columns: (e = l == null ? void 0 : l.states.columns) != null ? e : [] };
}
function Vo(e) {
  const { columns: t } = Do(), l = re("table");
  return { getCellClasses: (s, i) => {
    const r = s[i], a = [l.e("cell"), r.id, r.align, r.labelClassName, ...Ht(l.b(), i, r.fixed, e.store)];
    return r.className && a.push(r.className), r.children || a.push(l.is("leaf")), a;
  }, getCellStyles: (s, i) => {
    const r = At(i, s.fixed, e.store);
    return De(r, "left"), De(r, "right"), r;
  }, columns: t };
}
var jo = Z({ name: "ElTableFooter", props: { fixed: { type: String, default: "" }, store: { required: true, type: Object }, summaryMethod: Function, sumText: String, border: Boolean, defaultSort: { type: Object, default: () => ({ prop: "", order: "" }) } }, setup(e) {
  const t = Ne(Pe), l = re("table"), { getCellClasses: n, getCellStyles: o, columns: s } = Vo(e), { onScrollableChange: i, onColumnsChange: r } = Bt(t);
  return { ns: l, onScrollableChange: i, onColumnsChange: r, getCellClasses: n, getCellStyles: o, columns: s };
}, render() {
  const { columns: e, getCellStyles: t, getCellClasses: l, summaryMethod: n, sumText: o } = this, s = this.store.states.data.value;
  let i = [];
  return n ? i = n({ columns: e, data: s }) : e.forEach((r, a) => {
    if (a === 0) {
      i[a] = o;
      return;
    }
    const d = s.map((b) => Number(b[r.property])), c = [];
    let f = true;
    d.forEach((b) => {
      if (!Number.isNaN(+b)) {
        f = false;
        const m = `${b}`.split(".")[1];
        c.push(m ? m.length : 0);
      }
    });
    const v = Math.max.apply(null, c);
    f ? i[a] = "" : i[a] = d.reduce((b, m) => {
      const y = Number(m);
      return Number.isNaN(+y) ? b : Number.parseFloat((b + m).toFixed(Math.min(v, 20)));
    }, 0);
  }), H(H("tfoot", [H("tr", {}, [...e.map((r, a) => H("td", { key: a, colspan: r.colSpan, rowspan: r.rowSpan, class: l(e, a), style: t(r, a) }, [H("div", { class: ["cell", r.labelClassName] }, [i[a]])]))])]));
} });
function qo(e) {
  return { setCurrentRow: (f) => {
    e.commit("setCurrentRow", f);
  }, getSelectionRows: () => e.getSelectionRows(), toggleRowSelection: (f, v, b = true) => {
    e.toggleRowSelection(f, v, false, b), e.updateAllSelected();
  }, clearSelection: () => {
    e.clearSelection();
  }, clearFilter: (f) => {
    e.clearFilter(f);
  }, toggleAllSelection: () => {
    e.commit("toggleAllSelection");
  }, toggleRowExpansion: (f, v) => {
    e.toggleRowExpansionAdapter(f, v);
  }, clearSort: () => {
    e.clearSort();
  }, sort: (f, v) => {
    e.commit("sort", { prop: f, order: v });
  }, updateKeyChildren: (f, v) => {
    e.updateKeyChildren(f, v);
  } };
}
function Uo(e, t, l, n) {
  const o = N(false), s = N(null), i = N(false), r = (F) => {
    i.value = F;
  }, a = N({ width: null, height: null, headerHeight: null }), d = N(false), c = { display: "inline-block", verticalAlign: "middle" }, f = N(), v = N(0), b = N(0), m = N(0), y = N(0), w = N(0);
  Ae(() => {
    t.setHeight(e.height);
  }), Ae(() => {
    t.setMaxHeight(e.maxHeight);
  }), oe(() => [e.currentRowKey, l.states.rowKey], ([F, x]) => {
    !R(x) || !R(F) || l.setCurrentRowKey(`${F}`);
  }, { immediate: true }), oe(() => e.data, (F) => {
    n.store.commit("setData", F);
  }, { immediate: true, deep: true }), Ae(() => {
    e.expandRowKeys && l.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const _ = () => {
    n.store.commit("setHoverRow", null), n.hoverState && (n.hoverState = null);
  }, T = (F, x) => {
    const { pixelX: M, pixelY: I } = x;
    Math.abs(M) >= Math.abs(I) && (n.refs.bodyWrapper.scrollLeft += x.pixelX / 5);
  }, E = $(() => e.height || e.maxHeight || l.states.fixedColumns.value.length > 0 || l.states.rightFixedColumns.value.length > 0), u = $(() => ({ width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : "" })), p = () => {
    E.value && t.updateElsHeight(), t.updateColumnsWidth(), !(typeof window > "u") && requestAnimationFrame(C);
  };
  je(async () => {
    await Fe(), l.updateColumns(), P(), requestAnimationFrame(p);
    const F = n.vnode.el, x = n.refs.headerWrapper;
    e.flexible && F && F.parentElement && (F.parentElement.style.minWidth = "0"), a.value = { width: f.value = F.offsetWidth, height: F.offsetHeight, headerHeight: e.showHeader && x ? x.offsetHeight : null }, l.states.columns.value.forEach((M) => {
      M.filteredValue && M.filteredValue.length && n.store.commit("filterChange", { column: M, values: M.filteredValue, silent: true });
    }), n.$ready = true;
  });
  const h = (F, x) => {
    if (!F)
      return;
    const M = Array.from(F.classList).filter((I) => !I.startsWith("is-scrolling-"));
    M.push(t.scrollX.value ? x : "is-scrolling-none"), F.className = M.join(" ");
  }, g = (F) => {
    const { tableWrapper: x } = n.refs;
    h(x, F);
  }, S = (F) => {
    const { tableWrapper: x } = n.refs;
    return !!(x && x.classList.contains(F));
  }, C = function() {
    if (!n.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const ge = "is-scrolling-none";
      S(ge) || g(ge);
      return;
    }
    const F = n.refs.scrollBarRef.wrapRef;
    if (!F)
      return;
    const { scrollLeft: x, offsetWidth: M, scrollWidth: I } = F, { headerWrapper: J, footerWrapper: ae } = n.refs;
    J && (J.scrollLeft = x), ae && (ae.scrollLeft = x);
    const fe = I - M - 1;
    x >= fe ? g("is-scrolling-right") : g(x === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, P = () => {
    n.refs.scrollBarRef && (n.refs.scrollBarRef.wrapRef && Ut(n.refs.scrollBarRef.wrapRef, "scroll", C, { passive: true }), e.fit ? Yt(n.vnode.el, z) : Ut(window, "resize", z), Yt(n.refs.bodyWrapper, () => {
      var F, x;
      z(), (x = (F = n.refs) == null ? void 0 : F.scrollBarRef) == null || x.update();
    }));
  }, z = () => {
    var F, x, M, I;
    const J = n.vnode.el;
    if (!n.$ready || !J)
      return;
    let ae = false;
    const { width: fe, height: ge, headerHeight: we } = a.value, se = f.value = J.offsetWidth;
    fe !== se && (ae = true);
    const ye = J.offsetHeight;
    (e.height || E.value) && ge !== ye && (ae = true);
    const Ce = e.tableLayout === "fixed" ? n.refs.headerWrapper : (F = n.refs.tableHeaderRef) == null ? void 0 : F.$el;
    e.showHeader && (Ce == null ? void 0 : Ce.offsetHeight) !== we && (ae = true), v.value = ((x = n.refs.tableWrapper) == null ? void 0 : x.scrollHeight) || 0, m.value = (Ce == null ? void 0 : Ce.scrollHeight) || 0, y.value = ((M = n.refs.footerWrapper) == null ? void 0 : M.offsetHeight) || 0, w.value = ((I = n.refs.appendWrapper) == null ? void 0 : I.offsetHeight) || 0, b.value = v.value - m.value - y.value - w.value, ae && (a.value = { width: se, height: ye, headerHeight: e.showHeader && (Ce == null ? void 0 : Ce.offsetHeight) || 0 }, p());
  }, k = Un(), A = $(() => {
    const { bodyWidth: F, scrollY: x, gutterWidth: M } = t;
    return F.value ? `${F.value - (x.value ? M : 0)}px` : "";
  }), W = $(() => e.maxHeight ? "fixed" : e.tableLayout), B = $(() => {
    if (e.data && e.data.length)
      return null;
    let F = "100%";
    e.height && b.value && (F = `${b.value}px`);
    const x = f.value;
    return { width: x ? `${x}px` : "", height: F };
  }), Y = $(() => e.height ? { height: "100%" } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? { maxHeight: `calc(${e.maxHeight} - ${m.value + y.value}px)` } : { maxHeight: `${e.maxHeight - m.value - y.value}px` } : {});
  return { isHidden: o, renderExpanded: s, setDragVisible: r, isGroup: d, handleMouseLeave: _, handleHeaderFooterMousewheel: T, tableSize: k, emptyBlockStyle: B, handleFixedMousewheel: (F, x) => {
    const M = n.refs.bodyWrapper;
    if (Math.abs(x.spinY) > 0) {
      const I = M.scrollTop;
      x.pixelY < 0 && I !== 0 && F.preventDefault(), x.pixelY > 0 && M.scrollHeight - M.clientHeight > I && F.preventDefault(), M.scrollTop += Math.ceil(x.pixelY / 5);
    } else
      M.scrollLeft += Math.ceil(x.pixelX / 5);
  }, resizeProxyVisible: i, bodyWidth: A, resizeState: a, doLayout: p, tableBodyStyles: u, tableLayout: W, scrollbarViewStyle: c, scrollbarStyle: Y };
}
function Yo(e) {
  const t = N(), l = () => {
    const o = e.vnode.el.querySelector(".hidden-columns"), s = { childList: true, subtree: true }, i = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      i.forEach((r) => r());
    }), t.value.observe(o, s);
  };
  je(() => {
    l();
  }), vt(() => {
    var n;
    (n = t.value) == null || n.disconnect();
  });
}
var Xo = { data: { type: Array, default: () => [] }, size: gl, width: [String, Number], height: [String, Number], maxHeight: [String, Number], fit: { type: Boolean, default: true }, stripe: Boolean, border: Boolean, rowKey: [String, Function], showHeader: { type: Boolean, default: true }, showSummary: Boolean, sumText: String, summaryMethod: Function, rowClassName: [String, Function], rowStyle: [Object, Function], cellClassName: [String, Function], cellStyle: [Object, Function], headerRowClassName: [String, Function], headerRowStyle: [Object, Function], headerCellClassName: [String, Function], headerCellStyle: [Object, Function], highlightCurrentRow: Boolean, currentRowKey: [String, Number], emptyText: String, expandRowKeys: Array, defaultExpandAll: Boolean, defaultSort: Object, tooltipEffect: String, tooltipOptions: Object, spanMethod: Function, selectOnIndeterminate: { type: Boolean, default: true }, indent: { type: Number, default: 16 }, treeProps: { type: Object, default: () => ({ hasChildren: "hasChildren", children: "children", checkStrictly: false }) }, lazy: Boolean, load: Function, style: { type: Object, default: () => ({}) }, className: { type: String, default: "" }, tableLayout: { type: String, default: "fixed" }, scrollbarAlwaysOn: Boolean, flexible: Boolean, showOverflowTooltip: [Boolean, Object], tooltipFormatter: Function, appendFilterPanelTo: String, scrollbarTabindex: { type: [Number, String], default: void 0 }, allowDragLastColumn: { type: Boolean, default: true }, preserveExpandedContent: { type: Boolean, default: false } };
function Wl(e) {
  const t = e.tableLayout === "auto";
  let l = e.columns || [];
  t && l.every(({ width: o }) => ke(o)) && (l = []);
  const n = (o) => {
    const s = { key: `${e.tableLayout}_${o.id}`, style: {}, name: void 0 };
    return t ? s.style = { width: `${o.width}px` } : s.name = o.id, s;
  };
  return H("colgroup", {}, l.map((o) => H("col", n(o))));
}
Wl.props = ["columns", "tableLayout"];
const Go = () => {
  const e = N(), t = (s, i) => {
    const r = e.value;
    r && r.scrollTo(s, i);
  }, l = (s, i) => {
    const r = e.value;
    r && he(i) && ["Top", "Left"].includes(s) && r[`setScroll${s}`](i);
  };
  return { scrollBarRef: e, scrollTo: t, setScrollTop: (s) => l("Top", s), setScrollLeft: (s) => l("Left", s) };
};
var nl = false, Me, Nt, Pt, rt, it, $l, ut, _t, Rt, Ft, Hl, Lt, kt, Al, Bl;
function ve() {
  if (!nl) {
    nl = true;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), l = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Lt = /\b(iPhone|iP[ao]d)/.exec(e), kt = /\b(iP[ao]d)/.exec(e), Ft = /Android/i.exec(e), Al = /FBAN\/\w+;/i.exec(e), Bl = /Mobile/i.exec(e), Hl = !!/Win64/.exec(e), t) {
      Me = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, Me && document && document.documentMode && (Me = document.documentMode);
      var n = /(?:Trident\/(\d+.\d+))/.exec(e);
      $l = n ? parseFloat(n[1]) + 4 : Me, Nt = t[2] ? parseFloat(t[2]) : NaN, Pt = t[3] ? parseFloat(t[3]) : NaN, rt = t[4] ? parseFloat(t[4]) : NaN, rt ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), it = t && t[1] ? parseFloat(t[1]) : NaN) : it = NaN;
    } else
      Me = Nt = Pt = it = rt = NaN;
    if (l) {
      if (l[1]) {
        var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        ut = o ? parseFloat(o[1].replace("_", ".")) : true;
      } else
        ut = false;
      _t = !!l[2], Rt = !!l[3];
    } else
      ut = _t = Rt = false;
  }
}
var Tt = { ie: function() {
  return ve() || Me;
}, ieCompatibilityMode: function() {
  return ve() || $l > Me;
}, ie64: function() {
  return Tt.ie() && Hl;
}, firefox: function() {
  return ve() || Nt;
}, opera: function() {
  return ve() || Pt;
}, webkit: function() {
  return ve() || rt;
}, safari: function() {
  return Tt.webkit();
}, chrome: function() {
  return ve() || it;
}, windows: function() {
  return ve() || _t;
}, osx: function() {
  return ve() || ut;
}, linux: function() {
  return ve() || Rt;
}, iphone: function() {
  return ve() || Lt;
}, mobile: function() {
  return ve() || Lt || kt || Ft || Bl;
}, nativeApp: function() {
  return ve() || Al;
}, android: function() {
  return ve() || Ft;
}, ipad: function() {
  return ve() || kt;
} }, Jo = Tt, nt = !!(typeof window < "u" && window.document && window.document.createElement), Qo = { canUseDOM: nt, canUseWorkers: typeof Worker < "u", canUseEventListeners: nt && !!(window.addEventListener || window.attachEvent), canUseViewport: nt && !!window.screen, isInWorker: !nt }, Il = Qo, Kl;
Il.canUseDOM && (Kl = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
function Zo(e, t) {
  if (!Il.canUseDOM || t && !("addEventListener" in document))
    return false;
  var l = "on" + e, n = l in document;
  if (!n) {
    var o = document.createElement("div");
    o.setAttribute(l, "return;"), n = typeof o[l] == "function";
  }
  return !n && Kl && e === "wheel" && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n;
}
var es = Zo, al = 10, ol = 40, sl = 800;
function Dl(e) {
  var t = 0, l = 0, n = 0, o = 0;
  return "detail" in e && (l = e.detail), "wheelDelta" in e && (l = -e.wheelDelta / 120), "wheelDeltaY" in e && (l = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = l, l = 0), n = t * al, o = l * al, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || o) && e.deltaMode && (e.deltaMode == 1 ? (n *= ol, o *= ol) : (n *= sl, o *= sl)), n && !t && (t = n < 1 ? -1 : 1), o && !l && (l = o < 1 ? -1 : 1), { spinX: t, spinY: l, pixelX: n, pixelY: o };
}
Dl.getEventType = function() {
  return Jo.firefox() ? "DOMMouseScroll" : es("wheel") ? "wheel" : "mousewheel";
};
var ts = Dl;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const ls = function(e, t) {
  if (e && e.addEventListener) {
    const l = function(n) {
      const o = ts(n);
      t && Reflect.apply(t, this, [n, o]);
    };
    e.addEventListener("wheel", l, { passive: true });
  }
}, ns = { beforeMount(e, t) {
  ls(e, t.value);
} };
let as = 1;
const os = Z({ name: "ElTable", directives: { Mousewheel: ns }, components: { TableHeader: Oo, TableBody: Ko, TableFooter: jo, ElScrollbar: Sl, hColgroup: Wl }, props: Xo, emits: ["select", "select-all", "selection-change", "cell-mouse-enter", "cell-mouse-leave", "cell-contextmenu", "cell-click", "cell-dblclick", "row-click", "row-contextmenu", "row-dblclick", "header-click", "header-contextmenu", "sort-change", "filter-change", "current-change", "header-dragend", "expand-change", "scroll"], setup(e) {
  const { t } = Te(), l = re("table"), n = ce();
  vl(Pe, n);
  const o = Eo(n, e);
  n.store = o;
  const s = new Po({ store: n.store, table: n, fit: e.fit, showHeader: e.showHeader });
  n.layout = s;
  const i = $(() => (o.states.data.value || []).length === 0), { setCurrentRow: r, getSelectionRows: a, toggleRowSelection: d, clearSelection: c, clearFilter: f, toggleAllSelection: v, toggleRowExpansion: b, clearSort: m, sort: y, updateKeyChildren: w } = qo(o), { isHidden: _, renderExpanded: T, setDragVisible: E, isGroup: u, handleMouseLeave: p, handleHeaderFooterMousewheel: h, tableSize: g, emptyBlockStyle: S, handleFixedMousewheel: C, resizeProxyVisible: P, bodyWidth: z, resizeState: k, doLayout: A, tableBodyStyles: W, tableLayout: B, scrollbarViewStyle: Y, scrollbarStyle: X } = Uo(e, s, o, n), { scrollBarRef: F, scrollTo: x, setScrollLeft: M, setScrollTop: I } = Go(), J = pt(A, 50), ae = `${l.namespace.value}-table_${as++}`;
  n.tableId = ae, n.state = { isGroup: u, resizeState: k, doLayout: A, debouncedUpdateLayout: J };
  const fe = $(() => {
    var se;
    return (se = e.sumText) != null ? se : t("el.table.sumText");
  }), ge = $(() => {
    var se;
    return (se = e.emptyText) != null ? se : t("el.table.emptyText");
  }), we = $(() => Ml(o.states.originColumns.value)[0]);
  return Yo(n), wl(() => {
    J.cancel();
  }), { ns: l, layout: s, store: o, columns: we, handleHeaderFooterMousewheel: h, handleMouseLeave: p, tableId: ae, tableSize: g, isHidden: _, isEmpty: i, renderExpanded: T, resizeProxyVisible: P, resizeState: k, isGroup: u, bodyWidth: z, tableBodyStyles: W, emptyBlockStyle: S, debouncedUpdateLayout: J, handleFixedMousewheel: C, setCurrentRow: r, getSelectionRows: a, toggleRowSelection: d, clearSelection: c, clearFilter: f, toggleAllSelection: v, toggleRowExpansion: b, clearSort: m, doLayout: A, sort: y, updateKeyChildren: w, t, setDragVisible: E, context: n, computedSumText: fe, computedEmptyText: ge, tableLayout: B, scrollbarViewStyle: Y, scrollbarStyle: X, scrollBarRef: F, scrollTo: x, setScrollLeft: M, setScrollTop: I, allowDragLastColumn: e.allowDragLastColumn };
} });
function ss(e, t, l, n, o, s) {
  const i = Se("hColgroup"), r = Se("table-header"), a = Se("table-body"), d = Se("table-footer"), c = Se("el-scrollbar"), f = Mt("mousewheel");
  return O(), U("div", { ref: "tableWrapper", class: j([{ [e.ns.m("fit")]: e.fit, [e.ns.m("striped")]: e.stripe, [e.ns.m("border")]: e.border || e.isGroup, [e.ns.m("hidden")]: e.isHidden, [e.ns.m("group")]: e.isGroup, [e.ns.m("fluid-height")]: e.maxHeight, [e.ns.m("scrollable-x")]: e.layout.scrollX.value, [e.ns.m("scrollable-y")]: e.layout.scrollY.value, [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value, [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100, "has-footer": e.showSummary }, e.ns.m(e.tableSize), e.className, e.ns.b(), e.ns.m(`layout-${e.tableLayout}`)]), style: qe(e.style), "data-prefix": e.ns.namespace.value, onMouseleave: e.handleMouseLeave }, [q("div", { class: j(e.ns.e("inner-wrapper")) }, [q("div", { ref: "hiddenColumns", class: "hidden-columns" }, [Le(e.$slots, "default")], 512), e.showHeader && e.tableLayout === "fixed" ? Be((O(), U("div", { key: 0, ref: "headerWrapper", class: j(e.ns.e("header-wrapper")) }, [q("table", { ref: "tableHeader", class: j(e.ns.e("header")), style: qe(e.tableBodyStyles), border: "0", cellpadding: "0", cellspacing: "0" }, [te(i, { columns: e.store.states.columns.value, "table-layout": e.tableLayout }, null, 8, ["columns", "table-layout"]), te(r, { ref: "tableHeaderRef", border: e.border, "default-sort": e.defaultSort, store: e.store, "append-filter-panel-to": e.appendFilterPanelTo, "allow-drag-last-column": e.allowDragLastColumn, onSetDragVisible: e.setDragVisible }, null, 8, ["border", "default-sort", "store", "append-filter-panel-to", "allow-drag-last-column", "onSetDragVisible"])], 6)], 2)), [[f, e.handleHeaderFooterMousewheel]]) : be("v-if", true), q("div", { ref: "bodyWrapper", class: j(e.ns.e("body-wrapper")) }, [te(c, { ref: "scrollBarRef", "view-style": e.scrollbarViewStyle, "wrap-style": e.scrollbarStyle, always: e.scrollbarAlwaysOn, tabindex: e.scrollbarTabindex, onScroll: (v) => e.$emit("scroll", v) }, { default: le(() => [q("table", { ref: "tableBody", class: j(e.ns.e("body")), cellspacing: "0", cellpadding: "0", border: "0", style: qe({ width: e.bodyWidth, tableLayout: e.tableLayout }) }, [te(i, { columns: e.store.states.columns.value, "table-layout": e.tableLayout }, null, 8, ["columns", "table-layout"]), e.showHeader && e.tableLayout === "auto" ? (O(), ne(r, { key: 0, ref: "tableHeaderRef", class: j(e.ns.e("body-header")), border: e.border, "default-sort": e.defaultSort, store: e.store, "append-filter-panel-to": e.appendFilterPanelTo, onSetDragVisible: e.setDragVisible }, null, 8, ["class", "border", "default-sort", "store", "append-filter-panel-to", "onSetDragVisible"])) : be("v-if", true), te(a, { context: e.context, highlight: e.highlightCurrentRow, "row-class-name": e.rowClassName, "tooltip-effect": e.tooltipEffect, "tooltip-options": e.tooltipOptions, "row-style": e.rowStyle, store: e.store, stripe: e.stripe }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]), e.showSummary && e.tableLayout === "auto" ? (O(), ne(d, { key: 1, class: j(e.ns.e("body-footer")), border: e.border, "default-sort": e.defaultSort, store: e.store, "sum-text": e.computedSumText, "summary-method": e.summaryMethod }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : be("v-if", true)], 6), e.isEmpty ? (O(), U("div", { key: 0, ref: "emptyBlock", style: qe(e.emptyBlockStyle), class: j(e.ns.e("empty-block")) }, [q("span", { class: j(e.ns.e("empty-text")) }, [Le(e.$slots, "empty", {}, () => [Ye(ie(e.computedEmptyText), 1)])], 2)], 6)) : be("v-if", true), e.$slots.append ? (O(), U("div", { key: 1, ref: "appendWrapper", class: j(e.ns.e("append-wrapper")) }, [Le(e.$slots, "append")], 2)) : be("v-if", true)]), _: 3 }, 8, ["view-style", "wrap-style", "always", "tabindex", "onScroll"])], 2), e.showSummary && e.tableLayout === "fixed" ? Be((O(), U("div", { key: 1, ref: "footerWrapper", class: j(e.ns.e("footer-wrapper")) }, [q("table", { class: j(e.ns.e("footer")), cellspacing: "0", cellpadding: "0", border: "0", style: qe(e.tableBodyStyles) }, [te(i, { columns: e.store.states.columns.value, "table-layout": e.tableLayout }, null, 8, ["columns", "table-layout"]), te(d, { border: e.border, "default-sort": e.defaultSort, store: e.store, "sum-text": e.computedSumText, "summary-method": e.summaryMethod }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])], 6)], 2)), [[Xt, !e.isEmpty], [f, e.handleHeaderFooterMousewheel]]) : be("v-if", true), e.border || e.isGroup ? (O(), U("div", { key: 2, class: j(e.ns.e("border-left-patch")) }, null, 2)) : be("v-if", true)], 2), Be(q("div", { ref: "resizeProxy", class: j(e.ns.e("column-resize-proxy")) }, null, 2), [[Xt, e.resizeProxyVisible]])], 46, ["data-prefix", "onMouseleave"]);
}
var rs = ze(os, [["render", ss], ["__file", "table.vue"]]);
const is = { selection: "table-column--selection", expand: "table__expand-column" }, us = { default: { order: "" }, selection: { width: 48, minWidth: 48, realWidth: 48, order: "" }, expand: { width: 48, minWidth: 48, realWidth: 48, order: "" }, index: { width: 48, minWidth: 48, realWidth: 48, order: "" } }, ds = (e) => is[e] || "", cs = { selection: { renderHeader({ store: e, column: t }) {
  function l() {
    return e.states.data.value && e.states.data.value.length === 0;
  }
  return H($e, { disabled: l(), size: e.states.tableSize.value, indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value, "onUpdate:modelValue": e.toggleAllSelection, modelValue: e.states.isAllSelected.value, ariaLabel: t.label });
}, renderCell({ row: e, column: t, store: l, $index: n }) {
  return H($e, { disabled: t.selectable ? !t.selectable.call(null, e, n) : false, size: l.states.tableSize.value, onChange: () => {
    l.commit("rowSelectedChanged", e);
  }, onClick: (o) => o.stopPropagation(), modelValue: l.isSelected(e), ariaLabel: t.label });
}, sortable: false, resizable: false }, index: { renderHeader({ column: e }) {
  return e.label || "#";
}, renderCell({ column: e, $index: t }) {
  let l = t + 1;
  const n = e.index;
  return he(n) ? l = t + n : xe(n) && (l = n(t)), H("div", {}, [l]);
}, sortable: false }, expand: { renderHeader({ column: e }) {
  return e.label || "";
}, renderCell({ column: e, row: t, store: l, expanded: n }) {
  const { ns: o } = l, s = [o.e("expand-icon")];
  return !e.renderExpand && n && s.push(o.em("expand-icon", "expanded")), H("div", { class: s, onClick: function(r) {
    r.stopPropagation(), l.toggleRowExpansion(t);
  } }, { default: () => e.renderExpand ? [e.renderExpand({ expanded: n })] : [H(Ve, null, { default: () => [H(Ot)] })] });
}, sortable: false, resizable: false } };
function fs({ row: e, column: t, $index: l }) {
  var n;
  const o = t.property, s = o && yl(e, o).value;
  return t && t.formatter ? t.formatter(e, t, s, l) : ((n = s == null ? void 0 : s.toString) == null ? void 0 : n.call(s)) || "";
}
function ps({ row: e, treeNode: t, store: l }, n = false) {
  const { ns: o } = l;
  if (!t)
    return n ? [H("span", { class: o.e("placeholder") })] : null;
  const s = [], i = function(r) {
    r.stopPropagation(), !t.loading && l.loadOrToggle(e);
  };
  if (t.indent && s.push(H("span", { class: o.e("indent"), style: { "padding-left": `${t.indent}px` } })), Oe(t.expanded) && !t.noLazyChildren) {
    const r = [o.e("expand-icon"), t.expanded ? o.em("expand-icon", "expanded") : ""];
    let a = Ot;
    t.loading && (a = Yn), s.push(H("div", { class: r, onClick: i }, { default: () => [H(Ve, { class: { [o.is("loading")]: t.loading } }, { default: () => [H(a)] })] }));
  } else
    s.push(H("span", { class: o.e("placeholder") }));
  return s;
}
function rl(e, t) {
  return e.reduce((l, n) => (l[n] = n, l), t);
}
function hs(e, t) {
  const l = ce();
  return { registerComplexWatchers: () => {
    const s = ["fixed"], i = { realWidth: "width", realMinWidth: "minWidth" }, r = rl(s, i);
    Object.keys(r).forEach((a) => {
      const d = i[a];
      Je(t, d) && oe(() => t[d], (c) => {
        let f = c;
        d === "width" && a === "realWidth" && (f = $t(c)), d === "minWidth" && a === "realMinWidth" && (f = Fl(c)), l.columnConfig.value[d] = f, l.columnConfig.value[a] = f;
        const v = d === "fixed";
        e.value.store.scheduleLayout(v);
      });
    });
  }, registerNormalWatchers: () => {
    const s = ["label", "filters", "filterMultiple", "filteredValue", "sortable", "index", "formatter", "className", "labelClassName", "filterClassName", "showOverflowTooltip", "tooltipFormatter"], i = { property: "prop", align: "realAlign", headerAlign: "realHeaderAlign" }, r = rl(s, i);
    Object.keys(r).forEach((a) => {
      const d = i[a];
      Je(t, d) && oe(() => t[d], (c) => {
        l.columnConfig.value[a] = c;
      });
    });
  } };
}
function gs(e, t, l) {
  const n = ce(), o = N(""), s = N(false), i = N(), r = N(), a = re("table");
  Ae(() => {
    i.value = e.align ? `is-${e.align}` : null, i.value;
  }), Ae(() => {
    r.value = e.headerAlign ? `is-${e.headerAlign}` : i.value, r.value;
  });
  const d = $(() => {
    let u = n.vnode.vParent || n.parent;
    for (; u && !u.tableId && !u.columnId; )
      u = u.vnode.vParent || u.parent;
    return u;
  }), c = $(() => {
    const { store: u } = n.parent;
    if (!u)
      return false;
    const { treeData: p } = u.states, h = p.value;
    return h && Object.keys(h).length > 0;
  }), f = N($t(e.width)), v = N(Fl(e.minWidth)), b = (u) => (f.value && (u.width = f.value), v.value && (u.minWidth = v.value), !f.value && v.value && (u.width = void 0), u.minWidth || (u.minWidth = 80), u.realWidth = Number(ke(u.width) ? u.minWidth : u.width), u), m = (u) => {
    const p = u.type, h = cs[p] || {};
    Object.keys(h).forEach((S) => {
      const C = h[S];
      S !== "className" && !ke(C) && (u[S] = C);
    });
    const g = ds(p);
    if (g) {
      const S = `${R(a.namespace)}-${g}`;
      u.className = u.className ? `${u.className} ${S}` : S;
    }
    return u;
  }, y = (u) => {
    de(u) ? u.forEach((h) => p(h)) : p(u);
    function p(h) {
      var g;
      ((g = h == null ? void 0 : h.type) == null ? void 0 : g.name) === "ElTableColumn" && (h.vParent = n);
    }
  };
  return { columnId: o, realAlign: i, isSubColumn: s, realHeaderAlign: r, columnOrTableParent: d, setColumnWidth: b, setColumnForcedProps: m, setColumnRenders: (u) => {
    e.renderHeader || u.type !== "selection" && (u.renderHeader = (h) => (n.columnConfig.value.label, Le(t, "header", h, () => [u.label]))), t["filter-icon"] && (u.renderFilterIcon = (h) => Le(t, "filter-icon", h)), t.expand && (u.renderExpand = (h) => Le(t, "expand", h));
    let p = u.renderCell;
    return u.type === "expand" ? (u.renderCell = (h) => H("div", { class: "cell" }, [p(h)]), l.value.renderExpanded = (h) => t.default ? t.default(h) : t.default) : (p = p || fs, u.renderCell = (h) => {
      let g = null;
      if (t.default) {
        const A = t.default(h);
        g = A.some((W) => W.type !== Xn) ? A : p(h);
      } else
        g = p(h);
      const { columns: S } = l.value.store.states, C = S.value.findIndex((A) => A.type === "default"), P = c.value && h.cellIndex === C, z = ps(h, P), k = { class: "cell", style: {} };
      return u.showOverflowTooltip && (k.class = `${k.class} ${R(a.namespace)}-tooltip`, k.style = { width: `${(h.column.realWidth || Number(h.column.width)) - 1}px` }), y(g), H("div", k, [z, g]);
    }), u;
  }, getPropsData: (...u) => u.reduce((p, h) => (de(h) && h.forEach((g) => {
    p[g] = e[g];
  }), p), {}), getColumnElIndex: (u, p) => Array.prototype.indexOf.call(u, p), updateColumnOrder: () => {
    l.value.store.commit("updateColumnOrder", n.columnConfig.value);
  } };
}
var vs = { type: { type: String, default: "default" }, label: String, className: String, labelClassName: String, property: String, prop: String, width: { type: [String, Number], default: "" }, minWidth: { type: [String, Number], default: "" }, renderHeader: Function, sortable: { type: [Boolean, String], default: false }, sortMethod: Function, sortBy: [String, Function, Array], resizable: { type: Boolean, default: true }, columnKey: String, align: String, headerAlign: String, showOverflowTooltip: { type: [Boolean, Object], default: void 0 }, tooltipFormatter: Function, fixed: [Boolean, String], formatter: Function, selectable: Function, reserveSelection: Boolean, filterMethod: Function, filteredValue: Array, filters: Array, filterPlacement: String, filterMultiple: { type: Boolean, default: true }, filterClassName: String, index: [Number, Function], sortOrders: { type: Array, default: () => ["ascending", "descending", null], validator: (e) => e.every((t) => ["ascending", "descending", null].includes(t)) } };
let ms = 1;
var Vl = Z({ name: "ElTableColumn", components: { ElCheckbox: $e }, props: vs, setup(e, { slots: t }) {
  const l = ce(), n = N({}), o = $(() => {
    let E = l.parent;
    for (; E && !E.tableId; )
      E = E.parent;
    return E;
  }), { registerNormalWatchers: s, registerComplexWatchers: i } = hs(o, e), { columnId: r, isSubColumn: a, realHeaderAlign: d, columnOrTableParent: c, setColumnWidth: f, setColumnForcedProps: v, setColumnRenders: b, getPropsData: m, getColumnElIndex: y, realAlign: w, updateColumnOrder: _ } = gs(e, t, o), T = c.value;
  r.value = `${T.tableId || T.columnId}_column_${ms++}`, Cl(() => {
    a.value = o.value !== T;
    const E = e.type || "default", u = e.sortable === "" ? true : e.sortable, p = E === "selection" ? false : ke(e.showOverflowTooltip) ? T.props.showOverflowTooltip : e.showOverflowTooltip, h = ke(e.tooltipFormatter) ? T.props.tooltipFormatter : e.tooltipFormatter, g = { ...us[E], id: r.value, type: E, property: e.prop || e.property, align: w, headerAlign: d, showOverflowTooltip: p, tooltipFormatter: h, filterable: e.filters || e.filterMethod, filteredValue: [], filterPlacement: "", filterClassName: "", isColumnGroup: false, isSubColumn: false, filterOpened: false, sortable: u, index: e.index, rawColumnKey: l.vnode.key };
    let k = m(["columnKey", "label", "className", "labelClassName", "type", "renderHeader", "formatter", "fixed", "resizable"], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], ["filterMethod", "filters", "filterMultiple", "filterOpened", "filteredValue", "filterPlacement", "filterClassName"]);
    k = fo(g, k), k = ho(b, f, v)(k), n.value = k, s(), i();
  }), je(() => {
    var E;
    const u = c.value, p = a.value ? u.vnode.el.children : (E = u.refs.hiddenColumns) == null ? void 0 : E.children, h = () => y(p || [], l.vnode.el);
    n.value.getColumnIndex = h, h() > -1 && o.value.store.commit("insertColumn", n.value, a.value ? u.columnConfig.value : null, _);
  }), wl(() => {
    const E = n.value.getColumnIndex;
    (E ? E() : -1) > -1 && o.value.store.commit("removeColumn", n.value, a.value ? T.columnConfig.value : null, _);
  }), l.columnId = r.value, l.columnConfig = n;
}, render() {
  var e, t, l;
  try {
    const n = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, { row: {}, column: {}, $index: -1 }), o = [];
    if (de(n))
      for (const i of n)
        ((l = i.type) == null ? void 0 : l.name) === "ElTableColumn" || i.shapeFlag & 2 ? o.push(i) : i.type === We && de(i.children) && i.children.forEach((r) => {
          (r == null ? void 0 : r.patchFlag) !== 1024 && !Ee(r == null ? void 0 : r.children) && o.push(r);
        });
    return H("div", o);
  } catch {
    return H("div", []);
  }
} });
const bs = ml(rs, { TableColumn: Vl }), yt = Gn(Vl);
const ys = { class: "flex justify-between items-center py-4" }, Cs = ["innerHTML"], ws = Z({ __name: "index", props: { total: { default: 0 }, pageSize: { default: 20 }, page: { default: 1 }, layout: { default: "prev, pager, next, jumper" }, pageSizes: { default: () => [10, 20, 30, 40, 50, 100] } }, emits: ["currentChange", "update:page", "sizeChange", "update:pageSize"], setup(e, { emit: t }) {
  const l = e, n = N(l.page), o = N(l.pageSize), s = t, i = Jt((a) => {
    n.value = a, s("currentChange", a), s("update:page", a);
  }, 200, true), r = Jt((a) => {
    o.value = a, s("sizeChange", a), s("update:pageSize", a);
  }, 800, true);
  return oe(() => l.page, (a) => {
    n.value = a;
  }, { immediate: true }), oe(() => l.pageSize, (a) => {
    o.value = a;
  }, { immediate: true }), (a, d) => {
    const c = io;
    return O(), U("div", ys, [q("div", { class: "text-sm text-[#666]", innerHTML: a.$t("table_footer_text", { total: `<span class='text-[#2563eb]'>${a.total}</span>` }) }, null, 8, Cs), te(c, { "current-page": n.value, "page-size": o.value, "page-sizes": a.pageSizes, layout: a.layout, total: a.total, onCurrentChange: R(i), onSizeChange: R(r) }, null, 8, ["current-page", "page-size", "page-sizes", "layout", "total", "onCurrentChange", "onSizeChange"])]);
  };
} });
const Ss = ({ mountedCallFun: e, updatedCallFun: t, unmountedCallFun: l }) => Z({ props: ["vnode"], setup(n, o) {
}, mounted() {
  e(this.$el);
}, render(n, o) {
  return n.vnode;
} }), xs = { class: "pr-3 sort-icon cursor-move" }, Es = { class: "flex border-b pb-4", style: { height: "350px" } }, Ns = { class: "flex-1 flex flex-col overflow-y-auto" }, Ps = { class: "flex-1 overflow-y-auto" }, _s = { class: "el-checkbox-group" }, Rs = { class: "flex-1 flex flex-col" }, Fs = { class: "flex-none h-8 flex items-center" }, Ls = { class: "pr-3 sort-icon cursor-move" }, ks = { class: "flex-1 text-sm text-[#182B50] truncate" }, Ts = 30, zs = Z({ __name: "index", props: { type: { default: "" }, page: { default: 1 }, limit: { default: 10 }, total: { default: 0 }, prefix: { default: "" }, pagination: { type: Boolean, default: true }, fixedFields: { default: () => [] }, hiddenProps: { default: () => [] }, insertIndex: {}, loading: { type: Boolean, default: false }, sortable: { type: Boolean, default: false } }, emits: ["pageSizeChange", "pageCurrentChange", "sortableChange", "update:data"], setup(e, { expose: t, emit: l }) {
  const { proxy: n } = ce(), o = $(() => n.$attrs.data || []), s = e, i = l, r = N(), a = Jn(), d = N([]), c = Ss({ mountedCallFun() {
  }, updatedCallFun() {
  }, unmountedCallFun() {
  } }), f = N(false), v = N([]), b = N([]), m = (...C) => {
    i("pageSizeChange", ...C);
  }, y = (...C) => {
    i("pageCurrentChange", ...C);
  }, w = (C) => H(yt, { prop: C.prop, label: C.label, showOverflowTooltip: true, formatter: (P, z, k) => k || "--" }), _ = () => {
    f.value = true;
  }, T = (C, P) => {
    C ? b.value.push({ ...P }) : b.value = b.value.filter((z) => z.id !== P.id);
  }, E = async () => {
    s.type.split("user_memory_list_")[1];
    let C = [], P = [];
    C = [], P = [];
    const z = a.default();
    v.value = C, s.fixedFields && s.fixedFields.length && s.fixedFields.forEach((W = "") => {
      P.includes(W) || P.unshift(W);
    }), P && P.length ? b.value = P.map((W) => C.find((B) => B.field_key === W)).filter((W) => W).map((W) => ({ ...W })) : b.value = C.map((W) => ({ ...W }));
    const k = b.value.map((W) => w({ prop: s.prefix + W.field_key, label: W.field_name }));
    let A = [];
    if (Number(s.insertIndex) > -1) {
      const W = z.slice(0, s.insertIndex), B = z.slice(s.insertIndex);
      A = [...W, ...k, ...B];
    } else
      A = [...k, ...z];
    s.hiddenProps && s.hiddenProps.length && (A = A.filter(({ props: { prop: W = "" } = {} } = {}) => !s.hiddenProps.includes(W))), d.value = A;
  }, u = () => {
    f.value = false;
  }, p = async () => {
    /^user_memory_list/im.test(s.type) && (await ta.console.user_setting.save(s.type, { value: JSON.stringify(b.value.map((C) => C.field_key)) }), E()), la.success("\u5DF2\u8BBE\u7F6E"), f.value = false;
  };
  let h = null;
  const g = () => {
    if (!s.sortable || !o.value.length)
      return;
    const C = r.value.$el.querySelector(".el-table__body tbody");
    h = Qt.create(C, { onStart: (P = {}) => {
      const { target: z, oldIndex: k } = P;
      z.children[k].style.background = "#ECF5FF";
    }, onEnd: async (P = {}) => {
      const { from: z = {}, to: k = {}, target: A, newIndex: W, oldIndex: B } = P;
      if (A.children && A.children[W] && (A.children[W].style.background = "transparent"), W === B)
        return;
      const Y = JSON.parse(JSON.stringify(o.value)), X = Y.splice(B, 1)[0];
      Y.splice(W, 0, X), i("update:data", []), await Fe(), i("update:data", Y), i("sortableChange", { data: Y, targetIndex: W, originIndex: B });
    } });
  }, S = () => {
    h && (h.destroy(), h = null);
  };
  return je(() => {
    Fe(() => {
      if (/^user_memory_list/im.test(s.type))
        E();
      else {
        const C = a.default();
        d.value = C;
      }
    });
  }), vt(() => {
    S();
  }), oe(() => o.value, async (C) => {
    S(), await Fe(), g();
  }, { deep: true, immediate: true }), t({ toggleRowSelection(...C) {
    r.value.toggleRowSelection(...C);
  }, refresh: () => {
    E();
  } }), (C, P) => {
    const z = Gt, k = Ve, A = bs, W = ws, B = $e, Y = Gt, X = na, F = aa, x = sa, M = Mt("debounce");
    return O(), U(We, null, [Be((O(), ne(A, ea({ ref_key: "tableRef", ref: r }, { ...C.$attrs }), Qn({ default: le(() => [C.sortable ? (O(), ne(R(yt), { key: 0, width: "40" }, { default: le(() => [q("div", xs, [te(z, { name: "drag", width: "20px", height: "28px", color: "#C7C7C7" })])]), _: 1 })) : be("", true), te(R(c), { vnode: d.value }, null, 8, ["vnode"]), v.value.length ? (O(), ne(R(yt), { key: 1, "class-name": "table-setting", prop: "system_setting", label: "", width: "20", align: "center", fixed: "right" }, { header: le((I) => [q("div", { class: "cursor-pointer", onClick: _ }, [te(k, null, { default: le(() => [te(R(Zn))]), _: 1 })])]), _: 1 })) : be("", true)]), _: 2 }, [C.$slots.empty ? { name: "empty", fn: le(() => [Le(C.$slots, "empty", {}, void 0, true)]), key: "0" } : void 0]), 1040)), [[x, C.loading]]), C.pagination ? (O(), ne(W, { key: 0, layout: "sizes, prev, pager, next, jumper", page: C.page, "page-size": C.limit, total: C.total, onSizeChange: m, onCurrentChange: y }, null, 8, ["page", "page-size", "total"])) : be("", true), te(F, { modelValue: f.value, "onUpdate:modelValue": P[1] || (P[1] = (I) => f.value = I), title: "\u5217\u8868\u663E\u793A\u8BBE\u7F6E", width: "660px" }, { footer: le(() => [te(X, { size: "large", type: "default", onClick: u }, { default: le(() => P[5] || (P[5] = [Ye(" \u53D6\u6D88 ")])), _: 1, __: [5] }), Be((O(), ne(X, { size: "large", type: "primary", onClick: p }, { default: le(() => P[6] || (P[6] = [Ye(" \u4FDD\u5B58 ")])), _: 1, __: [6] })), [[M]])]), default: le(() => [q("div", Es, [q("div", Ns, [q("div", { class: "flex-none text-sm mb-3" }, [P[2] || (P[2] = q("span", { class: "text-[#182B50]" }, " \u9700\u663E\u793A\u7684\u5B57\u6BB5 ", -1)), q("span", { class: "text-[#182B5066]" }, " \uFF08\u6700\u591A\u5C55\u793A" + ie(Ts) + "\u4E2A\uFF09 ")]), q("div", Ps, [q("div", _s, [(O(true), U(We, null, Ge(v.value, (I) => (O(), ne(B, { key: I.field_key, disabled: C.fixedFields.includes(I.field_key) || b.value.length === 1 && I.field_key === b.value[0].field_key, checked: !!b.value.find((J) => J.field_key === I.field_key), value: I.field_key, onChange: (J) => T(J, I) }, { default: le(() => [Ye(ie(I.field_name), 1)]), _: 2 }, 1032, ["disabled", "checked", "value", "onChange"]))), 128))])])]), P[4] || (P[4] = q("div", { class: "border-l mx-4" }, null, -1)), q("div", Rs, [P[3] || (P[3] = q("div", { class: "flex-none text-sm mb-3" }, [q("span", { class: "text-[#182B50]" }, " \u663E\u793A\u987A\u5E8F "), q("span", { class: "text-[#182B5066]" }, " \uFF08\u62D6\u52A8\u5206\u7EC4\u8C03\u6574\u5206\u7EC4\u987A\u5E8F\uFF09 ")], -1)), te(R(Qt), { modelValue: b.value, "onUpdate:modelValue": P[0] || (P[0] = (I) => b.value = I), identity: "id", class: "flex-1 w-full flex flex-col gap-1 overflow-y-auto" }, { item: le(({ item: I, index: J }) => [q("div", Fs, [q("div", Ls, [te(Y, { name: "drag", width: "16px", height: "32px", color: "#a1a5af" })]), q("div", ks, ie(I.field_name), 1)])]), _: 1 }, 8, ["modelValue"])])])]), _: 1 }, 8, ["modelValue"])], 64);
  };
} });
const js = oa(zs, [["__scopeId", "data-v-6346d91e"]]);
export {
  yt as E,
  js as _,
  bs as a
};
