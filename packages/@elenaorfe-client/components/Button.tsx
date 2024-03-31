import React from 'react';
import Spinner from './Spinner';

type ButtonProps = {
	children: React.ReactNode;
	type: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	disabled?: boolean;
	isLoading?: boolean;
	ariaLabel: string;
};

const Button = (props: ButtonProps): React.JSX.Element => {
	const {
		children,
		type,
		onClick,
		disabled = false,
		isLoading = false,
		ariaLabel,
	} = props;
	return (
		<React.Fragment>
			<button
				type={type}
				onClick={onClick}
				disabled={disabled}
				className={`bg-persian-green-500 rounded-lg px-4 py-2 text-center text-base font-semibold text-white  ${
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
