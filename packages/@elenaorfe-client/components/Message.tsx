import { Icon } from '@iconify/react';
import React from 'react';
import { MessageType } from '../types/common';

interface ErrorMessageProps {
	text: string;
	type: MessageType;
	fullWidth: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
	text,
	type,
	fullWidth,
}) => {
	return (
		<div className={`flex items-start gap-2 ${fullWidth ? '' : 'max-w-sm'}`}>
			<div
				className={`my-auto leading-[0rem] ${
					type === 'SUCCESS' ? 'text-green-800' : 'text-red-500'
				}`}
			>
				<Icon
					icon={`${type === 'SUCCESS' ? 'check-circle' : 'multiply-circle'}`}
					width={32}
					height={32}
				/>
			</div>
			<span
				className={`leading-5 ${
					type === 'SUCCESS' ? 'text-green-800' : 'text-red-500'
				}`}
			>
				{text}
			</span>
		</div>
	);
};

export default ErrorMessage;