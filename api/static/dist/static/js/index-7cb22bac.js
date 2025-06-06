import { E as Y, d as ne, c as se, G as ae, f as ie, e as q, g as re, F as de, C as pe, v as ue, a as ce, b as _e, K as me, L as fe, M as ge } from "./element-plus-c72880c6.js";
import { _ as ve } from "./index-918f1759.js";
import { s as j, t as G, l as U, e as J, _ as he } from "./index-226b5715.js";
import { _ as we, a as ke } from "./index-2911cb47.js";
import { _ as ye } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { d as Q, k as be, e as m, V as W, i as X, j as Z, o as u, J as S, K as s, a as r, M as l, a2 as B, P as f, O as ee, u as x, c as k, ac as z, H as N, n as xe, D as Ee, S as K, y as $e, T as Ve } from "./@vue-3b855f7b.js";
import { B as De } from "./@element-plus-0cfad8bb.js";
import { _ as Ce } from "./image.vue_vue_type_style_index_0_lang-45adb6cd.js";
import { a as Fe } from "./group-c1a36044.js";
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
import "./debounce-f4e6390f.js";
import "./index.vue_vue_type_script_setup_true_lang-2b51690f.js";
import "./sortablejs-437f0071.js";
import "./vue-cropper-d3d11008.js";
const H = (n = {}) => (n.ai_link_id = n.id = +n.id || 0, n), A = { async list({ params: n = {} } = {}) {
  n = JSON.parse(JSON.stringify(n)), (!+n.group_id || +n.group_id < 0) && delete n.group_id, n.keyword || delete n.keyword;
  const { data: p = [] } = await j.get("/api/ai_links", { params: n }).catch(G);
  return p.map((i = {}) => H(i));
}, async save({ data: n = {} } = {}) {
  n = { ai_link_id: 0, logo: "", name: "", url: "", description: "", group_id: 0, sort: 0, ...n };
  const p = n.ai_link_id;
  delete n.ai_link_id;
  const { data: g = {} } = await j[p ? "put" : "post"](`/api/ai_links${p ? `/${p}` : ""}`, n).catch(G);
  return H(g);
}, async delete({ data: { ai_link_id: n } }) {
  return j.delete(`/api/ai_links/${n}`).catch(G);
} }, Oe = { class: "py-4 flex items-center justify-center" }, Ie = Q({ __name: "create-dialog", props: { groupType: { default: 1 } }, emits: ["success"], setup(n, { expose: p, emit: g }) {
  const i = g, E = be("groupOptions", []), y = m(), b = m(false), c = m(false), v = m(false), $ = m({}), o = W({ logo: "", name: "", url: "", description: "", group_id: "" });
  X(() => {
  });
  const C = Z(() => E.value.filter((e) => +e.group_id > 0)), F = async ({ data: e = {} } = {}) => {
    O(), await xe(), c.value = !!+e.ai_link_id, o.logo = e.logo || "", o.name = e.name || "", o.url = e.url || "", o.description = e.description || "", o.group_id = e.group_id || o.group_id || "", $.value = e, b.value = true;
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
    }), i("success"), Y.success(window.$t("action_save_success")), V();
  };
  return p({ open: F, close: V, reset: O }), (e, d) => {
    const h = ne, D = se, R = de, T = ae, M = ie, I = q, L = re;
    return u(), S(L, { modelValue: b.value, "onUpdate:modelValue": d[5] || (d[5] = (a) => b.value = a), title: e.$t(c.value ? "action_edit" : "action_add"), width: "740px", "destroy-on-close": "", "close-on-click-modal": false }, { footer: s(() => [r("div", Oe, [l(I, { class: "w-[96px] h-[36px]", type: "primary", loading: v.value, onClick: t }, { default: s(() => [B(f(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), l(I, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: ee(V, ["stop"]) }, { default: s(() => [B(f(e.$t("action_cancel")), 1)]), _: 1 })])]), default: s(() => [l(M, { ref_key: "formRef", ref: y, "label-width": "108px", "label-position": "left", model: o }, { default: s(() => [l(h, { label: e.$t("icon"), prop: "logo", rules: x(U)({ message: "form_upload_placeholder" }) }, { default: s(() => [l(Ce, { modelValue: o.logo, "onUpdate:modelValue": d[0] || (d[0] = (a) => o.logo = a), class: "w-12 h-12" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), l(h, { label: e.$t("website_name"), prop: "name", rules: x(U)({ message: "form_input_placeholder" }) }, { default: s(() => [l(D, { modelValue: o.name, "onUpdate:modelValue": d[1] || (d[1] = (a) => o.name = a), size: "large", "show-word-limit": "", maxlength: "20", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), l(h, { label: "URL", prop: "url", rules: x(U)({ message: "form_input_placeholder", validator: ["url"] }) }, { default: s(() => [l(D, { modelValue: o.url, "onUpdate:modelValue": d[2] || (d[2] = (a) => o.url = a), size: "large", placeholder: "http://" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["rules"]), l(h, { label: e.$t("description"), prop: "description" }, { default: s(() => [l(D, { size: "large", modelValue: o.description, "onUpdate:modelValue": d[3] || (d[3] = (a) => o.description = a), type: "textarea", resize: "none", rows: "5", maxlength: "200", "show-word-limit": "", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), l(h, { label: e.$t("group"), prop: "group_id", rules: x(U)({ message: "form_select_placeholder" }) }, { default: s(() => [l(T, { modelValue: o.group_id, "onUpdate:modelValue": d[4] || (d[4] = (a) => o.group_id = a), size: "large" }, { default: s(() => [(u(true), k(N, null, z(C.value, (a) => (u(), S(R, { key: a.group_id, value: a.group_id, label: e.$t(a.group_name) }, null, 8, ["value", "label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), Le = { class: "flex-none flex items-center justify-between mt-5" }, Ue = { class: "flex-1 w-0" }, Se = { class: "flex-none flex-center gap-3 ml-8" }, Be = { class: "text-sm" }, Re = { class: "mt-6 flex-1 overflow-y-auto relative" }, Te = { key: 1 }, Me = ["id"], je = { class: "grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mb-9" }, Ge = ["aria-label", "onClick"], ze = ["src"], Ne = { class: "flex-1 w-0" }, Ae = { class: "flex items-center justify-between" }, Pe = { class: "text-sm text-[#1D1E1F] font-semibold line-clamp-1" }, Je = { class: "text-[#FA5151]" }, Ke = { class: "text-sm text-[#1D1E1F] text-opacity-60 line-clamp-1" }, yo = Q({ __name: "index", setup(n) {
  const p = m(), g = m(), i = W({ group_id: 0, keyword: "" }), E = m([]), y = m(false), b = Z(() => {
    let t = o.value.filter((e) => +e.group_id > 0 && e.children && e.children.length);
    return +i.group_id > 0 && (t = t.filter((e) => e.group_id === +i.group_id)), t;
  });
  X(() => {
    c(), J.on("user-login-success", c);
  }), Ee(() => {
    J.off("user-login-success", c);
  });
  const c = async () => {
    await v();
  }, v = async () => {
    y.value = true;
    const t = await A.list({ params: i }).finally(() => {
      y.value = false;
    });
    E.value = t, F();
  }, $ = ({ data: t = {} } = {}) => {
    +i.group_id > 0 && (t.group_id = +i.group_id), g.value.open({ data: t });
  }, o = m([]);
  $e("groupOptions", o);
  const C = ({ options: t = [] } = {}) => {
    o.value = t.map((e) => ({ ...e, children: [] })), F();
  }, F = () => {
    o.value.forEach((t) => {
      t.children = E.value.filter((e) => e.group_id === t.group_id);
    });
  }, V = ({ data: t = {} } = {}) => {
    window.open(t.url, "_blank");
  }, O = async (t, e = {}) => {
    switch (t) {
      case "edit":
        $({ data: e });
        break;
      case "del":
        await ce.confirm(window.$t("action_delete_confirm"), window.$t("action_delete_tip")), await A.delete({ data: { ai_link_id: e.ai_link_id } }), Y.success(window.$t("action_delete_success")), c();
        break;
    }
  };
  return (t, e) => {
    const d = q, h = ye, D = we, R = ke, T = he, M = pe, I = _e, L = me, a = fe, oe = ge, te = ve, le = ue;
    return u(), S(te, { class: "px-[60px] py-8" }, { default: s(() => [l(h, { title: t.$t("module.ai_toolbox") }, { right: s(() => [l(d, { type: "primary", onClick: $ }, { default: s(() => [B(" +" + f(t.$t("action_add")), 1)]), _: 1 })]), _: 1 }, 8, ["title"]), r("div", Le, [r("div", Ue, [l(D, { ref_key: "groupTabsRef", ref: p, modelValue: i.group_id, "onUpdate:modelValue": e[0] || (e[0] = (_) => i.group_id = _), "group-type": x(Fe), onChange: c, onGetOptions: C }, null, 8, ["modelValue", "group-type"])]), r("div", Se, [l(R, { modelValue: i.keyword, "onUpdate:modelValue": e[1] || (e[1] = (_) => i.keyword = _), placeholder: "module.ai_toolbox_search_placeholder", onChange: c }, null, 8, ["modelValue"]), r("div", { class: "flex items-center gap-1 whitespace-nowrap cursor-pointer text-[#576D9C]", onClick: e[2] || (e[2] = (..._) => p.value.open && p.value.open(..._)) }, [l(T, { name: "cate-manage", width: "14px", height: "14px" }), r("div", Be, f(t.$t("group")), 1)])])]), K((u(), k("div", Re, [E.value.length ? (u(), k("ul", Te, [(u(true), k(N, null, z(b.value, (_) => (u(), k("li", { key: _.group_id }, [K(r("div", { id: `toolbox_group_${_.group_id}`, class: "text-[#4F5052] text-opacity-60 text-sm mb-4" }, f(_.group_name), 9, Me), [[Ve, !+i.group_id || +i.group_id < 0]]), r("ul", je, [(u(true), k(N, null, z(_.children, (w) => (u(), k("li", { key: w.ai_link_id, class: "h-[72px] bg-white border rounded p-4 flex items-center gap-2 cursor-pointer hover:shadow group", role: "button", "aria-label": w.name, onClick: (P) => V({ data: w }) }, [r("img", { class: "w-10 h-10 object-cover rounded-full overflow-hidden", src: w.logo }, null, 8, ze), r("div", Ne, [r("div", Ae, [r("div", Pe, f(w.name), 1), l(oe, { trigger: "click", onCommand: (P) => O(P, w) }, { dropdown: s(() => [l(a, null, { default: s(() => [l(L, { command: "edit" }, { default: s(() => [B(f(t.$t("action_edit")), 1)]), _: 1 }), l(L, { command: "del" }, { default: s(() => [r("span", Je, f(t.$t("action_delete")), 1)]), _: 1 })]), _: 1 })]), default: s(() => [r("div", { class: "w-5 h-5 flex-center rounded invisible group-hover:visible hover:bg-[#F2F4F8]", onClick: ee(() => {
    }, ["stop"]) }, [l(I, { size: "12" }, { default: s(() => [l(x(De))]), _: 1 })])]), _: 2 }, 1032, ["onCommand"])]), r("div", Ke, f(w.description), 1)])], 8, Ge))), 128))])]))), 128))])) : (u(), S(M, { key: 0, class: "mt-10", description: t.$t("no_data") }, null, 8, ["description"]))])), [[le, y.value]]), l(Ie, { ref_key: "createRef", ref: g, onSuccess: c }, null, 512)]), _: 1 });
  };
} });
export {
  yo as default
};
