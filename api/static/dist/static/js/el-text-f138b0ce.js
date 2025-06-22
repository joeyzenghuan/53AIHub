import { aP as Me, bf as ze, y as J, r as w, bg as Fe, aU as H, Y as Ce, bF as $, o as ke, bG as ve, b as D, j as L, w as V, s as he, q as x, u as Pe, a7 as me, ao as be, a$ as te, cb as qe, b0 as Ee, cS as se, bq as je, ce as Z, Z as He, X as ee, b5 as Ke, bc as Re, cB as pe, n as de, aI as j, ad as ge, ax as W, b9 as ne, bb as Ue, c$ as _e, G as Ye, bz as We, h as De, $ as S, d0 as Je, aJ as B, m as re, p as ae, c as P, d as ie, x as A, e as _, f as oe, F as we, K as xe, c5 as Ge, bj as O, bm as Xe, aV as Ze, d1 as Qe, t as Ve } from "./index-8579fe4a.js";
import { s as et } from "./el-select-8a770a23.js";
import { E as tt } from "./el-checkbox-a21716fc.js";
const nt = Me({ type: { type: String, values: ["primary", "success", "info", "warning", "danger", ""], default: "" }, size: { type: String, values: ze, default: "" }, truncated: Boolean, lineClamp: { type: [String, Number] }, tag: { type: String, default: "span" } }), ot = J({ name: "ElText" }), st = J({ ...ot, props: nt, setup(t) {
  const e = t, n = w(), d = Fe(), o = H("text"), s = Ce(() => [o.b(), o.m(e.type), o.m(d.value), o.is("truncated", e.truncated), o.is("line-clamp", !$(e.lineClamp))]), r = () => {
    var l, c, p, a, f, h, g;
    if (qe().title)
      return;
    let k = false;
    const v = ((l = n.value) == null ? void 0 : l.textContent) || "";
    if (e.truncated) {
      const m = (c = n.value) == null ? void 0 : c.offsetWidth, b = (p = n.value) == null ? void 0 : p.scrollWidth;
      m && b && b > m && (k = true);
    } else if (!$(e.lineClamp)) {
      const m = (a = n.value) == null ? void 0 : a.offsetHeight, b = (f = n.value) == null ? void 0 : f.scrollHeight;
      m && b && b > m && (k = true);
    }
    k ? (h = n.value) == null || h.setAttribute("title", v) : (g = n.value) == null || g.removeAttribute("title");
  };
  return ke(r), ve(r), (l, c) => (D(), L(be(l.tag), { ref_key: "textRef", ref: n, class: x(Pe(s)), style: me({ "-webkit-line-clamp": l.lineClamp }) }, { default: V(() => [he(l.$slots, "default")]), _: 3 }, 8, ["class", "style"]));
} });
var dt = te(st, [["__file", "text.vue"]]);
const rt = Ee(dt), q = "$treeNodeId", Ne = function(t, e) {
  !e || e[q] || Object.defineProperty(e, q, { value: t.id, enumerable: false, configurable: false, writable: false });
}, ue = (t, e) => e == null ? void 0 : e[t || q], le = (t, e, n) => {
  const d = t.value.currentNode;
  n();
  const o = t.value.currentNode;
  d !== o && e("current-change", o ? o.data : null, o);
}, ce = (t) => {
  let e = true, n = true, d = true;
  for (let o = 0, s = t.length; o < s; o++) {
    const r = t[o];
    (r.checked !== true || r.indeterminate) && (e = false, r.disabled || (d = false)), (r.checked !== false || r.indeterminate) && (n = false);
  }
  return { all: e, none: n, allWithoutDisable: d, half: !e && !n };
}, Y = function(t) {
  if (t.childNodes.length === 0 || t.loading)
    return;
  const { all: e, none: n, half: d } = ce(t.childNodes);
  e ? (t.checked = true, t.indeterminate = false) : d ? (t.checked = false, t.indeterminate = true) : n && (t.checked = false, t.indeterminate = false);
  const o = t.parent;
  !o || o.level === 0 || t.store.checkStrictly || Y(o);
}, Q = function(t, e) {
  const n = t.store.props, d = t.data || {}, o = n[e];
  if (ee(o))
    return o(d, t);
  if (Ke(o))
    return d[o];
  if ($(o)) {
    const s = d[e];
    return $(s) ? "" : s;
  }
};
let at = 0;
class M {
  constructor(e) {
    this.id = at++, this.text = null, this.checked = false, this.indeterminate = false, this.data = null, this.expanded = false, this.parent = null, this.visible = true, this.isCurrent = false, this.canFocus = false;
    for (const n in e)
      se(e, n) && (this[n] = e[n]);
    this.level = 0, this.loaded = false, this.childNodes = [], this.loading = false, this.parent && (this.level = this.parent.level + 1);
  }
  initialize() {
    const e = this.store;
    if (!e)
      throw new Error("[Node]store is required!");
    e.registerNode(this);
    const n = e.props;
    if (n && typeof n.isLeaf < "u") {
      const s = Q(this, "isLeaf");
      je(s) && (this.isLeafByUser = s);
    }
    if (e.lazy !== true && this.data ? (this.setData(this.data), e.defaultExpandAll && (this.expanded = true, this.canFocus = true)) : this.level > 0 && e.lazy && e.defaultExpandAll && !this.isLeafByUser && this.expand(), Z(this.data) || Ne(this, this.data), !this.data)
      return;
    const d = e.defaultExpandedKeys, o = e.key;
    o && d && d.includes(this.key) && this.expand(null, e.autoExpandParent), o && e.currentNodeKey !== void 0 && this.key === e.currentNodeKey && (e.currentNode = this, e.currentNode.isCurrent = true), e.lazy && e._initDefaultCheckedNode(this), this.updateLeafState(), this.parent && (this.level === 1 || this.parent.expanded === true) && (this.canFocus = true);
  }
  setData(e) {
    Z(e) || Ne(this, e), this.data = e, this.childNodes = [];
    let n;
    this.level === 0 && Z(this.data) ? n = this.data : n = Q(this, "children") || [];
    for (let d = 0, o = n.length; d < o; d++)
      this.insertChild({ data: n[d] });
  }
  get label() {
    return Q(this, "label");
  }
  get key() {
    const e = this.store.key;
    return this.data ? this.data[e] : null;
  }
  get disabled() {
    return Q(this, "disabled");
  }
  get nextSibling() {
    const e = this.parent;
    if (e) {
      const n = e.childNodes.indexOf(this);
      if (n > -1)
        return e.childNodes[n + 1];
    }
    return null;
  }
  get previousSibling() {
    const e = this.parent;
    if (e) {
      const n = e.childNodes.indexOf(this);
      if (n > -1)
        return n > 0 ? e.childNodes[n - 1] : null;
    }
    return null;
  }
  contains(e, n = true) {
    return (this.childNodes || []).some((d) => d === e || n && d.contains(e));
  }
  remove() {
    const e = this.parent;
    e && e.removeChild(this);
  }
  insertChild(e, n, d) {
    if (!e)
      throw new Error("InsertChild error: child is required.");
    if (!(e instanceof M)) {
      if (!d) {
        const o = this.getChildren(true);
        o.includes(e.data) || ($(n) || n < 0 ? o.push(e.data) : o.splice(n, 0, e.data));
      }
      Object.assign(e, { parent: this, store: this.store }), e = He(new M(e)), e instanceof M && e.initialize();
    }
    e.level = this.level + 1, $(n) || n < 0 ? this.childNodes.push(e) : this.childNodes.splice(n, 0, e), this.updateLeafState();
  }
  insertBefore(e, n) {
    let d;
    n && (d = this.childNodes.indexOf(n)), this.insertChild(e, d);
  }
  insertAfter(e, n) {
    let d;
    n && (d = this.childNodes.indexOf(n), d !== -1 && (d += 1)), this.insertChild(e, d);
  }
  removeChild(e) {
    const n = this.getChildren() || [], d = n.indexOf(e.data);
    d > -1 && n.splice(d, 1);
    const o = this.childNodes.indexOf(e);
    o > -1 && (this.store && this.store.deregisterNode(e), e.parent = null, this.childNodes.splice(o, 1)), this.updateLeafState();
  }
  removeChildByData(e) {
    let n = null;
    for (let d = 0; d < this.childNodes.length; d++)
      if (this.childNodes[d].data === e) {
        n = this.childNodes[d];
        break;
      }
    n && this.removeChild(n);
  }
  expand(e, n) {
    const d = () => {
      if (n) {
        let o = this.parent;
        for (; o.level > 0; )
          o.expanded = true, o = o.parent;
      }
      this.expanded = true, e && e(), this.childNodes.forEach((o) => {
        o.canFocus = true;
      });
    };
    this.shouldLoadData() ? this.loadData((o) => {
      Z(o) && (this.checked ? this.setChecked(true, true) : this.store.checkStrictly || Y(this), d());
    }) : d();
  }
  doCreateChildren(e, n = {}) {
    e.forEach((d) => {
      this.insertChild(Object.assign({ data: d }, n), void 0, true);
    });
  }
  collapse() {
    this.expanded = false, this.childNodes.forEach((e) => {
      e.canFocus = false;
    });
  }
  shouldLoadData() {
    return this.store.lazy === true && this.store.load && !this.loaded;
  }
  updateLeafState() {
    if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser < "u") {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const e = this.childNodes;
    if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
      this.isLeaf = !e || e.length === 0;
      return;
    }
    this.isLeaf = false;
  }
  setChecked(e, n, d, o) {
    if (this.indeterminate = e === "half", this.checked = e === true, this.store.checkStrictly)
      return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all: r, allWithoutDisable: l } = ce(this.childNodes);
      !this.isLeaf && !r && l && (this.checked = false, e = false);
      const c = () => {
        if (n) {
          const p = this.childNodes;
          for (let h = 0, g = p.length; h < g; h++) {
            const y = p[h];
            o = o || e !== false;
            const k = y.disabled ? y.checked : o;
            y.setChecked(k, n, true, o);
          }
          const { half: a, all: f } = ce(p);
          f || (this.checked = f, this.indeterminate = a);
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          c(), Y(this);
        }, { checked: e !== false });
        return;
      } else
        c();
    }
    const s = this.parent;
    !s || s.level === 0 || d || Y(s);
  }
  getChildren(e = false) {
    if (this.level === 0)
      return this.data;
    const n = this.data;
    if (!n)
      return null;
    const d = this.store.props;
    let o = "children";
    return d && (o = d.children || "children"), $(n[o]) && (n[o] = null), e && !n[o] && (n[o] = []), n[o];
  }
  updateChildren() {
    const e = this.getChildren() || [], n = this.childNodes.map((s) => s.data), d = {}, o = [];
    e.forEach((s, r) => {
      const l = s[q];
      !!l && n.findIndex((p) => p[q] === l) >= 0 ? d[l] = { index: r, data: s } : o.push({ index: r, data: s });
    }), this.store.lazy || n.forEach((s) => {
      d[s[q]] || this.removeChildByData(s);
    }), o.forEach(({ index: s, data: r }) => {
      this.insertChild({ data: r }, s);
    }), this.updateLeafState();
  }
  loadData(e, n = {}) {
    if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(n).length)) {
      this.loading = true;
      const d = (s) => {
        this.childNodes = [], this.doCreateChildren(s, n), this.loaded = true, this.loading = false, this.updateLeafState(), e && e.call(this, s);
      }, o = () => {
        this.loading = false;
      };
      this.store.load(this, d, o);
    } else
      e && e.call(this);
  }
  eachNode(e) {
    const n = [this];
    for (; n.length; ) {
      const d = n.shift();
      n.unshift(...d.childNodes), e(d);
    }
  }
  reInitChecked() {
    this.store.checkStrictly || Y(this);
  }
}
class it {
  constructor(e) {
    this.currentNode = null, this.currentNodeKey = null;
    for (const n in e)
      se(e, n) && (this[n] = e[n]);
    this.nodesMap = {};
  }
  initialize() {
    if (this.root = new M({ data: this.data, store: this }), this.root.initialize(), this.lazy && this.load) {
      const e = this.load;
      e(this.root, (n) => {
        this.root.doCreateChildren(n), this._initDefaultCheckedNodes();
      });
    } else
      this._initDefaultCheckedNodes();
  }
  filter(e) {
    const n = this.filterNodeMethod, d = this.lazy, o = async function(s) {
      const r = s.root ? s.root.childNodes : s.childNodes;
      for (const [l, c] of r.entries())
        c.visible = n.call(c, e, c.data, c), l % 80 === 0 && l > 0 && await de(), await o(c);
      if (!s.visible && r.length) {
        let l = true;
        l = !r.some((c) => c.visible), s.root ? s.root.visible = l === false : s.visible = l === false;
      }
      e && s.visible && !s.isLeaf && (!d || s.loaded) && s.expand();
    };
    o(this);
  }
  setData(e) {
    e !== this.root.data ? (this.nodesMap = {}, this.root.setData(e), this._initDefaultCheckedNodes(), this.setCurrentNodeKey(this.currentNodeKey)) : this.root.updateChildren();
  }
  getNode(e) {
    if (e instanceof M)
      return e;
    const n = Re(e) ? ue(this.key, e) : e;
    return this.nodesMap[n] || null;
  }
  insertBefore(e, n) {
    const d = this.getNode(n);
    d.parent.insertBefore({ data: e }, d);
  }
  insertAfter(e, n) {
    const d = this.getNode(n);
    d.parent.insertAfter({ data: e }, d);
  }
  remove(e) {
    const n = this.getNode(e);
    n && n.parent && (n === this.currentNode && (this.currentNode = null), n.parent.removeChild(n));
  }
  append(e, n) {
    const d = pe(n) ? this.root : this.getNode(n);
    d && d.insertChild({ data: e });
  }
  _initDefaultCheckedNodes() {
    const e = this.defaultCheckedKeys || [], n = this.nodesMap;
    e.forEach((d) => {
      const o = n[d];
      o && o.setChecked(true, !this.checkStrictly);
    });
  }
  _initDefaultCheckedNode(e) {
    (this.defaultCheckedKeys || []).includes(e.key) && e.setChecked(true, !this.checkStrictly);
  }
  setDefaultCheckedKey(e) {
    e !== this.defaultCheckedKeys && (this.defaultCheckedKeys = e, this._initDefaultCheckedNodes());
  }
  registerNode(e) {
    const n = this.key;
    !e || !e.data || (n ? e.key !== void 0 && (this.nodesMap[e.key] = e) : this.nodesMap[e.id] = e);
  }
  deregisterNode(e) {
    !this.key || !e || !e.data || (e.childNodes.forEach((d) => {
      this.deregisterNode(d);
    }), delete this.nodesMap[e.key]);
  }
  getCheckedNodes(e = false, n = false) {
    const d = [], o = function(s) {
      (s.root ? s.root.childNodes : s.childNodes).forEach((l) => {
        (l.checked || n && l.indeterminate) && (!e || e && l.isLeaf) && d.push(l.data), o(l);
      });
    };
    return o(this), d;
  }
  getCheckedKeys(e = false) {
    return this.getCheckedNodes(e).map((n) => (n || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const e = [], n = function(d) {
      (d.root ? d.root.childNodes : d.childNodes).forEach((s) => {
        s.indeterminate && e.push(s.data), n(s);
      });
    };
    return n(this), e;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((e) => (e || {})[this.key]);
  }
  _getAllNodes() {
    const e = [], n = this.nodesMap;
    for (const d in n)
      se(n, d) && e.push(n[d]);
    return e;
  }
  updateChildren(e, n) {
    const d = this.nodesMap[e];
    if (!d)
      return;
    const o = d.childNodes;
    for (let s = o.length - 1; s >= 0; s--) {
      const r = o[s];
      this.remove(r.data);
    }
    for (let s = 0, r = n.length; s < r; s++) {
      const l = n[s];
      this.append(l, d.data);
    }
  }
  _setCheckedKeys(e, n = false, d) {
    const o = this._getAllNodes().sort((c, p) => c.level - p.level), s = /* @__PURE__ */ Object.create(null), r = Object.keys(d);
    o.forEach((c) => c.setChecked(false, false));
    const l = (c) => {
      c.childNodes.forEach((p) => {
        var a;
        s[p.data[e]] = true, (a = p.childNodes) != null && a.length && l(p);
      });
    };
    for (let c = 0, p = o.length; c < p; c++) {
      const a = o[c], f = a.data[e].toString();
      if (!r.includes(f)) {
        a.checked && !s[f] && a.setChecked(false, false);
        continue;
      }
      if (a.childNodes.length && l(a), a.isLeaf || this.checkStrictly) {
        a.setChecked(true, false);
        continue;
      }
      if (a.setChecked(true, true), n) {
        a.setChecked(false, false);
        const g = function(y) {
          y.childNodes.forEach((v) => {
            v.isLeaf || v.setChecked(false, false), g(v);
          });
        };
        g(a);
      }
    }
  }
  setCheckedNodes(e, n = false) {
    const d = this.key, o = {};
    e.forEach((s) => {
      o[(s || {})[d]] = true;
    }), this._setCheckedKeys(d, n, o);
  }
  setCheckedKeys(e, n = false) {
    this.defaultCheckedKeys = e;
    const d = this.key, o = {};
    e.forEach((s) => {
      o[s] = true;
    }), this._setCheckedKeys(d, n, o);
  }
  setDefaultExpandedKeys(e) {
    e = e || [], this.defaultExpandedKeys = e, e.forEach((n) => {
      const d = this.getNode(n);
      d && d.expand(null, this.autoExpandParent);
    });
  }
  setChecked(e, n, d) {
    const o = this.getNode(e);
    o && o.setChecked(!!n, d);
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(e) {
    const n = this.currentNode;
    n && (n.isCurrent = false), this.currentNode = e, this.currentNode.isCurrent = true;
  }
  setUserCurrentNode(e, n = true) {
    const d = e[this.key], o = this.nodesMap[d];
    this.setCurrentNode(o), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, true);
  }
  setCurrentNodeKey(e, n = true) {
    if (this.currentNodeKey = e, pe(e)) {
      this.currentNode && (this.currentNode.isCurrent = false), this.currentNode = null;
      return;
    }
    const d = this.getNode(e);
    d && (this.setCurrentNode(d), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, true));
  }
}
const fe = "RootTree", Se = "NodeInstance", ye = "TreeNodeMap", lt = J({ name: "ElTreeNodeContent", props: { node: { type: Object, required: true }, renderContent: Function }, setup(t) {
  const e = H("tree"), n = j(Se), d = j(fe);
  return () => {
    const o = t.node, { data: s, store: r } = o;
    return t.renderContent ? t.renderContent(ge, { _self: n, node: o, data: s, store: r }) : he(d.ctx.slots, "default", { node: o, data: s }, () => [ge(rt, { tag: "span", truncated: true, class: e.be("node", "label") }, () => [o.label])]);
  };
} });
var ct = te(lt, [["__file", "tree-node-content.vue"]]);
function Te(t) {
  const e = j(ye, null), n = { treeNodeExpand: (d) => {
    t.node !== d && t.node.collapse();
  }, children: [] };
  return e && e.children.push(n), W(ye, n), { broadcastExpanded: (d) => {
    if (t.accordion)
      for (const o of n.children)
        o.treeNodeExpand(d);
  } };
}
const Ie = Symbol("dragEvents");
function ht({ props: t, ctx: e, el$: n, dropIndicator$: d, store: o }) {
  const s = H("tree"), r = w({ showDropIndicator: false, draggingNode: null, dropNode: null, allowDrop: true, dropType: null });
  return W(Ie, { treeNodeDragStart: ({ event: a, treeNode: f }) => {
    if (ee(t.allowDrag) && !t.allowDrag(f.node))
      return a.preventDefault(), false;
    a.dataTransfer.effectAllowed = "move";
    try {
      a.dataTransfer.setData("text/plain", "");
    } catch {
    }
    r.value.draggingNode = f, e.emit("node-drag-start", f.node, a);
  }, treeNodeDragOver: ({ event: a, treeNode: f }) => {
    const h = f, g = r.value.dropNode;
    g && g.node.id !== h.node.id && ne(g.$el, s.is("drop-inner"));
    const y = r.value.draggingNode;
    if (!y || !h)
      return;
    let k = true, v = true, m = true, b = true;
    ee(t.allowDrop) && (k = t.allowDrop(y.node, h.node, "prev"), b = v = t.allowDrop(y.node, h.node, "inner"), m = t.allowDrop(y.node, h.node, "next")), a.dataTransfer.dropEffect = v || k || m ? "move" : "none", (k || v || m) && (g == null ? void 0 : g.node.id) !== h.node.id && (g && e.emit("node-drag-leave", y.node, g.node, a), e.emit("node-drag-enter", y.node, h.node, a)), k || v || m ? r.value.dropNode = h : r.value.dropNode = null, h.node.nextSibling === y.node && (m = false), h.node.previousSibling === y.node && (k = false), h.node.contains(y.node, false) && (v = false), (y.node === h.node || y.node.contains(h.node)) && (k = false, v = false, m = false);
    const T = h.$el.querySelector(`.${s.be("node", "content")}`).getBoundingClientRect(), z = n.value.getBoundingClientRect();
    let E;
    const G = k ? v ? 0.25 : m ? 0.45 : 1 : -1, X = m ? v ? 0.75 : k ? 0.55 : 0 : 1;
    let F = -9999;
    const u = a.clientY - T.top;
    u < T.height * G ? E = "before" : u > T.height * X ? E = "after" : v ? E = "inner" : E = "none";
    const N = h.$el.querySelector(`.${s.be("node", "expand-icon")}`).getBoundingClientRect(), K = d.value;
    E === "before" ? F = N.top - z.top : E === "after" && (F = N.bottom - z.top), K.style.top = `${F}px`, K.style.left = `${N.right - z.left}px`, E === "inner" ? Ue(h.$el, s.is("drop-inner")) : ne(h.$el, s.is("drop-inner")), r.value.showDropIndicator = E === "before" || E === "after", r.value.allowDrop = r.value.showDropIndicator || b, r.value.dropType = E, e.emit("node-drag-over", y.node, h.node, a);
  }, treeNodeDragEnd: (a) => {
    const { draggingNode: f, dropType: h, dropNode: g } = r.value;
    if (a.preventDefault(), a.dataTransfer && (a.dataTransfer.dropEffect = "move"), f && g) {
      const y = { data: f.node.data };
      h !== "none" && f.node.remove(), h === "before" ? g.node.parent.insertBefore(y, g.node) : h === "after" ? g.node.parent.insertAfter(y, g.node) : h === "inner" && g.node.insertChild(y), h !== "none" && (o.value.registerNode(y), o.value.key && f.node.eachNode((k) => {
        var v;
        (v = o.value.nodesMap[k.data[o.value.key]]) == null || v.setChecked(k.checked, !o.value.checkStrictly);
      })), ne(g.$el, s.is("drop-inner")), e.emit("node-drag-end", f.node, g.node, h, a), h !== "none" && e.emit("node-drop", f.node, g.node, h, a);
    }
    f && !g && e.emit("node-drag-end", f.node, null, h, a), r.value.showDropIndicator = false, r.value.draggingNode = null, r.value.dropNode = null, r.value.allowDrop = true;
  } }), { dragState: r };
}
const ut = J({ name: "ElTreeNode", components: { ElCollapseTransition: _e, ElCheckbox: tt, NodeContent: ct, ElIcon: Ye, Loading: We }, props: { node: { type: M, default: () => ({}) }, props: { type: Object, default: () => ({}) }, accordion: Boolean, renderContent: Function, renderAfterExpand: Boolean, showCheckbox: { type: Boolean, default: false } }, emits: ["node-expand"], setup(t, e) {
  const n = H("tree"), { broadcastExpanded: d } = Te(t), o = j(fe), s = w(false), r = w(false), l = w(), c = w(), p = w(), a = j(Ie), f = De();
  W(Se, f), t.node.expanded && (s.value = true, r.value = true);
  const h = o.props.props.children || "children";
  S(() => {
    var u;
    const N = (u = t.node.data) == null ? void 0 : u[h];
    return N && [...N];
  }, () => {
    t.node.updateChildren();
  }), S(() => t.node.indeterminate, (u) => {
    k(t.node.checked, u);
  }), S(() => t.node.checked, (u) => {
    k(u, t.node.indeterminate);
  }), S(() => t.node.childNodes.length, () => t.node.reInitChecked()), S(() => t.node.expanded, (u) => {
    de(() => s.value = u), u && (r.value = true);
  });
  const g = (u) => ue(o.props.nodeKey, u.data), y = (u) => {
    const N = t.props.class;
    if (!N)
      return {};
    let K;
    if (ee(N)) {
      const { data: R } = u;
      K = N(R, u);
    } else
      K = N;
    return Ke(K) ? { [K]: true } : K;
  }, k = (u, N) => {
    (l.value !== u || c.value !== N) && o.ctx.emit("check-change", t.node.data, u, N), l.value = u, c.value = N;
  }, v = (u) => {
    le(o.store, o.ctx.emit, () => {
      var N;
      if ((N = o == null ? void 0 : o.props) == null ? void 0 : N.nodeKey) {
        const R = g(t.node);
        o.store.value.setCurrentNodeKey(R);
      } else
        o.store.value.setCurrentNode(t.node);
    }), o.currentNode.value = t.node, o.props.expandOnClickNode && b(), (o.props.checkOnClickNode || t.node.isLeaf && o.props.checkOnClickLeaf && t.showCheckbox) && !t.node.disabled && T(!t.node.checked), o.ctx.emit("node-click", t.node.data, t.node, f, u);
  }, m = (u) => {
    var N;
    (N = o.instance.vnode.props) != null && N.onNodeContextmenu && (u.stopPropagation(), u.preventDefault()), o.ctx.emit("node-contextmenu", u, t.node.data, t.node, f);
  }, b = () => {
    t.node.isLeaf || (s.value ? (o.ctx.emit("node-collapse", t.node.data, t.node, f), t.node.collapse()) : t.node.expand(() => {
      e.emit("node-expand", t.node.data, t.node, f);
    }));
  }, T = (u) => {
    t.node.setChecked(u, !(o == null ? void 0 : o.props.checkStrictly)), de(() => {
      const N = o.store.value;
      o.ctx.emit("check", t.node.data, { checkedNodes: N.getCheckedNodes(), checkedKeys: N.getCheckedKeys(), halfCheckedNodes: N.getHalfCheckedNodes(), halfCheckedKeys: N.getHalfCheckedKeys() });
    });
  };
  return { ns: n, node$: p, tree: o, expanded: s, childNodeRendered: r, oldChecked: l, oldIndeterminate: c, getNodeKey: g, getNodeClass: y, handleSelectChange: k, handleClick: v, handleContextMenu: m, handleExpandIconClick: b, handleCheckChange: T, handleChildNodeExpand: (u, N, K) => {
    d(N), o.ctx.emit("node-expand", u, N, K);
  }, handleDragStart: (u) => {
    o.props.draggable && a.treeNodeDragStart({ event: u, treeNode: t });
  }, handleDragOver: (u) => {
    u.preventDefault(), o.props.draggable && a.treeNodeDragOver({ event: u, treeNode: { $el: p.value, node: t.node } });
  }, handleDrop: (u) => {
    u.preventDefault();
  }, handleDragEnd: (u) => {
    o.props.draggable && a.treeNodeDragEnd(u);
  }, CaretRight: Je };
} });
function ft(t, e, n, d, o, s) {
  const r = B("el-icon"), l = B("el-checkbox"), c = B("loading"), p = B("node-content"), a = B("el-tree-node"), f = B("el-collapse-transition");
  return re((D(), P("div", { ref: "node$", class: x([t.ns.b("node"), t.ns.is("expanded", t.expanded), t.ns.is("current", t.node.isCurrent), t.ns.is("hidden", !t.node.visible), t.ns.is("focusable", !t.node.disabled), t.ns.is("checked", !t.node.disabled && t.node.checked), t.getNodeClass(t.node)]), role: "treeitem", tabindex: "-1", "aria-expanded": t.expanded, "aria-disabled": t.node.disabled, "aria-checked": t.node.checked, draggable: t.tree.props.draggable, "data-key": t.getNodeKey(t.node), onClick: A(t.handleClick, ["stop"]), onContextmenu: t.handleContextMenu, onDragstart: A(t.handleDragStart, ["stop"]), onDragover: A(t.handleDragOver, ["stop"]), onDragend: A(t.handleDragEnd, ["stop"]), onDrop: A(t.handleDrop, ["stop"]) }, [ie("div", { class: x(t.ns.be("node", "content")), style: me({ paddingLeft: (t.node.level - 1) * t.tree.props.indent + "px" }) }, [t.tree.props.icon || t.CaretRight ? (D(), L(r, { key: 0, class: x([t.ns.be("node", "expand-icon"), t.ns.is("leaf", t.node.isLeaf), { expanded: !t.node.isLeaf && t.expanded }]), onClick: A(t.handleExpandIconClick, ["stop"]) }, { default: V(() => [(D(), L(be(t.tree.props.icon || t.CaretRight)))]), _: 1 }, 8, ["class", "onClick"])) : _("v-if", true), t.showCheckbox ? (D(), L(l, { key: 1, "model-value": t.node.checked, indeterminate: t.node.indeterminate, disabled: !!t.node.disabled, onClick: A(() => {
  }, ["stop"]), onChange: t.handleCheckChange }, null, 8, ["model-value", "indeterminate", "disabled", "onClick", "onChange"])) : _("v-if", true), t.node.loading ? (D(), L(r, { key: 2, class: x([t.ns.be("node", "loading-icon"), t.ns.is("loading")]) }, { default: V(() => [oe(c)]), _: 1 }, 8, ["class"])) : _("v-if", true), oe(p, { node: t.node, "render-content": t.renderContent }, null, 8, ["node", "render-content"])], 6), oe(f, null, { default: V(() => [!t.renderAfterExpand || t.childNodeRendered ? re((D(), P("div", { key: 0, class: x(t.ns.be("node", "children")), role: "group", "aria-expanded": t.expanded, onClick: A(() => {
  }, ["stop"]) }, [(D(true), P(we, null, xe(t.node.childNodes, (h) => (D(), L(a, { key: t.getNodeKey(h), "render-content": t.renderContent, "render-after-expand": t.renderAfterExpand, "show-checkbox": t.showCheckbox, node: h, accordion: t.accordion, props: t.props, onNodeExpand: t.handleChildNodeExpand }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]))), 128))], 10, ["aria-expanded", "onClick"])), [[ae, t.expanded]]) : _("v-if", true)]), _: 1 })], 42, ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key", "onClick", "onContextmenu", "onDragstart", "onDragover", "onDragend", "onDrop"])), [[ae, t.node.visible]]);
}
var pt = te(ut, [["render", ft], ["__file", "tree-node.vue"]]);
function gt({ el$: t }, e) {
  const n = H("tree");
  ke(() => {
    o();
  }), ve(() => {
    Array.from(t.value.querySelectorAll("input[type=checkbox]")).forEach((r) => {
      r.setAttribute("tabindex", "-1");
    });
  }), Ge(t, "keydown", (s) => {
    const r = s.target;
    if (!r.className.includes(n.b("node")))
      return;
    const l = s.code, c = Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)), p = c.indexOf(r);
    let a;
    if ([O.up, O.down].includes(l)) {
      if (s.preventDefault(), l === O.up) {
        a = p === -1 ? 0 : p !== 0 ? p - 1 : c.length - 1;
        const h = a;
        for (; !e.value.getNode(c[a].dataset.key).canFocus; ) {
          if (a--, a === h) {
            a = -1;
            break;
          }
          a < 0 && (a = c.length - 1);
        }
      } else {
        a = p === -1 ? 0 : p < c.length - 1 ? p + 1 : 0;
        const h = a;
        for (; !e.value.getNode(c[a].dataset.key).canFocus; ) {
          if (a++, a === h) {
            a = -1;
            break;
          }
          a >= c.length && (a = 0);
        }
      }
      a !== -1 && c[a].focus();
    }
    [O.left, O.right].includes(l) && (s.preventDefault(), r.click());
    const f = r.querySelector('[type="checkbox"]');
    [O.enter, O.numpadEnter, O.space].includes(l) && f && (s.preventDefault(), f.click());
  });
  const o = () => {
    var s;
    const r = Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));
    Array.from(t.value.querySelectorAll("input[type=checkbox]")).forEach((p) => {
      p.setAttribute("tabindex", "-1");
    });
    const c = t.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);
    if (c.length) {
      c[0].setAttribute("tabindex", "0");
      return;
    }
    (s = r[0]) == null || s.setAttribute("tabindex", "0");
  };
}
const Nt = J({ name: "ElTree", components: { ElTreeNode: pt }, props: { data: { type: Array, default: () => [] }, emptyText: { type: String }, renderAfterExpand: { type: Boolean, default: true }, nodeKey: String, checkStrictly: Boolean, defaultExpandAll: Boolean, expandOnClickNode: { type: Boolean, default: true }, checkOnClickNode: Boolean, checkOnClickLeaf: { type: Boolean, default: true }, checkDescendants: { type: Boolean, default: false }, autoExpandParent: { type: Boolean, default: true }, defaultCheckedKeys: Array, defaultExpandedKeys: Array, currentNodeKey: [String, Number], renderContent: Function, showCheckbox: { type: Boolean, default: false }, draggable: { type: Boolean, default: false }, allowDrag: Function, allowDrop: Function, props: { type: Object, default: () => ({ children: "children", label: "label", disabled: "disabled" }) }, lazy: { type: Boolean, default: false }, highlightCurrent: Boolean, load: Function, filterNodeMethod: Function, accordion: Boolean, indent: { type: Number, default: 18 }, icon: { type: Xe } }, emits: ["check-change", "current-change", "node-click", "node-contextmenu", "node-collapse", "node-expand", "check", "node-drag-start", "node-drag-end", "node-drop", "node-drag-leave", "node-drag-enter", "node-drag-over"], setup(t, e) {
  const { t: n } = Ze(), d = H("tree"), o = j(et, null), s = w(new it({ key: t.nodeKey, data: t.data, lazy: t.lazy, props: t.props, load: t.load, currentNodeKey: t.currentNodeKey, checkStrictly: t.checkStrictly, checkDescendants: t.checkDescendants, defaultCheckedKeys: t.defaultCheckedKeys, defaultExpandedKeys: t.defaultExpandedKeys, autoExpandParent: t.autoExpandParent, defaultExpandAll: t.defaultExpandAll, filterNodeMethod: t.filterNodeMethod }));
  s.value.initialize();
  const r = w(s.value.root), l = w(null), c = w(null), p = w(null), { broadcastExpanded: a } = Te(t), { dragState: f } = ht({ props: t, ctx: e, el$: c, dropIndicator$: p, store: s });
  gt({ el$: c }, s);
  const h = Ce(() => {
    const { childNodes: i } = r.value, C = o ? o.hasFilteredOptions !== 0 : false;
    return (!i || i.length === 0 || i.every(({ visible: I }) => !I)) && !C;
  });
  S(() => t.currentNodeKey, (i) => {
    s.value.setCurrentNodeKey(i);
  }), S(() => t.defaultCheckedKeys, (i) => {
    s.value.setDefaultCheckedKey(i);
  }), S(() => t.defaultExpandedKeys, (i) => {
    s.value.setDefaultExpandedKeys(i);
  }), S(() => t.data, (i) => {
    s.value.setData(i);
  }, { deep: true }), S(() => t.checkStrictly, (i) => {
    s.value.checkStrictly = i;
  });
  const g = (i) => {
    if (!t.filterNodeMethod)
      throw new Error("[Tree] filterNodeMethod is required when filter");
    s.value.filter(i);
  }, y = (i) => ue(t.nodeKey, i.data), k = (i) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in getNodePath");
    const C = s.value.getNode(i);
    if (!C)
      return [];
    const I = [C.data];
    let U = C.parent;
    for (; U && U !== r.value; )
      I.push(U.data), U = U.parent;
    return I.reverse();
  }, v = (i, C) => s.value.getCheckedNodes(i, C), m = (i) => s.value.getCheckedKeys(i), b = () => {
    const i = s.value.getCurrentNode();
    return i ? i.data : null;
  }, T = () => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in getCurrentKey");
    const i = b();
    return i ? i[t.nodeKey] : null;
  }, z = (i, C) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in setCheckedNodes");
    s.value.setCheckedNodes(i, C);
  }, E = (i, C) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in setCheckedKeys");
    s.value.setCheckedKeys(i, C);
  }, G = (i, C, I) => {
    s.value.setChecked(i, C, I);
  }, X = () => s.value.getHalfCheckedNodes(), F = () => s.value.getHalfCheckedKeys(), u = (i, C = true) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in setCurrentNode");
    le(s, e.emit, () => {
      a(i), s.value.setUserCurrentNode(i, C);
    });
  }, N = (i, C = true) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in setCurrentKey");
    le(s, e.emit, () => {
      a(), s.value.setCurrentNodeKey(i, C);
    });
  }, K = (i) => s.value.getNode(i), R = (i) => {
    s.value.remove(i);
  }, Ae = (i, C) => {
    s.value.append(i, C);
  }, Oe = (i, C) => {
    s.value.insertBefore(i, C);
  }, Be = (i, C) => {
    s.value.insertAfter(i, C);
  }, Le = (i, C, I) => {
    a(C), e.emit("node-expand", i, C, I);
  }, $e = (i, C) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in updateKeyChild");
    s.value.updateChildren(i, C);
  };
  return W(fe, { ctx: e, props: t, store: s, root: r, currentNode: l, instance: De() }), W(Qe, void 0), { ns: d, store: s, root: r, currentNode: l, dragState: f, el$: c, dropIndicator$: p, isEmpty: h, filter: g, getNodeKey: y, getNodePath: k, getCheckedNodes: v, getCheckedKeys: m, getCurrentNode: b, getCurrentKey: T, setCheckedNodes: z, setCheckedKeys: E, setChecked: G, getHalfCheckedNodes: X, getHalfCheckedKeys: F, setCurrentNode: u, setCurrentKey: N, t: n, getNode: K, remove: R, append: Ae, insertBefore: Oe, insertAfter: Be, handleNodeExpand: Le, updateKeyChildren: $e };
} });
function yt(t, e, n, d, o, s) {
  const r = B("el-tree-node");
  return D(), P("div", { ref: "el$", class: x([t.ns.b(), t.ns.is("dragging", !!t.dragState.draggingNode), t.ns.is("drop-not-allow", !t.dragState.allowDrop), t.ns.is("drop-inner", t.dragState.dropType === "inner"), { [t.ns.m("highlight-current")]: t.highlightCurrent }]), role: "tree" }, [(D(true), P(we, null, xe(t.root.childNodes, (l) => (D(), L(r, { key: t.getNodeKey(l), node: l, props: t.props, accordion: t.accordion, "render-after-expand": t.renderAfterExpand, "show-checkbox": t.showCheckbox, "render-content": t.renderContent, onNodeExpand: t.handleNodeExpand }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]))), 128)), t.isEmpty ? (D(), P("div", { key: 0, class: x(t.ns.e("empty-block")) }, [he(t.$slots, "empty", {}, () => {
    var l;
    return [ie("span", { class: x(t.ns.e("empty-text")) }, Ve((l = t.emptyText) != null ? l : t.t("el.tree.emptyText")), 3)];
  })], 2)) : _("v-if", true), re(ie("div", { ref: "dropIndicator$", class: x(t.ns.e("drop-indicator")) }, null, 2), [[ae, t.dragState.showDropIndicator]])], 2);
}
var Ct = te(Nt, [["render", yt], ["__file", "tree.vue"]]);
const bt = Ee(Ct);
export {
  bt as E
};
