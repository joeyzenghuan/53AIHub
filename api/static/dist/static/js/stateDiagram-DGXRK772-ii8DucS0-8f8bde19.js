import { X as P, J as M, q as O } from "./chunk-AEK57VVT-BRLTIX_x-aab7e135.js";
import { _ as f, c as t, l as E, d as R, j as H, P as U, Q as $, u as I } from "./mermaid-j5R1o_wi-141fd499.js";
import { L as v } from "./helper-7WMIPux3-736d9956.js";
import { L as C } from "./graph-BlpFl8hT-b0c4ce28.js";
import { o as J } from "./layout-DnRVtZaa-ad1f6b63.js";
import "./chunk-RZ5BOZE2-mpnkmZCx-e825e09e.js";
import "./index-6feda8be.js";
import "./copy-BS31ARP0-bcf717fb.js";
import "./_baseUniq-Bc4pAwPa-cec378bd.js";
import "./_basePickBy-sC4qhKfT-afa609f8.js";
var L = {}, W = f((e, n) => {
  L[e] = n;
}, "set"), j = f((e) => L[e], "get"), A = f(() => Object.keys(L), "keys"), X = f(() => A().length, "size"), q = { get: j, set: W, keys: A, size: X }, F = f((e) => e.append("circle").attr("class", "start-state").attr("r", t().state.sizeUnit).attr("cx", t().state.padding + t().state.sizeUnit).attr("cy", t().state.padding + t().state.sizeUnit), "drawStartState"), Y = f((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", t().state.textHeight).attr("class", "divider").attr("x2", t().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider"), _ = f((e, n) => {
  const o = e.append("text").attr("x", 2 * t().state.padding).attr("y", t().state.textHeight + 2 * t().state.padding).attr("font-size", t().state.fontSize).attr("class", "state-title").text(n.id), r = o.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", t().state.padding).attr("y", t().state.padding).attr("width", r.width + 2 * t().state.padding).attr("height", r.height + 2 * t().state.padding).attr("rx", t().state.radius), o;
}, "drawSimpleState"), Q = f((e, n) => {
  const o = f(function(g, u, B) {
    const m = g.append("tspan").attr("x", 2 * t().state.padding).text(u);
    B || m.attr("dy", t().state.textHeight);
  }, "addTspan"), r = e.append("text").attr("x", 2 * t().state.padding).attr("y", t().state.textHeight + 1.3 * t().state.padding).attr("font-size", t().state.fontSize).attr("class", "state-title").text(n.descriptions[0]).node().getBBox(), d = r.height, h = e.append("text").attr("x", t().state.padding).attr("y", d + t().state.padding * 0.4 + t().state.dividerMargin + t().state.textHeight).attr("class", "state-description");
  let l = true, a = true;
  n.descriptions.forEach(function(g) {
    l || (o(h, g, a), a = false), l = false;
  });
  const s = e.append("line").attr("x1", t().state.padding).attr("y1", t().state.padding + d + t().state.dividerMargin / 2).attr("y2", t().state.padding + d + t().state.dividerMargin / 2).attr("class", "descr-divider"), x = h.node().getBBox(), c = Math.max(x.width, r.width);
  return s.attr("x2", c + 3 * t().state.padding), e.insert("rect", ":first-child").attr("x", t().state.padding).attr("y", t().state.padding).attr("width", c + 2 * t().state.padding).attr("height", x.height + d + 2 * t().state.padding).attr("rx", t().state.radius), e;
}, "drawDescrState"), Z = f((e, n, o) => {
  const r = t().state.padding, d = 2 * t().state.padding, h = e.node().getBBox(), l = h.width, a = h.x, s = e.append("text").attr("x", 0).attr("y", t().state.titleShift).attr("font-size", t().state.fontSize).attr("class", "state-title").text(n.id), x = s.node().getBBox().width + d;
  let c = Math.max(x, l);
  c === l && (c = c + d);
  let g;
  const u = e.node().getBBox();
  n.doc, g = a - r, x > l && (g = (l - c) / 2 + r), Math.abs(a - u.x) < r && x > l && (g = a - (x - l) / 2);
  const B = 1 - t().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", g).attr("y", B).attr("class", o ? "alt-composit" : "composit").attr("width", c).attr("height", u.height + t().state.textHeight + t().state.titleShift + 1).attr("rx", "0"), s.attr("x", g + r), x <= l && s.attr("x", a + (c - d) / 2 - x / 2 + r), e.insert("rect", ":first-child").attr("x", g).attr("y", t().state.titleShift - t().state.textHeight - t().state.padding).attr("width", c).attr("height", t().state.textHeight * 3).attr("rx", t().state.radius), e.insert("rect", ":first-child").attr("x", g).attr("y", t().state.titleShift - t().state.textHeight - t().state.padding).attr("width", c).attr("height", u.height + 3 + 2 * t().state.textHeight).attr("rx", t().state.radius), e;
}, "addTitleAndBox"), K = f((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", t().state.sizeUnit + t().state.miniPadding).attr("cx", t().state.padding + t().state.sizeUnit + t().state.miniPadding).attr("cy", t().state.padding + t().state.sizeUnit + t().state.miniPadding), e.append("circle").attr("class", "end-state-inner").attr("r", t().state.sizeUnit).attr("cx", t().state.padding + t().state.sizeUnit + 2).attr("cy", t().state.padding + t().state.sizeUnit + 2)), "drawEndState"), V = f((e, n) => {
  let o = t().state.forkWidth, r = t().state.forkHeight;
  if (n.parentId) {
    let d = o;
    o = r, r = d;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", o).attr("height", r).attr("x", t().state.padding).attr("y", t().state.padding);
}, "drawForkJoinState"), tt = f((e, n, o, r) => {
  let d = 0;
  const h = r.append("text");
  h.style("text-anchor", "start"), h.attr("class", "noteText");
  let l = e.replace(/\r\n/g, "<br/>");
  l = l.replace(/\n/g, "<br/>");
  const a = l.split(H.lineBreakRegex);
  let s = 1.25 * t().state.noteMargin;
  for (const x of a) {
    const c = x.trim();
    if (c.length > 0) {
      const g = h.append("tspan");
      if (g.text(c), s === 0) {
        const u = g.node().getBBox();
        s += u.height;
      }
      d += s, g.attr("x", n + t().state.noteMargin), g.attr("y", o + d + 1.25 * t().state.noteMargin);
    }
  }
  return { textWidth: h.node().getBBox().width, textHeight: d };
}, "_drawLongText"), et = f((e, n) => {
  n.attr("class", "state-note");
  const o = n.append("rect").attr("x", 0).attr("y", t().state.padding), r = n.append("g"), { textWidth: d, textHeight: h } = tt(e, 0, 0, r);
  return o.attr("height", h + 2 * t().state.noteMargin), o.attr("width", d + t().state.noteMargin * 2), o;
}, "drawNote"), T = f(function(e, n) {
  const o = n.id, r = { id: o, label: n.id, width: 0, height: 0 }, d = e.append("g").attr("id", o).attr("class", "stateGroup");
  n.type === "start" && F(d), n.type === "end" && K(d), (n.type === "fork" || n.type === "join") && V(d, n), n.type === "note" && et(n.note.text, d), n.type === "divider" && Y(d), n.type === "default" && n.descriptions.length === 0 && _(d, n), n.type === "default" && n.descriptions.length > 0 && Q(d, n);
  const h = d.node().getBBox();
  return r.width = h.width + 2 * t().state.padding, r.height = h.height + 2 * t().state.padding, q.set(o, r), r;
}, "drawState"), D = 0, at = f(function(e, n, o) {
  const r = f(function(s) {
    switch (s) {
      case M.relationType.AGGREGATION:
        return "aggregation";
      case M.relationType.EXTENSION:
        return "extension";
      case M.relationType.COMPOSITION:
        return "composition";
      case M.relationType.DEPENDENCY:
        return "dependency";
    }
  }, "getRelationType");
  n.points = n.points.filter((s) => !Number.isNaN(s.y));
  const d = n.points, h = U().x(function(s) {
    return s.x;
  }).y(function(s) {
    return s.y;
  }).curve($), l = e.append("path").attr("d", h(d)).attr("id", "edge" + D).attr("class", "transition");
  let a = "";
  if (t().state.arrowMarkerAbsolute && (a = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, a = a.replace(/\(/g, "\\("), a = a.replace(/\)/g, "\\)")), l.attr("marker-end", "url(" + a + "#" + r(M.relationType.DEPENDENCY) + "End)"), o.title !== void 0) {
    const s = e.append("g").attr("class", "stateLabel"), { x, y: c } = I.calcLabelPosition(n.points), g = H.getRows(o.title);
    let u = 0;
    const B = [];
    let m = 0, N = 0;
    for (let y = 0; y <= g.length; y++) {
      const p = s.append("text").attr("text-anchor", "middle").text(g[y]).attr("x", x).attr("y", c + u), w = p.node().getBBox();
      m = Math.max(m, w.width), N = Math.min(N, w.x), E.info(w.x, x, c + u), u === 0 && (u = p.node().getBBox().height, E.info("Title height", u, c)), B.push(p);
    }
    let S = u * g.length;
    if (g.length > 1) {
      const y = (g.length - 1) * u * 0.5;
      B.forEach((p, w) => p.attr("y", c + w * u - y)), S = u * g.length;
    }
    const i = s.node().getBBox();
    s.insert("rect", ":first-child").attr("class", "box").attr("x", x - m / 2 - t().state.padding / 2).attr("y", c - S / 2 - t().state.padding / 2 - 3.5).attr("width", m + t().state.padding).attr("height", S + t().state.padding), E.info(i);
  }
  D++;
}, "drawEdge"), b, z = {}, nt = f(function() {
}, "setConf"), it = f(function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers"), dt = f(function(e, n, o, r) {
  b = t().state;
  const d = t().securityLevel;
  let h;
  d === "sandbox" && (h = v("#i" + n));
  const l = d === "sandbox" ? v(h.nodes()[0].contentDocument.body) : v("body"), a = d === "sandbox" ? h.nodes()[0].contentDocument : document;
  E.debug("Rendering diagram " + e);
  const s = l.select(`[id='${n}']`);
  it(s);
  const x = r.db.getRootDoc();
  G(x, s, void 0, false, l, a, r);
  const c = b.padding, g = s.node().getBBox(), u = g.width + c * 2, B = g.height + c * 2, m = u * 1.75;
  R(s, B, m, b.useMaxWidth), s.attr("viewBox", `${g.x - b.padding}  ${g.y - b.padding} ` + u + " " + B);
}, "draw"), rt = f((e) => e ? e.length * b.fontSizeFactor : 1, "getLabelWidth"), G = f((e, n, o, r, d, h, l) => {
  const a = new C({ compound: true, multigraph: true });
  let s, x = true;
  for (s = 0; s < e.length; s++)
    if (e[s].stmt === "relation") {
      x = false;
      break;
    }
  o ? a.setGraph({ rankdir: "LR", multigraph: true, compound: true, ranker: "tight-tree", ranksep: x ? 1 : b.edgeLengthFactor, nodeSep: x ? 1 : 50, isMultiGraph: true }) : a.setGraph({ rankdir: "TB", multigraph: true, compound: true, ranksep: x ? 1 : b.edgeLengthFactor, nodeSep: x ? 1 : 50, ranker: "tight-tree", isMultiGraph: true }), a.setDefaultEdgeLabel(function() {
    return {};
  });
  const c = l.db.getStates(), g = l.db.getRelations(), u = Object.keys(c);
  for (const i of u) {
    const y = c[i];
    o && (y.parentId = o);
    let p;
    if (y.doc) {
      let w = n.append("g").attr("id", y.id).attr("class", "stateGroup");
      p = G(y.doc, w, y.id, !r, d, h, l);
      {
        w = Z(w, y, r);
        let k = w.node().getBBox();
        p.width = k.width, p.height = k.height + b.padding / 2, z[y.id] = { y: b.compositTitleSize };
      }
    } else
      p = T(n, y, a);
    if (y.note) {
      const w = { descriptions: [], id: y.id + "-note", note: y.note, type: "note" }, k = T(n, w, a);
      y.note.position === "left of" ? (a.setNode(p.id + "-note", k), a.setNode(p.id, p)) : (a.setNode(p.id, p), a.setNode(p.id + "-note", k)), a.setParent(p.id, p.id + "-group"), a.setParent(p.id + "-note", p.id + "-group");
    } else
      a.setNode(p.id, p);
  }
  E.debug("Count=", a.nodeCount(), a);
  let B = 0;
  g.forEach(function(i) {
    B++, E.debug("Setting edge", i), a.setEdge(i.id1, i.id2, { relation: i, width: rt(i.title), height: b.labelHeight * H.getRows(i.title).length, labelpos: "c" }, "id" + B);
  }), J(a), E.debug("Graph after layout", a.nodes());
  const m = n.node();
  a.nodes().forEach(function(i) {
    i !== void 0 && a.node(i) !== void 0 ? (E.warn("Node " + i + ": " + JSON.stringify(a.node(i))), d.select("#" + m.id + " #" + i).attr("transform", "translate(" + (a.node(i).x - a.node(i).width / 2) + "," + (a.node(i).y + (z[i] ? z[i].y : 0) - a.node(i).height / 2) + " )"), d.select("#" + m.id + " #" + i).attr("data-x-shift", a.node(i).x - a.node(i).width / 2), h.querySelectorAll("#" + m.id + " #" + i + " .divider").forEach((y) => {
      const p = y.parentElement;
      let w = 0, k = 0;
      p && (p.parentElement && (w = p.parentElement.getBBox().width), k = parseInt(p.getAttribute("data-x-shift"), 10), Number.isNaN(k) && (k = 0)), y.setAttribute("x1", 0 - k + 8), y.setAttribute("x2", w - k - 8);
    })) : E.debug("No Node " + i + ": " + JSON.stringify(a.node(i)));
  });
  let N = m.getBBox();
  a.edges().forEach(function(i) {
    i !== void 0 && a.edge(i) !== void 0 && (E.debug("Edge " + i.v + " -> " + i.w + ": " + JSON.stringify(a.edge(i))), at(n, a.edge(i), a.edge(i).relation));
  }), N = m.getBBox();
  const S = { id: o || "root", label: o || "root", width: 0, height: 0 };
  return S.width = N.width + 2 * b.padding, S.height = N.height + 2 * b.padding, E.debug("Doc rendered", S, a), S;
}, "renderDoc"), st = { setConf: nt, draw: dt }, wt = { parser: P, get db() {
  return new M(1);
}, renderer: st, styles: O, init: f((e) => {
  e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
}, "init") };
export {
  wt as diagram
};
