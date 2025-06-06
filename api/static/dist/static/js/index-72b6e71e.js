import { ap as O, aQ as Z, u as x, av as H, al as N, b as c, c as P, t as I, h as T, i as B, aO as de, z as n, y as te, aC as X, ak as be, aH as ce, bL as pe, bl as ge, au as J, r as z, aG as G, b_ as _e, f as L, F as ee, G as ne, n as F, d as y, X as he, w as Ce, e as R, d4 as ye, ao as se, d5 as Pe, b0 as ze, aU as V, B as Se, bS as xe, b7 as ke, b3 as Ne, d6 as we, at as Ee, an as $e, a$ as Te, a1 as q, aD as Be, as as Me, o as Fe, W as Le, af as Ie, g as ie, bd as Ve, q as qe, bE as Ue, aA as je, H as ae, bK as Ae, a9 as De, L as Ke, $ as Oe, Y as He, p as We } from "./index-6feda8be.js";
import { v as Re } from "./el-loading-7d1392af.js";
import { _ as Je } from "./index.vue_vue_type_script_setup_true_lang-b4d73f03.js";
import { E as oe, a as Ge, b as Xe } from "./el-table-column-97a25b03.js";
import "./el-tag-41766c4c.js";
import { E as Qe, a as Ye } from "./el-select-15a52e42.js";
import "./el-scrollbar-1c0147c5.js";
import { d as re } from "./debounce-f4e6390f.js";
import { i as Ze } from "./isEqual-8788d17b.js";
const fe = Symbol("elPaginationKey"), ea = O({ disabled: Boolean, currentPage: { type: Number, default: 1 }, prevText: { type: String }, prevIcon: { type: Z } }), aa = { click: (e) => e instanceof MouseEvent }, ta = x({ name: "ElPaginationPrev" }), na = x({ ...ta, props: ea, emits: aa, setup(e) {
  const u = e, { t: s } = H(), i = N(() => u.disabled || u.currentPage <= 1);
  return (o, g) => (c(), P("button", { type: "button", class: "btn-prev", disabled: n(i), "aria-label": o.prevText || n(s)("el.pagination.prev"), "aria-disabled": n(i), onClick: (m) => o.$emit("click", m) }, [o.prevText ? (c(), P("span", { key: 0 }, I(o.prevText), 1)) : (c(), T(n(te), { key: 1 }, { default: B(() => [(c(), T(de(o.prevIcon)))]), _: 1 }))], 8, ["disabled", "aria-label", "aria-disabled", "onClick"]));
} });
var la = X(na, [["__file", "prev.vue"]]);
const sa = O({ disabled: Boolean, currentPage: { type: Number, default: 1 }, pageCount: { type: Number, default: 50 }, nextText: { type: String }, nextIcon: { type: Z } }), ia = x({ name: "ElPaginationNext" }), oa = x({ ...ia, props: sa, emits: ["click"], setup(e) {
  const u = e, { t: s } = H(), i = N(() => u.disabled || u.currentPage === u.pageCount || u.pageCount === 0);
  return (o, g) => (c(), P("button", { type: "button", class: "btn-next", disabled: n(i), "aria-label": o.nextText || n(s)("el.pagination.next"), "aria-disabled": n(i), onClick: (m) => o.$emit("click", m) }, [o.nextText ? (c(), P("span", { key: 0 }, I(o.nextText), 1)) : (c(), T(n(te), { key: 1 }, { default: B(() => [(c(), T(de(o.nextIcon)))]), _: 1 }))], 8, ["disabled", "aria-label", "aria-disabled", "onClick"]));
} });
var ra = X(oa, [["__file", "next.vue"]]);
const le = () => be(fe, {}), ua = O({ pageSize: { type: Number, required: true }, pageSizes: { type: ce(Array), default: () => pe([10, 20, 30, 40, 50, 100]) }, popperClass: { type: String }, disabled: Boolean, teleported: Boolean, size: { type: String, values: ge }, appendSizeTo: String }), da = x({ name: "ElPaginationSizes" }), ca = x({ ...da, props: ua, emits: ["page-size-change"], setup(e, { emit: u }) {
  const s = e, { t: i } = H(), o = J("pagination"), g = le(), m = z(s.pageSize);
  G(() => s.pageSizes, (d, C) => {
    if (!Ze(d, C) && _e(d)) {
      const r = d.includes(s.pageSize) ? s.pageSize : s.pageSizes[0];
      u("page-size-change", r);
    }
  }), G(() => s.pageSize, (d) => {
    m.value = d;
  });
  const h = N(() => s.pageSizes);
  function p(d) {
    var C;
    d !== m.value && (m.value = d, (C = g.handleSizeChange) == null || C.call(g, Number(d)));
  }
  return (d, C) => (c(), P("span", { class: F(n(o).e("sizes")) }, [L(n(Ye), { "model-value": m.value, disabled: d.disabled, "popper-class": d.popperClass, size: d.size, teleported: d.teleported, "validate-event": false, "append-to": d.appendSizeTo, onChange: p }, { default: B(() => [(c(true), P(ee, null, ne(n(h), (r) => (c(), T(n(Qe), { key: r, value: r, label: r + n(i)("el.pagination.pagesize") }, null, 8, ["value", "label"]))), 128))]), _: 1 }, 8, ["model-value", "disabled", "popper-class", "size", "teleported", "append-to"])], 2));
} });
var pa = X(ca, [["__file", "sizes.vue"]]);
const ga = O({ size: { type: String, values: ge } }), fa = x({ name: "ElPaginationJumper" }), va = x({ ...fa, props: ga, setup(e) {
  const { t: u } = H(), s = J("pagination"), { pageCount: i, disabled: o, currentPage: g, changeEvent: m } = le(), h = z(), p = N(() => {
    var r;
    return (r = h.value) != null ? r : g == null ? void 0 : g.value;
  });
  function d(r) {
    h.value = r ? +r : "";
  }
  function C(r) {
    r = Math.trunc(+r), m == null ? void 0 : m(r), h.value = void 0;
  }
  return (r, A) => (c(), P("span", { class: F(n(s).e("jump")), disabled: n(o) }, [y("span", { class: F([n(s).e("goto")]) }, I(n(u)("el.pagination.goto")), 3), L(n(he), { size: r.size, class: F([n(s).e("editor"), n(s).is("in-pagination")]), min: 1, max: n(i), disabled: n(o), "model-value": n(p), "validate-event": false, "aria-label": n(u)("el.pagination.page"), type: "number", "onUpdate:modelValue": d, onChange: C }, null, 8, ["size", "class", "max", "disabled", "model-value", "aria-label"]), y("span", { class: F([n(s).e("classifier")]) }, I(n(u)("el.pagination.pageClassifier")), 3)], 10, ["disabled"]));
} });
var ma = X(va, [["__file", "jumper.vue"]]);
const ba = O({ total: { type: Number, default: 1e3 } }), _a = x({ name: "ElPaginationTotal" }), ha = x({ ..._a, props: ba, setup(e) {
  const { t: u } = H(), s = J("pagination"), { disabled: i } = le();
  return (o, g) => (c(), P("span", { class: F(n(s).e("total")), disabled: n(i) }, I(n(u)("el.pagination.total", { total: o.total })), 11, ["disabled"]));
} });
var Ca = X(ha, [["__file", "total.vue"]]);
const ya = O({ currentPage: { type: Number, default: 1 }, pageCount: { type: Number, required: true }, pagerCount: { type: Number, default: 7 }, disabled: Boolean }), Pa = x({ name: "ElPaginationPager" }), za = x({ ...Pa, props: ya, emits: ["change"], setup(e, { emit: u }) {
  const s = e, i = J("pager"), o = J("icon"), { t: g } = H(), m = z(false), h = z(false), p = z(false), d = z(false), C = z(false), r = z(false), A = N(() => {
    const t = s.pagerCount, a = (t - 1) / 2, l = Number(s.currentPage), _ = Number(s.pageCount);
    let v = false, f = false;
    _ > t && (l > t - a && (v = true), l < _ - a && (f = true));
    const w = [];
    if (v && !f) {
      const S = _ - (t - 2);
      for (let E = S; E < _; E++)
        w.push(E);
    } else if (!v && f)
      for (let S = 2; S < t; S++)
        w.push(S);
    else if (v && f) {
      const S = Math.floor(t / 2) - 1;
      for (let E = l - S; E <= l + S; E++)
        w.push(E);
    } else
      for (let S = 2; S < _; S++)
        w.push(S);
    return w;
  }), U = N(() => ["more", "btn-quickprev", o.b(), i.is("disabled", s.disabled)]), M = N(() => ["more", "btn-quicknext", o.b(), i.is("disabled", s.disabled)]), b = N(() => s.disabled ? -1 : 0);
  Ce(() => {
    const t = (s.pagerCount - 1) / 2;
    m.value = false, h.value = false, s.pageCount > s.pagerCount && (s.currentPage > s.pagerCount - t && (m.value = true), s.currentPage < s.pageCount - t && (h.value = true));
  });
  function D(t = false) {
    s.disabled || (t ? p.value = true : d.value = true);
  }
  function j(t = false) {
    t ? C.value = true : r.value = true;
  }
  function Q(t) {
    const a = t.target;
    if (a.tagName.toLowerCase() === "li" && Array.from(a.classList).includes("number")) {
      const l = Number(a.textContent);
      l !== s.currentPage && u("change", l);
    } else
      a.tagName.toLowerCase() === "li" && Array.from(a.classList).includes("more") && W(t);
  }
  function W(t) {
    const a = t.target;
    if (a.tagName.toLowerCase() === "ul" || s.disabled)
      return;
    let l = Number(a.textContent);
    const _ = s.pageCount, v = s.currentPage, f = s.pagerCount - 2;
    a.className.includes("more") && (a.className.includes("quickprev") ? l = v - f : a.className.includes("quicknext") && (l = v + f)), Number.isNaN(+l) || (l < 1 && (l = 1), l > _ && (l = _)), l !== v && u("change", l);
  }
  return (t, a) => (c(), P("ul", { class: F(n(i).b()), onClick: W, onKeyup: ze(Q, ["enter"]) }, [t.pageCount > 0 ? (c(), P("li", { key: 0, class: F([[n(i).is("active", t.currentPage === 1), n(i).is("disabled", t.disabled)], "number"]), "aria-current": t.currentPage === 1, "aria-label": n(g)("el.pagination.currentPage", { pager: 1 }), tabindex: n(b) }, " 1 ", 10, ["aria-current", "aria-label", "tabindex"])) : R("v-if", true), m.value ? (c(), P("li", { key: 1, class: F(n(U)), tabindex: n(b), "aria-label": n(g)("el.pagination.prevPages", { pager: t.pagerCount - 2 }), onMouseenter: (l) => D(true), onMouseleave: (l) => p.value = false, onFocus: (l) => j(true), onBlur: (l) => C.value = false }, [(p.value || C.value) && !t.disabled ? (c(), T(n(ye), { key: 0 })) : (c(), T(n(se), { key: 1 }))], 42, ["tabindex", "aria-label", "onMouseenter", "onMouseleave", "onFocus", "onBlur"])) : R("v-if", true), (c(true), P(ee, null, ne(n(A), (l) => (c(), P("li", { key: l, class: F([[n(i).is("active", t.currentPage === l), n(i).is("disabled", t.disabled)], "number"]), "aria-current": t.currentPage === l, "aria-label": n(g)("el.pagination.currentPage", { pager: l }), tabindex: n(b) }, I(l), 11, ["aria-current", "aria-label", "tabindex"]))), 128)), h.value ? (c(), P("li", { key: 2, class: F(n(M)), tabindex: n(b), "aria-label": n(g)("el.pagination.nextPages", { pager: t.pagerCount - 2 }), onMouseenter: (l) => D(), onMouseleave: (l) => d.value = false, onFocus: (l) => j(), onBlur: (l) => r.value = false }, [(d.value || r.value) && !t.disabled ? (c(), T(n(Pe), { key: 0 })) : (c(), T(n(se), { key: 1 }))], 42, ["tabindex", "aria-label", "onMouseenter", "onMouseleave", "onFocus", "onBlur"])) : R("v-if", true), t.pageCount > 1 ? (c(), P("li", { key: 3, class: F([[n(i).is("active", t.currentPage === t.pageCount), n(i).is("disabled", t.disabled)], "number"]), "aria-current": t.currentPage === t.pageCount, "aria-label": n(g)("el.pagination.currentPage", { pager: t.pageCount }), tabindex: n(b) }, I(t.pageCount), 11, ["aria-current", "aria-label", "tabindex"])) : R("v-if", true)], 42, ["onKeyup"]));
} });
var Sa = X(za, [["__file", "pager.vue"]]);
const k = (e) => typeof e != "number", xa = O({ pageSize: Number, defaultPageSize: Number, total: Number, pageCount: Number, pagerCount: { type: Number, validator: (e) => V(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1, default: 7 }, currentPage: Number, defaultCurrentPage: Number, layout: { type: String, default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ") }, pageSizes: { type: ce(Array), default: () => pe([10, 20, 30, 40, 50, 100]) }, popperClass: { type: String, default: "" }, prevText: { type: String, default: "" }, prevIcon: { type: Z, default: () => Se }, nextText: { type: String, default: "" }, nextIcon: { type: Z, default: () => xe }, teleported: { type: Boolean, default: true }, small: Boolean, size: ke, background: Boolean, disabled: Boolean, hideOnSinglePage: Boolean, appendSizeTo: String }), ka = { "update:current-page": (e) => V(e), "update:page-size": (e) => V(e), "size-change": (e) => V(e), change: (e, u) => V(e) && V(u), "current-change": (e) => V(e), "prev-click": (e) => V(e), "next-click": (e) => V(e) }, ue = "ElPagination";
var Na = x({ name: ue, props: xa, emits: ka, setup(e, { emit: u, slots: s }) {
  const { t: i } = H(), o = J("pagination"), g = Ne().vnode.props || {}, m = we(), h = N(() => {
    var a;
    return e.small ? "small" : (a = e.size) != null ? a : m.value;
  });
  Ee({ from: "small", replacement: "size", version: "3.0.0", scope: "el-pagination", ref: "https://element-plus.org/zh-CN/component/pagination.html" }, N(() => !!e.small));
  const p = "onUpdate:currentPage" in g || "onUpdate:current-page" in g || "onCurrentChange" in g, d = "onUpdate:pageSize" in g || "onUpdate:page-size" in g || "onSizeChange" in g, C = N(() => {
    if (k(e.total) && k(e.pageCount) || !k(e.currentPage) && !p)
      return false;
    if (e.layout.includes("sizes")) {
      if (k(e.pageCount)) {
        if (!k(e.total) && !k(e.pageSize) && !d)
          return false;
      } else if (!d)
        return false;
    }
    return true;
  }), r = z(k(e.defaultPageSize) ? 10 : e.defaultPageSize), A = z(k(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), U = N({ get() {
    return k(e.pageSize) ? r.value : e.pageSize;
  }, set(a) {
    k(e.pageSize) && (r.value = a), d && (u("update:page-size", a), u("size-change", a));
  } }), M = N(() => {
    let a = 0;
    return k(e.pageCount) ? k(e.total) || (a = Math.max(1, Math.ceil(e.total / U.value))) : a = e.pageCount, a;
  }), b = N({ get() {
    return k(e.currentPage) ? A.value : e.currentPage;
  }, set(a) {
    let l = a;
    a < 1 ? l = 1 : a > M.value && (l = M.value), k(e.currentPage) && (A.value = l), p && (u("update:current-page", l), u("current-change", l));
  } });
  G(M, (a) => {
    b.value > a && (b.value = a);
  }), G([b, U], (a) => {
    u("change", ...a);
  }, { flush: "post" });
  function D(a) {
    b.value = a;
  }
  function j(a) {
    U.value = a;
    const l = M.value;
    b.value > l && (b.value = l);
  }
  function Q() {
    e.disabled || (b.value -= 1, u("prev-click", b.value));
  }
  function W() {
    e.disabled || (b.value += 1, u("next-click", b.value));
  }
  function t(a, l) {
    a && (a.props || (a.props = {}), a.props.class = [a.props.class, l].join(" "));
  }
  return $e(fe, { pageCount: M, disabled: N(() => e.disabled), currentPage: b, changeEvent: D, handleSizeChange: j }), () => {
    var a, l;
    if (!C.value)
      return Te(ue, i("el.pagination.deprecationWarning")), null;
    if (!e.layout || e.hideOnSinglePage && M.value <= 1)
      return null;
    const _ = [], v = [], f = q("div", { class: o.e("rightwrapper") }, v), w = { prev: q(la, { disabled: e.disabled, currentPage: b.value, prevText: e.prevText, prevIcon: e.prevIcon, onClick: Q }), jumper: q(ma, { size: h.value }), pager: q(Sa, { currentPage: b.value, pageCount: M.value, pagerCount: e.pagerCount, onChange: D, disabled: e.disabled }), next: q(ra, { disabled: e.disabled, currentPage: b.value, pageCount: M.value, nextText: e.nextText, nextIcon: e.nextIcon, onClick: W }), sizes: q(pa, { pageSize: U.value, pageSizes: e.pageSizes, popperClass: e.popperClass, disabled: e.disabled, teleported: e.teleported, size: h.value, appendSizeTo: e.appendSizeTo }), slot: (l = (a = s == null ? void 0 : s.default) == null ? void 0 : a.call(s)) != null ? l : null, total: q(Ca, { total: k(e.total) ? 0 : e.total }) }, S = e.layout.split(",").map((K) => K.trim());
    let E = false;
    return S.forEach((K) => {
      if (K === "->") {
        E = true;
        return;
      }
      E ? v.push(w[K]) : _.push(w[K]);
    }), t(_[0], o.is("first")), t(_[_.length - 1], o.is("last")), E && v.length > 0 && (t(v[0], o.is("first")), t(v[v.length - 1], o.is("last")), _.push(f)), q("div", { class: [o.b(), o.is("background", e.background), o.m(h.value)] }, _);
  };
} });
const wa = Be(Na);
const Ea = { class: "flex justify-between items-center py-4" }, $a = ["innerHTML"], Ta = x({ __name: "index", props: { total: { default: 0 }, pageSize: { default: 20 }, page: { default: 1 }, layout: { default: "prev, pager, next, jumper" }, pageSizes: { default: () => [10, 20, 30, 40, 50, 100] } }, emits: ["currentChange", "update:page", "sizeChange", "update:pageSize"], setup(e, { emit: u }) {
  const s = e, i = z(s.page), o = z(s.pageSize), g = u, m = re((p) => {
    i.value = p, g("currentChange", p), g("update:page", p);
  }, 200, true), h = re((p) => {
    o.value = p, g("sizeChange", p), g("update:pageSize", p);
  }, 800, true);
  return G(() => s.page, (p) => {
    i.value = p;
  }, { immediate: true }), G(() => s.pageSize, (p) => {
    o.value = p;
  }, { immediate: true }), (p, d) => {
    const C = wa;
    return c(), P("div", Ea, [y("div", { class: "text-sm text-[#666]", innerHTML: p.$t("table_footer_text", { total: `<span class='text-[#2563eb]'>${p.total}</span>` }) }, null, 8, $a), L(C, { "current-page": i.value, "page-size": o.value, "page-sizes": p.pageSizes, layout: p.layout, total: p.total, onCurrentChange: n(m), onSizeChange: n(h) }, null, 8, ["current-page", "page-size", "page-sizes", "layout", "total", "onCurrentChange", "onSizeChange"])]);
  };
} }), Ba = ({ mountedCallFun: e, updatedCallFun: u, unmountedCallFun: s }) => x({ props: ["vnode"], setup(i, o) {
}, mounted() {
  e(this.$el);
}, render(i, o) {
  return i.vnode;
} }), Ma = { class: "flex border-b pb-4", style: { height: "350px" } }, Fa = { class: "flex-1 flex flex-col overflow-y-auto" }, La = { class: "flex-1 overflow-y-auto" }, Ia = { class: "el-checkbox-group" }, Va = { class: "flex-1 flex flex-col" }, qa = { class: "flex-none h-8 flex items-center" }, Ua = { class: "pr-3 sort-icon cursor-move" }, ja = { class: "flex-1 text-sm text-[#182B50] truncate" }, Aa = 30, Da = x({ __name: "index", props: { type: { default: "" }, page: { default: 1 }, limit: { default: 10 }, total: { default: 0 }, prefix: { default: "" }, pagination: { type: Boolean, default: true }, fixedFields: { default: () => [] }, hiddenProps: { default: () => [] }, insertIndex: {}, loading: { type: Boolean, default: false } }, emits: ["pageSizeChange", "pageCurrentChange"], setup(e, { expose: u, emit: s }) {
  const i = e, o = s, g = z(), m = Me(), h = z([]), p = Ba({ mountedCallFun() {
  }, updatedCallFun() {
  }, unmountedCallFun() {
  } }), d = z(false), C = z([]), r = z([]), A = (...t) => {
    o("pageSizeChange", ...t);
  }, U = (...t) => {
    o("pageCurrentChange", ...t);
  }, M = (t) => q(oe, { prop: t.prop, label: t.label, showOverflowTooltip: true, formatter: (a, l, _) => _ || "--" }), b = () => {
    d.value = true;
  }, D = (t, a) => {
    t ? r.value.push({ ...a }) : r.value = r.value.filter((l) => l.id !== a.id);
  }, j = async () => {
    i.type.split("user_memory_list_")[1];
    let t = [], a = [];
    t = [], a = [];
    const l = m.default();
    C.value = t, i.fixedFields && i.fixedFields.length && i.fixedFields.forEach((f = "") => {
      a.includes(f) || a.unshift(f);
    }), a && a.length ? r.value = a.map((f) => t.find((w) => w.field_key === f)).filter((f) => f).map((f) => ({ ...f })) : r.value = t.map((f) => ({ ...f }));
    const _ = r.value.map((f) => M({ prop: i.prefix + f.field_key, label: f.field_name }));
    let v = [];
    if (Number(i.insertIndex) > -1) {
      const f = l.slice(0, i.insertIndex), w = l.slice(i.insertIndex);
      v = [...f, ..._, ...w];
    } else
      v = [..._, ...l];
    i.hiddenProps && i.hiddenProps.length && (v = v.filter(({ props: { prop: f = "" } = {} } = {}) => !i.hiddenProps.includes(f))), h.value = v;
  }, Q = () => {
    d.value = false;
  }, W = async () => {
    /^user_memory_list/im.test(i.type) && (await Ae.console.user_setting.save(i.type, { value: JSON.stringify(r.value.map((t) => t.field_key)) }), j()), De.success("\u5DF2\u8BBE\u7F6E"), d.value = false;
  };
  return Fe(() => {
    Le(() => {
      if (/^user_memory_list/im.test(i.type))
        j();
      else {
        const t = m.default();
        h.value = t;
      }
    });
  }), u({ toggleRowSelection(...t) {
    g.value.toggleRowSelection(...t);
  }, refresh: () => {
    j();
  } }), (t, a) => {
    const l = te, _ = Ge, v = Ta, f = Xe, w = Ke, S = Je, E = Oe, K = He, ve = Re, me = Ie("debounce");
    return c(), P(ee, null, [ie((c(), T(_, je({ ref_key: "tableRef", ref: g }, { ...t.$attrs }), Ve({ default: B(() => [L(n(p), { vnode: h.value }, null, 8, ["vnode"]), C.value.length ? (c(), T(n(oe), { key: 0, "class-name": "table-setting", prop: "system_setting", label: "", width: "20", align: "center", fixed: "right" }, { header: B(($) => [y("div", { class: "cursor-pointer", onClick: b }, [L(l, null, { default: B(() => [L(n(Ue))]), _: 1 })])]), _: 1 })) : R("", true)]), _: 2 }, [t.$slots.empty ? { name: "empty", fn: B(() => [qe(t.$slots, "empty", {}, void 0, true)]), key: "0" } : void 0]), 1040)), [[ve, t.loading]]), t.pagination ? (c(), T(v, { key: 0, layout: "sizes, prev, pager, next, jumper", page: t.page, "page-size": t.limit, total: t.total, onSizeChange: A, onCurrentChange: U }, null, 8, ["page", "page-size", "total"])) : R("", true), L(K, { modelValue: d.value, "onUpdate:modelValue": a[1] || (a[1] = ($) => d.value = $), title: "\u5217\u8868\u663E\u793A\u8BBE\u7F6E", width: "660px" }, { footer: B(() => [L(E, { size: "large", type: "default", onClick: Q }, { default: B(() => a[5] || (a[5] = [ae(" \u53D6\u6D88 ")])), _: 1 }), ie((c(), T(E, { size: "large", type: "primary", onClick: W }, { default: B(() => a[6] || (a[6] = [ae(" \u4FDD\u5B58 ")])), _: 1 })), [[me]])]), default: B(() => [y("div", Ma, [y("div", Fa, [y("div", { class: "flex-none text-sm mb-3" }, [a[2] || (a[2] = y("span", { class: "text-[#182B50]" }, " \u9700\u663E\u793A\u7684\u5B57\u6BB5 ", -1)), y("span", { class: "text-[#182B5066]" }, " \uFF08\u6700\u591A\u5C55\u793A" + I(Aa) + "\u4E2A\uFF09 ")]), y("div", La, [y("div", Ia, [(c(true), P(ee, null, ne(C.value, ($) => (c(), T(f, { key: $.field_key, disabled: t.fixedFields.includes($.field_key) || r.value.length === 1 && $.field_key === r.value[0].field_key, checked: !!r.value.find((Y) => Y.field_key === $.field_key), value: $.field_key, onChange: (Y) => D(Y, $) }, { default: B(() => [ae(I($.field_name), 1)]), _: 2 }, 1032, ["disabled", "checked", "value", "onChange"]))), 128))])])]), a[4] || (a[4] = y("div", { class: "border-l mx-4" }, null, -1)), y("div", Va, [a[3] || (a[3] = y("div", { class: "flex-none text-sm mb-3" }, [y("span", { class: "text-[#182B50]" }, " \u663E\u793A\u987A\u5E8F "), y("span", { class: "text-[#182B5066]" }, " \uFF08\u62D6\u52A8\u5206\u7EC4\u8C03\u6574\u5206\u7EC4\u987A\u5E8F\uFF09 ")], -1)), L(S, { modelValue: r.value, "onUpdate:modelValue": a[0] || (a[0] = ($) => r.value = $), identity: "id", class: "flex-1 w-full flex flex-col gap-1 overflow-y-auto" }, { item: B(({ item: $, index: Y }) => [y("div", qa, [y("div", Ua, [L(w, { name: "drag", width: "16px", height: "32px", color: "#a1a5af" })]), y("div", ja, I($.field_name), 1)])]), _: 1 }, 8, ["modelValue"])])])]), _: 1 }, 8, ["modelValue"])], 64);
  };
} });
const Ya = We(Da, [["__scopeId", "data-v-7a452631"]]);
export {
  Ya as _
};
