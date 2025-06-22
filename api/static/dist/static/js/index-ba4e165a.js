import { z as E, A as I, y as T, h as J, aq as j, ak as q, r as f, Z as C, Y as G, o as H, j as K, w as l, b as i, f as t, m as P, c as _, d as m, t as n, F as Y, K as Z, u as $, aO as Q, a8 as R, e as W, L as k, a9 as X, G as ee, a4 as ae, ag as te, ah as le, I as se } from "./index-8579fe4a.js";
import { v as ne } from "./el-loading-8747b309.js";
import { _ as oe } from "./index-ad57f5b2.js";
import { E as re } from "./el-divider-7d014453.js";
import { E as ie } from "./el-input-number-310bd679.js";
import { _ as ue } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { _ as B } from "./image.vue_vue_type_style_index_0_lang-1ce00652.js";
import "./index-ede470e7.js";
const V = { async getBanner() {
  const { data: { banner: u = "{}" } = {} } = await E.get("/api/enterprises/banner").catch(I);
  let o = {};
  try {
    o = JSON.parse(u);
  } catch {
    o = {};
  }
  return o;
}, async saveBanner(u) {
  return E.put("/api/enterprises/banner", { banner: JSON.stringify(u) }).catch(I);
} }, ce = { class: "mt-5 flex-1 flex flex-col gap-4 bg-white py-6 px-8 box-border" }, de = { class: "text-[#939499] text-xs w-full" }, _e = { key: 0, class: "mt-4 w-full flex flex-col gap-4" }, me = { class: "text-[#939499] text-xs w-full" }, D = 5, pe = T({ __name: "index", setup(u) {
  J(), j(), q();
  const o = f(), c = f(true), p = f(false), a = C({ url_list: [], interval: 5 }), N = C({}), v = G(() => a.url_list.length >= D), U = async () => {
    await o.value.validate() && (p.value = true, await V.saveBanner({ ...a }).finally(() => {
      p.value = false;
    }), X.success(window.$t("action_save_success")), g());
  }, g = async () => {
    c.value = true;
    const e = await V.getBanner().finally(() => {
      c.value = false;
    });
    a.url_list = e.url_list || [], a.interval = e.interval || 5;
  }, b = ({ url: e = "" }, s) => {
    a.url_list[s] ? a.url_list[s] = e : a.url_list.push(e);
  }, z = (e) => {
    a.url_list.splice(e, 1);
  };
  return H(() => {
    g();
  }), (e, s) => {
    const F = ue, h = ee, y = ae, w = te, L = ie, S = le, O = re, A = oe, M = ne;
    return i(), K(A, { class: "px-[60px] py-8" }, { default: l(() => [t(F, { title: e.$t("module.banner_diagram") }, null, 8, ["title"]), P((i(), _("div", ce, [t(S, { ref_key: "form_ref", ref: o, class: "flex-1 max-h-[calc(100vh-288px)] overflow-auto", model: a, rules: N, "label-position": "top" }, { default: l(() => [t(w, { label: e.$t("banner.upload_image") }, { default: l(() => [m("div", de, n(e.$t("banner.upload_image_tip")), 1), a.url_list.length > 0 ? (i(), _("ul", _e, [(i(true), _(Y, null, Z(a.url_list, (x, r) => (i(), _("li", { key: r, class: "w-full relative" }, [t(B, { class: "!w-full !h-[14vw]", modelValue: a.url_list[r], "onUpdate:modelValue": (d) => a.url_list[r] = d, cropperDisabled: true, onConfirm: (d) => b(d, r) }, { "mask-text": l(() => [t(h, { class: "cursor-pointer", size: "24", color: "#fff" }, { default: l(() => [t($(Q))]), _: 1 }), t(h, { class: "cursor-pointer", size: "24", color: "#fff", onClick: (d) => z(r) }, { default: l(() => [t($(R))]), _: 2 }, 1032, ["onClick"])]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue", "onConfirm"])]))), 128))])) : W("", true), t(B, { class: "w-auto h-auto", cropperDisabled: true, disabled: v.value, onConfirm: b }, { default: l(() => [t(y, { class: "mt-4 !border-none !outline-none", type: "primary", plain: "", size: "large", disabled: v.value }, { default: l(() => [k(" + " + n(e.$t("action_add")) + "(" + n(a.url_list.length) + "/" + n(D) + ") ", 1)]), _: 1 }, 8, ["disabled"])]), _: 1 }, 8, ["disabled"])]), _: 1 }, 8, ["label"]), t(w, { label: e.$t("banner.interval") }, { default: l(() => [m("div", me, n(e.$t("banner.interval_tip")), 1), t(L, { class: "mt-4 !w-[300px]", modelValue: a.interval, "onUpdate:modelValue": s[0] || (s[0] = (x) => a.interval = x), size: "large", controls: false, min: 1, max: 1e3 }, { suffix: l(() => [m("span", null, n(e.$t("second")), 1)]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), s[1] || (s[1] = m("div", { class: "w-full h-8" }, null, -1))]), _: 1, __: [1] }, 8, ["model", "rules"]), t(O, { class: "!mt-3" }), t(y, { class: "h-[36px] w-[96px]", type: "primary", size: "large", loading: p.value, onClick: U }, { default: l(() => [k(n(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])), [[M, c.value]])]), _: 1 });
  };
} });
const Ee = se(pe, [["__scopeId", "data-v-fd5edf8f"]]);
export {
  Ee as default
};
