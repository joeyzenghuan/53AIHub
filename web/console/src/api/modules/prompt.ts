import service from '../config'
import { handleError } from '../errorHandler'

export const promptApi = {
	async list({ params = {} }: {
		params: {
			keyword?: string
			group_id?: string
			offset?: number
			limit?: number
		}
	} = {}) {
		params = JSON.parse(JSON.stringify(params))
		const { data: { count = 0, prompts = [] } = {} } = await service.get(`/api/prompts/admin`, { params }).catch(handleError)
		return { total: +count || 0, list: prompts }
	},
	async detail({ prompt_id }: { prompt_id: number }) {
		const { data = {} } = await service.get(`/api/prompts/${prompt_id}`).catch(handleError)
		return data
	},
	async save(data: {
		prompt_id?: string
		group_ids?: (string | number) [],
		name?: string,
		description?: string,
		content?: string,
		subscription_group_ids?: (string | number) [],
		user_group_ids?: (string | number)[],
		sort?: number,
		status?: 0 | 1 | undefined,
		custom_config?: any
	}) {
		const prompt_id = +data.prompt_id || 0
		delete data.prompt_id
		if (data.custom_config && typeof data.custom_config === 'object') data.custom_config = JSON.stringify(data.custom_config)
		if (!data.content) data.content = ' '
		const { data: resultData = {} } = await service[prompt_id ? 'put' : 'post'](`/api/prompts/${prompt_id ? `${prompt_id}` : 'system'}`, data).catch(handleError)
		return resultData
	},
	async delete({ prompt_id }: { prompt_id: number }) {
		return service.delete(`/api/prompts/${prompt_id}`).catch(handleError)
	},
	async update_status({ prompt_id, status }: { prompt_id: number, status: 0 | 1 }) {
		return service.patch(`/api/prompts/${prompt_id}/status`, { status }).catch(handleError)
	},
}

export default promptApi

export type { promptApi }
