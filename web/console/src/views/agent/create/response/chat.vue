<script setup lang="ts">
import { RefreshRight } from '@element-plus/icons-vue'
import { computed, nextTick, ref } from 'vue'
import { useAgentFormStore } from '../store'

import api from '@/apis'
import { useConversationStore, useEnterpriseStore, useUserStore } from '@/stores'
import { copyToClip } from '@/utils/copy'
import { api_host } from '@/utils/config'

const agentFormStore = useAgentFormStore()
const conversation_store = useConversationStore()
const user_store = useUserStore()
const enterprise_store = useEnterpriseStore()
const scroll_ref = ref()
const chat_list = ref([])
const conversation_creating = ref(false)

const chat_loading = computed(() => conversation_creating.value || chat_list.value.some(item => item.answer.loading))
const enable_upload = computed(() => Boolean(agentFormStore.form_data.custom_config?.file_parse?.enable || agentFormStore.form_data.custom_config?.image_parse?.enable))
const upload_accept = computed(() => {
  let accept = ''
  if (agentFormStore.form_data.custom_config?.file_parse?.enable)
    accept += '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.html,.json,.xml,.md'
  if (agentFormStore.form_data.custom_config?.image_parse?.enable)
    accept += ',image/*'
  return accept
})

const httpRequest = async (dataFile: File) => {
  const fileFormData = new FormData()
  fileFormData.append('file', dataFile)
  try {
    const res = await api.upload({ data: fileFormData })
    return {
      id: res.data.id,
      url: `${api_host}/api/preview/${res.data.preview_key || ''}`,
      size: res.data.size,
      name: res.data.file_name,
      mime_type: res.data.mime_type,
    }
  }
  catch (error) {
    return { }
  }
}

const onLoadTop = (done) => {
  setTimeout(() => {
    done()
  }, 1200)
}

const onLoadBottom = (done) => {
  setTimeout(() => {
    done()
  }, 1200)
}
let conversation_id = 0
let active_chat_index = -1
let active_chat_data = {}
let abort_controller: any = null
const onSendConfirm = async (question: string, user_files?: any[], type = '') => {
  user_files = user_files || []
  if (!agentFormStore.agent_data.agent_id)
    return ElMessage.warning(window.$t('agent_not_found'))
  if (!agentFormStore.agent_data.channel_type)
    await agentFormStore.saveAgentData({ hideToast: true })
  // return ElMessage.warning(window.$t('agent_channel_type_not_found'))

  if (abort_controller)
    abort_controller.abort()
  abort_controller = new AbortController()

  if (!conversation_id) {
    conversation_creating.value = true
    const { data = {} } = await conversation_store.save({ data: { agent_id: agentFormStore.agent_data.agent_id, title: question } }).finally(() => {
      conversation_creating.value = false
    })
    conversation_id = data.conversation_id
  }

  if (type !== 'regenerate')
 		user_files = user_files?.map(item => ({ type: 'image', content: `file_id:${item.id}`, filename: item.name, size: item.size, mime_type: item.mime_type, url: item.url })) || []

  chat_list.value.push({
    question: {
      role: 'user',
      content: question,
      user_files,
    },
    answer: {
      loading: true,
      role: 'assistant',
      content: '',
    	reasoning_expanded: true,
      reasoning_content: '',
    },
  })
  active_chat_index = chat_list.value.length - 1
  active_chat_data = chat_list.value[active_chat_index] || {}
  let messages = [
    { role: 'user', content: question },
  ]
  if (user_files.length) {
    messages = [
      {
        role: 'user',
        content: JSON.stringify([
          {
            type: 'text',
            content: question,
          },
          ...user_files,
        ]),
      },
    ]
  }

  conversation_store.chat({
    data: {
      conversation_id,
      messages,
      agent_id: agentFormStore.agent_data.agent_id,
      agent_configs: agentFormStore.agent_data.configs,
    },
    hideError: true,
    onDownloadProgress: async ({ chunks = [], intact_content, intact_reasoning_content } = {}) => {
      active_chat_data.answer.content = intact_content || active_chat_data.answer.content || ''
      active_chat_data.answer.reasoning_content = intact_reasoning_content || active_chat_data.answer.reasoning_content || ''
      if (chunks[0] && chunks[0].role)
        active_chat_data.answer.role = chunks[0].role || ''
      await nextTick()
      if (scroll_ref.value)
        scroll_ref.value.scrollToBottom()
    },
    signal: abort_controller.signal,
  }).catch((err) => {
    ElMessage.warning(err.message === 'Access token is invalid' ? window.$t('agent_app.check_agent_config_tip') : err.message)
  }).finally(() => {
    active_chat_data.answer.loading = false
    abort_controller = null
  })
  await nextTick()
  if (scroll_ref.value)
    scroll_ref.value.scrollToBottom()
}
const onStopGeneration = () => {
  if (abort_controller) {
    abort_controller.abort()
    abort_controller = null
    active_chat_data.answer.loading = false
  }
}
const onRestartGeneration = (data) => {
  // chat_list.value.splice(0, active_chat_index + 1)
  onSendConfirm(data.question.content, data.question.user_files, 'regenerate')
}
const onRestart = () => {
  conversation_id = 0
  chat_list.value = []
}
const onCopy = async (text = '') => {
  await copyToClip(text)
  ElMessage.success(window.$t('action_copy_success'))
}
</script>

<template>
  <div class="flex flex-col pt-7">
    <div class="flex items-center justify-between px-4 mb-2">
      <div class="text-base text-[#1D1E1F]">
        {{ $t('debug_preview') }}
      </div>
      <div class="flex-center gap-1 cursor-pointer" @click="onRestart">
        <ElIcon>
          <RefreshRight />
        </ElIcon>
        <span class="text-sm text-[#1D1E1F]">
          {{ $t('restart') }}
        </span>
      </div>
    </div>

    <Scroller
      ref="scroll_ref" class="flex-1 px-4" :disable-top="true" :disable-bottom="true" @load-bottom="onLoadBottom"
      @load-top="onLoadTop"
    >
      <div class="flex flex-col space-y-4">
        <ElEmpty v-if="!chat_list.length" class="mt-10" :description="$t('chat.empty_desc')" />
        <template v-else>
          <template v-for="(item, item_index) in chat_list" :key="item_index">
            <x-bubble-user :content="item.question.content" :files="item.question.user_files">
              <template v-if="!item.answer.loading" #menu>
                <x-icon size="16" class="cursor-pointer" name="copy" @click="onCopy(item.question.content)" />
              </template>
            </x-bubble-user>
            <x-bubble-assistant :content="item.answer.content" :reasoning="item.answer.reasoning_content" :reasoning-expanded="item.answer.reasoning_expanded" :streaming="item.answer.loading" :always-show-menu="item_index === chat_list.length - 1">
              <template v-if="!item.answer.loading" #menu>
                <x-icon size="16" class="cursor-pointer" name="copy" @click="onCopy(item.answer.content)" />
                <x-icon size="16" class="cursor-pointer" name="refresh" @click="onRestartGeneration(item)" />
              </template>
            </x-bubble-assistant>
          </template>
        </template>
      </div>
    </Scroller>
    <div class="px-6 py-3">
      <x-sender
        :enable-upload="enable_upload"
        :accept-types="upload_accept"
        :http-request="httpRequest"
        :loading="chat_loading"
        @send="onSendConfirm"
        @stop="onStopGeneration"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
