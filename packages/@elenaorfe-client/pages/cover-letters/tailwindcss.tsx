import React from 'react';
import AboutCoverLetter from '../../components/AboutCoverLetter';
import HeaderCoverLetter from '../../components/HeaderCoverLetter';
import MotivationCoverLetter from '../../components/MotivationCoverLetter';

const TailwindCSSCoverLetter: React.FC = () => {
	return (
		<div>
			<HeaderCoverLetter />
			<div className="mx-4 max-w-5xl py-16 md:mx-auto">
				<main>
					<AboutCoverLetter />
					<MotivationCoverLetter />
				</main>
			</div>
		</div>
	);
};

export default TailwindCSSCoverLetter;
