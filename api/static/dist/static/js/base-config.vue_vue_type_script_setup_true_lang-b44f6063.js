import { _ as b } from "./index.vue_vue_type_script_setup_true_lang-dd688c6c.js";
import { y as x, o as V, b as v, c as w, d as s, t as i, f as n, u as l, w as d, L as $, a8 as q, F as E, a9 as y, a4 as D, R as F, a5 as k, G as C } from "./index-8579fe4a.js";
import { u as N } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { _ as U } from "./editor.vue_vue_type_style_index_0_lang-603ca752.js";
const B = { class: "text-base text-[#1D1E1F] font-medium mb-4" }, S = { class: "flex items-center justify-between gap-2 mb-2" }, A = { class: "text-sm text-[#4F5052]" }, I = { class: "flex items-center justify-between gap-2 mb-2" }, M = { class: "text-sm text-[#4F5052]" }, T = { class: "flex items-center border px-2 border-[#DCDFE6] rounded-sm" }, j = { class: "sort-icon cursor-move" }, z = { class: "flex-1" }, _ = 10, X = x({ __name: "base-config", setup(G) {
  const t = N(), c = () => {
    const e = t.form_data.settings.suggested_questions;
    if (e.length >= _) {
      y.error(`${$t("max_add_tip", { max: _ })}`);
      return;
    }
    e.push({ id: Date.now(), content: "" });
  }, m = (e) => {
    t.form_data.settings.suggested_questions = t.form_data.settings.suggested_questions.filter((a) => a.id !== e);
  };
  return V(() => {
    t.form_data.settings.suggested_questions.length || (t.form_data.settings.suggested_questions = [{ id: Date.now(), content: "" }]);
  }), (e, a) => {
    const u = D, g = F, p = k, f = C, h = b;
    return v(), w(E, null, [s("div", B, i(e.$t("base_setting")), 1), s("div", S, [s("div", A, i(e.$t("opening_statement")), 1)]), n(U, { modelValue: l(t).form_data.settings.opening_statement, "onUpdate:modelValue": a[0] || (a[0] = (o) => l(t).form_data.settings.opening_statement = o), type: "simple", class: "w-full mb-4", height: "200px" }, null, 8, ["modelValue"]), s("div", I, [s("div", M, i(e.$t("suggested_questions")), 1), n(u, { link: "", size: "large", onClick: c }, { default: d(() => [$(" +" + i(e.$t("action_add")), 1)]), _: 1 })]), n(h, { modelValue: l(t).form_data.settings.suggested_questions, "onUpdate:modelValue": a[1] || (a[1] = (o) => l(t).form_data.settings.suggested_questions = o), identity: "cid", class: "w-full flex flex-col gap-4 mb-4" }, { item: d(({ item: o, index: L }) => [s("div", T, [s("div", j, [n(g, { name: "drag", width: "16px", height: "32px", color: "#a1a5af" })]), s("div", z, [n(p, { modelValue: o.content, "onUpdate:modelValue": (r) => o.content = r, size: "large", style: { "--el-input-border-color": "none", "--el-input-hover-border-color": "none", "--el-input-focus-border-color": "none" }, placeholder: e.$t("form_input_placeholder"), class: "w-full" }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), n(f, { class: "ml-4 cursor-pointer", color: "rgba(24, 43, 80, 0.4)", onClick: (r) => m(o.id) }, { default: d(() => [n(l(q))]), _: 2 }, 1032, ["onClick"])])]), _: 1 }, 8, ["modelValue"])], 64);
  };
} });
export {
  X as _
};
