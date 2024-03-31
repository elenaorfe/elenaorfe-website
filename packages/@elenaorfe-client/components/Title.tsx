import React from 'react';

type TitleProps = {
	text: string;
};

const Title = (props: TitleProps): React.JSX.Element => {
	const { text } = props;

	return <h1 className="mb-4 text-xl">{text}</h1>;
};

export default Title;
