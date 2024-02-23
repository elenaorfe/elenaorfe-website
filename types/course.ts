import { Lang } from './common';

export type LocalizedCourse = {
	[key in Lang]: Course;
};

export interface Course {
	title: string;
	items: CourseItem[];
}

export interface CourseItem {
	id: string;
	title: string;
	description: string;
	skills: string[];
	date: string;
	icon: string;
}
