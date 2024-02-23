import React from 'react';
import { PersonalProjectItem } from '../types/personalProject';
import { Project } from '../types/workExperience';
import BoldText from './Typography/BoldText';
import MetaText from './Typography/MetaText';
import BaseText from './Typography/BaseText';

interface ProjectCVProps {
	project: PersonalProjectItem | Project;
	isLastItem: boolean;
}

const ProjectCV: React.FC<ProjectCVProps> = ({ project, isLastItem }) => {
	const formatDate = (dateString: string): string => {
		const [year, month] = dateString.split('-');
		return `${month}.${year}`;
	};

	return (
		<li key={project.id} className={`leading-3 ${isLastItem ? 'mb-2' : ''}`}>
			<div className="flex justify-between gap-2">
				<div className="flex-1">
					<BoldText text={project.title} />
				</div>
				<div className="flex-none my-auto">
					{'date' in project && (
						<MetaText text={project.date} style="flex-grow" />
					)}
					{'dateStart' in project && (
						<MetaText
							text={`${formatDate(project.dateStart)} - ${
								project.dateEnd === null
									? 'Present'
									: formatDate(project.dateEnd)
							}`}
							style="flex-grow"
						/>
					)}
				</div>
			</div>
			{'role' in project && <MetaText text={project.role} />}
			{'url' in project && <MetaText text={project.url} />}
			{'description' in project && (
				<BaseText text={project.description.short} style="block" />
			)}
			{project.skills.map((skill, index) => (
				<MetaText
					text={`${skill.name}${
						index < project.skills.length - 1 ? ' · ' : ''
					}`}
					key={`project-${project.id}-skill-${skill.name}`}
				/>
			))}
		</li>
	);
};

export default ProjectCV;
