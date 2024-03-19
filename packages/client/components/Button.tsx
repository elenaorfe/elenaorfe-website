import React from 'react';
import Spinner from './Spinner';

interface ButtonProps {
	text: string;
	type: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	disabled?: boolean;
	isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	text,
	type,
	onClick,
	disabled = false,
	isLoading = false,
}) => {
	return (
		<React.Fragment>
			<button
				type={type}
				onClick={onClick}
				disabled={disabled}
				className={`button-primary text-base ${
					disabled ? 'button-disabled' : ''
				}`}
			>
				{isLoading ? <Spinner /> : text}
			</button>
		</React.Fragment>
	);
};

export default Button;
