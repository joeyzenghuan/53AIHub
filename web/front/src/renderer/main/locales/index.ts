import { createI18n } from 'vue-i18n'

// element-plus 中的语言配置
import elementEnLocale from 'element-plus/es/locale/lang/en'
import elementZhLocale from 'element-plus/es/locale/lang/zh-cn'
import elementZhTwLocale from 'element-plus/es/locale/lang/zh-tw'
import elementJaLocale from 'element-plus/es/locale/lang/ja'

// 自己的语言配置
import zhLocale from './zh-cn'
import zhTwLocale from './zh-tw'
import enLocale from './en'
import jpLocale from './jp'

// 语言配置整合
const messages = {
  'zh-cn': {
    ...zhLocale,
    ...elementZhLocale
  },
  'zh-tw': {
    ...zhTwLocale,
    ...elementZhTwLocale
  },
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  jp: {
    ...jpLocale,
    ...elementJaLocale
  }
}

// 创建 i18n
const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'zh-cn',
  globalInjection: true, // 全局模式，可以直接使用 $t
  locale: 'zh-cn',
  messages
})

// 注册到全局，方便js上使用
window.$t = i18n.global.t
export const setupI18n = (app) => {
  app.use(i18n)
}
