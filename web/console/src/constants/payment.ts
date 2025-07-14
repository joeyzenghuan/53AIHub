export const PAYMENT_TYPE = {
  ALL: -1 as const,
  WECHAT: 1 as const,
  MANUAL: 2 as const,
  PAYPAL: 3 as const,
  ALIPAY: 4 as const
} as const

export type PaymentType = (typeof PAYMENT_TYPE)[keyof typeof PAYMENT_TYPE]

export const PAYMENT_TYPE_LABEL_MAP = new Map([
  [PAYMENT_TYPE.ALL, 'payment.type.all'],
  [PAYMENT_TYPE.WECHAT, 'payment.type.wechat'],
  [PAYMENT_TYPE.MANUAL, 'payment.type.manual'],
  [PAYMENT_TYPE.PAYPAL, 'payment.type.paypal'],
  [PAYMENT_TYPE.ALIPAY, 'payment.type.alipay']
])
