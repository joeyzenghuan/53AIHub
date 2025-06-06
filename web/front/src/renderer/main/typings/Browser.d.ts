declare namespace Browser {
  interface Tab {
    id: number | string
    title: string
    closable: boolean
    url: string
    defaultUrl: string
    icon: string
    type: 'browser' | 'page' | 'multibrowser'
    timestamp: number
    loading: 'loading' | 'error' | 'none' | 'completed' | 'abort'
    component: any
    browsers: Tab[]
    width: number
    ability: boolean
    render?: boolean
    webview?: any
  }
}
