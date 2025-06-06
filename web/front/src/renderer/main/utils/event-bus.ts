import { EventName } from '@/constants/events'

// 定义事件回调函数类型
type EventCallback = (data?: any) => void;

// 定义事件映射类型
interface EventMap {
  [eventName: string]: EventCallback[];
}

const eventBus = {
  events: {} as EventMap,

  /**
   * 触发事件
   * @param eventName 事件名称
   * @param data 事件数据
   */
  emit(eventName: string, data?: any) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(data));
    }
    return this;
  },

  /**
   * 监听事件
   * @param eventName 事件名称
   * @param callback 回调函数
   */
  on(eventName: string, callback: EventCallback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
    return this;
  },

  /**
   * 监听事件一次（触发后自动移除）
   * @param eventName 事件名称
   * @param callback 回调函数
   */
  once(eventName: string, callback: EventCallback) {
    const onceWrapper = (data?: any) => {
      callback(data);
      this.off(eventName, onceWrapper);
    };
    return this.on(eventName, onceWrapper);
  },

  /**
   * 移除事件监听
   * @param eventName 事件名称
   * @param callback 可选的回调函数，如果不提供则移除该事件的所有监听器
   */
  off(eventName: string, callback?: EventCallback) {
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
  listenerCount(eventName: string): number {
    return this.events[eventName]?.length || 0;
  },

  /**
   * 移除所有事件监听器
   */
  clear() {
    this.events = {};
    return this;
  }
};

export default eventBus;
