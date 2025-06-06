export const ONE_SECOND_TIMESTAMP = 1000
export const ONE_MINUTE_TIMESTAMP = 60 * ONE_SECOND_TIMESTAMP
export const ONE_HOUR_TIMESTAMP = 60 * ONE_MINUTE_TIMESTAMP
export const ONE_DAY_TIMESTAMP = 24 * ONE_HOUR_TIMESTAMP
export const ONE_WEEK_TIMESTAMP = 7 * ONE_DAY_TIMESTAMP

const WEEK_TEXT_LIST = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
]

/**
 * 获取日期的时间戳
 */
export const getTimeStamp = (str: string) => {
  return new Date(str.replace(/-/g, '/')).getTime()
}

/**
 * Date类型数据转成字符串类型数据
 * @param { any } date 自定义当前时间，默认当前时间
 * @param { string } format 返回时间格式，默认yyyy/MM/dd hh:mm:ss，年/月/日 时:分:秒
 * @param { boolean } fillZero 是否自动填充0补位
 * @returns { string }
 **/
export const getSimpleDateFormatString = (
  {
    date,
    format = 'YYYY-MM-DD hh:mm:ss',
    fillZero = true,
  }: {
    date?: any
    format?: string
    fillZero?: boolean
  } = { date: new Date() },
) => {
  if (!date)
    date = new Date()
  if (typeof date === 'string')
    date = date.replace(/-/gm, '/')
  date = new Date(date)
  const [year, month, day, hour, minute, second, week] = [
		`${date.getFullYear()}`,
		`${date.getMonth() + 1}`,
		`${date.getDate()}`,
		`${date.getHours()}`,
		`${date.getMinutes()}`,
		`${date.getSeconds()}`,
		date.getDay(),
  ]
  return format
    .replace('YYYY', year)
    .replace('YY', year.substring(2))
    .replace('MM', month.length === 1 && fillZero ? `0${month}` : month)
    .replace('DD', day.length === 1 && fillZero ? `0${day}` : day)
    .replace('hh', hour.length === 1 && fillZero ? `0${hour}` : hour)
    .replace('mm', minute.length === 1 && fillZero ? `0${minute}` : minute)
    .replace('ss', second.length === 1 && fillZero ? `0${second}` : second)
    .replace('week', WEEK_TEXT_LIST[week] || '')
}

export const getCurrentDate = (format: string) => {
  const date = new Date()
  return getSimpleDateFormatString({ date, format })
}

export const getLastTimeAsDay = (day: number, format: string) => {
  const date = new Date()
  date.setDate(date.getDate() - day)
  return getSimpleDateFormatString({ date, format })
}

export const getLastTimeAsWeek = (week: number, format: string) => {
  const date = new Date()
  date.setDate(date.getDate() - 7 * week)

  return getSimpleDateFormatString({ date, format })
}

export const getLastTimeAsMonth = (month: number, format: string) => {
  const date = new Date()
  date.setMonth(date.getMonth() - month)

  return getSimpleDateFormatString({ date, format })
}

export const getCurrentMonth = (format: string) => {
  const date = new Date()
  date.setDate(1)

  return getSimpleDateFormatString({ date, format })
}

export const getCurrentQuarter = (format: string) => {
  const date = new Date()
  date.setMonth(Math.floor(date.getMonth() / 3) * 3)
  date.setDate(1)

  return getSimpleDateFormatString({ date, format })
}

export const getCurrentYeaer = (format: string) => {
  const date = new Date()
  date.setMonth(0)
  date.setDate(1)

  return getSimpleDateFormatString({ date, format })
}

/**
 * 获取某个时间范围内的所以天数
 */
export const getDatesInRange = (start: string, end: string, format = 'YYYY-MM-DD') => {
  start = start.replace(/-/g, '/')
  end = end.replace(/-/g, '/')
  const startDate = new Date(start)
  const endDate = new Date(end)
  const dates = []

  //  循环遍历日期范围
  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1))
    dates.push(getSimpleDateFormatString({ date: new Date(date), format })) //  将每个日期添加到数组中

  return dates
}

export const getFormatTimeStamp = (time) => {
  const date = new Date(time)
  const interval = Math.ceil((new Date().getTime() - date.getTime()) / 1000) || 1
  const referenceArr = ['86400', '3600', '60', '1']
  const reference = {
    86400: '天',
    3600: '小时',
    60: '分钟',
    1: '秒',
  }

  for (let i = 0; i < referenceArr.length; i++) {
    const attr = referenceArr[i]
    const tempResult = Math.floor(interval / Number(attr))
    if (tempResult !== 0) {
      if (attr === '86400') {
        if (tempResult === 1)
          return '昨天'
        else
          return getSimpleDateFormatString({ date, format: 'YYYY-MM-DD hh:mm' })
      }
      return `${tempResult + reference[attr]}前`
    }
  }
}

/**
 * 获取时间戳，单位毫秒
 * @param { string } dateStr
 * @returns { number }
 */
export const getDateTimestamp = (dateStr = '') => {
  if (!dateStr)
    return new Date().getTime()
  return new Date(
    !isNaN(dateStr) ? dateStr : dateStr.replace(/-/g, '/'),
  ).getTime()
}

let countDownTimer = null
export const countDown = (endTime = '', advance = 0, callback) => {
  if (!endTime)
    return
  const countDownTime = getDateTimestamp(endTime)
  if (countDownTimer) {
    clearInterval(countDownTimer)
    countDownTimer = null
  }
  countDownTimer = setInterval(() => {
    const nowTime = new Date().getTime()
    const distance = countDownTime - nowTime
    if (distance < advance) {
      clearInterval(countDownTimer)
      countDownTimer = null
      if (callback)
        callback({ distance, status: 'complete' })
      return
    }
    if (callback)
      callback({ distance, status: 'pending' })
    // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }, 1000)
}
