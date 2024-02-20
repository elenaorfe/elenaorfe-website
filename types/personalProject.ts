import { Lang } from './common';
import { Skill } from './skill';

export type LocalizedPersonalProject = {
	[key in Lang]: PersonalProject;
};

export interface PersonalProject {
	title: string;
	description: string;
	link: string;
	items: PersonalProjectItem[];
}

export interface PersonalProjectItem {
	id: string;
	title: string;
	date: string;
	description: string;
	skills: Skill[];
	img: string;
	url: string;
	category: string;
}
