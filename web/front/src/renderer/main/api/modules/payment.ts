import service from '../config'
import { handleError } from '../errorHandler'

export const paymentApi = {
  async getAvailableList() {
    const { data = {} } = await service.get(`/api/payment/available`).catch(handleError)
    return data
  },
}
export default paymentApi
