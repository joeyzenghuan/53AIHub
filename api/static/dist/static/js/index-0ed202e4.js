import { s as E, k as $, u as A, b3 as H, b4 as J, b5 as G, r as f, ae as C, al as P, o as j, h as q, i as l, b as i, f as t, g as K, c as _, d as p, t as n, F as Q, G as R, z as I, b6 as W, a5 as X, e as Y, H as k, a9 as Z, y as ee, $ as ae, aa as te, ac as le, p as se } from "./index-7b696e01.js";
import { v as ne } from "./el-loading-5050bc7d.js";
import { _ as oe } from "./index-71389ea4.js";
import { E as re } from "./el-divider-0c731d25.js";
import { E as ie } from "./el-input-number-d679436c.js";
import { _ as ce } from "./index.vue_vue_type_script_setup_true_lang-ca2646ba.js";
import { _ as B } from "./image.vue_vue_type_style_index_0_lang-376c63d4.js";
import "./index-74671778.js";
const V = { async getBanner() {
  const { data: { banner: c = "{}" } = {} } = await E.get("/api/enterprises/banner").catch($);
  let o = {};
  try {
    o = JSON.parse(c);
  } catch {
    o = {};
  }
  return o;
}, async saveBanner(c) {
  return E.put("/api/enterprises/banner", { banner: JSON.stringify(c) }).catch($);
} }, ue = { class: "mt-5 flex-1 flex flex-col gap-4 bg-white py-6 px-8 box-border" }, de = { class: "text-[#939499] text-xs w-full" }, _e = { key: 0, class: "mt-4 w-full flex flex-col gap-4" }, pe = { class: "text-[#939499] text-xs w-full" }, D = 5, me = A({ __name: "index", setup(c) {
  H(), J(), G();
  const o = f(), u = f(true), m = f(false), a = C({ url_list: [], interval: 5 }), N = C({}), v = P(() => a.url_list.length >= D), U = async () => {
    await o.value.validate() && (m.value = true, await V.saveBanner({ ...a }).finally(() => {
      m.value = false;
    }), Z.success(window.$t("action_save_success")), b());
  }, b = async () => {
    u.value = true;
    const e = await V.getBanner().finally(() => {
      u.value = false;
    });
    a.url_list = e.url_list || [], a.interval = e.interval || 5;
  }, g = ({ url: e = "" }, s) => {
    a.url_list[s] ? a.url_list[s] = e : a.url_list.push(e);
  }, z = (e) => {
    a.url_list.splice(e, 1);
  };
  return j(() => {
    b();
  }), (e, s) => {
    const F = ce, y = ee, h = ae, w = te, S = ie, L = le, O = re, M = oe, T = ne;
    return i(), q(M, { class: "px-[60px] py-8" }, { default: l(() => [t(F, { title: e.$t("module.banner_diagram") }, null, 8, ["title"]), K((i(), _("div", ue, [t(L, { ref_key: "form_ref", ref: o, class: "flex-1 max-h-[calc(100vh-288px)] overflow-auto", model: a, rules: N, "label-position": "top" }, { default: l(() => [t(w, { label: e.$t("banner.upload_image") }, { default: l(() => [p("div", de, n(e.$t("banner.upload_image_tip")), 1), a.url_list.length > 0 ? (i(), _("ul", _e, [(i(true), _(Q, null, R(a.url_list, (x, r) => (i(), _("li", { key: r, class: "w-full relative" }, [t(B, { class: "!w-full !h-[14vw]", modelValue: a.url_list[r], "onUpdate:modelValue": (d) => a.url_list[r] = d, cropperDisabled: true, onConfirm: (d) => g(d, r) }, { "mask-text": l(() => [t(y, { class: "cursor-pointer", size: "24", color: "#fff" }, { default: l(() => [t(I(W))]), _: 1 }), t(y, { class: "cursor-pointer", size: "24", color: "#fff", onClick: (d) => z(r) }, { default: l(() => [t(I(X))]), _: 2 }, 1032, ["onClick"])]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue", "onConfirm"])]))), 128))])) : Y("", true), t(B, { class: "w-auto h-auto", cropperDisabled: true, disabled: v.value, onConfirm: g }, { default: l(() => [t(h, { class: "mt-4 !border-none !outline-none", type: "primary", plain: "", size: "large", disabled: v.value }, { default: l(() => [k(" + " + n(e.$t("action_add")) + "(" + n(a.url_list.length) + "/" + n(D) + ") ", 1)]), _: 1 }, 8, ["disabled"])]), _: 1 }, 8, ["disabled"])]), _: 1 }, 8, ["label"]), t(w, { label: e.$t("banner.interval") }, { default: l(() => [p("div", pe, n(e.$t("banner.interval_tip")), 1), t(S, { class: "mt-4 !w-[300px]", modelValue: a.interval, "onUpdate:modelValue": s[0] || (s[0] = (x) => a.interval = x), size: "large", controls: false, min: 1, max: 1e3 }, { suffix: l(() => [p("span", null, n(e.$t("second")), 1)]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), s[1] || (s[1] = p("div", { class: "w-full h-8" }, null, -1))]), _: 1 }, 8, ["model", "rules"]), t(O, { class: "!mt-3" }), t(h, { class: "h-[36px] w-[96px]", type: "primary", size: "large", loading: m.value, onClick: U }, { default: l(() => [k(n(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])), [[T, u.value]])]), _: 1 });
  };
} });
const Ee = se(me, [["__scopeId", "data-v-fd5edf8f"]]);
export {
  Ee as default
};
