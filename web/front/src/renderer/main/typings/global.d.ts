import { ComponentCustomProperties } from 'vue'

declare global {
  interface Window {
    $t: (key: string, params?: Record<string, any>) => string
    $isElectron: boolean
    $chat53ai: any
    $getPublicPath: (path: string) => string;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $noop: () => void;
    $getPublicPath: (path: string) => string;
    // is electron
    $isElectron: boolean;
  }
}
