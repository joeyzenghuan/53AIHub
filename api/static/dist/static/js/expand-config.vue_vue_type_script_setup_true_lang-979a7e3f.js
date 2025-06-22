import { y as p, u as t, b as l, c as _, d as o, t as a, L as c, f as d, e as m, F as f } from "./index-8579fe4a.js";
import { E as u } from "./el-switch-1a77f9ca.js";
import { u as g } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
const x = { class: "text-base text-[#1D1E1F] font-medium mb-4" }, V = { key: 0, class: "flex items-center gap-2" }, b = { class: "flex-1" }, v = { class: "text-sm text-[#1D1E1F]" }, h = { class: "flex-none text-sm text-[#1D1E1F]" }, E = { key: 1, class: "flex items-center gap-2 mt-4" }, F = { class: "flex-1" }, $ = { class: "text-sm text-[#1D1E1F]" }, D = { class: "flex-none text-sm text-[#1D1E1F]" }, S = p({ __name: "expand-config", setup(k) {
  const e = g();
  return (s, n) => {
    const r = u;
    return t(e).support_file || t(e).support_image ? (l(), _(f, { key: 0 }, [o("div", x, a(s.$t("expand_setting")), 1), t(e).support_file ? (l(), _("div", V, [o("div", b, [o("div", v, a(s.$t("agent_file_parse")), 1)]), o("div", h, [c(a(t(e).form_data.custom_config.file_parse.enable ? s.$t("action_open") : s.$t("action_close")) + " ", 1), d(r, { modelValue: t(e).form_data.custom_config.file_parse.enable, "onUpdate:modelValue": n[0] || (n[0] = (i) => t(e).form_data.custom_config.file_parse.enable = i) }, null, 8, ["modelValue"])])])) : m("", true), t(e).support_image ? (l(), _("div", E, [o("div", F, [o("div", $, a(s.$t("agent_image_parse")), 1)]), o("div", D, [c(a(t(e).form_data.custom_config.image_parse.enable ? s.$t("action_open") : s.$t("action_close")) + " ", 1), d(r, { modelValue: t(e).form_data.custom_config.image_parse.enable, "onUpdate:modelValue": n[1] || (n[1] = (i) => t(e).form_data.custom_config.image_parse.enable = i) }, null, 8, ["modelValue"])])])) : m("", true)], 64)) : m("", true);
  };
} });
export {
  S as _
};
