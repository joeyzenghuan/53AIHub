import { m } from "./chunk-4BMEZGHF-Bo7Lw3Zg-VPv0jNBt.js";
import { E as Nc, o as iy, p as ay, b as Jm, a as ty, s as ey, g as ry, _ as p, l as D, x as Qm, c as dt$1, C as go, G as GC, M as sn, d as Xc, a3 as H_ } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { u as uy } from "./radar-MK3ICKWK-Dci9lSdR-4pP8dac_.js";
import { H as Hi, z as zi } from "./helper-7WMIPux3-FiO_G2IV.js";
import { v as vn } from "./arc-6Ea6x5Wp-0EvfSE2q.js";
import { h } from "./ordinal-DfAQgscy-u5KZJLIt.js";
import "./main-zTjO05wq.js";
import "./copy-BS31ARP0-eab1H3tb.js";
import "./_baseUniq-Bc4pAwPa-4Vti29BH.js";
import "./_basePickBy-sC4qhKfT-S0M4lzcJ.js";
import "./clone-CawhnH1Z-cPfa3Ped.js";
import "./init-DjUOC4st-2EPjLC0T.js";
function st(t, a) {
  return a < t ? -1 : a > t ? 1 : a >= t ? 0 : NaN;
}
function ot(t) {
  return t;
}
function lt() {
  var t = ot, a = st, h2 = null, o = Hi(0), p2 = Hi(H_), y = Hi(0);
  function i(e) {
    var r, l = (e = zi(e)).length, g, A, m2 = 0, c = new Array(l), n = new Array(l), v = +o.apply(this, arguments), w = Math.min(H_, Math.max(-H_, p2.apply(this, arguments) - v)), f, T = Math.min(Math.abs(w) / l, y.apply(this, arguments)), $ = T * (w < 0 ? -1 : 1), d;
    for (r = 0; r < l; ++r)
      (d = n[c[r] = r] = +t(e[r], r, e)) > 0 && (m2 += d);
    for (a != null ? c.sort(function(S, C) {
      return a(n[S], n[C]);
    }) : h2 != null && c.sort(function(S, C) {
      return h2(e[S], e[C]);
    }), r = 0, A = m2 ? (w - l * $) / m2 : 0; r < l; ++r, v = f)
      g = c[r], d = n[g], f = v + (d > 0 ? d * A : 0) + $, n[g] = {
        data: e[g],
        index: r,
        value: d,
        startAngle: v,
        endAngle: f,
        padAngle: T
      };
    return n;
  }
  return i.value = function(e) {
    return arguments.length ? (t = typeof e == "function" ? e : Hi(+e), i) : t;
  }, i.sortValues = function(e) {
    return arguments.length ? (a = e, h2 = null, i) : a;
  }, i.sort = function(e) {
    return arguments.length ? (h2 = e, a = null, i) : h2;
  }, i.startAngle = function(e) {
    return arguments.length ? (o = typeof e == "function" ? e : Hi(+e), i) : o;
  }, i.endAngle = function(e) {
    return arguments.length ? (p2 = typeof e == "function" ? e : Hi(+e), i) : p2;
  }, i.padAngle = function(e) {
    return arguments.length ? (y = typeof e == "function" ? e : Hi(+e), i) : y;
  }, i;
}
var ct = Nc.pie, F = {
  sections: /* @__PURE__ */ new Map(),
  showData: false
}, M = F.sections, W = F.showData, ut = structuredClone(ct), pt = /* @__PURE__ */ p(() => structuredClone(ut), "getConfig"), gt = /* @__PURE__ */ p(() => {
  M = /* @__PURE__ */ new Map(), W = F.showData, Qm();
}, "clear"), dt = /* @__PURE__ */ p(({ label: t, value: a }) => {
  M.has(t) || (M.set(t, a), D.debug(`added new section: ${t}, with value: ${a}`));
}, "addSection"), ft = /* @__PURE__ */ p(() => M, "getSections"), ht = /* @__PURE__ */ p((t) => {
  W = t;
}, "setShowData"), mt = /* @__PURE__ */ p(() => W, "getShowData"), R = {
  getConfig: pt,
  clear: gt,
  setDiagramTitle: iy,
  getDiagramTitle: ay,
  setAccTitle: Jm,
  getAccTitle: ty,
  setAccDescription: ey,
  getAccDescription: ry,
  addSection: dt,
  getSections: ft,
  setShowData: ht,
  getShowData: mt
}, vt = /* @__PURE__ */ p((t, a) => {
  m(t, a), a.setShowData(t.showData), t.sections.map(a.addSection);
}, "populateDb"), St = {
  parse: /* @__PURE__ */ p(async (t) => {
    const a = await uy("pie", t);
    D.debug(a), vt(a, R);
  }, "parse")
}, xt = /* @__PURE__ */ p((t) => `
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`, "getStyles"), yt = xt, At = /* @__PURE__ */ p((t) => {
  const a = [...t.entries()].map((o) => ({
    label: o[0],
    value: o[1]
  })).sort((o, p2) => p2.value - o.value);
  return lt().value(
    (o) => o.value
  )(a);
}, "createPieArcs"), wt = /* @__PURE__ */ p((t, a, h$1, o) => {
  D.debug(`rendering pie chart
` + t);
  const p2 = o.db, y = dt$1(), i = go(p2.getConfig(), y.pie), e = 40, r = 18, l = 4, g = 450, A = g, m2 = GC(a), c = m2.append("g");
  c.attr("transform", "translate(" + A / 2 + "," + g / 2 + ")");
  const { themeVariables: n } = y;
  let [v] = sn(n.pieOuterStrokeWidth);
  v ?? (v = 2);
  const w = i.textPosition, f = Math.min(A, g) / 2 - e, T = vn().innerRadius(0).outerRadius(f), $ = vn().innerRadius(f * w).outerRadius(f * w);
  c.append("circle").attr("cx", 0).attr("cy", 0).attr("r", f + v / 2).attr("class", "pieOuterCircle");
  const d = p2.getSections(), S = At(d), C = [
    n.pie1,
    n.pie2,
    n.pie3,
    n.pie4,
    n.pie5,
    n.pie6,
    n.pie7,
    n.pie8,
    n.pie9,
    n.pie10,
    n.pie11,
    n.pie12
  ], D$1 = h(C);
  c.selectAll("mySlices").data(S).enter().append("path").attr("d", T).attr("fill", (s) => D$1(s.data.label)).attr("class", "pieCircle");
  let N = 0;
  d.forEach((s) => {
    N += s;
  }), c.selectAll("mySlices").data(S).enter().append("text").text((s) => (s.data.value / N * 100).toFixed(0) + "%").attr("transform", (s) => "translate(" + $.centroid(s) + ")").style("text-anchor", "middle").attr("class", "slice"), c.append("text").text(p2.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
  const b = c.selectAll(".legend").data(D$1.domain()).enter().append("g").attr("class", "legend").attr("transform", (s, E) => {
    const k = r + l, L = k * D$1.domain().length / 2, _ = 12 * r, B = E * k - L;
    return "translate(" + _ + "," + B + ")";
  });
  b.append("rect").attr("width", r).attr("height", r).style("fill", D$1).style("stroke", D$1), b.data(S).append("text").attr("x", r + l).attr("y", r - l).text((s) => {
    const { label: E, value: k } = s.data;
    return p2.getShowData() ? `${E} [${k}]` : E;
  });
  const I = Math.max(
    ...b.selectAll("text").nodes().map((s) => (s == null ? void 0 : s.getBoundingClientRect().width) ?? 0)
  ), O = A + e + r + l + I;
  m2.attr("viewBox", `0 0 ${O} ${g}`), Xc(m2, g, O, i.useMaxWidth);
}, "draw"), Ct = { draw: wt }, bt = {
  parser: St,
  db: R,
  renderer: Ct,
  styles: yt
};
export {
  bt as diagram
};
