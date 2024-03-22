import { Icon } from '@iconify/react';
import React from 'react';
import Chip from './Chip';

interface ProjectCoverLetterProps {
	isReverse?: boolean;
}

const ProjectCoverLetter: React.FC<ProjectCoverLetterProps> = ({
	isReverse = false,
}) => {
	return (
		<div className="flex flex-col gap-8 md:flex-row">
			<div className={`flex flex-col ${isReverse ? 'md:order-last' : ''}`}>
				<p className="hyphens-aito mb-4 text-justify">
					Creating my website has been an adventure filled with learning and
					experimenting. Every detail has been a reflection of who I am and what
					I can bring to the table.
				</p>
				<p className="hyphens-aito mb-4 text-justify">
					More than just a digital presence, my website is a window into my
					world, showcasing my design & technical skills.
				</p>
				<p className="hyphens-aito mb-4 text-justify">
					I&apos;m excited about the possibility of bringing this same energy
					and creativity to Tailwind Labs.
				</p>
				<div className="flex justify-between">
					<div className={isReverse ? 'order-last' : ''}>
						<Chip>
							<div className="flex gap-4">
								<a
									href="https://elenaorfe.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex"
									aria-label="Visit my website"
								>
									<Icon icon={`mdi:external-link`} width={32} height={32} />
								</a>
								<a
									href="https://github.com/elenaorfe/elenaorfe-website"
									target="_blank"
									rel="noopener noreferrer"
									className="flex"
									aria-label="Visit the repository of my website"
								>
									<Icon icon={`mdi:github`} width={32} height={32} />
								</a>
							</div>
						</Chip>
					</div>
					<div className={isReverse ? '' : 'order-last'}>
						<Icon
							icon="akar-icons:arrow-back"
							className={`md:origin-bottom 
								${isReverse ? 'rotate-[210deg] md:-scale-x-[1]' : 'rotate-[145deg] -scale-x-[1] md:scale-x-[1]'}
							`}
							width={48}
							height={48}
						/>
					</div>
				</div>
			</div>
			<div>
				<div className="h-64 w-[32rem] bg-gray-100"></div>
			</div>
		</div>
	);
};
export default ProjectCoverLetter;
