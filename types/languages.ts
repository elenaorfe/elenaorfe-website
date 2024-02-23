import { Lang } from './common';

export type LocalizedLanguage = {
	[key in Lang]: Language;
};

export interface Language {
	title: string;
	items: LanguageItem[];
}

export interface LanguageItem {
	id: string;
	name: string;
	level: number;
	proficiency: string;
}
