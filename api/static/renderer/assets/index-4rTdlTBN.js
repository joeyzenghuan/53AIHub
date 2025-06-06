import { ap as buildProps, bd as dialogProps, be as dialogEmits, y as defineComponent, ba as useSlots, bf as useDeprecated, N as computed, r as ref, am as useNamespace, aq as useLocale, bg as useDialog, ar as addUnit, b as openBlock, h as createBlock, i as withCtx, f as createVNode, T as Transition, O as unref, g as withDirectives, bh as ElOverlay, aH as ElFocusTrap, d as createBaseVNode, aV as mergeProps, a1 as withModifiers, n as normalizeClass, c as createElementBlock, Z as renderSlot, t as toDisplayString, e as createCommentVNode, a4 as ElIcon, aI as close_default, v as vShow, aP as ElTeleport, ao as _export_sfc, as as withInstall, M as useAgentStore, J as reactive, K as resolveDirective, W as search_default, H as Fragment, I as renderList, V as ElInput, bi as ElTooltip, z as resolveComponent, B as createTextVNode, a5 as ElButton, bj as ElDialog, C as service, F as handleError, o as onMounted, bk as copy_document_default, bl as createSlots, bm as refresh_default, aj as arrow_down_default, P as defineAsyncComponent, _ as __vitePreload, a3 as ElMessage, Q as _export_sfc$1 } from "./main-zTjO05wq.js";
import { _ as _sfc_main$4 } from "./main-header.vue_vue_type_script_setup_true_lang-hK95iFpc.js";
import "./el-scrollbar-Ngsny-f4.js";
import { E as ElEmpty } from "./el-empty-iR7uizlV.js";
import { E as ElAvatar, u as upload } from "./upload-U3GEMIbU.js";
import { a as ElTabPane, E as ElTabs } from "./el-tab-pane-c5Z0Dsok.js";
import { E as ElDropdownItem, a as ElDropdownMenu, b as ElDropdown, c as ElMessageBox } from "./el-dropdown-item-NOVRjZ1y.js";
import { u as useConversationStore, c as conversation } from "./conversation-KofNRSJn.js";
import "./el-image-viewer-l__UzqmW.js";
import "./debounce-Aw5yKx-N.js";
import "./el-loading-bLs-AQkn.js";
import "./el-radio-uShQVp49.js";
import "./enterprise-EiZTO-a9.js";
import "./global-kvMtX63s.js";
import "./strings-gmAHSTq5.js";
import "./index-UhiCyIRr.js";
const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: String,
    default: "rtl",
    values: ["ltr", "rtl", "ttb", "btt"]
  },
  size: {
    type: [String, Number],
    default: "30%"
  },
  withHeader: {
    type: Boolean,
    default: true
  },
  modalFade: {
    type: Boolean,
    default: true
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const drawerEmits = dialogEmits;
const __default__ = defineComponent({
  name: "ElDrawer",
  inheritAttrs: false
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: drawerProps,
  emits: drawerEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-drawer",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#slots"
    }, computed(() => !!slots.title));
    const drawerRef = ref();
    const focusStartRef = ref();
    const ns = useNamespace("drawer");
    const { t } = useLocale();
    const {
      afterEnter,
      afterLeave,
      beforeLeave,
      visible,
      rendered,
      titleId,
      bodyId,
      zIndex,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onFocusoutPrevented,
      onCloseRequested,
      handleClose
    } = useDialog(props, drawerRef);
    const isHorizontal = computed(() => props.direction === "rtl" || props.direction === "ltr");
    const drawerSize = computed(() => addUnit(props.size));
    expose({
      handleClose,
      afterEnter,
      afterLeave
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: unref(ns).b("fade"),
            onAfterEnter: unref(afterEnter),
            onAfterLeave: unref(afterLeave),
            onBeforeLeave: unref(beforeLeave),
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(unref(ElOverlay), {
                mask: _ctx.modal,
                "overlay-class": _ctx.modalClass,
                "z-index": unref(zIndex),
                onClick: unref(onModalClick)
              }, {
                default: withCtx(() => [
                  createVNode(unref(ElFocusTrap), {
                    loop: "",
                    trapped: unref(visible),
                    "focus-trap-el": drawerRef.value,
                    "focus-start-el": focusStartRef.value,
                    onFocusAfterTrapped: unref(onOpenAutoFocus),
                    onFocusAfterReleased: unref(onCloseAutoFocus),
                    onFocusoutPrevented: unref(onFocusoutPrevented),
                    onReleaseRequested: unref(onCloseRequested)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", mergeProps({
                        ref_key: "drawerRef",
                        ref: drawerRef,
                        "aria-modal": "true",
                        "aria-label": _ctx.title || void 0,
                        "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                        "aria-describedby": unref(bodyId)
                      }, _ctx.$attrs, {
                        class: [unref(ns).b(), _ctx.direction, unref(visible) && "open"],
                        style: unref(isHorizontal) ? "width: " + unref(drawerSize) : "height: " + unref(drawerSize),
                        role: "dialog",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }), [
                        createBaseVNode("span", {
                          ref_key: "focusStartRef",
                          ref: focusStartRef,
                          class: normalizeClass(unref(ns).e("sr-focus")),
                          tabindex: "-1"
                        }, null, 2),
                        _ctx.withHeader ? (openBlock(), createElementBlock("header", {
                          key: 0,
                          class: normalizeClass([unref(ns).e("header"), _ctx.headerClass])
                        }, [
                          !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                            key: 0,
                            close: unref(handleClose),
                            titleId: unref(titleId),
                            titleClass: unref(ns).e("title")
                          }, () => [
                            !_ctx.$slots.title ? (openBlock(), createElementBlock("span", {
                              key: 0,
                              id: unref(titleId),
                              role: "heading",
                              "aria-level": _ctx.headerAriaLevel,
                              class: normalizeClass(unref(ns).e("title"))
                            }, toDisplayString(_ctx.title), 11, ["id", "aria-level"])) : createCommentVNode("v-if", true)
                          ]) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
                            createCommentVNode(" DEPRECATED SLOT ")
                          ]),
                          _ctx.showClose ? (openBlock(), createElementBlock("button", {
                            key: 2,
                            "aria-label": unref(t)("el.drawer.close"),
                            class: normalizeClass(unref(ns).e("close-btn")),
                            type: "button",
                            onClick: unref(handleClose)
                          }, [
                            createVNode(unref(ElIcon), {
                              class: normalizeClass(unref(ns).e("close"))
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(close_default))
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ], 10, ["aria-label", "onClick"])) : createCommentVNode("v-if", true)
                        ], 2)) : createCommentVNode("v-if", true),
                        unref(rendered) ? (openBlock(), createElementBlock("div", {
                          key: 1,
                          id: unref(bodyId),
                          class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass])
                        }, [
                          renderSlot(_ctx.$slots, "default")
                        ], 10, ["id"])) : createCommentVNode("v-if", true),
                        _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                          key: 2,
                          class: normalizeClass([unref(ns).e("footer"), _ctx.footerClass])
                        }, [
                          renderSlot(_ctx.$slots, "footer")
                        ], 2)) : createCommentVNode("v-if", true)
                      ], 16, ["aria-label", "aria-labelledby", "aria-describedby", "onClick"])
                    ]),
                    _: 3
                  }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ]),
                _: 3
              }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
                [vShow, unref(visible)]
              ])
            ]),
            _: 3
          }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Drawer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "drawer.vue"]]);
