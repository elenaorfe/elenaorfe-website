import { Lang } from './common';

export type LocalizedLanguage = {
	[key in Lang]: Language;
};

export type Language = {
	title: string;
	items: LanguageItem[];
};

export type LanguageItem = {
	id: string;
	name: string;
	level: string;
};
