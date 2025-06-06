import { u as g, r as t, b as u, h as x, z as o, V as k, c as y, f as B, d as C, t as V, W as I, X as b, L as w } from "./index-6feda8be.js";
import { d as r } from "./debounce-f4e6390f.js";
const z = { class: "text-sm" }, R = g({ __name: "index", props: { placeholder: { default: "form_input_placeholder" }, size: { default: "default" } }, emits: ["input", "change"], setup(D, { emit: i }) {
  const s = i, l = t(), e = t(""), n = t(false), p = () => {
    n.value = true, I(() => {
      l.value.focus();
    });
  }, d = () => {
    e.value || (n.value = false);
  }, _ = r(() => {
    s("input", e.value);
  }, 600), f = r(() => {
    s("change", e.value);
  }, 0);
  return (a, c) => {
    const m = b, h = w;
    return n.value ? (u(), x(m, { key: 0, ref_key: "inputRef", ref: l, modelValue: e.value, "onUpdate:modelValue": c[0] || (c[0] = (v) => e.value = v), style: { "max-width": "230px" }, size: "default", clearable: "", "prefix-icon": o(k), placeholder: a.$t(a.placeholder), class: "input-with-search", onBlur: d, onInput: o(_), onChange: o(f) }, null, 8, ["modelValue", "prefix-icon", "placeholder", "onInput", "onChange"])) : (u(), y("div", { key: 1, class: "flex items-center gap-1 cursor-pointer text-[#576D9C]", onClick: p }, [B(h, { name: "search", width: "16" }), C("span", z, V(a.$t("action_search")), 1)]));
  };
} });
export {
  R as _
};
