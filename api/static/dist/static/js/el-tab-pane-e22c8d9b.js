import { aP as U, b1 as J, c0 as le, y as M, h as Q, aI as ee, bB as te, aU as K, r as N, $ as L, n as ae, bT as X, bh as ge, b as re, c as ie, q as ce, u as O, a7 as _e, a$ as ue, cm as Te, cn as Ne, Y as V, o as de, bG as Pe, f as c, G as D, H as $e, c6 as Ce, a2 as we, bj as z, ax as Ee, s as Z, aB as Se, bp as be, bF as se, b5 as xe, br as Be, aS as ke, co as ne, Z as Oe, a as Re, m as ze, p as Ae, e as Fe, b0 as Le, cl as Me } from "./index-8579fe4a.js";
import { c as A } from "./el-select-8a770a23.js";
import { u as Ve } from "./index-3dae9a97.js";
const q = Symbol("tabsRootContextKey"), Ie = U({ tabs: { type: J(Array), default: () => le([]) } }), ve = "ElTabBar", De = M({ name: ve }), Ue = M({ ...De, props: Ie, setup(e, { expose: l }) {
  const g = e, _ = Q(), a = ee(q);
  a || te(ve, "<el-tabs><el-tab-bar /></el-tabs>");
  const b = K("tabs"), w = N(), v = N(), f = () => {
    let n = 0, h = 0;
    const d = ["top", "bottom"].includes(a.props.tabPosition) ? "width" : "height", k = d === "width" ? "x" : "y", s = k === "x" ? "left" : "top";
    return g.tabs.every((E) => {
      var P, x;
      const y = (x = (P = _.parent) == null ? void 0 : P.refs) == null ? void 0 : x[`tab-${E.uid}`];
      if (!y)
        return false;
      if (!E.active)
        return true;
      n = y[`offset${A(s)}`], h = y[`client${A(d)}`];
      const S = window.getComputedStyle(y);
      return d === "width" && (h -= Number.parseFloat(S.paddingLeft) + Number.parseFloat(S.paddingRight), n += Number.parseFloat(S.paddingLeft)), false;
    }), { [d]: `${h}px`, transform: `translate${A(k)}(${n}px)` };
  }, T = () => v.value = f(), p = [], r = () => {
    var n;
    p.forEach((d) => d.stop()), p.length = 0;
    const h = (n = _.parent) == null ? void 0 : n.refs;
    if (h) {
      for (const d in h)
        if (d.startsWith("tab-")) {
          const k = h[d];
          k && p.push(X(k, T));
        }
    }
  };
  L(() => g.tabs, async () => {
    await ae(), T(), r();
  }, { immediate: true });
  const u = X(w, () => T());
  return ge(() => {
    p.forEach((n) => n.stop()), p.length = 0, u.stop();
  }), l({ ref: w, update: T }), (n, h) => (re(), ie("div", { ref_key: "barRef", ref: w, class: ce([O(b).e("active-bar"), O(b).is(O(a).props.tabPosition)]), style: _e(v.value) }, null, 6));
} });
var Ke = ue(Ue, [["__file", "tab-bar.vue"]]);
const qe = U({ panes: { type: J(Array), default: () => le([]) }, currentName: { type: [String, Number], default: "" }, editable: Boolean, type: { type: String, values: ["card", "border-card", ""], default: "" }, stretch: Boolean }), He = { tabClick: (e, l, g) => g instanceof Event, tabRemove: (e, l) => l instanceof Event }, oe = "ElTabNav", We = M({ name: oe, props: qe, emits: He, setup(e, { expose: l, emit: g }) {
  const _ = ee(q);
  _ || te(oe, "<el-tabs><tab-nav /></el-tabs>");
  const a = K("tabs"), b = Te(), w = Ne(), v = N(), f = N(), T = N(), p = N(), r = N(false), u = N(0), n = N(false), h = N(true), d = V(() => ["top", "bottom"].includes(_.props.tabPosition) ? "width" : "height"), k = V(() => ({ transform: `translate${d.value === "width" ? "X" : "Y"}(-${u.value}px)` })), s = () => {
    if (!v.value)
      return;
    const o = v.value[`offset${A(d.value)}`], i = u.value;
    if (!i)
      return;
    const t = i > o ? i - o : 0;
    u.value = t;
  }, E = () => {
    if (!v.value || !f.value)
      return;
    const o = f.value[`offset${A(d.value)}`], i = v.value[`offset${A(d.value)}`], t = u.value;
    if (o - t <= i)
      return;
    const $ = o - t > i * 2 ? t + i : o - i;
    u.value = $;
  }, P = async () => {
    const o = f.value;
    if (!r.value || !T.value || !v.value || !o)
      return;
    await ae();
    const i = T.value.querySelector(".is-active");
    if (!i)
      return;
    const t = v.value, $ = ["top", "bottom"].includes(_.props.tabPosition), m = i.getBoundingClientRect(), C = t.getBoundingClientRect(), I = $ ? o.offsetWidth - C.width : o.offsetHeight - C.height, R = u.value;
    let B = R;
    $ ? (m.left < C.left && (B = R - (C.left - m.left)), m.right > C.right && (B = R + m.right - C.right)) : (m.top < C.top && (B = R - (C.top - m.top)), m.bottom > C.bottom && (B = R + (m.bottom - C.bottom))), B = Math.max(B, 0), u.value = Math.min(B, I);
  }, x = () => {
    var o;
    if (!f.value || !v.value)
      return;
    e.stretch && ((o = p.value) == null || o.update());
    const i = f.value[`offset${A(d.value)}`], t = v.value[`offset${A(d.value)}`], $ = u.value;
    t < i ? (r.value = r.value || {}, r.value.prev = $, r.value.next = $ + t < i, i - $ < t && (u.value = i - t)) : (r.value = false, $ > 0 && (u.value = 0));
  }, y = (o) => {
    let i = 0;
    switch (o.code) {
      case z.left:
      case z.up:
        i = -1;
        break;
      case z.right:
      case z.down:
        i = 1;
        break;
      default:
        return;
    }
    const t = Array.from(o.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));
    let m = t.indexOf(o.target) + i;
    m < 0 ? m = t.length - 1 : m >= t.length && (m = 0), t[m].focus({ preventScroll: true }), t[m].click(), S();
  }, S = () => {
    h.value && (n.value = true);
  }, H = () => n.value = false;
  return L(b, (o) => {
    o === "hidden" ? h.value = false : o === "visible" && setTimeout(() => h.value = true, 50);
  }), L(w, (o) => {
    o ? setTimeout(() => h.value = true, 50) : h.value = false;
  }), X(T, x), de(() => setTimeout(() => P(), 0)), Pe(() => x()), l({ scrollToActiveTab: P, removeFocus: H, tabListRef: f, tabBarRef: p }), () => {
    const o = r.value ? [c("span", { class: [a.e("nav-prev"), a.is("disabled", !r.value.prev)], onClick: s }, [c(D, null, { default: () => [c($e, null, null)] })]), c("span", { class: [a.e("nav-next"), a.is("disabled", !r.value.next)], onClick: E }, [c(D, null, { default: () => [c(Ce, null, null)] })])] : null, i = e.panes.map((t, $) => {
      var m, C, I, R;
      const B = t.uid, W = t.props.disabled, j = (C = (m = t.props.name) != null ? m : t.index) != null ? C : `${$}`, G = !W && (t.isClosable || e.editable);
      t.index = `${$}`;
      const me = G ? c(D, { class: "is-icon-close", onClick: (F) => g("tabRemove", t, F) }, { default: () => [c(we, null, null)] }) : null, he = ((R = (I = t.slots).label) == null ? void 0 : R.call(I)) || t.props.label, ye = !W && t.active ? 0 : -1;
      return c("div", { ref: `tab-${B}`, class: [a.e("item"), a.is(_.props.tabPosition), a.is("active", t.active), a.is("disabled", W), a.is("closable", G), a.is("focus", n.value)], id: `tab-${j}`, key: `tab-${B}`, "aria-controls": `pane-${j}`, role: "tab", "aria-selected": t.active, tabindex: ye, onFocus: () => S(), onBlur: () => H(), onClick: (F) => {
        H(), g("tabClick", t, j, F);
      }, onKeydown: (F) => {
        G && (F.code === z.delete || F.code === z.backspace) && g("tabRemove", t, F);
      } }, [he, me]);
    });
    return c("div", { ref: T, class: [a.e("nav-wrap"), a.is("scrollable", !!r.value), a.is(_.props.tabPosition)] }, [o, c("div", { class: a.e("nav-scroll"), ref: v }, [c("div", { class: [a.e("nav"), a.is(_.props.tabPosition), a.is("stretch", e.stretch && ["top", "bottom"].includes(_.props.tabPosition))], ref: f, style: k.value, role: "tablist", onKeydown: y }, [e.type ? null : c(Ke, { ref: p, tabs: [...e.panes] }, null), i])])]);
  };
} }), je = U({ type: { type: String, values: ["card", "border-card", ""], default: "" }, closable: Boolean, addable: Boolean, modelValue: { type: [String, Number] }, editable: Boolean, tabPosition: { type: String, values: ["top", "right", "bottom", "left"], default: "top" }, beforeLeave: { type: J(Function), default: () => true }, stretch: Boolean }), Y = (e) => xe(e) || Be(e), Ge = { [be]: (e) => Y(e), tabClick: (e, l) => l instanceof Event, tabChange: (e) => Y(e), edit: (e, l) => ["remove", "add"].includes(l), tabRemove: (e) => Y(e), tabAdd: () => true }, Ye = M({ name: "ElTabs", props: je, emits: Ge, setup(e, { emit: l, slots: g, expose: _ }) {
  var a;
  const b = K("tabs"), w = V(() => ["left", "right"].includes(e.tabPosition)), { children: v, addChild: f, removeChild: T } = Ve(Q(), "ElTabPane"), p = N(), r = N((a = e.modelValue) != null ? a : "0"), u = async (s, E = false) => {
    var P, x;
    if (!(r.value === s || se(s)))
      try {
        let y;
        if (e.beforeLeave) {
          const S = e.beforeLeave(s, r.value);
          y = S instanceof Promise ? await S : S;
        } else
          y = true;
        y !== false && (r.value = s, E && (l(be, s), l("tabChange", s)), (x = (P = p.value) == null ? void 0 : P.removeFocus) == null || x.call(P));
      } catch {
      }
  }, n = (s, E, P) => {
    s.props.disabled || (l("tabClick", s, P), u(E, true));
  }, h = (s, E) => {
    s.props.disabled || se(s.props.name) || (E.stopPropagation(), l("edit", s.props.name, "remove"), l("tabRemove", s.props.name));
  }, d = () => {
    l("edit", void 0, "add"), l("tabAdd");
  };
  L(() => e.modelValue, (s) => u(s)), L(r, async () => {
    var s;
    await ae(), (s = p.value) == null || s.scrollToActiveTab();
  }), Ee(q, { props: e, currentName: r, registerPane: (s) => {
    v.value.push(s);
  }, sortPane: f, unregisterPane: T }), _({ currentName: r, tabNavRef: p });
  const k = ({ render: s }) => s();
  return () => {
    const s = g["add-icon"], E = e.editable || e.addable ? c("div", { class: [b.e("new-tab"), w.value && b.e("new-tab-vertical")], tabindex: "0", onClick: d, onKeydown: (y) => {
      [z.enter, z.numpadEnter].includes(y.code) && d();
    } }, [s ? Z(g, "add-icon") : c(D, { class: b.is("icon-plus") }, { default: () => [c(Se, null, null)] })]) : null, P = c("div", { class: [b.e("header"), w.value && b.e("header-vertical"), b.is(e.tabPosition)] }, [c(k, { render: () => {
      const y = v.value.some((S) => S.slots.label);
      return c(We, { ref: p, currentName: r.value, editable: e.editable, type: e.type, panes: v.value, stretch: e.stretch, onTabClick: n, onTabRemove: h }, { $stable: !y });
    } }, null), E]), x = c("div", { class: b.e("content") }, [Z(g, "default")]);
    return c("div", { class: [b.b(), b.m(e.tabPosition), { [b.m("card")]: e.type === "card", [b.m("border-card")]: e.type === "border-card" }] }, [x, P]);
  };
} });
var Xe = Ye;
const Ze = U({ label: { type: String, default: "" }, name: { type: [String, Number] }, closable: Boolean, disabled: Boolean, lazy: Boolean }), fe = "ElTabPane", Je = M({ name: fe }), Qe = M({ ...Je, props: Ze, setup(e) {
  const l = e, g = Q(), _ = ke(), a = ee(q);
  a || te(fe, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
  const b = K("tab-pane"), w = N(), v = V(() => l.closable || a.props.closable), f = ne(() => {
    var n;
    return a.currentName.value === ((n = l.name) != null ? n : w.value);
  }), T = N(f.value), p = V(() => {
    var n;
    return (n = l.name) != null ? n : w.value;
  }), r = ne(() => !l.lazy || T.value || f.value);
  L(f, (n) => {
    n && (T.value = true);
  });
  const u = Oe({ uid: g.uid, slots: _, props: l, paneName: p, active: f, index: w, isClosable: v });
  return a.registerPane(u), de(() => {
    a.sortPane(u);
  }), Re(() => {
    a.unregisterPane(u.uid);
  }), (n, h) => O(r) ? ze((re(), ie("div", { key: 0, id: `pane-${O(p)}`, class: ce(O(b).b()), role: "tabpanel", "aria-hidden": !O(f), "aria-labelledby": `tab-${O(p)}` }, [Z(n.$slots, "default")], 10, ["id", "aria-hidden", "aria-labelledby"])), [[Ae, O(f)]]) : Fe("v-if", true);
} });
var pe = ue(Qe, [["__file", "tab-pane.vue"]]);
const st = Le(Xe, { TabPane: pe }), nt = Me(pe);
export {
  nt as E,
  st as a
};
