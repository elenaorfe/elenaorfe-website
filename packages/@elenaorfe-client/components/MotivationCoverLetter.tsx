import React from 'react';
import feedbackData from '../data/en/feedback.json';
import FeedbackCard from './FeedbackCard';

const MotivationCoverLetter: React.FC = () => {
	return (
		<section className="mb-16">
			<h2 className="mb-2 text-lg font-bold">What I&apos;m excited about</h2>
			<p className="mb-4 hyphens-auto text-justify">
				I&apos;m seeking a job change as I&apos;ll be relocating to the
				Netherlands (UTC+1), as a European citizen, I can freely move and work
				as a self-employed without needing company sponsorship, so there&apos;s
				no need to worry about that 😊
			</p>
			<p className="mb-4 hyphens-auto text-justify">
				I want to work in a product-oriented company where I can contribute to
				its growth through meaningful products. After getting to know
				TailwindCSS and read the RefactoringUI book some years ago, working with
				you would be a dream come true 🫶
			</p>
			<p className="mb-4 hyphens-auto text-justify">
				I believe I would be a valuable addition to the team as I am motivated
				by challenges, committed and proactive. I&apos;ve been lucky to work
				with some awesome folks who&apos;ve shared their thoughts with me:
			</p>
			<div className="flex snap-x scroll-pl-4 gap-4 overflow-x-auto py-4">
				{feedbackData.map((feedback) => (
					<div
						className="max-w-64 shrink-0 first:pl-0.5 last:pr-0.5 md:max-w-96"
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
