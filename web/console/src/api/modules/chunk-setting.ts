import service from '../config'
import { handleError } from '../errorHandler'

export interface ChunkSetting {
  created_time: number
  eid: number
  embedding_channel_id: number
  embedding_model_name: string
  id: number
  index_max_length: number
  index_overlap_size: number
  index_split_rule: string
  knowledge_max_length: number
  knowledge_overlap_size: number
  knowledge_split_rule: string
  library_id: number
  logic_channel_id: number
  logic_model_name: string
  min_chunk_size: number
  question_generation: string
  search_config: {
    vector: boolean
    fulltext: boolean
    hybrid: boolean
    top_k: number
    score_threshold: number
  }
  summary_generation: string
  updated_time: number
}

export const chunkSettingApi = {
  list() {
    return service.get('/api/chunk-settings/list').catch(handleError)
  },
  channels: {
    list() {
      return service.get('/api/chunk-settings/channels').catch(handleError)
    },
  },
  default: {
    get(): Promise<ChunkSetting> {
      return service
        .get('/api/chunk-settings/default')
        .then(res => res.data)
        .catch(handleError)
    },
    update(data: Partial<ChunkSetting>) {
      return service.put('/api/chunk-settings/default', data).catch(handleError)
    },
  },
}

export default chunkSettingApi
