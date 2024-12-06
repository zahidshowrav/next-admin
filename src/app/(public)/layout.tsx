import { Metadata } from 'next';
import Link from 'next/link';

import MainNav from '@/layouts/public/main-nav';
import { mainNavConfig } from '@/configs/main-nav';
import { cn } from '@/utils/helpers';
import { buttonVariants } from '@/ui/button';
import PublicFooter from '@/layouts/public/footer';
import ThemeSwitcher from '@/components/snippets/theme-switcher';

export const metadata: Metadata = {
	title: 'Public Layout Title'
};

const PublicLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="container mx-auto px-6 z-40 bg-background">
				<div className="flex h-20 items-center justify-between py-6">
					<MainNav items={mainNavConfig.mainNav} />
					<div className="flex items-center justify-end gap-3">
						<ThemeSwitcher
							buttonVariant="ghost"
							className="h-8 w-8"
						/>
						<nav>
							<Link
								href="/login"
								className={cn(
									buttonVariants({
										variant: 'secondary',
										size: 'sm'
									}),
									'px-4'
								)}
							>
								Login
							</Link>
						</nav>
					</div>
				</div>
			</header>
			<main className="flex-1">{children}</main>
			<PublicFooter />
		</div>
	);
};

export default PublicLayout;
