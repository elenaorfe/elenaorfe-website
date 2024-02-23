import React from 'react';
import Image from 'next/image';
import SectionTitle from './TitleCV';
import BoldText from './Typography/BoldText';
import MetaText from './Typography/MetaText';
import ProjectCV from './ProjectCV';
import { WorkExperience, WorkExperienceItem } from '../types/workExperience';

interface WorkExperienceCVProps {
	workExperience: WorkExperience;
}

interface CompanyCVProps {
	experience: WorkExperienceItem;
	isFirst: boolean;
}

const CompanyCV: React.FC<CompanyCVProps> = ({ experience, isFirst }) => {
	return (
		<div className={`flex gap-2 mb-2 ${isFirst ? '' : 'mt-4'}`}>
			<Image
				src={`/assets/img/logo_${experience.company}_cv.png`}
				alt=""
				width={18}
				height={18}
				className="h-fit my-auto"
			/>
			<div className="flex flex-col">
				<BoldText text={experience.company} />
				<MetaText text={`${experience.dateStart} - ${experience.dateEnd}`} />
			</div>
		</div>
	);
};

const WorkExperienceCV: React.FC<WorkExperienceCVProps> = ({
	workExperience,
}) => {
	return (
		<section className="w-full">
			<SectionTitle text={workExperience.title}></SectionTitle>
			{workExperience.items.map((experience, index) => (
				<div key={experience.id}>
					<CompanyCV experience={experience} isFirst={index === 0} />
					<ul>
						{experience.projects.map((project, index) => (
							<ProjectCV
								project={project}
								isLastItem={index < experience.projects.length - 1}
								key={`work-project-${project.id}`}
							/>
						))}
					</ul>
				</div>
			))}
		</section>
	);
};

export default WorkExperienceCV;
