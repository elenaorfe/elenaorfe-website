import React from 'react';
import ExperienceTile from '../../components/ExperienceTile';
import HeaderCoverLetter from '../../components/HeaderCoverLetter';

const TailwindCSSCoverLetter: React.FC = () => {
	return (
		<div className="mx-auto max-w-5xl py-16">
			<main>
				<HeaderCoverLetter />
				<ExperienceTile
					showGeneralExperience={true}
					skillIds={['reactjs', 'typescript', 'tailwindcss']}
				/>
			</main>
		</div>
	);
};

export default TailwindCSSCoverLetter;
