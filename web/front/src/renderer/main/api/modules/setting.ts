import service from '../config'
import { handleError } from '../errorHandler'
import { getSimpleDateFormatString } from '@/utils/moment'

export const PAYMENT_TYPE_WECHAT = 1
export const PAYMENT_TYPE_MANUAL = 2
export const PAYMENT_TYPE_PAYPAL = 3
export const PAYMENT_TYPE_LABEL_MAP = {
  [PAYMENT_TYPE_WECHAT]: 'wechat_pay',
  [PAYMENT_TYPE_MANUAL]: 'manual_pay',
  [PAYMENT_TYPE_PAYPAL]: 'paypal',
}

export const settingApi = {
  group: {
    get(group_name: 'third_party_statistic') {
      return service.get(`/api/settings/group/${group_name}`).catch(handleError)
    }
  },
  payment: {
    async get() {
      const { data: { pay_settings = [] } = {} } = await service.get('/api/pay_settings').catch(handleError)
      return pay_settings.map((item = {}) => {
        item.pay_setting_id = +item.pay_setting_id || 0
        item.pay_type = +item.pay_type || 0
        item.pay_label = PAYMENT_TYPE_LABEL_MAP[item.pay_type]
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
    }
  }
}

export default settingApi
