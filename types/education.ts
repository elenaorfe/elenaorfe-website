import { Lang, Period } from './common';

export type LocalizedEducation = {
	[key in Lang]: Education[];
};

export interface Education {
	id: string;
	title: string;
	entity: {
		name: string;
		location: {
			city: string;
			country: string;
		};
	};
	period: Period;
}
