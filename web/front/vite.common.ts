import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import wasm from 'vite-plugin-wasm'
import fs from 'fs'

// 读取 package.json 获取版本号
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
const { version } = packageJson

// 创建生成 version.txt 的插件
const versionPlugin = () => {
  return {
    name: 'version-txt',
    writeBundle: {
      sequential: true,
      order: 'post',
      handler: async (options: any) => {
        const outDir = options.dir || 'dist'
        fs.writeFileSync(path.join(outDir, 'version.txt'), version)
      }
    }
  }
}

// 公共插件配置
export const commonPlugins = [
  vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'webview'
      }
    }
  }),
  createSvgIconsPlugin({
    iconDirs: [resolve(__dirname, 'src/renderer/main/assets/icons')],
    symbolId: 'icon-[name]',
    svgoOptions: {
      plugins: [
        { name: 'removeAttrs', params: { attrs: ['class', 'data-name', 'fill', 'stroke'] } },
        'removeStyleElement'
      ]
    }
  }),
  Components({
    dts: true, // 为组件类型声明生成 dts 文件
    resolvers: [ElementPlusResolver()] // 使用 Element Plus 的组件解析器
  }),
  AutoImport({
    resolvers: [
      ElementPlusResolver(),
      IconResolver({
        prefix: 'Icon'
      })
    ]
  }),
  wasm(),
  versionPlugin()
]

// 公共服务器配置
export const commonServer = {
  host: '0.0.0.0',
  port: 80
}

// 公共解析配置
export const commonResolve = {
  alias: {
    '@': resolve('src/renderer/main')
  }
}

// 公共CSS配置
export const commonCss = {
  postcss: {
    plugins: [tailwindcss]
  }
}

// 公共构建配置
export const commonBuild = {
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'src/renderer/index.html')
    }
  }
}
