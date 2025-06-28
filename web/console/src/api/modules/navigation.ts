import service from '../config'
import { handleError } from '../errorHandler'

export enum NAVIGATION_TYPE {
	SYSTEM = 1,
	EXTERNAL = 2,
	CUSTOM = 3,
}
export type NavigationType = keyof typeof NAVIGATION_TYPE
export const NAVIGATION_TYPE_LABEL_MAP = new Map([
	[NAVIGATION_TYPE.SYSTEM, 'navigation.type.system'],
	[NAVIGATION_TYPE.EXTERNAL, 'navigation.type.external'],
	[NAVIGATION_TYPE.CUSTOM, 'navigation.type.custom'],
])
export enum NAVIGATION_TARGET {
	SELF = 1,
	BLANK = 2,
}
export type NavigationTarget = keyof typeof NAVIGATION_TARGET
export const NAVIGATION_TARGET_LABEL_MAP = new Map([
	[NAVIGATION_TARGET.SELF, 'navigation.target.self'],
	[NAVIGATION_TARGET.BLANK, 'navigation.target.blank'],
])

export const INIT_DATA_LIST = [
	{
		jump_path: '/index',
		name: '首页',
		sort: 9999,
		config: JSON.stringify({
			target: NAVIGATION_TARGET.SELF,
			seo_title: '',
			seo_keywords: '',
			seo_description: '',
		}),
	},
	{
		jump_path: '/agent',
		name: '智能体',
		sort: 9998,
		config: JSON.stringify({
			target: NAVIGATION_TARGET.SELF,
			seo_title: '',
			seo_keywords: '',
			seo_description: '',
		}),
	},
	{
		jump_path: '/prompt',
		name: '提示词',
		sort: 9997,
		config: JSON.stringify({
			target: NAVIGATION_TARGET.SELF,
			seo_title: '',
			seo_keywords: '',
			seo_description: '',
		}),
	},
	{
		jump_path: '/toolkit',
		name: 'AI工具',
		sort: 9996,
		config: JSON.stringify({
			target: NAVIGATION_TARGET.SELF,
			seo_title: '',
			seo_keywords: '',
			seo_description: '',
		}),
	},
]

const getFormatData = (data = {}) => {
	try {
		data.config = JSON.parse(data.config)
	} catch (error) {
		data.config = {}
	}
	data.type = +data.type || +data.config.type || NAVIGATION_TYPE.SYSTEM
	data.type_label = NAVIGATION_TYPE_LABEL_MAP.get(data.type)
	data.target = +data.target || +data.config.target || NAVIGATION_TARGET.SELF
	data.target_label = NAVIGATION_TARGET_LABEL_MAP.get(data.target)
	return data
}

export const navigationApi = {
	async list(
		params: {
			keyword?: string
			offset?: number
			limit?: number
		}
	) {
		params = JSON.parse(JSON.stringify(params))
		let { data = [] } = await service.get(`/api/navigations`, { params }).catch(handleError)
		data = data.map(item => getFormatData(item))
		return { total: data.length, list: data }
	},
	init() {
		return service.post(`/api/navigations/init`, [...INIT_DATA_LIST]).catch(handleError)
	},
	async detail({ navigation_id }: { navigation_id: number }) {
		const { data = {} } = await service.get(`/api/navigations/${navigation_id}`).catch(handleError)
		return data
	},
	async save(data: {
		navigation_id?: string
		type: NavigationType,
		name: string,
		jump_path: string,
		sort: number,
		config: {
			target: NavigationTarget,
			seo_title: string,
			seo_keywords: string,
			seo_description: string,
		}
	}) {
		const navigation_id = +data.navigation_id || 0
		delete data.navigation_id
		if (data.config && typeof data.config === 'object') data.config = JSON.stringify(data.config)
		const { data: resultData = {} } = await service[navigation_id ? 'put' : 'post'](`/api/navigations${navigation_id ? `/${navigation_id}` : ''}`, data).catch(handleError)
		return resultData
	},
	async delete({ navigation_id }: { navigation_id: number }) {
		return service.delete(`/api/navigations/${navigation_id}`).catch(handleError)
	},
	async update_status({ navigation_id, status }: { navigation_id: number, status: 0 | 1 }) {
		return service.patch(`/api/navigations/${navigation_id}/status`, { status }).catch(handleError)
	},
	async update_sort(sortList: { id: number, sort: number }[]) {
		return service.post(`/api/navigations/sort`, sortList).catch(handleError)
	},
	async save_content({ navigation_id, html_content }: { navigation_id: number, html_content: string }) {
		return service.post(`/api/navigations/${navigation_id}/content`, { html_content }).catch(handleError)
	},
}

export default navigationApi

export type { navigationApi }
