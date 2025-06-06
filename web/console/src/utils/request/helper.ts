import { oss_host, api_host } from '@/utils/config'
import { getFileExt } from '@/utils'

export const stream = (result) => {
  const xhr = result.event.target
  const responseText = xhr.responseText
  return responseText.split('data: ').map((text) => {
    if (!text)
      return ''
    const lastIndex = text.lastIndexOf('}')
    let chunk = text
    if (lastIndex !== -1)
      chunk = text.slice(0, lastIndex + 1)
    try {
      return JSON.parse(chunk)
    }
    catch (error) {
      return ''
    }
  }).filter(item => item)

  // const data = responseText.split('data: ').reduce((result, text) => {
  //   if (!text)
  //     return result

  //   const lastIndex = text.lastIndexOf(
  //     '\n',
  //     text.length - 2,
  //   )
  //   let chunk = text
  //   if (lastIndex !== -1)
  //     chunk = text.substring(0, lastIndex)
  //   try {
  //     const data = JSON.parse(chunk)
  //     const text = data.answer || ''
  //     if (result.id)
  //       data.text = result.text + text

  //     else
  //       data.text = text

  //     return data
  //   }
  //   catch (error) {
  //     //
  //     return result
  //   }
  // }, { text: '' })
  return data
}

export const formatChat = (list) => {
  return list.reduce((result, data) => {
    const choices = data.choices || []
    const origin_data = data.origin_data || { }
    if (!choices.length)
      return result
    const text = choices[0].delta.content ?? ''
    const append_content = choices[0].delta.append_content ?? ''
    const contentid = choices[0].delta.content_id ?? ''

    if (contentid)
      result.contentid = contentid

    if (data.message_id)
      result.message_id = data.message_id

    // if (data.id)
    result.text = result.text + text
    if (data.event === 'message_replace')
      result.text = text

    if (append_content && append_content.length)
      result.append_content = append_content

    if (origin_data.event === 'agent_thought' && origin_data.tool) {
      origin_data.tool = origin_data.tool.split(';')[0]
      const tool = result.agent_thoughts.find(t => t.tool === origin_data.tool)
      if (tool)
        Object.assign(tool, origin_data)
      else
        result.agent_thoughts.push(origin_data)
    }
    else if (origin_data.event === 'message_file') {
      result.message_files.push(origin_data)
    }

    return result
  }, { contentid: '', message_id: '', text: '', append_content: [], choices: [], agent_thoughts: [] })
}

export const formatNormal = (list): { text: string } => {
  return list.reduce((result, item) => {
    Object.assign(result, item)
    result.text += (item.answer || '')
    if (item.event === 'message_replace')
      result.text = item.answer

    return result
  }, { text: '' })
}

export const formatChatBi = (data, answerKey = 'text') => {
  data.agent_thoughts = data.agent_thoughts || []
  const chatbi = data.agent_thoughts.find(though => though.tool === 'chat_bi_select')
  if (chatbi) {
    let chat_bi_select = ''
    try {
      chat_bi_select = JSON.parse(chatbi.observation).chat_bi_select
      const chatbiData = JSON.parse(chat_bi_select)
      const llm_result = Object.assign({ display_type: '', sql: '', thoughts: '' }, chatbiData.llm_result)
      chatbiData.chart_type = llm_result.display_type.includes('chart') ? 'bar' : ''
      chatbiData.tab_type = llm_result.display_type.includes('chart') ? 'chart' : 'data'
      chatbiData.run_sql_result_keys = Object.keys(chatbiData.run_sql_result[0] || {})
      llm_result.sql = `\`\`\`sql
${llm_result.sql}
\`\`\``

      chatbiData.llm_result = llm_result
      data[answerKey] = chatbiData.error_message || llm_result.thoughts
      data.chat_bi = chatbiData.error_message ? null : chatbiData
    }
    catch (error) {
      data[answerKey] = chat_bi_select
    }
  }
  return data
}

export const formatResources = (item, target?: any, config?: any) => {
  target = target || item
  // 来源
  target.retriever_resources = (item.retriever_resources || []).reduce((result, item) => {
    const file = result.find(resouce => resouce.document_id === item.document_id)
    if (file) {
      const segment = file.segments.find(s => s.segment_position === item.segment_position)
      if (!segment)
      	file.segments.push(item)
    }
    else {
      item.document_icon = `/images/file/${getFileExt(item.document_name)}.png`
      item.segments = [item]
      result.push(item)
    }
    return result
  }, [])
  if (config) {
    if (!config.enabled)
      target.retriever_resources = []

    if (!config.slice_score) {
      target.retriever_resources.forEach((resource) => {
        resource.segments = []
      })
    }
  }
  return target
}
export const formatMessageFile = (item, target?: any) => {
  target = target || item
  const message_files = (item.message_files || []).map(({ ...item }) => {
    if (item.type === 'image')
      item.url = `${!item.url.startsWith('/') ? '' : (`${api_host}`)}${item.url}`
    else if (item.type === 'audio')
      item.url = `${oss_host}/${item.url}`

    return item
  })
  target.message_files = message_files
  target.user_images = message_files.filter(file => file.belongs_to === 'user' && file.type === 'image')
  target.assistant_images = message_files.filter(file => file.belongs_to === 'assistant' && file.type === 'image')

  target.user_audio_open = false
  target.assistant_audio_open = false
  target.user_audio = message_files.find(item => item.belongs_to === 'user' && item.type === 'audio')
  if (!target.assistant_audio || target.assistant_audio === 'virtual')
    target.assistant_audio = message_files.find(item => item.belongs_to === 'assistant' && item.type === 'audio')
  return target
}

export const formatRobot = (list: any[]): { message_id: string; id: string; task_id: string; conversation_id: string; text: string; error: string; append_content: any[]; agent_thoughts: any[]; message_files: any[]; audio: string[] } => {
  return list.reduce((result, data) => {
    const text = data.answer || ''
    if (data.event === 'message_replace')
      result.text = text
    else
      result.text += text

    if (!data.event) {

    }
    else if (data.event === 'error') {
      result.error = data.message
    }
    else if (data.event === 'agent_thought') {
      if (data.tool) {
        data.tool = data.tool.split(';')[0]
        const tool = result.agent_thoughts.find(t => t.tool === data.tool)
        if (tool)
          Object.assign(tool, data)
        else
          result.agent_thoughts.push(data)
      }
    }
    else if (data.event === 'message_file') {
      result.message_files.push(data)
    }
    else if (data.event.startsWith('tts_message')) {
      result.audio.push(data.audio)
    }
    if (data.append_content)
      result.append_content = data.append_content

    if (!result.message_id) {
      result.task_id = data.task_id
      result.id = data.message_id
      result.message_id = data.message_id
      result.conversation_id = data.conversation_id
    }
    return result
  }, { task_id: '', id: '', message_id: '', conversation_id: '', text: '', error: '', agent_thoughts: [], append_content: [], message_files: [], audio: [] })
}
