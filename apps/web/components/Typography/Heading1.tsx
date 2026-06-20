import React from 'react';

type Heading1Props = {
	text: string;
	style?: string;
};

const Heading1 = (props: Heading1Props): React.JSX.Element => {
	const { text, style } = props;

	return (
		<h1 className={`my-auto text-lg print:text-sm ${style ?? ''}`}>{text}</h1>
	);
};

export default Heading1;
