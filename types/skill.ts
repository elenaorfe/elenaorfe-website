import { Lang } from './common';

export interface Skill {
	name: string;
	type: SkillType;
	interest: SkillInterest;
}

export enum SkillType {
	'frontend',
	'style',
	'backend',
	'runtime',
	'testing',
	'accessibility',
	'infrastructure',
	'cms',
	'language',
	'tool',
	'methodology',
}

export enum SkillInterest {
	'low',
	'medium',
	'high',
}

export interface Chart {
	name: string;
	weight: number;
	color: string;
	fontSize?: number;
}

export type LocalizedSkill = {
	[key in Lang]: { title: string };
};
