import { H as i, _ as a, l as o, G as n, d as p } from "./mermaid-CI9Xz-tl-06ae91ae.js";
import { u as d } from "./mermaid-parser.core-DZwaOB10-cee09aad.js";
import "./index-8579fe4a.js";
import "./viewer-DpLhQV_x-5cf483f8.js";
import "./copy-NOBrwKqN-54f5154b.js";
import "./_baseUniq-DmAMCrPp-6d586603.js";
import "./_basePickBy-9qJ8CywS-494a5f5d.js";
import "./clone-DhFCwC0s-7a31c97a.js";
var m = { parse: a(async (r) => {
  const t = await d("info", r);
  o.debug(t);
}, "parse") }, g = { version: i.version }, c = a(() => g.version, "getVersion"), v = { getVersion: c }, f = a((r, t, s) => {
  o.debug(`rendering info diagram
` + r);
  const e = n(t);
  p(e, 100, 400, true), e.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${s}`);
}, "draw"), l = { draw: f }, C = { parser: m, db: v, renderer: l };
export {
  C as diagram
};
