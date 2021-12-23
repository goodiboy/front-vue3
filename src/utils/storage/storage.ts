import { App } from 'vue'

interface KeyType {
  value: any
  expires?: number
}
class Storage {
  // 默认的作用域
  namespace = '__default__'

  constructor(namespace?: string) {
    if (namespace) this.namespace = namespace
  }

  /**
   * 设置key的值
   * @param key 键
   * @param val 值
   * @param expires 有效期，时间单位秒，
   */
  setItem(key: string, val: any, expires?: number) {
    const setEvent = new Event(key)
    setEvent.newValue = val
    const valueObj: KeyType = {
      value: val,
      expires: this.calcExpiresTime(expires)
    }
    const storage = this.getStorage()
    storage[key] = valueObj
    dispatchEvent(setEvent)

    this.updateStorage(storage)
  }

  /**
   * 当setItem的key值发生变化时触发
   * @param event
   * @param callback
   */
  on(event: string, callback: EventListenerOrEventListenerObject) {
    addEventListener(event, callback)
  }

  /**
   * 计算有效时间
   * @param expires 单位秒
   */
  calcExpiresTime(expires?: number) {
    if (!expires) return undefined
    return Date.now() + expires * 1000
  }

  // 获取值
  getItem(key: string) {
    const storage = this.getStorage()
    if (!storage[key]) return null
    if (storage[key].expires < Date.now()) {
      this.removeItem(key)
      return null
    }
    return storage[key].value
  }

  // 删除值
  removeItem(key: string) {
    const removeEvent = new Event(key)
    dispatchEvent(removeEvent)
    const storage = this.getStorage()
    delete storage[key]
    this.updateStorage(storage)
  }

  // 清除作用域下的所有值，非整个localStorage
  clearAll() {
    const clearEvent = new Event('clearAll')
    dispatchEvent(clearEvent)
    localStorage.removeItem(this.namespace)
  }

  // 每次操作之后需要把值更新到localStorage
  updateStorage(storage: any) {
    localStorage.setItem(this.namespace, JSON.stringify(storage))
  }

  // 获取改作用域全部的数据
  getStorage() {
    return JSON.parse(localStorage.getItem(this.namespace) ?? '{}')
  }
}

let storageInstance: Storage

export default {
  install(app: App, namespaced: any) {
    if (typeof namespaced !== 'string') {
      throw Error('key must be string')
    }
    storageInstance = new Storage(namespaced)
  }
}

// 暂时没有想到比较好的方法，先这样处理吧
export const useStorage = () => {
  if (!storageInstance) {
    throw Error('must be instantiated before use, example: app.use(storage,key)')
  }
  return storageInstance
}
