import React, { ChangeEvent } from 'react';

interface InputProps {
	id: string;
	name: string;
	type: string;
	placeholder: string;
	value: string;
	disabled?: boolean;
	showBorder?: boolean;
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
	showBorder = true,
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
			className={`w-full text-base flex-1 py-2 px-4 text-[--color-text-shade-01] bg-[--color-background] ${
				showBorder ? 'border rounded-lg' : ''
			}`}
			placeholder={placeholder}
		/>
	);
};

export default Input;
