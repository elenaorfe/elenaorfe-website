import { Lang } from './common';

export type LocalizedHeader = {
	[key in Lang]: ContactLinks;
};

export interface ContactLinks {
	items: ContactLink[];
}

export interface ContactLink {
	href: string | null;
	label: string;
	icon: {
		name: string;
		label: string | null;
	};
}
