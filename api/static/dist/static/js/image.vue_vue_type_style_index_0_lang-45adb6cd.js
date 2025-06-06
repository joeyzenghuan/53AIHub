import { b as V, e as F, g as Q, E } from "./element-plus-c72880c6.js";
import { d as M, e as d, V as q, f as G, o as v, J as N, K as n, a as r, M as i, Q as L, u as h, P as f, a2 as w, n as X, c as C, A as z, I as Y, O as Z, H as ee } from "./@vue-3b855f7b.js";
import { P as te, N as oe, u as ae, y as le } from "./@element-plus-0cfad8bb.js";
import { M as ie } from "./vue-cropper-d3d11008.js";
import { E as R, g as se, f as re } from "./index-226b5715.js";
const ne = { class: "cropper" }, pe = { class: "cropper_left" }, ce = { class: "reupload_box" }, ue = { class: "cropper_right" }, de = { class: "preview_text" }, fe = ["src"], me = { class: "dialog-footer" }, ge = M({ __name: "index", props: { type: { default: "systemLogo" }, allowTypeList: { default: () => ["jpg", "png", "jpeg"] }, limitSize: { default: 10 }, fixedNumber: { default: () => [1, 1] }, fixedNumberAider: { default: () => [1, 1] }, previewWidth: { default: 160 }, title: { default: "\u56FE\u7247\u88C1\u526A" }, showWidth: { default: 300 }, showHeight: { default: 300 }, action: { default: "ibos" }, uploadAvatar: { type: Boolean, default: false }, cropperDisabled: { type: Boolean, default: false } }, emits: ["confirm"], setup($, { expose: k, emit: T }) {
  const b = /* @__PURE__ */ new Map([["jpg", "image/jpg"], ["png", "image/png"], ["jpeg", "image/jpeg"], ["ico", "image/x-icon,image/ico"]]), l = $, x = T, c = d(false), o = q({ img: "", autoCrop: true, autoCropWidth: 300, autoCropHeight: 300, fixedBox: false, info: true, outputSize: 1, outputType: "png", canScale: true, fixed: true, fixedNumber: [1, 1], full: true, canMove: false, original: false, centerBox: true, infoTrue: true, accept: "image/jpeg,image/jpg,image/png,image/gif,image/x-icon", fillColor: "transparent" }), B = d({ width: "", height: "" }), _ = d([]), y = d({}), m = d({}), U = d(), g = d(false), I = (t) => {
    const e = t.name.substring(t.name.lastIndexOf(".") + 1);
    return l.allowTypeList.includes(e) ? true : (E.error(`\u4EC5\u652F\u6301${_.value.join("\u3001")}\u683C\u5F0F\u7684\u56FE\u7247`), false);
  }, W = async (t) => {
    const { limitSize: e } = l, a = t.target.files[0];
    if (a.size > e * 1024 * 1024)
      return E.warning(`\u56FE\u7247\u4E0A\u4F20\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${e}MB`);
    const p = window.URL || window.webkitURL;
    if (I(a)) {
      if (o.img = p.createObjectURL(a), l.cropperDisabled) {
        g.value = true;
        const u = await S(a).finally(() => {
          g.value = false;
        }), s = `${R}/api/preview/${u.preview_key || ""}`;
        u.url = s, x("confirm", u);
        return;
      }
      c.value = true;
    }
  }, H = () => {
    m.value.refresh();
  }, P = () => {
    m.value.rotateRight();
  }, j = (t) => {
    const e = t || 1;
    m.value.changeScale(e);
  }, D = async (t) => {
    var _a;
    if (g.value)
      return;
    if (t === "reupload") {
      (_a = U.value) == null ? void 0 : _a.click();
      return;
    }
    let e = document.createElement("input");
    e.type = "file", e.accept = l.allowTypeList.map((a) => b.get(a)).join(",") || o.accept, e.onchange = W, e.click(), await X(), e = null;
  }, S = async (t) => {
    const e = new FormData();
    e.append("file", t);
    try {
      return (await se.upload({ data: e })).data;
    } catch {
      return {};
    }
  }, O = (t, e) => {
    const a = t.split(","), p = a[0].match(/:(.*?);/)[1], u = atob(a[1]);
    let s = u.length;
    const A = new Uint8Array(s);
    for (; s--; )
      A[s] = u.charCodeAt(s);
    return new File([A], e, { type: p });
  }, J = () => {
    g.value = true, m.value.getCropData(async (t) => {
      const e = O(t, "images.png"), a = await S(e).finally(() => {
        g.value = false;
      }), p = `${R}/api/preview/${a.preview_key || ""}`;
      a.url = p, x("confirm", a), c.value = false;
    });
  }, K = (t) => {
    m.value.getCropData((e) => {
      y.value.img = e;
    });
  };
  return G(() => l, () => {
    B.value = { width: `${l.previewWidth}px`, height: `${l.previewWidth / l.fixedNumber[0]}px`, border: "1px solid #e8e8e8", "border-radius": "2px" }, _.value = [];
    for (let t = 0; t < l.allowTypeList.length; t++)
      _.value.push(l.allowTypeList[t].toUpperCase());
  }, { deep: true, immediate: true }), k({ uploadFile: D, open(t) {
    o.img = t, c.value = true;
  } }), (t, e) => {
    const a = V, p = F, u = Q;
    return v(), N(u, { "model-value": c.value, title: t.$t("image_cropper"), width: "550px", "close-on-click-modal": false, "close-on-press-escape": false, "append-to-body": "", onClose: e[4] || (e[4] = (s) => c.value = false) }, { default: n(() => [r("div", ne, [r("div", pe, [i(h(ie), { ref_key: "cropperRef", ref: m, style: L({ width: `${t.showWidth}px`, height: `${t.showHeight}px` }), img: o.img, info: true, "info-true": o.infoTrue, "auto-crop": o.autoCrop, "fixed-box": o.fixedBox, "can-move": o.canMove, "can-scale": o.canScale, "fixed-number": t.fixedNumber, fixed: o.fixed, full: o.full, "center-box": o.centerBox, "fill-color": o.fillColor, "output-type": o.outputType, onRealTime: K }, null, 8, ["style", "img", "info-true", "auto-crop", "fixed-box", "can-move", "can-scale", "fixed-number", "fixed", "full", "center-box", "fill-color", "output-type"]), r("div", ce, [r("div", { class: "reupload_text", onClick: e[0] || (e[0] = (s) => D("reload")) }, f(t.$t("reupload")), 1), r("div", null, [i(a, { class: "rotate_right", onClick: e[1] || (e[1] = (s) => j(1)) }, { default: n(() => [i(h(te))]), _: 1 }), i(a, { class: "rotate_right", onClick: e[2] || (e[2] = (s) => j(-1)) }, { default: n(() => [i(h(oe))]), _: 1 }), i(a, { class: "rotate_right", onClick: P }, { default: n(() => [i(h(ae))]), _: 1 })])])]), r("div", ue, [r("div", de, f(t.$t("action_preview")), 1), r("div", { style: L(B.value), class: "previewImg" }, [r("img", { style: L(y.value.img), src: y.value.img, alt: "" }, null, 12, fe)], 4)])])]), footer: n(() => [r("span", me, [i(p, { size: "large", onClick: e[3] || (e[3] = (s) => c.value = false) }, { default: n(() => [w(f(t.$t("action_cancel")), 1)]), _: 1 }), i(p, { size: "large", type: "", onClick: H }, { default: n(() => [w(f(t.$t("action_reset")), 1)]), _: 1 }), i(p, { size: "large", type: "primary", loading: g.value, onClick: J }, { default: n(() => [w(f(t.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"])])]), _: 1 }, 8, ["model-value", "title"]);
  };
} });
const ve = re(ge, [["__scopeId", "data-v-143dbe6c"]]), _e = ["src"], ye = { key: 1, class: "w-full h-full flex items-center justify-center border rounded upload-image-placeholder" }, he = { class: "hidden group-hover:flex absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 items-center justify-center gap-6 text-xs text-white" }, ke = M({ __name: "image", props: { modelValue: { default: "" }, text: { default: "action_replace" }, showText: { type: Boolean, default: false }, cropperDisabled: { type: Boolean, default: false }, allowTypeList: {}, disabled: { type: Boolean, default: false } }, emits: ["update:modelValue", "confirm"], setup($, { emit: k }) {
  const T = $, b = k, l = d(), x = () => {
    T.disabled || l.value.uploadFile();
  }, c = (o = {}) => {
    b("update:modelValue", o.url), b("confirm", { url: o.url });
  };
  return (o, B) => {
    const _ = F, y = V;
    return v(), C("div", { class: Y(["w-[50px] h-[50px] rounded overflow-hidden relative cursor-pointer group", [o.disabled ? "cursor-not-allowed" : ""]]), onClick: Z(x, ["stop"]) }, [z(o.$slots, "default", {}, () => [o.showText ? (v(), N(_, { key: 0, type: "text" }, { default: n(() => [w(f(o.$t(o.text)), 1)]), _: 1 })) : (v(), C(ee, { key: 1 }, [o.modelValue ? (v(), C("img", { key: 0, class: "w-full h-full object-cover", src: o.modelValue, alt: "logo" }, null, 8, _e)) : (v(), C("div", ye, [i(y, { size: "16", color: "#9A9A9A" }, { default: n(() => [i(h(le))]), _: 1 })])), r("div", he, [z(o.$slots, "mask-text", {}, () => [w(f(o.$t(o.text)), 1)])])], 64))]), i(ve, { ref_key: "cropper_ref", ref: l, action: "python", cropperDisabled: o.cropperDisabled, allowTypeList: o.allowTypeList, onConfirm: c }, null, 8, ["cropperDisabled", "allowTypeList"])], 2);
  };
} });
export {
  ke as _
};
