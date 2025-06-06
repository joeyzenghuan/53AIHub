import { ref } from 'vue'
import commonApi from '@/api/modules/common'

function isChinaMobile(phone: string): boolean {
  // 清洗并处理手机号
  let cleaned = phone.replace(/\D/g, '') // 去除非数字字符
  if (cleaned.length > 11)
    cleaned = cleaned.slice(-11) // 处理带国际区号的情况

  // 基础验证
  if (cleaned.length !== 11 || !cleaned.startsWith('1'))
    return false

  // 中国移动号段正则（2023年最新版）
  const mobilePattern = /^1(3[5-9]|34[0-8]|440|4(7|8[0-9])|5[0-27-9]|7[28]|8[2-47-8]|9[58]|20)/
  return mobilePattern.test(cleaned)
}


export default () => {
  const codeCount = ref(0)
  const codeRule = {
    validator: (rule: any, value: any, callback: any) => {
      if (/^\d{4}$/.test(value))
        callback()
      else
        callback(new Error(window.$t('form.verify_code_format')))
    },
    trigger: ['blur', 'change'],
  }

  let _countTimer: any
  const countdown = () => {
    clearTimeout(_countTimer)
    _countTimer = setTimeout(() => {
      codeCount.value -= 1
      if (codeCount.value <= 0)
        return
      countdown()
    }, 1000)
  }

  const sendcode = (mobile: string) => {
    if (!mobile.trim()) return

    commonApi.sendcode({
      mobile,
      source: isChinaMobile(mobile) ? 'companyibos' : '53ai',
    }).then(() => {
      codeCount.value = 60
      countdown()
      ElMessage.success(window.$t('status.sent'))
    })
  }

  return {
    codeCount,
    codeRule,
    sendcode,
  }
}
