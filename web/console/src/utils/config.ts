import { useEnv } from '@/hooks/useEnv'
const { isOpLocalEnv } = useEnv()
const protocol = location.protocol === 'file:' ? 'http:' : location.protocol

export const pathname = window.pathname || import.meta.env.VITE_GLOB_API_PATHNAME
export const api_host = ((isOpLocalEnv.value && window.op_local_api_host) || window.api_host || window.apiHost || import.meta.env.VITE_GLOB_API_HOST).replace(/^https?:\/\//, `${protocol}//`)
export const qyy_host = ((isOpLocalEnv.value && window.op_local_qyy_host) || window.qyy_host || window.qyyHost || import.meta.env.VITE_GLOB_QYY_HOST).replace(/^https?:\/\//, `${protocol}//`)
export const oss_host = (window.oss_host || window.ossHost || import.meta.env.VITE_GLOB_OSS_HOST).replace(/^https?:\/\//, `${protocol}//`)
export const img_host = ((isOpLocalEnv.value && window.op_local_img_host) || import.meta.env.VITE_GLOB_IMG_HOST).replace(/^https?:\/\//, `${protocol}//`)