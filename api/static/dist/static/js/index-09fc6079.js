import { _ as ot } from "./index-ad57f5b2.js";
import { aq as Ee, z as $e, A as xe, y as Y, aI as Ae, r as c, Z as W, b as w, j as J, w as t, d as m, f as e, L as z, t as _, x as ue, c as O, K as se, u as V, al as le, e as K, d2 as st, F as ae, bM as H, ab as ne, a9 as q, a5 as X, ag as fe, a4 as ee, ah as ge, a6 as pe, o as re, s as Be, a0 as de, q as Q, a1 as rt, a2 as it, R as Ce, G as ve, d3 as Ve, d4 as oe, h as dt, d5 as Pe, d6 as ie, d7 as _e, M as ke, Y as he, ak as ut, E as ct, an as pt, a as De, $ as mt, m as Se, p as _t, n as ce, I as ze, d8 as Le, d9 as Me, da as Oe, db as Je, aB as ft, ax as gt, aa as vt } from "./index-8579fe4a.js";
import { E as ht, a as bt } from "./el-tab-pane-e22c8d9b.js";
import { _ as wt } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { E as Ie, _ as Fe } from "./el-table-column-376475e4.js";
import "./el-checkbox-a21716fc.js";
import { E as je } from "./el-tag-0b6baecb.js";
import { E as be, a as we, b as ye } from "./el-dropdown-menu-ce96a192.js";
import "./el-scrollbar-4065fe54.js";
import "./el-dropdown-item-4ed993c7.js";
import "./el-select-8a770a23.js";
import { E as Ge } from "./el-text-f138b0ce.js";
import { E as yt } from "./el-drawer-393896dd.js";
import { _ as $t } from "./drawer.vue_vue_type_script_setup_true_lang-2dd065b8.js";
import { v as Ke } from "./el-loading-8747b309.js";
import { _ as xt } from "./index-3e1ea7e0.js";
import { b as kt, c as qe, g as Z } from "./group-39bff2fe.js";
import { a as Et } from "./agent-f71520b7.js";
import { E as Ct } from "./el-divider-7d014453.js";
import { E as Vt } from "./el-empty-0ab0c30c.js";
import "./index-3dae9a97.js";
import "./sortable.esm-7ba019b6.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./dropdown-85221e0a.js";
import "./index.vue_vue_type_script_setup_true_lang-5c7d7988.js";
import "./_commonjsHelpers-725317a4.js";
import "./index-ede470e7.js";
import "./index.vue_vue_type_script_setup_true_lang-dd688c6c.js";
import "./position-4ca9dd9d.js";
const Te = async () => {
  const F = Ee();
  return F.info.eid || await F.loadSelfInfo(), { did: 0, value: 0, name: F.info.name, label: F.info.name, index: 0, lastIndex: 0, children: [] };
}, te = { async fetch_department_tree(F) {
  let { data: { tree: D = [] } } = await $e.get("/api/departments/tree", { params: F }).catch(xe);
  const T = (p = {}) => (p = { ...p, children: p.children || [], ...p.department || {} }, p.label = p.name || "", p.value = p.did || 0, p.children = p.children.map((f, d) => (f = T(f), f.index = d, f.lastIndex = p.children.length - 1, f)), p);
  return D = D.map((p, f) => (p = T(p), p.index = f, p.lastIndex = D.length - 1, p)), [{ ...await Te(), children: JSON.parse(JSON.stringify(D)) }];
}, async save(F) {
  F = JSON.parse(JSON.stringify(F));
  const D = F.did || 0;
  return delete F.did, typeof F.sort > "u" && (F.sort = 999999), F.pdid || (F.pdid = 0), await $e[D ? "put" : "post"](`/api/departments${D ? `/${D}` : ""}`, F).catch(xe);
}, async delete(F) {
  return await $e.delete(`/api/departments/${F}`).catch(xe);
} };
const Dt = { class: "w-full flex-center gap-4 relative" }, St = { class: "text-[#1D1E1F]" }, zt = { class: "py-4 flex items-center justify-center" }, It = Y({ __name: "user-internal-add-dialog", emits: ["success"], setup(F, { expose: D, emit: T }) {
  const i = T, p = Ae("organizationData") || c({}), f = c(), d = c(false), o = W({ users: [] }), b = c(false), v = c([]);
  let I = null;
  const k = ({ success: h } = {}) => {
    y(), o.users = [], $(), I = h, d.value = true;
  }, E = () => {
    d.value = false;
  }, y = async () => {
    const { list: h = [] } = await H.fetch_internal_user({ offset: 0, limit: 1e4 });
    v.value = h;
  }, $ = () => {
    const h = o.users[o.users.length - 1] || {};
    o.users.push({ nickname: "", username: "", password: h.password || "", did: h.did || p.value.did || 0 });
  }, C = (h) => {
    o.users.splice(h, 1);
  }, x = (h, B, U) => {
    if (v.value.some((g) => g.username === B))
      return U(new Error(window.$t("internal_user.account.same_member_exists_tip")));
    const u = h.fullField || h.field || "";
    let r = Number(u.split(".")[1]);
    const a = [];
    if (o.users.forEach((g, l) => {
      l !== r && g.username === B && a.push(l + 1);
    }), a.length > 0)
      return U(new Error(window.$t("internal_user.account.same_mobile_exists_tip", { index: a.join("\u3001") })));
    U();
  }, N = async () => {
    if (!await f.value.validate())
      return;
    const B = JSON.parse(JSON.stringify(o.users)).map((u) => (u.did = u.did || 0, u));
    b.value = true;
    const { data: { failed: U = [] } = {} } = await H.batch_save_internal_user({ users: B }).finally(() => {
      b.value = false;
    });
    if (U && U.length) {
      const u = U.filter((r) => r.existing_type == 1).map((r) => {
        const a = B.find((g) => g.username === r.username) || {};
        return r.did = a.did || 0, r;
      });
      await ne.confirm(window.$t("internal_user.account.register_to_internal_confirm", { mobile: u.map((r) => r.message).join("\u3001") }), window.$t("tip")).then(() => H.register_to_internal({ user_departments: u.map((r) => ({ did: r.did, user_id: r.user_id })) })).catch(() => Promise.resolve());
    }
    typeof I == "function" && I(), i("success"), q.success(window.$t("action_save_success")), E();
  };
  return D({ open: k, close: E }), (h, B) => {
    const U = X, u = fe, r = ee, a = ge, g = pe;
    return w(), J(g, { modelValue: d.value, "onUpdate:modelValue": B[1] || (B[1] = (l) => d.value = l), title: h.$t("action_add"), "close-on-click-modal": false, width: "920px", "destroy-on-close": "", "append-to-body": "", onClose: E }, { footer: t(() => [m("div", zt, [e(r, { class: "w-[96px] h-[36px]", type: "primary", loading: b.value, onClick: N }, { default: t(() => [z(_(h.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"]), e(r, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: ue(E, ["stop"]) }, { default: t(() => [z(_(h.$t("action_cancel")), 1)]), _: 1 })])]), default: t(() => [e(a, { class: "w-full", ref_key: "formRef", ref: f, model: o, "label-position": "top" }, { default: t(() => [(w(true), O(ae, null, se(o.users, (l, n) => (w(), J(u, { class: "w-full", key: l.did }, { default: t(() => [m("div", Dt, [e(u, { class: "flex-1 w-0", label: h.$t("internal_user.account.name"), prop: `users.${n}.nickname`, rules: V(le)({ message: "internal_user.account.name_placeholder" }) }, { default: t(() => [e(U, { modelValue: l.nickname, "onUpdate:modelValue": (s) => l.nickname = s, size: "large", placeholder: h.$t("internal_user.account.name_placeholder") }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), _: 2 }, 1032, ["label", "prop", "rules"]), e(u, { class: "flex-1 w-0", prop: `users.${n}.username`, rules: [...V(le)({ message: "internal_user.account.mobile_placeholder", validator: ["text", "mobile"] }), { validator: x, trigger: "blur" }] }, { label: t(() => [m("span", St, _(h.$t("internal_user.account.mobile")), 1)]), default: t(() => [e(U, { modelValue: l.username, "onUpdate:modelValue": (s) => l.username = s, size: "large", autocomplete: "new-username", name: "prevent_autofill_username", placeholder: h.$t("internal_user.account.mobile_placeholder"), clearable: "" }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), _: 2 }, 1032, ["prop", "rules"]), e(u, { class: "flex-1 w-0", label: h.$t("password"), prop: `users.${n}.password`, rules: [...V(le)({ message: "internal_user.account.password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: h.$t("login.password_length"), trigger: "blur" }] }, { default: t(() => [e(U, { modelValue: l.password, "onUpdate:modelValue": (s) => l.password = s, size: "large", placeholder: h.$t("internal_user.account.password_placeholder"), clearable: "", onBlur: B[0] || (B[0] = (s) => f.value.validateField("password")) }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), _: 2 }, 1032, ["label", "prop", "rules"]), K("", true), o.users.length > 1 ? (w(), J(r, { key: 1, class: "!size-4 translate-y-4", type: "danger", circle: "", size: "small", icon: V(st), onClick: (s) => C(n) }, null, 8, ["icon", "onClick"])) : K("", true)])]), _: 2 }, 1024))), 128))]), _: 1 }, 8, ["model"]), e(r, { type: "primary", link: "", onClick: $ }, { default: t(() => [z(" + " + _(h.$t("internal_user.account.add")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), Ft = { class: "relative" }, Tt = { key: 1, class: "w-full flex items-center flex-wrap gap-2" }, Ut = { class: "flex h-[400px]" }, Nt = { class: "flex-1 w-0 pr-4 box-border flex flex-col border-r border-[#E5E5E5]" }, Rt = { class: "w-full flex items-center gap-2 group" }, At = ["title"], Bt = { class: "flex-1 w-0 pl-4 box-border flex flex-col" }, Pt = { class: "leading-[40px]" }, Lt = { class: "flex-1 h-0 w-full mt-3 bg-[#FBF8FB] rounded overflow-auto" }, Mt = { class: "box-border p-4 flex items-start flex-wrap gap-2" }, Ot = { class: "py-4 flex items-center justify-end" }, Ye = Y({ __name: "index", props: { modelValue: { default: () => [] }, type: { default: "general" }, defaultFirstValue: { type: Boolean, default: true } }, emits: ["update:modelValue", "change", "confirm"], setup(F, { expose: D, emit: T }) {
  const i = F, p = T, f = c([]), d = c({}), o = c(false), b = c(JSON.parse(JSON.stringify(i.modelValue))), v = c(false), I = ({ value: a = [] } = {}) => {
    a = JSON.parse(JSON.stringify(a)), b.value = a, p("update:modelValue", a), p("change", { value: a });
  }, k = async () => {
    o.value = true, f.value = await te.fetch_department_tree().finally(() => {
      o.value = false;
    }), d.value = f.value[0];
  }, E = c(), y = W({ keyword: "" }), $ = () => {
    b.value = JSON.parse(JSON.stringify(i.modelValue)).map((a = {}) => (a.value = +a.value || +a.did || +a.user_id || 0, a.label = a.label || a.name || "", a)), v.value = true;
  }, C = () => {
    v.value = false;
  }, x = () => {
    E.value.filter(y.keyword);
  }, N = (a, g) => a ? g.name.includes(a) : true, h = (a) => {
    b.value = b.value.filter((g) => g.value !== a.value);
  }, B = (a) => {
    b.value.some((g) => g.value === a.value) ? b.value = b.value.filter((g) => g.value !== a.value) : b.value.push(a);
  }, U = c([]), u = async () => {
    const a = { status: Ve, offset: 0, limit: 1e4 }, { list: g = [] } = await H.fetch_internal_user(a);
    U.value = g.map((l = {}) => (l.value = +l.user_id || 0, l.label = l.nickname || l.name || "", l));
  }, r = () => {
    I({ value: b.value }), p("confirm", { value: b.value }), C();
  };
  return re(async () => {
    if (["general", "department"].includes(i.type) && (d.value = await Te(), i.defaultFirstValue && !i.modelValue.length && I({ value: [d.value] }), await Promise.all([k(), ["general"].includes(i.type) ? u() : Promise.resolve()]), ["general"].includes(i.type))) {
      const a = (g = {}) => (g.children = g.children.map((l, n) => (l = a(l), l)), U.value.forEach((l) => {
        const n = l.dept_id_list || [];
        (n.includes(g.did) || !n.length && g.did == 0) && g.children.push(JSON.parse(JSON.stringify(l)));
      }), g);
      f.value = f.value.map((g, l) => (g = a(g), g));
    }
  }), D({ open: $, close: C }), (a, g) => {
    const l = Ce, n = ee, s = X, R = ve, P = Ge, G = pe;
    return w(), O("div", Ft, [a.$slots.trigger ? (w(), O("div", { key: 0, onClick: $ }, [Be(a.$slots, "trigger")])) : K("", true), a.$slots.trigger ? K("", true) : (w(), O("ul", Tt, [(w(true), O(ae, null, se(a.modelValue, (S) => (w(), O("li", { key: S.value, class: "flex items-center gap-2 px-2 box-border border border-[#E5E5E5] rounded-sm text-[#666]" }, [e(l, { name: "department", width: "16px", height: "16px", color: "#57A1FF" }), z(" " + _(S.name), 1)]))), 128)), e(n, { type: "primary", link: "", onClick: $ }, { default: t(() => [z(_(a.$t(a.modelValue.length ? "action_modify" : "action_add")), 1)]), _: 1 })])), e(G, { title: a.$t("action_select"), width: "650px", "close-on-click-modal": false, "destroy-on-close": "", "append-to-body": "", modelValue: v.value, "onUpdate:modelValue": g[1] || (g[1] = (S) => v.value = S) }, { footer: t(() => [m("div", Ot, [e(n, { size: "large", onClick: ue(C, ["stop"]) }, { default: t(() => [z(_(a.$t("action_cancel")), 1)]), _: 1 }), e(n, { size: "large", type: "primary", onClick: r }, { default: t(() => [z(_(a.$t("action_confirm")), 1)]), _: 1 })])]), default: t(() => [m("div", Ut, [m("div", Nt, [e(s, { class: "w-full h-[36px]", modelValue: y.keyword, "onUpdate:modelValue": g[0] || (g[0] = (S) => y.keyword = S), size: "default", clearable: "", "prefix-icon": V(de), placeholder: a.$t("internal_user.organization.search_placeholder"), onChange: x }, null, 8, ["modelValue", "prefix-icon", "placeholder"]), e(P, { ref_key: "treeRef", ref: E, class: "mt-4 flex-1 h-0 box-border pr-1 overflow-auto", "node-key": "value", data: f.value, "default-expanded-keys": [0], "expand-on-click-node": false, "filter-node-method": N, onNodeClick: B }, { default: t(({ data: S }) => [m("div", Rt, [e(l, { name: +S.user_id ? "member" : "department", width: "16px", height: "16px", color: b.value.some((j) => j.value === S.value) ? "#3664EF" : "#999" }, null, 8, ["name", "color"]), m("div", { class: Q(["flex-1 w-0 text-sm truncate", [b.value.some((j) => j.value === S.value) ? "text-[#3664EF]" : "text-[#333]"]]), title: S.label }, _(S.label), 11, At), b.value.some((j) => j.value === S.value) ? (w(), J(R, { key: 0, color: "#3664EF" }, { default: t(() => [e(V(rt))]), _: 1 })) : K("", true)])]), _: 1 }, 8, ["data"])]), m("div", Bt, [m("h4", Pt, _(a.$t("internal_user.scope.selected_title")), 1), m("div", Lt, [m("ul", Mt, [(w(true), O(ae, null, se(b.value, (S) => (w(), O("li", { key: S.value, class: "py-1 bg-white px-2 box-border border border-[#E5E5E5] rounded-sm" }, [e(l, { class: "inline-block mr-1", name: +S.user_id ? "member" : "department", width: "16px", height: "16px", color: "#939499" }, null, 8, ["name"]), z(" " + _(S.label) + " ", 1), e(n, { class: "ml-1 !outline-none !border-none !bg-[#C4C4C4] !size-4", style: { zoom: "0.9" }, icon: V(it), type: "info", size: "small", circle: "", onClick: (j) => h(S) }, null, 8, ["icon", "onClick"])]))), 128))])])])])]), _: 1 }, 8, ["title", "modelValue"])]);
  };
} }), Jt = { class: "flex items-center" }, He = Y({ __name: "user-internal-status", props: { modelValue: { default: oe }, actionDisabled: { type: Boolean, default: false }, userData: { default: () => ({}) }, buttonClass: { default: "" }, size: { default: "default" } }, emits: ["update:modelValue", "change"], setup(F, { emit: D }) {
  const { proxy: T } = dt(), i = /* @__PURE__ */ new Map([[oe, "info"], [ie, "success"], [_e, "danger"]]), p = F, f = D, d = async (o) => {
    p.actionDisabled || (await H.update_user_status({ user_id: p.userData.user_id, status: o }), q.success(window.$t("action_save_success"))), f("update:modelValue", o), f("change", { value: o }), T.$forceUpdate();
  };
  return (o, b) => {
    const v = je, I = ee, k = be, E = we, y = ye;
    return w(), O("div", Jt, [e(v, { type: V(i).get(o.modelValue), effect: o.modelValue === V(oe) ? "plain" : "light", size: o.size }, { default: t(() => [z(_(o.$t(V(Pe).get(o.modelValue) || "")), 1)]), _: 1 }, 8, ["type", "effect", "size"]), [V(ie), V(_e)].includes(o.modelValue) ? (w(), J(y, { key: 0, trigger: "click", onCommand: d }, { dropdown: t(() => [e(E, null, { default: t(() => [e(k, { command: o.modelValue === V(ie) ? V(_e) : V(ie) }, { default: t(() => [z(_(o.$t(o.modelValue === V(ie) ? "internal_user.action.disabled" : "internal_user.action.enable")), 1)]), _: 1 }, 8, ["command"])]), _: 1 })]), default: t(() => [m("span", null, [e(I, { class: Q(["!px-2 ml-2", o.buttonClass]), size: o.size === "default" ? "small" : "default", icon: V(ke) }, null, 8, ["class", "size", "icon"])])]), _: 1 })) : K("", true)]);
  };
} }), jt = { class: "text-[#999] text-sm mt-2" }, Gt = { class: "text-[#999] text-sm mt-2" }, Kt = { class: "pt-4 flex items-center justify-end border-t border-[#E5E5E5]" }, qt = Y({ __name: "user-internal-edit-drawer", emits: ["success"], setup(F, { expose: D, emit: T }) {
  const i = T, p = c(), f = c(false), d = W({ name: "", nickname: "", mobile: "", department: [], status: oe }), o = c(false);
  c([]);
  const b = c({});
  let v = null;
  const I = ({ data: y = {}, success: $ } = {}) => {
    const C = (y.memberbindings || [])[0] || {};
    d.name = C.name || "", d.nickname = y.nickname || "", d.mobile = y.mobile || "", d.department = y.departments || [], d.status = +y.status || oe, b.value = y, v = $, f.value = true;
  }, k = () => {
    f.value = false;
  }, E = async () => {
    if (!await p.value.validate())
      return;
    o.value = true;
    const { data: { failed: $ = [] } = {} } = await H.update_internal_user({ user_id: b.value.user_id, department: d.department.map((C) => C.value), mobile: d.mobile, nickname: d.nickname, status: d.status }).finally(() => {
      o.value = false;
    });
    if ($ && $.length) {
      const C = $.filter((x) => x.existing_type == 1).map((x) => {
        const N = users.find((h) => h.username === x.username) || {};
        return x.did = N.did || 0, x;
      });
      await ne.confirm(window.$t("internal_user.account.register_to_internal_confirm", { mobile: C.map((x) => x.username).join("\u3001") }), window.$t("tip")).then(() => {
        H.register_to_internal({ user_departments: C.map((x) => ({ did: x.did, user_id: x.user_id })) });
      }).catch(() => Promise.resolve());
    }
    typeof v == "function" && v(), i("success"), q.success(window.$t("action_save_success")), k();
  };
  return D({ open: I, close: k }), (y, $) => {
    const C = X, x = fe, N = Ye, h = ge, B = ee, U = yt;
    return w(), J(U, { modelValue: f.value, "onUpdate:modelValue": $[5] || ($[5] = (u) => f.value = u), title: y.$t("internal_user.account.edit_member"), "close-on-click-modal": false, size: "700px", "destroy-on-close": "", "append-to-body": "", onClose: k }, { footer: t(() => [m("div", Kt, [e(B, { size: "large", onClick: ue(k, ["stop"]) }, { default: t(() => [z(_(y.$t("action_cancel")), 1)]), _: 1 }), e(B, { size: "large", type: "primary", loading: o.value, onClick: E }, { default: t(() => [z(_(y.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])]), default: t(() => [e(h, { class: "w-full", ref_key: "formRef", ref: p, model: d, "label-position": "top" }, { default: t(() => [e(x, { label: y.$t("internal_user.account.name") }, { default: t(() => [e(C, { modelValue: d.name, "onUpdate:modelValue": $[0] || ($[0] = (u) => d.name = u), size: "large", disabled: "", placeholder: y.$t("internal_user.account.name_placeholder") }, null, 8, ["modelValue", "placeholder"]), m("div", jt, _(y.$t("internal_user.account.name_disabled_tip")), 1)]), _: 1 }, 8, ["label"]), e(x, { class: "is-required", label: y.$t("internal_user.account.nickname"), prop: "nickname", rules: V(le)({ message: "internal_user.account.nickname_placeholder" }) }, { default: t(() => [e(C, { modelValue: d.nickname, "onUpdate:modelValue": $[1] || ($[1] = (u) => d.nickname = u), size: "large", placeholder: y.$t("internal_user.account.nickname_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), e(x, { class: "is-required", label: y.$t("internal_user.account.mobile"), prop: "mobile", rules: [...V(le)({ message: "internal_user.account.mobile_placeholder", validator: ["text", "mobile"] })] }, { default: t(() => [e(C, { modelValue: d.mobile, "onUpdate:modelValue": $[2] || ($[2] = (u) => d.mobile = u), size: "large", autocomplete: "new-mobile", placeholder: y.$t("internal_user.account.mobile_placeholder"), disabled: b.value.status !== V(oe), clearable: "" }, null, 8, ["modelValue", "placeholder", "disabled"]), m("div", Gt, _(y.$t("internal_user.account.mobile_disabled_tip")), 1)]), _: 1 }, 8, ["label", "rules"]), e(x, { label: y.$t("internal_user.account.department"), prop: "department" }, { default: t(() => [e(N, { modelValue: d.department, "onUpdate:modelValue": $[3] || ($[3] = (u) => d.department = u), type: "department" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), e(x, { label: y.$t("internal_user.account.status"), prop: "status" }, { default: t(() => [e(He, { modelValue: d.status, "onUpdate:modelValue": $[4] || ($[4] = (u) => d.status = u), userData: b.value, actionDisabled: "", size: "large" }, null, 8, ["modelValue", "userData"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), Yt = { key: 0, class: "flex items-center gap-2" }, Ht = ["title"], Wt = { class: "flex items-center justify-between" }, Zt = { class: "flex items-center gap-3" }, Qt = { class: "!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer" }, Xt = { class: "flex-center gap-3" }, ea = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, ta = { class: "text-[#5A6D9E] h-8 flex-center ml-2 !outline-none !border-none" }, We = Y({ __name: "account", setup(F) {
  const D = Ae("organizationData") || c({}), T = he(() => !!(D.value.name || D.value.nickname)), i = Ee(), p = ut();
  ct();
  const { isWorkEnv: f } = pt(), d = [Ve, oe, ie, _e].map((a) => ({ value: a, label: Pe.get(a) })), o = c(), b = c(), v = W({ status: -1, keyword: "", page: 1, pageSize: 10 }), I = c(false), k = c([]), E = c(0), y = (a) => {
    v.status = a, $();
  }, $ = () => {
    v.page = 1, C();
  }, C = async () => {
    if (I.value)
      return;
    I.value = true;
    const a = { status: v.status, keyword: v.keyword, offset: (v.page - 1) * v.pageSize, limit: v.pageSize };
    D.value && (D.value.user_id ? a.keyword = D.value.nickname || "" : D.value.did && (a.did = D.value.did)), a.status < 0 && delete a.status;
    const { total: g = 0, list: l = [] } = await H.fetch_internal_user(a).finally(() => {
      I.value = false;
    });
    k.value = l.map((n) => (n.deleting = false, n)), E.value = +g || 0;
  }, x = () => {
    o.value.open({ success: () => {
      $();
    } });
  }, N = (a) => {
    b.value.open({ data: a, success: () => {
      C();
    } });
  }, h = async (a) => {
    await ne.confirm(window.$t("module.operation_user_delete_confirm")), a.deleting = true, await H.delete_user({ user_id: a.user_id }).finally(() => {
      a.deleting = false;
    }), q.success(window.$t("action_delete_success")), C();
  }, B = (a) => {
    v.pageSize = a, $();
  }, U = (a) => {
    v.page = a, C();
  }, u = c(), r = (a, g = {}) => {
    switch (a) {
      case "dialogue_record":
        u.value.open({ type: "user", relatedId: g.user_id });
        break;
      case "delete":
        h(g);
        break;
    }
  };
  return re(async () => {
    $();
  }), De(() => {
  }), mt(() => D.value, () => {
    $();
  }, { deep: true }), (a, g) => {
    const l = ve, n = be, s = we, R = ye, P = X, G = ee, S = Ie, j = Fe;
    return w(), O("div", { class: Q(["max-h-ful flex flex-col bg-white py-6 box-border overflow-auto", [T.value ? "px-5" : "px-8"]]) }, [T.value ? (w(), O("div", Yt, [m("div", { class: "h-[40px] text-[#333] text-xl truncate", title: V(D).name }, _(a.$t("internal_user.department.member_total_count", { name: V(D).name, total: E.value })), 9, Ht)])) : K("", true), m("div", Wt, [m("div", Zt, [e(R, { placement: "bottom", onCommand: y }, { dropdown: t(() => [e(s, null, { default: t(() => [(w(true), O(ae, null, se(V(d), (A) => (w(), J(n, { key: A.value, command: A.value }, { default: t(() => [z(_(a.$t(A.label)), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: t(() => {
      var _a2;
      return [m("div", Qt, [z(_(a.$t(((_a2 = V(d).find((A) => A.value === v.status)) == null ? void 0 : _a2.label) || "internal_user.status.all")) + " ", 1), e(l, { size: "14", color: "#9EA5B6" }, { default: t(() => [e(V(ke))]), _: 1 })])];
    }), _: 1 })]), m("div", Xt, [T.value ? K("", true) : (w(), J(P, { key: 0, modelValue: v.keyword, "onUpdate:modelValue": g[0] || (g[0] = (A) => v.keyword = A), style: { width: "268px" }, size: "large", clearable: "", "suffix-icon": V(de), placeholder: a.$t("internal_user.account.search_placeholder"), onChange: $ }, null, 8, ["modelValue", "suffix-icon", "placeholder"])), e(G, { class: "min-w-[100px]", type: "primary", size: "large", onClick: x }, { default: t(() => [z(" + " + _(a.$t("action_add")), 1)]), _: 1 })])]), m("div", ea, [e(j, { data: k.value, total: E.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", "row-class-name": "group", loading: I.value, onPageCurrentChange: U, onPageSizeChange: B }, { default: t(() => [e(S, { label: a.$t("internal_user.account.nickname"), "min-width": "140", prop: "nickname", "show-overflow-tooltip": "" }, null, 8, ["label"]), e(S, { label: a.$t("internal_user.account.mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: t(({ row: A }) => [m("span", { class: Q({ "text-[#9B9B9B]": !A.mobile }) }, _(A.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), e(S, { label: a.$t("internal_user.account.department"), "min-width": "140", prop: "department", "show-overflow-tooltip": "" }, { default: t(({ row: A }) => [m("span", null, _(A.dept_names || V(i).info.name || "--"), 1)]), _: 1 }, 8, ["label"]), e(S, { label: a.$t("internal_user.account.status"), "min-width": "140", prop: "status", "show-overflow-tooltip": "" }, { default: t(({ row: A }) => [e(He, { modelValue: A.status, "onUpdate:modelValue": (L) => A.status = L, "user-data": A, "button-class": "invisible group-hover:visible" }, null, 8, ["modelValue", "onUpdate:modelValue", "user-data"])]), _: 1 }, 8, ["label"]), e(S, { label: a.$t("operation"), width: "120", fixed: "right", align: "right" }, { default: t(({ row: A }) => [e(G, { class: "text-[#5A6D9E] !bg-transparent", type: "text", onClick: (L) => N(A) }, { default: t(() => [z(_(a.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), V(f) ? (w(), J(G, { key: 1, class: "text-[#5A6D9E] !bg-transparent !w-[30px] text-left", type: "text", loading: A.deleting, disabled: A.user_id == V(p).info.user_id, onClick: (L) => h(A) }, { default: t(() => [z(_(A.user_id == V(p).info.user_id ? "--" : a.$t("action_delete")), 1)]), _: 2 }, 1032, ["loading", "disabled", "onClick"])) : (w(), J(R, { key: 0, placement: "bottom", onCommand: (L) => r(L, A) }, { dropdown: t(() => [e(s, null, { default: t(() => [e(n, { command: "dialogue_record" }, { default: t(() => [z(_(a.$t("dialogue_record")), 1)]), _: 1 }), e(n, { disabled: A.user_id == V(p).info.user_id, command: "delete" }, { default: t(() => [z(_(a.$t("action_delete")), 1)]), _: 2 }, 1032, ["disabled"])]), _: 2 }, 1024)]), default: t(() => [m("div", ta, [z(_(a.$t("more")) + " ", 1), e(l, { size: "14", class: "ml-1" }, { default: t(() => [e(V(ke))]), _: 1 })])]), _: 2 }, 1032, ["onCommand"]))]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading"])]), e(It, { ref_key: "userAddRef", ref: o }, null, 512), e(qt, { ref_key: "userEditRef", ref: b }, null, 512), e($t, { ref_key: "dialogueRecordRef", ref: u }, null, 512)], 2);
  };
} }), aa = { class: "relative" }, la = { key: 1, class: "w-full flex items-center flex-wrap gap-2" }, na = ["src"], oa = { class: "text-[#333] inline-block mt-2 ml-2" }, sa = { class: "w-full flex items-center justify-between gap-4" }, ra = { class: "flex-1 w-0" }, ia = { class: "flex items-center gap-2 w-full" }, da = ["src"], ua = { class: "flex-1 w-0 text-sm flex flex-col" }, ca = { class: "text-[#2563EB] truncate" }, pa = { class: "py-4 flex items-center justify-between" }, ma = ["innerHTML"], _a = { class: "flex-center" }, fa = Y({ __name: "index", props: { modelValue: { default: () => [] } }, emits: ["update:modelValue", "change", "confirm", "remove"], setup(F, { expose: D, emit: T }) {
  const i = F, p = T, f = c(), d = c(JSON.parse(JSON.stringify(i.modelValue))), o = c(false), b = c([]), v = c(0), I = c(false), k = W({ group_id: "-1", keyword: "", page: 1, pageSize: 10 }), E = c(/* @__PURE__ */ new Map([])), y = he(() => {
    let l = Array.from(E.value.values()).flat();
    return l = l.filter((n, s, R) => s === R.findIndex((P) => P.agent_id === n.agent_id) && !i.modelValue.find((P) => P.agent_id === n.agent_id)), l;
  }), $ = ({ value: l = [] } = {}) => {
    l = JSON.parse(JSON.stringify(l)), d.value = l, p("update:modelValue", l), p("change", { value: l });
  }, C = async () => {
    I.value = true;
    const { count: l = 0, agents: n = [] } = await Et.list({ params: { group_id: k.group_id, keyword: k.keyword, offset: (k.page - 1) * k.pageSize, limit: k.pageSize } }).catch(() => {
      I.value = false;
    });
    v.value = l, b.value = [], await ce(), b.value = n.map((s = {}) => (s.value = +s.agent_id || 0, s.label = s.name || "", s)), await ce(), y.value.length && (await ce(), y.value.forEach((s = {}) => {
      const R = b.value.find((P) => P.agent_id === s.agent_id);
      R && f.value.toggleRowSelection(R);
    })), await ce(), b.value.forEach((s = {}) => {
      !!i.modelValue.find((P) => P.agent_id === s.agent_id) && !y.value.find((P) => P.agent_id === s.agent_id) && f.value.toggleRowSelection(s);
    }), I.value = false;
  }, x = async () => {
    E.value = /* @__PURE__ */ new Map([]), d.value = JSON.parse(JSON.stringify(i.modelValue)).map((l = {}) => (l.value = +l.value || +l.agent_id || 0, l.label = l.label || l.name || "", l)), o.value = true, await ce(), h();
  }, N = () => {
    o.value = false;
  }, h = () => (k.page = 1, C()), B = (l) => {
    k.pageSize = l, h();
  }, U = (l) => {
    k.page = l, C();
  }, u = (l) => {
    I.value || E.value.set(k.group_id, [...l]);
  }, r = (l = {}) => !!!i.modelValue.find((s) => s.agent_id === l.agent_id), a = (l) => {
    d.value = d.value.filter((n) => n.value !== l.value), p("remove", { value: [l] });
  }, g = () => {
    const l = JSON.parse(JSON.stringify(y.value));
    $({ value: l }), p("confirm", { value: l }), N();
  };
  return re(async () => {
  }), D({ open: x, close: N }), (l, n) => {
    const s = ee, R = je, P = xt, G = X, S = Ie, j = Fe, A = pe;
    return w(), O("div", aa, [l.$slots.trigger ? (w(), O("div", { key: 0, onClick: x }, [Be(l.$slots, "trigger", {}, void 0, true)])) : K("", true), l.$slots.trigger ? K("", true) : (w(), O("div", la, [e(s, { type: "default", class: "!bg-transparent !border-dashed border-[#3664EF] text-[#3664EF]", plain: "", size: "large", onClick: x }, { default: t(() => [z(" + " + _(l.$t("action_add")), 1)]), _: 1 }), (w(true), O(ae, null, se(l.modelValue, (L) => (w(), J(R, { key: L.value, size: "large", effect: "plain", type: "info", closable: "", class: "!h-[40px]", onClose: (Ue) => a(L) }, { default: t(() => [m("img", { class: "size-6 inline-block object-contain rounded-full overflow-hidden", src: L.logo || "" }, null, 8, na), m("label", oa, _(L.label), 1)]), _: 2 }, 1032, ["onClose"]))), 128))])), e(A, { modelValue: o.value, "onUpdate:modelValue": n[2] || (n[2] = (L) => o.value = L), title: l.$t("action_select"), "close-on-click-modal": false, width: "800px", "destroy-on-close": "", "append-to-body": "", "align-center": "", onClose: N }, { footer: t(() => [m("div", pa, [m("div", { class: "text-sm text-[#768097] text-left", innerHTML: l.$t("selected_tip", { total: `<span class='text-[#3664EF]'>${y.value.length}</span>` }) }, null, 8, ma), m("div", _a, [e(s, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: ue(N, ["stop"]) }, { default: t(() => [z(_(l.$t("action_cancel")), 1)]), _: 1 }), e(s, { class: "w-[96px] h-[36px]", type: "primary", loading: I.value, disabled: !y.value.length, onClick: g }, { default: t(() => [z(_(l.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading", "disabled"])])])]), default: t(() => [m("div", sa, [m("div", ra, [e(P, { ref: "group_tabs_ref", modelValue: k.group_id, "onUpdate:modelValue": n[0] || (n[0] = (L) => k.group_id = L), "group-type": V(kt), onChange: h }, null, 8, ["modelValue", "group-type"])]), e(G, { modelValue: k.keyword, "onUpdate:modelValue": n[1] || (n[1] = (L) => k.keyword = L), style: { width: "220px" }, size: "large", clearable: "", "suffix-icon": V(de), placeholder: l.$t("module.agent_search_placeholder"), onChange: h }, null, 8, ["modelValue", "suffix-icon", "placeholder"])]), e(j, { ref_key: "tableRef", ref: f, class: "mt-5", page: k.page, limit: k.pageSize, data: b.value, total: v.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", loading: I.value, "max-height": "54vh", onPageSizeChange: B, onPageCurrentChange: U, onSelectionChange: u }, { default: t(() => [e(S, { type: "selection", width: "40", selectable: r }), e(S, { prop: "date", label: l.$t("module.agent"), "min-width": "260", "show-overflow-tooltip": "" }, { default: t(({ row: L }) => [m("div", ia, [m("img", { class: "flex-none w-8 h-8 rounded-full overflow-hidden", src: L.logo, alt: "" }, null, 8, da), m("div", ua, [m("div", ca, _(L.name || "--"), 1), Se(m("div", { class: "text-xs text-[#808080] truncate" }, _(L.description || ""), 513), [[_t, L.description]])])])]), _: 1 }, 8, ["label"]), e(S, { label: l.$t("type"), width: "200", "show-overflow-tooltip": "" }, { default: t(({ row: L = {} }) => [z(_(l.$t(L.agent_type_label) || "--"), 1)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["page", "limit", "data", "total", "loading"])]), _: 1 }, 8, ["modelValue", "title"])]);
  };
} });
const ga = ze(fa, [["__scopeId", "data-v-7b80121c"]]), va = { class: "py-4 flex items-center justify-center" }, ha = Y({ __name: "group-add-dialog", emits: ["success"], setup(F, { expose: D, emit: T }) {
  const i = T, p = c(), f = c(false), d = c(false), o = W({ name: "" }), b = c({}), v = c(false);
  let I = null;
  const k = ({ data: C = {}, success: x = null } = {}) => {
    y(), I = x, d.value = !!C.group_id, o.name = C.group_name || "", b.value = C, f.value = true;
  }, E = () => {
    f.value = false;
  }, y = () => {
    o.name = "";
  }, $ = async () => {
    if (!await p.value.validate())
      return;
    let x = { group_id: b.value.group_id, group_type: qe, group_name: o.name, sort: +b.value.sort || 0 };
    v.value = true, await Z.single_save(x).finally(() => {
      v.value = false;
    }), typeof I == "function" && I({ data: x }), i("success"), q.success(window.$t("action_save_success")), E();
  };
  return D({ open: k, close: E, reset: y }), (C, x) => {
    const N = X, h = fe, B = ge, U = ee, u = pe;
    return w(), J(u, { modelValue: f.value, "onUpdate:modelValue": x[1] || (x[1] = (r) => f.value = r), title: C.$t(d.value ? "action_edit" : "action_create"), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", onClose: E }, { footer: t(() => [m("div", va, [e(U, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: ue(E, ["stop"]) }, { default: t(() => [z(_(C.$t("action_cancel")), 1)]), _: 1 }), e(U, { class: "w-[96px] h-[36px]", type: "primary", loading: v.value, onClick: $ }, { default: t(() => [z(_(C.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"])])]), default: t(() => [e(B, { ref_key: "formRef", ref: p, model: o, "label-position": "top" }, { default: t(() => [e(h, { class: "is-required", label: C.$t("name"), prop: "name", rules: V(le)({ message: "form_input_placeholder" }) }, { default: t(() => [e(N, { modelValue: o.name, "onUpdate:modelValue": x[0] || (x[0] = (r) => o.name = r), size: "large", maxlength: "20", "show-word-limit": "", placeholder: C.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), ba = { class: "flex items-center gap-2" }, wa = { class: "flex-1 h-0 w-full box-border mt-4 overflow-auto" }, ya = ["onClick"], $a = ["title"], xa = { class: "text-[#F56C6C]" }, ka = { class: "w-full flex items-center gap-2 mt-4" }, Ea = { class: "h-[36px] flex items-center" }, Ca = { key: 0 }, Va = { class: "flex items-center justify-between h-[40px] gap-4" }, Da = ["title"], Sa = { class: "flex items-center gap-4" }, za = { key: 1 }, Ia = { class: "flex items-center gap-4 mt-2" }, Fa = { class: "h-[36px] leading-[36px] px-3 text-sm text-[#3664EF] bg-[#E9EFFF] rounded-md" }, Ta = Y({ __name: "group", setup(F) {
  const D = Ee(), T = c(), i = W({ groupKeyword: "", groupId: 0, activeTabIndex: 0 }), p = c([]), f = c(false), d = he(() => p.value.find((n) => n.group_id === i.groupId) || {}), o = async () => {
    f.value = true;
    const n = await Z.list({ params: { group_type: qe } }).finally(() => {
      f.value = false;
    });
    p.value = n.filter((s) => s.group_name && s.group_name.includes(i.groupKeyword)), i.groupId || (i.groupId = (p.value[0] || {}).group_id || 0);
  }, b = (n = {}) => {
    i.groupId = n.group_id, k();
  }, v = async (n, s, R) => {
    switch (n) {
      case "create":
      case "rename":
        T.value.open({ data: s, success: () => {
          o();
        } });
        break;
      case "delete":
        await ne.confirm(window.$t("group_delete_confirm"), window.$t("action_delete")), await Z.delete({ data: { group_id: s.group_id } }), q.success(window.$t("action_delete_success")), o();
        break;
    }
  }, I = (n) => {
    i.activeTabIndex = n, k();
  }, k = () => {
    if (i.activeTabIndex === 0)
      return E.page = 1, x();
    if (i.activeTabIndex === 1)
      return a();
  }, E = W({ keyword: "", page: 1, pageSize: 10 }), y = c([]), $ = c(0), C = c(false), x = async () => {
    C.value = true;
    const { total: n = 0, list: s = [] } = await Z.user_list({ group_id: i.groupId, keyword: E.keyword, offset: (E.page - 1) * E.pageSize, limit: E.pageSize }).finally(() => {
      C.value = false;
    });
    $.value = n, y.value = [...s];
  }, N = (n) => {
    E.page = n, x();
  }, h = (n) => {
    E.pageSize = n, k();
  }, B = async ({ value: n = [] } = {}) => {
    if (!i.groupId)
      return q.warning(window.$t("internal_user.group.create_tip"));
    const s = n.filter((G) => +G.did).map((G) => +G.did), R = n.filter((G) => +G.user_id).map((G) => +G.user_id), P = { group_id: i.groupId, department_ids: s, user_ids: R };
    await Z.batch_add_user(P), q.success(window.$t("action_add_success")), k();
  }, U = async (n = {}) => {
    await ne.confirm(window.$t("internal_user.group.remove_user_confirm"), window.$t("tip")), await Z.remove_user({ group_id: i.groupId, permission_ids: [n.permission_id] }), q.success(window.$t("action_remove_success")), x();
  }, u = c([]), r = c(false), a = async () => {
    r.value = true;
    const { list: n = [] } = await Z.agent_list({ group_id: i.groupId, offset: 0, limit: 1e3 }).finally(() => {
      r.value = false;
    });
    u.value = n;
  }, g = async ({ value: n = [] } = {}) => {
    if (!i.groupId)
      return q.warning(window.$t("internal_user.group.create_tip"));
    const s = n.filter((P) => +P.agent_id).map((P) => +P.agent_id), R = { group_id: i.groupId, agent_ids: s };
    await Z.batch_add_agent(R), q.success(window.$t("action_add_success")), k();
  }, l = async ({ value: n = [] } = {}) => {
    const s = n.filter((R) => +R.agent_id).map((R) => +R.agent_id);
    await ne.confirm(window.$t("internal_user.group.remove_agent_confirm"), window.$t("tip")), await Z.remove_agent({ group_id: i.groupId, agent_ids: s }), q.success(window.$t("action_remove_success")), a();
  };
  return re(async () => {
    await o(), k();
  }), (n, s) => {
    const R = X, P = ve, G = be, S = we, j = ye, A = Vt, L = ee, Ue = Me, Ze = Ct, Qe = Ye, Xe = Ce, me = Ie, et = Fe, tt = ga, at = Oe, lt = Je, nt = Ke;
    return w(), J(lt, { class: "bg-white h-full" }, { default: t(() => [e(Ue, { width: "280px", class: "flex flex-col px-5 py-6 box-border border-r border-[#e5e5e5]" }, { default: t(() => [m("div", ba, [e(R, { modelValue: i.groupKeyword, "onUpdate:modelValue": s[0] || (s[0] = (M) => i.groupKeyword = M), class: "flex-1 h-[36px]", size: "default", clearable: "", "prefix-icon": V(de), placeholder: n.$t("internal_user.group.search_placeholder"), onChange: o }, null, 8, ["modelValue", "prefix-icon", "placeholder"])]), Se((w(), O("ul", wa, [(w(true), O(ae, null, se(p.value, (M, Ne) => (w(), O("li", { key: M.group_id, class: "group w-full box-border flex items-center gap-2 cursor-pointer hover:bg-[#f5f7fa]", onClick: (Re) => b(M) }, [m("div", { class: Q(["flex-1 w-0 box-border text-sm truncate rounded-md py-2 px-4 hover:bg-[#F5F8FF]", [i.groupId === M.group_id ? "text-[#3664EF]" : "text-[#333]"]]), title: M.group_name }, _(M.group_name || "--"), 11, $a), e(j, { onCommand: (Re) => v(Re, M, Ne) }, { dropdown: t(() => [e(S, null, { default: t(() => [e(G, { command: "rename" }, { default: t(() => [z(_(n.$t("action_rename")), 1)]), _: 1 }), e(G, { command: "delete" }, { default: t(() => [m("span", xa, _(n.$t("action_delete")), 1)]), _: 1 })]), _: 1 })]), default: t(() => [m("span", null, [e(P, { class: "text-[#999] rotate-90 mr-2 cursor-pointer invisible group-hover:visible" }, { default: t(() => [e(V(Le))]), _: 1 })])]), _: 2 }, 1032, ["onCommand"])], 8, ya))), 128)), p.value.length ? K("", true) : (w(), J(A, { key: 0, class: "mt-10", description: n.$t("no_data") }, null, 8, ["description"]))])), [[nt, f.value]]), m("div", ka, [e(L, { type: "primary", plain: "", size: "large", class: "mx-auto !border-none", onClick: s[1] || (s[1] = (M) => v("create")) }, { default: t(() => [z(" +" + _(n.$t("internal_user.group.create")), 1)]), _: 1 })])]), _: 1 }), e(at, null, { default: t(() => [m("div", Ea, [m("label", { class: Q(["cursor-pointer", [i.activeTabIndex === 0 ? "text-[#3664EF]" : "text-[#333]"]]), onClick: s[2] || (s[2] = (M) => I(0)) }, _(n.$t("internal_user.group.member")), 3), e(Ze, { direction: "vertical" }), m("label", { class: Q(["cursor-pointer", [i.activeTabIndex === 1 ? "text-[#3664EF]" : "text-[#333]"]]), onClick: s[3] || (s[3] = (M) => I(1)) }, _(n.$t("internal_user.group.usable")), 3)]), i.activeTabIndex === 0 ? (w(), O("div", Ca, [m("div", Va, [m("h1", { title: d.value.group_name, class: "truncate" }, _(d.value.group_name || "--"), 9, Da), m("div", Sa, [e(R, { modelValue: E.keyword, "onUpdate:modelValue": s[4] || (s[4] = (M) => E.keyword = M), style: { width: "268px" }, size: "large", clearable: "", "prefix-icon": V(de), placeholder: n.$t("internal_user.organization.search_placeholder"), onChange: k }, null, 8, ["modelValue", "prefix-icon", "placeholder"]), e(Qe, { onConfirm: B }, { trigger: t(() => [e(L, { class: "min-w-[100px]", type: "primary", size: "large" }, { default: t(() => [z(" + " + _(n.$t("action_add")), 1)]), _: 1 })]), _: 1 })])]), e(et, { class: "mt-4", data: y.value, total: $.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", loading: C.value, "max-height": "calc(100vh - 360px)", onPageCurrentChange: N, onPageSizeChange: h }, { default: t(() => [e(me, { label: n.$t("internal_user.account.name"), "min-width": "140", prop: "nickname", "show-overflow-tooltip": "" }, { default: t(({ row: M }) => [e(Xe, { class: "inline-block mr-2", name: M.resource_type === "department" ? "department" : "member", width: "16px", height: "16px", color: "#999" }, null, 8, ["name"]), z(" " + _(M.nickname || M.name || "--"), 1)]), _: 1 }, 8, ["label"]), e(me, { label: n.$t("internal_user.account.mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: t(({ row: M }) => [m("span", { class: Q({ "text-[#9B9B9B]": !M.mobile }) }, _(M.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), e(me, { label: n.$t("internal_user.account.department"), "min-width": "140", prop: "department", "show-overflow-tooltip": "" }, { default: t(({ row: M }) => [m("span", null, _(M.dept_names || V(D).info.name || "--"), 1)]), _: 1 }, 8, ["label"]), e(me, { label: n.$t("operation"), width: "80", fixed: "right", align: "right" }, { default: t(({ row: M }) => [e(L, { class: "text-[#5A6D9E] !bg-transparent", type: "text", loading: M.deleting, onClick: (Ne) => U(M) }, { default: t(() => [z(_(n.$t("action_remove")), 1)]), _: 2 }, 1032, ["loading", "onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading"])])) : i.activeTabIndex === 1 ? (w(), O("div", za, [m("div", Ia, [m("div", Fa, _(n.$t("agent")), 1)]), e(tt, { modelValue: u.value, "onUpdate:modelValue": s[5] || (s[5] = (M) => u.value = M), class: "mt-4", onConfirm: g, onRemove: l }, null, 8, ["modelValue"])])) : K("", true)]), _: 1 }), e(ha, { ref_key: "groupAddRef", ref: T }, null, 512)]), _: 1 });
  };
} }), Ua = { class: "py-4 flex items-center justify-center" }, Na = 999999, Ra = Y({ __name: "department-add-dialog", emits: ["success"], setup(F, { expose: D, emit: T }) {
  const i = T, p = c(), f = c(false), d = c(false), o = W({ name: "" }), b = c({}), v = c(false), I = c(0), k = c([]);
  let E = null;
  const y = ({ data: N = {}, parentDid: h = 0, parentChildren: B = [], success: U = null } = {}) => {
    C(), E = U, d.value = !!N.did, o.name = N.name || "", b.value = N, I.value = h, k.value = B, f.value = true;
  }, $ = () => {
    f.value = false;
  }, C = () => {
    o.name = "";
  }, x = async () => {
    if (!await p.value.validate())
      return;
    let h = { did: b.value.did, name: o.name, pdid: +I.value || +b.value.pdid || 0, sort: b.value.sort || Na - k.value.length };
    v.value = true, await te.save(h).finally(() => {
      v.value = false;
    }), typeof E == "function" && E({ data: h }), i("success"), q.success(window.$t("action_save_success")), $();
  };
  return D({ open: y, close: $, reset: C }), (N, h) => {
    const B = X, U = fe, u = ge, r = ee, a = pe;
    return w(), J(a, { modelValue: f.value, "onUpdate:modelValue": h[1] || (h[1] = (g) => f.value = g), title: N.$t(d.value ? "internal_user.department.edit" : "internal_user.department.create"), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", onClose: $ }, { footer: t(() => [m("div", Ua, [e(r, { class: "w-[96px] h-[36px]", type: "primary", loading: v.value, onClick: x }, { default: t(() => [z(_(N.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), e(r, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: ue($, ["stop"]) }, { default: t(() => [z(_(N.$t("action_cancel")), 1)]), _: 1 })])]), default: t(() => [e(u, { ref_key: "formRef", ref: p, model: o, "label-position": "top" }, { default: t(() => [e(U, { label: N.$t("internal_user.department.name"), prop: "name", rules: V(le)({ message: "internal_user.department.name_placeholder" }) }, { default: t(() => [e(B, { modelValue: o.name, "onUpdate:modelValue": h[0] || (h[0] = (g) => o.name = g), size: "large", maxlength: "20", "show-word-limit": "", placeholder: N.$t("internal_user.department.name_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), Aa = { class: "px-4 py-6 flex flex-col h-full" }, Ba = { class: "flex items-center gap-2" }, Pa = { class: "mt-4 min-h-[300px] flex-1 h-0 overflow-auto" }, La = { class: "w-full flex items-center gap-2 group" }, Ma = ["title"], Oa = { key: 0, class: "pb-4 w-full box-border" }, Ja = ["onClick"], ja = ["title"], Ga = Y({ __name: "department-tree", emits: ["node-click"], setup(F, { expose: D, emit: T }) {
  const i = T, p = c(), f = W({ keyword: "" }), d = c(), o = c([]), b = c([]), v = c(false), I = he(() => !!f.keyword), k = c({}), E = async () => (b.value = [], I.value ? (p.value.filter(f.keyword), y()) : $()), y = async () => {
    v.value = true;
    const { list: u = [] } = await H.fetch_internal_user({ status: Ve, keyword: f.keyword, offset: 0, limit: 1e4 }).finally(() => {
      v.value = false;
    });
    b.value = u.map((r = {}) => (r.name = k.value.name, r));
  }, $ = async () => {
    v.value = true, o.value = await te.fetch_department_tree().finally(() => {
      v.value = false;
    }), k.value = o.value[0];
  }, C = async (u, r, a) => {
    const n = ((p.value.getNode(r.pdid) || {}).data || {}).children || [], s = n[a - 1] || {}, R = n[a + 1] || {};
    switch (u) {
      case "add_children":
        d.value.open({ parentDid: r.did, parentChildren: r.children, success: E });
        break;
      case "update_name":
        d.value.open({ data: r, success: ({ data: P = {} } = {}) => {
          r.name = r.label = P.name;
        } });
        break;
      case "move_up":
        v.value = true, await Promise.all([te.save({ did: r.did, name: r.name, pdid: r.pdid, sort: s.sort }), te.save({ did: s.did, name: s.name, pdid: s.pdid, sort: r.sort })]).finally(() => {
          v.value = false;
        }), q.success(window.$t("action_save_success")), E();
        break;
      case "move_down":
        v.value = true, await Promise.all([te.save({ did: r.did, name: r.name, pdid: r.pdid, sort: R.sort }), te.save({ did: R.did, name: R.name, pdid: R.pdid, sort: r.sort })]).finally(() => {
          v.value = false;
        }), q.success(window.$t("action_save_success")), E();
        break;
      case "delete":
        await ne.confirm(window.$t("internal_user.department.delete_confirm"), window.$t("tip")), v.value = true, await te.delete(r.did).finally(() => {
          v.value = false;
        }), q.success(window.$t("action_delete_success")), E();
        break;
    }
  }, x = c([0]), N = (u, r, a) => {
    x.value.push(u.did);
  }, h = (u, r, a) => {
    x.value = x.value.filter((g) => g !== u.did);
  }, B = (u, r) => u ? r.name.includes(u) : true, U = (u) => {
    i("node-click", { data: u });
  };
  return re(() => {
    $();
  }), D({ refresh: E }), (u, r) => {
    const a = X, g = ve, l = Ce, n = be, s = we, R = ye, P = Ge, G = Ke;
    return w(), O("div", Aa, [m("div", Ba, [e(a, { class: "flex-1 h-[36px]", modelValue: f.keyword, "onUpdate:modelValue": r[0] || (r[0] = (S) => f.keyword = S), size: "default", clearable: "", "prefix-icon": V(de), placeholder: u.$t("internal_user.organization.search_placeholder"), onChange: E }, null, 8, ["modelValue", "prefix-icon", "placeholder"]), e(g, { size: "18", color: "#333333", class: "cursor-pointer", onClick: r[1] || (r[1] = (S) => C("add_children", o.value[0], 0)) }, { default: t(() => [e(V(ft))]), _: 1 })]), Se((w(), O("div", Pa, [e(P, { ref_key: "treeRef", ref: p, "node-key": "did", data: o.value, class: Q([b.value.length ? "hidden-empty-block" : ""]), "default-expanded-keys": I.value ? [] : x.value, "filter-node-method": B, onNodeExpand: N, onNodeCollapse: h, onNodeClick: U }, { default: t(({ node: S, data: j }) => [m("div", La, [e(l, { name: "department", width: "16px", height: "16px", color: "#57A1FF" }), m("div", { class: "flex-1 w-0 text-[#333] text-sm truncate", title: j.label }, _(j.label), 9, Ma), I.value ? K("", true) : (w(), J(R, { key: 0, onCommand: (A) => C(A, j, j.index) }, { dropdown: t(() => [e(s, null, { default: t(() => [e(n, { command: "add_children" }, { default: t(() => [z(_(u.$t("internal_user.department.add_children")), 1)]), _: 1 }), j.did ? (w(), O(ae, { key: 0 }, [e(n, { command: "update_name" }, { default: t(() => [z(_(u.$t("internal_user.department.update_name")), 1)]), _: 1 }), j.index > 0 ? (w(), J(n, { key: 0, command: "move_up" }, { default: t(() => [z(_(u.$t("internal_user.department.move_up")), 1)]), _: 1 })) : K("", true), j.lastIndex > j.index ? (w(), J(n, { key: 1, command: "move_down" }, { default: t(() => [z(_(u.$t("internal_user.department.move_down")), 1)]), _: 1 })) : K("", true), e(n, { command: "delete" }, { default: t(() => [z(_(u.$t("internal_user.department.delete")), 1)]), _: 1 })], 64)) : K("", true)]), _: 2 }, 1024)]), default: t(() => [m("span", null, [e(g, { class: "text-[#999] rotate-90 mr-2 cursor-pointer invisible group-hover:visible" }, { default: t(() => [e(V(Le))]), _: 1 })])]), _: 2 }, 1032, ["onCommand"]))])]), _: 1 }, 8, ["data", "class", "default-expanded-keys"]), I.value ? (w(), O("ul", Oa, [(w(true), O(ae, null, se(b.value, (S) => (w(), O("li", { key: S.did, class: "w-full box-border flex items-center gap-2 cursor-pointer p-2 hover:bg-[#f5f7fa]", onClick: (j) => U(S) }, [e(l, { name: "member", width: "16px", height: "16px" }), m("div", { class: "flex-1 w-0 text-[#333] text-sm truncate", title: S.nickname }, _(S.nickname), 9, ja)], 8, Ja))), 128))])) : K("", true)])), [[G, v.value]]), e(Ra, { ref_key: "departmentAddRef", ref: d }, null, 512)]);
  };
} });
const Ka = ze(Ga, [["__scopeId", "data-v-81a71932"]]), qa = Y({ __name: "organization", setup(F) {
  const D = c({});
  gt("organizationData", D);
  const T = ({ data: i = {} } = {}) => {
    D.value = i;
  };
  return re(async () => {
    D.value = await Te();
  }), De(() => {
  }), (i, p) => {
    const f = Me, d = Oe, o = Je;
    return w(), J(o, { class: "bg-white h-full" }, { default: t(() => [e(f, { class: "border-r border-[#e5e5e5]" }, { default: t(() => [e(Ka, { onNodeClick: T })]), _: 1 }), e(d, { class: "!p-0" }, { default: t(() => [e(We)]), _: 1 })]), _: 1 });
  };
} }), Ya = Y({ __name: "index", setup(F) {
  const D = vt(), T = c("account");
  return re(async () => {
  }), De(() => {
  }), (i, p) => {
    const f = wt, d = ht, o = bt, b = ot;
    return w(), J(b, { class: "px-[60px] py-8" }, { default: t(() => [e(f, { title: i.$t(V(D).meta.title) }, null, 8, ["title"]), e(o, { modelValue: T.value, "onUpdate:modelValue": p[0] || (p[0] = (v) => T.value = v), class: "mt-2 flex-1 h-0" }, { default: t(() => [e(d, { label: i.$t("internal_user.account.title"), name: "account", lazy: "" }, { default: t(() => [T.value === "account" ? (w(), J(We, { key: 0 })) : K("", true)]), _: 1 }, 8, ["label"]), e(d, { label: i.$t("internal_user.group.title"), name: "group", lazy: "" }, { default: t(() => [T.value === "group" ? (w(), J(Ta, { key: 0 })) : K("", true)]), _: 1 }, 8, ["label"]), e(d, { label: i.$t("internal_user.organization.title"), name: "organization", lazy: "" }, { default: t(() => [T.value === "organization" ? (w(), J(qa, { key: 0 })) : K("", true)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["modelValue"])]), _: 1 });
  };
} });
const Cl = ze(Ya, [["__scopeId", "data-v-4f3f9280"]]);
export {
  Cl as default
};
