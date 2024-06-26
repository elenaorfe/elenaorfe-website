import Image from 'next/image';
import React from 'react';
import { Translations } from '../../types/common';
import { Experience } from '../../types/experience';
import { formatDate } from '../../utils/date';
import BoldText from '../Typography/BoldText';
import MetaText from '../Typography/MetaText';
import ProjectCV from './ProjectCV';
import SectionTitle from './TitleCV';

type WorkExperienceCVProps = {
	workExperiences: Experience[];
	translations: Translations;
};

type CompanyCVProps = {
	experience: Experience;
	isFirst: boolean;
	translations: Translations;
};

const CompanyCV = (props: CompanyCVProps): React.JSX.Element => {
	const { experience, isFirst, translations } = props;

	return experience.company !== null ? (
		<div className={`mb-2 flex gap-2 ${isFirst ? '' : 'mt-4'}`}>
			<Image
				src={`/assets/img/logo_${experience.company.name.toLowerCase()}_cv.png`}
				alt=""
				width={18}
				height={18}
				className="my-auto h-fit"
			/>
			<div className="flex flex-col">
				<BoldText text={experience.company.name} />
				<MetaText
					text={`${formatDate(experience.period.startDate)} - ${
						experience.period.endDate ?? (translations.date.now as string)
					}`}
				/>
			</div>
		</div>
	) : (
		<React.Fragment />
	);
};

const WorkExperienceCV = (props: WorkExperienceCVProps): React.JSX.Element => {
	const { workExperiences, translations } = props;

	return (
		<section className="w-full">
			<SectionTitle text={translations.workExperience.title}></SectionTitle>
			{workExperiences.map((workExperience, index) => (
				<div key={workExperience.id}>
					<CompanyCV
						experience={workExperience}
						isFirst={index === 0}
						translations={translations}
					/>
					<ul>
						{workExperience.projects.map((project, index) => (
							<ProjectCV
								project={project}
								isLastItem={index < workExperience.projects.length - 1}
								key={`work-project-${project.id}`}
								type={workExperience.type}
								translations={translations}
							/>
						))}
					</ul>
				</div>
			))}
		</section>
	);
};

export default WorkExperienceCV;
