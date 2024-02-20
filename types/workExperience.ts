import { Lang } from './common';
import { Skill } from './skill';

export type LocalizedWorkExperience = {
	[key in Lang]: WorkExperience;
};

export interface WorkExperience {
	title: string;
	description: string;
	items: WorkExperienceItem[];
}

export interface WorkExperienceItem {
	id: string;
	company: string;
	role: string;
	description: string;
	dateStart: string;
	dateEnd: string;
	logo: string;
	color: string;
	projects: Project[];
}

export interface Project {
	id: string;
	duration: string;
	dateStart: string;
	dateEnd: string | null;
	durationInMonths?: number;
	title: string;
	role: string;
	location: string;
	achievements: string[];
	skills: Skill[];
}
