import React from 'react';

interface CardProps {
	children: React.ReactNode;
	hasShadow?: boolean;
}

const Card: React.FC<CardProps> = ({ children, hasShadow = true }) => {
	return (
		<div
			className={`rounded-lg bg-[--color-background] ring-1 ring-[--color-text-shade-03] ${hasShadow ? 'shadow-lg' : ''}`}
		>
			{children}
		</div>
	);
};
export default Card;
