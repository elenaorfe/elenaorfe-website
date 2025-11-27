import { Icon } from '@iconify/react';
import React from 'react';
import { Feedback } from '../types/feedback';
import { formatDate } from '../utils/date';

type FeedbackCardProps = {
	feedback: Feedback;
};

const FeedbackCard = (props: FeedbackCardProps): React.JSX.Element => {
	const { feedback } = props;

	return (
		<article className="card">
			<div className="flex h-full flex-col justify-between p-4">
				<div>
					<div className="flex h-12 w-12 bg-[url('/assets/img/blob.svg')] bg-no-repeat">
						<Icon
							icon="bi:quote"
							className="my-auto ml-2 h-6 w-6 text-white dark:text-slate-900"
						/>
					</div>
					<p className="text-persian-green-500 mb-4">{feedback.comment}</p>
				</div>
				<div className="items-end">
					<p className="text-sm font-medium text-slate-500">
						{feedback.author.name}
					</p>
					<p className="text-xs text-slate-500">
						{feedback.author.role} at {feedback.author.company} on{' '}
						{formatDate(feedback.date)}
					</p>
				</div>
			</div>
		</article>
	);
};

export default FeedbackCard;
