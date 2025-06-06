import { defineStore } from 'pinia'
import { useDefaultUser, useUserStore } from './user'
import { deepCopy } from '@/utils'
import api from '@/apis'
import { getSimpleDateFormatString } from '@/utils/moment'
import eventBus from '@/utils/event-bus'

export const WEBSITE_TYPE_INDEPENDENT = 'independent'
export const WEBSITE_TYPE_ENTERPRISE = 'enterprise'
export const WEBSITE_TYPE_INDUSTRY = 'industry'
export const WEBSITE_TYPE_LABEL_MAP = new Map([
  [WEBSITE_TYPE_INDEPENDENT, 'module.website_type_independent'],
  [WEBSITE_TYPE_ENTERPRISE, 'module.website_type_enterprise'],
  [WEBSITE_TYPE_INDUSTRY, 'module.website_type_industry'],
])
export const WEBSITE_TYPE_DESC_MAP = new Map([
  [WEBSITE_TYPE_INDEPENDENT, 'module.website_type_independent_desc'],
  [WEBSITE_TYPE_ENTERPRISE, 'module.website_type_enterprise_desc'],
  [WEBSITE_TYPE_INDUSTRY, 'module.website_type_industry_desc'],
])

export const WEBSITE_VERSION_FREE = 'free'
export const WEBSITE_VERSION_STANDARD = 'standard'
export const WEBSITE_VERSION_ENTERPRISE = 'enterprise'
export const WEBSITE_VERSION_VALUE_MAP = {
  1: WEBSITE_VERSION_FREE,
  2: WEBSITE_VERSION_STANDARD,
  3: WEBSITE_VERSION_ENTERPRISE,
}

export const default_website_logo = `//${location.host}${location.pathname}/images/default_website_logo.png`

export const useEnterpriseStore = defineStore('enterprise-store', {
  state: () => ({
    info: deepCopy({}),
  }),
  actions: {
    getFormatEnterpriseData(data = {}) {
      data.apply = data.apply || data.apply_info || {}
      data.domains = data.domains || []
      data.enterprise = data.enterprise || {}
      data = {
        ...data,
        ...data.enterprise,
      }
      data.eid = data.eid || data.apply.eid || data.enterprise.id || ''
      data.logo = data.logo || data.enterprise.logo || default_website_logo
      data.description = data.description || data.enterprise.description || ''
      data.domain = data.domain || (data.domains[0] || {}).domain || ''
      if (data.domain)
        data.domain = `http://${data.domain.replace(/^https?:\/\//, '')}`
      data.apply_id = data.apply.apply_id || data.apply.id || ''
      data.apply_name = data.apply.enterprise_name || ''
      data.name = data.name || data.enterprise.display_name || data.apply_name || ''
      data.is_process = data.apply.status == 0
			data.is_reject = data.apply.status == 2
			data.reject_reason = data.apply.reject_reason || data.apply.reason || ''
      data.expired_time = (data.apply.expired_time || 0)
			data.is_expired = data.expired_time < Date.now()
      data.expired_time = getSimpleDateFormatString({ date: new Date(data.expired_time) })
      data.created_time = (data.enterprise.created_time || 0)
      data.created_time = getSimpleDateFormatString({ date: new Date(data.created_time) })
      data.version = +data.version || +data.apply.version || 1
			data.version = WEBSITE_VERSION_VALUE_MAP[data.version] || WEBSITE_VERSION_FREE
			data.is_loading = false

			data.is_independent = data.type === WEBSITE_TYPE_INDEPENDENT
			data.is_enterprise = data.type === WEBSITE_TYPE_ENTERPRISE
			data.is_industry = data.type === WEBSITE_TYPE_INDUSTRY

      return data
    },
    //  (-1 for all) 0:待审核 1:已通过 2:已拒绝
    async loadListData({ data: { status = -1, offset = 0, limit = 500 }, hideError = false }: { data: { status: -1 | 0 | 1 | 2; offset: number; limit: number }; hideError: boolean }) {
      const { data: { count = 0, details = [] } = {} } = await api.enterprise.saas_list({ data: { status, offset, limit }, hideError })
      const list = details.map((item = {}) => this.getFormatEnterpriseData(item))
      return { count, list }
    },
    async apply({ data: { contact_name = '', enterprise_name = '', email = '', phone = '' }, hideError = false }: { data: { contact_name: string; enterprise_name: string; email: string; phone: string }; hideError: boolean }) {
      return api.enterprise.saas_apply({ data: { contact_name, enterprise_name, email, phone }, hideError })
    },
    async loadDetailData({ data: { eid = '' }, hideError = false }: { data: { eid: string }; hideError: boolean }) {
      const { data: { access_token = '', enterprise = {} } = {} } = await api.enterprise.saas_detail({ data: { eid }, extra_headers: { 'X-My-Id': eid }, hideError })
      if (access_token) {
        const user_store = useUserStore()
        user_store.setAccessToken(access_token)
        user_store.setEid(eid)
      }
      return this.getFormatEnterpriseData(enterprise)
    },
    async loadSelfInfo() {
      const user_info = useDefaultUser()
      const is_invalid_user = !user_info.access_token || !user_info.eid
      if (is_invalid_user)
        return this
      const { data: { is_saas = false } = {} } = await api.enterprise.is_saas()
      const user_store = useUserStore()
      user_store.setIsSaasLogin(is_saas)
      const { data = {} } = await api.enterprise[is_saas ? 'saas_self_info' : 'self_info']()
			this.info = this.getFormatEnterpriseData(data)

			const link = document.querySelector('link[rel="icon"]') || document.createElement('link')
			link.rel = 'icon'
      link.href = this.info.ico || default_website_logo
			if (!document.querySelector('link[rel="icon"]')) document.head.appendChild(link)

			eventBus.emit('enterprise-info-loaded', this.info)
      return this
    },
    async loadHomeInfo() {
      const { data = {} } = await api.enterprise.home_info()
      return data
    },
    async update({ data = {} }: {
      data: {
        eid: string
        logo: string
        display_name: string
        language: string
        description: string
        layout_type: 'portal' | 'doubao' | 'mita' | 'kimi' | 'independent'
        template_type: 'loose' | 'center'
      }
    }) {
      data = {
        eid: 0,
        logo: '',
        display_name: '',
        language: 'zh-cn',
        description: '',
        layout_type: 'portal',
        template_type: 'loose',
        domain: '',
        slogan: '',
        ...data,
      }
      return api.enterprise.update({ data })
    },
  },
})
