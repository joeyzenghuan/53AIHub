import { serialize } from '@/utils'

import md5 from '@/utils/md5'

export function generateSignParams(params = {}) {
  const authkey = 'c3a39e4eeacf4542d6a488e19037fa45'
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
  const authkey = 'c3a39e4eeacf4542d6a488e19037fa45'
  const platform = 'web'
  const createtime = Math.floor(Date.now() / 1000)
  const token = md5(authkey + createtime)
  return {
    token,
    platform,
    createtime,
  }
}
