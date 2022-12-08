import { Lang } from './common';

export type LocalizedCourse = {
	[key in Lang]: Course;
};

export type Course = {
	title: string;
	items: CourseItem[];
};

export type CourseItem = {
	id: string;
	title: string;
	description: string;
	skills: string[];
	date: string;
	icon: string;
};
