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
		<div className={`flex gap-2 items-start ${fullWidth ? '' : 'max-w-sm'}`}>
			<div
				className={`my-auto leading-[0rem] ${
					type === 'SUCCESS' ? 'text-green-800' : 'text-red-500'
				}`}
			>
				<ion-icon
					name={`${
						type === 'SUCCESS'
							? 'checkmark-circle-outline'
							: 'alert-circle-outline'
					}`}
					aria-label=""
				></ion-icon>
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