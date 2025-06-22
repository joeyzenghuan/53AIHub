import { z, A as C, aq as G, y as q, an as ee, r as c, Z as te, b as m, j as T, w as o, d as i, f as l, L as r, t as a, x as D, u as _, a9 as Y, a5 as Z, ag as se, ah as le, a4 as H, a6 as oe, q as K, al as re, e as U, c as I, K as ce, F as R, R as ne, az as pe, I as _e, o as me, m as fe, bY as Q, bZ as W, a8 as ve, G as ye, aL as be, ab as Ee } from "./index-8579fe4a.js";
import { v as xe } from "./el-loading-8747b309.js";
import { _ as ge } from "./index-ad57f5b2.js";
import { E as he } from "./el-tag-0b6baecb.js";
import { _ as $e } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { E as we } from "./el-divider-7d014453.js";
import { E as Ve, a as ke } from "./el-radio-2c60a23c.js";
import { E as De } from "./el-switch-1a77f9ca.js";
const P = 1, O = 2, X = 1, j = { saas_list() {
  return z.get("/api/saas/domains").catch(C);
}, saas_create(f) {
  return z.post("/api/saas/domains/exclusive", f).catch(C);
}, saas_update(f, v) {
  return z.put(`/api/saas/domains/exclusive/${f}`, v).catch(C);
}, async saas_exclusive_save(f, v) {
  const h = await (f ? z.put(`/api/saas/domains/exclusive/${f}`, v).catch(C) : z.post("/api/saas/domains/exclusive", v).catch(C));
  return G().loadSelfInfo(), h;
}, async saas_independent_save(f, v) {
  const h = await (f ? z.put(`/api/saas/domains/independent/${f}`, v).catch(C) : z.post("/api/saas/domains/independent", v).catch(C));
  return G().loadSelfInfo(), h;
}, async saas_independent_delete(f) {
  return z.delete(`/api/saas/domains/independent/${f}`).catch(C);
} }, Fe = { class: "py-4 flex items-center justify-center" }, ze = q({ __name: "exclusive-setting-dialog", emits: ["success"], setup(f, { expose: v, emit: h }) {
  const F = h, { isDevEnv: $ } = ee(), p = c(), y = c(false), s = te({ domain: "" }), w = c({}), u = c(false), S = ({ rule: e, value: t, callback: b } = {}) => {
    if (t = (t || "").trim(), !/^[a-z0-9-]{5,}$/.test(t))
      return b(new Error(window.$t("module.domain_exclusive_validator_1")));
    b();
  }, L = ({ data: e = {} } = {}) => {
    s.domain = e.domain_name || "", w.value = e, y.value = true;
  }, x = () => {
    y.value = false, B();
  }, B = () => {
    s.domain = "";
  }, n = async () => {
    await p.value.validate() && (u.value = true, await j.saas_exclusive_save(w.value.id, { domain: `${s.domain}${$.value ? ".hub" : ""}.53ai.com` }).finally(() => {
      u.value = false;
    }), Y.success(window.$t("action_save_success")), F("success"), x());
  };
  return v({ open: L, close: x, reset: B }), (e, t) => {
    const b = Z, E = se, V = le, A = H, N = oe;
    return m(), T(N, { title: e.$t("module.domain_exclusive"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: y.value, "onUpdate:modelValue": t[1] || (t[1] = (k) => y.value = k), onClose: x }, { footer: o(() => [i("div", Fe, [l(A, { class: "w-[96px] h-[36px]", type: "primary", onClick: n }, { default: o(() => [r(a(e.$t("action_save")), 1)]), _: 1 }), l(A, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: D(x, ["stop"]) }, { default: o(() => [r(a(e.$t("action_cancel")), 1)]), _: 1 })])]), default: o(() => [l(V, { ref_key: "form_ref", ref: p, model: s, "label-position": "top", onSubmit: D(() => {
    }, ["prevent"]) }, { default: o(() => [l(E, { prop: "domain", rules: [{ validator: (k, M, g) => S({ rule: k, value: M, callback: g }), trigger: "blur" }] }, { default: o(() => [l(b, { modelValue: s.domain, "onUpdate:modelValue": t[0] || (t[0] = (k) => s.domain = k), size: "large", "show-word-limit": "", maxlength: "20", placeholder: e.$t("module.domain_exclusive") }, { prepend: o(() => t[2] || (t[2] = [r(" http:// ")])), append: o(() => [r(a(_($) ? ".hub" : "") + ".53ai.com ", 1)]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), Ce = { class: "flex items-center w-full" }, Ie = { class: "flex items-center text-sm text-[#4F5052]" }, Se = { class: "w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-6 box-border text-sm text-[#4F5052]" }, Be = { class: "flex items-center gap-2 text-sm text-[#4F5052]" }, Ae = { class: "ml-12" }, Ne = { key: 2, class: "w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-6 box-border text-sm text-[#4F5052]" }, Te = { class: "py-4 flex items-center justify-center" }, Ue = q({ __name: "independent-setting-dialog", emits: ["success"], setup(f, { expose: v, emit: h }) {
  const F = G(), $ = h, p = c(), y = c(false), s = te({ domain: "", resolve_type: P, enable_https: false, force_https: false, ssl_cert_type: X, ssl_certificate: "", ssl_private_key: "", subdir: "chat", use_subdir: false }), w = c({}), u = c(false), S = ({ rule: e, value: t, callback: b } = {}) => {
    t = (t || "").trim(), b();
  }, L = ({ data: e = {} } = {}) => {
    const t = e.config || {};
    s.domain = (e.domain || "").trim().replace(/^https?:\/\//, ""), s.resolve_type = +t.resolve_type || P, s.enable_https = !!+t.enable_https, s.force_https = !!+t.force_https, s.ssl_cert_type = +t.ssl_cert_type || X, s.ssl_certificate = t.ssl_certificate || "", s.ssl_private_key = t.ssl_private_key || "", s.subdir = t.subdir || "chat", s.use_subdir = !!+t.use_subdir, w.value = e, y.value = true;
  }, x = () => {
    y.value = false, B();
  }, B = () => {
    s.domain = "";
  }, n = async () => {
    await p.value.validate() && (u.value = true, await j.saas_independent_save(w.value.id, { domain: s.domain, config: { resolve_type: s.resolve_type, enable_https: s.enable_https, force_https: s.force_https, ssl_cert_type: s.ssl_cert_type, ssl_certificate: s.ssl_certificate, ssl_private_key: s.ssl_private_key, subdir: s.subdir, use_subdir: s.use_subdir } }).finally(() => {
      u.value = false;
    }), Y.success(window.$t("action_save_success")), $("success"), x());
  };
  return v({ open: L, close: x, reset: B }), (e, t) => {
    const b = Z, E = se, V = ne, A = pe, N = De, k = Ve, M = ke, g = we, ae = le, J = H, ie = oe;
    return m(), T(ie, { title: e.$t("module.domain_independent"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", "align-center": "", modelValue: y.value, "onUpdate:modelValue": t[6] || (t[6] = (d) => y.value = d), onClose: x }, { footer: o(() => [i("div", Te, [l(J, { class: "w-[96px] h-[36px]", type: "primary", loading: u.value, onClick: n }, { default: o(() => [r(a(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), l(J, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: D(x, ["stop"]) }, { default: o(() => [r(a(e.$t("action_cancel")), 1)]), _: 1 })])]), default: o(() => [l(ae, { ref_key: "form_ref", ref: p, model: s, "label-position": "top", onSubmit: D(() => {
    }, ["prevent"]) }, { default: o(() => [l(E, { prop: "domain", rules: [{ validator: (d, de, ue) => S({ rule: d, value: de, callback: ue }), trigger: "blur" }] }, { default: o(() => [i("div", Ce, [l(b, { class: K(["flex-1", [s.resolve_type === _(O) && s.use_subdir ? "has-subdir" : ""]]), modelValue: s.domain, "onUpdate:modelValue": t[0] || (t[0] = (d) => s.domain = d), size: "large", maxlength: 20, "show-word-limit": "", placeholder: e.$t("module.domain_independent") }, { prepend: o(() => t[7] || (t[7] = [r(" https:// ")])), _: 1 }, 8, ["class", "modelValue", "placeholder"]), s.resolve_type === _(O) && s.use_subdir ? (m(), T(E, { key: 0, prop: "subdir", rules: _(re)({ message: "form_input_placeholder" }) }, { default: o(() => [l(b, { class: "flex-none w-[250px] h-[42px] subdir-input", modelValue: s.subdir, "onUpdate:modelValue": t[1] || (t[1] = (d) => s.subdir = d), size: "large", maxlength: 10, "show-word-limit": "", placeholder: e.$t("form_input_placeholder") }, { prepend: o(() => t[8] || (t[8] = [r(" / ")])), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"])) : U("", true)])]), _: 1 }, 8, ["rules"]), s.resolve_type === _(O) ? (m(), T(E, { key: 0 }, { default: o(() => [i("div", Ie, [i("span", null, a(e.$t("module.use_subdirectories")), 1), l(A, { content: e.$t("module.use_subdirectories_tip") }, { default: o(() => [l(V, { class: "text-[#A4AABA] ml-1", name: "help", width: "14" })]), _: 1 }, 8, ["content"]), l(N, { class: "ml-2", modelValue: s.use_subdir, "onUpdate:modelValue": t[2] || (t[2] = (d) => s.use_subdir = d), size: "small" }, null, 8, ["modelValue"])])]), _: 1 })) : U("", true), l(E, null, { default: o(() => [l(M, { class: "w-full", modelValue: s.resolve_type, "onUpdate:modelValue": t[3] || (t[3] = (d) => s.resolve_type = d) }, { default: o(() => [(m(true), I(R, null, ce([_(P), _(O)], (d) => (m(), T(k, { class: K(["flex-1 border py-6 px-4 rounded overflow-hidden", [s.resolve_type === d ? "border-[#3664EF]" : ""]]), key: d, value: d }, { default: o(() => [r(a(e.$t(`module.domain_independent_${d === _(P) ? "cname" : "self"}`)), 1)]), _: 2 }, 1032, ["class", "value"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }), s.resolve_type === _(P) ? (m(), I(R, { key: 1 }, [i("ul", Se, [i("li", null, a(e.$t("module.domain_independent_cname_desc")), 1), i("li", null, a(e.$t("module.domain_independent_cname_desc_1")), 1), i("li", null, a(e.$t("module.domain_independent_cname_desc_2")), 1), i("li", null, a(e.$t("module.domain_independent_cname_desc_3")), 1)]), l(E, null, { default: o(() => [i("div", Be, [i("span", null, a(e.$t("module.domain_independent_https")), 1), l(N, { modelValue: s.enable_https, "onUpdate:modelValue": t[4] || (t[4] = (d) => s.enable_https = d), size: "small" }, null, 8, ["modelValue"]), s.enable_https ? (m(), I(R, { key: 0 }, [i("span", Ae, a(e.$t("module.domain_independent_https_always")), 1), l(N, { modelValue: s.force_https, "onUpdate:modelValue": t[5] || (t[5] = (d) => s.force_https = d), size: "small" }, null, 8, ["modelValue"])], 64)) : U("", true)])]), _: 1 })], 64)) : (m(), I("ul", Ne, [i("li", null, a(e.$t("module.domain_independent_self_desc_1")), 1), i("li", null, a(e.$t("module.domain_independent_self_desc_2")), 1), l(g, { class: "!my-2" }), i("li", null, a(e.$t("module.domain_independent_self_desc_3", { site_id: _(F).info.eid })), 1)]))]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} });
const Le = _e(Ue, [["__scopeId", "data-v-506a30ad"]]), Re = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border" }, Me = { class: "flex-1 max-h-[calc(100vh-100px)] overflow-auto" }, Pe = { class: "font-semibold text-[#1D1E1F]" }, Oe = { class: "mt-4 border rounded overflow-hidden p-6" }, Ye = { class: "text-[#1D1E1F] text-sm" }, je = { class: "w-full mt-4 flex items-center gap-3" }, Ge = { class: "mt-8 font-semibold text-[#1D1E1F]" }, qe = { class: "mt-4 border rounded overflow-hidden p-6" }, Ze = { class: "text-[#1D1E1F] text-sm" }, He = { class: "w-full mt-4 flex items-center gap-3" }, Je = { class: "flex-1 text-sm text-[#9A9A9A]" }, ot = q({ __name: "index", setup(f) {
  const { isDevEnv: v } = ee(), h = c(), F = c(), $ = c(""), p = c(""), y = c(false), s = c(false), w = c({}), u = c({}), S = async () => {
    s.value = true;
    const { data: { exclusive_domains: n = [], independent_domains: e = [] } = {} } = await j.saas_list().finally(() => {
      s.value = false;
    });
    w.value = n[0] || {};
    let t = (w.value.domain || "").trim().replace(/^https?:\/\//, "").replace(/\.53ai\.com$/, "");
    v.value && (t = t.replace(/\.hub$/, "")), $.value = `https://${t}${v.value ? ".hub" : ""}.53ai.com`, w.value.domain_name = t, u.value = e[0] || {};
    try {
      u.value.config = JSON.parse(u.value.config);
    } catch {
      u.value.config = {};
    }
    t = (u.value.domain || "").trim().replace(/^https?:\/\//, ""), t && (y.value = !!+u.value.config.enable_https, p.value = `http${y.value ? "s" : ""}://${t}`, u.value.domain_name = t);
  }, L = async ({ text: n }) => {
    n && (await be(n), Y.success(window.$t("action_copy_success")));
  }, x = ({ type: n }) => {
    switch (n) {
      case "exclusive":
        h.value.open({ data: { ...w.value, domain: $.value } });
        break;
      default:
        F.value.open({ data: { ...u.value } });
        break;
    }
  }, B = async ({ type: n }) => {
    switch (n) {
      case "independent":
        await Ee.confirm(window.$t("module.domain_independent_delete_confirm")), await j.saas_independent_delete(u.value.id), y.value = false, p.value = "", u.value = {}, Y.success(window.$t("action_delete_success"));
        break;
    }
  };
  return me(() => {
    S();
  }), (n, e) => {
    const t = $e, b = Z, E = ye, V = H, A = he, N = ne, k = ge, M = xe;
    return m(), I(R, null, [l(k, { class: "px-[60px] py-8" }, { default: o(() => [l(t, { title: n.$t("module.domain") }, null, 8, ["title"]), i("div", Re, [fe((m(), I("div", Me, [i("h1", Pe, a(n.$t("module.domain_exclusive")), 1), i("div", Oe, [i("label", Ye, a(n.$t("module.domain_exclusive_label")), 1), i("div", je, [l(b, { modelValue: $.value, "onUpdate:modelValue": e[0] || (e[0] = (g) => $.value = g), class: "!max-w-[600px]", type: "text", placeholder: n.$t("form_input_placeholder"), disabled: "", size: "large" }, null, 8, ["modelValue", "placeholder"]), l(V, { class: "flex-none text-[#3664EF]", type: "default", size: "large", onClick: e[1] || (e[1] = D((g) => L({ text: $.value }), ["stop"])) }, { default: o(() => [l(E, { size: 16, class: "mr-2", color: "#3664EF" }, { default: o(() => [l(_(Q))]), _: 1 }), r(" " + a(n.$t("action_copy")), 1)]), _: 1 }), e[7] || (e[7] = i("div", { class: "flex-1 h-2" }, null, -1)), l(V, { class: "flex-none text-[#5A6D9E] !p-0", type: "text", size: "large", onClick: e[2] || (e[2] = D((g) => x({ type: "exclusive" }), ["stop"])) }, { default: o(() => [l(E, { size: 16, class: "mr-2", color: "#5A6D9E" }, { default: o(() => [l(_(W))]), _: 1 }), r(" " + a(n.$t("action_setting")), 1)]), _: 1 })])]), i("h1", Ge, a(n.$t("module.domain_independent")), 1), i("div", qe, [i("label", Ze, [r(a(n.$t("module.domain_independent_label")) + " ", 1), p.value ? (m(), I(R, { key: 0 }, [l(A, { class: "ml-3 !border-none !bg-[#E3F6E0] !text-[#09BB07]", type: "success", size: "default" }, { default: o(() => [r(a(n.$t("effective")), 1)]), _: 1 }), y.value ? (m(), T(A, { key: 0, class: "ml-3 !border-none !bg-[#E3F6E0] !text-[#09BB07] flex items-center", type: "success", size: "default" }, { default: o(() => [l(N, { class: "!inline-block", name: "global", width: "12", height: "12" }), r(" " + a(n.$t("https_enabled")), 1)]), _: 1 })) : U("", true)], 64)) : U("", true)]), i("div", He, [p.value ? (m(), I(R, { key: 0 }, [l(b, { modelValue: p.value, "onUpdate:modelValue": e[3] || (e[3] = (g) => p.value = g), class: "!max-w-[600px]", type: "text", placeholder: n.$t("form_input_placeholder"), disabled: "", size: "large" }, null, 8, ["modelValue", "placeholder"]), l(V, { class: "flex-none text-[#3664EF]", type: "default", size: "large", onClick: e[4] || (e[4] = D((g) => L({ text: p.value }), ["stop"])) }, { default: o(() => [l(E, { size: 16, class: "mr-2", color: "#3664EF" }, { default: o(() => [l(_(Q))]), _: 1 }), r(" " + a(n.$t("action_copy")), 1)]), _: 1 })], 64)) : U("", true), i("div", Je, a(p.value ? "" : n.$t("module.domain_independent_desc")), 1), l(V, { class: "flex-none text-[#5A6D9E] !p-0", type: "text", size: "large", onClick: e[5] || (e[5] = D((g) => x({ type: "independent" }), ["stop"])) }, { default: o(() => [l(E, { size: 16, class: "mr-2", color: "#5A6D9E" }, { default: o(() => [l(_(W))]), _: 1 }), r(" " + a(n.$t("action_setting")), 1)]), _: 1 }), p.value ? (m(), T(V, { key: 1, class: "flex-none text-[#5A6D9E] !p-0 !ml-0", type: "text", size: "large", onClick: e[6] || (e[6] = D((g) => B({ type: "independent" }), ["stop"])) }, { default: o(() => [l(E, { size: 16, class: "mr-2", color: "#5A6D9E" }, { default: o(() => [l(_(ve))]), _: 1 }), r(" " + a(n.$t("action_delete")), 1)]), _: 1 })) : U("", true)])])])), [[M, s.value]])])]), _: 1 }), l(ze, { ref_key: "exclusive_setting_ref", ref: h, onSuccess: S }, null, 512), l(Le, { ref_key: "independent_setting_ref", ref: F, onSuccess: S }, null, 512)], 64);
  };
} });
export {
  ot as default
};
