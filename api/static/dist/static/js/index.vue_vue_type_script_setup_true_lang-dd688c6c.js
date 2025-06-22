import { X as R, bB as q, n as T, bC as M, y as U, r as $, Y as K, o as Y, a as j, $ as H, m as P, b as C, c as N, s as x, F as X, K as z, e as G } from "./index-8579fe4a.js";
import { S as Q } from "./sortable.esm-7ba019b6.js";
import { t as L, g as W } from "./position-4ca9dd9d.js";
const p = "ElInfiniteScroll", Z = 50, ee = 200, te = 0, ne = { delay: { type: Number, default: ee }, distance: { type: Number, default: te }, disabled: { type: Boolean, default: false }, immediate: { type: Boolean, default: true } }, O = (e, l) => Object.entries(ne).reduce((a, [t, o]) => {
  var v, n;
  const { type: b, default: c } = o, d = e.getAttribute(`infinite-scroll-${t}`);
  let u = (n = (v = l[d]) != null ? v : d) != null ? n : c;
  return u = u === "false" ? false : u, u = b(u), a[t] = Number.isNaN(u) ? c : u, a;
}, {}), A = (e) => {
  const { observer: l } = e[p];
  l && (l.disconnect(), delete e[p].observer);
}, oe = (e, l) => {
  const { container: a, containerEl: t, instance: o, observer: v, lastScrollTop: n } = e[p], { disabled: b, distance: c } = O(e, o), { clientHeight: d, scrollHeight: u, scrollTop: E } = t, V = E - n;
  if (e[p].lastScrollTop = E, v || b || V < 0)
    return;
  let w = false;
  if (a === e)
    w = u - (d + E) <= c;
  else {
    const { clientTop: B, scrollHeight: _ } = e, r = W(e, t);
    w = E + d >= r + B + _ - c;
  }
  w && l.call(o);
};
function k(e, l) {
  const { containerEl: a, instance: t } = e[p], { disabled: o } = O(e, t);
  o || a.clientHeight === 0 || (a.scrollHeight <= a.clientHeight ? l.call(t) : A(e));
}
const le = { async mounted(e, l) {
  const { instance: a, value: t } = l;
  R(t) || q(p, "'v-infinite-scroll' binding value must be a function"), await T();
  const { delay: o, immediate: v } = O(e, a), n = M(e, true), b = n === window ? document.documentElement : n, c = L(oe.bind(null, e, t), o);
  if (n) {
    if (e[p] = { instance: a, container: n, containerEl: b, delay: o, cb: t, onScroll: c, lastScrollTop: b.scrollTop }, v) {
      const d = new MutationObserver(L(k.bind(null, e, t), Z));
      e[p].observer = d, d.observe(e, { childList: true, subtree: true }), k(e, t);
    }
    n.addEventListener("scroll", c);
  }
}, unmounted(e) {
  if (!e[p])
    return;
  const { container: l, onScroll: a } = e[p];
  l == null ? void 0 : l.removeEventListener("scroll", a), A(e);
}, async updated(e) {
  if (!e[p])
    await T();
  else {
    const { containerEl: l, cb: a, observer: t } = e[p];
    l.clientHeight && t && k(e, a);
  }
} }, F = le;
F.install = (e) => {
  e.directive("InfiniteScroll", F);
};
const ae = F;
const re = ["id", "infinite-scroll-immediate", "infinite-scroll-distance"], se = ["data-sortable-data"], ue = U({ __name: "index", props: { modelValue: { default: () => [] }, props: { default: { handle: ".sort-icon", animation: 150 } }, dragBg: { default: "#ECF5FF" }, identity: { default: "id" }, customSortableId: { default: "" }, forceRender: { type: Boolean, default: false }, infiniteScrollImmediate: { type: Boolean, default: false }, infiniteScrollDistance: { default: 20 }, disabled: { type: Boolean, default: false }, group: { default: void 0 }, sort: { type: Boolean, default: true }, allowCrossInstanceDrag: { type: Boolean, default: false } }, emits: ["update:modelValue", "change", "start", "end", "scroll"], setup(e, { expose: l, emit: a }) {
  const t = e, o = a, v = `sort_${Math.random().toString(36).substr(2, 9)}`, n = $([]), b = $(false), c = K(() => t.customSortableId || v);
  Y(() => {
    E();
  }), j(() => {
    V();
  });
  let d = null, u = false;
  const E = () => {
    if (t.disabled)
      return;
    const r = document.querySelector(`#${c.value}`);
    if (!r)
      return;
    const S = { group: t.group || (t.allowCrossInstanceDrag ? "shared" : void 0), sort: t.sort, onStart: (g = {}) => {
      var _a;
      const { target: f, oldIndex: m } = g;
      o("start", g), ((_a = f == null ? void 0 : f.children) == null ? void 0 : _a[m]) && (f.children[m].style.background = t.dragBg);
    }, onEnd: (g = {}) => {
      var _a;
      const { from: f = {}, to: m = {}, target: h, newIndex: s, oldIndex: I } = g;
      if (o("end", g), ((_a = h == null ? void 0 : h.children) == null ? void 0 : _a[s]) && (h.children[s].style.background = "transparent"), f === m && s !== I) {
        if (u)
          return u = false;
        const i = [...n.value], y = JSON.parse(JSON.stringify(i)), D = i.splice(I, 1)[0], J = i[s];
        i.splice(s, 0, D), n.value = i, o("update:modelValue", i), o("change", { action: "sort", prevValue: y, value: i, originSortableId: f.id, targetSortableId: m.id, originData: D, targetData: J, originIndex: I, targetIndex: s });
      }
    }, onAdd: (g = {}) => {
      var _a;
      const { from: f = {}, to: m = {}, target: h, newIndex: s, oldIndex: I, item: i } = g;
      ((_a = h == null ? void 0 : h.children) == null ? void 0 : _a[s]) && (h.children[s].style.background = "transparent");
      const y = [...n.value], D = JSON.parse(i.dataset.sortableData || "{}");
      y.splice(s, 0, D), n.value = y, o("update:modelValue", y), o("change", { action: "add", value: y, originSortableId: f.id, targetSortableId: m.id, originIndex: I, targetIndex: s, newItem: D });
    }, onRemove: (g = {}) => {
      var _a;
      const { from: f = {}, to: m = {}, target: h, newIndex: s, oldIndex: I } = g;
      ((_a = h == null ? void 0 : h.children) == null ? void 0 : _a[s]) && (h.children[s].style.background = "transparent");
      const i = [...n.value], y = i.splice(I, 1)[0];
      n.value = i, u = true, o("update:modelValue", i), o("change", { action: "remove", value: i, originSortableId: f.id, targetSortableId: m.id, originIndex: I, targetIndex: s, removedItem: y });
    }, ...t.props };
    d = Q.create(r, S);
  }, V = () => {
    d && (d.destroy(), d = null);
  };
  let w = 0;
  const B = (r) => {
    const S = document.querySelector(`#${c.value}`);
    S && (w = (S == null ? void 0 : S.scrollTop) || 0), o("scroll", { scrollTop: w });
  }, _ = async () => {
    V(), n.value = [], b.value = true, await T(), b.value = false, await T(), n.value = [...t.modelValue], await T(), E();
  };
  return H(() => t.modelValue, async () => {
    const { forceRender: r = false } = t;
    if (r && await _(), n.value = [...t.modelValue], r) {
      await T();
      const S = document.querySelector(`#${c.value}`);
      S && (S.scrollTop = w);
    }
  }, { immediate: true, deep: true }), H(() => t.disabled, async (r) => {
    _();
  }), l({ rerender: _ }), (r, S) => {
    const g = ae;
    return b.value ? G("", true) : P((C(), N("div", { key: 0, id: c.value, "infinite-scroll-immediate": r.infiniteScrollImmediate, "infinite-scroll-distance": r.infiniteScrollDistance }, [x(r.$slots, "header"), (C(true), N(X, null, z(n.value, (f, m) => (C(), N("div", { key: f[r.identity] || m, "data-sortable-data": JSON.stringify(f) }, [x(r.$slots, "item", { item: f, index: m })], 8, se))), 128)), x(r.$slots, "footer")], 8, re)), [[g, B]]);
  };
} });
export {
  ue as _
};
