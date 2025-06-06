import { defineStore } from 'pinia'
import { channelApi } from '@/api/modules/channel'

export const useChannelStore = defineStore('channel-store', {
  state: () => ({
    channel_list: [],
    model_list_map: new Map(),
  }),
  actions: {
    async loadListData({ reset = true } = {}) {
      if (reset || !this.channel_list.length) this.channel_list = await channelApi.list()
      return JSON.parse(JSON.stringify(this.channel_list))
    },
    async save({ data = {} } = {}) {
      return channelApi.save({ data })
    },
		async delete({ data: { channel_id } }: { data: { channel_id: number } }) {
      return channelApi.delete({ data })
    },
    async loadModelList({ reset = false, owner = 'all' } = {}) {
      if (reset)
        this.model_list_map.set(owner, [])
      if (!this.model_list_map.get(owner) || !this.model_list_map.get(owner).length) {
				const list = await channelApi.modelList({ params: { owner } })
				list.forEach((item = {}) => {
					const model_list = this.model_list_map.get(item.owned_by) || []
					model_list.push(item)
					this.model_list_map.set(item.owned_by, model_list)
				})
        this.model_list_map.set('all', list)
      }
      return JSON.parse(JSON.stringify(this.model_list_map.get(owner)))
    },
    async loadCozeWorkspaceList() {
      const list = await channelApi.cozeWorkspaceList()
      return list
    },
    async loadCozeBotList({ params: { workspace_id } }: { params: { workspace_id: number } }) {
      const list = await channelApi.cozeBotList({ params: { workspace_id } })
      return list
    },
  },
})
