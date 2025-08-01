import service from '../config'
import { handleError } from '../errorHandler'

export type SpaceItem = {
  created_time: number
  description: string
  eid: number
  icon: string
  id: number
  name: string
  owner_id: number
  sort: number
  status: number
  library_count: number
  updated_time: number
  is_default: boolean
  owner_info: {
    nickname: string
  }
}

export type SpaceListResponse = {
  spaces: SpaceItem[]
  total: number
}

export type SpaceListRequest = {
  offset: number
  limit: number
  name?: string
}

export type SpaceCreateRequest = {
  name: string
  description: string
  icon: string
}

export const spacesApi = {
  list(data: SpaceListRequest): Promise<SpaceListResponse> {
    return service
      .get('/api/spaces', { params: data })
      .then((res) => res.data)
      .catch(handleError)
  },
  create(data: SpaceCreateRequest) {
    return service.post('/api/spaces', data).catch(handleError)
  },
  update(space_id: number, data: SpaceCreateRequest) {
    return service.put(`/api/spaces/${space_id}`, data).catch(handleError)
  },
  delete(space_id: number) {
    return service.delete(`/api/spaces/${space_id}`).catch(handleError)
  },
  detail(space_id: number): Promise<SpaceItem> {
    return service
      .get(`/api/spaces/${space_id}`)
      .then((res) => res.data)
      .catch(handleError)
  }
}

export default spacesApi
