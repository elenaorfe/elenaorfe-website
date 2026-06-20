import React from 'react';

type TitleProps = {
	text: string;
};

const Title = (props: TitleProps): React.JSX.Element => {
	const { text } = props;

	return <h2 className="mb-4 text-xl">{text}</h2>;
};

export default Title;
