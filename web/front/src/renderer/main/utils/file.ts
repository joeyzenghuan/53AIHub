export const downloadFile = (data: any, fileName: string) => {
  let content = data
  if (typeof data === 'object') {
    content = JSON.stringify(data)
  }
  const blob = new Blob([content], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  a.click()
  URL.revokeObjectURL(url)
}
