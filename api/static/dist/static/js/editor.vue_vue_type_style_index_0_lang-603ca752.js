import { aF as n, y as g, r as p, $ as b, o as _, a as y, b as w, c as k, m as x, d as $, q as V, a7 as j, aG as f } from "./index-8579fe4a.js";
import { v as C } from "./el-loading-8747b309.js";
const s = { vditor: { id: "vditor-lib", src: `${n}/js/vditor/dist/index.min.js`, callback() {
  const e = document.createElement("link");
  e.rel = "stylesheet", e.href = `${n}/js/vditor/dist/index.css`, document.head.appendChild(e);
} }, ueditor: { id: "ueditor-lib", src: `${n}/js/UEditor/ueditor.all.min.js`, callback() {
  const e = document.createElement("script");
  e.href = `${n}/js/UEditor/ueditor.config.js`, e.id = "ueditor-config", document.head.appendChild(e);
} } }, E = (e) => s[e] ? (s[e]._promise || (s[e]._promise = new Promise((c, o) => {
  const { src: r, id: d, callback: l } = s[e], t = document.createElement("script");
  t.src = r, t.id = d, r.endsWith(".mjs") && (t.type = "module"), t.onload = () => {
    l && l(), setTimeout(() => {
      c();
    }, 100);
  }, t.onerror = () => {
    o();
  }, document.body.appendChild(t);
})), s[e]._promise) : Promise.reject(new Error(`Library ${e} not found`)), N = g({ __name: "editor", props: { modelValue: { default: "" }, height: { default: "300px" }, maxlength: {}, showWordLimit: { type: Boolean }, preview: { type: Boolean }, bgColor: { default: "#fff" }, type: { default: "full" } }, emits: ["update:modelValue"], setup(e, { emit: c }) {
  const o = e, r = c, d = p(null), l = p(false), t = p(null), u = () => {
    const i = localStorage.getItem("access_token") || "";
    return { url: `${f}/api/upload`, multiple: false, headers: { authorization: `Bearer ${i}` }, max: 15 * 1024 * 1024, fieldName: "file", filename: (a) => a, format(a, m) {
      const h = JSON.parse(m).data || {};
      return JSON.stringify({ msg: "", code: 0, data: { errFiles: [], succMap: { [`${a[0].name}`]: `${f}/api/preview/${h.preview_key || ""}` } } });
    } };
  }, v = async () => {
    t.value && t.value.destroy(), l.value = true, await E("vditor");
    const i = { height: o.height, cache: { enable: false }, cdn: `${n}/js/vditor`, toolbar: o.type === "full" ? ["undo", "redo", "|", { name: "insert", toolbar: ["image", "link", "code", "inline-code", "line", "insert-before", "insert-after"] }, "|", "headings", "bold", "italic", "strike", "|", "list", "ordered-list", "outdent", "indent", "|", "quote", "|", "copy", "edit-mode", "fullscreen"] : [{ name: "insert", toolbar: ["image", "link", "code", "inline-code", "line", "insert-before", "insert-after"] }, "|", "headings", "bold", "italic", "strike", "|", "list", "ordered-list", "quote", "|", "copy", "fullscreen"], toolbarConfig: { hide: o.preview }, after: () => {
      t.value.setValue(o.modelValue);
    }, input: (a) => {
      r("update:modelValue", a);
    }, blur: (a) => {
      r("update:modelValue", a);
    }, upload: u(), image: { accept: "image/*", ...u() }, video: { accept: "video/*", ...u() }, mode: "wysiwyg", counter: { enable: !!o.maxlength, max: o.maxlength } };
    i.preview = i.preview || { markdown: { toc: true, mark: true, footnotes: true, autoSpace: true }, math: { engine: "MathJax", inlineDigit: true }, actions: [] }, setTimeout(() => {
      t.value = new Vditor(d.value, i);
    }, 100);
  };
  return b(() => o.modelValue, (i) => {
    t.value && i !== t.value.getValue() && t.value.setValue(i);
  }), _(() => {
    v();
  }), y(() => {
    t.value && t.value.destroy();
  }), (i, a) => {
    const m = C;
    return w(), k("div", null, [x($("div", { ref_key: "vditorRef", ref: d, class: V(["w-full vditor-custom", [o.preview ? "vditor-preview !border-none !bg-transparent" : ""]]), style: j({ height: o.height, "--panel-background-color": o.bgColor }) }, null, 6), [[m, l.value]])]);
  };
} });
export {
  N as _
};
