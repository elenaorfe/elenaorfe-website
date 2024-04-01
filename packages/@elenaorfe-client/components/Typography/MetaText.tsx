import React from 'react';

type MetaTextProps = {
	text: string;
	style?: string;
};

const MetaText = (props: MetaTextProps): React.JSX.Element => {
	const { text, style } = props;

	return (
		<span
			className={`text-xs text-gray-400 print:block print:text-[0.5rem] print:leading-3 ${
				style ?? ''
			}`}
		>
			{text}
		</span>
	);
};

export default MetaText;
