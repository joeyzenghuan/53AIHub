import { ap as ye, aH as X, bi as T, aC as M, u as A, r as $, ak as C, al as y, an as J, cA as $e, c8 as Y, z as k, aG as ce, bR as Te, q as N, cB as D, cC as w, b as P, h as H, i as m, f as S, b$ as Fe, c0 as Re, $ as pe, ab as Se, cD as Oe, y as fe, I as ke, b3 as ve, au as ee, av as De, ax as Pe, cE as Ne, bu as me, bg as Be, aY as Ke, c as W, bd as Le, aA as j, n as q, e as Z, W as Ge, d as Me, aO as Ae, am as x, F as ze, cF as ge, cG as ie, cH as He, aN as Ue, aD as Ye, c7 as be } from "./index-6feda8be.js";
import { E as Ve } from "./el-scrollbar-1c0147c5.js";
import { c as Je, E as We, d as je, a as we, C as qe, b as Qe, e as Xe, f as Ze, g as xe, F as eo, L as oo } from "./dropdown-4cbb8c7d.js";
const no = ye({ style: { type: X([String, Array, Object]) }, currentTabId: { type: X(String) }, defaultCurrentTabId: String, loop: Boolean, dir: { type: String, values: ["ltr", "rtl"], default: "ltr" }, orientation: { type: X(String) }, onBlur: Function, onFocus: Function, onMousedown: Function }), { ElCollection: to, ElCollectionItem: ro, COLLECTION_INJECTION_KEY: oe, COLLECTION_ITEM_INJECTION_KEY: lo } = Je("RovingFocusGroup"), ne = Symbol("elRovingFocusGroup"), _e = Symbol("elRovingFocusGroupItem"), so = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" }, ao = (e, n) => {
  if (n !== "rtl")
    return e;
  switch (e) {
    case T.right:
      return T.left;
    case T.left:
      return T.right;
    default:
      return e;
  }
}, io = (e, n, a) => {
  const t = ao(e.code, a);
  if (!(n === "vertical" && [T.left, T.right].includes(t)) && !(n === "horizontal" && [T.up, T.down].includes(t)))
    return so[t];
}, uo = (e, n) => e.map((a, t) => e[(t + n) % e.length]), te = (e) => {
  const { activeElement: n } = document;
  for (const a of e)
    if (a === n || (a.focus(), n !== document.activeElement))
      return;
}, de = "currentTabIdChange", ue = "rovingFocusGroup.entryFocus", co = { bubbles: false, cancelable: true }, po = A({ name: "ElRovingFocusGroupImpl", inheritAttrs: false, props: no, emits: [de, "entryFocus"], setup(e, { emit: n }) {
  var a;
  const t = $((a = e.currentTabId || e.defaultCurrentTabId) != null ? a : null), c = $(false), u = $(false), i = $(), { getItems: l } = C(oe, void 0), p = y(() => [{ outline: "none" }, e.style]), g = (d) => {
    n(de, d);
  }, b = () => {
    c.value = true;
  }, _ = D((d) => {
    var f;
    (f = e.onMousedown) == null || f.call(e, d);
  }, () => {
    u.value = true;
  }), h = D((d) => {
    var f;
    (f = e.onFocus) == null || f.call(e, d);
  }, (d) => {
    const f = !k(u), { target: B, currentTarget: F } = d;
    if (B === F && f && !k(c)) {
      const K = new Event(ue, co);
      if (F == null ? void 0 : F.dispatchEvent(K), !K.defaultPrevented) {
        const v = l().filter((R) => R.focusable), O = v.find((R) => R.active), I = v.find((R) => R.id === k(t)), G = [O, I, ...v].filter(Boolean).map((R) => R.ref);
        te(G);
      }
    }
    u.value = false;
  }), o = D((d) => {
    var f;
    (f = e.onBlur) == null || f.call(e, d);
  }, () => {
    c.value = false;
  }), s = (...d) => {
    n("entryFocus", ...d);
  };
  J(ne, { currentTabbedId: $e(t), loop: Y(e, "loop"), tabIndex: y(() => k(c) ? -1 : 0), rovingFocusGroupRef: i, rovingFocusGroupRootStyle: p, orientation: Y(e, "orientation"), dir: Y(e, "dir"), onItemFocus: g, onItemShiftTab: b, onBlur: o, onFocus: h, onMousedown: _ }), ce(() => e.currentTabId, (d) => {
    t.value = d ?? null;
  }), Te(i, ue, s);
} });
function fo(e, n, a, t, c, u) {
  return N(e.$slots, "default");
}
var vo = M(po, [["render", fo], ["__file", "roving-focus-group-impl.vue"]]);
const mo = A({ name: "ElRovingFocusGroup", components: { ElFocusGroupCollection: to, ElRovingFocusGroupImpl: vo } });
function go(e, n, a, t, c, u) {
  const i = w("el-roving-focus-group-impl"), l = w("el-focus-group-collection");
  return P(), H(l, null, { default: m(() => [S(i, Fe(Re(e.$attrs)), { default: m(() => [N(e.$slots, "default")]), _: 3 }, 16)]), _: 3 });
}
var bo = M(mo, [["render", go], ["__file", "roving-focus-group.vue"]]);
const Q = Symbol("elDropdown"), { ButtonGroup: wo } = pe, _o = A({ name: "ElDropdown", components: { ElButton: pe, ElButtonGroup: wo, ElScrollbar: Ve, ElDropdownCollection: We, ElTooltip: Se, ElRovingFocusGroup: bo, ElOnlyChild: Oe, ElIcon: fe, ArrowDown: ke }, props: je, emits: ["visible-change", "click", "command"], setup(e, { emit: n }) {
  const a = ve(), t = ee("dropdown"), { t: c } = De(), u = $(), i = $(), l = $(), p = $(), g = $(null), b = $(null), _ = $(false), h = y(() => ({ maxHeight: Pe(e.maxHeight) })), o = y(() => [t.m(v.value)]), s = y(() => Ne(e.trigger)), d = me().value, f = y(() => e.id || d);
  ce([u, s], ([r, E], [z]) => {
    var le, se, ae;
    (le = z == null ? void 0 : z.$el) != null && le.removeEventListener && z.$el.removeEventListener("pointerenter", I), (se = r == null ? void 0 : r.$el) != null && se.removeEventListener && r.$el.removeEventListener("pointerenter", I), (ae = r == null ? void 0 : r.$el) != null && ae.addEventListener && E.includes("hover") && r.$el.addEventListener("pointerenter", I);
  }, { immediate: true }), Be(() => {
    var r, E;
    (E = (r = u.value) == null ? void 0 : r.$el) != null && E.removeEventListener && u.value.$el.removeEventListener("pointerenter", I);
  });
  function B() {
    F();
  }
  function F() {
    var r;
    (r = l.value) == null || r.onClose();
  }
  function K() {
    var r;
    (r = l.value) == null || r.onOpen();
  }
  const v = Ke();
  function O(...r) {
    n("command", ...r);
  }
  function I() {
    var r, E;
    (E = (r = u.value) == null ? void 0 : r.$el) == null || E.focus();
  }
  function L() {
  }
  function G() {
    const r = k(p);
    s.value.includes("hover") && (r == null ? void 0 : r.focus()), b.value = null;
  }
  function R(r) {
    b.value = r;
  }
  function re(r) {
    _.value || (r.preventDefault(), r.stopImmediatePropagation());
  }
  function V() {
    n("visible-change", true);
  }
  function U(r) {
    var E;
    (r == null ? void 0 : r.type) === "keydown" && ((E = p.value) == null || E.focus());
  }
  function Ce() {
    n("visible-change", false);
  }
  return J(Q, { contentRef: p, role: y(() => e.role), triggerId: f, isUsingKeyboard: _, onItemEnter: L, onItemLeave: G }), J("elDropdown", { instance: a, dropdownSize: v, handleClick: B, commandHandler: O, trigger: Y(e, "trigger"), hideOnClick: Y(e, "hideOnClick") }), { t: c, ns: t, scrollbar: g, wrapStyle: h, dropdownTriggerKls: o, dropdownSize: v, triggerId: f, currentTabId: b, handleCurrentTabIdChange: R, handlerMainButtonClick: (r) => {
    n("click", r);
  }, handleEntryFocus: re, handleClose: F, handleOpen: K, handleBeforeShowTooltip: V, handleShowTooltip: U, handleBeforeHideTooltip: Ce, onFocusAfterTrapped: (r) => {
    var E, z;
    r.preventDefault(), (z = (E = p.value) == null ? void 0 : E.focus) == null || z.call(E, { preventScroll: true });
  }, popperRef: l, contentRef: p, triggeringElementRef: u, referenceElementRef: i };
} });
function Io(e, n, a, t, c, u) {
  var i;
  const l = w("el-dropdown-collection"), p = w("el-roving-focus-group"), g = w("el-scrollbar"), b = w("el-only-child"), _ = w("el-tooltip"), h = w("el-button"), o = w("arrow-down"), s = w("el-icon"), d = w("el-button-group");
  return P(), W("div", { class: q([e.ns.b(), e.ns.is("disabled", e.disabled)]) }, [S(_, { ref: "popperRef", role: e.role, effect: e.effect, "fallback-placements": ["bottom", "top"], "popper-options": e.popperOptions, "gpu-acceleration": false, "hide-after": e.trigger === "hover" ? e.hideTimeout : 0, "manual-mode": true, placement: e.placement, "popper-class": [e.ns.e("popper"), e.popperClass], "reference-element": (i = e.referenceElementRef) == null ? void 0 : i.$el, trigger: e.trigger, "trigger-keys": e.triggerKeys, "trigger-target-el": e.contentRef, "show-after": e.trigger === "hover" ? e.showTimeout : 0, "stop-popper-mouse-event": false, "virtual-ref": e.triggeringElementRef, "virtual-triggering": e.splitButton, disabled: e.disabled, transition: `${e.ns.namespace.value}-zoom-in-top`, teleported: e.teleported, pure: "", persistent: e.persistent, onBeforeShow: e.handleBeforeShowTooltip, onShow: e.handleShowTooltip, onBeforeHide: e.handleBeforeHideTooltip }, Le({ content: m(() => [S(g, { ref: "scrollbar", "wrap-style": e.wrapStyle, tag: "div", "view-class": e.ns.e("list") }, { default: m(() => [S(p, { loop: e.loop, "current-tab-id": e.currentTabId, orientation: "horizontal", onCurrentTabIdChange: e.handleCurrentTabIdChange, onEntryFocus: e.handleEntryFocus }, { default: m(() => [S(l, null, { default: m(() => [N(e.$slots, "dropdown")]), _: 3 })]), _: 3 }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])]), _: 3 }, 8, ["wrap-style", "view-class"])]), _: 2 }, [e.splitButton ? void 0 : { name: "default", fn: m(() => [S(b, { id: e.triggerId, ref: "triggeringElementRef", role: "button", tabindex: e.tabindex }, { default: m(() => [N(e.$slots, "default")]), _: 3 }, 8, ["id", "tabindex"])]) }]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]), e.splitButton ? (P(), H(d, { key: 0 }, { default: m(() => [S(h, j({ ref: "referenceElementRef" }, e.buttonProps, { size: e.dropdownSize, type: e.type, disabled: e.disabled, tabindex: e.tabindex, onClick: e.handlerMainButtonClick }), { default: m(() => [N(e.$slots, "default")]), _: 3 }, 16, ["size", "type", "disabled", "tabindex", "onClick"]), S(h, j({ id: e.triggerId, ref: "triggeringElementRef" }, e.buttonProps, { role: "button", size: e.dropdownSize, type: e.type, class: e.ns.e("caret-button"), disabled: e.disabled, tabindex: e.tabindex, "aria-label": e.t("el.dropdown.toggleDropdown") }), { default: m(() => [S(s, { class: q(e.ns.e("icon")) }, { default: m(() => [S(o)]), _: 1 }, 8, ["class"])]), _: 1 }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])]), _: 3 })) : Z("v-if", true)], 2);
}
var ho = M(_o, [["render", Io], ["__file", "dropdown.vue"]]);
const Eo = A({ components: { ElRovingFocusCollectionItem: ro }, props: { focusable: { type: Boolean, default: true }, active: { type: Boolean, default: false } }, emits: ["mousedown", "focus", "keydown"], setup(e, { emit: n }) {
  const { currentTabbedId: a, loop: t, onItemFocus: c, onItemShiftTab: u } = C(ne, void 0), { getItems: i } = C(oe, void 0), l = me(), p = $(), g = D((o) => {
    n("mousedown", o);
  }, (o) => {
    e.focusable ? c(k(l)) : o.preventDefault();
  }), b = D((o) => {
    n("focus", o);
  }, () => {
    c(k(l));
  }), _ = D((o) => {
    n("keydown", o);
  }, (o) => {
    const { code: s, shiftKey: d, target: f, currentTarget: B } = o;
    if (s === T.tab && d) {
      u();
      return;
    }
    if (f !== B)
      return;
    const F = io(o);
    if (F) {
      o.preventDefault();
      let v = i().filter((O) => O.focusable).map((O) => O.ref);
      switch (F) {
        case "last": {
          v.reverse();
          break;
        }
        case "prev":
        case "next": {
          F === "prev" && v.reverse();
          const O = v.indexOf(B);
          v = t.value ? uo(v, O + 1) : v.slice(O + 1);
          break;
        }
      }
      Ge(() => {
        te(v);
      });
    }
  }), h = y(() => a.value === k(l));
  return J(_e, { rovingFocusGroupItemRef: p, tabIndex: y(() => k(h) ? 0 : -1), handleMousedown: g, handleFocus: b, handleKeydown: _ }), { id: l, handleKeydown: _, handleFocus: b, handleMousedown: g };
} });
function Co(e, n, a, t, c, u) {
  const i = w("el-roving-focus-collection-item");
  return P(), H(i, { id: e.id, focusable: e.focusable, active: e.active }, { default: m(() => [N(e.$slots, "default")]), _: 3 }, 8, ["id", "focusable", "active"]);
}
var yo = M(Eo, [["render", Co], ["__file", "roving-focus-item.vue"]]);
const $o = A({ name: "DropdownItemImpl", components: { ElIcon: fe }, props: we, emits: ["pointermove", "pointerleave", "click", "clickimpl"], setup(e, { emit: n }) {
  const a = ee("dropdown"), { role: t } = C(Q, void 0), { collectionItemRef: c } = C(qe, void 0), { collectionItemRef: u } = C(lo, void 0), { rovingFocusGroupItemRef: i, tabIndex: l, handleFocus: p, handleKeydown: g, handleMousedown: b } = C(_e, void 0), _ = ge(c, u, i), h = y(() => t.value === "menu" ? "menuitem" : t.value === "navigation" ? "link" : "button"), o = D((s) => {
    if ([T.enter, T.numpadEnter, T.space].includes(s.code))
      return s.preventDefault(), s.stopImmediatePropagation(), n("clickimpl", s), true;
  }, g);
  return { ns: a, itemRef: _, dataset: { [Qe]: "" }, role: h, tabIndex: l, handleFocus: p, handleKeydown: o, handleMousedown: b };
} });
function To(e, n, a, t, c, u) {
  const i = w("el-icon");
  return P(), W(ze, null, [e.divided ? (P(), W("li", { key: 0, role: "separator", class: q(e.ns.bem("menu", "item", "divided")) }, null, 2)) : Z("v-if", true), Me("li", j({ ref: e.itemRef }, { ...e.dataset, ...e.$attrs }, { "aria-disabled": e.disabled, class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)], tabindex: e.tabIndex, role: e.role, onClick: (l) => e.$emit("clickimpl", l), onFocus: e.handleFocus, onKeydown: x(e.handleKeydown, ["self"]), onMousedown: e.handleMousedown, onPointermove: (l) => e.$emit("pointermove", l), onPointerleave: (l) => e.$emit("pointerleave", l) }), [e.icon ? (P(), H(i, { key: 0 }, { default: m(() => [(P(), H(Ae(e.icon)))]), _: 1 })) : Z("v-if", true), N(e.$slots, "default")], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])], 64);
}
var Fo = M($o, [["render", To], ["__file", "dropdown-item-impl.vue"]]);
const Ie = () => {
  const e = C("elDropdown", {}), n = y(() => e == null ? void 0 : e.dropdownSize);
  return { elDropdown: e, _elDropdownSize: n };
}, Ro = A({ name: "ElDropdownItem", components: { ElDropdownCollectionItem: Xe, ElRovingFocusItem: yo, ElDropdownItemImpl: Fo }, inheritAttrs: false, props: we, emits: ["pointermove", "pointerleave", "click"], setup(e, { emit: n, attrs: a }) {
  const { elDropdown: t } = Ie(), c = ve(), u = $(null), i = y(() => {
    var o, s;
    return (s = (o = k(u)) == null ? void 0 : o.textContent) != null ? s : "";
  }), { onItemEnter: l, onItemLeave: p } = C(Q, void 0), g = D((o) => (n("pointermove", o), o.defaultPrevented), ie((o) => {
    if (e.disabled) {
      p(o);
      return;
    }
    const s = o.currentTarget;
    s === document.activeElement || s.contains(document.activeElement) || (l(o), o.defaultPrevented || (s == null ? void 0 : s.focus()));
  })), b = D((o) => (n("pointerleave", o), o.defaultPrevented), ie(p)), _ = D((o) => {
    if (!e.disabled)
      return n("click", o), o.type !== "keydown" && o.defaultPrevented;
  }, (o) => {
    var s, d, f;
    if (e.disabled) {
      o.stopImmediatePropagation();
      return;
    }
    (s = t == null ? void 0 : t.hideOnClick) != null && s.value && ((d = t.handleClick) == null || d.call(t)), (f = t.commandHandler) == null || f.call(t, e.command, c, o);
  }), h = y(() => ({ ...e, ...a }));
  return { handleClick: _, handlePointerMove: g, handlePointerLeave: b, textContent: i, propsAndAttrs: h };
} });
function So(e, n, a, t, c, u) {
  var i;
  const l = w("el-dropdown-item-impl"), p = w("el-roving-focus-item"), g = w("el-dropdown-collection-item");
  return P(), H(g, { disabled: e.disabled, "text-value": (i = e.textValue) != null ? i : e.textContent }, { default: m(() => [S(p, { focusable: !e.disabled }, { default: m(() => [S(l, j(e.propsAndAttrs, { onPointerleave: e.handlePointerLeave, onPointermove: e.handlePointerMove, onClickimpl: e.handleClick }), { default: m(() => [N(e.$slots, "default")]), _: 3 }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])]), _: 3 }, 8, ["focusable"])]), _: 3 }, 8, ["disabled", "text-value"]);
}
var he = M(Ro, [["render", So], ["__file", "dropdown-item.vue"]]);
const Oo = A({ name: "ElDropdownMenu", props: Ze, setup(e) {
  const n = ee("dropdown"), { _elDropdownSize: a } = Ie(), t = a.value, { focusTrapRef: c, onKeydown: u } = C(He, void 0), { contentRef: i, role: l, triggerId: p } = C(Q, void 0), { collectionRef: g, getItems: b } = C(xe, void 0), { rovingFocusGroupRef: _, rovingFocusGroupRootStyle: h, tabIndex: o, onBlur: s, onFocus: d, onMousedown: f } = C(ne, void 0), { collectionRef: B } = C(oe, void 0), F = y(() => [n.b("menu"), n.bm("menu", t == null ? void 0 : t.value)]), K = ge(i, g, c, _, B), v = D((I) => {
    var L;
    (L = e.onKeydown) == null || L.call(e, I);
  }, (I) => {
    const { currentTarget: L, code: G, target: R } = I;
    if (L.contains(R), T.tab === G && I.stopImmediatePropagation(), I.preventDefault(), R !== k(i) || !eo.includes(G))
      return;
    const V = b().filter((U) => !U.disabled).map((U) => U.ref);
    oo.includes(G) && V.reverse(), te(V);
  });
  return { size: t, rovingFocusGroupRootStyle: h, tabIndex: o, dropdownKls: F, role: l, triggerId: p, dropdownListWrapperRef: K, handleKeydown: (I) => {
    v(I), u(I);
  }, onBlur: s, onFocus: d, onMousedown: f };
} });
function ko(e, n, a, t, c, u) {
  return P(), W("ul", { ref: e.dropdownListWrapperRef, class: q(e.dropdownKls), style: Ue(e.rovingFocusGroupRootStyle), tabindex: -1, role: e.role, "aria-labelledby": e.triggerId, onBlur: e.onBlur, onFocus: e.onFocus, onKeydown: x(e.handleKeydown, ["self"]), onMousedown: x(e.onMousedown, ["self"]) }, [N(e.$slots, "default")], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"]);
}
var Ee = M(Oo, [["render", ko], ["__file", "dropdown-menu.vue"]]);
const Lo = Ye(ho, { DropdownItem: he, DropdownMenu: Ee }), Go = be(he), Mo = be(Ee);
export {
  Go as E,
  Mo as a,
  Lo as b
};
