import { Lang } from './common';

export type LocalizedLanguage = {
	[key in Lang]: Language[];
};

export interface Language {
	id: string;
	name: string;
	level: number;
	proficiency: string;
}
