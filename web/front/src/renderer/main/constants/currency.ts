export enum CURRENCY_TYPE {
  CNY = 'CNY',
  USD = 'USD',
  JPY = 'JPY',
  EUR = 'EUR',
  GBP = 'GBP',
}

export const CURRENCY_SYMBOL_MAP = new Map([
  [CURRENCY_TYPE.CNY, '¥'],
  [CURRENCY_TYPE.USD, '$'],
  [CURRENCY_TYPE.JPY, '¥'],
  [CURRENCY_TYPE.EUR, '€'],
  [CURRENCY_TYPE.GBP, '£'],
])
