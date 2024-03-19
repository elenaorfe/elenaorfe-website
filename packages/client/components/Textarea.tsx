import React, { ChangeEvent } from 'react';

interface TextareaProps {
	id: string;
	label: string;
	placeholder: string;
	name: string;
	required?: boolean;
	value: string;
	setValue: (value: ChangeEvent<HTMLTextAreaElement>) => void;
	error?: string;
}

const Textarea: React.FC<TextareaProps> = ({
	id,
	label,
	placeholder,
	name,
	required = false,
	value,
	setValue,
	error,
}) => {
	return (
		<div>
			<label htmlFor={id} className="text-base mb-2">
				{label}
				{required && ' *'}
			</label>
			<textarea
				placeholder={placeholder}
				name={name}
				required={required}
				value={value}
				onChange={(e) => setValue(e)}
				className={`text-base w-full border rounded-lg py-2 px-4 h-96 text-[--color-text-shade-01] bg-[--color-background] ${
					error !== '' ? 'border-red-500' : 'border-gray-200'
				}`}
			></textarea>
			{error !== '' && <p className="text-red-500 text-sm">{error}</p>}
		</div>
	);
};

export default Textarea;
