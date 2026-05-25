import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Recommendation } from '../../types/recommendation';
import RecommendationCard from '../RecommendationCard';

interface RecommendationsListProps {
	recommendations: Recommendation[];
	translations: any;
}

const RecommendationsList: React.FC<RecommendationsListProps> = ({
	recommendations,
	translations,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = (): void => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1,
		);
	};

	const goToNext = (): void => {
		setCurrentIndex((prevIndex) =>
			prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1,
		);
	};

	if (recommendations.length === 0) {
		return null;
	}

	return (
		<section className="mb-16">
			<div className="mx-auto">
				<div className="mb-8">
					<RecommendationCard recommendation={recommendations[currentIndex]} />
				</div>
				<div className="mb-8 flex items-center justify-between">
					<button onClick={goToPrevious} aria-label="Previous recommendation">
						<Icon
							icon="mynaui:arrow-left-circle-solid"
							width={32}
							height={32}
							className="text-persian-green-500 cursor-pointer"
						/>
					</button>

					<span className="text-sm text-gray-500 dark:text-gray-400">
						{currentIndex + 1} / {recommendations.length}
					</span>

					<button onClick={goToNext} aria-label="Next recommendation">
						<Icon
							icon="mynaui:arrow-right-circle-solid"
							width={32}
							height={32}
							className="text-persian-green-500 cursor-pointer"
						/>
					</button>
				</div>
			</div>
		</section>
	);
};

export default RecommendationsList;
