import type { GroupType, Group } from '@/api/modules/group'
import { defineStore } from 'pinia'
import api from '@/apis'
import { groupApi } from '@/api/modules/group'

export const useGroupStore = defineStore('group-store', {
  state: () => ({}),
  actions: {
    async loadListData({ data: { group_type } }: { data?: { group_type: GroupType } }) {
      const { data = {} } = await api.group.list({ data: { group_type } })
      return data
    },
    async save({ data: { group_type, groups } }: { data: { group_type: GroupType; groups: Group[] } }) {
      const { data = {} } = await api.group.save({ data: { group_type, groups } })
      return data
    },
    async delete({ data: { group_id } }: { data: { group_id: number } }) {
      return api.group.delete({ data: { group_id } })
    },
  },
})
