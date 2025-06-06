function c(i, t, l = false) {
  let e;
  return (...s) => {
    const o = () => {
      i(...s);
    };
    if (clearTimeout(e), l) {
      const u = !e;
      e = setTimeout(() => {
        e = void 0;
      }, t), u && o();
    } else
      e = setTimeout(o, t);
  };
}
export {
  c as d
};
