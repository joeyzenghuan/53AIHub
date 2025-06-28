import service from '../config'
import { handleError } from '../errorHandler'
import { getSimpleDateFormatString } from '@/utils/moment'
import { PROVIDER_VALUE, type ProviderValueType } from '@/constants/platform'

export { PROVIDER_VALUE, type ProviderValueType }

export const providerApi = {
  async list({ params = {} }: {
    params: {
      providerType?: ProviderValueType
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
        case PROVIDER_VALUE.APP_BUILDER:
        case PROVIDER_VALUE['53AI']:
          item.authed_time = item.created_time
          break
      }
      return item
    })
    return list
  },
  async save({ data } = {}) {
    data = {
      provider_type: PROVIDER_VALUE.COZE_CN,
      provider_id: 0,
      name: '',
      access_token: '',
      configs: {},
      ...data,
    }
    const provider_id = data.provider_id
    delete data.provider_id
    if (typeof data.configs === 'object')
      data.configs = JSON.stringify(data.configs)
    const { data: result = {} } = await service[provider_id ? 'put' : 'post'](`/api/providers${provider_id ? `/${provider_id}` : ''}`, data).catch(handleError)
    return result
  },
  async delete({ data: { provider_id } }: { data: { provider_id: number } }) {
    return service.delete(`/api/providers/${provider_id}`).catch(handleError)
  },
}

export default providerApi
