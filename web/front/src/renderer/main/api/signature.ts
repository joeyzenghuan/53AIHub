import { serialize } from '@/utils'

import md5 from '@/utils/md5'

export function generateSignParams(params = {}) {
  const authkey = process.env.VITE_GLOB_AUTH_KEY as string
  params = Object.assign({}, params, {
    timestamp: Math.floor(Date.now() / 1000),
    platform: 'web',
  })

  const strForSign = serialize(params)
  const sign = md5(strForSign + authkey)

  return {
    sign,
    method: 'md5',
    ...params,
  }
}

export function generateIbosSignParams() {
  const authkey = process.env.VITE_GLOB_AUTH_KEY as string
  const platform = 'web'
  const createtime = Math.floor(Date.now() / 1000)
  const token = md5(authkey + createtime)
  return {
    token,
    platform,
    createtime,
  }
}
