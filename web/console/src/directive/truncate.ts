import { debounce } from '@/utils/functions/debounce'

// const generateUUID = () => {
// 	if (typeof crypto.randomUUID === 'function') return crypto.randomUUID()
//   let temp_url = URL.createObjectURL(new Blob())
//   let uuid = temp_url.toString()
//   URL.revokeObjectURL(temp_url)
//   return uuid.substr(uuid.lastIndexOf("/") + 1)
// }
const setElementStyle = (el, style_config = {}) => {
	if (!el) return
	el.setAttribute('style', Object.entries(style_config).map(([key, val]) => `${key}:${val};`).join(''))
}

const handler = (el: any, binding: any = {}, vnode) => {
  // const ctx = vnode.ctx
	const { value = {} } = binding || {}

	el.style.display = 'flex'
	el.style.itemsAlign = 'center'
	el.style.overflow = 'hidden'
	el.style.textOverflow = 'ellipsis'
	el.style.whiteSpace = 'nowrap'

	const node = value.node || (typeof value === 'string' && value) || ''
	const show_total = value.show_total || value.showTotal || false
	const show_tooltip = value.show_tooltip || value.showTooltip || false
	const show_remainder = value.show_remainder || value.showRemainder || false
	const offset = +value.offset || 12
	const child_node_list = (node && el.querySelectorAll(node)) || el.childNodes || []
	const node_list = []
	for (let i = 0; i < child_node_list.length; i++) {
		const node_el = child_node_list[i]
		if (Array.from(node_el.classList || []).map((val) => `.${val}`).some(class_name => class_name === node)) node_list.push(node_el)
	}
	const node_total = node_list.length

	let suffix_el = el.querySelector(`${node}--suffix`) || null
	if (suffix_el && el.contains(suffix_el)) {
		el.removeChild(suffix_el)
		suffix_el = null
	}

	if (!node_total) return
	const container_width = el.clientWidth
	let node_total_width = 0
	let remainder_count = 0
	let is_over_flag = false
	let node_style_config = {
		display: 'inline-block',
		flex: 'none',
		width: 'max-content',
		overflow: 'hidden',
		'text-overflow': 'ellipsis',
		'white-space': 'nowrap'
	}

	node_list.forEach((node_el) => {
		const node_width = +node_el.clientWidth || 0
		node_total_width += node_width
		if (node_total_width > container_width - offset || !node_width) {
			if (!is_over_flag) suffix_el = node_el.cloneNode()
			node_style_config.visibility = 'hidden'
			node_style_config.position = 'absolute'
			is_over_flag = true
			remainder_count++
		}
		el.title = (el.title || '') + node_el.innerText
		// setElementStyle(node_el, {})
		setElementStyle(node_el, node_style_config)
	})

	if (!is_over_flag || !show_tooltip) el.removeAttribute('title')

	if (!suffix_el && (show_total || show_remainder) && node_list[0]) suffix_el = node_list[0].cloneNode()
	if (suffix_el) {
		for (let i = 0; i < suffix_el.classList.length; i++) {
			if ([node.replace(/\./img, ''), `${node.replace(/\./img, '')}--suffix`].includes(suffix_el.classList.item(i))) suffix_el.classList.remove(suffix_el.classList.item(i))
		}
		suffix_el.classList.add(`${node.replace(/\./img, '')}--suffix`)
		suffix_el.innerHTML = `${show_remainder && remainder_count ? `+${remainder_count}` : ''}${is_over_flag ? '...' : ''}${show_total ? `(${node_total})` : ''}`
		setElementStyle(suffix_el, {
			flex: 'none',
			width: 'max-content',
		})
		if (suffix_el.innerHTML) el.appendChild(suffix_el)
	}
}

export default {
	mounted: (el, binding, vnode) => {
		handler(el, binding, vnode)
		const resize_observer = new ResizeObserver(entries => {
			entries.forEach(entry => {
				handler(entry.target || el, binding, vnode)
			})
		})
		resize_observer.observe(el)
	},
	updated: handler,
	unmounted: (el, binding, vnode) => {
	}
}
