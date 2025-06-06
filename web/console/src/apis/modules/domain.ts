export default {
	saas_list: {
		url: '/saas/domains',
		method: 'GET',
	},
	saas_create: {
		url: '/saas/domains/exclusive',
		method: 'POST',
	},
	saas_update: {
		url: '/saas/domains/exclusive/${domain_id}',
		method: 'PUT',
	},
}