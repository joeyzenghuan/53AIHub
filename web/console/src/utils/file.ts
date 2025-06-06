import axios from 'axios'
import loadLib from './loadLib'
import aliyun from '@/utils/aliyun'

/**
 * 获取视频/音频信息 时长、宽高
 * @param {*} file
 */
export function getMetaInfo(file: File) {
  return new Promise((resolve) => {
    let timer: ReturnType<typeof setTimeout> | null = null

    const _URL = window.URL || window.webkitURL
    const video = document.createElement('video')

    const success = function () {
      timer && clearTimeout(timer)
      const duration = parseInt(video.duration)
      // edge下loadedmetadata 无法触发，需要定时查询
      if (isNaN(duration) || !video.offsetWidth || !video.offsetHeight) {
        timer = setTimeout(success, 2000)
      }
      else {
        resolve({
          width: video.offsetWidth,
          height: video.offsetHeight,
          duration,
        })
        document.body.removeChild(video)
      }
    }
    video.addEventListener('loadedmetadata', success)
    try {
      video.srcObject = file
    }
    catch (error) {
      video.src = _URL.createObjectURL(file)
    }
    document.body.appendChild(video)
    success()
    // if (util.isBrowserEdge) success()
  })
}

export function exportFile(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = name
  document.body.appendChild(link)
  link.click()

  // 清理 Blob 对象
  URL.revokeObjectURL(url)
}

export function exportCsv(data: any[], name: string) {
  const csv = data.map(row => row.map((str) => {
    str = String(str || '')
    if (/(\\n|\n|\r\n|\r|,)/mg.test(str))
      str = `"${str}"`
    return str.replace(/(\\n|\n|\r\n|\r)/mg, '\n')
  }).join(',')).filter(str => str).join('\n')
  exportFile(new Blob([csv], { type: 'text/csv,charset=UTF-8' }), name)
}

/**
 * 下载流文件
 * @param {*} blob  流文件对象
 * @param {*} name  文件名 String
 */
export function downloadBlob(blob: Blob, name: string, params?: any) {
  params = params || {}
  const ua = navigator.userAgent

  if (ua.includes('Trident') && ua.includes('Windows')) {
    // IE内核 并且  windows系统 情况下 才执行;
    navigator.msSaveBlob(blob, name)
  }
  else {
    // 谷歌兼容下载
    const downloadElement = document.createElement('a')
    let href = blob
    if (typeof href == 'string') {
      downloadElement.target = '_blank'
    }
    else {
      // 创建下载的链接
      href = params.urlType
        ? window.URL.createObjectURL(blob, { type: params.urlType })
        : window.URL.createObjectURL(blob)
    }
    downloadElement.href = href
    // 下载后文件名
    downloadElement.download = name
    document.body.appendChild(downloadElement)
    downloadElement.click() // 点击下载
    document.body.removeChild(downloadElement) // 下载完成移除元素
    if (typeof blob != 'string')
      window.URL.revokeObjectURL(href) // 释放掉blob对象
  }
}

/**
 * file类型转blob
 */
export function fileToBlob(file) {
  const reader = new FileReader()
  return new Promise((resolve) => {
    // FileReader 添加 load 事件
    reader.addEventListener('load', (e) => {
      let blob
      if (typeof e.target.result === 'object')
        blob = new Blob([e.target.result])
      else
        blob = e.target.result

      resolve(blob)
    })
    // FileReader 以 ArrayBuffer 格式 读取 File 对象中数据
    reader.readAsArrayBuffer(file)
  })
}

export function blobToFile(blob: Blob, fileName: string) {
  // 创建一个 File 对象，传入的参数包括 Blob 对象、文件名以及文件的类型
  return new File([blob], fileName, { type: blob.type })
}

/**
 * file 转 base64
 * @param {*} blob
 * @param {*} callback
 */
export function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = function (event) {
      resolve(event.target.result)
    }
    fileReader.onerror = function (event) {
      reject(event)
    }
    fileReader.readAsDataURL(file)
  })
}
/**
 * base64 转 fIle
 */
