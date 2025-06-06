import service from '../config'
import { handleError } from '../errorHandler'

const userApi = {
  login(data: { username: string, password: string }) {
    return service.post('/api/login', data).catch(handleError)
  },
  register(data: { username: string; password: string; nickname: string; verfiy_code?: string }) {
    return service.post('/api/register', data).catch(handleError)
  },
  me() {
    return service.get('/api/users/me').catch(handleError)
  },
  update(data: { nickname?: string; avatar?: string; }) {
    return service.put(`/api/users/me`, data).catch(handleError)
  },
  updatePassword(data: { password: string; newPassword: string }) {
    return service.put(`/api/users/password`, data).catch(handleError)
  },
  checkUsername(account: string) {
    return service.post(`/api/check_account`, {
      account,
    }).catch(handleError)
  }
}

export default userApi

export type { userApi }
