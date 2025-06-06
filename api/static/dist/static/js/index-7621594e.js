import { s as S, k as I, b4 as H, u as J, bC as le, r as m, ae as se, b as p, h as B, i as o, d as i, f as s, H as u, t as n, am as D, z as r, a9 as Y, X, aa as oe, ac as ne, $ as K, Y as ae, n as W, a4 as j, e as F, c as C, G as pe, F as L, L as ie, ab as ce, p as me, o as fe, g as ve, bD as Z, bE as ee, a5 as ye, y as be, bF as Ee, a8 as he } from "./index-7b696e01.js";
import { v as ge } from "./el-loading-5050bc7d.js";
import { _ as $e } from "./index-71389ea4.js";
import { E as xe } from "./el-tag-63139441.js";
import { _ as we } from "./index.vue_vue_type_script_setup_true_lang-ca2646ba.js";
import { E as Ve } from "./el-divider-0c731d25.js";
import { E as ke, a as De } from "./el-radio-32a02f49.js";
import { E as Fe } from "./el-switch-546ddcad.js";
const M = 1, O = 2, q = 1, te = 2, G = { saas_list() {
  return S.get("/api/saas/domains").catch(I);
}, saas_create(y) {
  return S.post("/api/saas/domains/exclusive", y).catch(I);
}, saas_update(y, b) {
  return S.put(`/api/saas/domains/exclusive/${y}`, b).catch(I);
}, async saas_exclusive_save(y, b) {
  const x = await (y ? S.put(`/api/saas/domains/exclusive/${y}`, b).catch(I) : S.post("/api/saas/domains/exclusive", b).catch(I));
  return H().loadSelfInfo(), x;
}, async saas_independent_save(y, b) {
  const x = await (y ? S.put(`/api/saas/domains/independent/${y}`, b).catch(I) : S.post("/api/saas/domains/independent", b).catch(I));
  return H().loadSelfInfo(), x;
}, async saas_independent_delete(y) {
  return S.delete(`/api/saas/domains/independent/${y}`).catch(I);
} }, Ce = { class: "py-4 flex items-center justify-center" }, ze = J({ __name: "exclusive-setting-dialog", emits: ["success"], setup(y, { expose: b, emit: x }) {
  const z = x, { isDevEnv: w } = le(), f = m(), E = m(false), e = se({ domain: "" }), V = m({}), _ = m(false), N = ({ rule: t, value: l, callback: v } = {}) => {
    if (l = (l || "").trim(), !/^[a-z0-9-]{5,}$/.test(l))
      return v(new Error(window.$t("module.domain_exclusive_validator_1")));
    v();
  }, R = ({ data: t = {} } = {}) => {
    e.domain = t.domain_name || "", V.value = t, E.value = true;
  }, h = () => {
    E.value = false, T();
  }, T = () => {
    e.domain = "";
  }, a = async () => {
    await f.value.validate() && (_.value = true, await G.saas_exclusive_save(V.value.id, { domain: `${e.domain}${w.value ? ".hub" : ""}.53ai.com` }).finally(() => {
      _.value = false;
    }), Y.success(window.$t("action_save_success")), z("success"), h());
  };
  return b({ open: R, close: h, reset: T }), (t, l) => {
    const v = X, c = oe, k = ne, A = K, U = ae;
    return p(), B(U, { title: t.$t("module.domain_exclusive"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: E.value, "onUpdate:modelValue": l[1] || (l[1] = ($) => E.value = $), onClose: h }, { footer: o(() => [i("div", Ce, [s(A, { class: "w-[96px] h-[36px]", type: "primary", onClick: a }, { default: o(() => [u(n(t.$t("action_save")), 1)]), _: 1 }), s(A, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: D(h, ["stop"]) }, { default: o(() => [u(n(t.$t("action_cancel")), 1)]), _: 1 })])]), default: o(() => [s(k, { ref_key: "form_ref", ref: f, model: e, "label-position": "top", onSubmit: D(() => {
    }, ["prevent"]) }, { default: o(() => [s(c, { prop: "domain", rules: [{ validator: ($, P, g) => N({ rule: $, value: P, callback: g }), trigger: "blur" }] }, { default: o(() => [s(v, { modelValue: e.domain, "onUpdate:modelValue": l[0] || (l[0] = ($) => e.domain = $), size: "large", "show-word-limit": "", maxlength: "20", placeholder: t.$t("module.domain_exclusive") }, { prepend: o(() => l[2] || (l[2] = [u(" http:// ")])), append: o(() => [u(n(r(w) ? ".hub" : "") + ".53ai.com ", 1)]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), Se = { class: "flex items-center w-full" }, Ie = { class: "flex items-center text-sm text-[#4F5052]" }, Be = { class: "w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-6 box-border text-sm text-[#4F5052]" }, Ne = { class: "flex items-center gap-2 text-sm text-[#4F5052]" }, Te = { class: "ml-12" }, Ae = { key: 2, class: "w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-6 box-border text-sm text-[#4F5052]" }, Ue = { class: "py-4 flex items-center justify-center" }, Le = J({ __name: "independent-setting-dialog", emits: ["success"], setup(y, { expose: b, emit: x }) {
  const z = H(), w = x, f = m(), E = m(false), e = se({ domain: "", resolve_type: M, enable_https: false, force_https: false, ssl_cert_type: q, ssl_certificate: "", ssl_private_key: "", subdir: "chat", use_subdir: false }), V = m({}), _ = m(false), N = ({ rule: t, value: l, callback: v } = {}) => {
    l = (l || "").trim(), v();
  }, R = ({ data: t = {} } = {}) => {
    const l = t.config || {};
    e.domain = (t.domain || "").trim().replace(/^https?:\/\//, ""), e.resolve_type = +l.resolve_type || M, e.enable_https = !!+l.enable_https, e.force_https = !!+l.force_https, e.ssl_cert_type = +l.ssl_cert_type || q, e.ssl_certificate = l.ssl_certificate || "", e.ssl_private_key = l.ssl_private_key || "", e.subdir = l.subdir || "chat", e.use_subdir = !!+l.use_subdir, V.value = t, E.value = true;
  }, h = () => {
    E.value = false, T();
  }, T = () => {
    e.domain = "";
  }, a = async () => {
    await f.value.validate() && (_.value = true, await G.saas_independent_save(V.value.id, { domain: e.domain, config: { resolve_type: e.resolve_type, enable_https: e.enable_https, force_https: e.force_https, ssl_cert_type: e.ssl_cert_type, ssl_certificate: e.ssl_certificate, ssl_private_key: e.ssl_private_key, subdir: e.subdir, use_subdir: e.use_subdir } }).finally(() => {
      _.value = false;
    }), Y.success(window.$t("action_save_success")), w("success"), h());
  };
  return b({ open: R, close: h, reset: T }), (t, l) => {
    const v = X, c = oe, k = ie, A = ce, U = Fe, $ = ke, P = De, g = Ve, de = ne, Q = K, re = ae;
    return p(), B(re, { title: t.$t("module.domain_independent"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", "align-center": "", modelValue: E.value, "onUpdate:modelValue": l[9] || (l[9] = (d) => E.value = d), onClose: h }, { footer: o(() => [i("div", Ue, [s(Q, { class: "w-[96px] h-[36px]", type: "primary", loading: _.value, onClick: a }, { default: o(() => [u(n(t.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), s(Q, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: D(h, ["stop"]) }, { default: o(() => [u(n(t.$t("action_cancel")), 1)]), _: 1 })])]), default: o(() => [s(de, { ref_key: "form_ref", ref: f, model: e, "label-position": "top", onSubmit: D(() => {
    }, ["prevent"]) }, { default: o(() => [s(c, { prop: "domain", rules: [{ validator: (d, ue, _e) => N({ rule: d, value: ue, callback: _e }), trigger: "blur" }] }, { default: o(() => [i("div", Se, [s(v, { class: W(["flex-1", [e.resolve_type === r(O) && e.use_subdir ? "has-subdir" : ""]]), modelValue: e.domain, "onUpdate:modelValue": l[0] || (l[0] = (d) => e.domain = d), size: "large", maxlength: 20, "show-word-limit": "", placeholder: t.$t("module.domain_independent") }, { prepend: o(() => l[10] || (l[10] = [u(" https:// ")])), _: 1 }, 8, ["class", "modelValue", "placeholder"]), e.resolve_type === r(O) && e.use_subdir ? (p(), B(c, { key: 0, prop: "subdir", rules: r(j)({ message: "form_input_placeholder" }) }, { default: o(() => [s(v, { class: "flex-none w-[250px] h-[42px] subdir-input", modelValue: e.subdir, "onUpdate:modelValue": l[1] || (l[1] = (d) => e.subdir = d), size: "large", maxlength: 10, "show-word-limit": "", placeholder: t.$t("form_input_placeholder") }, { prepend: o(() => l[11] || (l[11] = [u(" / ")])), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"])) : F("", true)])]), _: 1 }, 8, ["rules"]), e.resolve_type === r(O) ? (p(), B(c, { key: 0 }, { default: o(() => [i("div", Ie, [i("span", null, n(t.$t("module.use_subdirectories")), 1), s(A, { content: t.$t("module.use_subdirectories_tip") }, { default: o(() => [s(k, { class: "text-[#A4AABA] ml-1", name: "help", width: "14" })]), _: 1 }, 8, ["content"]), s(U, { class: "ml-2", modelValue: e.use_subdir, "onUpdate:modelValue": l[2] || (l[2] = (d) => e.use_subdir = d), size: "small" }, null, 8, ["modelValue"])])]), _: 1 })) : F("", true), s(c, null, { default: o(() => [s(P, { class: "w-full", modelValue: e.resolve_type, "onUpdate:modelValue": l[3] || (l[3] = (d) => e.resolve_type = d) }, { default: o(() => [(p(true), C(L, null, pe([r(M), r(O)], (d) => (p(), B($, { class: W(["flex-1 border py-6 px-4 rounded overflow-hidden", [e.resolve_type === d ? "border-[#3664EF]" : ""]]), key: d, value: d }, { default: o(() => [u(n(t.$t(`module.domain_independent_${d === r(M) ? "cname" : "self"}`)), 1)]), _: 2 }, 1032, ["class", "value"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }), e.resolve_type === r(M) ? (p(), C(L, { key: 1 }, [i("ul", Be, [i("li", null, n(t.$t("module.domain_independent_cname_desc")), 1), i("li", null, n(t.$t("module.domain_independent_cname_desc_1")), 1), i("li", null, n(t.$t("module.domain_independent_cname_desc_2")), 1), i("li", null, n(t.$t("module.domain_independent_cname_desc_3")), 1)]), s(c, null, { default: o(() => [i("div", Ne, [i("span", null, n(t.$t("module.domain_independent_https")), 1), s(U, { modelValue: e.enable_https, "onUpdate:modelValue": l[4] || (l[4] = (d) => e.enable_https = d), size: "small" }, null, 8, ["modelValue"]), e.enable_https ? (p(), C(L, { key: 0 }, [i("span", Te, n(t.$t("module.domain_independent_https_always")), 1), s(U, { modelValue: e.force_https, "onUpdate:modelValue": l[5] || (l[5] = (d) => e.force_https = d), size: "small" }, null, 8, ["modelValue"])], 64)) : F("", true)])]), _: 1 }), e.enable_https ? (p(), B(c, { key: 0, label: t.$t("module.domain_independent_ssl") }, { default: o(() => [s(P, { modelValue: e.ssl_cert_type, "onUpdate:modelValue": l[6] || (l[6] = (d) => e.ssl_cert_type = d) }, { default: o(() => [s($, { value: r(q) }, { default: o(() => [u(n(t.$t("module.domain_independent_ssl_option_1")), 1)]), _: 1 }, 8, ["value"]), s($, { value: r(te) }, { default: o(() => [u(n(t.$t("module.domain_independent_ssl_option_2")), 1)]), _: 1 }, 8, ["value"])]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"])) : F("", true), e.enable_https && e.ssl_cert_type === r(te) ? (p(), C(L, { key: 1 }, [s(c, { class: "is-required", label: t.$t("module.domain_independent_ssl_certificate"), prop: "ssl_certificate", rules: r(j)({ message: "module.domain_independent_ssl_certificate_placeholder" }) }, { default: o(() => [s(v, { type: "textarea", resize: "none", rows: 5, placeholder: t.$t("module.domain_independent_ssl_certificate_placeholder"), modelValue: e.ssl_certificate, "onUpdate:modelValue": l[7] || (l[7] = (d) => e.ssl_certificate = d) }, null, 8, ["placeholder", "modelValue"])]), _: 1 }, 8, ["label", "rules"]), s(c, { class: "is-required", label: t.$t("module.domain_independent_ssl_private_key"), prop: "ssl_private_key", rules: r(j)({ message: "module.domain_independent_ssl_private_key_placeholder" }) }, { default: o(() => [s(v, { type: "textarea", resize: "none", rows: 5, placeholder: t.$t("module.domain_independent_ssl_private_key_placeholder"), modelValue: e.ssl_private_key, "onUpdate:modelValue": l[8] || (l[8] = (d) => e.ssl_private_key = d) }, null, 8, ["placeholder", "modelValue"])]), _: 1 }, 8, ["label", "rules"])], 64)) : F("", true)], 64)) : (p(), C("ul", Ae, [i("li", null, n(t.$t("module.domain_independent_self_desc_1")), 1), i("li", null, n(t.$t("module.domain_independent_self_desc_2")), 1), s(g, { class: "!my-2" }), i("li", null, n(t.$t("module.domain_independent_self_desc_3", { site_id: r(z).info.eid })), 1)]))]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} });
const Re = me(Le, [["__scopeId", "data-v-8465fdad"]]), Pe = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border" }, Me = { class: "flex-1 max-h-[calc(100vh-100px)] overflow-auto" }, Oe = { class: "font-semibold text-[#1D1E1F]" }, Ye = { class: "mt-4 border rounded overflow-hidden p-6" }, Ge = { class: "text-[#1D1E1F] text-sm" }, je = { class: "w-full mt-4 flex items-center gap-3" }, qe = { class: "mt-8 font-semibold text-[#1D1E1F]" }, He = { class: "mt-4 border rounded overflow-hidden p-6" }, Je = { class: "text-[#1D1E1F] text-sm" }, Xe = { class: "w-full mt-4 flex items-center gap-3" }, Ke = { class: "flex-1 text-sm text-[#9A9A9A]" }, nt = J({ __name: "index", setup(y) {
  const { isDevEnv: b } = le(), x = m(), z = m(), w = m(""), f = m(""), E = m(false), e = m(false), V = m({}), _ = m({}), N = async () => {
    e.value = true;
    const { data: { exclusive_domains: a = [], independent_domains: t = [] } = {} } = await G.saas_list().finally(() => {
      e.value = false;
    });
    V.value = a[0] || {};
    let l = (V.value.domain || "").trim().replace(/^https?:\/\//, "").replace(/\.53ai\.com$/, "");
    b.value && (l = l.replace(/\.hub$/, "")), w.value = `https://${l}${b.value ? ".hub" : ""}.53ai.com`, V.value.domain_name = l, _.value = t[0] || {};
    try {
      _.value.config = JSON.parse(_.value.config);
    } catch {
      _.value.config = {};
    }
    l = (_.value.domain || "").trim().replace(/^https?:\/\//, ""), l && (E.value = !!+_.value.config.enable_https, f.value = `http${E.value ? "s" : ""}://${l}`, _.value.domain_name = l);
  }, R = async ({ text: a }) => {
    a && (await Ee(a), Y.success(window.$t("action_copy_success")));
  }, h = ({ type: a }) => {
    switch (a) {
      case "exclusive":
        x.value.open({ data: { ...V.value, domain: w.value } });
        break;
      default:
        z.value.open({ data: { ..._.value } });
        break;
    }
  }, T = async ({ type: a }) => {
    switch (a) {
      case "independent":
        await he.confirm(window.$t("module.domain_independent_delete_confirm")), await G.saas_independent_delete(_.value.id), E.value = false, f.value = "", _.value = {}, Y.success(window.$t("action_delete_success"));
        break;
    }
  };
  return fe(() => {
    N();
  }), (a, t) => {
    const l = we, v = X, c = be, k = K, A = xe, U = ie, $ = $e, P = ge;
    return p(), C(L, null, [s($, { class: "px-[60px] py-8" }, { default: o(() => [s(l, { title: a.$t("module.domain") }, null, 8, ["title"]), i("div", Pe, [ve((p(), C("div", Me, [i("h1", Oe, n(a.$t("module.domain_exclusive")), 1), i("div", Ye, [i("label", Ge, n(a.$t("module.domain_exclusive_label")), 1), i("div", je, [s(v, { modelValue: w.value, "onUpdate:modelValue": t[0] || (t[0] = (g) => w.value = g), class: "!max-w-[600px]", type: "text", placeholder: a.$t("form_input_placeholder"), disabled: "", size: "large" }, null, 8, ["modelValue", "placeholder"]), s(k, { class: "flex-none text-[#3664EF]", type: "default", size: "large", onClick: t[1] || (t[1] = D((g) => R({ text: w.value }), ["stop"])) }, { default: o(() => [s(c, { size: 16, class: "mr-2", color: "#3664EF" }, { default: o(() => [s(r(Z))]), _: 1 }), u(" " + n(a.$t("action_copy")), 1)]), _: 1 }), t[7] || (t[7] = i("div", { class: "flex-1 h-2" }, null, -1)), s(k, { class: "flex-none text-[#5A6D9E] !p-0", type: "text", size: "large", onClick: t[2] || (t[2] = D((g) => h({ type: "exclusive" }), ["stop"])) }, { default: o(() => [s(c, { size: 16, class: "mr-2", color: "#5A6D9E" }, { default: o(() => [s(r(ee))]), _: 1 }), u(" " + n(a.$t("action_setting")), 1)]), _: 1 })])]), i("h1", qe, n(a.$t("module.domain_independent")), 1), i("div", He, [i("label", Je, [u(n(a.$t("module.domain_independent_label")) + " ", 1), f.value ? (p(), C(L, { key: 0 }, [s(A, { class: "ml-3 !border-none !bg-[#E3F6E0] !text-[#09BB07]", type: "success", size: "default" }, { default: o(() => [u(n(a.$t("effective")), 1)]), _: 1 }), E.value ? (p(), B(A, { key: 0, class: "ml-3 !border-none !bg-[#E3F6E0] !text-[#09BB07] flex items-center", type: "success", size: "default" }, { default: o(() => [s(U, { class: "!inline-block", name: "global", width: "12", height: "12" }), u(" " + n(a.$t("https_enabled")), 1)]), _: 1 })) : F("", true)], 64)) : F("", true)]), i("div", Xe, [f.value ? (p(), C(L, { key: 0 }, [s(v, { modelValue: f.value, "onUpdate:modelValue": t[3] || (t[3] = (g) => f.value = g), class: "!max-w-[600px]", type: "text", placeholder: a.$t("form_input_placeholder"), disabled: "", size: "large" }, null, 8, ["modelValue", "placeholder"]), s(k, { class: "flex-none text-[#3664EF]", type: "default", size: "large", onClick: t[4] || (t[4] = D((g) => R({ text: f.value }), ["stop"])) }, { default: o(() => [s(c, { size: 16, class: "mr-2", color: "#3664EF" }, { default: o(() => [s(r(Z))]), _: 1 }), u(" " + n(a.$t("action_copy")), 1)]), _: 1 })], 64)) : F("", true), i("div", Ke, n(f.value ? "" : a.$t("module.domain_independent_desc")), 1), s(k, { class: "flex-none text-[#5A6D9E] !p-0", type: "text", size: "large", onClick: t[5] || (t[5] = D((g) => h({ type: "independent" }), ["stop"])) }, { default: o(() => [s(c, { size: 16, class: "mr-2", color: "#5A6D9E" }, { default: o(() => [s(r(ee))]), _: 1 }), u(" " + n(a.$t("action_setting")), 1)]), _: 1 }), f.value ? (p(), B(k, { key: 1, class: "flex-none text-[#5A6D9E] !p-0 !ml-0", type: "text", size: "large", onClick: t[6] || (t[6] = D((g) => T({ type: "independent" }), ["stop"])) }, { default: o(() => [s(c, { size: 16, class: "mr-2", color: "#5A6D9E" }, { default: o(() => [s(r(ye))]), _: 1 }), u(" " + n(a.$t("action_delete")), 1)]), _: 1 })) : F("", true)])])])), [[P, e.value]])])]), _: 1 }), s(ze, { ref_key: "exclusive_setting_ref", ref: x, onSuccess: N }, null, 512), s(Re, { ref_key: "independent_setting_ref", ref: z, onSuccess: N }, null, 512)], 64);
  };
} });
export {
  nt as default
};
