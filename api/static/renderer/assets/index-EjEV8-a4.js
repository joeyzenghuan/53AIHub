import { y as defineComponent, M as useAgentStore, r as ref, J as reactive, N as computed, o as onMounted, c as createElementBlock, f as createVNode, i as withCtx, d as createBaseVNode, O as unref, U as TransitionGroup, V as ElInput, z as resolveComponent, b as openBlock, t as toDisplayString, B as createTextVNode, H as Fragment, I as renderList, h as createBlock, W as search_default, X as normalizeStyle } from "./main-zTjO05wq.js";
import { E as ElImage } from "./el-image-viewer-l__UzqmW.js";
import { E as ElEmpty } from "./el-empty-iR7uizlV.js";
import { E as ElTabs, a as ElTabPane } from "./el-tab-pane-c5Z0Dsok.js";
import { _ as _sfc_main$1 } from "./main-header.vue_vue_type_script_setup_true_lang-hK95iFpc.js";
import "./debounce-Aw5yKx-N.js";
import "./strings-gmAHSTq5.js";
import "./index-UhiCyIRr.js";
import "./el-scrollbar-Ngsny-f4.js";
import "./el-loading-bLs-AQkn.js";
import "./el-radio-uShQVp49.js";
import "./enterprise-EiZTO-a9.js";
import "./global-kvMtX63s.js";
const _hoisted_1 = { class: "flex flex-col h-full overflow-hidden" };
const _hoisted_2 = { class: "text-base text-primary font-bold line-clamp-1" };
const _hoisted_3 = { class: "flex items-center gap-1 text-sm text-[#666666]" };
const _hoisted_4 = { class: "flex-1 overflow-y-auto" };
const _hoisted_5 = { class: "w-11/12 lg:w-4/5 mx-auto py-6 md:py-8 lg:py-10" };
const _hoisted_6 = { class: "flex flex-col gap-5 md:flex-row items-start md:items-center justify-between mt-4 md:mt-6" };
const _hoisted_7 = {
  key: 1,
  class: "col-span-full flex flex-col items-center justify-center py-10"
};
const _hoisted_8 = { class: "flex-1 overflow-hidden" };
const _hoisted_9 = { class: "text-base font-medium text-primary mb-1 mt-1 line-clamp-1" };
const _hoisted_10 = { class: "text-sm text-regular text-opacity-60 line-clamp-2" };
const _hoisted_11 = { class: "mt-4 flex items-center justify-between" };
const _hoisted_12 = { class: "flex items-center text-gray-400 text-sm" };
const _hoisted_13 = { class: "size-[14px] flex-center" };
const _hoisted_14 = { class: "ml-1" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const agentStore = useAgentStore();
    const loading = ref(false);
    const state = reactive({
      keyword: "",
      group_id: 0
    });
    const showAgentList = computed(() => {
      if (!state.keyword) {
        return state.group_id === 0 ? agentStore.agentList : agentStore.agentList.filter((item) => item.group_id === state.group_id);
      } else {
        const keyword = state.keyword.toLowerCase().trim();
        return agentStore.agentList.filter((item) => {
          const matchKeyword = item.name.toLowerCase().includes(keyword) || item.description && item.description.toLowerCase().includes(keyword);
          return (state.group_id === 0 || item.group_id === state.group_id) && matchKeyword;
        });
      }
    });
    const onTabChange = (group_id) => {
      state.group_id = group_id;
    };
    onMounted(() => {
      agentStore.loadCategorys();
      agentStore.loadAgentList();
    });
    return (_ctx, _cache) => {
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_router_link = resolveComponent("router-link");
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      const _component_el_input = ElInput;
      const _component_el_empty = ElEmpty;
      const _component_el_image = ElImage;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, null, {
          before_suffix: withCtx(() => [
            createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("module.find")), 1)
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
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_el_tabs, {
                class: "flex-1 index-tabs mb-4 md:mb-0 overflow-hidden",
                modelValue: state.group_id,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.group_id = $event),
                onTabChange
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(agentStore).categorys, (item) => {
                    return openBlock(), createBlock(_component_el_tab_pane, {
                      key: item.group_id,
                      label: item.group_name,
                      name: item.group_id
                    }, null, 8, ["label", "name"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createBaseVNode("div", null, [
                createVNode(_component_el_input, {
                  modelValue: state.keyword,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.keyword = $event),
                  size: "large",
                  style: { "width": "240px" },
                  placeholder: _ctx.$t("action.search") + _ctx.$t("module.agent"),
                  "suffix-icon": unref(search_default)
                }, null, 8, ["modelValue", "placeholder", "suffix-icon"])
              ])
            ]),
            createVNode(TransitionGroup, {
              name: "list",
              tag: "div",
              class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6 md:mt-10"
            }, {
              default: withCtx(() => [
                loading.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(6, (i) => {
                  return createBaseVNode("div", {
                    key: i,
                    class: "flex items-start p-4 bg-[#FFF8FF] rounded-lg animate-pulse"
                  }, _cache[2] || (_cache[2] = [
                    createBaseVNode("div", { class: "w-[70px] h-[70px] bg-gray-200 rounded-full mr-4" }, null, -1),
                    createBaseVNode("div", { class: "flex-1" }, [
                      createBaseVNode("div", { class: "h-5 bg-gray-200 rounded w-3/4 mb-2" }),
                      createBaseVNode("div", { class: "h-4 bg-gray-200 rounded w-full mb-1" }),
                      createBaseVNode("div", { class: "h-4 bg-gray-200 rounded w-2/3 mb-4" }),
                      createBaseVNode("div", { class: "h-4 bg-gray-200 rounded w-1/3" })
                    ], -1)
                  ]));
                }), 64)) : showAgentList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [
                  createVNode(_component_el_empty, {
                    description: _ctx.$t("common.no_data"),
                    image: _ctx.$getPublicPath("/images/chat/completion_empty.png")
                  }, null, 8, ["description", "image"])
                ])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(showAgentList.value, (item) => {
                  return openBlock(), createBlock(_component_router_link, {
                    key: item.agent_id,
                    to: { name: "Chat", query: { agent_id: item.agent_id } },
                    class: "flex items-start p-4 rounded-lg overflow-hidden bg-cover cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#F8F0FF]",
                    style: normalizeStyle({
                      backgroundImage: `url(${_ctx.$getPublicPath("/images/index/card_bg.png")})`
                    })
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_image, {
                        class: "flex-none w-[70px] mr-4 rounded-full",
                        src: item.logo
                      }, null, 8, ["src"]),
                      createBaseVNode("div", _hoisted_8, [
                        createBaseVNode("h3", _hoisted_9, toDisplayString(item.name), 1),
                        createBaseVNode("p", _hoisted_10, toDisplayString(item.description || "- -"), 1),
                        createBaseVNode("div", _hoisted_11, [
                          createBaseVNode("div", _hoisted_12, [
                            createBaseVNode("div", _hoisted_13, [
                              createVNode(_component_svg_icon, { name: "hot" })
                            ]),
                            createBaseVNode("span", _hoisted_14, toDisplayString(_ctx.$t("index.use_history", { count: +item.conversation_count || 0 })), 1)
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["to", "style"]);
                }), 128))
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
