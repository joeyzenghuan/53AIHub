import service from '../config'
import { handleError } from '../errorHandler'

export const templateStyleApi = {
  async getTemplateStyle() {
    const { data: { template_type = '{}' } = {} } = await service
      .get('/api/enterprises/template_type')
      .catch(handleError)
    let data = {}
    try {
      data = JSON.parse(template_type)
    } catch (error) {
      // console.error(error)
      data = {}
    }
    return data
  },
  async saveTemplateStyle(data: {
    style_type: string
    theme_color: string
    text_color: string
    nav_bg_color: string
    nav_text_color: string
    page_footer_bg_color: string
    page_footer_text_color: string
  }) {
    return service
      .put('/api/enterprises/template_type', { template_type: JSON.stringify(data) })
      .catch(handleError)
  }
}

export default templateStyleApi

export type { templateStyleApi }
