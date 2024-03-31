import { Lang } from './common';

export type LocalizedAbout = {
	[key in Lang]: About;
};

export type About = {
	name: string;
	role: string;
	status: {
		openToWork: boolean;
		description: string | null;
	};
	description: AboutDescription;
};

export type AboutDescription = {
	summary: string;
	details: string[];
};
