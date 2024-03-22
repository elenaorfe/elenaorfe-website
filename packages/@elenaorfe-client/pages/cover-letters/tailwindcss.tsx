import React from 'react';
import AboutCoverLetter from '../../components/AboutCoverLetter';
import HeaderCoverLetter from '../../components/HeaderCoverLetter';
import MotivationCoverLetter from '../../components/MotivationCoverLetter';

const TailwindCSSCoverLetter: React.FC = () => {
	return (
		<div className="mx-auto max-w-5xl py-16">
			<main>
				<HeaderCoverLetter />
				<AboutCoverLetter />
				<MotivationCoverLetter />
			</main>
		</div>
	);
};

export default TailwindCSSCoverLetter;
