import React from 'react';
import BaseText from './Typography/BaseText';

interface HorizontalProgressBarProps {
	label: string;
	level: number;
}

const HorizontalProgressBar: React.FC<HorizontalProgressBarProps> = ({
	label,
	level,
}) => {
	return (
		<div className="flex items-center space-x-4">
			<BaseText text={label} style="w-24" />
			<div className="bg-gray-200 w-full h-2 rounded-full">
				<div
					className="h-full rounded-full bg-[var(--color-primary)]"
					style={{
						width: `${level}%`,
					}}
				></div>
			</div>
		</div>
	);
};

export default HorizontalProgressBar;
