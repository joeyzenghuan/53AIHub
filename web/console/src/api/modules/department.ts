import service from '../config'
import { handleError } from '../errorHandler'
import { useEnterpriseStore } from '@/stores'

export const getRootDepartmentData = async () => {
	const enterpriseStore = useEnterpriseStore()
	if (!enterpriseStore.info.eid) await enterpriseStore.loadSelfInfo()
	return {
		did: 0,
		value: 0,
		name: enterpriseStore.info.name,
		label: enterpriseStore.info.name,
		index: 0,
		lastIndex: 0,
		children: []
	}
}

export const departmentApi = {
	async fetch_department_tree(params: {
		keyword?: string
		offset?: number
		limit?: number
	}) {
		let { data: { tree: treeData = [] } } = await service.get('/api/departments/tree', { params }).catch(handleError)
		const findData = (data: any = {}) => {
			data = {
				...data,
				children: data.children || [],
				...(data.department || {}),
			}
			data.label = data.name || ''
			data.value = data.did || 0
			data.children = data.children.map((item, index) => {
				item = findData(item)
				item.index = index
				item.lastIndex = data.children.length - 1
				return item
			})
			return data
		}
		treeData = treeData.map((item, index) => {
			item = findData(item)
			item.index = index
			item.lastIndex = treeData.length - 1
			return item
		})
		const rootData = await getRootDepartmentData()
		return [{
			...rootData,
			children: JSON.parse(JSON.stringify(treeData))
		}]
	},
	async save(data: {
		did?: number
		name: string
		pdid?: number
		sort?: number
	}) {
		data = JSON.parse(JSON.stringify(data))
		const did = data.did || 0
		delete data.did
		if (typeof data.sort === 'undefined') data.sort = 999999
		if (!data.pdid) data.pdid = 0
		return await service[did ? 'put' : 'post'](`/api/departments${did ? `/${did}` : ''}`, data).catch(handleError)
	},

	async delete(did: number) {
		return await service.delete(`/api/departments/${did}`).catch(handleError)
	}
}

export default departmentApi

export type { departmentApi }
