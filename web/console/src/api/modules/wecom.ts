import service from '../config'
import { handleError } from '../errorHandler'

export const wecomApi = {
  jssdk_config(suite_id: number, params: { url: string }) {
    return service.get(`/api/saas/wecom/callback/jssdk-config/${suite_id}`, { params }).catch(handleError)
  },
  contact_search(data: { keyword: string }) {
    const suite_id = import.meta.env.VITE_GLOB_SUITEID
    return service.post(`/api/saas/wecom/callback/contact-search/${suite_id}`, {
      limit: 10,
      query_word: data.keyword,
    }).catch(handleError)
  },
}

export default wecomApi
