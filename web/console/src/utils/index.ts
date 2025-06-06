/**
 * 索引填充0
 * @param value
 * @param length
 */
export const indexFillZero = (value: string | number, length: number) => {
  // length = length < 3 ? 3 : length
  if (value.length >= length)
    length = value.length

  return (Array(length).join('0') + value).slice(-length)
}

/**
 * 转化为千分位
 */
export const formatNumberToThousands = (num: string | number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const getFileExt = (name = ''): string => {
  if (name.match(/\.pdf$/))
    return 'pdf'
  if (name.match(/\.txt$/))
    return 'txt'
  if (name.match(/\.(html|htm)$/))
    return 'html'
  if (name.match(/\.xlsx$/))
    return 'xlsx'
  if (name.match(/\.docx$/))
    return 'doc'
  if (name.match(/\.csv$/))
    return 'csv'
  if (name.match(/\.md$/))
    return 'md'
  if (name.match(/(\.jpg|\.png|\.bmp|\.tiff)$/))
    return 'image'
  return ''
}

/**
 *
 */
export const getFileSize = (size: string | number): string => {
  const bytes = 1024
  const unitArray = ['B', 'K', 'M', 'G']
  let unitIdx = 0

  size = Math.max(parseInt(size, 10) || 0, 0)

  while (size >= bytes && unitIdx < unitArray.length - 1) {
    size /= bytes
    unitIdx++
  }

  return +size.toFixed(1) + unitArray[unitIdx]
}
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

/**
 *
 */
export const joinUrl = (url, paramStr) => {
  if (typeof url === 'string')
    return url + (url.includes('?') ? '&' : '?') + paramStr

  return ''
}

/**
 * 获取日期的时间戳
 */
export const getTimeStamp = (str: string) => {
  return new Date(str.replace(/-/g, '/')).getTime()
}

/**
 * 深拷贝
 */
export const deepCopy = (obj, ignore: string[] = []): any => {
  if (obj === null || typeof obj !== 'object') {
    // 如果是基本类型或 null，则直接返回
    return obj
  }

  if (Array.isArray(obj)) {
    // 如果是数组，则创建一个新数组并递归复制每个元素
    return obj.map(item => deepCopy(item, ignore))
  }
  if (obj instanceof Date)
    return obj

  // 如果是对象，则创建一个新对象并递归复制每个属性
  const newObj = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !ignore.includes(key))
      newObj[key] = deepCopy(obj[key], ignore)
  }

  return newObj
}

/**
 * 继承
 * @param target
 * @param source
 * @returns
 */
export const assign = (target, ...source) => {
  for (const i in source) {
    if (!source.hasOwnProperty(i))
      continue

    const object = source[i]
    if (typeof object === 'object' && object !== null) {
      Object.keys(object).forEach((key) => {
        const value = object[key]
        if (Array.isArray(value))
          target[key] = value

        else if (typeof value === 'object' && value !== null)
          target[key] = assign({}, target[key] || {}, value)

        else
          target[key] = value
      })
    }
    else {
      target[i] = object
    }
  }
  return target
}

