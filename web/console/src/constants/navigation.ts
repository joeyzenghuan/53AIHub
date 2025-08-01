export const NAVIGATION_TYPE = {
  SYSTEM: 1,
  EXTERNAL: 2,
  CUSTOM: 3
} as const

export type NavigationType = (typeof NAVIGATION_TYPE)[keyof typeof NAVIGATION_TYPE]

export const NAVIGATION_TARGET = {
  SELF: 1,
  BLANK: 2
}
export type NavigationTarget = (typeof NAVIGATION_TARGET)[keyof typeof NAVIGATION_TARGET]

export const NAVIGATION_TYPE_LABEL_MAP = new Map([
  [NAVIGATION_TYPE.SYSTEM, 'navigation.type.system'],
  [NAVIGATION_TYPE.EXTERNAL, 'navigation.type.external'],
  [NAVIGATION_TYPE.CUSTOM, 'navigation.type.custom']
])

export const NAVIGATION_TARGET_LABEL_MAP = new Map([
  [NAVIGATION_TARGET.SELF, 'navigation.target.self'],
  [NAVIGATION_TARGET.BLANK, 'navigation.target.blank']
])
