import { H as i, _ as a, l as o, G as n, d as p } from "./mermaid-j5R1o_wi-7b9be563.js";
import { u as d } from "./mermaid-parser.core-CNGL96jf-268968b7.js";
import "./index-7b696e01.js";
import "./helper-7WMIPux3-736d9956.js";
import "./copy-BS31ARP0-68b0a49d.js";
import "./_baseUniq-Bc4pAwPa-445a590c.js";
import "./_basePickBy-sC4qhKfT-705bdb8e.js";
import "./clone-CawhnH1Z-8867395a.js";
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
