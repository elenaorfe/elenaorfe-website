import React from 'react';
import SectionTitle from './TitleCV';
import ProjectCV from './ProjectCV';
import { Experience } from '../types/experience';

interface SideExperienceCVProps {
	sideExperiences: Experience;
	translations: any;
}

const SideExperienceCV: React.FC<SideExperienceCVProps> = ({
	sideExperiences,
	translations,
}) => {
	const { projects } = sideExperiences;

	return (
		<section className="w-full">
			<SectionTitle text={translations.sideExperience.title}></SectionTitle>
			<ul>
				{projects.map((project, index) => (
					<ProjectCV
						project={project}
						isLastItem={index < projects.length - 1}
						key={`side-project-${project.id}`}
						type={sideExperiences.type}
						translations={translations}
					/>
				))}
			</ul>
		</section>
	);
};

export default SideExperienceCV;
