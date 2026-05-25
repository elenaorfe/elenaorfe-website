import React from 'react';
import { Recommendation } from '../types/recommendation';
import { formatDate } from '../utils/date';

type RecommendationCardProps = {
	recommendation: Recommendation;
};

const RecommendationCard = (
	props: RecommendationCardProps,
): React.JSX.Element => {
	const { recommendation } = props;

	// Handle both string and array comment types
	const commentParts = Array.isArray(recommendation.comment)
		? recommendation.comment
		: [recommendation.comment];

	return (
		<article className="card">
			<div className="flex h-full flex-col justify-between p-4">
				<div>
					{commentParts.map((part, index) => (
						<p key={index} className="mb-4">
							{part}
						</p>
					))}
				</div>
				<div className="items-end">
					<p className="text-sm font-medium text-slate-500">
						{recommendation.author.name}
					</p>
					<p className="text-xs text-slate-500">
						{recommendation.author.role} at {recommendation.author.company} on{' '}
						{formatDate(recommendation.date)}
					</p>
				</div>
			</div>
		</article>
	);
};

export default RecommendationCard;
