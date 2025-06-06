import service from '../config'
import { handleError } from '../errorHandler'
import { QYY_HOST } from '../host'

export const common = {
  sendcode(data: { mobile: string; source: '53ai' | 'companyibos' }) {
    return service.post(`${QYY_HOST}/v3/users/sendcode`, data, {
      sign: true,
      baseURL: ''
    }).catch(handleError)
  },
  verifycode(data: { mobile: string; verifycode: string; type: '1' }) {
    return service.post(`${QYY_HOST}/v4/xbot/checkverificationcode`, data, {
      ibos_sign: true,
      baseURL: ''
    }).then((res) => {
      if (res.code !== 0) {
        return Promise.reject({ response: { data: res } })
      }
      return res
    }).catch(handleError)
  },
}
export default common

