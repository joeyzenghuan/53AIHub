export enum PAYMENT_TYPE {
  WECHAT = 1,
  MANUAL = 2,
  PAYPAL = 3
}

export const PAYMENT_TYPE_LABEL_MAP: Record<PAYMENT_TYPE, string> = {
  [PAYMENT_TYPE.WECHAT]: 'wechat_pay',
  [PAYMENT_TYPE.MANUAL]: 'manual_pay',
  [PAYMENT_TYPE.PAYPAL]: 'paypal',
}

/**
 * 支付类型
 */
export type PaymentType = PAYMENT_TYPE

/**
 * 时间单位类型
 */
export enum TIME_UNIT {
  MONTH = 'month',
  YEAR = 'year'
}

export type TimeUnitType = TIME_UNIT
