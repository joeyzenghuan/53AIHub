import service from '../config'
import { handleError } from '../errorHandler'

export const ordersApi = {
  list(
    params: {
      status?: number
      pay_type?: number
      offset?: number
      keyword?: string
      limit?: number
      subscription?: number
      start_time?: number
      end_time?: number
    } = {}
  ) {
    return service.get(`/api/orders/me`, { params }).catch(handleError)
  },
  close(order_id: string) {
    return service.post(`/api/orders/${order_id}/close`)
  }
}
export default ordersApi
