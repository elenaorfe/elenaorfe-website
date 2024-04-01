import React from 'react';
import ProjectCoverLetter from './ProjectCoverLetter';

type Link = {
	href: string;
	icon: string;
	label: string;
};

enum VideoLayout {
	horizontal = 'horizontal',
	vertical = 'vertical',
}

export type Project = {
	id: string;
	description: string[];
	title: string;
	video: {
		id: string;
		src: string;
		layout: VideoLayout;
	};
	links: Link[];
};

const projects = [
	{
		id: 'personal-website',
		description: [
			'My ' +
				"<a href='https://www.elenaorfe.com/' target='_blank' rel='noreferrer' class='text-persian-green-500'>website</a>, " +
				"where this cover letter is also hosted, demonstrates my skills in design and technical abilities using Next.js and TailwindCSS. Additionally, I've integrated Cloudflare workers and deploy the application with Vercel.",
			"I developed a chatbot empowered by OpenAI to provide intelligent responses about myself through natural conversations. Give it a try by clicking on the chat icon below. I'm sure you'll like it!",
		],
		title: 'Crafting My Online Identity',
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
			"Currently, I'm working for a Finnish company, developing an app using React Native, providing users with various features related to parking, charging, and other mobility-related services.",
			"As the lead developer, I participate in the development process and guide the team in implementing the app's functionalities efficiently.",
			"I collaborate closely with the designer to ensure that the app's design aligns with its functionalities and user experience goals. I translate design concepts into functional components and user interfaces, while also providing technical insights to refine the design and optimize its implementation. I have contributed to create a design system with Storybook to ensure consistent user experience across the entire team.",
			'I also handle the app release process, ensuring that the app is published on the App Store and Google Play Store. The whole process was automated with Fastlane and Gitlab pipelines.',
		],
		title: 'Contributing Across All Stacks',
		video: {
			id: 'video-project-aimo',
			src: '/assets/videos/screen-record-project-aimo.mp4',
			layout: VideoLayout.vertical,
		},
		links: [],
	},
];

const ProjectsCoverLetter = (): React.JSX.Element => {
	return (
		<section>
			<h2 className="mb-4 text-lg font-semibold">
				What projects am I proud of?
			</h2>
			<div className="space-y-8">
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
