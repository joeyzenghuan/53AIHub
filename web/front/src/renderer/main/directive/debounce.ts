// 定义类型
interface VNode {
  ctx: {
    type: { name: string }
    vnode: {
      props: any
      loading?: boolean
      key?: string
    }
    props: any
    proxy?: {
      $forceUpdate: () => void
    }
  }
}

interface HTMLElementWithListener extends HTMLElement {
  dListener?: (ev: Event) => void
  disabled?: boolean
}

/**
 * AOP函数 - 在原函数执行前后添加额外逻辑
 */
function AOP(func: Function, beforeFn: Function, afterFn: Function) {
  return function (this: any, ...args: any[]) {
    beforeFn.apply(this, args)
    const ret = func.apply(this, args)
    const handleAfterFn = () => {
      setTimeout(() => {
        afterFn.apply(this, args)
      }, 600)
    }

    if (ret && typeof ret.then === 'function' && typeof ret.catch === 'function') {
      ret.finally(handleAfterFn)
    }
    else {
      // 非Promise返回值
      handleAfterFn()
    }

    return ret
  }
}

/**
 * 创建函数副本，避免直接修改原函数
 */
function createFunctionCopy(originalFn: Function) {
  // 确保函数为空时不会出错
  if (!originalFn)
    return function () { }

  return function (this: any, ...args: any[]) {
    return originalFn.apply(this, args)
  }
}

/**
 * 更新组件状态
 */
function updateComponentState(ctx: VNode['ctx']) {
  if (ctx.proxy && typeof ctx.proxy.$forceUpdate === 'function')
    ctx.proxy.$forceUpdate()
}

/**
 * 处理ElButton组件
 */
function handleElButton(ctx: VNode['ctx']) {
  const click = ctx.vnode.props?.onClick ?? null

  // 如果没有保存原始点击事件，则保存
  if (!ctx.vnode.props._onClick) {
    ctx.vnode.props._onClick = click
    ctx.vnode.key = `debounce_${Math.random().toString(36).slice(2, 11)}`
  }
  // 设置初始loading状态
  ctx.props.loading = ctx.vnode.loading || false

  const debouncedClick = createFunctionCopy(ctx.vnode.props._onClick)

  // 使用AOP包装防抖后的点击事件，添加loading效果
  ctx.vnode.props.onClick = AOP(
    (e: Event) => {
      e?.stopPropagation() // 阻止事件冒泡
      return debouncedClick.apply(this, [e])
    },
    () => {
      // 点击前立即设置loading状态
      ctx.props.loading = true
      ctx.vnode.loading = true
      updateComponentState(ctx)
    },
    () => {
      // 操作完成后取消loading状态
      ctx.props.loading = false
      ctx.vnode.loading = false
      updateComponentState(ctx)
    },
  )
}

/**
 * 处理普通元素
 */
function handleNormalElement(el: HTMLElementWithListener, binding: any, ctx: VNode['ctx']) {
  // 移除旧的事件监听器
  if (el.dListener)
    el.removeEventListener('click', el.dListener)
  // 创建新的防抖事件监听器
  el.dListener = (ev: Event) => {
    ev?.stopPropagation() // 阻止事件冒泡
    if (el.disabled)
      return

    ctx.props.loading = true
    el.disabled = true

    const originalClick = binding.value?.handler || binding.value

    // 处理点击事件
    if (typeof originalClick === 'function') {
      const result = originalClick(ev)

      const resetState = () => {
        setTimeout(() => {
          el.disabled = false
          ctx.props.loading = false
        }, 1000)
      }

      // 处理可能的Promise返回值
      if (result && typeof result.then === 'function')
        result.finally(resetState)
      else
        resetState()
    }
    else {
      // 没有点击事件处理函数，直接等待1秒
      setTimeout(() => {
        el.disabled = false
        ctx.props.loading = false
      }, 1000)
    }
  }

  // 添加事件监听
  el.addEventListener('click', el.dListener)
}

/**
 * 指令处理函数
 */
const handler = (el: HTMLElementWithListener, binding: any, vnode: VNode) => {
  const ctx = vnode.ctx
  // 根据组件类型分别处理
  if (ctx.type.name === 'ElButton')
    handleElButton(ctx)
  else
    handleNormalElement(el, binding, ctx)
}

export default {
  mounted: handler,
  updated: handler,
}