export function base64ToFile(dataurl: string, filename = String(Date.now())) {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  // suffix是该文件的后缀
  const suffix = mime.split('/')[1]
  // atob 对经过 base-64 编码的字符串进行解码
  const bstr = atob(arr[1])
  // n 是解码后的长度
  let n = bstr.length
  // Uint8Array 数组类型表示一个 8 位无符号整型数组 初始值都是 数子0
  const u8arr = new Uint8Array(n)
  // charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数
  while (n--)
    u8arr[n] = bstr.charCodeAt(n)

  // new File返回File对象 第一个参数是 ArraryBuffer 或 Bolb 或Arrary 第二个参数是文件名
  // 第三个参数是 要放到文件中的内容的 MIME 类型
  return new File([u8arr], `${filename}.${suffix}`, {
    type: mime,
  })
}

/**
 * 下载文件
 */
export function downloadFile(fileUrl: string, fileName?: string) {
  // 创建一个<a>元素
  const link = document.createElement('a')
  // 设置href属性为文件URL
  link.href = fileUrl
  link.target = '_blank'
  // 设置下载的文件名
  link.download = fileName || fileUrl.split('/').pop()
  // 模拟点击<a>元素
  link.click()
  // 清理DOM
  link.remove()
}

export function parseDocxToHtml(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      loadLib('mammoth')
        .then(() => {
          mammoth.convertToHtml({
            arrayBuffer: e.target.result,
          })
            .then((result) => {
              resolve(result.value)
            })
            .catch((error) => {
              reject(error)
            })
        })
    }
    reader.onerror = (e) => {
      reject(e)
    }
    reader.readAsArrayBuffer(file)
  })
}

export function getOssPath(): string {
  const bot_token = localStorage.getItem('bot_batch_send_token') || ''
  const nowDate = new Date()
  const year = String(nowDate.getFullYear())
  let month = String(nowDate.getMonth() + 1)
  if (month.length < 2)
    month = `0${month}`
  return `${bot_token || '53ai'}/${year}/${month}/`
}

export function ossUpload({ file, ossPath, onProgress }: { file: File; ossPath?: string; onProgress?: (precent: string) => {} }): Promise<{ oss_url: string; file_md5: string; raw: File }> {
  ossPath = ossPath || getOssPath()
  return aliyun.upload(file, ossPath, onProgress).then(({ oss_url = '', file_md5 = '' }) => ({ oss_url, file_md5, raw: file }))
}

export function getExtname(fileName = '') {
  fileName = `${fileName}`
  const lastIndex = fileName.lastIndexOf('.')
  return lastIndex !== -1 ? fileName.slice(lastIndex + 1) : ''
}

export function getFileType(fileName = '') {
  let fileType = 'unknown'
  fileName = getExtname(fileName.toLowerCase())

  if (/pdf/.test(fileName))
    fileType = 'pdf'
  else if (/doc|docx/.test(fileName))
    fileType = 'doc'
  else if (/ppt|pps|pptx/.test(fileName))
    fileType = 'ppt'
  else if (/xls|xlsx|xlsm|xlt|xltx|xltm/.test(fileName))
    fileType = 'xls'
  else if (/gif|jpg|jpeg|png|bmp|tiff/.test(fileName))
    fileType = 'image'
  else if (/mp4/.test(fileName))
    fileType = 'video'
  else if (/txt/.test(fileName))
    fileType = 'txt'
  else if (/html|htm/.test(fileName))
    fileType = 'html'
  else if (/csv/.test(fileName))
    fileType = 'csv'
  else if (/md/.test(fileName))
    fileType = 'md'

  return fileType
}

export const fetch = (url = '', responseType) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      responseType,
    })
      .then((data) => {
        resolve(data.data)
      })
      .catch((error) => {
        reject(error.toString())
      })
  })
}
export function blobToDataURL(blob, callback) {
  const a = new FileReader()
  a.onload = function (e) {
    callback(e.target.result)
  }
  a.readAsDataURL(blob)
}
export function remoteToDataUrl({ url = '' } = {}) {
  return new Promise((resolve, reject) => {
    if (!/^http(s)?:/.test(url))
      return resolve(url)
    url = url.replace(/^http(s)?:/, '')
    url = `${url}${url.includes('?') ? '&' : '?'}t=${Date.now()}`
    fetch(url, 'blob')
      .then((blob) => {
        blobToDataURL(blob, (dataUrl = '') => {
          return resolve(dataUrl)
        })
      })
      .catch(reject)
  })
}

export function dataURLtoBlob(dataurl = '') {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--)
    u8arr[n] = bstr.charCodeAt(n)

  return new Blob([u8arr], { type: mime })
}
