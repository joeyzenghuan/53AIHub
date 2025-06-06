import { m as B } from "./chunk-4BMEZGHF-Bo7Lw3Zg-cc1263d3.js";
import { E as P, b as S, a as W, o as z, p as F, g as D, s as T, _ as i, l as x, C as y, D as v, x as E, G as A, d as R } from "./mermaid-j5R1o_wi-7b9be563.js";
import { u as Y } from "./mermaid-parser.core-CNGL96jf-268968b7.js";
import "./index-7b696e01.js";
import "./helper-7WMIPux3-736d9956.js";
import "./copy-BS31ARP0-68b0a49d.js";
import "./_baseUniq-Bc4pAwPa-445a590c.js";
import "./_basePickBy-sC4qhKfT-705bdb8e.js";
import "./clone-CawhnH1Z-8867395a.js";
var $ = { packet: [] }, u = structuredClone($), G = P.packet, H = i(() => {
  const t = y({ ...G, ...v().packet });
  return t.showBits && (t.paddingY += 10), t;
}, "getConfig"), J = i(() => u.packet, "getPacket"), L = i((t) => {
  t.length > 0 && u.packet.push(t);
}, "pushWord"), X = i(() => {
  E(), u = structuredClone($);
}, "clear"), m = { pushWord: L, getPacket: J, getConfig: H, clear: X, setAccTitle: S, getAccTitle: W, setDiagramTitle: z, getDiagramTitle: F, getAccDescription: D, setAccDescription: T }, I = 1e4, M = i((t) => {
  B(t, m);
  let e = -1, o = [], s = 1;
  const { bitsPerRow: n } = m.getConfig();
  for (let { start: a, end: r, label: p } of t.blocks) {
    if (r && r < a)
      throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);
    if (a !== e + 1)
      throw new Error(`Packet block ${a} - ${r ?? a} is not contiguous. It should start from ${e + 1}.`);
    for (e = r ?? a, x.debug(`Packet block ${a} - ${e} with label ${p}`); o.length <= n + 1 && m.getPacket().length < I; ) {
      const [h, c] = N({ start: a, end: r, label: p }, s, n);
      if (o.push(h), h.end + 1 === s * n && (m.pushWord(o), o = [], s++), !c)
        break;
      ({ start: a, end: r, label: p } = c);
    }
  }
  m.pushWord(o);
}, "populate"), N = i((t, e, o) => {
  if (t.end === void 0 && (t.end = t.start), t.start > t.end)
    throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);
  return t.end + 1 <= e * o ? [t, void 0] : [{ start: t.start, end: e * o - 1, label: t.label }, { start: e * o, end: t.end, label: t.label }];
}, "getNextFittingBlock"), j = { parse: i(async (t) => {
  const e = await Y("packet", t);
  x.debug(e), M(e);
}, "parse") }, q = i((t, e, o, s) => {
  const n = s.db, a = n.getConfig(), { rowHeight: r, paddingY: p, bitWidth: h, bitsPerRow: c } = a, f = n.getPacket(), l = n.getDiagramTitle(), k = r + p, d = k * (f.length + 1) - (l ? 0 : r), b = h * c + 2, g = A(e);
  g.attr("viewbox", `0 0 ${b} ${d}`), R(g, d, b, a.useMaxWidth);
  for (const [w, C] of f.entries())
    K(g, C, w, a);
  g.append("text").text(l).attr("x", b / 2).attr("y", d - k / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), K = i((t, e, o, { rowHeight: s, paddingX: n, paddingY: a, bitWidth: r, bitsPerRow: p, showBits: h }) => {
  const c = t.append("g"), f = o * (s + a) + a;
  for (const l of e) {
    const k = l.start % p * r + 1, d = (l.end - l.start + 1) * r - n;
    if (c.append("rect").attr("x", k).attr("y", f).attr("width", d).attr("height", s).attr("class", "packetBlock"), c.append("text").attr("x", k + d / 2).attr("y", f + s / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(l.label), !h)
      continue;
    const b = l.end === l.start, g = f - 2;
    c.append("text").attr("x", k + (b ? d / 2 : 0)).attr("y", g).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", b ? "middle" : "start").text(l.start), b || c.append("text").attr("x", k + d).attr("y", g).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(l.end);
  }
}, "drawWord"), O = { draw: q }, Q = { byteFontSize: "10px", startByteColor: "black", endByteColor: "black", labelColor: "black", labelFontSize: "12px", titleColor: "black", titleFontSize: "14px", blockStrokeColor: "black", blockStrokeWidth: "1", blockFillColor: "#efefef" }, U = i(({ packet: t } = {}) => {
  const e = y(Q, t);
  return `
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`;
}, "styles"), it = { parser: j, db: m, renderer: O, styles: U };
export {
  it as diagram
};
