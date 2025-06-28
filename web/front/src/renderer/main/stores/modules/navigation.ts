import { defineStore } from 'pinia'
import navigationApi from '@/api/modules/navigation'
import { NAVIGATION_TYPE, NAVIGATION_TARGET } from '@/constants/navigation'
import { cacheManager } from '@/utils/cache'

const getFormatData = (data = {}) => {
  try {
    data.config = JSON.parse(data.config)
  } catch (error) {
    data.config = {}
  }
  data.type = +data.type || +data.config.type || NAVIGATION_TYPE.SYSTEM
  // data.type_label = NAVIGATION_TYPE_LABEL_MAP.get(data.type)
  data.target = +data.target || +data.config.target || NAVIGATION_TARGET.SELF
  // data.target_label = NAVIGATION_TARGET_LABEL_MAP.get(data.target)
  data.url = data.menu_path = data.jump_path = data.jump_path || ''
  if ([NAVIGATION_TYPE.CUSTOM, NAVIGATION_TYPE.SYSTEM].includes(data.type)) {
    if (data.menu_path !== '/index') data.menu_path = `/index${data.jump_path}`
    data.url = `${location.origin}/#${data.menu_path}`
  }
  return data
}

const cacheNavigations = JSON.parse(localStorage.getItem('navigation_list') || '[]')

export const useNavigationStore = defineStore('navigation', {
  state: (): {
    navigations: any[]
    agentNavigation: any
    promptNavigation: any
    toolkitNavigation: any
    homeNavigation: any
    loading: boolean
  } => ({
    navigations: cacheNavigations,
    agentNavigation: cacheNavigations.find(item => item.jump_path === '/agent') || {},
    promptNavigation: cacheNavigations.find(item => item.jump_path === '/prompt') || {},
    toolkitNavigation: cacheNavigations.find(item => item.jump_path === '/toolkit') || {},
    homeNavigation: cacheNavigations.find(item => item.jump_path === '/index') || {},
    loading: false,
  }),

  getters: {

  },
  actions: {
    async fetchNavigations(): Promise<void> {
      const fetchData = async () => {
        this.loading = true
        const { list = [] } = await navigationApi.list().catch(() => {
          this.loading = false
        })
        if (!list.length) {
          await navigationApi.init()
          return this.fetchData()
        }
        return list
      }
      const list = await cacheManager.getOrFetch(
        'navigation_list',
        fetchData
      )
      this.loading = false
      this.navigations = list.filter(item => +item.status).map(item => getFormatData(item))
      this.agentNavigation = this.navigations.find(item => item.jump_path === '/agent') || {}
      this.promptNavigation = this.navigations.find(item => item.jump_path === '/prompt') || {}
      this.toolkitNavigation = this.navigations.find(item => item.jump_path === '/toolkit') || {}
      this.homeNavigation = this.navigations.find(item => item.jump_path === '/index') || {}
      localStorage.setItem('navigation_list', JSON.stringify(this.navigations))
      return this.navigations
    }
  }
})
