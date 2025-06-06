import { ElMessageBox } from 'element-plus'
import service from '../config'
import { handleError } from '../errorHandler'
import { PROVIDER_TYPE_53AI, PROVIDER_TYPE_APP_BUILDER, PROVIDER_TYPE_DIFY } from './provider'

interface ModelConfig {
  id: string
  vision?: boolean
  provider: ChannelType
}

interface ChannelData {
  value?: number
  channel_id?: number
  channel_type?: number | string
  type?: string | number
  name?: string
  id?: string
  label?: string
  icon?: string
  key?: string
  api_key?: string
  base_url?: string
  config?: any
  models?: string[] | string
  model_options?: Array<{
    value: string
    label: string
    icon: string
    vision: boolean
  }>
  owned_by?: string
  priority?: number
  weight?: number
  model_mapping?: string
}

interface ModelItem {
  id: string
  icon?: string
  label?: string
  owned_by?: string
  value?: string
}

export const CHANNEL_TYPE_COZE = 'coze'
export const CHANNEL_TYPE_SILICON_FLOW = 'siliconflow'
export const CHANNEL_TYPE_DEEP_SEEK = 'deepseek'
export const CHANNEL_TYPE_OPEN_AI = 'openai'
export const CHANNEL_TYPE_AZURE = 'azure'
export const CHANNEL_TYPE_DARK_MOON = 'dark_moon'
export const CHANNEL_TYPE_CHAT_GLM = 'zhipu'
export const CHANNEL_TYPE_TONG_YI = 'tongyi'
export const CHANNEL_TYPE_DIFY = 'dify'
export const CHANNEL_TYPE_53AI = '53ai'

export type ChannelType = typeof CHANNEL_TYPE_COZE | typeof CHANNEL_TYPE_SILICON_FLOW | typeof CHANNEL_TYPE_DEEP_SEEK | typeof CHANNEL_TYPE_OPEN_AI | typeof CHANNEL_TYPE_AZURE | typeof CHANNEL_TYPE_DARK_MOON | typeof CHANNEL_TYPE_CHAT_GLM | typeof CHANNEL_TYPE_TONG_YI | typeof CHANNEL_TYPE_DIFY | typeof CHANNEL_TYPE_53AI

