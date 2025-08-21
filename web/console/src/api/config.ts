import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { generateIbosSignParams, generateSignParams } from './signature'
import { api_host } from '@/utils/config'
import { ResponseStatus } from './code'

// 定义重试配置接口  TODO: 需要优化
interface RetryConfig {
  retry: number
  retryDelay: number
  count?: number
}
// 扩展 AxiosRequestConfig 类型
declare module 'axios' {
  export interface AxiosRequestConfig {
    // 重试配置
    retryConfig?: RetryConfig
    // ibos签名
    ibos_sign?: boolean
    // 发送验证码签名
    code_sign?: boolean
    // 需要身份验证
    requiresAuth?: boolean
  }
}

const service = axios.create({
  baseURL: api_host,
})

service.interceptors.request.use(
  config => {
    config.params = config.params || {}
    const access_token = config.params.access_token || localStorage.getItem('access_token') || ''
    if (access_token) config.headers.set('Authorization', `Bearer ${access_token}`)

    if (config.ibos_sign) {
      const { token, platform, createtime } = generateIbosSignParams()
      config.headers.set('token', token)
      config.headers.set('platform', platform)
      config.headers.set('createtime', createtime)
    }
    if (config.code_sign) config.params = generateSignParams(config.params)

    return config
  },
  error => {
    return Promise.reject(error.response)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (
      [ResponseStatus.SUCCESS, ResponseStatus.CREATED, ResponseStatus.NO_CONTENT].includes(
        response.status
      )
    )
      return response.data

    throw new Error(response.status.toString())
  },
  error => {
    return Promise.reject(error)
  }
)

// 封装通用请求方法
function request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
  return service(config).then(res => res.data)
}

// 导出常用HTTP方法
export const get = <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return request({ ...config, method: 'get', url })
}

export const post = <T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  return request({ ...config, method: 'post', url, data })
}

export const put = <T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  return request({ ...config, method: 'put', url, data })
}

export const del = <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return request({ ...config, method: 'delete', url })
}

export const patch = <T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  return request({ ...config, method: 'patch', url, data })
}

export default service
