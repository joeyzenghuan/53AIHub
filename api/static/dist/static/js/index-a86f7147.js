import { _ as xe } from "./index-ad57f5b2.js";
import { dh as Ke, bB as ue, ce as ke, bE as Ce, aP as Y, b1 as L, c0 as ie, cv as D, y as x, aV as Be, aU as W, bw as le, r as R, Y as X, b, j as T, w as r, c as N, F as j, K as te, q as S, u as o, by as Fe, s as A, e as U, d as g, x as O, f as s, G as B, di as qe, t as $, a7 as Oe, b3 as Me, a1 as je, a2 as ze, c8 as He, a8 as Pe, dj as Ge, a$ as oe, aI as Je, U as re, dk as me, dl as We, X as Xe, dm as Ye, $ as ae, bx as Ze, bh as Qe, ax as et, ck as tt, aH as fe, a3 as _e, b0 as at, L as V, a9 as G, n as lt, a4 as ce, R as pe, bW as ot, Z as Le, al as H, a5 as st, ag as Ne, ah as Ue, a6 as Se, aB as nt, I as it, an as rt, o as dt, N as ge, a as ut, d8 as ne } from "./index-8579fe4a.js";
import { E as ct, a as pt, b as mt } from "./el-dropdown-menu-ce96a192.js";
import "./el-scrollbar-4065fe54.js";
import "./el-dropdown-item-4ed993c7.js";
import { E as ft } from "./el-tag-0b6baecb.js";
import { _ as _t } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { E as gt } from "./el-image-viewer-dd2f27c0.js";
import { E as yt } from "./el-progress-95b09f7d.js";
import { i as vt } from "./isEqual-8c73ec38.js";
import { s as ee, a as Ve } from "./setting-b38aa7f1.js";
import { T as ht } from "./setup-bc7bb42e.js";
import "./dropdown-85221e0a.js";
import "./position-4ca9dd9d.js";
import "./debounce-484109dd.js";
var wt = 1, bt = 4;
function ye(u) {
  return Ke(u, wt | bt);
}
const De = Symbol("uploadContextKey"), $t = "ElUpload";
class Et extends Error {
  constructor(y, l, v, c) {
    super(y), this.name = "UploadAjaxError", this.status = l, this.method = v, this.url = c;
  }
}
function ve(u, y, l) {
  let v;
  return l.response ? v = `${l.response.error || l.response}` : l.responseText ? v = `${l.responseText}` : v = `fail to ${y.method} ${u} ${l.status}`, new Et(v, l.status, y.method, u);
}
function kt(u) {
  const y = u.responseText || u.response;
  if (!y)
    return y;
  try {
    return JSON.parse(y);
  } catch {
    return y;
  }
}
const Ct = (u) => {
  typeof XMLHttpRequest > "u" && ue($t, "XMLHttpRequest is undefined");
  const y = new XMLHttpRequest(), l = u.action;
  y.upload && y.upload.addEventListener("progress", (p) => {
    const a = p;
    a.percent = p.total > 0 ? p.loaded / p.total * 100 : 0, u.onProgress(a);
  });
  const v = new FormData();
  if (u.data)
    for (const [p, a] of Object.entries(u.data))
      ke(a) && a.length ? v.append(p, ...a) : v.append(p, a);
  v.append(u.filename, u.file, u.file.name), y.addEventListener("error", () => {
    u.onError(ve(l, u, y));
  }), y.addEventListener("load", () => {
    if (y.status < 200 || y.status >= 300)
      return u.onError(ve(l, u, y));
    u.onSuccess(kt(y));
  }), y.open(u.method, l, true), u.withCredentials && "withCredentials" in y && (y.withCredentials = true);
  const c = u.headers || {};
  if (c instanceof Headers)
    c.forEach((p, a) => y.setRequestHeader(a, p));
  else
    for (const [p, a] of Object.entries(c))
      Ce(a) || y.setRequestHeader(p, String(a));
  return y.send(v), y;
}, Re = ["text", "picture", "picture-card"];
let Ft = 1;
const de = () => Date.now() + Ft++, Te = Y({ action: { type: String, default: "#" }, headers: { type: L(Object) }, method: { type: String, default: "post" }, data: { type: L([Object, Function, Promise]), default: () => ie({}) }, multiple: Boolean, name: { type: String, default: "file" }, drag: Boolean, withCredentials: Boolean, showFileList: { type: Boolean, default: true }, accept: { type: String, default: "" }, fileList: { type: L(Array), default: () => ie([]) }, autoUpload: { type: Boolean, default: true }, listType: { type: String, values: Re, default: "text" }, httpRequest: { type: L(Function), default: Ct }, disabled: Boolean, limit: Number }), Pt = Y({ ...Te, beforeUpload: { type: L(Function), default: D }, beforeRemove: { type: L(Function) }, onRemove: { type: L(Function), default: D }, onChange: { type: L(Function), default: D }, onPreview: { type: L(Function), default: D }, onSuccess: { type: L(Function), default: D }, onProgress: { type: L(Function), default: D }, onError: { type: L(Function), default: D }, onExceed: { type: L(Function), default: D }, crossorigin: { type: L(String) } }), Lt = Y({ files: { type: L(Array), default: () => ie([]) }, disabled: { type: Boolean, default: false }, handlePreview: { type: L(Function), default: D }, listType: { type: String, values: Re, default: "text" }, crossorigin: { type: L(String) } }), Nt = { remove: (u) => !!u }, Ut = x({ name: "ElUploadList" }), St = x({ ...Ut, props: Lt, emits: Nt, setup(u, { emit: y }) {
  const l = u, { t: v } = Be(), c = W("upload"), p = W("icon"), a = W("list"), F = le(), _ = R(false), m = X(() => [c.b("list"), c.bm("list", l.listType), c.is("disabled", l.disabled)]), C = (h) => {
    y("remove", h);
  };
  return (h, k) => (b(), T(Ge, { tag: "ul", class: S(o(m)), name: o(a).b() }, { default: r(() => [(b(true), N(j, null, te(h.files, (t, n) => (b(), N("li", { key: t.uid || t.name, class: S([o(c).be("list", "item"), o(c).is(t.status), { focusing: _.value }]), tabindex: "0", onKeydown: Fe((e) => !o(F) && C(t), ["delete"]), onFocus: (e) => _.value = true, onBlur: (e) => _.value = false, onClick: (e) => _.value = false }, [A(h.$slots, "default", { file: t, index: n }, () => [h.listType === "picture" || t.status !== "uploading" && h.listType === "picture-card" ? (b(), N("img", { key: 0, class: S(o(c).be("list", "item-thumbnail")), src: t.url, crossorigin: h.crossorigin, alt: "" }, null, 10, ["src", "crossorigin"])) : U("v-if", true), t.status === "uploading" || h.listType !== "picture-card" ? (b(), N("div", { key: 1, class: S(o(c).be("list", "item-info")) }, [g("a", { class: S(o(c).be("list", "item-name")), onClick: O((e) => h.handlePreview(t), ["prevent"]) }, [s(o(B), { class: S(o(p).m("document")) }, { default: r(() => [s(o(qe))]), _: 1 }, 8, ["class"]), g("span", { class: S(o(c).be("list", "item-file-name")), title: t.name }, $(t.name), 11, ["title"])], 10, ["onClick"]), t.status === "uploading" ? (b(), T(o(yt), { key: 0, type: h.listType === "picture-card" ? "circle" : "line", "stroke-width": h.listType === "picture-card" ? 6 : 2, percentage: Number(t.percentage), style: Oe(h.listType === "picture-card" ? "" : "margin-top: 0.5rem") }, null, 8, ["type", "stroke-width", "percentage", "style"])) : U("v-if", true)], 2)) : U("v-if", true), g("label", { class: S(o(c).be("list", "item-status-label")) }, [h.listType === "text" ? (b(), T(o(B), { key: 0, class: S([o(p).m("upload-success"), o(p).m("circle-check")]) }, { default: r(() => [s(o(Me))]), _: 1 }, 8, ["class"])) : ["picture-card", "picture"].includes(h.listType) ? (b(), T(o(B), { key: 1, class: S([o(p).m("upload-success"), o(p).m("check")]) }, { default: r(() => [s(o(je))]), _: 1 }, 8, ["class"])) : U("v-if", true)], 2), o(F) ? U("v-if", true) : (b(), T(o(B), { key: 2, class: S(o(p).m("close")), onClick: (e) => C(t) }, { default: r(() => [s(o(ze))]), _: 2 }, 1032, ["class", "onClick"])), U(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"), U(" This is a bug which needs to be fixed "), U(" TODO: Fix the incorrect navigation interaction "), o(F) ? U("v-if", true) : (b(), N("i", { key: 3, class: S(o(p).m("close-tip")) }, $(o(v)("el.upload.deleteTip")), 3)), h.listType === "picture-card" ? (b(), N("span", { key: 4, class: S(o(c).be("list", "item-actions")) }, [g("span", { class: S(o(c).be("list", "item-preview")), onClick: (e) => h.handlePreview(t) }, [s(o(B), { class: S(o(p).m("zoom-in")) }, { default: r(() => [s(o(He))]), _: 1 }, 8, ["class"])], 10, ["onClick"]), o(F) ? U("v-if", true) : (b(), N("span", { key: 0, class: S(o(c).be("list", "item-delete")), onClick: (e) => C(t) }, [s(o(B), { class: S(o(p).m("delete")) }, { default: r(() => [s(o(Pe))]), _: 1 }, 8, ["class"])], 10, ["onClick"]))], 2)) : U("v-if", true)])], 42, ["onKeydown", "onFocus", "onBlur", "onClick"]))), 128)), A(h.$slots, "append")]), _: 3 }, 8, ["class", "name"]));
} });
var he = oe(St, [["__file", "upload-list.vue"]]);
const Vt = Y({ disabled: { type: Boolean, default: false } }), Dt = { file: (u) => ke(u) }, Ae = "ElUploadDrag", Rt = x({ name: Ae }), Tt = x({ ...Rt, props: Vt, emits: Dt, setup(u, { emit: y }) {
  Je(De) || ue(Ae, "usage: <el-upload><el-upload-dragger /></el-upload>");
  const v = W("upload"), c = R(false), p = le(), a = (_) => {
    if (p.value)
      return;
    c.value = false, _.stopPropagation();
    const m = Array.from(_.dataTransfer.files), C = _.dataTransfer.items || [];
    m.forEach((h, k) => {
      var t;
      const n = C[k], e = (t = n == null ? void 0 : n.webkitGetAsEntry) == null ? void 0 : t.call(n);
      e && (h.isDirectory = e.isDirectory);
    }), y("file", m);
  }, F = () => {
    p.value || (c.value = true);
  };
  return (_, m) => (b(), N("div", { class: S([o(v).b("dragger"), o(v).is("dragover", c.value)]), onDrop: O(a, ["prevent"]), onDragover: O(F, ["prevent"]), onDragleave: O((C) => c.value = false, ["prevent"]) }, [A(_.$slots, "default")], 42, ["onDrop", "onDragover", "onDragleave"]));
} });
var At = oe(Tt, [["__file", "upload-dragger.vue"]]);
const It = Y({ ...Te, beforeUpload: { type: L(Function), default: D }, onRemove: { type: L(Function), default: D }, onStart: { type: L(Function), default: D }, onSuccess: { type: L(Function), default: D }, onProgress: { type: L(Function), default: D }, onError: { type: L(Function), default: D }, onExceed: { type: L(Function), default: D } }), xt = x({ name: "ElUploadContent", inheritAttrs: false }), Kt = x({ ...xt, props: It, setup(u, { expose: y }) {
  const l = u, v = W("upload"), c = le(), p = re({}), a = re(), F = (e) => {
    if (e.length === 0)
      return;
    const { autoUpload: w, limit: f, fileList: d, multiple: i, onStart: P, onExceed: K } = l;
    if (f && d.length + e.length > f) {
      K(e, d);
      return;
    }
    i || (e = e.slice(0, 1));
    for (const I of e) {
      const M = I;
      M.uid = de(), P(M), w && _(M);
    }
  }, _ = async (e) => {
    if (a.value.value = "", !l.beforeUpload)
      return C(e);
    let w, f = {};
    try {
      const i = l.data, P = l.beforeUpload(e);
      f = me(l.data) ? ye(l.data) : l.data, w = await P, me(l.data) && vt(i, f) && (f = ye(l.data));
    } catch {
      w = false;
    }
    if (w === false) {
      l.onRemove(e);
      return;
    }
    let d = e;
    w instanceof Blob && (w instanceof File ? d = w : d = new File([w], e.name, { type: e.type })), C(Object.assign(d, { uid: e.uid }), f);
  }, m = async (e, w) => Xe(e) ? e(w) : e, C = async (e, w) => {
    const { headers: f, data: d, method: i, withCredentials: P, name: K, action: I, onProgress: M, onSuccess: Z, onError: se, httpRequest: Q } = l;
    try {
      w = await m(w ?? d, e);
    } catch {
      l.onRemove(e);
      return;
    }
    const { uid: E } = e, J = { headers: f || {}, withCredentials: P, file: e, data: w, method: i, filename: K, action: I, onProgress: (q) => {
      M(q, e);
    }, onSuccess: (q) => {
      Z(q, e), delete p.value[E];
    }, onError: (q) => {
      se(q, e), delete p.value[E];
    } }, z = Q(J);
    p.value[E] = z, z instanceof Promise && z.then(J.onSuccess, J.onError);
  }, h = (e) => {
    const w = e.target.files;
    w && F(Array.from(w));
  }, k = () => {
    c.value || (a.value.value = "", a.value.click());
  }, t = () => {
    k();
  };
  return y({ abort: (e) => {
    We(p.value).filter(e ? ([f]) => String(e.uid) === f : () => true).forEach(([f, d]) => {
      d instanceof XMLHttpRequest && d.abort(), delete p.value[f];
    });
  }, upload: _ }), (e, w) => (b(), N("div", { class: S([o(v).b(), o(v).m(e.listType), o(v).is("drag", e.drag), o(v).is("disabled", o(c))]), tabindex: o(c) ? "-1" : "0", onClick: k, onKeydown: Fe(O(t, ["self"]), ["enter", "space"]) }, [e.drag ? (b(), T(At, { key: 0, disabled: o(c), onFile: F }, { default: r(() => [A(e.$slots, "default")]), _: 3 }, 8, ["disabled"])) : A(e.$slots, "default", { key: 1 }), g("input", { ref_key: "inputRef", ref: a, class: S(o(v).e("input")), name: e.name, disabled: o(c), multiple: e.multiple, accept: e.accept, type: "file", onChange: h, onClick: O(() => {
  }, ["stop"]) }, null, 42, ["name", "disabled", "multiple", "accept", "onClick"])], 42, ["tabindex", "onKeydown"]));
} });
var we = oe(Kt, [["__file", "upload-content.vue"]]);
const be = "ElUpload", $e = (u) => {
  var y;
  (y = u.url) != null && y.startsWith("blob:") && URL.revokeObjectURL(u.url);
}, Bt = (u, y) => {
  const l = Ye(u, "fileList", void 0, { passive: true }), v = (t) => l.value.find((n) => n.uid === t.uid);
  function c(t) {
    var n;
    (n = y.value) == null || n.abort(t);
  }
  function p(t = ["ready", "uploading", "success", "fail"]) {
    l.value = l.value.filter((n) => !t.includes(n.status));
  }
  function a(t) {
    l.value = l.value.filter((n) => n.uid !== t.uid);
  }
  const F = (t, n) => {
    const e = v(n);
    e && (console.error(t), e.status = "fail", a(e), u.onError(t, e, l.value), u.onChange(e, l.value));
  }, _ = (t, n) => {
    const e = v(n);
    e && (u.onProgress(t, e, l.value), e.status = "uploading", e.percentage = Math.round(t.percent));
  }, m = (t, n) => {
    const e = v(n);
    e && (e.status = "success", e.response = t, u.onSuccess(t, e, l.value), u.onChange(e, l.value));
  }, C = (t) => {
    Ce(t.uid) && (t.uid = de());
    const n = { name: t.name, percentage: 0, status: "ready", size: t.size, raw: t, uid: t.uid };
    if (u.listType === "picture-card" || u.listType === "picture")
      try {
        n.url = URL.createObjectURL(t);
      } catch (e) {
        Ze(be, e.message), u.onError(e, n, l.value);
      }
    l.value = [...l.value, n], u.onChange(n, l.value);
  }, h = async (t) => {
    const n = t instanceof File ? v(t) : t;
    n || ue(be, "file to be removed not found");
    const e = (w) => {
      c(w), a(w), u.onRemove(w, l.value), $e(w);
    };
    u.beforeRemove ? await u.beforeRemove(n, l.value) !== false && e(n) : e(n);
  };
  function k() {
    l.value.filter(({ status: t }) => t === "ready").forEach(({ raw: t }) => {
      var n;
      return t && ((n = y.value) == null ? void 0 : n.upload(t));
    });
  }
  return ae(() => u.listType, (t) => {
    t !== "picture-card" && t !== "picture" || (l.value = l.value.map((n) => {
      const { raw: e, url: w } = n;
      if (!w && e)
        try {
          n.url = URL.createObjectURL(e);
        } catch (f) {
          u.onError(f, n, l.value);
        }
      return n;
    }));
  }), ae(l, (t) => {
    for (const n of t)
      n.uid || (n.uid = de()), n.status || (n.status = "success");
  }, { immediate: true, deep: true }), { uploadFiles: l, abort: c, clearFiles: p, handleError: F, handleProgress: _, handleStart: C, handleSuccess: m, handleRemove: h, submit: k, revokeFileObjectURL: $e };
}, qt = x({ name: "ElUpload" }), Ot = x({ ...qt, props: Pt, setup(u, { expose: y }) {
  const l = u, v = le(), c = re(), { abort: p, submit: a, clearFiles: F, uploadFiles: _, handleStart: m, handleError: C, handleRemove: h, handleSuccess: k, handleProgress: t, revokeFileObjectURL: n } = Bt(l, c), e = X(() => l.listType === "picture-card"), w = X(() => ({ ...l, fileList: _.value, onStart: m, onProgress: t, onSuccess: k, onError: C, onRemove: h }));
  return Qe(() => {
    _.value.forEach(n);
  }), et(De, { accept: tt(l, "accept") }), y({ abort: p, submit: a, clearFiles: F, handleStart: m, handleRemove: h }), (f, d) => (b(), N("div", null, [o(e) && f.showFileList ? (b(), T(he, { key: 0, disabled: o(v), "list-type": f.listType, files: o(_), crossorigin: f.crossorigin, "handle-preview": f.onPreview, onRemove: o(h) }, fe({ append: r(() => [s(we, _e({ ref_key: "uploadRef", ref: c }, o(w)), { default: r(() => [f.$slots.trigger ? A(f.$slots, "trigger", { key: 0 }) : U("v-if", true), !f.$slots.trigger && f.$slots.default ? A(f.$slots, "default", { key: 1 }) : U("v-if", true)]), _: 3 }, 16)]), _: 2 }, [f.$slots.file ? { name: "default", fn: r(({ file: i, index: P }) => [A(f.$slots, "file", { file: i, index: P })]) } : void 0]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : U("v-if", true), !o(e) || o(e) && !f.showFileList ? (b(), T(we, _e({ key: 1, ref_key: "uploadRef", ref: c }, o(w)), { default: r(() => [f.$slots.trigger ? A(f.$slots, "trigger", { key: 0 }) : U("v-if", true), !f.$slots.trigger && f.$slots.default ? A(f.$slots, "default", { key: 1 }) : U("v-if", true)]), _: 3 }, 16)) : U("v-if", true), f.$slots.trigger ? A(f.$slots, "default", { key: 2 }) : U("v-if", true), A(f.$slots, "tip"), !o(e) && f.showFileList ? (b(), T(he, { key: 3, disabled: o(v), "list-type": f.listType, files: o(_), crossorigin: f.crossorigin, "handle-preview": f.onPreview, onRemove: o(h) }, fe({ _: 2 }, [f.$slots.file ? { name: "default", fn: r(({ file: i, index: P }) => [A(f.$slots, "file", { file: i, index: P })]) } : void 0]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : U("v-if", true)]));
} });
var Mt = oe(Ot, [["__file", "upload.vue"]]);
const Ie = at(Mt);
const jt = { key: 1 }, Ee = x({ __name: "certificate", props: { modelValue: {}, fileName: {} }, emits: ["change", "update:modelValue", "update:fileName"], setup(u, { emit: y }) {
  const l = u, v = y, c = R([]), p = R(false);
  async function a(m) {
    const C = new FormData();
    p.value = true, C.append("file", m);
    try {
      return (await ot.upload({ data: C }).finally(() => {
        p.value = false;
      })).data;
    } catch {
      return p.value = false, {};
    }
  }
  async function F(m, C) {
    if (!m.name.endsWith(".pem")) {
      G.warning(window.$t("upload_pem_file_tip"));
      return;
    }
    const h = await a(m.raw);
    Object.assign(m, h), c.value = [m], v("update:modelValue", m.key), v("update:fileName", m.name), await lt(), v("change", { fileList: c.value });
  }
  function _({ data: m, index: C }) {
    c.value.splice(C, 1);
  }
  return ae(() => l.modelValue, () => {
    l.modelValue && (c.value = [{ name: l.fileName, key: l.modelValue }]);
  }, { immediate: true }), ae(() => l.fileName, () => {
    l.modelValue && (c.value = [{ name: l.fileName, key: l.modelValue }]);
  }, { immediate: true }), (m, C) => {
    const h = ce, k = Ie, t = pe, n = B;
    return b(), N("div", null, [c.value.length ? (b(), N("ul", jt, [(b(true), N(j, null, te(c.value, (e, w) => (b(), N("li", { key: e.id, class: "flex items-center gap-2 text-[#9A9A9A] text-sm" }, [s(t, { name: "certificate", width: "16" }), g("span", null, $(e.name || "--"), 1), s(n, { size: 16, class: "cursor-pointer text-[#333]", onClick: (f) => _({ data: e, index: w }) }, { default: r(() => [s(o(Pe))]), _: 2 }, 1032, ["onClick"])]))), 128))])) : (b(), T(k, { key: 0, action: "#", limit: 1, "on-change": F, "auto-upload": false, "show-file-list": false, accept: ".pem", disabled: p.value }, { default: r(() => [s(h, { class: "!border-none !outline-none", type: "primary", plain: "", loading: p.value }, { default: r(() => [V($(m.$t("action_select_file")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 }, 8, ["disabled"]))]);
  };
} }), zt = { class: "py-4 flex items-center justify-center" }, Ht = { class: "flex flex-col gap-4 pb-4 box-border max-h-[84vh] overflow-y-auto" }, Gt = ["innerHTML"], Jt = x({ __name: "wechat-setting-dialog", emits: ["success"], setup(u, { expose: y, emit: l }) {
  const v = l, c = R(), p = R(false), a = Le({ mchId: "", appId: "", apiV3Key: "", serialNo: "", certPath: "", certName: "", privateKeyPath: "", privateKeyName: "", notifyUrl: "", platformCertPath: "" }), F = R({}), _ = R(false), m = ({ data: d = {} } = {}) => {
    const i = d.pay_config || {}, P = d.extra_config || {};
    a.mchId = i.mchId || "", a.appId = i.appId || "", a.apiV3Key = i.apiV3Key || "", a.serialNo = i.serialNo || "", a.certPath = i.certPath || "", a.certName = i.certName || P.certName || "", a.privateKeyPath = i.privateKeyPath || "", a.privateKeyName = i.privateKeyName || P.privateKeyName || "", a.notifyUrl = i.notifyUrl || "", a.platformCertPath = i.platformCertPath || "", F.value = d, p.value = true;
  }, C = () => {
    p.value = false, h();
  }, h = () => {
    a.mchId = "", a.appId = "", a.apiV3Key = "", a.serialNo = "", a.certPath = "", a.certName = "", a.privateKeyPath = "", a.privateKeyName = "", a.notifyUrl = "", a.platformCertPath = "";
  }, k = async () => {
    if (!await c.value.validate())
      return;
    _.value = true;
    const i = JSON.parse(JSON.stringify(a)), P = { ...JSON.parse(JSON.stringify(F.value.extra_config || {})), certName: a.certName, privateKeyName: a.privateKeyName };
    delete i.certName, delete i.privateKeyName, await ee.savePaymentSetting({ pay_setting_id: F.value.pay_setting_id, pay_config: i, extra_config: P, pay_type: Ve }).finally(() => {
      _.value = false;
    }), v("success"), G.success(window.$t("action_save_success")), C();
  }, t = R(false), n = R("mch"), e = X(() => (/* @__PURE__ */ new Map([["mch", "wechat_payment.mch_guide.title"], ["app", "wechat_payment.app_guide.title"], ["api", "wechat_payment.api_guide.title"], ["cert", "wechat_payment.cert_guide.title"], ["serial", "wechat_payment.serial_guide.title"]])).get(n.value)), w = X(() => (/* @__PURE__ */ new Map([["mch", [{ title: window.$t("wechat_payment.mch_guide.step_1", { url: '<a style="color: #586D9A;" href="https://pay.weixin.qq.com/" target="_blank">https://pay.weixin.qq.com/</a>' }), imageList: [] }, { title: window.$t("wechat_payment.mch_guide.step_2"), imageList: ["/images/wechat-payment/mch-guide-1.png"] }, { title: window.$t("wechat_payment.mch_guide.step_3"), imageList: ["/images/wechat-payment/mch-guide-2.png", "/images/wechat-payment/mch-guide-3.png"] }]], ["app", [{ title: window.$t("wechat_payment.app_guide.step_1"), imageList: ["/images/wechat-payment/app-guide-1.png"] }, { title: window.$t("wechat_payment.app_guide.step_2"), imageList: ["/images/wechat-payment/app-guide-2.png"] }, { title: window.$t("wechat_payment.app_guide.step_3", { url: '<a style="color: #586D9A;" href="https://mp.weixin.qq.com" target="_blank">https://mp.weixin.qq.com</a>' }), imageList: ["/images/wechat-payment/app-guide-3.png"] }]], ["api", [{ title: window.$t("wechat_payment.api_guide.step_1"), imageList: ["/images/wechat-payment/api-guide-1.png"] }, { title: window.$t("wechat_payment.api_guide.step_2"), imageList: [] }]], ["cert", [{ title: window.$t("wechat_payment.cert_guide.step_1"), imageList: ["/images/wechat-payment/cert-guide-1.png", "/images/wechat-payment/cert-guide-2.png"] }, { title: window.$t("wechat_payment.cert_guide.step_2"), imageList: [] }]], ["serial", [{ title: window.$t("wechat_payment.serial_guide.step_1"), imageList: ["/images/wechat-payment/serial-guide-1.png"] }]]])).get(n.value)), f = ({ mode: d, title: i }) => {
    n.value = d, t.value = true;
  };
  return y({ open: m, close: C, reset: h }), (d, i) => {
    const P = pe, K = st, I = Ne, M = Ue, Z = ce, se = gt, Q = Se;
    return b(), T(Q, { title: d.$t("wechat_pay"), "align-center": true, "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: p.value, "onUpdate:modelValue": i[17] || (i[17] = (E) => p.value = E), onClose: C }, { footer: r(() => [g("div", zt, [s(Z, { class: "w-[96px] h-[36px]", type: "primary", loading: _.value, onClick: k }, { default: r(() => [V($(d.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"]), s(Z, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: O(C, ["stop"]) }, { default: r(() => [V($(d.$t("action_cancel")), 1)]), _: 1 })])]), default: r(() => [s(M, { ref_key: "form_ref", ref: c, model: a, "label-position": "top" }, { default: r(() => [s(I, { label: d.$t("module.payment_wechat_mch_id"), prop: "mchId", rules: o(H)({ message: "module.payment_wechat_mch_id_placeholder" }) }, { label: r(() => [g("span", null, $(d.$t("module.payment_wechat_mch_id")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: i[0] || (i[0] = (E) => f({ mode: "mch" })) }, [s(P, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: r(() => [s(K, { modelValue: a.mchId, "onUpdate:modelValue": i[1] || (i[1] = (E) => a.mchId = E), size: "large", clearable: "", placeholder: d.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), s(I, { label: d.$t("module.payment_wechat_app_id"), prop: "appId", rules: o(H)({ message: "module.payment_wechat_app_id_placeholder" }) }, { label: r(() => [g("span", null, $(d.$t("module.payment_wechat_app_id")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: i[2] || (i[2] = (E) => f({ mode: "app" })) }, [s(P, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: r(() => [s(K, { modelValue: a.appId, "onUpdate:modelValue": i[3] || (i[3] = (E) => a.appId = E), size: "large", clearable: "", placeholder: d.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), s(I, { label: d.$t("module.payment_wechat_api_secret"), prop: "apiV3Key", rules: o(H)({ message: "module.payment_wechat_api_secret_placeholder" }) }, { label: r(() => [g("span", null, $(d.$t("module.payment_wechat_api_secret")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: i[4] || (i[4] = (E) => f({ mode: "api" })) }, [s(P, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: r(() => [s(K, { modelValue: a.apiV3Key, "onUpdate:modelValue": i[5] || (i[5] = (E) => a.apiV3Key = E), size: "large", clearable: "", placeholder: d.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), s(I, { label: d.$t("module.payment_wechat_cert"), prop: "certPath", rules: o(H)({ message: "module.payment_wechat_cert_placeholder" }) }, { label: r(() => [g("span", null, $(d.$t("module.payment_wechat_cert")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: i[6] || (i[6] = (E) => f({ mode: "cert" })) }, [s(P, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: r(() => [s(Ee, { modelValue: a.certPath, "onUpdate:modelValue": i[7] || (i[7] = (E) => a.certPath = E), fileName: a.certName, "onUpdate:fileName": i[8] || (i[8] = (E) => a.certName = E), onChange: i[9] || (i[9] = (E) => d.$refs.form_ref.validateField("certPath")) }, null, 8, ["modelValue", "fileName"])]), _: 1 }, 8, ["label", "rules"]), s(I, { label: d.$t("module.payment_wechat_private_key"), prop: "privateKeyPath", rules: o(H)({ message: "module.payment_wechat_private_key_placeholder" }) }, { label: r(() => [g("span", null, $(d.$t("module.payment_wechat_private_key")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: i[10] || (i[10] = (E) => f({ mode: "cert" })) }, [s(P, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: r(() => [s(Ee, { modelValue: a.privateKeyPath, "onUpdate:modelValue": i[11] || (i[11] = (E) => a.privateKeyPath = E), fileName: a.privateKeyName, "onUpdate:fileName": i[12] || (i[12] = (E) => a.privateKeyName = E), onChange: i[13] || (i[13] = (E) => d.$refs.form_ref.validateField("privateKeyPath")) }, null, 8, ["modelValue", "fileName"])]), _: 1 }, 8, ["label", "rules"]), s(I, { label: d.$t("module.payment_wechat_serial_no"), prop: "serialNo", rules: o(H)({ message: "module.payment_wechat_serial_no_placeholder" }) }, { label: r(() => [g("span", null, $(d.$t("module.payment_wechat_serial_no")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: i[14] || (i[14] = (E) => f({ mode: "serial" })) }, [s(P, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: r(() => [s(K, { modelValue: a.serialNo, "onUpdate:modelValue": i[15] || (i[15] = (E) => a.serialNo = E), size: "large", clearable: "", placeholder: d.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"]), s(Q, { title: d.$t(e.value), "align-center": true, width: "860px", "destroy-on-close": "", "append-to-body": "", modelValue: t.value, "onUpdate:modelValue": i[16] || (i[16] = (E) => t.value = E) }, { default: r(() => [g("ul", Ht, [(b(true), N(j, null, te(w.value, (E, J) => (b(), N("li", { key: J, class: "flex flex-col gap-2 text-[#1D1E1F] text-sm" }, [g("div", { class: "text-wrap break-words whitespace-pre-wrap", innerHTML: E.title }, null, 8, Gt), (b(true), N(j, null, te(E.imageList, (z, q) => (b(), N("div", { key: q, class: "w-full" }, [s(se, { src: d.$getRealPath({ url: z }), class: "w-full", fit: "contain", "preview-teleported": true, "preview-src-list": [d.$getRealPath({ url: z })] }, null, 8, ["src", "preview-src-list"])]))), 128))]))), 128))])]), _: 1 }, 8, ["title", "modelValue"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), Wt = { class: "w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-6 box-border text-sm text-[#4F5052]" }, Xt = { class: "w-full h-full flex flex-col items-center justify-center gap-2" }, Yt = ["src"], Zt = { class: "text-[#9A9A9A] text-sm" }, Qt = { class: "py-4 flex items-center justify-center" }, ea = x({ __name: "manual-setting-dialog", setup(u, { expose: y }) {
  const l = R(), v = R(false), c = Le({ pay_qrcode: "" }), p = R({}), a = ({ rule: k, value: t, callback: n, message: e } = {}) => {
    if (t = (t || "").trim(), !t)
      return n(new Error(window.$t(e)));
    n();
  }, F = ({ data: k = {} } = {}) => {
    c.pay_qrcode = k.pay_qrcode || "", p.value = k, v.value = true;
  }, _ = () => {
    v.value = false, m();
  }, m = () => {
    c.pay_qrcode = "";
  }, C = (k) => {
    const t = new FileReader();
    t.readAsDataURL(k.raw), t.onload = () => {
      c.pay_qrcode = t.result;
    };
  }, h = () => {
    l.value.validate((k) => {
      k && (G.success(window.$t("action_save_success")), _());
    });
  };
  return y({ open: F, close: _, reset: m }), (k, t) => {
    const n = B, e = Ie, w = Ne, f = Ue, d = ce, i = Se;
    return b(), T(i, { title: k.$t("manual_pay"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: v.value, "onUpdate:modelValue": t[0] || (t[0] = (P) => v.value = P), onClose: _ }, { footer: r(() => [g("div", Qt, [s(d, { class: "w-[96px] h-[36px]", type: "primary", onClick: h }, { default: r(() => [V($(k.$t("action_confirm")), 1)]), _: 1 }), s(d, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: O(_, ["stop"]) }, { default: r(() => [V($(k.$t("action_cancel")), 1)]), _: 1 })])]), default: r(() => [s(f, { ref_key: "form_ref", ref: l, model: c, "label-position": "top" }, { default: r(() => [g("ol", Wt, [g("li", null, $(k.$t("module.payment_manual_tip")), 1)]), s(w, { label: k.$t("module.payment_manual_pay_qrcode"), prop: "pay_qrcode", rules: [{ validator: (P, K, I) => a({ rule: P, value: K, callback: I, message: "module.payment_manual_pay_qrcode_placeholder" }), trigger: "blur" }] }, { default: r(() => [s(e, { ref: "upload_ref", drag: "", "show-file-list": false, "auto-upload": false, accept: "image/*", limit: 1, "on-change": C }, { default: r(() => [g("div", Xt, [c.pay_qrcode ? (b(), N("img", { key: 0, src: c.pay_qrcode, class: "absolute top-0 left-0 w-full h-full object-cover" }, null, 8, Yt)) : (b(), N(j, { key: 1 }, [s(n, { color: "#9A9A9A", size: "20" }, { default: r(() => [s(o(nt))]), _: 1 }), g("span", Zt, $(k.$t("action_upload")), 1)], 64))])]), _: 1 }, 512)]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} });
const ta = it(ea, [["__scopeId", "data-v-7a585846"]]), aa = { class: "flex-1 flex flex-col bg-white py-8 px-6 mt-3 box-border" }, la = { class: "flex-1 h-0 max-h-[calc(100vh-240px)] overflow-auto" }, oa = { class: "w-full mt-5 flex items-center gap-5" }, sa = { class: "flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group" }, na = { class: "relative w-full flex items-center gap-3" }, ia = { class: "font-semibold text-[#1D1E1F]" }, ra = { class: "!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]" }, da = { class: "mt-3 text-sm text-[#4F5052]" }, ua = { class: "flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group opacity-60" }, ca = { class: "relative w-full flex items-center gap-3" }, pa = { class: "font-semibold text-[#1D1E1F]" }, ma = { class: "!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]" }, fa = { class: "mt-3 text-sm text-[#4F5052]" }, _a = { class: "w-full mt-5 flex items-center gap-5 opacity-60" }, ga = { class: "flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group" }, ya = { class: "relative w-full flex items-center gap-3" }, va = { class: "font-semibold text-[#1D1E1F]" }, ha = { class: "!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]" }, wa = { class: "mt-3 text-sm text-[#4F5052]" }, Aa = x({ __name: "index", setup(u) {
  const { isLocalEnv: y, isOpLocalEnv: l } = rt(), v = R(), c = R(), p = R({});
  dt(() => {
    a(), ge.on("user-login-success", a);
  }), ut(() => {
    ge.off("user-login-success", a);
  });
  const a = async () => {
    const _ = await ee.paymentSettingList();
    p.value = _.find((m) => m.pay_type === Ve) || {};
  }, F = async (_, m = "") => {
    if (m != "wechat")
      return G.warning(window.$t("feature_coming_soon"));
    if (y.value && l.value)
      return ht({ title: window.$t("local_config_limited_tip"), content: window.$t("local_config_limited_desc", { url: window.location.href }), confirmButtonText: window.$t("know_it"), showCancelButton: false }).open();
    switch (_) {
      case "setting":
        m === "wechat" && v.value.open({ data: p.value });
        break;
      case "enable":
        m === "wechat" && await ee.updatePaymentStatus(p.value.pay_setting_id, true), G.success(window.$t("enabled")), a();
        break;
      case "disable":
        m === "wechat" && await ee.updatePaymentStatus(p.value.pay_setting_id, false), G.success(window.$t("disabled")), a();
        break;
    }
  };
  return (_, m) => {
    const C = _t, h = pe, k = ft, t = B, n = ct, e = pt, w = mt, f = xe;
    return b(), N(j, null, [s(f, { class: "px-[60px] py-8" }, { default: r(() => [s(C, { title: _.$t("module.payment") }, null, 8, ["title"]), g("div", aa, [g("div", la, [m[7] || (m[7] = g("h1", { class: "font-semibold text-[#1D1E1F]" }, " CNY ", -1)), g("div", oa, [g("div", sa, [g("div", na, [s(h, { name: "wechat", width: "24" }), g("label", ia, $(_.$t("wechat_pay")), 1), p.value.pay_status ? (b(), T(k, { key: 0, class: "!border-none !bg-[#E3F6E0] !text-[#09BB07]", type: "success", size: "default" }, { default: r(() => [V($(_.$t("enabled")), 1)]), _: 1 })) : U("", true), m[3] || (m[3] = g("div", { class: "flex-1" }, null, -1)), s(w, { placement: "bottom", onCommand: m[0] || (m[0] = (d) => F(d, "wechat")) }, { dropdown: r(() => [s(e, null, { default: r(() => [s(n, { command: "setting" }, { default: r(() => [V($(_.$t("action_setting")), 1)]), _: 1 }), p.value.pay_setting_id ? (b(), N(j, { key: 0 }, [p.value.pay_status ? (b(), T(n, { key: 0, command: "disable" }, { default: r(() => [V($(_.$t("action_disable")), 1)]), _: 1 })) : (b(), T(n, { key: 1, command: "enable" }, { default: r(() => [V($(_.$t("action_enable")), 1)]), _: 1 }))], 64)) : U("", true)]), _: 1 })]), default: r(() => [g("div", ra, [s(t, { class: "rotate-90", size: "16" }, { default: r(() => [s(o(ne))]), _: 1 })])]), _: 1 })]), g("div", da, $(p.value.pay_setting_id ? `${_.$t("setting")} \xB7 ${_.$t("updated_at")}
							${p.value.updated_time.slice(0, 16)}` : _.$t("not_setting")), 1)]), g("div", ua, [g("div", ca, [s(h, { name: "manual-pay", width: "24" }), g("label", pa, $(_.$t("manual_pay")), 1), m[4] || (m[4] = g("div", { class: "flex-1" }, null, -1)), s(w, { placement: "bottom", onCommand: m[1] || (m[1] = (d) => F(d, "manual")) }, { dropdown: r(() => [s(e, null, { default: r(() => [s(n, { command: "setting" }, { default: r(() => [V($(_.$t("action_setting")), 1)]), _: 1 }), s(n, { command: "enable" }, { default: r(() => [V($(_.$t("action_enable")), 1)]), _: 1 })]), _: 1 })]), default: r(() => [g("div", ma, [s(t, { class: "rotate-90", size: "16" }, { default: r(() => [s(o(ne))]), _: 1 })])]), _: 1 })]), g("div", fa, $(_.$t("not_setting")), 1)])]), m[8] || (m[8] = g("h1", { class: "mt-10 font-semibold text-[#1D1E1F] opacity-60" }, " USD ", -1)), g("div", _a, [g("div", ga, [g("div", ya, [s(h, { name: "paypal", width: "24" }), g("label", va, $(_.$t("paypal")), 1), m[5] || (m[5] = g("div", { class: "flex-1" }, null, -1)), s(w, { placement: "bottom", onCommand: m[2] || (m[2] = (d) => F(d, "paypal")) }, { dropdown: r(() => [s(e, null, { default: r(() => [s(n, { command: "setting" }, { default: r(() => [V($(_.$t("action_setting")), 1)]), _: 1 }), s(n, { command: "enable" }, { default: r(() => [V($(_.$t("action_enable")), 1)]), _: 1 })]), _: 1 })]), default: r(() => [g("div", ha, [s(t, { class: "rotate-90", size: "16" }, { default: r(() => [s(o(ne))]), _: 1 })])]), _: 1 })]), g("div", wa, $(_.$t("not_setting")), 1)]), m[6] || (m[6] = g("div", { class: "flex-1 rounded-lg box-border p-5 pb-8 group" }, null, -1))])])])]), _: 1 }), s(Jt, { ref_key: "wechat_setting_ref", ref: v, onSuccess: a }, null, 512), s(ta, { ref_key: "manual_setting_ref", ref: c, onSuccess: a }, null, 512)], 64);
  };
} });
export {
  Aa as default
};
