import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin, bytecodePlugin, loadEnv } from 'electron-vite'
import { commonPlugins, commonServer, commonResolve, commonCss, commonBuild } from './vite.common'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    main: {
      plugins: [externalizeDepsPlugin(), bytecodePlugin()]
    },
    preload: {
      plugins: [externalizeDepsPlugin(), bytecodePlugin()],
      build: {
        rollupOptions: {
          input: {
            index: resolve(__dirname, 'src/preload/index.ts'),
            fastChat: resolve(__dirname, 'src/preload/fastChat.ts'),
            hoverMenu: resolve(__dirname, 'src/preload/hoverMenu.ts')
          },
          output: {
            format: 'cjs'
          }
        }
      }
    },
    renderer: {
      server: commonServer,
      resolve: commonResolve,
      css: commonCss,
      build: commonBuild,
      plugins: commonPlugins,
      define: {
        'process.env': env
      }
    }
  }
})
