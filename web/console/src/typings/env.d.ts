// / <reference types="vite/client" />
import { ComponentCustomProperties } from 'vue'

// 类型声明，避免ts错误
declare global {
  interface Window {
    $t: (key: string, ...args: any[]) => string
  }
  interface ElMessageBox {
    confirm(message: string, title: string, options?: any): Promise<any>
  }
  interface ElMessage {
    success(message: string): void
    warning(message: string): void
    info(message: string): void
    error(message: string): void
  }
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$t: (key: string, ...args: any[]) => string
		// 获取真实路径
		$getRealPath: ({ url }: { url: string }) => string
		vCopy: string
		vDebounce: boolean
	}
}