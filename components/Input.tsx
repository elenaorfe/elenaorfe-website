import React, { ChangeEvent } from 'react';

interface InputProps {
	id: string;
	name: string;
	type: string;
	placeholder: string;
	value: string;
	disabled?: boolean;
	setValue: (value: ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	id,
	name,
	type,
	placeholder,
	value,
	disabled,
	setValue,
	onKeyDown,
}) => {
	return (
		<input
			id={id}
			name={name}
			type={type}
			disabled={disabled}
			value={value}
			onChange={(e) => setValue(e)}
			onKeyDown={onKeyDown}
			className="input"
			placeholder={placeholder}
		/>
	);
};

export default Input;
