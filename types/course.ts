import { Icon, Lang, Skill } from './common';

export type LocalizedCourse = {
	[key in Lang]: Course[];
};

export interface Course {
	id: string;
	name: string;
	provider: string;
	skills: Skill[];
	date: string;
	icon: Icon;
}
