import { a0 as q, x as N, E as Q, b as Z, _ as ee, Y as te, e as ae, g as le, v as se } from "./element-plus-c72880c6.js";
import { _ as ne } from "./index.vue_vue_type_script_setup_true_lang-2b51690f.js";
import { g as oe, _ as ie, f as re } from "./index-226b5715.js";
import { d as P } from "./debounce-f4e6390f.js";
import { d as $, e as g, f as T, o as p, c as V, a as n, M as c, u as k, F as de, i as ue, n as pe, an as ce, S as I, J as S, ae as fe, K as r, A as _e, G as D, B as me, a2 as E, P as L, H, ac as ge, ad as ve } from "./@vue-3b855f7b.js";
import { M as he } from "./@element-plus-0cfad8bb.js";
const xe = { class: "flex justify-between items-center py-4" }, ye = ["innerHTML"], Ce = $({ __name: "index", props: { total: { default: 0 }, pageSize: { default: 20 }, page: { default: 1 }, layout: { default: "prev, pager, next, jumper" }, pageSizes: { default: () => [10, 20, 30, 40, 50, 100] } }, emits: ["currentChange", "update:page", "sizeChange", "update:pageSize"], setup(x, { emit: z }) {
  const f = x, a = g(f.page), d = g(f.pageSize), _ = z, w = P((l) => {
    a.value = l, _("currentChange", l), _("update:page", l);
  }, 200, true), y = P((l) => {
    d.value = l, _("sizeChange", l), _("update:pageSize", l);
  }, 800, true);
  return T(() => f.page, (l) => {
    a.value = l;
  }, { immediate: true }), T(() => f.pageSize, (l) => {
    d.value = l;
  }, { immediate: true }), (l, v) => {
    const C = q;
    return p(), V("div", xe, [n("div", { class: "text-sm text-[#666]", innerHTML: l.$t("table_footer_text", { total: `<span class='text-[#2563eb]'>${l.total}</span>` }) }, null, 8, ye), c(C, { "current-page": a.value, "page-size": d.value, "page-sizes": l.pageSizes, layout: l.layout, total: l.total, onCurrentChange: k(w), onSizeChange: k(y) }, null, 8, ["current-page", "page-size", "page-sizes", "layout", "total", "onCurrentChange", "onSizeChange"])]);
  };
} }), be = ({ mountedCallFun: x, updatedCallFun: z, unmountedCallFun: f }) => $({ props: ["vnode"], setup(a, d) {
}, mounted() {
  x(this.$el);
}, render(a, d) {
  return a.vnode;
} }), Se = { class: "flex border-b pb-4", style: { height: "350px" } }, ke = { class: "flex-1 flex flex-col overflow-y-auto" }, ze = { class: "flex-1 overflow-y-auto" }, we = { class: "el-checkbox-group" }, Fe = { class: "flex-1 flex flex-col" }, Be = { class: "flex-none h-8 flex items-center" }, Ee = { class: "pr-3 sort-icon cursor-move" }, Le = { class: "flex-1 text-sm text-[#182B50] truncate" }, Ve = 30, $e = $({ __name: "index", props: { type: { default: "" }, page: { default: 1 }, limit: { default: 10 }, total: { default: 0 }, prefix: { default: "" }, pagination: { type: Boolean, default: true }, fixedFields: { default: () => [] }, hiddenProps: { default: () => [] }, insertIndex: {}, loading: { type: Boolean, default: false } }, emits: ["pageSizeChange", "pageCurrentChange"], setup(x, { expose: z, emit: f }) {
  const a = x, d = f, _ = g(), w = de(), y = g([]), l = be({ mountedCallFun() {
  }, updatedCallFun() {
  }, unmountedCallFun() {
  } }), v = g(false), C = g([]), i = g([]), R = (...e) => {
    d("pageSizeChange", ...e);
  }, U = (...e) => {
    d("pageCurrentChange", ...e);
  }, j = (e) => ve(N, { prop: e.prop, label: e.label, showOverflowTooltip: true, formatter: (t, u, h) => h || "--" }), O = () => {
    v.value = true;
  }, A = (e, t) => {
    e ? i.value.push({ ...t }) : i.value = i.value.filter((u) => u.id !== t.id);
  }, B = async () => {
    a.type.split("user_memory_list_")[1];
    let e = [], t = [];
    e = [], t = [];
    const u = w.default();
    C.value = e, a.fixedFields && a.fixedFields.length && a.fixedFields.forEach((s = "") => {
      t.includes(s) || t.unshift(s);
    }), t && t.length ? i.value = t.map((s) => e.find((b) => b.field_key === s)).filter((s) => s).map((s) => ({ ...s })) : i.value = e.map((s) => ({ ...s }));
    const h = i.value.map((s) => j({ prop: a.prefix + s.field_key, label: s.field_name }));
    let m = [];
    if (Number(a.insertIndex) > -1) {
      const s = u.slice(0, a.insertIndex), b = u.slice(a.insertIndex);
      m = [...s, ...h, ...b];
    } else
      m = [...h, ...u];
    a.hiddenProps && a.hiddenProps.length && (m = m.filter(({ props: { prop: s = "" } = {} } = {}) => !a.hiddenProps.includes(s))), y.value = m;
  }, J = () => {
    v.value = false;
  }, G = async () => {
    /^user_memory_list/im.test(a.type) && (await oe.console.user_setting.save(a.type, { value: JSON.stringify(i.value.map((e) => e.field_key)) }), B()), Q.success("\u5DF2\u8BBE\u7F6E"), v.value = false;
  };
  return ue(() => {
    pe(() => {
      if (/^user_memory_list/im.test(a.type))
        B();
      else {
        const e = w.default();
        y.value = e;
      }
    });
  }), z({ toggleRowSelection(...e) {
    _.value.toggleRowSelection(...e);
  }, refresh: () => {
    B();
  } }), (e, t) => {
    const u = Z, h = ee, m = Ce, s = te, b = ie, K = ne, M = ae, W = le, X = se, Y = ce("debounce");
    return p(), V(H, null, [I((p(), S(h, me({ ref_key: "tableRef", ref: _ }, { ...e.$attrs }), fe({ default: r(() => [c(k(l), { vnode: y.value }, null, 8, ["vnode"]), C.value.length ? (p(), S(k(N), { key: 0, "class-name": "table-setting", prop: "system_setting", label: "", width: "20", align: "center", fixed: "right" }, { header: r((o) => [n("div", { class: "cursor-pointer", onClick: O }, [c(u, null, { default: r(() => [c(k(he))]), _: 1 })])]), _: 1 })) : D("", true)]), _: 2 }, [e.$slots.empty ? { name: "empty", fn: r(() => [_e(e.$slots, "empty", {}, void 0, true)]), key: "0" } : void 0]), 1040)), [[X, e.loading]]), e.pagination ? (p(), S(m, { key: 0, layout: "sizes, prev, pager, next, jumper", page: e.page, "page-size": e.limit, total: e.total, onSizeChange: R, onCurrentChange: U }, null, 8, ["page", "page-size", "total"])) : D("", true), c(W, { modelValue: v.value, "onUpdate:modelValue": t[1] || (t[1] = (o) => v.value = o), title: "\u5217\u8868\u663E\u793A\u8BBE\u7F6E", width: "660px" }, { footer: r(() => [c(M, { size: "large", type: "default", onClick: J }, { default: r(() => t[5] || (t[5] = [E(" \u53D6\u6D88 ")])), _: 1 }), I((p(), S(M, { size: "large", type: "primary", onClick: G }, { default: r(() => t[6] || (t[6] = [E(" \u4FDD\u5B58 ")])), _: 1 })), [[Y]])]), default: r(() => [n("div", Se, [n("div", ke, [n("div", { class: "flex-none text-sm mb-3" }, [t[2] || (t[2] = n("span", { class: "text-[#182B50]" }, " \u9700\u663E\u793A\u7684\u5B57\u6BB5 ", -1)), n("span", { class: "text-[#182B5066]" }, " \uFF08\u6700\u591A\u5C55\u793A" + L(Ve) + "\u4E2A\uFF09 ")]), n("div", ze, [n("div", we, [(p(true), V(H, null, ge(C.value, (o) => (p(), S(s, { key: o.field_key, disabled: e.fixedFields.includes(o.field_key) || i.value.length === 1 && o.field_key === i.value[0].field_key, checked: !!i.value.find((F) => F.field_key === o.field_key), value: o.field_key, onChange: (F) => A(F, o) }, { default: r(() => [E(L(o.field_name), 1)]), _: 2 }, 1032, ["disabled", "checked", "value", "onChange"]))), 128))])])]), t[4] || (t[4] = n("div", { class: "border-l mx-4" }, null, -1)), n("div", Fe, [t[3] || (t[3] = n("div", { class: "flex-none text-sm mb-3" }, [n("span", { class: "text-[#182B50]" }, " \u663E\u793A\u987A\u5E8F "), n("span", { class: "text-[#182B5066]" }, " \uFF08\u62D6\u52A8\u5206\u7EC4\u8C03\u6574\u5206\u7EC4\u987A\u5E8F\uFF09 ")], -1)), c(K, { modelValue: i.value, "onUpdate:modelValue": t[0] || (t[0] = (o) => i.value = o), identity: "id", class: "flex-1 w-full flex flex-col gap-1 overflow-y-auto" }, { item: r(({ item: o, index: F }) => [n("div", Be, [n("div", Ee, [c(b, { name: "drag", width: "16px", height: "32px", color: "#a1a5af" })]), n("div", Le, L(o.field_name), 1)])]), _: 1 }, 8, ["modelValue"])])])]), _: 1 }, 8, ["modelValue"])], 64);
  };
} });
const He = re($e, [["__scopeId", "data-v-7a452631"]]);
export {
  He as _
};