const ElDrawer = withInstall(Drawer);
const _hoisted_1$2 = { class: "p-5 w-[596px]" };
const _hoisted_2$2 = { class: "flex items-center justify-between" };
const _hoisted_3$2 = { class: "text-lg text-primary" };
const _hoisted_4$2 = { class: "h-[300px] overflow-y-auto mt-5" };
const _hoisted_5$2 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_6$2 = ["onClick"];
const _hoisted_7$2 = { class: "flex-1 overflow-hidden" };
const _hoisted_8$1 = { class: "text-base font-medium text-primary mb-1" };
const _hoisted_9$1 = { class: "text-sm text-secondary truncate" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "agent-tooltip",
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const agentStore = useAgentStore();
    const tooltipRef = ref();
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
    const handleClose = () => {
      tooltipRef.value.hide();
    };
    const handleSelct = (item) => {
      emits("select", item);
      handleClose();
    };
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_input = ElInput;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      const _component_el_avatar = ElAvatar;
      const _component_el_empty = ElEmpty;
      const _component_el_tooltip = ElTooltip;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(_component_el_tooltip, {
        ref_key: "tooltipRef",
        ref: tooltipRef,
        effect: "light",
        trigger: "click",
        "popper-class": "el-popper--plain",
        placement: "top-start"
      }, {
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("h4", _hoisted_3$2, toDisplayString(_ctx.$t("action.find")) + toDisplayString(_ctx.$t("module.agent")), 1),
              withDirectives((openBlock(), createElementBlock("div", {
                class: "size-5 flex-center rounded cursor-pointer hover:bg-[#E1E2E3]",
                onClick: handleClose
              }, [
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(unref(close_default))
                  ]),
                  _: 1
                })
              ])), [
                [_directive_tooltip, { content: _ctx.$t("action.close") }]
              ])
            ]),
            createVNode(_component_el_input, {
              size: "large",
              modelValue: state.keyword,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.keyword = $event),
              placeholder: _ctx.$t("action.search") + _ctx.$t("module.agent"),
              "prefix-icon": unref(search_default),
              class: "mt-4 el-input--main"
            }, null, 8, ["modelValue", "placeholder", "prefix-icon"]),
            createVNode(_component_el_tabs, {
              class: "index-tabs mt-4",
              modelValue: state.group_id,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.group_id = $event)
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
            createBaseVNode("div", _hoisted_4$2, [
              createBaseVNode("div", _hoisted_5$2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(showAgentList.value, (item, index2) => {
                  return openBlock(), createElementBlock("div", {
                    key: index2,
                    class: "flex items-center p-3 bg-[#F8F9FA] rounded-lg cursor-pointer",
                    onClick: ($event) => handleSelct(item)
                  }, [
                    createVNode(_component_el_avatar, {
                      size: 36,
                      src: item.logo,
                      class: "mr-2"
                    }, null, 8, ["src"]),
                    createBaseVNode("div", _hoisted_7$2, [
                      createBaseVNode("h3", _hoisted_8$1, toDisplayString(item.name), 1),
                      createBaseVNode("p", _hoisted_9$1, toDisplayString(item.description || "- -"), 1)
                    ])
                  ], 8, _hoisted_6$2);
                }), 128))
              ]),
              showAgentList.value.length === 0 ? (openBlock(), createBlock(_component_el_empty, {
                key: 0,
                description: _ctx.$t("common.no_data"),
                "image-size": 100,
                image: _ctx.$getPublicPath("/images/chat/completion_empty.png")
              }, null, 8, ["description", "image"])) : createCommentVNode("", true)
            ])
          ])
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 512);
    };
  }
});
const _hoisted_1$1 = { class: "flex flex-col gap-2 mt-4" };
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = { class: "flex items-center gap-2" };
const _hoisted_4$1 = { class: "flex-1 text-sm text-primary truncate" };
const _hoisted_5$1 = { class: "size-7 flex-center cursor-pointer invisible group-hover:visible" };
const _hoisted_6$1 = { class: "text-[#FA5151] flex-center" };
const _hoisted_7$1 = { class: "mt-2 text-xs text-secondary" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "history",
  emits: ["new"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emits = __emit;
    const convStore = useConversationStore();
    const currentConv = computed(() => convStore.currentConversation);
    const visible = ref(false);
    const state = reactive({
      editVisible: false
    });
    const convForm = reactive({
      conversation_id: 0,
      title: ""
    });
    const handleCreate = () => {
      emits("new");
      visible.value = false;
    };
    const handleEditConv = async () => {
      await convStore.editConversation(convForm);
      state.editVisible = false;
    };
    const delConversation = async (conv) => {
      await ElMessageBox.confirm(
        window.$t("chat.conversation_confirm_delete"),
        window.$t("action.del"),
        {
          confirmButtonText: window.$t("action.del"),
          cancelButtonText: window.$t("action.cancel"),
          type: "warning"
        }
      );
      convStore.delConversation(conv);
    };
    const handleCommandConv = (event, conv) => {
      if (event === "del") {
        delConversation(conv);
      } else if (event === "edit") {
        convForm.conversation_id = conv.conversation_id;
        convForm.title = conv.title;
        state.editVisible = true;
      }
    };
    __expose({
      open() {
        visible.value = true;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      const _component_el_drawer = ElDrawer;
      const _component_el_input = ElInput;
      const _component_el_dialog = ElDialog;
      const _directive_trim = resolveDirective("trim");
      const _directive_debounce = resolveDirective("debounce");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_el_drawer, {
          modelValue: visible.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
          title: _ctx.$t("chat.history"),
          size: "300px"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_button, {
              class: "w-full border-none -mt-8",
              type: "primary",
              size: "large",
              plain: "",
              onClick: handleCreate
            }, {
              default: withCtx(() => [
                createTextVNode(" + " + toDisplayString(_ctx.$t("chat.new_conversation")), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_1$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(convStore).conversations, (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.conversation_id,
                  class: normalizeClass(["group p-3 rounded cursor-pointer hover:bg-[#F5F6FA]", [currentConv.value.conversation_id === item.conversation_id ? "bg-[#F5F6FA]" : ""]]),
                  onClick: ($event) => unref(convStore).setCurrentState(item.agent_id, item.conversation_id)
                }, [
                  createBaseVNode("div", _hoisted_3$1, [
                    createBaseVNode("div", _hoisted_4$1, toDisplayString(item.title), 1),
                    createVNode(_component_el_dropdown, {
                      onCommand: ($event) => handleCommandConv($event, item)
                    }, {
                      dropdown: withCtx(() => [
                        createVNode(_component_el_dropdown_menu, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_dropdown_item, { command: "edit" }, {
                              default: withCtx(() => [
                                createVNode(_component_svg_icon, {
                                  name: "edit",
                                  class: "mr-1"
                                }),
                                createTextVNode(" " + toDisplayString(_ctx.$t("action.rename")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_dropdown_item, { command: "del" }, {
                              default: withCtx(() => [
                                createBaseVNode("span", _hoisted_6$1, [
                                  createVNode(_component_svg_icon, {
                                    name: "del",
                                    class: "mr-1"
                                  }),
                                  createTextVNode(" " + toDisplayString(_ctx.$t("action.del")), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_5$1, [
                          createVNode(_component_svg_icon, { name: "more-h" })
                        ])
                      ]),
                      _: 2
                    }, 1032, ["onCommand"])
                  ]),
                  createBaseVNode("div", _hoisted_7$1, toDisplayString(item.created_at), 1)
                ], 10, _hoisted_2$1);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        createVNode(_component_el_dialog, {
          modelValue: state.editVisible,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.editVisible = $event),
          title: _ctx.$t("chat.edit_conversation"),
          width: "480"
        }, {
          footer: withCtx(() => [
            createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = ($event) => state.editVisible = false)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("action.cancel")), 1)
              ]),
              _: 1
            }),
            withDirectives((openBlock(), createBlock(_component_el_button, {
              type: "primary",
              disabled: !convForm.title.trim(),
              onClick: handleEditConv
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("action.confirm")), 1)
              ]),
              _: 1
            }, 8, ["disabled"])), [
              [_directive_debounce]
            ])
          ]),
          default: withCtx(() => [
            withDirectives(createVNode(_component_el_input, {
              size: "large",
              modelValue: convForm.title,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => convForm.title = $event),
              placeholder: _ctx.$t("form.input_placeholder"),
              maxlength: 20,
              "show-word-limit": ""
            }, null, 8, ["modelValue", "placeholder"]), [
              [_directive_trim]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
const chat = {
  completions(data, config) {
    return service.post(`/v1/chat/completions`, data, config).catch(handleError);
  }
};
const _hoisted_1 = { class: "h-full flex bg-white relative overflow-hidden" };
const _hoisted_2 = { class: "flex-1 flex flex-col" };
const _hoisted_3 = ["title"];
const _hoisted_4 = { class: "flex items-center gap-1 text-sm text-secondary" };
const _hoisted_5 = { class: "size-4" };
const _hoisted_6 = { class: "h-6 px-1 rounded flex-center cursor-pointer hover:bg-[#E1E2E3]" };
const _hoisted_7 = { class: "h-6 px-1 rounded flex-center cursor-pointer hover:bg-[#E1E2E3]" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = {
  key: 0,
  class: "h-6 px-1 rounded flex-center cursor-pointer hover:bg-[#E1E2E3]"
};
const _hoisted_10 = {
  key: 1,
  class: "h-6 px-1 rounded flex-center cursor-pointer hover:bg-[#E1E2E3]"
};
const _hoisted_11 = { class: "w-4/5 max-w-[800px] mx-auto py-5" };
const _hoisted_12 = { class: "flex gap-2 mb-2.5" };
const _hoisted_13 = { class: "h-8 px-2 rounded-full flex-center gap-1.5 bg-[#F1F2F3] cursor-pointer hover:bg-[#E1E2E3]" };
const _hoisted_14 = ["src"];
const _hoisted_15 = { class: "text-sm text-primary" };
const _hoisted_16 = { class: "size-4 flex-center" };
const _hoisted_20 = { class: "size-4" };
const _hoisted_21 = { class: "size-4" };
const _hoisted_22 = {
  key: 0,
  class: "w-2/5 border-l bg-white"
};
const _hoisted_23 = { class: "h-16 flex-center border-b relative" };
const _hoisted_24 = { class: "text-lg text-primary" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const Helper = defineAsyncComponent(() => __vitePreload(() => import("./helper-Gs8PbIV4.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0, import.meta.url));
    const convStore = useConversationStore();
    const historyRef = ref();
    const abortController = ref(null);
    const currentAgent = computed(() => convStore.currentAgent);
    const currentConv = computed(() => convStore.currentConversation);
    const custom_config_obj = computed(() => convStore.currentAgent.custom_config_obj);
    const enable_upload = computed(() => Boolean(custom_config_obj.value?.file_parse?.enable || custom_config_obj.value?.image_parse?.enable));
    const upload_accept = computed(() => {
      let accept = "";
      if (custom_config_obj.value?.file_parse?.enable)
        accept += ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.html,.json,.xml,.md";
      if (custom_config_obj.value?.image_parse?.enable)
        accept += ",image/*";
      return accept;
    });
    const state = reactive({
      offset: 0,
      limit: 10,
      showHelper: false,
      messageList: [],
      isStreaming: false,
      isLoadingMore: false,
      // 添加加载更多状态标志
      hasMore: true
      // 是否还有更多消息
    });
    const handleHistory = () => {
      historyRef.value?.open();
    };
    const handleToggleGuide = () => {
      state.showHelper = !state.showHelper;
    };
    const onSelectAgent = (agent) => {
      convStore.pushUsualAgent(agent);
      convStore.setCurrentState(agent.agent_id, 0);
    };
    const handleNewConversation = () => {
      convStore.setCurrentState(currentAgent.value.agent_id, 0);
    };
    const httpRequest = async (dataFile) => {
      try {
        const res = await upload.upload(dataFile);
        return {
          id: res.data.id,
          url: `${window.api_host}/api/preview/${res.data.preview_key || ""}`,
          size: res.data.size,
          name: res.data.file_name,
          mime_type: res.data.mime_type
        };
      } catch (error) {
        return {};
      }
    };
    const processStreamData = (e, processedLength) => {
      const lastMessage = state.messageList[state.messageList.length - 1];
      if (!e.event?.target)
        return processedLength;
      const fullResponse = e.event.target.response || "";
      const newChunk = fullResponse.substring(processedLength);
      const newProcessedLength = fullResponse.length;
      try {
        const lines = newChunk.split("\n").filter((line) => line.trim() !== "" && line.trim() !== "data: [DONE]");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              const content = data.choices?.[0]?.delta?.content;
              const reasoning_content = data.choices?.[0]?.delta?.reasoning_content;
              if (content) {
                lastMessage.answer += content;
              }
              if (reasoning_content) {
                lastMessage.reasoning_content += reasoning_content;
              }
            } catch (err) {
              console.error("解析JSON失败:", err);
            }
          }
        }
      } catch (err) {
        console.error("处理流数据失败:", err);
      }
      return newProcessedLength;
    };
    const messageUtils = {
      // 格式化消息
      formatMessage: (item) => {
        const data = {
          ...item,
          query: ""
        };
        const content = JSON.parse(item.message)[0].content;
        try {
          const arr = JSON.parse(content);
          const query = arr.find((item2) => item2.type === "text")?.content;
          data.query = query;
          data.user_files = arr.filter((item2) => item2.type === "image");
        } catch (error) {
          data.query = content;
        }
        return data;
      },
      // 格式化文件
      formatFiles: (user_files) => user_files?.map((item) => ({
        type: "image",
        content: `file_id:${item.id}`,
        filename: item.name,
        size: item.size,
        mime_type: item.mime_type,
        url: item.url
      })) || [],
      // 创建新消息
      createNewMessage: (query, agent_id, conversation_id, user_files) => ({
        query,
        answer: "",
        loading: true,
        agent_id,
        conversation_id,
        reasoning_content: "",
        reasoning_expanded: true,
        user_files
      })
    };
    const loadMessages = async (conversation_id, offset, limit) => {
      try {
        const res = await conversation.messasges(conversation_id, { offset, limit });
        const list = res.data.messages.map(messageUtils.formatMessage);
        return {
          messages: list,
          hasMore: list.length === limit
        };
      } catch (err) {
        console.error("加载消息失败:", err);
        return { messages: [], hasMore: false };
      }
    };
    const handleLoadListMore = async (done) => {
      if (state.isLoadingMore || !state.hasMore)
        return done();
      const conversation_id = currentConv.value.conversation_id;
      if (!conversation_id)
        return;
      state.isLoadingMore = true;
      state.offset += state.limit;
      try {
        const { messages, hasMore } = await loadMessages(conversation_id, state.offset, state.limit);
        state.hasMore = hasMore;
        state.messageList.unshift(...messages);
      } catch (err) {
        state.offset = Math.max(0, state.offset - state.limit);
      } finally {
        state.isLoadingMore = false;
        done();
      }
    };
    const loadList = async () => {
      const conversation_id = currentConv.value.conversation_id;
      if (!conversation_id)
        return;
      state.isLoadingMore = true;
      state.offset = 0;
      state.hasMore = true;
      try {
        const { messages, hasMore } = await loadMessages(conversation_id, state.offset, state.limit);
        state.hasMore = hasMore;
        state.messageList = messages;
      } finally {
        state.isLoadingMore = false;
      }
    };
    const sendMessage = async (query, user_files) => {
      if (state.isStreaming)
        return;
      const agent_id = currentAgent.value.agent_id;
      const conversation_id = currentConv.value.conversation_id;
      const newMessage = messageUtils.createNewMessage(query, agent_id, conversation_id, user_files);
      state.messageList.push(newMessage);
      const configs = JSON.parse(currentAgent.value.configs || "{}");
      const completion_params = configs.completion_params || {};
      state.isStreaming = true;
      abortController.value = new AbortController();
      let processedLength = 0;
      let content = query;
      if (user_files.length > 0) {
        content = JSON.stringify([
          { type: "text", content: query },
          ...user_files
        ]);
      }
      try {
        await chat.completions(
          {
            conversation_id,
            model: "agent-" + agent_id,
            messages: [{ content, role: "user" }],
            frequency_penalty: 0,
            presence_penalty: 0,
            stream: true,
            temperature: 0,
            top_p: 0,
            ...completion_params
          },
          {
            responseType: "stream",
            onDownloadProgress: (e) => {
              processedLength = processStreamData(e, processedLength);
            },
            signal: abortController.value.signal
          }
        );
      } catch (err) {
        if (err.message !== "canceled") {
          console.log(err);
          const lastMessage = state.messageList[state.messageList.length - 1];
          if (lastMessage && !lastMessage.answer) {
            lastMessage.answer = err.response.data || window.$t("response_code.network_error");
          }
        }
      } finally {
        const lastMessage = state.messageList[state.messageList.length - 1];
        if (lastMessage) {
          lastMessage.loading = false;
        }
        state.isStreaming = false;
        abortController.value = null;
      }
    };
    const handleSend = async (question, user_files) => {
      const agent_id = currentAgent.value.agent_id;
      if (!agent_id)
        return ElMessage.warning(window.$t("chat.no_available_agent"));
      if (!currentConv.value.conversation_id) {
        try {
          const conversation2 = await convStore.createConversation(agent_id, question);
          convStore.addConversation({ ...conversation2, virtual_id: currentConv.value.virtual_id });
          convStore.setCurrentState(conversation2.agent_id, conversation2.conversation_id);
        } catch (err) {
          console.error("创建对话失败:", err);
          return;
        }
      }
      await sendMessage(question, messageUtils.formatFiles(user_files));
    };
    const handleStop = () => {
      if (abortController.value) {
        abortController.value.abort();
        abortController.value = null;
      }
      state.isStreaming = false;
    };
    const handleRegenerate = async (message) => {
      await sendMessage(message.query, message.user_files);
    };
    onMounted(() => {
      loadList();
    });
    return (_ctx, _cache) => {
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_router_link = resolveComponent("router-link");
      const _component_el_icon = ElIcon;
      const _component_x_bubble_user = resolveComponent("x-bubble-user");
      const _component_x_bubble_assistant = resolveComponent("x-bubble-assistant");
      const _component_x_bubble_list = resolveComponent("x-bubble-list");
      const _component_x_sender = resolveComponent("x-sender");
      const _directive_tooltip = resolveDirective("tooltip");
      const _directive_copy = resolveDirective("copy");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_sfc_main$4, null, {
              before_suffix: withCtx(() => [
                createBaseVNode("div", {
                  class: "text-base text-primary line-clamp-1",
                  title: currentConv.value.title || currentAgent.value.name || ""
                }, toDisplayString(currentConv.value.title || currentAgent.value.name || ""), 9, _hoisted_3)
              ]),
              after_prefix: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_svg_icon, { name: "index" }),
                  createVNode(_component_router_link, { to: { name: "Home" } }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("common.back_home")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _cache[0] || (_cache[0] = createBaseVNode("div", { class: "border-r w-px h-3 mx-2" }, null, -1))
              ]),
              after_suffix: withCtx(() => [
                withDirectives((openBlock(), createElementBlock("div", {
                  class: "h-[26px] px-2 rounded-full flex-center gap-1.5 text-sm text-primary cursor-pointer hover:bg-[#E1E2E3]",
                  onClick: handleToggleGuide
                }, [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_svg_icon, {
                      name: "layout-split",
                      size: "18"
                    })
                  ])
                ])), [
                  [_directive_tooltip, { content: _ctx.$t("chat.usage_guide") }]
                ])
              ]),
              _: 1
            }),
            createVNode(_component_x_bubble_list, {
              class: "flex-1 mt-5",
              autoScroll: true,
              messages: state.messageList,
              mainClass: "w-4/5 max-w-[800px] mx-auto",
              enablePullUp: "",
              onPullUp: handleLoadListMore
            }, {
              item: withCtx(({ message, index: index2 }) => [
                createVNode(_component_x_bubble_user, {
                  content: message.query,
                  files: message.user_files
                }, {
                  menu: withCtx(() => [
                    withDirectives((openBlock(), createElementBlock("div", _hoisted_6, [
                      createVNode(_component_el_icon, { color: "#9B9B9B" }, {
                        default: withCtx(() => [
                          createVNode(unref(copy_document_default))
                        ]),
                        _: 1
                      })
                    ])), [
                      [_directive_tooltip, { content: _ctx.$t("action.copy") }],
                      [_directive_copy, message.query]
                    ])
                  ]),
                  _: 2
                }, 1032, ["content", "files"]),
                createVNode(_component_x_bubble_assistant, {
                  content: message.answer,
                  reasoning: message.reasoning_content,
                  "reasoning-expanded": message.reasoning_expanded,
                  streaming: message.loading,
                  alwaysShowMenu: index2 === state.messageList.length - 1
                }, createSlots({ _: 2 }, [
                  !message.loading ? {
                    name: "menu",
                    fn: withCtx(() => [
                      withDirectives((openBlock(), createElementBlock("div", _hoisted_7, [
                        createVNode(_component_el_icon, { color: "#9B9B9B" }, {
                          default: withCtx(() => [
                            createVNode(unref(copy_document_default))
                          ]),
                          _: 1
                        })
                      ])), [
                        [_directive_tooltip, { content: _ctx.$t("action.copy") }],
                        [_directive_copy, message.answer]
                      ]),
                      withDirectives((openBlock(), createElementBlock("div", {
                        class: "h-6 px-1 rounded flex-center cursor-pointer hover:bg-[#E1E2E3]",
                        onClick: ($event) => handleRegenerate(message)
                      }, [
                        createVNode(_component_el_icon, { color: "#9B9B9B" }, {
                          default: withCtx(() => [
                            createVNode(unref(refresh_default))
                          ]),
                          _: 1
                        })
                      ], 8, _hoisted_8)), [
                        [_directive_tooltip, { content: _ctx.$t("chat.regenerate") }]
                      ]),
                      false ? withDirectives((openBlock(), createElementBlock("div", _hoisted_9, [
                        createVNode(_component_svg_icon, {
                          size: "18",
                          name: "like",
                          color: "#9B9B9B"
                        })
                      ])), [
                        [_directive_tooltip, { content: _ctx.$t("chat.like") }]
                      ]) : createCommentVNode("", true),
                      false ? withDirectives((openBlock(), createElementBlock("div", _hoisted_10, [
                        createVNode(_component_svg_icon, {
                          size: "18",
                          name: "dislike",
                          color: "#9B9B9B"
                        })
                      ])), [
                        [_directive_tooltip, { content: _ctx.$t("chat.like") }]
                      ]) : createCommentVNode("", true)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["content", "reasoning", "reasoning-expanded", "streaming", "alwaysShowMenu"])
              ]),
              _: 1
            }, 8, ["messages"]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(_sfc_main$2, { onSelect: onSelectAgent }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("img", {
                        class: "size-4 rounded-full",
                        src: currentAgent.value.logo,
                        alt: ""
                      }, null, 8, _hoisted_14),
                      createBaseVNode("span", _hoisted_15, toDisplayString(currentAgent.value.name), 1),
                      createBaseVNode("div", _hoisted_16, [
                        createVNode(_component_el_icon, { color: "#333333" }, {
                          default: withCtx(() => [
                            createVNode(unref(arrow_down_default))
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createCommentVNode("", true),
                _cache[1] || (_cache[1] = createBaseVNode("div", { class: "flex-1" }, null, -1)),
                createBaseVNode("div", {
                  class: "h-8 px-2 rounded-full flex-center gap-1.5 bg-[#F1F2F3] text-sm text-primary cursor-pointer hover:bg-[#E1E2E3]",
                  onClick: handleHistory
                }, [
                  createBaseVNode("div", _hoisted_20, [
                    createVNode(_component_svg_icon, { name: "history" })
                  ]),
                  createTextVNode(" " + toDisplayString(_ctx.$t("chat.history")), 1)
                ]),
                createBaseVNode("div", {
                  class: "h-8 px-2 rounded-full flex-center gap-1.5 bg-[#F1F2F3] text-sm text-primary cursor-pointer hover:bg-[#E1E2E3]",
                  onClick: handleNewConversation
                }, [
                  createBaseVNode("div", _hoisted_21, [
                    createVNode(_component_svg_icon, { name: "plus" })
                  ]),
                  createTextVNode(" " + toDisplayString(_ctx.$t("chat.new_conversation")), 1)
                ])
              ]),
              createVNode(_component_x_sender, {
                "http-request": httpRequest,
                "enable-upload": enable_upload.value,
                "accept-types": upload_accept.value,
                loading: state.isStreaming,
                onSend: handleSend,
                onStop: handleStop
              }, null, 8, ["enable-upload", "accept-types", "loading"])
            ])
          ]),
          createVNode(Transition, { name: "slide" }, {
            default: withCtx(() => [
              state.showHelper ? (openBlock(), createElementBlock("div", _hoisted_22, [
                createBaseVNode("div", _hoisted_23, [
                  createBaseVNode("h4", _hoisted_24, toDisplayString(_ctx.$t("chat.usage_guide")), 1),
                  createBaseVNode("div", {
                    class: "flex-center size-6 absolute right-2 top-1/2 -translate-y-1/2 rounded cursor-pointer hover:bg-[#ECEDEE]",
                    onClick: handleToggleGuide
                  }, [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(unref(close_default))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode(unref(Helper), { agent: currentAgent.value }, null, 8, ["agent"])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        createVNode(_sfc_main$1, {
          ref_key: "historyRef",
          ref: historyRef,
          onNew: handleNewConversation
        }, null, 512)
      ], 64);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-6dff0009"]]);
export {
  index as default
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./helper-Gs8PbIV4.js","./main-zTjO05wq.js","./main-hmm0JC4y.css","./el-empty-iR7uizlV.js","./el-empty-N-6r8Eh9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
