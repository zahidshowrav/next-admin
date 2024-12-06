'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { cn } from '@/utils/helpers';
import { Skeleton } from '@/ui/skeleton';

interface ILogoProps {
	showLogoText?: boolean;
	layout?: 'DASHBOARD' | 'PUBLIC' | 'AUTH';
	className?: string;
}

const Logo = (props: ILogoProps) => {
	const { showLogoText = true, className = '' } = props;

	const router = useRouter();
	const { theme } = useTheme();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (!mounted) setMounted(true);
	}, [mounted]);

	if (!mounted) {
		return (
			<div
				className={cn(
					'flex items-center gap-x-2',
					showLogoText ? 'p-2' : '',
					className
				)}
			>
				<Skeleton className="h-7 w-7 shrink-0" />
				{showLogoText && <Skeleton className=" h-4 w-32" />}
			</div>
		);
	}

	return (
		<div
			className={cn(
				'flex items-center gap-x-2 cursor-pointer',
				showLogoText ? 'p-2' : '',
				className
			)}
			onClick={() => router.push('/dashboard')}
		>
			<Image
				src={
					theme === 'light'
						? '/logo-icon-light.png'
						: '/logo-icon-dark.png'
				}
				height={28}
				width={28}
				alt="logo"
			/>
			{/* Use following element if necessary */}
			{/* <h3 className="truncate text-foreground text-lg">Next Admin</h3> */}
			{showLogoText && (
				<Image
					src={
						theme === 'light'
							? '/logo-text-light.png'
							: '/logo-text-dark.png'
					}
					height={20}
					width={128}
					alt="Next Admin"
				/>
			)}
		</div>
	);
};

export default Logo;
