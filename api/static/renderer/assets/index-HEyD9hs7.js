import { y as defineComponent, L as useRoute, M as useAgentStore, r as ref, J as reactive, N as computed, ah as onClickOutside, o as onMounted, $ as nextTick, a as onUnmounted, z as resolveComponent, K as resolveDirective, b as openBlock, c as createElementBlock, O as unref, e as createCommentVNode, d as createBaseVNode, f as createVNode, i as withCtx, B as createTextVNode, t as toDisplayString, g as withDirectives, W as search_default, H as Fragment, I as renderList, h as createBlock, v as vShow, ai as arrow_up_default, aj as arrow_down_default, n as normalizeClass, a1 as withModifiers, U as TransitionGroup, V as ElInput, a4 as ElIcon, Q as _export_sfc, ak as useUserStore, al as resolveDynamicComponent } from "./main-zTjO05wq.js";
import { E as ElEmpty } from "./el-empty-iR7uizlV.js";
import { E as ElImage } from "./el-image-viewer-l__UzqmW.js";
import { u as useGlobalStore } from "./global-kvMtX63s.js";
import { u as useConversationStore } from "./conversation-KofNRSJn.js";
import { u as useEnterpriseStore } from "./enterprise-EiZTO-a9.js";
import { u as useLinksStore } from "./links-hplqNGHr.js";
import "./debounce-Aw5yKx-N.js";
const _hoisted_1$1 = { class: "px-3 h-[70px] flex items-center gap-2" };
const _hoisted_2$1 = ["src"];
const _hoisted_3 = { class: "flex-1 py-3 overflow-y-auto" };
const _hoisted_4 = { class: "px-5 pb-2" };
const _hoisted_5 = {
  key: 0,
  class: "px-5"
};
const _hoisted_6 = { class: "h-9 flex items-center gap-2" };
const _hoisted_7 = { class: "text-sm text-[#939499]" };
const _hoisted_8 = { class: "flex flex-col gap-1" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = { class: "h-9 flex items-center gap-2" };
const _hoisted_12 = { class: "text-sm text-[#939499]" };
const _hoisted_13 = { class: "flex flex-col gap-1" };
const _hoisted_14 = ["onClick"];
const _hoisted_15 = ["innerHTML"];
const _hoisted_16 = { class: "h-9 flex items-center gap-2" };
const _hoisted_17 = { class: "text-sm text-[#939499]" };
const _hoisted_18 = { class: "flex flex-col gap-1" };
const _hoisted_19 = ["href"];
const _hoisted_20 = ["innerHTML"];
const _hoisted_21 = { class: "px-2" };
const _hoisted_22 = { class: "size-7 flex-center" };
const _hoisted_23 = { class: "flex-1 text-base" };
const _hoisted_24 = { class: "px-3" };
const _hoisted_25 = ["onClick"];
const _hoisted_26 = { class: "flex-1 text-sm truncate" };
const _hoisted_27 = ["onClick"];
const _hoisted_28 = { class: "flex flex-col gap-3 px-2 mt-2" };
const _hoisted_29 = { class: "size-7 flex-center" };
const _hoisted_30 = { class: "flex-1 text-base text-[#000000]" };
const _hoisted_31 = { class: "flex flex-col gap-3 px-2 py-1.5" };
const _hoisted_32 = { class: "size-7 flex-center" };
const _hoisted_33 = { class: "flex-1 text-base" };
const _hoisted_34 = { class: "size-7 flex-center" };
const _hoisted_35 = { class: "flex-1 text-base text-[#000000]" };
const SHOW_USUAL_AGENT_LEN = 4;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "sider",
  setup(__props) {
    const route = useRoute();
    const agentStore = useAgentStore();
    const globalStore = useGlobalStore();
    const linksStore = useLinksStore();
    const convStore = useConversationStore();
    const enterpriseStore = useEnterpriseStore();
    const siderRef = ref();
    const state = reactive({
      keyword: "",
      sidebarCollapsed: false,
      agentCollapsed: false,
      showUsualAgents: true
    });
    const usualAgents = computed(() => {
      const agents = state.agentCollapsed ? convStore.usual_agents : convStore.usual_agents.slice(0, SHOW_USUAL_AGENT_LEN);
      return agents;
    });
    const currentAgent = computed(() => convStore.currentAgent);
    const currentConv = computed(() => convStore.currentConversation);
    const searchUsualAgents = computed(() => {
      if (!state.keyword)
        return [];
      return convStore.usual_agents.filter((agent) => agent.name.toLowerCase().includes(state.keyword.toLowerCase())).map((item) => {
        return {
          ...item,
          formt_name: item.name.replace(new RegExp(state.keyword, "g"), `<span class="text-theme">${state.keyword}</span>`)
        };
      });
    });
    const searchAgents = computed(() => {
      if (!state.keyword)
        return [];
      return agentStore.agentList.filter((agent) => agent.name.toLowerCase().includes(state.keyword.toLowerCase())).map((item) => {
        return {
          ...item,
          formt_name: item.name.replace(new RegExp(state.keyword, "g"), `<span class="text-theme">${state.keyword}</span>`)
        };
      });
    });
    const searchToolBox = computed(() => {
      if (!state.keyword)
        return [];
      return Object.values(linksStore.appMap).flat().filter((item) => item.name.toLowerCase().includes(state.keyword.toLowerCase())).map((item) => {
        return {
          ...item,
          name: item.name.replace(new RegExp(state.keyword, "g"), `<span class="text-theme">${state.keyword}</span>`)
        };
      });
    });
    onClickOutside(siderRef, () => {
      if (!globalStore.siderVisible && globalStore.siderCollapsed)
        globalStore.siderCollapsed = false;
    });
    const toggleAgent = () => {
      state.agentCollapsed = !state.agentCollapsed;
    };
    const handleJumpToLibrary = () => {
      if (window.$isElectron) {
        window.$chat53ai.$win({
          type: "new-tab",
          data: JSON.stringify({
            title: "AI知识库",
            closable: true,
            ability: false,
            urls: ["http://ziroom.hub.53ai.com/space"]
          })
        });
      } else {
        window.open("http://ziroom.hub.53ai.com/space", "_blank");
      }
    };
    onMounted(async () => {
      const agent_id = route.query.agent_id || "";
      const conversation_id = route.query.conversation_id || "";
      agentStore.loadCategorys();
      await agentStore.loadAgentList().then((agentList) => {
        if (route.name !== "Chat")
          return;
        const agent = agentList.find((item) => item.agent_id === +agent_id);
        if (agent) {
          convStore.pushUsualAgent(agent);
        } else {
          const usableAgent = convStore.usual_agents[0] || agentList[0];
          if (usableAgent) {
            convStore.pushUsualAgent(usableAgent);
          }
        }
        convStore.updateAgents(agentList);
        if (!conversation_id) {
          convStore.setCurrentState(+agent_id, 0);
        }
      });
      nextTick(() => {
        linksStore.loadLinks();
      });
    });
    onUnmounted(() => {
      convStore.clearCurrentState();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_el_input = ElInput;
      const _component_el_image = ElImage;
      const _component_el_empty = ElEmpty;
      const _component_el_icon = ElIcon;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock(Fragment, null, [
        !unref(globalStore).siderVisible && !unref(globalStore).siderCollapsed ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "w-4 h-full absolute left-0 top-0 z-[2] hover:bg-gray-100/50 transition-colors",
          onMouseenter: _cache[0] || (_cache[0] = ($event) => unref(globalStore).hoverSider(true))
        }, null, 32)) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "siderRef",
          ref: siderRef,
          class: normalizeClass(["w-[280px] border-r flex flex-col bg-[#FAFAFA] transition-all duration-300 ease-linear", [
            {
              "absolute z-10 left-0 top-20 bottom-5 -translate-x-full shadow-xl rounded-r": !unref(globalStore).siderVisible,
              "translate-x-0": !unref(globalStore).siderVisible && unref(globalStore).siderCollapsed
            }
          ]]),
          onMouseleave: _cache[4] || (_cache[4] = ($event) => unref(globalStore).hoverSider(false))
        }, [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(_component_router_link, { to: { name: "Home" } }, {
              default: withCtx(() => [
                createBaseVNode("img", {
                  class: "size-8 rounded",
                  src: unref(enterpriseStore).logo,
                  alt: ""
                }, null, 8, _hoisted_2$1)
              ]),
              _: 1
            }),
            createVNode(_component_router_link, {
              to: { name: "Home" },
              class: "flex-1 text-base text-primary truncate"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(enterpriseStore).display_name), 1)
              ]),
              _: 1
            }),
            withDirectives((openBlock(), createElementBlock("div", {
              class: "flex-none size-7 rounded-md flex-center cursor-pointer hover:bg-[#ECEDEE]",
              onClick: _cache[1] || (_cache[1] = //@ts-ignore
              (...args) => unref(globalStore).toggleSider && unref(globalStore).toggleSider(...args))
            }, [
              createVNode(_component_svg_icon, {
                name: "layout-left",
                size: "20",
                color: "#9A9A9A"
              })
            ])), [
              [_directive_tooltip, {
                content: unref(globalStore).siderVisible ? _ctx.$t("chat.collapse_side_bar") : _ctx.$t("chat.expand_side_bar")
              }]
            ])
          ]),
          _cache[9] || (_cache[9] = createBaseVNode("div", { class: "border-b mx-2" }, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_el_input, {
                modelValue: state.keyword,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.keyword = $event),
                class: "",
                placeholder: _ctx.$t("action.search"),
                "prefix-icon": unref(search_default),
                style: { "--el-input-inner-height": "36px", "--el-input-border-color": "none" },
                clearable: ""
              }, null, 8, ["modelValue", "placeholder", "prefix-icon"])
            ]),
            state.keyword ? (openBlock(), createElementBlock("div", _hoisted_5, [
              searchUsualAgents.value.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, toDisplayString(_ctx.$t("module.chat")), 1),
                  _cache[5] || (_cache[5] = createBaseVNode("div", { class: "flex-1 h-px bg-[#E6E8EB]" }, null, -1))
                ]),
                createBaseVNode("div", _hoisted_8, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(searchUsualAgents.value, (item) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.agent_id,
                      class: "h-9 px-6 flex items-center gap-2 rounded cursor-pointer text-[#4F5052] hover:bg-[#ECEDEE]",
                      onClick: ($event) => unref(convStore).setCurrentState(item.agent_id, 0)
                    }, [
                      createVNode(_component_el_image, {
                        class: "flex-none size-6 rounded-full",
                        src: item.logo
                      }, null, 8, ["src"]),
                      createBaseVNode("div", {
                        class: "flex-1 text-sm truncate",
                        innerHTML: item.formt_name
                      }, null, 8, _hoisted_10)
                    ], 8, _hoisted_9);
                  }), 128))
                ])
              ], 64)) : createCommentVNode("", true),
              searchAgents.value.length ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, toDisplayString(_ctx.$t("module.find")), 1),
                  _cache[6] || (_cache[6] = createBaseVNode("div", { class: "flex-1 h-px bg-[#E6E8EB]" }, null, -1))
                ]),
                createBaseVNode("div", _hoisted_13, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(searchAgents.value, (item) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.agent_id,
                      class: "h-9 px-6 flex items-center gap-2 rounded cursor-pointer text-[#4F5052] hover:bg-[#ECEDEE]",
                      onClick: () => {
                        unref(convStore).pushUsualAgent(item), unref(convStore).setCurrentState(item.agent_id, 0);
                      }
                    }, [
                      createVNode(_component_el_image, {
                        class: "flex-none size-6 rounded-full",
                        src: item.logo
                      }, null, 8, ["src"]),
                      createBaseVNode("div", {
                        class: "flex-1 text-sm truncate",
                        innerHTML: item.formt_name
                      }, null, 8, _hoisted_15)
                    ], 8, _hoisted_14);
                  }), 128))
                ])
              ], 64)) : createCommentVNode("", true),
              searchToolBox.value.length ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, toDisplayString(_ctx.$t("module.toolbox")), 1),
                  _cache[7] || (_cache[7] = createBaseVNode("div", { class: "flex-1 h-px bg-[#E6E8EB]" }, null, -1))
                ]),
                createBaseVNode("div", _hoisted_18, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(searchToolBox.value, (item) => {
                    return openBlock(), createElementBlock("a", {
                      key: item.agent_id,
                      href: item.url,
                      target: "_blank",
                      class: "h-9 px-6 flex items-center gap-2 rounded cursor-pointer text-[#4F5052] hover:bg-[#ECEDEE]"
                    }, [
                      createVNode(_component_el_image, {
                        class: "flex-none size-6 rounded-full",
                        src: item.logo
                      }, null, 8, ["src"]),
                      createBaseVNode("div", {
                        class: "flex-1 text-sm truncate",
                        innerHTML: item.name
                      }, null, 8, _hoisted_20)
                    ], 8, _hoisted_19);
                  }), 128))
                ])
              ], 64)) : createCommentVNode("", true),
              !searchUsualAgents.value.length && !searchAgents.value.length && !searchToolBox.value.length ? (openBlock(), createBlock(_component_el_empty, {
                key: 3,
                "image-size": "60",
                description: _ctx.$t("common.no_data")
              }, null, 8, ["description"])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            withDirectives(createBaseVNode("div", null, [
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("div", {
                  class: "h-9 px-2 rounded-md flex items-center gap-0.5 cursor-pointer hover-bg-primary-light-9 text-primary",
                  onClick: _cache[3] || (_cache[3] = ($event) => state.showUsualAgents = !state.showUsualAgents)
                }, [
                  createBaseVNode("div", _hoisted_22, [
                    createVNode(_component_svg_icon, {
                      size: "18",
                      name: "chat"
                    })
                  ]),
                  createBaseVNode("p", _hoisted_23, toDisplayString(_ctx.$t("module.chat")), 1),
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      state.showUsualAgents ? (openBlock(), createBlock(unref(arrow_up_default), { key: 0 })) : (openBlock(), createBlock(unref(arrow_down_default), { key: 1 }))
                    ]),
                    _: 1
                  })
                ])
              ]),
              withDirectives(createBaseVNode("div", _hoisted_24, [
                createVNode(TransitionGroup, {
                  name: "list",
                  tag: "div",
                  class: "flex flex-col gap-1 mt-2"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(usualAgents.value, (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.agent_id,
                        class: normalizeClass(["h-9 pl-6 pr-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-[#ECEDEE] group text-[#4F5052]", [
                          currentAgent.value.agent_id === item.agent_id && !currentConv.value.conversation_id ? "bg-[#ECEDEE] " : ""
                        ]]),
                        onClick: ($event) => unref(convStore).setCurrentState(item.agent_id, 0)
                      }, [
                        createVNode(_component_el_image, {
                          class: "flex-none size-6 rounded",
                          src: item.logo
                        }, null, 8, ["src"]),
                        withDirectives((openBlock(), createElementBlock("div", _hoisted_26, [
                          createTextVNode(toDisplayString(item.name), 1)
                        ])), [
                          [_directive_tooltip, true]
                        ]),
                        withDirectives((openBlock(), createElementBlock("div", {
                          class: "size-7 flex-center",
                          onClick: withModifiers(($event) => unref(convStore).toggleUsualAgentFixed(item), ["stop"])
                        }, [
                          item.is_fixed ? (openBlock(), createBlock(_component_svg_icon, {
                            key: 0,
                            name: "top",
                            color: "#2563EB"
                          })) : (openBlock(), createBlock(_component_svg_icon, {
                            key: 1,
                            name: "top",
                            color: "#4F5052",
                            class: "invisible group-hover:visible"
                          }))
                        ], 8, _hoisted_27)), [
                          [_directive_tooltip, { content: item.is_fixed ? _ctx.$t("action.unfixed") : _ctx.$t("action.fixed") }],
                          [vShow, !state.sidebarCollapsed]
                        ])
                      ], 10, _hoisted_25);
                    }), 128))
                  ]),
                  _: 1
                }),
                unref(convStore).usual_agents.length > SHOW_USUAL_AGENT_LEN ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "flex items-center gap-1 mt-3.5 cursor-pointer text-[#9A9A9A]",
                  onClick: toggleAgent
                }, [
                  withDirectives(createBaseVNode("span", { class: "text-sm" }, toDisplayString(state.agentCollapsed ? _ctx.$t("action.collapse") : _ctx.$t("action.expand")), 513), [
                    [vShow, !state.sidebarCollapsed]
                  ]),
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      state.agentCollapsed ? (openBlock(), createBlock(unref(arrow_up_default), { key: 0 })) : (openBlock(), createBlock(unref(arrow_down_default), { key: 1 }))
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ], 512), [
                [vShow, state.showUsualAgents]
              ]),
              createBaseVNode("div", _hoisted_28, [
                createVNode(_component_router_link, {
                  to: { name: "Discover" },
                  class: normalizeClass(["h-9 px-2 rounded-md flex items-center gap-0.5 cursor-pointer text-[#4F5052] hover:bg-[#ECEDEE]", [unref(route).name === "Discover" ? "bg-[#ECEDEE]" : ""]])
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_29, [
                      createVNode(_component_svg_icon, {
                        size: "18",
                        name: "compass"
                      })
                    ]),
                    createBaseVNode("p", _hoisted_30, toDisplayString(_ctx.$t("module.find")), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _cache[8] || (_cache[8] = createBaseVNode("div", { class: "mx-2 border-t mt-1.5" }, null, -1)),
              createBaseVNode("div", _hoisted_31, [
                createVNode(_component_router_link, {
                  to: { name: "Toolbox" },
                  class: normalizeClass(["h-9 px-2 rounded-md flex items-center gap-0.5 cursor-pointer text-primary hover:bg-[#ECEDEE]", [unref(route).name === "Toolbox" ? "bg-[#ECEDEE]" : ""]])
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_32, [
                      createVNode(_component_svg_icon, {
                        size: "18",
                        name: "send_plane"
                      })
                    ]),
                    createBaseVNode("p", _hoisted_33, toDisplayString(_ctx.$t("module.toolbox")), 1)
                  ]),
                  _: 1
                }, 8, ["class"]),
                _ctx.$isElectron ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  onClick: handleJumpToLibrary,
                  href: "http://ziroom.hub.53ai.com/space",
                  target: "_blank",
                  class: "h-9 px-2 rounded-md flex items-center gap-0.5 cursor-pointer text-[#4F5052] hover:bg-[#ECEDEE]"
                }, [
                  createBaseVNode("div", _hoisted_34, [
                    createVNode(_component_svg_icon, {
                      size: "18",
                      name: "tips"
                    })
                  ]),
                  createBaseVNode("p", _hoisted_35, toDisplayString(_ctx.$t("module.library")), 1)
                ])) : createCommentVNode("", true)
              ])
            ], 512), [
              [vShow, !state.keyword]
            ])
          ])
        ], 34)
      ], 64);
    };
  }
});
const Sider = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-527e9881"]]);
const _hoisted_1 = { class: "h-screen flex" };
const _hoisted_2 = { class: "flex-1 overflow-y-auto" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const route = useRoute();
    const userStore = useUserStore();
    const showSidebar = computed(() => !["Index", "HomeIndex", "HomeLayout", "HomeAgent", "HomeToolbox", "Profile"].includes(route.name));
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(userStore).is_login && showSidebar.value ? (openBlock(), createBlock(Sider, { key: 0 })) : createCommentVNode("", true),
        createBaseVNode("main", _hoisted_2, [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component, route: route2 }) => [
              (openBlock(), createBlock(resolveDynamicComponent(Component), {
                key: route2.path
              }))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
