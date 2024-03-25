import { Icon } from '@iconify/react';
import React from 'react';
import Chip from './Chip';
import { Project } from './ProjectsCoverLetter';
import Video from './Video';

interface ProjectCoverLetterProps {
	isReverse?: boolean;
	project: Project;
}

const ProjectCoverLetter: React.FC<ProjectCoverLetterProps> = ({
	isReverse = false,
	project,
}) => {
	return (
		<div className="flex flex-col gap-8 lg:flex-row">
			<div
				className={`flex flex-1 flex-col ${isReverse ? 'lg:order-last' : ''}`}
			>
				{project.description.map((description: string, index: number) => (
					<p
						key={`project-description-${index}`}
						className="mb-4 hyphens-auto text-justify"
					>
						{description}
					</p>
				))}
				<div className="flex justify-between">
					<div className={isReverse ? 'order-last' : ''}>
						<Chip>
							<div className="flex gap-4">
								{project.links.map((link: any) => (
									<a
										key={link.href}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex"
										aria-label={link.label}
									>
										<Icon icon={link.icon} width={32} height={32} />
									</a>
								))}
							</div>
						</Chip>
					</div>
					<div className={isReverse ? '' : 'order-last'}>
						<Icon
							icon="fluent:arrow-reply-20-regular"
							className={`text-[--color-text-inverted] lg:origin-bottom 
								${isReverse ? 'rotate-[210deg] lg:-scale-x-[1]' : 'rotate-[145deg] -scale-x-[1] lg:scale-x-[1]'}
							`}
							width={48}
							height={48}
						/>
					</div>
				</div>
			</div>
			<div className="flex-1">
				<Video id={project.video.id} src={project.video.src} />
			</div>
		</div>
	);
};
export default ProjectCoverLetter;
