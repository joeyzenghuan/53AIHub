import { img_host } from '@/utils/config'

// 平台类型定义
const PLATFORM_TYPES = {
  'PROMPT': 'prompt',
  'COZE_CN': 'coze_cn',
  'APP_BUILDER': 'app_builder',
  '53AI': '53ai',
  'DIFY': 'dify',
  'BAILIAN': 'bailian',
  'VOLCENGINE': 'volcengine',
  'YUANQI': 'yuanqi',
  'FASTGPT': 'fastgpt',
} as const

const AGENT_TYPE = {
  'PROMPT': 'prompt',
  'COZE_AGENT_CN': 'coze_agent_cn',
  'APP_BUILDER': 'app_builder',
  '53AI_AGENT': '53ai_agent',
  'DIFY_AGENT': 'dify_agent',
  'BAILIAN': 'bailian',
  'VOLCENGINE': 'volcengine',
  'YUANQI': 'yuanqi',
  'FASTGPT_AGENT': 'fastgpt_agent',
} as const

// 统一的平台配置
const PLATFORM_CONFIG = {
  [PLATFORM_TYPES.PROMPT]: {
    // 提供商ID
    providerValue: 0,
    // 渠道ID
    channelValue: 0,
    // 分类
    category: 'model_platform',
    // 需不需要授权
    auth: false,
    // 智能体列表
    agents: [
      {
        id: AGENT_TYPE.PROMPT,
        name: AGENT_TYPE.PROMPT,
      },
    ],
  },
  [PLATFORM_TYPES.COZE_CN]: {
    providerValue: 1,
    channelValue: 34,
    category: 'intelligent_agent_platform',
    auth: true,
    agents: [
      {
        id: AGENT_TYPE.COZE_AGENT_CN,
        name: AGENT_TYPE.COZE_AGENT_CN,
      },
    ],
  },
  [PLATFORM_TYPES.APP_BUILDER]: {
    providerValue: 3,
    channelValue: 1005,
    category: 'cloud_computing_platform',
    auth: true,
    agents: [
      {
        id: AGENT_TYPE.APP_BUILDER,
        name: AGENT_TYPE.APP_BUILDER,
      },
    ],
  },
  [PLATFORM_TYPES['53AI']]: {
    providerValue: 4,
    channelValue: 1002,
    category: 'intelligent_agent_platform',
    auth: true,
    agents: [
      {
        id: AGENT_TYPE['53AI_AGENT'],
        name: AGENT_TYPE['53AI_AGENT'],
      },
    ],
  },
  [PLATFORM_TYPES.DIFY]: {
    channelValue: 1001,
    providerValue: 1001,
    category: 'intelligent_agent_platform',
    auth: false,
    agents: [
      {
        id: AGENT_TYPE.DIFY_AGENT,
        name: AGENT_TYPE.DIFY_AGENT,
      },
    ],
  },
  [PLATFORM_TYPES.BAILIAN]: {
    channelValue: 1003,
    providerValue: 1003,
    category: 'cloud_computing_platform',
    auth: false,
    agents: [
      {
        id: AGENT_TYPE.BAILIAN,
        name: AGENT_TYPE.BAILIAN,
      },
    ],
  },
  [PLATFORM_TYPES.VOLCENGINE]: {
    channelValue: 1004,
    providerValue: 1004,
    category: 'cloud_computing_platform',
    auth: false,
    agents: [
      {
        id: AGENT_TYPE.VOLCENGINE,
        name: AGENT_TYPE.VOLCENGINE,
      },
    ],
  },
  [PLATFORM_TYPES.YUANQI]: {
    channelValue: 1006,
    providerValue: 1006,
    category: 'intelligent_agent_platform',
    auth: false,
    agents: [
      {
        id: AGENT_TYPE.YUANQI,
        name: AGENT_TYPE.YUANQI,
      },
    ],
  },
  [PLATFORM_TYPES.FASTGPT]: {
    channelValue: 22,
    providerValue: 22,
    category: 'intelligent_agent_platform',
    auth: false,
    agents: [
      {
        id: AGENT_TYPE.FASTGPT_AGENT,
        name: AGENT_TYPE.FASTGPT_AGENT,
      },
    ],
  },
} as const

// 导出常量
export const AGENT_TYPES = AGENT_TYPE

