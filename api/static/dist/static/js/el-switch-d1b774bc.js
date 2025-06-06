import { ap as j, aP as J, aQ as g, aH as _, aR as x, aS as N, aT as V, aM as w, aU as S, aV as P, aW as B, u as L, aX as ee, aY as ae, au as ie, aZ as te, a_ as ne, al as d, r as T, ax as se, aG as M, a$ as le, o as oe, b as i, c as v, d as E, z as a, n as u, b0 as ce, h as c, i as p, aO as y, y as h, e as r, t as C, f as re, b1 as ue, q as O, aN as de, am as ve, aC as fe, W as pe, b2 as F, aE as he, aD as me } from "./index-6feda8be.js";
const ye = j({ modelValue: { type: [Boolean, String, Number], default: false }, disabled: Boolean, loading: Boolean, size: { type: String, validator: J }, width: { type: [String, Number], default: "" }, inlinePrompt: Boolean, inactiveActionIcon: { type: g }, activeActionIcon: { type: g }, activeIcon: { type: g }, inactiveIcon: { type: g }, activeText: { type: String, default: "" }, inactiveText: { type: String, default: "" }, activeValue: { type: [Boolean, String, Number], default: true }, inactiveValue: { type: [Boolean, String, Number], default: false }, name: { type: String, default: "" }, validateEvent: { type: Boolean, default: true }, beforeChange: { type: _(Function) }, id: String, tabindex: { type: [String, Number] }, ...x(["ariaLabel"]) }), be = { [N]: (l) => V(l) || w(l) || S(l), [P]: (l) => V(l) || w(l) || S(l), [B]: (l) => V(l) || w(l) || S(l) }, U = "ElSwitch", ke = L({ name: U }), Ie = L({ ...ke, props: ye, emits: be, setup(l, { expose: W, emit: f }) {
  const n = l, { formItem: b } = ee(), $ = ae(), t = ie("switch"), { inputId: G } = te(n, { formItemContext: b }), k = ne(d(() => n.loading)), A = T(n.modelValue !== false), m = T(), H = T(), R = d(() => [t.b(), t.m($.value), t.is("disabled", k.value), t.is("checked", s.value)]), q = d(() => [t.e("label"), t.em("label", "left"), t.is("active", !s.value)]), Q = d(() => [t.e("label"), t.em("label", "right"), t.is("active", s.value)]), X = d(() => ({ width: se(n.width) }));
  M(() => n.modelValue, () => {
    A.value = true;
  });
  const z = d(() => A.value ? n.modelValue : false), s = d(() => z.value === n.activeValue);
  [n.activeValue, n.inactiveValue].includes(z.value) || (f(N, n.inactiveValue), f(P, n.inactiveValue), f(B, n.inactiveValue)), M(s, (e) => {
    var o;
    m.value.checked = e, n.validateEvent && ((o = b == null ? void 0 : b.validate) == null || o.call(b, "change").catch((Z) => le()));
  });
  const I = () => {
    const e = s.value ? n.inactiveValue : n.activeValue;
    f(N, e), f(P, e), f(B, e), pe(() => {
      m.value.checked = s.value;
    });
  }, D = () => {
    if (k.value)
      return;
    const { beforeChange: e } = n;
    if (!e) {
      I();
      return;
    }
    const o = e();
    [F(o), V(o)].includes(true) || he(U, "beforeChange must return type `Promise<boolean>` or `boolean`"), F(o) ? o.then((K) => {
      K && I();
    }).catch((K) => {
    }) : o && I();
  }, Y = () => {
    var e, o;
    (o = (e = m.value) == null ? void 0 : e.focus) == null || o.call(e);
  };
  return oe(() => {
    m.value.checked = s.value;
  }), W({ focus: Y, checked: s }), (e, o) => (i(), v("div", { class: u(a(R)), onClick: ve(D, ["prevent"]) }, [E("input", { id: a(G), ref_key: "input", ref: m, class: u(a(t).e("input")), type: "checkbox", role: "switch", "aria-checked": a(s), "aria-disabled": a(k), "aria-label": e.ariaLabel, name: e.name, "true-value": e.activeValue, "false-value": e.inactiveValue, disabled: a(k), tabindex: e.tabindex, onChange: I, onKeydown: ce(D, ["enter"]) }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]), !e.inlinePrompt && (e.inactiveIcon || e.inactiveText) ? (i(), v("span", { key: 0, class: u(a(q)) }, [e.inactiveIcon ? (i(), c(a(h), { key: 0 }, { default: p(() => [(i(), c(y(e.inactiveIcon)))]), _: 1 })) : r("v-if", true), !e.inactiveIcon && e.inactiveText ? (i(), v("span", { key: 1, "aria-hidden": a(s) }, C(e.inactiveText), 9, ["aria-hidden"])) : r("v-if", true)], 2)) : r("v-if", true), E("span", { ref_key: "core", ref: H, class: u(a(t).e("core")), style: de(a(X)) }, [e.inlinePrompt ? (i(), v("div", { key: 0, class: u(a(t).e("inner")) }, [e.activeIcon || e.inactiveIcon ? (i(), c(a(h), { key: 0, class: u(a(t).is("icon")) }, { default: p(() => [(i(), c(y(a(s) ? e.activeIcon : e.inactiveIcon)))]), _: 1 }, 8, ["class"])) : e.activeText || e.inactiveText ? (i(), v("span", { key: 1, class: u(a(t).is("text")), "aria-hidden": !a(s) }, C(a(s) ? e.activeText : e.inactiveText), 11, ["aria-hidden"])) : r("v-if", true)], 2)) : r("v-if", true), E("div", { class: u(a(t).e("action")) }, [e.loading ? (i(), c(a(h), { key: 0, class: u(a(t).is("loading")) }, { default: p(() => [re(a(ue))]), _: 1 }, 8, ["class"])) : a(s) ? O(e.$slots, "active-action", { key: 1 }, () => [e.activeActionIcon ? (i(), c(a(h), { key: 0 }, { default: p(() => [(i(), c(y(e.activeActionIcon)))]), _: 1 })) : r("v-if", true)]) : a(s) ? r("v-if", true) : O(e.$slots, "inactive-action", { key: 2 }, () => [e.inactiveActionIcon ? (i(), c(a(h), { key: 0 }, { default: p(() => [(i(), c(y(e.inactiveActionIcon)))]), _: 1 })) : r("v-if", true)])], 2)], 6), !e.inlinePrompt && (e.activeIcon || e.activeText) ? (i(), v("span", { key: 1, class: u(a(Q)) }, [e.activeIcon ? (i(), c(a(h), { key: 0 }, { default: p(() => [(i(), c(y(e.activeIcon)))]), _: 1 })) : r("v-if", true), !e.activeIcon && e.activeText ? (i(), v("span", { key: 1, "aria-hidden": !a(s) }, C(e.activeText), 9, ["aria-hidden"])) : r("v-if", true)], 2)) : r("v-if", true)], 10, ["onClick"]));
} });
var ge = fe(Ie, [["__file", "switch.vue"]]);
const we = me(ge);
export {
  we as E
};
