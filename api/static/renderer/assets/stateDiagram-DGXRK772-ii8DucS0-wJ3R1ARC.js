import { X as Xe, J as Je, q as qe } from "./chunk-AEK57VVT-BRLTIX_x-JW-8jT-u.js";
import { _ as p, c as dt$1, l as D$1, d as Xc, j as Hr, P as H0, Q as ca, u as ge } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { L as Li } from "./helper-7WMIPux3-FiO_G2IV.js";
import { L as L$1 } from "./graph-BlpFl8hT-X3F-3Ykt.js";
import { o as ot$1 } from "./layout-DnRVtZaa-Z0rygkHC.js";
import "./chunk-RZ5BOZE2-mpnkmZCx-SD7v2Mwj.js";
import "./main-zTjO05wq.js";
import "./copy-BS31ARP0-eab1H3tb.js";
import "./_baseUniq-Bc4pAwPa-4Vti29BH.js";
import "./_basePickBy-sC4qhKfT-S0M4lzcJ.js";
var L = {}, D = /* @__PURE__ */ p((e, i) => {
  L[e] = i;
}, "set"), Y = /* @__PURE__ */ p((e) => L[e], "get"), G = /* @__PURE__ */ p(() => Object.keys(L), "keys"), I = /* @__PURE__ */ p(() => G().length, "size"), $ = {
  get: Y,
  set: D,
  keys: G,
  size: I
}, j = /* @__PURE__ */ p((e) => e.append("circle").attr("class", "start-state").attr("r", dt$1().state.sizeUnit).attr("cx", dt$1().state.padding + dt$1().state.sizeUnit).attr("cy", dt$1().state.padding + dt$1().state.sizeUnit), "drawStartState"), q = /* @__PURE__ */ p((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", dt$1().state.textHeight).attr("class", "divider").attr("x2", dt$1().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider"), Q = /* @__PURE__ */ p((e, i) => {
  const d = e.append("text").attr("x", 2 * dt$1().state.padding).attr("y", dt$1().state.textHeight + 2 * dt$1().state.padding).attr("font-size", dt$1().state.fontSize).attr("class", "state-title").text(i.id), o = d.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", dt$1().state.padding).attr("y", dt$1().state.padding).attr("width", o.width + 2 * dt$1().state.padding).attr("height", o.height + 2 * dt$1().state.padding).attr("rx", dt$1().state.radius), d;
}, "drawSimpleState"), Z = /* @__PURE__ */ p((e, i) => {
  const d = /* @__PURE__ */ p(function(l, B, m) {
    const k = l.append("tspan").attr("x", 2 * dt$1().state.padding).text(B);
    m || k.attr("dy", dt$1().state.textHeight);
  }, "addTspan"), n = e.append("text").attr("x", 2 * dt$1().state.padding).attr("y", dt$1().state.textHeight + 1.3 * dt$1().state.padding).attr("font-size", dt$1().state.fontSize).attr("class", "state-title").text(i.descriptions[0]).node().getBBox(), g = n.height, x = e.append("text").attr("x", dt$1().state.padding).attr(
    "y",
    g + dt$1().state.padding * 0.4 + dt$1().state.dividerMargin + dt$1().state.textHeight
  ).attr("class", "state-description");
  let a = true, s = true;
  i.descriptions.forEach(function(l) {
    a || (d(x, l, s), s = false), a = false;
  });
  const y = e.append("line").attr("x1", dt$1().state.padding).attr("y1", dt$1().state.padding + g + dt$1().state.dividerMargin / 2).attr("y2", dt$1().state.padding + g + dt$1().state.dividerMargin / 2).attr("class", "descr-divider"), p$1 = x.node().getBBox(), c = Math.max(p$1.width, n.width);
  return y.attr("x2", c + 3 * dt$1().state.padding), e.insert("rect", ":first-child").attr("x", dt$1().state.padding).attr("y", dt$1().state.padding).attr("width", c + 2 * dt$1().state.padding).attr("height", p$1.height + g + 2 * dt$1().state.padding).attr("rx", dt$1().state.radius), e;
}, "drawDescrState"), K = /* @__PURE__ */ p((e, i, d) => {
  const o = dt$1().state.padding, n = 2 * dt$1().state.padding, g = e.node().getBBox(), x = g.width, a = g.x, s = e.append("text").attr("x", 0).attr("y", dt$1().state.titleShift).attr("font-size", dt$1().state.fontSize).attr("class", "state-title").text(i.id), p2 = s.node().getBBox().width + n;
  let c = Math.max(p2, x);
  c === x && (c = c + n);
  let l;
  const B = e.node().getBBox();
  i.doc, l = a - o, p2 > x && (l = (x - c) / 2 + o), Math.abs(a - B.x) < o && p2 > x && (l = a - (p2 - x) / 2);
  const m = 1 - dt$1().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", l).attr("y", m).attr("class", d ? "alt-composit" : "composit").attr("width", c).attr(
    "height",
    B.height + dt$1().state.textHeight + dt$1().state.titleShift + 1
  ).attr("rx", "0"), s.attr("x", l + o), p2 <= x && s.attr("x", a + (c - n) / 2 - p2 / 2 + o), e.insert("rect", ":first-child").attr("x", l).attr(
    "y",
    dt$1().state.titleShift - dt$1().state.textHeight - dt$1().state.padding
  ).attr("width", c).attr("height", dt$1().state.textHeight * 3).attr("rx", dt$1().state.radius), e.insert("rect", ":first-child").attr("x", l).attr(
    "y",
    dt$1().state.titleShift - dt$1().state.textHeight - dt$1().state.padding
  ).attr("width", c).attr("height", B.height + 3 + 2 * dt$1().state.textHeight).attr("rx", dt$1().state.radius), e;
}, "addTitleAndBox"), V = /* @__PURE__ */ p((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", dt$1().state.sizeUnit + dt$1().state.miniPadding).attr(
  "cx",
  dt$1().state.padding + dt$1().state.sizeUnit + dt$1().state.miniPadding
).attr(
  "cy",
  dt$1().state.padding + dt$1().state.sizeUnit + dt$1().state.miniPadding
), e.append("circle").attr("class", "end-state-inner").attr("r", dt$1().state.sizeUnit).attr("cx", dt$1().state.padding + dt$1().state.sizeUnit + 2).attr("cy", dt$1().state.padding + dt$1().state.sizeUnit + 2)), "drawEndState"), tt = /* @__PURE__ */ p((e, i) => {
  let d = dt$1().state.forkWidth, o = dt$1().state.forkHeight;
  if (i.parentId) {
    let n = d;
    d = o, o = n;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", d).attr("height", o).attr("x", dt$1().state.padding).attr("y", dt$1().state.padding);
}, "drawForkJoinState"), et = /* @__PURE__ */ p((e, i, d, o) => {
  let n = 0;
  const g = o.append("text");
  g.style("text-anchor", "start"), g.attr("class", "noteText");
  let x = e.replace(/\r\n/g, "<br/>");
  x = x.replace(/\n/g, "<br/>");
  const a = x.split(Hr.lineBreakRegex);
  let s = 1.25 * dt$1().state.noteMargin;
  for (const y of a) {
    const p2 = y.trim();
    if (p2.length > 0) {
      const c = g.append("tspan");
      if (c.text(p2), s === 0) {
        const l = c.node().getBBox();
        s += l.height;
      }
      n += s, c.attr("x", i + dt$1().state.noteMargin), c.attr("y", d + n + 1.25 * dt$1().state.noteMargin);
    }
  }
  return { textWidth: g.node().getBBox().width, textHeight: n };
}, "_drawLongText"), at = /* @__PURE__ */ p((e, i) => {
  i.attr("class", "state-note");
  const d = i.append("rect").attr("x", 0).attr("y", dt$1().state.padding), o = i.append("g"), { textWidth: n, textHeight: g } = et(e, 0, 0, o);
  return d.attr("height", g + 2 * dt$1().state.noteMargin), d.attr("width", n + dt$1().state.noteMargin * 2), d;
}, "drawNote"), _ = /* @__PURE__ */ p(function(e, i) {
  const d = i.id, o = {
    id: d,
    label: i.id,
    width: 0,
    height: 0
  }, n = e.append("g").attr("id", d).attr("class", "stateGroup");
  i.type === "start" && j(n), i.type === "end" && V(n), (i.type === "fork" || i.type === "join") && tt(n, i), i.type === "note" && at(i.note.text, n), i.type === "divider" && q(n), i.type === "default" && i.descriptions.length === 0 && Q(n, i), i.type === "default" && i.descriptions.length > 0 && Z(n, i);
  const g = n.node().getBBox();
  return o.width = g.width + 2 * dt$1().state.padding, o.height = g.height + 2 * dt$1().state.padding, $.set(d, o), o;
}, "drawState"), A = 0, it = /* @__PURE__ */ p(function(e, i, d) {
  const o = /* @__PURE__ */ p(function(s) {
    switch (s) {
      case Je.relationType.AGGREGATION:
        return "aggregation";
      case Je.relationType.EXTENSION:
        return "extension";
      case Je.relationType.COMPOSITION:
        return "composition";
      case Je.relationType.DEPENDENCY:
        return "dependency";
    }
  }, "getRelationType");
  i.points = i.points.filter((s) => !Number.isNaN(s.y));
  const n = i.points, g = H0().x(function(s) {
    return s.x;
  }).y(function(s) {
    return s.y;
  }).curve(ca), x = e.append("path").attr("d", g(n)).attr("id", "edge" + A).attr("class", "transition");
  let a = "";
  if (dt$1().state.arrowMarkerAbsolute && (a = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, a = a.replace(/\(/g, "\\("), a = a.replace(/\)/g, "\\)")), x.attr(
    "marker-end",
    "url(" + a + "#" + o(Je.relationType.DEPENDENCY) + "End)"
  ), d.title !== void 0) {
    const s = e.append("g").attr("class", "stateLabel"), { x: y, y: p2 } = ge.calcLabelPosition(i.points), c = Hr.getRows(d.title);
    let l = 0;
    const B = [];
    let m = 0, k = 0;
    for (let f = 0; f <= c.length; f++) {
      const h = s.append("text").attr("text-anchor", "middle").text(c[f]).attr("x", y).attr("y", p2 + l), w = h.node().getBBox();
      m = Math.max(m, w.width), k = Math.min(k, w.x), D$1.info(w.x, y, p2 + l), l === 0 && (l = h.node().getBBox().height, D$1.info("Title height", l, p2)), B.push(h);
    }
    let E = l * c.length;
    if (c.length > 1) {
      const f = (c.length - 1) * l * 0.5;
      B.forEach((h, w) => h.attr("y", p2 + w * l - f)), E = l * c.length;
    }
    const r = s.node().getBBox();
    s.insert("rect", ":first-child").attr("class", "box").attr("x", y - m / 2 - dt$1().state.padding / 2).attr("y", p2 - E / 2 - dt$1().state.padding / 2 - 3.5).attr("width", m + dt$1().state.padding).attr("height", E + dt$1().state.padding), D$1.info(r);
  }
  A++;
}, "drawEdge"), b, T = {}, rt = /* @__PURE__ */ p(function() {
}, "setConf"), nt = /* @__PURE__ */ p(function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers"), st = /* @__PURE__ */ p(function(e, i, d, o) {
  b = dt$1().state;
  const n = dt$1().securityLevel;
  let g;
  n === "sandbox" && (g = Li("#i" + i));
  const x = n === "sandbox" ? Li(g.nodes()[0].contentDocument.body) : Li("body"), a = n === "sandbox" ? g.nodes()[0].contentDocument : document;
  D$1.debug("Rendering diagram " + e);
  const s = x.select(`[id='${i}']`);
  nt(s);
  const y = o.db.getRootDoc();
  P(y, s, void 0, false, x, a, o);
  const p2 = b.padding, c = s.node().getBBox(), l = c.width + p2 * 2, B = c.height + p2 * 2, m = l * 1.75;
  Xc(s, B, m, b.useMaxWidth), s.attr(
    "viewBox",
    `${c.x - b.padding}  ${c.y - b.padding} ` + l + " " + B
  );
}, "draw"), dt = /* @__PURE__ */ p((e) => e ? e.length * b.fontSizeFactor : 1, "getLabelWidth"), P = /* @__PURE__ */ p((e, i, d, o, n, g, x) => {
  const a = new L$1({
    compound: true,
    multigraph: true
  });
  let s, y = true;
  for (s = 0; s < e.length; s++)
    if (e[s].stmt === "relation") {
      y = false;
      break;
    }
  d ? a.setGraph({
    rankdir: "LR",
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    ranker: "tight-tree",
    ranksep: y ? 1 : b.edgeLengthFactor,
    nodeSep: y ? 1 : 50,
    isMultiGraph: true
    // ranksep: 5,
    // nodesep: 1
  }) : a.setGraph({
    rankdir: "TB",
    multigraph: true,
    compound: true,
    // isCompound: true,
    // acyclicer: 'greedy',
    // ranker: 'longest-path'
    ranksep: y ? 1 : b.edgeLengthFactor,
    nodeSep: y ? 1 : 50,
    ranker: "tight-tree",
    // ranker: 'network-simplex'
    isMultiGraph: true
  }), a.setDefaultEdgeLabel(function() {
    return {};
  });
  const p2 = x.db.getStates(), c = x.db.getRelations(), l = Object.keys(p2);
  for (const r of l) {
    const f = p2[r];
    d && (f.parentId = d);
    let h;
    if (f.doc) {
      let w = i.append("g").attr("id", f.id).attr("class", "stateGroup");
      h = P(f.doc, w, f.id, !o, n, g, x);
      {
        w = K(w, f, o);
        let v = w.node().getBBox();
        h.width = v.width, h.height = v.height + b.padding / 2, T[f.id] = { y: b.compositTitleSize };
      }
    } else
      h = _(i, f, a);
    if (f.note) {
      const w = {
        descriptions: [],
        id: f.id + "-note",
        note: f.note,
        type: "note"
      }, v = _(i, w, a);
      f.note.position === "left of" ? (a.setNode(h.id + "-note", v), a.setNode(h.id, h)) : (a.setNode(h.id, h), a.setNode(h.id + "-note", v)), a.setParent(h.id, h.id + "-group"), a.setParent(h.id + "-note", h.id + "-group");
    } else
      a.setNode(h.id, h);
  }
  D$1.debug("Count=", a.nodeCount(), a);
  let B = 0;
  c.forEach(function(r) {
    B++, D$1.debug("Setting edge", r), a.setEdge(
      r.id1,
      r.id2,
      {
        relation: r,
        width: dt(r.title),
        height: b.labelHeight * Hr.getRows(r.title).length,
        labelpos: "c"
      },
      "id" + B
    );
  }), ot$1(a), D$1.debug("Graph after layout", a.nodes());
  const m = i.node();
  a.nodes().forEach(function(r) {
    r !== void 0 && a.node(r) !== void 0 ? (D$1.warn("Node " + r + ": " + JSON.stringify(a.node(r))), n.select("#" + m.id + " #" + r).attr(
      "transform",
      "translate(" + (a.node(r).x - a.node(r).width / 2) + "," + (a.node(r).y + (T[r] ? T[r].y : 0) - a.node(r).height / 2) + " )"
    ), n.select("#" + m.id + " #" + r).attr("data-x-shift", a.node(r).x - a.node(r).width / 2), g.querySelectorAll("#" + m.id + " #" + r + " .divider").forEach((h) => {
      const w = h.parentElement;
      let v = 0, M = 0;
      w && (w.parentElement && (v = w.parentElement.getBBox().width), M = parseInt(w.getAttribute("data-x-shift"), 10), Number.isNaN(M) && (M = 0)), h.setAttribute("x1", 0 - M + 8), h.setAttribute("x2", v - M - 8);
    })) : D$1.debug("No Node " + r + ": " + JSON.stringify(a.node(r)));
  });
  let k = m.getBBox();
  a.edges().forEach(function(r) {
    r !== void 0 && a.edge(r) !== void 0 && (D$1.debug("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(a.edge(r))), it(i, a.edge(r), a.edge(r).relation));
  }), k = m.getBBox();
  const E = {
    id: d || "root",
    label: d || "root",
    width: 0,
    height: 0
  };
  return E.width = k.width + 2 * b.padding, E.height = k.height + 2 * b.padding, D$1.debug("Doc rendered", E, a), E;
}, "renderDoc"), ot = {
  setConf: rt,
  draw: st
}, xt = {
  parser: Xe,
  get db() {
    return new Je(1);
  },
  renderer: ot,
  styles: qe,
  init: /* @__PURE__ */ p((e) => {
    e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
  }, "init")
};
export {
  xt as diagram
};
