import unit2 from '../Unit2/index'
import api from '@/apis'
import { deepCopy } from '@/utils'

import { useUserStore } from '@/stores'

// 记录缓存数据，避免多次计算
let cache = {}

const storage: {
  [key: string]: any
} = {

}
export default {
  instance() {
    const userStore = useUserStore()
    if (!storage.member) {
      storage.member = api.enterprise.getmemberlist({ eid: userStore.eid, limit: 1000 })
        .then(res => res.data.list)
        .catch(() => [])
    }

    return storage.member
  },

  reset() {
    cache = {}
    unit2.reset()
    for (const key in storage) {
      if (Object.prototype.hasOwnProperty.call(storage, key))
        delete storage[key]
    }
  },

  refresh() {
    const userStore = useUserStore()
    cache = {}
    storage.member = api.enterprise.getmemberlist({ eid: userStore.eid, limit: 1000 })
  },

  getAllData() {
    return this.instance()
  },
  findUserByMobile(mobile: string) {
    return this.getAllData()
      .then(list => list.find(item => item.mobile === String(mobile).trim()))
  },

  getRoleList() {
    if (!storage.role_list) {
      const userStore = useUserStore()
      storage.role_list = api.role.list({ eid: userStore.eid }).then((res) => {
        return res.data
      })
    }

    return storage.role_list.then(list => deepCopy(list))
  },
}
