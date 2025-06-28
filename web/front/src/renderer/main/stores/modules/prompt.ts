

import { defineStore } from 'pinia'
import groupApi from '@/api/modules/group'
import promptApi from '@/api/modules/prompt'

const PROMPT_TYPE = 5
export const usePromptStore = defineStore('prompt-store', {
  state: (): {
    categorys: Category.State[]
    promptList: Prompt.State[]
  } => ({
    categorys: [],
    promptList: []
  }),
  actions: {
    async loadPromptList() {
      try {
        const res = await promptApi.list()
        this.promptList = res.data.prompts.map((item: Prompt.State) => {
          try {
            item.custom_config_obj = item.custom_config ? JSON.parse(item.custom_config) : {}
          } catch (error) {
            item.custom_config_obj = {}
          }
          return item
        })
        return this.promptList
      } catch (error) {
        return []
      }
    },
    async loadCategorys() {
      const res = await groupApi.list(PROMPT_TYPE)
      this.categorys = [{ group_id: 0, group_name: window.$t('common.all') }].concat(res.data) as Category.State[]
    },
  },
})
