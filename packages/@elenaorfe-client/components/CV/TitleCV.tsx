import React from 'react';

type TitleCVProps = {
	text: string;
};

const TitleCV = (props: TitleCVProps): React.JSX.Element => {
	const { text } = props;

	return (
		<div className="relative text-center print:mb-0">
			<h1 className="text-persian-green-500 after:border-persian-green-100 inline-block bg-white px-2 font-semibold uppercase tracking-wider after:absolute after:left-0 after:right-0 after:top-1/2 after:z-[-1] after:block after:h-0.5 after:border after:border-solid after:border-opacity-75 after:content-[''] print:text-xs">
				{text}
			</h1>
		</div>
	);
};

export default TitleCV;
