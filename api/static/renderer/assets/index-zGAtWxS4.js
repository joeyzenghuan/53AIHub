import { T as Toolbox } from "./toolbox-ii-CjmFe.js";
import { _ as _sfc_main$1 } from "./main-header.vue_vue_type_script_setup_true_lang-hK95iFpc.js";
import { y as defineComponent, c as createElementBlock, f as createVNode, i as withCtx, z as resolveComponent, b as openBlock, d as createBaseVNode, t as toDisplayString, B as createTextVNode } from "./main-zTjO05wq.js";
import "./el-loading-bLs-AQkn.js";
import "./el-image-viewer-l__UzqmW.js";
import "./debounce-Aw5yKx-N.js";
import "./el-tab-pane-c5Z0Dsok.js";
import "./strings-gmAHSTq5.js";
import "./index-UhiCyIRr.js";
import "./links-hplqNGHr.js";
import "./el-scrollbar-Ngsny-f4.js";
import "./el-radio-uShQVp49.js";
import "./enterprise-EiZTO-a9.js";
import "./global-kvMtX63s.js";
const _hoisted_1 = { class: "h-full bg-white flex flex-col" };
const _hoisted_2 = { class: "text-base text-primary font-bold line-clamp-1" };
const _hoisted_3 = { class: "flex items-center gap-1 text-sm text-secondary" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, null, {
          before_suffix: withCtx(() => [
            createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("module.toolbox")), 1)
          ]),
          after_prefix: withCtx(() => [
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_svg_icon, { name: "index" }),
              createVNode(_component_router_link, { to: { name: "Home" } }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("common.back_home")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        createVNode(Toolbox)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
