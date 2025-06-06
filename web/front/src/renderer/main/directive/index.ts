import trim from './trim'
import copy from './copy'
import tooltip from './tooltip'
import debounce from './debounce'

export function setupDirective(app) {
  app.directive('trim', trim)
  app.directive('copy', copy)
  app.directive('tooltip', tooltip)
  app.directive('debounce', debounce)
}
