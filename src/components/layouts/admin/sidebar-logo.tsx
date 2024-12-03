import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { cn } from '@/utils/helpers';
import { useSidebar } from '@/ui/sidebar';
import { Skeleton } from '@/ui/skeleton';

const SidebarLogo = () => {
	const router = useRouter();

	const { theme } = useTheme();
	const { open } = useSidebar();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (!mounted) setMounted(true);
	}, [mounted]);

	// eslint-disable-next-line no-console
	console.log(
		'icon---:',
		theme === 'light' ? '/logo-icon-light.png' : '/logo-icon-dark.png'
	);

	if (!mounted) {
		return (
			<div className={cn('flex items-center gap-x-2', open ? 'p-2' : '')}>
				<Skeleton className="h-8 w-8 shrink-0" />
				{open && <Skeleton className="h-7 w-24" />}
			</div>
		);
	}

	return (
		<div
			className={cn(
				'flex items-center gap-x-2 cursor-pointer',
				open ? 'p-2' : ''
			)}
			onClick={() => router.push('/dashboard')}
		>
			<Image
				src={
					theme === 'light'
						? '/logo-icon-light.png'
						: '/logo-icon-dark.png'
				}
				height={32}
				width={32}
				alt="logo"
			/>
			<h3 className="truncate text-foreground text-lg">Next Admin</h3>
		</div>
	);
};

export default SidebarLogo;
