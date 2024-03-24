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
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{feedbackData.map((feedback) => (
					<FeedbackCard key={feedback.id} feedback={feedback} />
				))}
			</div>
		</section>
	);
};

export default MotivationCoverLetter;
