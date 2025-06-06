import { ap as W, aC as $, u as N, ak as V, au as F, aE as Q, r as i, al as L, bg as Z, bR as B, c8 as j, b as k, h as O, i as G, g as ee, d as M, n as C, z as y, aN as A, v as te, T as ae, a3 as le, c as I, f as K, F as se, aH as oe, aR as re, aU as R, ax as U, aG as X, c3 as ne, W as Y, an as ie, ae as ce, c9 as ue, o as ve, ba as fe, q as me, aO as de, e as pe, br as be, aD as he } from "./index-7b696e01.js";
const H = 4, ye = { vertical: { offset: "offsetHeight", scroll: "scrollTop", scrollSize: "scrollHeight", size: "height", key: "vertical", axis: "Y", client: "clientY", direction: "top" }, horizontal: { offset: "offsetWidth", scroll: "scrollLeft", scrollSize: "scrollWidth", size: "width", key: "horizontal", axis: "X", client: "clientX", direction: "left" } }, ge = ({ move: g, size: c, bar: r }) => ({ [r.size]: c, transform: `translate${r.axis}(${g}%)` }), D = Symbol("scrollbarContextKey"), Se = W({ vertical: Boolean, size: String, move: Number, ratio: { type: Number, required: true }, always: Boolean }), we = "Thumb", ze = N({ __name: "thumb", props: Se, setup(g) {
  const c = g, r = V(D), l = F("scrollbar");
  r || Q(we, "can not inject scrollbar context");
  const n = i(), u = i(), m = i({}), d = i(false);
  let f = false, p = false, a = le ? document.onselectstart : null;
  const t = L(() => ye[c.vertical ? "vertical" : "horizontal"]), s = L(() => ge({ size: c.size, move: c.move, bar: t.value })), v = L(() => n.value[t.value.offset] ** 2 / r.wrapElement[t.value.scrollSize] / c.ratio / u.value[t.value.offset]), b = (o) => {
    var _;
    if (o.stopPropagation(), o.ctrlKey || [1, 2].includes(o.button))
      return;
    (_ = window.getSelection()) == null || _.removeAllRanges(), w(o);
    const T = o.currentTarget;
    T && (m.value[t.value.axis] = T[t.value.offset] - (o[t.value.client] - T.getBoundingClientRect()[t.value.direction]));
  }, E = (o) => {
    if (!u.value || !n.value || !r.wrapElement)
      return;
    const _ = Math.abs(o.target.getBoundingClientRect()[t.value.direction] - o[t.value.client]), T = u.value[t.value.offset] / 2, x = (_ - T) * 100 * v.value / n.value[t.value.offset];
    r.wrapElement[t.value.scroll] = x * r.wrapElement[t.value.scrollSize] / 100;
  }, w = (o) => {
    o.stopImmediatePropagation(), f = true, document.addEventListener("mousemove", S), document.addEventListener("mouseup", h), a = document.onselectstart, document.onselectstart = () => false;
  }, S = (o) => {
    if (!n.value || !u.value || f === false)
      return;
    const _ = m.value[t.value.axis];
    if (!_)
      return;
    const T = (n.value.getBoundingClientRect()[t.value.direction] - o[t.value.client]) * -1, x = u.value[t.value.offset] - _, J = (T - x) * 100 * v.value / n.value[t.value.offset];
    r.wrapElement[t.value.scroll] = J * r.wrapElement[t.value.scrollSize] / 100;
  }, h = () => {
    f = false, m.value[t.value.axis] = 0, document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", h), e(), p && (d.value = false);
  }, P = () => {
    p = false, d.value = !!c.size;
  }, z = () => {
    p = true, d.value = f;
  };
  Z(() => {
    e(), document.removeEventListener("mouseup", h);
  });
  const e = () => {
    document.onselectstart !== a && (document.onselectstart = a);
  };
  return B(j(r, "scrollbarElement"), "mousemove", P), B(j(r, "scrollbarElement"), "mouseleave", z), (o, _) => (k(), O(ae, { name: y(l).b("fade"), persisted: "" }, { default: G(() => [ee(M("div", { ref_key: "instance", ref: n, class: C([y(l).e("bar"), y(l).is(y(t).key)]), onMousedown: E }, [M("div", { ref_key: "thumb", ref: u, class: C(y(l).e("thumb")), style: A(y(s)), onMousedown: b }, null, 38)], 34), [[te, o.always || d.value]])]), _: 1 }, 8, ["name"]));
} });
var q = $(ze, [["__file", "thumb.vue"]]);
const _e = W({ always: { type: Boolean, default: true }, minSize: { type: Number, required: true } }), Ee = N({ __name: "bar", props: _e, setup(g, { expose: c }) {
  const r = g, l = V(D), n = i(0), u = i(0), m = i(""), d = i(""), f = i(1), p = i(1);
  return c({ handleScroll: (s) => {
    if (s) {
      const v = s.offsetHeight - H, b = s.offsetWidth - H;
      u.value = s.scrollTop * 100 / v * f.value, n.value = s.scrollLeft * 100 / b * p.value;
    }
  }, update: () => {
    const s = l == null ? void 0 : l.wrapElement;
    if (!s)
      return;
    const v = s.offsetHeight - H, b = s.offsetWidth - H, E = v ** 2 / s.scrollHeight, w = b ** 2 / s.scrollWidth, S = Math.max(E, r.minSize), h = Math.max(w, r.minSize);
    f.value = E / (v - E) / (S / (v - S)), p.value = w / (b - w) / (h / (b - h)), d.value = S + H < v ? `${S}px` : "", m.value = h + H < b ? `${h}px` : "";
  } }), (s, v) => (k(), I(se, null, [K(q, { move: n.value, ratio: p.value, size: m.value, always: s.always }, null, 8, ["move", "ratio", "size", "always"]), K(q, { move: u.value, ratio: f.value, size: d.value, vertical: "", always: s.always }, null, 8, ["move", "ratio", "size", "always"])], 64));
} });
var Te = $(Ee, [["__file", "bar.vue"]]);
const He = W({ height: { type: [String, Number], default: "" }, maxHeight: { type: [String, Number], default: "" }, native: { type: Boolean, default: false }, wrapStyle: { type: oe([String, Object, Array]), default: "" }, wrapClass: { type: [String, Array], default: "" }, viewClass: { type: [String, Array], default: "" }, viewStyle: { type: [String, Array, Object], default: "" }, noresize: Boolean, tag: { type: String, default: "div" }, always: Boolean, minSize: { type: Number, default: 20 }, tabindex: { type: [String, Number], default: void 0 }, id: String, role: String, ...re(["ariaLabel", "ariaOrientation"]) }), Le = { scroll: ({ scrollTop: g, scrollLeft: c }) => [g, c].every(R) }, Re = "ElScrollbar", ke = N({ name: Re }), Ce = N({ ...ke, props: He, emits: Le, setup(g, { expose: c, emit: r }) {
  const l = g, n = F("scrollbar");
  let u, m, d = 0, f = 0;
  const p = i(), a = i(), t = i(), s = i(), v = L(() => {
    const e = {};
    return l.height && (e.height = U(l.height)), l.maxHeight && (e.maxHeight = U(l.maxHeight)), [l.wrapStyle, e];
  }), b = L(() => [l.wrapClass, n.e("wrap"), { [n.em("wrap", "hidden-default")]: !l.native }]), E = L(() => [n.e("view"), l.viewClass]), w = () => {
    var e;
    a.value && ((e = s.value) == null || e.handleScroll(a.value), d = a.value.scrollTop, f = a.value.scrollLeft, r("scroll", { scrollTop: a.value.scrollTop, scrollLeft: a.value.scrollLeft }));
  };
  function S(e, o) {
    be(e) ? a.value.scrollTo(e) : R(e) && R(o) && a.value.scrollTo(e, o);
  }
  const h = (e) => {
    R(e) && (a.value.scrollTop = e);
  }, P = (e) => {
    R(e) && (a.value.scrollLeft = e);
  }, z = () => {
    var e;
    (e = s.value) == null || e.update();
  };
  return X(() => l.noresize, (e) => {
    e ? (u == null ? void 0 : u(), m == null ? void 0 : m()) : ({ stop: u } = ne(t, z), m = B("resize", z));
  }, { immediate: true }), X(() => [l.maxHeight, l.height], () => {
    l.native || Y(() => {
      var e;
      z(), a.value && ((e = s.value) == null || e.handleScroll(a.value));
    });
  }), ie(D, ce({ scrollbarElement: p, wrapElement: a })), ue(() => {
    a.value && (a.value.scrollTop = d, a.value.scrollLeft = f);
  }), ve(() => {
    l.native || Y(() => {
      z();
    });
  }), fe(() => z()), c({ wrapRef: a, update: z, scrollTo: S, setScrollTop: h, setScrollLeft: P, handleScroll: w }), (e, o) => (k(), I("div", { ref_key: "scrollbarRef", ref: p, class: C(y(n).b()) }, [M("div", { ref_key: "wrapRef", ref: a, class: C(y(b)), style: A(y(v)), tabindex: e.tabindex, onScroll: w }, [(k(), O(de(e.tag), { id: e.id, ref_key: "resizeRef", ref: t, class: C(y(E)), style: A(e.viewStyle), role: e.role, "aria-label": e.ariaLabel, "aria-orientation": e.ariaOrientation }, { default: G(() => [me(e.$slots, "default")]), _: 3 }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))], 46, ["tabindex"]), e.native ? pe("v-if", true) : (k(), O(Te, { key: 0, ref_key: "barRef", ref: s, always: e.always, "min-size": e.minSize }, null, 8, ["always", "min-size"]))], 2));
} });
var Ne = $(Ce, [["__file", "scrollbar.vue"]]);
const xe = he(Ne);
export {
  xe as E
};
