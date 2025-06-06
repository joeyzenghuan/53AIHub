import { y as defineComponent, L as useRoute, M as useAgentStore, N as computed, o as onMounted, a as onUnmounted, c as createElementBlock, h as createBlock, O as unref, e as createCommentVNode, H as Fragment, b as openBlock, P as defineAsyncComponent, _ as __vitePreload, Q as _export_sfc } from "./main-zTjO05wq.js";
import { u as useConversationStore } from "./conversation-KofNRSJn.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const Chat = defineAsyncComponent(() => __vitePreload(() => import("./index-4rTdlTBN.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]) : void 0, import.meta.url));
    const route = useRoute();
    const agentStore = useAgentStore();
    const convStore = useConversationStore();
    const currentConv = computed(() => convStore.currentConversation);
    onMounted(async () => {
      let agent_id = Number(route.query.agent_id || "0");
      const conversation_id = route.query.conversation_id || "";
      agentStore.loadCategorys();
      await agentStore.loadAgentList().then((agentList) => {
        const agent = agentList.find((item) => item.agent_id === +agent_id);
        if (agent) {
          convStore.pushUsualAgent(agent);
        } else {
          const usableAgent = convStore.usual_agents[0] || agentList[0];
          if (usableAgent) {
            convStore.pushUsualAgent(usableAgent);
            agent_id = usableAgent.agent_id;
          }
        }
        convStore.updateAgents(agentList);
        if (!conversation_id) {
          convStore.setCurrentState(+agent_id, 0);
        }
      });
      await convStore.loadConversations().then((convList) => {
        const conversation = convList.find((item) => item.conversation_id === +conversation_id);
        if (conversation) {
          convStore.setCurrentState(conversation.agent_id, conversation.conversation_id);
        }
      });
    });
    onUnmounted(() => {
      convStore.clearCurrentState();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(unref(Chat), {
          class: "flex-1",
          key: currentConv.value.virtual_id || currentConv.value.conversation_id
        })),
        createCommentVNode("", true)
      ], 64);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-68a6346c"]]);
export {
  index as default
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-4rTdlTBN.js","./main-zTjO05wq.js","./main-hmm0JC4y.css","./main-header.vue_vue_type_script_setup_true_lang-hK95iFpc.js","./el-scrollbar-Ngsny-f4.js","./el-scrollbar-MGPS7OqT.css","./el-image-viewer-l__UzqmW.js","./debounce-Aw5yKx-N.js","./el-image-viewer-XYf3mlAR.css","./el-loading-bLs-AQkn.js","./el-loading-zBRdopto.css","./el-radio-uShQVp49.js","./el-radio-P9nymJDg.css","./enterprise-EiZTO-a9.js","./global-kvMtX63s.js","./main-header-8k4nnvTs.css","./el-empty-iR7uizlV.js","./el-empty-N-6r8Eh9.css","./upload-U3GEMIbU.js","./upload-EpRhXtGe.css","./el-tab-pane-c5Z0Dsok.js","./strings-gmAHSTq5.js","./index-UhiCyIRr.js","./el-tab-pane-Gk50KD-6.css","./el-dropdown-item-NOVRjZ1y.js","./el-dropdown-item-2HWGmYcF.css","./conversation-KofNRSJn.js","./index-5oHVInGi.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
