export enum CURRENCY_TYPE {
  CNY = 'CNY',
  USD = 'USD',
  JPY = 'JPY',
  EUR = 'EUR',
  GBP = 'GBP',
}

export const CURRENCY_SYMBOL_MAP = new Map<CURRENCY_TYPE, string>([
  [CURRENCY_TYPE.CNY, '¥'],
  [CURRENCY_TYPE.USD, '$'],
  [CURRENCY_TYPE.JPY, '¥'],
  [CURRENCY_TYPE.EUR, '€'],
  [CURRENCY_TYPE.GBP, '£'],
])

/**
 * 获取货币符号
 */
export function getCurrencySymbol(currency: string): string {
  return CURRENCY_SYMBOL_MAP.get(currency as CURRENCY_TYPE) || '¥'
}
