import { D as Dl } from "./main-zTjO05wq.js";
function r(o) {
  const t = typeof o == "string" ? { message: o } : o, e = document.createElement("div");
  e.className = `x-message ${t.type ? `x-message--${t.type}` : ""} ${t.customClass || ""}`;
  const n = document.createElement("p");
  if (n.className = "x-message__content", n.textContent = t.message || "", e.appendChild(n), t.showClose) {
    const a = document.createElement("div");
    a.className = "x-message__closeBtn", a.innerHTML = "×", a.onclick = () => s(), e.appendChild(a);
  }
  switch (e.style.position = "fixed", e.style.top = `${t.offset || 20}px`, e.style.left = "50%", e.style.transform = "translateX(-50%)", e.style.padding = "8px 15px", e.style.borderRadius = "4px", e.style.overflow = "hidden", e.style.transition = "opacity 0.3s, transform .4s, top 0.4s", e.style.zIndex = "9999", t.type) {
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
  const s = () => {
    e.style.opacity = "0", e.style.transform = "translate(-50%, -100%)", setTimeout(() => {
      var a;
      document.body.contains(e) && (document.body.removeChild(e), (a = t.onClose) == null || a.call(t));
    }, 400);
  };
  t.duration !== 0 && setTimeout(s, t.duration || 3e3);
}
r.success = (o) => r({ message: o, type: "success" });
r.warning = (o) => r({ message: o, type: "warning" });
r.error = (o) => r({ message: o, type: "error" });
r.info = (o) => r({ message: o, type: "info" });
function d(o, t) {
  return new Promise((e, n) => {
    navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(o).then(() => {
      r.success(Dl.global.t("hubx.bubble.copied")), e(o);
    }).catch((s) => {
      console.error("使用Clipboard API复制失败:", s), l(o, t, e, n);
    }) : l(o, t, e, n);
  });
}
function l(o, t, e, n) {
  try {
    const s = document.createElement("textarea");
    s.setAttribute("readonly", "readonly"), s.value = o, s.style.position = "absolute", s.style.left = "-9999px", document.body.appendChild(s), s.select();
    const a = document.execCommand("copy");
    document.body.removeChild(s), a ? (r.success(Dl.global.t("hubx.bubble.copied")), e && e(o)) : n && n(new Error("复制失败"));
  } catch (s) {
    console.error("复制到剪贴板失败:", s), n && n(s);
  }
}
export {
  d,
  r
};
