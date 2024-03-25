import React from 'react';
import AboutCoverLetter from '../../components/AboutCoverLetter';
import ContributionsCoverLetter from '../../components/ContributionsCoverLetter';
import HeaderCoverLetter from '../../components/HeaderCoverLetter';
import MotivationCoverLetter from '../../components/MotivationCoverLetter';
import ProjectsCoverLetter from '../../components/ProjectsCoverLetter';

const TailwindCSSCoverLetter: React.FC = () => {
	return (
		<div>
			<HeaderCoverLetter />
			<div className="mx-4 max-w-5xl py-16 md:mx-auto">
				<main>
					<AboutCoverLetter />
					<ProjectsCoverLetter />
					<ContributionsCoverLetter />
					<MotivationCoverLetter />
				</main>
			</div>
		</div>
	);
};

export default TailwindCSSCoverLetter;
