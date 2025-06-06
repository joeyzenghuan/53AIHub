import { y as defineComponent, M as useAgentStore, r as ref, J as reactive, N as computed, o as onMounted, c as createElementBlock, d as createBaseVNode, f as createVNode, i as withCtx, O as unref, U as TransitionGroup, V as ElInput, z as resolveComponent, b as openBlock, H as Fragment, I as renderList, h as createBlock, W as search_default, t as toDisplayString, Q as _export_sfc } from "./main-zTjO05wq.js";
import { E as ElImage } from "./el-image-viewer-l__UzqmW.js";
import { E as ElEmpty } from "./el-empty-iR7uizlV.js";
import { E as ElTabs, a as ElTabPane } from "./el-tab-pane-c5Z0Dsok.js";
import "./debounce-Aw5yKx-N.js";
import "./strings-gmAHSTq5.js";
import "./index-UhiCyIRr.js";
const _hoisted_1 = { class: "lg:w-4/5 py-6 md:py-8 lg:py-10 w-5/6 mx-auto box-border" };
const _hoisted_2 = { class: "flex flex-col gap-5 md:flex-row items-start md:items-center justify-between" };
const _hoisted_3 = {
  key: 1,
  class: "col-span-full flex flex-col items-center justify-center py-10"
};
const _hoisted_4 = { class: "flex-1 overflow-hidden" };
const _hoisted_5 = { class: "text-base font-medium mb-1 mt-1 line-clamp-1 text-primary" };
const _hoisted_6 = { class: "text-sm text-opacity-60 line-clamp-2 text-regular" };
const _hoisted_7 = { class: "mt-3 flex items-center justify-between" };
const _hoisted_8 = { class: "flex items-center text-sm text-placeholder" };
const _hoisted_9 = { class: "size-[14px] flex-center" };
const _hoisted_10 = { class: "ml-1" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "agent",
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
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      const _component_el_input = ElInput;
      const _component_el_empty = ElEmpty;
      const _component_el_image = ElImage;
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
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
              style: { "width": "268px" },
              placeholder: _ctx.$t("action.search") + _ctx.$t("module.agent"),
              "suffix-icon": unref(search_default)
            }, null, 8, ["modelValue", "placeholder", "suffix-icon"])
          ])
        ]),
        createVNode(TransitionGroup, {
          name: "list",
          tag: "div",
          class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-5 md:mt-8"
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
            }), 64)) : showAgentList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createVNode(_component_el_empty, {
                description: _ctx.$t("common.no_data"),
                image: _ctx.$getPublicPath("/images/chat/completion_empty.png")
              }, null, 8, ["description", "image"])
            ])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(showAgentList.value, (item) => {
              return openBlock(), createBlock(_component_router_link, {
                key: item.agent_id,
                to: { name: "Chat", query: { agent_id: item.agent_id } },
                class: "flex items-start p-4 rounded-lg overflow-hidden bg-cover cursor-pointer border border-[#ECECEC] hover:shadow-md transition-all duration-300"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_image, {
                    class: "flex-none size-[50px] mr-4 rounded-full",
                    src: item.logo,
                    fit: "contain"
                  }, null, 8, ["src"]),
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("h3", _hoisted_5, toDisplayString(item.name), 1),
                    createBaseVNode("p", _hoisted_6, toDisplayString(item.description || "- -"), 1),
                    createBaseVNode("div", _hoisted_7, [
                      createBaseVNode("div", _hoisted_8, [
                        createBaseVNode("div", _hoisted_9, [
                          createVNode(_component_svg_icon, { name: "hot" })
                        ]),
                        createBaseVNode("span", _hoisted_10, toDisplayString(_ctx.$t("index.use_history", { count: item.conversation_count || 0 })), 1)
                      ])
                    ])
                  ])
                ]),
                _: 2
              }, 1032, ["to"]);
            }), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
});
const AgentView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9019c6e5"]]);
export {
  AgentView as default
};
