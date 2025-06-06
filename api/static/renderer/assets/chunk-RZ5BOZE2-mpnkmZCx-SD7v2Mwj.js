import { _ as p, d as Xc, l as D } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { L as Li } from "./helper-7WMIPux3-FiO_G2IV.js";
var b = /* @__PURE__ */ p((t, e) => {
  let o;
  return e === "sandbox" && (o = Li("#i" + t)), (e === "sandbox" ? Li(o.nodes()[0].contentDocument.body) : Li("body")).select(`[id="${t}"]`);
}, "getDiagramElement"), B = /* @__PURE__ */ p((t, e, o, i) => {
  t.attr("class", o);
  const { width: r, height: s, x: h, y: x } = m(t, e);
  Xc(t, s, r, i);
  const c = l(h, x, r, s, e);
  t.attr("viewBox", c), D.debug(`viewBox configured: ${c} with padding: ${e}`);
}, "setupViewPortForSVG"), m = /* @__PURE__ */ p((t, e) => {
  var i;
  const o = ((i = t.node()) == null ? void 0 : i.getBBox()) || { width: 0, height: 0, x: 0, y: 0 };
  return {
    width: o.width + e * 2,
    height: o.height + e * 2,
    x: o.x,
    y: o.y
  };
}, "calculateDimensionsWithPadding"), l = /* @__PURE__ */ p((t, e, o, i, r) => `${t - r} ${e - r} ${o} ${i}`, "createViewBox");
export {
  B,
  b
};
