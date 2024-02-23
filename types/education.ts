import { Lang } from './common';

export type LocalizedEducation = {
	[key in Lang]: Education;
};

export interface Education {
	title: string;
	items: EducationItem[];
}

export interface EducationItem {
	id: string;
	title: string;
	description: string;
	date: string;
}
