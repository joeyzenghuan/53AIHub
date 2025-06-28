
import { LIB_HOST } from '@/api/host'

const libs = {
  'vditor': {
    id: 'vditor-lib',
    src: `${LIB_HOST}/js/vditor/dist/index.min.js`,
    callback() {
      const css = document.createElement('link')
      css.rel = 'stylesheet'
      css.href = `${LIB_HOST}/js/vditor/dist/index.css`
      document.head.appendChild(css)
    },
  },
}

export default (name: 'vditor'): Promise<void> => {
  if (!libs[name])
    return Promise.reject()

  if (!libs[name]._promise) {
    libs[name]._promise = new Promise((resolve, reject) => {
      const { src, id, callback } = libs[name]

      const script = document.createElement('script')
      script.src = src
      script.id = id
      if (src.endsWith('.mjs'))
        script.type = 'module'

      script.onload = () => {
        callback && callback()
        setTimeout(() => {
          resolve()
        }, 100)
      }
      script.onerror = () => {
        reject()
      }
      document.body.appendChild(script)
    })
  }

  return libs[name]._promise
}
