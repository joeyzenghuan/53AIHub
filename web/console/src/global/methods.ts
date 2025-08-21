import { App } from 'vue'
import { base_path } from '@/utils/config'

// 允许的键盘按键
const ALLOWED_KEYS = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '.',
  'Backspace',
  'Delete',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
] as const

type Key = (typeof ALLOWED_KEYS)[number]

const methods = {
  $noop: () => {},
  $getRealPath: ({ url = '' }: { url: string }): string => {
    return base_path + (url || '')
  },
  $numberInputKeydownHandler: (e: KeyboardEvent) => {
    if (!ALLOWED_KEYS.includes(e.key as Key)) {
      e.preventDefault()
      e.stopPropagation()
    }
  },
} as const

// 定义全局方法类型
export type GlobalMethods = typeof methods

/**
 * 设置全局方法
 * @param app Vue 应用实例
 */
export function setupGlobal(app: App) {
  Object.assign(app.config.globalProperties, methods)
  Object.assign(window, methods)
}
