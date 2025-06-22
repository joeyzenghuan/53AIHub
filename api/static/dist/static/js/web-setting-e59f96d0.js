import { y as k, r as u, o as R, b as _, c as h, aq as I, Y as V, aa as A, E as C, N as b, a as H, j as E, w as m, d as n, f as d, t as i, u as D, L, m as P, F as j, K as U, a9 as W, R as q, a4 as K, aC as T, aD as Y } from "./index-8579fe4a.js";
import { v as G } from "./el-loading-8747b309.js";
import { _ as J } from "./index-ad57f5b2.js";
import { E as O } from "./el-image-viewer-dd2f27c0.js";
import { n as w } from "./navigation-decf8cba.js";
import "./position-4ca9dd9d.js";
import "./debounce-484109dd.js";
const Q = ["src"], X = k({ __name: "index", setup($, { expose: v }) {
  const l = u(), c = u(false), r = () => new Promise((e) => {
    if (c.value)
      return e();
    window.addEventListener("message", (t) => {
      ((t.data || {}).action || "") === "ueditor-ready" && (c.value = true, e());
    });
  });
  return R(() => {
    window.addEventListener("message", (e) => {
      ((e.data || {}).action || "") === "ueditor-ready" && (c.value = true);
    });
  }), v({ setValue: async (e) => {
    await r(), l.value.contentWindow.postMessage({ action: "setValue", value: e }, "*");
  }, getHtml: async () => (await r(), new Promise((e) => {
    l.value.contentWindow.postMessage({ action: "getHtml" }, "*"), window.addEventListener("message", (t) => {
      const o = t.data || {};
      (o.action || "") === "getHtml" && e(o.value);
    });
  })) }), (e, t) => (_(), h("iframe", { ref_key: "iframeRef", ref: l, class: "w-full h-full", src: e.$getRealPath({ url: "/UEditor/index.html" }) }, null, 8, Q));
} }), Z = { class: "w-full px-[56px] h-[70px] flex items-center gap-3 shadow box-border bg-white sticky top-0 left-0 right-0 z-[9]" }, ee = { class: "flex-1 flex flex-col gap-0.5" }, te = { class: "text-xs text-[#9A9BA0]" }, ae = { class: "flex-1 flex flex-col w-5/6 max-w-[1084px] rounded box-border my-5 mx-auto bg-white" }, ne = { class: "w-full h-[76px] px-8 box-border flex items-center gap-4 border-b" }, oe = { class: "flex-none text-[#1D1E1F] font-semibold" }, se = { class: "!text-base !text-[#1D1E1F]" }, ie = { class: "flex-1 w-full p-2 box-border" }, le = { class: "w-full h-[64px] px-[56px] box-border flex items-center bg-[#22252E] rounded-sm text-sm text-[#989A9D]" }, fe = k({ __name: "web-setting", setup($) {
  const v = I(), l = V(() => v.info), c = u(), r = A(), e = C(), t = u(false), o = u({}), p = u([]), x = async () => {
    const { navigation_id: a } = r.params;
    t.value = true;
    const s = await w.detail({ navigation_id: a }).finally(() => {
      t.value = false;
    });
    s.updated_time = new Date(s.updated_time || Date.now()).toLocaleString().replace(/\//g, "-");
    const f = s.content || {};
    s.content_update_time = new Date(f.updated_time || Date.now()).toLocaleString().replace(/\//g, "-"), c.value.setValue(f.html_content || ""), o.value = s;
  }, B = async () => {
    const a = await c.value.getHtml();
    t.value = true, await w.save_content({ navigation_id: +r.params.navigation_id, html_content: a }).finally(() => {
      t.value = false;
    }), W.success($t("action_save_success")), e.replace({ name: "Navigation" });
  };
  return R(async () => {
    t.value = true, w.list({}).then(({ list: a = [] } = {}) => {
      p.value = a;
    }), x(), b.on("user-login-success", x);
  }), H(() => {
    b.off("user-login-success", x);
  }), (a, s) => {
    const f = q, y = K, M = O, z = T, F = Y, N = J, S = G;
    return _(), E(N, { class: "fixed top-0 left-0 w-screen h-screen z-[9] bg-[#F4F6FA]" }, { default: m(() => [n("h1", Z, [d(f, { name: "web-edit", style: { zoom: "1.2" }, color: "#858585", width: "24" }), n("div", ee, [n("span", null, i(o.value.name || a.$t(D(r).meta.title)), 1), n("span", te, i(a.$t("last_edit")) + ": " + i((o.value.content_update_time || "").slice(0, 15)), 1)]), d(y, { class: "!ml-0 !min-w-[96px] !h-9", type: "info", plain: "", size: "large", onClick: s[0] || (s[0] = (g) => D(e).replace({ name: "Navigation" })) }, { default: m(() => [L(i(a.$t("action_cancel")), 1)]), _: 1 }), d(y, { class: "!ml-0 !min-w-[96px] !h-9", type: "primary", size: "large", loading: t.value, onClick: B }, { default: m(() => [L(i(a.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])]), P((_(), h("div", ae, [n("div", ne, [d(M, { src: l.value.logo, class: "flex-none size-10 rounded", fit: "cover" }, null, 8, ["src"]), n("h2", oe, i(l.value.display_name || "--"), 1), d(F, { class: "flex-1 w-0 overflow-hidden ml-2 !border-none", mode: "horizontal" }, { default: m(() => [(_(true), h(j, null, U(p.value, (g) => (_(), E(z, { class: "!cursor-auto !opacity-100", key: g.navigation_id, index: g.jump_path, disabled: "" }, { default: m(() => [n("span", se, i(g.name), 1)]), _: 2 }, 1032, ["index"]))), 128))]), _: 1 })]), n("div", ie, [d(X, { ref_key: "ueditorRef", ref: c }, null, 512)]), n("div", le, i(l.value.copyright), 1)])), [[S, t.value]])]), _: 1 });
  };
} });
export {
  fe as default
};