export const CHANNEL_TYPE_LABEL_MAP = new Map([
  [CHANNEL_TYPE_COZE, 'coze'],
  [CHANNEL_TYPE_SILICON_FLOW, 'silicon_flow'],
  [CHANNEL_TYPE_DEEP_SEEK, 'deep_seek'],
  [CHANNEL_TYPE_OPEN_AI, 'openai'],
  [CHANNEL_TYPE_AZURE, 'azure_open_ai'],
  [CHANNEL_TYPE_DARK_MOON, 'dark_moon'],
  [CHANNEL_TYPE_CHAT_GLM, 'chat_glm'],
  [CHANNEL_TYPE_TONG_YI, 'tongyi'],
  [CHANNEL_TYPE_DIFY, 'dify'],
  [CHANNEL_TYPE_53AI, '53ai'],
])
export const CHANNEL_TYPE_ICON_MAP = new Map([
  [CHANNEL_TYPE_COZE, 'coze'],
  [CHANNEL_TYPE_SILICON_FLOW, 'silicon-flow'],
  [CHANNEL_TYPE_DEEP_SEEK, 'deep-seek'],
  [CHANNEL_TYPE_OPEN_AI, 'open-ai'],
  [CHANNEL_TYPE_AZURE, 'azure'],
  [CHANNEL_TYPE_DARK_MOON, 'dark-moon'],
  [CHANNEL_TYPE_CHAT_GLM, 'zhipu'],
  [CHANNEL_TYPE_TONG_YI, 'tongyi'],
  [CHANNEL_TYPE_DIFY, 'dify'],
  [CHANNEL_TYPE_53AI, '53ai'],
])
export const CHANNEL_TYPE_VALUE_MAP = new Map([
  [CHANNEL_TYPE_OPEN_AI, 1],
  ['API2D', 2],
  ['Azure', 3],
  ['CloseAI', 4],
  ['OpenAISB', 5],
  ['OpenAIMax', 6],
  ['OhMyGPT', 7],
  ['Custom', 8],
  ['Ails', 9],
  ['AIProxy', 10],
  ['PaLM', 11],
  ['API2GPT', 12],
  ['AIGC2D', 13],
  ['Anthropic', 14],
  ['Baidu', 15],
  ['Zhipu', 16],
  ['Ali', 17],
  ['Xunfei', 18],
  ['AI360', 19],
  ['OpenRouter', 20],
  ['AIProxyLibrary', 21],
  ['FastGPT', 22],
  ['Tencent', 23],
  ['Gemini', 24],
  ['Moonshot', 25],
  ['Baichuan', 26],
  ['Minimax', 27],
  ['Mistral', 28],
  ['Groq', 29],
  ['Ollama', 30],
  ['LingYiWanWu', 31],
  ['StepFun', 32],
  ['AwsClaude', 33],
  [CHANNEL_TYPE_COZE, 34],
  ['coze_agent_cn', 34],
  ['Cohere', 35],
  [CHANNEL_TYPE_DEEP_SEEK, 36],
  ['Cloudflare', 37],
  ['DeepL', 38],
  ['TogetherAI', 39],
  ['Doubao', 40],
  ['Novita', 41],
  ['VertextAI', 42],
  ['Proxy', 43],
  [CHANNEL_TYPE_SILICON_FLOW, 44],
  ['XAI', 45],
  ['Replicate', 46],
  ['Dummy', 47],
  ['dify_agent', 1001],
  ['53ai_agent', 1002],
  ['bailian', 1003],
  ['volcengine', 1004],
  ['app_builder', 1005],
  [CHANNEL_TYPE_DIFY, 1001],
  [CHANNEL_TYPE_53AI, 1002],
  [PROVIDER_TYPE_DIFY, 1001],
  [PROVIDER_TYPE_53AI, 1002],
  [PROVIDER_TYPE_APP_BUILDER, 1005],
])
export const CHANNEL_TYPE_OPTIONS = [CHANNEL_TYPE_SILICON_FLOW, CHANNEL_TYPE_DEEP_SEEK, CHANNEL_TYPE_OPEN_AI, CHANNEL_TYPE_AZURE, CHANNEL_TYPE_DARK_MOON, CHANNEL_TYPE_CHAT_GLM, CHANNEL_TYPE_TONG_YI].map(value => ({
  value,
  label: CHANNEL_TYPE_LABEL_MAP.get(value),
  icon: CHANNEL_TYPE_ICON_MAP.get(value),
  is_add: false,
  add_visible: [CHANNEL_TYPE_SILICON_FLOW, CHANNEL_TYPE_DEEP_SEEK, CHANNEL_TYPE_OPEN_AI].includes(value),
}))
export const OPEN_AI_MODEL_LIST: ModelConfig[] = [
  // 'gpt-4',
  { provider: CHANNEL_TYPE_OPEN_AI, id: 'gpt-4.1', vision: true },
  { provider: CHANNEL_TYPE_OPEN_AI, id: 'gpt-4.1-mini', vision: true },
  { provider: CHANNEL_TYPE_OPEN_AI, id: 'gpt-4o', vision: true },
  { provider: CHANNEL_TYPE_OPEN_AI, id: 'gpt-4o-mini', vision: true },
  { provider: CHANNEL_TYPE_OPEN_AI, id: 'o1', vision: true },
  { provider: CHANNEL_TYPE_OPEN_AI, id: 'o1-mini' },
]

export const SILICON_FLOW_MODEL_LIST: ModelConfig[] = [
  { provider: CHANNEL_TYPE_SILICON_FLOW, id: 'Qwen/Qwen3-8B', vision: false },
  { provider: CHANNEL_TYPE_SILICON_FLOW, id: 'Qwen/Qwen2.5-7B-Instruct' },
  { provider: CHANNEL_TYPE_SILICON_FLOW, id: 'deepseek-ai/DeepSeek-R1' },
  { provider: CHANNEL_TYPE_SILICON_FLOW, id: 'deepseek-ai/DeepSeek-V3', vision: false },
  { provider: CHANNEL_TYPE_SILICON_FLOW, id: 'THUDM/glm-4-9b-chat' },
]

