import service from '../config'
import { handleError } from '../errorHandler'
import type { SystemLogAction } from '@/constants/system-log'

export type SystemLogItem = {
  id: number
  eid: number
  user_id: number
  nickname: string
  module: number
  action: number
  content: string
  ip: string
  action_time: number
}

export type SystemLogListResponse = {
  system_logs: SystemLogItem[]
  count: number
}

export type SystemLogListRequest = {
  offset: number
  limit: number
  user_id?: string | null
  start_time?: number | null
  end_time?: number | null
  module?: number | null
  action?: number | null
}

export type SystemLogCreateRequest = {
  action: SystemLogAction
  content: string
}

export type ActionItem = {
  value: number
  text: string
}

export type ModuleItem = {
  value: number
  text: string
}

export const systemLogApi = {
  list(params: SystemLogListRequest): Promise<SystemLogListResponse> {
    return service
      .get('/api/system_logs', { params })
      .then((res) => res.data)
      .catch(handleError)
  },
  create(data: SystemLogCreateRequest) {
    return service.post('/api/users/system_log', data).catch(() => ({}))
  },
  actions(): Promise<ActionItem[]> {
    return service
      .get('/api/system_logs/actions')
      .then((res) => res.data)
      .catch(handleError)
  },
  modules(): Promise<ModuleItem[]> {
    return service
      .get('/api/system_logs/modules')
      .then((res) => res.data)
      .catch(handleError)
  }
}

export default systemLogApi
