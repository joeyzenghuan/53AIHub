export default {
  list: {
    url: '/groups/type/${group_type}',
    method: 'GET',
	},
	save: {
		url: '/groups/type/${group_type}',
    method: 'POST',
	},
	delete: {
		url: '/groups/${group_id}',
    method: 'DELETE',
	},
}
