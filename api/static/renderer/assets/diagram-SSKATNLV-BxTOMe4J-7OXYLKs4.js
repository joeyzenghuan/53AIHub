import { m } from "./chunk-4BMEZGHF-Bo7Lw3Zg-VPv0jNBt.js";
import { E as Nc, _ as p, b as Jm, a as ty, o as iy, p as ay, g as ry, s as ey, l as D, C as go, D as Jt, x as Qm, G as GC, I as km } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { u as uy } from "./radar-MK3ICKWK-Dci9lSdR-4pP8dac_.js";
import "./main-zTjO05wq.js";
import "./helper-7WMIPux3-FiO_G2IV.js";
import "./copy-BS31ARP0-eab1H3tb.js";
import "./_baseUniq-Bc4pAwPa-4Vti29BH.js";
import "./_basePickBy-sC4qhKfT-S0M4lzcJ.js";
import "./clone-CawhnH1Z-cPfa3Ped.js";
var x = {
  showLegend: true,
  ticks: 5,
  max: null,
  min: 0,
  graticule: "circle"
}, w = {
  axes: [],
  curves: [],
  options: x
}, h = structuredClone(w), H = Nc.radar, j = /* @__PURE__ */ p(() => go({
  ...H,
  ...Jt().radar
}), "getConfig"), b = /* @__PURE__ */ p(() => h.axes, "getAxes"), N = /* @__PURE__ */ p(() => h.curves, "getCurves"), U = /* @__PURE__ */ p(() => h.options, "getOptions"), X = /* @__PURE__ */ p((a) => {
  h.axes = a.map((t) => ({
    name: t.name,
    label: t.label ?? t.name
  }));
}, "setAxes"), Y = /* @__PURE__ */ p((a) => {
  h.curves = a.map((t) => ({
    name: t.name,
    label: t.label ?? t.name,
    entries: Z(t.entries)
  }));
}, "setCurves"), Z = /* @__PURE__ */ p((a) => {
  if (a[0].axis == null)
    return a.map((e) => e.value);
  const t = b();
  if (t.length === 0)
    throw new Error("Axes must be populated before curves for reference entries");
  return t.map((e) => {
    const r = a.find((s) => {
      var o;
      return ((o = s.axis) == null ? void 0 : o.$refText) === e.name;
    });
    if (r === void 0)
      throw new Error("Missing entry for axis " + e.label);
    return r.value;
  });
}, "computeCurveEntries"), q = /* @__PURE__ */ p((a) => {
  var e, r, s, o, i;
  const t = a.reduce(
    (n, c) => (n[c.name] = c, n),
    {}
  );
  h.options = {
    showLegend: ((e = t.showLegend) == null ? void 0 : e.value) ?? x.showLegend,
    ticks: ((r = t.ticks) == null ? void 0 : r.value) ?? x.ticks,
    max: ((s = t.max) == null ? void 0 : s.value) ?? x.max,
    min: ((o = t.min) == null ? void 0 : o.value) ?? x.min,
    graticule: ((i = t.graticule) == null ? void 0 : i.value) ?? x.graticule
  };
}, "setOptions"), J = /* @__PURE__ */ p(() => {
  Qm(), h = structuredClone(w);
}, "clear"), $ = {
  getAxes: b,
  getCurves: N,
  getOptions: U,
  setAxes: X,
  setCurves: Y,
  setOptions: q,
  getConfig: j,
  clear: J,
  setAccTitle: Jm,
  getAccTitle: ty,
  setDiagramTitle: iy,
  getDiagramTitle: ay,
  getAccDescription: ry,
  setAccDescription: ey
}, K = /* @__PURE__ */ p((a) => {
  m(a, $);
  const { axes: t, curves: e, options: r } = a;
  $.setAxes(t), $.setCurves(e), $.setOptions(r);
}, "populate"), Q = {
  parse: /* @__PURE__ */ p(async (a) => {
    const t = await uy("radar", a);
    D.debug(t), K(t);
  }, "parse")
}, tt = /* @__PURE__ */ p((a, t, e, r) => {
  const s = r.db, o = s.getAxes(), i = s.getCurves(), n = s.getOptions(), c = s.getConfig(), d = s.getDiagramTitle(), p2 = GC(t), u = et(p2, c), g = n.max ?? Math.max(...i.map((f) => Math.max(...f.entries))), m2 = n.min, v = Math.min(c.width, c.height) / 2;
  at(u, o, v, n.ticks, n.graticule), rt(u, o, v, c), M(u, o, i, m2, g, n.graticule, c), T(u, i, n.showLegend, c), u.append("text").attr("class", "radarTitle").text(d).attr("x", 0).attr("y", -c.height / 2 - c.marginTop);
}, "draw"), et = /* @__PURE__ */ p((a, t) => {
  const e = t.width + t.marginLeft + t.marginRight, r = t.height + t.marginTop + t.marginBottom, s = {
    x: t.marginLeft + t.width / 2,
    y: t.marginTop + t.height / 2
  };
  return a.attr("viewbox", `0 0 ${e} ${r}`).attr("width", e).attr("height", r), a.append("g").attr("transform", `translate(${s.x}, ${s.y})`);
}, "drawFrame"), at = /* @__PURE__ */ p((a, t, e, r, s) => {
  if (s === "circle")
    for (let o = 0; o < r; o++) {
      const i = e * (o + 1) / r;
      a.append("circle").attr("r", i).attr("class", "radarGraticule");
    }
  else if (s === "polygon") {
    const o = t.length;
    for (let i = 0; i < r; i++) {
      const n = e * (i + 1) / r, c = t.map((d, p2) => {
        const u = 2 * p2 * Math.PI / o - Math.PI / 2, g = n * Math.cos(u), m2 = n * Math.sin(u);
        return `${g},${m2}`;
      }).join(" ");
      a.append("polygon").attr("points", c).attr("class", "radarGraticule");
    }
  }
}, "drawGraticule"), rt = /* @__PURE__ */ p((a, t, e, r) => {
  const s = t.length;
  for (let o = 0; o < s; o++) {
    const i = t[o].label, n = 2 * o * Math.PI / s - Math.PI / 2;
    a.append("line").attr("x1", 0).attr("y1", 0).attr("x2", e * r.axisScaleFactor * Math.cos(n)).attr("y2", e * r.axisScaleFactor * Math.sin(n)).attr("class", "radarAxisLine"), a.append("text").text(i).attr("x", e * r.axisLabelFactor * Math.cos(n)).attr("y", e * r.axisLabelFactor * Math.sin(n)).attr("class", "radarAxisLabel");
  }
}, "drawAxes");
function M(a, t, e, r, s, o, i) {
  const n = t.length, c = Math.min(i.width, i.height) / 2;
  e.forEach((d, p2) => {
    if (d.entries.length !== n)
      return;
    const u = d.entries.map((g, m2) => {
      const v = 2 * Math.PI * m2 / n - Math.PI / 2, f = A(g, r, s, c), O = f * Math.cos(v), S = f * Math.sin(v);
      return { x: O, y: S };
    });
    o === "circle" ? a.append("path").attr("d", L(u, i.curveTension)).attr("class", `radarCurve-${p2}`) : o === "polygon" && a.append("polygon").attr("points", u.map((g) => `${g.x},${g.y}`).join(" ")).attr("class", `radarCurve-${p2}`);
  });
}
p(M, "drawCurves");
function A(a, t, e, r) {
  const s = Math.min(Math.max(a, t), e);
  return r * (s - t) / (e - t);
}
p(A, "relativeRadius");
function L(a, t) {
  const e = a.length;
  let r = `M${a[0].x},${a[0].y}`;
  for (let s = 0; s < e; s++) {
    const o = a[(s - 1 + e) % e], i = a[s], n = a[(s + 1) % e], c = a[(s + 2) % e], d = {
      x: i.x + (n.x - o.x) * t,
      y: i.y + (n.y - o.y) * t
    }, p2 = {
      x: n.x - (c.x - i.x) * t,
      y: n.y - (c.y - i.y) * t
    };
    r += ` C${d.x},${d.y} ${p2.x},${p2.y} ${n.x},${n.y}`;
  }
  return `${r} Z`;
}
p(L, "closedRoundCurve");
function T(a, t, e, r) {
  if (!e)
    return;
  const s = (r.width / 2 + r.marginRight) * 3 / 4, o = -(r.height / 2 + r.marginTop) * 3 / 4, i = 20;
  t.forEach((n, c) => {
    const d = a.append("g").attr("transform", `translate(${s}, ${o + c * i})`);
    d.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${c}`), d.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(n.label);
  });
}
p(T, "drawLegend");
var st = { draw: tt }, nt = /* @__PURE__ */ p((a, t) => {
  let e = "";
  for (let r = 0; r < a.THEME_COLOR_LIMIT; r++) {
    const s = a[`cScale${r}`];
    e += `
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`;
  }
  return e;
}, "genIndexStyles"), ot = /* @__PURE__ */ p((a) => {
  const t = km(), e = Jt(), r = go(t, e.themeVariables), s = go(r.radar, a);
  return { themeVariables: r, radarOptions: s };
}, "buildRadarStyleOptions"), it = /* @__PURE__ */ p(({ radar: a } = {}) => {
  const { themeVariables: t, radarOptions: e } = ot(a);
  return `
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${nt(t, e)}
	`;
}, "styles"), ut = {
  parser: Q,
  db: $,
  renderer: st,
  styles: it
};
export {
  ut as diagram
};
