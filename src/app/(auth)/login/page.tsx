import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

import { buttonVariants } from '@/ui/button';
import { cn } from '@/utils/helpers';
import LoginForm from '@/features/auth/login-form';
import LoginContent from '@/features/auth/login-content';

export const metadata: Metadata = {
	title: 'Login',
	description: 'Login to your account'
};

const LoginPage = () => {
	return (
		<div className="container mx-auto px-4">
			<div className="w-full flex h-screen flex-col items-center justify-center p-4">
				<Link
					href="/"
					className={cn(
						buttonVariants({ variant: 'ghost' }),
						'absolute left-4 top-4 md:left-8 md:top-8'
					)}
				>
					<>
						<ChevronLeft className="mr-2 h-4 w-4" />
						Back
					</>
				</Link>
				<div className="w-full sm:w-[455px] mx-auto flex flex-col justify-center space-y-6">
					<LoginContent />
					<LoginForm />
					<p className="px-8 text-center text-sm text-muted-foreground">
						<Link
							href="/register"
							className="hover:text-brand underline underline-offset-4"
						>
							Don&apos;t have an account? Sign Up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
