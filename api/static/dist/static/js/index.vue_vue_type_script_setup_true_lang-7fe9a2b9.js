import { m as O, aE as $, W as T, aF as A, u as q, r as D, al as R, o as M, a as U, aG as G, g as J, b as N, c as B, q as _, F as j, G as K, e as P } from "./index-7b696e01.js";
import { S as W } from "./sortable.esm-437f0071.js";
import { t as V, g as Y } from "./position-df18ca50.js";
const g = "ElInfiniteScroll", z = 50, Q = 200, X = 0, Z = { delay: { type: Number, default: Q }, distance: { type: Number, default: X }, disabled: { type: Boolean, default: false }, immediate: { type: Boolean, default: true } }, k = (e, l) => Object.entries(Z).reduce((n, [t, b]) => {
  var d, r;
  const { type: p, default: u } = b, f = e.getAttribute(`infinite-scroll-${t}`);
  let m = (r = (d = l[f]) != null ? d : f) != null ? r : u;
  return m = m === "false" ? false : m, m = p(m), n[t] = Number.isNaN(m) ? u : m, n;
}, {}), C = (e) => {
  const { observer: l } = e[g];
  l && (l.disconnect(), delete e[g].observer);
}, ee = (e, l) => {
  const { container: n, containerEl: t, instance: b, observer: d, lastScrollTop: r } = e[g], { disabled: p, distance: u } = k(e, b), { clientHeight: f, scrollHeight: m, scrollTop: h } = t, y = h - r;
  if (e[g].lastScrollTop = h, d || p || y < 0)
    return;
  let E = false;
  if (n === e)
    E = m - (f + h) <= u;
  else {
    const { clientTop: a, scrollHeight: o } = e, i = Y(e, t);
    E = h + f >= i + a + o - u;
  }
  E && l.call(b);
};
function w(e, l) {
  const { containerEl: n, instance: t } = e[g], { disabled: b } = k(e, t);
  b || n.clientHeight === 0 || (n.scrollHeight <= n.clientHeight ? l.call(t) : C(e));
}
const te = { async mounted(e, l) {
  const { instance: n, value: t } = l;
  O(t) || $(g, "'v-infinite-scroll' binding value must be a function"), await T();
  const { delay: b, immediate: d } = k(e, n), r = A(e, true), p = r === window ? document.documentElement : r, u = V(ee.bind(null, e, t), b);
  if (r) {
    if (e[g] = { instance: n, container: r, containerEl: p, delay: b, cb: t, onScroll: u, lastScrollTop: p.scrollTop }, d) {
      const f = new MutationObserver(V(w.bind(null, e, t), z));
      e[g].observer = f, f.observe(e, { childList: true, subtree: true }), w(e, t);
    }
    r.addEventListener("scroll", u);
  }
}, unmounted(e) {
  if (!e[g])
    return;
  const { container: l, onScroll: n } = e[g];
  l == null ? void 0 : l.removeEventListener("scroll", n), C(e);
}, async updated(e) {
  if (!e[g])
    await T();
  else {
    const { containerEl: l, cb: n, observer: t } = e[g];
    l.clientHeight && t && w(e, n);
  }
} }, F = te;
F.install = (e) => {
  e.directive("InfiniteScroll", F);
};
const ne = F;
const oe = ["id", "infinite-scroll-immediate", "infinite-scroll-distance"], ie = q({ __name: "index", props: { modelValue: { default: () => [] }, props: { default: { handle: ".sort-icon", animation: 150 } }, dragBg: { default: "#ECF5FF" }, identity: { default: "id" }, customSortableId: { default: "" }, forceRender: { type: Boolean, default: false }, infiniteScrollImmediate: { type: Boolean, default: false }, infiniteScrollDistance: { default: 20 }, disabled: { type: Boolean, default: false } }, emits: ["update:modelValue", "change", "start", "end", "scroll"], setup(e, { emit: l }) {
  const n = e, t = l, b = `sort_${Math.random().toString(36).substr(2, 9)}`, d = D([]), r = D(false), p = R(() => n.customSortableId || b);
  M(() => {
    n.disabled || m();
  }), U(() => {
    h();
  });
  let u = null, f = false;
  const m = () => {
    const a = document.querySelector(`#${p.value}`);
    a && (u = W.create(a, { onStart: (o = {}) => {
      const { target: i, oldIndex: v } = o;
      t("start", o), i.children[v].style.background = n.props.dragBg;
    }, onEnd: (o = {}) => {
      const { from: i = {}, to: v = {}, target: s, newIndex: c, oldIndex: I } = o;
      if (t("end", o), s.children && s.children[c] && (s.children[c].style.background = "transparent"), c === I)
        return;
      if (f)
        return f = false;
      const S = d.value, H = JSON.parse(JSON.stringify(S)), x = S.splice(I, 1)[0], L = S[c];
      S.splice(c, 0, x), t("update:modelValue", S), t("change", { action: "sort", prevValue: H, value: S, originSortableId: i.id, targetSortableId: v.id, originData: x, targetData: L, originIndex: I, targetIndex: c });
    }, onAdd: (o = {}) => {
      const { from: i = {}, to: v = {}, target: s, newIndex: c, oldIndex: I } = o;
      s.children && s.children[c] && (s.children[c].style.background = "transparent");
      const S = d.value;
      t("change", { action: "add", value: S, originSortableId: i.id, targetSortableId: v.id, originIndex: I, targetIndex: c });
    }, onRemove: (o = {}) => {
      const { from: i = {}, to: v = {}, target: s, newIndex: c, oldIndex: I } = o;
      s.children && s.children[c] && (s.children[c].style.background = "transparent");
      const S = d.value;
      f = true, t("change", { action: "remove", value: S, originSortableId: i.id, targetSortableId: v.id, originIndex: I, targetIndex: c });
    }, ...n.props }));
  }, h = () => {
    u && (u.destroy(), u = null);
  };
  let y = 0;
  const E = (a) => {
    const o = document.querySelector(`#${p.value}`);
    o && (y = (o == null ? void 0 : o.scrollTop) || 0), t("scroll", { scrollTop: y });
  };
  return G(() => n.modelValue, async (a = []) => {
    const { forceRender: o = false } = n;
    if (o && (h(), d.value = [], r.value = true, await T(), r.value = false, await T(), m()), d.value = a, o) {
      await T();
      const i = document.querySelector(`#${p.value}`);
      i && (i.scrollTop = y);
    }
  }, { immediate: true, deep: true }), (a, o) => {
    const i = ne;
    return r.value ? P("", true) : J((N(), B("div", { key: 0, id: p.value, "infinite-scroll-immediate": a.infiniteScrollImmediate, "infinite-scroll-distance": a.infiniteScrollDistance }, [_(a.$slots, "header"), (N(true), B(j, null, K(d.value, (v, s) => _(a.$slots, "item", { key: v[a.identity] || s, item: v, index: s })), 128)), _(a.$slots, "footer")], 8, oe)), [[i, E]]);
  };
} });
export {
  ie as _
};
