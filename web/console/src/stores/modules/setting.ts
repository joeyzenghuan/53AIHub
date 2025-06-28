import { defineStore } from 'pinia'
import settingApi from '@/api/modules/setting'

export const useSettingStore = defineStore('setting-store', {
  state: () => ({
  }),
  actions: {
    async loadListData(): Promise<Settings.Info[]> {
      const res = await settingApi.list()
      return res.data
    },
    async get(key: string) {
      const res = await settingApi.get(key)
      return res.data
    },
    async loadDetailData(group_name: string) {
      const { data = [] } = await settingApi.detail(group_name)
      return data
    },
    async save(setting_id: number, data: { key: string; value: string }): Promise<Settings.Info> {
      if (setting_id) {
        const res = await settingApi.update(setting_id, data)
        return res.data
      }
      else {
        const res = await settingApi.create({
          key: data.key,
          value: data.value,
        })
        return res.data
      }
    },
  },
})
