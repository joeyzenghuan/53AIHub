import service from '../config'
import { handleError } from '../errorHandler'


export const agent = {
  async list() {
    return service.get(`/api/agents/current`).catch(handleError)
  },
  internalList() {
    return service.get(`/api/agents/internal_users`).catch(handleError)
  },
  available(params: {
    offset?: number
    limit?: number
  } = {}) {
    return service.get(`/api/agents/available`, { params }).catch(handleError)
  }
}
export default agent

