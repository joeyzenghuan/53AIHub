import { O as a, S as l } from "./index-8579fe4a.js";
function b(o, c) {
  return new Promise((r, t) => {
    navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(o).then(() => {
      a.success(l.global.t("hubx.bubble.copied")), r(o);
    }).catch((e) => {
      console.error("\u4F7F\u7528Clipboard API\u590D\u5236\u5931\u8D25:", e), n(o, c, r, t);
    }) : n(o, c, r, t);
  });
}
function n(o, c, r, t) {
  try {
    const e = document.createElement("textarea");
    e.setAttribute("readonly", "readonly"), e.value = o, e.style.position = "absolute", e.style.left = "-9999px", document.body.appendChild(e), e.select();
    const s = document.execCommand("copy");
    document.body.removeChild(e), s ? (a.success(l.global.t("hubx.bubble.copied")), r && r(o)) : t && t(new Error("\u590D\u5236\u5931\u8D25"));
  } catch (e) {
    console.error("\u590D\u5236\u5230\u526A\u8D34\u677F\u5931\u8D25:", e), t && t(e);
  }
}
export {
  b as d
};
