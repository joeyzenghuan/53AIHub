import { ap as be, aV as $e, aU as xe, u as T, au as Fe, b3 as ke, aG as _e, an as Pe, b as p, c as I, q as re, n as B, z as i, aC as Ee, aQ as je, r as h, ak as Re, o as te, bg as Me, al as R, ae as se, e as H, d as u, aN as me, h as V, i as t, aO as Ne, y as ee, f as a, aL as qe, Z as Te, t as l, H as w, aD as Oe, c7 as We, s as fe, c_ as ye, k as ge, a as ae, a9 as D, bK as Ge, $ as X, X as oe, p as ve, x as He, b5 as le, b4 as ie, J, g as Ve, F as Q, G as Ce, b1 as Ke, bS as Je, am as ce, a4 as M, b0 as Qe, a8 as Xe, L as Se, aa as ue, ac as de, c$ as Ze, d0 as Ye, d1 as et, d2 as tt, d3 as st } from "./index-6feda8be.js";
import { _ as at } from "./LanguageDropdown.vue_vue_type_script_setup_true_lang-8bee8213.js";
import { v as De } from "./el-loading-7d1392af.js";
import { E as ot } from "./el-divider-c2f6b942.js";
import "./agent-fc880aa9.js";
import { E as lt } from "./el-tag-41766c4c.js";
import { S as nt } from "./service-dialog-6e32652f.js";
import { u as rt } from "./index-43e50f65.js";
import "./el-dropdown-item-61acbf47.js";
import "./el-scrollbar-1c0147c5.js";
import "./dropdown-4cbb8c7d.js";
const it = be({ space: { type: [Number, String], default: "" }, active: { type: Number, default: 0 }, direction: { type: String, default: "horizontal", values: ["horizontal", "vertical"] }, alignCenter: { type: Boolean }, simple: { type: Boolean }, finishStatus: { type: String, values: ["wait", "process", "finish", "error", "success"], default: "finish" }, processStatus: { type: String, values: ["wait", "process", "finish", "error", "success"], default: "process" } }), ct = { [$e]: (x, b) => [x, b].every(xe) }, ut = T({ name: "ElSteps" }), dt = T({ ...ut, props: it, emits: ct, setup(x, { emit: b }) {
  const d = x, m = Fe("steps"), { children: E, addChild: g, removeChild: n } = rt(ke(), "ElStep");
  return _e(E, () => {
    E.value.forEach((s, e) => {
      s.setIndex(e);
    });
  }), Pe("ElSteps", { props: d, steps: E, addStep: g, removeStep: n }), _e(() => d.active, (s, e) => {
    b($e, s, e);
  }), (s, e) => (p(), I("div", { class: B([i(m).b(), i(m).m(s.simple ? "simple" : s.direction)]) }, [re(s.$slots, "default")], 2));
} });
var pt = Ee(dt, [["__file", "steps.vue"]]);
const _t = be({ title: { type: String, default: "" }, icon: { type: je }, description: { type: String, default: "" }, status: { type: String, values: ["", "wait", "process", "finish", "error", "success"], default: "" } }), mt = T({ name: "ElStep" }), ft = T({ ...mt, props: _t, setup(x) {
  const b = x, d = Fe("step"), m = h(-1), E = h({}), g = h(""), n = Re("ElSteps"), s = ke();
  te(() => {
    _e([() => n.props.active, () => n.props.processStatus, () => n.props.finishStatus], ([_]) => {
      P(_);
    }, { immediate: true });
  }), Me(() => {
    n.removeStep(N.uid);
  });
  const e = R(() => b.status || g.value), v = R(() => {
    const _ = n.steps.value[m.value - 1];
    return _ ? _.currentStatus : "wait";
  }), F = R(() => n.props.alignCenter), $ = R(() => n.props.direction === "vertical"), k = R(() => n.props.simple), z = R(() => n.steps.value.length), U = R(() => {
    var _;
    return ((_ = n.steps.value[z.value - 1]) == null ? void 0 : _.uid) === (s == null ? void 0 : s.uid);
  }), c = R(() => k.value ? "" : n.props.space), o = R(() => [d.b(), d.is(k.value ? "simple" : n.props.direction), d.is("flex", U.value && !c.value && !F.value), d.is("center", F.value && !$.value && !k.value)]), f = R(() => {
    const _ = { flexBasis: xe(c.value) ? `${c.value}px` : c.value ? c.value : `${100 / (z.value - (F.value ? 0 : 1))}%` };
    return $.value || U.value && (_.maxWidth = `${100 / z.value}%`), _;
  }), S = (_) => {
    m.value = _;
  }, A = (_) => {
    const y = _ === "wait", O = { transitionDelay: `${y ? "-" : ""}${150 * m.value}ms` }, j = _ === n.props.processStatus || y ? 0 : 100;
    O.borderWidth = j && !k.value ? "1px" : 0, O[n.props.direction === "vertical" ? "height" : "width"] = `${j}%`, E.value = O;
  }, P = (_) => {
    _ > m.value ? g.value = n.props.finishStatus : _ === m.value && v.value !== "error" ? g.value = n.props.processStatus : g.value = "wait";
    const y = n.steps.value[m.value - 1];
    y && y.calcProgress(g.value);
  }, N = se({ uid: s.uid, currentStatus: e, setIndex: S, calcProgress: A });
  return n.addStep(N), (_, y) => (p(), I("div", { style: me(i(f)), class: B(i(o)) }, [H(" icon & line "), u("div", { class: B([i(d).e("head"), i(d).is(i(e))]) }, [i(k) ? H("v-if", true) : (p(), I("div", { key: 0, class: B(i(d).e("line")) }, [u("i", { class: B(i(d).e("line-inner")), style: me(E.value) }, null, 6)], 2)), u("div", { class: B([i(d).e("icon"), i(d).is(_.icon || _.$slots.icon ? "icon" : "text")]) }, [re(_.$slots, "icon", {}, () => [_.icon ? (p(), V(i(ee), { key: 0, class: B(i(d).e("icon-inner")) }, { default: t(() => [(p(), V(Ne(_.icon)))]), _: 1 }, 8, ["class"])) : i(e) === "success" ? (p(), V(i(ee), { key: 1, class: B([i(d).e("icon-inner"), i(d).is("status")]) }, { default: t(() => [a(i(qe))]), _: 1 }, 8, ["class"])) : i(e) === "error" ? (p(), V(i(ee), { key: 2, class: B([i(d).e("icon-inner"), i(d).is("status")]) }, { default: t(() => [a(i(Te))]), _: 1 }, 8, ["class"])) : i(k) ? H("v-if", true) : (p(), I("div", { key: 3, class: B(i(d).e("icon-inner")) }, l(m.value + 1), 3))])], 2)], 2), H(" title & description "), u("div", { class: B(i(d).e("main")) }, [u("div", { class: B([i(d).e("title"), i(d).is(i(e))]) }, [re(_.$slots, "title", {}, () => [w(l(_.title), 1)])], 2), i(k) ? (p(), I("div", { key: 0, class: B(i(d).e("arrow")) }, null, 2)) : (p(), I("div", { key: 1, class: B([i(d).e("description"), i(d).is(i(e))]) }, [re(_.$slots, "description", {}, () => [w(l(_.description), 1)])], 2))], 2)], 6));
} });
var Ie = Ee(ft, [["__file", "item.vue"]]);
const gt = Oe(pt, { Step: Ie }), vt = We(Ie), wt = { sendcode(x) {
  return fe.post(`${ye}/v3/users/sendcode`, x, { code_sign: true, baseURL: "" }).catch(ge);
}, verifycode(x) {
  return fe.post(`${ye}/v4/xbot/checkverificationcode`, x, { ibos_sign: true, baseURL: "" }).then((b) => b.code !== 0 ? Promise.reject({ response: { data: b } }) : b).catch(ge);
} }, pe = /* @__PURE__ */ new Map(), Ae = { async checkAccount({ data: x = {} } = {}) {
  if (x = { account: "", ...x }, pe.has(x.account))
    return pe.get(x.account);
  const { data: b = {} } = await fe.post("/api/saas/auth/check_account", x).catch(ge);
  return pe.set(x.account, b), b;
} }, ht = T({ __name: "index", props: { account: { default: "" }, account_type: { default: "" }, modelValue: { default: "" }, bgColor: { default: "#F1F2F3" }, height: { default: "44px" }, size: { default: "large" }, clearable: { type: Boolean, default: true }, disabled: { type: Boolean, default: false }, countdown: { default: 60 }, maxlength: { default: 4 }, placeholder: { default: "verification_code_placeholder" } }, emits: ["update:modelValue"], setup(x, { expose: b, emit: d }) {
  const m = x, E = d, g = h(m.modelValue), n = h(0), s = R(() => m.disabled || !m.account || n.value > 0), e = R(() => m.account_type || /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/.test(m.account) ? "mobile" : "email");
  ae(() => {
    $ && clearInterval($);
  });
  const v = (c) => {
    E("update:modelValue", c);
  };
  function F(c) {
    let o = c.replace(/\D/g, "");
    return o.length > 11 && (o = o.slice(-11)), o.length !== 11 || !o.startsWith("1") ? false : /^1(3[5-9]|34[0-8]|440|4(7|8[0-9])|5[0-27-9]|7[28]|8[2-47-8]|9[58]|20)/.test(o);
  }
  let $ = null;
  const k = async () => {
    if (!m.account) {
      D.warning(window.$t(`login.${e.value}_placeholder`));
      return;
    }
    if (e.value !== "mobile") {
      D.warning(window.$t("form_mobile_validator"));
      return;
    }
    await Ge.qyy.send_code({ data: { mobile: m.account, source: F(m.account) ? "companyibos" : "agenthub" } }), n.value = m.countdown, D.success(window.$t("action_send_success")), $ = setInterval(() => {
      n.value--, n.value < 0 && clearInterval($);
    }, 1e3);
  };
  return b({ reset: () => {
    $ && clearInterval($), g.value = "", n.value = 0;
  }, validateCode: async () => wt.verifycode({ mobile: m.account, verifycode: g.value, type: "1" }).catch(() => Promise.resolve(false)) }), (c, o) => {
    const f = X, S = oe;
    return p(), V(S, { modelValue: g.value, "onUpdate:modelValue": o[0] || (o[0] = (A) => g.value = A), style: me({ "--el-input-bg-color": c.bgColor, "--el-input-border-color": "transparent", "--el-input-height": c.height }), clearable: c.clearable, size: c.size, disabled: c.disabled, maxlength: c.maxlength, placeholder: c.$t(c.placeholder), onChange: v }, { append: t(() => [a(f, { class: "!bg-transparent", type: "primary", text: "", disabled: s.value, onClick: k }, { default: t(() => [u("span", { class: B([s.value ? "cursor-not-allowed" : "cursor-pointer hover:opacity-70 text-[#3664EF]"]) }, l(n.value > 0 ? `${c.$t("action_send_success")}(${n.value}s)` : c.$t("get_verification_code")), 3)]), _: 1 }, 8, ["disabled"])]), _: 1 }, 8, ["modelValue", "style", "clearable", "size", "disabled", "maxlength", "placeholder"]);
  };
} });
const we = ve(ht, [["__scopeId", "data-v-dcef9465"]]), yt = { key: 0 }, bt = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-8" }, xt = { class: "w-[400px] max-h-[440px] pr-1 box-border overflow-auto flex flex-col gap-4" }, Ft = ["onClick"], kt = ["src"], Et = { class: "flex-1" }, Vt = { class: "text-base text-[#182B50]" }, Ct = { class: "text-sm text-[#9A9A9A] mt-2" }, St = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" }, Dt = { class: "text-[#1D1E1F]" }, It = { class: "text-[#1D1E1F]" }, At = { class: "text-[#1D1E1F]" }, Lt = { class: "text-[#1D1E1F]" }, Bt = { class: "absolute right-0 -bottom-9" }, zt = { class: "text-[#9A9A9A]" }, Ut = { class: "flex flex-col gap-4" }, Pt = ["innerHTML"], jt = T({ __name: "login-form", emits: ["forget", "register", "apply", "login-success"], setup(x, { expose: b, emit: d }) {
  const m = d;
  He();
  const E = le(), g = ie(), n = h(), s = h();
  h(), h();
  const e = se({ type: "password", username: "", password: "", verify_code: "" });
  h([]);
  const v = h(false), F = h([]), $ = h(false), k = h(false), z = R(() => {
    const { access_token: r } = E.info;
    return !!r;
  });
  te(() => {
    if (z.value)
      return c();
    const r = n.value.$el.querySelector(".agree-hook");
    r.onclick = K;
    const L = n.value.$el.querySelector(".policy-hook");
    L.onclick = Le, J.on("language-change", U);
  }), ae(() => {
    J.off("language-change", U);
  });
  const U = () => {
    n.value && n.value.clearValidate();
  }, c = async () => {
    $.value = true;
    let { list: r = [] } = await g.loadListData({ data: { status: -1 } }).finally(() => {
      $.value = false;
    });
    F.value = r;
  }, o = async ({ data: r = {} } = {}) => {
    if (r.is_process)
      return D.warning(window.$t("apply.process"));
    if (r.is_reject)
      return D.warning(r.reject_reason || window.$t("apply.reject"));
    if (r.is_expired)
      return D.warning(window.$t("apply.expired"));
    if (!r.is_loading) {
      if (r.is_loading = true, !r.eid) {
        const L = r.apply_id;
        let W = 0;
        const Z = async () => {
          let { list: q = [] } = await g.loadListData({ data: { status: -1 } });
          W++;
          const G = q.find((Y) => Y.apply_id == L);
          return !G.eid && W < 5 && (await Ze(1), await Z()), r.eid = G.eid || 0, G.eid;
        };
        if (await Z(), r.is_loading = false, !r.eid)
          return D.warning("Invalid eid");
      }
      await g.loadDetailData({ data: { eid: r.eid } }), window.parent && window.parent.postMessage({ action: "saas-login-success", eid: r.eid, access_token: E.info.access_token }, "*");
    }
  }, f = () => {
    m("apply");
  }, S = () => {
    e.type = "password", e.username = "", e.password = "", e.verify_code = "";
  }, A = async () => {
    let r = await n.value.validate();
    if (!r)
      return;
    if (v.value = true, e.type === "mobile" && (r = await s.value.validateCode(), !r))
      return v.value = false;
    (await E.login({ type: e.type, data: e, hideError: true }).catch((W) => (D.warning(window.$t(W.origin_message === "unauthorized" ? "response_message.user_not_found" : "response_message.username_or_password_is_incorrect")), Promise.reject(W))).finally(() => {
      v.value = false;
    })).is_new_user && Xe.confirm(window.$t("login.new_user_tip", { password: `${e.verify_code}${e.verify_code}` }), window.$t("tip"), { confirmButtonText: window.$t("login.I_remember"), cancelButtonText: window.$t("login.modify_password") }).then(() => {
    }).catch(() => {
      P();
    }), c(), D.success(window.$t("action_login_success")), S();
  }, P = () => {
    m("forget");
  }, N = () => {
    m("register");
  }, _ = () => {
    e.username = "", e.password = "", e.verify_code = "", e.type = "password";
  }, y = () => {
    e.username = "", e.password = "", e.verify_code = "", e.type = "mobile";
  }, O = () => {
    D.warning(window.$t("feature_coming_soon"));
  }, j = () => {
    D.warning(window.$t("feature_coming_soon"));
  }, K = () => {
    D.warning(window.$t("feature_coming_soon"));
  }, Le = () => {
    D.warning(window.$t("feature_coming_soon"));
  };
  return b({ reset: S }), (r, L) => {
    const W = lt, Z = ee, q = X, G = Se, Y = oe, ne = ue, Be = we, he = ot, ze = de, Ue = De;
    return p(), I(Q, null, [z.value ? (p(), I("div", yt, [u("h4", bt, l(r.$t("login.select_enterprise")), 1), Ve((p(), I("ul", xt, [(p(true), I(Q, null, Ce(F.value, (C) => (p(), I("li", { key: C.apply_id, class: "flex items-center border rounded-sm p-4 cursor-pointer hover:border-[#3664EF]", onClick: (ms) => o({ data: C }) }, [u("img", { class: "flex-none mr-4 w-[60px] h-[60px] object-cover rounded", src: C.logo }, null, 8, kt), u("div", Et, [u("div", Vt, l(C.name || "- -"), 1), u("div", Ct, l(C.domain || "- -"), 1)]), C.is_process ? (p(), V(W, { key: 0, type: "warning", effect: "light" }, { default: t(() => [w(l(r.$t("apply.process")), 1)]), _: 1 })) : C.is_expired ? (p(), V(W, { key: 1, type: "info", effect: "light" }, { default: t(() => [w(l(r.$t("apply.expired")), 1)]), _: 1 })) : C.is_reject ? (p(), V(W, { key: 2, type: "danger", effect: "light" }, { default: t(() => [w(l(r.$t("apply.reject")), 1)]), _: 1 })) : C.is_loading ? (p(), V(Z, { key: 3, size: "18", color: "#999", class: "animate-spin" }, { default: t(() => [a(i(Ke))]), _: 1 })) : (p(), V(Z, { key: 4, size: "18" }, { default: t(() => [a(i(Je))]), _: 1 }))], 8, Ft))), 128)), u("li", { class: "w-full min-h-[88px] flex-center border border-dashed border-[#E7EEFF] bg-[#F4F7FE] text-[#3664EF] rounded-sm cursor-pointer hover:border-[#3664EF]", onClick: f }, " + " + l(r.$t("apply.create_site")), 1)])), [[Ue, $.value]]), a(q, { type: "primary", text: "", class: "relative mt-4 !bg-transparent left-1/2 -translate-x-1/2", onClick: ce(c, ["stop"]) }, { default: t(() => [w(l(r.$t("apply.refresh_list")), 1)]), _: 1 }), u("div", { class: "flex items-center text-sm text-[#5B6A91] cursor-pointer w-max mx-auto mt-2", onClick: L[0] || (L[0] = (C) => k.value = true) }, [a(G, { name: "service", width: "14px", height: "14px", class: "mr-2" }), w(" " + l(r.$t("apply.contact_customer_service")), 1)])])) : (p(), V(ze, { key: 1, ref_key: "form_ref", ref: n, class: "relative max-w-[440px] w-full", model: e, "label-position": "top" }, { default: t(() => [u("h4", St, l(r.$t(`login.${e.type}_login`)), 1), e.type === "mobile" ? (p(), I(Q, { key: 0 }, [a(ne, { prop: "username", rules: i(M)({ message: "login.mobile_placeholder", validator: ["text", "mobile"] }) }, { label: t(() => [u("span", Dt, l(r.$t("mobile")), 1)]), default: t(() => [a(Y, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.username, "onUpdate:modelValue": L[1] || (L[1] = (C) => e.username = C), autocomplete: "new-username", name: "prevent_autofill_username", size: "large", placeholder: r.$t("login.mobile_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(ne, { class: "relative", prop: "verify_code", rules: i(M)({ message: "verification_code_placeholder" }) }, { label: t(() => [u("span", It, l(r.$t("verification_code")), 1)]), default: t(() => [a(Be, { ref_key: "verify_code_input_ref", ref: s, account: e.username, modelValue: e.verify_code, "onUpdate:modelValue": L[2] || (L[2] = (C) => e.verify_code = C) }, null, 8, ["account", "modelValue"])]), _: 1 }, 8, ["rules"]), a(q, { type: "primary", round: "", class: "w-full mt-8 !h-10", disabled: !e.username || !e.verify_code, loading: v.value, onClick: A }, { default: t(() => [w(l(r.$t("action_login")), 1)]), _: 1 }, 8, ["disabled", "loading"])], 64)) : (p(), I(Q, { key: 1 }, [a(ne, { prop: "username", rules: i(M)({ message: "login.mobile_placeholder", validator: ["text", "mobile"] }) }, { label: t(() => [u("span", At, l(r.$t("account")), 1)]), default: t(() => [a(Y, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.username, "onUpdate:modelValue": L[3] || (L[3] = (C) => e.username = C), size: "large", placeholder: r.$t("login.mobile_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(ne, { class: "relative", prop: "password", rules: i(M)({ message: "login.password_placeholder", validator: ["text", "password"] }) }, { label: t(() => [u("span", Lt, l(r.$t("password")), 1)]), default: t(() => [a(Y, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.password, "onUpdate:modelValue": L[4] || (L[4] = (C) => e.password = C), size: "large", type: "password", "show-password": "", clearable: "", placeholder: r.$t("login.password_placeholder"), onKeyup: Qe(A, ["enter"]) }, null, 8, ["modelValue", "placeholder"]), u("div", Bt, [a(q, { type: "text", class: "bg-transparent text-sm", onClick: N }, { default: t(() => [w(l(r.$t("user_register")), 1)]), _: 1 }), a(he, { direction: "vertical" }), a(q, { type: "text", class: "bg-transparent text-sm", onClick: P }, { default: t(() => [w(l(r.$t("login.forget_password")), 1)]), _: 1 })])]), _: 1 }, 8, ["rules"]), a(q, { type: "primary", round: "", class: "w-full mt-8 !h-10", disabled: !e.username || !e.password, loading: v.value, onClick: A }, { default: t(() => [w(l(r.$t("action_login")), 1)]), _: 1 }, 8, ["disabled", "loading"])], 64)), a(he, { class: "!w-[80%] !mx-auto" }, { default: t(() => [u("span", zt, l(r.$t("or")), 1)]), _: 1 }), u("div", Ut, [e.type !== "password" ? (p(), V(q, { key: 0, type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: _ }, { default: t(() => [a(G, { class: "mr-2", name: "password", width: "28" }), w(" " + l(r.$t("login.password_login_v2")), 1)]), _: 1 })) : H("", true), e.type !== "mobile" ? (p(), V(q, { key: 1, type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: y }, { default: t(() => [a(G, { class: "mr-2", name: "mobile", width: "28" }), w(" " + l(r.$t("login.mobile_login_v2")), 1)]), _: 1 })) : H("", true), a(q, { type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: O }, { default: t(() => [a(G, { class: "mr-2", name: "wechat", width: "28" }), w(" " + l(r.$t("login.wechat_login_v2")), 1)]), _: 1 }), a(q, { type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: j }, { default: t(() => [a(G, { class: "mr-2", name: "google", width: "28" }), w(" " + l(r.$t("login.google_login_v2")), 1)]), _: 1 }), u("div", { class: "text-xs text-[#9A9A9A] text-center", innerHTML: r.$t("login.agree_and_policy", { agree: `<span class='agree-hook cursor-pointer text-[#4F5052] text-xs mx-1 -mt-0.5 underline underline-offset-4'>${r.$t("login.agree")}</span>`, policy: `<span class='policy-hook cursor-pointer text-[#4F5052] text-xs mx-1 -mt-0.5 underline underline-offset-4'>${r.$t("login.policy")}</span>` }) }, null, 8, Pt)])]), _: 1 }, 8, ["model"])), a(nt, { visible: k.value, "onUpdate:visible": L[5] || (L[5] = (C) => k.value = C) }, null, 8, ["visible"])], 64);
  };
} }), Rt = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" }, Mt = { class: "text-[#1D1E1F]" }, Nt = { key: 0, class: "absolute -bottom-5 left-0 text-red-500 text-xs" }, qt = { class: "text-[#1D1E1F]" }, Tt = { class: "text-[#1D1E1F]" }, Ot = { class: "text-[#1D1E1F]" }, Wt = T({ __name: "forget-form", emits: ["login", "register"], setup(x, { expose: b, emit: d }) {
  const m = d, E = le(), g = h(), n = h(), s = se({ username_type: "mobile", username: "", verification_code: "", password: "", confirm_password: "" }), e = h(false), v = h(true);
  te(() => {
    J.on("language-change", F);
  }), ae(() => {
    J.off("language-change", F);
  });
  const F = () => {
    g.value && g.value.clearValidate();
  }, $ = () => {
    s.username_type = "mobile", s.username = "", s.verification_code = "", s.password = "", s.confirm_password = "";
  }, k = async () => {
    let o = await g.value.validate();
    if (o) {
      if (e.value = true, await c(), !v.value)
        return D.warning(window.$t("login.account_no_exists")), e.value = false;
      if (o = await n.value.validateCode(), !o)
        return e.value = false;
      await E.resetPassword({ data: { mobile: s.username, new_password: s.password, confirm_password: s.confirm_password, verify_code: s.verification_code } }).finally(() => {
        e.value = false;
      }), D.success($t("action_update_success")), $(), z();
    }
  }, z = () => {
    m("login");
  }, U = () => {
    m("register");
  }, c = async () => {
    if (v.value = true, !await g.value.validateField("username"))
      return;
    const { exists: f = false } = await Ae.checkAccount({ data: { account: s.username } });
    return v.value = f, f;
  };
  return b({ reset: $ }), (o, f) => {
    const S = oe, A = X, P = ue, N = we, _ = de;
    return p(), V(_, { ref_key: "form_ref", ref: g, class: "relative max-w-[440px] w-full", model: s, "label-position": "top" }, { default: t(() => [u("h4", Rt, l(o.$t("login.reset_password")), 1), a(P, { prop: "username", rules: i(M)({ message: `login.${s.username_type}_placeholder`, validator: ["text", s.username_type] }) }, { label: t(() => [u("span", Mt, l(o.$t(s.username_type)), 1)]), default: t(() => [a(S, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: s.username, "onUpdate:modelValue": f[0] || (f[0] = (y) => s.username = y), size: "large", autocomplete: "forgot-username", name: "prevent_autofill_username", placeholder: o.$t(`login.${s.username_type}_placeholder`), clearable: "", onBlur: c }, null, 8, ["modelValue", "placeholder"]), v.value ? H("", true) : (p(), I("div", Nt, [w(l(o.$t("login.account_no_exists")) + " ", 1), a(A, { type: "primary", link: "", size: "small", class: "!p-0 !bg-transparent -ml-1", onClick: U }, { default: t(() => [w(l(o.$t("action_register")), 1)]), _: 1 })]))]), _: 1 }, 8, ["rules"]), a(P, { class: "relative", prop: "verification_code", rules: i(M)({ message: "verification_code_placeholder" }) }, { label: t(() => [u("span", qt, l(o.$t("verification_code")), 1)]), default: t(() => [a(N, { ref_key: "verification_code_input_ref", ref: n, account: s.username, disabled: !v.value, modelValue: s.verification_code, "onUpdate:modelValue": f[1] || (f[1] = (y) => s.verification_code = y) }, null, 8, ["account", "disabled", "modelValue"])]), _: 1 }, 8, ["rules"]), a(P, { class: "relative", prop: "password", rules: [...i(M)({ message: "login.new_password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: o.$t("login.password_length"), trigger: "blur" }] }, { label: t(() => [u("span", Tt, l(o.$t("login.new_password")), 1)]), default: t(() => [a(S, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: s.password, "onUpdate:modelValue": f[2] || (f[2] = (y) => s.password = y), size: "large", type: "password", "show-password": "", clearable: "", autocomplete: "new-password", name: "prevent_autofill_password", placeholder: o.$t("login.new_password_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(P, { class: "relative", prop: "confirm_password", rules: [...i(M)({ message: "login.confirm_password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: o.$t("login.password_length"), trigger: "blur" }, { validator: (y, O, j) => {
      if (O !== s.password)
        return j(new Error(o.$t("login.password_not_match")));
      j();
    }, trigger: "blur" }] }, { label: t(() => [u("span", Ot, l(o.$t("login.confirm_password")), 1)]), default: t(() => [a(S, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: s.confirm_password, "onUpdate:modelValue": f[3] || (f[3] = (y) => s.confirm_password = y), size: "large", type: "password", "show-password": "", clearable: "", autocomplete: "new-password", name: "prevent_autofill_password", placeholder: o.$t("login.confirm_password_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(A, { type: "primary", round: "", class: "w-full mt-6 !h-10", disabled: !s.username || !s.password || !s.verification_code || !s.confirm_password, loading: e.value, onClick: ce(k, ["stop"]) }, { default: t(() => [w(l(o.$t("login.update_password")), 1)]), _: 1 }, 8, ["disabled", "loading"]), a(A, { type: "primary", text: "", class: "!p-0 mt-4 !mx-auto relative left-1/2 -translate-x-1/2 !bg-transparent", onClick: z }, { default: t(() => [w(l(o.$t("login.back_to_login")), 1)]), _: 1 })]), _: 1 }, 8, ["model"]);
  };
} });
const Gt = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" }, Ht = { class: "w-9 h-9 bg-[#F2F3F3] rounded-full flex items-center justify-center" }, Kt = { class: "text-[#1D1E1F]" }, Jt = { class: "text-[#1D1E1F]" }, Qt = { key: 1, class: "h-[424px] p-10 box-border bg-[#EFF9FF] rounded-lg flex flex-col items-center justify-center text-center" }, Xt = { class: "flex items-center justify-center gap-2" }, Zt = { class: "text-[#1D1E1F] text-2xl font-bold" }, Yt = { class: "text-[#666] text-sm mt-4" }, es = T({ __name: "apply-form-v2", emits: ["login"], setup(x, { expose: b, emit: d }) {
  const m = d, E = le(), g = ie(), n = h(), s = h(0), e = se({ website_name: "", contact_name: "" }), v = h(false), F = h(false);
  te(async () => {
    const { access_token: c } = E.info;
    if (c) {
      F.value = true;
      const { list: o = [] } = await g.loadListData({ data: { status: 0 } }).finally(() => {
        F.value = false;
      });
      o.length > 0 && (s.value = 1);
    }
    J.on("language-change", $);
  }), ae(() => {
    J.off("language-change", $);
  });
  const $ = () => {
    n.value && n.value.clearValidate();
  }, k = () => {
    e.website_name = "", e.contact_name = "";
  }, z = async () => {
    if (await n.value.validate()) {
      switch (s.value) {
        case 0:
          v.value = true, await g.apply({ data: { contact_name: e.contact_name, enterprise_name: e.website_name, phone: E.info.username, email: "" } }).finally(() => {
            v.value = false;
          }), s.value++, D.success($t("login.application_complete"));
          break;
      }
      k();
    }
  }, U = () => {
    m("login");
  };
  return b({ reset: k }), (c, o) => {
    const f = vt, S = gt, A = oe, P = ue, N = X, _ = ee, y = de, O = De;
    return Ve((p(), V(y, { ref_key: "form_ref", ref: n, class: "relative max-w-[440px] w-full", model: e, "label-position": "top" }, { default: t(() => [u("h4", Gt, l(c.$t("apply.create_site")), 1), a(S, { class: "mb-8", active: s.value, "align-center": "" }, { default: t(() => [(p(), I(Q, null, Ce(["module.website_info", "apply.waiting_audit", "apply.create_success"], (j, K) => a(f, { key: K }, { icon: t(() => [u("div", Ht, [u("div", { class: B(["w-7 h-7 rounded-full text-white text-sm flex items-center justify-center", [K < s.value ? "bg-[#82A2F7]" : s.value === K ? "bg-[#3664F0]" : "bg-[#CFD1D6]"]]) }, l(K + 1), 3)])]), title: t(() => [u("span", { class: B([K < s.value ? "text-[#B3C7FA]" : s.value === K ? "text-[#3664EF]" : "text-[#9A9A9A]"]) }, l(c.$t(j)), 3)]), _: 2 }, 1024)), 64))]), _: 1 }, 8, ["active"]), s.value === 0 ? (p(), I(Q, { key: 0 }, [a(P, { class: "is-required", prop: "website_name", rules: i(M)({ message: "login.website_name_placeholder" }) }, { label: t(() => [u("span", Kt, l(c.$t("login.website_name")), 1)]), default: t(() => [a(A, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.website_name, "onUpdate:modelValue": o[0] || (o[0] = (j) => e.website_name = j), size: "large", placeholder: c.$t("login.website_name_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(P, { class: "is-required", prop: "contact_name", rules: i(M)({ message: "login.contact_name_placeholder" }) }, { label: t(() => [u("span", Jt, l(c.$t("login.contact_name")), 1)]), default: t(() => [a(A, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.contact_name, "onUpdate:modelValue": o[1] || (o[1] = (j) => e.contact_name = j), size: "large", placeholder: c.$t("login.contact_name_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(N, { type: "primary", round: "", class: "w-full mt-6 !h-10", loading: v.value, disabled: !e.website_name || !e.contact_name, onClick: ce(z, ["stop"]) }, { default: t(() => [w(l(c.$t("action_next_step")), 1)]), _: 1 }, 8, ["loading", "disabled"])], 64)) : s.value === 1 ? (p(), I("div", Qt, [u("div", Xt, [a(_, { color: "#4CBF65", size: "28" }, { default: t(() => [a(i(Ye))]), _: 1 }), u("span", Zt, l(c.$t("apply.waiting_audit")), 1)]), u("div", Yt, l(c.$t("apply_success_desc")), 1), o[2] || (o[2] = u("img", { class: "w-[148px] object-contain mt-14", src: "//chat.53ai.com/images/upgrade-qrcode.png" }, null, -1))])) : (p(), I(Q, { key: 2 }, [], 64)), a(N, { type: "primary", text: "", class: "!p-0 mt-4 !mx-auto relative left-1/2 -translate-x-1/2 !bg-transparent", onClick: U }, { default: t(() => [w(l(c.$t("login.back_to_login")), 1)]), _: 1 })]), _: 1 }, 8, ["model"])), [[O, F.value]]);
  };
} });
const ts = ve(es, [["__scopeId", "data-v-a80e9eca"]]), ss = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" }, as = { class: "text-[#1D1E1F]" }, os = { key: 0, class: "absolute -bottom-5 left-0 text-red-500 text-xs" }, ls = { class: "text-[#1D1E1F]" }, ns = { class: "text-[#1D1E1F]" }, rs = { class: "w-full flex-center mt-4 text-sm text-[#9A9A9A]" }, is = T({ __name: "register-form", emits: ["login"], setup(x, { expose: b, emit: d }) {
  const m = d, E = le(), g = ie(), n = h(), s = h(), e = se({ username: "", verification_code: "", password: "" }), v = h(false), F = h(false);
  te(() => {
    E.info, J.on("language-change", $);
  }), ae(() => {
    J.off("language-change", $);
  });
  const $ = () => {
    n.value && n.value.clearValidate();
  }, k = () => {
    e.username = "", e.verification_code = "", e.password = "";
  }, z = async () => {
    let o = await n.value.validate();
    if (!o)
      return;
    if (v.value = true, await c(), F.value)
      return D.warning(window.$t("login.account_exists")), v.value = false;
    if (o = await s.value.validateCode(), !o)
      return v.value = false;
    await E.login({ data: { username: e.username, password: e.password, verify_code: e.verification_code }, hideError: false }).catch((S) => (v.value = false, Promise.reject(S)));
    const { list: f = [] } = await g.loadListData({ data: { status: 0 } }).catch((S) => (v.value = false, Promise.reject(S)));
    if (v.value = false, f.length > 0)
      return D.warning($t("login.apply_open_repetition"));
    D.success(window.$t("action_login_success")), k(), U();
  }, U = () => {
    m("login");
  }, c = async () => {
    if (F.value = false, !await n.value.validateField("username"))
      return;
    const { exists: f = false } = await Ae.checkAccount({ data: { account: e.username } });
    return F.value = f, f;
  };
  return b({ reset: k }), (o, f) => {
    const S = oe, A = X, P = ue, N = we, _ = de;
    return p(), V(_, { ref_key: "form_ref", ref: n, class: "relative max-w-[440px] w-full", model: e, "label-position": "top" }, { default: t(() => [u("h4", ss, l(o.$t("account_register")), 1), a(P, { prop: "username", class: "relative", rules: i(M)({ message: "login.mobile_placeholder", validator: ["text", "mobile"] }) }, { label: t(() => [u("span", as, l(o.$t("account")), 1)]), default: t(() => [a(S, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.username, "onUpdate:modelValue": f[0] || (f[0] = (y) => e.username = y), size: "large", autocomplete: "new-username", name: "prevent_autofill_username", placeholder: o.$t("login.mobile_placeholder"), clearable: "", onBlur: c }, null, 8, ["modelValue", "placeholder"]), F.value ? (p(), I("div", os, [w(l(o.$t("login.account_exists")) + " ", 1), a(A, { type: "primary", link: "", size: "small", class: "!p-0 !bg-transparent -ml-1", onClick: U }, { default: t(() => [w(l(o.$t("action_login")), 1)]), _: 1 })])) : H("", true)]), _: 1 }, 8, ["rules"]), a(P, { class: "relative", prop: "verification_code", rules: i(M)({ message: "verification_code_placeholder" }) }, { label: t(() => [u("span", ls, l(o.$t("verification_code")), 1)]), default: t(() => [a(N, { ref_key: "verification_code_input_ref", ref: s, account: e.username, disabled: F.value, modelValue: e.verification_code, "onUpdate:modelValue": f[1] || (f[1] = (y) => e.verification_code = y) }, null, 8, ["account", "disabled", "modelValue"])]), _: 1 }, 8, ["rules"]), a(P, { class: "relative", prop: "password", rules: [...i(M)({ message: "login.password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: o.$t("login.password_length"), trigger: "blur" }] }, { label: t(() => [u("span", ns, l(o.$t("password")), 1)]), default: t(() => [a(S, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.password, "onUpdate:modelValue": f[2] || (f[2] = (y) => e.password = y), size: "large", type: "password", "show-password": "", clearable: "", autocomplete: "new-password", name: "prevent_autofill_password", placeholder: o.$t("login.password_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(A, { type: "primary", round: "", loading: v.value, size: "large", class: "w-full mt-6 !h-10", disabled: !e.username || !e.password || !e.verification_code, onClick: ce(z, ["stop"]) }, { default: t(() => [w(l(o.$t("action_register")), 1)]), _: 1 }, 8, ["loading", "disabled"]), u("div", rs, [w(l(o.$t("login.has_account")) + " ", 1), a(A, { type: "primary", text: "", class: "!p-0 !bg-transparent", onClick: U }, { default: t(() => [w(l(o.$t("login.direct_login")), 1)]), _: 1 })])]), _: 1 }, 8, ["model"]);
  };
} });
const cs = ve(is, [["__scopeId", "data-v-85e66d39"]]), us = ["src"], ds = ["src"], ps = ["src"], _s = { class: "absolute top-6 right-6 flex gap-2 text-[#777] text-base" }, Es = T({ __name: "index", setup(x) {
  const b = le();
  ie();
  const d = h("login"), m = () => {
    window.open("https://www.53ai.com", "_blank");
  }, E = async () => {
    b.info, d.value = "apply";
  }, g = () => {
    d.value = "forget";
  }, n = () => {
    d.value = "login";
  }, s = () => {
    d.value = "register";
  };
  return (e, v) => {
    const F = tt, $ = at, k = Se, z = X, U = st, c = et;
    return p(), V(c, { class: "w-screen h-screen bg-white" }, { default: t(() => [a(F, { width: "55%", class: "relative bg-[url('/images/login/background.png')] bg-cover bg-center bg-no-repeat max-md:hidden" }, { default: t(() => [u("img", { class: "w-[24%] object-contain absolute top-8 left-10", src: e.$getRealPath({ url: "/images/logo_2.png" }), alt: "" }, null, 8, us), u("img", { class: "w-[48%] object-contain absolute top-[25%] left-1/2 -translate-x-1/2", src: e.$getRealPath({ url: "/images/login/title.png" }), alt: "" }, null, 8, ds), u("img", { class: "w-[70%] object-contain absolute top-[32%] left-1/2 -translate-x-1/2", src: e.$getRealPath({ url: "/images/login/demo.png" }), alt: "" }, null, 8, ps)]), _: 1 }), a(U, { class: "relative flex flex-col justify-center items-center pt-10 px-6 box-border overflow-auto" }, { default: t(() => [u("div", _s, [a($), a(z, { class: "!p-0 !border-none !outline-none !bg-transparent !leading-1 !h-auto hover:opacity-70", type: "default", text: "", onClick: m }, { default: t(() => [a(k, { class: "mr-1", name: "home_v2", width: "16" }), w(" " + l(e.$t("official_website")), 1)]), _: 1 })]), d.value === "login" ? (p(), V(jt, { key: 0, onForget: g, onRegister: s, onApply: E })) : d.value === "apply" ? (p(), V(ts, { key: 1, onLogin: n })) : d.value === "forget" ? (p(), V(Wt, { key: 2, onLogin: n, onRegister: s })) : d.value === "register" ? (p(), V(cs, { key: 3, onLogin: n })) : H("", true)]), _: 1 })]), _: 1 });
  };
} });
export {
  Es as default
};
