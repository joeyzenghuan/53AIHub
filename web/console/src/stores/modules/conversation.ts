import { defineStore } from 'pinia'
import api from '@/apis'

export const useConversationStore = defineStore('conversation-store', {
  state: () => ({}),
  actions: {
    async loadListData({ data: { offset, limit } = {} } = {}) {
      const { data: { conversations = [] } = {} } = await api.conversation.list({ data: { offset, limit } })
      return conversations.map((item = {}, index) => {
        return item
      })
    },
    async save({ data } = {}) {
      data = {
        conversation_id: 0,
        agent_id: 0,
        ...data,
      }
      if (!data.conversation_id)
        delete data.conversation_id
      return api.conversation[data.conversation_id ? 'update' : 'create']({ data })
    },
    async chat({ data, onDownloadProgress, signal, hideError = false } = {}) {
      const completionParams = data?.agent_configs?.completion_params || {
        frequency_penalty: 0.5,
        presence_penalty: 0.5,
        temperature: 0.2,
        top_p: 0.75,
      }

      // Need to delete agent_configs here, otherwise some channels will report errors
      if (data.agent_configs)
        delete data.agent_configs

      data = {
        conversation_id: 0,
        frequency_penalty: completionParams.frequency_penalty || 0,
        messages: [],
        model: '',
        presence_penalty: completionParams.presence_penalty || 0,
        stream: true,
        temperature: completionParams.temperature || 0,
        top_p: completionParams.top_p || 0,
        ...data,
      }

      if (data.agent_id) {
        data.model = `agent-${data.agent_id}`
        delete data.agent_id
      }
      return api.conversation.chat({ data, onDownloadProgress, signal, hideError })
    },
  },
})
