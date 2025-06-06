import { y as defineComponent, r as ref, o as onMounted, c as createElementBlock, H as Fragment, I as renderList, z as resolveComponent, b as openBlock, B as createTextVNode, t as toDisplayString, f as createVNode } from "./main-zTjO05wq.js";
const _hoisted_1 = { class: "flex flex-wrap gap-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const lists = ref([]);
    onMounted(() => {
      const svgs = document.querySelectorAll("#__svg__icons__dom__ symbol");
      const names = [];
      Array.from(svgs).forEach((item) => {
        const name = item.getAttribute("id").replace("icon-", "");
        names.push(name);
      });
      lists.value = names;
    });
    return (_ctx, _cache) => {
      const _component_svg_icon = resolveComponent("svg-icon");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(lists.value, (name, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "flex flex-col items-center"
          }, [
            createTextVNode(toDisplayString(name) + " ", 1),
            createVNode(_component_svg_icon, {
              name,
              size: "30"
            }, null, 8, ["name"])
          ]);
        }), 128))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
