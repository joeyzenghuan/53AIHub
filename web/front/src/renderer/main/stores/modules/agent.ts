import { defineStore } from 'pinia'
import groupApi from '@/api/modules/group'
import agentApi from '@/api/modules/agent'
import { cacheManager } from '@/utils/cache'

const AGENT_TYPE = 3

// 缓存key常量
const CACHE_KEYS = {
  AGENT_LIST: 'agent_list',
  CATEGORY_LIST: 'category_list'
} as const

export const useAgentStore = defineStore('agent-store', {
  state: (): {
    categorys: Category.State[]
    agentList: Agent.State[]
    boxHeight: number
  } => ({
    categorys: [],
    agentList: [],
    boxHeight: 0
  }),
  actions: {
    setBoxHeight(height: number) {
      this.boxHeight = height
    },
    async loadAgentList(): Promise<Agent.State[]> {
      const fetchAgents = async () => {
        // const userStore = useUserStore()
        // const { is_internal } = userStore.info
        // 接口不用区分内外部，直接展示，然后点击时候判断权限
        // const { data: { agents = [] } = {} } = is_internal ? await agentApi.internalList() : await agentApi.list()
        const { data: { agents = [] } = {} } = await agentApi.available({ limit: 500 })
        return agents.map((originalItem: Agent.State) => {
          const item = { ...originalItem }
          item.custom_config_obj = item.custom_config ? JSON.parse(item.custom_config) : {}
          item.settings_obj = item.settings ? JSON.parse(item.settings) : {}
          return item
        })
      }

      this.agentList = await cacheManager.getOrFetch(CACHE_KEYS.AGENT_LIST, fetchAgents)
      return this.agentList
    },

    async loadCategorys() {
      const fetchCategories = async () => {
        const res = await groupApi.list(AGENT_TYPE)
        return [{ group_id: 0, group_name: window.$t('common.all') }].concat(
          res.data
        ) as Category.State[]
      }

      this.categorys = await cacheManager.getOrFetch(CACHE_KEYS.CATEGORY_LIST, fetchCategories)
    }
  }
})
