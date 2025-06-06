import service from '../config'
import { handleError } from '../errorHandler'

export const bannerApi = {
  async getBanner() {
		const { data: { banner = '{}' } = {} } = await service.get('/api/enterprises/banner').catch(handleError)
		let data = {}
		try {
			data = JSON.parse(banner)
		} catch (error) {
			// console.error(error)
			data = {}
		}
		return data
	},
	async saveBanner(data: {
		url_list: string []
		interval: number
	}) {
		return service.put('/api/enterprises/banner', { banner: JSON.stringify(data) }).catch(handleError)
	},
}

export default bannerApi

export type { bannerApi }
