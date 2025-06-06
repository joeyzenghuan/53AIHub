import path from 'path'
import type { PluginOption } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// import { visualizer } from 'rollup-plugin-visualizer'

function setupPlugins(env: ImportMetaEnv): PluginOption[] {
  return [
    vue({}),
    env.VITE_GLOB_APP_PWA === 'true' && VitePWA({
      injectRegister: 'auto',
      manifest: {
        name: '53aiHub',
        short_name: '53aiHub',
        icons: [
          { src: 'pwa-140x140.png', sizes: '140x140', type: 'image/png' },
          { src: 'pwa-210x210.png', sizes: '210x210', type: 'image/png' },
        ],
      },
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[name]',
    }),
    wasm(),
    topLevelAwait(),
  ]
}

export default defineConfig((env) => {
  const viteEnv = loadEnv(env.mode, process.cwd()) as unknown as ImportMetaEnv
  const vitePlatform = viteEnv.VITE_PLATFORM || 'web'

  return {
    base: '/console',
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
      },
    },
    plugins: setupPlugins(viteEnv),
    server: {
      host: '0.0.0.0',
      port: 81,
      open: false,
      proxy: {
        '/api': {
          target: viteEnv.VITE_APP_API_BASE_URL,
          changeOrigin: true, // 允许跨域
          rewrite: path => path.replace('/api/', '/'),
        },
      },
    },
    build: {
      outDir: vitePlatform === 'web' ? 'dist' : `${vitePlatform}-dist`,
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false,
      },
      assetsDir: 'static/images/',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // 解决打包时Some chunks are larger警告
          // manualChunks(id) {
          //   if (id.includes('node_modules')) {
          //     return id
          //       .toString()
          //       .split('node_modules/')[1]
          //       .split('/')[0]
          //       .toString()
          //   }
          // },
        },
      },
    },
  }
})
