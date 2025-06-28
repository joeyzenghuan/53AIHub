import service from '../config'
import { handleError } from '../errorHandler'
import {
  AGENT_APP_OPTIONS,
  AGENT_TYPE,
  type AgentType,
} from '@/constants/platform'

export {
  AGENT_TYPE,
  AGENT_APP_OPTIONS,
  type AgentType,
}

interface AgentData {
  user_group_ids?: string | number[]
  tools?: string | any[]
  use_cases?: string | any[]
  configs?: string | Record<string, any>
  custom_config?: string | {
    agent_type?: string
    channel_config?: Record<string, any>
  }
  agent_type?: string
  agent_type_label?: string
  channel_type?: number
  enable?: boolean | number | string
  sort?: number | string
  channel_config?: Record<string, any>
  agents?: AgentData[]
  count?: number
  settings?: Record<string, any>
}

interface ListParams {
  offset?: number
  limit?: number
  keyword?: string
  group_id?: string
  channel_types?: string
}

interface SaveParams {
  agent_id?: number
  channel_type?: number
  group_id?: number
  configs?: Record<string, any> | string
  logo?: string
  name?: string
  description?: string
  model?: string
  prompt?: string
  sort?: number
  tools?: any[] | string
  use_cases?: any[] | string
  user_group_ids?: number[]
  custom_config?: Record<string, any> | string
  settings?: Record<string, any> | string
  enable?: boolean
}

interface SaveRequestData extends Omit<SaveParams, 'configs' | 'tools' | 'use_cases' | 'custom_config'> {
  configs: string
  tools: string
  use_cases: string
  custom_config: string
  settings: string
}

const parseJsonField = <T>(value: string | T, defaultValue: T): T => {
  if (typeof value !== 'string')
    return value ?? defaultValue

  try {
    return JSON.parse(value) ?? defaultValue
  }
  catch {
    return defaultValue
  }
}

export function getFormatAgentData(data: AgentData = {}): AgentData {
  data.user_group_ids = parseJsonField(data.user_group_ids, [])
  data.user_group_ids = [...new Set(data.user_group_ids)]
  data.tools = parseJsonField(data.tools, [])
  data.use_cases = parseJsonField(data.use_cases, [])
  data.configs = parseJsonField(data.configs, {})
  data.custom_config = parseJsonField(data.custom_config, {})
  data.settings = parseJsonField(data.settings, {})

  data.agent_type = data.agent_type || (data.custom_config as any)?.agent_type || AGENT_TYPE.PROMPT
  data.agent_type_label = `agent_app.${data.agent_type}`

  data.enable = !!+(data.enable ?? false)
  data.sort = +(data.sort ?? 0)
  data.channel_config = (data.custom_config as any)?.channel_config || {}
  return data
}

export const agentApi = {
  async list({ params = {} as ListParams }: { params: ListParams } = { params: {} }): Promise<AgentData> {
    params = JSON.parse(JSON.stringify(params))
    params.offset = params.offset ?? 0
    params.limit = params.limit ?? 10
    params.group_id = (!params.group_id || +params.group_id < 1) ? '0' : params.group_id

    if (!params.keyword)
      delete params.keyword

    if (!params.channel_types)
      delete params.channel_types

    const { data = {} } = await service.get('/api/agents/group', { params }).catch(handleError)
    const result = data as AgentData
    result.agents = (result.agents || []).map(item => getFormatAgentData(item))
    result.count = +(result.count ?? 0)
    return result
  },

  async save({ data = {} as SaveParams } = {}): Promise<AgentData> {
    const saveData: SaveParams = {
      agent_id: 0,
      channel_type: 0,
      group_id: 0,
      configs: {},
      logo: '',
      name: '',
      description: '',
      model: '',
      prompt: '',
      sort: 0,
      tools: [],
      use_cases: [],
      user_group_ids: [],
      custom_config: {},
      settings: {},
      enable: true,
      ...data,
    }

    const agent_id = +(saveData.agent_id ?? 0)
    delete saveData.agent_id

    const requestData: SaveRequestData = {
      ...saveData,
      configs: typeof saveData.configs === 'object' ? JSON.stringify(saveData.configs) : saveData.configs as string,
      tools: Array.isArray(saveData.tools) ? JSON.stringify(saveData.tools) : saveData.tools as string,
      use_cases: Array.isArray(saveData.use_cases) ? JSON.stringify(saveData.use_cases) : saveData.use_cases as string,
      custom_config: typeof saveData.custom_config === 'object' ? JSON.stringify(saveData.custom_config) : saveData.custom_config as string,
      settings: typeof saveData.settings === 'object' ? JSON.stringify(saveData.settings) : saveData.settings as string,
    }

    if (typeof requestData.enable === 'undefined')
      requestData.enable = true

    const { data: result = {} } = await service[agent_id ? 'put' : 'post'](`/api/agents${agent_id ? `/${agent_id}` : ''}`, requestData).catch(handleError)
    return getFormatAgentData(result)
  },

  async delete({ data: { agent_id } }: { data: { agent_id: number } }) {
    return service.delete(`/api/agents/${agent_id}`).catch(handleError)
  },

  async detail({ data: { agent_id } }: { data: { agent_id: number } }) {
    const { data = {} } = await service.get(`/api/agents/${agent_id}`).catch(handleError)
    return getFormatAgentData(data)
  },

  async updateStatus({ data: { agent_id, enable } }: { data: { agent_id: number; enable: boolean } }) {
    return service.patch(`/api/agents/${agent_id}/status`, { enable }).catch(handleError)
  },
}

export default agentApi
