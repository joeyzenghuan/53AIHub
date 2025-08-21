import { useChannelStore } from '@/stores'
import { getModelChannelTypes } from '@/constants/platform/config'

export const loadModelList = async (): Promise<any[]> => {
  const channelStore = useChannelStore()
  const list = await channelStore.loadListData({ reset: false })
  const modelList = (list || []).filter((item: any) =>
    getModelChannelTypes().includes(item.channel_type)
  )
  return modelList
}
