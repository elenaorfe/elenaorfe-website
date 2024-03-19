import React from 'react';
import Spinner from './Spinner';

interface ButtonProps {
	children: React.ReactNode;
	type: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	disabled?: boolean;
	isLoading?: boolean;
	ariaLabel: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	type,
	onClick,
	disabled = false,
	isLoading = false,
	ariaLabel,
}) => {
	return (
		<React.Fragment>
			<button
				type={type}
				onClick={onClick}
				disabled={disabled}
				className={`text-white text-base font-bold bg-[--color-primary] rounded-lg text-center px-4 py-2  ${
					disabled ? 'cursor-not-allowed' : ''
				}`}
				aria-label={ariaLabel}
			>
				{isLoading ? <Spinner /> : children}
			</button>
		</React.Fragment>
	);
};

export default Button;
