import React, { ChangeEvent } from 'react';

type TextareaProps = {
	id: string;
	label: string;
	placeholder?: string;
	name: string;
	required?: boolean;
	value: string;
	setValue: (value: ChangeEvent<HTMLTextAreaElement>) => void;
	error?: string;
};

const Textarea = (props: TextareaProps): React.JSX.Element => {
	const {
		id,
		label,
		placeholder,
		name,
		required = false,
		value,
		setValue,
		error,
	} = props;

	return (
		<div>
			<label htmlFor={id} className="mb-2 block text-base">
				{label}
				{required && <span aria-hidden="true">*</span>}
			</label>
			<textarea
				id={id}
				placeholder={placeholder}
				name={name}
				required={required}
				value={value}
				onChange={(e) => setValue(e)}
				className={`focus:ring-persian-green-700 h-96 w-full rounded-lg border bg-white p-2 text-base text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-offset-2 dark:bg-slate-900 dark:text-slate-100 ${
					error !== '' ? 'border-red-500' : 'border-gray-200'
				}`}
			></textarea>
			{error !== '' && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default Textarea;
