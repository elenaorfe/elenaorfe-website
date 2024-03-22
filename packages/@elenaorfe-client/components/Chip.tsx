import React from 'react';

interface ChipProps {
	children: React.ReactNode;
	type?: 'primary' | 'secondary';
	withOpacity?: boolean;
}

const Chip: React.FC<ChipProps> = ({
	children,
	type = 'primary',
	withOpacity = false,
}) => {
	const classes: Record<string, string> = {
		primary: `bg-teal-400 text-[--color-primary] ${withOpacity ? 'bg-opacity-20' : ''}`,
		secondary:
			'bg-yellow-300 bg-opacity-50 text-yellow-600 dark:bg-white dark:bg-opacity-100',
	};

	return (
		<div className={`w-fit rounded-full px-3 py-1 text-xs ${classes[type]}`}>
			{children}
		</div>
	);
};

export default Chip;
