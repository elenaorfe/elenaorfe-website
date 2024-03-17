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
			className="textarea"
		></textarea>
	);
};

export default Textarea;
