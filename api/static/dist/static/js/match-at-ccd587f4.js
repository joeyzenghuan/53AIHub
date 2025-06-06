function c(t) {
  if (!t.__matchAtRelocatable) {
    var a = t.source + "|()", l = "g" + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "");
    t.__matchAtRelocatable = new RegExp(a, l);
  }
  return t.__matchAtRelocatable;
}
function o(t, a, l) {
  if (t.global || t.sticky)
    throw new Error("matchAt(...): Only non-global regexes are supported");
  var n = c(t);
  n.lastIndex = l;
  var e = n.exec(a);
  return e[e.length - 1] == null ? (e.length = e.length - 1, e) : null;
}
var r = o;
export {
  r as m
};
