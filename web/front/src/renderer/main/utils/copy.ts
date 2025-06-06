export function copyToClip(text: string) {
  return new Promise((resolve, reject) => {
    try {
      const input: HTMLTextAreaElement = document.createElement('textarea')
      input.setAttribute('readonly', 'readonly')
      input.value = text
      document.body.appendChild(input)
      input.select()
      if (document.execCommand('copy'))
        document.execCommand('copy')
      document.body.removeChild(input)
      resolve(text)
    }
    catch (error) {
      reject(error)
    }
  })
}

/**
 * 复制图片
 */
export function copyImageToClip(url: string) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = url

    img.crossOrigin = 'Anonymous'

    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = img.width
      canvas.height = img.height

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.drawImage(img, 0, 0)
      // 将canvas转为blob
      canvas.toBlob(async (blob) => {
        try {
          const clipboardItem = new ClipboardItem({ 'image/png': blob })
          // https://w3c.github.io/clipboard-apis/#dom-clipboard-write
          await navigator.clipboard.write([clipboardItem])
          resolve()
          console.log('Copied to clipboard successfully!')
        }
        catch (error) {
          console.error('Unable to write to clipboard.', error)
          copyToClip(url).then(() => resolve())
        }
      }, 'image/png')
    }
  })
}
