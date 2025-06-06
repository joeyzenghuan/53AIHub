/**
 * 阿里云OSS文件直接存储所需配置信息，移植阿里云JavaScript客户端签名直传
 * 参考:  https://help.aliyun.com/document_detail/31925.html?spm=5176.doc32072.6.631.ddalTF
 */

export default {
  aliyunServerURL: 'https://yourname.oss-cn-hangzhou.aliyuncs.com/',
  accesskey: '-input-your-aliyuncs-key-',
  accessid: '-input-your-aliyuncs-id-',
  timeout: 87600,
  maxSize: 20 // 单位M
}
