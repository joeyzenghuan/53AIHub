import { E as T, e as A, d as H, D as P, f as j, S as G, v as K, b as q } from "./element-plus-c72880c6.js";
import { _ as Q } from "./index-62cbccec.js";
import { _ as R } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { O as W, F as X } from "./@element-plus-0cfad8bb.js";
import { _ as E } from "./image.vue_vue_type_style_index_0_lang-58647f4f.js";
import { s as C, t as I, a as Y, b as Z, f as ee } from "./index-76ebd052.js";
import { d as te, h as ae, e as f, V, j as le, i as se, o as i, J as oe, K as l, M as a, S as ne, c as m, a as p, P as o, H as re, ac as ie, G as ce, a2 as $, u as B } from "./@vue-3b855f7b.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
import "./vue-router-2f60a71a.js";
import "./vue-cropper-d3d11008.js";
import "./pinia-6f4b1ece.js";
import "./vue-demi-71ba0ef2.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
const k = { async getBanner() {
  const { data: { banner: c = "{}" } = {} } = await C.get("/api/enterprises/banner").catch(I);
  let n = {};
  try {
    n = JSON.parse(c);
  } catch {
    n = {};
  }
  return n;
}, async saveBanner(c) {
  return C.put("/api/enterprises/banner", { banner: JSON.stringify(c) }).catch(I);
} }, ue = { class: "mt-5 flex-1 flex flex-col gap-4 bg-white py-6 px-8 box-border" }, de = { class: "text-[#939499] text-xs w-full" }, me = { key: 0, class: "mt-4 w-full flex flex-col gap-4" }, pe = { class: "text-[#939499] text-xs w-full" }, D = 5, _e = te({ __name: "index", setup(c) {
  ae(), Y(), Z();
  const n = f(), u = f(true), _ = f(false), t = V({ url_list: [], interval: 5 }), N = V({}), v = le(() => t.url_list.length >= D), S = async () => {
    await n.value.validate() && (_.value = true, await k.saveBanner({ ...t }).finally(() => {
      _.value = false;
    }), T.success(window.$t("action_save_success")), b());
  }, b = async () => {
    u.value = true;
    const e = await k.getBanner().finally(() => {
      u.value = false;
    });
    t.url_list = e.url_list || [], t.interval = e.interval || 5;
  }, g = ({ url: e = "" }, s) => {
    t.url_list[s] ? t.url_list[s] = e : t.url_list.push(e);
  }, U = (e) => {
    t.url_list.splice(e, 1);
  };
  return se(() => {
    b();
  }), (e, s) => {
    const F = R, h = q, y = A, w = H, z = P, L = j, O = G, M = Q, J = K;
    return i(), oe(M, { class: "px-[60px] py-8" }, { default: l(() => [a(F, { title: e.$t("module.banner_diagram") }, null, 8, ["title"]), ne((i(), m("div", ue, [a(L, { ref_key: "form_ref", ref: n, class: "flex-1 max-h-[calc(100vh-288px)] overflow-auto", model: t, rules: N, "label-position": "top" }, { default: l(() => [a(w, { label: e.$t("banner.upload_image") }, { default: l(() => [p("div", de, o(e.$t("banner.upload_image_tip")), 1), t.url_list.length > 0 ? (i(), m("ul", me, [(i(true), m(re, null, ie(t.url_list, (x, r) => (i(), m("li", { key: r, class: "w-full relative" }, [a(E, { class: "!w-full !h-[14vw]", modelValue: t.url_list[r], "onUpdate:modelValue": (d) => t.url_list[r] = d, cropperDisabled: true, onConfirm: (d) => g(d, r) }, { "mask-text": l(() => [a(h, { class: "cursor-pointer", size: "24", color: "#fff" }, { default: l(() => [a(B(W))]), _: 1 }), a(h, { class: "cursor-pointer", size: "24", color: "#fff", onClick: (d) => U(r) }, { default: l(() => [a(B(X))]), _: 2 }, 1032, ["onClick"])]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue", "onConfirm"])]))), 128))])) : ce("", true), a(E, { class: "w-auto h-auto", cropperDisabled: true, disabled: v.value, onConfirm: g }, { default: l(() => [a(y, { class: "mt-4 !border-none !outline-none", type: "primary", plain: "", size: "large", disabled: v.value }, { default: l(() => [$(" + " + o(e.$t("action_add")) + "(" + o(t.url_list.length) + "/" + o(D) + ") ", 1)]), _: 1 }, 8, ["disabled"])]), _: 1 }, 8, ["disabled"])]), _: 1 }, 8, ["label"]), a(w, { label: e.$t("banner.interval") }, { default: l(() => [p("div", pe, o(e.$t("banner.interval_tip")), 1), a(z, { class: "mt-4 !w-[300px]", modelValue: t.interval, "onUpdate:modelValue": s[0] || (s[0] = (x) => t.interval = x), size: "large", controls: false, min: 1, max: 1e3 }, { suffix: l(() => [p("span", null, o(e.$t("second")), 1)]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), s[1] || (s[1] = p("div", { class: "w-full h-8" }, null, -1))]), _: 1 }, 8, ["model", "rules"]), a(O, { class: "!mt-3" }), a(y, { class: "h-[36px] w-[96px]", type: "primary", size: "large", loading: _.value, onClick: S }, { default: l(() => [$(o(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])), [[J, u.value]])]), _: 1 });
  };
} });
const Oe = ee(_e, [["__scopeId", "data-v-fd5edf8f"]]);
export {
  Oe as default
};
