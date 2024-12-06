'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { cn } from '@/utils/helpers';
import { Skeleton } from '@/ui/skeleton';
import { siteConfig } from '@/configs/site';
import { useMounted } from '@/hooks/use-mounted';

interface ILogoProps {
	iconHeight?: number;
	iconWidth?: number;
	showLogoText?: boolean;
	layout?: 'DASHBOARD' | 'PUBLIC' | 'AUTH';
	className?: string;
	classNames?: {
		logoText?: string;
	};
}

const Logo = (props: ILogoProps) => {
	const {
		iconHeight = 28,
		iconWidth = 28,
		showLogoText = true,
		className = '',
		classNames
	} = props;

	const router = useRouter();
	const { theme } = useTheme();
	const mounted = useMounted();

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
				height={iconHeight}
				width={iconWidth}
				alt="logo"
			/>
			<h3
				className={cn(
					'truncate text-foreground text-base font-medium hidden',
					!showLogoText ? 'sm:hidden' : 'sm:inline-block',
					classNames?.logoText
				)}
			>
				{siteConfig.name}
			</h3>
		</div>
	);
};

export default Logo;
