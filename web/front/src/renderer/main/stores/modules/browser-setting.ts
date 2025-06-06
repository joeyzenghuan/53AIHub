import { defineStore } from 'pinia'


export const useBrowserSettingStore = defineStore('browser-setting', {
  state: () => ({
    toolbar_enabled: true,
    toolbar_menus: [
      { name: '生成Q&A', value: 'answer' },
      { name: '网页问答', value: 'parser' },
      { name: '内容总结', value: 'sum' },
      { name: '网页翻译', value: 'translate' },
    ],
    // 划词开关
    glider_enabled: false,
    glider_type: 'immidate',
    glider_menus: [
      { name: '解析', value: 'parser' },
      { name: '问答', value: 'answer' },
      { name: '总结', value: 'sum' },
      { name: '翻译', value: 'translate' },
    ],

    boot_up_enabled: false,
    default_browser_enabled: false,
    default_search_url: 'https://chat.baidu.com/search?word=_word_',
    default_tab_url: '',

  }),

  getters: {

  },
  actions: {

  }
})
