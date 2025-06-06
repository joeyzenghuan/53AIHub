export const PAYMENT_TYPE_WECHAT = 1
export const PAYMENT_TYPE_MANUAL = 2
export const PAYMENT_TYPE_PAYPAL = 3
export const PAYMENT_TYPE_LABEL_MAP = {
  [PAYMENT_TYPE_WECHAT]: 'wechat_pay',
  [PAYMENT_TYPE_MANUAL]: 'manual_pay',
  [PAYMENT_TYPE_PAYPAL]: 'paypal',
}

/**
 * 支付类型
 */
export type PaymentType = typeof PAYMENT_TYPE_WECHAT | typeof PAYMENT_TYPE_MANUAL | typeof PAYMENT_TYPE_PAYPAL

/**
 * 时间单位类型
 */
export type TimeUnitType = 'month' | 'year'
