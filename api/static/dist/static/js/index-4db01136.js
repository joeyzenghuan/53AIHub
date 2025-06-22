import { aP as be, bs as $e, br as xe, y as O, aU as Fe, h as ke, $ as pe, ax as Ue, b as p, c as A, s as ne, q as U, u as i, a$ as Ee, bm as je, r as h, aI as Ne, o as ee, bh as Re, Y as j, Z as te, e as q, d, a7 as _e, j as C, w as t, ao as Me, G as X, f as a, a1 as Te, a2 as qe, t as n, L as w, b0 as Oe, cl as We, z as me, dn as ye, A as fe, a as se, a9 as S, bW as Ke, a4 as J, a5 as ae, I as ge, E as Ge, ak as oe, aq as re, N as H, m as Ce, F as Y, K as He, bz as Ye, c6 as Je, x as ie, al as N, by as Ze, ab as Qe, R as Ve, ag as ce, ah as ue, aM as Xe, dp as et, n as tt, db as st, d9 as at, da as ot } from "./index-8579fe4a.js";
import { _ as lt } from "./LanguageDropdown.vue_vue_type_script_setup_true_lang-04b46d78.js";
import { v as Se } from "./el-loading-8747b309.js";
import { E as nt } from "./el-divider-7d014453.js";
import { E as rt } from "./el-tag-0b6baecb.js";
import { S as it } from "./service-dialog-6ec04cf3.js";
import { u as ct } from "./index-3dae9a97.js";
import "./el-dropdown-menu-ce96a192.js";
import "./el-scrollbar-4065fe54.js";
import "./dropdown-85221e0a.js";
import "./el-dropdown-item-4ed993c7.js";
const ut = be({ space: { type: [Number, String], default: "" }, active: { type: Number, default: 0 }, direction: { type: String, default: "horizontal", values: ["horizontal", "vertical"] }, alignCenter: { type: Boolean }, simple: { type: Boolean }, finishStatus: { type: String, values: ["wait", "process", "finish", "error", "success"], default: "finish" }, processStatus: { type: String, values: ["wait", "process", "finish", "error", "success"], default: "process" } }), dt = { [$e]: (x, b) => [x, b].every(xe) }, De = "ElSteps", pt = O({ name: "ElSteps" }), _t = O({ ...pt, props: ut, emits: dt, setup(x, { emit: b }) {
  const u = x, m = Fe("steps"), { children: E, addChild: g, removeChild: l } = ct(ke(), "ElStep");
  return pe(E, () => {
    E.value.forEach((o, e) => {
      o.setIndex(e);
    });
  }), Ue(De, { props: u, steps: E, addStep: g, removeStep: l }), pe(() => u.active, (o, e) => {
    b($e, o, e);
  }), (o, e) => (p(), A("div", { class: U([i(m).b(), i(m).m(o.simple ? "simple" : o.direction)]) }, [ne(o.$slots, "default")], 2));
} });
var mt = Ee(_t, [["__file", "steps.vue"]]);
const ft = be({ title: { type: String, default: "" }, icon: { type: je }, description: { type: String, default: "" }, status: { type: String, values: ["", "wait", "process", "finish", "error", "success"], default: "" } }), gt = O({ name: "ElStep" }), vt = O({ ...gt, props: ft, setup(x) {
  const b = x, u = Fe("step"), m = h(-1), E = h({}), g = h(""), l = Ne(De), o = ke();
  ee(() => {
    pe([() => l.props.active, () => l.props.processStatus, () => l.props.finishStatus], ([_]) => {
      P(_);
    }, { immediate: true });
  }), Re(() => {
    l.removeStep(M.uid);
  });
  const e = j(() => b.status || g.value), v = j(() => {
    const _ = l.steps.value[m.value - 1];
    return _ ? _.currentStatus : "wait";
  }), F = j(() => l.props.alignCenter), $ = j(() => l.props.direction === "vertical"), k = j(() => l.props.simple), L = j(() => l.steps.value.length), z = j(() => {
    var _;
    return ((_ = l.steps.value[L.value - 1]) == null ? void 0 : _.uid) === (o == null ? void 0 : o.uid);
  }), c = j(() => k.value ? "" : l.props.space), s = j(() => [u.b(), u.is(k.value ? "simple" : l.props.direction), u.is("flex", z.value && !c.value && !F.value), u.is("center", F.value && !$.value && !k.value)]), f = j(() => {
    const _ = { flexBasis: xe(c.value) ? `${c.value}px` : c.value ? c.value : `${100 / (L.value - (F.value ? 0 : 1))}%` };
    return $.value || z.value && (_.maxWidth = `${100 / L.value}%`), _;
  }), D = (_) => {
    m.value = _;
  }, I = (_) => {
    const y = _ === "wait", W = { transitionDelay: `${y ? "-" : ""}${150 * m.value}ms` }, R = _ === l.props.processStatus || y ? 0 : 100;
    W.borderWidth = R && !k.value ? "1px" : 0, W[l.props.direction === "vertical" ? "height" : "width"] = `${R}%`, E.value = W;
  }, P = (_) => {
    _ > m.value ? g.value = l.props.finishStatus : _ === m.value && v.value !== "error" ? g.value = l.props.processStatus : g.value = "wait";
    const y = l.steps.value[m.value - 1];
    y && y.calcProgress(g.value);
  }, M = te({ uid: o.uid, currentStatus: e, setIndex: D, calcProgress: I });
  return l.addStep(M), (_, y) => (p(), A("div", { style: _e(i(f)), class: U(i(s)) }, [q(" icon & line "), d("div", { class: U([i(u).e("head"), i(u).is(i(e))]) }, [i(k) ? q("v-if", true) : (p(), A("div", { key: 0, class: U(i(u).e("line")) }, [d("i", { class: U(i(u).e("line-inner")), style: _e(E.value) }, null, 6)], 2)), d("div", { class: U([i(u).e("icon"), i(u).is(_.icon || _.$slots.icon ? "icon" : "text")]) }, [ne(_.$slots, "icon", {}, () => [_.icon ? (p(), C(i(X), { key: 0, class: U(i(u).e("icon-inner")) }, { default: t(() => [(p(), C(Me(_.icon)))]), _: 1 }, 8, ["class"])) : i(e) === "success" ? (p(), C(i(X), { key: 1, class: U([i(u).e("icon-inner"), i(u).is("status")]) }, { default: t(() => [a(i(Te))]), _: 1 }, 8, ["class"])) : i(e) === "error" ? (p(), C(i(X), { key: 2, class: U([i(u).e("icon-inner"), i(u).is("status")]) }, { default: t(() => [a(i(qe))]), _: 1 }, 8, ["class"])) : i(k) ? q("v-if", true) : (p(), A("div", { key: 3, class: U(i(u).e("icon-inner")) }, n(m.value + 1), 3))])], 2)], 2), q(" title & description "), d("div", { class: U(i(u).e("main")) }, [d("div", { class: U([i(u).e("title"), i(u).is(i(e))]) }, [ne(_.$slots, "title", {}, () => [w(n(_.title), 1)])], 2), i(k) ? (p(), A("div", { key: 0, class: U(i(u).e("arrow")) }, null, 2)) : (p(), A("div", { key: 1, class: U([i(u).e("description"), i(u).is(i(e))]) }, [ne(_.$slots, "description", {}, () => [w(n(_.description), 1)])], 2))], 2)], 6));
} });
var Ie = Ee(vt, [["__file", "item.vue"]]);
const wt = Oe(mt, { Step: Ie }), ht = We(Ie), yt = { sendcode(x) {
  return me.post(`${ye}/v3/users/sendcode`, x, { code_sign: true, baseURL: "" }).catch(fe);
}, verifycode(x) {
  return me.post(`${ye}/v4/xbot/checkverificationcode`, x, { ibos_sign: true, baseURL: "" }).then((b) => b.code !== 0 ? Promise.reject({ response: { data: b } }) : b).catch(fe);
} }, de = /* @__PURE__ */ new Map(), Ae = { async checkAccount({ data: x = {} } = {}) {
  if (x = { account: "", ...x }, de.has(x.account))
    return de.get(x.account);
  const { data: b = {} } = await me.post("/api/saas/auth/check_account", x).catch(fe);
  return de.set(x.account, b), b;
} }, bt = O({ __name: "index", props: { account: { default: "" }, account_type: { default: "" }, modelValue: { default: "" }, bgColor: { default: "#F1F2F3" }, height: { default: "44px" }, size: { default: "large" }, clearable: { type: Boolean, default: true }, disabled: { type: Boolean, default: false }, countdown: { default: 60 }, maxlength: { default: 4 }, placeholder: { default: "verification_code_placeholder" } }, emits: ["update:modelValue"], setup(x, { expose: b, emit: u }) {
  const m = x, E = u, g = h(m.modelValue), l = h(0), o = j(() => m.disabled || !m.account || l.value > 0), e = j(() => m.account_type || /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/.test(m.account) ? "mobile" : "email");
  se(() => {
    $ && clearInterval($);
  });
  const v = (c) => {
    E("update:modelValue", c);
  };
  function F(c) {
    let s = c.replace(/\D/g, "");
    return s.length > 11 && (s = s.slice(-11)), s.length !== 11 || !s.startsWith("1") ? false : /^1(3[5-9]|34[0-8]|440|4(7|8[0-9])|5[0-27-9]|7[28]|8[2-47-8]|9[58]|20)/.test(s);
  }
  let $ = null;
  const k = async () => {
    if (!m.account) {
      S.warning(window.$t(`login.${e.value}_placeholder`));
      return;
    }
    if (e.value !== "mobile") {
      S.warning(window.$t("form_mobile_validator"));
      return;
    }
    await Ke.qyy.send_code({ data: { mobile: m.account, source: F(m.account) ? "companyibos" : "agenthub" } }), l.value = m.countdown, S.success(window.$t("action_send_success")), $ = setInterval(() => {
      l.value--, l.value < 0 && clearInterval($);
    }, 1e3);
  };
  return b({ reset: () => {
    $ && clearInterval($), g.value = "", l.value = 0;
  }, validateCode: async () => yt.verifycode({ mobile: m.account, verifycode: g.value, type: "1" }).catch(() => Promise.resolve(false)) }), (c, s) => {
    const f = J, D = ae;
    return p(), C(D, { modelValue: g.value, "onUpdate:modelValue": s[0] || (s[0] = (I) => g.value = I), style: _e({ "--el-input-bg-color": c.bgColor, "--el-input-border-color": "transparent", "--el-input-height": c.height }), clearable: c.clearable, size: c.size, disabled: c.disabled, maxlength: c.maxlength, placeholder: c.$t(c.placeholder), onChange: v }, { append: t(() => [a(f, { class: "!bg-transparent", type: "primary", text: "", disabled: o.value, onClick: k }, { default: t(() => [d("span", { class: U([o.value ? "cursor-not-allowed" : "cursor-pointer hover:opacity-70 text-[#3664EF]"]) }, n(l.value > 0 ? `${c.$t("action_send_success")}(${l.value}s)` : c.$t("get_verification_code")), 3)]), _: 1 }, 8, ["disabled"])]), _: 1 }, 8, ["modelValue", "style", "clearable", "size", "disabled", "maxlength", "placeholder"]);
  };
} });
const ve = ge(bt, [["__scopeId", "data-v-dcef9465"]]), xt = { key: 0 }, Ft = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-8" }, kt = { class: "w-[400px] max-h-[440px] pr-1 box-border overflow-auto flex flex-col gap-4" }, Et = ["onClick"], Ct = ["src"], Vt = { class: "flex-1" }, St = { class: "text-base text-[#182B50]" }, Dt = { class: "text-sm text-[#9A9A9A] mt-2" }, It = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" }, At = { class: "text-[#1D1E1F]" }, Bt = { class: "text-[#1D1E1F]" }, Lt = { class: "text-[#1D1E1F]" }, zt = { class: "text-[#1D1E1F]" }, Pt = { class: "absolute right-0 -bottom-9" }, Ut = { class: "text-[#9A9A9A]" }, jt = { class: "flex flex-col gap-4" }, Nt = ["innerHTML"], Rt = O({ __name: "login-form", emits: ["forget", "register", "apply", "login-success"], setup(x, { expose: b, emit: u }) {
  const m = u;
  Ge();
  const E = oe(), g = re(), l = h(), o = h();
  h(), h();
  const e = te({ type: "password", username: "", password: "", verify_code: "" });
  h([]);
  const v = h(false), F = h([]), $ = h(false), k = h(false), L = j(() => {
    const { access_token: r } = E.info;
    return !!r;
  });
  ee(() => {
    if (L.value)
      return c();
    const r = l.value.$el.querySelector(".agree-hook");
    r.onclick = we;
    const B = l.value.$el.querySelector(".policy-hook");
    B.onclick = Be, H.on("language-change", z);
  }), se(() => {
    H.off("language-change", z);
  });
  const z = () => {
    l.value && l.value.clearValidate();
  }, c = async () => {
    $.value = true;
    let { list: r = [] } = await g.loadListData({ data: { status: -1 } }).finally(() => {
      $.value = false;
    });
    F.value = r;
  }, s = async ({ data: r = {} } = {}) => {
    if (r.is_process)
      return S.warning(window.$t("apply.process"));
    if (r.is_reject)
      return S.warning(r.reject_reason || window.$t("apply.reject"));
    if (r.is_expired)
      return S.warning(window.$t("apply.expired"));
    if (!r.is_loading) {
      if (r.is_loading = true, !r.eid) {
        const B = r.apply_id;
        let K = 0;
        const Z = async () => {
          let { list: T = [] } = await g.loadListData({ data: { status: -1 } });
          K++;
          const G = T.find((Q) => Q.apply_id == B);
          return !G.eid && K < 5 && (await Xe(1), await Z()), r.eid = G.eid || 0, G.eid;
        };
        if (await Z(), r.is_loading = false, !r.eid)
          return S.warning("Invalid eid");
      }
      await g.loadDetailData({ data: { eid: r.eid } }), window.parent && window.parent.postMessage({ action: "saas-login-success", eid: r.eid, access_token: E.info.access_token }, "*");
    }
  }, f = () => {
    m("apply");
  }, D = () => {
    e.type = "password", e.username = "", e.password = "", e.verify_code = "";
  }, I = async () => {
    let r = await l.value.validate();
    if (!r)
      return;
    if (v.value = true, e.type === "mobile" && (r = await o.value.validateCode(), !r))
      return v.value = false;
    (await E.login({ type: e.type, data: e, hideError: true }).catch((K) => (S.warning(window.$t(K.origin_message === "unauthorized" ? "response_message.user_not_found" : "response_message.username_or_password_is_incorrect")), Promise.reject(K))).finally(() => {
      v.value = false;
    })).is_new_user && Qe.confirm(window.$t("login.new_user_tip", { password: `${e.verify_code}${e.verify_code}` }), window.$t("tip"), { confirmButtonText: window.$t("login.I_remember"), cancelButtonText: window.$t("login.modify_password") }).then(() => {
    }).catch(() => {
      P();
    }), c(), S.success(window.$t("action_login_success")), D();
  }, P = () => {
    m("forget");
  }, M = () => {
    m("register");
  }, _ = () => {
    e.username = "", e.password = "", e.verify_code = "", e.type = "password";
  }, y = () => {
    e.username = "", e.password = "", e.verify_code = "", e.type = "mobile";
  }, W = () => {
    S.warning(window.$t("feature_coming_soon"));
  }, R = () => {
    S.warning(window.$t("feature_coming_soon"));
  }, we = () => {
    S.warning(window.$t("feature_coming_soon"));
  }, Be = () => {
    S.warning(window.$t("feature_coming_soon"));
  };
  return b({ reset: D }), (r, B) => {
    const K = rt, Z = X, T = J, G = Ve, Q = ae, le = ce, Le = ve, he = nt, ze = ue, Pe = Se;
    return p(), A(Y, null, [L.value ? (p(), A("div", xt, [d("h4", Ft, n(r.$t("login.select_enterprise")), 1), Ce((p(), A("ul", kt, [(p(true), A(Y, null, He(F.value, (V) => (p(), A("li", { key: V.apply_id, class: "flex items-center border rounded-sm p-4 cursor-pointer hover:border-[#3664EF]", onClick: (fs) => s({ data: V }) }, [d("img", { class: "flex-none mr-4 w-[60px] h-[60px] object-cover rounded", src: V.logo }, null, 8, Ct), d("div", Vt, [d("div", St, n(V.name || "- -"), 1), d("div", Dt, n(V.domain || "- -"), 1)]), V.is_process ? (p(), C(K, { key: 0, type: "warning", effect: "light" }, { default: t(() => [w(n(r.$t("apply.process")), 1)]), _: 1 })) : V.is_expired ? (p(), C(K, { key: 1, type: "info", effect: "light" }, { default: t(() => [w(n(r.$t("apply.expired")), 1)]), _: 1 })) : V.is_reject ? (p(), C(K, { key: 2, type: "danger", effect: "light" }, { default: t(() => [w(n(r.$t("apply.reject")), 1)]), _: 1 })) : V.is_loading ? (p(), C(Z, { key: 3, size: "18", color: "#999", class: "animate-spin" }, { default: t(() => [a(i(Ye))]), _: 1 })) : (p(), C(Z, { key: 4, size: "18" }, { default: t(() => [a(i(Je))]), _: 1 }))], 8, Et))), 128)), d("li", { class: "w-full min-h-[88px] flex-center border border-dashed border-[#E7EEFF] bg-[#F4F7FE] text-[#3664EF] rounded-sm cursor-pointer hover:border-[#3664EF]", onClick: f }, " + " + n(r.$t("apply.create_site")), 1)])), [[Pe, $.value]]), a(T, { type: "primary", text: "", class: "relative mt-4 !bg-transparent left-1/2 -translate-x-1/2", onClick: ie(c, ["stop"]) }, { default: t(() => [w(n(r.$t("apply.refresh_list")), 1)]), _: 1 }), d("div", { class: "flex items-center text-sm text-[#5B6A91] cursor-pointer w-max mx-auto mt-2", onClick: B[0] || (B[0] = (V) => k.value = true) }, [a(G, { name: "service", width: "14px", height: "14px", class: "mr-2" }), w(" " + n(r.$t("apply.contact_customer_service")), 1)])])) : (p(), C(ze, { key: 1, ref_key: "form_ref", ref: l, class: "relative max-w-[440px] w-full", model: e, "label-position": "top" }, { default: t(() => [d("h4", It, n(r.$t(`login.${e.type}_login`)), 1), e.type === "mobile" ? (p(), A(Y, { key: 0 }, [a(le, { prop: "username", rules: i(N)({ message: "login.mobile_placeholder", validator: ["text", "mobile"] }) }, { label: t(() => [d("span", At, n(r.$t("mobile")), 1)]), default: t(() => [a(Q, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.username, "onUpdate:modelValue": B[1] || (B[1] = (V) => e.username = V), autocomplete: "new-username", name: "prevent_autofill_username", size: "large", placeholder: r.$t("login.mobile_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(le, { class: "relative", prop: "verify_code", rules: i(N)({ message: "verification_code_placeholder" }) }, { label: t(() => [d("span", Bt, n(r.$t("verification_code")), 1)]), default: t(() => [a(Le, { ref_key: "verify_code_input_ref", ref: o, account: e.username, modelValue: e.verify_code, "onUpdate:modelValue": B[2] || (B[2] = (V) => e.verify_code = V) }, null, 8, ["account", "modelValue"])]), _: 1 }, 8, ["rules"]), a(T, { type: "primary", round: "", class: "w-full mt-8 !h-10", disabled: !e.username || !e.verify_code, loading: v.value, onClick: I }, { default: t(() => [w(n(r.$t("action_login")), 1)]), _: 1 }, 8, ["disabled", "loading"])], 64)) : (p(), A(Y, { key: 1 }, [a(le, { prop: "username", rules: i(N)({ message: "login.mobile_placeholder", validator: ["text", "mobile"] }) }, { label: t(() => [d("span", Lt, n(r.$t("account")), 1)]), default: t(() => [a(Q, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.username, "onUpdate:modelValue": B[3] || (B[3] = (V) => e.username = V), size: "large", placeholder: r.$t("login.mobile_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(le, { class: "relative", prop: "password", rules: i(N)({ message: "login.password_placeholder", validator: ["text", "password"] }) }, { label: t(() => [d("span", zt, n(r.$t("password")), 1)]), default: t(() => [a(Q, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.password, "onUpdate:modelValue": B[4] || (B[4] = (V) => e.password = V), size: "large", type: "password", "show-password": "", clearable: "", placeholder: r.$t("login.password_placeholder"), onKeyup: Ze(I, ["enter"]) }, null, 8, ["modelValue", "placeholder"]), d("div", Pt, [a(T, { type: "text", class: "bg-transparent text-sm", onClick: M }, { default: t(() => [w(n(r.$t("user_register")), 1)]), _: 1 }), a(he, { direction: "vertical" }), a(T, { type: "text", class: "bg-transparent text-sm", onClick: P }, { default: t(() => [w(n(r.$t("login.forget_password")), 1)]), _: 1 })])]), _: 1 }, 8, ["rules"]), a(T, { type: "primary", round: "", class: "w-full mt-8 !h-10", disabled: !e.username || !e.password, loading: v.value, onClick: I }, { default: t(() => [w(n(r.$t("action_login")), 1)]), _: 1 }, 8, ["disabled", "loading"])], 64)), a(he, { class: "!w-[80%] !mx-auto" }, { default: t(() => [d("span", Ut, n(r.$t("or")), 1)]), _: 1 }), d("div", jt, [e.type !== "password" ? (p(), C(T, { key: 0, type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: _ }, { default: t(() => [a(G, { class: "mr-2", name: "password", width: "28" }), w(" " + n(r.$t("login.password_login_v2")), 1)]), _: 1 })) : q("", true), e.type !== "mobile" ? (p(), C(T, { key: 1, type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: y }, { default: t(() => [a(G, { class: "mr-2", name: "mobile", width: "28" }), w(" " + n(r.$t("login.mobile_login_v2")), 1)]), _: 1 })) : q("", true), a(T, { type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: W }, { default: t(() => [a(G, { class: "mr-2", name: "wechat", width: "28" }), w(" " + n(r.$t("login.wechat_login_v2")), 1)]), _: 1 }), a(T, { type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: R }, { default: t(() => [a(G, { class: "mr-2", name: "google", width: "28" }), w(" " + n(r.$t("login.google_login_v2")), 1)]), _: 1 }), d("div", { class: "text-xs text-[#9A9A9A] text-center", innerHTML: r.$t("login.agree_and_policy", { agree: `<span class='agree-hook cursor-pointer text-[#4F5052] text-xs mx-1 -mt-0.5 underline underline-offset-4'>${r.$t("login.agree")}</span>`, policy: `<span class='policy-hook cursor-pointer text-[#4F5052] text-xs mx-1 -mt-0.5 underline underline-offset-4'>${r.$t("login.policy")}</span>` }) }, null, 8, Nt)])]), _: 1 }, 8, ["model"])), a(it, { visible: k.value, "onUpdate:visible": B[5] || (B[5] = (V) => k.value = V) }, null, 8, ["visible"])], 64);
  };
} }), Mt = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" }, Tt = { class: "text-[#1D1E1F]" }, qt = { key: 0, class: "absolute -bottom-5 left-0 text-red-500 text-xs" }, Ot = { class: "text-[#1D1E1F]" }, Wt = { class: "text-[#1D1E1F]" }, Kt = { class: "text-[#1D1E1F]" }, Gt = O({ __name: "forget-form", emits: ["login", "register"], setup(x, { expose: b, emit: u }) {
  const m = u, E = oe(), g = h(), l = h(), o = te({ username_type: "mobile", username: "", verification_code: "", password: "", confirm_password: "" }), e = h(false), v = h(true);
  ee(() => {
    H.on("language-change", F);
  }), se(() => {
    H.off("language-change", F);
  });
  const F = () => {
    g.value && g.value.clearValidate();
  }, $ = () => {
    o.username_type = "mobile", o.username = "", o.verification_code = "", o.password = "", o.confirm_password = "";
  }, k = async () => {
    let s = await g.value.validate();
    if (s) {
      if (e.value = true, await c(), !v.value)
        return S.warning(window.$t("login.account_no_exists")), e.value = false;
      if (s = await l.value.validateCode(), !s)
        return e.value = false;
      await E.resetPassword({ data: { mobile: o.username, new_password: o.password, confirm_password: o.confirm_password, verify_code: o.verification_code } }).finally(() => {
        e.value = false;
      }), S.success($t("action_update_success")), $(), L();
    }
  }, L = () => {
    m("login");
  }, z = () => {
    m("register");
  }, c = async () => {
    if (v.value = true, !await g.value.validateField("username"))
      return;
    const { exists: f = false } = await Ae.checkAccount({ data: { account: o.username } });
    return v.value = f, f;
  };
  return b({ reset: $ }), (s, f) => {
    const D = ae, I = J, P = ce, M = ve, _ = ue;
    return p(), C(_, { ref_key: "form_ref", ref: g, class: "relative max-w-[440px] w-full", model: o, "label-position": "top" }, { default: t(() => [d("h4", Mt, n(s.$t("login.reset_password")), 1), a(P, { prop: "username", rules: i(N)({ message: `login.${o.username_type}_placeholder`, validator: ["text", o.username_type] }) }, { label: t(() => [d("span", Tt, n(s.$t(o.username_type)), 1)]), default: t(() => [a(D, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: o.username, "onUpdate:modelValue": f[0] || (f[0] = (y) => o.username = y), size: "large", autocomplete: "forgot-username", name: "prevent_autofill_username", placeholder: s.$t(`login.${o.username_type}_placeholder`), clearable: "", onBlur: c }, null, 8, ["modelValue", "placeholder"]), v.value ? q("", true) : (p(), A("div", qt, [w(n(s.$t("login.account_no_exists")) + " ", 1), a(I, { type: "primary", link: "", size: "small", class: "!p-0 !bg-transparent -ml-1", onClick: z }, { default: t(() => [w(n(s.$t("action_register")), 1)]), _: 1 })]))]), _: 1 }, 8, ["rules"]), a(P, { class: "relative", prop: "verification_code", rules: i(N)({ message: "verification_code_placeholder" }) }, { label: t(() => [d("span", Ot, n(s.$t("verification_code")), 1)]), default: t(() => [a(M, { ref_key: "verification_code_input_ref", ref: l, account: o.username, disabled: !v.value, modelValue: o.verification_code, "onUpdate:modelValue": f[1] || (f[1] = (y) => o.verification_code = y) }, null, 8, ["account", "disabled", "modelValue"])]), _: 1 }, 8, ["rules"]), a(P, { class: "relative", prop: "password", rules: [...i(N)({ message: "login.new_password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: s.$t("login.password_length"), trigger: "blur" }] }, { label: t(() => [d("span", Wt, n(s.$t("login.new_password")), 1)]), default: t(() => [a(D, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: o.password, "onUpdate:modelValue": f[2] || (f[2] = (y) => o.password = y), size: "large", type: "password", "show-password": "", clearable: "", autocomplete: "new-password", name: "prevent_autofill_password", placeholder: s.$t("login.new_password_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(P, { class: "relative", prop: "confirm_password", rules: [...i(N)({ message: "login.confirm_password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: s.$t("login.password_length"), trigger: "blur" }, { validator: (y, W, R) => {
      if (W !== o.password)
        return R(new Error(s.$t("login.password_not_match")));
      R();
    }, trigger: "blur" }] }, { label: t(() => [d("span", Kt, n(s.$t("login.confirm_password")), 1)]), default: t(() => [a(D, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: o.confirm_password, "onUpdate:modelValue": f[3] || (f[3] = (y) => o.confirm_password = y), size: "large", type: "password", "show-password": "", clearable: "", autocomplete: "new-password", name: "prevent_autofill_password", placeholder: s.$t("login.confirm_password_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(I, { type: "primary", round: "", class: "w-full mt-6 !h-10", disabled: !o.username || !o.password || !o.verification_code || !o.confirm_password, loading: e.value, onClick: ie(k, ["stop"]) }, { default: t(() => [w(n(s.$t("login.update_password")), 1)]), _: 1 }, 8, ["disabled", "loading"]), a(I, { type: "primary", text: "", class: "!p-0 mt-4 !mx-auto relative left-1/2 -translate-x-1/2 !bg-transparent", onClick: L }, { default: t(() => [w(n(s.$t("login.back_to_login")), 1)]), _: 1 })]), _: 1 }, 8, ["model"]);
  };
} });
const Ht = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" };
const Yt = { class: "text-[#1D1E1F]" }, Jt = { class: "text-[#1D1E1F]" }, Zt = { key: 2, class: "h-[424px] p-10 box-border bg-[#EFF9FF] rounded-lg flex flex-col items-center justify-center text-center" }, Qt = { class: "flex items-center justify-center gap-2" }, Xt = { class: "text-[#1D1E1F] text-2xl font-bold" }, es = { class: "text-[#666] text-sm mt-4" }, ts = O({ __name: "apply-form-v2", emits: ["login"], setup(x, { expose: b, emit: u }) {
  const m = u, E = oe(), g = re(), l = h(), o = h(0), e = te({ website_name: "", contact_name: "" }), v = h(false), F = h(false);
  ee(async () => {
    const { access_token: c } = E.info;
    if (c) {
      F.value = true;
      const { list: s = [] } = await g.loadListData({ data: { status: 0 } }).finally(() => {
        F.value = false;
      });
      s.length > 0 && (o.value = 1);
    }
    H.on("language-change", $);
  }), se(() => {
    H.off("language-change", $);
  });
  const $ = () => {
    l.value && l.value.clearValidate();
  }, k = () => {
    e.website_name = "", e.contact_name = "";
  }, L = async () => {
    if (await l.value.validate()) {
      switch (o.value) {
        case 0:
          v.value = true, await g.apply({ data: { contact_name: e.contact_name, enterprise_name: e.website_name, phone: E.info.username, email: "" } }).then(() => {
            tt(() => {
              m("login");
            });
          }).finally(() => {
            v.value = false;
          }), S.success($t("apply.create_success"));
          break;
      }
      k();
    }
  }, z = () => {
    m("login");
  };
  return b({ reset: k }), (c, s) => {
    const f = ht, D = wt, I = ae, P = ce, M = J, _ = X, y = ue, W = Se;
    return Ce((p(), C(y, { ref_key: "form_ref", ref: l, class: "relative max-w-[440px] w-full", model: e, "label-position": "top" }, { default: t(() => [d("h4", Ht, n(c.$t("apply.create_site")), 1), q("", true), o.value === 0 ? (p(), A(Y, { key: 1 }, [a(P, { class: "is-required", prop: "website_name", rules: i(N)({ message: "login.website_name_placeholder" }) }, { label: t(() => [d("span", Yt, n(c.$t("login.website_name")), 1)]), default: t(() => [a(I, { modelValue: e.website_name, "onUpdate:modelValue": s[0] || (s[0] = (R) => e.website_name = R), style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, size: "large", placeholder: c.$t("login.website_name_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(P, { class: "is-required", prop: "contact_name", rules: i(N)({ message: "login.contact_name_placeholder" }) }, { label: t(() => [d("span", Jt, n(c.$t("login.contact_name")), 1)]), default: t(() => [a(I, { modelValue: e.contact_name, "onUpdate:modelValue": s[1] || (s[1] = (R) => e.contact_name = R), style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, size: "large", placeholder: c.$t("login.contact_name_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(M, { type: "primary", round: "", class: "w-full mt-6 !h-10", loading: v.value, disabled: !e.website_name || !e.contact_name, onClick: ie(L, ["stop"]) }, { default: t(() => [w(n(c.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading", "disabled"])], 64)) : o.value === 1 ? (p(), A("div", Zt, [d("div", Qt, [a(_, { color: "#4CBF65", size: "28" }, { default: t(() => [a(i(et))]), _: 1 }), d("span", Xt, n(c.$t("apply.waiting_audit")), 1)]), d("div", es, n(c.$t("apply_success_desc")), 1), s[2] || (s[2] = d("img", { class: "w-[148px] object-contain mt-14", src: "//chat.53ai.com/images/upgrade-qrcode.png" }, null, -1))])) : (p(), A(Y, { key: 3 }, [], 64)), a(M, { type: "primary", text: "", class: "!p-0 mt-4 !mx-auto relative left-1/2 -translate-x-1/2 !bg-transparent", onClick: z }, { default: t(() => [w(n(c.$t("login.back_to_login")), 1)]), _: 1 })]), _: 1 }, 8, ["model"])), [[W, F.value]]);
  };
} });
const ss = ge(ts, [["__scopeId", "data-v-d3f6d4ce"]]), as = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" }, os = { class: "text-[#1D1E1F]" }, ls = { key: 0, class: "absolute -bottom-5 left-0 text-red-500 text-xs" }, ns = { class: "text-[#1D1E1F]" }, rs = { class: "text-[#1D1E1F]" }, is = { class: "w-full flex-center mt-4 text-sm text-[#9A9A9A]" }, cs = O({ __name: "register-form", emits: ["login"], setup(x, { expose: b, emit: u }) {
  const m = u, E = oe(), g = re(), l = h(), o = h(), e = te({ username: "", verification_code: "", password: "" }), v = h(false), F = h(false);
  ee(() => {
    E.info, H.on("language-change", $);
  }), se(() => {
    H.off("language-change", $);
  });
  const $ = () => {
    l.value && l.value.clearValidate();
  }, k = () => {
    e.username = "", e.verification_code = "", e.password = "";
  }, L = async () => {
    let s = await l.value.validate();
    if (!s)
      return;
    if (v.value = true, await c(), F.value)
      return S.warning(window.$t("login.account_exists")), v.value = false;
    if (s = await o.value.validateCode(), !s)
      return v.value = false;
    await E.login({ data: { username: e.username, password: e.password, verify_code: e.verification_code }, hideError: false }).catch((D) => (v.value = false, Promise.reject(D)));
    const { list: f = [] } = await g.loadListData({ data: { status: 0 } }).catch((D) => (v.value = false, Promise.reject(D)));
    if (v.value = false, f.length > 0)
      return S.warning($t("login.apply_open_repetition"));
    S.success(window.$t("action_login_success")), k(), z();
  }, z = () => {
    m("login");
  }, c = async () => {
    if (F.value = false, !await l.value.validateField("username"))
      return;
    const { exists: f = false } = await Ae.checkAccount({ data: { account: e.username } });
    return F.value = f, f;
  };
  return b({ reset: k }), (s, f) => {
    const D = ae, I = J, P = ce, M = ve, _ = ue;
    return p(), C(_, { ref_key: "form_ref", ref: l, class: "relative max-w-[440px] w-full", model: e, "label-position": "top" }, { default: t(() => [d("h4", as, n(s.$t("account_register")), 1), a(P, { prop: "username", class: "relative", rules: i(N)({ message: "login.mobile_placeholder", validator: ["text", "mobile"] }) }, { label: t(() => [d("span", os, n(s.$t("account")), 1)]), default: t(() => [a(D, { modelValue: e.username, "onUpdate:modelValue": f[0] || (f[0] = (y) => e.username = y), style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, size: "large", autocomplete: "new-username", name: "prevent_autofill_username", placeholder: s.$t("login.mobile_placeholder"), clearable: "", onBlur: c }, null, 8, ["modelValue", "placeholder"]), F.value ? (p(), A("div", ls, [w(n(s.$t("login.account_exists")) + " ", 1), a(I, { type: "primary", link: "", size: "small", class: "!p-0 !bg-transparent -ml-1", onClick: z }, { default: t(() => [w(n(s.$t("action_login")), 1)]), _: 1 })])) : q("", true)]), _: 1 }, 8, ["rules"]), a(P, { class: "relative", prop: "verification_code", rules: i(N)({ message: "verification_code_placeholder" }) }, { label: t(() => [d("span", ns, n(s.$t("verification_code")), 1)]), default: t(() => [a(M, { ref_key: "verification_code_input_ref", ref: o, modelValue: e.verification_code, "onUpdate:modelValue": f[1] || (f[1] = (y) => e.verification_code = y), account: e.username, disabled: F.value }, null, 8, ["modelValue", "account", "disabled"])]), _: 1 }, 8, ["rules"]), a(P, { class: "relative", prop: "password", rules: [...i(N)({ message: "login.password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: s.$t("login.password_length"), trigger: "blur" }] }, { label: t(() => [d("span", rs, n(s.$t("password")), 1)]), default: t(() => [a(D, { modelValue: e.password, "onUpdate:modelValue": f[2] || (f[2] = (y) => e.password = y), style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, size: "large", type: "password", "show-password": "", clearable: "", autocomplete: "new-password", name: "prevent_autofill_password", placeholder: s.$t("login.password_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(I, { type: "primary", round: "", loading: v.value, size: "large", class: "w-full mt-6 !h-10", disabled: !e.username || !e.password || !e.verification_code, onClick: ie(L, ["stop"]) }, { default: t(() => [w(n(s.$t("action_register")), 1)]), _: 1 }, 8, ["loading", "disabled"]), d("div", is, [w(n(s.$t("login.has_account")) + " ", 1), a(I, { type: "primary", text: "", class: "!p-0 !bg-transparent", onClick: z }, { default: t(() => [w(n(s.$t("login.direct_login")), 1)]), _: 1 })])]), _: 1 }, 8, ["model"]);
  };
} });
const us = ge(cs, [["__scopeId", "data-v-286492a7"]]), ds = ["src"], ps = ["src"], _s = ["src"], ms = { class: "absolute top-6 right-6 flex gap-2 text-[#777] text-base" }, Cs = O({ __name: "index", setup(x) {
  const b = oe();
  re();
  const u = h("login"), m = () => {
    window.open("https://www.53ai.com", "_blank");
  }, E = async () => {
    b.info, u.value = "apply";
  }, g = () => {
    u.value = "forget";
  }, l = () => {
    u.value = "login";
  }, o = () => {
    u.value = "register";
  };
  return (e, v) => {
    const F = at, $ = lt, k = Ve, L = J, z = ot, c = st;
    return p(), C(c, { class: "w-screen h-screen bg-white" }, { default: t(() => [a(F, { width: "55%", class: "relative bg-[url('/images/login/background.png')] bg-cover bg-center bg-no-repeat max-md:hidden" }, { default: t(() => [d("img", { class: "w-[24%] object-contain absolute top-8 left-10", src: e.$getRealPath({ url: "/images/logo_2.png" }), alt: "" }, null, 8, ds), d("img", { class: "w-[48%] object-contain absolute top-[25%] left-1/2 -translate-x-1/2", src: e.$getRealPath({ url: "/images/login/title.png" }), alt: "" }, null, 8, ps), d("img", { class: "w-[70%] object-contain absolute top-[32%] left-1/2 -translate-x-1/2", src: e.$getRealPath({ url: "/images/login/demo.png" }), alt: "" }, null, 8, _s)]), _: 1 }), a(z, { class: "relative flex flex-col justify-center items-center pt-10 px-6 box-border overflow-auto" }, { default: t(() => [d("div", ms, [a($), a(L, { class: "!p-0 !border-none !outline-none !bg-transparent !leading-1 !h-auto hover:opacity-70", type: "default", text: "", onClick: m }, { default: t(() => [a(k, { class: "mr-1", name: "home_v2", width: "16" }), w(" " + n(e.$t("official_website")), 1)]), _: 1 })]), u.value === "login" ? (p(), C(Rt, { key: 0, onForget: g, onRegister: o, onApply: E })) : u.value === "apply" ? (p(), C(ss, { key: 1, onLogin: l })) : u.value === "forget" ? (p(), C(Gt, { key: 2, onLogin: l, onRegister: o })) : u.value === "register" ? (p(), C(us, { key: 3, onLogin: l })) : q("", true)]), _: 1 })]), _: 1 });
  };
} });
export {
  Cs as default
};
