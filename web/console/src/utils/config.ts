// @ts-ignore
export const pathname = '/api'
// @ts-ignore
export const api_host =
  window.api_host || import.meta.env.VITE_GLOB_API_HOST || window.location.origin
// @ts-ignore
export const qyy_host =
  window.qyy_host || import.meta.env.VITE_GLOB_QYY_HOST || window.location.origin

export const img_host = `${api_host}/api/images`
export const lib_host = `${api_host}/api/libs`

export const base_path = import.meta.env.VITE_BASE_PATH || '/console'
