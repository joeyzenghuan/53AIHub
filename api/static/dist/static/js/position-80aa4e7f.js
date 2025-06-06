import { d as l } from "./debounce-bf10b7f9.js";
import { a2 as a, a3 as c } from "./index-6feda8be.js";
var s = "Expected a function";
function u(e, i, t) {
  var n = true, r = true;
  if (typeof e != "function")
    throw new TypeError(s);
  return a(t) && (n = "leading" in t ? !!t.leading : n, r = "trailing" in t ? !!t.trailing : r), l(e, i, { leading: n, maxWait: i, trailing: r });
}
const h = (e, i) => {
  if (!c || !e || !i)
    return false;
  const t = e.getBoundingClientRect();
  let n;
  return i instanceof Element ? n = i.getBoundingClientRect() : n = { top: 0, right: window.innerWidth, bottom: window.innerHeight, left: 0 }, t.top < n.bottom && t.bottom > n.top && t.right > n.left && t.left < n.right;
}, o = (e) => {
  let i = 0, t = e;
  for (; t; )
    i += t.offsetTop, t = t.offsetParent;
  return i;
}, d = (e, i) => Math.abs(o(e) - o(i)), p = (e) => {
  let i, t;
  return e.type === "touchend" ? (t = e.changedTouches[0].clientY, i = e.changedTouches[0].clientX) : e.type.startsWith("touch") ? (t = e.touches[0].clientY, i = e.touches[0].clientX) : (t = e.clientY, i = e.clientX), { clientX: i, clientY: t };
};
export {
  p as a,
  d as g,
  h as i,
  u as t
};
