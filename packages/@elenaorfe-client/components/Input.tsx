import { Icon } from '@iconify/react';
import React, { ChangeEvent } from 'react';

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
				className={`mb-2 text-base ${displayLabel ? 'block' : 'hidden'}`}
			>
				{label}
				{required && ' *'}
			</label>
			<div
				className={`flex flex-1 items-center gap-2 bg-white px-4 py-2 text-base text-slate-900 dark:bg-slate-900 dark:text-slate-100 ${
					showBorder ? 'rounded-lg border' : ''
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
			{error !== '' && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default Input;
