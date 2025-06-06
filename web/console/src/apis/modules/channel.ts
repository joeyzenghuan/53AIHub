export default {
  list: {
    url: '/channels',
    method: 'GET',
	},
	create: {
		url: '/channels',
		method: 'POST',
	},
	update: {
		url: '/channels/${channel_id}',
		method: 'PUT',
	},
	delete: {
		url: '/channels/${channel_id}',
    method: 'DELETE',
	},
	model_list: {
		url: '/channels/models',
		method: 'GET',
	},
	coze_workspace_list: {
		url: '/coze/workspaces',
		method: 'GET',
	},
	coze_bot_list: {
		url: '/coze/workspaces/${workspace_id}/bots',
		method: 'GET',
	}
}