import { a as D, i as Q, c as C, b as E, d as p, e as T, f as Da, D as We, g as y, h as F, j as Z, k as j, r as Ge, l as Sa, m as Wa, n as K, s as Va, o as Ua, p as B, q as ce, t as oe, u as ae, v as ue, N as wa, w as xa, x as Ha, y as $a, z as Ga, A as ma, C as Ya, B as fa, E as ja, F as Ye, G as je, H as Ba, I as Xa, J as Ja, K as Be, L as Xe, M as Je, O as ze, P as Ke, Q as qe, R as Qe, S as za, T as Ka, U as qa, V as Ze } from "./@intlify-bab9fd84.js";
import { d as Ve, ad as ga, h as te, ak as Qa, k as Za, i as et, D as at, s as ba, e as q, j as W, a0 as tt, f as ye, H as va, q as lt, M as nt, Z as rt } from "./@vue-3b855f7b.js";
/*!
* vue-i18n v9.14.3
* (c) 2025 kazuya kawaguchi
* Released under the MIT License.
*/
const st = "9.14.3";
function ct() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (K().__VUE_I18N_FULL_INSTALL__ = true), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (K().__VUE_I18N_LEGACY_API__ = true), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (K().__INTLIFY_JIT_COMPILATION__ = false), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (K().__INTLIFY_DROP_MESSAGE_COMPILER__ = false), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (K().__INTLIFY_PROD_DEVTOOLS__ = false);
}
const da = qa.__EXTEND_POINT__, H = fa(da);
H(), H(), H(), H(), H(), H(), H(), H(), H();
const Ea = Ya.__EXTEND_POINT__, M = fa(Ea), N = { UNEXPECTED_RETURN_TYPE: Ea, INVALID_ARGUMENT: M(), MUST_BE_CALL_SETUP_TOP: M(), NOT_INSTALLED: M(), NOT_AVAILABLE_IN_LEGACY_MODE: M(), REQUIRED_VALUE: M(), INVALID_VALUE: M(), CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: M(), NOT_INSTALLED_WITH_PROVIDE: M(), UNEXPECTED_ERROR: M(), NOT_COMPATIBLE_LEGACY_VUE_I18N: M(), BRIDGE_SUPPORT_VUE_2_ONLY: M(), MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: M(), NOT_AVAILABLE_COMPOSITION_IN_LEGACY: M(), __EXTEND_POINT__: M() };
function h(e, ...s) {
  return Ua(e, null, void 0);
}
const Ce = B("__translateVNode"), Ae = B("__datetimeParts"), pe = B("__numberParts"), Ia = B("__setPluralRules"), La = B("__injectWithOption"), De = B("__dispose");
function le(e) {
  if (!p(e))
    return e;
  for (const s in e)
    if (oe(e, s))
      if (!s.includes("."))
        p(e[s]) && le(e[s]);
      else {
        const t = s.split("."), l = t.length - 1;
        let c = e, a = false;
        for (let n = 0; n < l; n++) {
          if (t[n] === "__proto__")
            throw new Error(`unsafe key: ${t[n]}`);
          if (t[n] in c || (c[t[n]] = C()), !p(c[t[n]])) {
            a = true;
            break;
          }
          c = c[t[n]];
        }
        a || (c[t[l]] = e[s], delete e[s]), p(c[t[l]]) && le(c[t[l]]);
      }
  return e;
}
function ie(e, s) {
  const { messages: t, __i18n: l, messageResolver: c, flatJson: a } = s, n = F(t) ? t : y(l) ? C() : { [e]: C() };
  if (y(l) && l.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: _, resource: m } = i;
      _ ? (n[_] = n[_] || C(), ce(m, n[_])) : ce(m, n);
    } else
      E(i) && ce(JSON.parse(i), n);
  }), c == null && a)
    for (const i in n)
      oe(n, i) && le(n[i]);
  return n;
}
function Ta(e) {
  return e.type;
}
function Oa(e, s, t) {
  let l = p(s.messages) ? s.messages : C();
  "__i18nGlobal" in t && (l = ie(e.locale.value, { messages: l, __i18n: t.__i18nGlobal }));
  const c = Object.keys(l);
  c.length && c.forEach((a) => {
    e.mergeLocaleMessage(a, l[a]);
  });
  {
    if (p(s.datetimeFormats)) {
      const a = Object.keys(s.datetimeFormats);
      a.length && a.forEach((n) => {
        e.mergeDateTimeFormat(n, s.datetimeFormats[n]);
      });
    }
    if (p(s.numberFormats)) {
      const a = Object.keys(s.numberFormats);
      a.length && a.forEach((n) => {
        e.mergeNumberFormat(n, s.numberFormats[n]);
      });
    }
  }
}
function ea(e) {
  return nt(rt, null, e, 0);
}
const aa = "__INTLIFY_META__", ta = () => [], ot = () => false;
let la = 0;
function na(e) {
  return (s, t, l, c) => e(t, l, te() || void 0, c);
}
const ut = () => {
  const e = te();
  let s = null;
  return e && (s = Ta(e)[aa]) ? { [aa]: s } : null;
};
function Ue(e = {}, s) {
  const { __root: t, __injectWithOption: l } = e, c = t === void 0, a = e.flatJson, n = ue ? q : ba, i = !!e.translateExistCompatible;
  let _ = T(e.inheritLocale) ? e.inheritLocale : true;
  const m = n(t && _ ? t.locale.value : E(e.locale) ? e.locale : We), b = n(t && _ ? t.fallbackLocale.value : E(e.fallbackLocale) || y(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : m.value), v = n(ie(m.value, e)), g = n(F(e.datetimeFormats) ? e.datetimeFormats : { [m.value]: {} }), d = n(F(e.numberFormats) ? e.numberFormats : { [m.value]: {} });
  let R = t ? t.missingWarn : T(e.missingWarn) || Z(e.missingWarn) ? e.missingWarn : true, P = t ? t.fallbackWarn : T(e.fallbackWarn) || Z(e.fallbackWarn) ? e.fallbackWarn : true, V = t ? t.fallbackRoot : T(e.fallbackRoot) ? e.fallbackRoot : true, A = !!e.fallbackFormat, X = j(e.missing) ? e.missing : null, U = j(e.missing) ? na(e.missing) : null, w = j(e.postTranslation) ? e.postTranslation : null, J = t ? t.warnHtmlMessage : T(e.warnHtmlMessage) ? e.warnHtmlMessage : true, $ = !!e.escapeParameter;
  const ee = t ? t.modifiers : F(e.modifiers) ? e.modifiers : {};
  let S = e.pluralRules || t && t.pluralRules, f;
  f = (() => {
    c && Ze(null);
    const r = { version: st, locale: m.value, fallbackLocale: b.value, messages: v.value, modifiers: ee, pluralRules: S, missing: U === null ? void 0 : U, missingWarn: R, fallbackWarn: P, fallbackFormat: A, unresolving: true, postTranslation: w === null ? void 0 : w, warnHtmlMessage: J, escapeParameter: $, messageResolver: e.messageResolver, messageCompiler: e.messageCompiler, __meta: { framework: "vue" } };
    r.datetimeFormats = g.value, r.numberFormats = d.value, r.__datetimeFormatters = F(f) ? f.__datetimeFormatters : void 0, r.__numberFormatters = F(f) ? f.__numberFormatters : void 0;
    const o = ja(r);
    return c && Ze(o), o;
  })(), ae(f, m.value, b.value);
  function _e() {
    return [m.value, b.value, v.value, g.value, d.value];
  }
  const me = W({ get: () => m.value, set: (r) => {
    m.value = r, f.locale = m.value;
  } }), fe = W({ get: () => b.value, set: (r) => {
    b.value = r, f.fallbackLocale = b.value, ae(f, m.value, r);
  } }), ge = W(() => v.value), be = W(() => g.value), G = W(() => d.value);
  function ve() {
    return j(w) ? w : null;
  }
  function de(r) {
    w = r, f.postTranslation = r;
  }
  function Ee() {
    return X;
  }
  function Ie(r) {
    r !== null && (U = na(r)), X = r, f.missing = U;
  }
  const x = (r, o, L, O, Y, se) => {
    _e();
    let z;
    try {
      __INTLIFY_PROD_DEVTOOLS__ && Ba(ut()), c || (f.fallbackContext = t ? Xa() : void 0), z = r(f);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, c || (f.fallbackContext = void 0);
    }
    if (L !== "translate exists" && Q(z) && z === Ja || L === "translate exists" && !z) {
      const [pa, Ct] = o();
      return t && V ? O(t) : Y(pa);
    } else {
      if (se(z))
        return z;
      throw h(N.UNEXPECTED_RETURN_TYPE);
    }
  };
  function re(...r) {
    return x((o) => Reflect.apply(Xe, null, [o, ...r]), () => Be(...r), "translate", (o) => Reflect.apply(o.t, o, [...r]), (o) => o, (o) => E(o));
  }
  function Le(...r) {
    const [o, L, O] = r;
    if (O && !p(O))
      throw h(N.INVALID_ARGUMENT);
    return re(o, L, D({ resolvedMessage: true }, O || {}));
  }
  function Te(...r) {
    return x((o) => Reflect.apply(Ke, null, [o, ...r]), () => ze(...r), "datetime format", (o) => Reflect.apply(o.d, o, [...r]), () => Je, (o) => E(o));
  }
  function Oe(...r) {
    return x((o) => Reflect.apply(Qe, null, [o, ...r]), () => qe(...r), "number format", (o) => Reflect.apply(o.n, o, [...r]), () => Je, (o) => E(o));
  }
  function Fe(r) {
    return r.map((o) => E(o) || Q(o) || T(o) ? ea(String(o)) : o);
  }
  const Ne = { normalize: Fe, interpolate: (r) => r, type: "vnode" };
  function Re(...r) {
    return x((o) => {
      let L;
      const O = o;
      try {
        O.processor = Ne, L = Reflect.apply(Xe, null, [O, ...r]);
      } finally {
        O.processor = null;
      }
      return L;
    }, () => Be(...r), "translate", (o) => o[Ce](...r), (o) => [ea(o)], (o) => y(o));
  }
  function ke(...r) {
    return x((o) => Reflect.apply(Qe, null, [o, ...r]), () => qe(...r), "number format", (o) => o[pe](...r), ta, (o) => E(o) || y(o));
  }
  function he(...r) {
    return x((o) => Reflect.apply(Ke, null, [o, ...r]), () => ze(...r), "datetime format", (o) => o[Ae](...r), ta, (o) => E(o) || y(o));
  }
  function Pe(r) {
    S = r, f.pluralRules = S;
  }
  function Me(r, o) {
    return x(() => {
      if (!r)
        return false;
      const L = E(o) ? o : m.value, O = $e(L), Y = f.messageResolver(O, r);
      return i ? Y != null : za(Y) || Ka(Y) || E(Y);
    }, () => [r], "translate exists", (L) => Reflect.apply(L.te, L, [r, o]), ot, (L) => T(L));
  }
  function u(r) {
    let o = null;
    const L = ma(f, b.value, m.value);
    for (let O = 0; O < L.length; O++) {
      const Y = v.value[L[O]] || {}, se = f.messageResolver(Y, r);
      if (se != null) {
        o = se;
        break;
      }
    }
    return o;
  }
  function I(r) {
    const o = u(r);
    return o ?? (t ? t.tm(r) || {} : {});
  }
  function $e(r) {
    return v.value[r] || {};
  }
  function Ra(r, o) {
    if (a) {
      const L = { [r]: o };
      for (const O in L)
        oe(L, O) && le(L[O]);
      o = L[r];
    }
    v.value[r] = o, f.messages = v.value;
  }
  function ka(r, o) {
    v.value[r] = v.value[r] || {};
    const L = { [r]: o };
    if (a)
      for (const O in L)
        oe(L, O) && le(L[O]);
    o = L[r], ce(o, v.value[r]), f.messages = v.value;
  }
  function ha(r) {
    return g.value[r] || {};
  }
  function Pa(r, o) {
    g.value[r] = o, f.datetimeFormats = g.value, Ye(f, r, o);
  }
  function Ma(r, o) {
    g.value[r] = D(g.value[r] || {}, o), f.datetimeFormats = g.value, Ye(f, r, o);
  }
  function ya(r) {
    return d.value[r] || {};
  }
  function Ca(r, o) {
    d.value[r] = o, f.numberFormats = d.value, je(f, r, o);
  }
  function Aa(r, o) {
    d.value[r] = D(d.value[r] || {}, o), f.numberFormats = d.value, je(f, r, o);
  }
  la++, t && ue && (ye(t.locale, (r) => {
    _ && (m.value = r, f.locale = r, ae(f, m.value, b.value));
  }), ye(t.fallbackLocale, (r) => {
    _ && (b.value = r, f.fallbackLocale = r, ae(f, m.value, b.value));
  }));
  const k = { id: la, locale: me, fallbackLocale: fe, get inheritLocale() {
    return _;
  }, set inheritLocale(r) {
    _ = r, r && t && (m.value = t.locale.value, b.value = t.fallbackLocale.value, ae(f, m.value, b.value));
  }, get availableLocales() {
    return Object.keys(v.value).sort();
  }, messages: ge, get modifiers() {
    return ee;
  }, get pluralRules() {
    return S || {};
  }, get isGlobal() {
    return c;
  }, get missingWarn() {
    return R;
  }, set missingWarn(r) {
    R = r, f.missingWarn = R;
  }, get fallbackWarn() {
    return P;
  }, set fallbackWarn(r) {
    P = r, f.fallbackWarn = P;
  }, get fallbackRoot() {
    return V;
  }, set fallbackRoot(r) {
    V = r;
  }, get fallbackFormat() {
    return A;
  }, set fallbackFormat(r) {
    A = r, f.fallbackFormat = A;
  }, get warnHtmlMessage() {
    return J;
  }, set warnHtmlMessage(r) {
    J = r, f.warnHtmlMessage = r;
  }, get escapeParameter() {
    return $;
  }, set escapeParameter(r) {
    $ = r, f.escapeParameter = r;
  }, t: re, getLocaleMessage: $e, setLocaleMessage: Ra, mergeLocaleMessage: ka, getPostTranslationHandler: ve, setPostTranslationHandler: de, getMissingHandler: Ee, setMissingHandler: Ie, [Ia]: Pe };
  return k.datetimeFormats = be, k.numberFormats = G, k.rt = Le, k.te = Me, k.tm = I, k.d = Te, k.n = Oe, k.getDateTimeFormat = ha, k.setDateTimeFormat = Pa, k.mergeDateTimeFormat = Ma, k.getNumberFormat = ya, k.setNumberFormat = Ca, k.mergeNumberFormat = Aa, k[La] = l, k[Ce] = Re, k[Ae] = he, k[pe] = ke, k;
}
function it(e) {
  const s = E(e.locale) ? e.locale : We, t = E(e.fallbackLocale) || y(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : s, l = j(e.missing) ? e.missing : void 0, c = T(e.silentTranslationWarn) || Z(e.silentTranslationWarn) ? !e.silentTranslationWarn : true, a = T(e.silentFallbackWarn) || Z(e.silentFallbackWarn) ? !e.silentFallbackWarn : true, n = T(e.fallbackRoot) ? e.fallbackRoot : true, i = !!e.formatFallbackMessages, _ = F(e.modifiers) ? e.modifiers : {}, m = e.pluralizationRules, b = j(e.postTranslation) ? e.postTranslation : void 0, v = E(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : true, g = !!e.escapeParameterHtml, d = T(e.sync) ? e.sync : true;
  let R = e.messages;
  if (F(e.sharedMessages)) {
    const $ = e.sharedMessages;
    R = Object.keys($).reduce((S, f) => {
      const ne = S[f] || (S[f] = {});
      return D(ne, $[f]), S;
    }, R || {});
  }
  const { __i18n: P, __root: V, __injectWithOption: A } = e, X = e.datetimeFormats, U = e.numberFormats, w = e.flatJson, J = e.translateExistCompatible;
  return { locale: s, fallbackLocale: t, messages: R, flatJson: w, datetimeFormats: X, numberFormats: U, missing: l, missingWarn: c, fallbackWarn: a, fallbackRoot: n, fallbackFormat: i, modifiers: _, pluralRules: m, postTranslation: b, warnHtmlMessage: v, escapeParameter: g, messageResolver: e.messageResolver, inheritLocale: d, translateExistCompatible: J, __i18n: P, __root: V, __injectWithOption: A };
}
function Se(e = {}, s) {
  {
    const t = Ue(it(e)), { __extender: l } = e, c = { id: t.id, get locale() {
      return t.locale.value;
    }, set locale(a) {
      t.locale.value = a;
    }, get fallbackLocale() {
      return t.fallbackLocale.value;
    }, set fallbackLocale(a) {
      t.fallbackLocale.value = a;
    }, get messages() {
      return t.messages.value;
    }, get datetimeFormats() {
      return t.datetimeFormats.value;
    }, get numberFormats() {
      return t.numberFormats.value;
    }, get availableLocales() {
      return t.availableLocales;
    }, get formatter() {
      return { interpolate() {
        return [];
      } };
    }, set formatter(a) {
    }, get missing() {
      return t.getMissingHandler();
    }, set missing(a) {
      t.setMissingHandler(a);
    }, get silentTranslationWarn() {
      return T(t.missingWarn) ? !t.missingWarn : t.missingWarn;
    }, set silentTranslationWarn(a) {
      t.missingWarn = T(a) ? !a : a;
    }, get silentFallbackWarn() {
      return T(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
    }, set silentFallbackWarn(a) {
      t.fallbackWarn = T(a) ? !a : a;
    }, get modifiers() {
      return t.modifiers;
    }, get formatFallbackMessages() {
      return t.fallbackFormat;
    }, set formatFallbackMessages(a) {
      t.fallbackFormat = a;
    }, get postTranslation() {
      return t.getPostTranslationHandler();
    }, set postTranslation(a) {
      t.setPostTranslationHandler(a);
    }, get sync() {
      return t.inheritLocale;
    }, set sync(a) {
      t.inheritLocale = a;
    }, get warnHtmlInMessage() {
      return t.warnHtmlMessage ? "warn" : "off";
    }, set warnHtmlInMessage(a) {
      t.warnHtmlMessage = a !== "off";
    }, get escapeParameterHtml() {
      return t.escapeParameter;
    }, set escapeParameterHtml(a) {
      t.escapeParameter = a;
    }, get preserveDirectiveContent() {
      return true;
    }, set preserveDirectiveContent(a) {
    }, get pluralizationRules() {
      return t.pluralRules || {};
    }, __composer: t, t(...a) {
      const [n, i, _] = a, m = {};
      let b = null, v = null;
      if (!E(n))
        throw h(N.INVALID_ARGUMENT);
      const g = n;
      return E(i) ? m.locale = i : y(i) ? b = i : F(i) && (v = i), y(_) ? b = _ : F(_) && (v = _), Reflect.apply(t.t, t, [g, b || v || {}, m]);
    }, rt(...a) {
      return Reflect.apply(t.rt, t, [...a]);
    }, tc(...a) {
      const [n, i, _] = a, m = { plural: 1 };
      let b = null, v = null;
      if (!E(n))
        throw h(N.INVALID_ARGUMENT);
      const g = n;
      return E(i) ? m.locale = i : Q(i) ? m.plural = i : y(i) ? b = i : F(i) && (v = i), E(_) ? m.locale = _ : y(_) ? b = _ : F(_) && (v = _), Reflect.apply(t.t, t, [g, b || v || {}, m]);
    }, te(a, n) {
      return t.te(a, n);
    }, tm(a) {
      return t.tm(a);
    }, getLocaleMessage(a) {
      return t.getLocaleMessage(a);
    }, setLocaleMessage(a, n) {
      t.setLocaleMessage(a, n);
    }, mergeLocaleMessage(a, n) {
      t.mergeLocaleMessage(a, n);
    }, d(...a) {
      return Reflect.apply(t.d, t, [...a]);
    }, getDateTimeFormat(a) {
      return t.getDateTimeFormat(a);
    }, setDateTimeFormat(a, n) {
      t.setDateTimeFormat(a, n);
    }, mergeDateTimeFormat(a, n) {
      t.mergeDateTimeFormat(a, n);
    }, n(...a) {
      return Reflect.apply(t.n, t, [...a]);
    }, getNumberFormat(a) {
      return t.getNumberFormat(a);
    }, setNumberFormat(a, n) {
      t.setNumberFormat(a, n);
    }, mergeNumberFormat(a, n) {
      t.mergeNumberFormat(a, n);
    }, getChoiceIndex(a, n) {
      return -1;
    } };
    return c.__extender = l, c;
  }
}
const we = { tag: { type: [String, Object] }, locale: { type: String }, scope: { type: String, validator: (e) => e === "parent" || e === "global", default: "parent" }, i18n: { type: Object } };
function _t({ slots: e }, s) {
  return s.length === 1 && s[0] === "default" ? (e.default ? e.default() : []).reduce((l, c) => [...l, ...c.type === va ? c.children : [c]], []) : s.reduce((t, l) => {
    const c = e[l];
    return c && (t[l] = c()), t;
  }, C());
}
function Fa(e) {
  return va;
}
const mt = Ve({ name: "i18n-t", props: D({ keypath: { type: String, required: true }, plural: { type: [Number, String], validator: (e) => Q(e) || !isNaN(e) } }, we), setup(e, s) {
  const { slots: t, attrs: l } = s, c = e.i18n || xe({ useScope: e.scope, __useComponent: true });
  return () => {
    const a = Object.keys(t).filter((v) => v !== "_"), n = C();
    e.locale && (n.locale = e.locale), e.plural !== void 0 && (n.plural = E(e.plural) ? +e.plural : e.plural);
    const i = _t(s, a), _ = c[Ce](e.keypath, i, n), m = D(C(), l), b = E(e.tag) || p(e.tag) ? e.tag : Fa();
    return ga(b, m, _);
  };
} }), ra = mt;
function ft(e) {
  return y(e) && !E(e[0]);
}
function Na(e, s, t, l) {
  const { slots: c, attrs: a } = s;
  return () => {
    const n = { part: true };
    let i = C();
    e.locale && (n.locale = e.locale), E(e.format) ? n.key = e.format : p(e.format) && (E(e.format.key) && (n.key = e.format.key), i = Object.keys(e.format).reduce((g, d) => t.includes(d) ? D(C(), g, { [d]: e.format[d] }) : g, C()));
    const _ = l(e.value, n, i);
    let m = [n.key];
    y(_) ? m = _.map((g, d) => {
      const R = c[g.type], P = R ? R({ [g.type]: g.value, index: d, parts: _ }) : [g.value];
      return ft(P) && (P[0].key = `${g.type}-${d}`), P;
    }) : E(_) && (m = [_]);
    const b = D(C(), a), v = E(e.tag) || p(e.tag) ? e.tag : Fa();
    return ga(v, b, m);
  };
}
const gt = Ve({ name: "i18n-n", props: D({ value: { type: Number, required: true }, format: { type: [String, Object] } }, we), setup(e, s) {
  const t = e.i18n || xe({ useScope: e.scope, __useComponent: true });
  return Na(e, s, wa, (...l) => t[pe](...l));
} }), sa = gt, bt = Ve({ name: "i18n-d", props: D({ value: { type: [Number, Date], required: true }, format: { type: [String, Object] } }, we), setup(e, s) {
  const t = e.i18n || xe({ useScope: e.scope, __useComponent: true });
  return Na(e, s, xa, (...l) => t[Ae](...l));
} }), ca = bt;
function vt(e, s) {
  const t = e;
  if (e.mode === "composition")
    return t.__getInstance(s) || e.global;
  {
    const l = t.__getInstance(s);
    return l != null ? l.__composer : e.global.__composer;
  }
}
function dt(e) {
  const s = (n) => {
    const { instance: i, modifiers: _, value: m } = n;
    if (!i || !i.$)
      throw h(N.UNEXPECTED_ERROR);
    const b = vt(e, i.$), v = oa(m);
    return [Reflect.apply(b.t, b, [...ua(v)]), b];
  };
  return { created: (n, i) => {
    const [_, m] = s(i);
    ue && e.global === m && (n.__i18nWatcher = ye(m.locale, () => {
      i.instance && i.instance.$forceUpdate();
    })), n.__composer = m, n.textContent = _;
  }, unmounted: (n) => {
    ue && n.__i18nWatcher && (n.__i18nWatcher(), n.__i18nWatcher = void 0, delete n.__i18nWatcher), n.__composer && (n.__composer = void 0, delete n.__composer);
  }, beforeUpdate: (n, { value: i }) => {
    if (n.__composer) {
      const _ = n.__composer, m = oa(i);
      n.textContent = Reflect.apply(_.t, _, [...ua(m)]);
    }
  }, getSSRProps: (n) => {
    const [i] = s(n);
    return { textContent: i };
  } };
}
function oa(e) {
  if (E(e))
    return { path: e };
  if (F(e)) {
    if (!("path" in e))
      throw h(N.REQUIRED_VALUE, "path");
    return e;
  } else
    throw h(N.INVALID_VALUE);
}
function ua(e) {
  const { path: s, locale: t, args: l, choice: c, plural: a } = e, n = {}, i = l || {};
  return E(t) && (n.locale = t), Q(c) && (n.plural = c), Q(a) && (n.plural = a), [s, i, n];
}
function Et(e, s, ...t) {
  const l = F(t[0]) ? t[0] : {}, c = !!l.useI18nComponentName;
  (T(l.globalInstall) ? l.globalInstall : true) && ([c ? "i18n" : ra.name, "I18nT"].forEach((n) => e.component(n, ra)), [sa.name, "I18nN"].forEach((n) => e.component(n, sa)), [ca.name, "I18nD"].forEach((n) => e.component(n, ca))), e.directive("t", dt(s));
}
function It(e, s, t) {
  return { beforeCreate() {
    const l = te();
    if (!l)
      throw h(N.UNEXPECTED_ERROR);
    const c = this.$options;
    if (c.i18n) {
      const a = c.i18n;
      if (c.__i18n && (a.__i18n = c.__i18n), a.__root = s, this === this.$root)
        this.$i18n = ia(e, a);
      else {
        a.__injectWithOption = true, a.__extender = t.__vueI18nExtend, this.$i18n = Se(a);
        const n = this.$i18n;
        n.__extender && (n.__disposer = n.__extender(this.$i18n));
      }
    } else if (c.__i18n)
      if (this === this.$root)
        this.$i18n = ia(e, c);
      else {
        this.$i18n = Se({ __i18n: c.__i18n, __injectWithOption: true, __extender: t.__vueI18nExtend, __root: s });
        const a = this.$i18n;
        a.__extender && (a.__disposer = a.__extender(this.$i18n));
      }
    else
      this.$i18n = e;
    c.__i18nGlobal && Oa(s, c, c), this.$t = (...a) => this.$i18n.t(...a), this.$rt = (...a) => this.$i18n.rt(...a), this.$tc = (...a) => this.$i18n.tc(...a), this.$te = (a, n) => this.$i18n.te(a, n), this.$d = (...a) => this.$i18n.d(...a), this.$n = (...a) => this.$i18n.n(...a), this.$tm = (a) => this.$i18n.tm(a), t.__setInstance(l, this.$i18n);
  }, mounted() {
  }, unmounted() {
    const l = te();
    if (!l)
      throw h(N.UNEXPECTED_ERROR);
    const c = this.$i18n;
    delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, c.__disposer && (c.__disposer(), delete c.__disposer, delete c.__extender), t.__deleteInstance(l), delete this.$i18n;
  } };
}
function ia(e, s) {
  e.locale = s.locale || e.locale, e.fallbackLocale = s.fallbackLocale || e.fallbackLocale, e.missing = s.missing || e.missing, e.silentTranslationWarn = s.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = s.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = s.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = s.postTranslation || e.postTranslation, e.warnHtmlInMessage = s.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = s.escapeParameterHtml || e.escapeParameterHtml, e.sync = s.sync || e.sync, e.__composer[Ia](s.pluralizationRules || e.pluralizationRules);
  const t = ie(e.locale, { messages: s.messages, __i18n: s.__i18n });
  return Object.keys(t).forEach((l) => e.mergeLocaleMessage(l, t[l])), s.datetimeFormats && Object.keys(s.datetimeFormats).forEach((l) => e.mergeDateTimeFormat(l, s.datetimeFormats[l])), s.numberFormats && Object.keys(s.numberFormats).forEach((l) => e.mergeNumberFormat(l, s.numberFormats[l])), e;
}
const Lt = B("global-vue-i18n");
function Dt(e = {}, s) {
  const t = __VUE_I18N_LEGACY_API__ && T(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, l = T(e.globalInjection) ? e.globalInjection : true, c = __VUE_I18N_LEGACY_API__ && t ? !!e.allowComposition : true, a = /* @__PURE__ */ new Map(), [n, i] = Tt(e, t), _ = B("");
  function m(g) {
    return a.get(g) || null;
  }
  function b(g, d) {
    a.set(g, d);
  }
  function v(g) {
    a.delete(g);
  }
  {
    const g = { get mode() {
      return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition";
    }, get allowComposition() {
      return c;
    }, async install(d, ...R) {
      if (d.__VUE_I18N_SYMBOL__ = _, d.provide(d.__VUE_I18N_SYMBOL__, g), F(R[0])) {
        const A = R[0];
        g.__composerExtend = A.__composerExtend, g.__vueI18nExtend = A.__vueI18nExtend;
      }
      let P = null;
      !t && l && (P = yt(d, g.global)), __VUE_I18N_FULL_INSTALL__ && Et(d, g, ...R), __VUE_I18N_LEGACY_API__ && t && d.mixin(It(i, i.__composer, g));
      const V = d.unmount;
      d.unmount = () => {
        P && P(), g.dispose(), V();
      };
    }, get global() {
      return i;
    }, dispose() {
      n.stop();
    }, __instances: a, __getInstance: m, __setInstance: b, __deleteInstance: v };
    return g;
  }
}
function xe(e = {}) {
  const s = te();
  if (s == null)
    throw h(N.MUST_BE_CALL_SETUP_TOP);
  if (!s.isCE && s.appContext.app != null && !s.appContext.app.__VUE_I18N_SYMBOL__)
    throw h(N.NOT_INSTALLED);
  const t = Ot(s), l = Nt(t), c = Ta(s), a = Ft(e, c);
  if (__VUE_I18N_LEGACY_API__ && t.mode === "legacy" && !e.__useComponent) {
    if (!t.allowComposition)
      throw h(N.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Pt(s, a, l, e);
  }
  if (a === "global")
    return Oa(l, e, c), l;
  if (a === "parent") {
    let _ = Rt(t, s, e.__useComponent);
    return _ == null && (_ = l), _;
  }
  const n = t;
  let i = n.__getInstance(s);
  if (i == null) {
    const _ = D({}, e);
    "__i18n" in c && (_.__i18n = c.__i18n), l && (_.__root = l), i = Ue(_), n.__composerExtend && (i[De] = n.__composerExtend(i)), ht(n, s, i), n.__setInstance(s, i);
  }
  return i;
}
function Tt(e, s, t) {
  const l = Qa();
  {
    const c = __VUE_I18N_LEGACY_API__ && s ? l.run(() => Se(e)) : l.run(() => Ue(e));
    if (c == null)
      throw h(N.UNEXPECTED_ERROR);
    return [l, c];
  }
}
function Ot(e) {
  {
    const s = Za(e.isCE ? Lt : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!s)
      throw h(e.isCE ? N.NOT_INSTALLED_WITH_PROVIDE : N.UNEXPECTED_ERROR);
    return s;
  }
}
function Ft(e, s) {
  return Da(e) ? "__i18n" in s ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Nt(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Rt(e, s, t = false) {
  let l = null;
  const c = s.root;
  let a = kt(s, t);
  for (; a != null; ) {
    const n = e;
    if (e.mode === "composition")
      l = n.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = n.__getInstance(a);
      i != null && (l = i.__composer, t && l && !l[La] && (l = null));
    }
    if (l != null || c === a)
      break;
    a = a.parent;
  }
  return l;
}
function kt(e, s = false) {
  return e == null ? null : s && e.vnode.ctx || e.parent;
}
function ht(e, s, t) {
  et(() => {
  }, s), at(() => {
    const l = t;
    e.__deleteInstance(s);
    const c = l[De];
    c && (c(), delete l[De]);
  }, s);
}
function Pt(e, s, t, l = {}) {
  const c = s === "local", a = ba(null);
  if (c && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw h(N.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const n = T(l.inheritLocale) ? l.inheritLocale : !E(l.locale), i = q(!c || n ? t.locale.value : E(l.locale) ? l.locale : We), _ = q(!c || n ? t.fallbackLocale.value : E(l.fallbackLocale) || y(l.fallbackLocale) || F(l.fallbackLocale) || l.fallbackLocale === false ? l.fallbackLocale : i.value), m = q(ie(i.value, l)), b = q(F(l.datetimeFormats) ? l.datetimeFormats : { [i.value]: {} }), v = q(F(l.numberFormats) ? l.numberFormats : { [i.value]: {} }), g = c ? t.missingWarn : T(l.missingWarn) || Z(l.missingWarn) ? l.missingWarn : true, d = c ? t.fallbackWarn : T(l.fallbackWarn) || Z(l.fallbackWarn) ? l.fallbackWarn : true, R = c ? t.fallbackRoot : T(l.fallbackRoot) ? l.fallbackRoot : true, P = !!l.fallbackFormat, V = j(l.missing) ? l.missing : null, A = j(l.postTranslation) ? l.postTranslation : null, X = c ? t.warnHtmlMessage : T(l.warnHtmlMessage) ? l.warnHtmlMessage : true, U = !!l.escapeParameter, w = c ? t.modifiers : F(l.modifiers) ? l.modifiers : {}, J = l.pluralRules || c && t.pluralRules;
  function $() {
    return [i.value, _.value, m.value, b.value, v.value];
  }
  const ee = W({ get: () => a.value ? a.value.locale.value : i.value, set: (u) => {
    a.value && (a.value.locale.value = u), i.value = u;
  } }), S = W({ get: () => a.value ? a.value.fallbackLocale.value : _.value, set: (u) => {
    a.value && (a.value.fallbackLocale.value = u), _.value = u;
  } }), f = W(() => a.value ? a.value.messages.value : m.value), ne = W(() => b.value), _e = W(() => v.value);
  function me() {
    return a.value ? a.value.getPostTranslationHandler() : A;
  }
  function fe(u) {
    a.value && a.value.setPostTranslationHandler(u);
  }
  function ge() {
    return a.value ? a.value.getMissingHandler() : V;
  }
  function be(u) {
    a.value && a.value.setMissingHandler(u);
  }
  function G(u) {
    return $(), u();
  }
  function ve(...u) {
    return a.value ? G(() => Reflect.apply(a.value.t, null, [...u])) : G(() => "");
  }
  function de(...u) {
    return a.value ? Reflect.apply(a.value.rt, null, [...u]) : "";
  }
  function Ee(...u) {
    return a.value ? G(() => Reflect.apply(a.value.d, null, [...u])) : G(() => "");
  }
  function Ie(...u) {
    return a.value ? G(() => Reflect.apply(a.value.n, null, [...u])) : G(() => "");
  }
  function x(u) {
    return a.value ? a.value.tm(u) : {};
  }
  function re(u, I) {
    return a.value ? a.value.te(u, I) : false;
  }
  function Le(u) {
    return a.value ? a.value.getLocaleMessage(u) : {};
  }
  function Te(u, I) {
    a.value && (a.value.setLocaleMessage(u, I), m.value[u] = I);
  }
  function Oe(u, I) {
    a.value && a.value.mergeLocaleMessage(u, I);
  }
  function Fe(u) {
    return a.value ? a.value.getDateTimeFormat(u) : {};
  }
  function He(u, I) {
    a.value && (a.value.setDateTimeFormat(u, I), b.value[u] = I);
  }
  function Ne(u, I) {
    a.value && a.value.mergeDateTimeFormat(u, I);
  }
  function Re(u) {
    return a.value ? a.value.getNumberFormat(u) : {};
  }
  function ke(u, I) {
    a.value && (a.value.setNumberFormat(u, I), v.value[u] = I);
  }
  function he(u, I) {
    a.value && a.value.mergeNumberFormat(u, I);
  }
  const Pe = { get id() {
    return a.value ? a.value.id : -1;
  }, locale: ee, fallbackLocale: S, messages: f, datetimeFormats: ne, numberFormats: _e, get inheritLocale() {
    return a.value ? a.value.inheritLocale : n;
  }, set inheritLocale(u) {
    a.value && (a.value.inheritLocale = u);
  }, get availableLocales() {
    return a.value ? a.value.availableLocales : Object.keys(m.value);
  }, get modifiers() {
    return a.value ? a.value.modifiers : w;
  }, get pluralRules() {
    return a.value ? a.value.pluralRules : J;
  }, get isGlobal() {
    return a.value ? a.value.isGlobal : false;
  }, get missingWarn() {
    return a.value ? a.value.missingWarn : g;
  }, set missingWarn(u) {
    a.value && (a.value.missingWarn = u);
  }, get fallbackWarn() {
    return a.value ? a.value.fallbackWarn : d;
  }, set fallbackWarn(u) {
    a.value && (a.value.missingWarn = u);
  }, get fallbackRoot() {
    return a.value ? a.value.fallbackRoot : R;
  }, set fallbackRoot(u) {
    a.value && (a.value.fallbackRoot = u);
  }, get fallbackFormat() {
    return a.value ? a.value.fallbackFormat : P;
  }, set fallbackFormat(u) {
    a.value && (a.value.fallbackFormat = u);
  }, get warnHtmlMessage() {
    return a.value ? a.value.warnHtmlMessage : X;
  }, set warnHtmlMessage(u) {
    a.value && (a.value.warnHtmlMessage = u);
  }, get escapeParameter() {
    return a.value ? a.value.escapeParameter : U;
  }, set escapeParameter(u) {
    a.value && (a.value.escapeParameter = u);
  }, t: ve, getPostTranslationHandler: me, setPostTranslationHandler: fe, getMissingHandler: ge, setMissingHandler: be, rt: de, d: Ee, n: Ie, tm: x, te: re, getLocaleMessage: Le, setLocaleMessage: Te, mergeLocaleMessage: Oe, getDateTimeFormat: Fe, setDateTimeFormat: He, mergeDateTimeFormat: Ne, getNumberFormat: Re, setNumberFormat: ke, mergeNumberFormat: he };
  function Me(u) {
    u.locale.value = i.value, u.fallbackLocale.value = _.value, Object.keys(m.value).forEach((I) => {
      u.mergeLocaleMessage(I, m.value[I]);
    }), Object.keys(b.value).forEach((I) => {
      u.mergeDateTimeFormat(I, b.value[I]);
    }), Object.keys(v.value).forEach((I) => {
      u.mergeNumberFormat(I, v.value[I]);
    }), u.escapeParameter = U, u.fallbackFormat = P, u.fallbackRoot = R, u.fallbackWarn = d, u.missingWarn = g, u.warnHtmlMessage = X;
  }
  return tt(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw h(N.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const u = a.value = e.proxy.$i18n.__composer;
    s === "global" ? (i.value = u.locale.value, _.value = u.fallbackLocale.value, m.value = u.messages.value, b.value = u.datetimeFormats.value, v.value = u.numberFormats.value) : c && Me(u);
  }), Pe;
}
const Mt = ["locale", "fallbackLocale", "availableLocales"], _a = ["t", "rt", "d", "n", "tm", "te"];
function yt(e, s) {
  const t = /* @__PURE__ */ Object.create(null);
  return Mt.forEach((c) => {
    const a = Object.getOwnPropertyDescriptor(s, c);
    if (!a)
      throw h(N.UNEXPECTED_ERROR);
    const n = lt(a.value) ? { get() {
      return a.value.value;
    }, set(i) {
      a.value.value = i;
    } } : { get() {
      return a.get && a.get();
    } };
    Object.defineProperty(t, c, n);
  }), e.config.globalProperties.$i18n = t, _a.forEach((c) => {
    const a = Object.getOwnPropertyDescriptor(s, c);
    if (!a || !a.value)
      throw h(N.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${c}`, a);
  }), () => {
    delete e.config.globalProperties.$i18n, _a.forEach((c) => {
      delete e.config.globalProperties[`$${c}`];
    });
  };
}
ct();
__INTLIFY_JIT_COMPILATION__ ? Ge(Ha) : Ge($a);
Sa(Ga);
Wa(ma);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = K();
  e.__INTLIFY__ = true, Va(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
export {
  Dt as c,
  xe as u
};
