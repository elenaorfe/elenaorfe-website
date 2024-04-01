import React from 'react';
import feedbackData from '../../data/en/feedback.json';
import FeedbackCard from '../FeedbackCard';
import TextUnderlined from '../TextUnderlined';

const MotivationCoverLetter = (): React.JSX.Element => {
	return (
		<section>
			<h2 className="mb-4 text-lg font-semibold">
				What I&apos;m excited about
			</h2>
			<div className="space-y-4">
				<p className="hyphens-manual text-justify">
					I want to work in a product-oriented company where I can take{' '}
					<TextUnderlined>
						<span>ownership</span>
					</TextUnderlined>{' '}
					and contribute to its growth through meaningful products. After
					discovering the excellent work you have done with TailwindCSS and the
					RefactorUI book, the opportunity to work with you would be a dream
					come true.
				</p>
				<p className="hyphens-manual text-justify">
					I believe I would be a valuable addition to the team as I am motivated
					by{' '}
					<TextUnderlined>
						<span>challenges</span>
					</TextUnderlined>
					,{' '}
					<TextUnderlined>
						<span>committed</span>
					</TextUnderlined>{' '}
					and{' '}
					<TextUnderlined>
						<span>proactive</span>
					</TextUnderlined>
					. I&apos;ve been lucky to work with awesome people, some of them have
					shared their thoughts with me:
				</p>
			</div>
			<div className="flex gap-4 overflow-x-auto py-4">
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
