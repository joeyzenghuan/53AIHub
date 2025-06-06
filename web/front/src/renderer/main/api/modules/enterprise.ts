import service from '../config'
import { handleError } from '../errorHandler'

export const enterprise = {
  current() {
    return service.get('/api/enterprises/current').catch(handleError)
  },
  get(id: string) {
    return service.get(`/api/enterprises/${id}`).catch(handleError)
  }
}

export default enterprise