export const DEEP_SEEK_MODEL_LIST: ModelConfig[] = [
  { provider: CHANNEL_TYPE_DEEP_SEEK, id: 'deepseek-chat', vision: false },
  { provider: CHANNEL_TYPE_DEEP_SEEK, id: 'deepseek-reasoner' },
]

export const ALL_MODEL_LIST = [...OPEN_AI_MODEL_LIST, ...SILICON_FLOW_MODEL_LIST, ...DEEP_SEEK_MODEL_LIST]

export const MODEL_ALIAS_MAP = new Map([
  ['deepseek-chat', 'DeepSeek-V3'],
  ['deepseek-reasoner', 'DeepSeek-R1'],
])

export const getModelIcon = ({ value = '' }: { value: string }) => {
  let icon = ''
  if (/deepseek/i.test(value))
    icon = 'deep-seek'
  else if (/tongyi|qwen/i.test(value))
    icon = 'tongyi'
  else if (/thudm/i.test(value))
    icon = 'zhipu'
  else if (/ai\/yi/i.test(value))
    icon = 'yi'
  else if (/internlm/i.test(value))
    icon = 'internlm'
  else if (/baai/i.test(value))
    icon = 'baai'
  else if (/google/i.test(value))
    icon = 'google'
  else if (/mistralai/i.test(value))
    icon = 'mistralai'
  else if (/llama/i.test(value))
    icon = 'llama'

  return icon
}
export const getFormatChannelData = (data: ChannelData = {}) => {
  const channelId = data.channel_id || 0
  data.value = channelId
  data.channel_id = channelId
  data.channel_type = data.channel_type || data.type || 0
  data.type = data.name || data.id || ''
  data.channel_type = data.channel_type || Number(CHANNEL_TYPE_VALUE_MAP.get(data.type || '') || 0) || 0
  data.name = data.name || ''
  data.label = CHANNEL_TYPE_LABEL_MAP.get(data.type || '') || data.name || ''
  data.icon = CHANNEL_TYPE_ICON_MAP.get(data.type || '') || ''
  data.api_key = data.key || ''
  data.base_url = data.base_url || ''

  try {
    data.config = typeof data.config === 'string' ? JSON.parse(data.config) : data.config || {}
  }
  catch (error) {
    data.config = {}
  }

  data.models = typeof data.models === 'string' ? data.models.split(',') : data.models || []
  const model_alias_map = (data.config?.model_alias_map || {}) as Record<string, string>

  data.model_options = (Array.isArray(data.models) ? data.models : []).map(value => ({
    value,
    label: model_alias_map[value] || MODEL_ALIAS_MAP.get(value) || value,
    icon: getModelIcon({ value }) || data.icon || '',
    vision: ALL_MODEL_LIST.find(item => item.id === value)?.vision || false,
  }))

  return data
}

