import service from '../config'
import { handleError } from '../errorHandler'
import { getSimpleDateFormatString } from '@/utils/moment'

export const PROVIDER_TYPE_ALL = 0
export const PROVIDER_TYPE_COZE_CN = 1
export const PROVIDER_TYPE_COZE = 2
export const PROVIDER_TYPE_APP_BUILDER = 3
export const PROVIDER_TYPE_FAST_GPT = 4
export const PROVIDER_TYPE_53AI = 5
export const PROVIDER_TYPE_DIFY = 6
export type ProviderType = typeof PROVIDER_TYPE_ALL | typeof PROVIDER_TYPE_COZE_CN | typeof PROVIDER_TYPE_COZE | typeof PROVIDER_TYPE_53AI | typeof PROVIDER_TYPE_FAST_GPT | typeof PROVIDER_TYPE_APP_BUILDER | typeof PROVIDER_TYPE_DIFY
export const PROVIDER_TYPE_LABEL_MAP = new Map([
  [PROVIDER_TYPE_ALL, 'all'],
  [PROVIDER_TYPE_COZE_CN, 'coze_cn'],
  [PROVIDER_TYPE_COZE, 'coze'],
  [PROVIDER_TYPE_53AI, '53ai'],
  [PROVIDER_TYPE_FAST_GPT, 'fast_gpt'],
  [PROVIDER_TYPE_APP_BUILDER, 'app_builder'],
	[PROVIDER_TYPE_DIFY, 'dify'],
	[1001, 'dify'],
	[1002, '53ai'],
])

export const providerApi = {
	async list({ params = {} }: {
		params: {
			providerType?: ProviderType
		}
	} = {}) {
		params = JSON.parse(JSON.stringify(params))
		const { data = [] } = await service.get('/api/providers', { params }).catch(handleError)
		const list = data.map((item = {}, index) => {
			try {
				item.configs = typeof item.configs === 'string' ? JSON.parse(item.configs) : item.configs || {}
			}
			catch (error) {
				item.configs = {}
			}
			item.created_time = item.created_time ? getSimpleDateFormatString({ date: item.created_time }) : ''
			item.updated_time = item.updated_time ? getSimpleDateFormatString({ date: item.updated_time }) : ''
			item.authed_time = item.authed_time ? getSimpleDateFormatString({ date: item.authed_time }) : ''

			switch (item.provider_type) {
				case PROVIDER_TYPE_APP_BUILDER:
					item.authed_time = item.created_time
					break
			}
			return item
		})
		return list
	},
	async save({ data } = {}) {
		data = {
			provider_type: PROVIDER_TYPE_COZE_CN,
			provider_id: 0,
			name: '',
			access_token: '',
			configs: {},
			...data,
		}
		const provider_id = data.provider_id
		delete data.provider_id
		if (typeof data.configs === 'object') data.configs = JSON.stringify(data.configs)
		const { data: result = {} } = await service[provider_id ? 'put' : 'post'](`/api/providers${provider_id ? `/${provider_id}` : ''}`, data).catch(handleError)
		return result
	},
	async delete({ data: { provider_id } }: { data: { provider_id: number } }) {
		return service.delete(`/api/providers/${provider_id}`).catch(handleError)
	},
}

export default providerApi

export type { providerApi }
