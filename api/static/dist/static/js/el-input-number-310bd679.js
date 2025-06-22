import { aP as oe, bD as ce, br as b, bo as de, bs as X, bt as A, bE as y, bp as N, y as ee, aV as me, aU as be, r as pe, Z as fe, bu as ve, Y as h, bF as E, bg as Ne, bw as Ve, $ as he, o as ye, bG as Ie, b as f, c as M, m as j, u as a, q as z, by as S, s as _, f as K, w as P, j as F, M as ge, bH as we, G as q, e as Z, bI as Ee, aB as Se, aH as _e, x as O, a5 as Pe, a$ as Fe, bB as Ae, b5 as xe, bx as J, b0 as Be } from "./index-8579fe4a.js";
import { v as Q } from "./index-ede470e7.js";
const Ce = oe({ id: { type: String, default: void 0 }, step: { type: Number, default: 1 }, stepStrictly: Boolean, max: { type: Number, default: Number.POSITIVE_INFINITY }, min: { type: Number, default: Number.NEGATIVE_INFINITY }, modelValue: { type: [Number, null] }, readonly: Boolean, disabled: Boolean, size: ce, controls: { type: Boolean, default: true }, controlsPosition: { type: String, default: "", values: ["", "right"] }, valueOnClear: { type: [String, Number, null], validator: (l) => l === null || b(l) || ["min", "max"].includes(l), default: null }, name: String, placeholder: String, precision: { type: Number, validator: (l) => l >= 0 && l === Number.parseInt(`${l}`, 10) }, validateEvent: { type: Boolean, default: true }, ...de(["ariaLabel"]) }), ke = { [X]: (l, x) => x !== l, blur: (l) => l instanceof FocusEvent, focus: (l) => l instanceof FocusEvent, [A]: (l) => b(l) || y(l), [N]: (l) => b(l) || y(l) }, De = ee({ name: "ElInputNumber" }), $e = ee({ ...De, props: Ce, emits: ke, setup(l, { expose: x, emit: c }) {
  const r = l, { t: L } = me(), d = be("input-number"), p = pe(), u = fe({ currentValue: r.modelValue, userInput: null }), { formItem: v } = ve(), U = h(() => b(r.modelValue) && r.modelValue <= r.min), G = h(() => b(r.modelValue) && r.modelValue >= r.max), ne = h(() => {
    const e = Y(r.step);
    return E(r.precision) ? Math.max(Y(r.modelValue), e) : (e > r.precision, r.precision);
  }), B = h(() => r.controls && r.controlsPosition === "right"), H = Ne(), V = Ve(), C = h(() => {
    if (u.userInput !== null)
      return u.userInput;
    let e = u.currentValue;
    if (y(e))
      return "";
    if (b(e)) {
      if (Number.isNaN(e))
        return "";
      E(r.precision) || (e = e.toFixed(r.precision));
    }
    return e;
  }), k = (e, n) => {
    if (E(n) && (n = ne.value), n === 0)
      return Math.round(e);
    let t = String(e);
    const s = t.indexOf(".");
    if (s === -1 || !t.replace(".", "").split("")[s + n])
      return e;
    const g = t.length;
    return t.charAt(g - 1) === "5" && (t = `${t.slice(0, Math.max(0, g - 1))}6`), Number.parseFloat(Number(t).toFixed(n));
  }, Y = (e) => {
    if (y(e))
      return 0;
    const n = e.toString(), t = n.indexOf(".");
    let s = 0;
    return t !== -1 && (s = n.length - t - 1), s;
  }, R = (e, n = 1) => b(e) ? k(e + r.step * n) : u.currentValue, D = () => {
    if (r.readonly || V.value || G.value)
      return;
    const e = Number(C.value) || 0, n = R(e);
    I(n), c(A, u.currentValue), T();
  }, $ = () => {
    if (r.readonly || V.value || U.value)
      return;
    const e = Number(C.value) || 0, n = R(e, -1);
    I(n), c(A, u.currentValue), T();
  }, W = (e, n) => {
    const { max: t, min: s, step: i, precision: m, stepStrictly: g, valueOnClear: w } = r;
    t < s && Ae("InputNumber", "min should not be greater than max.");
    let o = Number(e);
    if (y(e) || Number.isNaN(o))
      return null;
    if (e === "") {
      if (w === null)
        return null;
      o = xe(w) ? { min: s, max: t }[w] : w;
    }
    return g && (o = k(Math.round(o / i) * i, m), o !== e && n && c(N, o)), E(m) || (o = k(o, m)), (o > t || o < s) && (o = o > t ? t : s, n && c(N, o)), o;
  }, I = (e, n = true) => {
    var t;
    const s = u.currentValue, i = W(e);
    if (!n) {
      c(N, i);
      return;
    }
    s === i && e || (u.userInput = null, c(N, i), s !== i && c(X, i, s), r.validateEvent && ((t = v == null ? void 0 : v.validate) == null || t.call(v, "change").catch((m) => J())), u.currentValue = i);
  }, te = (e) => {
    u.userInput = e;
    const n = e === "" ? null : Number(e);
    c(A, n), I(n, false);
  }, ae = (e) => {
    const n = e !== "" ? Number(e) : "";
    (b(n) && !Number.isNaN(n) || e === "") && I(n), T(), u.userInput = null;
  }, re = () => {
    var e, n;
    (n = (e = p.value) == null ? void 0 : e.focus) == null || n.call(e);
  }, le = () => {
    var e, n;
    (n = (e = p.value) == null ? void 0 : e.blur) == null || n.call(e);
  }, ue = (e) => {
    c("focus", e);
  }, se = (e) => {
    var n, t;
    u.userInput = null, u.currentValue === null && ((n = p.value) != null && n.input) && (p.value.input.value = ""), c("blur", e), r.validateEvent && ((t = v == null ? void 0 : v.validate) == null || t.call(v, "blur").catch((s) => J()));
  }, T = () => {
    u.currentValue !== r.modelValue && (u.currentValue = r.modelValue);
  }, ie = (e) => {
    document.activeElement === e.target && e.preventDefault();
  };
  return he(() => r.modelValue, (e, n) => {
    const t = W(e, true);
    u.userInput === null && t !== n && (u.currentValue = t);
  }, { immediate: true }), ye(() => {
    var e;
    const { min: n, max: t, modelValue: s } = r, i = (e = p.value) == null ? void 0 : e.input;
    if (i.setAttribute("role", "spinbutton"), Number.isFinite(t) ? i.setAttribute("aria-valuemax", String(t)) : i.removeAttribute("aria-valuemax"), Number.isFinite(n) ? i.setAttribute("aria-valuemin", String(n)) : i.removeAttribute("aria-valuemin"), i.setAttribute("aria-valuenow", u.currentValue || u.currentValue === 0 ? String(u.currentValue) : ""), i.setAttribute("aria-disabled", String(V.value)), !b(s) && s != null) {
      let m = Number(s);
      Number.isNaN(m) && (m = null), c(N, m);
    }
    i.addEventListener("wheel", ie, { passive: false });
  }), Ie(() => {
    var e, n;
    const t = (e = p.value) == null ? void 0 : e.input;
    t == null ? void 0 : t.setAttribute("aria-valuenow", `${(n = u.currentValue) != null ? n : ""}`);
  }), x({ focus: re, blur: le }), (e, n) => (f(), M("div", { class: z([a(d).b(), a(d).m(a(H)), a(d).is("disabled", a(V)), a(d).is("without-controls", !e.controls), a(d).is("controls-right", a(B))]), onDragstart: O(() => {
  }, ["prevent"]) }, [e.controls ? j((f(), M("span", { key: 0, role: "button", "aria-label": a(L)("el.inputNumber.decrease"), class: z([a(d).e("decrease"), a(d).is("disabled", a(U))]), onKeydown: S($, ["enter"]) }, [_(e.$slots, "decrease-icon", {}, () => [K(a(q), null, { default: P(() => [a(B) ? (f(), F(a(ge), { key: 0 })) : (f(), F(a(we), { key: 1 }))]), _: 1 })])], 42, ["aria-label", "onKeydown"])), [[a(Q), $]]) : Z("v-if", true), e.controls ? j((f(), M("span", { key: 1, role: "button", "aria-label": a(L)("el.inputNumber.increase"), class: z([a(d).e("increase"), a(d).is("disabled", a(G))]), onKeydown: S(D, ["enter"]) }, [_(e.$slots, "increase-icon", {}, () => [K(a(q), null, { default: P(() => [a(B) ? (f(), F(a(Ee), { key: 0 })) : (f(), F(a(Se), { key: 1 }))]), _: 1 })])], 42, ["aria-label", "onKeydown"])), [[a(Q), D]]) : Z("v-if", true), K(a(Pe), { id: e.id, ref_key: "input", ref: p, type: "number", step: e.step, "model-value": a(C), placeholder: e.placeholder, readonly: e.readonly, disabled: a(V), size: a(H), max: e.max, min: e.min, name: e.name, "aria-label": e.ariaLabel, "validate-event": false, onKeydown: [S(O(D, ["prevent"]), ["up"]), S(O($, ["prevent"]), ["down"])], onBlur: se, onFocus: ue, onInput: te, onChange: ae }, _e({ _: 2 }, [e.$slots.prefix ? { name: "prefix", fn: P(() => [_(e.$slots, "prefix")]) } : void 0, e.$slots.suffix ? { name: "suffix", fn: P(() => [_(e.$slots, "suffix")]) } : void 0]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])], 42, ["onDragstart"]));
} });
var Te = Fe($e, [["__file", "input-number.vue"]]);
const Ke = Be(Te);
export {
  Ke as E
};
