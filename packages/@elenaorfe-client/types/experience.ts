import { Lang, Period, Skill } from './common';

export type LocalizedExperience = {
	[key in Lang]: Experience[];
};

export type Experience = {
	id: string;
	type: string;
	company: Company | null;
	period: Period;
	projects: Project[];
};

type Company = {
	name: string;
	location: string;
	url: string;
	logo: string;
	color: string;
	summary: string;
};

export type Project = {
	id: string;
	name: string;
	role: string;
	period: Period;
	location: string;
	url: string | null;
	platforms: string[];
	skills: Skill[];
	description: Description;
	showInCV: boolean;
};

type Description = {
	details: string[];
	summary: string;
};
