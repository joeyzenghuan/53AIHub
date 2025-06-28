import { ElMessage } from 'element-plus'


import { ResponseCode, ReseponseMessage, ResponseStatus, RESPONSE_MESSAGE_MAP, RESPONSE_CODE_MESSAGE_MAP, ERROR_MESSAGES } from './code'

// 定义错误响应接口
interface ErrorResponse {
  status?: ResponseStatus
  response?: {
    status?: ResponseStatus
    data?: {
      code?: ResponseCode
      message?: string
    }
  }
  message?: string
}


// 统一错误处理
export function handleError(error: ErrorResponse): Promise<never> {
  if (error.message === ReseponseMessage.Canceled) {
    return Promise.reject(error)
  }
  const response = error.response || {}
  const data = response.data || error || {}
  const status = response.status || 500
  const code = data.code
  let message = data.message
  const messageMatch = RESPONSE_MESSAGE_MAP.get(message || '')
  if (messageMatch) {
    if (messageMatch === 'not_tip') {
      message = ''
    } else {
      message = window.$t(messageMatch)
    }
  } else {
    // 优化消息获取逻辑
    message = (code !== undefined && RESPONSE_CODE_MESSAGE_MAP.get(code) ? window.$t(RESPONSE_CODE_MESSAGE_MAP.get(code)!) : '') ||
      ERROR_MESSAGES.get(status) ||
      error.message || window.$t('response_message.unknown_error')

  }
  if (message) {
    ElMessage.error(message)
  }
  if (code === ResponseCode.TOKEN_EXPIRED_ERROR) {
    localStorage.removeItem('access_token')
    location.reload(true)
  }
  return Promise.reject(error)
}
