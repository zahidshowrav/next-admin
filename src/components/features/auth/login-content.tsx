import Logo from '@/snippets/logo';

const LoginContent = () => {
	return (
		<div className="flex flex-col space-y-2 text-center align-center justify-center">
			<Logo
				showLogoText={false}
				className="justify-center"
			/>
			<h1 className="text-2xl font-semibold tracking-tight">
				Welcome back
			</h1>
			<p className="text-sm text-muted-foreground">
				Enter your email to sign in to your account
			</p>
		</div>
	);
};

export default LoginContent;
