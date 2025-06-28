import axios, { type AxiosResponse, type AxiosRequestConfig } from 'axios'

import { generateSignParams, generateIbosSignParams } from './signature'
import { ResponseCode } from './code'
import { API_HOST } from './host'

// 定义重试配置接口
interface RetryConfig {
  retry: number
  retryDelay: number
  count?: number
}

// 扩展 AxiosRequestConfig 类型
declare module 'axios' {
  export interface AxiosRequestConfig {
    retryConfig?: RetryConfig
    ibos_sign?: boolean
    sign?: boolean
  }
}

const service = axios.create({
  baseURL: API_HOST,
})

// 默认重试配置
const defaultRetryConfig: RetryConfig = {
  count: 0,
  retry: 3, // 最大重试次数
  retryDelay: 1000, // 重试延迟时间（毫秒）
}

service.interceptors.request.use(
  (config) => {
    config.params = config.params || {}
    const access_token = config.params.access_token || localStorage.getItem('access_token') || ''
    if (access_token) config.headers.set('Authorization', `Bearer ${access_token}`)

    if (config.ibos_sign) {
      const { token, platform, createtime } = generateIbosSignParams()
      config.headers.set('token', token)
      config.headers.set('platform', platform)
      config.headers.set('createtime', createtime)
    }
    if (config.sign) {
      config.params = generateSignParams(config.params)
    }

    // 初始化重试配置
    config.retryConfig = {
      ...defaultRetryConfig,
      ...(config.retryConfig || {})
    }

    return config
  },
  (error) => {
    return Promise.reject(error.response)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const data = response.data || {}
    if ([ResponseCode.FORBIDDEN_ERROR].includes(Number(data.code))) {
      return Promise.reject(data)
    }
    if ([200, 201, 204].includes(response.status))
      return response.data
    throw new Error(response.status.toString())
  },
  async (error) => {
    const config = error.config

    // 如果没有重试配置，直接拒绝
    if (!config || !config.retryConfig) {
      return Promise.reject(error)
    }

    const { retry, retryDelay, count = 0 } = config.retryConfig

    // 如果已经达到最大重试次数，拒绝请求
    if (count >= retry) {
      return Promise.reject(error)
    }

    // 增加重试计数
    config.retryConfig.count = count + 1

    // 延迟重试
    await new Promise(resolve => setTimeout(resolve, retryDelay))

    // 重试请求
    return service(config)
  },
)

// 封装通用请求方法
function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  return service(config).then(res => res.data)
}

// 导出常用HTTP方法
export const get = <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return request({ ...config, method: 'get', url })
}

export const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  return request({ ...config, method: 'post', url, data })
}

export const put = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  return request({ ...config, method: 'put', url, data })
}

export const del = <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return request({ ...config, method: 'delete', url })
}

export const patch = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  return request({ ...config, method: 'patch', url, data })
}

export default service
