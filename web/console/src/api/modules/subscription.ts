import service from '../config'
import { handleError } from '../errorHandler'

export const subscriptionApi = {
  async list({ params = {} }: { params: { offset: number; limit: number } } = {}) {
    const { data: { settings = [] } = {} } = await service.get('/api/subscriptions/settings', { params }).catch(handleError)
    const list = settings.map((item = {}, index) => {
      item.group = item.group || {}
      item.setting = item.setting || {}
      item = {
        ...item,
        ...item.group,
        ...item.setting,
      }
      item.delete = Boolean(item.delete) || false
      item.group_id = item.group_id || 0
      item.setting_id = item.setting_id || 0
      item.sort = item.sort || (settings.length - index) || 0
      item.group_name = item.group_name || ''
      item.logo_url = item.logo_url || ''
      item.ai_enabled = Boolean(item.ai_enabled) || false
      item.relations = item.relations || []
      item.year_info = JSON.parse(JSON.stringify(item.relations.find((row = {}) => row.type == 1 && row.time_unit === 'year') || {}))
      item.year_info.amount = (Number(item.year_info.amount || 0) / 100).toFixed(2)
      item.year_info.currency = item.year_info.currency || 'CNY'
      item.year_info.relation_id = item.year_info.relation_id || 0
      item.year_info.time_unit = item.year_info.time_unit || 'year'
      item.year_info.type = item.year_info.type || 1
      item.month_info = JSON.parse(JSON.stringify(item.relations.find((row = {}) => row.type == 1 && row.time_unit === 'month') || {}))
      item.month_info.amount = (Number(item.month_info.amount || 0) / 100).toFixed(2)
      item.month_info.currency = item.month_info.currency || 'CNY'
      item.month_info.relation_id = item.month_info.relation_id || 0
      item.month_info.time_unit = item.month_info.time_unit || 'month'
      item.month_info.type = item.month_info.type || 1
      item.point_month_info = JSON.parse(JSON.stringify(item.relations.find((row = {}) => row.type == 2) || {}))
      item.point_month_info.amount = Number(item.point_month_info.amount || 0)
      item.point_month_info.currency = item.point_month_info.currency || ''
      item.point_month_info.relation_id = item.point_month_info.relation_id || 0
      item.point_month_info.time_unit = item.point_month_info.time_unit || 'month'
      item.point_month_info.type = item.point_month_info.type || 2
      item.agents = item.agents || []
      return item
    })
    return list
  },
  async save({ data } = {}) {
    return service.post('/api/subscriptions/batch', data).catch(handleError)
  },
}

export default subscriptionApi
