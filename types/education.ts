import { Lang } from './common';

export type LocalizedEducation = {
	[key in Lang]: Education;
};

export type Education = {
	title: string;
	items: EducationItem[];
};

export type EducationItem = {
	id: string;
	title: string;
	description: string;
	date: string;
};
