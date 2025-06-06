import { qyy_host } from '@/utils/config'

export default {
	send_code: {
		api_host: qyy_host,
		pathname: '/v3',
		url: '/users/sendcode',
		method: 'POST',
	},
	validate_code: {
		api_host: qyy_host,
		pathname: '/v4',
		url: '/xbot/checkverificationcode',
		method: 'POST',
	}
}
