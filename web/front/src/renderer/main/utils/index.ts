
/**
 * 判断在对象数据中是否有效值
 * @param { string | number | symbol } key 对象键值
 * @param { object } source 对象数据
 * @returns { boolean }
 */
export const isValidKeyInObject = (
  key: string | number | symbol | keyof typeof source = '',
  source: any = {},
) => {
  return !!(
    key
    && source
    && Object.keys(source).length
    && key in source
    && source[key]
  )
}

export const typeOfData = (source) => {
  return Object.prototype.toString.call(source).slice(8, -1)
}

/**
 * 系列化对象为 search 参数
 * @param { object } source 参数
 * @returns { string }
 */
export const serialize = (source: any) => {
  return Object.keys(source)
    .filter(key => isValidKeyInObject(key, source))
    .sort()
    .map((key) => {
      let value: any = source[key]
      if (typeOfData(value) === 'object')
        value = JSON.stringify(value)
      else if (typeOfData(value) === 'array')
        value = value.join(',')
      return `${key}=${value}`
    })
    .join('&')
}
