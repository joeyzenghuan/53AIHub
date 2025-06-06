import { _ as pe } from "./index-62cbccec.js";
import { E as K, e as T, a2 as X, b as z, c as de, d as Z, f as ee, g as te, B as me, P as ue, K as ce, L as _e, M as fe } from "./element-plus-c72880c6.js";
import { g as ge, _ as O, l as P, f as ye, u as we, e as R } from "./index-76ebd052.js";
import { _ as he } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { F as ve, y as be, B as M } from "./@element-plus-0cfad8bb.js";
import { d as B, e as b, f as Y, o as g, c as E, J as D, K as l, M as e, a2 as _, P as i, H as L, ac as S, n as $e, a as n, u as k, V as ae, j as G, O as le, i as xe, D as Ee, G as W } from "./@vue-3b855f7b.js";
import { s as q, a as oe } from "./setting-2f8c07fe.js";
import { T as Ne } from "./setup-25722abf.js";
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
import "./vue-router-2f60a71a.js";
const Ve = { key: 1 }, Q = B({ __name: "certificate", props: { modelValue: {}, fileName: {} }, emits: ["change", "update:modelValue", "update:fileName"], setup(U, { emit: A }) {
  const y = U, $ = A, c = b([]), d = b(false);
  async function a(s) {
    const w = new FormData();
    d.value = true, w.append("file", s);
    try {
      return (await ge.upload({ data: w }).finally(() => {
        d.value = false;
      })).data;
    } catch {
      return d.value = false, {};
    }
  }
  async function N(s, w) {
    if (!s.name.endsWith(".pem")) {
      K.warning(window.$t("upload_pem_file_tip"));
      return;
    }
    const v = await a(s.raw);
    Object.assign(s, v), c.value = [s], $("update:modelValue", s.key), $("update:fileName", s.name), await $e(), $("change", { fileList: c.value });
  }
  function r({ data: s, index: w }) {
    c.value.splice(w, 1);
  }
  return Y(() => y.modelValue, () => {
    y.modelValue && (c.value = [{ name: y.fileName, key: y.modelValue }]);
  }, { immediate: true }), Y(() => y.fileName, () => {
    y.modelValue && (c.value = [{ name: y.fileName, key: y.modelValue }]);
  }, { immediate: true }), (s, w) => {
    const v = T, m = X, u = O, f = z;
    return g(), E("div", null, [c.value.length ? (g(), E("ul", Ve, [(g(true), E(L, null, S(c.value, (x, F) => (g(), E("li", { key: x.id, class: "flex items-center gap-2 text-[#9A9A9A] text-sm" }, [e(u, { name: "certificate", width: "16" }), n("span", null, i(x.name || "--"), 1), e(f, { size: 16, class: "cursor-pointer text-[#333]", onClick: (V) => r({ data: x, index: F }) }, { default: l(() => [e(k(ve))]), _: 2 }, 1032, ["onClick"])]))), 128))])) : (g(), D(m, { key: 0, action: "#", limit: 1, "on-change": N, "auto-upload": false, "show-file-list": false, accept: ".pem", disabled: d.value }, { default: l(() => [e(v, { class: "!border-none !outline-none", type: "primary", plain: "", loading: d.value }, { default: l(() => [_(i(s.$t("action_select_file")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 }, 8, ["disabled"]))]);
  };
} }), ke = { class: "py-4 flex items-center justify-center" }, Fe = { class: "flex flex-col gap-4 pb-4 box-border max-h-[84vh] overflow-y-auto" }, Ce = ["innerHTML"], Ae = B({ __name: "wechat-setting-dialog", emits: ["success"], setup(U, { expose: A, emit: y }) {
  const $ = y, c = b(), d = b(false), a = ae({ mchId: "", appId: "", apiV3Key: "", serialNo: "", certPath: "", certName: "", privateKeyPath: "", privateKeyName: "", notifyUrl: "", platformCertPath: "" }), N = b({}), r = b(false), s = ({ data: o = {} } = {}) => {
    const t = o.pay_config || {}, h = o.extra_config || {};
    a.mchId = t.mchId || "", a.appId = t.appId || "", a.apiV3Key = t.apiV3Key || "", a.serialNo = t.serialNo || "", a.certPath = t.certPath || "", a.certName = t.certName || h.certName || "", a.privateKeyPath = t.privateKeyPath || "", a.privateKeyName = t.privateKeyName || h.privateKeyName || "", a.notifyUrl = t.notifyUrl || "", a.platformCertPath = t.platformCertPath || "", N.value = o, d.value = true;
  }, w = () => {
    d.value = false, v();
  }, v = () => {
    a.mchId = "", a.appId = "", a.apiV3Key = "", a.serialNo = "", a.certPath = "", a.certName = "", a.privateKeyPath = "", a.privateKeyName = "", a.notifyUrl = "", a.platformCertPath = "";
  }, m = async () => {
    if (!await c.value.validate())
      return;
    r.value = true;
    const t = JSON.parse(JSON.stringify(a)), h = { ...JSON.parse(JSON.stringify(N.value.extra_config || {})), certName: a.certName, privateKeyName: a.privateKeyName };
    delete t.certName, delete t.privateKeyName, await q.savePaymentSetting({ pay_setting_id: N.value.pay_setting_id, pay_config: t, extra_config: h, pay_type: oe }).finally(() => {
      r.value = false;
    }), $("success"), K.success(window.$t("action_save_success")), w();
  }, u = b(false), f = b("mch"), x = G(() => (/* @__PURE__ */ new Map([["mch", "wechat_payment.mch_guide.title"], ["app", "wechat_payment.app_guide.title"], ["api", "wechat_payment.api_guide.title"], ["cert", "wechat_payment.cert_guide.title"], ["serial", "wechat_payment.serial_guide.title"]])).get(f.value)), F = G(() => (/* @__PURE__ */ new Map([["mch", [{ title: window.$t("wechat_payment.mch_guide.step_1", { url: '<a style="color: #586D9A;" href="https://pay.weixin.qq.com/" target="_blank">https://pay.weixin.qq.com/</a>' }), imageList: [] }, { title: window.$t("wechat_payment.mch_guide.step_2"), imageList: ["/images/wechat-payment/mch-guide-1.png"] }, { title: window.$t("wechat_payment.mch_guide.step_3"), imageList: ["/images/wechat-payment/mch-guide-2.png", "/images/wechat-payment/mch-guide-3.png"] }]], ["app", [{ title: window.$t("wechat_payment.app_guide.step_1"), imageList: ["/images/wechat-payment/app-guide-1.png"] }, { title: window.$t("wechat_payment.app_guide.step_2"), imageList: ["/images/wechat-payment/app-guide-2.png"] }, { title: window.$t("wechat_payment.app_guide.step_3", { url: '<a style="color: #586D9A;" href="https://mp.weixin.qq.com" target="_blank">https://mp.weixin.qq.com</a>' }), imageList: ["/images/wechat-payment/app-guide-3.png"] }]], ["api", [{ title: window.$t("wechat_payment.api_guide.step_1"), imageList: ["/images/wechat-payment/api-guide-1.png"] }, { title: window.$t("wechat_payment.api_guide.step_2"), imageList: [] }]], ["cert", [{ title: window.$t("wechat_payment.cert_guide.step_1"), imageList: ["/images/wechat-payment/cert-guide-1.png", "/images/wechat-payment/cert-guide-2.png"] }, { title: window.$t("wechat_payment.cert_guide.step_2"), imageList: [] }]], ["serial", [{ title: window.$t("wechat_payment.serial_guide.step_1"), imageList: ["/images/wechat-payment/serial-guide-1.png"] }]]])).get(f.value)), V = ({ mode: o, title: t }) => {
    f.value = o, u.value = true;
  };
  return A({ open: s, close: w, reset: v }), (o, t) => {
    const h = O, I = de, C = Z, ne = ee, j = T, se = me, H = te;
    return g(), D(H, { title: o.$t("wechat_pay"), "align-center": true, "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: d.value, "onUpdate:modelValue": t[17] || (t[17] = (p) => d.value = p), onClose: w }, { footer: l(() => [n("div", ke, [e(j, { class: "w-[96px] h-[36px]", type: "primary", loading: r.value, onClick: m }, { default: l(() => [_(i(o.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"]), e(j, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: le(w, ["stop"]) }, { default: l(() => [_(i(o.$t("action_cancel")), 1)]), _: 1 })])]), default: l(() => [e(ne, { ref_key: "form_ref", ref: c, model: a, "label-position": "top" }, { default: l(() => [e(C, { label: o.$t("module.payment_wechat_mch_id"), prop: "mchId", rules: k(P)({ message: "module.payment_wechat_mch_id_placeholder" }) }, { label: l(() => [n("span", null, i(o.$t("module.payment_wechat_mch_id")), 1), n("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: t[0] || (t[0] = (p) => V({ mode: "mch" })) }, [e(h, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), _(" " + i(o.$t("how_get")), 1)])]), default: l(() => [e(I, { modelValue: a.mchId, "onUpdate:modelValue": t[1] || (t[1] = (p) => a.mchId = p), size: "large", clearable: "", placeholder: o.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), e(C, { label: o.$t("module.payment_wechat_app_id"), prop: "appId", rules: k(P)({ message: "module.payment_wechat_app_id_placeholder" }) }, { label: l(() => [n("span", null, i(o.$t("module.payment_wechat_app_id")), 1), n("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: t[2] || (t[2] = (p) => V({ mode: "app" })) }, [e(h, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), _(" " + i(o.$t("how_get")), 1)])]), default: l(() => [e(I, { modelValue: a.appId, "onUpdate:modelValue": t[3] || (t[3] = (p) => a.appId = p), size: "large", clearable: "", placeholder: o.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), e(C, { label: o.$t("module.payment_wechat_api_secret"), prop: "apiV3Key", rules: k(P)({ message: "module.payment_wechat_api_secret_placeholder" }) }, { label: l(() => [n("span", null, i(o.$t("module.payment_wechat_api_secret")), 1), n("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: t[4] || (t[4] = (p) => V({ mode: "api" })) }, [e(h, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), _(" " + i(o.$t("how_get")), 1)])]), default: l(() => [e(I, { modelValue: a.apiV3Key, "onUpdate:modelValue": t[5] || (t[5] = (p) => a.apiV3Key = p), size: "large", clearable: "", placeholder: o.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), e(C, { label: o.$t("module.payment_wechat_cert"), prop: "certPath", rules: k(P)({ message: "module.payment_wechat_cert_placeholder" }) }, { label: l(() => [n("span", null, i(o.$t("module.payment_wechat_cert")), 1), n("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: t[6] || (t[6] = (p) => V({ mode: "cert" })) }, [e(h, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), _(" " + i(o.$t("how_get")), 1)])]), default: l(() => [e(Q, { modelValue: a.certPath, "onUpdate:modelValue": t[7] || (t[7] = (p) => a.certPath = p), fileName: a.certName, "onUpdate:fileName": t[8] || (t[8] = (p) => a.certName = p), onChange: t[9] || (t[9] = (p) => o.$refs.form_ref.validateField("certPath")) }, null, 8, ["modelValue", "fileName"])]), _: 1 }, 8, ["label", "rules"]), e(C, { label: o.$t("module.payment_wechat_private_key"), prop: "privateKeyPath", rules: k(P)({ message: "module.payment_wechat_private_key_placeholder" }) }, { label: l(() => [n("span", null, i(o.$t("module.payment_wechat_private_key")), 1), n("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: t[10] || (t[10] = (p) => V({ mode: "cert" })) }, [e(h, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), _(" " + i(o.$t("how_get")), 1)])]), default: l(() => [e(Q, { modelValue: a.privateKeyPath, "onUpdate:modelValue": t[11] || (t[11] = (p) => a.privateKeyPath = p), fileName: a.privateKeyName, "onUpdate:fileName": t[12] || (t[12] = (p) => a.privateKeyName = p), onChange: t[13] || (t[13] = (p) => o.$refs.form_ref.validateField("privateKeyPath")) }, null, 8, ["modelValue", "fileName"])]), _: 1 }, 8, ["label", "rules"]), e(C, { label: o.$t("module.payment_wechat_serial_no"), prop: "serialNo", rules: k(P)({ message: "module.payment_wechat_serial_no_placeholder" }) }, { label: l(() => [n("span", null, i(o.$t("module.payment_wechat_serial_no")), 1), n("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: t[14] || (t[14] = (p) => V({ mode: "serial" })) }, [e(h, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), _(" " + i(o.$t("how_get")), 1)])]), default: l(() => [e(I, { modelValue: a.serialNo, "onUpdate:modelValue": t[15] || (t[15] = (p) => a.serialNo = p), size: "large", clearable: "", placeholder: o.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"]), e(H, { title: o.$t(x.value), "align-center": true, width: "860px", "destroy-on-close": "", "append-to-body": "", modelValue: u.value, "onUpdate:modelValue": t[16] || (t[16] = (p) => u.value = p) }, { default: l(() => [n("ul", Fe, [(g(true), E(L, null, S(F.value, (p, ie) => (g(), E("li", { key: ie, class: "flex flex-col gap-2 text-[#1D1E1F] text-sm" }, [n("div", { class: "text-wrap break-words whitespace-pre-wrap", innerHTML: p.title }, null, 8, Ce), (g(true), E(L, null, S(p.imageList, (J, re) => (g(), E("div", { key: re, class: "w-full" }, [e(se, { src: o.$getRealPath({ url: J }), class: "w-full", fit: "contain", "preview-teleported": true, "preview-src-list": [o.$getRealPath({ url: J })] }, null, 8, ["src", "preview-src-list"])]))), 128))]))), 128))])]), _: 1 }, 8, ["title", "modelValue"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), Ie = { class: "w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-6 box-border text-sm text-[#4F5052]" }, Pe = { class: "w-full h-full flex flex-col items-center justify-center gap-2" }, Ke = ["src"], De = { class: "text-[#9A9A9A] text-sm" }, Le = { class: "py-4 flex items-center justify-center" }, Ue = B({ __name: "manual-setting-dialog", setup(U, { expose: A }) {
  const y = b(), $ = b(false), c = ae({ pay_qrcode: "" }), d = b({}), a = ({ rule: m, value: u, callback: f, message: x } = {}) => {
    if (u = (u || "").trim(), !u)
      return f(new Error(window.$t(x)));
    f();
  }, N = ({ data: m = {} } = {}) => {
    c.pay_qrcode = m.pay_qrcode || "", d.value = m, $.value = true;
  }, r = () => {
    $.value = false, s();
  }, s = () => {
    c.pay_qrcode = "";
  }, w = (m) => {
    const u = new FileReader();
    u.readAsDataURL(m.raw), u.onload = () => {
      c.pay_qrcode = u.result;
    };
  }, v = () => {
    y.value.validate((m) => {
      m && (K.success(window.$t("action_save_success")), r());
    });
  };
  return A({ open: N, close: r, reset: s }), (m, u) => {
    const f = z, x = X, F = Z, V = ee, o = T, t = te;
    return g(), D(t, { title: m.$t("manual_pay"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: $.value, "onUpdate:modelValue": u[0] || (u[0] = (h) => $.value = h), onClose: r }, { footer: l(() => [n("div", Le, [e(o, { class: "w-[96px] h-[36px]", type: "primary", onClick: v }, { default: l(() => [_(i(m.$t("action_confirm")), 1)]), _: 1 }), e(o, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: le(r, ["stop"]) }, { default: l(() => [_(i(m.$t("action_cancel")), 1)]), _: 1 })])]), default: l(() => [e(V, { ref_key: "form_ref", ref: y, model: c, "label-position": "top" }, { default: l(() => [n("ol", Ie, [n("li", null, i(m.$t("module.payment_manual_tip")), 1)]), e(F, { label: m.$t("module.payment_manual_pay_qrcode"), prop: "pay_qrcode", rules: [{ validator: (h, I, C) => a({ rule: h, value: I, callback: C, message: "module.payment_manual_pay_qrcode_placeholder" }), trigger: "blur" }] }, { default: l(() => [e(x, { ref: "upload_ref", drag: "", "show-file-list": false, "auto-upload": false, accept: "image/*", limit: 1, "on-change": w }, { default: l(() => [n("div", Pe, [c.pay_qrcode ? (g(), E("img", { key: 0, src: c.pay_qrcode, class: "absolute top-0 left-0 w-full h-full object-cover" }, null, 8, Ke)) : (g(), E(L, { key: 1 }, [e(f, { color: "#9A9A9A", size: "20" }, { default: l(() => [e(k(be))]), _: 1 }), n("span", De, i(m.$t("action_upload")), 1)], 64))])]), _: 1 }, 512)]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} });
const qe = ye(Ue, [["__scopeId", "data-v-7a585846"]]), Be = { class: "flex-1 flex flex-col bg-white py-8 px-6 mt-3 box-border" }, Me = { class: "flex-1 h-0 max-h-[calc(100vh-240px)] overflow-auto" }, Se = { class: "w-full mt-5 flex items-center gap-5" }, Te = { class: "flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group" }, ze = { class: "relative w-full flex items-center gap-3" }, Oe = { class: "font-semibold text-[#1D1E1F]" }, je = { class: "!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]" }, He = { class: "mt-3 text-sm text-[#4F5052]" }, Je = { class: "flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group opacity-60" }, Re = { class: "relative w-full flex items-center gap-3" }, Ye = { class: "font-semibold text-[#1D1E1F]" }, Ge = { class: "!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]" }, We = { class: "mt-3 text-sm text-[#4F5052]" }, Qe = { class: "w-full mt-5 flex items-center gap-5 opacity-60" }, Xe = { class: "flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group" }, Ze = { class: "relative w-full flex items-center gap-3" }, et = { class: "font-semibold text-[#1D1E1F]" }, tt = { class: "!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]" }, at = { class: "mt-3 text-sm text-[#4F5052]" }, Nt = B({ __name: "index", setup(U) {
  const { isLocalEnv: A, isOpLocalEnv: y } = we(), $ = b(), c = b(), d = b({});
  xe(() => {
    a(), R.on("user-login-success", a);
  }), Ee(() => {
    R.off("user-login-success", a);
  });
  const a = async () => {
    const r = await q.paymentSettingList();
    d.value = r.find((s) => s.pay_type === oe) || {};
  }, N = async (r, s = "") => {
    if (s != "wechat")
      return K.warning(window.$t("feature_coming_soon"));
    if (A.value && y.value)
      return Ne({ title: window.$t("local_config_limited_tip"), content: window.$t("local_config_limited_desc", { url: window.location.href }), confirmButtonText: window.$t("know_it"), showCancelButton: false }).open();
    switch (r) {
      case "setting":
        s === "wechat" && $.value.open({ data: d.value });
        break;
      case "enable":
        s === "wechat" && await q.updatePaymentStatus(d.value.pay_setting_id, true), K.success(window.$t("enabled")), a();
        break;
      case "disable":
        s === "wechat" && await q.updatePaymentStatus(d.value.pay_setting_id, false), K.success(window.$t("disabled")), a();
        break;
    }
  };
  return (r, s) => {
    const w = he, v = O, m = ue, u = z, f = ce, x = _e, F = fe, V = pe;
    return g(), E(L, null, [e(V, { class: "px-[60px] py-8" }, { default: l(() => [e(w, { title: r.$t("module.payment") }, null, 8, ["title"]), n("div", Be, [n("div", Me, [s[7] || (s[7] = n("h1", { class: "font-semibold text-[#1D1E1F]" }, "CNY", -1)), n("div", Se, [n("div", Te, [n("div", ze, [e(v, { name: "wechat", width: "24" }), n("label", Oe, i(r.$t("wechat_pay")), 1), d.value.pay_status ? (g(), D(m, { key: 0, class: "!border-none !bg-[#E3F6E0] !text-[#09BB07]", type: "success", size: "default" }, { default: l(() => [_(i(r.$t("enabled")), 1)]), _: 1 })) : W("", true), s[3] || (s[3] = n("div", { class: "flex-1" }, null, -1)), e(F, { placement: "bottom", onCommand: s[0] || (s[0] = (o) => N(o, "wechat")) }, { dropdown: l(() => [e(x, null, { default: l(() => [e(f, { command: "setting" }, { default: l(() => [_(i(r.$t("action_setting")), 1)]), _: 1 }), d.value.pay_setting_id ? (g(), E(L, { key: 0 }, [d.value.pay_status ? (g(), D(f, { key: 0, command: "disable" }, { default: l(() => [_(i(r.$t("action_disable")), 1)]), _: 1 })) : (g(), D(f, { key: 1, command: "enable" }, { default: l(() => [_(i(r.$t("action_enable")), 1)]), _: 1 }))], 64)) : W("", true)]), _: 1 })]), default: l(() => [n("div", je, [e(u, { class: "rotate-90", size: "16" }, { default: l(() => [e(k(M))]), _: 1 })])]), _: 1 })]), n("div", He, i(d.value.pay_setting_id ? `${r.$t("setting")} \xB7 ${r.$t("updated_at")}
							${d.value.updated_time.slice(0, 16)}` : r.$t("not_setting")), 1)]), n("div", Je, [n("div", Re, [e(v, { name: "manual-pay", width: "24" }), n("label", Ye, i(r.$t("manual_pay")), 1), s[4] || (s[4] = n("div", { class: "flex-1" }, null, -1)), e(F, { placement: "bottom", onCommand: s[1] || (s[1] = (o) => N(o, "manual")) }, { dropdown: l(() => [e(x, null, { default: l(() => [e(f, { command: "setting" }, { default: l(() => [_(i(r.$t("action_setting")), 1)]), _: 1 }), e(f, { command: "enable" }, { default: l(() => [_(i(r.$t("action_enable")), 1)]), _: 1 })]), _: 1 })]), default: l(() => [n("div", Ge, [e(u, { class: "rotate-90", size: "16" }, { default: l(() => [e(k(M))]), _: 1 })])]), _: 1 })]), n("div", We, i(r.$t("not_setting")), 1)])]), s[8] || (s[8] = n("h1", { class: "mt-10 font-semibold text-[#1D1E1F] opacity-60" }, "USD", -1)), n("div", Qe, [n("div", Xe, [n("div", Ze, [e(v, { name: "paypal", width: "24" }), n("label", et, i(r.$t("paypal")), 1), s[5] || (s[5] = n("div", { class: "flex-1" }, null, -1)), e(F, { placement: "bottom", onCommand: s[2] || (s[2] = (o) => N(o, "paypal")) }, { dropdown: l(() => [e(x, null, { default: l(() => [e(f, { command: "setting" }, { default: l(() => [_(i(r.$t("action_setting")), 1)]), _: 1 }), e(f, { command: "enable" }, { default: l(() => [_(i(r.$t("action_enable")), 1)]), _: 1 })]), _: 1 })]), default: l(() => [n("div", tt, [e(u, { class: "rotate-90", size: "16" }, { default: l(() => [e(k(M))]), _: 1 })])]), _: 1 })]), n("div", at, i(r.$t("not_setting")), 1)]), s[6] || (s[6] = n("div", { class: "flex-1 rounded-lg box-border p-5 pb-8 group" }, null, -1))])])])]), _: 1 }), e(Ae, { ref_key: "wechat_setting_ref", ref: $, onSuccess: a }, null, 512), e(qe, { ref_key: "manual_setting_ref", ref: c, onSuccess: a }, null, 512)], 64);
  };
} });
export {
  Nt as default
};
