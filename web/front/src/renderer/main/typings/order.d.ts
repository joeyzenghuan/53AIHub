declare namespace Order {
  interface State {
    id: number
    eid: number
    order_id: string
    service_id: number
    service_type: number
    subscription_name: string
    duration: number
    time_unit: string
    currency: string
    amount: number
    pay_type: number
    status: number
    user_id: number
    nickname: string
    transaction_id: string
    pay_time: number
    expired_time: string
    created_time: string
    updated_time: string
  }
}
