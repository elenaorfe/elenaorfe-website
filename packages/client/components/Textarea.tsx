import React, { ChangeEvent } from 'react';

interface TextareaProps {
	placeholder: string;
	name: string;
	value: string;
	setValue: (value: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
	placeholder,
	name,
	value,
	setValue,
}) => {
	return (
		<textarea
			placeholder={placeholder}
			name={name}
			value={value}
			onChange={(e) => setValue(e)}
			className="text-base w-full border rounded-lg py-2 px-4 mb-4 h-96 text-[--color-text-shade-01] bg-[--color-background]"
		></textarea>
	);
};

export default Textarea;
