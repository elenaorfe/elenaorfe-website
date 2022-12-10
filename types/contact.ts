import { Lang } from './common';

export type LocalizedHeader = {
	[key in Lang]: ContactLinks;
};

export type ContactLinks = {
	items: ContactLink[];
};

export type ContactLink = {
	href: string;
	label: string;
	icon: {
		name: string;
		label: string;
	};
};
