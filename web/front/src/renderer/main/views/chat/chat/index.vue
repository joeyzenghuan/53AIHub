<template>
  <div class="h-full flex bg-white relative overflow-hidden">
    <div class="flex-1 flex flex-col">
      <MainHeader>
        <template #before_suffix>
          <div
            class="text-base text-primary line-clamp-1"
            :title="currentConv.title || currentAgent.name || ''"
          >
            {{ currentConv.title || currentAgent.name || '' }}
          </div>
        </template>
        <template #after_prefix>
          <div class="flex items-center gap-1 text-sm text-secondary">
            <svg-icon name="index"></svg-icon>
            <router-link :to="{ name: 'Home' }">{{ $t('common.back_home') }}</router-link>
          </div>
          <div class="border-r w-px h-3 mx-2"></div>
        </template>
        <template #after_suffix>
          <div
            class="h-[26px] px-2 rounded-full flex-center gap-1.5 text-sm text-primary cursor-pointer hover:bg-[#E1E2E3]"
            @click="handleToggleGuide"
            v-tooltip="{ content: $t('chat.usage_guide') }"
          >
            <div class="size-4">
              <svg-icon name="layout-split" size="18"></svg-icon>
            </div>
          </div>
        </template>
      </MainHeader>

      <!-- 消息列表区域 -->
      <chat-list
        class="flex-1 mt-5"
        :messages="state.messageList"
        contentClass="w-4/5 max-w-[800px] mx-auto"
        enableLoadMore
        @load-more="handleLoadListMore"
      >
        <template #item="{ message, index }">
          <!-- 用户消息气泡 -->
          <chat-bubble-user :message="message.query">
            <template #footer>
              <div
                class="h-6 px-1 rounded flex-center cursor-pointer hover:bg-[#E1E2E3]"
                v-tooltip="{ content: $t('action.copy') }"
                v-copy="message.query"
              >
                <el-icon color="#9B9B9B">
                  <CopyDocument />
                </el-icon>
              </div>
            </template>
          </chat-bubble-user>

          <!-- AI助手消息气泡 -->
          <chat-bubble-robot
            :message="message.answer"
            :reasoning="message.reasoning_content"
            :loading="message.loading"
            :alwaysShowFooter="index === state.messageList.length - 1"
          >
            <template #footer v-if="!message.loading">
              <div
                v-tooltip="{ content: $t('action.copy') }"
                v-copy="message.answer"
                class="h-6 px-1 rounded flex-center cursor-pointer hover:bg-[#E1E2E3]"
              >
                <el-icon color="#9B9B9B">
                  <CopyDocument />
                </el-icon>
              </div>
              <div
                class="h-6 px-1 rounded flex-center cursor-pointer hover:bg-[#E1E2E3]"
                v-tooltip="{ content: $t('chat.regenerate') }"
                @click="handleRegenerate(message)"
              >
                <el-icon color="#9B9B9B">
                  <Refresh />
                </el-icon>
              </div>
              <div
                v-if="false"
                class="h-6 px-1 rounded flex-center cursor-pointer hover:bg-[#E1E2E3]"
                v-tooltip="{ content: $t('chat.like') }"
              >
                <svg-icon size="18" name="like" color="#9B9B9B"></svg-icon>
              </div>
              <div
                v-if="false"
                class="h-6 px-1 rounded flex-center cursor-pointer hover:bg-[#E1E2E3]"
                v-tooltip="{ content: $t('chat.like') }"
              >
                <svg-icon size="18" name="dislike" color="#9B9B9B"></svg-icon>
              </div>
            </template>
          </chat-bubble-robot>
        </template>
      </chat-list>

      <!-- 底部输入区域 -->
      <div class="w-4/5 max-w-[800px] mx-auto py-5">
        <div class="flex gap-2 mb-2.5">
          <AgentTooltip @select="onSelectAgent">
            <div
              class="h-8 px-2 rounded-full flex-center gap-1.5 bg-[#F1F2F3] cursor-pointer hover:bg-[#E1E2E3]"
            >
              <img class="size-4 rounded-full" :src="currentAgent.logo" alt="" />
              <span class="text-sm text-primary">{{ currentAgent.name }}</span>
              <div class="size-4 flex-center">
                <el-icon color="#333333">
                  <ArrowDown />
                </el-icon>
              </div>
            </div>
          </AgentTooltip>

          <div
            v-if="false"
            class="h-8 px-2 rounded-full flex-center gap-1.5 bg-[#F1F2F3] cursor-pointer hover:bg-[#E1E2E3]"
          >
            <div class="size-4">
              <svg-icon name="network"></svg-icon>
            </div>
            <span class="text-sm text-primary">{{ $t('chat.online_search') }}</span>
          </div>
          <div class="flex-1"></div>
          <div
            class="h-8 px-2 rounded-full flex-center gap-1.5 bg-[#F1F2F3] text-sm text-primary cursor-pointer hover:bg-[#E1E2E3]"
            @click="handleHistory"
          >
            <div class="size-4">
              <svg-icon name="history"></svg-icon>
            </div>
            {{ $t('chat.history') }}
          </div>
          <div
            class="h-8 px-2 rounded-full flex-center gap-1.5 bg-[#F1F2F3] text-sm text-primary cursor-pointer hover:bg-[#E1E2E3]"
            @click="handleNewConversation"
          >
            <div class="size-4">
              <svg-icon name="plus"></svg-icon>
            </div>
            {{ $t('chat.new_conversation') }}
          </div>
        </div>

        <ChatSender
          ref="chatSenderRef"
          :loading="state.isStreaming"
          @confirm="handleSend"
          @stop="handleStop"
        >
        </ChatSender>
      </div>
    </div>

    <!-- 右侧帮助面板 -->
    <Transition name="slide">
      <div v-if="state.showHelper" class="w-2/5 border-l bg-white">
        <div class="h-16 flex-center border-b relative">
          <h4 class="text-lg text-primary">{{ $t('chat.usage_guide') }}</h4>
          <div
            class="flex-center size-6 absolute right-2 top-1/2 -translate-y-1/2 rounded cursor-pointer hover:bg-[#ECEDEE]"
            @click="handleToggleGuide"
          >
            <el-icon>
              <Close />
            </el-icon>
          </div>
        </div>
        <Helper :agent="currentAgent"></Helper>
      </div>
    </Transition>
  </div>
  <History ref="historyRef" @new="handleNewConversation"></History>
