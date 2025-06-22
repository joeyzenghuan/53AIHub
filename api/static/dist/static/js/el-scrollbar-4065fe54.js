import { aP as j, a$ as D, y as B, aI as G, aU as Z, bB as ee, r as u, Y as L, bh as te, c5 as O, ck as X, b as N, j as W, w as J, m as le, d as A, q as R, u as g, x as ae, a7 as $, p as oe, T as se, af as re, c as Q, f as Y, F as ne, b1 as ie, bo as ce, br as P, aX as q, $ as I, bT as ue, n as V, ax as ve, Z as fe, cp as de, o as me, bG as pe, s as he, ao as be, e as ye, bc as ge, b0 as Se } from "./index-8579fe4a.js";
const k = 4, we = { vertical: { offset: "offsetHeight", scroll: "scrollTop", scrollSize: "scrollHeight", size: "height", key: "vertical", axis: "Y", client: "clientY", direction: "top" }, horizontal: { offset: "offsetWidth", scroll: "scrollLeft", scrollSize: "scrollWidth", size: "width", key: "horizontal", axis: "X", client: "clientX", direction: "left" } }, ze = ({ move: m, size: v, bar: s }) => ({ [s.size]: v, transform: `translate${s.axis}(${m}%)` }), K = Symbol("scrollbarContextKey"), Ee = j({ vertical: Boolean, size: String, move: Number, ratio: { type: Number, required: true }, always: Boolean }), _e = "Thumb", He = B({ __name: "thumb", props: Ee, setup(m) {
  const v = m, s = G(K), a = Z("scrollbar");
  s || ee(_e, "can not inject scrollbar context");
  const c = u(), f = u(), p = u({}), i = u(false);
  let n = false, d = false, T = 0, l = 0, o = re ? document.onselectstart : null;
  const t = L(() => we[v.vertical ? "vertical" : "horizontal"]), h = L(() => ze({ size: v.size, move: v.move, bar: t.value })), w = L(() => c.value[t.value.offset] ** 2 / s.wrapElement[t.value.scrollSize] / v.ratio / f.value[t.value.offset]), _ = (r) => {
    var y;
    if (r.stopPropagation(), r.ctrlKey || [1, 2].includes(r.button))
      return;
    (y = window.getSelection()) == null || y.removeAllRanges(), z(r);
    const H = r.currentTarget;
    H && (p.value[t.value.axis] = H[t.value.offset] - (r[t.value.client] - H.getBoundingClientRect()[t.value.direction]));
  }, S = (r) => {
    if (!f.value || !c.value || !s.wrapElement)
      return;
    const y = Math.abs(r.target.getBoundingClientRect()[t.value.direction] - r[t.value.client]), H = f.value[t.value.offset] / 2, M = (y - H) * 100 * w.value / c.value[t.value.offset];
    s.wrapElement[t.value.scroll] = M * s.wrapElement[t.value.scrollSize] / 100;
  }, z = (r) => {
    r.stopImmediatePropagation(), n = true, T = s.wrapElement.scrollHeight, l = s.wrapElement.scrollWidth, document.addEventListener("mousemove", x), document.addEventListener("mouseup", C), o = document.onselectstart, document.onselectstart = () => false;
  }, x = (r) => {
    if (!c.value || !f.value || n === false)
      return;
    const y = p.value[t.value.axis];
    if (!y)
      return;
    const H = (c.value.getBoundingClientRect()[t.value.direction] - r[t.value.client]) * -1, M = f.value[t.value.offset] - y, U = (H - M) * 100 * w.value / c.value[t.value.offset];
    t.value.scroll === "scrollLeft" ? s.wrapElement[t.value.scroll] = U * l / 100 : s.wrapElement[t.value.scroll] = U * T / 100;
  }, C = () => {
    n = false, p.value[t.value.axis] = 0, document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", C), b(), d && (i.value = false);
  }, E = () => {
    d = false, i.value = !!v.size;
  }, e = () => {
    d = true, i.value = n;
  };
  te(() => {
    b(), document.removeEventListener("mouseup", C);
  });
  const b = () => {
    document.onselectstart !== o && (document.onselectstart = o);
  };
  return O(X(s, "scrollbarElement"), "mousemove", E), O(X(s, "scrollbarElement"), "mouseleave", e), (r, y) => (N(), W(se, { name: g(a).b("fade"), persisted: "" }, { default: J(() => [le(A("div", { ref_key: "instance", ref: c, class: R([g(a).e("bar"), g(a).is(g(t).key)]), onMousedown: S, onClick: ae(() => {
  }, ["stop"]) }, [A("div", { ref_key: "thumb", ref: f, class: R(g(a).e("thumb")), style: $(g(h)), onMousedown: _ }, null, 38)], 42, ["onClick"]), [[oe, r.always || i.value]])]), _: 1 }, 8, ["name"]));
} });
var F = D(He, [["__file", "thumb.vue"]]);
const Te = j({ always: { type: Boolean, default: true }, minSize: { type: Number, required: true } }), ke = B({ __name: "bar", props: Te, setup(m, { expose: v }) {
  const s = m, a = G(K), c = u(0), f = u(0), p = u(""), i = u(""), n = u(1), d = u(1);
  return v({ handleScroll: (o) => {
    if (o) {
      const t = o.offsetHeight - k, h = o.offsetWidth - k;
      f.value = o.scrollTop * 100 / t * n.value, c.value = o.scrollLeft * 100 / h * d.value;
    }
  }, update: () => {
    const o = a == null ? void 0 : a.wrapElement;
    if (!o)
      return;
    const t = o.offsetHeight - k, h = o.offsetWidth - k, w = t ** 2 / o.scrollHeight, _ = h ** 2 / o.scrollWidth, S = Math.max(w, s.minSize), z = Math.max(_, s.minSize);
    n.value = w / (t - w) / (S / (t - S)), d.value = _ / (h - _) / (z / (h - z)), i.value = S + k < t ? `${S}px` : "", p.value = z + k < h ? `${z}px` : "";
  } }), (o, t) => (N(), Q(ne, null, [Y(F, { move: c.value, ratio: d.value, size: p.value, always: o.always }, null, 8, ["move", "ratio", "size", "always"]), Y(F, { move: f.value, ratio: n.value, size: i.value, vertical: "", always: o.always }, null, 8, ["move", "ratio", "size", "always"])], 64));
} });
var Le = D(ke, [["__file", "bar.vue"]]);
const Ce = j({ height: { type: [String, Number], default: "" }, maxHeight: { type: [String, Number], default: "" }, native: { type: Boolean, default: false }, wrapStyle: { type: ie([String, Object, Array]), default: "" }, wrapClass: { type: [String, Array], default: "" }, viewClass: { type: [String, Array], default: "" }, viewStyle: { type: [String, Array, Object], default: "" }, noresize: Boolean, tag: { type: String, default: "div" }, always: Boolean, minSize: { type: Number, default: 20 }, tabindex: { type: [String, Number], default: void 0 }, id: String, role: String, ...ce(["ariaLabel", "ariaOrientation"]) }), Pe = { "end-reached": (m) => ["left", "right", "top", "bottom"].includes(m), scroll: ({ scrollTop: m, scrollLeft: v }) => [m, v].every(P) }, Ne = "ElScrollbar", Re = B({ name: Ne }), xe = B({ ...Re, props: Ce, emits: Pe, setup(m, { expose: v, emit: s }) {
  const a = m, c = Z("scrollbar");
  let f, p, i = 0, n = 0, d = "";
  const T = u(), l = u(), o = u(), t = u(), h = L(() => {
    const e = {};
    return a.height && (e.height = q(a.height)), a.maxHeight && (e.maxHeight = q(a.maxHeight)), [a.wrapStyle, e];
  }), w = L(() => [a.wrapClass, c.e("wrap"), { [c.em("wrap", "hidden-default")]: !a.native }]), _ = L(() => [c.e("view"), a.viewClass]), S = () => {
    var e;
    if (l.value) {
      (e = t.value) == null || e.handleScroll(l.value);
      const b = i, r = n;
      i = l.value.scrollTop, n = l.value.scrollLeft;
      const y = { bottom: i + l.value.clientHeight >= l.value.scrollHeight, top: i <= 0 && b !== 0, right: n + l.value.clientWidth >= l.value.scrollWidth && r !== n, left: n <= 0 && r !== 0 };
      b !== i && (d = i > b ? "bottom" : "top"), r !== n && (d = n > r ? "right" : "left"), s("scroll", { scrollTop: i, scrollLeft: n }), y[d] && s("end-reached", d);
    }
  };
  function z(e, b) {
    ge(e) ? l.value.scrollTo(e) : P(e) && P(b) && l.value.scrollTo(e, b);
  }
  const x = (e) => {
    P(e) && (l.value.scrollTop = e);
  }, C = (e) => {
    P(e) && (l.value.scrollLeft = e);
  }, E = () => {
    var e;
    (e = t.value) == null || e.update();
  };
  return I(() => a.noresize, (e) => {
    e ? (f == null ? void 0 : f(), p == null ? void 0 : p()) : ({ stop: f } = ue(o, E), p = O("resize", E));
  }, { immediate: true }), I(() => [a.maxHeight, a.height], () => {
    a.native || V(() => {
      var e;
      E(), l.value && ((e = t.value) == null || e.handleScroll(l.value));
    });
  }), ve(K, fe({ scrollbarElement: T, wrapElement: l })), de(() => {
    l.value && (l.value.scrollTop = i, l.value.scrollLeft = n);
  }), me(() => {
    a.native || V(() => {
      E();
    });
  }), pe(() => E()), v({ wrapRef: l, update: E, scrollTo: z, setScrollTop: x, setScrollLeft: C, handleScroll: S }), (e, b) => (N(), Q("div", { ref_key: "scrollbarRef", ref: T, class: R(g(c).b()) }, [A("div", { ref_key: "wrapRef", ref: l, class: R(g(w)), style: $(g(h)), tabindex: e.tabindex, onScroll: S }, [(N(), W(be(e.tag), { id: e.id, ref_key: "resizeRef", ref: o, class: R(g(_)), style: $(e.viewStyle), role: e.role, "aria-label": e.ariaLabel, "aria-orientation": e.ariaOrientation }, { default: J(() => [he(e.$slots, "default")]), _: 3 }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))], 46, ["tabindex"]), e.native ? ye("v-if", true) : (N(), W(Le, { key: 0, ref_key: "barRef", ref: t, always: e.always, "min-size": e.minSize }, null, 8, ["always", "min-size"]))], 2));
} });
var Be = D(xe, [["__file", "scrollbar.vue"]]);
const Oe = Se(Be);
export {
  Oe as E,
  Pe as s
};
