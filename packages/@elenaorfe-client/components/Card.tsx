import React from 'react';

interface CardProps {
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="rounded-lg bg-white shadow-lg ring-1 ring-gray-200">
			{children}
		</div>
	);
};
export default Card;
