import { ap as Ne, aH as Se, bL as Je, aS as Le, aV as Be, aU as We, aM as Qe, b_ as Xe, r as g, cE as De, aG as Ze, an as be, au as xe, al as j, u as X, b as h, c as D, q as me, n as Q, z as u, aC as Oe, aQ as el, bS as ll, ak as al, cN as tl, d as $, H as N, t as v, f as a, i as o, h as J, aO as ol, y as Ee, b0 as nl, am as Y, g as ae, v as Ce, cO as sl, aD as il, c7 as dl, ad as cl, cP as W, b4 as rl, ae as re, ai as Z, e as te, aj as se, bD as ul, F as R, bJ as _l, W as ue, bF as pl, a9 as H, a8 as de, ah as we, X as fe, aa as Ve, ac as Fe, $ as ie, Y as ze, a7 as $e, cQ as ml, G as ce, a4 as _e, cR as Ie, cS as fl, M as G, O as he, N as ge, cL as q, cM as K, V as vl, cK as ne, bC as hl, cT as pe, o as gl, J as Pe, a as yl, a5 as bl, bE as wl, bH as $l, L as kl, p as xl } from "./index-6feda8be.js";
import { v as Ue } from "./el-loading-7d1392af.js";
import { _ as El } from "./index-35dfd48d.js";
import { E as Cl } from "./el-divider-c2f6b942.js";
import { _ as Vl } from "./index.vue_vue_type_script_setup_true_lang-bf5c9b93.js";
import { E as Re } from "./el-switch-d1b774bc.js";
import { E as Ke } from "./el-drawer-b7fa9cba.js";
import { _ as Fl } from "./index-72b6e71e.js";
import { E as zl } from "./el-table-column-97a25b03.js";
import "./el-tag-41766c4c.js";
import { u as Al, _ as Dl } from "./index.vue_vue_type_script_setup_true_lang-1b57cb11.js";
import { d as ke, g as Il, a as ye, e as Pl } from "./agent-fc880aa9.js";
import { s as Tl } from "./subscription-7ceb7995.js";
import { T as Nl } from "./setup-5d139f42.js";
import "./index.vue_vue_type_script_setup_true_lang-b4d73f03.js";
import "./sortable.esm-437f0071.js";
import "./position-80aa4e7f.js";
import "./debounce-bf10b7f9.js";
import "./el-select-15a52e42.js";
import "./el-scrollbar-1c0147c5.js";
import "./isEqual-8788d17b.js";
import "./debounce-f4e6390f.js";
import "./el-input-number-a4222484.js";
import "./index-17af2188.js";
import "./group-acb26c68.js";
import "./image.vue_vue_type_style_index_0_lang-eb9d831e.js";
import "./el-radio-7abec385.js";
import "./dropdown-4cbb8c7d.js";
const Te = (x) => We(x) || Qe(x) || Xe(x), Sl = Ne({ accordion: Boolean, modelValue: { type: Se([Array, String, Number]), default: () => Je([]) } }), Ll = { [Le]: Te, [Be]: Te }, Me = Symbol("collapseContextKey"), Bl = (x, C) => {
  const V = g(De(x.modelValue)), k = (m) => {
    V.value = m;
    const b = x.accordion ? V.value[0] : V.value;
    C(Le, b), C(Be, b);
  }, t = (m) => {
    if (x.accordion)
      k([V.value[0] === m ? "" : m]);
    else {
      const b = [...V.value], E = b.indexOf(m);
      E > -1 ? b.splice(E, 1) : b.push(m), k(b);
    }
  };
  return Ze(() => x.modelValue, () => V.value = De(x.modelValue), { deep: true }), be(Me, { activeNames: V, handleItemClick: t }), { activeNames: V, setActiveNames: k };
}, Ol = () => {
  const x = xe("collapse");
  return { rootKls: j(() => x.b()) };
}, Ul = X({ name: "ElCollapse" }), Rl = X({ ...Ul, props: Sl, emits: Ll, setup(x, { expose: C, emit: V }) {
  const k = x, { activeNames: t, setActiveNames: m } = Bl(k, V), { rootKls: b } = Ol();
  return C({ activeNames: t, setActiveNames: m }), (E, _) => (h(), D("div", { class: Q(u(b)) }, [me(E.$slots, "default")], 2));
} });
var Kl = Oe(Rl, [["__file", "collapse.vue"]]);
const Ml = Ne({ title: { type: String, default: "" }, name: { type: Se([String, Number]), default: void 0 }, icon: { type: el, default: ll }, disabled: Boolean }), jl = (x) => {
  const C = al(Me), { namespace: V } = xe("collapse"), k = g(false), t = g(false), m = tl(), b = j(() => m.current++), E = j(() => {
    var w;
    return (w = x.name) != null ? w : `${V.value}-id-${m.prefix}-${u(b)}`;
  }), _ = j(() => C == null ? void 0 : C.activeNames.value.includes(u(E)));
  return { focusing: k, id: b, isActive: _, handleFocus: () => {
    setTimeout(() => {
      t.value ? t.value = false : k.value = true;
    }, 50);
  }, handleHeaderClick: () => {
    x.disabled || (C == null ? void 0 : C.handleItemClick(u(E)), k.value = false, t.value = true);
  }, handleEnterClick: () => {
    C == null ? void 0 : C.handleItemClick(u(E));
  } };
}, Yl = (x, { focusing: C, isActive: V, id: k }) => {
  const t = xe("collapse"), m = j(() => [t.b("item"), t.is("active", u(V)), t.is("disabled", x.disabled)]), b = j(() => [t.be("item", "header"), t.is("active", u(V)), { focusing: u(C) && !x.disabled }]), E = j(() => [t.be("item", "arrow"), t.is("active", u(V))]), _ = j(() => t.be("item", "wrap")), c = j(() => t.be("item", "content")), T = j(() => t.b(`content-${u(k)}`)), n = j(() => t.b(`head-${u(k)}`));
  return { arrowKls: E, headKls: b, rootKls: m, itemWrapperKls: _, itemContentKls: c, scopedContentId: T, scopedHeadId: n };
}, Hl = X({ name: "ElCollapseItem" }), ql = X({ ...Hl, props: Ml, setup(x, { expose: C }) {
  const V = x, { focusing: k, id: t, isActive: m, handleFocus: b, handleHeaderClick: E, handleEnterClick: _ } = jl(V), { arrowKls: c, headKls: T, rootKls: n, itemWrapperKls: w, itemContentKls: B, scopedContentId: y, scopedHeadId: z } = Yl(V, { focusing: k, isActive: m, id: t });
  return C({ isActive: m }), (F, M) => (h(), D("div", { class: Q(u(n)) }, [$("button", { id: u(z), class: Q(u(T)), "aria-expanded": u(m), "aria-controls": u(y), "aria-describedby": u(y), tabindex: F.disabled ? -1 : 0, type: "button", onClick: u(E), onKeydown: nl(Y(u(_), ["stop", "prevent"]), ["space", "enter"]), onFocus: u(b), onBlur: (p) => k.value = false }, [me(F.$slots, "title", {}, () => [N(v(F.title), 1)]), me(F.$slots, "icon", { isActive: u(m) }, () => [a(u(Ee), { class: Q(u(c)) }, { default: o(() => [(h(), J(ol(F.icon)))]), _: 1 }, 8, ["class"])])], 42, ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex", "onClick", "onKeydown", "onFocus", "onBlur"]), a(u(sl), null, { default: o(() => [ae($("div", { id: u(y), role: "region", class: Q(u(w)), "aria-hidden": !u(m), "aria-labelledby": u(z) }, [$("div", { class: Q(u(B)) }, [me(F.$slots, "default")], 2)], 10, ["id", "aria-hidden", "aria-labelledby"]), [[Ce, u(m)]])]), _: 3 })], 2));
} });
var je = Oe(ql, [["__file", "collapse-item.vue"]]);
const Gl = il(Kl, { CollapseItem: je }), Jl = dl(je), Wl = cl("channel-store", { state: () => ({ channel_list: [], model_list_map: /* @__PURE__ */ new Map() }), actions: { async loadListData({ reset: x = true } = {}) {
  return (x || !this.channel_list.length) && (this.channel_list = await W.list()), JSON.parse(JSON.stringify(this.channel_list));
}, async save({ data: x = {} } = {}) {
  return W.save({ data: x });
}, async delete({ data: { channel_id: x } }) {
  return W.delete({ data });
}, async loadModelList({ reset: x = false, owner: C = "all" } = {}) {
  if (x && this.model_list_map.set(C, []), !this.model_list_map.get(C) || !this.model_list_map.get(C).length) {
    const V = await W.modelList({ params: { owner: C } });
    V.forEach((k = {}) => {
      const t = this.model_list_map.get(k.owned_by) || [];
      t.push(k), this.model_list_map.set(k.owned_by, t);
    }), this.model_list_map.set("all", V);
  }
  return JSON.parse(JSON.stringify(this.model_list_map.get(C)));
}, async loadCozeWorkspaceList() {
  return await W.cozeWorkspaceList();
}, async loadCozeBotList({ params: { workspace_id: x } }) {
  return await W.cozeBotList({ params: { workspace_id: x } });
} } });
const Ql = { class: "w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-4 box-border text-sm text-[#4F5052]" }, Xl = ["innerHTML"], Zl = { key: 0, class: "text-center text-sm text-[#9A9A9A]" }, ea = { class: "py-4 flex items-center justify-center" }, la = X({ __name: "authorize-dialog", emits: ["success"], setup(x, { expose: C, emit: V }) {
  const k = V, t = rl(), m = g(), b = g(), E = g(false), _ = re({ client_id: "", client_secret: "", api_key: "" }), c = g({}), T = g(false), n = j(() => {
    const p = t.info;
    return `${_l}/api/callback/cozecn/auth/${p.eid}`;
  }), w = ({ rule: p, value: I, callback: L, message: U } = {}) => {
    if (I = (I || "").trim(), !I)
      return L(new Error(window.$t(U)));
    L();
  }, B = async ({ data: p = {} } = {}) => {
    _.client_id = p.client_id || "", _.client_secret = p.client_secret || "", _.api_key = p.api_key || "", c.value = p, E.value = true, await ue();
    const I = m.value.$el, L = b.value.$el.querySelector(".copy-hook");
    switch (p.value) {
      case Z:
        L.appendChild(I);
        break;
      case se:
        _.api_key = p.access_token || "";
        break;
    }
  }, y = () => {
    E.value = false, z();
  }, z = () => {
    _.client_id = "", _.client_secret = "", _.api_key = "";
  }, F = async ({ text: p }) => {
    p && (await pl(p), H.success(window.$t("action_copy_success")));
  }, M = async () => {
    if (!await b.value.validate())
      return;
    let I = { configs: {}, name: c.value.label, provider_type: c.value.value, provider_id: c.value.provider_id };
    switch (c.value.value) {
      case Z:
        (!c.value.provider_id || _.client_id !== c.value.client_id || _.client_secret !== c.value.client_secret) && await de.confirm(window.$t("module.platform_auth_coze_confirm"), window.$t("tip")), I.configs = { client_id: _.client_id, client_secret: _.client_secret };
        break;
      case se:
        I.access_token = _.api_key;
        break;
    }
    if (T.value = true, await we.save({ data: I }).finally(() => {
      T.value = false;
    }), [Z].includes(c.value.value) && !+c.value.is_authorized) {
      let L = "";
      switch (c.value.value) {
        case Z:
          L = `https://www.coze.cn/api/permission/oauth2/authorize?response_type=code&client_id=${_.client_id}&redirect_uri=${encodeURIComponent(n.value)}&state=coze_auth`;
          break;
      }
      console.info("auth_url: ", L);
      const U = window.open(L, "_blank", "width=1000,height=800");
      window.addEventListener("message", ({ data: l = {} } = {}) => {
        l.provider_type == c.value.value && (U.close(), H.success(window.$t("action_authorize_success")), k("success"));
      });
    }
    H.success(window.$t("action_save_success")), k("success"), y();
  };
  return C({ open: B, close: y, reset: z }), (p, I) => {
    const L = Ee, U = fe, l = Ve, d = Fe, P = ie, S = ze;
    return h(), J(S, { modelValue: E.value, "onUpdate:modelValue": I[4] || (I[4] = (e) => E.value = e), title: p.$t("action_authorize") + p.$t(c.value.label || ""), "close-on-click-modal": false, width: "720px", "destroy-on-close": "", "append-to-body": "", onClose: y }, { footer: o(() => [[u(Z)].includes(c.value.value) ? (h(), D("div", Zl, v(p.$t("platform_auth.coze_cn.tip_1")), 1)) : te("", true), $("div", ea, [a(P, { class: "w-[96px] h-[36px]", type: "primary", loading: T.value, onClick: M }, { default: o(() => [N(v(p.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"]), a(P, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: Y(y, ["stop"]) }, { default: o(() => [N(v(p.$t("action_cancel")), 1)]), _: 1 })])]), default: o(() => [a(d, { ref_key: "form_ref", ref: b, model: _, "label-position": "top" }, { default: o(() => [$("div", Ql, [$("div", { class: "whitespace-pre-wrap leading-7", innerHTML: c.value.value == u(se) ? p.$t("platform_auth.app_builder.tip", { url: "<a class='text-[#5A6D9E]' href='https://qianfan.cloud.baidu.com/appbuilder' target='_blank'>https://qianfan.cloud.baidu.com/appbuilder</a>" }) : p.$t("platform_auth.coze_cn.tip", { url: "<a class='text-[#5A6D9E]' href='https://www.coze.cn/open/oauth/apps' target='_blank'>https://www.coze.cn/open/oauth/apps</a>", redirect_url: `<span class='text-[#F04F4D]'>${n.value}</span><span class='copy-hook'></span>`, client_id: `<span class='text-[#F04F4D]'>${p.$t("module.platform_auth_client_id")}</span>`, client_secret: `<span class='text-[#F04F4D]'>${p.$t("module.platform_auth_client_secret")}</span>` }) }, null, 8, Xl), ae(a(L, { ref_key: "copy_ref", ref: m, class: "cursor-pointer ml-1 mt-1 text-[#4F5052] hover:text-[#3664EF]", size: 14, onClick: I[0] || (I[0] = (e) => F({ text: n.value })) }, { default: o(() => [a(u(ul))]), _: 1 }, 512), [[Ce, [u(Z)].includes(c.value.value)]])]), c.value.value == u(se) ? (h(), J(l, { key: 0, label: p.$t("module.platform_tool_api_key"), prop: "api_key", rules: [{ validator: (e, i, f) => w({ rule: e, value: i, callback: f, message: "module.platform_tool_api_key_placeholder" }), trigger: "blur" }] }, { default: o(() => [a(U, { modelValue: _.api_key, "onUpdate:modelValue": I[1] || (I[1] = (e) => _.api_key = e), size: "large", placeholder: p.$t("module.platform_tool_api_key_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])) : (h(), D(R, { key: 1 }, [a(l, { label: p.$t("module.platform_auth_client_id"), prop: "client_id", rules: [{ validator: (e, i, f) => w({ rule: e, value: i, callback: f, message: "module.platform_auth_client_id_placeholder" }), trigger: "blur" }] }, { default: o(() => [a(U, { modelValue: _.client_id, "onUpdate:modelValue": I[2] || (I[2] = (e) => _.client_id = e), size: "large", placeholder: p.$t("module.platform_auth_client_id_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), a(l, { label: p.$t("module.platform_auth_client_secret"), prop: "client_secret", rules: [{ validator: (e, i, f) => w({ rule: e, value: i, callback: f, message: "module.platform_auth_client_secret_placeholder" }), trigger: "blur" }] }, { default: o(() => [a(U, { modelValue: _.client_secret, "onUpdate:modelValue": I[3] || (I[3] = (e) => _.client_secret = e), size: "large", placeholder: p.$t("module.platform_auth_client_secret_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])], 64))]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), aa = { class: "py-4 flex items-center justify-center" }, ta = X({ __name: "tool-setting-dialog", setup(x, { expose: C }) {
  const V = g(), k = g(false), t = re({ api_key: "" }), m = g({}), b = ({ rule: n, value: w, callback: B, message: y } = {}) => {
    if (w = (w || "").trim(), !w)
      return B(new Error(window.$t(y)));
    B();
  }, E = ({ data: n = {} } = {}) => {
    t.api_key = n.api_key || "", m.value = n, k.value = true;
  }, _ = () => {
    k.value = false, c();
  }, c = () => {
    t.api_key = "";
  }, T = () => {
    V.value.validate((n) => {
      n && (H.success(window.$t("action_save_success")), _());
    });
  };
  return C({ open: E, close: _, reset: c }), (n, w) => {
    const B = fe, y = Ve, z = Fe, F = ie, M = ze;
    return h(), J(M, { title: n.$t("action_setting") + n.$t(m.value.label || ""), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", modelValue: k.value, "onUpdate:modelValue": w[1] || (w[1] = (p) => k.value = p), onClose: _ }, { footer: o(() => [$("div", aa, [a(F, { class: "w-[96px] h-[36px]", type: "primary", onClick: T }, { default: o(() => [N(v(n.$t("action_confirm")), 1)]), _: 1 }), a(F, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: Y(_, ["stop"]) }, { default: o(() => [N(v(n.$t("action_cancel")), 1)]), _: 1 })])]), default: o(() => [a(z, { ref_key: "form_ref", ref: V, model: t, "label-position": "top", onSubmit: Y(() => {
    }, ["prevent"]) }, { default: o(() => [a(y, { label: n.$t("module.platform_tool_api_key"), prop: "api_key", rules: [{ required: true, message: n.$t("module.platform_tool_api_key_placeholder") }, { validator: (p, I, L) => b({ rule: p, value: I, callback: L, message: "module.platform_tool_api_key_placeholder" }), trigger: "blur" }] }, { default: o(() => [a(B, { modelValue: t.api_key, "onUpdate:modelValue": w[0] || (w[0] = (p) => t.api_key = p), size: "large", placeholder: n.$t("module.platform_tool_api_key_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), oa = { class: "flex flex-col gap-3 mb-8 pb-1 overflow-auto max-h-[60vh] pr-1" }, na = ["src"], sa = { class: "flex-1 text-[#1B2B51] font-semibold" }, ia = { class: "w-full max-h-[42vh] min-h-[200px] pr-1 flex flex-col gap-2 box-border overflow-auto" }, da = { key: 0, class: "text-[#9A9A9A] w-full text-center py-4" }, ca = ["src"], ra = { class: "text-sm text[#1D1E1F]" }, ua = { class: "pb-4 flex items-center justify-center" }, _a = { class: "pb-4 flex items-center justify-center" }, pa = X({ __name: "model-setting-dialog", emits: ["success"], setup(x, { expose: C, emit: V }) {
  const k = V, t = Wl(), m = g(), b = g(), E = g(false), _ = g(false), c = g(false), T = g(false), n = re({ type: "", api_key: "", organization_id: "", base_url: "", models: [] }), w = g({}), B = g($e(ml)), y = g([]), z = g(false), F = re({ id: "", name: "" }), M = async ({ data: l = {}, action: d = "" } = {}) => {
    if (d === "model_edit") {
      F.id = l.id || l.value || "", F.name = l.name || l.label || "", z.value = true, w.value = l;
      return;
    }
    if (!l.channel_id && !l.value) {
      c.value = true, _.value = true;
      const e = await t.loadListData({ reset: true }).finally(() => {
        c.value = false;
      });
      B.value.forEach((i) => {
        i.is_add = e.some((f) => f.name === i.value);
      });
      return;
    }
    n.type = l.type || l.value || "", n.api_key = l.api_key || "", n.base_url = l.base_url || "", n.organization_id = l.organization_id || "", n.models = typeof l.models == "string" && l.models.split(",") || l.models || [], w.value = l, E.value = true, c.value = true;
    const P = await t.loadModelList({ owner: n.type }).finally(() => {
      c.value = false;
    }), { config: { model_alias_map: S = {} } = {} } = l;
    y.value = P.map((e) => (e.value = e.id || "", e.label = S[e.value] || e.label || e.id || "", e.checked = n.models.includes(e.value) || false, d === "add" && (e.checked = true), e.icon = e.icon || "", e)), Ie === n.type && (n.base_url || (n.base_url = "https://api.deepseek.com"));
  }, p = ({ action: l = "" } = {}) => {
    l === "model_edit" && (z.value = false), l === "add" && (_.value = false), E.value = false, I({ action: l });
  }, I = ({ action: l = "" } = {}) => {
    if (l === "model_edit") {
      F.id = "", F.name = "";
      return;
    }
    n.type = "", n.api_key = "", n.base_url = "", n.organization_id = "", n.base_url = "", n.models = [];
  }, L = ({ data: l = {} } = {}) => {
    M({ data: l, action: "add" });
  }, U = ({ action: l = "" } = {}) => {
    if (l === "model_edit") {
      b.value.validate(async (d) => {
        if (!d)
          return;
        let { id: P = "", name: S = "" } = F;
        S = S.trim();
        const e = w.value.config || {};
        e.model_alias_map = { ...e.model_alias_map || {}, [P]: S }, e.model_alias_map[P] || delete e.model_alias_map[P], Object.keys(e.model_alias_map).length || delete e.model_alias_map;
        const i = { channel_id: w.value.channel_id, key: w.value.api_key, base_url: w.value.base_url, config: e, models: w.value.models, name: w.value.type };
        T.value = true, await t.save({ data: i }).finally(() => {
          T.value = false;
        }), k("success", { action: l, data: { id: P, name: S || P } }), H.success(window.$t("action_save_success")), p({ action: l });
      });
      return;
    }
    m.value.validate(async (d) => {
      if (!d)
        return;
      const { type: P = "", api_key: S = "", base_url: e = "" } = n;
      B.value.find((f) => f.value === P);
      const i = { channel_id: w.value.channel_id, key: S, base_url: e, config: w.value.config || {}, models: y.value.filter((f) => f.checked).map((f) => f.value).join(","), name: P };
      l = i.channel_id ? "edit" : "add", T.value = true, await t.save({ data: i }).finally(() => {
        T.value = false;
      }), k("success", { action: l, data: i }), H.success(window.$t("action_save_success")), p({ action: l });
    });
  };
  return C({ open: M, close: p, reset: I }), (l, d) => {
    const P = ie, S = ze, e = fe, i = Ve, f = Re, O = Fe, s = Ue;
    return h(), D(R, null, [a(S, { title: l.$t("module.platform_model_add"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: _.value, "onUpdate:modelValue": d[0] || (d[0] = (r) => _.value = r), onClose: d[1] || (d[1] = (r) => p({ action: "add" })) }, { default: o(() => [ae((h(), D("ul", oa, [(h(true), D(R, null, ce(B.value, (r) => (h(), D("li", { key: r.value, class: Q(["flex items-center gap-4 py-5 px-6 border rounded box-border", [r.add_visible ? "" : "opacity-50"]]) }, [$("img", { class: "flex-none w-[40px] h-[40px] object-contain", src: l.$getRealPath({ url: `/images/platform/${r.icon}.png` }) }, null, 8, na), $("div", sa, v(l.$t(r.label)), 1), r.add_visible ? (h(), J(P, { key: 0, class: Q(["flex-none !border-none !px-5 text-[#3664EF] bg-[#F6F7F8]", r.is_add ? "!text-[#9A9A9A] !bg-[#F6F7F8]" : ""]), type: "primary", plain: "", size: "large", disabled: r.is_add, onClick: (oe) => L({ data: r }) }, { default: o(() => [N(v(l.$t(r.is_add ? "action_add_success" : "action_add")), 1)]), _: 2 }, 1032, ["class", "disabled", "onClick"])) : te("", true)], 2))), 128))])), [[s, c.value]])]), _: 1 }, 8, ["title", "modelValue"]), a(S, { title: l.$t("action_setting") + l.$t(w.value.label || ""), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", modelValue: E.value, "onUpdate:modelValue": d[5] || (d[5] = (r) => E.value = r), onClose: p }, { footer: o(() => [$("div", ua, [a(P, { class: "w-[96px] h-[36px]", type: "primary", loading: T.value || c.value, onClick: U }, { default: o(() => [N(v(l.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), a(P, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: Y(p, ["stop"]) }, { default: o(() => [N(v(l.$t("action_cancel")), 1)]), _: 1 })])]), default: o(() => [a(O, { ref_key: "form_ref", ref: m, model: n, "label-position": "top" }, { default: o(() => [a(i, { label: l.$t("module.platform_tool_api_key"), prop: "api_key", class: "is-required", rules: u(_e)({ message: "form_input_placeholder" }) }, { default: o(() => [a(e, { modelValue: n.api_key, "onUpdate:modelValue": d[2] || (d[2] = (r) => n.api_key = r), size: "large", placeholder: l.$t("module.platform_tool_api_key_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), [u(Ie)].includes(n.type) ? (h(), J(i, { key: 0, label: l.$t("module.platform_model_api_endpoint"), prop: "base_url", class: "is-required", rules: u(_e)({ message: "form_input_placeholder", validator: ["text", "link"] }) }, { default: o(() => [a(e, { modelValue: n.base_url, "onUpdate:modelValue": d[3] || (d[3] = (r) => n.base_url = r), size: "large", placeholder: l.$t("module.platform_model_api_endpoint_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])) : [u(fl)].includes(n.type) ? (h(), J(i, { key: 1, label: l.$t("module.platform_model_base_url"), prop: "base_url", class: "is-required", rules: u(_e)({ message: "form_input_placeholder" }) }, { default: o(() => [a(e, { modelValue: n.base_url, "onUpdate:modelValue": d[4] || (d[4] = (r) => n.base_url = r), size: "large", placeholder: l.$t("module.platform_model_base_url_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])) : te("", true), a(i, { class: "is-required", label: l.$t("module.platform_model_models"), prop: "models" }, { default: o(() => [ae((h(), D("ul", ia, [y.value.length ? te("", true) : (h(), D("div", da, v(l.$t("module.platform_model_models_empty")), 1)), (h(true), D(R, null, ce(y.value, (r) => (h(), D("li", { class: "w-full flex items-center gap-1.5", key: r.value }, [r.icon ? (h(), D("img", { key: 0, class: "flex-none w-[20px] h-[20px] object-contain", src: l.$getRealPath({ url: `/images/platform/${r.icon}.png` }) }, null, 8, ca)) : te("", true), $("label", ra, v(r.label), 1), d[12] || (d[12] = $("div", { class: "flex-1" }, null, -1)), a(f, { modelValue: r.checked, "onUpdate:modelValue": (oe) => r.checked = oe, size: "small" }, null, 8, ["modelValue", "onUpdate:modelValue"])]))), 128))])), [[s, c.value]])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]), a(S, { title: l.$t("module.platform_model_models_edit"), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", modelValue: z.value, "onUpdate:modelValue": d[10] || (d[10] = (r) => z.value = r), onClose: d[11] || (d[11] = (r) => p({ action: "model_edit" })) }, { footer: o(() => [$("div", _a, [a(P, { class: "w-[96px] h-[36px]", type: "primary", loading: T.value || c.value, onClick: d[8] || (d[8] = (r) => U({ action: "model_edit" })) }, { default: o(() => [N(v(l.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), a(P, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: d[9] || (d[9] = Y((r) => p({ action: "model_edit" }), ["stop"])) }, { default: o(() => [N(v(l.$t("action_cancel")), 1)]), _: 1 })])]), default: o(() => [a(O, { ref_key: "model_form_ref", ref: b, model: F, "label-position": "top" }, { default: o(() => [a(i, { label: l.$t("module.platform_model_models_id"), prop: "id", class: "is-required", rules: u(_e)({ message: "form_input_placeholder" }) }, { default: o(() => [a(e, { modelValue: F.id, "onUpdate:modelValue": d[6] || (d[6] = (r) => F.id = r), size: "large", disabled: "", placeholder: l.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), a(i, { label: l.$t("module.platform_model_models_name"), prop: "name" }, { default: o(() => [a(e, { modelValue: F.name, "onUpdate:modelValue": d[7] || (d[7] = (r) => F.name = r), size: "large", placeholder: l.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"])], 64);
  };
} }), ma = { class: "flex border-t pt-5 justify-end w-full" }, fa = X({ __name: "agent-create-drawer", emits: ["success"], setup(x, { expose: C, emit: V }) {
  const k = V, t = Al(), m = g(), b = g(false), E = g(ke), _ = g(false), c = g({});
  be("channelConfig", c);
  const T = j(() => c.value.channel_type == G.get(he) ? he : c.value.channel_type == G.get(ge) ? ge : "");
  be("channelTypeKey", T);
  async function n({ agent_type: y, data: z, agent_id: F } = {}) {
    if (t.resetState(), await ue(), E.value = y || ke, _.value = !!+F, t.agent_id = +F || 0, t.agent_type = t.form_data.custom_config.agent_type = E.value, t.form_data.logo = Il.get(y), t.form_data.group_id = 0, await t.loadDetailData(), t.loadGroupOptions(), t.loadChannelOptions(), t.loadSubscriptionOptions(), c.value = z.channel_config || {}, c.value.name = c.value.name || z.label || "", !c.value.channel_type)
      switch (z.value) {
        case K:
          c.value.channel_type = G.get(he);
          break;
        case q:
          c.value.channel_type = G.get(ge);
          break;
      }
    t.form_data.channel_type || (t.form_data.channel_type = c.value.channel_type || 0), t.form_data.model || (await ue(), t.form_data.model = T.value), b.value = true;
  }
  async function w() {
    b.value = false;
  }
  async function B() {
    const y = m.value;
    if (y && y.save) {
      t.saving = true;
      const { data: z = {} } = await y.save().finally(() => {
        t.saving = false;
      });
      z.agent_id;
    } else if (y && y.validateForm) {
      if (!await y.validateForm())
        return Promise.reject();
      await t.saveAgentData(), k("success", { agent_id: t.agent_id, action: _.value ? "update" : "create" });
    }
    w();
  }
  return C({ open: n, close: w }), (y, z) => {
    const F = ie, M = Ke;
    return h(), J(M, { title: y.$t("action_add"), modelValue: b.value, "onUpdate:modelValue": z[0] || (z[0] = (p) => b.value = p), size: "840px", "destroy-on-close": "", "append-to-body": "", "close-on-click-modal": false }, { footer: o(() => [$("div", ma, [a(F, { size: "large", onClick: w }, { default: o(() => [N(v(y.$t("action_cancel")), 1)]), _: 1 }), c.value.channel_id ? (h(), J(F, { key: 0, type: "primary", size: "large", loading: u(t).saving, onClick: B }, { default: o(() => [N(v(y.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"])) : te("", true)])]), default: o(() => [a(Dl, { ref_key: "agentFormRef", ref: m, "agent-type": E.value, "show-channel-config": "" }, null, 8, ["agent-type"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), va = { class: "flex items-center justify-between mb-4" }, ha = { class: "flex items-center gap-2 w-full" }, ga = ["src"], ya = { class: "flex-1 w-0 text-sm flex flex-col" }, ba = { class: "text-[#2563EB] truncate" }, wa = X({ __name: "agent-list-drawer", emits: ["change"], setup(x, { expose: C, emit: V }) {
  const k = g(), t = g(false), m = re({ channel_types: K, keyword: "", offset: 0, limit: 10 }), b = g([]), E = g(0), _ = g(false), c = g({}), T = g([]), n = async ({ data: l = {}, type: d = K } = {}) => {
    const { channel_config: P = {} } = l;
    m.channel_types = P.channel_type || G.get(d) || K, c.value = l, b.value = [], await ue(), t.value = true, y();
  }, w = () => {
    t.value = false;
  }, B = async () => {
    T.value.length || (T.value = await Tl.list({ params: { offset: 0, limit: 1e3 } }));
  }, y = () => (m.offset = 0, z()), z = async ({ channel_types: l = m.channel_types } = {}) => {
    _.value = true, await B();
    const { count: d = 0, agents: P = [] } = await ye.list({ params: { ...m, channel_types: l } }).finally(() => {
      _.value = false;
    });
    return b.value = [], await ue(), b.value = P.map((S = {}) => (S.user_group_ids = S.user_group_ids || [], S.user_group_names = S.user_group_ids.map((e) => (T.value.find((i) => i.group_id == e) || {}).group_name).filter((e) => e), S)), E.value = d, c.value.agent_total = d, { count: d, agents: P };
  }, F = (l) => {
    m.limit = l, y();
  }, M = (l) => {
    m.offset = (l - 1) * m.limit, z();
  }, p = async ({ data: { agent_id: l, enable: d } }) => {
    await ye.updateStatus({ data: { agent_id: l, enable: d } }), H.success(window.$t(d ? "action_enable_success" : "action_disable_success"));
  }, I = async ({ data: { agent_id: l } = {} } = {}) => {
    await de.confirm(window.$t("agent_delete_confirm"), window.$t("action_delete")), await ye.delete({ data: { agent_id: l } }), H.success(window.$t("action_delete_success")), z();
  }, L = ({ data: l = {} } = {}) => {
    let d = ke;
    m.channel_types === G.get(q) && (d = Pl), k.value.open({ agent_type: d, data: c.value, agent_id: l.agent_id });
  }, U = ({ action: l = "update" } = {}) => l === "create" ? y() : z();
  return C({ open: n, close: w, loadListData: z, create: ({ data: l = {}, type: d = K } = {}) => {
    const { channel_config: P = {} } = l;
    m.channel_types = P.channel_type || G.get(d) || K, c.value = l, L();
  } }), (l, d) => {
    const P = fe, S = ie, e = zl, i = Re, f = Fl, O = Ke;
    return h(), D(R, null, [a(O, { title: l.$t(u(ne).get(m.channel_types)), modelValue: t.value, "onUpdate:modelValue": d[1] || (d[1] = (s) => t.value = s), size: "70%", "destroy-on-close": "", "append-to-body": "", "close-on-click-modal": false }, { default: o(() => [$("div", va, [$("div", null, [a(P, { "prefix-icon": u(vl), modelValue: m.keyword, "onUpdate:modelValue": d[0] || (d[0] = (s) => m.keyword = s), placeholder: l.$t("action_search"), size: "large", onChange: y }, null, 8, ["prefix-icon", "modelValue", "placeholder"])]), a(S, { type: "primary", size: "large", onClick: L }, { default: o(() => [N(v(l.$t("action_add")), 1)]), _: 1 })]), a(f, { "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", data: b.value, total: E.value, loading: _.value, page: m.offset + 1, limit: m.limit, onPageSizeChange: F, onPageCurrentChange: M }, { default: o(() => [a(e, { prop: "date", label: l.$t("module.agent"), "min-width": "180", "show-overflow-tooltip": "" }, { default: o(({ row: s }) => [$("div", ha, [$("img", { class: "flex-none w-8 h-8 rounded-full overflow-hidden", src: s.logo, alt: "" }, null, 8, ga), $("div", ya, [$("div", ba, v(s.name || "--"), 1), ae($("div", { class: "text-xs text-[#808080] truncate" }, v(s.description || ""), 513), [[Ce, s.description]])])])]), _: 1 }, 8, ["label"]), a(e, { label: l.$t("usage_range"), "min-width": "140", "show-overflow-tooltip": "" }, { default: o(({ row: s }) => [$("span", { class: Q(s.user_group_names.length ? "" : "text-[#999]") }, v(s.user_group_names.join("\u3001") || "--"), 3)]), _: 1 }, 8, ["label"]), a(e, { label: l.$t("sort"), width: "80", "show-overflow-tooltip": "" }, { default: o(({ row: s = {} }) => [N(v(s.sort), 1)]), _: 1 }, 8, ["label"]), a(e, { label: l.$t("action_enable"), width: "80" }, { default: o(({ row: s }) => [a(i, { modelValue: s.enable, "onUpdate:modelValue": (r) => s.enable = r, onChange: (r) => p({ data: s }) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), _: 1 }, 8, ["label"]), a(e, { label: l.$t("operation"), width: "120", align: "right", fixed: "right" }, { default: o(({ row: s }) => [a(S, { type: "primary", link: "", onClick: (r) => L({ data: s }) }, { default: o(() => [N(v(l.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), a(S, { type: "primary", link: "", onClick: (r) => I({ data: s }) }, { default: o(() => [N(v(l.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading", "page", "limit"])]), _: 1 }, 8, ["title", "modelValue"]), a(fa, { ref_key: "agentCreateRef", ref: k, onSuccess: U }, null, 512)], 64);
  };
} }), $a = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, ka = { class: "font-semibold text-[#1D1E1F]" }, xa = { class: "flex flex-wrap gap-4 mt-6" }, Ea = { class: "flex items-center gap-4 p-5 box-border" }, Ca = { class: "text-[#1B2B51] font-semibold" }, Va = { class: "text-xs text-[#4F5052] px-5 box-border" }, Fa = { class: "w-full h-[44px] flex border-t box-border" }, za = { class: "w-full flex items-center font-semibold text-[#1D1E1F] mt-10" }, Aa = { class: "flex-1" }, Da = { class: "w-full flex flex-col gap-4 mt-6" }, Ia = { class: "flex items-center gap-4" }, Pa = ["src"], Ta = { class: "flex-1 text-[#1B2B51] font-semibold" }, Na = { class: "w-full flex flex-col bg-white rounded overflow-hidden gap-4 mt-6 px-5" }, Sa = { key: 0, class: "text-[#9A9A9A] text-sm py-5" }, La = { class: "text-[#4F5052] text-sm" }, Ba = { class: "w-full flex flex-col gap-y-5 box-border overflow-auto" }, Oa = ["src"], Ua = { class: "flex-none text-sm text[#1D1E1F]" }, Ra = X({ __name: "index", setup(x) {
  const { isLocalEnv: C, isOpLocalEnv: V } = hl(), k = [{ value: Z, label: ne.get(Z), icon: "coze", connected: false, authed_time: "", client_id: "", client_secret: "" }, { value: se, label: ne.get(se), icon: "app_builder", connected: false, authed_time: "", client_id: "", client_secret: "" }, { value: K, label: ne.get(K), icon: "dify", connected: false, authed_time: "", client_id: "", client_secret: "", agent_total: 0, channel_config: {}, channel_loading: true }, { value: q, label: ne.get(q), icon: "53ai", connected: false, authed_time: "", client_id: "", client_secret: "", agent_total: 0, channel_config: {}, channel_loading: true }, { value: pe, label: ne.get(pe), icon: "fast-gpt", connected: false, authed_time: "", client_id: "", client_secret: "" }], t = g(), m = g(), b = g(), E = g(), _ = g($e(k)), c = g(false);
  g([{ value: "search_online", label: "module.platform_search_online", desc: "module.platform_search_online_desc", icon: "search-online", enable: true, api_key: "sk-5f90820c429943bb99aaa18804a0e385" }]);
  const T = g([]), n = g(false), w = async () => {
    c.value = true;
    const e = await we.list().finally(() => {
      c.value = false;
    });
    _.value = $e(k).map((i) => {
      const f = e.find((s) => i.value == s.provider_type), O = _.value.find((s) => i.value == s.value);
      return [K, q].includes(i.value) && O ? O : (f && (i = { ...i, ...f }, i.connected = true, i.client_id = i.configs.client_id || "", i.client_secret = i.configs.client_secret || ""), i);
    });
  }, B = ({ data: e = {}, count: i = 0 } = {}) => {
    const f = _.value.find((O) => O.value == e.value);
    f && (f.agent_total = i);
  }, y = async () => {
    n.value = true;
    const e = await W.list().finally(() => {
      n.value = false;
    });
    let i = e.findIndex((s) => s.channel_type == G.get(K));
    const f = _.value.find((s) => s.value == K);
    if (i > -1) {
      const s = (e.splice(i, 1) || [])[0];
      f.channel_config = s || {};
      const { count: r = 0 } = await E.value.loadListData({ channel_types: s.channel_type });
      f.agent_total = r;
    }
    f.channel_loading = false, i = e.findIndex((s) => s.channel_type == G.get(q));
    const O = _.value.find((s) => s.value == q);
    if (i > -1) {
      const s = (e.splice(i, 1) || [])[0];
      O.channel_config = s || {};
      const { count: r = 0 } = await E.value.loadListData({ channel_types: s.channel_type });
      O.agent_total = r;
    }
    O.channel_loading = false, T.value = e.filter((s = {}) => ![G.get(K), G.get(q)].includes(+s.channel_type)).map((s = {}) => (s.deleting = false, s));
  }, z = () => {
    w(), y();
  }, F = ({ data: e = {} } = {}) => {
    if (e.value === pe)
      return H.warning(window.$t("feature_coming_soon"));
    if ([Z].includes(e.value) && C.value && V.value)
      return Nl({ title: window.$t("local_config_limited_tip"), content: window.$t("local_config_limited_desc", { url: window.location.href }), confirmButtonText: window.$t("know_it"), showCancelButton: false }).open();
    switch (e.value) {
      case K:
      case q:
        E.value.open({ data: e, type: e.value });
        break;
      default:
        t.value.open({ data: e });
    }
  }, M = ({ data: e = {} } = {}) => {
    E.value.create({ data: e, type: e.value });
  }, p = async ({ data: e = {} } = {}) => {
    e.provider_id && (await de.confirm(window.$t("module.platform_delete_confirm")), await we.delete({ data: { provider_id: e.provider_id } }), H.success(window.$t("action_delete_success")), w());
  }, I = ({ data: e = {} } = {}) => {
    b.value.open({ data: e });
  }, L = async ({ data: e = {}, index: i = 0 } = {}) => {
    await de.confirm(window.$t("module.platform_model_delete_confirm")), e.deleting = true, await W.delete({ data: { channel_id: e.channel_id } }).finally(() => {
      e.deleting = false;
    }), y(), H.success(window.$t("action_delete_success"));
  };
  let U = 0, l = 0;
  const d = ({ data: e = {}, index: i = 0, parent_data: f = {}, parent_index: O = 0 } = {}) => {
    U = i, l = O, b.value.open({ data: { ...f, ...e, id: e.value, name: e.label }, action: "model_edit" });
  }, P = async ({ data: e = {}, index: i = 0, parent_data: f = {}, parent_index: O = 0 } = {}) => {
    const s = f.model_options.length === 1;
    await de.confirm(s ? window.$t("module.platform_model_delete_confirm_v2") : window.$t("module.platform_model_delete_confirm")), s ? (n.value = true, await W.delete({ data: { channel_id: f.channel_id } }).finally(() => {
      n.value = false;
    }), y()) : (f.model_options.splice(i, 1), f.models = f.model_options.map((r) => r.value), await W.save({ data: { channel_id: f.channel_id, key: f.api_key, base_url: f.base_url, config: f.config || {}, models: f.model_options.map((r) => r.value).join(","), name: f.type } })), H.success(window.$t("action_delete_success"));
  }, S = ({ action: e = "", data: i = {} } = {}) => {
    if (e === "model_edit") {
      T.value[l].model_options[U].label = i.name;
      return;
    }
    y();
  };
  return gl(() => {
    z(), Pe.on("user-login-success", z);
  }), yl(() => {
    Pe.off("user-login-success", z);
  }), (e, i) => {
    const f = Vl, O = kl, s = ie, r = Cl, oe = Ee, Ye = Jl, He = Gl, qe = El, ve = Ue;
    return h(), D(R, null, [a(qe, { class: "px-[60px] py-8" }, { default: o(() => [a(f, { title: e.$t("module.platform") }, null, 8, ["title"]), $("div", $a, [$("h2", ka, v(e.$t("module.platform_header_title")), 1), ae((h(), D("ul", xa, [(h(true), D(R, null, ce(_.value, (A) => ae((h(), D("li", { key: A.value, class: Q(["flex-none min-w-[246px] w-[24%] h-[178px] flex flex-col border rounded box-border overflow-hidden", [A.value === u(pe) ? "opacity-50" : ""]]) }, [$("div", Ea, [a(O, { class: "flex-none", name: A.icon, width: "40", height: "40" }, null, 8, ["name"]), $("div", Ca, v(e.$t(A.label)), 1)]), $("div", Va, [[u(K), u(q)].includes(A.value) ? (h(), D(R, { key: 0 }, [N(v(e.$t("connecting_agent_total", { total: A.agent_total })), 1)], 64)) : A.connected && A.authed_time ? (h(), D(R, { key: 1 }, [N(v(e.$t("connected")) + " \xB7 " + v(e.$t("authorized_at")) + " " + v(A.authed_time.slice(0, 16)), 1)], 64)) : A.connected ? (h(), D(R, { key: 2 }, [N(v(e.$t("connecting")), 1)], 64)) : (h(), D(R, { key: 3 }, [N(v(e.$t("not_connected")), 1)], 64))]), i[0] || (i[0] = $("div", { class: "flex-1 w-full" }, null, -1)), $("div", Fa, [[u(K), u(q)].includes(A.value) ? (h(), D(R, { key: 0 }, [a(s, { class: "flex-1 h-[46px] text-[#3664EF] !border-none !outline-none rounded-none", type: "text", size: "default", onClick: Y((ee) => F({ data: A }), ["stop"]) }, { default: o(() => [N(v(e.$t("action_manage")), 1)]), _: 2 }, 1032, ["onClick"]), a(r, { class: "!h-full", direction: "vertical" }), a(s, { class: "flex-1 h-[46px] text-[#919499] !border-none !outline-none rounded-none", type: "text", size: "default", onClick: Y((ee) => M({ data: A }), ["stop"]) }, { default: o(() => [N(v(e.$t("action_add")), 1)]), _: 2 }, 1032, ["onClick"])], 64)) : A.connected ? (h(), D(R, { key: 1 }, [a(s, { class: "flex-1 h-[46px] text-[#3664EF] !border-none !outline-none rounded-none", type: "text", size: "default", onClick: Y((ee) => F({ data: A }), ["stop"]) }, { default: o(() => [N(v(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), a(r, { class: "!h-full", direction: "vertical" }), a(s, { class: "flex-1 h-[46px] text-[#919499] !border-none !outline-none rounded-none", type: "text", size: "default", onClick: Y((ee) => p({ data: A }), ["stop"]) }, { default: o(() => [N(v(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])], 64)) : (h(), J(s, { key: 2, class: "flex-1 h-[46px] bg-[#F3F6FE] text-[#3664EF] !border-none !outline-none rounded-none", type: "default", size: "default", onClick: Y((ee) => F({ data: A }), ["stop"]) }, { default: o(() => [N(v(e.$t("action_authorize")), 1)]), _: 2 }, 1032, ["onClick"]))])], 2)), [[ve, A.channel_loading]])), 128))])), [[ve, c.value]]), $("h2", za, [$("div", Aa, v(e.$t("module.platform_model")), 1)]), ae((h(), D("ul", Da, [(h(true), D(R, null, ce(T.value, (A, ee) => (h(), D("li", { key: A.value, class: "w-full p-5 border rounded box-border overflow-hidden bg-[#F8F9FA]" }, [$("div", Ia, [$("img", { class: "flex-none w-[40px] h-[40px] object-contain rounded-full overflow-hidden", src: e.$getRealPath({ url: `/images/platform/${A.icon}.png` }) }, null, 8, Pa), $("div", Ta, v(e.$t(A.label)), 1), a(s, { class: "flex-none !px-5", type: "default", size: "large", onClick: Y((le) => I({ data: A }), ["stop"]) }, { default: o(() => [N(v(e.$t("action_setting")), 1)]), _: 2 }, 1032, ["onClick"]), a(s, { class: "flex-none !ml-0 !px-3", type: "default", size: "large", loading: A.deleting, onClick: Y((le) => L({ data: A, index: ee }), ["stop"]) }, { default: o(() => [a(oe, { size: "14" }, { default: o(() => [a(u(bl))]), _: 1 })]), _: 2 }, 1032, ["loading", "onClick"])]), $("div", Na, [!A.model_options || !A.model_options.length ? (h(), D("div", Sa, v(e.$t("module.platform_model_models_empty")), 1)) : (h(), J(He, { key: 1, "model-value": ["models"], class: "w-full !border-none" }, { default: o(() => [a(Ye, { name: "models" }, { title: o(() => [$("span", La, v(e.$t("module.platform_model_models_total", { total: A.model_options.length })), 1)]), default: o(() => [$("ul", Ba, [(h(true), D(R, null, ce(A.model_options, (le, Ae) => (h(), D("li", { key: le.value, class: "w-full box-border flex items-center gap-2" }, [le.icon ? (h(), D("img", { key: 0, class: "flex-none w-[20px] h-[20px] object-contain", src: e.$getRealPath({ url: `/images/platform/${le.icon}.png` }) }, null, 8, Oa)) : te("", true), $("label", Ua, v(le.label), 1), a(oe, { class: "flex-none cursor-pointer hover:opacity-70", size: "14", onClick: (Ge) => d({ data: le, index: Ae, parent_data: A, parent_index: ee }) }, { default: o(() => [a(u(wl))]), _: 2 }, 1032, ["onClick"]), i[1] || (i[1] = $("div", { class: "flex-1" }, null, -1)), a(oe, { class: "flex-none cursor-pointer hover:opacity-70", size: "16", color: "#F04F4D", onClick: (Ge) => P({ data: le, index: Ae, parent_data: A, parent_index: ee }) }, { default: o(() => [a(u($l))]), _: 2 }, 1032, ["onClick"])]))), 128))])]), _: 2 }, 1024)]), _: 2 }, 1024))])]))), 128)), a(s, { class: "flex-none !border-none w-[106px]", type: "primary", plain: "", size: "large", onClick: I }, { default: o(() => [N(" + " + v(e.$t("action_add")), 1)]), _: 1 })])), [[ve, n.value]])])]), _: 1 }), a(la, { ref_key: "authorize_ref", ref: t, onSuccess: w }, null, 512), a(ta, { ref_key: "tool_setting_ref", ref: m }, null, 512), a(pa, { ref_key: "model_setting_ref", ref: b, onSuccess: S }, null, 512), a(wa, { ref_key: "agent_list_drawer_ref", ref: E, onChange: B }, null, 512)], 64);
  };
} });
const vt = xl(Ra, [["__scopeId", "data-v-aa0aa25e"]]);
export {
  vt as default
};
