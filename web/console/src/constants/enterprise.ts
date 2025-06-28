export const WEBSITE_TYPE = {
  INDEPENDENT: 'independent',
  ENTERPRISE: 'enterprise',
  INDUSTRY: 'industry',
} as const

export const WEBSITE_VERSION = {
  FREE: 'free',
  STANDARD: 'standard',
  ENTERPRISE: 'enterprise',
} as const

export const ENTERPRISE_SYNC_FROM = {
  DEFAULT: '0',
  WECOM: '1',
} as const

export const WEBSITE_TYPE_LABEL_MAP = {
  [WEBSITE_TYPE.INDEPENDENT]: 'module.website_type_independent',
  [WEBSITE_TYPE.ENTERPRISE]: 'module.website_type_enterprise',
  [WEBSITE_TYPE.INDUSTRY]: 'module.website_type_industry',
}

export const WEBSITE_TYPE_DESC_MAP = {
  [WEBSITE_TYPE.INDEPENDENT]: 'module.website_type_independent_desc',
  [WEBSITE_TYPE.ENTERPRISE]: 'module.website_type_enterprise_desc',
  [WEBSITE_TYPE.INDUSTRY]: 'module.website_type_industry_desc',
}

export const WEBSITE_VERSION_MAP = {
  [WEBSITE_VERSION.FREE]: 'module.website_version_free',
  [WEBSITE_VERSION.STANDARD]: 'module.website_version_standard',
  [WEBSITE_VERSION.ENTERPRISE]: 'module.website_version_enterprise',
}

export const ENTERPRISE_WECOM_SUITE_ID = 'wwdce32ea39893200f'

export type EnterpriseSyncFrom = typeof ENTERPRISE_SYNC_FROM[keyof typeof ENTERPRISE_SYNC_FROM]
