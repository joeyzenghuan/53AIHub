import service from '../config'
import { handleError } from '../errorHandler'


export const prompt = {
  async list() {
    return service.get(`/api/prompts`, { params: { limit: 1000 } }).catch(handleError)
  },
  async approve({ prompt_id }: { prompt_id: number }) {
    return service.patch(`/api/prompts/${prompt_id}/like`).catch(handleError)
  },
  async detail({ prompt_id }: { prompt_id: number }) {
    return service.get(`/api/prompts/${prompt_id}`).catch(handleError)
  }
}
export default prompt

