import React from 'react';

type BoldTextProps = {
	text: string;
	style?: string;
};

const BoldText = (props: BoldTextProps): React.JSX.Element => {
	const { text, style } = props;

	return (
		<strong
			className={`text-base print:text-[0.625rem] print:leading-3 ${
				style ?? ''
			}`}
		>
			{text}
		</strong>
	);
};

export default BoldText;
