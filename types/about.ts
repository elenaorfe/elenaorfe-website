import { Lang } from './common';

export type LocalizedAbout = {
	[key in Lang]: About;
};

export type About = {
	name: string;
	role: string;
	status: string;
	items: AboutItem[];
};

export type AboutItem = {
	id: string;
	text: string;
};
