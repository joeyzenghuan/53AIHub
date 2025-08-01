// 类型声明
declare global {
  interface Window {
    $noop?: () => void
    $getPublicPath?: (path: string) => string
    electron?: any
    $isElectron?: boolean
    $chat53ai?: any
  }
}

export function setupGlobal(app) {
  window.$noop = () => {}

  window.$isElectron = !!window.electron
  if (!window.$chat53ai) {
    window.$chat53ai = {
      getPublicPath: (path: string) => {
        return path
      },
      getPreloadPath: () => {
        return ''
      },
      $on: () => {},
      $updater: () => {},
      $win: () => {}
    }
  }
  window.$getPublicPath = (path: string) => {
    return path
  }
  app.config.globalProperties.$isElectron = window.$isElectron
  app.config.globalProperties.$noop = window.$noop
  app.config.globalProperties.$getPublicPath = window.$getPublicPath
}
