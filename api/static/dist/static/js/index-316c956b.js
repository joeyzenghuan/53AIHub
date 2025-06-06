import { _ as Kt } from "./index-71389ea4.js";
import { cy as Pe, aT as It, b_ as Se, b9 as je, ae as X, m as Ie, aM as it, br as Tt, cl as zt, W as de, aC as He, u as G, au as Ee, ak as ie, a1 as st, q as ze, an as be, r as N, bo as Oe, bq as At, cO as Ft, y as xe, b1 as Ut, b3 as Ge, aG as Q, dn as Bt, cC as fe, g as ke, v as Te, b as V, c as O, d as S, h as j, i as u, aO as Lt, n as H, am as W, e as q, f as r, aN as Ot, F as te, G as ae, Q as rt, o as ce, ba as Rt, bR as Mt, bi as se, aQ as Pt, av as jt, al as Ce, dp as qt, t as K, aD as Jt, b4 as Ye, s as Re, k as Me, H as L, z as A, a4 as he, dq as Ht, bx as ee, a8 as me, a9 as Y, X as oe, aa as Ae, $ as le, ac as Fe, Y as $e, V as we, aL as Gt, Z as Yt, L as We, dr as Qe, ds as _e, dt as ct, du as ve, dv as Ke, I as ut, b5 as Wt, a as Xe, p as Ze, ao as pt, d2 as ft, d3 as ht, d1 as mt, a6 as Qt, by as Xt } from "./index-7b696e01.js";
import { E as Zt, a as en } from "./el-tab-pane-08bf2574.js";
import { _ as tn } from "./index.vue_vue_type_script_setup_true_lang-ca2646ba.js";
import { _ as et } from "./index-d368b04e.js";
import { b as nn, E as tt } from "./el-table-column-fe44992a.js";
import { E as _t } from "./el-tag-63139441.js";
import { E as Ue, a as Be, b as Le } from "./el-dropdown-item-2f5f0e32.js";
import "./el-scrollbar-a17df1f1.js";
import { s as an } from "./el-select-2909247e.js";
import { E as on } from "./el-drawer-b90243d2.js";
import { v as gt } from "./el-loading-5050bc7d.js";
import { _ as ln } from "./index-f329a8b9.js";
import { G as sn, b as vt, g as ne } from "./group-a5ba9c36.js";
import { a as rn } from "./agent-fe196a62.js";
import { E as dn } from "./el-divider-0c731d25.js";
import { E as cn } from "./el-empty-06cc10b4.js";
import "./index-6fa206ef.js";
import "./index.vue_vue_type_script_setup_true_lang-7fe9a2b9.js";
import "./sortable.esm-437f0071.js";
import "./position-df18ca50.js";
import "./debounce-c1af5016.js";
import "./debounce-f4e6390f.js";
import "./isEqual-71b69c76.js";
import "./dropdown-cf05cb92.js";
const ye = "$treeNodeId", dt = function(t, e) {
  !e || e[ye] || Object.defineProperty(e, ye, { value: t.id, enumerable: false, configurable: false, writable: false });
}, nt = (t, e) => e == null ? void 0 : e[t || ye], qe = (t, e, o) => {
  const a = t.value.currentNode;
  o();
  const n = t.value.currentNode;
  a !== n && e("current-change", n ? n.data : null, n);
}, Je = (t) => {
  let e = true, o = true, a = true;
  for (let n = 0, l = t.length; n < l; n++) {
    const i = t[n];
    (i.checked !== true || i.indeterminate) && (e = false, i.disabled || (a = false)), (i.checked !== false || i.indeterminate) && (o = false);
  }
  return { all: e, none: o, allWithoutDisable: a, half: !e && !o };
}, Ne = function(t) {
  if (t.childNodes.length === 0 || t.loading)
    return;
  const { all: e, none: o, half: a } = Je(t.childNodes);
  e ? (t.checked = true, t.indeterminate = false) : a ? (t.checked = false, t.indeterminate = true) : o && (t.checked = false, t.indeterminate = false);
  const n = t.parent;
  !n || n.level === 0 || t.store.checkStrictly || Ne(n);
}, Ve = function(t, e) {
  const o = t.store.props, a = t.data || {}, n = o[e];
  if (Ie(n))
    return n(a, t);
  if (it(n))
    return a[n];
  if (je(n)) {
    const l = a[e];
    return l === void 0 ? "" : l;
  }
};
let un = 0;
class ge {
  constructor(e) {
    this.id = un++, this.text = null, this.checked = false, this.indeterminate = false, this.data = null, this.expanded = false, this.parent = null, this.visible = true, this.isCurrent = false, this.canFocus = false;
    for (const o in e)
      Pe(e, o) && (this[o] = e[o]);
    this.level = 0, this.loaded = false, this.childNodes = [], this.loading = false, this.parent && (this.level = this.parent.level + 1);
  }
  initialize() {
    const e = this.store;
    if (!e)
      throw new Error("[Node]store is required!");
    e.registerNode(this);
    const o = e.props;
    if (o && typeof o.isLeaf < "u") {
      const l = Ve(this, "isLeaf");
      It(l) && (this.isLeafByUser = l);
    }
    if (e.lazy !== true && this.data ? (this.setData(this.data), e.defaultExpandAll && (this.expanded = true, this.canFocus = true)) : this.level > 0 && e.lazy && e.defaultExpandAll && !this.isLeafByUser && this.expand(), Se(this.data) || dt(this, this.data), !this.data)
      return;
    const a = e.defaultExpandedKeys, n = e.key;
    n && a && a.includes(this.key) && this.expand(null, e.autoExpandParent), n && e.currentNodeKey !== void 0 && this.key === e.currentNodeKey && (e.currentNode = this, e.currentNode.isCurrent = true), e.lazy && e._initDefaultCheckedNode(this), this.updateLeafState(), this.parent && (this.level === 1 || this.parent.expanded === true) && (this.canFocus = true);
  }
  setData(e) {
    Se(e) || dt(this, e), this.data = e, this.childNodes = [];
    let o;
    this.level === 0 && Se(this.data) ? o = this.data : o = Ve(this, "children") || [];
    for (let a = 0, n = o.length; a < n; a++)
      this.insertChild({ data: o[a] });
  }
  get label() {
    return Ve(this, "label");
  }
  get key() {
    const e = this.store.key;
    return this.data ? this.data[e] : null;
  }
  get disabled() {
    return Ve(this, "disabled");
  }
  get nextSibling() {
    const e = this.parent;
    if (e) {
      const o = e.childNodes.indexOf(this);
      if (o > -1)
        return e.childNodes[o + 1];
    }
    return null;
  }
  get previousSibling() {
    const e = this.parent;
    if (e) {
      const o = e.childNodes.indexOf(this);
      if (o > -1)
        return o > 0 ? e.childNodes[o - 1] : null;
    }
    return null;
  }
  contains(e, o = true) {
    return (this.childNodes || []).some((a) => a === e || o && a.contains(e));
  }
  remove() {
    const e = this.parent;
    e && e.removeChild(this);
  }
  insertChild(e, o, a) {
    if (!e)
      throw new Error("InsertChild error: child is required.");
    if (!(e instanceof ge)) {
      if (!a) {
        const n = this.getChildren(true);
        n.includes(e.data) || (je(o) || o < 0 ? n.push(e.data) : n.splice(o, 0, e.data));
      }
      Object.assign(e, { parent: this, store: this.store }), e = X(new ge(e)), e instanceof ge && e.initialize();
    }
    e.level = this.level + 1, je(o) || o < 0 ? this.childNodes.push(e) : this.childNodes.splice(o, 0, e), this.updateLeafState();
  }
  insertBefore(e, o) {
    let a;
    o && (a = this.childNodes.indexOf(o)), this.insertChild(e, a);
  }
  insertAfter(e, o) {
    let a;
    o && (a = this.childNodes.indexOf(o), a !== -1 && (a += 1)), this.insertChild(e, a);
  }
  removeChild(e) {
    const o = this.getChildren() || [], a = o.indexOf(e.data);
    a > -1 && o.splice(a, 1);
    const n = this.childNodes.indexOf(e);
    n > -1 && (this.store && this.store.deregisterNode(e), e.parent = null, this.childNodes.splice(n, 1)), this.updateLeafState();
  }
  removeChildByData(e) {
    let o = null;
    for (let a = 0; a < this.childNodes.length; a++)
      if (this.childNodes[a].data === e) {
        o = this.childNodes[a];
        break;
      }
    o && this.removeChild(o);
  }
  expand(e, o) {
    const a = () => {
      if (o) {
        let n = this.parent;
        for (; n.level > 0; )
          n.expanded = true, n = n.parent;
      }
      this.expanded = true, e && e(), this.childNodes.forEach((n) => {
        n.canFocus = true;
      });
    };
    this.shouldLoadData() ? this.loadData((n) => {
      Se(n) && (this.checked ? this.setChecked(true, true) : this.store.checkStrictly || Ne(this), a());
    }) : a();
  }
  doCreateChildren(e, o = {}) {
    e.forEach((a) => {
      this.insertChild(Object.assign({ data: a }, o), void 0, true);
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
  setChecked(e, o, a, n) {
    if (this.indeterminate = e === "half", this.checked = e === true, this.store.checkStrictly)
      return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all: i, allWithoutDisable: d } = Je(this.childNodes);
      !this.isLeaf && !i && d && (this.checked = false, e = false);
      const p = () => {
        if (o) {
          const b = this.childNodes;
          for (let h = 0, m = b.length; h < m; h++) {
            const k = b[h];
            n = n || e !== false;
            const $ = k.disabled ? k.checked : n;
            k.setChecked($, o, true, n);
          }
          const { half: _, all: f } = Je(b);
          f || (this.checked = f, this.indeterminate = _);
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          p(), Ne(this);
        }, { checked: e !== false });
        return;
      } else
        p();
    }
    const l = this.parent;
    !l || l.level === 0 || a || Ne(l);
  }
  getChildren(e = false) {
    if (this.level === 0)
      return this.data;
    const o = this.data;
    if (!o)
      return null;
    const a = this.store.props;
    let n = "children";
    return a && (n = a.children || "children"), o[n] === void 0 && (o[n] = null), e && !o[n] && (o[n] = []), o[n];
  }
  updateChildren() {
    const e = this.getChildren() || [], o = this.childNodes.map((l) => l.data), a = {}, n = [];
    e.forEach((l, i) => {
      const d = l[ye];
      !!d && o.findIndex((b) => b[ye] === d) >= 0 ? a[d] = { index: i, data: l } : n.push({ index: i, data: l });
    }), this.store.lazy || o.forEach((l) => {
      a[l[ye]] || this.removeChildByData(l);
    }), n.forEach(({ index: l, data: i }) => {
      this.insertChild({ data: i }, l);
    }), this.updateLeafState();
  }
  loadData(e, o = {}) {
    if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(o).length)) {
      this.loading = true;
      const a = (l) => {
        this.childNodes = [], this.doCreateChildren(l, o), this.loaded = true, this.loading = false, this.updateLeafState(), e && e.call(this, l);
      }, n = () => {
        this.loading = false;
      };
      this.store.load(this, a, n);
    } else
      e && e.call(this);
  }
  eachNode(e) {
    const o = [this];
    for (; o.length; ) {
      const a = o.shift();
      o.unshift(...a.childNodes), e(a);
    }
  }
  reInitChecked() {
    this.store.checkStrictly || Ne(this);
  }
}
class pn {
  constructor(e) {
    this.currentNode = null, this.currentNodeKey = null;
    for (const o in e)
      Pe(e, o) && (this[o] = e[o]);
    this.nodesMap = {};
  }
  initialize() {
    if (this.root = new ge({ data: this.data, store: this }), this.root.initialize(), this.lazy && this.load) {
      const e = this.load;
      e(this.root, (o) => {
        this.root.doCreateChildren(o), this._initDefaultCheckedNodes();
      });
    } else
      this._initDefaultCheckedNodes();
  }
  filter(e) {
    const o = this.filterNodeMethod, a = this.lazy, n = async function(l) {
      const i = l.root ? l.root.childNodes : l.childNodes;
      for (const [d, p] of i.entries())
        p.visible = o.call(p, e, p.data, p), d % 80 === 0 && d > 0 && await de(), n(p);
      if (!l.visible && i.length) {
        let d = true;
        d = !i.some((p) => p.visible), l.root ? l.root.visible = d === false : l.visible = d === false;
      }
      e && l.visible && !l.isLeaf && (!a || l.loaded) && l.expand();
    };
    n(this);
  }
  setData(e) {
    e !== this.root.data ? (this.nodesMap = {}, this.root.setData(e), this._initDefaultCheckedNodes(), this.setCurrentNodeKey(this.currentNodeKey)) : this.root.updateChildren();
  }
  getNode(e) {
    if (e instanceof ge)
      return e;
    const o = Tt(e) ? nt(this.key, e) : e;
    return this.nodesMap[o] || null;
  }
  insertBefore(e, o) {
    const a = this.getNode(o);
    a.parent.insertBefore({ data: e }, a);
  }
  insertAfter(e, o) {
    const a = this.getNode(o);
    a.parent.insertAfter({ data: e }, a);
  }
  remove(e) {
    const o = this.getNode(e);
    o && o.parent && (o === this.currentNode && (this.currentNode = null), o.parent.removeChild(o));
  }
  append(e, o) {
    const a = zt(o) ? this.root : this.getNode(o);
    a && a.insertChild({ data: e });
  }
  _initDefaultCheckedNodes() {
    const e = this.defaultCheckedKeys || [], o = this.nodesMap;
    e.forEach((a) => {
      const n = o[a];
      n && n.setChecked(true, !this.checkStrictly);
    });
  }
  _initDefaultCheckedNode(e) {
    (this.defaultCheckedKeys || []).includes(e.key) && e.setChecked(true, !this.checkStrictly);
  }
  setDefaultCheckedKey(e) {
    e !== this.defaultCheckedKeys && (this.defaultCheckedKeys = e, this._initDefaultCheckedNodes());
  }
  registerNode(e) {
    const o = this.key;
    !e || !e.data || (o ? e.key !== void 0 && (this.nodesMap[e.key] = e) : this.nodesMap[e.id] = e);
  }
  deregisterNode(e) {
    !this.key || !e || !e.data || (e.childNodes.forEach((a) => {
      this.deregisterNode(a);
    }), delete this.nodesMap[e.key]);
  }
  getCheckedNodes(e = false, o = false) {
    const a = [], n = function(l) {
      (l.root ? l.root.childNodes : l.childNodes).forEach((d) => {
        (d.checked || o && d.indeterminate) && (!e || e && d.isLeaf) && a.push(d.data), n(d);
      });
    };
    return n(this), a;
  }
  getCheckedKeys(e = false) {
    return this.getCheckedNodes(e).map((o) => (o || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const e = [], o = function(a) {
      (a.root ? a.root.childNodes : a.childNodes).forEach((l) => {
        l.indeterminate && e.push(l.data), o(l);
      });
    };
    return o(this), e;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((e) => (e || {})[this.key]);
  }
  _getAllNodes() {
    const e = [], o = this.nodesMap;
    for (const a in o)
      Pe(o, a) && e.push(o[a]);
    return e;
  }
  updateChildren(e, o) {
    const a = this.nodesMap[e];
    if (!a)
      return;
    const n = a.childNodes;
    for (let l = n.length - 1; l >= 0; l--) {
      const i = n[l];
      this.remove(i.data);
    }
    for (let l = 0, i = o.length; l < i; l++) {
      const d = o[l];
      this.append(d, a.data);
    }
  }
  _setCheckedKeys(e, o = false, a) {
    const n = this._getAllNodes().sort((p, b) => p.level - b.level), l = /* @__PURE__ */ Object.create(null), i = Object.keys(a);
    n.forEach((p) => p.setChecked(false, false));
    const d = (p) => {
      p.childNodes.forEach((b) => {
        var _;
        l[b.data[e]] = true, (_ = b.childNodes) != null && _.length && d(b);
      });
    };
    for (let p = 0, b = n.length; p < b; p++) {
      const _ = n[p], f = _.data[e].toString();
      if (!i.includes(f)) {
        _.checked && !l[f] && _.setChecked(false, false);
        continue;
      }
      if (_.childNodes.length && d(_), _.isLeaf || this.checkStrictly) {
        _.setChecked(true, false);
        continue;
      }
      if (_.setChecked(true, true), o) {
        _.setChecked(false, false);
        const m = function(k) {
          k.childNodes.forEach((E) => {
            E.isLeaf || E.setChecked(false, false), m(E);
          });
        };
        m(_);
      }
    }
  }
  setCheckedNodes(e, o = false) {
    const a = this.key, n = {};
    e.forEach((l) => {
      n[(l || {})[a]] = true;
    }), this._setCheckedKeys(a, o, n);
  }
  setCheckedKeys(e, o = false) {
    this.defaultCheckedKeys = e;
    const a = this.key, n = {};
    e.forEach((l) => {
      n[l] = true;
    }), this._setCheckedKeys(a, o, n);
  }
  setDefaultExpandedKeys(e) {
    e = e || [], this.defaultExpandedKeys = e, e.forEach((o) => {
      const a = this.getNode(o);
      a && a.expand(null, this.autoExpandParent);
    });
  }
  setChecked(e, o, a) {
    const n = this.getNode(e);
    n && n.setChecked(!!o, a);
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(e) {
    const o = this.currentNode;
    o && (o.isCurrent = false), this.currentNode = e, this.currentNode.isCurrent = true;
  }
  setUserCurrentNode(e, o = true) {
    const a = e[this.key], n = this.nodesMap[a];
    this.setCurrentNode(n), o && this.currentNode.level > 1 && this.currentNode.parent.expand(null, true);
  }
  setCurrentNodeKey(e, o = true) {
    if (this.currentNodeKey = e, e == null) {
      this.currentNode && (this.currentNode.isCurrent = false), this.currentNode = null;
      return;
    }
    const a = this.getNode(e);
    a && (this.setCurrentNode(a), o && this.currentNode.level > 1 && this.currentNode.parent.expand(null, true));
  }
}
const fn = G({ name: "ElTreeNodeContent", props: { node: { type: Object, required: true }, renderContent: Function }, setup(t) {
  const e = Ee("tree"), o = ie("NodeInstance"), a = ie("RootTree");
  return () => {
    const n = t.node, { data: l, store: i } = n;
    return t.renderContent ? t.renderContent(st, { _self: o, node: n, data: l, store: i }) : ze(a.ctx.slots, "default", { node: n, data: l }, () => [st("span", { class: e.be("node", "label") }, [n.label])]);
  };
} });
var hn = He(fn, [["__file", "tree-node-content.vue"]]);
function yt(t) {
  const e = ie("TreeNodeMap", null), o = { treeNodeExpand: (a) => {
    t.node !== a && t.node.collapse();
  }, children: [] };
  return e && e.children.push(o), be("TreeNodeMap", o), { broadcastExpanded: (a) => {
    if (t.accordion)
      for (const n of o.children)
        n.treeNodeExpand(a);
  } };
}
const bt = Symbol("dragEvents");
function mn({ props: t, ctx: e, el$: o, dropIndicator$: a, store: n }) {
  const l = Ee("tree"), i = N({ showDropIndicator: false, draggingNode: null, dropNode: null, allowDrop: true, dropType: null });
  return be(bt, { treeNodeDragStart: ({ event: _, treeNode: f }) => {
    if (Ie(t.allowDrag) && !t.allowDrag(f.node))
      return _.preventDefault(), false;
    _.dataTransfer.effectAllowed = "move";
    try {
      _.dataTransfer.setData("text/plain", "");
    } catch {
    }
    i.value.draggingNode = f, e.emit("node-drag-start", f.node, _);
  }, treeNodeDragOver: ({ event: _, treeNode: f }) => {
    const h = f, m = i.value.dropNode;
    m && m.node.id !== h.node.id && Oe(m.$el, l.is("drop-inner"));
    const k = i.value.draggingNode;
    if (!k || !h)
      return;
    let $ = true, E = true, T = true, D = true;
    Ie(t.allowDrop) && ($ = t.allowDrop(k.node, h.node, "prev"), D = E = t.allowDrop(k.node, h.node, "inner"), T = t.allowDrop(k.node, h.node, "next")), _.dataTransfer.dropEffect = E || $ || T ? "move" : "none", ($ || E || T) && (m == null ? void 0 : m.node.id) !== h.node.id && (m && e.emit("node-drag-leave", k.node, m.node, _), e.emit("node-drag-enter", k.node, h.node, _)), $ || E || T ? i.value.dropNode = h : i.value.dropNode = null, h.node.nextSibling === k.node && (T = false), h.node.previousSibling === k.node && ($ = false), h.node.contains(k.node, false) && (E = false), (k.node === h.node || k.node.contains(h.node)) && ($ = false, E = false, T = false);
    const B = h.$el.querySelector(`.${l.be("node", "content")}`).getBoundingClientRect(), C = o.value.getBoundingClientRect();
    let v;
    const x = $ ? E ? 0.25 : T ? 0.45 : 1 : -1, w = T ? E ? 0.75 : $ ? 0.55 : 0 : 1;
    let I = -9999;
    const s = _.clientY - B.top;
    s < B.height * x ? v = "before" : s > B.height * w ? v = "after" : E ? v = "inner" : v = "none";
    const c = h.$el.querySelector(`.${l.be("node", "expand-icon")}`).getBoundingClientRect(), g = a.value;
    v === "before" ? I = c.top - C.top : v === "after" && (I = c.bottom - C.top), g.style.top = `${I}px`, g.style.left = `${c.right - C.left}px`, v === "inner" ? At(h.$el, l.is("drop-inner")) : Oe(h.$el, l.is("drop-inner")), i.value.showDropIndicator = v === "before" || v === "after", i.value.allowDrop = i.value.showDropIndicator || D, i.value.dropType = v, e.emit("node-drag-over", k.node, h.node, _);
  }, treeNodeDragEnd: (_) => {
    const { draggingNode: f, dropType: h, dropNode: m } = i.value;
    if (_.preventDefault(), _.dataTransfer && (_.dataTransfer.dropEffect = "move"), f && m) {
      const k = { data: f.node.data };
      h !== "none" && f.node.remove(), h === "before" ? m.node.parent.insertBefore(k, m.node) : h === "after" ? m.node.parent.insertAfter(k, m.node) : h === "inner" && m.node.insertChild(k), h !== "none" && (n.value.registerNode(k), n.value.key && f.node.eachNode(($) => {
        var E;
        (E = n.value.nodesMap[$.data[n.value.key]]) == null || E.setChecked($.checked, !n.value.checkStrictly);
      })), Oe(m.$el, l.is("drop-inner")), e.emit("node-drag-end", f.node, m.node, h, _), h !== "none" && e.emit("node-drop", f.node, m.node, h, _);
    }
    f && !m && e.emit("node-drag-end", f.node, null, h, _), i.value.showDropIndicator = false, i.value.draggingNode = null, i.value.dropNode = null, i.value.allowDrop = true;
  } }), { dragState: i };
}
const _n = G({ name: "ElTreeNode", components: { ElCollapseTransition: Ft, ElCheckbox: nn, NodeContent: hn, ElIcon: xe, Loading: Ut }, props: { node: { type: ge, default: () => ({}) }, props: { type: Object, default: () => ({}) }, accordion: Boolean, renderContent: Function, renderAfterExpand: Boolean, showCheckbox: { type: Boolean, default: false } }, emits: ["node-expand"], setup(t, e) {
  const o = Ee("tree"), { broadcastExpanded: a } = yt(t), n = ie("RootTree"), l = N(false), i = N(false), d = N(), p = N(), b = N(), _ = ie(bt), f = Ge();
  be("NodeInstance", f), t.node.expanded && (l.value = true, i.value = true);
  const h = n.props.props.children || "children";
  Q(() => {
    var s;
    const c = (s = t.node.data) == null ? void 0 : s[h];
    return c && [...c];
  }, () => {
    t.node.updateChildren();
  }), Q(() => t.node.indeterminate, (s) => {
    $(t.node.checked, s);
  }), Q(() => t.node.checked, (s) => {
    $(s, t.node.indeterminate);
  }), Q(() => t.node.childNodes.length, () => t.node.reInitChecked()), Q(() => t.node.expanded, (s) => {
    de(() => l.value = s), s && (i.value = true);
  });
  const m = (s) => nt(n.props.nodeKey, s.data), k = (s) => {
    const c = t.props.class;
    if (!c)
      return {};
    let g;
    if (Ie(c)) {
      const { data: F } = s;
      g = c(F, s);
    } else
      g = c;
    return it(g) ? { [g]: true } : g;
  }, $ = (s, c) => {
    (d.value !== s || p.value !== c) && n.ctx.emit("check-change", t.node.data, s, c), d.value = s, p.value = c;
  }, E = (s) => {
    qe(n.store, n.ctx.emit, () => {
      var c;
      if ((c = n == null ? void 0 : n.props) == null ? void 0 : c.nodeKey) {
        const F = m(t.node);
        n.store.value.setCurrentNodeKey(F);
      } else
        n.store.value.setCurrentNode(t.node);
    }), n.currentNode.value = t.node, n.props.expandOnClickNode && D(), (n.props.checkOnClickNode || t.node.isLeaf && n.props.checkOnClickLeaf) && !t.node.disabled && B(!t.node.checked), n.ctx.emit("node-click", t.node.data, t.node, f, s);
  }, T = (s) => {
    var c;
    (c = n.instance.vnode.props) != null && c.onNodeContextmenu && (s.stopPropagation(), s.preventDefault()), n.ctx.emit("node-contextmenu", s, t.node.data, t.node, f);
  }, D = () => {
    t.node.isLeaf || (l.value ? (n.ctx.emit("node-collapse", t.node.data, t.node, f), t.node.collapse()) : t.node.expand(() => {
      e.emit("node-expand", t.node.data, t.node, f);
    }));
  }, B = (s) => {
    t.node.setChecked(s, !(n == null ? void 0 : n.props.checkStrictly)), de(() => {
      const c = n.store.value;
      n.ctx.emit("check", t.node.data, { checkedNodes: c.getCheckedNodes(), checkedKeys: c.getCheckedKeys(), halfCheckedNodes: c.getHalfCheckedNodes(), halfCheckedKeys: c.getHalfCheckedKeys() });
    });
  };
  return { ns: o, node$: b, tree: n, expanded: l, childNodeRendered: i, oldChecked: d, oldIndeterminate: p, getNodeKey: m, getNodeClass: k, handleSelectChange: $, handleClick: E, handleContextMenu: T, handleExpandIconClick: D, handleCheckChange: B, handleChildNodeExpand: (s, c, g) => {
    a(c), n.ctx.emit("node-expand", s, c, g);
  }, handleDragStart: (s) => {
    n.props.draggable && _.treeNodeDragStart({ event: s, treeNode: t });
  }, handleDragOver: (s) => {
    s.preventDefault(), n.props.draggable && _.treeNodeDragOver({ event: s, treeNode: { $el: b.value, node: t.node } });
  }, handleDrop: (s) => {
    s.preventDefault();
  }, handleDragEnd: (s) => {
    n.props.draggable && _.treeNodeDragEnd(s);
  }, CaretRight: Bt };
} });
function gn(t, e, o, a, n, l) {
  const i = fe("el-icon"), d = fe("el-checkbox"), p = fe("loading"), b = fe("node-content"), _ = fe("el-tree-node"), f = fe("el-collapse-transition");
  return ke((V(), O("div", { ref: "node$", class: H([t.ns.b("node"), t.ns.is("expanded", t.expanded), t.ns.is("current", t.node.isCurrent), t.ns.is("hidden", !t.node.visible), t.ns.is("focusable", !t.node.disabled), t.ns.is("checked", !t.node.disabled && t.node.checked), t.getNodeClass(t.node)]), role: "treeitem", tabindex: "-1", "aria-expanded": t.expanded, "aria-disabled": t.node.disabled, "aria-checked": t.node.checked, draggable: t.tree.props.draggable, "data-key": t.getNodeKey(t.node), onClick: W(t.handleClick, ["stop"]), onContextmenu: t.handleContextMenu, onDragstart: W(t.handleDragStart, ["stop"]), onDragover: W(t.handleDragOver, ["stop"]), onDragend: W(t.handleDragEnd, ["stop"]), onDrop: W(t.handleDrop, ["stop"]) }, [S("div", { class: H(t.ns.be("node", "content")), style: Ot({ paddingLeft: (t.node.level - 1) * t.tree.props.indent + "px" }) }, [t.tree.props.icon || t.CaretRight ? (V(), j(i, { key: 0, class: H([t.ns.be("node", "expand-icon"), t.ns.is("leaf", t.node.isLeaf), { expanded: !t.node.isLeaf && t.expanded }]), onClick: W(t.handleExpandIconClick, ["stop"]) }, { default: u(() => [(V(), j(Lt(t.tree.props.icon || t.CaretRight)))]), _: 1 }, 8, ["class", "onClick"])) : q("v-if", true), t.showCheckbox ? (V(), j(d, { key: 1, "model-value": t.node.checked, indeterminate: t.node.indeterminate, disabled: !!t.node.disabled, onClick: W(() => {
  }, ["stop"]), onChange: t.handleCheckChange }, null, 8, ["model-value", "indeterminate", "disabled", "onClick", "onChange"])) : q("v-if", true), t.node.loading ? (V(), j(i, { key: 2, class: H([t.ns.be("node", "loading-icon"), t.ns.is("loading")]) }, { default: u(() => [r(p)]), _: 1 }, 8, ["class"])) : q("v-if", true), r(b, { node: t.node, "render-content": t.renderContent }, null, 8, ["node", "render-content"])], 6), r(f, null, { default: u(() => [!t.renderAfterExpand || t.childNodeRendered ? ke((V(), O("div", { key: 0, class: H(t.ns.be("node", "children")), role: "group", "aria-expanded": t.expanded }, [(V(true), O(te, null, ae(t.node.childNodes, (h) => (V(), j(_, { key: t.getNodeKey(h), "render-content": t.renderContent, "render-after-expand": t.renderAfterExpand, "show-checkbox": t.showCheckbox, node: h, accordion: t.accordion, props: t.props, onNodeExpand: t.handleChildNodeExpand }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]))), 128))], 10, ["aria-expanded"])), [[Te, t.expanded]]) : q("v-if", true)]), _: 1 })], 42, ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key", "onClick", "onContextmenu", "onDragstart", "onDragover", "onDragend", "onDrop"])), [[Te, t.node.visible]]);
}
var vn = He(_n, [["render", gn], ["__file", "tree-node.vue"]]);
function yn({ el$: t }, e) {
  const o = Ee("tree"), a = rt([]), n = rt([]);
  ce(() => {
    i();
  }), Rt(() => {
    a.value = Array.from(t.value.querySelectorAll("[role=treeitem]")), n.value = Array.from(t.value.querySelectorAll("input[type=checkbox]"));
  }), Q(n, (d) => {
    d.forEach((p) => {
      p.setAttribute("tabindex", "-1");
    });
  }), Mt(t, "keydown", (d) => {
    const p = d.target;
    if (!p.className.includes(o.b("node")))
      return;
    const b = d.code;
    a.value = Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`));
    const _ = a.value.indexOf(p);
    let f;
    if ([se.up, se.down].includes(b)) {
      if (d.preventDefault(), b === se.up) {
        f = _ === -1 ? 0 : _ !== 0 ? _ - 1 : a.value.length - 1;
        const m = f;
        for (; !e.value.getNode(a.value[f].dataset.key).canFocus; ) {
          if (f--, f === m) {
            f = -1;
            break;
          }
          f < 0 && (f = a.value.length - 1);
        }
      } else {
        f = _ === -1 ? 0 : _ < a.value.length - 1 ? _ + 1 : 0;
        const m = f;
        for (; !e.value.getNode(a.value[f].dataset.key).canFocus; ) {
          if (f++, f === m) {
            f = -1;
            break;
          }
          f >= a.value.length && (f = 0);
        }
      }
      f !== -1 && a.value[f].focus();
    }
    [se.left, se.right].includes(b) && (d.preventDefault(), p.click());
    const h = p.querySelector('[type="checkbox"]');
    [se.enter, se.numpadEnter, se.space].includes(b) && h && (d.preventDefault(), h.click());
  });
  const i = () => {
    var d;
    a.value = Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`)), n.value = Array.from(t.value.querySelectorAll("input[type=checkbox]"));
    const p = t.value.querySelectorAll(`.${o.is("checked")}[role=treeitem]`);
    if (p.length) {
      p[0].setAttribute("tabindex", "0");
      return;
    }
    (d = a.value[0]) == null || d.setAttribute("tabindex", "0");
  };
}
const bn = G({ name: "ElTree", components: { ElTreeNode: vn }, props: { data: { type: Array, default: () => [] }, emptyText: { type: String }, renderAfterExpand: { type: Boolean, default: true }, nodeKey: String, checkStrictly: Boolean, defaultExpandAll: Boolean, expandOnClickNode: { type: Boolean, default: true }, checkOnClickNode: Boolean, checkOnClickLeaf: { type: Boolean, default: true }, checkDescendants: { type: Boolean, default: false }, autoExpandParent: { type: Boolean, default: true }, defaultCheckedKeys: Array, defaultExpandedKeys: Array, currentNodeKey: [String, Number], renderContent: Function, showCheckbox: { type: Boolean, default: false }, draggable: { type: Boolean, default: false }, allowDrag: Function, allowDrop: Function, props: { type: Object, default: () => ({ children: "children", label: "label", disabled: "disabled" }) }, lazy: { type: Boolean, default: false }, highlightCurrent: Boolean, load: Function, filterNodeMethod: Function, accordion: Boolean, indent: { type: Number, default: 18 }, icon: { type: Pt } }, emits: ["check-change", "current-change", "node-click", "node-contextmenu", "node-collapse", "node-expand", "check", "node-drag-start", "node-drag-end", "node-drop", "node-drag-leave", "node-drag-enter", "node-drag-over"], setup(t, e) {
  const { t: o } = jt(), a = Ee("tree"), n = ie(an, null), l = N(new pn({ key: t.nodeKey, data: t.data, lazy: t.lazy, props: t.props, load: t.load, currentNodeKey: t.currentNodeKey, checkStrictly: t.checkStrictly, checkDescendants: t.checkDescendants, defaultCheckedKeys: t.defaultCheckedKeys, defaultExpandedKeys: t.defaultExpandedKeys, autoExpandParent: t.autoExpandParent, defaultExpandAll: t.defaultExpandAll, filterNodeMethod: t.filterNodeMethod }));
  l.value.initialize();
  const i = N(l.value.root), d = N(null), p = N(null), b = N(null), { broadcastExpanded: _ } = yt(t), { dragState: f } = mn({ props: t, ctx: e, el$: p, dropIndicator$: b, store: l });
  yn({ el$: p }, l);
  const h = Ce(() => {
    const { childNodes: y } = i.value, R = n ? n.hasFilteredOptions !== 0 : false;
    return (!y || y.length === 0 || y.every(({ visible: Z }) => !Z)) && !R;
  });
  Q(() => t.currentNodeKey, (y) => {
    l.value.setCurrentNodeKey(y);
  }), Q(() => t.defaultCheckedKeys, (y) => {
    l.value.setDefaultCheckedKey(y);
  }), Q(() => t.defaultExpandedKeys, (y) => {
    l.value.setDefaultExpandedKeys(y);
  }), Q(() => t.data, (y) => {
    l.value.setData(y);
  }, { deep: true }), Q(() => t.checkStrictly, (y) => {
    l.value.checkStrictly = y;
  });
  const m = (y) => {
    if (!t.filterNodeMethod)
      throw new Error("[Tree] filterNodeMethod is required when filter");
    l.value.filter(y);
  }, k = (y) => nt(t.nodeKey, y.data), $ = (y) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in getNodePath");
    const R = l.value.getNode(y);
    if (!R)
      return [];
    const Z = [R.data];
    let pe = R.parent;
    for (; pe && pe !== i.value; )
      Z.push(pe.data), pe = pe.parent;
    return Z.reverse();
  }, E = (y, R) => l.value.getCheckedNodes(y, R), T = (y) => l.value.getCheckedKeys(y), D = () => {
    const y = l.value.getCurrentNode();
    return y ? y.data : null;
  }, B = () => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in getCurrentKey");
    const y = D();
    return y ? y[t.nodeKey] : null;
  }, C = (y, R) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in setCheckedNodes");
    l.value.setCheckedNodes(y, R);
  }, v = (y, R) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in setCheckedKeys");
    l.value.setCheckedKeys(y, R);
  }, x = (y, R, Z) => {
    l.value.setChecked(y, R, Z);
  }, w = () => l.value.getHalfCheckedNodes(), I = () => l.value.getHalfCheckedKeys(), s = (y, R = true) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in setCurrentNode");
    qe(l, e.emit, () => {
      _(y), l.value.setUserCurrentNode(y, R);
    });
  }, c = (y, R = true) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in setCurrentKey");
    qe(l, e.emit, () => {
      _(), l.value.setCurrentNodeKey(y, R);
    });
  }, g = (y) => l.value.getNode(y), F = (y) => {
    l.value.remove(y);
  }, M = (y, R) => {
    l.value.append(y, R);
  }, z = (y, R) => {
    l.value.insertBefore(y, R);
  }, U = (y, R) => {
    l.value.insertAfter(y, R);
  }, J = (y, R, Z) => {
    _(R), e.emit("node-expand", y, R, Z);
  }, ue = (y, R) => {
    if (!t.nodeKey)
      throw new Error("[Tree] nodeKey is required in updateKeyChild");
    l.value.updateChildren(y, R);
  };
  return be("RootTree", { ctx: e, props: t, store: l, root: i, currentNode: d, instance: Ge() }), be(qt, void 0), { ns: a, store: l, root: i, currentNode: d, dragState: f, el$: p, dropIndicator$: b, isEmpty: h, filter: m, getNodeKey: k, getNodePath: $, getCheckedNodes: E, getCheckedKeys: T, getCurrentNode: D, getCurrentKey: B, setCheckedNodes: C, setCheckedKeys: v, setChecked: x, getHalfCheckedNodes: w, getHalfCheckedKeys: I, setCurrentNode: s, setCurrentKey: c, t: o, getNode: g, remove: F, append: M, insertBefore: z, insertAfter: U, handleNodeExpand: J, updateKeyChildren: ue };
} });
function kn(t, e, o, a, n, l) {
  const i = fe("el-tree-node");
  return V(), O("div", { ref: "el$", class: H([t.ns.b(), t.ns.is("dragging", !!t.dragState.draggingNode), t.ns.is("drop-not-allow", !t.dragState.allowDrop), t.ns.is("drop-inner", t.dragState.dropType === "inner"), { [t.ns.m("highlight-current")]: t.highlightCurrent }]), role: "tree" }, [(V(true), O(te, null, ae(t.root.childNodes, (d) => (V(), j(i, { key: t.getNodeKey(d), node: d, props: t.props, accordion: t.accordion, "render-after-expand": t.renderAfterExpand, "show-checkbox": t.showCheckbox, "render-content": t.renderContent, onNodeExpand: t.handleNodeExpand }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]))), 128)), t.isEmpty ? (V(), O("div", { key: 0, class: H(t.ns.e("empty-block")) }, [ze(t.$slots, "empty", {}, () => {
    var d;
    return [S("span", { class: H(t.ns.e("empty-text")) }, K((d = t.emptyText) != null ? d : t.t("el.tree.emptyText")), 3)];
  })], 2)) : q("v-if", true), ke(S("div", { ref: "dropIndicator$", class: H(t.ns.e("drop-indicator")) }, null, 2), [[Te, t.dragState.showDropIndicator]])], 2);
}
var wn = He(bn, [["render", kn], ["__file", "tree.vue"]]);
const kt = Jt(wn), at = async () => {
  const t = Ye();
  return t.info.eid || await t.loadSelfInfo(), { did: 0, value: 0, name: t.info.name, label: t.info.name, index: 0, lastIndex: 0, children: [] };
}, re = { async fetch_department_tree(t) {
  let { data: { tree: e = [] } } = await Re.get("/api/departments/tree", { params: t }).catch(Me);
  const o = (n = {}) => (n = { ...n, children: n.children || [], ...n.department || {} }, n.label = n.name || "", n.value = n.did || 0, n.children = n.children.map((l, i) => (l = o(l), l.index = i, l.lastIndex = n.children.length - 1, l)), n);
  return e = e.map((n, l) => (n = o(n), n.index = l, n.lastIndex = e.length - 1, n)), [{ ...await at(), children: JSON.parse(JSON.stringify(e)) }];
}, async save(t) {
  t = JSON.parse(JSON.stringify(t));
  const e = t.did || 0;
  return delete t.did, typeof t.sort > "u" && (t.sort = 999999), t.pdid || (t.pdid = 0), await Re[e ? "put" : "post"](`/api/departments${e ? `/${e}` : ""}`, t).catch(Me);
}, async delete(t) {
  return await Re.delete(`/api/departments/${t}`).catch(Me);
} };
const Cn = { class: "w-full flex-center gap-4 relative" }, Nn = { class: "text-[#1D1E1F]" }, En = { class: "py-4 flex items-center justify-center" }, xn = G({ __name: "user-internal-add-dialog", emits: ["success"], setup(t, { expose: e, emit: o }) {
  const a = o, n = ie("organizationData") || N({}), l = N(), i = N(false), d = X({ users: [] }), p = N(false), b = N([]);
  let _ = null;
  const f = ({ success: D } = {}) => {
    m(), d.users = [], k(), _ = D, i.value = true;
  }, h = () => {
    i.value = false;
  }, m = async () => {
    const { list: D = [] } = await ee.fetch_internal_user({ offset: 0, limit: 1e4 });
    b.value = D;
  }, k = () => {
    const D = d.users[d.users.length - 1] || {};
    d.users.push({ nickname: "", username: "", password: D.password || "", did: D.did || n.value.did || 0 });
  }, $ = (D) => {
    d.users.splice(D, 1);
  }, E = (D, B, C) => {
    if (b.value.some((I) => I.username === B))
      return C(new Error(window.$t("internal_user.account.same_member_exists_tip")));
    const v = D.fullField || D.field || "";
    let x = Number(v.split(".")[1]);
    const w = [];
    if (d.users.forEach((I, s) => {
      s !== x && I.username === B && w.push(s + 1);
    }), w.length > 0)
      return C(new Error(window.$t("internal_user.account.same_mobile_exists_tip", { index: w.join("\u3001") })));
    C();
  }, T = async () => {
    if (!await l.value.validate())
      return;
    const B = JSON.parse(JSON.stringify(d.users)).map((v) => (v.did = v.did || 0, v));
    p.value = true;
    const { data: { failed: C = [] } = {} } = await ee.batch_save_internal_user({ users: B }).finally(() => {
      p.value = false;
    });
    if (C && C.length) {
      const v = C.filter((x) => x.existing_type == 1).map((x) => {
        const w = B.find((I) => I.username === x.username) || {};
        return x.did = w.did || 0, x;
      });
      await me.confirm(window.$t("internal_user.account.register_to_internal_confirm", { mobile: v.map((x) => x.message).join("\u3001") }), window.$t("tip")).then(() => ee.register_to_internal({ user_departments: v.map((x) => ({ did: x.did, user_id: x.user_id })) })).catch(() => Promise.resolve());
    }
    typeof _ == "function" && _(), a("success"), Y.success(window.$t("action_save_success")), h();
  };
  return e({ open: f, close: h }), (D, B) => {
    const C = oe, v = Ae, x = le, w = Fe, I = $e;
    return V(), j(I, { modelValue: i.value, "onUpdate:modelValue": B[1] || (B[1] = (s) => i.value = s), title: D.$t("action_add"), "close-on-click-modal": false, width: "920px", "destroy-on-close": "", "append-to-body": "", onClose: h }, { footer: u(() => [S("div", En, [r(x, { class: "w-[96px] h-[36px]", type: "primary", loading: p.value, onClick: T }, { default: u(() => [L(K(D.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"]), r(x, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: W(h, ["stop"]) }, { default: u(() => [L(K(D.$t("action_cancel")), 1)]), _: 1 })])]), default: u(() => [r(w, { class: "w-full", ref_key: "formRef", ref: l, model: d, "label-position": "top" }, { default: u(() => [(V(true), O(te, null, ae(d.users, (s, c) => (V(), j(v, { class: "w-full", key: s.did }, { default: u(() => [S("div", Cn, [r(v, { class: "flex-1 w-0", label: D.$t("internal_user.account.name"), prop: `users.${c}.nickname`, rules: A(he)({ message: "internal_user.account.name_placeholder" }) }, { default: u(() => [r(C, { modelValue: s.nickname, "onUpdate:modelValue": (g) => s.nickname = g, size: "large", placeholder: D.$t("internal_user.account.name_placeholder") }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), _: 2 }, 1032, ["label", "prop", "rules"]), r(v, { class: "flex-1 w-0", prop: `users.${c}.username`, rules: [...A(he)({ message: "internal_user.account.mobile_placeholder", validator: ["text", "mobile"] }), { validator: E, trigger: "blur" }] }, { label: u(() => [S("span", Nn, K(D.$t("internal_user.account.mobile")), 1)]), default: u(() => [r(C, { modelValue: s.username, "onUpdate:modelValue": (g) => s.username = g, size: "large", autocomplete: "new-username", name: "prevent_autofill_username", placeholder: D.$t("internal_user.account.mobile_placeholder"), clearable: "" }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), _: 2 }, 1032, ["prop", "rules"]), r(v, { class: "flex-1 w-0", label: D.$t("password"), prop: `users.${c}.password`, rules: [...A(he)({ message: "internal_user.account.password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: D.$t("login.password_length"), trigger: "blur" }] }, { default: u(() => [r(C, { modelValue: s.password, "onUpdate:modelValue": (g) => s.password = g, size: "large", placeholder: D.$t("internal_user.account.password_placeholder"), clearable: "", onBlur: B[0] || (B[0] = (g) => l.value.validateField("password")) }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), _: 2 }, 1032, ["label", "prop", "rules"]), q("", true), d.users.length > 1 ? (V(), j(x, { key: 1, class: "!size-4 translate-y-4", type: "danger", circle: "", size: "small", icon: A(Ht), onClick: (g) => $(c) }, null, 8, ["icon", "onClick"])) : q("", true)])]), _: 2 }, 1024))), 128))]), _: 1 }, 8, ["model"]), r(x, { type: "primary", link: "", onClick: k }, { default: u(() => [L(" + " + K(D.$t("internal_user.account.add")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), $n = { class: "relative" }, Dn = { key: 1, class: "w-full flex items-center flex-wrap gap-2" }, Sn = { class: "flex h-[400px]" }, Vn = { class: "flex-1 w-0 pr-4 box-border flex flex-col border-r border-[#E5E5E5]" }, Kn = { class: "w-full flex items-center gap-2 group" }, In = ["title"], Tn = { class: "flex-1 w-0 pl-4 box-border flex flex-col" }, zn = { class: "leading-[40px]" }, An = { class: "flex-1 h-0 w-full mt-3 bg-[#FBF8FB] rounded overflow-auto" }, Fn = { class: "box-border p-4 flex items-start flex-wrap gap-2" }, Un = { class: "py-4 flex items-center justify-end" }, wt = G({ __name: "index", props: { modelValue: { default: () => [] }, type: { default: "general" }, defaultFirstValue: { type: Boolean, default: true } }, emits: ["update:modelValue", "change", "confirm"], setup(t, { expose: e, emit: o }) {
  const a = t, n = o, l = N([]), i = N({}), d = N(false), p = N(JSON.parse(JSON.stringify(a.modelValue))), b = N(false), _ = ({ value: w = [] } = {}) => {
    w = JSON.parse(JSON.stringify(w)), p.value = w, n("update:modelValue", w), n("change", { value: w });
  }, f = async () => {
    d.value = true, l.value = await re.fetch_department_tree().finally(() => {
      d.value = false;
    }), i.value = l.value[0];
  }, h = N(), m = X({ keyword: "" });
  Ce(() => !!m.keyword);
  const k = () => {
    p.value = JSON.parse(JSON.stringify(a.modelValue)).map((w = {}) => (w.value = +w.value || +w.did || +w.user_id || 0, w.label = w.label || w.name || "", w)), b.value = true;
  }, $ = () => {
    b.value = false;
  }, E = () => {
    h.value.filter(m.keyword);
  }, T = (w, I) => w ? I.name.includes(w) : true, D = (w) => {
    p.value = p.value.filter((I) => I.value !== w.value);
  }, B = (w) => {
    p.value.some((I) => I.value === w.value) ? p.value = p.value.filter((I) => I.value !== w.value) : p.value.push(w);
  }, C = N([]), v = async () => {
    const w = { status: Qe, offset: 0, limit: 1e4 }, { list: I = [] } = await ee.fetch_internal_user(w);
    C.value = I.map((s = {}) => (s.value = +s.user_id || 0, s.label = s.nickname || s.name || "", s));
  }, x = () => {
    _({ value: p.value }), n("confirm", { value: p.value }), $();
  };
  return ce(async () => {
    if (["general", "department"].includes(a.type) && (i.value = await at(), a.defaultFirstValue && !a.modelValue.length && _({ value: [i.value] }), await Promise.all([f(), ["general"].includes(a.type) ? v() : Promise.resolve()]), ["general"].includes(a.type))) {
      const w = (I = {}) => (I.children = I.children.map((s, c) => (s = w(s), s)), C.value.forEach((s) => {
        const c = s.dept_id_list || [];
        (c.includes(I.did) || !c.length && I.did == 0) && I.children.push(JSON.parse(JSON.stringify(s)));
      }), I);
      l.value = l.value.map((I, s) => (I = w(I), I));
    }
  }), e({ open: k, close: $ }), (w, I) => {
    const s = We, c = le, g = oe, F = xe, M = kt, z = $e;
    return V(), O("div", $n, [w.$slots.trigger ? (V(), O("div", { key: 0, onClick: k }, [ze(w.$slots, "trigger")])) : q("", true), w.$slots.trigger ? q("", true) : (V(), O("ul", Dn, [(V(true), O(te, null, ae(w.modelValue, (U) => (V(), O("li", { key: U.value, class: "flex items-center gap-2 px-2 box-border border border-[#E5E5E5] rounded-sm text-[#666]" }, [r(s, { name: "department", width: "16px", height: "16px", color: "#57A1FF" }), L(" " + K(U.name), 1)]))), 128)), r(c, { type: "primary", link: "", onClick: k }, { default: u(() => [L(K(w.$t(w.modelValue.length ? "action_modify" : "action_add")), 1)]), _: 1 })])), r(z, { title: w.$t("action_select"), width: "650px", "close-on-click-modal": false, "destroy-on-close": "", "append-to-body": "", modelValue: b.value, "onUpdate:modelValue": I[1] || (I[1] = (U) => b.value = U) }, { footer: u(() => [S("div", Un, [r(c, { size: "large", onClick: W($, ["stop"]) }, { default: u(() => [L(K(w.$t("action_cancel")), 1)]), _: 1 }), r(c, { size: "large", type: "primary", onClick: x }, { default: u(() => [L(K(w.$t("action_confirm")), 1)]), _: 1 })])]), default: u(() => [S("div", Sn, [S("div", Vn, [r(g, { class: "w-full h-[36px]", modelValue: m.keyword, "onUpdate:modelValue": I[0] || (I[0] = (U) => m.keyword = U), size: "default", clearable: "", "prefix-icon": A(we), placeholder: w.$t("internal_user.organization.search_placeholder"), onChange: E }, null, 8, ["modelValue", "prefix-icon", "placeholder"]), r(M, { ref_key: "treeRef", ref: h, class: "mt-4 flex-1 h-0 box-border pr-1 overflow-auto", "node-key": "value", data: l.value, "default-expanded-keys": [0], "expand-on-click-node": false, "filter-node-method": T, onNodeClick: B, onNodeExpand: w.handleNodeExpand }, { default: u(({ data: U }) => [S("div", Kn, [r(s, { name: +U.user_id ? "member" : "department", width: "16px", height: "16px", color: p.value.some((J) => J.value === U.value) ? "#3664EF" : "#999" }, null, 8, ["name", "color"]), S("div", { class: H(["flex-1 w-0 text-sm truncate", [p.value.some((J) => J.value === U.value) ? "text-[#3664EF]" : "text-[#333]"]]), title: U.label }, K(U.label), 11, In), p.value.some((J) => J.value === U.value) ? (V(), j(F, { key: 0, color: "#3664EF" }, { default: u(() => [r(A(Gt))]), _: 1 })) : q("", true)])]), _: 1 }, 8, ["data", "onNodeExpand"])]), S("div", Tn, [S("h4", zn, K(w.$t("internal_user.scope.selected_title")), 1), S("div", An, [S("ul", Fn, [(V(true), O(te, null, ae(p.value, (U) => (V(), O("li", { key: U.value, class: "py-1 bg-white px-2 box-border border border-[#E5E5E5] rounded-sm" }, [r(s, { class: "inline-block mr-1", name: +U.user_id ? "member" : "department", width: "16px", height: "16px", color: "#939499" }, null, 8, ["name"]), L(" " + K(U.label) + " ", 1), r(c, { class: "ml-1 !outline-none !border-none !bg-[#C4C4C4] !size-4", style: { zoom: "0.9" }, icon: A(Yt), type: "info", size: "small", circle: "", onClick: (J) => D(U) }, null, 8, ["icon", "onClick"])]))), 128))])])])])]), _: 1 }, 8, ["title", "modelValue"])]);
  };
} }), Bn = { class: "flex items-center" }, Ct = G({ __name: "user-internal-status", props: { modelValue: { default: _e }, actionDisabled: { type: Boolean, default: false }, userData: { default: () => ({}) }, buttonClass: { default: "" }, size: { default: "default" } }, emits: ["update:modelValue", "change"], setup(t, { emit: e }) {
  const { proxy: o } = Ge(), a = /* @__PURE__ */ new Map([[_e, "info"], [ve, "success"], [Ke, "danger"]]), n = t, l = e, i = async (d) => {
    n.actionDisabled || (await ee.update_user_status({ user_id: n.userData.user_id, status: d }), Y.success(window.$t("action_save_success"))), l("update:modelValue", d), l("change", { value: d }), o.$forceUpdate();
  };
  return (d, p) => {
    const b = _t, _ = le, f = Ue, h = Be, m = Le;
    return V(), O("div", Bn, [r(b, { type: A(a).get(d.modelValue), effect: d.modelValue === A(_e) ? "plain" : "light", size: d.size }, { default: u(() => [L(K(d.$t(A(ct).get(d.modelValue) || "")), 1)]), _: 1 }, 8, ["type", "effect", "size"]), [A(ve), A(Ke)].includes(d.modelValue) ? (V(), j(m, { key: 0, trigger: "click", onCommand: i }, { dropdown: u(() => [r(h, null, { default: u(() => [r(f, { command: d.modelValue === A(ve) ? A(Ke) : A(ve) }, { default: u(() => [L(K(d.$t(d.modelValue === A(ve) ? "internal_user.action.disabled" : "internal_user.action.enable")), 1)]), _: 1 }, 8, ["command"])]), _: 1 })]), default: u(() => [S("span", null, [r(_, { class: H(["!px-2 ml-2", d.buttonClass]), size: d.size === "default" ? "small" : "default", icon: A(ut) }, null, 8, ["class", "size", "icon"])])]), _: 1 })) : q("", true)]);
  };
} }), Ln = { class: "text-[#999] text-sm mt-2" }, On = { class: "text-[#999] text-sm mt-2" }, Rn = { class: "pt-4 flex items-center justify-end border-t border-[#E5E5E5]" }, Mn = G({ __name: "user-internal-edit-drawer", emits: ["success"], setup(t, { expose: e, emit: o }) {
  const a = o, n = N(), l = N(false), i = X({ name: "", nickname: "", mobile: "", department: [], status: _e }), d = N(false);
  N([]);
  const p = N({});
  let b = null;
  const _ = ({ data: m = {}, success: k } = {}) => {
    const $ = (m.memberbindings || [])[0] || {};
    i.name = $.name || "", i.nickname = m.nickname || "", i.mobile = m.mobile || "", i.department = m.departments || [], i.status = +m.status || _e, p.value = m, b = k, l.value = true;
  }, f = () => {
    l.value = false;
  }, h = async () => {
    if (!await n.value.validate())
      return;
    d.value = true;
    const { data: { failed: k = [] } = {} } = await ee.update_internal_user({ user_id: p.value.user_id, department: i.department.map(($) => $.value), mobile: i.mobile, nickname: i.nickname, status: i.status }).finally(() => {
      d.value = false;
    });
    if (k && k.length) {
      const $ = k.filter((E) => E.existing_type == 1).map((E) => {
        const T = users.find((D) => D.username === E.username) || {};
        return E.did = T.did || 0, E;
      });
      await me.confirm(window.$t("internal_user.account.register_to_internal_confirm", { mobile: $.map((E) => E.username).join("\u3001") }), window.$t("tip")).then(() => {
        ee.register_to_internal({ user_departments: $.map((E) => ({ did: E.did, user_id: E.user_id })) });
      }).catch(() => Promise.resolve());
    }
    typeof b == "function" && b(), a("success"), Y.success(window.$t("action_save_success")), f();
  };
  return e({ open: _, close: f }), (m, k) => {
    const $ = oe, E = Ae, T = wt, D = Fe, B = le, C = on;
    return V(), j(C, { modelValue: l.value, "onUpdate:modelValue": k[5] || (k[5] = (v) => l.value = v), title: m.$t("internal_user.account.edit_member"), "close-on-click-modal": false, size: "700px", "destroy-on-close": "", "append-to-body": "", onClose: f }, { footer: u(() => [S("div", Rn, [r(B, { size: "large", onClick: W(f, ["stop"]) }, { default: u(() => [L(K(m.$t("action_cancel")), 1)]), _: 1 }), r(B, { size: "large", type: "primary", loading: d.value, onClick: h }, { default: u(() => [L(K(m.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])]), default: u(() => [r(D, { class: "w-full", ref_key: "formRef", ref: n, model: i, "label-position": "top" }, { default: u(() => [r(E, { label: m.$t("internal_user.account.name") }, { default: u(() => [r($, { modelValue: i.name, "onUpdate:modelValue": k[0] || (k[0] = (v) => i.name = v), size: "large", disabled: "", placeholder: m.$t("internal_user.account.name_placeholder") }, null, 8, ["modelValue", "placeholder"]), S("div", Ln, K(m.$t("internal_user.account.name_disabled_tip")), 1)]), _: 1 }, 8, ["label"]), r(E, { class: "is-required", label: m.$t("internal_user.account.nickname"), prop: "nickname", rules: A(he)({ message: "internal_user.account.nickname_placeholder" }) }, { default: u(() => [r($, { modelValue: i.nickname, "onUpdate:modelValue": k[1] || (k[1] = (v) => i.nickname = v), size: "large", placeholder: m.$t("internal_user.account.nickname_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), r(E, { class: "is-required", label: m.$t("internal_user.account.mobile"), prop: "mobile", rules: [...A(he)({ message: "internal_user.account.mobile_placeholder", validator: ["text", "mobile"] })] }, { default: u(() => [r($, { modelValue: i.mobile, "onUpdate:modelValue": k[2] || (k[2] = (v) => i.mobile = v), size: "large", autocomplete: "new-mobile", placeholder: m.$t("internal_user.account.mobile_placeholder"), disabled: p.value.status !== A(_e), clearable: "" }, null, 8, ["modelValue", "placeholder", "disabled"]), S("div", On, K(m.$t("internal_user.account.mobile_disabled_tip")), 1)]), _: 1 }, 8, ["label", "rules"]), r(E, { label: m.$t("internal_user.account.department"), prop: "department" }, { default: u(() => [r(T, { modelValue: i.department, "onUpdate:modelValue": k[3] || (k[3] = (v) => i.department = v), type: "department" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), r(E, { label: m.$t("internal_user.account.status"), prop: "status" }, { default: u(() => [r(Ct, { modelValue: i.status, "onUpdate:modelValue": k[4] || (k[4] = (v) => i.status = v), userData: p.value, actionDisabled: "", size: "large" }, null, 8, ["modelValue", "userData"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), Pn = { key: 0, class: "flex items-center gap-2" }, jn = ["title"], qn = { class: "flex items-center justify-between" }, Jn = { class: "flex items-center gap-3" }, Hn = { class: "!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer" }, Gn = { class: "flex-center gap-3" }, Yn = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, Nt = G({ __name: "account", setup(t) {
  const e = ie("organizationData") || N({}), o = Ce(() => !!(e.value.name || e.value.nickname)), a = Ye(), n = Wt(), l = [Qe, _e, ve, Ke].map((C) => ({ value: C, label: ct.get(C) })), i = N(), d = N(), p = X({ status: -1, keyword: "", page: 1, pageSize: 10 }), b = N(false), _ = N([]), f = N(0), h = (C) => {
    p.status = C, m();
  }, m = () => {
    p.page = 1, k();
  }, k = async () => {
    if (b.value)
      return;
    b.value = true;
    let C = { status: p.status, keyword: p.keyword, offset: (p.page - 1) * p.pageSize, limit: p.pageSize };
    e.value && (e.value.user_id ? C.keyword = e.value.nickname || "" : e.value.did && (C.did = e.value.did)), C.status < 0 && delete C.status;
    const { total: v = 0, list: x = [] } = await ee.fetch_internal_user(C).finally(() => {
      b.value = false;
    });
    _.value = x.map((w) => (w.deleting = false, w)), f.value = +v || 0;
  }, $ = () => {
    i.value.open({ success: () => {
      m();
    } });
  }, E = (C) => {
    d.value.open({ data: C, success: () => {
      k();
    } });
  }, T = async (C) => {
    await me.confirm(window.$t("module.operation_user_delete_confirm")), C.deleting = true, await ee.delete_user({ user_id: C.user_id }).finally(() => {
      C.deleting = false;
    }), Y.success(window.$t("action_delete_success")), k();
  }, D = (C) => {
    p.pageSize = C, m();
  }, B = (C) => {
    p.page = C, k();
  };
  return ce(async () => {
    m();
  }), Xe(() => {
  }), Q(() => e.value, () => {
    m();
  }, { deep: true }), (C, v) => {
    const x = xe, w = Ue, I = Be, s = Le, c = oe, g = le, F = tt, M = et;
    return V(), O("div", { class: H(["max-h-ful flex flex-col bg-white py-6 box-border overflow-auto", [o.value ? "px-5" : "px-8"]]) }, [o.value ? (V(), O("div", Pn, [S("div", { class: "h-[40px] text-[#333] text-xl truncate", title: A(e).name }, K(C.$t("internal_user.department.member_total_count", { name: A(e).name, total: f.value })), 9, jn)])) : q("", true), S("div", qn, [S("div", Jn, [r(s, { placement: "bottom", onCommand: h }, { dropdown: u(() => [r(I, null, { default: u(() => [(V(true), O(te, null, ae(A(l), (z) => (V(), j(w, { key: z.value, command: z.value }, { default: u(() => [L(K(C.$t(z.label)), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: u(() => {
      var _a2;
      return [S("div", Hn, [L(K(C.$t(((_a2 = A(l).find((z) => z.value === p.status)) == null ? void 0 : _a2.label) || "internal_user.status.all")) + " ", 1), r(x, { size: "14", color: "#9EA5B6" }, { default: u(() => [r(A(ut))]), _: 1 })])];
    }), _: 1 })]), S("div", Gn, [o.value ? q("", true) : (V(), j(c, { key: 0, modelValue: p.keyword, "onUpdate:modelValue": v[0] || (v[0] = (z) => p.keyword = z), style: { width: "268px" }, size: "large", clearable: "", "suffix-icon": A(we), placeholder: C.$t("internal_user.account.search_placeholder"), onChange: m }, null, 8, ["modelValue", "suffix-icon", "placeholder"])), r(g, { class: "min-w-[100px]", type: "primary", size: "large", onClick: $ }, { default: u(() => [L(K(C.$t("action_add")), 1)]), _: 1 })])]), S("div", Yn, [r(M, { data: _.value, total: f.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", "row-class-name": "group", loading: b.value, onPageCurrentChange: B, onPageSizeChange: D }, { default: u(() => [r(F, { label: C.$t("internal_user.account.nickname"), "min-width": "140", prop: "nickname", "show-overflow-tooltip": "" }, null, 8, ["label"]), r(F, { label: C.$t("internal_user.account.mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: u(({ row: z }) => [S("span", { class: H({ "text-[#9B9B9B]": !z.mobile }) }, K(z.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), r(F, { label: C.$t("internal_user.account.department"), "min-width": "140", prop: "department", "show-overflow-tooltip": "" }, { default: u(({ row: z }) => [S("span", null, K(z.dept_names || A(a).info.name || "--"), 1)]), _: 1 }, 8, ["label"]), r(F, { label: C.$t("internal_user.account.status"), "min-width": "140", prop: "status", "show-overflow-tooltip": "" }, { default: u(({ row: z }) => [r(Ct, { modelValue: z.status, "onUpdate:modelValue": (U) => z.status = U, userData: z, buttonClass: "invisible group-hover:visible" }, null, 8, ["modelValue", "onUpdate:modelValue", "userData"])]), _: 1 }, 8, ["label"]), r(F, { label: C.$t("operation"), width: "120", fixed: "right", align: "right" }, { default: u(({ row: z }) => [r(g, { class: "text-[#5A6D9E] !bg-transparent", type: "text", onClick: (U) => E(z) }, { default: u(() => [L(K(C.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), r(g, { class: "text-[#5A6D9E] !bg-transparent !w-[30px] text-left", type: "text", loading: z.deleting, disabled: z.user_id == A(n).info.user_id, onClick: (U) => T(z) }, { default: u(() => [L(K(z.user_id == A(n).info.user_id ? "--" : C.$t("action_delete")), 1)]), _: 2 }, 1032, ["loading", "disabled", "onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading"])]), r(xn, { ref_key: "userAddRef", ref: i }, null, 512), r(Mn, { ref_key: "userEditRef", ref: d }, null, 512)], 2);
  };
} }), Wn = { class: "relative" }, Qn = { key: 1, class: "w-full flex items-center flex-wrap gap-2" }, Xn = ["src"], Zn = { class: "text-[#333] inline-block mt-2 ml-2" }, ea = { class: "w-full flex items-center justify-between gap-4" }, ta = { class: "flex-1 w-0" }, na = { class: "flex items-center gap-2 w-full" }, aa = ["src"], oa = { class: "flex-1 w-0 text-sm flex flex-col" }, la = { class: "text-[#2563EB] truncate" }, sa = { class: "py-4 flex items-center justify-between" }, ra = ["innerHTML"], da = { class: "flex-center" }, ia = G({ __name: "index", props: { modelValue: { default: () => [] } }, emits: ["update:modelValue", "change", "confirm", "remove"], setup(t, { expose: e, emit: o }) {
  const a = t, n = o, l = N(), i = N(JSON.parse(JSON.stringify(a.modelValue))), d = N(false), p = N([]), b = N(0), _ = N(false), f = X({ group_id: "-1", keyword: "", page: 1, pageSize: 10 }), h = N(/* @__PURE__ */ new Map([])), m = Ce(() => {
    let s = Array.from(h.value.values()).flat();
    return s = s.filter((c, g, F) => g === F.findIndex((M) => M.agent_id === c.agent_id) && !a.modelValue.find((M) => M.agent_id === c.agent_id)), s;
  }), k = ({ value: s = [] } = {}) => {
    s = JSON.parse(JSON.stringify(s)), i.value = s, n("update:modelValue", s), n("change", { value: s });
  }, $ = async () => {
    _.value = true;
    const { count: s = 0, agents: c = [] } = await rn.list({ params: { group_id: f.group_id, keyword: f.keyword, offset: (f.page - 1) * f.pageSize, limit: f.pageSize } }).catch(() => {
      _.value = false;
    });
    b.value = s, p.value = [], await de(), p.value = c.map((g = {}) => (g.value = +g.agent_id || 0, g.label = g.name || "", g)), await de(), m.value.length && (await de(), m.value.forEach((g = {}) => {
      const F = p.value.find((M) => M.agent_id === g.agent_id);
      F && l.value.toggleRowSelection(F);
    })), await de(), p.value.forEach((g = {}) => {
      !!a.modelValue.find((M) => M.agent_id === g.agent_id) && !m.value.find((M) => M.agent_id === g.agent_id) && l.value.toggleRowSelection(g);
    }), _.value = false;
  }, E = async () => {
    h.value = /* @__PURE__ */ new Map([]), i.value = JSON.parse(JSON.stringify(a.modelValue)).map((s = {}) => (s.value = +s.value || +s.agent_id || 0, s.label = s.label || s.name || "", s)), d.value = true, await de(), D();
  }, T = () => {
    d.value = false;
  }, D = () => (f.page = 1, $()), B = (s) => {
    f.pageSize = s, D();
  }, C = (s) => {
    f.page = s, $();
  }, v = (s) => {
    _.value || h.value.set(f.group_id, [...s]);
  }, x = (s = {}) => !!!a.modelValue.find((g) => g.agent_id === s.agent_id), w = (s) => {
    i.value = i.value.filter((c) => c.value !== s.value), n("remove", { value: [s] });
  }, I = () => {
    const s = JSON.parse(JSON.stringify(m.value));
    k({ value: s }), n("confirm", { value: s }), T();
  };
  return ce(async () => {
  }), e({ open: E, close: T }), (s, c) => {
    const g = le, F = _t, M = ln, z = oe, U = tt, J = et, ue = $e;
    return V(), O("div", Wn, [s.$slots.trigger ? (V(), O("div", { key: 0, onClick: E }, [ze(s.$slots, "trigger", {}, void 0, true)])) : q("", true), s.$slots.trigger ? q("", true) : (V(), O("div", Qn, [r(g, { type: "default", class: "!bg-transparent !border-dashed border-[#3664EF] text-[#3664EF]", plain: "", size: "large", onClick: E }, { default: u(() => [L(" + " + K(s.$t("action_add")), 1)]), _: 1 }), (V(true), O(te, null, ae(s.modelValue, (y) => (V(), j(F, { key: y.value, size: "large", effect: "plain", type: "info", closable: "", class: "!h-[40px]", onClose: (R) => w(y) }, { default: u(() => [S("img", { class: "size-6 inline-block object-contain rounded-full overflow-hidden", src: y.logo || "" }, null, 8, Xn), S("label", Zn, K(y.label), 1)]), _: 2 }, 1032, ["onClose"]))), 128))])), r(ue, { modelValue: d.value, "onUpdate:modelValue": c[2] || (c[2] = (y) => d.value = y), title: s.$t("action_select"), "close-on-click-modal": false, width: "800px", "destroy-on-close": "", "append-to-body": "", "align-center": "", onClose: T }, { footer: u(() => [S("div", sa, [S("div", { class: "text-sm text-[#768097] text-left", innerHTML: s.$t("selected_tip", { total: `<span class='text-[#3664EF]'>${m.value.length}</span>` }) }, null, 8, ra), S("div", da, [r(g, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: W(T, ["stop"]) }, { default: u(() => [L(K(s.$t("action_cancel")), 1)]), _: 1 }), r(g, { class: "w-[96px] h-[36px]", type: "primary", loading: _.value, disabled: !m.value.length, onClick: I }, { default: u(() => [L(K(s.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading", "disabled"])])])]), default: u(() => [S("div", ea, [S("div", ta, [r(M, { ref: "group_tabs_ref", modelValue: f.group_id, "onUpdate:modelValue": c[0] || (c[0] = (y) => f.group_id = y), "group-type": A(sn), onChange: D }, null, 8, ["modelValue", "group-type"])]), r(z, { modelValue: f.keyword, "onUpdate:modelValue": c[1] || (c[1] = (y) => f.keyword = y), style: { width: "220px" }, size: "large", clearable: "", "suffix-icon": A(we), placeholder: s.$t("module.agent_search_placeholder"), onChange: D }, null, 8, ["modelValue", "suffix-icon", "placeholder"])]), r(J, { ref_key: "tableRef", ref: l, class: "mt-5", page: f.page, limit: f.pageSize, data: p.value, total: b.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", loading: _.value, "max-height": "54vh", onPageSizeChange: B, onPageCurrentChange: C, onSelectionChange: v }, { default: u(() => [r(U, { type: "selection", width: "40", selectable: x }), r(U, { prop: "date", label: s.$t("module.agent"), "min-width": "260", "show-overflow-tooltip": "" }, { default: u(({ row: y }) => [S("div", na, [S("img", { class: "flex-none w-8 h-8 rounded-full overflow-hidden", src: y.logo, alt: "" }, null, 8, aa), S("div", oa, [S("div", la, K(y.name || "--"), 1), ke(S("div", { class: "text-xs text-[#808080] truncate" }, K(y.description || ""), 513), [[Te, y.description]])])])]), _: 1 }, 8, ["label"]), r(U, { label: s.$t("type"), width: "200", "show-overflow-tooltip": "" }, { default: u(({ row: y = {} }) => [L(K(s.$t(y.agent_type_label) || "--"), 1)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["page", "limit", "data", "total", "loading"])]), _: 1 }, 8, ["modelValue", "title"])]);
  };
} });
const ca = Ze(ia, [["__scopeId", "data-v-7b80121c"]]), ua = { class: "py-4 flex items-center justify-center" }, pa = G({ __name: "group-add-dialog", emits: ["success"], setup(t, { expose: e, emit: o }) {
  const a = o, n = N(), l = N(false), i = N(false), d = X({ name: "" }), p = N({}), b = N(false);
  let _ = null;
  const f = ({ data: $ = {}, success: E = null } = {}) => {
    m(), _ = E, i.value = !!$.group_id, d.name = $.group_name || "", p.value = $, l.value = true;
  }, h = () => {
    l.value = false;
  }, m = () => {
    d.name = "";
  }, k = async () => {
    if (!await n.value.validate())
      return;
    let E = { group_id: p.value.group_id, group_type: vt, group_name: d.name, sort: +p.value.sort || 0 };
    b.value = true, await ne.single_save(E).finally(() => {
      b.value = false;
    }), typeof _ == "function" && _({ data: E }), a("success"), Y.success(window.$t("action_save_success")), h();
  };
  return e({ open: f, close: h, reset: m }), ($, E) => {
    const T = oe, D = Ae, B = Fe, C = le, v = $e;
    return V(), j(v, { modelValue: l.value, "onUpdate:modelValue": E[1] || (E[1] = (x) => l.value = x), title: $.$t(i.value ? "action_edit" : "action_create"), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", onClose: h }, { footer: u(() => [S("div", ua, [r(C, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: W(h, ["stop"]) }, { default: u(() => [L(K($.$t("action_cancel")), 1)]), _: 1 }), r(C, { class: "w-[96px] h-[36px]", type: "primary", loading: b.value, onClick: k }, { default: u(() => [L(K($.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"])])]), default: u(() => [r(B, { ref_key: "formRef", ref: n, model: d, "label-position": "top" }, { default: u(() => [r(D, { class: "is-required", label: $.$t("name"), prop: "name", rules: A(he)({ message: "form_input_placeholder" }) }, { default: u(() => [r(T, { modelValue: d.name, "onUpdate:modelValue": E[0] || (E[0] = (x) => d.name = x), size: "large", maxlength: "20", "show-word-limit": "", placeholder: $.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), fa = { class: "flex items-center gap-2" }, ha = { class: "flex-1 h-0 w-full box-border mt-4 overflow-auto" }, ma = ["onClick"], _a = ["title"], ga = { class: "text-[#F56C6C]" }, va = { class: "w-full flex items-center gap-2 mt-4" }, ya = { class: "h-[36px] flex items-center" }, ba = { key: 0 }, ka = { class: "flex items-center justify-between h-[40px] gap-4" }, wa = ["title"], Ca = { class: "flex items-center gap-4" }, Na = { key: 1 }, Ea = { class: "flex items-center gap-4 mt-2" }, xa = { class: "h-[36px] leading-[36px] px-3 text-sm text-[#3664EF] bg-[#E9EFFF] rounded-md" }, $a = G({ __name: "group", setup(t) {
  const e = Ye(), o = N(), a = X({ groupKeyword: "", groupId: 0, activeTabIndex: 0 }), n = N([]), l = N(false), i = Ce(() => n.value.find((c) => c.group_id === a.groupId) || {}), d = async () => {
    l.value = true;
    const c = await ne.list({ params: { group_type: vt } }).finally(() => {
      l.value = false;
    });
    n.value = c.filter((g) => g.group_name && g.group_name.includes(a.groupKeyword)), a.groupId || (a.groupId = (n.value[0] || {}).group_id || 0);
  }, p = (c = {}) => {
    a.groupId = c.group_id, f();
  }, b = async (c, g, F) => {
    switch (c) {
      case "create":
      case "rename":
        o.value.open({ data: g, success: () => {
          d();
        } });
        break;
      case "delete":
        await me.confirm(window.$t("group_delete_confirm"), window.$t("action_delete")), await ne.delete({ data: { group_id: g.group_id } }), Y.success(window.$t("action_delete_success")), d();
        break;
    }
  }, _ = (c) => {
    a.activeTabIndex = c, f();
  }, f = () => {
    if (a.activeTabIndex === 0)
      return h.page = 1, E();
    if (a.activeTabIndex === 1)
      return w();
  }, h = X({ keyword: "", page: 1, pageSize: 10 }), m = N([]), k = N(0), $ = N(false), E = async () => {
    $.value = true;
    const { total: c = 0, list: g = [] } = await ne.user_list({ group_id: a.groupId, keyword: h.keyword, offset: (h.page - 1) * h.pageSize, limit: h.pageSize }).finally(() => {
      $.value = false;
    });
    k.value = c, m.value = [...g];
  }, T = (c) => {
    h.page = c, E();
  }, D = (c) => {
    h.pageSize = c, f();
  }, B = async ({ value: c = [] } = {}) => {
    const g = c.filter((z) => +z.did).map((z) => +z.did), F = c.filter((z) => +z.user_id).map((z) => +z.user_id), M = { group_id: a.groupId, department_ids: g, user_ids: F };
    await ne.batch_add_user(M), Y.success(window.$t("action_add_success")), f();
  }, C = async (c = {}) => {
    await me.confirm(window.$t("internal_user.group.remove_user_confirm"), window.$t("tip")), await ne.remove_user({ group_id: a.groupId, permission_ids: [c.permission_id] }), Y.success(window.$t("action_remove_success")), E();
  }, v = N([]), x = N(false), w = async () => {
    x.value = true;
    const { list: c = [] } = await ne.agent_list({ group_id: a.groupId, offset: 0, limit: 1e3 }).finally(() => {
      x.value = false;
    });
    v.value = c;
  }, I = async ({ value: c = [] } = {}) => {
    const g = c.filter((M) => +M.agent_id).map((M) => +M.agent_id), F = { group_id: a.groupId, agent_ids: g };
    await ne.batch_add_agent(F), Y.success(window.$t("action_add_success")), f();
  }, s = async ({ value: c = [] } = {}) => {
    const g = c.filter((F) => +F.agent_id).map((F) => +F.agent_id);
    await me.confirm(window.$t("internal_user.group.remove_agent_confirm"), window.$t("tip")), await ne.remove_agent({ group_id: a.groupId, agent_ids: g }), Y.success(window.$t("action_remove_success")), w();
  };
  return ce(async () => {
    await d(), f();
  }), (c, g) => {
    const F = oe, M = xe, z = Ue, U = Be, J = Le, ue = cn, y = le, R = ft, Z = dn, pe = wt, Et = We, De = tt, xt = et, $t = ca, Dt = ht, St = mt, Vt = gt;
    return V(), j(St, { class: "bg-white h-full" }, { default: u(() => [r(R, { width: "280px", class: "flex flex-col px-5 py-6 box-border border-r border-[#e5e5e5]" }, { default: u(() => [S("div", fa, [r(F, { class: "flex-1 h-[36px]", modelValue: a.groupKeyword, "onUpdate:modelValue": g[0] || (g[0] = (P) => a.groupKeyword = P), size: "default", clearable: "", "prefix-icon": A(we), placeholder: c.$t("internal_user.group.search_placeholder"), onChange: d }, null, 8, ["modelValue", "prefix-icon", "placeholder"])]), ke((V(), O("ul", ha, [(V(true), O(te, null, ae(n.value, (P, ot) => (V(), O("li", { key: P.group_id, class: "group w-full box-border flex items-center gap-2 cursor-pointer hover:bg-[#f5f7fa]", onClick: (lt) => p(P) }, [S("div", { class: H(["flex-1 w-0 box-border text-sm truncate rounded-md py-2 px-4 hover:bg-[#F5F8FF]", [a.groupId === P.group_id ? "text-[#3664EF]" : "text-[#333]"]]), title: P.group_name }, K(P.group_name || "--"), 11, _a), r(J, { onCommand: (lt) => b(lt, P, ot) }, { dropdown: u(() => [r(U, null, { default: u(() => [r(z, { command: "rename" }, { default: u(() => [L(K(c.$t("action_rename")), 1)]), _: 1 }), r(z, { command: "delete" }, { default: u(() => [S("span", ga, K(c.$t("action_delete")), 1)]), _: 1 })]), _: 1 })]), default: u(() => [S("span", null, [r(M, { class: "text-[#999] rotate-90 mr-2 cursor-pointer invisible group-hover:visible" }, { default: u(() => [r(A(pt))]), _: 1 })])]), _: 2 }, 1032, ["onCommand"])], 8, ma))), 128)), n.value.length ? q("", true) : (V(), j(ue, { key: 0, class: "mt-10", description: c.$t("no_data") }, null, 8, ["description"]))])), [[Vt, l.value]]), S("div", va, [r(y, { type: "primary", plain: "", size: "large", class: "mx-auto !border-none", onClick: g[1] || (g[1] = (P) => b("create")) }, { default: u(() => [L(" +" + K(c.$t("internal_user.group.create")), 1)]), _: 1 })])]), _: 1 }), r(Dt, null, { default: u(() => [S("div", ya, [S("label", { class: H(["cursor-pointer", [a.activeTabIndex === 0 ? "text-[#3664EF]" : "text-[#333]"]]), onClick: g[2] || (g[2] = (P) => _(0)) }, K(c.$t("internal_user.group.member")), 3), r(Z, { direction: "vertical" }), S("label", { class: H(["cursor-pointer", [a.activeTabIndex === 1 ? "text-[#3664EF]" : "text-[#333]"]]), onClick: g[3] || (g[3] = (P) => _(1)) }, K(c.$t("internal_user.group.usable")), 3)]), a.activeTabIndex === 0 ? (V(), O("div", ba, [S("div", ka, [S("h1", { title: i.value.group_name, class: "truncate" }, K(i.value.group_name || "--"), 9, wa), S("div", Ca, [r(F, { modelValue: h.keyword, "onUpdate:modelValue": g[4] || (g[4] = (P) => h.keyword = P), style: { width: "268px" }, size: "large", clearable: "", "prefix-icon": A(we), placeholder: c.$t("internal_user.organization.search_placeholder"), onChange: f }, null, 8, ["modelValue", "prefix-icon", "placeholder"]), r(pe, { onConfirm: B }, { trigger: u(() => [r(y, { class: "min-w-[100px]", type: "primary", size: "large" }, { default: u(() => [L(K(c.$t("action_add")), 1)]), _: 1 })]), _: 1 })])]), r(xt, { class: "mt-4", data: m.value, total: k.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", loading: $.value, "max-height": "calc(100vh - 360px)", onPageCurrentChange: T, onPageSizeChange: D }, { default: u(() => [r(De, { label: c.$t("internal_user.account.name"), "min-width": "140", prop: "nickname", "show-overflow-tooltip": "" }, { default: u(({ row: P }) => [r(Et, { class: "inline-block mr-2", name: P.resource_type === "department" ? "department" : "member", width: "16px", height: "16px", color: "#999" }, null, 8, ["name"]), L(" " + K(P.nickname || P.name || "--"), 1)]), _: 1 }, 8, ["label"]), r(De, { label: c.$t("internal_user.account.mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: u(({ row: P }) => [S("span", { class: H({ "text-[#9B9B9B]": !P.mobile }) }, K(P.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), r(De, { label: c.$t("internal_user.account.department"), "min-width": "140", prop: "department", "show-overflow-tooltip": "" }, { default: u(({ row: P }) => [S("span", null, K(P.dept_names || A(e).info.name || "--"), 1)]), _: 1 }, 8, ["label"]), r(De, { label: c.$t("operation"), width: "80", fixed: "right", align: "right" }, { default: u(({ row: P }) => [r(y, { class: "text-[#5A6D9E] !bg-transparent", type: "text", loading: P.deleting, onClick: (ot) => C(P) }, { default: u(() => [L(K(c.$t("action_remove")), 1)]), _: 2 }, 1032, ["loading", "onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading"])])) : a.activeTabIndex === 1 ? (V(), O("div", Na, [S("div", Ea, [S("div", xa, K(c.$t("agent")), 1)]), r($t, { class: "mt-4", modelValue: v.value, "onUpdate:modelValue": g[5] || (g[5] = (P) => v.value = P), onConfirm: I, onRemove: s }, null, 8, ["modelValue"])])) : q("", true)]), _: 1 }), r(pa, { ref_key: "groupAddRef", ref: o }, null, 512)]), _: 1 });
  };
} }), Da = { class: "py-4 flex items-center justify-center" }, Sa = 999999, Va = G({ __name: "department-add-dialog", emits: ["success"], setup(t, { expose: e, emit: o }) {
  const a = o, n = N(), l = N(false), i = N(false), d = X({ name: "" }), p = N({}), b = N(false), _ = N(0), f = N([]);
  let h = null;
  const m = ({ data: T = {}, parentDid: D = 0, parentChildren: B = [], success: C = null } = {}) => {
    $(), h = C, i.value = !!T.did, d.name = T.name || "", p.value = T, _.value = D, f.value = B, l.value = true;
  }, k = () => {
    l.value = false;
  }, $ = () => {
    d.name = "";
  }, E = async () => {
    if (!await n.value.validate())
      return;
    let D = { did: p.value.did, name: d.name, pdid: +_.value || +p.value.pdid || 0, sort: p.value.sort || Sa - f.value.length };
    b.value = true, await re.save(D).finally(() => {
      b.value = false;
    }), typeof h == "function" && h({ data: D }), a("success"), Y.success(window.$t("action_save_success")), k();
  };
  return e({ open: m, close: k, reset: $ }), (T, D) => {
    const B = oe, C = Ae, v = Fe, x = le, w = $e;
    return V(), j(w, { modelValue: l.value, "onUpdate:modelValue": D[1] || (D[1] = (I) => l.value = I), title: T.$t(i.value ? "internal_user.department.edit" : "internal_user.department.create"), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", onClose: k }, { footer: u(() => [S("div", Da, [r(x, { class: "w-[96px] h-[36px]", type: "primary", loading: b.value, onClick: E }, { default: u(() => [L(K(T.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), r(x, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: W(k, ["stop"]) }, { default: u(() => [L(K(T.$t("action_cancel")), 1)]), _: 1 })])]), default: u(() => [r(v, { ref_key: "formRef", ref: n, model: d, "label-position": "top" }, { default: u(() => [r(C, { label: T.$t("internal_user.department.name"), prop: "name", rules: A(he)({ message: "internal_user.department.name_placeholder" }) }, { default: u(() => [r(B, { modelValue: d.name, "onUpdate:modelValue": D[0] || (D[0] = (I) => d.name = I), size: "large", maxlength: "20", "show-word-limit": "", placeholder: T.$t("internal_user.department.name_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), Ka = { class: "px-4 py-6 flex flex-col h-full" }, Ia = { class: "flex items-center gap-2" }, Ta = { class: "mt-4 min-h-[300px] flex-1 h-0 overflow-auto" }, za = { class: "w-full flex items-center gap-2 group" }, Aa = ["title"], Fa = { key: 0, class: "pb-4 w-full box-border" }, Ua = ["onClick"], Ba = ["title"], La = G({ __name: "department-tree", emits: ["node-click"], setup(t, { expose: e, emit: o }) {
  const a = o, n = N(), l = X({ keyword: "" }), i = N(), d = N([]), p = N([]), b = N(false), _ = Ce(() => !!l.keyword), f = N({}), h = async () => (p.value = [], _.value ? (n.value.filter(l.keyword), m()) : k()), m = async () => {
    b.value = true;
    const { list: v = [] } = await ee.fetch_internal_user({ status: Qe, keyword: l.keyword, offset: 0, limit: 1e4 }).finally(() => {
      b.value = false;
    });
    p.value = v.map((x = {}) => (x.name = f.value.name, x));
  }, k = async () => {
    b.value = true, d.value = await re.fetch_department_tree().finally(() => {
      b.value = false;
    }), f.value = d.value[0];
  }, $ = async (v, x, w) => {
    const c = ((n.value.getNode(x.pdid) || {}).data || {}).children || [], g = c[w - 1] || {}, F = c[w + 1] || {};
    switch (v) {
      case "add_children":
        i.value.open({ parentDid: x.did, parentChildren: x.children, success: h });
        break;
      case "update_name":
        i.value.open({ data: x, success: ({ data: M = {} } = {}) => {
          x.name = x.label = M.name;
        } });
        break;
      case "move_up":
        b.value = true, await Promise.all([re.save({ did: x.did, name: x.name, pdid: x.pdid, sort: g.sort }), re.save({ did: g.did, name: g.name, pdid: g.pdid, sort: x.sort })]).finally(() => {
          b.value = false;
        }), Y.success(window.$t("action_save_success")), h();
        break;
      case "move_down":
        b.value = true, await Promise.all([re.save({ did: x.did, name: x.name, pdid: x.pdid, sort: F.sort }), re.save({ did: F.did, name: F.name, pdid: F.pdid, sort: x.sort })]).finally(() => {
          b.value = false;
        }), Y.success(window.$t("action_save_success")), h();
        break;
      case "delete":
        await me.confirm(window.$t("internal_user.department.delete_confirm"), window.$t("tip")), b.value = true, await re.delete(x.did).finally(() => {
          b.value = false;
        }), Y.success(window.$t("action_delete_success")), h();
        break;
    }
  }, E = N([0]), T = (v, x, w) => {
    E.value.push(v.did);
  }, D = (v, x, w) => {
    E.value = E.value.filter((I) => I !== v.did);
  }, B = (v, x) => v ? x.name.includes(v) : true, C = (v) => {
    a("node-click", { data: v });
  };
  return ce(() => {
    k();
  }), e({ refresh: h }), (v, x) => {
    const w = oe, I = xe, s = We, c = Ue, g = Be, F = Le, M = kt, z = gt;
    return V(), O("div", Ka, [S("div", Ia, [r(w, { class: "flex-1 h-[36px]", modelValue: l.keyword, "onUpdate:modelValue": x[0] || (x[0] = (U) => l.keyword = U), size: "default", clearable: "", "prefix-icon": A(we), placeholder: v.$t("internal_user.organization.search_placeholder"), onChange: h }, null, 8, ["modelValue", "prefix-icon", "placeholder"]), r(I, { size: "18", color: "#333333", class: "cursor-pointer", onClick: x[1] || (x[1] = (U) => $("add_children", d.value[0], 0)) }, { default: u(() => [r(A(Qt))]), _: 1 })]), ke((V(), O("div", Ta, [r(M, { ref_key: "treeRef", ref: n, "node-key": "did", data: d.value, class: H([p.value.length ? "hidden-empty-block" : ""]), "default-expanded-keys": _.value ? [] : E.value, "filter-node-method": B, onNodeExpand: T, onNodeCollapse: D, onNodeClick: C }, { default: u(({ node: U, data: J }) => [S("div", za, [r(s, { name: "department", width: "16px", height: "16px", color: "#57A1FF" }), S("div", { class: "flex-1 w-0 text-[#333] text-sm truncate", title: J.label }, K(J.label), 9, Aa), _.value ? q("", true) : (V(), j(F, { key: 0, onCommand: (ue) => $(ue, J, J.index) }, { dropdown: u(() => [r(g, null, { default: u(() => [r(c, { command: "add_children" }, { default: u(() => [L(K(v.$t("internal_user.department.add_children")), 1)]), _: 1 }), J.did ? (V(), O(te, { key: 0 }, [r(c, { command: "update_name" }, { default: u(() => [L(K(v.$t("internal_user.department.update_name")), 1)]), _: 1 }), J.index > 0 ? (V(), j(c, { key: 0, command: "move_up" }, { default: u(() => [L(K(v.$t("internal_user.department.move_up")), 1)]), _: 1 })) : q("", true), J.lastIndex > J.index ? (V(), j(c, { key: 1, command: "move_down" }, { default: u(() => [L(K(v.$t("internal_user.department.move_down")), 1)]), _: 1 })) : q("", true), r(c, { command: "delete" }, { default: u(() => [L(K(v.$t("internal_user.department.delete")), 1)]), _: 1 })], 64)) : q("", true)]), _: 2 }, 1024)]), default: u(() => [S("span", null, [r(I, { class: "text-[#999] rotate-90 mr-2 cursor-pointer invisible group-hover:visible" }, { default: u(() => [r(A(pt))]), _: 1 })])]), _: 2 }, 1032, ["onCommand"]))])]), _: 1 }, 8, ["data", "class", "default-expanded-keys"]), _.value ? (V(), O("ul", Fa, [(V(true), O(te, null, ae(p.value, (U) => (V(), O("li", { key: U.did, class: "w-full box-border flex items-center gap-2 cursor-pointer p-2 hover:bg-[#f5f7fa]", onClick: (J) => C(U) }, [r(s, { name: "member", width: "16px", height: "16px" }), S("div", { class: "flex-1 w-0 text-[#333] text-sm truncate", title: U.nickname }, K(U.nickname), 9, Ba)], 8, Ua))), 128))])) : q("", true)])), [[z, b.value]]), r(Va, { ref_key: "departmentAddRef", ref: i }, null, 512)]);
  };
} });
const Oa = Ze(La, [["__scopeId", "data-v-81a71932"]]), Ra = G({ __name: "organization", setup(t) {
  const e = N({});
  be("organizationData", e);
  const o = ({ data: a = {} } = {}) => {
    e.value = a;
  };
  return ce(async () => {
    e.value = await at();
  }), Xe(() => {
  }), (a, n) => {
    const l = ft, i = ht, d = mt;
    return V(), j(d, { class: "bg-white h-full" }, { default: u(() => [r(l, { class: "border-r border-[#e5e5e5]" }, { default: u(() => [r(Oa, { onNodeClick: o })]), _: 1 }), r(i, { class: "!p-0" }, { default: u(() => [r(Nt)]), _: 1 })]), _: 1 });
  };
} }), Ma = G({ __name: "index", setup(t) {
  const e = Xt(), o = N("account");
  return ce(async () => {
  }), Xe(() => {
  }), (a, n) => {
    const l = tn, i = Zt, d = en, p = Kt;
    return V(), j(p, { class: "px-[60px] py-8" }, { default: u(() => [r(l, { title: a.$t(A(e).meta.title) }, null, 8, ["title"]), r(d, { class: "mt-2 flex-1 h-0", modelValue: o.value, "onUpdate:modelValue": n[0] || (n[0] = (b) => o.value = b) }, { default: u(() => [r(i, { label: a.$t("internal_user.account.title"), name: "account", lazy: "" }, { default: u(() => [o.value === "account" ? (V(), j(Nt, { key: 0 })) : q("", true)]), _: 1 }, 8, ["label"]), r(i, { label: a.$t("internal_user.group.title"), name: "group", lazy: "" }, { default: u(() => [o.value === "group" ? (V(), j($a, { key: 0 })) : q("", true)]), _: 1 }, 8, ["label"]), r(i, { label: a.$t("internal_user.organization.title"), name: "organization", lazy: "" }, { default: u(() => [o.value === "organization" ? (V(), j(Ra, { key: 0 })) : q("", true)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["modelValue"])]), _: 1 });
  };
} });
const mo = Ze(Ma, [["__scopeId", "data-v-a17419ca"]]);
export {
  mo as default
};
