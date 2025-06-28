import service from '../config'
import { handleError } from '../errorHandler'

export const conversationApi = {
  fetch_agent_conversations(params: {
    agent_id: number
    keyword?: string
    created_at_start?: number
    created_at_end?: number
    offset?: number
    limit?: number
  }) {
    const agent_id = params.agent_id
    delete params.agent_id
    return service.get(`/api/agents/${agent_id}/conversations`, { params }).catch(handleError)
  },
  fetch_user_conversations(params: {
    user_id: number
    keyword?: string
    created_at_start?: number
    created_at_end?: number
    offset?: number
    limit?: number
  }) {
    const user_id = params.user_id
    delete params.user_id
    return service.get(`/api/users/${user_id}/conversations`, { params }).catch(handleError)
  },
  fetch_conversation_detail(conversation_id: number) {
    return service.get(`/api/conversations/${conversation_id}`).catch(handleError)
  },
}

export default conversationApi

export type { conversationApi }
