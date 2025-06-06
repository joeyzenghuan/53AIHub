var F = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var w = { exports: {} }, g = {};
function x() {
  var e = {};
  return e["align-content"] = false, e["align-items"] = false, e["align-self"] = false, e["alignment-adjust"] = false, e["alignment-baseline"] = false, e.all = false, e["anchor-point"] = false, e.animation = false, e["animation-delay"] = false, e["animation-direction"] = false, e["animation-duration"] = false, e["animation-fill-mode"] = false, e["animation-iteration-count"] = false, e["animation-name"] = false, e["animation-play-state"] = false, e["animation-timing-function"] = false, e.azimuth = false, e["backface-visibility"] = false, e.background = true, e["background-attachment"] = true, e["background-clip"] = true, e["background-color"] = true, e["background-image"] = true, e["background-origin"] = true, e["background-position"] = true, e["background-repeat"] = true, e["background-size"] = true, e["baseline-shift"] = false, e.binding = false, e.bleed = false, e["bookmark-label"] = false, e["bookmark-level"] = false, e["bookmark-state"] = false, e.border = true, e["border-bottom"] = true, e["border-bottom-color"] = true, e["border-bottom-left-radius"] = true, e["border-bottom-right-radius"] = true, e["border-bottom-style"] = true, e["border-bottom-width"] = true, e["border-collapse"] = true, e["border-color"] = true, e["border-image"] = true, e["border-image-outset"] = true, e["border-image-repeat"] = true, e["border-image-slice"] = true, e["border-image-source"] = true, e["border-image-width"] = true, e["border-left"] = true, e["border-left-color"] = true, e["border-left-style"] = true, e["border-left-width"] = true, e["border-radius"] = true, e["border-right"] = true, e["border-right-color"] = true, e["border-right-style"] = true, e["border-right-width"] = true, e["border-spacing"] = true, e["border-style"] = true, e["border-top"] = true, e["border-top-color"] = true, e["border-top-left-radius"] = true, e["border-top-right-radius"] = true, e["border-top-style"] = true, e["border-top-width"] = true, e["border-width"] = true, e.bottom = false, e["box-decoration-break"] = true, e["box-shadow"] = true, e["box-sizing"] = true, e["box-snap"] = true, e["box-suppress"] = true, e["break-after"] = true, e["break-before"] = true, e["break-inside"] = true, e["caption-side"] = false, e.chains = false, e.clear = true, e.clip = false, e["clip-path"] = false, e["clip-rule"] = false, e.color = true, e["color-interpolation-filters"] = true, e["column-count"] = false, e["column-fill"] = false, e["column-gap"] = false, e["column-rule"] = false, e["column-rule-color"] = false, e["column-rule-style"] = false, e["column-rule-width"] = false, e["column-span"] = false, e["column-width"] = false, e.columns = false, e.contain = false, e.content = false, e["counter-increment"] = false, e["counter-reset"] = false, e["counter-set"] = false, e.crop = false, e.cue = false, e["cue-after"] = false, e["cue-before"] = false, e.cursor = false, e.direction = false, e.display = true, e["display-inside"] = true, e["display-list"] = true, e["display-outside"] = true, e["dominant-baseline"] = false, e.elevation = false, e["empty-cells"] = false, e.filter = false, e.flex = false, e["flex-basis"] = false, e["flex-direction"] = false, e["flex-flow"] = false, e["flex-grow"] = false, e["flex-shrink"] = false, e["flex-wrap"] = false, e.float = false, e["float-offset"] = false, e["flood-color"] = false, e["flood-opacity"] = false, e["flow-from"] = false, e["flow-into"] = false, e.font = true, e["font-family"] = true, e["font-feature-settings"] = true, e["font-kerning"] = true, e["font-language-override"] = true, e["font-size"] = true, e["font-size-adjust"] = true, e["font-stretch"] = true, e["font-style"] = true, e["font-synthesis"] = true, e["font-variant"] = true, e["font-variant-alternates"] = true, e["font-variant-caps"] = true, e["font-variant-east-asian"] = true, e["font-variant-ligatures"] = true, e["font-variant-numeric"] = true, e["font-variant-position"] = true, e["font-weight"] = true, e.grid = false, e["grid-area"] = false, e["grid-auto-columns"] = false, e["grid-auto-flow"] = false, e["grid-auto-rows"] = false, e["grid-column"] = false, e["grid-column-end"] = false, e["grid-column-start"] = false, e["grid-row"] = false, e["grid-row-end"] = false, e["grid-row-start"] = false, e["grid-template"] = false, e["grid-template-areas"] = false, e["grid-template-columns"] = false, e["grid-template-rows"] = false, e["hanging-punctuation"] = false, e.height = true, e.hyphens = false, e.icon = false, e["image-orientation"] = false, e["image-resolution"] = false, e["ime-mode"] = false, e["initial-letters"] = false, e["inline-box-align"] = false, e["justify-content"] = false, e["justify-items"] = false, e["justify-self"] = false, e.left = false, e["letter-spacing"] = true, e["lighting-color"] = true, e["line-box-contain"] = false, e["line-break"] = false, e["line-grid"] = false, e["line-height"] = false, e["line-snap"] = false, e["line-stacking"] = false, e["line-stacking-ruby"] = false, e["line-stacking-shift"] = false, e["line-stacking-strategy"] = false, e["list-style"] = true, e["list-style-image"] = true, e["list-style-position"] = true, e["list-style-type"] = true, e.margin = true, e["margin-bottom"] = true, e["margin-left"] = true, e["margin-right"] = true, e["margin-top"] = true, e["marker-offset"] = false, e["marker-side"] = false, e.marks = false, e.mask = false, e["mask-box"] = false, e["mask-box-outset"] = false, e["mask-box-repeat"] = false, e["mask-box-slice"] = false, e["mask-box-source"] = false, e["mask-box-width"] = false, e["mask-clip"] = false, e["mask-image"] = false, e["mask-origin"] = false, e["mask-position"] = false, e["mask-repeat"] = false, e["mask-size"] = false, e["mask-source-type"] = false, e["mask-type"] = false, e["max-height"] = true, e["max-lines"] = false, e["max-width"] = true, e["min-height"] = true, e["min-width"] = true, e["move-to"] = false, e["nav-down"] = false, e["nav-index"] = false, e["nav-left"] = false, e["nav-right"] = false, e["nav-up"] = false, e["object-fit"] = false, e["object-position"] = false, e.opacity = false, e.order = false, e.orphans = false, e.outline = false, e["outline-color"] = false, e["outline-offset"] = false, e["outline-style"] = false, e["outline-width"] = false, e.overflow = false, e["overflow-wrap"] = false, e["overflow-x"] = false, e["overflow-y"] = false, e.padding = true, e["padding-bottom"] = true, e["padding-left"] = true, e["padding-right"] = true, e["padding-top"] = true, e.page = false, e["page-break-after"] = false, e["page-break-before"] = false, e["page-break-inside"] = false, e["page-policy"] = false, e.pause = false, e["pause-after"] = false, e["pause-before"] = false, e.perspective = false, e["perspective-origin"] = false, e.pitch = false, e["pitch-range"] = false, e["play-during"] = false, e.position = false, e["presentation-level"] = false, e.quotes = false, e["region-fragment"] = false, e.resize = false, e.rest = false, e["rest-after"] = false, e["rest-before"] = false, e.richness = false, e.right = false, e.rotation = false, e["rotation-point"] = false, e["ruby-align"] = false, e["ruby-merge"] = false, e["ruby-position"] = false, e["shape-image-threshold"] = false, e["shape-outside"] = false, e["shape-margin"] = false, e.size = false, e.speak = false, e["speak-as"] = false, e["speak-header"] = false, e["speak-numeral"] = false, e["speak-punctuation"] = false, e["speech-rate"] = false, e.stress = false, e["string-set"] = false, e["tab-size"] = false, e["table-layout"] = false, e["text-align"] = true, e["text-align-last"] = true, e["text-combine-upright"] = true, e["text-decoration"] = true, e["text-decoration-color"] = true, e["text-decoration-line"] = true, e["text-decoration-skip"] = true, e["text-decoration-style"] = true, e["text-emphasis"] = true, e["text-emphasis-color"] = true, e["text-emphasis-position"] = true, e["text-emphasis-style"] = true, e["text-height"] = true, e["text-indent"] = true, e["text-justify"] = true, e["text-orientation"] = true, e["text-overflow"] = true, e["text-shadow"] = true, e["text-space-collapse"] = true, e["text-transform"] = true, e["text-underline-position"] = true, e["text-wrap"] = true, e.top = false, e.transform = false, e["transform-origin"] = false, e["transform-style"] = false, e.transition = false, e["transition-delay"] = false, e["transition-duration"] = false, e["transition-property"] = false, e["transition-timing-function"] = false, e["unicode-bidi"] = false, e["vertical-align"] = false, e.visibility = false, e["voice-balance"] = false, e["voice-duration"] = false, e["voice-family"] = false, e["voice-pitch"] = false, e["voice-range"] = false, e["voice-rate"] = false, e["voice-stress"] = false, e["voice-volume"] = false, e.volume = false, e["white-space"] = false, e.widows = false, e.width = true, e["will-change"] = false, e["word-break"] = true, e["word-spacing"] = true, e["word-wrap"] = true, e["wrap-flow"] = false, e["wrap-through"] = false, e["writing-mode"] = false, e["z-index"] = false, e;
}
function S(e, r, t) {
}
function L(e, r, t) {
}
var j = /javascript\s*\:/img;
function z(e, r) {
  return j.test(r) ? "" : r;
}
g.whiteList = x();
g.getDefaultWhiteList = x;
g.onAttr = S;
g.onIgnoreAttr = L;
g.safeAttrValue = z;
var C = { indexOf: function(e, r) {
  var t, a;
  if (Array.prototype.indexOf)
    return e.indexOf(r);
  for (t = 0, a = e.length; t < a; t++)
    if (e[t] === r)
      return t;
  return -1;
}, forEach: function(e, r, t) {
  var a, s;
  if (Array.prototype.forEach)
    return e.forEach(r, t);
  for (a = 0, s = e.length; a < s; a++)
    r.call(t, e[a], a, e);
}, trim: function(e) {
  return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
}, trimRight: function(e) {
  return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
} }, m = C;
function E(e, r) {
  e = m.trimRight(e), e[e.length - 1] !== ";" && (e += ";");
  var t = e.length, a = false, s = 0, l = 0, d = "";
  function c() {
    if (!a) {
      var o = m.trim(e.slice(s, l)), i = o.indexOf(":");
      if (i !== -1) {
        var h = m.trim(o.slice(0, i)), u = m.trim(o.slice(i + 1));
        if (h) {
          var f = r(s, d.length, h, u, o);
          f && (d += f + "; ");
        }
      }
    }
    s = l + 1;
  }
  for (; l < t; l++) {
    var n = e[l];
    if (n === "/" && e[l + 1] === "*") {
      var b = e.indexOf("*/", l + 2);
      if (b === -1)
        break;
      l = b + 1, s = l + 1, a = false;
    } else
      n === "(" ? a = true : n === ")" ? a = false : n === ";" ? a || c() : n === `
` && c();
  }
  return m.trim(d);
}
var O = E, v = g, I = O;
function k(e) {
  return e == null;
}
function R(e) {
  var r = {};
  for (var t in e)
    r[t] = e[t];
  return r;
}
function A(e) {
  e = R(e || {}), e.whiteList = e.whiteList || v.whiteList, e.onAttr = e.onAttr || v.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || v.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || v.safeAttrValue, this.options = e;
}
A.prototype.process = function(e) {
  if (e = e || "", e = e.toString(), !e)
    return "";
  var r = this, t = r.options, a = t.whiteList, s = t.onAttr, l = t.onIgnoreAttr, d = t.safeAttrValue, c = I(e, function(n, b, o, i, h) {
    var u = a[o], f = false;
    if (u === true ? f = u : typeof u == "function" ? f = u(i) : u instanceof RegExp && (f = u.test(i)), f !== true && (f = false), i = d(o, i), !!i) {
      var y = { position: b, sourcePosition: n, source: h, isWhite: f };
      if (f) {
        var p = s(o, i, y);
        return k(p) ? o + ":" + i : p;
      } else {
        var p = l(o, i, y);
        if (!k(p))
          return p;
      }
    }
  });
  return c;
};
var V = A;
(function(e, r) {
  var t = g, a = V;
  function s(d, c) {
    var n = new a(c);
    return n.process(d);
  }
  r = e.exports = s, r.FilterCSS = a;
  for (var l in t)
    r[l] = t[l];
  typeof window < "u" && (window.filterCSS = e.exports);
})(w, w.exports);
var _ = w.exports;
export {
  F as c,
  P as g,
  _ as l
};
