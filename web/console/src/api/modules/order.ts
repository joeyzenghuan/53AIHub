import service from '../config'
import { handleError } from '../errorHandler'
import { getSimpleDateFormatString } from '@/utils/moment'

export const ORDER_STATUS_ALL = -1
export const ORDER_STATUS_NOT_CONFIRM = 1
export const ORDER_STATUS_PENDING = 2
export const ORDER_STATUS_PAID = 3
export const ORDER_STATUS_EXPIRED = 4
export const ORDER_STATUS_LABEL_MAP = new Map([
	[ORDER_STATUS_ALL, 'order.status.all'],
	[ORDER_STATUS_NOT_CONFIRM, 'order.status.not_confirm'],
	[ORDER_STATUS_PENDING, 'order.status.pending'],
	[ORDER_STATUS_PAID, 'order.status.paid'],
	[ORDER_STATUS_EXPIRED, 'order.status.expired'],
])
export type OrderStatus = typeof ORDER_STATUS_ALL | typeof ORDER_STATUS_NOT_CONFIRM | typeof ORDER_STATUS_PENDING | typeof ORDER_STATUS_PAID | typeof ORDER_STATUS_EXPIRED

export const orderApi = {
	async list({ params = {} }: {
		params: {
			status?: number
			pay_type?: number
			keyword?: string
			offset?: number
			limit?: number
		}
	} = {}) {
		params = JSON.parse(JSON.stringify(params))
		if (!params.offset) params.offset = 0
		if (!params.limit) params.limit = 10
		if (!params.keyword) delete params.keyword
		const { data = {} } = await service.get('/api/orders', { params }).catch(handleError)
		const list = (data.orders || []).map((item = {}) => {
			item.created_time = +item.created_time
			item.created_time = getSimpleDateFormatString({ date: item.created_time, format: 'YYYY-MM-DD hh:mm:ss' })
			return item
		})
		return {
			...data,
			list
		}
  },
}

export default orderApi

export type { orderApi }