const api = {
  async list({ params = {} }: {
    params: {
      provider_id?: number
      channel_types?: string
    }
  } = { params: {} }) {
    params = JSON.parse(JSON.stringify(params))
    const { data = [] } = await service.get('/api/channels', { params }).catch(handleError)
    const list = data.map((item: ChannelData = {}) => getFormatChannelData(item))
    return list
  },

  async save({ data = {} }: { data: ChannelData } = { data: {} }) {
    data = {
      channel_id: 0,
      key: '',
      base_url: '',
      config: {},
      model_mapping: '',
      models: '',
      name: '',
      priority: 0,
      type: 0,
      weight: 0,
      ...data,
    }
    if (!data.type) {
      data.type = CHANNEL_TYPE_VALUE_MAP.get(data.name) || 0
      if (!data.type)
        return Promise.reject('Invalid channel type')
    }
    const channel_id = data.channel_id
    delete data.channel_id
    if (typeof data.config === 'object') {
      if (data.config.model_alias_map) {
        const models = typeof data.models === 'string' ? data.models.split(',') : data.models || []
        Object.keys(data.config.model_alias_map).forEach((key) => {
          if (!models.includes(key))
            delete data.config.model_alias_map[key]
        })
        if (!Object.keys(data.config.model_alias_map).length)
          delete data.config.model_alias_map
      }
      data.config = JSON.stringify(data.config)
    }
    if (Array.isArray(data.models))
      data.models = data.models.join(',')
    const { data: resultData = {} } = await service[channel_id ? 'put' : 'post'](`/api/channels${channel_id ? `/${channel_id}` : ''}`, data).catch(handleError)
    return getFormatChannelData(resultData)
  },

  async delete({ data: { channel_id } }: { data: { channel_id: number } }) {
    return service.delete(`/api/channels/${channel_id}`).catch(handleError)
  },

  async modelList({ params: { owner = 'all' } }: { params: { owner: string } }) {
    const { data: { models = [] } = {} } = await service.get('/api/channels/models', { params: { owner } }).catch(handleError)
    let list = models.map((item: ModelItem) => {
      const id = item.id || item.value || ''
      const ownedBy = item.owned_by || ''
      return {
        ...item,
        id,
        icon: item.icon || getModelIcon({ value: id }) || CHANNEL_TYPE_ICON_MAP.get(ownedBy) || '',
        label: item.label || MODEL_ALIAS_MAP.get(id) || '',
      }
    })
    list = list.filter(item => ![CHANNEL_TYPE_OPEN_AI, CHANNEL_TYPE_SILICON_FLOW, CHANNEL_TYPE_DEEP_SEEK].includes(item.owned_by || ''))
    const manual_list = [
      ...OPEN_AI_MODEL_LIST.map(model => ({
        value: model.id,
        id: model.id,
        label: model.id,
        icon: CHANNEL_TYPE_ICON_MAP.get(CHANNEL_TYPE_OPEN_AI) || '',
        owned_by: CHANNEL_TYPE_OPEN_AI,
        vision: model.vision,
      })),
      ...SILICON_FLOW_MODEL_LIST.map(model => ({
        value: model.id,
        id: model.id,
        label: model.id,
        icon: getModelIcon({ value: model.id }) || CHANNEL_TYPE_ICON_MAP.get(CHANNEL_TYPE_SILICON_FLOW) || '',
        owned_by: CHANNEL_TYPE_SILICON_FLOW,
        vision: model.vision,
      })),
      ...DEEP_SEEK_MODEL_LIST.map(model => ({
        value: model.id,
        id: model.id,
        label: MODEL_ALIAS_MAP.get(model.id) || model.id,
        icon: CHANNEL_TYPE_ICON_MAP.get(CHANNEL_TYPE_DEEP_SEEK) || '',
        owned_by: CHANNEL_TYPE_DEEP_SEEK,
        vision: model.vision,
      })),
    ]
    list.push(...manual_list)
    return list
  },

  async cozeWorkspaceList() {
    const { data = [] } = await service.get('/api/coze/workspaces').catch((error: any = {}) => {
      const { response: { data: { code } = {} } = {} } = error
      if ([13].includes(+code)) {
        ElMessageBox.confirm(
          (window as any).$t('coze_cn_not_auth', (window as any).$t('tip')),
          (window as any).$t('tip'),
          {
            confirmButtonText: (window as any).$t('action_go'),
            type: 'warning',
            closeOnClickModal: false,
            showClose: false,
            showCancelButton: false,
          },
        ).then(() => {
          location.hash = '#/platform'
        })
        return Promise.reject(error)
      }
      return handleError(error)
    })
    return data
  },

  async cozeBotList({ params: { workspace_id } = { workspace_id: 0 } }: {
    params: { workspace_id: number }
  } = { params: { workspace_id: 0 } }) {
    const { data = [] } = await service.get(`/api/coze/workspaces/${workspace_id}/bots`).catch(handleError)
    return data
  },

  async appBuilderBotList() {
    const { data = [] } = await service.get('/api/appbuilder/bots').catch(handleError)
    return data
  },
}

export { api as channelApi }
export default api
