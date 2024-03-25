import { Icon } from '@iconify/react';
import React from 'react';
import { Feedback } from '../types/feedback';
import { formatDate } from '../utils/date';
import Card from './Card';

interface FeedbackCardProps {
	feedback: Feedback;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
	return (
		<Card>
			<div
				className="flex h-full flex-col justify-between p-4
			"
			>
				<div>
					<div className="flex h-12 w-12 bg-[url('/assets/img/blob.svg')] bg-no-repeat">
						<Icon
							icon="bi:quote"
							className="my-auto ml-2 h-6 w-6 text-[--color-background]"
						/>
					</div>
					<p className="text-persian-green-500 mb-4">{feedback.comment}</p>
				</div>
				<div className="items-end">
					<p className="text-persian-green-500 text-sm font-bold">
						{feedback.author.name}
					</p>
					<p className="text-persian-green-500 text-xs">
						{feedback.author.role} at {feedback.author.company} on{' '}
						{formatDate(feedback.date)}
					</p>
				</div>
			</div>
		</Card>
	);
};

export default FeedbackCard;