</template>

<script setup lang="ts">
import { defineAsyncComponent, reactive, computed, onMounted, ref } from 'vue'
import { Close, ArrowDown, CopyDocument, Refresh } from '@element-plus/icons-vue'

import MainHeader from '@/layout/main-header.vue'
import ChatList from '@/components/Chat/list.vue'
import ChatBubbleRobot from '@/components/Chat/bubble-robot.vue'
import ChatBubbleUser from '@/components/Chat/bubble-user.vue'
import ChatSender from '@/components/Chat/sender.vue'

import AgentTooltip from './agent-tooltip.vue'
import History from './history.vue'

import { useConversationStore } from '@/stores/modules/conversation'

import chatApi from '@/api/modules/chat'
import conversationApi from '@/api/modules/conversation'

const Helper = defineAsyncComponent(() => import('../helper.vue'))
// 扩展消息类型，添加动效相关属性
interface ExtendedMessage extends Conversation.Message {
  isNew?: boolean
}

const convStore = useConversationStore()

const historyRef = ref<InstanceType<typeof History>>()
const chatSenderRef = ref<InstanceType<typeof ChatSender>>()
const abortController = ref<AbortController | null>(null)

const currentAgent = computed(() => convStore.currentAgent)
const currentConv = computed(() => convStore.currentConversation)

const state = reactive({
  offset: 0,
  limit: 10,
  showHelper: false,
  messageList: [] as ExtendedMessage[],
  isStreaming: false,
  isLoadingMore: false, // 添加加载更多状态标志
  hasMore: true // 是否还有更多消息
})

const handleHistory = () => {
  historyRef.value?.open()
}

const handleToggleGuide = () => {
  state.showHelper = !state.showHelper
}

const onSelectAgent = (agent: Agent.State) => {
  convStore.pushUsualAgent(agent)
  convStore.setCurrentState(agent.agent_id, 0)
}

const handleNewConversation = () => {
  convStore.setCurrentState(currentAgent.value.agent_id, 0)
}

// 处理流式数据的函数
const processStreamData = (e: any, processedLength: number): number => {
  const lastMessage = state.messageList[state.messageList.length - 1]
  if (!e.event?.target) return processedLength

  const fullResponse = e.event.target.response || ''
  // 只处理新增的部分
  const newChunk = fullResponse.substring(processedLength)
  const newProcessedLength = fullResponse.length

  try {
    // 处理SSE格式的数据
    const lines = newChunk
      .split('\n')
      .filter((line) => line.trim() !== '' && line.trim() !== 'data: [DONE]')

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        try {
          const data = JSON.parse(line.slice(6))
          const content = data.choices?.[0]?.delta?.content
          const reasoning_content = data.choices?.[0]?.delta?.reasoning_content
          if (content) {
            // 将新内容追加到当前消息
            lastMessage.answer += content
          }
          if (reasoning_content) {
            // 将新内容追加到当前消息
            lastMessage.reasoning_content += reasoning_content
          }
        } catch (err) {
          console.error('解析JSON失败:', err)
        }
      }
    }
  } catch (err) {
    console.error('处理流数据失败:', err)
  }

  return newProcessedLength
}

