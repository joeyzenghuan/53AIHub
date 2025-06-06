import { E as b, e as K, c as Y, a as Ve, d as oe, S as Ce, f as ae, v as ve, P as De, b as we, a4 as Ae, a5 as Ie, l as Le, m as Be, n as ze } from "./element-plus-c72880c6.js";
import { s as ce, L as ge, t as de, g as je, f as _e, b as Z, a as le, e as T, _ as he, l as j, M as Ue } from "./index-76ebd052.js";
import { _ as Se } from "./LanguageDropdown.vue_vue_type_script_setup_true_lang-80e61a24.js";
import "./agent-6508b772.js";
import { d as W, e as m, j as ue, D as ee, o as u, J as V, K as t, M as o, a as r, I as pe, P as s, Q as Pe, V as se, i as ne, c as z, S as be, H, ac as ye, a2 as _, O as re, u as D, ab as Me, G as X } from "./@vue-3b855f7b.js";
import { l as Re, e as qe, Q as Oe } from "./@element-plus-0cfad8bb.js";
import { S as Te } from "./service-dialog-20bd8bbd.js";
import { b as Ne } from "./vue-router-2f60a71a.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
import "./pinia-6f4b1ece.js";
import "./vue-demi-71ba0ef2.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
const He = { sendcode(F) {
  return ce.post(`${ge}/v3/users/sendcode`, F, { code_sign: true, baseURL: "" }).catch(de);
}, verifycode(F) {
  return ce.post(`${ge}/v4/xbot/checkverificationcode`, F, { ibos_sign: true, baseURL: "" }).then((y) => y.code !== 0 ? Promise.reject({ response: { data: y } }) : y).catch(de);
} }, ie = /* @__PURE__ */ new Map(), $e = { async checkAccount({ data: F = {} } = {}) {
  if (F = { account: "", ...F }, ie.has(F.account))
    return ie.get(F.account);
  const { data: y = {} } = await ce.post("/api/saas/auth/check_account", F).catch(de);
  return ie.set(F.account, y), y;
} }, Ke = W({ __name: "index", props: { account: { default: "" }, account_type: { default: "" }, modelValue: { default: "" }, bgColor: { default: "#F1F2F3" }, height: { default: "44px" }, size: { default: "large" }, clearable: { type: Boolean, default: true }, disabled: { type: Boolean, default: false }, countdown: { default: 60 }, maxlength: { default: 4 }, placeholder: { default: "verification_code_placeholder" } }, emits: ["update:modelValue"], setup(F, { expose: y, emit: $ }) {
  const f = F, A = $, g = m(f.modelValue), c = m(0), l = ue(() => f.disabled || !f.account || c.value > 0), e = ue(() => f.account_type || /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/.test(f.account) ? "mobile" : "email");
  ee(() => {
    v && clearInterval(v);
  });
  const p = (i) => {
    A("update:modelValue", i);
  };
  function h(i) {
    let a = i.replace(/\D/g, "");
    return a.length > 11 && (a = a.slice(-11)), a.length !== 11 || !a.startsWith("1") ? false : /^1(3[5-9]|34[0-8]|440|4(7|8[0-9])|5[0-27-9]|7[28]|8[2-47-8]|9[58]|20)/.test(a);
  }
  let v = null;
  const I = async () => {
    if (!f.account) {
      b.warning(window.$t(`login.${e.value}_placeholder`));
      return;
    }
    if (e.value !== "mobile") {
      b.warning(window.$t("form_mobile_validator"));
      return;
    }
    await je.qyy.send_code({ data: { mobile: f.account, source: h(f.account) ? "companyibos" : "agenthub" } }), c.value = f.countdown, b.success(window.$t("action_send_success")), v = setInterval(() => {
      c.value--, c.value < 0 && clearInterval(v);
    }, 1e3);
  };
  return y({ reset: () => {
    v && clearInterval(v), g.value = "", c.value = 0;
  }, validateCode: async () => He.verifycode({ mobile: f.account, verifycode: g.value, type: "1" }).catch(() => Promise.resolve(false)) }), (i, a) => {
    const d = K, k = Y;
    return u(), V(k, { modelValue: g.value, "onUpdate:modelValue": a[0] || (a[0] = (C) => g.value = C), style: Pe({ "--el-input-bg-color": i.bgColor, "--el-input-border-color": "transparent", "--el-input-height": i.height }), clearable: i.clearable, size: i.size, disabled: i.disabled, maxlength: i.maxlength, placeholder: i.$t(i.placeholder), onChange: p }, { append: t(() => [o(d, { class: "!bg-transparent", type: "primary", text: "", disabled: l.value, onClick: I }, { default: t(() => [r("span", { class: pe([l.value ? "cursor-not-allowed" : "cursor-pointer hover:opacity-70 text-[#3664EF]"]) }, s(c.value > 0 ? `${i.$t("action_send_success")}(${c.value}s)` : i.$t("get_verification_code")), 3)]), _: 1 }, 8, ["disabled"])]), _: 1 }, 8, ["modelValue", "style", "clearable", "size", "disabled", "maxlength", "placeholder"]);
  };
} });
const me = _e(Ke, [["__scopeId", "data-v-dcef9465"]]), We = { key: 0 }, Ge = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-8" }, Qe = { class: "w-[400px] max-h-[440px] pr-1 box-border overflow-auto flex flex-col gap-4" }, Je = ["onClick"], Xe = ["src"], Ye = { class: "flex-1" }, Ze = { class: "text-base text-[#182B50]" }, et = { class: "text-sm text-[#9A9A9A] mt-2" }, tt = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" }, ot = { class: "text-[#1D1E1F]" }, at = { class: "text-[#1D1E1F]" }, lt = { class: "text-[#1D1E1F]" }, st = { class: "text-[#1D1E1F]" }, nt = { class: "absolute right-0 -bottom-9" }, rt = { class: "text-[#9A9A9A]" }, it = { class: "flex flex-col gap-4" }, ct = ["innerHTML"], dt = W({ __name: "login-form", emits: ["forget", "register", "apply", "login-success"], setup(F, { expose: y, emit: $ }) {
  const f = $;
  Ne();
  const A = Z(), g = le(), c = m(), l = m();
  m(), m();
  const e = se({ type: "password", username: "", password: "", verify_code: "" });
  m([]);
  const p = m(false), h = m([]), v = m(false), I = m(false), U = ue(() => {
    const { access_token: n } = A.info;
    return !!n;
  });
  ne(() => {
    if (U.value)
      return i();
    const n = c.value.$el.querySelector(".agree-hook");
    n.onclick = O;
    const E = c.value.$el.querySelector(".policy-hook");
    E.onclick = xe, T.on("language-change", B);
  }), ee(() => {
    T.off("language-change", B);
  });
  const B = () => {
    c.value && c.value.clearValidate();
  }, i = async () => {
    v.value = true;
    let { list: n = [] } = await g.loadListData({ data: { status: -1 } }).finally(() => {
      v.value = false;
    });
    h.value = n;
  }, a = async ({ data: n = {} } = {}) => {
    if (n.is_process)
      return b.warning(window.$t("apply.process"));
    if (n.is_reject)
      return b.warning(n.reject_reason || window.$t("apply.reject"));
    if (n.is_expired)
      return b.warning(window.$t("apply.expired"));
    if (!n.is_loading) {
      if (n.is_loading = true, !n.eid) {
        const E = n.apply_id;
        let M = 0;
        const Q = async () => {
          let { list: S = [] } = await g.loadListData({ data: { status: -1 } });
          M++;
          const R = S.find((J) => J.apply_id == E);
          return !R.eid && M < 5 && (await Ue(1), await Q()), n.eid = R.eid || 0, R.eid;
        };
        if (await Q(), n.is_loading = false, !n.eid)
          return b.warning("Invalid eid");
      }
      await g.loadDetailData({ data: { eid: n.eid } }), window.parent && window.parent.postMessage({ action: "saas-login-success", eid: n.eid, access_token: A.info.access_token }, "*");
    }
  }, d = () => {
    f("apply");
  }, k = () => {
    e.type = "password", e.username = "", e.password = "", e.verify_code = "";
  }, C = async () => {
    let n = await c.value.validate();
    if (!n)
      return;
    if (p.value = true, e.type === "mobile" && (n = await l.value.validateCode(), !n))
      return p.value = false;
    (await A.login({ type: e.type, data: e, hideError: true }).catch((M) => (b.warning(window.$t(M.origin_message === "unauthorized" ? "response_message.user_not_found" : "response_message.username_or_password_is_incorrect")), Promise.reject(M))).finally(() => {
      p.value = false;
    })).is_new_user && Ve.confirm(window.$t("login.new_user_tip", { password: `${e.verify_code}${e.verify_code}` }), window.$t("tip"), { confirmButtonText: window.$t("login.I_remember"), cancelButtonText: window.$t("login.modify_password") }).then(() => {
    }).catch(() => {
      L();
    }), i(), b.success(window.$t("action_login_success")), k();
  }, L = () => {
    f("forget");
  }, q = () => {
    f("register");
  }, N = () => {
    e.username = "", e.password = "", e.verify_code = "", e.type = "password";
  }, x = () => {
    e.username = "", e.password = "", e.verify_code = "", e.type = "mobile";
  }, G = () => {
    b.warning(window.$t("feature_coming_soon"));
  }, P = () => {
    b.warning(window.$t("feature_coming_soon"));
  }, O = () => {
    b.warning(window.$t("feature_coming_soon"));
  }, xe = () => {
    b.warning(window.$t("feature_coming_soon"));
  };
  return y({ reset: k }), (n, E) => {
    const M = De, Q = we, S = K, R = he, J = Y, te = oe, Fe = me, fe = Ce, ke = ae, Ee = ve;
    return u(), z(H, null, [U.value ? (u(), z("div", We, [r("h4", Ge, s(n.$t("login.select_enterprise")), 1), be((u(), z("ul", Qe, [(u(true), z(H, null, ye(h.value, (w) => (u(), z("li", { key: w.apply_id, class: "flex items-center border rounded-sm p-4 cursor-pointer hover:border-[#3664EF]", onClick: (qt) => a({ data: w }) }, [r("img", { class: "flex-none mr-4 w-[60px] h-[60px] object-cover rounded", src: w.logo }, null, 8, Xe), r("div", Ye, [r("div", Ze, s(w.name || "- -"), 1), r("div", et, s(w.domain || "- -"), 1)]), w.is_process ? (u(), V(M, { key: 0, type: "warning", effect: "light" }, { default: t(() => [_(s(n.$t("apply.process")), 1)]), _: 1 })) : w.is_expired ? (u(), V(M, { key: 1, type: "info", effect: "light" }, { default: t(() => [_(s(n.$t("apply.expired")), 1)]), _: 1 })) : w.is_reject ? (u(), V(M, { key: 2, type: "danger", effect: "light" }, { default: t(() => [_(s(n.$t("apply.reject")), 1)]), _: 1 })) : w.is_loading ? (u(), V(Q, { key: 3, size: "18", color: "#999", class: "animate-spin" }, { default: t(() => [o(D(Re))]), _: 1 })) : (u(), V(Q, { key: 4, size: "18" }, { default: t(() => [o(D(qe))]), _: 1 }))], 8, Je))), 128)), r("li", { class: "w-full min-h-[88px] flex-center border border-dashed border-[#E7EEFF] bg-[#F4F7FE] text-[#3664EF] rounded-sm cursor-pointer hover:border-[#3664EF]", onClick: d }, " + " + s(n.$t("apply.create_site")), 1)])), [[Ee, v.value]]), o(S, { type: "primary", text: "", class: "relative mt-4 !bg-transparent left-1/2 -translate-x-1/2", onClick: re(i, ["stop"]) }, { default: t(() => [_(s(n.$t("apply.refresh_list")), 1)]), _: 1 }), r("div", { class: "flex items-center text-sm text-[#5B6A91] cursor-pointer w-max mx-auto mt-2", onClick: E[0] || (E[0] = (w) => I.value = true) }, [o(R, { name: "service", width: "14px", height: "14px", class: "mr-2" }), _(" " + s(n.$t("apply.contact_customer_service")), 1)])])) : (u(), V(ke, { key: 1, ref_key: "form_ref", ref: c, class: "relative max-w-[440px] w-full", model: e, "label-position": "top" }, { default: t(() => [r("h4", tt, s(n.$t(`login.${e.type}_login`)), 1), e.type === "mobile" ? (u(), z(H, { key: 0 }, [o(te, { prop: "username", rules: D(j)({ message: "login.mobile_placeholder", validator: ["text", "mobile"] }) }, { label: t(() => [r("span", ot, s(n.$t("mobile")), 1)]), default: t(() => [o(J, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.username, "onUpdate:modelValue": E[1] || (E[1] = (w) => e.username = w), autocomplete: "new-username", name: "prevent_autofill_username", size: "large", placeholder: n.$t("login.mobile_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), o(te, { class: "relative", prop: "verify_code", rules: D(j)({ message: "verification_code_placeholder" }) }, { label: t(() => [r("span", at, s(n.$t("verification_code")), 1)]), default: t(() => [o(Fe, { ref_key: "verify_code_input_ref", ref: l, account: e.username, modelValue: e.verify_code, "onUpdate:modelValue": E[2] || (E[2] = (w) => e.verify_code = w) }, null, 8, ["account", "modelValue"])]), _: 1 }, 8, ["rules"]), o(S, { type: "primary", round: "", class: "w-full mt-8 !h-10", disabled: !e.username || !e.verify_code, loading: p.value, onClick: C }, { default: t(() => [_(s(n.$t("action_login")), 1)]), _: 1 }, 8, ["disabled", "loading"])], 64)) : (u(), z(H, { key: 1 }, [o(te, { prop: "username", rules: D(j)({ message: "login.mobile_placeholder", validator: ["text", "mobile"] }) }, { label: t(() => [r("span", lt, s(n.$t("account")), 1)]), default: t(() => [o(J, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.username, "onUpdate:modelValue": E[3] || (E[3] = (w) => e.username = w), size: "large", placeholder: n.$t("login.mobile_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), o(te, { class: "relative", prop: "password", rules: D(j)({ message: "login.password_placeholder", validator: ["text", "password"] }) }, { label: t(() => [r("span", st, s(n.$t("password")), 1)]), default: t(() => [o(J, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.password, "onUpdate:modelValue": E[4] || (E[4] = (w) => e.password = w), size: "large", type: "password", "show-password": "", clearable: "", placeholder: n.$t("login.password_placeholder"), onKeyup: Me(C, ["enter"]) }, null, 8, ["modelValue", "placeholder"]), r("div", nt, [o(S, { type: "text", class: "bg-transparent text-sm", onClick: q }, { default: t(() => [_(s(n.$t("user_register")), 1)]), _: 1 }), o(fe, { direction: "vertical" }), o(S, { type: "text", class: "bg-transparent text-sm", onClick: L }, { default: t(() => [_(s(n.$t("login.forget_password")), 1)]), _: 1 })])]), _: 1 }, 8, ["rules"]), o(S, { type: "primary", round: "", class: "w-full mt-8 !h-10", disabled: !e.username || !e.password, loading: p.value, onClick: C }, { default: t(() => [_(s(n.$t("action_login")), 1)]), _: 1 }, 8, ["disabled", "loading"])], 64)), o(fe, { class: "!w-[80%] !mx-auto" }, { default: t(() => [r("span", rt, s(n.$t("or")), 1)]), _: 1 }), r("div", it, [e.type !== "password" ? (u(), V(S, { key: 0, type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: N }, { default: t(() => [o(R, { class: "mr-2", name: "password", width: "28" }), _(" " + s(n.$t("login.password_login_v2")), 1)]), _: 1 })) : X("", true), e.type !== "mobile" ? (u(), V(S, { key: 1, type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: x }, { default: t(() => [o(R, { class: "mr-2", name: "mobile", width: "28" }), _(" " + s(n.$t("login.mobile_login_v2")), 1)]), _: 1 })) : X("", true), o(S, { type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: G }, { default: t(() => [o(R, { class: "mr-2", name: "wechat", width: "28" }), _(" " + s(n.$t("login.wechat_login_v2")), 1)]), _: 1 }), o(S, { type: "default", round: "", class: "w-full !h-10 !ml-0 font-medium", onClick: P }, { default: t(() => [o(R, { class: "mr-2", name: "google", width: "28" }), _(" " + s(n.$t("login.google_login_v2")), 1)]), _: 1 }), r("div", { class: "text-xs text-[#9A9A9A] text-center", innerHTML: n.$t("login.agree_and_policy", { agree: `<span class='agree-hook cursor-pointer text-[#4F5052] text-xs mx-1 -mt-0.5 underline underline-offset-4'>${n.$t("login.agree")}</span>`, policy: `<span class='policy-hook cursor-pointer text-[#4F5052] text-xs mx-1 -mt-0.5 underline underline-offset-4'>${n.$t("login.policy")}</span>` }) }, null, 8, ct)])]), _: 1 }, 8, ["model"])), o(Te, { visible: I.value, "onUpdate:visible": E[5] || (E[5] = (w) => I.value = w) }, null, 8, ["visible"])], 64);
  };
} }), ut = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" }, pt = { class: "text-[#1D1E1F]" }, _t = { key: 0, class: "absolute -bottom-5 left-0 text-red-500 text-xs" }, mt = { class: "text-[#1D1E1F]" }, ft = { class: "text-[#1D1E1F]" }, gt = { class: "text-[#1D1E1F]" }, vt = W({ __name: "forget-form", emits: ["login", "register"], setup(F, { expose: y, emit: $ }) {
  const f = $, A = Z(), g = m(), c = m(), l = se({ username_type: "mobile", username: "", verification_code: "", password: "", confirm_password: "" }), e = m(false), p = m(true);
  ne(() => {
    T.on("language-change", h);
  }), ee(() => {
    T.off("language-change", h);
  });
  const h = () => {
    g.value && g.value.clearValidate();
  }, v = () => {
    l.username_type = "mobile", l.username = "", l.verification_code = "", l.password = "", l.confirm_password = "";
  }, I = async () => {
    let a = await g.value.validate();
    if (a) {
      if (e.value = true, await i(), !p.value)
        return b.warning(window.$t("login.account_no_exists")), e.value = false;
      if (a = await c.value.validateCode(), !a)
        return e.value = false;
      await A.resetPassword({ data: { mobile: l.username, new_password: l.password, confirm_password: l.confirm_password, verify_code: l.verification_code } }).finally(() => {
        e.value = false;
      }), b.success($t("action_update_success")), v(), U();
    }
  }, U = () => {
    f("login");
  }, B = () => {
    f("register");
  }, i = async () => {
    if (p.value = true, !await g.value.validateField("username"))
      return;
    const { exists: d = false } = await $e.checkAccount({ data: { account: l.username } });
    return p.value = d, d;
  };
  return y({ reset: v }), (a, d) => {
    const k = Y, C = K, L = oe, q = me, N = ae;
    return u(), V(N, { ref_key: "form_ref", ref: g, class: "relative max-w-[440px] w-full", model: l, "label-position": "top" }, { default: t(() => [r("h4", ut, s(a.$t("login.reset_password")), 1), o(L, { prop: "username", rules: D(j)({ message: `login.${l.username_type}_placeholder`, validator: ["text", l.username_type] }) }, { label: t(() => [r("span", pt, s(a.$t(l.username_type)), 1)]), default: t(() => [o(k, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: l.username, "onUpdate:modelValue": d[0] || (d[0] = (x) => l.username = x), size: "large", autocomplete: "forgot-username", name: "prevent_autofill_username", placeholder: a.$t(`login.${l.username_type}_placeholder`), clearable: "", onBlur: i }, null, 8, ["modelValue", "placeholder"]), p.value ? X("", true) : (u(), z("div", _t, [_(s(a.$t("login.account_no_exists")) + " ", 1), o(C, { type: "primary", link: "", size: "small", class: "!p-0 !bg-transparent -ml-1", onClick: B }, { default: t(() => [_(s(a.$t("action_register")), 1)]), _: 1 })]))]), _: 1 }, 8, ["rules"]), o(L, { class: "relative", prop: "verification_code", rules: D(j)({ message: "verification_code_placeholder" }) }, { label: t(() => [r("span", mt, s(a.$t("verification_code")), 1)]), default: t(() => [o(q, { ref_key: "verification_code_input_ref", ref: c, account: l.username, disabled: !p.value, modelValue: l.verification_code, "onUpdate:modelValue": d[1] || (d[1] = (x) => l.verification_code = x) }, null, 8, ["account", "disabled", "modelValue"])]), _: 1 }, 8, ["rules"]), o(L, { class: "relative", prop: "password", rules: [...D(j)({ message: "login.new_password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: a.$t("login.password_length"), trigger: "blur" }] }, { label: t(() => [r("span", ft, s(a.$t("login.new_password")), 1)]), default: t(() => [o(k, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: l.password, "onUpdate:modelValue": d[2] || (d[2] = (x) => l.password = x), size: "large", type: "password", "show-password": "", clearable: "", autocomplete: "new-password", name: "prevent_autofill_password", placeholder: a.$t("login.new_password_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), o(L, { class: "relative", prop: "confirm_password", rules: [...D(j)({ message: "login.confirm_password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: a.$t("login.password_length"), trigger: "blur" }, { validator: (x, G, P) => {
      if (G !== l.password)
        return P(new Error(a.$t("login.password_not_match")));
      P();
    }, trigger: "blur" }] }, { label: t(() => [r("span", gt, s(a.$t("login.confirm_password")), 1)]), default: t(() => [o(k, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: l.confirm_password, "onUpdate:modelValue": d[3] || (d[3] = (x) => l.confirm_password = x), size: "large", type: "password", "show-password": "", clearable: "", autocomplete: "new-password", name: "prevent_autofill_password", placeholder: a.$t("login.confirm_password_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), o(C, { type: "primary", round: "", class: "w-full mt-6 !h-10", disabled: !l.username || !l.password || !l.verification_code || !l.confirm_password, loading: e.value, onClick: re(I, ["stop"]) }, { default: t(() => [_(s(a.$t("login.update_password")), 1)]), _: 1 }, 8, ["disabled", "loading"]), o(C, { type: "primary", text: "", class: "!p-0 mt-4 !mx-auto relative left-1/2 -translate-x-1/2 !bg-transparent", onClick: U }, { default: t(() => [_(s(a.$t("login.back_to_login")), 1)]), _: 1 })]), _: 1 }, 8, ["model"]);
  };
} }), wt = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" }, ht = { class: "w-9 h-9 bg-[#F2F3F3] rounded-full flex items-center justify-center" }, bt = { class: "text-[#1D1E1F]" }, yt = { class: "text-[#1D1E1F]" }, xt = { key: 1, class: "h-[424px] p-10 box-border bg-[#EFF9FF] rounded-lg flex flex-col items-center justify-center text-center" }, Ft = { class: "flex items-center justify-center gap-2" }, kt = { class: "text-[#1D1E1F] text-2xl font-bold" }, Et = { class: "text-[#666] text-sm mt-4" }, Vt = W({ __name: "apply-form-v2", emits: ["login"], setup(F, { expose: y, emit: $ }) {
  const f = $, A = Z(), g = le(), c = m(), l = m(0), e = se({ website_name: "", contact_name: "" }), p = m(false), h = m(false);
  ne(async () => {
    const { access_token: i } = A.info;
    if (i) {
      h.value = true;
      const { list: a = [] } = await g.loadListData({ data: { status: 0 } }).finally(() => {
        h.value = false;
      });
      a.length > 0 && (l.value = 1);
    }
    T.on("language-change", v);
  }), ee(() => {
    T.off("language-change", v);
  });
  const v = () => {
    c.value && c.value.clearValidate();
  }, I = () => {
    e.website_name = "", e.contact_name = "";
  }, U = async () => {
    if (await c.value.validate()) {
      switch (l.value) {
        case 0:
          p.value = true, await g.apply({ data: { contact_name: e.contact_name, enterprise_name: e.website_name, phone: A.info.username, email: "" } }).finally(() => {
            p.value = false;
          }), l.value++, b.success($t("login.application_complete"));
          break;
      }
      I();
    }
  }, B = () => {
    f("login");
  };
  return y({ reset: I }), (i, a) => {
    const d = Ie, k = Ae, C = Y, L = oe, q = K, N = we, x = ae, G = ve;
    return be((u(), V(x, { ref_key: "form_ref", ref: c, class: "relative max-w-[440px] w-full", model: e, "label-position": "top" }, { default: t(() => [r("h4", wt, s(i.$t("apply.create_site")), 1), o(k, { class: "mb-8", active: l.value, "align-center": "" }, { default: t(() => [(u(), z(H, null, ye(["module.website_info", "apply.waiting_audit", "apply.create_success"], (P, O) => o(d, { key: O }, { icon: t(() => [r("div", ht, [r("div", { class: pe(["w-7 h-7 rounded-full text-white text-sm flex items-center justify-center", [O < l.value ? "bg-[#82A2F7]" : l.value === O ? "bg-[#3664F0]" : "bg-[#CFD1D6]"]]) }, s(O + 1), 3)])]), title: t(() => [r("span", { class: pe([O < l.value ? "text-[#B3C7FA]" : l.value === O ? "text-[#3664EF]" : "text-[#9A9A9A]"]) }, s(i.$t(P)), 3)]), _: 2 }, 1024)), 64))]), _: 1 }, 8, ["active"]), l.value === 0 ? (u(), z(H, { key: 0 }, [o(L, { class: "is-required", prop: "website_name", rules: D(j)({ message: "login.website_name_placeholder" }) }, { label: t(() => [r("span", bt, s(i.$t("login.website_name")), 1)]), default: t(() => [o(C, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.website_name, "onUpdate:modelValue": a[0] || (a[0] = (P) => e.website_name = P), size: "large", placeholder: i.$t("login.website_name_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), o(L, { class: "is-required", prop: "contact_name", rules: D(j)({ message: "login.contact_name_placeholder" }) }, { label: t(() => [r("span", yt, s(i.$t("login.contact_name")), 1)]), default: t(() => [o(C, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.contact_name, "onUpdate:modelValue": a[1] || (a[1] = (P) => e.contact_name = P), size: "large", placeholder: i.$t("login.contact_name_placeholder"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), o(q, { type: "primary", round: "", class: "w-full mt-6 !h-10", loading: p.value, disabled: !e.website_name || !e.contact_name, onClick: re(U, ["stop"]) }, { default: t(() => [_(s(i.$t("action_next_step")), 1)]), _: 1 }, 8, ["loading", "disabled"])], 64)) : l.value === 1 ? (u(), z("div", xt, [r("div", Ft, [o(N, { color: "#4CBF65", size: "28" }, { default: t(() => [o(D(Oe))]), _: 1 }), r("span", kt, s(i.$t("apply.waiting_audit")), 1)]), r("div", Et, s(i.$t("apply_success_desc")), 1), a[2] || (a[2] = r("img", { class: "w-[148px] object-contain mt-14", src: "//chat.53ai.com/images/upgrade-qrcode.png" }, null, -1))])) : (u(), z(H, { key: 2 }, [], 64)), o(q, { type: "primary", text: "", class: "!p-0 mt-4 !mx-auto relative left-1/2 -translate-x-1/2 !bg-transparent", onClick: B }, { default: t(() => [_(s(i.$t("login.back_to_login")), 1)]), _: 1 })]), _: 1 }, 8, ["model"])), [[G, h.value]]);
  };
} });
const Ct = _e(Vt, [["__scopeId", "data-v-a80e9eca"]]), Dt = { class: "text-3xl text-[#1D1E1F] font-bold text-center mb-10" }, At = { class: "text-[#1D1E1F]" }, It = { key: 0, class: "absolute -bottom-5 left-0 text-red-500 text-xs" }, Lt = { class: "text-[#1D1E1F]" }, Bt = { class: "text-[#1D1E1F]" }, zt = { class: "w-full flex-center mt-4 text-sm text-[#9A9A9A]" }, jt = W({ __name: "register-form", emits: ["login"], setup(F, { expose: y, emit: $ }) {
  const f = $, A = Z(), g = le(), c = m(), l = m(), e = se({ username: "", verification_code: "", password: "" }), p = m(false), h = m(false);
  ne(() => {
    A.info, T.on("language-change", v);
  }), ee(() => {
    T.off("language-change", v);
  });
  const v = () => {
    c.value && c.value.clearValidate();
  }, I = () => {
    e.username = "", e.verification_code = "", e.password = "";
  }, U = async () => {
    let a = await c.value.validate();
    if (!a)
      return;
    if (p.value = true, await i(), h.value)
      return b.warning(window.$t("login.account_exists")), p.value = false;
    if (a = await l.value.validateCode(), !a)
      return p.value = false;
    await A.login({ data: { username: e.username, password: e.password, verify_code: e.verification_code }, hideError: false }).catch((k) => (p.value = false, Promise.reject(k)));
    const { list: d = [] } = await g.loadListData({ data: { status: 0 } }).catch((k) => (p.value = false, Promise.reject(k)));
    if (p.value = false, d.length > 0)
      return b.warning($t("login.apply_open_repetition"));
    b.success(window.$t("action_login_success")), I(), B();
  }, B = () => {
    f("login");
  }, i = async () => {
    if (h.value = false, !await c.value.validateField("username"))
      return;
    const { exists: d = false } = await $e.checkAccount({ data: { account: e.username } });
    return h.value = d, d;
  };
  return y({ reset: I }), (a, d) => {
    const k = Y, C = K, L = oe, q = me, N = ae;
    return u(), V(N, { ref_key: "form_ref", ref: c, class: "relative max-w-[440px] w-full", model: e, "label-position": "top" }, { default: t(() => [r("h4", Dt, s(a.$t("account_register")), 1), o(L, { prop: "username", class: "relative", rules: D(j)({ message: "login.mobile_placeholder", validator: ["text", "mobile"] }) }, { label: t(() => [r("span", At, s(a.$t("account")), 1)]), default: t(() => [o(k, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.username, "onUpdate:modelValue": d[0] || (d[0] = (x) => e.username = x), size: "large", autocomplete: "new-username", name: "prevent_autofill_username", placeholder: a.$t("login.mobile_placeholder"), clearable: "", onBlur: i }, null, 8, ["modelValue", "placeholder"]), h.value ? (u(), z("div", It, [_(s(a.$t("login.account_exists")) + " ", 1), o(C, { type: "primary", link: "", size: "small", class: "!p-0 !bg-transparent -ml-1", onClick: B }, { default: t(() => [_(s(a.$t("action_login")), 1)]), _: 1 })])) : X("", true)]), _: 1 }, 8, ["rules"]), o(L, { class: "relative", prop: "verification_code", rules: D(j)({ message: "verification_code_placeholder" }) }, { label: t(() => [r("span", Lt, s(a.$t("verification_code")), 1)]), default: t(() => [o(q, { ref_key: "verification_code_input_ref", ref: l, account: e.username, disabled: h.value, modelValue: e.verification_code, "onUpdate:modelValue": d[1] || (d[1] = (x) => e.verification_code = x) }, null, 8, ["account", "disabled", "modelValue"])]), _: 1 }, 8, ["rules"]), o(L, { class: "relative", prop: "password", rules: [...D(j)({ message: "login.password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: a.$t("login.password_length"), trigger: "blur" }] }, { label: t(() => [r("span", Bt, s(a.$t("password")), 1)]), default: t(() => [o(k, { style: { "--el-input-bg-color": "#F1F2F3", "--el-input-border-color": "transparent", "--el-input-height": "44px" }, modelValue: e.password, "onUpdate:modelValue": d[2] || (d[2] = (x) => e.password = x), size: "large", type: "password", "show-password": "", clearable: "", autocomplete: "new-password", name: "prevent_autofill_password", placeholder: a.$t("login.password_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), o(C, { type: "primary", round: "", loading: p.value, size: "large", class: "w-full mt-6 !h-10", disabled: !e.username || !e.password || !e.verification_code, onClick: re(U, ["stop"]) }, { default: t(() => [_(s(a.$t("action_register")), 1)]), _: 1 }, 8, ["loading", "disabled"]), r("div", zt, [_(s(a.$t("login.has_account")) + " ", 1), o(C, { type: "primary", text: "", class: "!p-0 !bg-transparent", onClick: B }, { default: t(() => [_(s(a.$t("login.direct_login")), 1)]), _: 1 })])]), _: 1 }, 8, ["model"]);
  };
} });
const Ut = _e(jt, [["__scopeId", "data-v-85e66d39"]]), St = ["src"], Pt = ["src"], Mt = ["src"], Rt = { class: "absolute top-6 right-6 flex gap-2 text-[#777] text-base" }, co = W({ __name: "index", setup(F) {
  const y = Z();
  le();
  const $ = m("login"), f = () => {
    window.open("https://www.53ai.com", "_blank");
  }, A = async () => {
    y.info, $.value = "apply";
  }, g = () => {
    $.value = "forget";
  }, c = () => {
    $.value = "login";
  }, l = () => {
    $.value = "register";
  };
  return (e, p) => {
    const h = Le, v = Se, I = he, U = K, B = Be, i = ze;
    return u(), V(i, { class: "w-screen h-screen bg-white" }, { default: t(() => [o(h, { width: "55%", class: "relative bg-[url('/images/login/background.png')] bg-cover bg-center bg-no-repeat max-md:hidden" }, { default: t(() => [r("img", { class: "w-[24%] object-contain absolute top-8 left-10", src: e.$getRealPath({ url: "/images/logo_2.png" }), alt: "" }, null, 8, St), r("img", { class: "w-[48%] object-contain absolute top-[25%] left-1/2 -translate-x-1/2", src: e.$getRealPath({ url: "/images/login/title.png" }), alt: "" }, null, 8, Pt), r("img", { class: "w-[70%] object-contain absolute top-[32%] left-1/2 -translate-x-1/2", src: e.$getRealPath({ url: "/images/login/demo.png" }), alt: "" }, null, 8, Mt)]), _: 1 }), o(B, { class: "relative flex flex-col justify-center items-center pt-10 px-6 box-border overflow-auto" }, { default: t(() => [r("div", Rt, [o(v), o(U, { class: "!p-0 !border-none !outline-none !bg-transparent !leading-1 !h-auto hover:opacity-70", type: "default", text: "", onClick: f }, { default: t(() => [o(I, { class: "mr-1", name: "home_v2", width: "16" }), _(" " + s(e.$t("official_website")), 1)]), _: 1 })]), $.value === "login" ? (u(), V(dt, { key: 0, onForget: g, onRegister: l, onApply: A })) : $.value === "apply" ? (u(), V(Ct, { key: 1, onLogin: c })) : $.value === "forget" ? (u(), V(vt, { key: 2, onLogin: c, onRegister: l })) : $.value === "register" ? (u(), V(Ut, { key: 3, onLogin: c })) : X("", true)]), _: 1 })]), _: 1 });
  };
} });
export {
  co as default
};
