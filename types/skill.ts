import { Lang } from './common';

export interface Skill {
	name: string;
	type: SkillType;
	interest: SkillInterest;
}

export enum SkillType {
	frontend = 'frontend',
	style = 'style',
	backend = 'backend',
	runtime = 'runtime',
	testing = 'testing',
	accessibility = 'accessibility',
	infrastructure = 'infrastructure',
	cms = 'cms',
	language = 'language',
	tool = 'tool',
	methodology = 'methodology',
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
