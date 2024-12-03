import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Public Layout Title'
};

const PublicLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <div className="h-full bg-background">{children}</div>;
};

export default PublicLayout;
