import service from '../config'
import { handleError } from '../errorHandler'

import type { WebsiteType } from '@/constants/enterprise'

export const saasApi = {
  product: {
    list() {
      return service.get(`/api/saas/products`).catch(handleError)
    },
    find(version: WebsiteType) {
      return service.get(`/api/saas/products/${version}`).catch(handleError)
    }
  }
}

export default saasApi
