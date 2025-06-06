

import { defineStore } from 'pinia'
import groupApi from '@/api/modules/group'
import agentApi from '@/api/modules/agent'

const AGENT_TYPE = 3
export const useAgentStore = defineStore('agent-store', {
  state: (): {
    categorys: Category.State[]
    agentList: Agent.State[]
  } => ({
    categorys: [],
    agentList: []
  }),
  actions: {
    async loadAgentList() {
      try {
        const res = await agentApi.list()
        this.agentList = res.data.agents.map((item: Agent.State) => {
          item.custom_config_obj = item.custom_config ? JSON.parse(item.custom_config) : {}
          return item
        })
        return this.agentList
      } catch (error) {
        return []
      }
    },
    async loadCategorys() {
      const res = await groupApi.list(AGENT_TYPE)
      this.categorys = [{ group_id: 0, group_name: window.$t('common.all') }].concat(res.data) as Category.State[]
    },
  },
})
