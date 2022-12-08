import { Lang } from './common';

export type LocalizedPersonalProject = {
	[key in Lang]: PersonalProject;
};

export type PersonalProject = {
	title: string;
	description: string;
	link: string;
	items: PersonalProjectItem[];
};

export type PersonalProjectItem = {
	id: string;
	title: string;
	date: string;
	description: string;
	skills: string[];
	img: string;
	url: string;
	category: string;
};
