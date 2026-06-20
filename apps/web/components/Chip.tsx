import React from 'react';

type ChipProps = {
	children: React.ReactNode;
	isOpaque?: boolean;
};

const Chip = (props: ChipProps): React.JSX.Element => {
	const { children, isOpaque = true } = props;
	return (
		<div
			className={`text-persian-green-500 h-fit w-fit rounded-full px-3 py-1 text-xs ${isOpaque ? 'bg-persian-green-300' : 'bg-persian-green-300/20'}`}
		>
			{children}
		</div>
	);
};

export default Chip;
