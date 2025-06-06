import { D as c } from "./index-7b696e01.js";
function n(t) {
  const s = typeof t == "string" ? { message: t } : t, e = document.createElement("div");
  e.className = `x-message ${s.type ? `x-message--${s.type}` : ""} ${s.customClass || ""}`;
  const a = document.createElement("p");
  if (a.className = "x-message__content", a.textContent = s.message || "", e.appendChild(a), s.showClose) {
    const r = document.createElement("div");
    r.className = "x-message__closeBtn", r.innerHTML = "\xD7", r.onclick = () => o(), e.appendChild(r);
  }
  switch (e.style.position = "fixed", e.style.top = `${s.offset || 20}px`, e.style.left = "50%", e.style.transform = "translateX(-50%)", e.style.padding = "8px 15px", e.style.borderRadius = "4px", e.style.overflow = "hidden", e.style.transition = "opacity 0.3s, transform .4s, top 0.4s", e.style.zIndex = "9999", s.type) {
    case "success":
      e.style.backgroundColor = "#67C23A", e.style.color = "#fff";
      break;
    case "warning":
      e.style.backgroundColor = "#E6A23C", e.style.color = "#fff";
      break;
    case "error":
      e.style.backgroundColor = "#F56C6C", e.style.color = "#fff";
      break;
    default:
      e.style.backgroundColor = "#909399", e.style.color = "#fff";
  }
  document.body.appendChild(e), e.offsetHeight, e.style.transform = "translate(-50%, 0)";
  const o = () => {
    e.style.opacity = "0", e.style.transform = "translate(-50%, -100%)", setTimeout(() => {
      var r;
      document.body.contains(e) && (document.body.removeChild(e), (r = s.onClose) == null || r.call(s));
    }, 400);
  };
  s.duration !== 0 && setTimeout(o, s.duration || 3e3);
}
n.success = (t) => n({ message: t, type: "success" });
n.warning = (t) => n({ message: t, type: "warning" });
n.error = (t) => n({ message: t, type: "error" });
n.info = (t) => n({ message: t, type: "info" });
function i(t, s) {
  return new Promise((e, a) => {
    navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(t).then(() => {
      n.success(c.global.t("hubx.bubble.copied")), e(t);
    }).catch((o) => {
      console.error("\u4F7F\u7528Clipboard API\u590D\u5236\u5931\u8D25:", o), l(t, s, e, a);
    }) : l(t, s, e, a);
  });
}
function l(t, s, e, a) {
  try {
    const o = document.createElement("textarea");
    o.setAttribute("readonly", "readonly"), o.value = t, o.style.position = "absolute", o.style.left = "-9999px", document.body.appendChild(o), o.select();
    const r = document.execCommand("copy");
    document.body.removeChild(o), r ? (n.success(c.global.t("hubx.bubble.copied")), e && e(t)) : a && a(new Error("\u590D\u5236\u5931\u8D25"));
  } catch (o) {
    console.error("\u590D\u5236\u5230\u526A\u8D34\u677F\u5931\u8D25:", o), a && a(o);
  }
}
export {
  i as d,
  n as r
};
