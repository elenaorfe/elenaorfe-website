import { Lang } from './common';

export type LocalizedWorkExperience = {
	[key in Lang]: WorkExperience;
};

export type WorkExperience = {
	title: string;
	description: string;
	items: WorkExperienceItem[];
};

export type WorkExperienceItem = {
	id: string;
	name: string;
	description: string;
	dateStart: string;
	dateEnd: string;
	logo: string;
	color: string;
	projects: Project[];
};

export type Project = {
	id: string;
	duration: string;
	title: string;
	role: string;
	location: string;
	description: string;
	skills: string[];
};