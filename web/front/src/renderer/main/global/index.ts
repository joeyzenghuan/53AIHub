
export function setupGlobal(app) {
  window.$noop = function () { }

  window.$isElectron = !!window.electron
  if (!window.$chat53ai) {
    window.$chat53ai = {
      getPublicPath: (path: string) => {
        return path
      },
      getPreloadPath: () => {
        return ''
      },
      $on() {

      },
      $updater() {

      },
      $win() {

      }
    }
  }
  window.$getPublicPath = window.$chat53ai.getPublicPath
  app.config.globalProperties.$isElectron = window.$isElectron
  app.config.globalProperties.$noop = window.$noop
  app.config.globalProperties.$getPublicPath = window.$getPublicPath

}
