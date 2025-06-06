export default {
  list: {
    url: '/agents/group',
    method: 'GET',
	},
	create: {
		url: '/agents',
		method: 'POST',
	},
	update: {
		url: '/agents/${agent_id}',
		method: 'PUT',
	},
	delete: {
		url: '/agents/${agent_id}',
    method: 'DELETE',
	},
	detail: {
		url: '/agents/${agent_id}',
		method: 'GET',
	},
	update_status: {
		url: '/agents/${agent_id}/status',
		method: 'PATCH',
	}
}