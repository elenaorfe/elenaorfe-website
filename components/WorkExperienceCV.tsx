import React from 'react';
import Image from 'next/image';
import SectionTitle from './TitleCV';
import BoldText from './Typography/BoldText';
import MetaText from './Typography/MetaText';
import ProjectCV from './ProjectCV';
import { Experience } from '../types/experience';
import { formatDate } from '../utils/date';

interface WorkExperienceCVProps {
	workExperiences: Experience[];
	translations: any;
}

interface CompanyCVProps {
	experience: Experience;
	isFirst: boolean;
	translations: any;
}

const CompanyCV: React.FC<CompanyCVProps> = ({
	experience,
	isFirst,
	translations,
}) => {
	return experience.company !== null ? (
		<div className={`flex gap-2 mb-2 ${isFirst ? '' : 'mt-4'}`}>
			<Image
				src={`/assets/img/logo_${experience.company.name.toLowerCase()}_cv.png`}
				alt=""
				width={18}
				height={18}
				className="h-fit my-auto"
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

const WorkExperienceCV: React.FC<WorkExperienceCVProps> = ({
	workExperiences,
	translations,
}) => {
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
