import React, { ChangeEvent, HTMLInputAutoCompleteAttribute } from 'react';

type InputProps = {
	id: string;
	label: string;
	displayLabel?: boolean;
	name: string;
	type: string;
	placeholder?: string;
	value: string;
	required?: boolean;
	disabled?: boolean;
	showBorder?: boolean;
	setValue: (value: ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	error?: string;
	className?: string;
	autocomplete: HTMLInputAutoCompleteAttribute;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const {
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
		error,
		className,
		autocomplete,
	} = props;

	return (
		<div className={className}>
			<label
				htmlFor={id}
				className={`mb-2 text-base ${displayLabel ? 'block' : 'hidden'}`}
			>
				{label}
				{required && <span aria-hidden="true">*</span>}
			</label>
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
				className={`focus:ring-persian-green-700 h-12 w-full bg-white px-2 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-slate-900 dark:text-slate-100 ${
					showBorder ? 'rounded-lg border' : ''
				} ${showBorder && error !== '' ? 'border-red-500' : 'border-gray-200'}`}
				ref={ref}
				autoComplete={autocomplete}
			/>
			{error !== '' && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
});

export default Input;
