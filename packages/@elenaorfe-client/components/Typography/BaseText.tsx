import React from 'react';

type BaseTextProps = {
	text: string;
	style?: string;
};

const BaseText = (props: BaseTextProps): React.JSX.Element => {
	const { text, style } = props;
	return (
		<span
			className={`text-base print:text-[0.625rem] print:leading-3 ${
				style ?? ''
			}`}
		>
			{text}
		</span>
	);
};

export default BaseText;
