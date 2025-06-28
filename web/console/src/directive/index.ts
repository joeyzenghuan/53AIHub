import debounce from './debounce'
import copy from './copy'
import router from './router'

import overflowTooltip from './overflow-tooltip'
import truncate from './truncate'
import tooltip from './tooltip'

export function setupDirective(app) {
  app.directive('debounce', debounce)
  app.directive('copy', copy)
  app.directive('router', router)
  app.directive('overflow-tooltip', overflowTooltip)
  app.directive('truncate', truncate)
  app.directive('tooltip', tooltip)
}
