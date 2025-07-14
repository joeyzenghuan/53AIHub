type Fetcher<T> = (() => Promise<T>) | (() => T) | T

// 创建缓存管理器
export class CacheManager {
  private static instance: CacheManager
  private cacheMap: Map<string, {
    data: any
    expireTime: number
  }> = new Map()

  private constructor() { }

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager()
    }
    return CacheManager.instance
  }

  private isPromise(value: any): value is Promise<any> {
    return value && typeof value.then === 'function'
  }

  set<T>(key: string, value: T, expireMinutes: number = 1): void {
    const expireTime = Date.now() + expireMinutes * 60 * 1000
    this.cacheMap.set(key, {
      data: value,
      expireTime
    })
  }

  get<T>(key: string): T | null {
    const now = Date.now()
    const cacheItem = this.cacheMap.get(key)

    if (cacheItem && now < cacheItem.expireTime) {
      return cacheItem.data
    }

    this.cacheMap.delete(key)
    return null
  }

  async getOrFetch<T>(
    key: string,
    fetcher: Fetcher<T>,
    expireMinutes: number = 2
  ): Promise<T> {
    // 检查缓存
    const cachedValue = this.get<T>(key)
    if (cachedValue !== null) {
      return cachedValue
    }

    // 处理不同类型的fetcher
    let result: T
    if (typeof fetcher === 'function') {
      result = (fetcher as Function)()
      if (this.isPromise(result)) {
        result.catch(() => {
          this.delete(key)
        })
      }
    } else {
      result = fetcher as T
    }

    // 存储结果
    this.set(key, result, expireMinutes)
    return result
  }

  delete(key: string): void {
    this.cacheMap.delete(key)
  }

  clear(): void {
    this.cacheMap.clear()
  }
}

export const cacheManager = CacheManager.getInstance()