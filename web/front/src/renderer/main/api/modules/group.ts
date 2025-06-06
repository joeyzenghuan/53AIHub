import service from '../config'
import { handleError } from '../errorHandler'

export const group = {
  list(group_type: number) {
    return service.get(`/api/groups/type/current/${group_type}`).catch(handleError)
  }
}
export default group
