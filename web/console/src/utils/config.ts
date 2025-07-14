import { useEnv } from '@/hooks/useEnv'

const { isOpLocalEnv } = useEnv()

const protocol = location.protocol === 'file:' ? 'http:' : location.protocol

// 兼容本地开源版项目api环境
const op_local_api_host = location.origin
const op_local_qyy_host = location.origin
// const op_local_api_host = 'http://agenthubdev.53ai.com'
// const op_local_qyy_host = 'http://testapi.qunyingyong.net'
const op_local_img_host = `${location.origin}/api/images`
const op_local_lib_host = `${location.origin}/api/libs`

export const pathname = window.pathname || import.meta.env.VITE_GLOB_API_PATHNAME
export const api_host = (
  (isOpLocalEnv.value && op_local_api_host) ||
  window.api_host ||
  window.apiHost ||
  import.meta.env.VITE_GLOB_API_HOST
).replace(/^https?:\/\//, `${protocol}//`)
export const qyy_host = (
  (isOpLocalEnv.value && op_local_qyy_host) ||
  window.qyy_host ||
  window.qyyHost ||
  import.meta.env.VITE_GLOB_QYY_HOST
).replace(/^https?:\/\//, `${protocol}//`)

export const img_host = (
  (isOpLocalEnv.value && op_local_img_host) ||
  import.meta.env.VITE_GLOB_IMG_HOST
).replace(/^https?:\/\//, `${protocol}//`)
export const lib_host = (
  (isOpLocalEnv.value && op_local_lib_host) ||
  import.meta.env.VITE_GLOB_LIB_HOST
).replace(/^https?:\/\//, `${protocol}//`)

export const base_path = import.meta.env.VITE_BASE_PATH
