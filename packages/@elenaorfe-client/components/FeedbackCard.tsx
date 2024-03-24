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
			<div className="p-4">
				<div className="flex h-12 w-12 bg-[url('/assets/img/blob.svg')] bg-no-repeat">
					<Icon
						icon="bi:quote"
						className="my-auto ml-2 h-6 w-6 text-[--color-background]"
					/>
				</div>
				<p className="mb-4 text-[--color-primary]">{feedback.comment}</p>
				<p className="text-sm font-bold text-[--color-primary]">
					{feedback.author.name}
				</p>
				<p className="text-xs text-[--color-primary]">
					{feedback.author.role} at {feedback.author.company} on{' '}
					{formatDate(feedback.date)}
				</p>
			</div>
		</Card>
	);
};

export default FeedbackCard;
