import React from 'react';

interface CardProps {
	children: React.ReactNode;
	hasShadow?: boolean;
}

const Card: React.FC<CardProps> = ({ children, hasShadow = true }) => {
	return (
		<div
			className={`h-full rounded-lg bg-white ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-700 ${hasShadow ? 'shadow-lg' : ''}`}
		>
			{children}
		</div>
	);
};
export default Card;
