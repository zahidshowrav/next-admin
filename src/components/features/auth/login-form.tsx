'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/ui/card';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';

const LoginForm = () => {
	const router = useRouter();
	return (
		<Card className="w-full sm:w-[455px]">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Enter your email below to login to your account
				</CardDescription>
			</CardHeader>

			<CardContent>
				<div className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							required
						/>
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
							<Link
								href="/forgot-password"
								className="ml-auto inline-block text-sm underline"
							>
								Forgot your password?
							</Link>
						</div>
						<Input
							id="password"
							type="password"
							required
						/>
					</div>
					<Button
						type="submit"
						className="w-full"
						onClick={() => router.push('/dashboard')}
					>
						Login
					</Button>
					<Button
						variant="outline"
						className="w-full"
						onClick={() => router.push('/dashboard')}
					>
						Login with Google
					</Button>
				</div>
				<div className="mt-4 text-center text-sm">
					Don&apos;t have an account?{' '}
					<Link
						href="/register"
						className="underline"
					>
						Sign up
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};

export default LoginForm;
