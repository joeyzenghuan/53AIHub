import { y as S, h as j, Y as $, b as l, j as s, aH as O, w as n, d as c, c as i, u as f, G as _, ao as b, e as v, s as k, F as m, K as E, t as T, a3 as G, n as V, I as D } from "./index-8579fe4a.js";
import "./el-tag-0b6baecb.js";
import { E as F, b as L, a as N } from "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
const P = { class: "w-[24px] h-[24px] inline-block" }, H = ["src"], K = { class: "flex items-center gap-2" }, Y = { class: "flex-none size-6 flex items-center justify-center" }, q = ["src"], A = { class: "flex-1 truncate" }, J = { class: "size-6 inline-block mr-2" }, M = ["src"], Q = S({ __name: "index", props: { iconType: { default: "image" }, options: { default: () => [] }, filterable: { type: Boolean, default: true }, size: { default: "large" }, useI18n: { type: Boolean, default: true } }, emits: ["change"], setup(x, { emit: z }) {
  const y = x, B = z, g = j();
  if (!g)
    throw new Error("SelectPlus must be used within setup");
  const { proxy: h } = g, r = (e) => y.useI18n ? h.$t(e) : e, u = $(() => {
    const e = h.$attrs.modelValue;
    let p = { value: "", label: "" };
    return y.options.forEach((o) => {
      o.options ? o.options.forEach((d) => {
        d.value === e && (p = d);
      }) : o.value === e && (p = o);
    }), p;
  }), C = (e) => {
    V(() => {
      B("change", { value: e, option: u.value });
    });
  };
  return (e, p) => {
    const o = F, d = L, I = N;
    return l(), s(I, G(e.$attrs, { filterable: e.filterable, size: e.size, onChange: C }), O({ default: n(() => [k(e.$slots, "default", {}, () => [(l(true), i(m, null, E(e.options, (t) => (l(), i(m, { key: t.value }, [t.options ? (l(), s(d, { key: 0, label: r(t.label) }, { default: n(() => [(l(true), i(m, null, E(t.options, (a) => (l(), s(o, { key: a.value, label: r(a.label), value: a.value }, { default: n(() => [c("div", K, [c("div", Y, [e.iconType === "image" ? (l(), i("img", { key: 0, src: a.icon, class: "h-full inline-block object-cover" }, null, 8, q)) : e.iconType === "icon" ? (l(), s(f(_), { key: 1, class: "text-lg" }, { default: n(() => [(l(), s(b(a.icon)))]), _: 2 }, 1024)) : v("", true)]), c("span", A, T(r(a.label)), 1), k(e.$slots, "item_after", { data: a }, void 0, true)])]), _: 2 }, 1032, ["label", "value"]))), 128))]), _: 2 }, 1032, ["label"])) : (l(), s(o, { key: 1, label: r(t.label), value: t.value }, { default: n(() => [c("div", J, [e.iconType === "image" ? (l(), i("img", { key: 0, src: t.icon, class: "h-full inline-block object-cover" }, null, 8, M)) : e.iconType === "icon" ? (l(), s(f(_), { key: 1, class: "size-6 text-lg" }, { default: n(() => [(l(), s(b(t.icon)))]), _: 2 }, 1024)) : v("", true)]), c("span", null, T(r(t.label)), 1)]), _: 2 }, 1032, ["label", "value"]))], 64))), 128))], true)]), _: 2 }, [u.value.icon ? { name: "prefix", fn: n(() => [c("div", P, [e.iconType === "image" ? (l(), i("img", { key: 0, src: u.value.icon, class: "h-full inline-block object-cover" }, null, 8, H)) : e.iconType === "icon" ? (l(), s(f(_), { key: 1, class: "text-lg" }, { default: n(() => [(l(), s(b(u.value.icon)))]), _: 1 })) : v("", true)])]), key: "0" } : void 0]), 1040, ["filterable", "size"]);
  };
} });
const Z = D(Q, [["__scopeId", "data-v-e5f1c5b4"]]);
export {
  Z as _
};
