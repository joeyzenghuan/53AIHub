import service from '../config'
import { handleError } from '../errorHandler'
import { useUserStore } from '@/stores/modules/user'


export const agent = {
  async list() {
    const userStore = useUserStore()
    if (!userStore.info.user_id) await userStore.getUserInfo()
    const is_internal = userStore.info.is_internal
    return service.get(is_internal ? `/api/agents/internal_users` : `/api/agents/current`).catch(handleError)
  }
}
export default agent

