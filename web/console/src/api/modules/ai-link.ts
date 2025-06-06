import service from '../config'
import { handleError } from '../errorHandler'
import { getSimpleDateFormatString } from '@/utils/moment'
import { PROVIDER_TYPE_DIFY, PROVIDER_TYPE_53AI } from './provider'


export const getFormatAiLinkData = (data = {}) => {
	data.ai_link_id = data.id = +data.id || 0
  return data
}

export const aiLinkApi = {
	async list({ params = {} }: {
		params: {
			group_id?: number
			keyword?: string
		}
	} = {}) {
		params = JSON.parse(JSON.stringify(params))
		if (!+params.group_id || +params.group_id < 0) delete params.group_id
		if (!params.keyword) delete params.keyword
		const { data = [] } = await service.get('/api/ai_links', { params }).catch(handleError)
		const list = data.map((item = {}) => getFormatAiLinkData(item))
		return list
	},
	async save({ data = {} } = {}) {
		data = {
			ai_link_id: 0,
			logo: '',
			name: '',
			url: '',
			description: '',
			group_id: 0,
			sort: 0,
			...data,
		}
		const ai_link_id = data.ai_link_id
		delete data.ai_link_id
		const { data: resultData = {} } = await service[ai_link_id ? 'put' : 'post'](`/api/ai_links${ai_link_id ? `/${ai_link_id}` : ''}`, data).catch(handleError)
		return getFormatAiLinkData(resultData)
	},
	async delete({ data: { ai_link_id } }: { data: { ai_link_id: number } }) {
		return service.delete(`/api/ai_links/${ai_link_id}`).catch(handleError)
	},
}

export default aiLinkApi

export type { aiLinkApi }