export const CHANNEL_TYPES = PLATFORM_TYPES

export const PROVIDER_TYPES = PLATFORM_TYPES

const PROVIDER_VALUES = Object.fromEntries(
  Object.entries(PLATFORM_CONFIG).map(([key, config]) => [key, config.providerValue]),
) as Record<string, number>

export const AGENT_MODES = {
  CHAT: 'chat',
  COMPLETION: 'completion',
} as const

export const AGENT_CATEGORIES = {
  INTELLIGENT_AGENT_PLATFORM: 'intelligent_agent_platform',
  CLOUD_COMPUTING_PLATFORM: 'cloud_computing_platform',
  MODEL_PLATFORM: 'model_platform',
} as const

export const PROVIDER_CATEGORIES = {
  INTELLIGENT_AGENT_PLATFORM: 'intelligent_agent_platform',
  CLOUD_COMPUTING_PLATFORM: 'cloud_computing_platform',
}
// 类型定义
export type ProviderId = number
export type AgentType = typeof AGENT_TYPES[keyof typeof AGENT_TYPES]
export type ChannelType = typeof CHANNEL_TYPES[keyof typeof CHANNEL_TYPES]
export type ChannelValue = number
export type ProviderType = typeof PROVIDER_TYPES[keyof typeof PROVIDER_TYPES]
export type ProviderValue = typeof PROVIDER_VALUES[keyof typeof PROVIDER_VALUES]
export type AgentMode = typeof AGENT_MODES[keyof typeof AGENT_MODES]
export type AgentCategory = typeof AGENT_CATEGORIES[keyof typeof AGENT_CATEGORIES]
export type ProviderCategory = typeof PROVIDER_CATEGORIES[keyof typeof PROVIDER_CATEGORIES]

// 配置接口
interface ProviderConfig {
  id: ProviderId
  name: string
  icon: string
  label: string
  channelId: ChannelType
  agentId: AgentType
  auth: boolean
  category: ProviderCategory
}

interface ChannelConfig {
  id: ChannelType
  name: string
  label: string
  icon: string
  channelType: number
}

interface AgentConfig {
  id: AgentType
  name: AgentType
  label: string
  icon: string
  channelType: ChannelType
  channelValue: ChannelValue
  providerId: ProviderValue
  mode: AgentMode
  category: AgentCategory
}

// 通用配置生成函数
const createConfig = <T>(type: string, template: (type: string) => T): T => template(type)

// 配置数据生成
export const providers: Record<ProviderId, ProviderConfig> = Object.fromEntries(
  Object.entries(PLATFORM_CONFIG).filter(([key, config]) => config.providerValue > 0).map(([key, config]) => [
    config.providerValue,
    createConfig(key, type => ({
      id: config.providerValue,
      name: type,
      icon: type,
      label: `provider_platform.${type}`,
      channelId: type as ChannelType,
      agentId: config.agents[0].name as AgentType,
      auth: config.auth,
      category: config.category as ProviderCategory,
    })),
  ]),
) as Record<ProviderId, ProviderConfig>

export const channels: Record<ChannelType, ChannelConfig> = Object.fromEntries(
  Object.entries(PLATFORM_CONFIG).map(([key, config]) => [
    key,
    createConfig(key, type => ({
      id: type as ChannelType,
      name: type,
      label: `provider_platform.${type}`,
      icon: type,
      channelType: config.channelValue,
    })),
  ]),
) as Record<ChannelType, ChannelConfig>

export const agents: Record<AgentType, AgentConfig> = Object.fromEntries(
  Object.entries(PLATFORM_CONFIG).map(([key, config]) => [
    config.agents[0].name,
    createConfig(config.agents[0].name, type => ({
      id: type as AgentType,
      name: type as AgentType,
      label: `agent_app.${type}`,
      icon: `${img_host}/agent/${type.toLowerCase()}.png`,
      channelType: key as ChannelType,
      channelValue: config.channelValue as ChannelValue,
      providerId: config.providerValue as ProviderValue,
      mode: 'chat' as AgentMode,
      category: config.category as AgentCategory,
    })),
  ]),
) as Record<AgentType, AgentConfig>

