/**
 * 获取本地文件后，直存至阿里云OSS
 * 参考:  https://help.aliyun.com/document_detail/31925.html?spm=5176.doc32072.6.631.ddalTF
 */

import axios from 'axios'
import md5 from '@/utils/md5'
import { generateUUID } from '@/utils'

import env from './env'
import Base64 from './Base64'
import './hmac'
import './sha1'
import Crypto from './crypto'

const maxUploadSize = 200

const isFunction = function (_func) {
	return typeof _func === 'function' || _func instanceof Promise
}
const getPolicyBase64 = function () {
  let date = new Date()
  date.setHours(date.getHours() + env.timeout)
  let srcT = date.toISOString()
  const policyText = {
    expiration: srcT, // 设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了 指定了Post请求必须发生在2020年01月01日12点之前("2020-01-01T12:00:00.000Z")。
    conditions: [
      ['content-length-range', 0, maxUploadSize * 1024 * 1024], // 设置上传文件的大小限制,1048576000=1000mb
    ],
  }

  const policyBase64 = Base64.encode(JSON.stringify(policyText))
  return policyBase64
}

const getSignature = function (policyBase64) {
  const accesskey = env.accesskey

  const bytes = Crypto.HMAC(Crypto.SHA1, policyBase64, accesskey, {
    asBytes: true,
  })
  const signature = Crypto.util.bytesToBase64(bytes)

  return signature
}

const getFileMd5 = function (file) {
	return new Promise((resolve, reject) => {
		const file_reader = new FileReader()
		file_reader.onload = (event) => {
			const arrayBuffer = event.target.result
			const dataView = new DataView(arrayBuffer)
			const byteUnit8List = []
			for (let i = 0; i < dataView.byteLength; i++) {
				byteUnit8List.push(dataView.getUint8(i))
			}
			const file_md5 = byteUnit8List.length ? md5(byteUnit8List.join(',')) : ''
			resolve(file_md5)
		}
		file_reader.onerror = (error) => {
			reject(error)
		}
		file_reader.readAsArrayBuffer(file)
	})
}

export default {
  /* file File ,要上传的File 对象 */
  upload(file, oss_file_directory, progressCB) {
    return new Promise((resolve, reject) => {
      const file_name = file.name || ''
			const	file_suffix = file_name.substr(file_name.lastIndexOf('.'))

			if (isFunction(progressCB))	progressCB(0)
			getFileMd5(file).then((file_md5 = '') => {
				file_md5 = file_md5 || generateUUID()
				const aliyun_file_key = `${oss_file_directory}${file_md5}${file_suffix}`
				const aliyun_server_url = env.aliyunServerURL
				const accessid = env.accessid
				const policy_base_64 = getPolicyBase64()
				const signature = getSignature(policy_base_64)
				const formdata = new FormData()

				const host = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(file.type)
					? 'https://img.ibos.cn/'
					: 'https://oss.ibos.cn/'

				formdata.append('key', aliyun_file_key)
				formdata.append('OSSAccessKeyId', accessid)
				formdata.append('policy', policy_base_64)
				formdata.append('Signature', signature)
				formdata.append('success_action_status', '200')
				formdata.append('file', file)
				// 阿里云上传跨域了，但是小程序端上传却不跨域，需要验证下是不是小程序端的接口自动加上了接口域名作为origin.
				// 本地新建server 代理这个请求可以解决开发时候的跨域问题。
				// 线上版本可能需要设置阿里云的白名单

				axios
					.post(aliyun_server_url, formdata, {
						onUploadProgress: (e) => {
							if (isFunction(progressCB))	progressCB(Math.ceil((e.loaded / e.total) * 100))
						},
						withCredentials: false,
					})
					.then(() => {
						const oss_url = host + aliyun_file_key
						resolve({
							oss_url,
							file_md5
						})
					})
					.catch((error) => {
						reject(error)
					})
			})
    })
  },
}

