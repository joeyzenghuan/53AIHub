import type { ENTERPRISE_SYNC_FROM, WEBSITE_TYPE, WEBSITE_VERSION } from '@/constants/enterprise'

declare namespace Enterprise {
	type SyncFrom = typeof ENTERPRISE_SYNC_FROM[keyof typeof ENTERPRISE_SYNC_FROM]
	type WebsiteType = typeof WEBSITE_TYPE[keyof typeof WEBSITE_TYPE]
	type WebsiteVersion = typeof WEBSITE_VERSION[keyof typeof WEBSITE_VERSION]
}
