import { aP as Q, bn as Z, bm as g, b1 as _, bo as x, bp as N, bq as w, b5 as V, br as S, bs as P, bt as B, y as L, bu as ee, bg as ae, aU as ie, bv as te, bw as ne, Y as d, r as T, aX as se, $ as F, bx as oe, o as le, b as i, c as v, d as E, u as a, q as u, by as ce, j as c, w as b, ao as m, G as p, e as r, t as C, f as re, bz as ue, s as M, a7 as de, x as ve, a$ as fe, n as be, bA as O, bB as pe, b0 as he } from "./index-8579fe4a.js";
const me = Q({ modelValue: { type: [Boolean, String, Number], default: false }, disabled: Boolean, loading: Boolean, size: { type: String, validator: Z }, width: { type: [String, Number], default: "" }, inlinePrompt: Boolean, inactiveActionIcon: { type: g }, activeActionIcon: { type: g }, activeIcon: { type: g }, inactiveIcon: { type: g }, activeText: { type: String, default: "" }, inactiveText: { type: String, default: "" }, activeValue: { type: [Boolean, String, Number], default: true }, inactiveValue: { type: [Boolean, String, Number], default: false }, name: { type: String, default: "" }, validateEvent: { type: Boolean, default: true }, beforeChange: { type: _(Function) }, id: String, tabindex: { type: [String, Number] }, ...x(["ariaLabel"]) }), ye = { [N]: (o) => w(o) || V(o) || S(o), [P]: (o) => w(o) || V(o) || S(o), [B]: (o) => w(o) || V(o) || S(o) }, U = "ElSwitch", ke = L({ name: U }), Ie = L({ ...ke, props: me, emits: ye, setup(o, { expose: $, emit: f }) {
  const n = o, { formItem: y } = ee(), q = ae(), t = ie("switch"), { inputId: G } = te(n, { formItemContext: y }), k = ne(d(() => n.loading)), A = T(n.modelValue !== false), h = T(), j = T(), H = d(() => [t.b(), t.m(q.value), t.is("disabled", k.value), t.is("checked", s.value)]), R = d(() => [t.e("label"), t.em("label", "left"), t.is("active", !s.value)]), W = d(() => [t.e("label"), t.em("label", "right"), t.is("active", s.value)]), X = d(() => ({ width: se(n.width) }));
  F(() => n.modelValue, () => {
    A.value = true;
  });
  const z = d(() => A.value ? n.modelValue : false), s = d(() => z.value === n.activeValue);
  [n.activeValue, n.inactiveValue].includes(z.value) || (f(N, n.inactiveValue), f(P, n.inactiveValue), f(B, n.inactiveValue)), F(s, (e) => {
    var l;
    h.value.checked = e, n.validateEvent && ((l = y == null ? void 0 : y.validate) == null || l.call(y, "change").catch((J) => oe()));
  });
  const I = () => {
    const e = s.value ? n.inactiveValue : n.activeValue;
    f(N, e), f(P, e), f(B, e), be(() => {
      h.value.checked = s.value;
    });
  }, D = () => {
    if (k.value)
      return;
    const { beforeChange: e } = n;
    if (!e) {
      I();
      return;
    }
    const l = e();
    [O(l), w(l)].includes(true) || pe(U, "beforeChange must return type `Promise<boolean>` or `boolean`"), O(l) ? l.then((K) => {
      K && I();
    }).catch((K) => {
    }) : l && I();
  }, Y = () => {
    var e, l;
    (l = (e = h.value) == null ? void 0 : e.focus) == null || l.call(e);
  };
  return le(() => {
    h.value.checked = s.value;
  }), $({ focus: Y, checked: s }), (e, l) => (i(), v("div", { class: u(a(H)), onClick: ve(D, ["prevent"]) }, [E("input", { id: a(G), ref_key: "input", ref: h, class: u(a(t).e("input")), type: "checkbox", role: "switch", "aria-checked": a(s), "aria-disabled": a(k), "aria-label": e.ariaLabel, name: e.name, "true-value": e.activeValue, "false-value": e.inactiveValue, disabled: a(k), tabindex: e.tabindex, onChange: I, onKeydown: ce(D, ["enter"]) }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]), !e.inlinePrompt && (e.inactiveIcon || e.inactiveText) ? (i(), v("span", { key: 0, class: u(a(R)) }, [e.inactiveIcon ? (i(), c(a(p), { key: 0 }, { default: b(() => [(i(), c(m(e.inactiveIcon)))]), _: 1 })) : r("v-if", true), !e.inactiveIcon && e.inactiveText ? (i(), v("span", { key: 1, "aria-hidden": a(s) }, C(e.inactiveText), 9, ["aria-hidden"])) : r("v-if", true)], 2)) : r("v-if", true), E("span", { ref_key: "core", ref: j, class: u(a(t).e("core")), style: de(a(X)) }, [e.inlinePrompt ? (i(), v("div", { key: 0, class: u(a(t).e("inner")) }, [e.activeIcon || e.inactiveIcon ? (i(), c(a(p), { key: 0, class: u(a(t).is("icon")) }, { default: b(() => [(i(), c(m(a(s) ? e.activeIcon : e.inactiveIcon)))]), _: 1 }, 8, ["class"])) : e.activeText || e.inactiveText ? (i(), v("span", { key: 1, class: u(a(t).is("text")), "aria-hidden": !a(s) }, C(a(s) ? e.activeText : e.inactiveText), 11, ["aria-hidden"])) : r("v-if", true)], 2)) : r("v-if", true), E("div", { class: u(a(t).e("action")) }, [e.loading ? (i(), c(a(p), { key: 0, class: u(a(t).is("loading")) }, { default: b(() => [re(a(ue))]), _: 1 }, 8, ["class"])) : a(s) ? M(e.$slots, "active-action", { key: 1 }, () => [e.activeActionIcon ? (i(), c(a(p), { key: 0 }, { default: b(() => [(i(), c(m(e.activeActionIcon)))]), _: 1 })) : r("v-if", true)]) : a(s) ? r("v-if", true) : M(e.$slots, "inactive-action", { key: 2 }, () => [e.inactiveActionIcon ? (i(), c(a(p), { key: 0 }, { default: b(() => [(i(), c(m(e.inactiveActionIcon)))]), _: 1 })) : r("v-if", true)])], 2)], 6), !e.inlinePrompt && (e.activeIcon || e.activeText) ? (i(), v("span", { key: 1, class: u(a(W)) }, [e.activeIcon ? (i(), c(a(p), { key: 0 }, { default: b(() => [(i(), c(m(e.activeIcon)))]), _: 1 })) : r("v-if", true), !e.activeIcon && e.activeText ? (i(), v("span", { key: 1, "aria-hidden": !a(s) }, C(e.activeText), 9, ["aria-hidden"])) : r("v-if", true)], 2)) : r("v-if", true)], 10, ["onClick"]));
} });
var ge = fe(Ie, [["__file", "switch.vue"]]);
const Ve = he(ge);
export {
  Ve as E
};
