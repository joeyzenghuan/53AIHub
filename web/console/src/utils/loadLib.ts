const libs = {
  'echart': {
    id: 'echart-lib',
    // src: 'https://cdn.bootcdn.net/ajax/libs/echarts/5.4.2/echarts.min.js',
    src: '/libs/js/echarts.min.js',
  },
  'xlsx': {
    id: 'xlsx-lib',
    src: '/libs/js/xlsx.mini.min.js',
  },
  'html2canvas': {
    id: 'html2canvas-lib',
    src: '/libs/js/html2canvas.min.js',
  },
  'jspdf': {
    id: 'jspdf-lib',
    src: '/libs/js/jspdf.umd.min.js',
  },
  'pdfjs': {
    id: 'pdf-lib',
    // src: '/libs/js/pdf.min.js',
    src: 'https://oss.ibos.cn/pdf/build/pdf.js',
    // src: 'https://cdn.bootcdn.net/ajax/libs/pdf.js/3.10.111/pdf.min.js',
    callback: () => {
      // window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.bootcdn.net/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js'
      // window.pdfjsLib.GlobalWorkerOptions.workerSrc = '/libs/js/pdf.worker.min.js'
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://oss.ibos.cn/pdf/build/pdf.worker.js'
    },
  },
  // 0.7.4
  'web-highlighter': {
    id: 'web-highlighter-lib',
    src: '/libs/js/web-highlighter.min.js',
  },
  // https://github.com/dagrejs/dagre
  'dagre': {
    id: 'dagre-lib',
    src: '/libs/js/dagre.min.js',
  },
  'konva': {
    id: 'konva-lib',
    src: '/libs/js/konva.min.js',
  },
  'pdfviewer': {
    id: 'pdfviewer-lib',
    src: 'https://cdn.bootcdn.net/ajax/libs/pdf.js/4.4.168/pdf_viewer.min.mjs',
    callback: () => {
      const css = document.createElement('link')
      css.rel = 'stylesheet'
      css.href = 'https://cdn.bootcdn.net/ajax/libs/pdf.js/4.4.168/pdf_viewer.css'
      document.head.appendChild(css)
    },
  },
  'highlight': {
    id: 'highlight-lib',
    src: '/libs/js/highlight.min.js',
  },
  'mammoth': {
    id: 'mammoth-lib',
    src: '/libs/js/mammoth.browser.min.js',
  },

}

export default (name: string): Promise<void> => {
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
