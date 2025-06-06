import service from '../config'
import { handleError } from '../errorHandler'
import { CHANNEL_TYPE_53AI, CHANNEL_TYPE_DIFY, CHANNEL_TYPE_VALUE_MAP } from './channel'
import { img_host } from '@/utils/config'

export const AGENT_TYPE_PROMPT = 'prompt'
export const AGENT_TYPE_53AI_AGENT = '53ai_agent'
export const AGENT_TYPE_53AI_WORKFLOW = '53ai_workflow'
export const AGENT_TYPE_COZE_AGENT_CN = 'coze_agent_cn'
export const AGENT_TYPE_COZE_WORKFLOW_CN = 'coze_workflow_cn'
export const AGENT_TYPE_COZE_AGENT = 'coze_agent'
export const AGENT_TYPE_COZE_WORKFLOW = 'coze_workflow'
export const AGENT_TYPE_DIFY_AGENT = 'dify_agent'
export const AGENT_TYPE_DIFY_WORKFLOW = 'dify_workflow'
export const AGENT_TYPE_APP_BUILDER = 'app_builder'
export const AGENT_TYPE_BAILIAN = 'bailian'
export const AGENT_TYPE_VOLCENGINE = 'volcengine'

export type AgentType = typeof AGENT_TYPE_PROMPT
	| typeof AGENT_TYPE_53AI_AGENT
	| typeof AGENT_TYPE_53AI_WORKFLOW
	| typeof AGENT_TYPE_COZE_AGENT_CN
	| typeof AGENT_TYPE_COZE_WORKFLOW_CN
	| typeof AGENT_TYPE_COZE_AGENT
	| typeof AGENT_TYPE_COZE_WORKFLOW
	| typeof AGENT_TYPE_DIFY_AGENT
	| typeof AGENT_TYPE_DIFY_WORKFLOW
	| typeof AGENT_TYPE_APP_BUILDER
	| typeof AGENT_TYPE_BAILIAN
	| typeof AGENT_TYPE_VOLCENGINE

export const AGENT_TYPE_LABEL_MAP = new Map([
  [AGENT_TYPE_PROMPT, 'agent_app.prompt'],
  [AGENT_TYPE_53AI_AGENT, 'agent_app.53ai_agent'],
  [CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_53AI), 'agent_app.53ai_agent'],
  [AGENT_TYPE_53AI_WORKFLOW, 'agent_app.53ai_workflow'],
  [AGENT_TYPE_COZE_AGENT_CN, 'agent_app.coze_cn_agent'],
  [AGENT_TYPE_COZE_WORKFLOW_CN, 'agent_app.coze_cn_workflow'],
  [AGENT_TYPE_COZE_AGENT, 'agent_app.coze_agent'],
  [AGENT_TYPE_COZE_WORKFLOW, 'agent_app.coze_workflow'],
  [AGENT_TYPE_DIFY_AGENT, 'agent_app.dify_agent'],
  [CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_DIFY), 'agent_app.dify_agent'],
  [AGENT_TYPE_DIFY_WORKFLOW, 'agent_app.dify_workflow'],
  [AGENT_TYPE_APP_BUILDER, 'agent_app.app_builder'],
  [AGENT_TYPE_BAILIAN, 'agent_app.bailian'],
  [AGENT_TYPE_VOLCENGINE, 'agent_app.volcengine'],
])
export const AGENT_TYPE_ICON_MAP = new Map([
  [AGENT_TYPE_PROMPT, img_host + '/agent/prompt.png'],
  [AGENT_TYPE_53AI_AGENT, img_host + '/agent/53ai.png'],
  [AGENT_TYPE_53AI_WORKFLOW, img_host + '/agent/53ai.png'],
  [AGENT_TYPE_COZE_AGENT_CN, img_host + '/agent/coze.png'],
  [AGENT_TYPE_COZE_WORKFLOW_CN, img_host + '/agent/coze.png'],
  [AGENT_TYPE_COZE_AGENT, img_host + '/agent/coze.png'],
  [AGENT_TYPE_COZE_WORKFLOW, img_host + '/agent/coze.png'],
  [AGENT_TYPE_DIFY_AGENT, img_host + '/agent/dify.png'],
  [AGENT_TYPE_DIFY_WORKFLOW, img_host + '/agent/dify.png'],
  [AGENT_TYPE_APP_BUILDER, img_host + '/agent/app_builder.png'],
  [AGENT_TYPE_BAILIAN, img_host + '/agent/bailian.png'],
  [AGENT_TYPE_VOLCENGINE, img_host + '/agent/volcengine.png'],
])
export const AGENT_TYPE_RESPONSE_MAP = new Map([
  [AGENT_TYPE_PROMPT, 'chat'],
  [AGENT_TYPE_53AI_AGENT, 'chat'],
  [AGENT_TYPE_53AI_WORKFLOW, 'completion'],
  [AGENT_TYPE_COZE_AGENT_CN, 'chat'],
  [AGENT_TYPE_COZE_WORKFLOW_CN, 'chat'],
  [AGENT_TYPE_COZE_AGENT, 'chat'],
  [AGENT_TYPE_COZE_WORKFLOW, 'chat'],
  [AGENT_TYPE_DIFY_AGENT, 'chat'],
  [AGENT_TYPE_DIFY_WORKFLOW, 'chat'],
  [AGENT_TYPE_APP_BUILDER, 'chat'],
  [AGENT_TYPE_BAILIAN, 'chat'],
  [AGENT_TYPE_VOLCENGINE, 'chat'],
])
export const AGENT_APP_OPTIONS = [
  {
    title: 'intelligent_agent_platform',
    children: [
      AGENT_TYPE_COZE_AGENT_CN,
      AGENT_TYPE_APP_BUILDER,
      AGENT_TYPE_DIFY_AGENT,
      AGENT_TYPE_53AI_AGENT,
      AGENT_TYPE_COZE_WORKFLOW_CN,
      AGENT_TYPE_PROMPT,
    ].map(value => ({
      value,
      label: AGENT_TYPE_LABEL_MAP.get(value) || '',
      icon: AGENT_TYPE_ICON_MAP.get(value) || '',
      response: AGENT_TYPE_RESPONSE_MAP.get(value) || '',
    })),
  },
  {
    title: 'cloud_computing_platform',
    children: [
      AGENT_TYPE_BAILIAN,
      AGENT_TYPE_VOLCENGINE,
    ].map(value => ({
      value,
      label: AGENT_TYPE_LABEL_MAP.get(value) || '',
      icon: AGENT_TYPE_ICON_MAP.get(value) || '',
      response: AGENT_TYPE_RESPONSE_MAP.get(value) || '',
    })),
  },
]

