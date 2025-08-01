import { loadScript, sleep } from '@/utils'
import wecomApi from '@/api/modules/wecom'

const userAgent = navigator.userAgent.toLowerCase()
const isInQw = /wxwork|micromessenger/im.test(userAgent)

/*
http://ask.dcloud.net.cn/article/36007
1 测试时，可以将debug设置为true，可以看到日志信息
2 签名建议在服务端，签名的url必须和当前页面的url一致，否则自定义分享无效
3 每个页面都需要单独初始化配置，即jweixin.config()
4 在公众号后台设置安全域名
*/
const openTagList = ['wx-open-launch-weapp']

const jsApiList = ['agentConfig', 'openEnterpriseChat', 'selectEnterpriseContact']

// 企微需要用到
const agentApiList = [
  'getContext',
  'selectExternalContact',
  'openUserProfile',
  'sendChatMessage',
  'getCurExternalContact',
  'getCurExternalChat',
  'shareAppMessage',
  'openEnterpriseChat',
  'openAppManage',
  'openAppPurchase',
  'openThirdAppServiceChat',
  'shareAppMessage',
  'shareWechatMessage',
  'shareToExternalContact',
  'shareToExternalChat',
  'shareToExternalMoments'
]

const jssdk = {
  loadScript() {
    return sleep(2).then(() => {
      return Promise.all([
        loadScript('//res.wx.qq.com/open/js/jweixin-1.2.0.js'),
        loadScript('//open.work.weixin.qq.com/wwopen/js/jwxwork-1.0.0.js')
      ])
    })
  },
  /**
   * 初始化sdk配置
   */
  getConfig() {
    const { origin, pathname, search } = window.location
    const url = `${origin}${pathname}${search}`
    return wecomApi.jssdk_config(import.meta.env.VITE_GLOB_SUITEID, { url }).then((res) => res.data)
  },

  /**
   * 初始化jssdk
   * @param {Object} data
   */
  initConfig(data) {
    // 需要兼容企业微信的展示
    // 优先使用内部应用的配置、第三方应用次之，最后是公众号 配置
    // data.internalApp ||
    return new Promise((resolve, reject) => {
      const params = data.corp || data
      const config = {
        openTagList,
        jsApiList,
        debug: false,
        beta: true,
        appId: params.app_id,
        timestamp: params.timestamp,
        nonceStr: params.nonce_str,
        signature: params.signature
      }
      console.log('jssdk init start')
      wx.config(config)
      wx.ready(() => {
        console.log('jssdk init success!!')
        resolve()
      })
      wx.error((err) => {
        console.log('jssdk init error')
        console.error(err)
        reject()
      })
    })
  },

  /**
   * agentConfig注入的是应用的身份与权限。
   * 需要config配置成功后才可以调用
   */
  agentConfig(agent) {
    return new Promise((resolve, reject) => {
      console.log('jssdk agentconfig init start!!', agent)
      wx.agentConfig({
        corpid: agent.app_id, // 必填，企业微信的corpid，必须与当前登录的企业一致
        agentid: agent.agent_id, // 必填，企业微信的应用id
        timestamp: agent.timestamp, // 必填，生成签名的时间戳
        nonceStr: agent.nonce_str, // 必填，生成签名的随机串
        signature: agent.signature, // 必填，签名，见附录1
        jsApiList: agentApiList, // 必填
        success() {
          console.log('jssdk agentconfig init success!!')
          resolve()
        },
        fail(err) {
          if (err.errMsg.includes('function not exist')) alert('企业微信版本过低请升级')
          else reject()

          console.error(err)
        }
      })
    })
  }
}

/**
 * 初始化配置,企微需要用到tokens中的corpid
 */
let instance: any
export default function (reset = false) {
  if (reset) instance = undefined

  if (!instance) {
    instance = new Promise((resolve) => {
      const fail = () => {
        instance = undefined
        // resolve(getInstance())
      }
      const task = jssdk.loadScript()
      task
        .then(() => jssdk.getConfig())
        .then((data) => {
          if (isInQw) return jssdk.initConfig(data.corp_config).then(() => data)
          return data
        })
        .then((data) => {
          return jssdk.agentConfig(data.agent_config)
        })
        .then(() => resolve())
        .catch(() => fail())
    })
  }
  return instance
}
