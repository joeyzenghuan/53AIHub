

import { defineStore } from 'pinia'
import userApi from '@/api/modules/user'
import { subscriptionApi } from '@/api/modules/subscription'

import eventBus from '@/utils/event-bus'
import { EVENT_NAMES } from '@/constants/events'

export const DEFAULT_GROUP_NAME = '免费版'
export const DEFAULT_GROUP_ICON = 'vip-1'

interface UpdateData {
  nickname?: string
  avatar?: string
}

const TOKEN_KEY = 'access_token'

const DEFAULT_USER: User.Info = {
  access_token: localStorage.getItem(TOKEN_KEY) || '',
  user_id: '',
  openid: '',
  username: '',
  nickname: '',
  avatar: '',
  email: '',
  eid: 0,
  role: 0,
  mobile: '',
  group_id: 0,
  group_ids: [],
  group_name: DEFAULT_GROUP_NAME,
  group_icon: DEFAULT_GROUP_ICON,
  is_internal: false,
}

export const useUserStore = defineStore('user-store', {
  state: (): {
    info: User.Info
    is_login: boolean
  } => ({
    info: { ...DEFAULT_USER },
    is_login: !!DEFAULT_USER.access_token,
  }),
  actions: {
    async login(data: User.LoginForm) {
      try {
        const res = await userApi.login(data)
        this.setAccessToken(res.data.access_token)
        await this.getUserInfo()
        eventBus.emit(EVENT_NAMES.LOGIN_SUCCESS)
      } catch (error) {
        throw error
      }
    },

    async sms_login(data: User.SmsLoginForm) {
      try {
        const res = await userApi.sms_login(data)
        this.setAccessToken(res.data.access_token)
        await this.getUserInfo()
        eventBus.emit(EVENT_NAMES.LOGIN_SUCCESS)
      } catch (error) {
        throw error
      }
    },

    async wechat_login(params: { openid: string }) {
      const res = await userApi.wechat_login(params).catch(() => ({ data: { access_token: '' } }))
      if (!res.data.access_token) return Promise.reject('access_token is empty')
      this.setAccessToken(res.data.access_token)
      await this.getUserInfo()
      eventBus.emit(EVENT_NAMES.LOGIN_SUCCESS)
    },

    async bind_wechat(data: User.BindWechatForm) {
      try {
        const res = await userApi.bind_wechat(data)
        const isCreated = Boolean(res.data.access_token && data.mobile)
        if (isCreated) this.setAccessToken(res.data.access_token)
        await this.getUserInfo()
        if (isCreated) eventBus.emit(EVENT_NAMES.LOGIN_SUCCESS)
      } catch (error) {
        throw error
      }
    },

    async unbind_wechat() {
      await userApi.unbind_wechat()
      await this.getUserInfo()
    },

    async register(data: User.RegisterForm) {
      const registerData = {
        ...data,
        nickname: data.nickname || data.username,
      }
      const res = await userApi.register(registerData)
      this.setAccessToken(res.data.access_token)
      await this.getUserInfo()
    },

    async reset_password(data: User.ResetPasswordForm) {
      const newPasswordData = {
        ...data,
      }
      const res = await userApi.reset_password(newPasswordData)
      await this.getUserInfo()
    },

    async change_mobile(data: User.ChangeMobileForm, id: string) {
      const newMobileData = {
        ...data,
      }
      const res = await userApi.change_mobile(newMobileData, id)
      await this.getUserInfo()
    },

    async update(data: UpdateData) {
      const res = await userApi.update(data)
      Object.assign(this.info, {
        avatar: res.data.avatar,
        nickname: res.data.nickname,
      })
    },

    async getUserInfo() {
      if (!localStorage.getItem(TOKEN_KEY)) return
      try {
        const [res, { list: subscription_list = [] }] = await Promise.all([
          userApi.me(),
          subscriptionApi.list(),
        ])
        this.info = {
          access_token: res.data.access_token || '',
          user_id: res.data.user_id || '',
          openid: res.data.openid || '',
          username: res.data.username || '',
          nickname: res.data.nickname || '',
          avatar: res.data.avatar.replace(/^(\/\/)/, 'http://') || 'https://chat.53ai.com/images/robot_avatar.png',
          email: res.data.email || '',
          eid: res.data.eid || 0,
          role: res.data.role || 0,
          mobile: res.data.mobile || '',
          group_id: res.data.group_id || 0,
          group_ids: res.data.group_ids || [],
          group_name: res.data.group_name || DEFAULT_GROUP_NAME,
          group_icon: res.data.group_icon || DEFAULT_GROUP_ICON,
          is_internal: res.data.type == 2,
        }
        const subscription_data = subscription_list.find((item = {}) => item.group_id == this.info.group_id)
        if (subscription_data) {
          this.info.group_name = subscription_data.group_name || DEFAULT_GROUP_NAME
          this.info.group_icon = subscription_data.logo_url || DEFAULT_GROUP_ICON
        }
        this.is_login = true
        if (window.$chat53ai)
          window.$chat53ai.$win({ type: 'agenthub_login', data: JSON.stringify({ ...this.info }) })
      } catch (error) {
        const response = error.response || {}
        const data = response.data || error || {}
        const message = data.message
        if (['token expired', 'forbidden'].includes(message)) {
          this.logout({ redirectDisabled: true })
        }
        throw error
      }
    },
    setGroupName(group_name: string) {
      this.info.group_name = group_name || DEFAULT_GROUP_NAME
    },
    setGroupIcon(group_icon: string) {
      this.info.group_icon = group_icon || DEFAULT_GROUP_ICON
    },
    setAccessToken(token: string) {
      localStorage.setItem(TOKEN_KEY, token)
      this.info.access_token = token
    },
    updateInfo(data) {
      this.info = {
        ...this.info,
        ...data,
      }
      this.is_login = true
    },
    logout({ redirectDisabled = false }: { redirectDisabled?: boolean } = {}) {
      this.info = { ...DEFAULT_USER }
      this.is_login = false
      localStorage.removeItem(TOKEN_KEY)
      setTimeout(() => {
        if (!redirectDisabled && !window.$isElectron) {
          location.href = '/'
        }
      }, 800)
    }
  },
})
