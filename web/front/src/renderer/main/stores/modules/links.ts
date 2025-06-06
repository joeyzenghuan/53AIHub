import { defineStore } from 'pinia'
import groupApi from '@/api/modules/group'
import linksApi from '@/api/modules/links'

const all_Group = { group_name: window.$t('common.all'), group_id: 0 }

const LINK_TYPE = 2

export const useLinksStore = defineStore('links', {
  state: (): {
    categorys: Category.Info[]
    appMap: Record<string, any[]>
  } => ({
    categorys: [],
    appMap: {},
  }),

  getters: {

  },
  actions: {
    loadCategorys() {
      return groupApi.list(LINK_TYPE).then(res => {
        this.categorys = res.data.map((item) => {
          item.visible = true
          return item
        })
        this.categorys.unshift(all_Group)
      })
    },

    loadLinks(): Promise<void> {
      return linksApi.list().then((res) => {
        const map = {
          [all_Group.group_id]: []
        }
        res.data.forEach((item) => {
          const group_id = item.group_id
          if (!map[group_id]) map[group_id] = []
          item.visible = true
          map[group_id].push(item)
          map[all_Group.group_id].push(item)
        })
        this.appMap = map
      })
    }
  }
})
