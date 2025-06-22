import { aP as Te, b1 as Z, bj as $, a$ as G, y as A, r as T, aI as C, Y as y, ax as J, cU as $e, ck as H, u as k, $ as ce, c5 as Fe, s as D, cV as N, aJ as w, b as P, j as U, w as m, f as S, cf as Re, cg as Se, a4 as pe, az as Oe, cW as ke, G as fe, M as Ne, h as ve, aU as ee, aV as Pe, aX as De, cX as Be, bJ as me, bh as Ke, bg as Le, c as W, aH as Me, a3 as j, q as X, e as Q, n as Ge, d as Ae, ao as ze, x, F as Ue, cY as ge, cZ as ie, c_ as Ye, a7 as He, b0 as Ve, cl as be } from "./index-8579fe4a.js";
import { E as Je } from "./el-scrollbar-4065fe54.js";
import { c as We, E as je, d as Xe, a as we, C as qe, b as Ze, e as Qe, f as xe, g as eo, F as oo, L as no } from "./dropdown-85221e0a.js";
const to = Te({ style: { type: Z([String, Array, Object]) }, currentTabId: { type: Z(String) }, defaultCurrentTabId: String, loop: Boolean, dir: { type: String, values: ["ltr", "rtl"], default: "ltr" }, orientation: { type: Z(String) }, onBlur: Function, onFocus: Function, onMousedown: Function }), { ElCollection: ro, ElCollectionItem: lo, COLLECTION_INJECTION_KEY: oe, COLLECTION_ITEM_INJECTION_KEY: so } = We("RovingFocusGroup"), ne = Symbol("elRovingFocusGroup"), _e = Symbol("elRovingFocusGroupItem"), ao = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" }, io = (e, n) => {
  if (n !== "rtl")
    return e;
  switch (e) {
    case $.right:
      return $.left;
    case $.left:
      return $.right;
    default:
      return e;
  }
}, uo = (e, n, a) => {
  const t = io(e.code, a);
  if (!(n === "vertical" && [$.left, $.right].includes(t)) && !(n === "horizontal" && [$.up, $.down].includes(t)))
    return ao[t];
}, co = (e, n) => e.map((a, t) => e[(t + n) % e.length]), te = (e) => {
  const { activeElement: n } = document;
  for (const a of e)
    if (a === n || (a.focus(), n !== document.activeElement))
      return;
}, de = "currentTabIdChange", ue = "rovingFocusGroup.entryFocus", po = { bubbles: false, cancelable: true }, fo = A({ name: "ElRovingFocusGroupImpl", inheritAttrs: false, props: to, emits: [de, "entryFocus"], setup(e, { emit: n }) {
  var a;
  const t = T((a = e.currentTabId || e.defaultCurrentTabId) != null ? a : null), c = T(false), u = T(false), i = T(), { getItems: l } = C(oe, void 0), p = y(() => [{ outline: "none" }, e.style]), g = (d) => {
    n(de, d);
  }, b = () => {
    c.value = true;
  }, _ = N((d) => {
    var f;
    (f = e.onMousedown) == null || f.call(e, d);
  }, () => {
    u.value = true;
  }), h = N((d) => {
    var f;
    (f = e.onFocus) == null || f.call(e, d);
  }, (d) => {
    const f = !k(u), { target: B, currentTarget: F } = d;
    if (B === F && f && !k(c)) {
      const K = new Event(ue, po);
      if (F == null ? void 0 : F.dispatchEvent(K), !K.defaultPrevented) {
        const v = l().filter((R) => R.focusable), O = v.find((R) => R.active), I = v.find((R) => R.id === k(t)), M = [O, I, ...v].filter(Boolean).map((R) => R.ref);
        te(M);
      }
    }
    u.value = false;
  }), o = N((d) => {
    var f;
    (f = e.onBlur) == null || f.call(e, d);
  }, () => {
    c.value = false;
  }), s = (...d) => {
    n("entryFocus", ...d);
  };
  J(ne, { currentTabbedId: $e(t), loop: H(e, "loop"), tabIndex: y(() => k(c) ? -1 : 0), rovingFocusGroupRef: i, rovingFocusGroupRootStyle: p, orientation: H(e, "orientation"), dir: H(e, "dir"), onItemFocus: g, onItemShiftTab: b, onBlur: o, onFocus: h, onMousedown: _ }), ce(() => e.currentTabId, (d) => {
    t.value = d ?? null;
  }), Fe(i, ue, s);
} });
function vo(e, n, a, t, c, u) {
  return D(e.$slots, "default");
}
var mo = G(fo, [["render", vo], ["__file", "roving-focus-group-impl.vue"]]);
const go = A({ name: "ElRovingFocusGroup", components: { ElFocusGroupCollection: ro, ElRovingFocusGroupImpl: mo } });
function bo(e, n, a, t, c, u) {
  const i = w("el-roving-focus-group-impl"), l = w("el-focus-group-collection");
  return P(), U(l, null, { default: m(() => [S(i, Re(Se(e.$attrs)), { default: m(() => [D(e.$slots, "default")]), _: 3 }, 16)]), _: 3 });
}
var wo = G(go, [["render", bo], ["__file", "roving-focus-group.vue"]]);
const q = Symbol("elDropdown"), Ie = "elDropdown", { ButtonGroup: _o } = pe, Io = A({ name: "ElDropdown", components: { ElButton: pe, ElButtonGroup: _o, ElScrollbar: Je, ElDropdownCollection: je, ElTooltip: Oe, ElRovingFocusGroup: wo, ElOnlyChild: ke, ElIcon: fe, ArrowDown: Ne }, props: Xe, emits: ["visible-change", "click", "command"], setup(e, { emit: n }) {
  const a = ve(), t = ee("dropdown"), { t: c } = Pe(), u = T(), i = T(), l = T(), p = T(), g = T(null), b = T(null), _ = T(false), h = y(() => ({ maxHeight: De(e.maxHeight) })), o = y(() => [t.m(v.value)]), s = y(() => Be(e.trigger)), d = me().value, f = y(() => e.id || d);
  ce([u, s], ([r, E], [z]) => {
    var le, se, ae;
    (le = z == null ? void 0 : z.$el) != null && le.removeEventListener && z.$el.removeEventListener("pointerenter", I), (se = r == null ? void 0 : r.$el) != null && se.removeEventListener && r.$el.removeEventListener("pointerenter", I), (ae = r == null ? void 0 : r.$el) != null && ae.addEventListener && E.includes("hover") && r.$el.addEventListener("pointerenter", I);
  }, { immediate: true }), Ke(() => {
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
  const v = Le();
  function O(...r) {
    n("command", ...r);
  }
  function I() {
    var r, E;
    (E = (r = u.value) == null ? void 0 : r.$el) == null || E.focus();
  }
  function L() {
  }
  function M() {
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
  function Y(r) {
    var E;
    (r == null ? void 0 : r.type) === "keydown" && ((E = p.value) == null || E.focus());
  }
  function ye() {
    n("visible-change", false);
  }
  return J(q, { contentRef: p, role: y(() => e.role), triggerId: f, isUsingKeyboard: _, onItemEnter: L, onItemLeave: M }), J(Ie, { instance: a, dropdownSize: v, handleClick: B, commandHandler: O, trigger: H(e, "trigger"), hideOnClick: H(e, "hideOnClick") }), { t: c, ns: t, scrollbar: g, wrapStyle: h, dropdownTriggerKls: o, dropdownSize: v, triggerId: f, currentTabId: b, handleCurrentTabIdChange: R, handlerMainButtonClick: (r) => {
    n("click", r);
  }, handleEntryFocus: re, handleClose: F, handleOpen: K, handleBeforeShowTooltip: V, handleShowTooltip: Y, handleBeforeHideTooltip: ye, onFocusAfterTrapped: (r) => {
    var E, z;
    r.preventDefault(), (z = (E = p.value) == null ? void 0 : E.focus) == null || z.call(E, { preventScroll: true });
  }, popperRef: l, contentRef: p, triggeringElementRef: u, referenceElementRef: i };
} });
function ho(e, n, a, t, c, u) {
  var i;
  const l = w("el-dropdown-collection"), p = w("el-roving-focus-group"), g = w("el-scrollbar"), b = w("el-only-child"), _ = w("el-tooltip"), h = w("el-button"), o = w("arrow-down"), s = w("el-icon"), d = w("el-button-group");
  return P(), W("div", { class: X([e.ns.b(), e.ns.is("disabled", e.disabled)]) }, [S(_, { ref: "popperRef", role: e.role, effect: e.effect, "fallback-placements": ["bottom", "top"], "popper-options": e.popperOptions, "gpu-acceleration": false, "hide-after": e.trigger === "hover" ? e.hideTimeout : 0, "manual-mode": true, placement: e.placement, "popper-class": [e.ns.e("popper"), e.popperClass], "reference-element": (i = e.referenceElementRef) == null ? void 0 : i.$el, trigger: e.trigger, "trigger-keys": e.triggerKeys, "trigger-target-el": e.contentRef, "show-after": e.trigger === "hover" ? e.showTimeout : 0, "stop-popper-mouse-event": false, "virtual-ref": e.triggeringElementRef, "virtual-triggering": e.splitButton, disabled: e.disabled, transition: `${e.ns.namespace.value}-zoom-in-top`, teleported: e.teleported, pure: "", persistent: e.persistent, onBeforeShow: e.handleBeforeShowTooltip, onShow: e.handleShowTooltip, onBeforeHide: e.handleBeforeHideTooltip }, Me({ content: m(() => [S(g, { ref: "scrollbar", "wrap-style": e.wrapStyle, tag: "div", "view-class": e.ns.e("list") }, { default: m(() => [S(p, { loop: e.loop, "current-tab-id": e.currentTabId, orientation: "horizontal", onCurrentTabIdChange: e.handleCurrentTabIdChange, onEntryFocus: e.handleEntryFocus }, { default: m(() => [S(l, null, { default: m(() => [D(e.$slots, "dropdown")]), _: 3 })]), _: 3 }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])]), _: 3 }, 8, ["wrap-style", "view-class"])]), _: 2 }, [e.splitButton ? void 0 : { name: "default", fn: m(() => [S(b, { id: e.triggerId, ref: "triggeringElementRef", role: "button", tabindex: e.tabindex }, { default: m(() => [D(e.$slots, "default")]), _: 3 }, 8, ["id", "tabindex"])]) }]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]), e.splitButton ? (P(), U(d, { key: 0 }, { default: m(() => [S(h, j({ ref: "referenceElementRef" }, e.buttonProps, { size: e.dropdownSize, type: e.type, disabled: e.disabled, tabindex: e.tabindex, onClick: e.handlerMainButtonClick }), { default: m(() => [D(e.$slots, "default")]), _: 3 }, 16, ["size", "type", "disabled", "tabindex", "onClick"]), S(h, j({ id: e.triggerId, ref: "triggeringElementRef" }, e.buttonProps, { role: "button", size: e.dropdownSize, type: e.type, class: e.ns.e("caret-button"), disabled: e.disabled, tabindex: e.tabindex, "aria-label": e.t("el.dropdown.toggleDropdown") }), { default: m(() => [S(s, { class: X(e.ns.e("icon")) }, { default: m(() => [S(o)]), _: 1 }, 8, ["class"])]), _: 1 }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])]), _: 3 })) : Q("v-if", true)], 2);
}
var Eo = G(Io, [["render", ho], ["__file", "dropdown.vue"]]);
const Co = A({ components: { ElRovingFocusCollectionItem: lo }, props: { focusable: { type: Boolean, default: true }, active: { type: Boolean, default: false } }, emits: ["mousedown", "focus", "keydown"], setup(e, { emit: n }) {
  const { currentTabbedId: a, loop: t, onItemFocus: c, onItemShiftTab: u } = C(ne, void 0), { getItems: i } = C(oe, void 0), l = me(), p = T(), g = N((o) => {
    n("mousedown", o);
  }, (o) => {
    e.focusable ? c(k(l)) : o.preventDefault();
  }), b = N((o) => {
    n("focus", o);
  }, () => {
    c(k(l));
  }), _ = N((o) => {
    n("keydown", o);
  }, (o) => {
    const { code: s, shiftKey: d, target: f, currentTarget: B } = o;
    if (s === $.tab && d) {
      u();
      return;
    }
    if (f !== B)
      return;
    const F = uo(o);
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
          v = t.value ? co(v, O + 1) : v.slice(O + 1);
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
function yo(e, n, a, t, c, u) {
  const i = w("el-roving-focus-collection-item");
  return P(), U(i, { id: e.id, focusable: e.focusable, active: e.active }, { default: m(() => [D(e.$slots, "default")]), _: 3 }, 8, ["id", "focusable", "active"]);
}
var To = G(Co, [["render", yo], ["__file", "roving-focus-item.vue"]]);
const $o = A({ name: "DropdownItemImpl", components: { ElIcon: fe }, props: we, emits: ["pointermove", "pointerleave", "click", "clickimpl"], setup(e, { emit: n }) {
  const a = ee("dropdown"), { role: t } = C(q, void 0), { collectionItemRef: c } = C(qe, void 0), { collectionItemRef: u } = C(so, void 0), { rovingFocusGroupItemRef: i, tabIndex: l, handleFocus: p, handleKeydown: g, handleMousedown: b } = C(_e, void 0), _ = ge(c, u, i), h = y(() => t.value === "menu" ? "menuitem" : t.value === "navigation" ? "link" : "button"), o = N((s) => {
    if ([$.enter, $.numpadEnter, $.space].includes(s.code))
      return s.preventDefault(), s.stopImmediatePropagation(), n("clickimpl", s), true;
  }, g);
  return { ns: a, itemRef: _, dataset: { [Ze]: "" }, role: h, tabIndex: l, handleFocus: p, handleKeydown: o, handleMousedown: b };
} });
function Fo(e, n, a, t, c, u) {
  const i = w("el-icon");
  return P(), W(Ue, null, [e.divided ? (P(), W("li", { key: 0, role: "separator", class: X(e.ns.bem("menu", "item", "divided")) }, null, 2)) : Q("v-if", true), Ae("li", j({ ref: e.itemRef }, { ...e.dataset, ...e.$attrs }, { "aria-disabled": e.disabled, class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)], tabindex: e.tabIndex, role: e.role, onClick: (l) => e.$emit("clickimpl", l), onFocus: e.handleFocus, onKeydown: x(e.handleKeydown, ["self"]), onMousedown: e.handleMousedown, onPointermove: (l) => e.$emit("pointermove", l), onPointerleave: (l) => e.$emit("pointerleave", l) }), [e.icon ? (P(), U(i, { key: 0 }, { default: m(() => [(P(), U(ze(e.icon)))]), _: 1 })) : Q("v-if", true), D(e.$slots, "default")], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])], 64);
}
var Ro = G($o, [["render", Fo], ["__file", "dropdown-item-impl.vue"]]);
const he = () => {
  const e = C(Ie, {}), n = y(() => e == null ? void 0 : e.dropdownSize);
  return { elDropdown: e, _elDropdownSize: n };
}, So = A({ name: "ElDropdownItem", components: { ElDropdownCollectionItem: Qe, ElRovingFocusItem: To, ElDropdownItemImpl: Ro }, inheritAttrs: false, props: we, emits: ["pointermove", "pointerleave", "click"], setup(e, { emit: n, attrs: a }) {
  const { elDropdown: t } = he(), c = ve(), u = T(null), i = y(() => {
    var o, s;
    return (s = (o = k(u)) == null ? void 0 : o.textContent) != null ? s : "";
  }), { onItemEnter: l, onItemLeave: p } = C(q, void 0), g = N((o) => (n("pointermove", o), o.defaultPrevented), ie((o) => {
    if (e.disabled) {
      p(o);
      return;
    }
    const s = o.currentTarget;
    s === document.activeElement || s.contains(document.activeElement) || (l(o), o.defaultPrevented || (s == null ? void 0 : s.focus()));
  })), b = N((o) => (n("pointerleave", o), o.defaultPrevented), ie(p)), _ = N((o) => {
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
function Oo(e, n, a, t, c, u) {
  var i;
  const l = w("el-dropdown-item-impl"), p = w("el-roving-focus-item"), g = w("el-dropdown-collection-item");
  return P(), U(g, { disabled: e.disabled, "text-value": (i = e.textValue) != null ? i : e.textContent }, { default: m(() => [S(p, { focusable: !e.disabled }, { default: m(() => [S(l, j(e.propsAndAttrs, { onPointerleave: e.handlePointerLeave, onPointermove: e.handlePointerMove, onClickimpl: e.handleClick }), { default: m(() => [D(e.$slots, "default")]), _: 3 }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])]), _: 3 }, 8, ["focusable"])]), _: 3 }, 8, ["disabled", "text-value"]);
}
var Ee = G(So, [["render", Oo], ["__file", "dropdown-item.vue"]]);
const ko = A({ name: "ElDropdownMenu", props: xe, setup(e) {
  const n = ee("dropdown"), { _elDropdownSize: a } = he(), t = a.value, { focusTrapRef: c, onKeydown: u } = C(Ye, void 0), { contentRef: i, role: l, triggerId: p } = C(q, void 0), { collectionRef: g, getItems: b } = C(eo, void 0), { rovingFocusGroupRef: _, rovingFocusGroupRootStyle: h, tabIndex: o, onBlur: s, onFocus: d, onMousedown: f } = C(ne, void 0), { collectionRef: B } = C(oe, void 0), F = y(() => [n.b("menu"), n.bm("menu", t == null ? void 0 : t.value)]), K = ge(i, g, c, _, B), v = N((I) => {
    var L;
    (L = e.onKeydown) == null || L.call(e, I);
  }, (I) => {
    const { currentTarget: L, code: M, target: R } = I;
    if (L.contains(R), $.tab === M && I.stopImmediatePropagation(), I.preventDefault(), R !== k(i) || !oo.includes(M))
      return;
    const V = b().filter((Y) => !Y.disabled).map((Y) => Y.ref);
    no.includes(M) && V.reverse(), te(V);
  });
  return { size: t, rovingFocusGroupRootStyle: h, tabIndex: o, dropdownKls: F, role: l, triggerId: p, dropdownListWrapperRef: K, handleKeydown: (I) => {
    v(I), u(I);
  }, onBlur: s, onFocus: d, onMousedown: f };
} });
function No(e, n, a, t, c, u) {
  return P(), W("ul", { ref: e.dropdownListWrapperRef, class: X(e.dropdownKls), style: He(e.rovingFocusGroupRootStyle), tabindex: -1, role: e.role, "aria-labelledby": e.triggerId, onBlur: e.onBlur, onFocus: e.onFocus, onKeydown: x(e.handleKeydown, ["self"]), onMousedown: x(e.onMousedown, ["self"]) }, [D(e.$slots, "default")], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"]);
}
var Ce = G(ko, [["render", No], ["__file", "dropdown-menu.vue"]]);
const Mo = Ve(Eo, { DropdownItem: Ee, DropdownMenu: Ce }), Go = be(Ee), Ao = be(Ce);
export {
  Go as E,
  Ao as a,
  Mo as b
};
