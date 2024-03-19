import React, { ChangeEvent } from 'react';
import { Icon } from '@iconify/react';

interface InputProps {
	id: string;
	label: string;
	displayLabel?: boolean;
	name: string;
	type: string;
	placeholder: string;
	value: string;
	required?: boolean;
	disabled?: boolean;
	showBorder?: boolean;
	setValue: (value: ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	iconName?: string;
	error?: string;
	className?: string;
}

const Input: React.FC<InputProps> = ({
	id,
	label,
	displayLabel = true,
	name,
	type,
	placeholder,
	value,
	required = false,
	disabled,
	showBorder = true,
	setValue,
	onKeyDown,
	iconName,
	error,
	className,
}) => {
	return (
		<div className={className}>
			<label
				htmlFor={id}
				className={`text-base mb-2 ${displayLabel ? 'block' : 'hidden'}`}
			>
				{label}
				{required && ' *'}
			</label>
			<div
				className={`flex items-center gap-2 text-base flex-1 py-2 px-4 text-[--color-text-shade-01] bg-[--color-background] ${
					showBorder ? 'border rounded-lg' : ''
				} ${showBorder && error !== '' ? 'border-red-500' : 'border-gray-200'}`}
			>
				{iconName !== undefined && (
					<Icon icon={iconName} className="text-gray-400" />
				)}
				<input
					id={id}
					name={name}
					type={type}
					required={required}
					disabled={disabled}
					value={value}
					onChange={(e) => setValue(e)}
					onKeyDown={onKeyDown}
					placeholder={placeholder}
					className="w-full"
				/>
			</div>
			{error !== '' && <p className="text-red-500 text-sm">{error}</p>}
		</div>
	);
};

export default Input;
