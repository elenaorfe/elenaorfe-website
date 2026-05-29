import { Icon } from '@iconify/react';
import React from 'react';
import { Project } from '../../types/experience';
import BaseText from '../Typography/BaseText';
import BoldText from '../Typography/BoldText';
import MetaText from '../Typography/MetaText';

type ProjectCVProps = {
	project: Project;
	isLastItem: boolean;
	type: string;
};

const ProjectCV = (props: ProjectCVProps): React.JSX.Element => {
	const { project, isLastItem, type } = props;

	return (
		<div key={project.id} className={isLastItem ? 'mb-2' : ''}>
			<div className="flex justify-between gap-2">
				<div className="flex space-x-1">
					<BoldText text={project.name} />
					{type === 'professional' && (
						<div className="my-auto flex space-x-1 text-gray-500">
							<BaseText text="•" />
							<BaseText text={project.role} />
						</div>
					)}
				</div>
				{type === 'side' && project.url !== null && (
					<div className="my-auto">
						<MetaText text={project.url} />
					</div>
				)}
			</div>
			{type === 'professional' && (
				<ul className="mb-1 block">
					{project.description.details?.map((achievement, achievementIndex) => (
						<li key={`achievement-${achievementIndex}`}>
							<BaseText style="block" text={`- ${achievement}`} />
						</li>
					))}
				</ul>
			)}
			{type === 'side' && (
				<BaseText text={project.description.summary} style="block mb-1" />
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
