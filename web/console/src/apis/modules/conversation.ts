export default {
  list: {
    url: '/conversations',
    method: 'GET',
  },
  create: {
    url: '/conversations',
    method: 'POST',
  },
  update: {
    url: '/conversations/${conversation_id}',
    method: 'PUT',
  },
  delete: {
    url: '/conversations/${conversation_id}',
    method: 'DELETE',
  },
  detail: {
    url: '/conversations/${conversation_id}',
    method: 'GET',
  },
  chat: {
    pathname: '/v1',
    url: '/chat/completions',
    method: 'POST',
    isStream: true,
  },
}
