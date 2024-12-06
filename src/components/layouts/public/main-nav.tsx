'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { cn } from '@/utils/helpers';
import { IMainNavItem } from '@/types/main-nav';
import Logo from '@/components/snippets/logo';
import { X } from 'lucide-react';
import MainMobileNav from './main-mobile-nav';

interface MainNavProps {
	items?: IMainNavItem[];
	children?: React.ReactNode;
}

const MainNav = ({ items, children }: MainNavProps) => {
	const segment = useSelectedLayoutSegment();
	const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

	return (
		<div className="flex gap-6 md:gap-10">
			<Link
				href="/"
				className="hidden items-center space-x-2 md:flex"
			>
				<Logo />
				<span className="hidden font-bold sm:inline-block"></span>
			</Link>
			{items?.length ? (
				<nav className="hidden gap-6 md:flex">
					{items?.map((item, index) => (
						<Link
							key={index}
							href={item.disabled ? '#' : item.href}
							className={cn(
								'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
								item.href.startsWith(`/${segment}`)
									? 'text-foreground'
									: 'text-foreground/60',
								item.disabled && 'cursor-not-allowed opacity-80'
							)}
						>
							{item.title}
						</Link>
					))}
				</nav>
			) : null}
			<button
				className="flex items-center space-x-2 md:hidden"
				onClick={() => setShowMobileMenu(!showMobileMenu)}
			>
				{showMobileMenu ? <X /> : <Logo showLogoText={false} />}
				<span className="font-bold">Menu</span>
			</button>
			{showMobileMenu && items && (
				<MainMobileNav items={items}>{children}</MainMobileNav>
			)}
		</div>
	);
};

export default MainNav;
