declare namespace Link {
  interface State {
    id: number
    eid: number
    group_id: number
    name: string
    logo: string
    url: string
    description: string
    sort: number
    created_by: number
    created_time: number
    updated_time: number
    visible?: boolean
  }
}
