import service from '../config'
import { handleError } from '../errorHandler'
import { PAYMENT_TYPE_WECHAT, PAYMENT_TYPE_MANUAL, PAYMENT_TYPE_PAYPAL } from './setting'
import md5 from '@/utils/md5'

export const CURRENCY_SYMBOL_MAP = new Map([
  ['CNY', '¥'],
  ['USD', '$'],
  ['EUR', '€'],
  ['GBP', '£'],
  ['JPY', '¥'],
])


export const getOrderCache = ({ key = '' } = {}) => {
  let temporary_order_data = JSON.parse(localStorage.getItem('temporary_order_data') || '{}')
  let order_data = temporary_order_data[key]
  if (!order_data) return temporary_order_data
  if (!Number(order_data.payment_expired_time) || Number(order_data.payment_expired_time) < Date.now()) {
    setOrderCache({ key, value: {} })
    return {}
  }
  return order_data
}
export const setOrderCache = ({ key = '', value = {} } = {}) => {
  let temporary_order_data = getOrderCache()
  temporary_order_data[key] = value
  localStorage.setItem('temporary_order_data', JSON.stringify(temporary_order_data))
}

let subscription_list = []
export const subscriptionApi = {
  async list({ reset = false } = {}) {
    if (reset) subscription_list = []
    if (subscription_list.length) return { count: subscription_list.length, list: subscription_list }
    const { data: { count = 0, settings = [] } = {} } = await service.get(`/api/subscriptions/settings`).catch(handleError)
    subscription_list = settings.map((item = {}, index) => {
      item.group = item.group || {}
      item.setting = item.setting || {}
      item = {
        ...item,
        ...item.group,
        ...item.setting,
      }
      item.logo = item.logo || item.setting.logo_url || ''
      item.delete = Boolean(item.delete) || false
      item.group_id = item.group_id || 0
      item.setting_id = item.setting_id || 0
      item.sort = item.sort || (settings.length - index) || 0
      item.group_name = item.group_name || ''
      item.logo_url = item.logo_url || ''
      item.ai_enabled = Boolean(item.ai_enabled) || false
      item.relations = item.relations || []
      item.year_info = JSON.parse(JSON.stringify(item.relations.find((row = {}) => row.type == 1 && row.time_unit === 'year') || {}))
      item.year_info.amount = (Number(item.year_info.amount || 0) / 100).toFixed(2).replace('.00', '')
      item.year_info.currency = item.year_info.currency || 'CNY'
      item.year_info.currency_symbol = CURRENCY_SYMBOL_MAP.get(item.year_info.currency) || '¥'
      item.year_info.relation_id = item.year_info.relation_id || 0
      item.year_info.time_unit = item.year_info.time_unit || 'year'
      item.year_info.type = item.year_info.type || 1
      item.month_info = JSON.parse(JSON.stringify(item.relations.find((row = {}) => row.type == 1 && row.time_unit === 'month') || {}))
      item.month_info.amount = (Number(item.month_info.amount || 0) / 100).toFixed(2).replace('.00', '')
      item.month_info.currency = item.month_info.currency || 'CNY'
      item.month_info.currency_symbol = CURRENCY_SYMBOL_MAP.get(item.month_info.currency) || '¥'
      item.month_info.relation_id = item.month_info.relation_id || 0
      item.month_info.time_unit = item.month_info.time_unit || 'month'
      item.month_info.type = item.month_info.type || 1
      item.credit_month_info = JSON.parse(JSON.stringify(item.relations.find((row = {}) => row.type == 2) || {}))
      item.credit_month_info.amount = Number(item.credit_month_info.amount || 0).toFixed(2).replace('.00', '')
      item.credit_month_info.currency = item.credit_month_info.currency || ''
      item.credit_month_info.currency_symbol = CURRENCY_SYMBOL_MAP.get(item.credit_month_info.currency) || ''
      item.credit_month_info.relation_id = item.credit_month_info.relation_id || 0
      item.credit_month_info.time_unit = item.credit_month_info.time_unit || 'month'
      item.credit_month_info.type = item.credit_month_info.type || 2
      item.agents = item.agents || []
      return item
    })
    return {
      count,
      list: subscription_list,
    }
  },
  getFormatOrderData(data = {}) {
    data.order = data.order || {}
    data.payment_info = data.payment_info || {}
    data = {
      ...data,
      ...data.order,
      ...data.payment_info,
    }
    data.order_id = +data.order.id || 0
    data.payment_expired_time = +data.payment_info.expired_time || 0
    if (data.payment_expired_time) data.payment_expired_time -= 1000 * 60 * 10
    data.payment_order_id = data.payment_info.order_id || 0
    return data
  },
  async createOrder({ params = {}, cache_disabled = false }: {
    params?: {
      user_id: number
      nickname: string
      subscription_id: number
      subscription_name: string
      pay_type: PAYMENT_TYPE_WECHAT | PAYMENT_TYPE_MANUAL | PAYMENT_TYPE_PAYPAL
      amount: number
      currency: 'CNY' | 'USD'
      duration: number
      time_unit: 'month' | 'year'
    }
    cache_disabled?: boolean
  } = {}) {
    params = {
      user_id: 0,
      nickname: '',
      subscription_id: 0,
      subscription_name: '',
      pay_type: PAYMENT_TYPE_WECHAT,
      amount: 0,
      currency: 'CNY',
      duration: 0,
      time_unit: 'month',
      ...params
    }
    const storage_key = md5(JSON.stringify(params))
    const order_data = getOrderCache({ key: storage_key })
    if (order_data && +order_data.order_id > 0) return order_data
    let { data = {} } = await service.post(`/api/orders`, params).catch(handleError)
    data = this.getFormatOrderData(data)
    setOrderCache({ key: storage_key, value: data })
    return data
  },
  async getOrderStatus(params: { order_id: string }) {
    const { data = {} } = await service.get(`/api/orders/status/${params.order_id}`).catch(handleError)
    return data
  },
}
export default subscriptionApi
