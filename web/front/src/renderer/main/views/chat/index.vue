<template>
  <Chat class="flex-1" :key="currentConv.virtual_id || currentConv.conversation_id"></Chat>
  <Completion v-if="false"></Completion>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, defineAsyncComponent, computed } from 'vue'
import { useRoute } from 'vue-router'


// const Chat = defineAsyncComponent(() => import('./chat/index.vue'))
const Chat = defineAsyncComponent(() => import('./chat1/index.vue'))
const Completion = defineAsyncComponent(() => import('./completion/index.vue'))

import { useAgentStore } from '@/stores/modules/agent'
import { useConversationStore } from '@/stores/modules/conversation'

const route = useRoute()

const agentStore = useAgentStore()
const convStore = useConversationStore()

const currentConv = computed(() => convStore.currentConversation)

onMounted(async () => {
  let agent_id = Number(route.query.agent_id || '0')
  const conversation_id = route.query.conversation_id || ''
  agentStore.loadCategorys()
  await agentStore.loadAgentList().then((agentList) => {
    const agent = agentList.find((item) => item.agent_id === +agent_id)
    if (agent) {
      convStore.pushUsualAgent(agent)
    } else {
      const usableAgent = convStore.usual_agents[0] || agentList[0]
      if (usableAgent) {
        convStore.pushUsualAgent(usableAgent)
        agent_id = usableAgent.agent_id
      }
    }
    convStore.updateAgents(agentList)
    if (!conversation_id) {
      convStore.setCurrentState(+agent_id, 0)
    }
  })

  await convStore.loadConversations().then((convList) => {
    const conversation = convList.find((item) => item.conversation_id === +conversation_id)
    if (conversation) {
      convStore.setCurrentState(conversation.agent_id, conversation.conversation_id)
    }
  })
})

onUnmounted(() => {
  // 清理逻辑
  convStore.clearCurrentState()
})
</script>

<style scoped>
.sidebar-transition {
  transition: width 0.3s ease-in-out;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
