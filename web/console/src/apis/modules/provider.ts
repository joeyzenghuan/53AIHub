export default {
  list: {
    url: '/providers',
    method: 'GET',
  },
  create: {
    url: '/providers',
    method: 'POST',
  },
  update: {
    url: '/providers/${provider_id}',
    method: 'PUT',
  },
  delete: {
    url: '/providers/${provider_id}',
    method: 'DELETE',
  },
}
