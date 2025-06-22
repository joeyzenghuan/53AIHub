import { y as g, b as d, c as u, f as t, w as s, u as e, F as _, K as b, j as V, al as m, d as w, t as E, ag as I, a5 as $, I as v } from "./index-8579fe4a.js";
import { E as y } from "./el-input-number-310bd679.js";
import "./el-tag-0b6baecb.js";
import { E as h, a as x } from "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import { u as A } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { _ as F } from "./image.vue_vue_type_style_index_0_lang-1ce00652.js";
const U = { class: "w-full text-sm text-[#9A9A9A]" }, k = g({ __name: "agent-info", setup(z) {
  const o = A();
  return (r, a) => {
    const i = h, f = x, n = I, p = $, c = y;
    return d(), u(_, null, [t(n, { label: r.$t("group"), prop: "group_id", rules: e(m)({ message: "form_select_placeholder" }) }, { default: s(() => [t(f, { modelValue: e(o).form_data.group_id, "onUpdate:modelValue": a[0] || (a[0] = (l) => e(o).form_data.group_id = l), size: "large", class: "max-w-[370px]" }, { default: s(() => [(d(true), u(_, null, b(e(o).group_options, (l) => (d(), V(i, { key: l.value, value: l.value, label: l.label }, null, 8, ["value", "label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), t(n, { label: r.$t("name"), prop: "name", rules: e(m)({ message: "form_input_placeholder" }) }, { default: s(() => [t(p, { modelValue: e(o).form_data.name, "onUpdate:modelValue": a[1] || (a[1] = (l) => e(o).form_data.name = l), size: "large", class: "max-w-[370px]", "show-word-limit": "", maxlength: "20", placeholder: r.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), t(n, { label: r.$t("description") }, { default: s(() => [t(p, { modelValue: e(o).form_data.description, "onUpdate:modelValue": a[2] || (a[2] = (l) => e(o).form_data.description = l), type: "textarea", rows: 6, resize: "none", "show-word-limit": "", maxlength: "200" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), t(n, { label: r.$t("avatar"), prop: "logo", rules: e(m)({ message: "form_upload_placeholder" }) }, { default: s(() => [t(F, { modelValue: e(o).form_data.logo, "onUpdate:modelValue": a[3] || (a[3] = (l) => e(o).form_data.logo = l), class: "w-12 h-12" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), t(n, { label: r.$t("action_sort"), prop: "sort", rules: e(m)({ message: "form_input_placeholder" }) }, { default: s(() => [t(c, { modelValue: e(o).form_data.sort, "onUpdate:modelValue": a[4] || (a[4] = (l) => e(o).form_data.sort = l), class: "!w-[300px]", size: "large", controls: false, precision: 0, min: 0, max: 99999999, placeholder: r.$t("form_input_placeholder"), onKeydown: r.$numberInputKeydownHandler }, null, 8, ["modelValue", "placeholder", "onKeydown"]), w("div", U, E(r.$t("module.agent_sort_desc")), 1)]), _: 1 }, 8, ["label", "rules"])], 64);
  };
} });
const D = v(k, [["__scopeId", "data-v-ec220cdc"]]);
export {
  D as A
};
