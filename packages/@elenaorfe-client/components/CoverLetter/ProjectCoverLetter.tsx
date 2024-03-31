import { Icon } from '@iconify/react';
import React from 'react';
import translations from '../../i18n/en.json';
import ChatBot from '../ChatBot';
import Chip from '../Chip';
import Video from '../Video';
import { Project } from './ProjectsCoverLetter';

type ProjectCoverLetterProps = {
	isReverse?: boolean;
	project: Project;
};

const ProjectCoverLetter = (
	props: ProjectCoverLetterProps,
): React.JSX.Element => {
	const { isReverse = false, project } = props;

	return (
		<div
			className={`gap-4 lg:gap-8
				${
					project.video.layout === 'horizontal'
						? 'flex flex-col lg:flex-row'
						: 'grid grid-cols-1 items-center lg:grid-cols-3'
				}
			`}
		>
			<div
				className={`flex flex-1 flex-col justify-between ${isReverse ? 'lg:order-last' : ''} ${project.video.layout === 'vertical' ? 'h-full lg:col-span-2' : ''}`}
			>
				<div>
					<h3 className="text-persian-green-500 font-normal">
						{project.title}
					</h3>
					{project.description.map((description: string, index: number) => (
						<div
							key={`project-description-${index}`}
							className="mb-4 hyphens-auto text-justify"
							dangerouslySetInnerHTML={{ __html: description }}
						></div>
					))}
				</div>
				<div className="flex items-end justify-between">
					{project.links.length > 0 && (
						<div className={isReverse ? 'order-last' : ''}>
							<Chip>
								<div className="flex items-center gap-4">
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
									{project.id === 'personal-website' && (
										<ChatBot
											translations={translations}
											showIndicator={false}
										/>
									)}
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
			<div
				className={
					project.video.layout === 'horizontal' ? 'my-auto flex-1' : ''
				}
			>
				<Video id={project.video.id} src={project.video.src} />
			</div>
		</div>
	);
};
export default ProjectCoverLetter;
