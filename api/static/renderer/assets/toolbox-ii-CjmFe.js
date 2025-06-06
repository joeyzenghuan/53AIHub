import { r as ref, $ as nextTick, y as defineComponent, J as reactive, N as computed, o as onMounted, z as resolveComponent, g as withDirectives, b as openBlock, c as createElementBlock, d as createBaseVNode, t as toDisplayString, n as normalizeClass, f as createVNode, a0 as withKeys, a1 as withModifiers, H as Fragment, I as renderList, h as createBlock, i as withCtx, O as unref, a2 as circle_check_filled_default, e as createCommentVNode, B as createTextVNode, W as search_default, v as vShow, U as TransitionGroup, a3 as ElMessage, V as ElInput, a4 as ElIcon, a5 as ElButton, Q as _export_sfc } from "./main-zTjO05wq.js";
import { v as vLoading } from "./el-loading-bLs-AQkn.js";
import { E as ElImage } from "./el-image-viewer-l__UzqmW.js";
import { a as ElTabPane, E as ElTabs } from "./el-tab-pane-c5Z0Dsok.js";
import { u as useLinksStore } from "./links-hplqNGHr.js";
function useScroll() {
  const scrollRef = ref(null);
  const scrollToBottom = async () => {
    await nextTick();
    if (scrollRef.value)
      scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
  };
  const scrollToTop = async () => {
    await nextTick();
    if (scrollRef.value)
      scrollRef.value.scrollTop = 0;
  };
  const scrollToBottomIfAtBottom = async () => {
    await nextTick();
    if (scrollRef.value) {
      const threshold = 100;
      const distanceToBottom = scrollRef.value.scrollHeight - scrollRef.value.scrollTop - scrollRef.value.clientHeight;
      if (distanceToBottom <= threshold)
        scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
    }
  };
  const scrollTo = async (selector, diff = 0) => {
    await nextTick();
    const node = document.querySelector(selector);
    if (scrollRef.value && node)
      scrollRef.value.scrollTop = node.offsetTop + diff;
    await nextTick();
  };
  const scrollToVal = async (value) => {
    await nextTick();
    if (scrollRef.value)
      scrollRef.value.scrollTop = value;
  };
  return {
    scrollRef,
    scrollToBottom,
    scrollToTop,
    scrollTo,
    scrollToVal,
    scrollToBottomIfAtBottom
  };
}
const _hoisted_1 = { class: "w-4/6 mx-auto py-8 text-center" };
const _hoisted_2 = { class: "text-[40px] font-bold text-black" };
const _hoisted_3 = { class: "flex items-center justify-between mt-4" };
const _hoisted_4 = { class: "flex-1 flex items-center gap-3" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["src"];
const _hoisted_7 = { class: "flex items-center gap-2 overflow-hidden transition-all duration-300 flex-grow" };
const _hoisted_8 = { class: "text-sm truncate" };
const _hoisted_9 = { class: "flex-center gap-5" };
const _hoisted_10 = { class: "text-[#182B50] text-opacity-40 text-sm" };
const _hoisted_11 = { class: "mt-7 flex flex-wrap gap-3 justify-center" };
const _hoisted_12 = { class: "flex items-center justify-between w-5/6 mx-auto" };
const _hoisted_13 = { class: "w-5/6 mx-auto mt-4" };
const _hoisted_14 = ["id"];
const _hoisted_15 = ["onClick"];
const _hoisted_16 = { class: "flex-1 overflow-hidden" };
const _hoisted_17 = ["title"];
const _hoisted_18 = ["title"];
const _hoisted_19 = {
  key: 1,
  class: "flex-1 flex flex-col overflow-hidden"
};
const _hoisted_20 = { class: "flex-none pt-8 pb-5 flex items-center justify-between w-5/6 mx-auto box-border" };
const _hoisted_21 = { class: "w-5/6 mx-auto mt-4" };
const _hoisted_22 = ["id"];
const _hoisted_23 = ["onClick"];
const _hoisted_24 = { class: "flex-1 overflow-hidden" };
const _hoisted_25 = ["title"];
const _hoisted_26 = ["title"];
const MAX_AGENT_COUNT = 2;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toolbox",
  setup(__props) {
    const linksStore = useLinksStore();
    const { scrollRef, scrollTo, scrollToTop } = useScroll();
    const state = reactive({
      group_id: 0,
      keyword: ""
    });
    const loading = ref(false);
    const isFocus = ref(false);
    const question = ref("");
    const models = ref([
      {
        name: "百度AI+",
        value: "baiduai+",
        checked: true,
        url: "https://chat.baidu.com/search?word=_word_"
      },
      {
        name: "纳米搜索",
        value: "n",
        checked: true,
        url: "https://www.n.cn/?q=_word_"
      },
      {
        name: "秘塔",
        value: "metaso",
        checked: false,
        url: "https://metaso.cn/?q=_word_"
      },
      {
        name: "Perplexity",
        value: "perplexity",
        checked: false,
        url: "https://perplexity.ai/search?q=_word_"
      }
    ]);
    const quickOptions = [
      "👨‍💼 上班族预防病自救教程",
      "🍽️ 日报/周报让你头疼？点击领取模板",
      "🤔 遇到地震是该跑还是该躲？",
      "💰 有哪些可以不靠年终奖就能赚钱的门路？",
      "⚡ 针对时间管理的10大实用技巧",
      "🎨 自己做自媒体应该如何快速起步？"
    ];
    const canSend = computed(() => {
      return question.value.trim().length > 0 && models.value.some((item) => item.checked);
    });
    const categorys = computed(() => {
      return linksStore.categorys.filter((item) => {
        if (item.group_id === 0)
          return true;
        const list = linksStore.appMap[item.group_id];
        return !list || list.length === 0 ? false : true;
      });
    });
    const handleSelectModel = (item) => {
      const useModels = models.value.filter((item2) => item2.checked);
      if (!item.checked && useModels.length >= MAX_AGENT_COUNT) {
        ElMessage.warning(window.$t("toolbox.max_agent_count", { count: MAX_AGENT_COUNT }));
        return;
      }
      item.checked = !item.checked;
    };
    const handleSend = async () => {
      const useModels = models.value.filter((item) => item.checked);
      if (window.$isElectron) {
        window.$chat53ai.$win({
          type: "new-tab",
          data: JSON.stringify({
            title: window.$t("toolbox.name") + "-" + question.value,
            urls: useModels.map((item) => {
              return item.url.replace("_word_", encodeURIComponent(question.value));
            })
          })
        });
      } else {
        useModels.forEach((item) => {
          window.open(item.url.replace("_word_", encodeURIComponent(question.value)));
        });
      }
      question.value = "";
    };
    const handleSelect = (e) => {
      const group_id = e.props.name;
      if (group_id === 0)
        scrollToTop();
      else
        scrollTo(`#toolbox_cate_${group_id}`);
    };
    const handleSearch = () => {
      const trimmedValue = state.keyword.trim().toLowerCase();
      Object.keys(linksStore.appMap).forEach((key) => {
        const apps = linksStore.appMap[key];
        apps.forEach((item) => {
          item.visible = trimmedValue === "" || item.name.toLowerCase().includes(trimmedValue);
        });
        const cate = categorys.value.find((cate2) => cate2.group_id === Number(key));
        if (cate)
          cate.visible = apps.some((item) => item.visible);
      });
    };
    const handleAdd = (item) => {
      window.open(item.url, "_blank");
    };
    onMounted(() => {
      loading.value = true;
      linksStore.loadCategorys();
      linksStore.loadLinks().finally(() => {
        loading.value = false;
      });
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_icon = ElIcon;
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_el_button = ElButton;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      const _component_ElImage = ElImage;
      const _directive_loading = vLoading;
      return _ctx.$isElectron ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        class: "flex-1 flex flex-col relative overflow-y-auto",
        ref_key: "scrollRef",
        ref: scrollRef
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("h2", _hoisted_2, toDisplayString(_ctx.$t("toolbox.title")), 1),
          createBaseVNode("div", {
            class: normalizeClass(["bg-white rounded-lg p-4 mt-9 border", [isFocus.value ? "border-[#0672FF]" : ""]])
          }, [
            createVNode(_component_el_input, {
              type: "textarea",
              modelValue: question.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => question.value = $event),
              placeholder: _ctx.$t("toolbox.input_placeholder"),
              rows: 5,
              resize: "none",
              style: { "--el-input-text-color": "#182b50", "--el-input-bg-color": "transparent", "--el-border-color": "none", "--el-input-focus-border": "none", "--el-input-hover-border": "none", "--el-input-hover-border-color": "none", "--el-input-focus-border-color": "none" },
              onFocus: _cache[1] || (_cache[1] = ($event) => isFocus.value = true),
              onBlur: _cache[2] || (_cache[2] = ($event) => isFocus.value = false),
              onKeyup: [
                withKeys(withModifiers(handleSend, ["exact"]), ["enter"]),
                withKeys(withModifiers(() => {
                }, ["shift", "exact"]), ["enter"])
              ]
            }, null, 8, ["modelValue", "placeholder", "onKeyup"]),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(models.value, (model) => {
                  return openBlock(), createElementBlock("div", {
                    key: model.value,
                    class: normalizeClass(["h-9 px-2.5 flex-center gap-2 rounded-full border cursor-pointer min-w-[28px]", [
                      model.checked ? "bg-[#EBF3FC] text-black border-[#0672FF]" : "text-[#AAA] bg-[#EBF4F7] border-[#EBF4F7]"
                    ]]),
                    onClick: ($event) => handleSelectModel(model)
                  }, [
                    createBaseVNode("img", {
                      class: "size-[22px] rounded-full",
                      src: `https://chat.53ai.com/images/toolbox/${model.value}.png`
                    }, null, 8, _hoisted_6),
                    createBaseVNode("div", _hoisted_7, [
                      createBaseVNode("span", _hoisted_8, toDisplayString(model.name), 1),
                      model.checked ? (openBlock(), createBlock(_component_el_icon, {
                        key: 0,
                        color: "#0672FF"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(circle_check_filled_default))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ], 10, _hoisted_5);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, toDisplayString(question.value.length) + "/300", 1),
                createVNode(_component_el_button, {
                  class: "w-8 h-8",
                  type: "primary",
                  disabled: !canSend.value,
                  onClick: handleSend
                }, {
                  default: withCtx(() => [
                    createVNode(_component_svg_icon, {
                      name: "send",
                      size: "14"
                    })
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_11, [
            (openBlock(), createElementBlock(Fragment, null, renderList(quickOptions, (item, index) => {
              return createVNode(_component_el_button, {
                key: index,
                class: "!border-[#D3EAF2] !text-gray-600 !ml-0",
                onClick: ($event) => question.value = item
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]);
            }), 64))
          ])
        ]),
        _cache[7] || (_cache[7] = createBaseVNode("div", { class: "mt-10 mb-20" }, null, -1)),
        createBaseVNode("div", _hoisted_12, [
          createVNode(_component_el_tabs, {
            modelValue: state.group_id,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.group_id = $event),
            class: "index-tabs flex-1 overflow-hidden",
            style: { "--el-tabs-header-height": "36px" },
            onTabClick: handleSelect
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(categorys.value, (item) => {
                return openBlock(), createBlock(_component_el_tab_pane, {
                  key: item.group_name,
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
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.keyword = $event),
              style: { "--el-input-inner-height": "36px", "width": "268px" },
              "prefix-icon": unref(search_default),
              placeholder: _ctx.$t("toolbox.search_placeholder"),
              onInput: handleSearch
            }, null, 8, ["modelValue", "prefix-icon", "placeholder"])
          ])
        ]),
        createBaseVNode("div", _hoisted_13, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(categorys.value?.filter((category) => category.group_id != 0), (category) => {
            return openBlock(), createElementBlock(Fragment, {
              key: category.group_id
            }, [
              withDirectives(createBaseVNode("div", {
                id: `toolbox_cate_${category.group_id}`,
                class: "text-secondary text-sm py-4"
              }, toDisplayString(category.group_name), 9, _hoisted_14), [
                [vShow, category.visible]
              ]),
              createVNode(TransitionGroup, {
                name: "list",
                tag: "div",
                class: "grid grid-cols-4 gap-5 mb-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(linksStore).appMap[category.group_id], (item) => {
                    return withDirectives((openBlock(), createElementBlock("div", {
                      key: item.key,
                      onClick: ($event) => handleAdd(item),
                      class: "h-[80px] bg-white rounded px-5 flex items-center gap-2 cursor-pointer border border-[#ECECEC] hover:shadow"
                    }, [
                      createVNode(_component_ElImage, {
                        class: "size-[40px] rounded-full",
                        fit: "contain",
                        lazy: "",
                        src: item.logo
                      }, null, 8, ["src"]),
                      createBaseVNode("div", _hoisted_16, [
                        createBaseVNode("div", {
                          class: "text-sm text-primary font-semibold truncate",
                          title: item.name
                        }, toDisplayString(item.name), 9, _hoisted_17),
                        createBaseVNode("div", {
                          class: "mt-1 text-xs truncate text-regular",
                          title: item.description
                        }, toDisplayString(item.description), 9, _hoisted_18)
                      ])
                    ], 8, _hoisted_15)), [
                      [vShow, item.visible]
                    ]);
                  }), 128))
                ]),
                _: 2
              }, 1024)
            ], 64);
          }), 128))
        ])
      ])), [
        [_directive_loading, loading.value]
      ]) : withDirectives((openBlock(), createElementBlock("div", _hoisted_19, [
        createBaseVNode("div", _hoisted_20, [
          createVNode(_component_el_tabs, {
            modelValue: state.group_id,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => state.group_id = $event),
            class: "index-tabs flex-1 overflow-hidden",
            style: { "--el-tabs-header-height": "36px" },
            onTabClick: handleSelect
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(categorys.value, (item) => {
                return openBlock(), createBlock(_component_el_tab_pane, {
                  key: item.group_name,
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
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => state.keyword = $event),
              style: { "--el-input-inner-height": "36px", "width": "268px" },
              "prefix-icon": unref(search_default),
              placeholder: _ctx.$t("toolbox.search_placeholder"),
              onInput: handleSearch
            }, null, 8, ["modelValue", "prefix-icon", "placeholder"])
          ])
        ]),
        createBaseVNode("div", {
          class: "flex-1 overflow-y-auto relative",
          ref_key: "scrollRef",
          ref: scrollRef
        }, [
          createBaseVNode("div", _hoisted_21, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(categorys.value?.filter((category) => category.group_id != 0), (category) => {
              return openBlock(), createElementBlock(Fragment, {
                key: category.group_id
              }, [
                withDirectives(createBaseVNode("div", {
                  id: `toolbox_cate_${category.group_id}`,
                  class: "text-secondary text-sm py-4"
                }, toDisplayString(category.group_name), 9, _hoisted_22), [
                  [vShow, category.visible]
                ]),
                createVNode(TransitionGroup, {
                  name: "list",
                  tag: "div",
                  class: "grid grid-cols-4 gap-5 mb-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(linksStore).appMap[category.group_id], (item) => {
                      return withDirectives((openBlock(), createElementBlock("div", {
                        key: item.key,
                        onClick: ($event) => handleAdd(item),
                        class: "h-[80px] bg-white rounded px-5 flex items-center gap-2 cursor-pointer border border-[#ECECEC] hover:shadow"
                      }, [
                        createVNode(_component_ElImage, {
                          class: "size-[40px] rounded-full",
                          fit: "contain",
                          lazy: "",
                          src: item.logo
                        }, null, 8, ["src"]),
                        createBaseVNode("div", _hoisted_24, [
                          createBaseVNode("div", {
                            class: "text-sm text-primary font-semibold truncate",
                            title: item.name
                          }, toDisplayString(item.name), 9, _hoisted_25),
                          createBaseVNode("div", {
                            class: "mt-1 text-xs truncate text-regular",
                            title: item.description
                          }, toDisplayString(item.description), 9, _hoisted_26)
                        ])
                      ], 8, _hoisted_23)), [
                        [vShow, item.visible]
                      ]);
                    }), 128))
                  ]),
                  _: 2
                }, 1024)
              ], 64);
            }), 128))
          ])
        ], 512)
      ])), [
        [_directive_loading, loading.value]
      ]);
    };
  }
});
const Toolbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f4e981e"]]);
export {
  Toolbox as T
};
