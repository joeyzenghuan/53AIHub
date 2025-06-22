import { y as Q, aq as se, E as ee, an as ie, Y as K, r as g, Z as te, b as _, j as y, w as n, d as c, f as o, L as A, t as u, c as P, K as W, u as r, F as H, al as re, n as de, a9 as F, ag as pe, a5 as ae, ah as ue, a4 as oe, aa as me, o as ce, N as Z, a as _e, a0 as fe, m as ge, q as D, e as ve, a8 as he, ab as we, R as be, az as Ee, G as ye } from "./index-8579fe4a.js";
import { v as $e } from "./el-loading-8747b309.js";
import { _ as Ve } from "./index-ad57f5b2.js";
import { E as Ce, _ as ke } from "./el-table-column-376475e4.js";
import { E as Se } from "./el-switch-1a77f9ca.js";
import "./el-checkbox-a21716fc.js";
import "./el-tag-0b6baecb.js";
import { _ as Te } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { E as Ae } from "./el-drawer-393896dd.js";
import { E as Le } from "./el-divider-7d014453.js";
import { E as je, a as Ne } from "./el-radio-2c60a23c.js";
import { N as d, a as I, b as Be, c as Ie, n as L } from "./navigation-decf8cba.js";
import "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./sortable.esm-7ba019b6.js";
const Re = { class: "font-semibold text-[#1D1E1F] mb-6" }, ze = { class: "font-semibold text-[#1D1E1F] mb-6" }, Ue = { class: "mt-2 text-xs text-[#999]" }, De = { class: "flex border-t pt-5 justify-end w-full" }, Fe = Q({ __name: "nav-create-drawer", emits: ["success"], setup(le, { expose: M, emit: x }) {
  const R = se(), f = ee(), b = x, { isOpLocalEnv: z } = ie(), V = K(() => R.info), v = K(() => `${z.value ? window.location.origin : V.value.domain}/#`), E = g(), C = g(false), k = g(false), j = g(false), e = te({ type: d.EXTERNAL, name: "", jump_path: "", target: I.SELF, seo_title: "", seo_keywords: "", seo_description: "" }), $ = g({}), N = g([]), G = async ({ data: t = {}, navigationList: s = [] } = {}) => {
    p(), await de();
    const m = t.config || {};
    e.type = +t.type || d.EXTERNAL, e.name = t.name || "", e.jump_path = t.jump_path || "", e.target = t.target || m.target || I.SELF, e.seo_title = m.seo_title || "", e.seo_keywords = m.seo_keywords || "", e.seo_description = m.seo_description || "", C.value = !!t.navigation_id, $.value = t, N.value = s, k.value = true;
  }, a = () => {
    k.value = false;
  }, p = () => {
    e.type = d.EXTERNAL, e.name = "", e.jump_path = "", e.target = I.SELF, e.seo_title = "", e.seo_keywords = "", e.seo_description = "";
  }, S = () => {
    e.jump_path = "", E.value.clearValidate("jump_path");
  }, B = async () => {
    if (!await E.value.validate())
      return;
    j.value = true;
    const s = { navigation_id: $.value.navigation_id, type: e.type, name: e.name, jump_path: e.jump_path, sort: $.value.sort || 9999 - N.value.length, config: { target: e.target, seo_title: e.seo_title, seo_keywords: e.seo_keywords.replace(/，/g, ","), seo_description: e.seo_description } }, m = await L.save(s).finally(() => {
      j.value = false;
    });
    F.success(window.$t("action_save_success")), b("success", { data: e }), a(), !C.value && e.type == d.CUSTOM && f.push({ name: "NavigationWebSetting", params: { navigation_id: m.navigation_id || $.value.navigation_id } });
  };
  return M({ open: G, close: a, reset: p }), (t, s) => {
    const m = je, T = Ne, h = pe, w = ae, O = Le, Y = ue, U = oe, i = Ae;
    return _(), y(i, { size: "700px", title: t.$t(C.value ? "action_edit" : "action_create"), "close-on-click-modal": false, "append-to-body": "", "destroy-on-close": "", modelValue: k.value, "onUpdate:modelValue": s[8] || (s[8] = (l) => k.value = l), onClose: a }, { footer: n(() => [c("div", De, [o(U, { size: "large", onClick: a }, { default: n(() => [A(u(t.$t("action_cancel")), 1)]), _: 1 }), o(U, { type: "primary", size: "large", loading: j.value, onClick: B }, { default: n(() => [A(u(t.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])]), default: n(() => [o(Y, { ref_key: "formRef", ref: E, class: "px-4", model: e, "label-position": "top" }, { default: n(() => [c("h1", Re, u(t.$t("basic_info")), 1), o(h, { label: t.$t("type") }, { default: n(() => [o(T, { modelValue: e.type, "onUpdate:modelValue": s[0] || (s[0] = (l) => e.type = l), size: "large", onChange: S }, { default: n(() => [(_(true), P(H, null, W([r(d).SYSTEM, r(d).EXTERNAL, r(d).CUSTOM], (l) => (_(), y(m, { key: l, value: l, disabled: e.type === r(d).SYSTEM || l === r(d).SYSTEM || C.value }, { default: n(() => [A(u(t.$t(r(Be).get(l))), 1)]), _: 2 }, 1032, ["value", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), o(h, { label: t.$t("name"), prop: "name", rules: [{ required: true, message: t.$t("form_input_placeholder") }] }, { default: n(() => [o(w, { modelValue: e.name, "onUpdate:modelValue": s[1] || (s[1] = (l) => e.name = l), size: "large", maxlength: 20, "show-word-limit": "", placeholder: t.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), o(h, { class: "is-required", label: t.$t("jump_path"), prop: "jump_path", rules: [...r(re)({ message: "form_input_placeholder", validator: ["text", e.type === r(d).EXTERNAL ? "url" : "path"] }), { validator: (l, ne, X) => {
      if (e.type == r(d).CUSTOM && N.value.some((q) => q.jump_path === ne && q.navigation_id !== $.value.navigation_id))
        return X(new Error(t.$t("form_path_same_tip")));
      X();
    }, trigger: "blur" }] }, { default: n(() => [e.type === r(d).SYSTEM ? (_(), y(w, { key: 0, modelValue: v.value + e.jump_path, size: "large", placeholder: t.$t("form_input_placeholder"), disabled: "" }, null, 8, ["modelValue", "placeholder"])) : e.type === r(d).EXTERNAL ? (_(), y(w, { key: 1, modelValue: e.jump_path, "onUpdate:modelValue": s[2] || (s[2] = (l) => e.jump_path = l), size: "large", placeholder: t.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])) : (_(), y(w, { key: 2, modelValue: e.jump_path, "onUpdate:modelValue": s[3] || (s[3] = (l) => e.jump_path = l), size: "large", placeholder: t.$t("form_input_placeholder") }, { prepend: n(() => [A(u(v.value), 1)]), _: 1 }, 8, ["modelValue", "placeholder"]))]), _: 1 }, 8, ["label", "rules"]), o(h, { label: t.$t("open_method"), prop: "target" }, { default: n(() => [o(T, { modelValue: e.target, "onUpdate:modelValue": s[4] || (s[4] = (l) => e.target = l), size: "large" }, { default: n(() => [(_(true), P(H, null, W([r(I).SELF, r(I).BLANK], (l) => (_(), y(m, { key: l, value: l }, { default: n(() => [A(u(t.$t(r(Ie).get(l))), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), o(O), c("h1", ze, u(t.$t("module.nav_seo_setting")), 1), o(h, { label: t.$t("module.nav_seo_setting_title") }, { default: n(() => [o(w, { modelValue: e.seo_title, "onUpdate:modelValue": s[5] || (s[5] = (l) => e.seo_title = l), maxlength: "60", "show-word-limit": "", size: "large", placeholder: t.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), o(h, { label: t.$t("module.nav_seo_setting_keywords") }, { default: n(() => [o(w, { modelValue: e.seo_keywords, "onUpdate:modelValue": s[6] || (s[6] = (l) => e.seo_keywords = l), size: "large", placeholder: t.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"]), c("div", Ue, u(t.$t("module.nav_seo_setting_keywords_tip")), 1)]), _: 1 }, 8, ["label"]), o(h, { label: t.$t("module.nav_seo_setting_description") }, { default: n(() => [o(w, { modelValue: e.seo_description, "onUpdate:modelValue": s[7] || (s[7] = (l) => e.seo_description = l), type: "textarea", rows: 5, maxlength: "100", "show-word-limit": "", size: "large", resize: "none", placeholder: t.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), Me = { class: "flex-1 flex flex-col bg-white px-10 py-8 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, xe = { class: "flex items-center justify-between" }, Ge = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, Oe = { class: "flex items-center justify-end gap-4" }, J = 8, it = Q({ __name: "index", setup(le) {
  const M = me(), x = ee(), R = g(), f = te({ keyword: "", offset: 0, limit: 10 }), b = g([]), z = g(0), V = g(false), v = () => {
    f.offset = 0, E();
  }, E = async () => {
    V.value = true;
    const { total: a = 0, list: p = [] } = await L.list(f).catch(() => {
      V.value = false;
    });
    if (!p.length) {
      await L.init(), E();
      return;
    }
    z.value = a, b.value = p.filter((S) => S.name.includes(f.keyword)), V.value = false;
  }, C = (a) => {
    f.limit = a, v();
  }, k = (a) => {
    f.offset = (a - 1) * filter_form.limit, E();
  }, j = async ({ data: { navigation_id: a, status: p } }) => {
    await L.update_status({ navigation_id: a, status: p }), F.success(window.$t(+p ? "action_enable_success" : "action_disable_success"));
  }, e = ({ data: a = {} } = {}) => {
    R.value.open({ data: a, navigationList: b.value });
  }, $ = ({ data: a = {} } = {}) => {
    x.push({ name: "NavigationWebSetting", params: { navigation_id: a.navigation_id } });
  }, N = async ({ data: a = {} } = {}) => {
    a.type != d.SYSTEM && (await we.confirm(window.$t("navigation.delete_confirm"), window.$t("tip")), await L.delete({ navigation_id: a.navigation_id }), F.success(window.$t("action_delete_success")), E());
  }, G = async ({ data: a = [], targetIndex: p, originIndex: S } = {}) => {
    const B = a.map((t, s) => ({ id: t.navigation_id, sort: 9999 - s }));
    await L.update_sort(B), F.success(window.$t("action_sort_success"));
  };
  return ce(async () => {
    v(), Z.on("user-login-success", v);
  }), _e(() => {
    Z.off("user-login-success", v);
  }), (a, p) => {
    const S = Te, B = ae, t = Ce, s = Se, m = be, T = Ee, h = ye, w = ke, O = oe, Y = Ve, U = $e;
    return _(), y(Y, { class: "px-[60px] py-8" }, { default: n(() => [o(S, { title: a.$t(r(M).meta.title) }, null, 8, ["title"]), c("div", Me, [c("div", xe, [o(B, { modelValue: f.keyword, "onUpdate:modelValue": p[0] || (p[0] = (i) => f.keyword = i), style: { "max-width": "268px" }, size: "large", clearable: "", "suffix-icon": r(fe), placeholder: a.$t("navigation.search_placeholder"), onChange: v }, null, 8, ["modelValue", "suffix-icon", "placeholder"])]), ge((_(), P("div", Ge, [o(w, { sortable: !f.keyword, data: b.value, "onUpdate:data": p[1] || (p[1] = (i) => b.value = i), total: z.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", pagination: false, onPageSizeChange: C, onPageCurrentChange: k, onSortableChange: G }, { default: n(() => [o(t, { label: a.$t("name"), "min-width": "160", prop: "name", "show-overflow-tooltip": "" }, null, 8, ["label"]), o(t, { label: a.$t("type"), width: "100", prop: "type", "show-overflow-tooltip": "" }, { default: n(({ row: i }) => [c("span", { class: D({ "text-[#9B9B9B]": !i.type_label }) }, u(a.$t(i.type_label) || "--"), 3)]), _: 1 }, 8, ["label"]), o(t, { label: a.$t("jump_path"), "min-width": "160", prop: "jump_path", "show-overflow-tooltip": "" }, { default: n(({ row: i }) => [c("span", { class: D({ "text-[#9B9B9B]": !i.jump_path }) }, u(i.jump_path || "--"), 3)]), _: 1 }, 8, ["label"]), o(t, { label: a.$t("open_method"), width: "100", prop: "target", "show-overflow-tooltip": "" }, { default: n(({ row: i }) => [c("span", { class: D({ "text-[#9B9B9B]": !i.target_label }) }, u(a.$t(i.target_label) || "--"), 3)]), _: 1 }, 8, ["label"]), o(t, { label: a.$t("navigation_is_open"), width: "140", prop: "status", "show-overflow-tooltip": "" }, { default: n(({ row: i }) => [o(s, { "active-value": 1, "inactive-value": 0, modelValue: i.status, "onUpdate:modelValue": (l) => i.status = l, onChange: (l) => j({ data: i }) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), _: 1 }, 8, ["label"]), o(t, { label: a.$t("operation"), width: "100", fixed: "right", align: "right" }, { default: n(({ row: i }) => [c("div", Oe, [i.type == r(d).CUSTOM ? (_(), y(T, { key: 0, placement: "top", content: a.$t("page_edit") }, { default: n(() => [c("span", null, [o(m, { class: "cursor-pointer", name: "editor", color: "#5A6D9E", width: "16", onClick: (l) => $({ data: i }) }, null, 8, ["onClick"])])]), _: 2 }, 1032, ["content"])) : ve("", true), o(T, { placement: "top", content: a.$t("action_setting") }, { default: n(() => [c("span", null, [o(m, { class: "cursor-pointer", name: "web-setting", color: "#5A6D9E", width: "16", onClick: (l) => e({ data: i }) }, null, 8, ["onClick"])])]), _: 2 }, 1032, ["content"]), o(T, { placement: "top", content: a.$t("action_delete") }, { default: n(() => [o(h, { class: D([i.type == r(d).SYSTEM ? "text-[#BDC5D8] cursor-not-allowed" : "text-[#5A6D9E] cursor-pointer"]), onClick: (l) => N({ data: i }) }, { default: n(() => [o(r(he))]), _: 2 }, 1032, ["class", "onClick"])]), _: 2 }, 1032, ["content"])])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["sortable", "data", "total"]), o(O, { class: "mt-4 !border-none", type: "primary", size: "large", plain: "", disabled: b.value.length >= J, onClick: e }, { default: n(() => [A(" + " + u(a.$t("action_add")) + "\uFF08" + u(b.value.length) + "/" + u(J) + "\uFF09 ", 1)]), _: 1 }, 8, ["disabled"])])), [[U, V.value]])]), o(Fe, { ref_key: "navCreateRef", ref: R, onSuccess: v }, null, 512)]), _: 1 });
  };
} });
export {
  it as default
};
