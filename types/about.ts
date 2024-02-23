import { Lang } from './common';

export type LocalizedAbout = {
	[key in Lang]: About;
};

export interface About {
	name: string;
	role: string;
	status: string;
	items: AboutItem[];
	summary: string;
}

export interface AboutItem {
	id: string;
	text: string;
}
