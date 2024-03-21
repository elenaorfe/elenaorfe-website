import { Lang } from './common';

export interface Chart {
	name: string;
	weight: number;
	color: string;
	fontSize?: number;
}

export type LocalizedSkill = {
	[key in Lang]: { title: string };
};
