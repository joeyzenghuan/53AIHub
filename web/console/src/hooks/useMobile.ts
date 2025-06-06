import { computed, reactive } from 'vue'
import type { FormRules } from 'element-plus'
import api from '@/apis'
import { debounce } from '@/utils/functions/debounce'

export default () => {
  const mobileForm = reactive({
    mobile: '',
    code: '',
    countdown: 0,
  })
  const mobileRules = reactive<FormRules>({
    mobile: [{
      validator: (rule: any, value: any, callback: any) => {
        if (/^1\d{10}$/.test(value))
					 callback()
				 else
					 callback(new Error('请输入正确的手机号'))
      },
      trigger: ['blur', 'change'],
    }],
    code: [{
      validator: (rule: any, value: any, callback: any) => {
        if (/^\d{4}$/.test(value))
					 callback()
				 else
					 callback(new Error('请输入正确的验证码'))
      },
      trigger: ['blur', 'change'],
    }],
  })

  const isMobile = computed(() => /^1\d{10}$/.test(mobileForm.mobile))

  let _countTimer: any
  const countdown = () => {
    clearTimeout(_countTimer)
    _countTimer = setTimeout(() => {
      mobileForm.countdown -= 1
      if (mobileForm.countdown <= 0)
        return
      countdown()
    }, 1000)
  }

  const handleSendCode = debounce(() => {
    api.v3.users.sendcode(mobileForm.mobile)
      .then(() => {
        mobileForm.countdown = 60
        countdown()
        ElMessage.success('已发送')
      })
  }, 1000)

  return {
    mobileForm,
    mobileRules,
    isMobile,
    handleSendCode,
  }
}
