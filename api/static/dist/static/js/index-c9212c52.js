import { _ as re } from "./index-71389ea4.js";
import { u as j, r as m, ae as Q, b as _, h as E, i as a, d as N, f as t, H as b, t as v, am as G, a9 as O, X as Z, aa as ee, ac as le, $ as H, Y as te, c as P, G as B, F as D, z as Y, al as ce, a as _e, aG as pe, W as q, L as me, a8 as fe, p as ve } from "./index-7b696e01.js";
import { E as ae, a as oe } from "./el-tab-pane-08bf2574.js";
import { _ as be } from "./index.vue_vue_type_script_setup_true_lang-ca2646ba.js";
import { E as ge, a as we } from "./el-table-column-fe44992a.js";
import "./el-scrollbar-a17df1f1.js";
import { E as he } from "./el-switch-546ddcad.js";
import "./el-tag-63139441.js";
import { E as ye, a as Ee } from "./el-select-2909247e.js";
import { E as $e, a as ke } from "./el-radio-32a02f49.js";
import { S as Ve } from "./sortable.esm-437f0071.js";
import "./index-6fa206ef.js";
import "./debounce-c1af5016.js";
import "./isEqual-71b69c76.js";
const xe = { class: "mt-2 text-xs text-[#999]" }, Ce = { class: "py-4 flex items-center justify-center" }, Te = j({ __name: "seo-setting-dialog", setup(J, { expose: g }) {
  const C = m(), w = m(false), o = Q({ title: "", keywords: "", description: "" }), p = m({}), k = ({ data: i = {} } = {}) => {
    const d = i.seo_setting_info || {};
    o.title = d.title || "\u5FEB\u901F\u6210\u4E00\u4E2A\u4EA7\u54C1\u7814\u53D1\u521B\u610F\u7684agent", o.keywords = d.keywords || "53AI\uFF0C\u4EA7\u54C1\u521B\u610F\u751F\u6210\uFF0C\u667A\u80FD\u4F53", o.description = d.description || "\u6CA1\u6709\u4EA7\u54C1\u7814\u53D1\u521B\u610F\uFF1F\u4F7F\u7528\u6700\u65B0\u7684AI agent \u52A9\u4F60\u5FEB\u901F\u5B8C\u6210\u4EA7\u54C1\u521B\u610F\u5DE5\u4F5C", p.value = i, w.value = true;
  }, l = () => {
    w.value = false, T();
  }, T = () => {
    o.title = "", o.keywords = "", o.description = "";
  }, S = () => {
    C.value.validate((i) => {
      i && (p.value.seo_setting_info || (p.value.seo_setting_info = {}), p.value.seo_setting_info.title = o.title, p.value.seo_setting_info.keywords = o.keywords, p.value.seo_setting_info.description = o.description, O.success(window.$t("action_save_success")), l());
    });
  };
  return g({ open: k, close: l, reset: T }), (i, d) => {
    const z = Z, V = ee, s = le, u = H, A = te;
    return _(), E(A, { title: i.$t("module.nav_seo_setting"), "close-on-click-modal": false, width: "720px", "append-to-body": "", modelValue: w.value, "onUpdate:modelValue": d[3] || (d[3] = (f) => w.value = f), onClose: l }, { footer: a(() => [N("div", Ce, [t(u, { class: "w-[96px] h-[36px]", type: "primary", onClick: S }, { default: a(() => [b(v(i.$t("action_confirm")), 1)]), _: 1 }), t(u, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: G(l, ["stop"]) }, { default: a(() => [b(v(i.$t("action_cancel")), 1)]), _: 1 })])]), default: a(() => [t(s, { ref_key: "form_ref", ref: C, model: o, "label-position": "left", "label-width": "128px" }, { default: a(() => [t(V, { label: i.$t("module.nav_seo_setting_title") }, { default: a(() => [t(z, { modelValue: o.title, "onUpdate:modelValue": d[0] || (d[0] = (f) => o.title = f), maxlength: "60", "show-word-limit": "", size: "large", placeholder: i.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), t(V, { label: i.$t("module.nav_seo_setting_keywords") }, { default: a(() => [t(z, { modelValue: o.keywords, "onUpdate:modelValue": d[1] || (d[1] = (f) => o.keywords = f), size: "large", placeholder: i.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"]), N("div", xe, v(i.$t("module.nav_seo_setting_keywords_tip")), 1)]), _: 1 }, 8, ["label"]), t(V, { label: i.$t("module.nav_seo_setting_description") }, { default: a(() => [t(z, { modelValue: o.description, "onUpdate:modelValue": d[2] || (d[2] = (f) => o.description = f), type: "textarea", rows: 5, size: "large", resize: "none", placeholder: i.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), x = "homepage", K = "single", U = "agent", ne = /* @__PURE__ */ new Map([[x, window.$t("module.nav_type_homepage")], [K, window.$t("module.nav_type_single")], [U, window.$t("module.nav_type_agent")]]), M = "self", $ = "blank", se = /* @__PURE__ */ new Map([[M, window.$t("module.nav_target_self")], [$, window.$t("module.nav_target_blank")]]), Ae = [{ id: 1, name: "\u9996\u9875", type: x, target: M, visible: true, url: "https://www.doubao.com/chat/", sort: 0 }, { id: 2, name: "AI\u767E\u5B9D\u7BB1", type: K, target: M, visible: true, url: "https://www.doubao.com/chat/", sort: 1 }, { id: 3, name: "\u4E9A\u9A6C\u900A\u5546\u54C1\u6807\u9898", type: U, target: M, visible: false, url: "https://www.doubao.com/chat/", sort: 2 }, { id: 4, name: "AI\u77E5\u8BC6\u5E93", type: x, target: $, visible: false, url: "https://www.doubao.com/chat/", sort: 3 }, { id: 5, name: "\u7ADE\u54C1\u5206\u6790\u62A5\u544A", type: U, target: $, visible: false, url: "https://www.doubao.com/chat/", sort: 4 }, { id: 6, name: "\u7ED3\u6784\u5316\u63D0\u793A\u8BCD", type: x, target: $, visible: true, url: "https://www.doubao.com/chat/", sort: 5 }, { id: 7, name: "\u4EA7\u54C1\u7814\u53D1\u521B\u610F", type: x, target: $, visible: false, url: "https://www.doubao.com/chat/", sort: 6 }, { id: 8, name: "\u8054\u7CFB\u6211\u4EEC", type: x, target: $, visible: true, url: "https://www.doubao.com/chat/", sort: 7 }], Se = { class: "w-full flex items-center gap-2" }, Ie = { class: "py-4 flex items-center justify-center" }, Fe = j({ __name: "nav-create-dialog", emits: ["confirm"], setup(J, { expose: g, emit: C }) {
  const w = C, o = m(false), p = m(), k = m(false), l = Q({ type: x, nav_id: "", name: "", url: "", target: $, agent_class_id: "", agent_id: "" }), T = m({}), S = m([x, K, U].map((e) => ({ value: e, label: ne.get(e) }))), i = m([{ value: "\u9996\u9875", label: "\u9996\u9875", url: "https://www.doubao.com/chat/" }, { value: "AI\u767E\u5B9D\u7BB1", label: "AI\u767E\u5B9D\u7BB1", url: "https://www.doubao.com/chat/" }, { value: "\u4E9A\u9A6C\u900A\u5546\u54C1\u6807\u9898", label: "\u4E9A\u9A6C\u900A\u5546\u54C1\u6807\u9898", url: "https://www.doubao.com/chat/" }, { value: "AI\u77E5\u8BC6\u5E93", label: "AI\u77E5\u8BC6\u5E93", url: "https://www.doubao.com/chat/" }]), d = m([M, $].map((e) => ({ value: e, label: se.get(e) }))), z = m([{ value: "DeepSeek", label: "DeepSeek" }, { value: "Claude", label: "Claude" }, { value: "Gemini", label: "Gemini" }, { value: "GPT-4", label: "GPT-4" }]), V = m([{ value: "DeepSeek", label: "DeepSeek", url: "https://www.doubao.com/chat/" }, { value: "Claude", label: "Claude", url: "https://www.doubao.com/chat/" }, { value: "Gemini", label: "Gemini", url: "https://www.doubao.com/chat/" }, { value: "GPT-4", label: "GPT-4", url: "https://www.doubao.com/chat/" }]), s = ({ data: e = {} } = {}) => {
    o.value = !!e.id, l.type = e.type || x, l.nav_id = e.name || "", l.url = e.url || "", l.target = e.target || $, l.type !== U && (l.target = $), T.value = e, k.value = true;
  }, u = () => {
    k.value = false, A();
  }, A = () => {
    l.type = x, l.nav_id = "", l.url = "", l.target = $, l.agent_class_id = "", l.agent_id = "";
  }, f = () => {
    var _a, _b;
    l.url = ((_a = i.value.find((e) => e.value === l.nav_id)) == null ? void 0 : _a.url) || "", l.name = ((_b = i.value.find((e) => e.value === l.nav_id)) == null ? void 0 : _b.label) || "";
  }, h = () => {
    var _a, _b;
    l.url = ((_a = V.value.find((e) => e.value === l.agent_id)) == null ? void 0 : _a.url) || "", l.name = ((_b = V.value.find((e) => e.value === l.agent_id)) == null ? void 0 : _b.label) || "";
  }, I = () => {
    p.value.validate((e) => {
      e && (O.success(window.$t("action_save_success")), w("confirm", { data: l }), u());
    });
  };
  return g({ open: s, close: u, reset: A }), (e, r) => {
    const L = $e, c = ke, y = ee, F = ye, R = Ee, ie = Z, de = le, W = H, ue = te;
    return _(), E(ue, { title: e.$t(o.value ? "action_edit" : "action_create"), "close-on-click-modal": false, width: "680px", "append-to-body": "", modelValue: k.value, "onUpdate:modelValue": r[6] || (r[6] = (n) => k.value = n), onClose: u }, { footer: a(() => [N("div", Ie, [t(W, { class: "w-[96px] h-[36px]", type: "primary", onClick: I }, { default: a(() => [b(v(e.$t("action_confirm")), 1)]), _: 1 }), t(W, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: G(u, ["stop"]) }, { default: a(() => [b(v(e.$t("action_cancel")), 1)]), _: 1 })])]), default: a(() => [t(de, { ref_key: "form_ref", ref: p, model: l, "label-position": "left", "label-width": "78px" }, { default: a(() => [t(y, { label: e.$t("module.nav_type") }, { default: a(() => [t(c, { modelValue: l.type, "onUpdate:modelValue": r[0] || (r[0] = (n) => l.type = n), size: "large" }, { default: a(() => [(_(true), P(D, null, B(S.value, (n) => (_(), E(L, { key: n.value, label: n.value }, { default: a(() => [b(v(n.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), l.type !== Y(U) ? (_(), E(y, { key: 0, label: e.$t("module.nav_name") }, { default: a(() => [t(R, { modelValue: l.nav_id, "onUpdate:modelValue": r[1] || (r[1] = (n) => l.nav_id = n), size: "large", placeholder: e.$t("module.nav_name_placeholder"), onChange: f }, { default: a(() => [(_(true), P(D, null, B(i.value, (n) => (_(), E(F, { key: n.value, label: n.label, value: n.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])) : (_(), E(y, { key: 1, label: e.$t("action_select") }, { default: a(() => [N("div", Se, [t(R, { class: "flex-none !w-[160px]", modelValue: l.agent_class_id, "onUpdate:modelValue": r[2] || (r[2] = (n) => l.agent_class_id = n), size: "large", placeholder: e.$t("module.nav_agent_class_placeholder") }, { default: a(() => [(_(true), P(D, null, B(z.value, (n) => (_(), E(F, { key: n.value, label: n.label, value: n.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"]), t(R, { class: "flex-1", modelValue: l.agent_id, "onUpdate:modelValue": r[3] || (r[3] = (n) => l.agent_id = n), size: "large", placeholder: e.$t("module.nav_agent_placeholder"), onChange: h }, { default: a(() => [(_(true), P(D, null, B(V.value, (n) => (_(), E(F, { key: n.value, label: n.label, value: n.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])])]), _: 1 }, 8, ["label"])), t(y, { label: e.$t("module.nav_url") }, { default: a(() => [t(ie, { modelValue: l.url, "onUpdate:modelValue": r[4] || (r[4] = (n) => l.url = n), disabled: "", size: "large", placeholder: e.$t("form_select_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), t(y, { label: e.$t("module.nav_target") }, { default: a(() => [t(R, { modelValue: l.target, "onUpdate:modelValue": r[5] || (r[5] = (n) => l.target = n), disabled: l.type !== Y(U), size: "large", placeholder: e.$t("module.nav_target_placeholder") }, { default: a(() => [(_(true), P(D, null, B(d.value, (n) => (_(), E(F, { key: n.value, label: n.label, value: n.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} }), Ne = { class: "w-full py-3 px-6 box-border rounded flex flex-row items-center bg-white", style: { "box-shadow": "0 5px 15px rgba(22, 23, 26, 0.1)" } }, ze = { class: "mt-5 rounded py-9 px-10 bg-white" }, Ge = { class: "pr-3 sort-icon cursor-move" }, Pe = j({ __name: "pc-navigation-pane", setup(J) {
  const g = m(), C = m(), w = m(), o = m(JSON.parse(JSON.stringify(Ae))), p = ce(() => o.value.filter((s) => s.visible)), k = ({ data: s = {} } = {}) => {
    s.url && window.open(s.url, "_blank");
  }, l = ({ data: s = {} } = {}) => {
    C.value.open({ data: s });
  }, T = async ({ data: s = {}, index: u = -1 } = {}) => {
    await fe.confirm(window.$t("module.action_delete_confirm"), window.$t("action_delete_tip")), u > 0 && o.value.splice(u, 1), O.success(window.$t("action_delete_success"));
  }, S = ({ data: s = {} } = {}) => {
    w.value.open({ data: s });
  }, i = async ({ data: s = {} } = {}) => {
    if (!s.id) {
      s.id = o.value.length + 1;
      const u = o.value;
      u.push(s), o.value = [], await q(), o.value = u;
    }
  };
  let d = null;
  const z = () => {
    if (!g.value || !g.value.$el || !o.value.length)
      return;
    const s = g.value.$el.querySelector(".el-table__body tbody");
    d = Ve.create(s, { onStart: (u = {}) => {
      const { target: A, oldIndex: f } = u;
      A.children[f].style.background = "#ECF5FF";
    }, onEnd: async (u = {}) => {
      const { from: A = {}, to: f = {}, target: h, newIndex: I, oldIndex: e } = u;
      if (h.children && h.children[I] && (h.children[I].style.background = "transparent"), I === e)
        return;
      const r = o.value, L = r.splice(e, 1)[0];
      r.splice(I, 0, L), o.value = [], await q(), o.value = [...r].map((c, y) => ({ ...c, sort: y })), O.success(window.$t("action_sort_success"));
    } });
  }, V = () => {
    d && (d.destroy(), d = null);
  };
  return _e(() => {
    V();
  }), pe(() => o.value, async () => {
    V(), await q(), z();
  }, { deep: true, immediate: true }), (s, u) => {
    const A = ae, f = oe, h = H, I = me, e = ge, r = he, L = we;
    return _(), P(D, null, [N("div", Ne, [u[0] || (u[0] = N("img", { class: "flex-none w-10 h-10 object-contain", src: "https://img.js.design/assets/img/61889010bb6d5d11bc62c2b8.png#029311e2b191cdf96801016808d17a46", alt: "" }, null, -1)), t(f, { class: "flex-1 w-0 ml-8" }, { default: a(() => [(_(true), P(D, null, B(p.value, (c) => (_(), E(A, { key: c.name, label: c.name, name: c.name }, null, 8, ["label", "name"]))), 128))]), _: 1 }), t(h, { class: "flex-none w-[128px] h-[36px] ml-8 border-none", type: "primary", plain: "", onClick: G(S, ["stop"]) }, { default: a(() => [b(" \u6DFB\u52A0(" + v(p.value.length) + "/" + v(o.value.length) + ") ", 1)]), _: 1 })]), N("div", ze, [t(L, { ref_key: "table_ref", ref: g, class: "w-full rounded", data: o.value, "header-cell-style": { background: "#F6F7F8", height: "60px" }, "cell-style": { height: "66px" }, height: "calc(100vh - 296px)" }, { default: a(() => [t(e, { width: "40" }, { default: a(() => [N("div", Ge, [t(I, { name: "drag", width: "24px", height: "32px", color: "#a1a5af" })])]), _: 1 }), t(e, { prop: "name", label: s.$t("module.nav_name"), "min-width": "120", "show-overflow-tooltip": "" }, null, 8, ["label"]), t(e, { label: s.$t("module.nav_type"), "show-overflow-tooltip": "", "min-width": "100" }, { default: a(({ row: c = {} }) => [b(v(Y(ne).get(c.type)), 1)]), _: 1 }, 8, ["label"]), t(e, { label: s.$t("module.nav_target"), "show-overflow-tooltip": "", "min-width": "100" }, { default: a(({ row: c = {} }) => [b(v(Y(se).get(c.target)), 1)]), _: 1 }, 8, ["label"]), t(e, { label: s.$t("module.nav_visible"), width: "120" }, { default: a((c) => [t(r, { modelValue: c.row.visible, "onUpdate:modelValue": (y) => c.row.visible = y, size: "default" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }, 8, ["label"]), t(e, { label: s.$t("module.nav_operation"), align: "right", width: "180", fixed: "right" }, { default: a(({ row: c = {}, $index: y }) => [t(h, { class: "h-auto !p-0 leading-none text-[#576D9C]", type: "text", size: "default", onClick: G((F) => S({ data: c }), ["stop"]) }, { default: a(() => [b(v(s.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), t(h, { class: "h-auto !p-0 leading-none text-[#576D9C]", type: "text", size: "default", onClick: G((F) => k({ data: c }), ["stop"]) }, { default: a(() => [b(v(s.$t("action_preview")), 1)]), _: 2 }, 1032, ["onClick"]), t(h, { class: "h-auto !p-0 leading-none text-[#576D9C]", type: "text", size: "default", onClick: G((F) => l({ data: c }), ["stop"]) }, { default: a(() => [b(v(s.$t("module.nav_operation_seo")), 1)]), _: 2 }, 1032, ["onClick"]), t(h, { class: "h-auto !p-0 leading-none text-[#576D9C]", type: "text", size: "default", onClick: G((F) => T({ data: c, index: y }), ["stop"]) }, { default: a(() => [b(v(s.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data"])]), t(Te, { ref_key: "seo_setting_dialog_ref", ref: C }, null, 512), t(Fe, { ref_key: "nav_create_dialog_ref", ref: w, onConfirm: i }, null, 512)], 64);
  };
} });
const X = ve(Pe, [["__scopeId", "data-v-c47bfafb"]]), Xe = j({ __name: "index", setup(J) {
  const g = m("pc"), C = () => {
  }, w = () => {
  };
  return (o, p) => {
    const k = H, l = be, T = ae, S = oe, i = re;
    return _(), E(i, { class: "px-[60px] py-8" }, { default: a(() => [t(l, { title: o.$t("module.navigation") }, { right: a(() => [t(k, { class: "bg-transparent w-[96px] h-[36px] text-[#1D1E1F]", plain: "", onClick: C }, { default: a(() => p[1] || (p[1] = [b(" \u9884\u89C8 ")])), _: 1 })]), _: 1 }, 8, ["title"]), t(S, { class: "mt-2", modelValue: g.value, "onUpdate:modelValue": p[0] || (p[0] = (d) => g.value = d), onTabClick: w }, { default: a(() => [t(T, { label: o.$t("module.pc_navigation"), name: "pc", lazy: "" }, { default: a(() => [t(X)]), _: 1 }, 8, ["label"]), t(T, { label: o.$t("module.mobile_navigation"), name: "mobile", lazy: "" }, { default: a(() => [t(X)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["modelValue"])]), _: 1 });
  };
} });
export {
  Xe as default
};