export const generateRandomId = (length: number, isvar = false, isUuid = false): string => {
  const numberChars = '0123456789' // 数字字符集
  const nonNumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' // 非数字字符集
  const characters = nonNumericChars + numberChars
  let result = ''

  // 生成第一个字符，如果isvar为true，则从非数字字符中选取
  if (isvar)
    result += nonNumericChars[Math.floor(Math.random() * nonNumericChars.length)]
  else
    result += characters[Math.floor(Math.random() * characters.length)]

  // 生成剩余的字符
  for (let i = 1; i < length; i++)
    result += characters[Math.floor(Math.random() * characters.length)]

  if (isUuid) {
    result = result.toLowerCase()
    return result.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5')
  }

  return result
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const sleep = (time: number) => {
  return new Promise((resolve) => {
    let timer: any
    timer = setTimeout(() => {
      resolve()
      clearTimeout(timer)
    }, time * 1000)
  })
}

/**
 * 格式化语音时间
 */
export const formatAudioTime = (time: number | string) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

/**
 * 删除js地址
 */
export const removeScript = (src: string) => {
  const node = document.querySelector(`script[src="${src}"]`)
  if (node)
    node.remove()
}

/**
 *
 * @param src 加载js地址
 */
export const loadScript = (src: string, cache = true) => {
  return new Promise((resolve, reject) => {
    const node = document.querySelector(`script[src="${src}"]`)
    if (node) {
      if (cache)
        return resolve()
      else node.remove()
    }

    const element = document.createElement('script')
    element.src = src
    element.referrerpolicy = 'origin'
    element.onload = function () {
      resolve()
    }
    element.onerror = function () {
      reject()
    }
    document.body.appendChild(element)
  })
}

export const compare = (obj1, obj2, fields?: any[] = []) => {
  let object1 = {}; let object2 = {}
  if (fields && fields.length) {
    fields.forEach((field) => {
      object1[field] = obj1[field]
      object2[field] = obj2[field]
    })
  }
  else {
    object1 = obj1
    object2 = obj2
  }
  return JSON.stringify(object1) === JSON.stringify(object2)
}

/**
 * 是不是空对象
 */
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

/**
 * 生成递增标题
 */
export const generateIncreaseTitle = (title, list = [], format = ' (%d)') => {
  // 过滤数组中title以指定title开头的对象
  const filteredList = list.filter(value => value.startsWith(title))

  if (filteredList.length === 0)
    return title

  const reg = new RegExp(format.replace(/(%d)+/, (match) => {
    return `\\d{${match.length / 2}}`
  }).replace('(', '\\(').replace(')', '\\)'))
  // 提取并比较title中的数字部分
  const maxNumber = filteredList.length
    ? Math.max(...filteredList.map((value) => {
      const numberMatch = reg.exec(value)
      return numberMatch ? parseInt(numberMatch[0].replace(/\D/g, ''), 10) : 0
    }))
    : 0
  const len = format.match(/%d/g).length

  // 返回最大数字
  return `${title}${format.replace(/(%d)+/g, indexFillZero(maxNumber + 1, len))}`
}

// 删掉html标签
export const removeHtmlTags = (html: string): string => {
  return html.replace(/<[^>]*>/g, '')
}

/**
 * 获取文章标题
 * @param content 文章内容
 */
export const getTitle = (content: string, defaultTitle?: string): string => {
  const div = document.createElement('div')
  div.innerHTML = content
  const childNodes = div.childNodes

  // 遍历子元素，找到第一个非空白文本节点或元素节点
  let firstLine = ''
  for (let i = 0; i < childNodes.length; i++) {
    const node = childNodes[i]

    // 排除空白文本节点
    if (node.nodeType === 3 && node.textContent.trim() === '')
      continue

    // 找到第一个非空白文本节点或元素节点
    firstLine = (node.nodeType === 3) ? node.textContent.trim() : node.innerText.trim()
    if (firstLine)
	    break
  }

  return (firstLine || defaultTitle || '').substring(0, 20)
}

export const getWordCountByHtml = (value: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(value, 'text/html')
  const textContent = doc.body.textContent || ''
  return textContent.length
}

// 判断是否是function或Promise
export const isFunction: (_function: any, onlyFunction?: boolean) => boolean = (_function = null, onlyFunction = false) => Boolean(typeof _function === 'function' || (!onlyFunction && _function instanceof Promise))
export const isObject = (value: any) => typeof value === 'object' && value !== null

// 递归数组处理
export const recursion = ({
  data = [],
  props = {},
  handler = null,
}: {
  data: any[]
  props?: {
    value?: string
    label?: string
    children?: string
    level?: string
  }
  handler?: any
}): void => {
  props = {
    value: 'value',
    label: 'label',
    children: 'children',
    level: 'level',
    ...props,
  }
  const findEach = ({ node = {}, chainKeyList = [], level = 1 }: any = {}) => {
    node[props.level] = level
    if (isFunction(handler))
      handler({ data: node, chainKeyList, level })
    if (node[props.children] && node[props.children].length)
      node[props.children].forEach((row: any = {}) => findEach({ node: row, chainKeyList: [...chainKeyList, row[props.value]], level: level + 1 }))
  }
  data.forEach((node: any = {}) => findEach({ node, chainKeyList: [node[props.value]] }))
}

export const generateTreeData = ({
  data = [],
  props = {},
}: {
  data: any[]
  props?: {
    value?: string
    label?: string
    children?: string
    pid?: string
    sort?: string
  }
}): any [] => {
  props = {
    value: 'value',
    label: 'label',
    children: 'children',
    pid: 'pid',
    sort: 'sort',
    ...props,
  }
  const result = []
  data.forEach((item: any = {}) => {
    data.forEach((row: any = {}) => {
      if (item[props.pid] && item[props.pid] === row[props.value]) {
        row[props.children] = [...(row[props.children] || []), item].map((_item, index) => {
          _item[props.sort] = index
          return _item
        })
      }
    })
    if (!item[props.pid]) {
      item[props.sort] = result.length
      result.push(item)
    }
  })
  return result
}

export const generateFlatData = ({
  data = [],
  props = {},
}: {
  data: any[]
  props?: {
    value?: string
    label?: string
    children?: string
    pid?: string
    sort?: string
  }
}): any [] => {
  props = {
    value: 'value',
    label: 'label',
    children: 'children',
    pid: 'pid',
    sort: 'sort',
    ...props,
  }
  const result = []
  recursion({
    data,
    props,
    handler: ({ data } = {}) => {
      result.push(data)
    },
  })
  return result
}

// Promise按顺序逐个执行
export const runResolvers = (resolvers = [() => Promise.resolve()]) => {
  let resolver = Promise.resolve()
  const results = []
  const errors = []
  while (resolvers.length) {
    const task = resolvers.shift()
    resolver = resolver.finally(() =>
      task()
        .then(res => results.push(res))
        .catch(err => errors.push(err)),
    )
  }
  return resolver
    .then(() => results)
    .catch(() => errors)
    .finally(() => ({ resultList: results, errorList: errors }))
}

export const generateUUID = () => {
  if (typeof crypto.randomUUID === 'function')
    return crypto.randomUUID()
  const temp_url = URL.createObjectURL(new Blob())
  const uuid = temp_url.toString()
  URL.revokeObjectURL(temp_url)
  return uuid.substr(uuid.lastIndexOf('/') + 1)
}

const idleQueue = []
let isRunning = false
let _runTimer: any

const executeNextTask = (deadline) => {
  if (isRunning || !idleQueue.length)
    return

  isRunning = true
  const task = idleQueue.shift()

  try {
    task(deadline)
  }
  catch (error) {
    console.error('Error executing idle task:', error)
  }
  finally {
    isRunning = false
    requestIdleCallback(executeNextTask)
  }
}
/**
 * 空闲时间执行任务
 */
export const runOnIdle = (callback, options = {}) => {
  if (window.requestIdleCallback) {
    window.requestIdleCallback(executeNextTask, options)
  }
  else {
    console.warn('requestIdleCallback is not supported. Falling back to setTimeout.')
    _runTimer = setTimeout((deadline) => {
      try {
        callback(deadline)
      }
      catch (error) {
        console.error('Error executing idle function:', error)
      }
      clearTimeout(_runTimer)
    }, 0)
  }
}
