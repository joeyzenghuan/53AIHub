import { s as G, k as j, u as K, ak as ne, r as m, ae as W, o as X, al as q, b as p, h as R, i as a, d as r, f as l, H as S, t as f, am as Q, z as E, a4 as U, c as k, G as M, F as N, W as ae, a9 as Z, aa as se, X as ie, ac as re, $ as ee, Y as de, J as P, a as ue, an as pe, g as H, v as ce, ao as _e, a8 as me, L as fe, y as ge } from "./index-6feda8be.js";
import { v as ve } from "./el-loading-7d1392af.js";
import { _ as he } from "./index-35dfd48d.js";
import { E as we, a as ke, b as ye } from "./el-dropdown-item-61acbf47.js";
import "./el-scrollbar-1c0147c5.js";
import { E as be } from "./el-empty-1de6f286.js";
import { _ as Ee } from "./index.vue_vue_type_style_index_0_lang-000d3c45.js";
import { _ as xe } from "./index-da827d3a.js";
import { _ as $e } from "./index.vue_vue_type_script_setup_true_lang-bf5c9b93.js";
import "./el-tag-41766c4c.js";
import { E as Ve, a as De } from "./el-select-15a52e42.js";
import { _ as Ce } from "./image.vue_vue_type_style_index_0_lang-eb9d831e.js";
import { a as Fe } from "./group-acb26c68.js";
import "./dropdown-4cbb8c7d.js";
import "./debounce-f4e6390f.js";
import "./index.vue_vue_type_script_setup_true_lang-b4d73f03.js";
import "./sortable.esm-437f0071.js";
import "./position-80aa4e7f.js";
import "./debounce-bf10b7f9.js";
import "./el-tab-pane-d10c2129.js";
import "./index-43e50f65.js";
import "./isEqual-8788d17b.js";
const Y = (n = {}) => (n.ai_link_id = n.id = +n.id || 0, n), A = { async list({ params: n = {} } = {}) {
  n = JSON.parse(JSON.stringify(n)), (!+n.group_id || +n.group_id < 0) && delete n.group_id, n.keyword || delete n.keyword;
  const { data: u = [] } = await G.get("/api/ai_links", { params: n }).catch(j);
  return u.map((i = {}) => Y(i));
}, async save({ data: n = {} } = {}) {
  n = { ai_link_id: 0, logo: "", name: "", url: "", description: "", group_id: 0, sort: 0, ...n };
  const u = n.ai_link_id;
  delete n.ai_link_id;
  const { data: g = {} } = await G[u ? "put" : "post"](`/api/ai_links${u ? `/${u}` : ""}`, n).catch(j);
  return Y(g);
}, async delete({ data: { ai_link_id: n } }) {
  return G.delete(`/api/ai_links/${n}`).catch(j);
} }, Oe = { class: "py-4 flex items-center justify-center" }, Ie = K({ __name: "create-dialog", props: { groupType: { default: 1 } }, emits: ["success"], setup(n, { expose: u, emit: g }) {
  const i = g, x = ne("groupOptions", []), y = m(), b = m(false), c = m(false), v = m(false), $ = m({}), o = W({ logo: "", name: "", url: "", description: "", group_id: "" });
  X(() => {
  });
  const C = q(() => x.value.filter((e) => +e.group_id > 0)), F = async ({ data: e = {} } = {}) => {
    O(), await ae(), c.value = !!+e.ai_link_id, o.logo = e.logo || "", o.name = e.name || "", o.url = e.url || "", o.description = e.description || "", o.group_id = e.group_id || o.group_id || "", $.value = e, b.value = true;
  }, V = async () => {
    b.value = false;
  }, O = () => {
    o.logo = "", o.name = "", o.url = "", o.description = "", o.group_id = (C.value[0] || {}).group_id || "", v.value = false;
  }, t = async () => {
    if (v.value)
      return;
    if (!await y.value.validate())
      return Promise.reject();
    v.value = true, await A.save({ data: { ...o, ai_link_id: $.value.ai_link_id } }).catch(() => {
      v.value = false;
    }), i("success"), Z.success(window.$t("action_save_success")), V();
  };
  return u({ open: F, close: V, reset: O }), (e, d) => {
    const h = se, D = ie, B = Ve, T = De, z = re, I = ee, L = de;
    return p(), R(L, { modelValue: b.value, "onUpdate:modelValue": d[5] || (d[5] = (s) => b.value = s), title: e.$t(c.value ? "action_edit" : "action_add"), width: "740px", "destroy-on-close": "", "close-on-click-modal": false }, { footer: a(() => [r("div", Oe, [l(I, { class: "w-[96px] h-[36px]", type: "primary", loading: v.value, onClick: t }, { default: a(() => [S(f(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), l(I, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: Q(V, ["stop"]) }, { default: a(() => [S(f(e.$t("action_cancel")), 1)]), _: 1 })])]), default: a(() => [l(z, { ref_key: "formRef", ref: y, "label-width": "108px", "label-position": "left", model: o }, { default: a(() => [l(h, { label: e.$t("icon"), prop: "logo", rules: E(U)({ message: "form_upload_placeholder" }) }, { default: a(() => [l(Ce, { modelValue: o.logo, "onUpdate:modelValue": d[0] || (d[0] = (s) => o.logo = s), class: "w-12 h-12" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), l(h, { label: e.$t("website_name"), prop: "name", rules: E(U)({ message: "form_input_placeholder" }) }, { default: a(() => [l(D, { modelValue: o.name, "onUpdate:modelValue": d[1] || (d[1] = (s) => o.name = s), size: "large", "show-word-limit": "", maxlength: "20", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), l(h, { label: "URL", prop: "url", rules: E(U)({ message: "form_input_placeholder", validator: ["url"] }) }, { default: a(() => [l(D, { modelValue: o.url, "onUpdate:modelValue": d[2] || (d[2] = (s) => o.url = s), size: "large", placeholder: "http://" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["rules"]), l(h, { label: e.$t("description"), prop: "description" }, { default: a(() => [l(D, { size: "large", modelValue: o.description, "onUpdate:modelValue": d[3] || (d[3] = (s) => o.description = s), type: "textarea", resize: "none", rows: "5", maxlength: "200", "show-word-limit": "", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), l(h, { label: e.$t("group"), prop: "group_id", rules: E(U)({ message: "form_select_placeholder" }) }, { default: a(() => [l(T, { modelValue: o.group_id, "onUpdate:modelValue": d[4] || (d[4] = (s) => o.group_id = s), size: "large" }, { default: a(() => [(p(true), k(N, null, M(C.value, (s) => (p(), R(B, { key: s.group_id, value: s.group_id, label: e.$t(s.group_name) }, null, 8, ["value", "label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), Le = { class: "flex-none flex items-center justify-between mt-5" }, Ue = { class: "flex-1 w-0" }, Re = { class: "flex-none flex-center gap-3 ml-8" }, Se = { class: "text-sm" }, Be = { class: "mt-6 flex-1 overflow-y-auto relative" }, Te = { key: 1 }, ze = ["id"], Ge = { class: "grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mb-9" }, je = ["aria-label", "onClick"], Me = ["src"], Ne = { class: "flex-1 w-0" }, Ae = { class: "flex items-center justify-between" }, Je = { class: "text-sm text-[#1D1E1F] font-semibold line-clamp-1" }, Pe = { class: "text-[#FA5151]" }, He = { class: "text-sm text-[#1D1E1F] text-opacity-60 line-clamp-1" }, go = K({ __name: "index", setup(n) {
  const u = m(), g = m(), i = W({ group_id: 0, keyword: "" }), x = m([]), y = m(false), b = q(() => {
    let t = o.value.filter((e) => +e.group_id > 0 && e.children && e.children.length);
    return +i.group_id > 0 && (t = t.filter((e) => e.group_id === +i.group_id)), t;
  });
  X(() => {
    c(), P.on("user-login-success", c);
  }), ue(() => {
    P.off("user-login-success", c);
  });
  const c = async () => {
    await v();
  }, v = async () => {
    y.value = true;
    const t = await A.list({ params: i }).finally(() => {
      y.value = false;
    });
    x.value = t, F();
  }, $ = ({ data: t = {} } = {}) => {
    +i.group_id > 0 && (t.group_id = +i.group_id), g.value.open({ data: t });
  }, o = m([]);
  pe("groupOptions", o);
  const C = ({ options: t = [] } = {}) => {
    o.value = t.map((e) => ({ ...e, children: [] })), F();
  }, F = () => {
    o.value.forEach((t) => {
      t.children = x.value.filter((e) => e.group_id === t.group_id);
    });
  }, V = ({ data: t = {} } = {}) => {
    window.open(t.url, "_blank");
  }, O = async (t, e = {}) => {
    switch (t) {
      case "edit":
        $({ data: e });
        break;
      case "del":
        await me.confirm(window.$t("action_delete_confirm"), window.$t("action_delete_tip")), await A.delete({ data: { ai_link_id: e.ai_link_id } }), Z.success(window.$t("action_delete_success")), c();
        break;
    }
  };
  return (t, e) => {
    const d = ee, h = $e, D = xe, B = Ee, T = fe, z = be, I = ge, L = we, s = ke, oe = ye, te = he, le = ve;
    return p(), R(te, { class: "px-[60px] py-8" }, { default: a(() => [l(h, { title: t.$t("module.ai_toolbox") }, { right: a(() => [l(d, { type: "primary", onClick: $ }, { default: a(() => [S(" +" + f(t.$t("action_add")), 1)]), _: 1 })]), _: 1 }, 8, ["title"]), r("div", Le, [r("div", Ue, [l(D, { ref_key: "groupTabsRef", ref: u, modelValue: i.group_id, "onUpdate:modelValue": e[0] || (e[0] = (_) => i.group_id = _), "group-type": E(Fe), onChange: c, onGetOptions: C }, null, 8, ["modelValue", "group-type"])]), r("div", Re, [l(B, { modelValue: i.keyword, "onUpdate:modelValue": e[1] || (e[1] = (_) => i.keyword = _), placeholder: "module.ai_toolbox_search_placeholder", onChange: c }, null, 8, ["modelValue"]), r("div", { class: "flex items-center gap-1 whitespace-nowrap cursor-pointer text-[#576D9C]", onClick: e[2] || (e[2] = (..._) => u.value.open && u.value.open(..._)) }, [l(T, { name: "cate-manage", width: "14px", height: "14px" }), r("div", Se, f(t.$t("group")), 1)])])]), H((p(), k("div", Be, [x.value.length ? (p(), k("ul", Te, [(p(true), k(N, null, M(b.value, (_) => (p(), k("li", { key: _.group_id }, [H(r("div", { id: `toolbox_group_${_.group_id}`, class: "text-[#4F5052] text-opacity-60 text-sm mb-4" }, f(_.group_name), 9, ze), [[ce, !+i.group_id || +i.group_id < 0]]), r("ul", Ge, [(p(true), k(N, null, M(_.children, (w) => (p(), k("li", { key: w.ai_link_id, class: "h-[72px] bg-white border rounded p-4 flex items-center gap-2 cursor-pointer hover:shadow group", role: "button", "aria-label": w.name, onClick: (J) => V({ data: w }) }, [r("img", { class: "w-10 h-10 object-cover rounded-full overflow-hidden", src: w.logo }, null, 8, Me), r("div", Ne, [r("div", Ae, [r("div", Je, f(w.name), 1), l(oe, { trigger: "click", onCommand: (J) => O(J, w) }, { dropdown: a(() => [l(s, null, { default: a(() => [l(L, { command: "edit" }, { default: a(() => [S(f(t.$t("action_edit")), 1)]), _: 1 }), l(L, { command: "del" }, { default: a(() => [r("span", Pe, f(t.$t("action_delete")), 1)]), _: 1 })]), _: 1 })]), default: a(() => [r("div", { class: "w-5 h-5 flex-center rounded invisible group-hover:visible hover:bg-[#F2F4F8]", onClick: Q(() => {
    }, ["stop"]) }, [l(I, { size: "12" }, { default: a(() => [l(E(_e))]), _: 1 })])]), _: 2 }, 1032, ["onCommand"])]), r("div", He, f(w.description), 1)])], 8, je))), 128))])]))), 128))])) : (p(), R(z, { key: 0, class: "mt-10", description: t.$t("no_data") }, null, 8, ["description"]))])), [[le, y.value]]), l(Ie, { ref_key: "createRef", ref: g, onSuccess: c }, null, 512)]), _: 1 });
  };
} });
export {
  go as default
};
