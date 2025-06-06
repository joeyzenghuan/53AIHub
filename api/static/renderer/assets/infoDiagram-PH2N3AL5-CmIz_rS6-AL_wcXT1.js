import { H as lc, _ as p$1, l as D, G as GC, d as Xc } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { u as uy } from "./radar-MK3ICKWK-Dci9lSdR-4pP8dac_.js";
import "./main-zTjO05wq.js";
import "./helper-7WMIPux3-FiO_G2IV.js";
import "./copy-BS31ARP0-eab1H3tb.js";
import "./_baseUniq-Bc4pAwPa-4Vti29BH.js";
import "./_basePickBy-sC4qhKfT-S0M4lzcJ.js";
import "./clone-CawhnH1Z-cPfa3Ped.js";
var p = {
  parse: /* @__PURE__ */ p$1(async (r) => {
    const a = await uy("info", r);
    D.debug(a);
  }, "parse")
}, v = { version: lc.version }, c = /* @__PURE__ */ p$1(() => v.version, "getVersion"), m = {
  getVersion: c
}, l = /* @__PURE__ */ p$1((r, a, n) => {
  D.debug(`rendering info diagram
` + r);
  const t = GC(a);
  Xc(t, 100, 400, true), t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${n}`);
}, "draw"), f = { draw: l }, b = {
  parser: p,
  db: m,
  renderer: f
};
export {
  b as diagram
};
