import React from 'react';
import BaseText from './Typography/BaseText';

type HorizontalProgressBarProps = {
	label: string;
	level: number;
};

const HorizontalProgressBar = (
	props: HorizontalProgressBarProps,
): React.JSX.Element => {
	const { label, level } = props;

	return (
		<div className="flex items-center space-x-4">
			<BaseText text={label} style="w-24" />
			<div className="h-2 w-full rounded-full bg-gray-200">
				<div
					className="bg-persian-green-500 h-full rounded-full"
					style={{
						width: `${level}%`,
					}}
				></div>
			</div>
		</div>
	);
};

export default HorizontalProgressBar;
