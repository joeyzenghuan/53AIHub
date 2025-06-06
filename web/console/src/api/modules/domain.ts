import service from '../config'
import { handleError } from '../errorHandler'
import { useEnterpriseStore } from '@/stores/modules/enterprise'

export const INDEPENDENT_RESOLVE_TYPE_CNAME = 1
export const INDEPENDENT_RESOLVE_TYPE_CUSTOM = 2
export type IndependentResolveType = typeof INDEPENDENT_RESOLVE_TYPE_CNAME | typeof INDEPENDENT_RESOLVE_TYPE_CUSTOM
export const INDEPENDENT_SSL_CERT_TYPE_53AI = 1
export const INDEPENDENT_SSL_CERT_TYPE_CUSTOM = 2
export type IndependentSslCertType = typeof INDEPENDENT_SSL_CERT_TYPE_53AI | typeof INDEPENDENT_SSL_CERT_TYPE_CUSTOM

export const domainApi = {
  saas_list() {
    return service.get('/api/saas/domains').catch(handleError)
  },
  saas_create(data: { domain: string }) {
    return service.post('/api/saas/domains/exclusive', data).catch(handleError)
  },
  saas_update(domain_id: number, data: { domain: string }) {
    return service.put(`/api/saas/domains/exclusive/${domain_id}`, data).catch(handleError)
	},
	async saas_exclusive_save(domain_id: number, data: { domain: string }) {
		const result = await (domain_id ? service.put(`/api/saas/domains/exclusive/${domain_id}`, data).catch(handleError) : service.post('/api/saas/domains/exclusive', data).catch(handleError))
		const enterprise_store = useEnterpriseStore()
		enterprise_store.loadSelfInfo()
		return result
	},
	async saas_independent_save(domain_id: number, data: {
		domain: string, config: {
			resolve_type: IndependentResolveType
			enable_https: boolean
			force_https: boolean
			ssl_cert_type: IndependentSslCertType
			ssl_certificate: string
			ssl_private_key: string
			use_subdir: boolean
			subdir: string
		}
	}) {
		const result = await (domain_id ? service.put(`/api/saas/domains/independent/${domain_id}`, data).catch(handleError) : service.post('/api/saas/domains/independent', data).catch(handleError))
		const enterprise_store = useEnterpriseStore()
		enterprise_store.loadSelfInfo()
		return result
	},
	async saas_independent_delete(domain_id: number) {
		return service.delete(`/api/saas/domains/independent/${domain_id}`).catch(handleError)
	}
}

export default domainApi

export type { domainApi }
