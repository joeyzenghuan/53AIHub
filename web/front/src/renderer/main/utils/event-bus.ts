import type { EventName } from '@/constants/events'
import { EVENT_NAMES } from '@/constants/events'

// 定义事件回调函数类型
type EventCallback = (data?: any) => void;

// 定义事件映射类型
interface EventMap {
  [eventName: string]: EventCallback[];
}

// 定义缓存事件数据类型
interface CachedEvent {
  data: any;
  timestamp: number;
}

// 定义缓存事件映射类型
interface CachedEventMap {
  [eventName: string]: CachedEvent;
}

const eventBus = {
  events: {} as EventMap,
  // 事件缓存，用于处理 emit 在 on 之前的情况
  cachedEvents: {} as CachedEventMap,
  // 需要缓存的事件列表（状态类事件）
  cacheableEvents: new Set<EventName>([EVENT_NAMES.LOGIN_SUCCESS] as EventName[]),

  /**
   * 触发事件
   * @param eventName 事件名称
   * @param data 事件数据
   */
  emit(eventName: EventName, data?: any) {
    // 如果有监听器，直接触发
    if (this.events[eventName] && this.events[eventName].length > 0) {
      this.events[eventName].forEach(callback => callback(data));
    }

    // 如果是可缓存的事件，无论是否有监听器都进行缓存
    if (this.cacheableEvents.has(eventName)) {
      this.cachedEvents[eventName] = {
        data,
        timestamp: Date.now()
      };
    }

    return this;
  },

  /**
   * 监听事件
   * @param eventName 事件名称
   * @param callback 回调函数
   */
  on(eventName: EventName, callback: EventCallback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);

    // 如果有缓存的事件，立即触发
    if (this.cachedEvents[eventName]) {
      callback(this.cachedEvents[eventName].data);
    }

    return this;
  },

  /**
   * 监听事件一次（触发后自动移除）
   * @param eventName 事件名称
   * @param callback 回调函数
   */
  once(eventName: EventName, callback: EventCallback) {
    const onceWrapper = (data?: any) => {
      callback(data);
      this.off(eventName, onceWrapper);
    };

    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(onceWrapper);

    // 如果有缓存的事件，立即触发并移除监听器
    if (this.cachedEvents[eventName]) {
      onceWrapper(this.cachedEvents[eventName].data);
    }

    return this;
  },

  /**
   * 移除事件监听
   * @param eventName 事件名称
   * @param callback 可选的回调函数，如果不提供则移除该事件的所有监听器
   */
  off(eventName: EventName, callback?: EventCallback) {
    if (this.events[eventName]) {
      if (callback) {
        this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
      } else {
        delete this.events[eventName];
      }
    }
    return this;
  },

  /**
   * 获取指定事件的监听器数量
   * @param eventName 事件名称
   */
  listenerCount(eventName: EventName): number {
    return this.events[eventName]?.length || 0;
  },

  /**
   * 移除所有事件监听器
   */
  clear() {
    this.events = {};
    return this;
  },

  /**
   * 添加可缓存的事件类型
   * @param eventName 事件名称
   */
  addCacheableEvent(eventName: EventName) {
    this.cacheableEvents.add(eventName);
    return this;
  },

  /**
   * 移除可缓存的事件类型
   * @param eventName 事件名称
   */
  removeCacheableEvent(eventName: EventName) {
    this.cacheableEvents.delete(eventName);
    delete this.cachedEvents[eventName];
    return this;
  },

  /**
   * 清除事件缓存
   * @param eventName 可选的事件名称，如果不提供则清除所有缓存
   */
  clearCache(eventName?: EventName) {
    if (eventName) {
      delete this.cachedEvents[eventName];
    } else {
      this.cachedEvents = {};
    }
    return this;
  },

  /**
   * 获取缓存的事件数据
   * @param eventName 事件名称
   */
  getCachedEvent(eventName: EventName): CachedEvent | undefined {
    return this.cachedEvents[eventName];
  },

  /**
   * 检查是否有缓存的事件
   * @param eventName 事件名称
   */
  hasCachedEvent(eventName: EventName): boolean {
    return eventName in this.cachedEvents;
  },

  /**
   * 清除所有数据（包括监听器和缓存）
   */
  clearAll() {
    this.events = {};
    this.cachedEvents = {};
    return this;
  }
};

export default eventBus;
