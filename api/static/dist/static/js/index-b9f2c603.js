import { _ as Ie } from "./index-71389ea4.js";
import { cU as xe, aE as ue, b_ as ke, b8 as Ce, ap as Y, aH as P, bL as ie, cf as D, u as I, av as qe, au as W, a_ as le, r as A, al as X, b, h as R, i, c as N, F as j, G as te, n as S, z as o, b0 as Fe, q as T, e as U, d as g, am as O, f as s, y as q, cV as Be, t as $, aN as Oe, aJ as Me, aL as je, Z as ze, bU as He, a5 as Le, cW as Je, aC as oe, ak as Ge, Q as re, cX as me, cY as We, m as Xe, cZ as Ye, aG as ae, a$ as Ze, bg as Qe, an as et, c8 as tt, bd as fe, aA as _e, aD as at, H as V, a9 as J, W as lt, $ as ce, L as pe, bK as ot, ae as Pe, a4 as H, X as st, aa as Ne, ac as Ue, Y as Se, a6 as nt, p as it, bC as rt, o as dt, J as ge, a as ut, ao as ne } from "./index-7b696e01.js";
import { E as ct, a as pt, b as mt } from "./el-dropdown-item-2f5f0e32.js";
import "./el-scrollbar-a17df1f1.js";
import { E as ft } from "./el-tag-63139441.js";
import { _ as _t } from "./index.vue_vue_type_script_setup_true_lang-ca2646ba.js";
import { a as gt } from "./el-image-d432a419.js";
import { E as yt } from "./el-progress-e8f14dfe.js";
import { i as vt } from "./isEqual-71b69c76.js";
import { s as ee, a as Ve } from "./setting-23844e27.js";
import { T as ht } from "./setup-0dc36789.js";
import "./dropdown-cf05cb92.js";
import "./position-df18ca50.js";
import "./debounce-c1af5016.js";
var wt = 1, bt = 4;
function ye(u) {
  return xe(u, wt | bt);
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
}, Ae = ["text", "picture", "picture-card"];
let Ft = 1;
const de = () => Date.now() + Ft++, Re = Y({ action: { type: String, default: "#" }, headers: { type: P(Object) }, method: { type: String, default: "post" }, data: { type: P([Object, Function, Promise]), default: () => ie({}) }, multiple: Boolean, name: { type: String, default: "file" }, drag: Boolean, withCredentials: Boolean, showFileList: { type: Boolean, default: true }, accept: { type: String, default: "" }, fileList: { type: P(Array), default: () => ie([]) }, autoUpload: { type: Boolean, default: true }, listType: { type: String, values: Ae, default: "text" }, httpRequest: { type: P(Function), default: Ct }, disabled: Boolean, limit: Number }), Lt = Y({ ...Re, beforeUpload: { type: P(Function), default: D }, beforeRemove: { type: P(Function) }, onRemove: { type: P(Function), default: D }, onChange: { type: P(Function), default: D }, onPreview: { type: P(Function), default: D }, onSuccess: { type: P(Function), default: D }, onProgress: { type: P(Function), default: D }, onError: { type: P(Function), default: D }, onExceed: { type: P(Function), default: D }, crossorigin: { type: P(String) } }), Pt = Y({ files: { type: P(Array), default: () => ie([]) }, disabled: { type: Boolean, default: false }, handlePreview: { type: P(Function), default: D }, listType: { type: String, values: Ae, default: "text" }, crossorigin: { type: P(String) } }), Nt = { remove: (u) => !!u }, Ut = I({ name: "ElUploadList" }), St = I({ ...Ut, props: Pt, emits: Nt, setup(u, { emit: y }) {
  const l = u, { t: v } = qe(), c = W("upload"), p = W("icon"), a = W("list"), F = le(), _ = A(false), m = X(() => [c.b("list"), c.bm("list", l.listType), c.is("disabled", l.disabled)]), C = (w) => {
    y("remove", w);
  };
  return (w, k) => (b(), R(Je, { tag: "ul", class: S(o(m)), name: o(a).b() }, { default: i(() => [(b(true), N(j, null, te(w.files, (t, r) => (b(), N("li", { key: t.uid || t.name, class: S([o(c).be("list", "item"), o(c).is(t.status), { focusing: _.value }]), tabindex: "0", onKeydown: Fe((e) => !o(F) && C(t), ["delete"]), onFocus: (e) => _.value = true, onBlur: (e) => _.value = false, onClick: (e) => _.value = false }, [T(w.$slots, "default", { file: t, index: r }, () => [w.listType === "picture" || t.status !== "uploading" && w.listType === "picture-card" ? (b(), N("img", { key: 0, class: S(o(c).be("list", "item-thumbnail")), src: t.url, crossorigin: w.crossorigin, alt: "" }, null, 10, ["src", "crossorigin"])) : U("v-if", true), t.status === "uploading" || w.listType !== "picture-card" ? (b(), N("div", { key: 1, class: S(o(c).be("list", "item-info")) }, [g("a", { class: S(o(c).be("list", "item-name")), onClick: O((e) => w.handlePreview(t), ["prevent"]) }, [s(o(q), { class: S(o(p).m("document")) }, { default: i(() => [s(o(Be))]), _: 1 }, 8, ["class"]), g("span", { class: S(o(c).be("list", "item-file-name")), title: t.name }, $(t.name), 11, ["title"])], 10, ["onClick"]), t.status === "uploading" ? (b(), R(o(yt), { key: 0, type: w.listType === "picture-card" ? "circle" : "line", "stroke-width": w.listType === "picture-card" ? 6 : 2, percentage: Number(t.percentage), style: Oe(w.listType === "picture-card" ? "" : "margin-top: 0.5rem") }, null, 8, ["type", "stroke-width", "percentage", "style"])) : U("v-if", true)], 2)) : U("v-if", true), g("label", { class: S(o(c).be("list", "item-status-label")) }, [w.listType === "text" ? (b(), R(o(q), { key: 0, class: S([o(p).m("upload-success"), o(p).m("circle-check")]) }, { default: i(() => [s(o(Me))]), _: 1 }, 8, ["class"])) : ["picture-card", "picture"].includes(w.listType) ? (b(), R(o(q), { key: 1, class: S([o(p).m("upload-success"), o(p).m("check")]) }, { default: i(() => [s(o(je))]), _: 1 }, 8, ["class"])) : U("v-if", true)], 2), o(F) ? U("v-if", true) : (b(), R(o(q), { key: 2, class: S(o(p).m("close")), onClick: (e) => C(t) }, { default: i(() => [s(o(ze))]), _: 2 }, 1032, ["class", "onClick"])), U(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"), U(" This is a bug which needs to be fixed "), U(" TODO: Fix the incorrect navigation interaction "), o(F) ? U("v-if", true) : (b(), N("i", { key: 3, class: S(o(p).m("close-tip")) }, $(o(v)("el.upload.deleteTip")), 3)), w.listType === "picture-card" ? (b(), N("span", { key: 4, class: S(o(c).be("list", "item-actions")) }, [g("span", { class: S(o(c).be("list", "item-preview")), onClick: (e) => w.handlePreview(t) }, [s(o(q), { class: S(o(p).m("zoom-in")) }, { default: i(() => [s(o(He))]), _: 1 }, 8, ["class"])], 10, ["onClick"]), o(F) ? U("v-if", true) : (b(), N("span", { key: 0, class: S(o(c).be("list", "item-delete")), onClick: (e) => C(t) }, [s(o(q), { class: S(o(p).m("delete")) }, { default: i(() => [s(o(Le))]), _: 1 }, 8, ["class"])], 10, ["onClick"]))], 2)) : U("v-if", true)])], 42, ["onKeydown", "onFocus", "onBlur", "onClick"]))), 128)), T(w.$slots, "append")]), _: 3 }, 8, ["class", "name"]));
} });
var he = oe(St, [["__file", "upload-list.vue"]]);
const Vt = Y({ disabled: { type: Boolean, default: false } }), Dt = { file: (u) => ke(u) }, Te = "ElUploadDrag", At = I({ name: Te }), Rt = I({ ...At, props: Vt, emits: Dt, setup(u, { emit: y }) {
  Ge(De) || ue(Te, "usage: <el-upload><el-upload-dragger /></el-upload>");
  const v = W("upload"), c = A(false), p = le(), a = (_) => {
    if (p.value)
      return;
    c.value = false, _.stopPropagation();
    const m = Array.from(_.dataTransfer.files);
    y("file", m);
  }, F = () => {
    p.value || (c.value = true);
  };
  return (_, m) => (b(), N("div", { class: S([o(v).b("dragger"), o(v).is("dragover", c.value)]), onDrop: O(a, ["prevent"]), onDragover: O(F, ["prevent"]), onDragleave: O((C) => c.value = false, ["prevent"]) }, [T(_.$slots, "default")], 42, ["onDrop", "onDragover", "onDragleave"]));
} });
var Tt = oe(Rt, [["__file", "upload-dragger.vue"]]);
const Kt = Y({ ...Re, beforeUpload: { type: P(Function), default: D }, onRemove: { type: P(Function), default: D }, onStart: { type: P(Function), default: D }, onSuccess: { type: P(Function), default: D }, onProgress: { type: P(Function), default: D }, onError: { type: P(Function), default: D }, onExceed: { type: P(Function), default: D } }), It = I({ name: "ElUploadContent", inheritAttrs: false }), xt = I({ ...It, props: Kt, setup(u, { expose: y }) {
  const l = u, v = W("upload"), c = le(), p = re({}), a = re(), F = (e) => {
    if (e.length === 0)
      return;
    const { autoUpload: h, limit: f, fileList: d, multiple: n, onStart: L, onExceed: x } = l;
    if (f && d.length + e.length > f) {
      x(e, d);
      return;
    }
    n || (e = e.slice(0, 1));
    for (const K of e) {
      const M = K;
      M.uid = de(), L(M), h && _(M);
    }
  }, _ = async (e) => {
    if (a.value.value = "", !l.beforeUpload)
      return C(e);
    let h, f = {};
    try {
      const n = l.data, L = l.beforeUpload(e);
      f = me(l.data) ? ye(l.data) : l.data, h = await L, me(l.data) && vt(n, f) && (f = ye(l.data));
    } catch {
      h = false;
    }
    if (h === false) {
      l.onRemove(e);
      return;
    }
    let d = e;
    h instanceof Blob && (h instanceof File ? d = h : d = new File([h], e.name, { type: e.type })), C(Object.assign(d, { uid: e.uid }), f);
  }, m = async (e, h) => Xe(e) ? e(h) : e, C = async (e, h) => {
    const { headers: f, data: d, method: n, withCredentials: L, name: x, action: K, onProgress: M, onSuccess: Z, onError: se, httpRequest: Q } = l;
    try {
      h = await m(h ?? d, e);
    } catch {
      l.onRemove(e);
      return;
    }
    const { uid: E } = e, G = { headers: f || {}, withCredentials: L, file: e, data: h, method: n, filename: x, action: K, onProgress: (B) => {
      M(B, e);
    }, onSuccess: (B) => {
      Z(B, e), delete p.value[E];
    }, onError: (B) => {
      se(B, e), delete p.value[E];
    } }, z = Q(G);
    p.value[E] = z, z instanceof Promise && z.then(G.onSuccess, G.onError);
  }, w = (e) => {
    const h = e.target.files;
    h && F(Array.from(h));
  }, k = () => {
    c.value || (a.value.value = "", a.value.click());
  }, t = () => {
    k();
  };
  return y({ abort: (e) => {
    We(p.value).filter(e ? ([f]) => String(e.uid) === f : () => true).forEach(([f, d]) => {
      d instanceof XMLHttpRequest && d.abort(), delete p.value[f];
    });
  }, upload: _ }), (e, h) => (b(), N("div", { class: S([o(v).b(), o(v).m(e.listType), o(v).is("drag", e.drag), o(v).is("disabled", o(c))]), tabindex: o(c) ? "-1" : "0", onClick: k, onKeydown: Fe(O(t, ["self"]), ["enter", "space"]) }, [e.drag ? (b(), R(Tt, { key: 0, disabled: o(c), onFile: F }, { default: i(() => [T(e.$slots, "default")]), _: 3 }, 8, ["disabled"])) : T(e.$slots, "default", { key: 1 }), g("input", { ref_key: "inputRef", ref: a, class: S(o(v).e("input")), name: e.name, disabled: o(c), multiple: e.multiple, accept: e.accept, type: "file", onChange: w, onClick: O(() => {
  }, ["stop"]) }, null, 42, ["name", "disabled", "multiple", "accept", "onClick"])], 42, ["tabindex", "onKeydown"]));
} });
var we = oe(xt, [["__file", "upload-content.vue"]]);
const be = "ElUpload", $e = (u) => {
  var y;
  (y = u.url) != null && y.startsWith("blob:") && URL.revokeObjectURL(u.url);
}, qt = (u, y) => {
  const l = Ye(u, "fileList", void 0, { passive: true }), v = (t) => l.value.find((r) => r.uid === t.uid);
  function c(t) {
    var r;
    (r = y.value) == null || r.abort(t);
  }
  function p(t = ["ready", "uploading", "success", "fail"]) {
    l.value = l.value.filter((r) => !t.includes(r.status));
  }
  function a(t) {
    l.value = l.value.filter((r) => r.uid !== t.uid);
  }
  const F = (t, r) => {
    const e = v(r);
    e && (console.error(t), e.status = "fail", a(e), u.onError(t, e, l.value), u.onChange(e, l.value));
  }, _ = (t, r) => {
    const e = v(r);
    e && (u.onProgress(t, e, l.value), e.status = "uploading", e.percentage = Math.round(t.percent));
  }, m = (t, r) => {
    const e = v(r);
    e && (e.status = "success", e.response = t, u.onSuccess(t, e, l.value), u.onChange(e, l.value));
  }, C = (t) => {
    Ce(t.uid) && (t.uid = de());
    const r = { name: t.name, percentage: 0, status: "ready", size: t.size, raw: t, uid: t.uid };
    if (u.listType === "picture-card" || u.listType === "picture")
      try {
        r.url = URL.createObjectURL(t);
      } catch (e) {
        Ze(be, e.message), u.onError(e, r, l.value);
      }
    l.value = [...l.value, r], u.onChange(r, l.value);
  }, w = async (t) => {
    const r = t instanceof File ? v(t) : t;
    r || ue(be, "file to be removed not found");
    const e = (h) => {
      c(h), a(h), u.onRemove(h, l.value), $e(h);
    };
    u.beforeRemove ? await u.beforeRemove(r, l.value) !== false && e(r) : e(r);
  };
  function k() {
    l.value.filter(({ status: t }) => t === "ready").forEach(({ raw: t }) => {
      var r;
      return t && ((r = y.value) == null ? void 0 : r.upload(t));
    });
  }
  return ae(() => u.listType, (t) => {
    t !== "picture-card" && t !== "picture" || (l.value = l.value.map((r) => {
      const { raw: e, url: h } = r;
      if (!h && e)
        try {
          r.url = URL.createObjectURL(e);
        } catch (f) {
          u.onError(f, r, l.value);
        }
      return r;
    }));
  }), ae(l, (t) => {
    for (const r of t)
      r.uid || (r.uid = de()), r.status || (r.status = "success");
  }, { immediate: true, deep: true }), { uploadFiles: l, abort: c, clearFiles: p, handleError: F, handleProgress: _, handleStart: C, handleSuccess: m, handleRemove: w, submit: k, revokeFileObjectURL: $e };
}, Bt = I({ name: "ElUpload" }), Ot = I({ ...Bt, props: Lt, setup(u, { expose: y }) {
  const l = u, v = le(), c = re(), { abort: p, submit: a, clearFiles: F, uploadFiles: _, handleStart: m, handleError: C, handleRemove: w, handleSuccess: k, handleProgress: t, revokeFileObjectURL: r } = qt(l, c), e = X(() => l.listType === "picture-card"), h = X(() => ({ ...l, fileList: _.value, onStart: m, onProgress: t, onSuccess: k, onError: C, onRemove: w }));
  return Qe(() => {
    _.value.forEach(r);
  }), et(De, { accept: tt(l, "accept") }), y({ abort: p, submit: a, clearFiles: F, handleStart: m, handleRemove: w }), (f, d) => (b(), N("div", null, [o(e) && f.showFileList ? (b(), R(he, { key: 0, disabled: o(v), "list-type": f.listType, files: o(_), crossorigin: f.crossorigin, "handle-preview": f.onPreview, onRemove: o(w) }, fe({ append: i(() => [s(we, _e({ ref_key: "uploadRef", ref: c }, o(h)), { default: i(() => [f.$slots.trigger ? T(f.$slots, "trigger", { key: 0 }) : U("v-if", true), !f.$slots.trigger && f.$slots.default ? T(f.$slots, "default", { key: 1 }) : U("v-if", true)]), _: 3 }, 16)]), _: 2 }, [f.$slots.file ? { name: "default", fn: i(({ file: n, index: L }) => [T(f.$slots, "file", { file: n, index: L })]) } : void 0]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : U("v-if", true), !o(e) || o(e) && !f.showFileList ? (b(), R(we, _e({ key: 1, ref_key: "uploadRef", ref: c }, o(h)), { default: i(() => [f.$slots.trigger ? T(f.$slots, "trigger", { key: 0 }) : U("v-if", true), !f.$slots.trigger && f.$slots.default ? T(f.$slots, "default", { key: 1 }) : U("v-if", true)]), _: 3 }, 16)) : U("v-if", true), f.$slots.trigger ? T(f.$slots, "default", { key: 2 }) : U("v-if", true), T(f.$slots, "tip"), !o(e) && f.showFileList ? (b(), R(he, { key: 3, disabled: o(v), "list-type": f.listType, files: o(_), crossorigin: f.crossorigin, "handle-preview": f.onPreview, onRemove: o(w) }, fe({ _: 2 }, [f.$slots.file ? { name: "default", fn: i(({ file: n, index: L }) => [T(f.$slots, "file", { file: n, index: L })]) } : void 0]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : U("v-if", true)]));
} });
var Mt = oe(Ot, [["__file", "upload.vue"]]);
const Ke = at(Mt);
const jt = { key: 1 }, Ee = I({ __name: "certificate", props: { modelValue: {}, fileName: {} }, emits: ["change", "update:modelValue", "update:fileName"], setup(u, { emit: y }) {
  const l = u, v = y, c = A([]), p = A(false);
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
      J.warning(window.$t("upload_pem_file_tip"));
      return;
    }
    const w = await a(m.raw);
    Object.assign(m, w), c.value = [m], v("update:modelValue", m.key), v("update:fileName", m.name), await lt(), v("change", { fileList: c.value });
  }
  function _({ data: m, index: C }) {
    c.value.splice(C, 1);
  }
  return ae(() => l.modelValue, () => {
    l.modelValue && (c.value = [{ name: l.fileName, key: l.modelValue }]);
  }, { immediate: true }), ae(() => l.fileName, () => {
    l.modelValue && (c.value = [{ name: l.fileName, key: l.modelValue }]);
  }, { immediate: true }), (m, C) => {
    const w = ce, k = Ke, t = pe, r = q;
    return b(), N("div", null, [c.value.length ? (b(), N("ul", jt, [(b(true), N(j, null, te(c.value, (e, h) => (b(), N("li", { key: e.id, class: "flex items-center gap-2 text-[#9A9A9A] text-sm" }, [s(t, { name: "certificate", width: "16" }), g("span", null, $(e.name || "--"), 1), s(r, { size: 16, class: "cursor-pointer text-[#333]", onClick: (f) => _({ data: e, index: h }) }, { default: i(() => [s(o(Le))]), _: 2 }, 1032, ["onClick"])]))), 128))])) : (b(), R(k, { key: 0, action: "#", limit: 1, "on-change": F, "auto-upload": false, "show-file-list": false, accept: ".pem", disabled: p.value }, { default: i(() => [s(w, { class: "!border-none !outline-none", type: "primary", plain: "", loading: p.value }, { default: i(() => [V($(m.$t("action_select_file")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 }, 8, ["disabled"]))]);
  };
} }), zt = { class: "py-4 flex items-center justify-center" }, Ht = { class: "flex flex-col gap-4 pb-4 box-border max-h-[84vh] overflow-y-auto" }, Jt = ["innerHTML"], Gt = I({ __name: "wechat-setting-dialog", emits: ["success"], setup(u, { expose: y, emit: l }) {
  const v = l, c = A(), p = A(false), a = Pe({ mchId: "", appId: "", apiV3Key: "", serialNo: "", certPath: "", certName: "", privateKeyPath: "", privateKeyName: "", notifyUrl: "", platformCertPath: "" }), F = A({}), _ = A(false), m = ({ data: d = {} } = {}) => {
    const n = d.pay_config || {}, L = d.extra_config || {};
    a.mchId = n.mchId || "", a.appId = n.appId || "", a.apiV3Key = n.apiV3Key || "", a.serialNo = n.serialNo || "", a.certPath = n.certPath || "", a.certName = n.certName || L.certName || "", a.privateKeyPath = n.privateKeyPath || "", a.privateKeyName = n.privateKeyName || L.privateKeyName || "", a.notifyUrl = n.notifyUrl || "", a.platformCertPath = n.platformCertPath || "", F.value = d, p.value = true;
  }, C = () => {
    p.value = false, w();
  }, w = () => {
    a.mchId = "", a.appId = "", a.apiV3Key = "", a.serialNo = "", a.certPath = "", a.certName = "", a.privateKeyPath = "", a.privateKeyName = "", a.notifyUrl = "", a.platformCertPath = "";
  }, k = async () => {
    if (!await c.value.validate())
      return;
    _.value = true;
    const n = JSON.parse(JSON.stringify(a)), L = { ...JSON.parse(JSON.stringify(F.value.extra_config || {})), certName: a.certName, privateKeyName: a.privateKeyName };
    delete n.certName, delete n.privateKeyName, await ee.savePaymentSetting({ pay_setting_id: F.value.pay_setting_id, pay_config: n, extra_config: L, pay_type: Ve }).finally(() => {
      _.value = false;
    }), v("success"), J.success(window.$t("action_save_success")), C();
  }, t = A(false), r = A("mch"), e = X(() => (/* @__PURE__ */ new Map([["mch", "wechat_payment.mch_guide.title"], ["app", "wechat_payment.app_guide.title"], ["api", "wechat_payment.api_guide.title"], ["cert", "wechat_payment.cert_guide.title"], ["serial", "wechat_payment.serial_guide.title"]])).get(r.value)), h = X(() => (/* @__PURE__ */ new Map([["mch", [{ title: window.$t("wechat_payment.mch_guide.step_1", { url: '<a style="color: #586D9A;" href="https://pay.weixin.qq.com/" target="_blank">https://pay.weixin.qq.com/</a>' }), imageList: [] }, { title: window.$t("wechat_payment.mch_guide.step_2"), imageList: ["/images/wechat-payment/mch-guide-1.png"] }, { title: window.$t("wechat_payment.mch_guide.step_3"), imageList: ["/images/wechat-payment/mch-guide-2.png", "/images/wechat-payment/mch-guide-3.png"] }]], ["app", [{ title: window.$t("wechat_payment.app_guide.step_1"), imageList: ["/images/wechat-payment/app-guide-1.png"] }, { title: window.$t("wechat_payment.app_guide.step_2"), imageList: ["/images/wechat-payment/app-guide-2.png"] }, { title: window.$t("wechat_payment.app_guide.step_3", { url: '<a style="color: #586D9A;" href="https://mp.weixin.qq.com" target="_blank">https://mp.weixin.qq.com</a>' }), imageList: ["/images/wechat-payment/app-guide-3.png"] }]], ["api", [{ title: window.$t("wechat_payment.api_guide.step_1"), imageList: ["/images/wechat-payment/api-guide-1.png"] }, { title: window.$t("wechat_payment.api_guide.step_2"), imageList: [] }]], ["cert", [{ title: window.$t("wechat_payment.cert_guide.step_1"), imageList: ["/images/wechat-payment/cert-guide-1.png", "/images/wechat-payment/cert-guide-2.png"] }, { title: window.$t("wechat_payment.cert_guide.step_2"), imageList: [] }]], ["serial", [{ title: window.$t("wechat_payment.serial_guide.step_1"), imageList: ["/images/wechat-payment/serial-guide-1.png"] }]]])).get(r.value)), f = ({ mode: d, title: n }) => {
    r.value = d, t.value = true;
  };
  return y({ open: m, close: C, reset: w }), (d, n) => {
    const L = pe, x = st, K = Ne, M = Ue, Z = ce, se = gt, Q = Se;
    return b(), R(Q, { title: d.$t("wechat_pay"), "align-center": true, "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: p.value, "onUpdate:modelValue": n[17] || (n[17] = (E) => p.value = E), onClose: C }, { footer: i(() => [g("div", zt, [s(Z, { class: "w-[96px] h-[36px]", type: "primary", loading: _.value, onClick: k }, { default: i(() => [V($(d.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"]), s(Z, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: O(C, ["stop"]) }, { default: i(() => [V($(d.$t("action_cancel")), 1)]), _: 1 })])]), default: i(() => [s(M, { ref_key: "form_ref", ref: c, model: a, "label-position": "top" }, { default: i(() => [s(K, { label: d.$t("module.payment_wechat_mch_id"), prop: "mchId", rules: o(H)({ message: "module.payment_wechat_mch_id_placeholder" }) }, { label: i(() => [g("span", null, $(d.$t("module.payment_wechat_mch_id")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: n[0] || (n[0] = (E) => f({ mode: "mch" })) }, [s(L, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: i(() => [s(x, { modelValue: a.mchId, "onUpdate:modelValue": n[1] || (n[1] = (E) => a.mchId = E), size: "large", clearable: "", placeholder: d.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), s(K, { label: d.$t("module.payment_wechat_app_id"), prop: "appId", rules: o(H)({ message: "module.payment_wechat_app_id_placeholder" }) }, { label: i(() => [g("span", null, $(d.$t("module.payment_wechat_app_id")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: n[2] || (n[2] = (E) => f({ mode: "app" })) }, [s(L, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: i(() => [s(x, { modelValue: a.appId, "onUpdate:modelValue": n[3] || (n[3] = (E) => a.appId = E), size: "large", clearable: "", placeholder: d.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), s(K, { label: d.$t("module.payment_wechat_api_secret"), prop: "apiV3Key", rules: o(H)({ message: "module.payment_wechat_api_secret_placeholder" }) }, { label: i(() => [g("span", null, $(d.$t("module.payment_wechat_api_secret")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: n[4] || (n[4] = (E) => f({ mode: "api" })) }, [s(L, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: i(() => [s(x, { modelValue: a.apiV3Key, "onUpdate:modelValue": n[5] || (n[5] = (E) => a.apiV3Key = E), size: "large", clearable: "", placeholder: d.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), s(K, { label: d.$t("module.payment_wechat_cert"), prop: "certPath", rules: o(H)({ message: "module.payment_wechat_cert_placeholder" }) }, { label: i(() => [g("span", null, $(d.$t("module.payment_wechat_cert")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: n[6] || (n[6] = (E) => f({ mode: "cert" })) }, [s(L, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: i(() => [s(Ee, { modelValue: a.certPath, "onUpdate:modelValue": n[7] || (n[7] = (E) => a.certPath = E), fileName: a.certName, "onUpdate:fileName": n[8] || (n[8] = (E) => a.certName = E), onChange: n[9] || (n[9] = (E) => d.$refs.form_ref.validateField("certPath")) }, null, 8, ["modelValue", "fileName"])]), _: 1 }, 8, ["label", "rules"]), s(K, { label: d.$t("module.payment_wechat_private_key"), prop: "privateKeyPath", rules: o(H)({ message: "module.payment_wechat_private_key_placeholder" }) }, { label: i(() => [g("span", null, $(d.$t("module.payment_wechat_private_key")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: n[10] || (n[10] = (E) => f({ mode: "cert" })) }, [s(L, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: i(() => [s(Ee, { modelValue: a.privateKeyPath, "onUpdate:modelValue": n[11] || (n[11] = (E) => a.privateKeyPath = E), fileName: a.privateKeyName, "onUpdate:fileName": n[12] || (n[12] = (E) => a.privateKeyName = E), onChange: n[13] || (n[13] = (E) => d.$refs.form_ref.validateField("privateKeyPath")) }, null, 8, ["modelValue", "fileName"])]), _: 1 }, 8, ["label", "rules"]), s(K, { label: d.$t("module.payment_wechat_serial_no"), prop: "serialNo", rules: o(H)({ message: "module.payment_wechat_serial_no_placeholder" }) }, { label: i(() => [g("span", null, $(d.$t("module.payment_wechat_serial_no")), 1), g("span", { class: "text-[#9A9A9A] gap-1 ml-2 text-sm hover:opacity-80 cursor-pointer", onClick: n[14] || (n[14] = (E) => f({ mode: "serial" })) }, [s(L, { class: "inline translate-y-0.5", name: "help", width: "14", color: "#999" }), V(" " + $(d.$t("how_get")), 1)])]), default: i(() => [s(x, { modelValue: a.serialNo, "onUpdate:modelValue": n[15] || (n[15] = (E) => a.serialNo = E), size: "large", clearable: "", placeholder: d.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"]), s(Q, { title: d.$t(e.value), "align-center": true, width: "860px", "destroy-on-close": "", "append-to-body": "", modelValue: t.value, "onUpdate:modelValue": n[16] || (n[16] = (E) => t.value = E) }, { default: i(() => [g("ul", Ht, [(b(true), N(j, null, te(h.value, (E, G) => (b(), N("li", { key: G, class: "flex flex-col gap-2 text-[#1D1E1F] text-sm" }, [g("div", { class: "text-wrap break-words whitespace-pre-wrap", innerHTML: E.title }, null, 8, Jt), (b(true), N(j, null, te(E.imageList, (z, B) => (b(), N("div", { key: B, class: "w-full" }, [s(se, { src: d.$getRealPath({ url: z }), class: "w-full", fit: "contain", "preview-teleported": true, "preview-src-list": [d.$getRealPath({ url: z })] }, null, 8, ["src", "preview-src-list"])]))), 128))]))), 128))])]), _: 1 }, 8, ["title", "modelValue"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), Wt = { class: "w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-6 box-border text-sm text-[#4F5052]" }, Xt = { class: "w-full h-full flex flex-col items-center justify-center gap-2" }, Yt = ["src"], Zt = { class: "text-[#9A9A9A] text-sm" }, Qt = { class: "py-4 flex items-center justify-center" }, ea = I({ __name: "manual-setting-dialog", setup(u, { expose: y }) {
  const l = A(), v = A(false), c = Pe({ pay_qrcode: "" }), p = A({}), a = ({ rule: k, value: t, callback: r, message: e } = {}) => {
    if (t = (t || "").trim(), !t)
      return r(new Error(window.$t(e)));
    r();
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
  }, w = () => {
    l.value.validate((k) => {
      k && (J.success(window.$t("action_save_success")), _());
    });
  };
  return y({ open: F, close: _, reset: m }), (k, t) => {
    const r = q, e = Ke, h = Ne, f = Ue, d = ce, n = Se;
    return b(), R(n, { title: k.$t("manual_pay"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: v.value, "onUpdate:modelValue": t[0] || (t[0] = (L) => v.value = L), onClose: _ }, { footer: i(() => [g("div", Qt, [s(d, { class: "w-[96px] h-[36px]", type: "primary", onClick: w }, { default: i(() => [V($(k.$t("action_confirm")), 1)]), _: 1 }), s(d, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: O(_, ["stop"]) }, { default: i(() => [V($(k.$t("action_cancel")), 1)]), _: 1 })])]), default: i(() => [s(f, { ref_key: "form_ref", ref: l, model: c, "label-position": "top" }, { default: i(() => [g("ol", Wt, [g("li", null, $(k.$t("module.payment_manual_tip")), 1)]), s(h, { label: k.$t("module.payment_manual_pay_qrcode"), prop: "pay_qrcode", rules: [{ validator: (L, x, K) => a({ rule: L, value: x, callback: K, message: "module.payment_manual_pay_qrcode_placeholder" }), trigger: "blur" }] }, { default: i(() => [s(e, { ref: "upload_ref", drag: "", "show-file-list": false, "auto-upload": false, accept: "image/*", limit: 1, "on-change": C }, { default: i(() => [g("div", Xt, [c.pay_qrcode ? (b(), N("img", { key: 0, src: c.pay_qrcode, class: "absolute top-0 left-0 w-full h-full object-cover" }, null, 8, Yt)) : (b(), N(j, { key: 1 }, [s(r, { color: "#9A9A9A", size: "20" }, { default: i(() => [s(o(nt))]), _: 1 }), g("span", Zt, $(k.$t("action_upload")), 1)], 64))])]), _: 1 }, 512)]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} });
const ta = it(ea, [["__scopeId", "data-v-7a585846"]]), aa = { class: "flex-1 flex flex-col bg-white py-8 px-6 mt-3 box-border" }, la = { class: "flex-1 h-0 max-h-[calc(100vh-240px)] overflow-auto" }, oa = { class: "w-full mt-5 flex items-center gap-5" }, sa = { class: "flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group" }, na = { class: "relative w-full flex items-center gap-3" }, ia = { class: "font-semibold text-[#1D1E1F]" }, ra = { class: "!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]" }, da = { class: "mt-3 text-sm text-[#4F5052]" }, ua = { class: "flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group opacity-60" }, ca = { class: "relative w-full flex items-center gap-3" }, pa = { class: "font-semibold text-[#1D1E1F]" }, ma = { class: "!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]" }, fa = { class: "mt-3 text-sm text-[#4F5052]" }, _a = { class: "w-full mt-5 flex items-center gap-5 opacity-60" }, ga = { class: "flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group" }, ya = { class: "relative w-full flex items-center gap-3" }, va = { class: "font-semibold text-[#1D1E1F]" }, ha = { class: "!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]" }, wa = { class: "mt-3 text-sm text-[#4F5052]" }, Ra = I({ __name: "index", setup(u) {
  const { isLocalEnv: y, isOpLocalEnv: l } = rt(), v = A(), c = A(), p = A({});
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
      return J.warning(window.$t("feature_coming_soon"));
    if (y.value && l.value)
      return ht({ title: window.$t("local_config_limited_tip"), content: window.$t("local_config_limited_desc", { url: window.location.href }), confirmButtonText: window.$t("know_it"), showCancelButton: false }).open();
    switch (_) {
      case "setting":
        m === "wechat" && v.value.open({ data: p.value });
        break;
      case "enable":
        m === "wechat" && await ee.updatePaymentStatus(p.value.pay_setting_id, true), J.success(window.$t("enabled")), a();
        break;
      case "disable":
        m === "wechat" && await ee.updatePaymentStatus(p.value.pay_setting_id, false), J.success(window.$t("disabled")), a();
        break;
    }
  };
  return (_, m) => {
    const C = _t, w = pe, k = ft, t = q, r = ct, e = pt, h = mt, f = Ie;
    return b(), N(j, null, [s(f, { class: "px-[60px] py-8" }, { default: i(() => [s(C, { title: _.$t("module.payment") }, null, 8, ["title"]), g("div", aa, [g("div", la, [m[7] || (m[7] = g("h1", { class: "font-semibold text-[#1D1E1F]" }, "CNY", -1)), g("div", oa, [g("div", sa, [g("div", na, [s(w, { name: "wechat", width: "24" }), g("label", ia, $(_.$t("wechat_pay")), 1), p.value.pay_status ? (b(), R(k, { key: 0, class: "!border-none !bg-[#E3F6E0] !text-[#09BB07]", type: "success", size: "default" }, { default: i(() => [V($(_.$t("enabled")), 1)]), _: 1 })) : U("", true), m[3] || (m[3] = g("div", { class: "flex-1" }, null, -1)), s(h, { placement: "bottom", onCommand: m[0] || (m[0] = (d) => F(d, "wechat")) }, { dropdown: i(() => [s(e, null, { default: i(() => [s(r, { command: "setting" }, { default: i(() => [V($(_.$t("action_setting")), 1)]), _: 1 }), p.value.pay_setting_id ? (b(), N(j, { key: 0 }, [p.value.pay_status ? (b(), R(r, { key: 0, command: "disable" }, { default: i(() => [V($(_.$t("action_disable")), 1)]), _: 1 })) : (b(), R(r, { key: 1, command: "enable" }, { default: i(() => [V($(_.$t("action_enable")), 1)]), _: 1 }))], 64)) : U("", true)]), _: 1 })]), default: i(() => [g("div", ra, [s(t, { class: "rotate-90", size: "16" }, { default: i(() => [s(o(ne))]), _: 1 })])]), _: 1 })]), g("div", da, $(p.value.pay_setting_id ? `${_.$t("setting")} \xB7 ${_.$t("updated_at")}
							${p.value.updated_time.slice(0, 16)}` : _.$t("not_setting")), 1)]), g("div", ua, [g("div", ca, [s(w, { name: "manual-pay", width: "24" }), g("label", pa, $(_.$t("manual_pay")), 1), m[4] || (m[4] = g("div", { class: "flex-1" }, null, -1)), s(h, { placement: "bottom", onCommand: m[1] || (m[1] = (d) => F(d, "manual")) }, { dropdown: i(() => [s(e, null, { default: i(() => [s(r, { command: "setting" }, { default: i(() => [V($(_.$t("action_setting")), 1)]), _: 1 }), s(r, { command: "enable" }, { default: i(() => [V($(_.$t("action_enable")), 1)]), _: 1 })]), _: 1 })]), default: i(() => [g("div", ma, [s(t, { class: "rotate-90", size: "16" }, { default: i(() => [s(o(ne))]), _: 1 })])]), _: 1 })]), g("div", fa, $(_.$t("not_setting")), 1)])]), m[8] || (m[8] = g("h1", { class: "mt-10 font-semibold text-[#1D1E1F] opacity-60" }, "USD", -1)), g("div", _a, [g("div", ga, [g("div", ya, [s(w, { name: "paypal", width: "24" }), g("label", va, $(_.$t("paypal")), 1), m[5] || (m[5] = g("div", { class: "flex-1" }, null, -1)), s(h, { placement: "bottom", onCommand: m[2] || (m[2] = (d) => F(d, "paypal")) }, { dropdown: i(() => [s(e, null, { default: i(() => [s(r, { command: "setting" }, { default: i(() => [V($(_.$t("action_setting")), 1)]), _: 1 }), s(r, { command: "enable" }, { default: i(() => [V($(_.$t("action_enable")), 1)]), _: 1 })]), _: 1 })]), default: i(() => [g("div", ha, [s(t, { class: "rotate-90", size: "16" }, { default: i(() => [s(o(ne))]), _: 1 })])]), _: 1 })]), g("div", wa, $(_.$t("not_setting")), 1)]), m[6] || (m[6] = g("div", { class: "flex-1 rounded-lg box-border p-5 pb-8 group" }, null, -1))])])])]), _: 1 }), s(Gt, { ref_key: "wechat_setting_ref", ref: v, onSuccess: a }, null, 512), s(ta, { ref_key: "manual_setting_ref", ref: c, onSuccess: a }, null, 512)], 64);
  };
} });
export {
  Ra as default
};
