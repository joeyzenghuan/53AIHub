import { R as Rn, o as onMounted, a as onUnmounted, b as openBlock, c as createElementBlock, d as createBaseVNode, t as toDisplayString, e as createCommentVNode, f as createVNode, A as At } from "./main-zTjO05wq.js";
import { d } from "./copy-BS31ARP0-eab1H3tb.js";
const m = { class: "code-viewer" }, u = { class: "code-viewer__header" }, h = { class: "code-viewer__tabs-container" }, w = {
  key: 0,
  class: "code-viewer__tabs"
}, f = { class: "code-viewer__tab code-viewer__tab--active" }, g = { class: "code-viewer__actions" }, y = { class: "code-viewer__content" }, b = { class: "code-viewer__code" }, k = ["innerHTML"], S = {
  __name: "code",
  props: {
    html: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: ""
    }
  },
  setup(o) {
    const s = o, i = () => {
      d(JSON.stringify(s.value));
    };
    return onMounted(() => {
    }), onUnmounted(() => {
    }), (C, M) => (openBlock(), createElementBlock("div", m, [
      createBaseVNode("div", u, [
        createBaseVNode("div", h, [
          o.language ? (openBlock(), createElementBlock("div", w, [
            createBaseVNode("div", f, toDisplayString(o.language.toUpperCase()), 1)
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", g, [
          createBaseVNode("i", {
            class: "code-viewer__icon code-viewer__icon--copy",
            onClick: i
          }, [
            createVNode(At, { name: "copy" })
          ])
        ])
      ]),
      createBaseVNode("div", y, [
        createBaseVNode("div", b, [
          createBaseVNode("pre", {
            class: "code-viewer__code-pre",
            innerHTML: o.html
          }, null, 8, k)
        ])
      ])
    ]));
  }
}, T = /* @__PURE__ */ Rn(S, [["__scopeId", "data-v-f1658eb6"]]);
export {
  T as default
};
