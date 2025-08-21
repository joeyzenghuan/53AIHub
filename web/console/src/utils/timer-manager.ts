/**
 * 定时器管理工具
 * 用于统一管理定时器，防止内存泄漏
 */

export type TimerType = ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>

export interface TimerInfo {
  id: TimerType
  type: 'timeout' | 'interval'
  callback: () => void
  delay: number
  createdAt: number
}

/**
 * 定时器管理器
 */
export class TimerManager {
  private timers: Map<string, TimerInfo> = new Map()

  private timerIdCounter = 0

  /**
   * 创建定时器
   * @param callback 回调函数
   * @param delay 延迟时间
   * @param type 定时器类型
   * @param key 可选的标识符
   * @returns 定时器ID
   */
  setTimeout(callback: () => void, delay: number, key?: string): string {
    const timerKey = key || `timer_${++this.timerIdCounter}`

    // 如果已存在同名定时器，先清理
    this.clearTimer(timerKey)

    const id = setTimeout(() => {
      callback()
      this.timers.delete(timerKey)
    }, delay)

    this.timers.set(timerKey, {
      id,
      type: 'timeout',
      callback,
      delay,
      createdAt: Date.now(),
    })

    return timerKey
  }

  /**
   * 创建间隔定时器
   * @param callback 回调函数
   * @param delay 间隔时间
   * @param key 可选的标识符
   * @returns 定时器ID
   */
  setInterval(callback: () => void, delay: number, key?: string): string {
    const timerKey = key || `interval_${++this.timerIdCounter}`

    // 如果已存在同名定时器，先清理
    this.clearTimer(timerKey)

    const id = setInterval(callback, delay)

    this.timers.set(timerKey, {
      id,
      type: 'interval',
      callback,
      delay,
      createdAt: Date.now(),
    })

    return timerKey
  }

  /**
   * 清理指定定时器
   * @param key 定时器标识符
   */
  clearTimer(key: string): boolean {
    const timer = this.timers.get(key)
    if (timer) {
      if (timer.type === 'timeout') {
        clearTimeout(timer.id)
      } else {
        clearInterval(timer.id)
      }
      this.timers.delete(key)
      return true
    }
    return false
  }

  /**
   * 清理所有定时器
   */
  clearAll(): void {
    this.timers.forEach(timer => {
      if (timer.type === 'timeout') {
        clearTimeout(timer.id)
      } else {
        clearInterval(timer.id)
      }
    })
    this.timers.clear()
  }

  /**
   * 获取定时器信息
   * @param key 定时器标识符
   */
  getTimer(key: string): TimerInfo | undefined {
    return this.timers.get(key)
  }

  /**
   * 获取所有定时器
   */
  getAllTimers(): Map<string, TimerInfo> {
    return new Map(this.timers)
  }

  /**
   * 检查定时器是否存在
   * @param key 定时器标识符
   */
  hasTimer(key: string): boolean {
    return this.timers.has(key)
  }

  /**
   * 获取定时器数量
   */
  getTimerCount(): number {
    return this.timers.size
  }

  /**
   * 清理过期的定时器（超过指定时间的timeout）
   * @param maxAge 最大存活时间（毫秒）
   */
  clearExpiredTimers(maxAge: number = 30000): number {
    const now = Date.now()
    let clearedCount = 0

    this.timers.forEach((timer, key) => {
      if (timer.type === 'timeout' && now - timer.createdAt > maxAge) {
        this.clearTimer(key)
        clearedCount++
      }
    })

    return clearedCount
  }
}

/**
 * 全局定时器管理器实例
 */
export const globalTimerManager = new TimerManager()

/**
 * Vue 组合式函数：在组件卸载时自动清理定时器
 */
export function useTimerManager() {
  const manager = new TimerManager()

  // 在组件卸载时清理所有定时器
  if (typeof window !== 'undefined') {
    // 动态导入 Vue 以避免 SSR 问题
    import('vue')
      .then(({ onUnmounted }) => {
        onUnmounted(() => {
          manager.clearAll()
        })
      })
      .catch(() => {
        // 如果 Vue 不可用，使用页面卸载事件作为备选
        window.addEventListener('beforeunload', () => {
          manager.clearAll()
        })
      })
  }

  return {
    setTimeout: manager.setTimeout.bind(manager),
    setInterval: manager.setInterval.bind(manager),
    clearTimer: manager.clearTimer.bind(manager),
    clearAll: manager.clearAll.bind(manager),
    getTimer: manager.getTimer.bind(manager),
    hasTimer: manager.hasTimer.bind(manager),
    getTimerCount: manager.getTimerCount.bind(manager),
  }
}

// 导出 Vue 相关类型（如果可用）
declare global {
  interface Window {
    __TIMER_MANAGER_DEBUG__?: boolean
  }
}

// 开发环境下的调试功能
if (process.env.NODE_ENV === 'development') {
  window.__TIMER_MANAGER_DEBUG__ = true

  // 定期检查是否有泄漏的定时器
  setInterval(() => {
    const count = globalTimerManager.getTimerCount()
    if (count > 100) {
      console.warn(`[TimerManager] 检测到大量定时器 (${count})，可能存在内存泄漏`)
    }
  }, 30000)
}
