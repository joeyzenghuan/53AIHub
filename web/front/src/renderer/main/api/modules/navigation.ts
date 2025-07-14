import service from '../config'
import { handleError } from '../errorHandler'
import { INIT_DATA_LIST } from '@/constants/navigation'

export const navigation = {
  async list(
    params: {
      keyword?: string
      offset?: number
      limit?: number
    } = {}
  ) {
    let { data = [] } = await service.get(`/api/navigations`, { params }).catch(handleError)
    return { total: data.length, list: data }
  },
  init() {
    return service.post(`/api/navigations/init`, [...INIT_DATA_LIST]).catch(handleError)
  },
  async detail({ navigation_id }: { navigation_id: number }) {
    const { data = {} } = await service.get(`/api/navigations/${navigation_id}`).catch(handleError)
    return data
  },

}
export default navigation

