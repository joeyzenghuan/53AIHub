import { y as x, r as t, b as r, j as y, u as s, a0 as k, c as B, f as C, d as V, t as w, q as I, n as z, a5 as R, R as D } from "./index-8579fe4a.js";
import { d as c } from "./sortable.esm-7ba019b6.js";
const E = { class: "text-sm" }, j = x({ __name: "index", props: { placeholder: { default: "form_input_placeholder" }, size: { default: "default" }, disabled: { type: Boolean, default: false } }, emits: ["input", "change"], setup(i, { emit: d }) {
  const p = i, o = d, l = t(), e = t(""), n = t(false), f = () => {
    p.disabled || (n.value = true, z(() => {
      l.value.focus();
    }));
  }, _ = () => {
    e.value || (n.value = false);
  }, m = c(() => {
    o("input", e.value);
  }, 600), h = c(() => {
    o("change", e.value);
  }, 0);
  return (a, u) => {
    const v = R, g = D;
    return n.value ? (r(), y(v, { key: 0, ref_key: "inputRef", ref: l, modelValue: e.value, "onUpdate:modelValue": u[0] || (u[0] = (b) => e.value = b), style: { "max-width": "230px" }, size: "default", clearable: "", "prefix-icon": s(k), placeholder: a.$t(a.placeholder), class: "input-with-search", disabled: a.disabled, onBlur: _, onInput: s(m), onChange: s(h) }, null, 8, ["modelValue", "prefix-icon", "placeholder", "disabled", "onInput", "onChange"])) : (r(), B("div", { key: 1, class: I(["flex items-center gap-1", [a.disabled ? "text-[#999] cursor-not-allowed" : "cursor-pointer text-[#576D9C]"]]), onClick: f }, [C(g, { name: "search", width: "16" }), V("span", E, w(a.$t("action_search")), 1)], 2));
  };
} });
export {
  j as _
};
