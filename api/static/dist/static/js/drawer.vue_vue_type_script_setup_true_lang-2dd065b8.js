import { y as p, r as t, o as u, b as c, j as m, w as i, f as _ } from "./index-8579fe4a.js";
import { E as f } from "./el-drawer-393896dd.js";
import { _ as v } from "./index.vue_vue_type_script_setup_true_lang-5c7d7988.js";
const k = p({ __name: "drawer", setup(y, { expose: r }) {
  const e = t(false);
  u(() => {
  });
  const l = t("user"), s = t();
  return r({ open: ({ type: a, relatedId: o }) => {
    l.value = a, s.value = o, e.value = true;
  }, close: () => {
    e.value = false;
  } }), (a, o) => {
    const n = f;
    return c(), m(n, { modelValue: e.value, "onUpdate:modelValue": o[0] || (o[0] = (d) => e.value = d), title: a.$t("dialogue_record"), size: "880px", "destroy-on-close": "", "append-to-body": "", "close-on-click-modal": true }, { default: i(() => [_(v, { className: "!px-2 !py-2", type: l.value, relatedId: s.value }, null, 8, ["type", "relatedId"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} });
export {
  k as _
};
