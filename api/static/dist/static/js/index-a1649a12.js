import { _ as re } from "./index-62cbccec.js";
import { E as R, c as X, d as Z, f as ee, e as J, g as le, N as pe, G as _e, O as ce, F as me, J as te, x as ve, y as fe, _ as be, a as ge, I as ae } from "./element-plus-c72880c6.js";
import { _ as we } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { _ as he, f as ye } from "./index-76ebd052.js";
import { d as Y, e as m, V as oe, o as _, J as E, K as a, a as F, M as t, a2 as b, P as f, O as D, c as z, ac as B, H as G, u as j, j as Ee, D as $e, f as ke, n as K } from "./@vue-3b855f7b.js";
import { S as Ve } from "./sortablejs-437f0071.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@element-plus-0cfad8bb.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
import "./vue-router-2f60a71a.js";
import "./pinia-6f4b1ece.js";
import "./vue-demi-71ba0ef2.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
const xe = { class: "mt-2 text-xs text-[#999]" }, Ce = { class: "py-4 flex items-center justify-center" }, Te = Y({ __name: "seo-setting-dialog", setup(H, { expose: g }) {
  const C = m(), w = m(false), o = oe({ title: "", keywords: "", description: "" }), c = m({}), k = ({ data: i = {} } = {}) => {
    const d = i.seo_setting_info || {};
    o.title = d.title || "\u5FEB\u901F\u6210\u4E00\u4E2A\u4EA7\u54C1\u7814\u53D1\u521B\u610F\u7684agent", o.keywords = d.keywords || "53AI\uFF0C\u4EA7\u54C1\u521B\u610F\u751F\u6210\uFF0C\u667A\u80FD\u4F53", o.description = d.description || "\u6CA1\u6709\u4EA7\u54C1\u7814\u53D1\u521B\u610F\uFF1F\u4F7F\u7528\u6700\u65B0\u7684AI agent \u52A9\u4F60\u5FEB\u901F\u5B8C\u6210\u4EA7\u54C1\u521B\u610F\u5DE5\u4F5C", c.value = i, w.value = true;
  }, l = () => {
    w.value = false, T();
  }, T = () => {
    o.title = "", o.keywords = "", o.description = "";
  }, S = () => {
    C.value.validate((i) => {
      i && (c.value.seo_setting_info || (c.value.seo_setting_info = {}), c.value.seo_setting_info.title = o.title, c.value.seo_setting_info.keywords = o.keywords, c.value.seo_setting_info.description = o.description, R.success(window.$t("action_save_success")), l());
    });
  };
  return g({ open: k, close: l, reset: T }), (i, d) => {
    const P = X, V = Z, s = ee, u = J, A = le;
    return _(), E(A, { title: i.$t("module.nav_seo_setting"), "close-on-click-modal": false, width: "720px", "append-to-body": "", modelValue: w.value, "onUpdate:modelValue": d[3] || (d[3] = (v) => w.value = v), onClose: l }, { footer: a(() => [F("div", Ce, [t(u, { class: "w-[96px] h-[36px]", type: "primary", onClick: S }, { default: a(() => [b(f(i.$t("action_confirm")), 1)]), _: 1 }), t(u, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: D(l, ["stop"]) }, { default: a(() => [b(f(i.$t("action_cancel")), 1)]), _: 1 })])]), default: a(() => [t(s, { ref_key: "form_ref", ref: C, model: o, "label-position": "left", "label-width": "128px" }, { default: a(() => [t(V, { label: i.$t("module.nav_seo_setting_title") }, { default: a(() => [t(P, { modelValue: o.title, "onUpdate:modelValue": d[0] || (d[0] = (v) => o.title = v), maxlength: "60", "show-word-limit": "", size: "large", placeholder: i.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), t(V, { label: i.$t("module.nav_seo_setting_keywords") }, { default: a(() => [t(P, { modelValue: o.keywords, "onUpdate:modelValue": d[1] || (d[1] = (v) => o.keywords = v), size: "large", placeholder: i.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"]), F("div", xe, f(i.$t("module.nav_seo_setting_keywords_tip")), 1)]), _: 1 }, 8, ["label"]), t(V, { label: i.$t("module.nav_seo_setting_description") }, { default: a(() => [t(P, { modelValue: o.description, "onUpdate:modelValue": d[2] || (d[2] = (v) => o.description = v), type: "textarea", rows: 5, size: "large", resize: "none", placeholder: i.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), x = "homepage", q = "single", U = "agent", ne = /* @__PURE__ */ new Map([[x, window.$t("module.nav_type_homepage")], [q, window.$t("module.nav_type_single")], [U, window.$t("module.nav_type_agent")]]), M = "self", $ = "blank", se = /* @__PURE__ */ new Map([[M, window.$t("module.nav_target_self")], [$, window.$t("module.nav_target_blank")]]), Ae = [{ id: 1, name: "\u9996\u9875", type: x, target: M, visible: true, url: "https://www.doubao.com/chat/", sort: 0 }, { id: 2, name: "AI\u767E\u5B9D\u7BB1", type: q, target: M, visible: true, url: "https://www.doubao.com/chat/", sort: 1 }, { id: 3, name: "\u4E9A\u9A6C\u900A\u5546\u54C1\u6807\u9898", type: U, target: M, visible: false, url: "https://www.doubao.com/chat/", sort: 2 }, { id: 4, name: "AI\u77E5\u8BC6\u5E93", type: x, target: $, visible: false, url: "https://www.doubao.com/chat/", sort: 3 }, { id: 5, name: "\u7ADE\u54C1\u5206\u6790\u62A5\u544A", type: U, target: $, visible: false, url: "https://www.doubao.com/chat/", sort: 4 }, { id: 6, name: "\u7ED3\u6784\u5316\u63D0\u793A\u8BCD", type: x, target: $, visible: true, url: "https://www.doubao.com/chat/", sort: 5 }, { id: 7, name: "\u4EA7\u54C1\u7814\u53D1\u521B\u610F", type: x, target: $, visible: false, url: "https://www.doubao.com/chat/", sort: 6 }, { id: 8, name: "\u8054\u7CFB\u6211\u4EEC", type: x, target: $, visible: true, url: "https://www.doubao.com/chat/", sort: 7 }], Se = { class: "w-full flex items-center gap-2" }, Ie = { class: "py-4 flex items-center justify-center" }, Ne = Y({ __name: "nav-create-dialog", emits: ["confirm"], setup(H, { expose: g, emit: C }) {
  const w = C, o = m(false), c = m(), k = m(false), l = oe({ type: x, nav_id: "", name: "", url: "", target: $, agent_class_id: "", agent_id: "" }), T = m({}), S = m([x, q, U].map((e) => ({ value: e, label: ne.get(e) }))), i = m([{ value: "\u9996\u9875", label: "\u9996\u9875", url: "https://www.doubao.com/chat/" }, { value: "AI\u767E\u5B9D\u7BB1", label: "AI\u767E\u5B9D\u7BB1", url: "https://www.doubao.com/chat/" }, { value: "\u4E9A\u9A6C\u900A\u5546\u54C1\u6807\u9898", label: "\u4E9A\u9A6C\u900A\u5546\u54C1\u6807\u9898", url: "https://www.doubao.com/chat/" }, { value: "AI\u77E5\u8BC6\u5E93", label: "AI\u77E5\u8BC6\u5E93", url: "https://www.doubao.com/chat/" }]), d = m([M, $].map((e) => ({ value: e, label: se.get(e) }))), P = m([{ value: "DeepSeek", label: "DeepSeek" }, { value: "Claude", label: "Claude" }, { value: "Gemini", label: "Gemini" }, { value: "GPT-4", label: "GPT-4" }]), V = m([{ value: "DeepSeek", label: "DeepSeek", url: "https://www.doubao.com/chat/" }, { value: "Claude", label: "Claude", url: "https://www.doubao.com/chat/" }, { value: "Gemini", label: "Gemini", url: "https://www.doubao.com/chat/" }, { value: "GPT-4", label: "GPT-4", url: "https://www.doubao.com/chat/" }]), s = ({ data: e = {} } = {}) => {
    o.value = !!e.id, l.type = e.type || x, l.nav_id = e.name || "", l.url = e.url || "", l.target = e.target || $, l.type !== U && (l.target = $), T.value = e, k.value = true;
  }, u = () => {
    k.value = false, A();
  }, A = () => {
    l.type = x, l.nav_id = "", l.url = "", l.target = $, l.agent_class_id = "", l.agent_id = "";
  }, v = () => {
    var _a, _b;
    l.url = ((_a = i.value.find((e) => e.value === l.nav_id)) == null ? void 0 : _a.url) || "", l.name = ((_b = i.value.find((e) => e.value === l.nav_id)) == null ? void 0 : _b.label) || "";
  }, h = () => {
    var _a, _b;
    l.url = ((_a = V.value.find((e) => e.value === l.agent_id)) == null ? void 0 : _a.url) || "", l.name = ((_b = V.value.find((e) => e.value === l.agent_id)) == null ? void 0 : _b.label) || "";
  }, I = () => {
    c.value.validate((e) => {
      e && (R.success(window.$t("action_save_success")), w("confirm", { data: l }), u());
    });
  };
  return g({ open: s, close: u, reset: A }), (e, r) => {
    const L = ce, p = pe, y = Z, N = me, O = _e, ie = X, de = ee, Q = J, ue = le;
    return _(), E(ue, { title: e.$t(o.value ? "action_edit" : "action_create"), "close-on-click-modal": false, width: "680px", "append-to-body": "", modelValue: k.value, "onUpdate:modelValue": r[6] || (r[6] = (n) => k.value = n), onClose: u }, { footer: a(() => [F("div", Ie, [t(Q, { class: "w-[96px] h-[36px]", type: "primary", onClick: I }, { default: a(() => [b(f(e.$t("action_confirm")), 1)]), _: 1 }), t(Q, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: D(u, ["stop"]) }, { default: a(() => [b(f(e.$t("action_cancel")), 1)]), _: 1 })])]), default: a(() => [t(de, { ref_key: "form_ref", ref: c, model: l, "label-position": "left", "label-width": "78px" }, { default: a(() => [t(y, { label: e.$t("module.nav_type") }, { default: a(() => [t(p, { modelValue: l.type, "onUpdate:modelValue": r[0] || (r[0] = (n) => l.type = n), size: "large" }, { default: a(() => [(_(true), z(G, null, B(S.value, (n) => (_(), E(L, { key: n.value, label: n.value }, { default: a(() => [b(f(n.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), l.type !== j(U) ? (_(), E(y, { key: 0, label: e.$t("module.nav_name") }, { default: a(() => [t(O, { modelValue: l.nav_id, "onUpdate:modelValue": r[1] || (r[1] = (n) => l.nav_id = n), size: "large", placeholder: e.$t("module.nav_name_placeholder"), onChange: v }, { default: a(() => [(_(true), z(G, null, B(i.value, (n) => (_(), E(N, { key: n.value, label: n.label, value: n.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])) : (_(), E(y, { key: 1, label: e.$t("action_select") }, { default: a(() => [F("div", Se, [t(O, { class: "flex-none !w-[160px]", modelValue: l.agent_class_id, "onUpdate:modelValue": r[2] || (r[2] = (n) => l.agent_class_id = n), size: "large", placeholder: e.$t("module.nav_agent_class_placeholder") }, { default: a(() => [(_(true), z(G, null, B(P.value, (n) => (_(), E(N, { key: n.value, label: n.label, value: n.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"]), t(O, { class: "flex-1", modelValue: l.agent_id, "onUpdate:modelValue": r[3] || (r[3] = (n) => l.agent_id = n), size: "large", placeholder: e.$t("module.nav_agent_placeholder"), onChange: h }, { default: a(() => [(_(true), z(G, null, B(V.value, (n) => (_(), E(N, { key: n.value, label: n.label, value: n.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])])]), _: 1 }, 8, ["label"])), t(y, { label: e.$t("module.nav_url") }, { default: a(() => [t(ie, { modelValue: l.url, "onUpdate:modelValue": r[4] || (r[4] = (n) => l.url = n), disabled: "", size: "large", placeholder: e.$t("form_select_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), t(y, { label: e.$t("module.nav_target") }, { default: a(() => [t(O, { modelValue: l.target, "onUpdate:modelValue": r[5] || (r[5] = (n) => l.target = n), disabled: l.type !== j(U), size: "large", placeholder: e.$t("module.nav_target_placeholder") }, { default: a(() => [(_(true), z(G, null, B(d.value, (n) => (_(), E(N, { key: n.value, label: n.label, value: n.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), Fe = { class: "w-full py-3 px-6 box-border rounded flex flex-row items-center bg-white", style: { "box-shadow": "0 5px 15px rgba(22, 23, 26, 0.1)" } }, Pe = { class: "mt-5 rounded py-9 px-10 bg-white" }, De = { class: "pr-3 sort-icon cursor-move" }, ze = Y({ __name: "pc-navigation-pane", setup(H) {
  const g = m(), C = m(), w = m(), o = m(JSON.parse(JSON.stringify(Ae))), c = Ee(() => o.value.filter((s) => s.visible)), k = ({ data: s = {} } = {}) => {
    s.url && window.open(s.url, "_blank");
  }, l = ({ data: s = {} } = {}) => {
    C.value.open({ data: s });
  }, T = async ({ data: s = {}, index: u = -1 } = {}) => {
    await ge.confirm(window.$t("module.action_delete_confirm"), window.$t("action_delete_tip")), u > 0 && o.value.splice(u, 1), R.success(window.$t("action_delete_success"));
  }, S = ({ data: s = {} } = {}) => {
    w.value.open({ data: s });
  }, i = async ({ data: s = {} } = {}) => {
    if (!s.id) {
      s.id = o.value.length + 1;
      const u = o.value;
      u.push(s), o.value = [], await K(), o.value = u;
    }
  };
  let d = null;
  const P = () => {
    if (!g.value || !g.value.$el || !o.value.length)
      return;
    const s = g.value.$el.querySelector(".el-table__body tbody");
    d = Ve.create(s, { onStart: (u = {}) => {
      const { target: A, oldIndex: v } = u;
      A.children[v].style.background = "#ECF5FF";
    }, onEnd: async (u = {}) => {
      const { from: A = {}, to: v = {}, target: h, newIndex: I, oldIndex: e } = u;
      if (h.children && h.children[I] && (h.children[I].style.background = "transparent"), I === e)
        return;
      const r = o.value, L = r.splice(e, 1)[0];
      r.splice(I, 0, L), o.value = [], await K(), o.value = [...r].map((p, y) => ({ ...p, sort: y })), R.success(window.$t("action_sort_success"));
    } });
  }, V = () => {
    d && (d.destroy(), d = null);
  };
  return $e(() => {
    V();
  }), ke(() => o.value, async () => {
    V(), await K(), P();
  }, { deep: true, immediate: true }), (s, u) => {
    const A = ae, v = te, h = J, I = he, e = ve, r = fe, L = be;
    return _(), z(G, null, [F("div", Fe, [u[0] || (u[0] = F("img", { class: "flex-none w-10 h-10 object-contain", src: "https://img.js.design/assets/img/61889010bb6d5d11bc62c2b8.png#029311e2b191cdf96801016808d17a46", alt: "" }, null, -1)), t(v, { class: "flex-1 w-0 ml-8" }, { default: a(() => [(_(true), z(G, null, B(c.value, (p) => (_(), E(A, { key: p.name, label: p.name, name: p.name }, null, 8, ["label", "name"]))), 128))]), _: 1 }), t(h, { class: "flex-none w-[128px] h-[36px] ml-8 border-none", type: "primary", plain: "", onClick: D(S, ["stop"]) }, { default: a(() => [b(" \u6DFB\u52A0(" + f(c.value.length) + "/" + f(o.value.length) + ") ", 1)]), _: 1 })]), F("div", Pe, [t(L, { ref_key: "table_ref", ref: g, class: "w-full rounded", data: o.value, "header-cell-style": { background: "#F6F7F8", height: "60px" }, "cell-style": { height: "66px" }, height: "calc(100vh - 296px)" }, { default: a(() => [t(e, { width: "40" }, { default: a(() => [F("div", De, [t(I, { name: "drag", width: "24px", height: "32px", color: "#a1a5af" })])]), _: 1 }), t(e, { prop: "name", label: s.$t("module.nav_name"), "min-width": "120", "show-overflow-tooltip": "" }, null, 8, ["label"]), t(e, { label: s.$t("module.nav_type"), "show-overflow-tooltip": "", "min-width": "100" }, { default: a(({ row: p = {} }) => [b(f(j(ne).get(p.type)), 1)]), _: 1 }, 8, ["label"]), t(e, { label: s.$t("module.nav_target"), "show-overflow-tooltip": "", "min-width": "100" }, { default: a(({ row: p = {} }) => [b(f(j(se).get(p.target)), 1)]), _: 1 }, 8, ["label"]), t(e, { label: s.$t("module.nav_visible"), width: "120" }, { default: a((p) => [t(r, { modelValue: p.row.visible, "onUpdate:modelValue": (y) => p.row.visible = y, size: "default" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }, 8, ["label"]), t(e, { label: s.$t("module.nav_operation"), align: "right", width: "180", fixed: "right" }, { default: a(({ row: p = {}, $index: y }) => [t(h, { class: "h-auto !p-0 leading-none text-[#576D9C]", type: "text", size: "default", onClick: D((N) => S({ data: p }), ["stop"]) }, { default: a(() => [b(f(s.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), t(h, { class: "h-auto !p-0 leading-none text-[#576D9C]", type: "text", size: "default", onClick: D((N) => k({ data: p }), ["stop"]) }, { default: a(() => [b(f(s.$t("action_preview")), 1)]), _: 2 }, 1032, ["onClick"]), t(h, { class: "h-auto !p-0 leading-none text-[#576D9C]", type: "text", size: "default", onClick: D((N) => l({ data: p }), ["stop"]) }, { default: a(() => [b(f(s.$t("module.nav_operation_seo")), 1)]), _: 2 }, 1032, ["onClick"]), t(h, { class: "h-auto !p-0 leading-none text-[#576D9C]", type: "text", size: "default", onClick: D((N) => T({ data: p, index: y }), ["stop"]) }, { default: a(() => [b(f(s.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data"])]), t(Te, { ref_key: "seo_setting_dialog_ref", ref: C }, null, 512), t(Ne, { ref_key: "nav_create_dialog_ref", ref: w, onConfirm: i }, null, 512)], 64);
  };
} });
const W = ye(ze, [["__scopeId", "data-v-c47bfafb"]]), ol = Y({ __name: "index", setup(H) {
  const g = m("pc"), C = () => {
  }, w = () => {
  };
  return (o, c) => {
    const k = J, l = we, T = ae, S = te, i = re;
    return _(), E(i, { class: "px-[60px] py-8" }, { default: a(() => [t(l, { title: o.$t("module.navigation") }, { right: a(() => [t(k, { class: "bg-transparent w-[96px] h-[36px] text-[#1D1E1F]", plain: "", onClick: C }, { default: a(() => c[1] || (c[1] = [b(" \u9884\u89C8 ")])), _: 1 })]), _: 1 }, 8, ["title"]), t(S, { class: "mt-2", modelValue: g.value, "onUpdate:modelValue": c[0] || (c[0] = (d) => g.value = d), onTabClick: w }, { default: a(() => [t(T, { label: o.$t("module.pc_navigation"), name: "pc", lazy: "" }, { default: a(() => [t(W)]), _: 1 }, 8, ["label"]), t(T, { label: o.$t("module.mobile_navigation"), name: "mobile", lazy: "" }, { default: a(() => [t(W)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["modelValue"])]), _: 1 });
  };
} });
export {
  ol as default
};
