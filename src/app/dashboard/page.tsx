import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dashboard'
};

const DashboardPage = () => {
	return (
		<>
			<div className="flex flex-1 flex-col gap-4 pt-0">
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="aspect-video rounded-xl bg-muted/50" />
					<div className="aspect-video rounded-xl bg-muted/50">
						<h2 className="m-10 text-xl text-center py-10">
							Welcome, Dashboard!
						</h2>
					</div>
					<div className="aspect-video rounded-xl bg-muted/50" />
				</div>
				<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50" />
			</div>
		</>
	);
};

export default DashboardPage;
