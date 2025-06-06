import { a1 as V } from "./element-plus-c72880c6.js";
import { S as F } from "./sortablejs-437f0071.js";
import { d as T, e as y, j as q, i as C, D as N, f as R, n as S, S as A, o as x, c as _, A as I, H as J, ac as M, G as O } from "./@vue-3b855f7b.js";
const j = ["id", "infinite-scroll-immediate", "infinite-scroll-distance"], U = T({ __name: "index", props: { modelValue: { default: () => [] }, props: { default: { handle: ".sort-icon", animation: 150 } }, dragBg: { default: "#ECF5FF" }, identity: { default: "id" }, customSortableId: { default: "" }, forceRender: { type: Boolean, default: false }, infiniteScrollImmediate: { type: Boolean, default: false }, infiniteScrollDistance: { default: 20 }, disabled: { type: Boolean, default: false } }, emits: ["update:modelValue", "change", "start", "end", "scroll"], setup(k, { emit: w }) {
  const d = k, i = w, B = `sort_${Math.random().toString(36).substr(2, 9)}`, c = y([]), m = y(false), u = q(() => d.customSortableId || B);
  C(() => {
    d.disabled || b();
  }), N(() => {
    h();
  });
  let f = null, g = false;
  const b = () => {
    const o = document.querySelector(`#${u.value}`);
    o && (f = F.create(o, { onStart: (e = {}) => {
      const { target: a, oldIndex: r } = e;
      i("start", e), a.children[r].style.background = d.props.dragBg;
    }, onEnd: (e = {}) => {
      const { from: a = {}, to: r = {}, target: t, newIndex: n, oldIndex: s } = e;
      if (i("end", e), t.children && t.children[n] && (t.children[n].style.background = "transparent"), n === s)
        return;
      if (g)
        return g = false;
      const l = c.value, $ = JSON.parse(JSON.stringify(l)), v = l.splice(s, 1)[0], D = l[n];
      l.splice(n, 0, v), i("update:modelValue", l), i("change", { action: "sort", prevValue: $, value: l, originSortableId: a.id, targetSortableId: r.id, originData: v, targetData: D, originIndex: s, targetIndex: n });
    }, onAdd: (e = {}) => {
      const { from: a = {}, to: r = {}, target: t, newIndex: n, oldIndex: s } = e;
      t.children && t.children[n] && (t.children[n].style.background = "transparent");
      const l = c.value;
      i("change", { action: "add", value: l, originSortableId: a.id, targetSortableId: r.id, originIndex: s, targetIndex: n });
    }, onRemove: (e = {}) => {
      const { from: a = {}, to: r = {}, target: t, newIndex: n, oldIndex: s } = e;
      t.children && t.children[n] && (t.children[n].style.background = "transparent");
      const l = c.value;
      g = true, i("change", { action: "remove", value: l, originSortableId: a.id, targetSortableId: r.id, originIndex: s, targetIndex: n });
    }, ...d.props }));
  }, h = () => {
    f && (f.destroy(), f = null);
  };
  let p = 0;
  const E = (o) => {
    const e = document.querySelector(`#${u.value}`);
    e && (p = (e == null ? void 0 : e.scrollTop) || 0), i("scroll", { scrollTop: p });
  };
  return R(() => d.modelValue, async (o = []) => {
    const { forceRender: e = false } = d;
    if (e && (h(), c.value = [], m.value = true, await S(), m.value = false, await S(), b()), c.value = o, e) {
      await S();
      const a = document.querySelector(`#${u.value}`);
      a && (a.scrollTop = p);
    }
  }, { immediate: true, deep: true }), (o, e) => {
    const a = V;
    return m.value ? O("", true) : A((x(), _("div", { key: 0, id: u.value, "infinite-scroll-immediate": o.infiniteScrollImmediate, "infinite-scroll-distance": o.infiniteScrollDistance }, [I(o.$slots, "header"), (x(true), _(J, null, M(c.value, (r, t) => I(o.$slots, "item", { key: r[o.identity] || t, item: r, index: t })), 128)), I(o.$slots, "footer")], 8, j)), [[a, E]]);
  };
} });
export {
  U as _
};
