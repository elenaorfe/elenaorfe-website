import { Icon } from '@iconify/react';
import React from 'react';
import { Translations } from '../../types/common';
import { Project } from '../../types/experience';
import BaseText from '../Typography/BaseText';
import BoldText from '../Typography/BoldText';
import MetaText from '../Typography/MetaText';

type ProjectCVProps = {
	project: Project;
	isLastItem: boolean;
	type: string;
	translations: Translations;
};

const ProjectCV = (props: ProjectCVProps): React.JSX.Element => {
	const { project, isLastItem, type, translations } = props;
	const formatDate = (dateString: string): string => {
		const [year, month] = dateString.split('-');
		return `${month}.${year}`;
	};

	return (
		<div key={project.id} className={`leading-3 ${isLastItem ? 'mb-2' : ''}`}>
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
			{type === 'professional' && (
				<ul className="block">
					{project.description.details?.map((achievement, achievementIndex) => (
						<li key={`achievement-${achievementIndex}`}>
							<BaseText style="block" text={`- ${achievement}`} />
						</li>
					))}
				</ul>
			)}
			{type === 'side' && (
				<BaseText text={project.description.summary} style="block" />
			)}
			<div className="flex">
				<Icon
					icon="fa:diamond"
					className="my-auto mr-1 h-4 w-4 text-gray-500 print:h-2 print:w-2"
				/>
				<MetaText
					text={project.skills.map((skill) => skill.name).join(' • ')}
				/>
			</div>
		</div>
	);
};

export default ProjectCV;
