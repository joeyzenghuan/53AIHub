import { defineStore } from 'pinia'
import groupApi from '@/api/modules/group'
import linksApi from '@/api/modules/links'
import { cacheManager } from '@/utils/cache'

const all_Group = { group_name: window.$t('common.all'), group_id: 0 }

const LINK_TYPE = 2

const CACHE_KEYS = {
  CATEGORY_LIST: 'links_category_list',
  LINKS_LIST: 'links_list',
}

export const useLinksStore = defineStore('links', {
  state: (): {
    categorys: Category.State[]
    links: Link.State[]
  } => ({
    categorys: [{ ...all_Group }],
    links: [],
  }),

  getters: {

  },
  actions: {
    async loadCategorys() {
      const fetchCategorys = async () => {
        const res = await groupApi.list(LINK_TYPE)
        const list = res.data.map((item) => {
          item.visible = true
          return item
        })
        list.unshift(all_Group)
        return list
      }
      this.categorys = await cacheManager.getOrFetch(
        CACHE_KEYS.CATEGORY_LIST,
        fetchCategorys
      )
    },

    async loadLinks(): Promise<void> {
      const fetchLinks = async () => {
        const res = await linksApi.list()
        return res.data.map(item => {
          item.visible = true
          return item
        })
      }
      this.links = await cacheManager.getOrFetch(
        CACHE_KEYS.LINKS_LIST,
        fetchLinks
      )
    }
  }
})
