import { defineStore } from 'pinia'
import conversationApi from '@/api/modules/conversation'
import { getSimpleDateFormatString } from '@/utils/moment'
import { setRouterQuery } from '@/utils/router'
import { isHashRouter } from '@/router'
import { cacheManager } from '@/utils/cache'

// 添加类型定义
interface RouterOptions {
  agent_id?: number | null
  conversation_id?: number | null
}

interface UsualAgent extends Agent.State {
  is_fixed: boolean
}

const USUAL_AGENTS_KEY = 'usual_agents'

// 工具函数
const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (e) {
    console.error(`Error reading localStorage key "${key}":`, e)
    return defaultValue
  }
}

const CACHE_KEYS = {
  CONVERSATION_LIST: 'conversation_list'
}

export const useConversationStore = defineStore('conversation-store', {
  state: (): {
    conversations: Conversation.Info[]
    agents: Agent.State[]
    usual_agents: UsualAgent[]
    current_agentid: number
    current_conversationid: number
    base_path: string
  } => ({
    conversations: [],
    agents: [],
    usual_agents: getLocalStorage(USUAL_AGENTS_KEY, []),
    current_agentid: 0,
    current_conversationid: 0,
    base_path: '/chat'
  }),
  getters: {
    currentAgent: (state) => {
      return (
        state.usual_agents.find((item) => item.agent_id === state.current_agentid) || {
          name: '',
          logo: '',
          agent_id: 0,
          configs: '{}'
        }
      )
    },
    currentConversation: (state) => {
      return (
        state.conversations.find(
          (item) => item.conversation_id === state.current_conversationid
        ) || {
          conversation_id: 0,
          title: '',
          create_time: 0,
          update_time: 0,
          top: 0,
          is_valid: 0,
          virtual_id: Date.now().toString()
        }
      )
    }
  },
  actions: {
    setBasePath(path: string) {
      this.base_path = path || '/chat'
    },

    async loadConversations() {
      const fetchConversations = async () => {
        const res = await conversationApi.list()
        return res.data.conversations.map((item) => {
          item.created_at = getSimpleDateFormatString({
            date: item.created_time,
            format: 'YYYY.MM.DD hh:mm'
          })
          item.updated_at = getSimpleDateFormatString({
            date: item.updated_time,
            format: 'YYYY.MM.DD hh:mm'
          })
          return item
        })
      }

      this.conversations = await cacheManager.getOrFetch(
        CACHE_KEYS.CONVERSATION_LIST,
        fetchConversations
      )
      return this.conversations
    },

    saveUsualAgents() {
      try {
        localStorage.setItem(USUAL_AGENTS_KEY, JSON.stringify(this.usual_agents))
      } catch (error) {
        console.error('Failed to save usual agents:', error)
      }
    },

    async pushUsualAgent(agent: Agent.State) {
      const index = this.usual_agents.findIndex((item) => item.agent_id === agent.agent_id)

      const newAgent: UsualAgent = {
        ...agent,
        is_fixed: index > -1 ? this.usual_agents[index].is_fixed : false
      }

      // 将数组分为固定和非固定两部分
      const fixedAgents = this.usual_agents.filter(
        (item) => item.is_fixed && item.agent_id !== agent.agent_id
      )
      const unfixedAgents = this.usual_agents.filter(
        (item) => !item.is_fixed && item.agent_id !== agent.agent_id
      )

      // 根据 is_fixed 状态决定插入位置
      if (newAgent.is_fixed) {
        this.usual_agents = [newAgent, ...fixedAgents, ...unfixedAgents]
      } else {
        this.usual_agents = [...fixedAgents, newAgent, ...unfixedAgents]
      }
      this.saveUsualAgents()
    },

    toggleUsualAgentFixed(agent: UsualAgent) {
      const targetAgent = this.usual_agents.find((item) => item.agent_id === agent.agent_id)
      if (targetAgent) {
        targetAgent.is_fixed = !targetAgent.is_fixed

        // 将数组分为固定和非固定两部分（不包括目标agent）
        const fixedAgents = this.usual_agents.filter(
          (item) => item.is_fixed && item.agent_id !== agent.agent_id
        )
        const unfixedAgents = this.usual_agents.filter(
          (item) => !item.is_fixed && item.agent_id !== agent.agent_id
        )

        // 根据新的 is_fixed 状态重新排序
        this.usual_agents = targetAgent.is_fixed
          ? [targetAgent, ...fixedAgents, ...unfixedAgents]
          : [...fixedAgents, targetAgent, ...unfixedAgents]

        this.saveUsualAgents()
      }
    },

    updateUsualAgents(agent: UsualAgent) {
      this.usual_agents = this.usual_agents.map((item) =>
        item.agent_id === agent.agent_id ? { ...item, ...agent } : item
      )
      this.saveUsualAgents()
    },

    deleteUsualAgent(agent: UsualAgent) {
      this.usual_agents = this.usual_agents.filter((item) => item.agent_id !== agent.agent_id)
      this.saveUsualAgents()
    },

    createConversation(agent_id: number, title: string = ''): Promise<Conversation.Info> {
      return conversationApi
        .create({
          agent_id,
          title
        })
        .then((res) => res.data)
    },

    addConversation(conversation: Conversation.Info) {
      conversation.created_at = getSimpleDateFormatString({
        date: conversation.created_time,
        format: 'YYYY.MM.DD hh:mm'
      })
      conversation.updated_at = getSimpleDateFormatString({
        date: conversation.updated_time,
        format: 'YYYY.MM.DD hh:mm'
      })
      this.conversations.unshift(conversation)
    },

    updateConversation(conversation: Partial<Conversation.Info>) {
      this.conversations = this.conversations.map((item) =>
        item.conversation_id === conversation.conversation_id ? { ...item, ...conversation } : item
      )
    },

    async editConversation(conversation: Pick<Conversation.Info, 'conversation_id' | 'title'>) {
      const data = { title: conversation.title }
      await conversationApi.edit(conversation.conversation_id, data)
      this.updateConversation(conversation)
    },

    async delConversation(conversation: Conversation.Info) {
      this.conversations = this.conversations.filter(
        (item) => item.conversation_id !== conversation.conversation_id
      )
      await conversationApi.del(conversation.conversation_id)
      if (this.current_conversationid === conversation.conversation_id) {
        this.setCurrentState(this.current_agentid, 0)
      }
    },

    updateAgents(agents: Agent.State[]) {
      this.agents = agents
      // 过滤掉不在 agents 列表中的 usual_agents
      this.usual_agents = this.usual_agents.filter((usualAgent) =>
        agents.some((agent) => agent.agent_id === usualAgent.agent_id)
      )
      this.saveUsualAgents()
    },

    setCurrentState(agent_id: number, conversation_id: number) {
      if (agent_id) {
        const agent = this.agents.find((item) => item.agent_id == agent_id)
        if (!agent) {
          agent_id = this.agents[0]?.agent_id || 0
        }
      }
      if (conversation_id) {
        const conversation = this.conversations.find(
          (item) => item.conversation_id === conversation_id
        )
        if (!conversation) {
          conversation_id = 0
        }
      }
      this.current_agentid = agent_id
      this.current_conversationid = conversation_id
      this.setRouter({ agent_id: agent_id || null, conversation_id: conversation_id || null })
    },

    clearCurrentState() {
      this.current_agentid = 0
      this.current_conversationid = 0
    },

    setRouter(data: RouterOptions = {}) {
      if (!data.agent_id) return
      // electron环境 需要使用hash跳转 使用setRouterQuery

      if (isHashRouter) {
        setRouterQuery(data, this.base_path)
      } else {
        window.history.replaceState(
          null,
          '',
          `${this.base_path}?agent_id=${data.agent_id}${data.conversation_id ? `&conversation_id=${data.conversation_id}` : ''}`
        )
      }
    }
  }
})
