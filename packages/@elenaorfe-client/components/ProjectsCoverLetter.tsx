import React from 'react';
import ProjectCoverLetter from './ProjectCoverLetter';

interface Link {
	href: string;
	icon: string;
	label: string;
}

enum VideoLayout {
	horizontal = 'horizontal',
	vertical = 'vertical',
}

export interface Project {
	id: string;
	description: string[];
	video: {
		id: string;
		src: string;
		layout: VideoLayout;
	};
	links: Link[];
}

const projects = [
	{
		id: 'personal-website',
		description: [
			"My website demonstrates my skills in design and technical abilities using Next.js and TailwindCSS. Additionally, I've integrated Cloudflare workers and deploy the application with Vercel.",
			'I developed a chatbot empowered by OpenAI to provide intelligent responses and natural conversations.',
		],
		video: {
			id: 'video-personal-website',
			src: '/assets/videos/screen-record-personal-website.mp4',
			layout: VideoLayout.horizontal,
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
	{
		id: 'project-aimo',
		description: [
			'My current project is an app developed using React Native, providing users with various features related to parking, charging, and other mobility-related services.',
			"As the lead developer, I participate in the development process and guide the team in implementing the app's functionalities efficiently.",
			"I collaborate closely with the designer to ensure that the app's design aligns with its functionalities and user experience goals. I translate design concepts into functional components and user interfaces, while also providing technical insights to refine the design and optimize its implementation.",
			'We have build a design system with Storybook to ensure a consistent user experience.',
		],
		video: {
			id: 'video-project-aimo',
			src: '/assets/videos/screen-record-project-aimo.mp4',
			layout: VideoLayout.vertical,
		},
		links: [],
	},
];

const ProjectsCoverLetter: React.FC = () => {
	return (
		<section>
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
