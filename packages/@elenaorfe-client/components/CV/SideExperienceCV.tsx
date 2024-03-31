import React from 'react';
import { Translations } from '../../types/common';
import { Experience } from '../../types/experience';
import ProjectCV from './ProjectCV';
import SectionTitle from './TitleCV';

type SideExperienceCVProps = {
	sideExperiences: Experience;
	translations: Translations;
};

const SideExperienceCV = (props: SideExperienceCVProps): React.JSX.Element => {
	const { sideExperiences, translations } = props;
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
