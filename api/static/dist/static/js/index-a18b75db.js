import { aP as De, b1 as ue, c0 as He, bp as ze, bs as Pe, br as qe, b5 as Ye, ce as Ge, r as x, cX as Ce, $ as Ze, ax as Je, aU as be, Y as O, bA as Ee, bq as We, bB as Qe, y as X, b as m, c as E, s as _e, q as Z, u, a$ as Ne, bm as Xe, c6 as el, aI as ll, dc as tl, d as h, L as P, t as f, f as a, w as s, j as W, ao as ol, G as ye, by as al, x as Y, m as ae, p as Le, c$ as nl, b0 as sl, cl as il, ar as rl, at as J, aq as cl, U as Fe, Z as ie, P as N, e as te, bY as dl, K as oe, F as K, aG as ul, n as Se, aL as _l, a9 as G, ab as se, a5 as pe, ag as we, ah as $e, a4 as re, a6 as ke, I as Be, ai as he, dd as pl, al as ce, au as fe, de as Ve, C as ml, a0 as fl, an as vl, df as de, o as hl, N as Ae, a as gl, dg as bl, a8 as yl, bZ as wl, b$ as $l } from "./index-8579fe4a.js";
import { v as Ue } from "./el-loading-8747b309.js";
import { _ as kl } from "./index-ad57f5b2.js";
import { E as xl } from "./el-divider-7d014453.js";
import { _ as Cl } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { p as ge } from "./provider-31cc620c.js";
import { E as Te } from "./el-switch-1a77f9ca.js";
import { E as El } from "./el-drawer-393896dd.js";
import { E as Fl, _ as Vl } from "./el-table-column-376475e4.js";
import "./el-checkbox-a21716fc.js";
import "./el-tag-0b6baecb.js";
import { _ as Al } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { a as ve } from "./agent-f71520b7.js";
import { s as Il } from "./subscription-ce932ddf.js";
import { T as Dl } from "./setup-bc7bb42e.js";
import "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./sortable.esm-7ba019b6.js";
import "./group-39bff2fe.js";
const Ie = (b) => qe(b) || Ye(b) || Ge(b), zl = De({ accordion: Boolean, modelValue: { type: ue([Array, String, Number]), default: () => He([]) }, expandIconPosition: { type: ue([String]), default: "right" }, beforeCollapse: { type: ue(Function) } }), Pl = { [ze]: Ie, [Pe]: Ie }, Oe = Symbol("collapseContextKey"), Nl = "ElCollapse", Ll = (b, y) => {
  const C = x(Ce(b.modelValue)), w = ($) => {
    C.value = $;
    const g = b.accordion ? C.value[0] : C.value;
    y(ze, g), y(Pe, g);
  }, r = ($) => {
    if (b.accordion)
      w([C.value[0] === $ ? "" : $]);
    else {
      const g = [...C.value], d = g.indexOf($);
      d > -1 ? g.splice(d, 1) : g.push($), w(g);
    }
  }, p = async ($) => {
    const { beforeCollapse: g } = b;
    if (!g) {
      r($);
      return;
    }
    const d = g($);
    [Ee(d), We(d)].includes(true) || Qe(Nl, "beforeCollapse must return type `Promise<boolean>` or `boolean`"), Ee(d) ? d.then((F) => {
      F !== false && r($);
    }).catch((F) => {
    }) : d && r($);
  };
  return Ze(() => b.modelValue, () => C.value = Ce(b.modelValue), { deep: true }), Je(Oe, { activeNames: C, handleItemClick: p }), { activeNames: C, setActiveNames: w };
}, Sl = (b) => {
  const y = be("collapse");
  return { rootKls: O(() => [y.b(), y.b(`icon-position-${b.expandIconPosition}`)]) };
}, Bl = X({ name: "ElCollapse" }), Ul = X({ ...Bl, props: zl, emits: Pl, setup(b, { expose: y, emit: C }) {
  const w = b, { activeNames: r, setActiveNames: p } = Ll(w, C), { rootKls: $ } = Sl(w);
  return y({ activeNames: r, setActiveNames: p }), (g, d) => (m(), E("div", { class: Z(u($)) }, [_e(g.$slots, "default")], 2));
} });
var Tl = Ne(Ul, [["__file", "collapse.vue"]]);
const Ol = De({ title: { type: String, default: "" }, name: { type: ue([String, Number]), default: void 0 }, icon: { type: Xe, default: el }, disabled: Boolean }), Rl = (b) => {
  const y = ll(Oe), { namespace: C } = be("collapse"), w = x(false), r = x(false), p = tl(), $ = O(() => p.current++), g = O(() => {
    var _;
    return (_ = b.name) != null ? _ : `${C.value}-id-${p.prefix}-${u($)}`;
  }), d = O(() => y == null ? void 0 : y.activeNames.value.includes(u(g)));
  return { focusing: w, id: $, isActive: d, handleFocus: () => {
    setTimeout(() => {
      r.value ? r.value = false : w.value = true;
    }, 50);
  }, handleHeaderClick: (_) => {
    if (b.disabled)
      return;
    const A = _.target;
    (A == null ? void 0 : A.closest("input, textarea, select")) || (y == null ? void 0 : y.handleItemClick(u(g)), w.value = false, r.value = true);
  }, handleEnterClick: (_) => {
    const A = _.target;
    (A == null ? void 0 : A.closest("input, textarea, select")) || (_.preventDefault(), y == null ? void 0 : y.handleItemClick(u(g)));
  } };
}, Kl = (b, { focusing: y, isActive: C, id: w }) => {
  const r = be("collapse"), p = O(() => [r.b("item"), r.is("active", u(C)), r.is("disabled", b.disabled)]), $ = O(() => [r.be("item", "header"), r.is("active", u(C)), { focusing: u(y) && !b.disabled }]), g = O(() => [r.be("item", "arrow"), r.is("active", u(C))]), d = O(() => [r.be("item", "title")]), v = O(() => r.be("item", "wrap")), F = O(() => r.be("item", "content")), i = O(() => r.b(`content-${u(w)}`)), _ = O(() => r.b(`head-${u(w)}`));
  return { itemTitleKls: d, arrowKls: g, headKls: $, rootKls: p, itemWrapperKls: v, itemContentKls: F, scopedContentId: i, scopedHeadId: _ };
}, Ml = X({ name: "ElCollapseItem" }), jl = X({ ...Ml, props: Ol, setup(b, { expose: y }) {
  const C = b, { focusing: w, id: r, isActive: p, handleFocus: $, handleHeaderClick: g, handleEnterClick: d } = Rl(C), { arrowKls: v, headKls: F, rootKls: i, itemTitleKls: _, itemWrapperKls: A, itemContentKls: U, scopedContentId: T, scopedHeadId: L } = Kl(C, { focusing: w, isActive: p, id: r });
  return y({ isActive: p }), (S, z) => (m(), E("div", { class: Z(u(i)) }, [h("div", { id: u(L), class: Z(u(F)), "aria-expanded": u(p), "aria-controls": u(T), "aria-describedby": u(T), tabindex: S.disabled ? -1 : 0, role: "button", onClick: u(g), onKeydown: al(Y(u(d), ["stop"]), ["space", "enter"]), onFocus: u($), onBlur: (j) => w.value = false }, [h("span", { class: Z(u(_)) }, [_e(S.$slots, "title", { isActive: u(p) }, () => [P(f(S.title), 1)])], 2), _e(S.$slots, "icon", { isActive: u(p) }, () => [a(u(ye), { class: Z(u(v)) }, { default: s(() => [(m(), W(ol(S.icon)))]), _: 1 }, 8, ["class"])])], 42, ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex", "onClick", "onKeydown", "onFocus", "onBlur"]), a(u(nl), null, { default: s(() => [ae(h("div", { id: u(T), role: "region", class: Z(u(A)), "aria-hidden": !u(p), "aria-labelledby": u(L) }, [h("div", { class: Z(u(U)) }, [_e(S.$slots, "default")], 2)], 10, ["id", "aria-hidden", "aria-labelledby"]), [[Le, u(p)]])]), _: 3 })], 2));
} });
var Re = Ne(jl, [["__file", "collapse-item.vue"]]);
const Hl = sl(Tl, { CollapseItem: Re }), ql = il(Re), Yl = rl("channel-store", { state: () => ({ channel_list: [], model_list_map: /* @__PURE__ */ new Map() }), actions: { async loadListData({ reset: b = true } = {}) {
  return (b || !this.channel_list.length) && (this.channel_list = await J.list()), JSON.parse(JSON.stringify(this.channel_list));
}, async save({ data: b = {} } = {}) {
  return J.save({ data: b });
}, async delete({ data: { channel_id: b } }) {
  return J.delete({ data });
}, async loadModelList({ reset: b = false, owner: y = "all" } = {}) {
  if (b && this.model_list_map.set(y, []), console.log(y), !this.model_list_map.get(y) || !this.model_list_map.get(y).length) {
    const C = await J.modelList({ params: { owner: y } });
    C.forEach((w = {}) => {
      const r = this.model_list_map.get(w.owned_by) || [];
      r.push(w), this.model_list_map.set(w.owned_by, r);
    }), this.model_list_map.set("all", C);
  }
  return JSON.parse(JSON.stringify(this.model_list_map.get(y)));
}, async loadCozeWorkspaceList() {
  return await J.cozeWorkspaceList();
}, async loadCozeBotList({ params: { workspace_id: b } }) {
  return await J.cozeBotList({ params: { workspace_id: b } });
} } });
const Gl = { class: "w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-4 box-border text-sm text-[#4F5052]" }, Zl = ["innerHTML"], Jl = { key: 0, class: "text-center text-sm text-[#9A9A9A]" }, Wl = { class: "py-4 flex items-center justify-center" }, Ql = X({ __name: "authorize-dialog", emits: ["success"], setup(b, { expose: y, emit: C }) {
  const w = C, r = cl(), p = Fe(null), $ = Fe(null), g = x(false), d = ie({ client_id: "", client_secret: "", api_key: "", base_url: "", access_token: "" }), v = x({}), F = x(false), i = O(() => {
    const e = r.info;
    return `${ul}/api/callback/cozecn/auth/${e.eid}`;
  }), _ = { [N.APP_BUILDER]: { i18n_key: "app_builder", tip: { url: "https://qianfan.cloud.baidu.com/appbuilder" }, fields: [{ label: "module.platform_tool_api_key", prop: "api_key", placeholder: "module.platform_tool_api_key_placeholder" }], transformData: (e) => ({ access_token: e.api_key }) }, [N.COZE_CN]: { i18n_key: "coze_cn", tip: { url: "https://www.coze.cn/open/oauth/apps", needRedirectUrl: true }, fields: [{ label: "module.platform_auth_client_id", prop: "client_id", placeholder: "module.platform_auth_client_id_placeholder" }, { label: "module.platform_auth_client_secret", prop: "client_secret", placeholder: "module.platform_auth_client_secret_placeholder" }], transformData: (e) => ({ configs: { client_id: e.client_id, client_secret: e.client_secret } }), needsConfirmation: (e, l) => !l.provider_id || e.client_id !== l.client_id || e.client_secret !== l.client_secret, getAuthUrl: (e, l) => `https://www.coze.cn/api/permission/oauth2/authorize?response_type=code&client_id=${e.client_id}&redirect_uri=${encodeURIComponent(l)}&state=coze_auth` }, [N["53AI"]]: { i18n_key: "53ai", tip: { url: "https://www.53ai.com/" }, fields: [{ label: "module.platform_auth_url", prop: "base_url", placeholder: "module.platform_tool_api_key_placeholder" }, { label: "module.platform_auth_secret", prop: "access_token", placeholder: "module.platform_tool_api_key_placeholder" }], setFormData: (e) => {
    e.base_url = e.base_url.trim() || "https://api.53ai.com", e.access_token = e.access_token.trim();
  }, transformData: (e) => ({ base_url: e.base_url, access_token: e.access_token }) } }, A = O(() => {
    const e = v.value.value;
    if (typeof e != "number")
      return "";
    const l = _[e];
    if (!l)
      return "";
    const n = { url: `<a class='text-[#5A6D9E]' href='${l.tip.url}' target='_blank'>${l.tip.url}</a>` };
    return l.tip.needRedirectUrl && (n.redirect_url = `<span class='text-[#F04F4D]'>${i.value}</span><span class='copy-hook'></span>`, n.client_id = `<span class='text-[#F04F4D]'>${window.$t("module.platform_auth_client_id")}</span>`, n.client_secret = `<span class='text-[#F04F4D]'>${window.$t("module.platform_auth_client_secret")}</span>`), window.$t(`platform_auth.${l.i18n_key}.tip`, n);
  }), U = O(() => {
    var _a;
    const e = v.value.value;
    return typeof e != "number" ? [] : ((_a = _[e]) == null ? void 0 : _a.fields.map((n) => ({ label: window.$t(n.label), prop: n.prop, placeholder: window.$t(n.placeholder) }))) || [];
  }), T = O(() => {
    const e = {}, l = v.value.value;
    return typeof l == "number" && _[l] && _[l].fields.forEach((n) => {
      e[n.prop] = [{ validator: (I, c, V) => {
        if (!(c || "").trim())
          return V(new Error(window.$t(n.placeholder)));
        V();
      }, trigger: "blur" }];
    }), e;
  }), L = () => {
    Object.assign(d, { client_id: "", client_secret: "", api_key: "", base_url: "", access_token: "" });
  }, S = async ({ data: e = {} } = {}) => {
    var _a, _b, _c;
    d.client_id = e.client_id || "", d.client_secret = e.client_secret || "", d.api_key = e.access_token || "", d.base_url = e.base_url || "", d.access_token = e.access_token || "";
    const l = _[e.value];
    (l == null ? void 0 : l.setFormData) && l.setFormData(d), v.value = e, g.value = true, await Se();
    const n = e.value;
    typeof n == "number" && n === N.COZE_CN && ((_a = p.value) == null ? void 0 : _a.$el) && ((_c = (_b = $.value) == null ? void 0 : _b.$el.querySelector(".copy-hook")) == null ? void 0 : _c.appendChild(p.value.$el));
  }, z = () => {
    g.value = false, L();
  }, j = async (e) => {
    e && (await _l(e), G.success(window.$t("action_copy_success")));
  }, Q = async (e, l) => {
    const n = window.open(e, "_blank", "width=1000,height=800");
    window.addEventListener("message", ({ data: I = {} }) => {
      I.provider_type === l && (n == null ? void 0 : n.close(), G.success(window.$t("action_authorize_success")), w("success"));
    });
  }, ee = async () => {
    if (!$.value || !await $.value.validate())
      return;
    const l = v.value.value, n = _[l];
    if (!n)
      return;
    const I = { configs: {}, name: v.value.label, provider_type: l, provider_id: v.value.provider_id, ...n.transformData(d) };
    n.needsConfirmation && n.needsConfirmation(d, v.value) && await se.confirm(window.$t("module.platform_auth_coze_confirm"), window.$t("tip"));
    try {
      if (F.value = true, await ge.save({ data: I }), n.getAuthUrl && !v.value.is_authorized) {
        const c = n.getAuthUrl(d, i.value);
        await Q(c, l);
      }
      G.success(window.$t("action_save_success")), w("success"), z();
    } catch (c) {
      console.error("Save failed:", c), G.error(window.$t("action_save_failed"));
    } finally {
      F.value = false;
    }
  };
  return y({ open: S, close: z, reset: L }), (e, l) => {
    const n = pe, I = we, c = $e, V = re, R = ke;
    return m(), W(R, { modelValue: g.value, "onUpdate:modelValue": l[1] || (l[1] = (o) => g.value = o), title: e.$t("action_authorize") + e.$t(v.value.label || ""), "close-on-click-modal": false, width: "720px", "destroy-on-close": "", "append-to-body": "", onClose: z }, { footer: s(() => [v.value.value === u(N).COZE_CN ? (m(), E("div", Jl, f(e.$t("platform_auth.coze_cn.tip_1")), 1)) : te("", true), h("div", Wl, [a(V, { class: "w-[96px] h-[36px]", type: "primary", loading: F.value, onClick: ee }, { default: s(() => [P(f(e.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"]), a(V, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: Y(z, ["stop"]) }, { default: s(() => [P(f(e.$t("action_cancel")), 1)]), _: 1 })])]), default: s(() => [a(c, { ref_key: "form_ref", ref: $, model: d, rules: T.value, "label-position": "top" }, { default: s(() => [h("div", Gl, [h("div", { class: "whitespace-pre-wrap leading-7", innerHTML: A.value }, null, 8, Zl), v.value.value === u(N).COZE_CN ? (m(), W(u(ye), { key: 0, ref_key: "copy_ref", ref: p, class: "cursor-pointer ml-1 mt-1 text-[#4F5052] hover:text-[#3664EF]", size: 14, onClick: l[0] || (l[0] = (o) => j(i.value)) }, { default: s(() => [a(u(dl))]), _: 1 }, 512)) : te("", true)]), (m(true), E(K, null, oe(U.value, (o) => (m(), W(I, { key: o.prop, label: o.label, prop: o.prop }, { default: s(() => [a(n, { modelValue: d[o.prop], "onUpdate:modelValue": (k) => d[o.prop] = k, size: "large", placeholder: o.placeholder }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), _: 2 }, 1032, ["label", "prop"]))), 128))]), _: 1 }, 8, ["model", "rules"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} });
const Xl = Be(Ql, [["__scopeId", "data-v-4769c99b"]]), et = { class: "py-4 flex items-center justify-center" }, lt = X({ __name: "tool-setting-dialog", setup(b, { expose: y }) {
  const C = x(), w = x(false), r = ie({ api_key: "" }), p = x({}), $ = ({ rule: i, value: _, callback: A, message: U } = {}) => {
    if (_ = (_ || "").trim(), !_)
      return A(new Error(window.$t(U)));
    A();
  }, g = ({ data: i = {} } = {}) => {
    r.api_key = i.api_key || "", p.value = i, w.value = true;
  }, d = () => {
    w.value = false, v();
  }, v = () => {
    r.api_key = "";
  }, F = () => {
    C.value.validate((i) => {
      i && (G.success(window.$t("action_save_success")), d());
    });
  };
  return y({ open: g, close: d, reset: v }), (i, _) => {
    const A = pe, U = we, T = $e, L = re, S = ke;
    return m(), W(S, { modelValue: w.value, "onUpdate:modelValue": _[1] || (_[1] = (z) => w.value = z), title: i.$t("action_setting") + i.$t(p.value.label || ""), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", onClose: d }, { footer: s(() => [h("div", et, [a(L, { class: "w-[96px] h-[36px]", type: "primary", onClick: F }, { default: s(() => [P(f(i.$t("action_confirm")), 1)]), _: 1 }), a(L, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: Y(d, ["stop"]) }, { default: s(() => [P(f(i.$t("action_cancel")), 1)]), _: 1 })])]), default: s(() => [a(T, { ref_key: "form_ref", ref: C, model: r, "label-position": "top", onSubmit: Y(() => {
    }, ["prevent"]) }, { default: s(() => [a(U, { label: i.$t("module.platform_tool_api_key"), prop: "api_key", rules: [{ required: true, message: i.$t("module.platform_tool_api_key_placeholder") }, { validator: (z, j, Q) => $({ rule: z, value: j, callback: Q, message: "module.platform_tool_api_key_placeholder" }), trigger: "blur" }] }, { default: s(() => [a(A, { modelValue: r.api_key, "onUpdate:modelValue": _[0] || (_[0] = (z) => r.api_key = z), size: "large", placeholder: i.$t("module.platform_tool_api_key_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), tt = { class: "flex flex-col gap-3 mb-8 pb-1 overflow-auto max-h-[60vh] pr-1" }, ot = ["src"], at = { class: "flex-1 text-[#1B2B51] font-semibold" }, nt = { class: "w-full max-h-[42vh] min-h-[200px] pr-1 flex flex-col gap-2 box-border overflow-auto" }, st = { key: 0, class: "text-[#9A9A9A] w-full text-center py-4" }, it = ["src"], rt = { class: "text-sm text[#1D1E1F]" }, ct = { class: "pb-4 flex items-center justify-center" }, dt = { class: "pb-4 flex items-center justify-center" }, ut = X({ __name: "model-setting-dialog", emits: ["success"], setup(b, { expose: y, emit: C }) {
  const w = C, r = Yl(), p = x(), $ = x(), g = x(false), d = x(false), v = x(false), F = x(false), i = ie({ type: "", api_key: "", organization_id: "", base_url: "", models: [] }), _ = x({}), A = x(he(pl)), U = x([]), T = x(false), L = ie({ id: "", name: "" }), S = async ({ data: e = {}, action: l = "" } = {}) => {
    if (l === "model_edit") {
      L.id = e.id || e.value || "", L.name = e.name || e.label || "", T.value = true, _.value = e;
      return;
    }
    if (!e.channel_id && !e.value) {
      v.value = true, d.value = true;
      const c = await r.loadListData({ reset: true }).finally(() => {
        v.value = false;
      });
      A.value.forEach((V) => {
        V.is_add = c.some((R) => R.name === V.value);
      });
      return;
    }
    i.type = e.type || e.value || "", i.api_key = e.api_key || "", i.base_url = e.base_url || "", i.organization_id = e.organization_id || "", i.models = typeof e.models == "string" && e.models.split(",") || e.models || [], _.value = e, g.value = true, v.value = true;
    const n = await r.loadModelList({ owner: i.type }).finally(() => {
      v.value = false;
    }), { config: { model_alias_map: I = {} } = {} } = e;
    U.value = n.map((c) => (c.value = c.id || "", c.label = I[c.value] || c.label || c.id || "", c.checked = i.models.includes(c.value) || false, l === "add" && (c.checked = true), c.icon = c.icon || "", c)), fe.DEEPSEEK === i.type && (i.base_url || (i.base_url = "https://api.deepseek.com"));
  }, z = ({ action: e = "" } = {}) => {
    e === "model_edit" && (T.value = false), e === "add" && (d.value = false), g.value = false, j({ action: e });
  }, j = ({ action: e = "" } = {}) => {
    if (e === "model_edit") {
      L.id = "", L.name = "";
      return;
    }
    i.type = "", i.api_key = "", i.base_url = "", i.organization_id = "", i.base_url = "", i.models = [];
  }, Q = ({ data: e = {} } = {}) => {
    S({ data: e, action: "add" });
  }, ee = ({ action: e = "" } = {}) => {
    if (e === "model_edit") {
      $.value.validate(async (l) => {
        if (!l)
          return;
        let { id: n = "", name: I = "" } = L;
        I = I.trim();
        const c = _.value.config || {};
        c.model_alias_map = { ...c.model_alias_map || {}, [n]: I }, c.model_alias_map[n] || delete c.model_alias_map[n], Object.keys(c.model_alias_map).length || delete c.model_alias_map;
        const V = { channel_id: _.value.channel_id, key: _.value.api_key, base_url: _.value.base_url, config: c, models: _.value.models, name: _.value.type };
        F.value = true, await r.save({ data: V }).finally(() => {
          F.value = false;
        }), w("success", { action: e, data: { id: n, name: I || n } }), G.success(window.$t("action_save_success")), z({ action: e });
      });
      return;
    }
    p.value.validate(async (l) => {
      if (!l)
        return;
      const { type: n = "", api_key: I = "", base_url: c = "" } = i;
      A.value.find((R) => R.value === n);
      const V = { channel_id: _.value.channel_id, key: I, base_url: c, config: _.value.config || {}, models: U.value.filter((R) => R.checked).map((R) => R.value).join(","), name: n };
      e = V.channel_id ? "edit" : "add", F.value = true, await r.save({ data: V }).finally(() => {
        F.value = false;
      }), w("success", { action: e, data: V }), G.success(window.$t("action_save_success")), z({ action: e });
    });
  };
  return y({ open: S, close: z, reset: j }), (e, l) => {
    const n = re, I = ke, c = pe, V = we, R = Te, o = $e, k = Ue;
    return m(), E(K, null, [a(I, { modelValue: d.value, "onUpdate:modelValue": l[0] || (l[0] = (t) => d.value = t), title: e.$t("module.platform_model_add"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", onClose: l[1] || (l[1] = (t) => z({ action: "add" })) }, { default: s(() => [ae((m(), E("ul", tt, [(m(true), E(K, null, oe(A.value, (t) => (m(), E("li", { key: t.value, class: Z(["flex items-center gap-4 py-5 px-6 border rounded box-border", [t.add_visible ? "" : "opacity-50"]]) }, [h("img", { class: "flex-none w-[40px] h-[40px] object-contain", src: e.$getRealPath({ url: `/images/platform/${t.icon}.png` }) }, null, 8, ot), h("div", at, f(e.$t(t.label)), 1), t.add_visible ? (m(), W(n, { key: 0, class: Z(["flex-none !border-none !px-5 text-[#3664EF] bg-[#F6F7F8]", t.is_add ? "!text-[#9A9A9A] !bg-[#F6F7F8]" : ""]), type: "primary", plain: "", size: "large", disabled: t.is_add, onClick: (D) => Q({ data: t }) }, { default: s(() => [P(f(e.$t(t.is_add ? "action_add_success" : "action_add")), 1)]), _: 2 }, 1032, ["class", "disabled", "onClick"])) : te("", true)], 2))), 128))])), [[k, v.value]])]), _: 1 }, 8, ["modelValue", "title"]), a(I, { modelValue: g.value, "onUpdate:modelValue": l[5] || (l[5] = (t) => g.value = t), title: e.$t("action_setting") + e.$t(_.value.label || ""), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", onClose: z }, { footer: s(() => [h("div", ct, [a(n, { class: "w-[96px] h-[36px]", type: "primary", loading: F.value || v.value, onClick: ee }, { default: s(() => [P(f(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), a(n, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: Y(z, ["stop"]) }, { default: s(() => [P(f(e.$t("action_cancel")), 1)]), _: 1 })])]), default: s(() => [a(o, { ref_key: "form_ref", ref: p, model: i, "label-position": "top" }, { default: s(() => [a(V, { label: e.$t("module.platform_tool_api_key"), prop: "api_key", class: "is-required", rules: u(ce)({ message: "form_input_placeholder" }) }, { default: s(() => [a(c, { modelValue: i.api_key, "onUpdate:modelValue": l[2] || (l[2] = (t) => i.api_key = t), size: "large", placeholder: e.$t("module.platform_tool_api_key_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), [u(fe).DEEPSEEK].includes(i.type) ? (m(), W(V, { key: 0, label: e.$t("module.platform_model_api_endpoint"), prop: "base_url", class: "is-required", rules: u(ce)({ message: "form_input_placeholder", validator: ["text", "link"] }) }, { default: s(() => [a(c, { modelValue: i.base_url, "onUpdate:modelValue": l[3] || (l[3] = (t) => i.base_url = t), size: "large", placeholder: e.$t("module.platform_model_api_endpoint_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])) : [u(fe).OPENAI].includes(i.type) ? (m(), W(V, { key: 1, label: e.$t("module.platform_model_base_url"), prop: "base_url", class: "is-required", rules: u(ce)({ message: "form_input_placeholder" }) }, { default: s(() => [a(c, { modelValue: i.base_url, "onUpdate:modelValue": l[4] || (l[4] = (t) => i.base_url = t), size: "large", placeholder: e.$t("module.platform_model_base_url_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])) : te("", true), a(V, { class: "is-required", label: e.$t("module.platform_model_models"), prop: "models" }, { default: s(() => [ae((m(), E("ul", nt, [U.value.length ? te("", true) : (m(), E("div", st, f(e.$t("module.platform_model_models_empty")), 1)), (m(true), E(K, null, oe(U.value, (t) => (m(), E("li", { key: t.value, class: "w-full flex items-center gap-1.5" }, [t.icon ? (m(), E("img", { key: 0, class: "flex-none w-[20px] h-[20px] object-contain", src: e.$getRealPath({ url: `/images/platform/${t.icon}.png` }) }, null, 8, it)) : te("", true), h("label", rt, f(t.label), 1), l[12] || (l[12] = h("div", { class: "flex-1" }, null, -1)), a(R, { modelValue: t.checked, "onUpdate:modelValue": (D) => t.checked = D, size: "small" }, null, 8, ["modelValue", "onUpdate:modelValue"])]))), 128))])), [[k, v.value]])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]), a(I, { modelValue: T.value, "onUpdate:modelValue": l[10] || (l[10] = (t) => T.value = t), title: e.$t("module.platform_model_models_edit"), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", onClose: l[11] || (l[11] = (t) => z({ action: "model_edit" })) }, { footer: s(() => [h("div", dt, [a(n, { class: "w-[96px] h-[36px]", type: "primary", loading: F.value || v.value, onClick: l[8] || (l[8] = (t) => ee({ action: "model_edit" })) }, { default: s(() => [P(f(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), a(n, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: l[9] || (l[9] = Y((t) => z({ action: "model_edit" }), ["stop"])) }, { default: s(() => [P(f(e.$t("action_cancel")), 1)]), _: 1 })])]), default: s(() => [a(o, { ref_key: "model_form_ref", ref: $, model: L, "label-position": "top" }, { default: s(() => [a(V, { label: e.$t("module.platform_model_models_id"), prop: "id", class: "is-required", rules: u(ce)({ message: "form_input_placeholder" }) }, { default: s(() => [a(c, { modelValue: L.id, "onUpdate:modelValue": l[6] || (l[6] = (t) => L.id = t), size: "large", disabled: "", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), a(V, { label: e.$t("module.platform_model_models_name"), prop: "name" }, { default: s(() => [a(c, { modelValue: L.name, "onUpdate:modelValue": l[7] || (l[7] = (t) => L.name = t), size: "large", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"])], 64);
  };
} }), _t = { class: "flex items-center justify-between gap-4 mb-4" }, pt = { class: "flex items-center gap-2 w-full" }, mt = ["src"], ft = { class: "flex-1 w-0 text-sm flex flex-col" }, vt = { class: "text-[#2563EB] truncate" }, ht = X({ __name: "agent-list-drawer", emits: ["change"], setup(b, { expose: y, emit: C }) {
  const w = x(), r = x(false), p = ie({ channel_types: N.DIFY, keyword: "", offset: 0, limit: 10 }), $ = O(() => {
    const l = Ve(p.channel_types);
    return l && l.label ? window.$t(l.label) : "";
  }), g = x([]), d = x(0), v = x(false), F = x({}), i = x([]), _ = async () => {
    if (!i.value.length) {
      const l = await Il.list({ params: { offset: 0, limit: 1e3 } });
      i.value = l;
    }
  }, A = async ({ channel_types: l = p.channel_types } = {}) => {
    v.value = true, await _();
    try {
      const { count: n = 0, agents: I = [] } = await ve.list({ params: { ...p, channel_types: l } });
      return g.value = I.map((c) => ({ ...c, user_group_ids: c.user_group_ids || [], user_group_names: (c.user_group_ids || []).map((V) => (i.value.find((R) => R.group_id === V) || {}).group_name).filter(Boolean) })), d.value = n, F.value.agent_total = n, { count: n, agents: I };
    } finally {
      v.value = false;
    }
  }, U = () => (p.offset = 0, A()), T = async ({ data: l = {}, type: n = N.DIFY } = {}) => {
    p.channel_types = n, F.value = l, g.value = [], await Se(), r.value = true, U();
  }, L = () => {
    r.value = false;
  }, S = ({ data: l = {} } = {}) => {
    const I = Ve(p.channel_types).name || ml.DIFY_AGENT;
    w.value.open({ agent_type: I, data: F.value, agent_id: l.agent_id });
  }, z = async ({ data: l }) => {
    await ve.updateStatus({ data: { agent_id: l.agent_id, enable: l.enable } }), G.success(window.$t(l.enable ? "action_enable_success" : "action_disable_success"));
  }, j = async ({ data: l }) => {
    await se.confirm(window.$t("agent_delete_confirm"), window.$t("action_delete")), await ve.delete({ data: { agent_id: l.agent_id } }), G.success(window.$t("action_delete_success")), A();
  }, Q = (l) => {
    p.limit = l, U();
  }, ee = (l) => {
    p.offset = (l - 1) * p.limit, A();
  }, e = ({ action: l = "update" } = {}) => l === "create" ? U() : A();
  return y({ open: T, close: L, loadListData: A, create: ({ data: l = {}, type: n = N.DIFY } = {}) => {
    p.channel_types = n, F.value = l, S();
  } }), (l, n) => {
    const I = pe, c = re, V = Fl, R = Te, o = Vl, k = El;
    return m(), E(K, null, [a(k, { modelValue: r.value, "onUpdate:modelValue": n[1] || (n[1] = (t) => r.value = t), title: $.value, size: "70%", "destroy-on-close": "", "append-to-body": "", "close-on-click-modal": false }, { default: s(() => [h("div", _t, [a(I, { modelValue: p.keyword, "onUpdate:modelValue": n[0] || (n[0] = (t) => p.keyword = t), "prefix-icon": u(fl), placeholder: l.$t("action_search"), size: "large", onChange: U }, null, 8, ["modelValue", "prefix-icon", "placeholder"]), a(c, { type: "primary", size: "large", onClick: S }, { default: s(() => [P(f(l.$t("action_add")), 1)]), _: 1 })]), a(o, { "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", data: g.value, total: d.value, loading: v.value, page: p.offset + 1, limit: p.limit, onPageSizeChange: Q, onPageCurrentChange: ee }, { default: s(() => [a(V, { prop: "date", label: l.$t("module.agent"), "min-width": "180", "show-overflow-tooltip": "" }, { default: s(({ row: t }) => [h("div", pt, [h("img", { class: "flex-none w-8 h-8 rounded-full overflow-hidden", src: t.logo, alt: "" }, null, 8, mt), h("div", ft, [h("div", vt, f(t.name || "--"), 1), ae(h("div", { class: "text-xs text-[#808080] truncate" }, f(t.description), 513), [[Le, t.description]])])])]), _: 1 }, 8, ["label"]), a(V, { label: l.$t("usage_range"), "min-width": "140", "show-overflow-tooltip": "" }, { default: s(({ row: t }) => [h("span", { class: Z({ "text-[#999]": !t.user_group_names.length }) }, f(t.user_group_names.join("\u3001") || "--"), 3)]), _: 1 }, 8, ["label"]), a(V, { label: l.$t("sort"), width: "80", "show-overflow-tooltip": "" }, { default: s(({ row: t }) => [P(f(t.sort), 1)]), _: 1 }, 8, ["label"]), a(V, { label: l.$t("action_enable"), width: "80" }, { default: s(({ row: t }) => [a(R, { modelValue: t.enable, "onUpdate:modelValue": (D) => t.enable = D, onChange: (D) => z({ data: t }) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), _: 1 }, 8, ["label"]), a(V, { label: l.$t("operation"), width: "120", align: "right", fixed: "right" }, { default: s(({ row: t }) => [a(c, { type: "primary", link: "", onClick: (D) => S({ data: t }) }, { default: s(() => [P(f(l.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), a(c, { type: "primary", link: "", onClick: (D) => j({ data: t }) }, { default: s(() => [P(f(l.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading", "page", "limit"])]), _: 1 }, 8, ["modelValue", "title"]), a(Al, { ref_key: "agentCreateRef", ref: w, onSuccess: e }, null, 512)], 64);
  };
} }), gt = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, bt = { class: "font-semibold text-[#1D1E1F] mb-6" }, yt = { class: "flex flex-wrap gap-4 mb-8" }, wt = { class: "flex items-center gap-4 p-5 box-border" }, $t = ["src"], kt = { class: "text-[#1B2B51] font-semibold" }, xt = { class: "text-xs text-[#4F5052] px-5 box-border" }, Ct = { class: "w-full h-[44px] flex border-t box-border" }, Et = { class: "w-full flex items-center font-semibold text-[#1D1E1F] mb-6" }, Ft = { class: "flex-1" }, Vt = { class: "w-full flex flex-col gap-4 mb-8" }, At = { class: "flex items-center gap-4" }, It = ["src"], Dt = { class: "flex-1 text-[#1B2B51] font-semibold" }, zt = { class: "w-full flex flex-col bg-white rounded overflow-hidden gap-4 mt-6 px-5" }, Pt = { key: 0, class: "text-[#9A9A9A] text-sm py-5" }, Nt = { class: "text-[#4F5052] text-sm" }, Lt = { class: "w-full flex flex-col gap-y-5 box-border overflow-auto" }, St = ["src"], Bt = { class: "flex-none text-sm text[#1D1E1F]" }, Ut = X({ __name: "index", setup(b) {
  const { isLocalEnv: y, isOpLocalEnv: C } = vl(), w = [N.COZE_CN, N.APP_BUILDER, N["53AI"]], r = [N.DIFY, N.YUANQI, N.BAILIAN, N.VOLCENGINE], p = [...w.map((o) => ({ value: o, label: de.get(o), icon: de.get(o), connected: false, authed_time: "", client_id: "", client_secret: "" })), ...r.map((o) => ({ value: o, label: de.get(o), icon: de.get(o), connected: false, authed_time: "", client_id: "", client_secret: "", agent_total: 0, channel_config: {}, channel_loading: true }))], $ = x(), g = x(), d = x(), v = x(), F = x(he(p)), i = x(false);
  x([{ value: "search_online", label: "module.platform_search_online", desc: "module.platform_search_online_desc", icon: "search-online", enable: true, api_key: "sk-5f90820c429943bb99aaa18804a0e385" }]);
  const _ = x([]), A = x(false), U = O(() => [{ label: "intelligent_agent_platform", children: F.value.filter((o) => ![N.APP_BUILDER, N.BAILIAN, N.VOLCENGINE].includes(o.value)) }, { label: "cloud_computing_platform", children: F.value.filter((o) => [N.APP_BUILDER, N.BAILIAN, N.VOLCENGINE].includes(o.value)) }]), T = async () => {
    i.value = true;
    const o = await ge.list().finally(() => {
      i.value = false;
    });
    F.value = he(p).map((k) => {
      var _a, _b;
      const t = o.find((H) => k.value === H.provider_type), D = F.value.find((H) => k.value === H.value);
      return r.includes(k.value) && D ? D : t ? { ...k, ...t, connected: true, client_id: ((_a = t.configs) == null ? void 0 : _a.client_id) || "", client_secret: ((_b = t.configs) == null ? void 0 : _b.client_secret) || "" } : k;
    });
  }, L = async (o, k, t) => {
    const D = k.findIndex((H) => H.channel_type === o);
    if (D > -1) {
      const H = k.splice(D, 1)[0];
      t.channel_config = H || {};
      const { count: le = 0 } = await v.value.loadListData({ channel_types: o });
      t.agent_total = le;
    }
    t.channel_loading = false;
  }, S = async () => {
    A.value = true;
    const o = await J.list().finally(() => {
      A.value = false;
    });
    for (const k of r) {
      const t = F.value.find((D) => D.value === k);
      t && await L(k, o, t);
    }
    _.value = o.filter((k) => ![...r, bl["53ai"]].includes(+k.channel_type)).map((k) => ({ ...k, deleting: false }));
  }, z = () => {
    T(), S();
  }, j = ({ data: o = {} } = {}) => {
    if (o.value === N.FAST_GPT)
      return G.warning(window.$t("feature_coming_soon"));
    if ([N.COZE_CN].includes(o.value) && y.value && C.value)
      return Dl({ title: window.$t("local_config_limited_tip"), content: window.$t("local_config_limited_desc", { url: window.location.href }), confirmButtonText: window.$t("know_it"), showCancelButton: false }).open();
    r.includes(o.value) ? v.value.open({ data: o, type: o.value }) : $.value.open({ data: o });
  }, Q = ({ data: o = {} } = {}) => {
    v.value.create({ data: o, type: o.value });
  }, ee = async ({ data: o = {} } = {}) => {
    o.provider_id && (await se.confirm(window.$t("module.platform_delete_confirm")), await ge.delete({ data: { provider_id: o.provider_id } }), G.success(window.$t("action_delete_success")), T());
  }, e = ({ data: o = {} } = {}) => {
    d.value.open({ data: o });
  }, l = async ({ data: o = {}, index: k = 0 } = {}) => {
    await se.confirm(window.$t("module.platform_model_delete_confirm")), o.deleting = true, await J.delete({ data: { channel_id: o.channel_id } }).finally(() => {
      o.deleting = false;
    }), S(), G.success(window.$t("action_delete_success"));
  };
  let n = 0, I = 0;
  const c = ({ data: o = {}, index: k = 0, parent_data: t = {}, parent_index: D = 0 } = {}) => {
    n = k, I = D, d.value.open({ data: { ...t, ...o, id: o.value, name: o.label }, action: "model_edit" });
  }, V = async ({ data: o = {}, index: k = 0, parent_data: t = {}, parent_index: D = 0 } = {}) => {
    var _a, _b, _c, _d;
    const H = ((_a = t.model_options) == null ? void 0 : _a.length) === 1, le = H ? "module.platform_model_delete_confirm_v2" : "module.platform_model_delete_confirm";
    await se.confirm(window.$t(le)), H ? (A.value = true, await J.delete({ data: { channel_id: t.channel_id } }).finally(() => {
      A.value = false;
    }), S()) : ((_b = t.model_options) == null ? void 0 : _b.splice(k, 1), t.models = (_c = t.model_options) == null ? void 0 : _c.map((ne) => ne.value), await J.save({ data: { channel_id: t.channel_id, key: t.api_key, base_url: t.base_url, config: t.config || {}, models: (_d = t.model_options) == null ? void 0 : _d.map((ne) => ne.value).join(","), name: t.type } })), G.success(window.$t("action_delete_success"));
  }, R = ({ action: o = "", data: k = {} } = {}) => {
    if (o === "model_edit") {
      _.value[I].model_options[n].label = k.name;
      return;
    }
    S();
  };
  return hl(() => {
    z(), Ae.on("user-login-success", z);
  }), gl(() => {
    Ae.off("user-login-success", z);
  }), (o, k) => {
    const t = Cl, D = re, H = xl, le = ye, ne = ql, Ke = Hl, Me = kl, me = Ue;
    return m(), E(K, null, [a(Me, { class: "px-[60px] py-8" }, { default: s(() => [a(t, { title: o.$t("module.platform") }, null, 8, ["title"]), h("div", gt, [(m(true), E(K, null, oe(U.value, (M) => (m(), E(K, { key: M.label }, [h("h2", bt, f(o.$t(M.label)), 1), ae((m(), E("ul", yt, [(m(true), E(K, null, oe(M.children, (B) => ae((m(), E("li", { key: B.value, class: "flex-none min-w-[246px] w-[24%] h-[178px] flex flex-col border rounded box-border overflow-hidden" }, [h("div", wt, [h("img", { class: "flex-none size-10 overflow-hidden", src: o.$getRealPath({ url: `/images/platform/${B.icon}.png` }) }, null, 8, $t), h("div", kt, f(o.$t(B.label)), 1)]), h("div", xt, [r.includes(B.value) ? (m(), E(K, { key: 0 }, [P(f(o.$t("connecting_agent_total", { total: B.agent_total })), 1)], 64)) : B.connected && B.authed_time ? (m(), E(K, { key: 1 }, [P(f(o.$t("connected")) + " \xB7 " + f(o.$t("authorized_at")) + " " + f(B.authed_time.slice(0, 16)), 1)], 64)) : B.connected ? (m(), E(K, { key: 2 }, [P(f(o.$t("connecting")), 1)], 64)) : (m(), E(K, { key: 3 }, [P(f(o.$t("not_connected")), 1)], 64))]), k[0] || (k[0] = h("div", { class: "flex-1 w-full" }, null, -1)), h("div", Ct, [r.includes(B.value) ? (m(), E(K, { key: 0 }, [a(D, { class: "flex-1 h-[46px] text-[#3664EF] !border-none !outline-none rounded-none", type: "text", size: "default", onClick: Y((q) => j({ data: B }), ["stop"]) }, { default: s(() => [P(f(o.$t("action_manage")), 1)]), _: 2 }, 1032, ["onClick"]), a(H, { class: "!h-full", direction: "vertical" }), a(D, { class: "flex-1 h-[46px] text-[#919499] !border-none !outline-none rounded-none", type: "text", size: "default", onClick: Y((q) => Q({ data: B }), ["stop"]) }, { default: s(() => [P(f(o.$t("action_add")), 1)]), _: 2 }, 1032, ["onClick"])], 64)) : B.connected ? (m(), E(K, { key: 1 }, [a(D, { class: "flex-1 h-[46px] text-[#3664EF] !border-none !outline-none rounded-none", type: "text", size: "default", onClick: Y((q) => j({ data: B }), ["stop"]) }, { default: s(() => [P(f(o.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), a(H, { class: "!h-full", direction: "vertical" }), a(D, { class: "flex-1 h-[46px] text-[#919499] !border-none !outline-none rounded-none", type: "text", size: "default", onClick: Y((q) => ee({ data: B }), ["stop"]) }, { default: s(() => [P(f(o.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])], 64)) : (m(), W(D, { key: 2, class: "flex-1 h-[46px] bg-[#F3F6FE] text-[#3664EF] !border-none !outline-none rounded-none", type: "default", size: "default", onClick: Y((q) => j({ data: B }), ["stop"]) }, { default: s(() => [P(f(o.$t("action_authorize")), 1)]), _: 2 }, 1032, ["onClick"]))])])), [[me, B.channel_loading]])), 128))])), [[me, i.value]])], 64))), 128)), h("h2", Et, [h("div", Ft, f(o.$t("module.platform_model")), 1)]), ae((m(), E("ul", Vt, [(m(true), E(K, null, oe(_.value, (M, B) => (m(), E("li", { key: M.value, class: "w-full p-5 border rounded box-border overflow-hidden bg-[#F8F9FA]" }, [h("div", At, [h("img", { class: "flex-none w-[40px] h-[40px] object-contain rounded-full overflow-hidden", src: o.$getRealPath({ url: `/images/platform/${M.icon}.png` }) }, null, 8, It), h("div", Dt, f(o.$t(M.label)), 1), a(D, { class: "flex-none !px-5", type: "default", size: "large", onClick: Y((q) => e({ data: M }), ["stop"]) }, { default: s(() => [P(f(o.$t("action_setting")), 1)]), _: 2 }, 1032, ["onClick"]), a(D, { class: "flex-none !ml-0 !px-3", type: "default", size: "large", loading: M.deleting, onClick: Y((q) => l({ data: M, index: B }), ["stop"]) }, { default: s(() => [a(le, { size: "14" }, { default: s(() => [a(u(yl))]), _: 1 })]), _: 2 }, 1032, ["loading", "onClick"])]), h("div", zt, [!M.model_options || !M.model_options.length ? (m(), E("div", Pt, f(o.$t("module.platform_model_models_empty")), 1)) : (m(), W(Ke, { key: 1, "model-value": ["models"], class: "w-full !border-none" }, { default: s(() => [a(ne, { name: "models" }, { title: s(() => [h("span", Nt, f(o.$t("module.platform_model_models_total", { total: M.model_options.length })), 1)]), default: s(() => [h("ul", Lt, [(m(true), E(K, null, oe(M.model_options, (q, xe) => (m(), E("li", { key: q.value, class: "w-full box-border flex items-center gap-2" }, [q.icon ? (m(), E("img", { key: 0, class: "flex-none w-[20px] h-[20px] object-contain", src: o.$getRealPath({ url: `/images/platform/${q.icon}.png` }) }, null, 8, St)) : te("", true), h("label", Bt, f(q.label), 1), a(le, { class: "flex-none cursor-pointer hover:opacity-70", size: "14", onClick: (je) => c({ data: q, index: xe, parent_data: M, parent_index: B }) }, { default: s(() => [a(u(wl))]), _: 2 }, 1032, ["onClick"]), k[1] || (k[1] = h("div", { class: "flex-1" }, null, -1)), a(le, { class: "flex-none cursor-pointer hover:opacity-70", size: "16", color: "#F04F4D", onClick: (je) => V({ data: q, index: xe, parent_data: M, parent_index: B }) }, { default: s(() => [a(u($l))]), _: 2 }, 1032, ["onClick"])]))), 128))])]), _: 2 }, 1024)]), _: 2 }, 1024))])]))), 128)), a(D, { class: "flex-none !border-none w-[106px]", type: "primary", plain: "", size: "large", onClick: e }, { default: s(() => [P(" + " + f(o.$t("action_add")), 1)]), _: 1 })])), [[me, A.value]])])]), _: 1 }), a(Xl, { ref_key: "authorize_ref", ref: $, onSuccess: T }, null, 512), a(lt, { ref_key: "tool_setting_ref", ref: g }, null, 512), a(ut, { ref_key: "model_setting_ref", ref: d, onSuccess: R }, null, 512), a(ht, { ref_key: "agent_list_drawer_ref", ref: v, onChange: o.onAgentListChange }, null, 8, ["onChange"])], 64);
  };
} });
const so = Be(Ut, [["__scopeId", "data-v-7b36991a"]]);
export {
  so as default
};
