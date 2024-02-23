import React from 'react';

interface TitleCVProps {
	text: string;
}

const TitleCV: React.FC<TitleCVProps> = ({ text }) => {
	return (
		<div className="relative text-center pt-2 mb-2 print:mb-0">
			<h1 className="font-bold text-gray-500 print:text-sm uppercase tracking-wider bg-white inline-block px-2 after:content-[''] after:h-0.5 after:block after:absolute after:left-0 after:right-0 after:top-2/3 after:z-[-1] after:border after:border-solid after:border-gray-300 after:border-opacity-75">
				{text}
			</h1>
		</div>
	);
};

export default TitleCV;
