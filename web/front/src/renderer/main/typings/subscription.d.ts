declare namespace Subscription {
  interface State {
    group: {
      created_by: number
      created_time: number
      eid: number
      group_id: number
      group_name: string
      group_type: number
      sort: number
      updated_time: number
    }
    setting: {
      ai_enabled: boolean
      created_time: number
      group_id: number
      logo_url: string
      setting_id: number
      updated_time: number
    }
  }
}
