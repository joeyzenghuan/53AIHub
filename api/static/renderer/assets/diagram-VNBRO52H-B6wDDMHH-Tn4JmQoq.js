import { m } from "./chunk-4BMEZGHF-Bo7Lw3Zg-VPv0jNBt.js";
import { E as Nc, b as Jm, a as ty, o as iy, p as ay, g as ry, s as ey, _ as p, l as D, C as go, D as Jt, x as Qm, G as GC, d as Xc } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { u as uy } from "./radar-MK3ICKWK-Dci9lSdR-4pP8dac_.js";
import "./main-zTjO05wq.js";
import "./helper-7WMIPux3-FiO_G2IV.js";
import "./copy-BS31ARP0-eab1H3tb.js";
import "./_baseUniq-Bc4pAwPa-4Vti29BH.js";
import "./_basePickBy-sC4qhKfT-S0M4lzcJ.js";
import "./clone-CawhnH1Z-cPfa3Ped.js";
var C = {
  packet: []
}, x = structuredClone(C), L = Nc.packet, Y = /* @__PURE__ */ p(() => {
  const t = go({
    ...L,
    ...Jt().packet
  });
  return t.showBits && (t.paddingY += 10), t;
}, "getConfig"), G = /* @__PURE__ */ p(() => x.packet, "getPacket"), I = /* @__PURE__ */ p((t) => {
  t.length > 0 && x.packet.push(t);
}, "pushWord"), M = /* @__PURE__ */ p(() => {
  Qm(), x = structuredClone(C);
}, "clear"), h = {
  pushWord: I,
  getPacket: G,
  getConfig: Y,
  clear: M,
  setAccTitle: Jm,
  getAccTitle: ty,
  setDiagramTitle: iy,
  getDiagramTitle: ay,
  getAccDescription: ry,
  setAccDescription: ey
}, O = 1e4, H = /* @__PURE__ */ p((t) => {
  m(t, h);
  let e = -1, o = [], s = 1;
  const { bitsPerRow: i } = h.getConfig();
  for (let { start: a, end: r, label: p2 } of t.blocks) {
    if (r && r < a)
      throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);
    if (a !== e + 1)
      throw new Error(
        `Packet block ${a} - ${r ?? a} is not contiguous. It should start from ${e + 1}.`
      );
    for (e = r ?? a, D.debug(`Packet block ${a} - ${e} with label ${p2}`); o.length <= i + 1 && h.getPacket().length < O; ) {
      const [b, c] = K({ start: a, end: r, label: p2 }, s, i);
      if (o.push(b), b.end + 1 === s * i && (h.pushWord(o), o = [], s++), !c)
        break;
      ({ start: a, end: r, label: p2 } = c);
    }
  }
  h.pushWord(o);
}, "populate"), K = /* @__PURE__ */ p((t, e, o) => {
  if (t.end === void 0 && (t.end = t.start), t.start > t.end)
    throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);
  return t.end + 1 <= e * o ? [t, void 0] : [
    {
      start: t.start,
      end: e * o - 1,
      label: t.label
    },
    {
      start: e * o,
      end: t.end,
      label: t.label
    }
  ];
}, "getNextFittingBlock"), R = {
  parse: /* @__PURE__ */ p(async (t) => {
    const e = await uy("packet", t);
    D.debug(e), H(e);
  }, "parse")
}, U = /* @__PURE__ */ p((t, e, o, s) => {
  const i = s.db, a = i.getConfig(), { rowHeight: r, paddingY: p2, bitWidth: b, bitsPerRow: c } = a, u = i.getPacket(), l = i.getDiagramTitle(), g = r + p2, d = g * (u.length + 1) - (l ? 0 : r), k = b * c + 2, f = GC(e);
  f.attr("viewbox", `0 0 ${k} ${d}`), Xc(f, d, k, a.useMaxWidth);
  for (const [$, y] of u.entries())
    X(f, y, $, a);
  f.append("text").text(l).attr("x", k / 2).attr("y", d - g / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), X = /* @__PURE__ */ p((t, e, o, { rowHeight: s, paddingX: i, paddingY: a, bitWidth: r, bitsPerRow: p2, showBits: b }) => {
  const c = t.append("g"), u = o * (s + a) + a;
  for (const l of e) {
    const g = l.start % p2 * r + 1, d = (l.end - l.start + 1) * r - i;
    if (c.append("rect").attr("x", g).attr("y", u).attr("width", d).attr("height", s).attr("class", "packetBlock"), c.append("text").attr("x", g + d / 2).attr("y", u + s / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(l.label), !b)
      continue;
    const k = l.end === l.start, f = u - 2;
    c.append("text").attr("x", g + (k ? d / 2 : 0)).attr("y", f).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", k ? "middle" : "start").text(l.start), k || c.append("text").attr("x", g + d).attr("y", f).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(l.end);
  }
}, "drawWord"), j = { draw: U }, q = {
  byteFontSize: "10px",
  startByteColor: "black",
  endByteColor: "black",
  labelColor: "black",
  labelFontSize: "12px",
  titleColor: "black",
  titleFontSize: "14px",
  blockStrokeColor: "black",
  blockStrokeWidth: "1",
  blockFillColor: "#efefef"
}, J = /* @__PURE__ */ p(({ packet: t } = {}) => {
  const e = go(q, t);
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
}, "styles"), tt = {
  parser: R,
  db: h,
  renderer: j,
  styles: J
};
export {
  tt as diagram
};
