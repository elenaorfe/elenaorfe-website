import { Lang } from './common';

export type Recommendation = {
	id: string;
	author: RecommendationAuthor;
	date: string;
	comment: string | string[];
};

type RecommendationAuthor = {
	name: string;
	company: string;
	role: string;
};

export type LocalizedRecommendations = {
	[key in Lang]: Recommendation[];
};
