import loadLib from './loadLib'
import { runResolvers } from './index'
import { remoteToDataUrl } from './file'

export default async ({ pdfDom, title, onProgress, domCountLimit = 50 } = {}) => {
	// a4纸的正常尺寸是宽592.28，高是841.89，这里针对我自己的项目将宽高调换了
	const A4_WIDTH = 595.28
	const A4_HEIGHT = 841.89
	const A4_PADDING = 24

	// 加载脚本库
	await Promise.all([!window.html2canvas ? loadLib('html2canvas') : Promise.resolve(), !window.jspdf ? loadLib('jspdf') : Promise.resolve()])

	// 图片远程地址转本地base64地址，canvas解决跨域问题
	const imgElList = pdfDom.querySelectorAll('img')
	if (imgElList && imgElList.length) {
		await Promise.all(Array.from(imgElList).map((item, index) => new Promise((resolve, reject) => {
			const imgEl = imgElList[index]
			const imgUrl = ((imgEl && imgEl.src) || '').replace(/oss.ibos.cn/, 'img.ibos.cn')
			const clearImg = () => {
				const imgParentEl = (imgEl && imgEl.parentNode) || (imgEl && imgEl.parentElement)
				if (imgParentEl) imgParentEl.removeChild(imgEl)
				resolve(true)
			}
			if (!imgUrl || /^file:\/\//i.test(imgUrl) || /C:\//i.test(imgUrl)) return clearImg()
			if (/;base64,/.test(imgUrl)) return resolve(true)
			remoteToDataUrl({ url: imgUrl }).then((dataUrl) => {
				imgEl.onload = () => {
					resolve()
				}
				imgEl.onerror = () => {
					clearImg()
				}
				imgEl.src = dataUrl
			}).catch(() => {
				clearImg()
			})
		})))
	}

	// 先把dom宽度设置成a4尺寸
	const A4Dom = pdfDom.cloneNode(true)
	A4Dom.style.width = A4_WIDTH + 'px'
	A4Dom.style.paddingTop = A4_PADDING + 'px'
	A4Dom.style.paddingBottom = A4_PADDING + 'px'
	A4Dom.style.paddingLeft = A4_PADDING + 'px'
	A4Dom.style.paddingRight = A4_PADDING + 'px'
	A4Dom.style.position = 'fixed'
	A4Dom.style.top = '-99999999px'
	A4Dom.style.left = '-99999999px'
	A4Dom.style.zIndex = 9999999
	document.body.appendChild(A4Dom)

	// 测试显示A4Dom
	// A4Dom.style.top = '0'
	// A4Dom.style.left = '0'
	// debugger


	// 拆分dom，解决文档太长导致生成canvas空白的问题
	const editorDom = A4Dom.querySelector('[data-slate-editor]')
	const editorChildren = editorDom && editorDom.children
	const tempDom = document.createElement('div')
	tempDom.style.position = 'fixed'
	tempDom.style.top = '-99999999px'
	tempDom.style.left = '-99999999px'
	tempDom.style.zIndex = 9999999
	// 这里的模板dom必须在document上渲染才能生成canvas
	document.body.appendChild(tempDom)
	let pdfTempDom = null
	let editorTempDom = null
	const initPdfTempDom = () => {
		tempDom.appendChild(A4Dom.cloneNode(true))
		pdfTempDom = tempDom.childNodes[tempDom.childNodes.length - 1]
		pdfTempDom.style.position = 'relative'
		pdfTempDom.style.top = 'unset'
		pdfTempDom.style.left = 'unset'
		const exitorAreaDom = pdfTempDom.querySelector('.editor-text-area')
		if (exitorAreaDom) exitorAreaDom.style.minHeight = 'unset'
		editorTempDom = pdfTempDom.querySelector('[data-slate-editor]')
		if (editorTempDom) editorTempDom.innerHTML = ''
	}
	if (editorChildren && editorChildren.length) {
		initPdfTempDom()
		for (let i = 0; i < editorChildren.length; i++) {
			const editorChildrenNode = editorChildren[i].cloneNode(true)
			let pdfTempDomHeight = pdfTempDom.getBoundingClientRect().height
			if (i === editorChildren.length - 1 || pdfTempDomHeight <= (A4_HEIGHT - (A4_PADDING * 2))) {
				if (editorTempDom) editorTempDom.appendChild(editorChildrenNode)
			}
			pdfTempDomHeight = pdfTempDom.getBoundingClientRect().height
			if (i < editorChildren.length - 1  && pdfTempDomHeight > (A4_HEIGHT - (A4_PADDING * 2))) {
				if (editorTempDom) editorTempDom.removeChild(editorChildrenNode)
				initPdfTempDom()
				if (editorTempDom) editorTempDom.appendChild(editorChildrenNode)
			}
		}
	}

	// 测试显示tempDom
	// tempDom.style.top = '0'
	// tempDom.style.left = '0'
	// debugger

	let tempNodeList = tempDom.childNodes || []
	if (!tempNodeList.length) tempNodeList = [A4Dom]

	const PDF = new window.jspdf.jsPDF('p', 'pt', 'a4')
	PDF.setDisplayMode('fullwidth', 'continuous', 'FullScreen')
	const canvasCount = tempNodeList.length
	await runResolvers(Array.from(tempNodeList).map((item, index) => async () => {
		const tempNode = tempNodeList[index]
		// html转canvas
		// allowTaint: true 表示允许跨越的图片
		const canvas = await window.html2canvas(tempNode, { allowTaint: true, useCORS: true, dpi: 300, scale: 1 })

		// 测试显示canvas
		// const canvasTempDom = document.createElement('div')
		// canvasTempDom.style.position = 'fixed'
		// canvasTempDom.style.top = '0'
		// canvasTempDom.style.left = '0'
		// canvasTempDom.style.zIndex = 9999999
		// canvasTempDom.style.width = 'max-content'
		// canvasTempDom.style.height = '100vh'
		// canvasTempDom.style.overflow = 'hidden auto'
		// canvasTempDom.appendChild(canvas)
		// document.body.appendChild(canvasTempDom)
		// debugger

		// canvas转pdf
		const pageDataUrl = canvas.toDataURL('image/jpeg', 1.0)
		PDF.addImage(pageDataUrl, 'JPEG', 0, 0, canvas.width, canvas.height)
		if (index !== tempNodeList.length - 1) PDF.addPage()
		if (onProgress && typeof onProgress === 'function') onProgress({ progress: Number((index + 1) / canvasCount), total: canvasCount, completedCount: index + 1 })
		return true
	}))
	PDF.save(`${title}.pdf`)
	document.body.removeChild(A4Dom)
	document.body.removeChild(tempDom)
	return true
}
