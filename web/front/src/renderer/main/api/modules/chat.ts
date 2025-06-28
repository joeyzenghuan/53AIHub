import type { AxiosRequestConfig } from 'axios'
import service from '../config'
import { handleError } from '../errorHandler'

export const chat = {
  completions(data: Conversation.Sender, config: AxiosRequestConfig) {
    return service.post(`/v1/chat/completions`, data, config).catch(handleError)
  },
}

export default chat

