
import { ref } from 'vue'
import commonApi from '@/api/modules/common'

export default () => {
	const emailCodeCount = ref(0)
	const emailCodeRule = {
		validator: (rule: any, value: any, callback: any) => {
			if (/^\d{6}$/.test(value))
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
			emailCodeCount.value -= 1
			if (emailCodeCount.value <= 0)
				return
			countdown()
		}, 1000)
	}

	// 发送邮箱验证码
	const sendEmailCode = (email: string) : Promise<void> => {
		if (!email.trim()) return Promise.reject()

		return commonApi.sendEmailCode({
			email,
		}).then(() => {
			emailCodeCount.value = 60
			countdown()
			ElMessage.success(window.$t('status.sent'))
		})
	}

	return {
		emailCodeCount,
		emailCodeRule,
		sendEmailCode
	}
}
