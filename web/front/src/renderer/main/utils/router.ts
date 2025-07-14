export const setRouterQuery = (data: any = {}, hashVal = '') => {
  // 获取当前URL
  const currentUrl = window.location.href
  // 分离基础URL和hash部分
  const [, hash] = currentUrl.split('#')
  // 解析当前hash中的参数
  const hashParts = hash ? hash.split('?') : ['']
  const hashPath = hashVal || hashParts[0]
  const queryString = hashParts[1] || ''

  // 解析当前查询参数
  const queryParams = new URLSearchParams(queryString)

  // 更新查询参数
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.set(key, String(value))
    } else {
      queryParams.delete(key)
    }
  })

  // 构建新的URL
  const newQueryString = queryParams.toString()
  const newHash = hashPath + (newQueryString ? `?${newQueryString}` : '')

  window.location.hash = newHash
}
