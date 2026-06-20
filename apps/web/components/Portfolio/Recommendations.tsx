import React from 'react';
import { Recommendation } from '../../types/recommendation';
import Title from '../Title';
import RecommendationsList from './RecommendationsList';

interface RecommendationsProps {
	recommendations: Recommendation[];
	translations: any;
}

const Recommendations: React.FC<RecommendationsProps> = ({
	recommendations,
	translations,
}) => {
	return (
		<section className="mb-16">
			<Title text={translations.recommendations.title} />
			<RecommendationsList
				recommendations={recommendations}
				translations={translations}
			/>
		</section>
	);
};

export default Recommendations;
