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
			'Creating my website has been an adventure filled with learning and experimenting. Every detail has been a reflection of who I am and what I can bring to the table.',
			'More than just a digital presence, my website is a window into my world, showcasing my design & technical skills.',
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
