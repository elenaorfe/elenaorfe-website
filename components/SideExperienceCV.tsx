import React from 'react';
import { PersonalProject } from '../types/personalProject';
import SectionTitle from './TitleCV';
import ProjectCV from './ProjectCV';

interface SideExperienceCVProps {
	sideExperience: PersonalProject;
}

const SideExperienceCV: React.FC<SideExperienceCVProps> = ({
	sideExperience,
}) => {
	return (
		<section className="w-full">
			<SectionTitle text={sideExperience.title}></SectionTitle>
			<ul>
				{sideExperience.items.map((project, index) => (
					<ProjectCV
						project={project}
						isLastItem={index < sideExperience.items.length - 1}
						key={`side-project-${project.id}`}
					/>
				))}
			</ul>
		</section>
	);
};

export default SideExperienceCV;
