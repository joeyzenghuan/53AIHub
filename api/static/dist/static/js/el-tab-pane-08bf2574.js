import { ap as U, aH as J, bL as le, u as F, b3 as Q, ak as ee, aE as te, au as K, r as N, aG as M, W as ae, c3 as Y, bg as ge, b as re, c as ie, n as ce, z as O, aN as _e, aC as ue, c4 as Te, c5 as Ne, al as V, o as de, ba as Pe, f as c, y as I, B as Ce, bS as Ee, Z as Se, bi as z, an as we, q as Z, a6 as $e, aS as be, b9 as se, aM as xe, aU as Be, as as ke, c6 as ne, ae as Oe, a as Re, g as ze, v as Ae, e as Le, aD as Me, c7 as Fe } from "./index-7b696e01.js";
import { c as A } from "./el-select-2909247e.js";
import { u as Ve } from "./index-6fa206ef.js";
const W = Symbol("tabsRootContextKey"), De = U({ tabs: { type: J(Array), default: () => le([]) } }), ve = "ElTabBar", Ie = F({ name: ve }), Ue = F({ ...Ie, props: De, setup(e, { expose: l }) {
  const g = e, _ = Q(), a = ee(W);
  a || te(ve, "<el-tabs><el-tab-bar /></el-tabs>");
  const b = K("tabs"), S = N(), v = N(), p = () => {
    let n = 0, m = 0;
    const d = ["top", "bottom"].includes(a.props.tabPosition) ? "width" : "height", k = d === "width" ? "x" : "y", s = k === "x" ? "left" : "top";
    return g.tabs.every((w) => {
      var P, x;
      const y = (x = (P = _.parent) == null ? void 0 : P.refs) == null ? void 0 : x[`tab-${w.uid}`];
      if (!y)
        return false;
      if (!w.active)
        return true;
      n = y[`offset${A(s)}`], m = y[`client${A(d)}`];
      const $ = window.getComputedStyle(y);
      return d === "width" && (m -= Number.parseFloat($.paddingLeft) + Number.parseFloat($.paddingRight), n += Number.parseFloat($.paddingLeft)), false;
    }), { [d]: `${m}px`, transform: `translate${A(k)}(${n}px)` };
  }, T = () => v.value = p(), h = [], r = () => {
    var n;
    h.forEach((d) => d.stop()), h.length = 0;
    const m = (n = _.parent) == null ? void 0 : n.refs;
    if (m) {
      for (const d in m)
        if (d.startsWith("tab-")) {
          const k = m[d];
          k && h.push(Y(k, T));
        }
    }
  };
  M(() => g.tabs, async () => {
    await ae(), T(), r();
  }, { immediate: true });
  const u = Y(S, () => T());
  return ge(() => {
    h.forEach((n) => n.stop()), h.length = 0, u.stop();
  }), l({ ref: S, update: T }), (n, m) => (re(), ie("div", { ref_key: "barRef", ref: S, class: ce([O(b).e("active-bar"), O(b).is(O(a).props.tabPosition)]), style: _e(v.value) }, null, 6));
} });
var Ke = ue(Ue, [["__file", "tab-bar.vue"]]);
const We = U({ panes: { type: J(Array), default: () => le([]) }, currentName: { type: [String, Number], default: "" }, editable: Boolean, type: { type: String, values: ["card", "border-card", ""], default: "" }, stretch: Boolean }), qe = { tabClick: (e, l, g) => g instanceof Event, tabRemove: (e, l) => l instanceof Event }, oe = "ElTabNav", He = F({ name: oe, props: We, emits: qe, setup(e, { expose: l, emit: g }) {
  const _ = ee(W);
  _ || te(oe, "<el-tabs><tab-nav /></el-tabs>");
  const a = K("tabs"), b = Te(), S = Ne(), v = N(), p = N(), T = N(), h = N(), r = N(false), u = N(0), n = N(false), m = N(true), d = V(() => ["top", "bottom"].includes(_.props.tabPosition) ? "width" : "height"), k = V(() => ({ transform: `translate${d.value === "width" ? "X" : "Y"}(-${u.value}px)` })), s = () => {
    if (!v.value)
      return;
    const o = v.value[`offset${A(d.value)}`], i = u.value;
    if (!i)
      return;
    const t = i > o ? i - o : 0;
    u.value = t;
  }, w = () => {
    if (!v.value || !p.value)
      return;
    const o = p.value[`offset${A(d.value)}`], i = v.value[`offset${A(d.value)}`], t = u.value;
    if (o - t <= i)
      return;
    const C = o - t > i * 2 ? t + i : o - i;
    u.value = C;
  }, P = async () => {
    const o = p.value;
    if (!r.value || !T.value || !v.value || !o)
      return;
    await ae();
    const i = T.value.querySelector(".is-active");
    if (!i)
      return;
    const t = v.value, C = ["top", "bottom"].includes(_.props.tabPosition), f = i.getBoundingClientRect(), E = t.getBoundingClientRect(), D = C ? o.offsetWidth - E.width : o.offsetHeight - E.height, R = u.value;
    let B = R;
    C ? (f.left < E.left && (B = R - (E.left - f.left)), f.right > E.right && (B = R + f.right - E.right)) : (f.top < E.top && (B = R - (E.top - f.top)), f.bottom > E.bottom && (B = R + (f.bottom - E.bottom))), B = Math.max(B, 0), u.value = Math.min(B, D);
  }, x = () => {
    var o;
    if (!p.value || !v.value)
      return;
    e.stretch && ((o = h.value) == null || o.update());
    const i = p.value[`offset${A(d.value)}`], t = v.value[`offset${A(d.value)}`], C = u.value;
    t < i ? (r.value = r.value || {}, r.value.prev = C, r.value.next = C + t < i, i - C < t && (u.value = i - t)) : (r.value = false, C > 0 && (u.value = 0));
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
    let f = t.indexOf(o.target) + i;
    f < 0 ? f = t.length - 1 : f >= t.length && (f = 0), t[f].focus({ preventScroll: true }), t[f].click(), $();
  }, $ = () => {
    m.value && (n.value = true);
  }, q = () => n.value = false;
  return M(b, (o) => {
    o === "hidden" ? m.value = false : o === "visible" && setTimeout(() => m.value = true, 50);
  }), M(S, (o) => {
    o ? setTimeout(() => m.value = true, 50) : m.value = false;
  }), Y(T, x), de(() => setTimeout(() => P(), 0)), Pe(() => x()), l({ scrollToActiveTab: P, removeFocus: q }), () => {
    const o = r.value ? [c("span", { class: [a.e("nav-prev"), a.is("disabled", !r.value.prev)], onClick: s }, [c(I, null, { default: () => [c(Ce, null, null)] })]), c("span", { class: [a.e("nav-next"), a.is("disabled", !r.value.next)], onClick: w }, [c(I, null, { default: () => [c(Ee, null, null)] })])] : null, i = e.panes.map((t, C) => {
      var f, E, D, R;
      const B = t.uid, H = t.props.disabled, j = (E = (f = t.props.name) != null ? f : t.index) != null ? E : `${C}`, G = !H && (t.isClosable || e.editable);
      t.index = `${C}`;
      const me = G ? c(I, { class: "is-icon-close", onClick: (L) => g("tabRemove", t, L) }, { default: () => [c(Se, null, null)] }) : null, he = ((R = (D = t.slots).label) == null ? void 0 : R.call(D)) || t.props.label, ye = !H && t.active ? 0 : -1;
      return c("div", { ref: `tab-${B}`, class: [a.e("item"), a.is(_.props.tabPosition), a.is("active", t.active), a.is("disabled", H), a.is("closable", G), a.is("focus", n.value)], id: `tab-${j}`, key: `tab-${B}`, "aria-controls": `pane-${j}`, role: "tab", "aria-selected": t.active, tabindex: ye, onFocus: () => $(), onBlur: () => q(), onClick: (L) => {
        q(), g("tabClick", t, j, L);
      }, onKeydown: (L) => {
        G && (L.code === z.delete || L.code === z.backspace) && g("tabRemove", t, L);
      } }, [he, me]);
    });
    return c("div", { ref: T, class: [a.e("nav-wrap"), a.is("scrollable", !!r.value), a.is(_.props.tabPosition)] }, [o, c("div", { class: a.e("nav-scroll"), ref: v }, [c("div", { class: [a.e("nav"), a.is(_.props.tabPosition), a.is("stretch", e.stretch && ["top", "bottom"].includes(_.props.tabPosition))], ref: p, style: k.value, role: "tablist", onKeydown: y }, [e.type ? null : c(Ke, { ref: h, tabs: [...e.panes] }, null), i])])]);
  };
} }), je = U({ type: { type: String, values: ["card", "border-card", ""], default: "" }, closable: Boolean, addable: Boolean, modelValue: { type: [String, Number] }, editable: Boolean, tabPosition: { type: String, values: ["top", "right", "bottom", "left"], default: "top" }, beforeLeave: { type: J(Function), default: () => true }, stretch: Boolean }), X = (e) => xe(e) || Be(e), Ge = { [be]: (e) => X(e), tabClick: (e, l) => l instanceof Event, tabChange: (e) => X(e), edit: (e, l) => ["remove", "add"].includes(l), tabRemove: (e) => X(e), tabAdd: () => true }, Xe = F({ name: "ElTabs", props: je, emits: Ge, setup(e, { emit: l, slots: g, expose: _ }) {
  var a;
  const b = K("tabs"), S = V(() => ["left", "right"].includes(e.tabPosition)), { children: v, addChild: p, removeChild: T } = Ve(Q(), "ElTabPane"), h = N(), r = N((a = e.modelValue) != null ? a : "0"), u = async (s, w = false) => {
    var P, x;
    if (!(r.value === s || se(s)))
      try {
        let y;
        if (e.beforeLeave) {
          const $ = e.beforeLeave(s, r.value);
          y = $ instanceof Promise ? await $ : $;
        } else
          y = true;
        y !== false && (r.value = s, w && (l(be, s), l("tabChange", s)), (x = (P = h.value) == null ? void 0 : P.removeFocus) == null || x.call(P));
      } catch {
      }
  }, n = (s, w, P) => {
    s.props.disabled || (u(w, true), l("tabClick", s, P));
  }, m = (s, w) => {
    s.props.disabled || se(s.props.name) || (w.stopPropagation(), l("edit", s.props.name, "remove"), l("tabRemove", s.props.name));
  }, d = () => {
    l("edit", void 0, "add"), l("tabAdd");
  };
  M(() => e.modelValue, (s) => u(s)), M(r, async () => {
    var s;
    await ae(), (s = h.value) == null || s.scrollToActiveTab();
  }), we(W, { props: e, currentName: r, registerPane: (s) => {
    v.value.push(s);
  }, sortPane: p, unregisterPane: T }), _({ currentName: r });
  const k = ({ render: s }) => s();
  return () => {
    const s = g["add-icon"], w = e.editable || e.addable ? c("div", { class: [b.e("new-tab"), S.value && b.e("new-tab-vertical")], tabindex: "0", onClick: d, onKeydown: (y) => {
      [z.enter, z.numpadEnter].includes(y.code) && d();
    } }, [s ? Z(g, "add-icon") : c(I, { class: b.is("icon-plus") }, { default: () => [c($e, null, null)] })]) : null, P = c("div", { class: [b.e("header"), S.value && b.e("header-vertical"), b.is(e.tabPosition)] }, [c(k, { render: () => {
      const y = v.value.some(($) => $.slots.label);
      return c(He, { ref: h, currentName: r.value, editable: e.editable, type: e.type, panes: v.value, stretch: e.stretch, onTabClick: n, onTabRemove: m }, { $stable: !y });
    } }, null), w]), x = c("div", { class: b.e("content") }, [Z(g, "default")]);
    return c("div", { class: [b.b(), b.m(e.tabPosition), { [b.m("card")]: e.type === "card", [b.m("border-card")]: e.type === "border-card" }] }, [x, P]);
  };
} });
var Ye = Xe;
const Ze = U({ label: { type: String, default: "" }, name: { type: [String, Number] }, closable: Boolean, disabled: Boolean, lazy: Boolean }), fe = "ElTabPane", Je = F({ name: fe }), Qe = F({ ...Je, props: Ze, setup(e) {
  const l = e, g = Q(), _ = ke(), a = ee(W);
  a || te(fe, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
  const b = K("tab-pane"), S = N(), v = V(() => l.closable || a.props.closable), p = ne(() => {
    var n;
    return a.currentName.value === ((n = l.name) != null ? n : S.value);
  }), T = N(p.value), h = V(() => {
    var n;
    return (n = l.name) != null ? n : S.value;
  }), r = ne(() => !l.lazy || T.value || p.value);
  M(p, (n) => {
    n && (T.value = true);
  });
  const u = Oe({ uid: g.uid, slots: _, props: l, paneName: h, active: p, index: S, isClosable: v });
  return a.registerPane(u), de(() => {
    a.sortPane(u);
  }), Re(() => {
    a.unregisterPane(u.uid);
  }), (n, m) => O(r) ? ze((re(), ie("div", { key: 0, id: `pane-${O(h)}`, class: ce(O(b).b()), role: "tabpanel", "aria-hidden": !O(p), "aria-labelledby": `tab-${O(h)}` }, [Z(n.$slots, "default")], 10, ["id", "aria-hidden", "aria-labelledby"])), [[Ae, O(p)]]) : Le("v-if", true);
} });
var pe = ue(Qe, [["__file", "tab-pane.vue"]]);
const st = Me(Ye, { TabPane: pe }), nt = Fe(pe);
export {
  nt as E,
  st as a
};
