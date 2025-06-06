export const NAV_TYPE_HOMEPAGE = 'homepage'
export const NAV_TYPE_SINGLE = 'single'
export const NAV_TYPE_AGENT = 'agent'

export const NAV_TYPE_LABEL_MAP = new Map([
	[NAV_TYPE_HOMEPAGE, window.$t('module.nav_type_homepage')],
	[NAV_TYPE_SINGLE, window.$t('module.nav_type_single')],
	[NAV_TYPE_AGENT, window.$t('module.nav_type_agent')],
])

export const NAV_TARGET_SELF = 'self'
export const NAV_TARGET_BLANK = 'blank'
export const NAV_TARGET_LABEL_MAP = new Map([
	[NAV_TARGET_SELF, window.$t('module.nav_target_self')],
	[NAV_TARGET_BLANK, window.$t('module.nav_target_blank')],
])

export const DEFAULT_NAV_LIST = [
	{
		id: 1,
		name: '首页',
		type: NAV_TYPE_HOMEPAGE,
		target: NAV_TARGET_SELF,
		visible: true,
		url: 'https://www.doubao.com/chat/',
		sort: 0,
	},
	{
		id: 2,
		name: 'AI百宝箱',
		type: NAV_TYPE_SINGLE,
		target: NAV_TARGET_SELF,
		visible: true,
		url: 'https://www.doubao.com/chat/',
		sort: 1,
	},
	{
		id: 3,
		name: '亚马逊商品标题',
		type: NAV_TYPE_AGENT,
		target: NAV_TARGET_SELF,
		visible: false,
		url: 'https://www.doubao.com/chat/',
		sort: 2,
	},
	{
		id: 4,
		name: 'AI知识库',
		type: NAV_TYPE_HOMEPAGE,
		target: NAV_TARGET_BLANK,
		visible: false,
		url: 'https://www.doubao.com/chat/',
		sort: 3,
	},
	{
		id: 5,
		name: '竞品分析报告',
		type: NAV_TYPE_AGENT,
		target: NAV_TARGET_BLANK,
		visible: false,
		url: 'https://www.doubao.com/chat/',
		sort: 4,
	},
	{
		id: 6,
		name: '结构化提示词',
		type: NAV_TYPE_HOMEPAGE,
		target: NAV_TARGET_BLANK,
		visible: true,
		url: 'https://www.doubao.com/chat/',
		sort: 5,
	},
	{
		id: 7,
		name: '产品研发创意',
		type: NAV_TYPE_HOMEPAGE,
		target: NAV_TARGET_BLANK,
		visible: false,
		url: 'https://www.doubao.com/chat/',
		sort: 6,
	},
	{
		id: 8,
		name: '联系我们',
		type: NAV_TYPE_HOMEPAGE,
		target: NAV_TARGET_BLANK,
		visible: true,
		url: 'https://www.doubao.com/chat/',
		sort: 7,
	},
]
