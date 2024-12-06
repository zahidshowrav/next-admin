import {
	GITHUB_URL,
	OG_IMAGE,
	SITE_URL,
	TWITTER_URL,
	WEBSITE_URL
} from '@/constants/common';
import { ISiteConfig } from '@/types/site';

export const siteConfig: ISiteConfig = {
	name: 'NextAdmin',
	description: 'An admin dashboard starter built on Next.js 15 & Shadcn',
	url: SITE_URL || '/',
	ogImage: OG_IMAGE || '/',
	links: {
		twitter: TWITTER_URL || '/',
		github: GITHUB_URL || '/',
		website: WEBSITE_URL || '/'
	}
};
