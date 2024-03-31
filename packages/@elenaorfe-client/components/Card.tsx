import React from 'react';

type CardProps = {
	children: React.ReactNode;
	hasShadow?: boolean;
};

const Card = (props: CardProps): React.JSX.Element => {
	const { children, hasShadow = true } = props;

	return (
		<div
			className={`h-full rounded-lg bg-white ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-700 ${hasShadow ? 'shadow-lg' : ''}`}
		>
			{children}
		</div>
	);
};
export default Card;
