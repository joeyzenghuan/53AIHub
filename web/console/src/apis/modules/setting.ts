export default {
  list: {
    url: '/settings',
    method: 'GET',
  },
  detail: {
    url: '/settings/group/${group_name}',
    method: 'GET',
  },
  create: {
    url: '/settings',
    method: 'POST',
  },
  update: {
    url: '/settings/${setting_id}',
    method: 'PUT',
  },
  payment_setting_list: {
    url: '/pay_settings',
    method: 'GET',
  },
}
