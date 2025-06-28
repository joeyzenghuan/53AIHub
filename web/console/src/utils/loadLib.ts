import { lib_host } from './config'


const libs: {
	[key: string]: {
		id: string
		src: string
		callback: () => void
		_promise?: Promise<void>
	}
} = {
  'vditor': {
    id: 'vditor-lib',
    src: `${lib_host}/js/vditor/dist/index.min.js`,
    callback() {
      const css = document.createElement('link')
      css.rel = 'stylesheet'
      css.href = `${lib_host}/js/vditor/dist/index.css`
      document.head.appendChild(css)
    },
	},
	'ueditor': {
		id: 'ueditor-lib',
		src: `${lib_host}/js/UEditor/ueditor.all.min.js`,
		callback() {
			const script = document.createElement('script')
			script.href = `${lib_host}/js/UEditor/ueditor.config.js`
			script.id = 'ueditor-config'
			document.head.appendChild(script)
		},
	},
}

type LibName = keyof typeof libs

export default (name: LibName): Promise<void> => {
  if (!libs[name])
    return Promise.reject(new Error(`Library ${name} not found`))

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
