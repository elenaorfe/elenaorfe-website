import React from 'react';
import { Project } from '../types/experience';
import BoldText from './Typography/BoldText';
import MetaText from './Typography/MetaText';
import BaseText from './Typography/BaseText';
import { Translations } from '../types/common';

interface ProjectCVProps {
	project: Project;
	isLastItem: boolean;
	type: string;
	translations: Translations;
}

const ProjectCV: React.FC<ProjectCVProps> = ({
	project,
	isLastItem,
	type,
	translations,
}) => {
	const formatDate = (dateString: string): string => {
		const [year, month] = dateString.split('-');
		return `${month}.${year}`;
	};

	return (
		<li key={project.id} className={`leading-3 ${isLastItem ? 'mb-2' : ''}`}>
			<div className="flex justify-between gap-2">
				<div className="flex-1">
					<BoldText text={project.name} />
				</div>
				<div className="my-auto flex-none">
					<MetaText
						text={`${formatDate(project.period.startDate)} - ${
							project.period.endDate === null
								? (translations.date.now as string)
								: formatDate(project.period.endDate)
						}`}
						style="flex-grow"
					/>
				</div>
			</div>
			{type === 'professional' && <MetaText text={project.role} />}
			{type === 'side' && project.url !== null && (
				<MetaText text={project.url} />
			)}
			<BaseText text={project.description.summary} style="block" />
			<MetaText text={project.skills.map((skill) => skill.name).join(' • ')} />
		</li>
	);
};

export default ProjectCV;
