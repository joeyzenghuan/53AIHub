// import { getStyle } from 'element-plus/es/utils/dom/index'
import { getStyle } from 'element-plus/es/utils/dom/index'
/**
 * show-overflow-tooltip for text
 * 当text没有被折叠时，不显示tooltip
 */
const akTooltipAutoShow = {
  created(el, binding, vnode) {
    const tooltipNode = vnode.children.find(childrenCmpt => childrenCmpt.component?.type.name == 'ElTooltip')
    if (tooltipNode) {
      const { content } = tooltipNode.props
      if (content && ['添加', '编辑', '删除', '查看'].includes(content)) {
        el.addEventListener('click', (e) => {
          const defalutDisabled = tooltipNode.component.props.disabled
          if (!defalutDisabled) {
            tooltipNode.component.props.disabled = true
            setTimeout(() => {
              tooltipNode.component.props.disabled = defalutDisabled
            }, 200)
          }
        })
      }
      else {
        el.addEventListener('mouseenter', (e) => {
          tooltipNode.component.props.disabled = true
          const range = document.createRange()
          range.setStart(el, 0)
          range.setEnd(el, el.childNodes.length)
          const rangeWidth = Math.round(range.getBoundingClientRect().width)
          const padding = (parseInt(getStyle(el, 'paddingLeft'), 10) || 0) + (parseInt(getStyle(el, 'paddingRight'), 10) || 0)
          if (rangeWidth + padding > el.offsetWidth || el.scrollWidth > el.offsetWidth)
            tooltipNode.component.props.disabled = false
        })
      }
    }
  },
}
export default akTooltipAutoShow
