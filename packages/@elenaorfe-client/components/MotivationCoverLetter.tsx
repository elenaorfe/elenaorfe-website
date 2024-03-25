import React from 'react';
import feedbackData from '../data/en/feedback.json';
import FeedbackCard from './FeedbackCard';

const MotivationCoverLetter: React.FC = () => {
	return (
		<section className="mb-16">
			<h2 className="mb-2 text-lg font-bold">What I&apos;m excited about</h2>
			<p className="mb-4 hyphens-auto text-justify">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
				eleifend magna leo, a pulvinar tortor finibus et. Nam cursus, lectus at
				efficitur scelerisque, leo lectus pellentesque velit, eget efficitur
				lacus lectus sed ipsum. Aenean augue nibh, efficitur nec dignissim et,
				tristique sit amet dolor.
			</p>
			<p className="mb-4 hyphens-auto text-justify">
				I&apos;ve been lucky to work with some awesome folks who&apos;ve shared
				their thoughts with me:
			</p>
			<div className="flex snap-x scroll-pl-4 gap-4 overflow-x-auto py-4">
				{feedbackData.map((feedback) => (
					<div
						className="max-w-64 shrink-0 snap-start first:pl-0.5 last:pr-0.5 md:max-w-96"
						key={feedback.id}
					>
						<FeedbackCard feedback={feedback} />
					</div>
				))}
			</div>
		</section>
	);
};

export default MotivationCoverLetter;
