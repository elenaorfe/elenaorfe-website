import React from 'react';
import AboutCoverLetter from '../../components/AboutCoverLetter';
import HeaderCoverLetter from '../../components/HeaderCoverLetter';

const TailwindCSSCoverLetter: React.FC = () => {
	return (
		<div className="mx-auto max-w-5xl py-16">
			<main>
				<HeaderCoverLetter />
				<AboutCoverLetter />
			</main>
		</div>
	);
};

export default TailwindCSSCoverLetter;
