export const NAVIGATION_TYPE = {
  SYSTEM: 1,
  EXTERNAL: 2,
  CUSTOM: 3,
} as const
export type NavigationType = (typeof NAVIGATION_TYPE)[keyof typeof NAVIGATION_TYPE]
export const NAVIGATION_TARGET = {
  SELF: 1,
  BLANK: 2,
} as const
export type NavigationTarget = (typeof NAVIGATION_TARGET)[keyof typeof NAVIGATION_TARGET]

export const INIT_DATA_LIST = [
  {
    jump_path: '/index',
    name: '首页',
    sort: 9999,
    config: JSON.stringify({
      target: NAVIGATION_TARGET.SELF,
      seo_title: '',
      seo_keywords: '',
      seo_description: '',
    }),
  },
  {
    jump_path: '/agent',
    name: '智能体',
    sort: 9998,
    config: JSON.stringify({
      target: NAVIGATION_TARGET.SELF,
      seo_title: '',
      seo_keywords: '',
      seo_description: '',
    }),
  },
  {
    jump_path: '/prompt',
    name: '提示词',
    sort: 9997,
    config: JSON.stringify({
      target: NAVIGATION_TARGET.SELF,
      seo_title: '',
      seo_keywords: '',
      seo_description: '',
    }),
  },
  {
    jump_path: '/toolkit',
    name: 'AI工具',
    sort: 9996,
    config: JSON.stringify({
      target: NAVIGATION_TARGET.SELF,
      seo_title: '',
      seo_keywords: '',
      seo_description: '',
    }),
  },
]