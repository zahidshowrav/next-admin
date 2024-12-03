'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/ui/button';
import { cn } from '@/utils/helpers';

interface IThemeSwitcherProps {
	className?: string;
}
const ThemeSwitcher = (props: IThemeSwitcherProps) => {
	const { className = '' } = props;
	const [mounted, setMounted] = useState(false);
	const { setTheme, theme } = useTheme();

	useEffect(() => {
		if (!mounted) setMounted(true);
	}, [mounted]);

	if (!mounted) {
		return null;
	}

	return (
		<Button
			variant="outline"
			size="icon"
			className={cn('h-7 w-7', className)}
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		>
			{theme === 'light' && (
				<Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			)}
			{theme === 'dark' && (
				<Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};

export default ThemeSwitcher;
