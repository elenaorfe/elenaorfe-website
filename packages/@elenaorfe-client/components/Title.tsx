import React from 'react';

interface TitleProps {
	text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
	return <h1 className="mb-4 text-xl">{text}</h1>;
};

export default Title;
