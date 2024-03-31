import { Lang } from './common';

export type LocalizedContact = {
	[key in Lang]: Contact[];
};

export type Contact = {
	id: string;
	type: string;
	href: string | null;
	icon: {
		name: string;
		label: string;
	};
	a11yLabel: string;
};

export enum ContactType {
	link,
	info,
}
