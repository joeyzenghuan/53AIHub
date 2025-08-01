import service from '../config'
import { handleError } from '../errorHandler'

const checkAccountMap = new Map()

export const authApi = {
  // async list({ params = {} }: {
  // 	params: {
  // 		group_id?: number
  // 		keyword?: string
  // 	}
  // } = {}) {
  // 	params = JSON.parse(JSON.stringify(params))
  // 	if (!+params.group_id || +params.group_id < 0) delete params.group_id
  // 	if (!params.keyword) delete params.keyword
  // 	const { data = [] } = await service.get('/api/ai_links', { params }).catch(handleError)
  // 	const list = data.map((item = {}) => getFormatAiLinkData(item))
  // 	return list
  // },
  async checkAccount({ data = {} } = {}) {
    data = {
      account: '',
      ...data
    }
    if (checkAccountMap.has(data.account)) return checkAccountMap.get(data.account)
    const { data: resultData = {} } = await service
      .post(`/api/saas/auth/check_account`, data)
      .catch(handleError)
    checkAccountMap.set(data.account, resultData)
    return resultData
  }
  // async delete({ data: { ai_link_id } }: { data: { ai_link_id: number } }) {
  // 	return service.delete(`/api/ai_links/${ai_link_id}`).catch(handleError)
  // },
}

export default authApi
