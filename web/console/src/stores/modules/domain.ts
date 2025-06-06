import { defineStore } from 'pinia'
import { useEnterpriseStore } from './enterprise'

import domainApi from '@/api/modules/domain'

export const useDomainStore = defineStore('domain-store', {
  state: () => ({
  }),
  actions: {
    async loadListData() {
      const { data = {} } = await domainApi.saas_list()
      return data
    },
    async save({ data = {} }: { data: { domain_id: number; domain: string } }) {
      let result_data = {}
      if (data.domain_id)
        result_data = (await domainApi.saas_update(data.domain_id, { domain: data.domain })).data
      else
        result_data = (await domainApi.saas_create({ domain: data.domain })).data

      const enterprise_store = useEnterpriseStore()
      enterprise_store.loadSelfInfo()
      return result_data
    },
  },
})
