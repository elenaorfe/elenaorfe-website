import React from 'react';
import ProjectCoverLetter from './ProjectCoverLetter';

const ProjectsCoverLetter: React.FC = () => {
	return (
		<section className="mb-16">
			<h2 className="text-lg font-bold">What projects am I proud of?</h2>
			<div className="space-y-16">
				<ProjectCoverLetter />
				<ProjectCoverLetter isReverse={true} />
			</div>
		</section>
	);
};
export default ProjectsCoverLetter;
