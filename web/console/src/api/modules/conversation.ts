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
    const { agent_id } = params
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
    const { user_id } = params
    delete params.user_id
    return service.get(`/api/users/${user_id}/conversations`, { params }).catch(handleError)
  },
  fetch_conversation_detail(conversation_id: number) {
    return service.get(`/api/conversations/${conversation_id}`).catch(handleError)
  },
  workflow: {
    run(
      data: {
        conversation_id: number
        model: string
        parameters: {
          [key: string]: any
        }
        stream: boolean
      },
      options: {
        responseType: 'stream'
        onDownloadProgress: (e: any) => void
        signal: AbortSignal
      }
    ) {
      return service.post('/v1/workflow/run', data, options).catch(handleError)
    },
  },
}

export default conversationApi
