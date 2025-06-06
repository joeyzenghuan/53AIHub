import { H as i, _ as a, l as o, G as n, d as p } from "./mermaid-j5R1o_wi-141fd499.js";
import { u as d } from "./mermaid-parser.core-CNGL96jf-628e7ed1.js";
import "./index-6feda8be.js";
import "./helper-7WMIPux3-736d9956.js";
import "./copy-BS31ARP0-bcf717fb.js";
import "./_baseUniq-Bc4pAwPa-cec378bd.js";
import "./_basePickBy-sC4qhKfT-afa609f8.js";
import "./clone-CawhnH1Z-b16b00d8.js";
var m = { parse: a(async (r) => {
  const t = await d("info", r);
  o.debug(t);
}, "parse") }, c = { version: i.version }, g = a(() => c.version, "getVersion"), v = { getVersion: g }, f = a((r, t, s) => {
  o.debug(`rendering info diagram
` + r);
  const e = n(t);
  p(e, 100, 400, true), e.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${s}`);
}, "draw"), l = { draw: f }, h = { parser: m, db: v, renderer: l };
export {
  h as diagram
};
