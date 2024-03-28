import React from 'react';
import ProjectCoverLetter from './ProjectCoverLetter';

interface Link {
	href: string;
	icon: string;
	label: string;
}

export interface Project {
	id: string;
	description: string[];
	video: {
		id: string;
		src: string;
	};
	links: Link[];
}

const projects = [
	{
		id: 'personal-website',
		description: [
			'My website demonstrates my skills in design and technical abilities using Next.js and TailwindCSS.',
			'I developed a chatbot empowered by OpenAI to provide intelligent responses and natural conversations.',
			"I'm excited about the possibility of bringing this same energy and creativity to Tailwind Labs.",
		],
		video: {
			id: 'video-personal-website',
			src: '/assets/videos/screen-record-personal-website.mp4',
		},
		links: [
			{
				href: 'https://elenaorfe.com/',
				icon: 'mdi:external-link',
				label: 'Visit my website',
			},
			{
				href: 'https://github.com/elenaorfe/elenaorfe-website',
				icon: 'mdi:github',
				label: 'Visit the repository of my website',
			},
		],
	},
];

const ProjectsCoverLetter: React.FC = () => {
	return (
		<section className="mb-16">
			<h2 className="mb-2 text-lg font-bold">What projects am I proud of?</h2>
			<div className="space-y-16">
				{projects.map((project, index) => (
					<ProjectCoverLetter
						project={project}
						key={`project-${project.id}`}
						isReverse={index % 2 !== 0}
					/>
				))}
			</div>
		</section>
	);
};
export default ProjectsCoverLetter;
