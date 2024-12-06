export interface IMainNavItem {
	title: string;
	href: string;
	disabled?: boolean;
}

export interface IMainNav {
	mainNav: IMainNavItem[];
}
