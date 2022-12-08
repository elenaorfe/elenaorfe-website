import { Lang } from './common';

export type LocalizedHeader = {
	[key in Lang]: HeaderLinks;
};

export type HeaderLinks = {
	items: HeaderLink[];
};

export type HeaderLink = {
	href: string;
	label: string;
	icon: {
		name: string;
		label: string;
	};
};
