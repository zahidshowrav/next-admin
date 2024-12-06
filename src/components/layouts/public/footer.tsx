import * as React from 'react';

import { siteConfig } from '@/configs/site';
import { cn } from '@/utils/helpers';
import Logo from '@/snippets/logo';
import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';
import { GITHUB_URL, TWITTER_URL } from '@/constants/common';
import IconGithub from '@/components/icons/github';
import IconX from '@/components/icons/x';

const PublicFooter = ({ className }: React.HTMLAttributes<HTMLElement>) => {
	return (
		<footer className={cn(className, 'container mx-auto px-6')}>
			<div className="md:h-20 md:border-t md:border-secondary flex flex-col items-center justify-between gap-4 py-10 md:flex-row md:py-0">
				<div className="w-full flex flex-col items-center justify-center md:justify-between gap-4 px-8 md:flex-row md:gap-2 md:px-0">
					<div className="flex flex-col items-center justify-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
						<Logo
							showLogoText={false}
							iconHeight={20}
							iconWidth={20}
						/>
						<p className="text-center text-sm leading-loose md:text-left">
							Built by{' '}
							<Link
								href={siteConfig.links.website}
								target="_blank"
								rel="noreferrer"
								className="font-medium hover:underline underline-offset-4"
							>
								zahidshowrav
							</Link>
							. Landing page design inspired by{' '}
							<Link
								href="https://tx.shadcn.com/"
								target="_blank"
								rel="noreferrer"
								className="font-medium hover:underline underline-offset-4"
							>
								taxonomy
							</Link>
							.
						</p>
					</div>
				</div>
				<div className="flex items-center justify-end gap-2">
					<Link
						href={GITHUB_URL}
						target="_blank"
						rel="noreferrer"
					>
						<IconGithub />
					</Link>
					<Link
						href={TWITTER_URL}
						target="_blank"
						rel="noreferrer"
					>
						<IconX />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default PublicFooter;
