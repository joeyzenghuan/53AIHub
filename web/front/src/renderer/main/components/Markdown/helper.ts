

import loadLib from '@/utils/loadLib'

export const markdownEditor = async (element: HTMLDivElement | string | null, options: any = {}) => {
  if (!element) {
    element = document.createElement('div')
  }
  await loadLib('vditor')
  return new window.Vditor(element, {
    toolbar: [
      'undo',
      'redo',
      '|',
      'headings',
      'bold',
      'italic',
      'strike',
      'line',
      'quote',
      '|',
      'list',
      'ordered-list',
      'check'
    ],
    mode: 'ir',  // 设置默认的编辑模式
    preview: {},
    cache: {
      enable: false
    },
    cdn: window.$isElectron ? 'http://chat53dev.53ai.com/libs/js/vditor' : window.$chat53ai.getPublicPath('/libs/vditor'),
    ...options
  })
}

export const mrakdownPreivew = async (element: HTMLDivElement | null, content: string = '', options: Partial<IVditorOptions> = {}) => {
  if (!element) element = document.createElement('div')

  await loadLib('vditor')
  window.Vditor.preview(element, content, {
    mode: 'light',
    hljs: {
      lineNumber: true,
      style: 'github'
    },
    math: {
      inlineDigit: true,
      macros: {}
    },
    cdn: window.$isElectron ? 'http://chat53dev.53ai.com/libs/js/vditor' : window.$chat53ai.getPublicPath('/libs/vditor'),
    ...options
  })
}
