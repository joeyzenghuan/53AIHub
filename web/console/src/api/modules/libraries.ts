import service from '../config'
import { handleError } from '../errorHandler'

export type LibraryItem = {
  created_time: number
  creator_id: number
  description: string
  eid: number
  icon: string
  id: number
  name: string
  sort: number
  space_id: number
  status: number
  updated_time: number
}

export type LibraryListResponse = {
  list: LibraryItem[]
  total: number
}

export type LibraryListRequest = {
  space_id: number
  offset: number
  limit: number
  keyword?: string
}

export type LibraryCreateRequest = {
  space_id: number
  name: string
  icon: string
  description: string
}

export const librariesApi = {
  list(data: LibraryListRequest): Promise<LibraryListResponse> {
    return service
      .get('/api/libraries', { params: data })
      .then((res) => res.data)
      .catch(handleError)
  },
  create(data: LibraryCreateRequest) {
    return service.post('/api/libraries', data).catch(handleError)
  },
  update(library_id: number, data: LibraryCreateRequest) {
    return service.put(`/api/libraries/${library_id}`, data).catch(handleError)
  },
  delete(library_id: number) {
    return service.delete(`/api/libraries/${library_id}`).catch(handleError)
  }
}

export default librariesApi
