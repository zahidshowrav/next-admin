import { Metadata } from 'next';

import { AppSidebar } from '@/components/layouts/admin/app-sidebar';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/ui/breadcrumb';
import { Separator } from '@/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/ui/sidebar';
import ThemeSwitcher from '@/snippets/theme-switcher';

export const metadata: Metadata = {
	title: 'Public Layout Title'
};

const DashboardLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				{/* <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"> */}
				<header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
					<div className="w-full flex items-center gap-4 justify-between">
						<div className="flex items-center gap-2">
							<SidebarTrigger className="-ml-1" />
							<Separator
								orientation="vertical"
								className="mr-2 h-4"
							/>
							<Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbItem className="hidden md:block">
										<BreadcrumbLink href="#">
											Building Your Application
										</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator className="hidden md:block" />
									<BreadcrumbItem>
										<BreadcrumbPage>
											Data Fetching
										</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>
						</div>
						<div className="flex items-center justify-end gap-2">
							<ThemeSwitcher />
						</div>
					</div>
				</header>
				<div className="p-4">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
};

export default DashboardLayout;
