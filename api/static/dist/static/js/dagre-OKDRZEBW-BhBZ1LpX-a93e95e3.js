import { _ as v, an as L, ao as M, ap as _, aq as j, l as t, c as F, ar as Y, as as $, ac as H, av as q, ah as K, ad as D, ab as V, at as Z, au as z } from "./mermaid-j5R1o_wi-141fd499.js";
import { L as k } from "./graph-BlpFl8hT-b0c4ce28.js";
import { o as Q } from "./layout-DnRVtZaa-ad1f6b63.js";
import { E as S } from "./_baseUniq-Bc4pAwPa-cec378bd.js";
import { a as U } from "./clone-CawhnH1Z-b16b00d8.js";
import { g as G } from "./_basePickBy-sC4qhKfT-afa609f8.js";
import "./index-6feda8be.js";
import "./helper-7WMIPux3-736d9956.js";
import "./copy-BS31ARP0-bcf717fb.js";
function X(e) {
  var n = { options: { directed: e.isDirected(), multigraph: e.isMultigraph(), compound: e.isCompound() }, nodes: W(e), edges: ee(e) };
  return S(e.graph()) || (n.value = U(e.graph())), n;
}
function W(e) {
  return G(e.nodes(), function(n) {
    var r = e.node(n), s = e.parent(n), d = { v: n };
    return S(r) || (d.value = r), S(s) || (d.parent = s), d;
  });
}
function ee(e) {
  return G(e.edges(), function(n) {
    var r = e.edge(n), s = { v: n.v, w: n.w };
    return S(n.name) || (s.name = n.name), S(r) || (s.value = r), s;
  });
}
var u = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), ne = v(() => {
  N.clear(), J.clear(), u.clear();
}, "clear"), I = v((e, n) => {
  const r = N.get(n) || [];
  return t.trace("In isDescendant", n, " ", e, " = ", r.includes(e)), r.includes(e);
}, "isDescendant"), re = v((e, n) => {
  const r = N.get(n) || [];
  return t.info("Descendants of ", n, " is ", r), t.info("Edge is ", e), e.v === n || e.w === n ? false : r ? r.includes(e.v) || I(e.v, n) || I(e.w, n) || r.includes(e.w) : (t.debug("Tilt, ", n, ",not in descendants"), false);
}, "edgeInCluster"), P = v((e, n, r, s) => {
  t.warn("Copying children of ", e, "root", s, "data", n.node(e), s);
  const d = n.children(e) || [];
  e !== s && d.push(e), t.warn("Copying (nodes) clusterId", e, "nodes", d), d.forEach((c) => {
    if (n.children(c).length > 0)
      P(c, n, r, s);
    else {
      const a = n.node(c);
      t.info("cp ", c, " to ", s, " with parent ", e), r.setNode(c, a), s !== n.parent(c) && (t.warn("Setting parent", c, n.parent(c)), r.setParent(c, n.parent(c))), e !== s && c !== e ? (t.debug("Setting parent", c, e), r.setParent(c, e)) : (t.info("In copy ", e, "root", s, "data", n.node(e), s), t.debug("Not Setting parent for node=", c, "cluster!==rootId", e !== s, "node!==clusterId", c !== e));
      const l = n.edges(c);
      t.debug("Copying Edges", l), l.forEach((f) => {
        t.info("Edge", f);
        const E = n.edge(f.v, f.w, f.name);
        t.info("Edge data", E, s);
        try {
          re(f, s) ? (t.info("Copying as ", f.v, f.w, E, f.name), r.setEdge(f.v, f.w, E, f.name), t.info("newGraph edges ", r.edges(), r.edge(r.edges()[0]))) : t.info("Skipping copy of edge ", f.v, "-->", f.w, " rootId: ", s, " clusterId:", e);
        } catch (b) {
          t.error(b);
        }
      });
    }
    t.debug("Removing node", c), n.removeNode(c);
  });
}, "copy"), T = v((e, n) => {
  const r = n.children(e);
  let s = [...r];
  for (const d of r)
    J.set(d, e), s = [...s, ...T(d, n)];
  return s;
}, "extractDescendants"), te = v((e, n, r) => {
  const s = e.edges().filter((l) => l.v === n || l.w === n), d = e.edges().filter((l) => l.v === r || l.w === r), c = s.map((l) => ({ v: l.v === n ? r : l.v, w: l.w === n ? n : l.w })), a = d.map((l) => ({ v: l.v, w: l.w }));
  return c.filter((l) => a.some((f) => l.v === f.v && l.w === f.w));
}, "findCommonEdges"), x = v((e, n, r) => {
  const s = n.children(e);
  if (t.trace("Searching children of id ", e, s), s.length < 1)
    return e;
  let d;
  for (const c of s) {
    const a = x(c, n, r), l = te(n, r, a);
    if (a)
      if (l.length > 0)
        d = a;
      else
        return a;
  }
  return d;
}, "findNonClusterChild"), O = v((e) => !u.has(e) || !u.get(e).externalConnections ? e : u.has(e) ? u.get(e).id : e, "getAnchorId"), ie = v((e, n) => {
  if (!e || n > 10) {
    t.debug("Opting out, no graph ");
    return;
  } else
    t.debug("Opting in, graph ");
  e.nodes().forEach(function(r) {
    e.children(r).length > 0 && (t.warn("Cluster identified", r, " Replacement id in edges: ", x(r, e, r)), N.set(r, T(r, e)), u.set(r, { id: x(r, e, r), clusterData: e.node(r) }));
  }), e.nodes().forEach(function(r) {
    const s = e.children(r), d = e.edges();
    s.length > 0 ? (t.debug("Cluster identified", r, N), d.forEach((c) => {
      const a = I(c.v, r), l = I(c.w, r);
      a ^ l && (t.warn("Edge: ", c, " leaves cluster ", r), t.warn("Descendants of XXX ", r, ": ", N.get(r)), u.get(r).externalConnections = true);
    })) : t.debug("Not a cluster ", r, N);
  });
  for (let r of u.keys()) {
    const s = u.get(r).id, d = e.parent(s);
    d !== r && u.has(d) && !u.get(d).externalConnections && (u.get(r).id = d);
  }
  e.edges().forEach(function(r) {
    const s = e.edge(r);
    t.warn("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(r)), t.warn("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(e.edge(r)));
    let d = r.v, c = r.w;
    if (t.warn("Fix XXX", u, "ids:", r.v, r.w, "Translating: ", u.get(r.v), " --- ", u.get(r.w)), u.get(r.v) || u.get(r.w)) {
      if (t.warn("Fixing and trying - removing XXX", r.v, r.w, r.name), d = O(r.v), c = O(r.w), e.removeEdge(r.v, r.w, r.name), d !== r.v) {
        const a = e.parent(d);
        u.get(a).externalConnections = true, s.fromCluster = r.v;
      }
      if (c !== r.w) {
        const a = e.parent(c);
        u.get(a).externalConnections = true, s.toCluster = r.w;
      }
      t.warn("Fix Replacing with XXX", d, c, r.name), e.setEdge(d, c, s, r.name);
    }
  }), t.warn("Adjusted Graph", X(e)), B(e, 0), t.trace(u);
}, "adjustClustersAndEdges"), B = v((e, n) => {
  var r, s;
  if (t.warn("extractor - ", n, X(e), e.children("D")), n > 10) {
    t.error("Bailing out");
    return;
  }
  let d = e.nodes(), c = false;
  for (const a of d) {
    const l = e.children(a);
    c = c || l.length > 0;
  }
  if (!c) {
    t.debug("Done, no node has children", e.nodes());
    return;
  }
  t.debug("Nodes = ", d, n);
  for (const a of d)
    if (t.debug("Extracting node", a, u, u.has(a) && !u.get(a).externalConnections, !e.parent(a), e.node(a), e.children("D"), " Depth ", n), !u.has(a))
      t.debug("Not a cluster", a, n);
    else if (!u.get(a).externalConnections && e.children(a) && e.children(a).length > 0) {
      t.warn("Cluster without external connections, without a parent and with children", a, n);
      let l = e.graph().rankdir === "TB" ? "LR" : "TB";
      (s = (r = u.get(a)) == null ? void 0 : r.clusterData) != null && s.dir && (l = u.get(a).clusterData.dir, t.warn("Fixing dir", u.get(a).clusterData.dir, l));
      const f = new k({ multigraph: true, compound: true }).setGraph({ rankdir: l, nodesep: 50, ranksep: 50, marginx: 8, marginy: 8 }).setDefaultEdgeLabel(function() {
        return {};
      });
      t.warn("Old graph before copy", X(e)), P(a, e, f, a), e.setNode(a, { clusterNode: true, id: a, clusterData: u.get(a).clusterData, label: u.get(a).label, graph: f }), t.warn("New graph after copy node: (", a, ")", X(f)), t.debug("Old graph after copy", X(e));
    } else
      t.warn("Cluster ** ", a, " **not meeting the criteria !externalConnections:", !u.get(a).externalConnections, " no parent: ", !e.parent(a), " children ", e.children(a) && e.children(a).length > 0, e.children("D"), n), t.debug(u);
  d = e.nodes(), t.warn("New list of nodes", d);
  for (const a of d) {
    const l = e.node(a);
    t.warn(" Now next level", a, l), l != null && l.clusterNode && B(l.graph, n + 1);
  }
}, "extractor"), A = v((e, n) => {
  if (n.length === 0)
    return [];
  let r = Object.assign([], n);
  return n.forEach((s) => {
    const d = e.children(s), c = A(e, d);
    r = [...r, ...c];
  }), r;
}, "sorter"), ae = v((e) => A(e, e.children()), "sortNodesByHierarchy"), R = v(async (e, n, r, s, d, c) => {
  t.warn("Graph in recursive render:XAX", X(n), d);
  const a = n.graph().rankdir;
  t.trace("Dir in recursive render - dir:", a);
  const l = e.insert("g").attr("class", "root");
  n.nodes() ? t.info("Recursive render XXX", n.nodes()) : t.info("No nodes found for", n), n.edges().length > 0 && t.info("Recursive edges", n.edge(n.edges()[0]));
  const f = l.insert("g").attr("class", "clusters"), E = l.insert("g").attr("class", "edgePaths"), b = l.insert("g").attr("class", "edgeLabels"), p = l.insert("g").attr("class", "nodes");
  await Promise.all(n.nodes().map(async function(g) {
    const o = n.node(g);
    if (d !== void 0) {
      const i = JSON.parse(JSON.stringify(d.clusterData));
      t.trace(`Setting data for parent cluster XXX
 Node.id = `, g, `
 data=`, i.height, `
Parent cluster`, d.height), n.setNode(d.id, i), n.parent(g) || (t.trace("Setting parent", g, d.id), n.setParent(g, d.id, i));
    }
    if (t.info("(Insert) Node XXX" + g + ": " + JSON.stringify(n.node(g))), o != null && o.clusterNode) {
      t.info("Cluster identified XBX", g, o.width, n.node(g));
      const { ranksep: i, nodesep: w } = n.graph();
      o.graph.setGraph({ ...o.graph.graph(), ranksep: i + 25, nodesep: w });
      const m = await R(p, o.graph, r, s, n.node(g), c), C = m.elem;
      Y(o, C), o.diff = m.diff || 0, t.info("New compound node after recursive render XAX", g, "width", o.width, "height", o.height), $(C, o);
    } else
      n.children(g).length > 0 ? (t.trace("Cluster - the non recursive path XBX", g, o.id, o, o.width, "Graph:", n), t.trace(x(o.id, n)), u.set(o.id, { id: x(o.id, n), node: o })) : (t.trace("Node - the non recursive path XAX", g, p, n.node(g), a), await H(p, n.node(g), { config: c, dir: a }));
  })), await v(async () => {
    const g = n.edges().map(async function(o) {
      const i = n.edge(o.v, o.w, o.name);
      t.info("Edge " + o.v + " -> " + o.w + ": " + JSON.stringify(o)), t.info("Edge " + o.v + " -> " + o.w + ": ", o, " ", JSON.stringify(n.edge(o))), t.info("Fix", u, "ids:", o.v, o.w, "Translating: ", u.get(o.v), u.get(o.w)), await q(b, i);
    });
    await Promise.all(g);
  }, "processEdges")(), t.info("Graph before layout:", JSON.stringify(X(n))), t.info("############################################# XXX"), t.info("###                Layout                 ### XXX"), t.info("############################################# XXX"), Q(n), t.info("Graph after layout:", JSON.stringify(X(n)));
  let h = 0, { subGraphTitleTotalMargin: y } = K(c);
  return await Promise.all(ae(n).map(async function(g) {
    var o;
    const i = n.node(g);
    if (t.info("Position XBX => " + g + ": (" + i.x, "," + i.y, ") width: ", i.width, " height: ", i.height), i != null && i.clusterNode)
      i.y += y, t.info("A tainted cluster node XBX1", g, i.id, i.width, i.height, i.x, i.y, n.parent(g)), u.get(i.id).node = i, D(i);
    else if (n.children(g).length > 0) {
      t.info("A pure cluster node XBX1", g, i.id, i.x, i.y, i.width, i.height, n.parent(g)), i.height += y, n.node(i.parentId);
      const w = (i == null ? void 0 : i.padding) / 2 || 0, m = ((o = i == null ? void 0 : i.labelBBox) == null ? void 0 : o.height) || 0, C = m - w || 0;
      t.debug("OffsetY", C, "labelHeight", m, "halfPadding", w), await V(f, i), u.get(i.id).node = i;
    } else {
      const w = n.node(i.parentId);
      i.y += y / 2, t.info("A regular node XBX1 - using the padding", i.id, "parent", i.parentId, i.width, i.height, i.x, i.y, "offsetY", i.offsetY, "parent", w, w == null ? void 0 : w.offsetY, i), D(i);
    }
  })), n.edges().forEach(function(g) {
    const o = n.edge(g);
    t.info("Edge " + g.v + " -> " + g.w + ": " + JSON.stringify(o), o), o.points.forEach((C) => C.y += y / 2);
    const i = n.node(g.v);
    var w = n.node(g.w);
    const m = Z(E, o, u, r, i, w, s);
    z(o, m);
  }), n.nodes().forEach(function(g) {
    const o = n.node(g);
    t.info(g, o.type, o.diff), o.isGroup && (h = o.diff);
  }), t.warn("Returning from recursive render XAX", l, h), { elem: l, diff: h };
}, "recursiveRender"), he = v(async (e, n) => {
  var r, s, d, c, a, l;
  const f = new k({ multigraph: true, compound: true }).setGraph({ rankdir: e.direction, nodesep: ((r = e.config) == null ? void 0 : r.nodeSpacing) || ((d = (s = e.config) == null ? void 0 : s.flowchart) == null ? void 0 : d.nodeSpacing) || e.nodeSpacing, ranksep: ((c = e.config) == null ? void 0 : c.rankSpacing) || ((l = (a = e.config) == null ? void 0 : a.flowchart) == null ? void 0 : l.rankSpacing) || e.rankSpacing, marginx: 8, marginy: 8 }).setDefaultEdgeLabel(function() {
    return {};
  }), E = n.select("g");
  L(E, e.markers, e.type, e.diagramId), M(), _(), j(), ne(), e.nodes.forEach((p) => {
    f.setNode(p.id, { ...p }), p.parentId && f.setParent(p.id, p.parentId);
  }), t.debug("Edges:", e.edges), e.edges.forEach((p) => {
    if (p.start === p.end) {
      const h = p.start, y = h + "---" + h + "---1", g = h + "---" + h + "---2", o = f.node(h);
      f.setNode(y, { domId: y, id: y, parentId: o.parentId, labelStyle: "", label: "", padding: 0, shape: "labelRect", style: "", width: 10, height: 10 }), f.setParent(y, o.parentId), f.setNode(g, { domId: g, id: g, parentId: o.parentId, labelStyle: "", padding: 0, shape: "labelRect", label: "", style: "", width: 10, height: 10 }), f.setParent(g, o.parentId);
      const i = structuredClone(p), w = structuredClone(p), m = structuredClone(p);
      i.label = "", i.arrowTypeEnd = "none", i.id = h + "-cyclic-special-1", w.arrowTypeStart = "none", w.arrowTypeEnd = "none", w.id = h + "-cyclic-special-mid", m.label = "", o.isGroup && (i.fromCluster = h, m.toCluster = h), m.id = h + "-cyclic-special-2", m.arrowTypeStart = "none", f.setEdge(h, y, i, h + "-cyclic-special-0"), f.setEdge(y, g, w, h + "-cyclic-special-1"), f.setEdge(g, h, m, h + "-cyc<lic-special-2");
    } else
      f.setEdge(p.start, p.end, { ...p }, p.id);
  }), t.warn("Graph at first:", JSON.stringify(X(f))), ie(f), t.warn("Graph after XAX:", JSON.stringify(X(f)));
  const b = F();
  await R(E, f, e.type, e.diagramId, void 0, b);
}, "render");
export {
  he as render
};
