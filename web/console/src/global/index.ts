export function setupFilter(app) {
  app.config.globalProperties.$filters = {
    addCommasToNumber(number) {
      // 将数字转换为字符串
      let numberString = number.toString()

      // 使用正则表达式在千位、百位之间插入逗号
      numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

      return numberString
    },
  }
}
export function setupGlobal(app) {
  const $getRealPath = function ({ url = '' } = {}) {
    return (location.pathname.length > 1 ? location.pathname : '') + (url || '')
  }

  app.config.globalProperties.$noop = function () {}

  app.config.globalProperties.$rules = {
    required(message = '请输入', trigger = ['blur', 'change'], required = true) {
      return {
        validator(rule: any, value: any, callback: any) {
          if (Array.isArray(value)) {
            if (!required || value.length)
              callback()
            else
              callback(new Error(message))
          }
          else {
            value = String(value || '').trim()
            if (!required && !value)
              callback()
            else if (value)
              callback()
            else
              callback(new Error(message))
          }
        },
        trigger,
      }
    },
    mobile(message = '请输入手机号', trigger = ['blur', 'change'], required = true) {
      return {
        validator(rule: any, value: any, callback: any) {
          value = (value || '').trim()
          if (!required && !value)
            callback()
          else if (/^1\d{10}$/.test(value))
            callback()
          else
            callback(new Error(message))
        },
        trigger,
      }
    },
    email(message = '请输入邮箱', trigger = ['blur', 'change'], required = true) {
      return {
        validator(rule: any, value: any, callback: any) {
          const emailReg = /^([a-zA-Z0-9_.-])+@((([a-zA-Z0-9-])+.)+([a-zA-Z]{2,4}))+$/
          value = (value || '').trim()

          if (!required && !value)
            callback()
          else if (emailReg.test(value))
            callback()
          else
            callback(new Error(message))
        },
        trigger,
      }
    },
    url(message = '请输入url', trigger = ['blur', 'change'], required = true) {
      return {
        validator(rule: any, value: any, callback: any) {
          const reg = /^(https?:\/\/)[-A-Za-z0-9+&@#/%?=~_|!:,.;{}]+[-A-Za-z0-9+&@#/%=~_|{}]$/g
          value = (value || '').trim()

          if (!required && !value)
            callback()
          else if (reg.test(value))
            callback()
          else
            callback(new Error(message))
        },
        trigger,
      }
    },
    // 变量
    variable(message = '请输入变量，只能包含英文字符，数字和下划线', trigger = ['blur', 'change'], required = true) {
      return {
        validator(rule: any, value: any, callback: any) {
          const reg = /^[a-zA-Z]([a-zA-Z0-9_]+)?$/
          value = (value || '').trim()

          if (!required && !value)
            callback()
          else if (reg.test(value))
            callback()
          else
            callback(new Error(message))
        },
        trigger,
      }
    },
    json(message = '请输入', trigger = ['blur', 'change'], required = true) {
      return {
        validator(rule: any, value: any, callback: any) {
          value = (value || '').trim()

          if (!required && !value) { callback() }
          else if (value) {
            try {
              JSON.parse(value)
              callback()
            }
            catch (error) {
              callback(new Error(message))
            }
          }
          else { callback(new Error(message)) }
        },
        trigger,
      }
    },
    richText(message = '请输入', trigger = ['blur', 'change']) {
      return {
        validator(rule: any, value: any, callback: any) {
          const isEmpty = value.every(item => item.type === 'text' && item.content.trim().length === 0)
          if (value.length === 0 || isEmpty)
            callback(new Error(message))
          else
            callback()
        },
        trigger,
      }
    },
    model(message = '请选择模型', trigger = ['blur', 'change']) {
      return {
        validator(rule: any, value: any, callback: any) {
          const isFull = Object.values(value).every(item => item)
          if (isFull)
            callback()
					 else
            callback(new Error(message))

          // const isEmpty = value.every(item => item.type === 'text' && item.content.trim().length === 0)
          // if (value.length === 0 || isEmpty)
          // else
          //   callback()
        },
        trigger,
      }
    },
  }
  app.config.globalProperties.$getRealPath = $getRealPath
  app.config.globalProperties.$numberInputKeydownHandler = (e: KeyboardEvent) => {
		if (!['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
			e.preventDefault()
			e.stopPropagation()
		}
	}

  window.$getRealPath = $getRealPath
}
