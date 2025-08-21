import { ElMessage } from 'element-plus'

import type { ResponseStatus } from './code'
import {
  ERROR_MESSAGES,
  RESPONSE_CODE_MESSAGE_MAP,
  RESPONSE_DATA_MESSAGE_MAP,
  RESPONSE_MESSAGE_MAP,
  ResponseCode,
} from './code'

// 定义错误响应接口
interface ErrorResponse {
  status?: ResponseStatus
  response?: {
    status?: ResponseStatus
    data?: {
      code?: ResponseCode
      message?: string
      [key: string]: unknown
    }
  }
  message?: string
}

// 统一错误处理
export function handleError(error: ErrorResponse): Promise<never> {
  const status = error.response?.status || 500
  let resData = error.response?.data
  try {
    if (resData && typeof resData === 'string') {
      resData = JSON.parse(resData)
    }
  } catch (error) {
    resData = {}
  }
  const code = resData?.code
  const data = resData?.data
  let message = resData?.message

  const messageMatch = RESPONSE_MESSAGE_MAP.get(message || '')
  if (messageMatch) {
    if (messageMatch === 'not_tip') message = ''
    else message = window.$t(messageMatch)
  } else {
    // 优化消息获取逻辑
    message =
      (data !== undefined && RESPONSE_DATA_MESSAGE_MAP.get(data)
        ? window.$t(RESPONSE_DATA_MESSAGE_MAP.get(data))
        : '') ||
      message ||
      error.message ||
      (code !== undefined && RESPONSE_CODE_MESSAGE_MAP.get(code)
        ? window.$t(RESPONSE_CODE_MESSAGE_MAP.get(code))
        : '') ||
      (ERROR_MESSAGES.get(status) ? window.$t(ERROR_MESSAGES.get(status)) : '') ||
      error.message ||
      window.$t('response_message.unknown_error')
  }
  if (message) ElMessage.warning(message)

  if (code === ResponseCode.TOKEN_EXPIRED_ERROR) {
    localStorage.removeItem('access_token')
    window.location.reload(true)
  }
  return Promise.reject(error)
}
