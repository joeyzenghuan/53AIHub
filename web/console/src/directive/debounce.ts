// 定义类型
interface VNode {
  ctx: {
    type: { name: string }
    vnode: {
      props: any
      loading?: boolean
    }
    props: any
  }
}

/**
 * AOP函数 - 在原函数执行前后添加额外逻辑
 */
function AOP(func: Function, beforeFn: Function, afterFn: Function) {
  return function (this: any, ...args: any[]) {
    beforeFn.apply(this, args)
    const ret = func.apply(this, args)

    if (ret && typeof ret.then === 'function' && typeof ret.catch === 'function') {
      // 处理Promise返回值
      ret.finally(() => {
        afterFn.apply(this, args)
      })
    }
    else {
      // 非Promise返回值，使用setTimeout模拟异步
      setTimeout(() => {
        afterFn.apply(this, args)
      }, 1000)
    }

    return ret
  }
}

/**
 * 创建函数副本，避免直接修改原函数
 */
function createFunctionCopy(originalFn: Function) {
  return function (this: any, ...args: any[]) {
    return originalFn.apply(this, args)
  }
}

/**
 * 创建防抖函数
 */
function debounce(fn: Function, delay = 1000) {
  let timer: number | null = null

  return function (this: any, ...args: any[]) {
    if (timer)
      clearTimeout(timer)

    timer = window.setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

/**
 * 指令处理函数
 */
const handler = (el: HTMLElement, binding: any, vnode: VNode) => {
  const ctx = vnode.ctx
  const delay = binding.value || 1000

  // 处理ElButton组件
  if (ctx.type.name === 'ElButton') {
    const click = ctx.vnode.props?.onClick ?? null

    // 如果没有保存原始点击事件，则保存
    if (!ctx.vnode.props._onClick) {
      ctx.vnode.props._onClick = click
      ctx.vnode.key = `debounce_${Math.random().toString(36).substr(2, 9)}`
    }

    // 设置初始loading状态
    ctx.props.loading = ctx.vnode.loading || false

    // 使用防抖函数包装原始点击事件
    const debouncedClick = debounce(createFunctionCopy(ctx.vnode.props._onClick), delay)

    // 使用AOP包装防抖后的点击事件，添加loading效果
    ctx.vnode.props.onClick = AOP(
      debouncedClick,
      () => {
        // 点击前立即设置loading状态
        ctx.props.loading = true
        ctx.vnode.loading = true
        // 强制更新组件状态
        if (ctx.proxy && typeof ctx.proxy.$forceUpdate === 'function')
          ctx.proxy.$forceUpdate()
      },
      () => {
        // 操作完成后取消loading状态
        ctx.props.loading = false
        ctx.vnode.loading = false
        // 强制更新组件状态
        if (ctx.proxy && typeof ctx.proxy.$forceUpdate === 'function')
          ctx.proxy.$forceUpdate()
      },
    )
  }
  else {
    // 处理普通元素
    // 移除旧的事件监听器
    if (el.dListener)
      el.removeEventListener('click', el.dListener)

    // 创建新的防抖事件监听器
    el.dListener = (ev: Event) => {
      if (el.disabled)
        return

      ctx.props.loading = true
      el.disabled = true

      setTimeout(() => {
        el.disabled = false
        ctx.props.loading = false
      }, delay)
    }

    // 添加事件监听
    el.addEventListener('click', debounce(el.dListener, delay))
  }
}

export default {
  mounted: handler,
  updated: handler,
}
