import { Lang } from './common';

export type LocalizedAbout = {
	[key in Lang]: About;
};

export interface About {
	name: string;
	role: string;
	status: {
		openToWork: boolean;
		description: string | null;
	};
	description: AboutDescription;
}

export interface AboutDescription {
	summary: string;
	details: string[];
}
