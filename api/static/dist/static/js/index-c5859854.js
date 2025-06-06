import { E as H, a as se, b as Fe, c as pe, d as we, f as $e, e as oe, g as ke, v as ze, y as De, w as Ae, x as Ue, S as Be, U as Re, V as Oe } from "./element-plus-c72880c6.js";
import { _ as Me } from "./index-918f1759.js";
import { D as J, a as Ye, E as je, c as ae, P as W, k as He, p as ge, d as ye, F as qe, G as Ee, l as ce, H as Ge, C as G, m as fe, n as ve, q, r as O, o as te, u as Je, I as ue, e as Ce, _ as Ke, f as We } from "./index-226b5715.js";
import { _ as Ze } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { d as ne, e as v, V as de, j as Pe, o as f, J as K, K as a, u as T, c as x, P as m, G as X, a as g, M as t, a2 as F, O as j, S as ee, T as Te, H as R, n as re, ac as ie, I as _e, y as Ve, i as Qe, D as Xe } from "./@vue-3b855f7b.js";
import { J as el, K as ll, F as tl, M as al, N as ol } from "./@element-plus-0cfad8bb.js";
import { d as nl } from "./pinia-6f4b1ece.js";
import { _ as sl } from "./index-2b83add0.js";
import { u as il, _ as dl } from "./index.vue_vue_type_script_setup_true_lang-4702f412.js";
import { d as be, g as rl, a as he, e as cl } from "./agent-3dc66611.js";
import { s as ul } from "./subscription-41103fdc.js";
import { T as _l } from "./setup-25722abf.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
import "./vue-router-2f60a71a.js";
import "./vue-demi-71ba0ef2.js";
import "./index.vue_vue_type_script_setup_true_lang-2b51690f.js";
import "./sortablejs-437f0071.js";
import "./debounce-f4e6390f.js";
import "./group-c1a36044.js";
import "./image.vue_vue_type_style_index_0_lang-45adb6cd.js";
import "./vue-cropper-d3d11008.js";
import "./vue-codemirror-0523f0f1.js";
import "./codemirror-763a75c7.js";
import "./@codemirror-a2adbe38.js";
import "./@lezer-f449c16b.js";
import "./crelt-7bb88e1d.js";
import "./style-mod-ab9c37a6.js";
import "./@marijn-45184d7f.js";
import "./w3c-keyname-9fb136d3.js";
const pl = nl("channel-store", { state: () => ({ channel_list: [], model_list_map: /* @__PURE__ */ new Map() }), actions: { async loadListData({ reset: U = true } = {}) {
  return (U || !this.channel_list.length) && (this.channel_list = await J.list()), JSON.parse(JSON.stringify(this.channel_list));
}, async save({ data: U = {} } = {}) {
  return J.save({ data: U });
}, async delete({ data: { channel_id: U } }) {
  return J.delete({ data });
}, async loadModelList({ reset: U = false, owner: S = "all" } = {}) {
  if (U && this.model_list_map.set(S, []), !this.model_list_map.get(S) || !this.model_list_map.get(S).length) {
    const M = await J.modelList({ params: { owner: S } });
    M.forEach((A = {}) => {
      const _ = this.model_list_map.get(A.owned_by) || [];
      _.push(A), this.model_list_map.set(A.owned_by, _);
    }), this.model_list_map.set("all", M);
  }
  return JSON.parse(JSON.stringify(this.model_list_map.get(S)));
}, async loadCozeWorkspaceList() {
  return await J.cozeWorkspaceList();
}, async loadCozeBotList({ params: { workspace_id: U } }) {
  return await J.cozeBotList({ params: { workspace_id: U } });
} } }), ml = { class: "w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-4 box-border text-sm text-[#4F5052]" }, fl = ["innerHTML"], vl = { key: 0, class: "text-center text-sm text-[#9A9A9A]" }, hl = { class: "py-4 flex items-center justify-center" }, gl = ne({ __name: "authorize-dialog", emits: ["success"], setup(U, { expose: S, emit: M }) {
  const A = M, _ = Ye(), E = v(), P = v(), z = v(false), u = de({ client_id: "", client_secret: "", api_key: "" }), r = v({}), D = v(false), i = Pe(() => {
    const c = _.info;
    return `${je}/api/callback/cozecn/auth/${c.eid}`;
  }), y = ({ rule: c, value: w, callback: I, message: B } = {}) => {
    if (w = (w || "").trim(), !w)
      return I(new Error(window.$t(B)));
    I();
  }, N = async ({ data: c = {} } = {}) => {
    u.client_id = c.client_id || "", u.client_secret = c.client_secret || "", u.api_key = c.api_key || "", r.value = c, z.value = true, await re();
    const w = E.value.$el, I = P.value.$el.querySelector(".copy-hook");
    switch (c.value) {
      case W:
        I.appendChild(w);
        break;
      case ae:
        u.api_key = c.access_token || "";
        break;
    }
  }, h = () => {
    z.value = false, k();
  }, k = () => {
    u.client_id = "", u.client_secret = "", u.api_key = "";
  }, C = async ({ text: c }) => {
    c && (await He(c), H.success(window.$t("action_copy_success")));
  }, Y = async () => {
    if (!await P.value.validate())
      return;
    let w = { configs: {}, name: r.value.label, provider_type: r.value.value, provider_id: r.value.provider_id };
    switch (r.value.value) {
      case W:
        (!r.value.provider_id || u.client_id !== r.value.client_id || u.client_secret !== r.value.client_secret) && await se.confirm(window.$t("module.platform_auth_coze_confirm"), window.$t("tip")), w.configs = { client_id: u.client_id, client_secret: u.client_secret };
        break;
      case ae:
        w.access_token = u.api_key;
        break;
    }
    if (D.value = true, await ge.save({ data: w }).finally(() => {
      D.value = false;
    }), [W].includes(r.value.value) && !+r.value.is_authorized) {
      let I = "";
      switch (r.value.value) {
        case W:
          I = `https://www.coze.cn/api/permission/oauth2/authorize?response_type=code&client_id=${u.client_id}&redirect_uri=${encodeURIComponent(i.value)}&state=coze_auth`;
          break;
      }
      console.info("auth_url: ", I);
      const B = window.open(I, "_blank", "width=1000,height=800");
      window.addEventListener("message", ({ data: l = {} } = {}) => {
        l.provider_type == r.value.value && (B.close(), H.success(window.$t("action_authorize_success")), A("success"));
      });
    }
    H.success(window.$t("action_save_success")), A("success"), h();
  };
  return S({ open: N, close: h, reset: k }), (c, w) => {
    const I = Fe, B = pe, l = we, s = $e, $ = oe, V = ke;
    return f(), K(V, { modelValue: z.value, "onUpdate:modelValue": w[4] || (w[4] = (e) => z.value = e), title: c.$t("action_authorize") + c.$t(r.value.label || ""), "close-on-click-modal": false, width: "720px", "destroy-on-close": "", "append-to-body": "", onClose: h }, { footer: a(() => [[T(W)].includes(r.value.value) ? (f(), x("div", vl, m(c.$t("platform_auth.coze_cn.tip_1")), 1)) : X("", true), g("div", hl, [t($, { class: "w-[96px] h-[36px]", type: "primary", loading: D.value, onClick: Y }, { default: a(() => [F(m(c.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"]), t($, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: j(h, ["stop"]) }, { default: a(() => [F(m(c.$t("action_cancel")), 1)]), _: 1 })])]), default: a(() => [t(s, { ref_key: "form_ref", ref: P, model: u, "label-position": "top" }, { default: a(() => [g("div", ml, [g("div", { class: "whitespace-pre-wrap leading-7", innerHTML: r.value.value == T(ae) ? c.$t("platform_auth.app_builder.tip", { url: "<a class='text-[#5A6D9E]' href='https://qianfan.cloud.baidu.com/appbuilder' target='_blank'>https://qianfan.cloud.baidu.com/appbuilder</a>" }) : c.$t("platform_auth.coze_cn.tip", { url: "<a class='text-[#5A6D9E]' href='https://www.coze.cn/open/oauth/apps' target='_blank'>https://www.coze.cn/open/oauth/apps</a>", redirect_url: `<span class='text-[#F04F4D]'>${i.value}</span><span class='copy-hook'></span>`, client_id: `<span class='text-[#F04F4D]'>${c.$t("module.platform_auth_client_id")}</span>`, client_secret: `<span class='text-[#F04F4D]'>${c.$t("module.platform_auth_client_secret")}</span>` }) }, null, 8, fl), ee(t(I, { ref_key: "copy_ref", ref: E, class: "cursor-pointer ml-1 mt-1 text-[#4F5052] hover:text-[#3664EF]", size: 14, onClick: w[0] || (w[0] = (e) => C({ text: i.value })) }, { default: a(() => [t(T(el))]), _: 1 }, 512), [[Te, [T(W)].includes(r.value.value)]])]), r.value.value == T(ae) ? (f(), K(l, { key: 0, label: c.$t("module.platform_tool_api_key"), prop: "api_key", rules: [{ validator: (e, n, p) => y({ rule: e, value: n, callback: p, message: "module.platform_tool_api_key_placeholder" }), trigger: "blur" }] }, { default: a(() => [t(B, { modelValue: u.api_key, "onUpdate:modelValue": w[1] || (w[1] = (e) => u.api_key = e), size: "large", placeholder: c.$t("module.platform_tool_api_key_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])) : (f(), x(R, { key: 1 }, [t(l, { label: c.$t("module.platform_auth_client_id"), prop: "client_id", rules: [{ validator: (e, n, p) => y({ rule: e, value: n, callback: p, message: "module.platform_auth_client_id_placeholder" }), trigger: "blur" }] }, { default: a(() => [t(B, { modelValue: u.client_id, "onUpdate:modelValue": w[2] || (w[2] = (e) => u.client_id = e), size: "large", placeholder: c.$t("module.platform_auth_client_id_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), t(l, { label: c.$t("module.platform_auth_client_secret"), prop: "client_secret", rules: [{ validator: (e, n, p) => y({ rule: e, value: n, callback: p, message: "module.platform_auth_client_secret_placeholder" }), trigger: "blur" }] }, { default: a(() => [t(B, { modelValue: u.client_secret, "onUpdate:modelValue": w[3] || (w[3] = (e) => u.client_secret = e), size: "large", placeholder: c.$t("module.platform_auth_client_secret_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])], 64))]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), yl = { class: "py-4 flex items-center justify-center" }, bl = ne({ __name: "tool-setting-dialog", setup(U, { expose: S }) {
  const M = v(), A = v(false), _ = de({ api_key: "" }), E = v({}), P = ({ rule: i, value: y, callback: N, message: h } = {}) => {
    if (y = (y || "").trim(), !y)
      return N(new Error(window.$t(h)));
    N();
  }, z = ({ data: i = {} } = {}) => {
    _.api_key = i.api_key || "", E.value = i, A.value = true;
  }, u = () => {
    A.value = false, r();
  }, r = () => {
    _.api_key = "";
  }, D = () => {
    M.value.validate((i) => {
      i && (H.success(window.$t("action_save_success")), u());
    });
  };
  return S({ open: z, close: u, reset: r }), (i, y) => {
    const N = pe, h = we, k = $e, C = oe, Y = ke;
    return f(), K(Y, { title: i.$t("action_setting") + i.$t(E.value.label || ""), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", modelValue: A.value, "onUpdate:modelValue": y[1] || (y[1] = (c) => A.value = c), onClose: u }, { footer: a(() => [g("div", yl, [t(C, { class: "w-[96px] h-[36px]", type: "primary", onClick: D }, { default: a(() => [F(m(i.$t("action_confirm")), 1)]), _: 1 }), t(C, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: j(u, ["stop"]) }, { default: a(() => [F(m(i.$t("action_cancel")), 1)]), _: 1 })])]), default: a(() => [t(k, { ref_key: "form_ref", ref: M, model: _, "label-position": "top", onSubmit: j(() => {
    }, ["prevent"]) }, { default: a(() => [t(h, { label: i.$t("module.platform_tool_api_key"), prop: "api_key", rules: [{ required: true, message: i.$t("module.platform_tool_api_key_placeholder") }, { validator: (c, w, I) => P({ rule: c, value: w, callback: I, message: "module.platform_tool_api_key_placeholder" }), trigger: "blur" }] }, { default: a(() => [t(N, { modelValue: _.api_key, "onUpdate:modelValue": y[0] || (y[0] = (c) => _.api_key = c), size: "large", placeholder: i.$t("module.platform_tool_api_key_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), wl = { class: "flex flex-col gap-3 mb-8 pb-1 overflow-auto max-h-[60vh] pr-1" }, $l = ["src"], kl = { class: "flex-1 text-[#1B2B51] font-semibold" }, xl = { class: "w-full max-h-[42vh] min-h-[200px] pr-1 flex flex-col gap-2 box-border overflow-auto" }, El = { key: 0, class: "text-[#9A9A9A] w-full text-center py-4" }, Cl = ["src"], Vl = { class: "text-sm text[#1D1E1F]" }, Fl = { class: "pb-4 flex items-center justify-center" }, zl = { class: "pb-4 flex items-center justify-center" }, Dl = ne({ __name: "model-setting-dialog", emits: ["success"], setup(U, { expose: S, emit: M }) {
  const A = M, _ = pl(), E = v(), P = v(), z = v(false), u = v(false), r = v(false), D = v(false), i = de({ type: "", api_key: "", organization_id: "", base_url: "", models: [] }), y = v({}), N = v(ye(qe)), h = v([]), k = v(false), C = de({ id: "", name: "" }), Y = async ({ data: l = {}, action: s = "" } = {}) => {
    if (s === "model_edit") {
      C.id = l.id || l.value || "", C.name = l.name || l.label || "", k.value = true, y.value = l;
      return;
    }
    if (!l.channel_id && !l.value) {
      r.value = true, u.value = true;
      const e = await _.loadListData({ reset: true }).finally(() => {
        r.value = false;
      });
      N.value.forEach((n) => {
        n.is_add = e.some((p) => p.name === n.value);
      });
      return;
    }
    i.type = l.type || l.value || "", i.api_key = l.api_key || "", i.base_url = l.base_url || "", i.organization_id = l.organization_id || "", i.models = typeof l.models == "string" && l.models.split(",") || l.models || [], y.value = l, z.value = true, r.value = true;
    const $ = await _.loadModelList({ owner: i.type }).finally(() => {
      r.value = false;
    }), { config: { model_alias_map: V = {} } = {} } = l;
    h.value = $.map((e) => (e.value = e.id || "", e.label = V[e.value] || e.label || e.id || "", e.checked = i.models.includes(e.value) || false, s === "add" && (e.checked = true), e.icon = e.icon || "", e)), Ee === i.type && (i.base_url || (i.base_url = "https://api.deepseek.com"));
  }, c = ({ action: l = "" } = {}) => {
    l === "model_edit" && (k.value = false), l === "add" && (u.value = false), z.value = false, w({ action: l });
  }, w = ({ action: l = "" } = {}) => {
    if (l === "model_edit") {
      C.id = "", C.name = "";
      return;
    }
    i.type = "", i.api_key = "", i.base_url = "", i.organization_id = "", i.base_url = "", i.models = [];
  }, I = ({ data: l = {} } = {}) => {
    Y({ data: l, action: "add" });
  }, B = ({ action: l = "" } = {}) => {
    if (l === "model_edit") {
      P.value.validate(async (s) => {
        if (!s)
          return;
        let { id: $ = "", name: V = "" } = C;
        V = V.trim();
        const e = y.value.config || {};
        e.model_alias_map = { ...e.model_alias_map || {}, [$]: V }, e.model_alias_map[$] || delete e.model_alias_map[$], Object.keys(e.model_alias_map).length || delete e.model_alias_map;
        const n = { channel_id: y.value.channel_id, key: y.value.api_key, base_url: y.value.base_url, config: e, models: y.value.models, name: y.value.type };
        D.value = true, await _.save({ data: n }).finally(() => {
          D.value = false;
        }), A("success", { action: l, data: { id: $, name: V || $ } }), H.success(window.$t("action_save_success")), c({ action: l });
      });
      return;
    }
    E.value.validate(async (s) => {
      if (!s)
        return;
      const { type: $ = "", api_key: V = "", base_url: e = "" } = i;
      N.value.find((p) => p.value === $);
      const n = { channel_id: y.value.channel_id, key: V, base_url: e, config: y.value.config || {}, models: h.value.filter((p) => p.checked).map((p) => p.value).join(","), name: $ };
      l = n.channel_id ? "edit" : "add", D.value = true, await _.save({ data: n }).finally(() => {
        D.value = false;
      }), A("success", { action: l, data: n }), H.success(window.$t("action_save_success")), c({ action: l });
    });
  };
  return S({ open: Y, close: c, reset: w }), (l, s) => {
    const $ = oe, V = ke, e = pe, n = we, p = De, L = $e, o = ze;
    return f(), x(R, null, [t(V, { title: l.$t("module.platform_model_add"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: u.value, "onUpdate:modelValue": s[0] || (s[0] = (d) => u.value = d), onClose: s[1] || (s[1] = (d) => c({ action: "add" })) }, { default: a(() => [ee((f(), x("ul", wl, [(f(true), x(R, null, ie(N.value, (d) => (f(), x("li", { key: d.value, class: _e(["flex items-center gap-4 py-5 px-6 border rounded box-border", [d.add_visible ? "" : "opacity-50"]]) }, [g("img", { class: "flex-none w-[40px] h-[40px] object-contain", src: l.$getRealPath({ url: `/images/platform/${d.icon}.png` }) }, null, 8, $l), g("div", kl, m(l.$t(d.label)), 1), d.add_visible ? (f(), K($, { key: 0, class: _e(["flex-none !border-none !px-5 text-[#3664EF] bg-[#F6F7F8]", d.is_add ? "!text-[#9A9A9A] !bg-[#F6F7F8]" : ""]), type: "primary", plain: "", size: "large", disabled: d.is_add, onClick: (le) => I({ data: d }) }, { default: a(() => [F(m(l.$t(d.is_add ? "action_add_success" : "action_add")), 1)]), _: 2 }, 1032, ["class", "disabled", "onClick"])) : X("", true)], 2))), 128))])), [[o, r.value]])]), _: 1 }, 8, ["title", "modelValue"]), t(V, { title: l.$t("action_setting") + l.$t(y.value.label || ""), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", modelValue: z.value, "onUpdate:modelValue": s[5] || (s[5] = (d) => z.value = d), onClose: c }, { footer: a(() => [g("div", Fl, [t($, { class: "w-[96px] h-[36px]", type: "primary", loading: D.value || r.value, onClick: B }, { default: a(() => [F(m(l.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), t($, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: j(c, ["stop"]) }, { default: a(() => [F(m(l.$t("action_cancel")), 1)]), _: 1 })])]), default: a(() => [t(L, { ref_key: "form_ref", ref: E, model: i, "label-position": "top" }, { default: a(() => [t(n, { label: l.$t("module.platform_tool_api_key"), prop: "api_key", class: "is-required", rules: T(ce)({ message: "form_input_placeholder" }) }, { default: a(() => [t(e, { modelValue: i.api_key, "onUpdate:modelValue": s[2] || (s[2] = (d) => i.api_key = d), size: "large", placeholder: l.$t("module.platform_tool_api_key_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), [T(Ee)].includes(i.type) ? (f(), K(n, { key: 0, label: l.$t("module.platform_model_api_endpoint"), prop: "base_url", class: "is-required", rules: T(ce)({ message: "form_input_placeholder", validator: ["text", "link"] }) }, { default: a(() => [t(e, { modelValue: i.base_url, "onUpdate:modelValue": s[3] || (s[3] = (d) => i.base_url = d), size: "large", placeholder: l.$t("module.platform_model_api_endpoint_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])) : [T(Ge)].includes(i.type) ? (f(), K(n, { key: 1, label: l.$t("module.platform_model_base_url"), prop: "base_url", class: "is-required", rules: T(ce)({ message: "form_input_placeholder" }) }, { default: a(() => [t(e, { modelValue: i.base_url, "onUpdate:modelValue": s[4] || (s[4] = (d) => i.base_url = d), size: "large", placeholder: l.$t("module.platform_model_base_url_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])) : X("", true), t(n, { class: "is-required", label: l.$t("module.platform_model_models"), prop: "models" }, { default: a(() => [ee((f(), x("ul", xl, [h.value.length ? X("", true) : (f(), x("div", El, m(l.$t("module.platform_model_models_empty")), 1)), (f(true), x(R, null, ie(h.value, (d) => (f(), x("li", { class: "w-full flex items-center gap-1.5", key: d.value }, [d.icon ? (f(), x("img", { key: 0, class: "flex-none w-[20px] h-[20px] object-contain", src: l.$getRealPath({ url: `/images/platform/${d.icon}.png` }) }, null, 8, Cl)) : X("", true), g("label", Vl, m(d.label), 1), s[12] || (s[12] = g("div", { class: "flex-1" }, null, -1)), t(p, { modelValue: d.checked, "onUpdate:modelValue": (le) => d.checked = le, size: "small" }, null, 8, ["modelValue", "onUpdate:modelValue"])]))), 128))])), [[o, r.value]])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]), t(V, { title: l.$t("module.platform_model_models_edit"), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", modelValue: k.value, "onUpdate:modelValue": s[10] || (s[10] = (d) => k.value = d), onClose: s[11] || (s[11] = (d) => c({ action: "model_edit" })) }, { footer: a(() => [g("div", zl, [t($, { class: "w-[96px] h-[36px]", type: "primary", loading: D.value || r.value, onClick: s[8] || (s[8] = (d) => B({ action: "model_edit" })) }, { default: a(() => [F(m(l.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), t($, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: s[9] || (s[9] = j((d) => c({ action: "model_edit" }), ["stop"])) }, { default: a(() => [F(m(l.$t("action_cancel")), 1)]), _: 1 })])]), default: a(() => [t(L, { ref_key: "model_form_ref", ref: P, model: C, "label-position": "top" }, { default: a(() => [t(n, { label: l.$t("module.platform_model_models_id"), prop: "id", class: "is-required", rules: T(ce)({ message: "form_input_placeholder" }) }, { default: a(() => [t(e, { modelValue: C.id, "onUpdate:modelValue": s[6] || (s[6] = (d) => C.id = d), size: "large", disabled: "", placeholder: l.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), t(n, { label: l.$t("module.platform_model_models_name"), prop: "name" }, { default: a(() => [t(e, { modelValue: C.name, "onUpdate:modelValue": s[7] || (s[7] = (d) => C.name = d), size: "large", placeholder: l.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"])], 64);
  };
} }), Al = { class: "flex border-t pt-5 justify-end w-full" }, Pl = ne({ __name: "agent-create-drawer", emits: ["success"], setup(U, { expose: S, emit: M }) {
  const A = M, _ = il(), E = v(), P = v(false), z = v(be), u = v(false), r = v({});
  Ve("channelConfig", r);
  const D = Pe(() => r.value.channel_type == G.get(fe) ? fe : r.value.channel_type == G.get(ve) ? ve : "");
  Ve("channelTypeKey", D);
  async function i({ agent_type: h, data: k, agent_id: C } = {}) {
    if (_.resetState(), await re(), z.value = h || be, u.value = !!+C, _.agent_id = +C || 0, _.agent_type = _.form_data.custom_config.agent_type = z.value, _.form_data.logo = rl.get(h), _.form_data.group_id = 0, await _.loadDetailData(), _.loadGroupOptions(), _.loadChannelOptions(), _.loadSubscriptionOptions(), r.value = k.channel_config || {}, r.value.name = r.value.name || k.label || "", !r.value.channel_type)
      switch (k.value) {
        case O:
          r.value.channel_type = G.get(fe);
          break;
        case q:
          r.value.channel_type = G.get(ve);
          break;
      }
    _.form_data.channel_type || (_.form_data.channel_type = r.value.channel_type || 0), _.form_data.model || (await re(), _.form_data.model = D.value), P.value = true;
  }
  async function y() {
    P.value = false;
  }
  async function N() {
    const h = E.value;
    if (h && h.save) {
      _.saving = true;
      const { data: k = {} } = await h.save().finally(() => {
        _.saving = false;
      });
      k.agent_id;
    } else if (h && h.validateForm) {
      if (!await h.validateForm())
        return Promise.reject();
      await _.saveAgentData(), A("success", { agent_id: _.agent_id, action: u.value ? "update" : "create" });
    }
    y();
  }
  return S({ open: i, close: y }), (h, k) => {
    const C = oe, Y = Ae;
    return f(), K(Y, { title: h.$t("action_add"), modelValue: P.value, "onUpdate:modelValue": k[0] || (k[0] = (c) => P.value = c), size: "840px", "destroy-on-close": "", "append-to-body": "", "close-on-click-modal": false }, { footer: a(() => [g("div", Al, [t(C, { size: "large", onClick: y }, { default: a(() => [F(m(h.$t("action_cancel")), 1)]), _: 1 }), r.value.channel_id ? (f(), K(C, { key: 0, type: "primary", size: "large", loading: T(_).saving, onClick: N }, { default: a(() => [F(m(h.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"])) : X("", true)])]), default: a(() => [t(dl, { ref_key: "agentFormRef", ref: E, "agent-type": z.value, "show-channel-config": "" }, null, 8, ["agent-type"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), Tl = { class: "flex items-center justify-between mb-4" }, Il = { class: "flex items-center gap-2 w-full" }, Sl = ["src"], Ll = { class: "flex-1 w-0 text-sm flex flex-col" }, Nl = { class: "text-[#2563EB] truncate" }, Ul = ne({ __name: "agent-list-drawer", emits: ["change"], setup(U, { expose: S, emit: M }) {
  const A = v(), _ = v(false), E = de({ channel_types: O, keyword: "", offset: 0, limit: 10 }), P = v([]), z = v(0), u = v(false), r = v({}), D = v([]), i = async ({ data: l = {}, type: s = O } = {}) => {
    const { channel_config: $ = {} } = l;
    E.channel_types = $.channel_type || G.get(s) || O, r.value = l, P.value = [], await re(), _.value = true, h();
  }, y = () => {
    _.value = false;
  }, N = async () => {
    D.value.length || (D.value = await ul.list({ params: { offset: 0, limit: 1e3 } }));
  }, h = () => (E.offset = 0, k()), k = async ({ channel_types: l = E.channel_types } = {}) => {
    u.value = true, await N();
    const { count: s = 0, agents: $ = [] } = await he.list({ params: { ...E, channel_types: l } }).finally(() => {
      u.value = false;
    });
    return P.value = [], await re(), P.value = $.map((V = {}) => (V.user_group_ids = V.user_group_ids || [], V.user_group_names = V.user_group_ids.map((e) => (D.value.find((n) => n.group_id == e) || {}).group_name).filter((e) => e), V)), z.value = s, r.value.agent_total = s, { count: s, agents: $ };
  }, C = (l) => {
    E.limit = l, h();
  }, Y = (l) => {
    E.offset = (l - 1) * E.limit, k();
  }, c = async ({ data: { agent_id: l, enable: s } }) => {
    await he.updateStatus({ data: { agent_id: l, enable: s } }), H.success(window.$t(s ? "action_enable_success" : "action_disable_success"));
  }, w = async ({ data: { agent_id: l } = {} } = {}) => {
    await se.confirm(window.$t("agent_delete_confirm"), window.$t("action_delete")), await he.delete({ data: { agent_id: l } }), H.success(window.$t("action_delete_success")), k();
  }, I = ({ data: l = {} } = {}) => {
    let s = be;
    E.channel_types === G.get(q) && (s = cl), A.value.open({ agent_type: s, data: r.value, agent_id: l.agent_id });
  }, B = ({ action: l = "update" } = {}) => l === "create" ? h() : k();
  return S({ open: i, close: y, loadListData: k, create: ({ data: l = {}, type: s = O } = {}) => {
    const { channel_config: $ = {} } = l;
    E.channel_types = $.channel_type || G.get(s) || O, r.value = l, I();
  } }), (l, s) => {
    const $ = pe, V = oe, e = Ue, n = De, p = sl, L = Ae;
    return f(), x(R, null, [t(L, { title: l.$t(T(te).get(E.channel_types)), modelValue: _.value, "onUpdate:modelValue": s[1] || (s[1] = (o) => _.value = o), size: "70%", "destroy-on-close": "", "append-to-body": "", "close-on-click-modal": false }, { default: a(() => [g("div", Tl, [g("div", null, [t($, { "prefix-icon": T(ll), modelValue: E.keyword, "onUpdate:modelValue": s[0] || (s[0] = (o) => E.keyword = o), placeholder: l.$t("action_search"), size: "large", onChange: h }, null, 8, ["prefix-icon", "modelValue", "placeholder"])]), t(V, { type: "primary", size: "large", onClick: I }, { default: a(() => [F(m(l.$t("action_add")), 1)]), _: 1 })]), t(p, { "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", data: P.value, total: z.value, loading: u.value, page: E.offset + 1, limit: E.limit, onPageSizeChange: C, onPageCurrentChange: Y }, { default: a(() => [t(e, { prop: "date", label: l.$t("module.agent"), "min-width": "180", "show-overflow-tooltip": "" }, { default: a(({ row: o }) => [g("div", Il, [g("img", { class: "flex-none w-8 h-8 rounded-full overflow-hidden", src: o.logo, alt: "" }, null, 8, Sl), g("div", Ll, [g("div", Nl, m(o.name || "--"), 1), ee(g("div", { class: "text-xs text-[#808080] truncate" }, m(o.description || ""), 513), [[Te, o.description]])])])]), _: 1 }, 8, ["label"]), t(e, { label: l.$t("usage_range"), "min-width": "140", "show-overflow-tooltip": "" }, { default: a(({ row: o }) => [g("span", { class: _e(o.user_group_names.length ? "" : "text-[#999]") }, m(o.user_group_names.join("\u3001") || "--"), 3)]), _: 1 }, 8, ["label"]), t(e, { label: l.$t("sort"), width: "80", "show-overflow-tooltip": "" }, { default: a(({ row: o = {} }) => [F(m(o.sort), 1)]), _: 1 }, 8, ["label"]), t(e, { label: l.$t("action_enable"), width: "80" }, { default: a(({ row: o }) => [t(n, { modelValue: o.enable, "onUpdate:modelValue": (d) => o.enable = d, onChange: (d) => c({ data: o }) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), _: 1 }, 8, ["label"]), t(e, { label: l.$t("operation"), width: "120", align: "right", fixed: "right" }, { default: a(({ row: o }) => [t(V, { type: "primary", link: "", onClick: (d) => I({ data: o }) }, { default: a(() => [F(m(l.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), t(V, { type: "primary", link: "", onClick: (d) => w({ data: o }) }, { default: a(() => [F(m(l.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading", "page", "limit"])]), _: 1 }, 8, ["title", "modelValue"]), t(Pl, { ref_key: "agentCreateRef", ref: A, onSuccess: B }, null, 512)], 64);
  };
} }), Bl = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, Rl = { class: "font-semibold text-[#1D1E1F]" }, Ol = { class: "flex flex-wrap gap-4 mt-6" }, Ml = { class: "flex items-center gap-4 p-5 box-border" }, Yl = { class: "text-[#1B2B51] font-semibold" }, jl = { class: "text-xs text-[#4F5052] px-5 box-border" }, Hl = { class: "w-full h-[44px] flex border-t box-border" }, ql = { class: "w-full flex items-center font-semibold text-[#1D1E1F] mt-10" }, Gl = { class: "flex-1" }, Jl = { class: "w-full flex flex-col gap-4 mt-6" }, Kl = { class: "flex items-center gap-4" }, Wl = ["src"], Zl = { class: "flex-1 text-[#1B2B51] font-semibold" }, Ql = { class: "w-full flex flex-col bg-white rounded overflow-hidden gap-4 mt-6 px-5" }, Xl = { key: 0, class: "text-[#9A9A9A] text-sm py-5" }, et = { class: "text-[#4F5052] text-sm" }, lt = { class: "w-full flex flex-col gap-y-5 box-border overflow-auto" }, tt = ["src"], at = { class: "flex-none text-sm text[#1D1E1F]" }, ot = ne({ __name: "index", setup(U) {
  const { isLocalEnv: S, isOpLocalEnv: M } = Je(), A = [{ value: W, label: te.get(W), icon: "coze", connected: false, authed_time: "", client_id: "", client_secret: "" }, { value: ae, label: te.get(ae), icon: "app_builder", connected: false, authed_time: "", client_id: "", client_secret: "" }, { value: O, label: te.get(O), icon: "dify", connected: false, authed_time: "", client_id: "", client_secret: "", agent_total: 0, channel_config: {}, channel_loading: true }, { value: q, label: te.get(q), icon: "53ai", connected: false, authed_time: "", client_id: "", client_secret: "", agent_total: 0, channel_config: {}, channel_loading: true }, { value: ue, label: te.get(ue), icon: "fast-gpt", connected: false, authed_time: "", client_id: "", client_secret: "" }], _ = v(), E = v(), P = v(), z = v(), u = v(ye(A)), r = v(false);
  v([{ value: "search_online", label: "module.platform_search_online", desc: "module.platform_search_online_desc", icon: "search-online", enable: true, api_key: "sk-5f90820c429943bb99aaa18804a0e385" }]);
  const D = v([]), i = v(false), y = async () => {
    r.value = true;
    const e = await ge.list().finally(() => {
      r.value = false;
    });
    u.value = ye(A).map((n) => {
      const p = e.find((o) => n.value == o.provider_type), L = u.value.find((o) => n.value == o.value);
      return [O, q].includes(n.value) && L ? L : (p && (n = { ...n, ...p }, n.connected = true, n.client_id = n.configs.client_id || "", n.client_secret = n.configs.client_secret || ""), n);
    });
  }, N = ({ data: e = {}, count: n = 0 } = {}) => {
    const p = u.value.find((L) => L.value == e.value);
    p && (p.agent_total = n);
  }, h = async () => {
    i.value = true;
    const e = await J.list().finally(() => {
      i.value = false;
    });
    let n = e.findIndex((o) => o.channel_type == G.get(O));
    const p = u.value.find((o) => o.value == O);
    if (n > -1) {
      const o = (e.splice(n, 1) || [])[0];
      p.channel_config = o || {};
      const { count: d = 0 } = await z.value.loadListData({ channel_types: o.channel_type });
      p.agent_total = d;
    }
    p.channel_loading = false, n = e.findIndex((o) => o.channel_type == G.get(q));
    const L = u.value.find((o) => o.value == q);
    if (n > -1) {
      const o = (e.splice(n, 1) || [])[0];
      L.channel_config = o || {};
      const { count: d = 0 } = await z.value.loadListData({ channel_types: o.channel_type });
      L.agent_total = d;
    }
    L.channel_loading = false, D.value = e.filter((o = {}) => ![G.get(O), G.get(q)].includes(+o.channel_type)).map((o = {}) => (o.deleting = false, o));
  }, k = () => {
    y(), h();
  }, C = ({ data: e = {} } = {}) => {
    if (e.value === ue)
      return H.warning(window.$t("feature_coming_soon"));
    if ([W].includes(e.value) && (S.value || M.value))
      return _l({ title: window.$t("local_config_limited_tip"), content: window.$t("local_config_limited_desc", { url: window.location.href }), confirmButtonText: window.$t("know_it"), showCancelButton: false }).open();
    switch (e.value) {
      case O:
      case q:
        z.value.open({ data: e, type: e.value });
        break;
      default:
        _.value.open({ data: e });
    }
  }, Y = ({ data: e = {} } = {}) => {
    z.value.create({ data: e, type: e.value });
  }, c = async ({ data: e = {} } = {}) => {
    e.provider_id && (await se.confirm(window.$t("module.platform_delete_confirm")), await ge.delete({ data: { provider_id: e.provider_id } }), H.success(window.$t("action_delete_success")), y());
  }, w = ({ data: e = {} } = {}) => {
    P.value.open({ data: e });
  }, I = async ({ data: e = {}, index: n = 0 } = {}) => {
    await se.confirm(window.$t("module.platform_model_delete_confirm")), e.deleting = true, await J.delete({ data: { channel_id: e.channel_id } }).finally(() => {
      e.deleting = false;
    }), h(), H.success(window.$t("action_delete_success"));
  };
  let B = 0, l = 0;
  const s = ({ data: e = {}, index: n = 0, parent_data: p = {}, parent_index: L = 0 } = {}) => {
    B = n, l = L, P.value.open({ data: { ...p, ...e, id: e.value, name: e.label }, action: "model_edit" });
  }, $ = async ({ data: e = {}, index: n = 0, parent_data: p = {}, parent_index: L = 0 } = {}) => {
    const o = p.model_options.length === 1;
    await se.confirm(o ? window.$t("module.platform_model_delete_confirm_v2") : window.$t("module.platform_model_delete_confirm")), o ? (i.value = true, await J.delete({ data: { channel_id: p.channel_id } }).finally(() => {
      i.value = false;
    }), h()) : (p.model_options.splice(n, 1), p.models = p.model_options.map((d) => d.value), await J.save({ data: { channel_id: p.channel_id, key: p.api_key, base_url: p.base_url, config: p.config || {}, models: p.model_options.map((d) => d.value).join(","), name: p.type } })), H.success(window.$t("action_delete_success"));
  }, V = ({ action: e = "", data: n = {} } = {}) => {
    if (e === "model_edit") {
      D.value[l].model_options[B].label = n.name;
      return;
    }
    h();
  };
  return Qe(() => {
    k(), Ce.on("user-login-success", k);
  }), Xe(() => {
    Ce.off("user-login-success", k);
  }), (e, n) => {
    const p = Ze, L = Ke, o = oe, d = Be, le = Fe, Ie = Re, Se = Oe, Le = Me, me = ze;
    return f(), x(R, null, [t(Le, { class: "px-[60px] py-8" }, { default: a(() => [t(p, { title: e.$t("module.platform") }, null, 8, ["title"]), g("div", Bl, [g("h2", Rl, m(e.$t("module.platform_header_title")), 1), ee((f(), x("ul", Ol, [(f(true), x(R, null, ie(u.value, (b) => ee((f(), x("li", { key: b.value, class: _e(["flex-none min-w-[246px] w-[24%] h-[178px] flex flex-col border rounded box-border overflow-hidden", [b.value === T(ue) ? "opacity-50" : ""]]) }, [g("div", Ml, [t(L, { class: "flex-none", name: b.icon, width: "40", height: "40" }, null, 8, ["name"]), g("div", Yl, m(e.$t(b.label)), 1)]), g("div", jl, [[T(O), T(q)].includes(b.value) ? (f(), x(R, { key: 0 }, [F(m(e.$t("connecting_agent_total", { total: b.agent_total })), 1)], 64)) : b.connected && b.authed_time ? (f(), x(R, { key: 1 }, [F(m(e.$t("connected")) + " \xB7 " + m(e.$t("authorized_at")) + " " + m(b.authed_time.slice(0, 16)), 1)], 64)) : b.connected ? (f(), x(R, { key: 2 }, [F(m(e.$t("connecting")), 1)], 64)) : (f(), x(R, { key: 3 }, [F(m(e.$t("not_connected")), 1)], 64))]), n[0] || (n[0] = g("div", { class: "flex-1 w-full" }, null, -1)), g("div", Hl, [[T(O), T(q)].includes(b.value) ? (f(), x(R, { key: 0 }, [t(o, { class: "flex-1 h-[46px] text-[#3664EF] !border-none !outline-none rounded-none", type: "text", size: "small", onClick: j((Z) => C({ data: b }), ["stop"]) }, { default: a(() => [F(m(e.$t("action_manage")), 1)]), _: 2 }, 1032, ["onClick"]), t(d, { class: "!h-full", direction: "vertical" }), t(o, { class: "flex-1 h-[46px] text-[#919499] !border-none !outline-none rounded-none", type: "text", size: "small", onClick: j((Z) => Y({ data: b }), ["stop"]) }, { default: a(() => [F(m(e.$t("action_add")), 1)]), _: 2 }, 1032, ["onClick"])], 64)) : b.connected ? (f(), x(R, { key: 1 }, [t(o, { class: "flex-1 h-[46px] text-[#3664EF] !border-none !outline-none rounded-none", type: "text", size: "small", onClick: j((Z) => C({ data: b }), ["stop"]) }, { default: a(() => [F(m(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), t(d, { class: "!h-full", direction: "vertical" }), t(o, { class: "flex-1 h-[46px] text-[#919499] !border-none !outline-none rounded-none", type: "text", size: "small", onClick: j((Z) => c({ data: b }), ["stop"]) }, { default: a(() => [F(m(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])], 64)) : (f(), K(o, { key: 2, class: "flex-1 h-[46px] bg-[#F3F6FE] text-[#3664EF] !border-none !outline-none rounded-none", type: "default", size: "small", onClick: j((Z) => C({ data: b }), ["stop"]) }, { default: a(() => [F(m(e.$t("action_authorize")), 1)]), _: 2 }, 1032, ["onClick"]))])], 2)), [[me, b.channel_loading]])), 128))])), [[me, r.value]]), g("h2", ql, [g("div", Gl, m(e.$t("module.platform_model")), 1)]), ee((f(), x("ul", Jl, [(f(true), x(R, null, ie(D.value, (b, Z) => (f(), x("li", { key: b.value, class: "w-full p-5 border rounded box-border overflow-hidden bg-[#F8F9FA]" }, [g("div", Kl, [g("img", { class: "flex-none w-[40px] h-[40px] object-contain rounded-full overflow-hidden", src: e.$getRealPath({ url: `/images/platform/${b.icon}.png` }) }, null, 8, Wl), g("div", Zl, m(e.$t(b.label)), 1), t(o, { class: "flex-none !px-5", type: "default", size: "large", onClick: j((Q) => w({ data: b }), ["stop"]) }, { default: a(() => [F(m(e.$t("action_setting")), 1)]), _: 2 }, 1032, ["onClick"]), t(o, { class: "flex-none !ml-0 !px-3", type: "default", size: "large", loading: b.deleting, onClick: j((Q) => I({ data: b, index: Z }), ["stop"]) }, { default: a(() => [t(le, { size: "14" }, { default: a(() => [t(T(tl))]), _: 1 })]), _: 2 }, 1032, ["loading", "onClick"])]), g("div", Ql, [!b.model_options || !b.model_options.length ? (f(), x("div", Xl, m(e.$t("module.platform_model_models_empty")), 1)) : (f(), K(Se, { key: 1, "model-value": ["models"], class: "w-full !border-none" }, { default: a(() => [t(Ie, { name: "models" }, { title: a(() => [g("span", et, m(e.$t("module.platform_model_models_total", { total: b.model_options.length })), 1)]), default: a(() => [g("ul", lt, [(f(true), x(R, null, ie(b.model_options, (Q, xe) => (f(), x("li", { key: Q.value, class: "w-full box-border flex items-center gap-2" }, [Q.icon ? (f(), x("img", { key: 0, class: "flex-none w-[20px] h-[20px] object-contain", src: e.$getRealPath({ url: `/images/platform/${Q.icon}.png` }) }, null, 8, tt)) : X("", true), g("label", at, m(Q.label), 1), t(le, { class: "flex-none cursor-pointer hover:opacity-70", size: "14", onClick: (Ne) => s({ data: Q, index: xe, parent_data: b, parent_index: Z }) }, { default: a(() => [t(T(al))]), _: 2 }, 1032, ["onClick"]), n[1] || (n[1] = g("div", { class: "flex-1" }, null, -1)), t(le, { class: "flex-none cursor-pointer hover:opacity-70", size: "16", color: "#F04F4D", onClick: (Ne) => $({ data: Q, index: xe, parent_data: b, parent_index: Z }) }, { default: a(() => [t(T(ol))]), _: 2 }, 1032, ["onClick"])]))), 128))])]), _: 2 }, 1024)]), _: 2 }, 1024))])]))), 128)), t(o, { class: "flex-none !border-none w-[106px]", type: "primary", plain: "", size: "large", onClick: w }, { default: a(() => [F(" + " + m(e.$t("action_add")), 1)]), _: 1 })])), [[me, i.value]])])]), _: 1 }), t(gl, { ref_key: "authorize_ref", ref: _, onSuccess: y }, null, 512), t(bl, { ref_key: "tool_setting_ref", ref: E }, null, 512), t(Dl, { ref_key: "model_setting_ref", ref: P, onSuccess: V }, null, 512), t(Ul, { ref_key: "agent_list_drawer_ref", ref: z, onChange: N }, null, 512)], 64);
  };
} });
const jt = We(ot, [["__scopeId", "data-v-a78d9d5b"]]);
export {
  jt as default
};
