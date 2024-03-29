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
		<div
			className={
				project.video.layout === 'horizontal'
					? 'flex flex-col gap-8 lg:flex-row'
					: 'grid grid-cols-1 items-center gap-8 lg:grid-cols-3'
			}
		>
			<div
				className={`flex flex-1 flex-col justify-between ${isReverse ? 'lg:order-last' : ''} ${project.video.layout === 'vertical' ? 'lg:col-span-2' : ''}`}
			>
				<div>
					{project.description.map((description: string, index: number) => (
						<p
							key={`project-description-${index}`}
							className="mb-4 hyphens-auto text-justify"
						>
							{description}
						</p>
					))}
				</div>
				<div className="flex items-end justify-between">
					{project.links.length > 0 && (
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
					)}
					<div className={isReverse ? '' : 'order-last'}>
						<Icon
							icon="fluent:arrow-reply-20-regular"
							className={`text-slate-700 
								${isReverse ? 'rotate-[210deg] lg:-scale-x-[1]' : 'rotate-[145deg] -scale-x-[1] lg:scale-x-[1]'}
							`}
							width={48}
							height={48}
						/>
					</div>
				</div>
			</div>
			<div className={project.video.layout === 'horizontal' ? 'flex-1' : ''}>
				<Video id={project.video.id} src={project.video.src} />
			</div>
		</div>
	);
};
export default ProjectCoverLetter;