export function getFormatAgentData(data = {}) {
  try {
    data.user_group_ids = (typeof data.user_group_ids === 'string' ? JSON.parse(data.user_group_ids) : data.user_group_ids) || []
  }
  catch (error) {
    data.user_group_ids = []
  }
  data.user_group_ids = data.user_group_ids.map(value => +value)
  try {
    data.tools = typeof data.tools === 'string' ? JSON.parse(data.tools) : data.tools || []
  }
  catch (error) {
    data.tools = []
  }
  try {
    data.use_cases = typeof data.use_cases === 'string' ? JSON.parse(data.use_cases) : data.use_cases || []
  }
  catch (error) {
    data.use_cases = []
  }
  try {
    data.configs = typeof data.configs === 'string' ? JSON.parse(data.configs) : data.configs || {}
  }
  catch (error) {
    data.configs = {}
  }
  try {
    data.custom_config = typeof data.custom_config === 'string' ? JSON.parse(data.custom_config) : data.custom_config || {}
  }
  catch (error) {
    data.custom_config = {}
  }
  data.agent_type = data.agent_type || data.custom_config.agent_type || AGENT_TYPE_PROMPT
  data.agent_type_label = AGENT_TYPE_LABEL_MAP.get(data.agent_type) || ''
  if (CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_DIFY) == data.channel_type) {
    data.agent_type = AGENT_TYPE_DIFY_AGENT || 0
    data.agent_type_label = AGENT_TYPE_LABEL_MAP.get(AGENT_TYPE_DIFY_AGENT) || ''
  }
  if (CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_53AI) == data.channel_type) {
    data.agent_type = AGENT_TYPE_53AI_AGENT || 0
    data.agent_type_label = AGENT_TYPE_LABEL_MAP.get(AGENT_TYPE_53AI_AGENT) || ''
  }
  data.enable = !!+data.enable || false
  data.sort = +data.sort || 0
  data.channel_config = data.custom_config.channel_config || {}
  return data
}

export const agentApi = {
  async list({ params = {} }: { params: { offset?: number; limit?: number; keyword?: string; group_id?: string; channel_types?: string } } = {}) {
    params = JSON.parse(JSON.stringify(params))
    if (!params.offset)
      params.offset = 0
    if (!params.limit)
      params.limit = 10
    if (!+params.group_id || +params.group_id < 1)
      params.group_id = '0'
    if (!params.keyword)
      delete params.keyword
    if (!params.channel_types)
      delete params.channel_types
    const { data = {} } = await service.get('/api/agents/group', { params }).catch(handleError)
    data.agents = (data.agents || []).map(item => getFormatAgentData(item))
    data.count = +data.count || 0
    return data
  },
  async save({ data } = {}) {
    data = {
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
      enable: true,
      ...data,
    }
    const agent_id = +data.agent_id || 0
    delete data.agent_id
    if (typeof data.configs === 'object')
      data.configs = JSON.stringify(data.configs)
    if (typeof data.tools === 'object')
      data.tools = JSON.stringify(data.tools)
    if (typeof data.use_cases === 'object')
      data.use_cases = JSON.stringify(data.use_cases)
    if (typeof data.custom_config === 'object')
      data.custom_config = JSON.stringify(data.custom_config)
    if (typeof data.enable === 'undefined')
      data.enable = true
    const { data: result = {} } = await service[agent_id ? 'put' : 'post'](`/api/agents${agent_id ? `/${agent_id}` : ''}`, data).catch(handleError)
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

export type { agentApi }
