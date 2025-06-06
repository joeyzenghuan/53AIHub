import axios, { type AxiosResponse } from 'axios'
import { generateSignParams } from './signature'
import md5 from '@/utils/md5'
import { qyy_host } from '@/utils/config'

const service = axios.create({
  baseURL: '',
})

service.interceptors.request.use(
  (config) => {
    const authkey = 'c3a39e4eeacf4542d6a488e19037fa45'
    const platform = 'web'
    const createtime = Math.floor(Date.now() / 1000)
    const token = md5(authkey + createtime)
    config.params = config.params || {}

    const access_token = config.params.access_token || localStorage.getItem('access_token') || ''
    if (access_token)
      config.headers.set('Authorization', access_token)

    if (config.url.includes(qyy_host)) {
      config.headers.set('token', token)
      config.headers.set('platform', platform)
      config.headers.set('createtime', createtime)
      if (config.url.includes('sendcode'))
        config.params = generateSignParams(config.data)
    }

    if (config.extra_headers && Object.keys(config.extra_headers).length) {
      Object.keys(config.extra_headers).forEach((key) => {
        config.headers.set(key, config.extra_headers[key])
      })
    }

    return config
  },
  (error) => {
    return Promise.reject(error.response)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if ([200, 201, 204].includes(response.status))
      return response

    throw new Error(response.status.toString())
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
