import { _ as p, an as jC, ao as V_, ap as K_, aq as G_, l as D$1, c as dt, ar as J$1, as as X_, ac as pp, av as vC, ah as Js, ad as Z_, ab as J2, at as TC, au as kC } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { L } from "./graph-BlpFl8hT-X3F-3Ykt.js";
import { o as ot } from "./layout-DnRVtZaa-Z0rygkHC.js";
import { E as Et } from "./_baseUniq-Bc4pAwPa-4Vti29BH.js";
import { a } from "./clone-CawhnH1Z-cPfa3Ped.js";
import { g as gn } from "./_basePickBy-sC4qhKfT-S0M4lzcJ.js";
import "./main-zTjO05wq.js";
import "./helper-7WMIPux3-FiO_G2IV.js";
import "./copy-BS31ARP0-eab1H3tb.js";
function E(e) {
  var t = {
    options: {
      directed: e.isDirected(),
      multigraph: e.isMultigraph(),
      compound: e.isCompound()
    },
    nodes: ee(e),
    edges: ne(e)
  };
  return Et(e.graph()) || (t.value = a(e.graph())), t;
}
function ee(e) {
  return gn(e.nodes(), function(t) {
    var n = e.node(t), o = e.parent(t), c = { v: t };
    return Et(n) || (c.value = n), Et(o) || (c.parent = o), c;
  });
}
function ne(e) {
  return gn(e.edges(), function(t) {
    var n = e.edge(t), o = { v: t.v, w: t.w };
    return Et(t.name) || (o.name = t.name), Et(n) || (o.value = n), o;
  });
}
var f = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ p(() => {
  b.clear(), J.clear(), f.clear();
}, "clear"), O = /* @__PURE__ */ p((e, t) => {
  const n = b.get(t) || [];
  return D$1.trace("In isDescendant", t, " ", e, " = ", n.includes(e)), n.includes(e);
}, "isDescendant"), se = /* @__PURE__ */ p((e, t) => {
  const n = b.get(t) || [];
  return D$1.info("Descendants of ", t, " is ", n), D$1.info("Edge is ", e), e.v === t || e.w === t ? false : n ? n.includes(e.v) || O(e.v, t) || O(e.w, t) || n.includes(e.w) : (D$1.debug("Tilt, ", t, ",not in descendants"), false);
}, "edgeInCluster"), G = /* @__PURE__ */ p((e, t, n, o) => {
  D$1.warn(
    "Copying children of ",
    e,
    "root",
    o,
    "data",
    t.node(e),
    o
  );
  const c = t.children(e) || [];
  e !== o && c.push(e), D$1.warn("Copying (nodes) clusterId", e, "nodes", c), c.forEach((a2) => {
    if (t.children(a2).length > 0)
      G(a2, t, n, o);
    else {
      const r = t.node(a2);
      D$1.info("cp ", a2, " to ", o, " with parent ", e), n.setNode(a2, r), o !== t.parent(a2) && (D$1.warn("Setting parent", a2, t.parent(a2)), n.setParent(a2, t.parent(a2))), e !== o && a2 !== e ? (D$1.debug("Setting parent", a2, e), n.setParent(a2, e)) : (D$1.info("In copy ", e, "root", o, "data", t.node(e), o), D$1.debug(
        "Not Setting parent for node=",
        a2,
        "cluster!==rootId",
        e !== o,
        "node!==clusterId",
        a2 !== e
      ));
      const u = t.edges(a2);
      D$1.debug("Copying Edges", u), u.forEach((l) => {
        D$1.info("Edge", l);
        const v = t.edge(l.v, l.w, l.name);
        D$1.info("Edge data", v, o);
        try {
          se(l, o) ? (D$1.info("Copying as ", l.v, l.w, v, l.name), n.setEdge(l.v, l.w, v, l.name), D$1.info("newGraph edges ", n.edges(), n.edge(n.edges()[0]))) : D$1.info(
            "Skipping copy of edge ",
            l.v,
            "-->",
            l.w,
            " rootId: ",
            o,
            " clusterId:",
            e
          );
        } catch (C) {
          D$1.error(C);
        }
      });
    }
    D$1.debug("Removing node", a2), t.removeNode(a2);
  });
}, "copy"), R = /* @__PURE__ */ p((e, t) => {
  const n = t.children(e);
  let o = [...n];
  for (const c of n)
    J.set(c, e), o = [...o, ...R(c, t)];
  return o;
}, "extractDescendants"), ie = /* @__PURE__ */ p((e, t, n) => {
  const o = e.edges().filter((l) => l.v === t || l.w === t), c = e.edges().filter((l) => l.v === n || l.w === n), a2 = o.map((l) => ({ v: l.v === t ? n : l.v, w: l.w === t ? t : l.w })), r = c.map((l) => ({ v: l.v, w: l.w }));
  return a2.filter((l) => r.some((v) => l.v === v.v && l.w === v.w));
}, "findCommonEdges"), D = /* @__PURE__ */ p((e, t, n) => {
  const o = t.children(e);
  if (D$1.trace("Searching children of id ", e, o), o.length < 1)
    return e;
  let c;
  for (const a2 of o) {
    const r = D(a2, t, n), u = ie(t, n, r);
    if (r)
      if (u.length > 0)
        c = r;
      else
        return r;
  }
  return c;
}, "findNonClusterChild"), k = /* @__PURE__ */ p((e) => !f.has(e) || !f.get(e).externalConnections ? e : f.has(e) ? f.get(e).id : e, "getAnchorId"), re = /* @__PURE__ */ p((e, t) => {
  if (!e || t > 10) {
    D$1.debug("Opting out, no graph ");
    return;
  } else
    D$1.debug("Opting in, graph ");
  e.nodes().forEach(function(n) {
    e.children(n).length > 0 && (D$1.warn(
      "Cluster identified",
      n,
      " Replacement id in edges: ",
      D(n, e, n)
    ), b.set(n, R(n, e)), f.set(n, { id: D(n, e, n), clusterData: e.node(n) }));
  }), e.nodes().forEach(function(n) {
    const o = e.children(n), c = e.edges();
    o.length > 0 ? (D$1.debug("Cluster identified", n, b), c.forEach((a2) => {
      const r = O(a2.v, n), u = O(a2.w, n);
      r ^ u && (D$1.warn("Edge: ", a2, " leaves cluster ", n), D$1.warn("Descendants of XXX ", n, ": ", b.get(n)), f.get(n).externalConnections = true);
    })) : D$1.debug("Not a cluster ", n, b);
  });
  for (let n of f.keys()) {
    const o = f.get(n).id, c = e.parent(o);
    c !== n && f.has(c) && !f.get(c).externalConnections && (f.get(n).id = c);
  }
  e.edges().forEach(function(n) {
    const o = e.edge(n);
    D$1.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), D$1.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(e.edge(n)));
    let c = n.v, a2 = n.w;
    if (D$1.warn(
      "Fix XXX",
      f,
      "ids:",
      n.v,
      n.w,
      "Translating: ",
      f.get(n.v),
      " --- ",
      f.get(n.w)
    ), f.get(n.v) || f.get(n.w)) {
      if (D$1.warn("Fixing and trying - removing XXX", n.v, n.w, n.name), c = k(n.v), a2 = k(n.w), e.removeEdge(n.v, n.w, n.name), c !== n.v) {
        const r = e.parent(c);
        f.get(r).externalConnections = true, o.fromCluster = n.v;
      }
      if (a2 !== n.w) {
        const r = e.parent(a2);
        f.get(r).externalConnections = true, o.toCluster = n.w;
      }
      D$1.warn("Fix Replacing with XXX", c, a2, n.name), e.setEdge(c, a2, o, n.name);
    }
  }), D$1.warn("Adjusted Graph", E(e)), T(e, 0), D$1.trace(f);
}, "adjustClustersAndEdges"), T = /* @__PURE__ */ p((e, t) => {
  var c, a2;
  if (D$1.warn("extractor - ", t, E(e), e.children("D")), t > 10) {
    D$1.error("Bailing out");
    return;
  }
  let n = e.nodes(), o = false;
  for (const r of n) {
    const u = e.children(r);
    o = o || u.length > 0;
  }
  if (!o) {
    D$1.debug("Done, no node has children", e.nodes());
    return;
  }
  D$1.debug("Nodes = ", n, t);
  for (const r of n)
    if (D$1.debug(
      "Extracting node",
      r,
      f,
      f.has(r) && !f.get(r).externalConnections,
      !e.parent(r),
      e.node(r),
      e.children("D"),
      " Depth ",
      t
    ), !f.has(r))
      D$1.debug("Not a cluster", r, t);
    else if (!f.get(r).externalConnections && e.children(r) && e.children(r).length > 0) {
      D$1.warn(
        "Cluster without external connections, without a parent and with children",
        r,
        t
      );
      let l = e.graph().rankdir === "TB" ? "LR" : "TB";
      (a2 = (c = f.get(r)) == null ? void 0 : c.clusterData) != null && a2.dir && (l = f.get(r).clusterData.dir, D$1.warn("Fixing dir", f.get(r).clusterData.dir, l));
      const v = new L({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: l,
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      D$1.warn("Old graph before copy", E(e)), G(r, e, v, r), e.setNode(r, {
        clusterNode: true,
        id: r,
        clusterData: f.get(r).clusterData,
        label: f.get(r).label,
        graph: v
      }), D$1.warn("New graph after copy node: (", r, ")", E(v)), D$1.debug("Old graph after copy", E(e));
    } else
      D$1.warn(
        "Cluster ** ",
        r,
        " **not meeting the criteria !externalConnections:",
        !f.get(r).externalConnections,
        " no parent: ",
        !e.parent(r),
        " children ",
        e.children(r) && e.children(r).length > 0,
        e.children("D"),
        t
      ), D$1.debug(f);
  n = e.nodes(), D$1.warn("New list of nodes", n);
  for (const r of n) {
    const u = e.node(r);
    D$1.warn(" Now next level", r, u), u != null && u.clusterNode && T(u.graph, t + 1);
  }
}, "extractor"), M = /* @__PURE__ */ p((e, t) => {
  if (t.length === 0)
    return [];
  let n = Object.assign([], t);
  return t.forEach((o) => {
    const c = e.children(o), a2 = M(e, c);
    n = [...n, ...a2];
  }), n;
}, "sorter"), oe = /* @__PURE__ */ p((e) => M(e, e.children()), "sortNodesByHierarchy"), j = /* @__PURE__ */ p(async (e, t, n, o, c, a2) => {
  D$1.warn("Graph in recursive render:XAX", E(t), c);
  const r = t.graph().rankdir;
  D$1.trace("Dir in recursive render - dir:", r);
  const u = e.insert("g").attr("class", "root");
  t.nodes() ? D$1.info("Recursive render XXX", t.nodes()) : D$1.info("No nodes found for", t), t.edges().length > 0 && D$1.info("Recursive edges", t.edge(t.edges()[0]));
  const l = u.insert("g").attr("class", "clusters"), v = u.insert("g").attr("class", "edgePaths"), C = u.insert("g").attr("class", "edgeLabels"), g = u.insert("g").attr("class", "nodes");
  await Promise.all(
    t.nodes().map(async function(d) {
      const s = t.node(d);
      if (c !== void 0) {
        const w = JSON.parse(JSON.stringify(c.clusterData));
        D$1.trace(
          `Setting data for parent cluster XXX
 Node.id = `,
          d,
          `
 data=`,
          w.height,
          `
Parent cluster`,
          c.height
        ), t.setNode(c.id, w), t.parent(d) || (D$1.trace("Setting parent", d, c.id), t.setParent(d, c.id, w));
      }
      if (D$1.info("(Insert) Node XXX" + d + ": " + JSON.stringify(t.node(d))), s != null && s.clusterNode) {
        D$1.info("Cluster identified XBX", d, s.width, t.node(d));
        const { ranksep: w, nodesep: m } = t.graph();
        s.graph.setGraph({
          ...s.graph.graph(),
          ranksep: w + 25,
          nodesep: m
        });
        const N = await j(
          g,
          s.graph,
          n,
          o,
          t.node(d),
          a2
        ), S = N.elem;
        J$1(s, S), s.diff = N.diff || 0, D$1.info(
          "New compound node after recursive render XAX",
          d,
          "width",
          // node,
          s.width,
          "height",
          s.height
          // node.x,
          // node.y
        ), X_(S, s);
      } else
        t.children(d).length > 0 ? (D$1.trace(
          "Cluster - the non recursive path XBX",
          d,
          s.id,
          s,
          s.width,
          "Graph:",
          t
        ), D$1.trace(D(s.id, t)), f.set(s.id, { id: D(s.id, t), node: s })) : (D$1.trace("Node - the non recursive path XAX", d, g, t.node(d), r), await pp(g, t.node(d), { config: a2, dir: r }));
    })
  ), await (/* @__PURE__ */ p(async () => {
    const d = t.edges().map(async function(s) {
      const w = t.edge(s.v, s.w, s.name);
      D$1.info("Edge " + s.v + " -> " + s.w + ": " + JSON.stringify(s)), D$1.info("Edge " + s.v + " -> " + s.w + ": ", s, " ", JSON.stringify(t.edge(s))), D$1.info(
        "Fix",
        f,
        "ids:",
        s.v,
        s.w,
        "Translating: ",
        f.get(s.v),
        f.get(s.w)
      ), await vC(C, w);
    });
    await Promise.all(d);
  }, "processEdges"))(), D$1.info("Graph before layout:", JSON.stringify(E(t))), D$1.info("############################################# XXX"), D$1.info("###                Layout                 ### XXX"), D$1.info("############################################# XXX"), ot(t), D$1.info("Graph after layout:", JSON.stringify(E(t)));
  let p$1 = 0, { subGraphTitleTotalMargin: y } = Js(a2);
  return await Promise.all(
    oe(t).map(async function(d) {
      var w;
      const s = t.node(d);
      if (D$1.info(
        "Position XBX => " + d + ": (" + s.x,
        "," + s.y,
        ") width: ",
        s.width,
        " height: ",
        s.height
      ), s != null && s.clusterNode)
        s.y += y, D$1.info(
          "A tainted cluster node XBX1",
          d,
          s.id,
          s.width,
          s.height,
          s.x,
          s.y,
          t.parent(d)
        ), f.get(s.id).node = s, Z_(s);
      else if (t.children(d).length > 0) {
        D$1.info(
          "A pure cluster node XBX1",
          d,
          s.id,
          s.x,
          s.y,
          s.width,
          s.height,
          t.parent(d)
        ), s.height += y, t.node(s.parentId);
        const m = (s == null ? void 0 : s.padding) / 2 || 0, N = ((w = s == null ? void 0 : s.labelBBox) == null ? void 0 : w.height) || 0, S = N - m || 0;
        D$1.debug("OffsetY", S, "labelHeight", N, "halfPadding", m), await J2(l, s), f.get(s.id).node = s;
      } else {
        const m = t.node(s.parentId);
        s.y += y / 2, D$1.info(
          "A regular node XBX1 - using the padding",
          s.id,
          "parent",
          s.parentId,
          s.width,
          s.height,
          s.x,
          s.y,
          "offsetY",
          s.offsetY,
          "parent",
          m,
          m == null ? void 0 : m.offsetY,
          s
        ), Z_(s);
      }
    })
  ), t.edges().forEach(function(d) {
    const s = t.edge(d);
    D$1.info("Edge " + d.v + " -> " + d.w + ": " + JSON.stringify(s), s), s.points.forEach((S) => S.y += y / 2);
    const w = t.node(d.v);
    var m = t.node(d.w);
    const N = TC(v, s, f, n, w, m, o);
    kC(s, N);
  }), t.nodes().forEach(function(d) {
    const s = t.node(d);
    D$1.info(d, s.type, s.diff), s.isGroup && (p$1 = s.diff);
  }), D$1.warn("Returning from recursive render XAX", u, p$1), { elem: u, diff: p$1 };
}, "recursiveRender"), ge = /* @__PURE__ */ p(async (e, t) => {
  var a2, r, u, l, v, C;
  const n = new L({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: e.direction,
    nodesep: ((a2 = e.config) == null ? void 0 : a2.nodeSpacing) || ((u = (r = e.config) == null ? void 0 : r.flowchart) == null ? void 0 : u.nodeSpacing) || e.nodeSpacing,
    ranksep: ((l = e.config) == null ? void 0 : l.rankSpacing) || ((C = (v = e.config) == null ? void 0 : v.flowchart) == null ? void 0 : C.rankSpacing) || e.rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), o = t.select("g");
  jC(o, e.markers, e.type, e.diagramId), V_(), K_(), G_(), te(), e.nodes.forEach((g) => {
    n.setNode(g.id, { ...g }), g.parentId && n.setParent(g.id, g.parentId);
  }), D$1.debug("Edges:", e.edges), e.edges.forEach((g) => {
    if (g.start === g.end) {
      const h = g.start, p2 = h + "---" + h + "---1", y = h + "---" + h + "---2", d = n.node(h);
      n.setNode(p2, {
        domId: p2,
        id: p2,
        parentId: d.parentId,
        labelStyle: "",
        label: "",
        padding: 0,
        shape: "labelRect",
        // shape: 'rect',
        style: "",
        width: 10,
        height: 10
      }), n.setParent(p2, d.parentId), n.setNode(y, {
        domId: y,
        id: y,
        parentId: d.parentId,
        labelStyle: "",
        padding: 0,
        // shape: 'rect',
        shape: "labelRect",
        label: "",
        style: "",
        width: 10,
        height: 10
      }), n.setParent(y, d.parentId);
      const s = structuredClone(g), w = structuredClone(g), m = structuredClone(g);
      s.label = "", s.arrowTypeEnd = "none", s.id = h + "-cyclic-special-1", w.arrowTypeStart = "none", w.arrowTypeEnd = "none", w.id = h + "-cyclic-special-mid", m.label = "", d.isGroup && (s.fromCluster = h, m.toCluster = h), m.id = h + "-cyclic-special-2", m.arrowTypeStart = "none", n.setEdge(h, p2, s, h + "-cyclic-special-0"), n.setEdge(p2, y, w, h + "-cyclic-special-1"), n.setEdge(y, h, m, h + "-cyc<lic-special-2");
    } else
      n.setEdge(g.start, g.end, { ...g }, g.id);
  }), D$1.warn("Graph at first:", JSON.stringify(E(n))), re(n), D$1.warn("Graph after XAX:", JSON.stringify(E(n)));
  const c = dt();
  await j(
    o,
    n,
    e.type,
    e.diagramId,
    void 0,
    c
  );
}, "render");
export {
  ge as render
};
