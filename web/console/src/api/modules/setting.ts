import service from '../config'
import { handleError } from '../errorHandler'
import { getSimpleDateFormatString  } from '@/utils/moment'

export const PAYMENT_TYPE_ALL = -1
export const PAYMENT_TYPE_WECHAT = 1
export const PAYMENT_TYPE_MANUAL = 2
export const PAYMENT_TYPE_PAYPAL = 3
export const PAYMENT_TYPE_LABEL_MAP = new Map([
	[PAYMENT_TYPE_ALL, 'payment.type.all'],
	[PAYMENT_TYPE_WECHAT, 'payment.type.wechat'],
	[PAYMENT_TYPE_MANUAL, 'payment.type.manual'],
	[PAYMENT_TYPE_PAYPAL, 'payment.type.paypal'],
])
export type PaymentType = typeof PAYMENT_TYPE_ALL | typeof PAYMENT_TYPE_WECHAT | typeof PAYMENT_TYPE_MANUAL | typeof PAYMENT_TYPE_PAYPAL


export const settingApi = {
  list() {
    return service.get('/api/settings').catch(handleError)
  },
  detail(group_name: string) {
    return service.get(`/api/settings/group/${group_name}`).catch(handleError)
  },
  create(data: { key: string; value: string }) {
    return service.post('/api/settings', data).catch(handleError)
  },
  update(setting_id: number, data: { key: string; value: string }) {
    return service.put(`/api/settings/${setting_id}`, data).catch(handleError)
	},
	async paymentSettingList() {
		const { data: { pay_settings = [] } = {} } = await service.get('/api/pay_settings').catch(handleError)
		return pay_settings.map((item = {}) => {
			item.pay_setting_id = +item.pay_setting_id || 0
			item.pay_type = +item.pay_type || 0
			item.pay_label = PAYMENT_TYPE_LABEL_MAP.get(item.pay_type)
			item.pay_status = !!+item.pay_status
			item.pay_config = item.pay_config || '{}'
			item.pay_config = typeof item.pay_config === 'string' ? JSON.parse(item.pay_config) : item.pay_config
			item.extra_config = item.extra_config || '{}'
			item.extra_config = typeof item.extra_config === 'string' ? JSON.parse(item.extra_config) : item.extra_config
			item.created_time = +item.created_time || 0
			if (item.created_time) item.created_time = getSimpleDateFormatString({ date: item.created_time })
			item.updated_time = +item.updated_time || 0
			if (item.updated_time) item.updated_time = getSimpleDateFormatString({ date: item.updated_time })
			return item
		})
	},
	async savePaymentSetting(data: { pay_setting_id: number; pay_config: any; pay_status?: boolean; pay_type: PAYMENT_TYPE_WECHAT|PAYMENT_TYPE_MANUAL|PAYMENT_TYPE_PAYPAL }) {
		data = {
			pay_setting_id: 0,
			pay_config: {},
			extra_config: {},
			pay_status: true,
			pay_type: PAYMENT_TYPE_WECHAT,
			...data
		}
		const pay_setting_id = data.pay_setting_id
		delete data.pay_setting_id
		data.pay_config = JSON.stringify(data.pay_config || {})
		data.extra_config = JSON.stringify(data.extra_config || {})
		return +pay_setting_id ? service.patch(`/api/pay_settings/${pay_setting_id}/config`, { pay_config: data.pay_config, extra_config: data.extra_config }).catch(handleError) : service.post('/api/pay_settings', data).catch(handleError)
	},
	async updatePaymentStatus(pay_setting_id: number, pay_status: boolean) {
		return service.patch(`/api/pay_settings/${pay_setting_id}/status`, { pay_status }).catch(handleError)
	}
}

export default settingApi

export type { settingApi }
