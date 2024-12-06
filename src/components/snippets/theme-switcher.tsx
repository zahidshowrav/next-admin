'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/ui/button';
import { cn } from '@/utils/helpers';
import { useMounted } from '@/hooks/use-mounted';

interface IThemeSwitcherProps {
	className?: string;
	buttonVariant?:
		| 'outline'
		| 'default'
		| 'destructive'
		| 'secondary'
		| 'ghost'
		| 'link'
		| null
		| undefined;
}

const ThemeSwitcher = (props: IThemeSwitcherProps) => {
	const { className = '', buttonVariant = 'outline' } = props;

	const { setTheme, theme } = useTheme();
	const mounted = useMounted();

	if (!mounted) return <></>;

	return (
		<Button
			variant={buttonVariant}
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
