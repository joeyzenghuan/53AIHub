declare namespace User {
  interface Info {
    access_token: string
    user_id: string
    username: string
    nickname: string
    avatar: string
    email: string
    eid: number
    role: number
    group_id: number
    group_name: string
    group_icon: string
    mobile: string
    is_internal: boolean
  }

  interface LoginForm {
    username: string
    password: string
  }

  interface RegisterForm {
    username: string
    password: string
    nickname?: string
    verify_code?: string
  }
}
