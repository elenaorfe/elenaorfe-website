import React from 'react';

type TitleCVProps = {
	text: string;
};

const TitleCV = (props: TitleCVProps): React.JSX.Element => {
	const { text } = props;

	return (
		<div className="relative mb-2 pt-2 text-center print:mb-0">
			<h1 className="inline-block bg-white px-2 font-semibold uppercase tracking-wider text-gray-500 after:absolute after:left-0 after:right-0 after:top-2/3 after:z-[-1] after:block after:h-0.5 after:border after:border-solid after:border-gray-300 after:border-opacity-75 after:content-[''] print:text-xs">
				{text}
			</h1>
		</div>
	);
};

export default TitleCV;
