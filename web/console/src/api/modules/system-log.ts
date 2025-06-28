import service from '../config'
import { handleError } from '../errorHandler'

export const systemLogApi = {
  list(params: {
    offset?: number
    limit?: number
    user_id?: number
    start_time?: string
    end_time?: string
    module?: string
    action?: string
  }) {
    return service.get('/api/system_logs', { params }).catch(handleError)
  },
  create(data: {
    action: number
    content: string
  }) {
    return service.post('/api/users/system_log', data).catch(() => ({}))
  },
  actions() {
    return service.get('/api/system_logs/actions').catch(handleError)
  },
  modules() {
    return service.get('/api/system_logs/modules').catch(handleError)
  },
}

export default systemLogApi
