import { y as defineComponent, J as reactive, w as watchEffect, z as resolveComponent, K as resolveDirective, b as openBlock, c as createElementBlock, d as createBaseVNode, t as toDisplayString, H as Fragment, I as renderList, f as createVNode, g as withDirectives, h as createBlock, e as createCommentVNode } from "./main-zTjO05wq.js";
import { E as ElEmpty } from "./el-empty-iR7uizlV.js";
const _hoisted_1 = { class: "h-full overflow-y-auto bg-white" };
const _hoisted_2 = { class: "p-6 bg-white rounded" };
const _hoisted_3 = { class: "text-base text-primary" };
const _hoisted_4 = { class: "columns-2 gap-5 space-y-5 mt-5" };
const _hoisted_5 = { class: "bg-white rounded p-5 relative" };
const _hoisted_6 = { class: "text-sm text-secondary" };
const _hoisted_7 = { class: "text-sm text-primary break-words mt-4" };
const _hoisted_8 = { class: "absolute right-8 -bottom-9" };
const _hoisted_9 = { class: "bg-[#E6EEFF] rounded p-5 mt-4" };
const _hoisted_10 = { class: "flex items-center justify-between" };
const _hoisted_11 = { class: "text-sm text-secondary" };
const _hoisted_12 = { class: "text-sm text-primary break-words whitespace-pre-wrap mt-4" };
const _hoisted_13 = { class: "p-6 bg-white rounded" };
const _hoisted_14 = { class: "text-base text-primary" };
const _hoisted_15 = { class: "flex gap-6 py-5" };
const _hoisted_16 = ["src"];
const _hoisted_17 = { class: "text-base text-primary mt-5 break-words" };
const _hoisted_18 = { class: "text-xs text-secondary mt-4 break-words" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "helper",
  props: {
    agent: { default: () => ({ use_cases: "[]" }) }
  },
  setup(__props) {
    const props = __props;
    const state = reactive({
      cases: [],
      scenes: []
    });
    watchEffect(() => {
      const list = JSON.parse(props.agent.use_cases || "[]") || [];
      state.cases = list.filter((item) => item.type === "case");
      state.scenes = list.filter((item) => item.type === "scene");
    });
    return (_ctx, _cache) => {
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_el_empty = ElEmpty;
      const _directive_copy = resolveDirective("copy");
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h4", _hoisted_3, toDisplayString(_ctx.$t("chat.usage_case")), 1),
          createBaseVNode("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(state.cases, (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "p-5 bg-[#F7F9FC] rounded relative group cursor-pointer break-inside-avoid"
              }, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("chat.input")), 1),
                  createBaseVNode("div", _hoisted_7, toDisplayString(item.input_text), 1),
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_component_svg_icon, {
                      size: 50,
                      name: "arrow-down",
                      color: "white"
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.$t("chat.output")), 1),
                    withDirectives((openBlock(), createElementBlock("div", null, [
                      createVNode(_component_svg_icon, {
                        name: "copy",
                        color: "#4F5052"
                      })
                    ])), [
                      [_directive_copy, item.output_text],
                      [_directive_tooltip, { content: _ctx.$t("action.copy") }]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_12, toDisplayString(item.output_text), 1)
                ])
              ]);
            }), 128))
          ]),
          state.cases.length === 0 ? (openBlock(), createBlock(_component_el_empty, {
            key: 0,
            "image-size": 92,
            description: _ctx.$t("common.no_data"),
            image: _ctx.$getPublicPath("/images/chat/completion_empty.png")
          }, null, 8, ["description", "image"])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_13, [
          createBaseVNode("h4", _hoisted_14, toDisplayString(_ctx.$t("chat.usage_scene")), 1),
          createBaseVNode("div", _hoisted_15, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(state.scenes, (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "flex-1 px-4 text-center pt-3 pb-10 relative cursor-pointer group"
              }, [
                createBaseVNode("img", {
                  class: "mx-auto",
                  src: item.image
                }, null, 8, _hoisted_16),
                createBaseVNode("h6", _hoisted_17, toDisplayString(item.scene), 1),
                createBaseVNode("p", _hoisted_18, toDisplayString(item.desc), 1)
              ]);
            }), 128)),
            state.scenes.length === 0 ? (openBlock(), createBlock(_component_el_empty, {
              key: 0,
              "image-size": 92,
              description: _ctx.$t("common.no_data"),
              image: _ctx.$getPublicPath("/images/chat/completion_empty.png")
            }, null, 8, ["description", "image"])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
