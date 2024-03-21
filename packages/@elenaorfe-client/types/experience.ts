import { Lang, Period, Skill } from './common';

export type LocalizedExperience = {
	[key in Lang]: Experience[];
};

export interface Experience {
	id: string;
	type: string;
	company: Company | null;
	period: Period;
	projects: Project[];
}

interface Company {
	name: string;
	url: string;
	logo: string;
	color: string;
}

export interface Project {
	id: string;
	name: string;
	role: string;
	period: Period;
	location: string;
	url: string | null;
	platforms: string[];
	skills: Skill[];
	description: Description;
}

interface Description {
	details: string[];
	summary: string;
}
