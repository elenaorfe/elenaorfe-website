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
			<label htmlFor={id} className="mb-2 text-base">
				{label}
				{required && ' *'}
			</label>
			<textarea
				id={id}
				placeholder={placeholder}
				name={name}
				required={required}
				value={value}
				onChange={(e) => setValue(e)}
				className={`h-96 w-full rounded-lg border bg-[--color-background] px-4 py-2 text-base text-[--color-text-base] ${
					error !== '' ? 'border-red-500' : 'border-gray-200'
				}`}
			></textarea>
			{error !== '' && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default Textarea;