// 渠道类型映射
const CHANNEL_MAPPINGS = [
  ['openai', 1], ['API2D', 2], ['Azure', 3], ['azure', 3], ['CloseAI', 4], ['OpenAISB', 5],
  ['OpenAIMax', 6], ['OhMyGPT', 7], ['Custom', 8], ['Ails', 9], ['AIProxy', 10],
  ['PaLM', 11], ['API2GPT', 12], ['AIGC2D', 13], ['Anthropic', 14], ['Baidu', 15],
  ['Zhipu', 16], ['zhipu', 16], ['Ali', 17], ['Xunfei', 18], ['AI360', 19], ['OpenRouter', 20],
  ['AIProxyLibrary', 21], ['FastGPT', 22], ['Tencent', 23], ['Gemini', 24],
  ['Moonshot', 25], ['dark_moon', 25], ['Baichuan', 26], ['Minimax', 27], ['Mistral', 28],
  ['Groq', 29], ['Ollama', 30], ['LingYiWanWu', 31], ['StepFun', 32],
  ['AwsClaude', 33], ['coze', 34], ['Cohere', 35], ['deepseek', 36],
  ['deep_seek', 36], ['Cloudflare', 37], ['DeepL', 38], ['TogetherAI', 39],
  ['Doubao', 40], ['Novita', 41], ['VertextAI', 42], ['Proxy', 43],
  ['siliconflow', 44], ['silicon_flow', 44], ['XAI', 45], ['Replicate', 46],
  ['Dummy', 47], ['dify', 1001], ['53ai', 1002],
] as const

// 模型配置
export const models = {
  siliconflow: {
    id: 'siliconflow',
    name: 'siliconflow',
    label: 'provider_platform.siliconflow',
    icon: 'siliconflow',
    channelType: 44,
  },
  deepseek: {
    id: 'deepseek',
    name: 'deepseek',
    label: 'provider_platform.deepseek',
    icon: 'deepseek',
    channelType: 36,
  },
  openai: {
    id: 'openai',
    name: 'openai',
    label: 'provider_platform.openai',
    icon: 'openai',
    channelType: 1,
  },
  azure: {
    id: 'azure',
    name: 'azure',
    label: 'provider_platform.azure',
    icon: 'azure',
    channelType: 3,
  },
  dark_moon: {
    id: 'dark_moon',
    name: 'dark_moon',
    label: 'provider_platform.dark_moon',
    icon: 'dark_moon',
    channelType: 25,
  },
  zhipu: {
    id: 'zhipu',
    name: 'zhipu',
    label: 'provider_platform.zhipu',
    icon: 'zhipu',
    channelType: 16,
  },
  tongyi: {
    id: 'tongyi',
    name: 'tongyi',
    label: 'provider_platform.tongyi',
    icon: 'tongyi',
    channelType: 47,
  },
}

export const CHANNEL_TYPE_VALUE_MAP = new Map([
  ...CHANNEL_MAPPINGS,
  ...Object.entries(agents).map(([key, value]) => [key, value.channelValue] as const),
])

// 工具函数
export const getProviderByAgentId = (agentId: AgentType) =>
  agents[agentId]?.providerId && providers[agents[agentId].providerId]

export const getChannelByAgentId = (agentId: AgentType) =>
  agents[agentId]?.channelType && channels[agents[agentId].channelType]

export const getAgentsByCategory = (category: AgentConfig['category']) =>
  Object.values(agents).filter(agent => agent.category === category)

export const getAgentsByProvider = (providerId: ProviderId) =>
  Object.values(agents).filter(agent => agent.providerId === providerId)

export const getAgentsByChannel = (channelType: ChannelType) =>
  Object.values(agents).filter(agent => agent.channelType === channelType)

export const getAgentByAgentType = (agentType: AgentType): AgentConfig =>
  agents[agentType] || {} as AgentConfig

export const getAgentByChannelType = (channelValue: ChannelValue): AgentConfig =>
  Object.values(agents).find(agent => agent.channelValue === channelValue) || {} as AgentConfig

export const getProvidersByAuth = (auth: boolean): ProviderConfig[] =>
  Object.values(providers).filter(provider => provider.auth === auth)

export const getProviderIdsByAuth = (auth: boolean): ProviderId[] => {
  return getProvidersByAuth(auth).map(provider => provider.id)
}