const sendMessage = async (query: string) => {
  if (state.isStreaming) return

  const agent_id = currentAgent.value.agent_id
  const conversation_id = currentConv.value.conversation_id
  // 将用户消息和空的助手回复添加到消息列表
  const newMessage: ExtendedMessage = {
    query,
    answer: '',
    loading: true,
    agent_id,
    conversation_id,
    reasoning_content: ''
  }
  state.messageList.push(newMessage)
  const configs = JSON.parse(currentAgent.value.configs || '{}')
  const completion_params = configs.completion_params || {}
  state.isStreaming = true
  abortController.value = new AbortController()
  let processedLength = 0

  try {
    await chatApi.completions(
      {
        conversation_id: conversation_id,
        model: 'agent-' + agent_id,
        messages: [{ content: query, role: 'user' }],
        frequency_penalty: 0,
        presence_penalty: 0,
        stream: true,
        temperature: 0,
        top_p: 0,
        ...completion_params
      },
      {
        responseType: 'stream',
        onDownloadProgress: (e) => {
          processedLength = processStreamData(e, processedLength)
        },
        signal: abortController.value.signal
      }
    )
  } catch (err: any) {
    // 错误已在processStreamData中处理
    if (err.message !== 'canceled') {
      const lastMessage = state.messageList[state.messageList.length - 1]
      if (lastMessage && !lastMessage.answer) {
        lastMessage.answer = window.$t('response_code.network_error')
      }
    }
  } finally {
    // 更新最后一条消息的loading状态
    const lastMessage = state.messageList[state.messageList.length - 1]
    if (lastMessage) {
      lastMessage.loading = false
    }

    state.isStreaming = false
    abortController.value = null
  }
}

const handleSend = async (data: { question: string }) => {
  const agent_id = currentAgent.value.agent_id
  if (!agent_id) return ElMessage.warning(window.$t('chat.no_available_agent'))
  if (!currentConv.value.conversation_id) {
    try {
      const conversation = await convStore.createConversation(agent_id, data.question)
      convStore.addConversation({ ...conversation, virtual_id: currentConv.value.virtual_id })
      convStore.setCurrentState(conversation.agent_id, conversation.conversation_id)
    } catch (err) {
      console.error('创建对话失败:', err)
      return
    }
  }
  chatSenderRef.value?.clearState()
  await sendMessage(data.question)
}

const handleStop = () => {
  // 取消当前请求
  if (abortController.value) {
    abortController.value.abort()
    abortController.value = null
  }
  state.isStreaming = false
}

const handleRegenerate = async (message: Conversation.Message) => {
  await sendMessage(message.query)
}

// 处理加载更多消息
const handleLoadListMore = async (done) => {
  if (state.isLoadingMore || !state.hasMore) return done()

  const conversation_id = currentConv.value.conversation_id
  if (!conversation_id) return

  state.isLoadingMore = true
  state.offset += state.limit

  try {
    const res = await conversationApi.messasges(conversation_id, {
      offset: state.offset,
      limit: state.limit
    })

    const list = res.data.messages.map((item) => {
      return {
        ...item,
        query: JSON.parse(item.message)[0].content
      } as ExtendedMessage
    })

    // 判断是否还有更多消息
    if (list.length < state.limit) {
      state.hasMore = false
    }

    // 将新加载的消息添加到列表前面
    state.messageList.unshift(...list)
  } catch (err) {
    console.error('加载更多消息失败:', err)
    // 加载失败时恢复offset
    state.offset = Math.max(0, state.offset - state.limit)
  } finally {
    state.isLoadingMore = false
    done()
  }
}

const loadList = async () => {
  const conversation_id = currentConv.value.conversation_id
  if (!conversation_id) return

  state.isLoadingMore = true
  state.offset = 0
  state.hasMore = true

  try {
    const res = await conversationApi.messasges(conversation_id, {
      offset: state.offset,
      limit: state.limit
    })

    state.messageList = []

    const list = res.data.messages.map((item) => {
      return {
        ...item,
        query: JSON.parse(item.message)[0].content
      } as ExtendedMessage
    })

    // 判断是否还有更多消息
    if (list.length < state.limit) {
      state.hasMore = false
    }

    state.messageList.unshift(...list)
  } catch (err) {
    console.error('加载消息列表失败:', err)
  } finally {
    state.isLoadingMore = false
  }
}

onMounted(() => {
  loadList()
})
</script>

<style scoped>
/* 动画效果 */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
