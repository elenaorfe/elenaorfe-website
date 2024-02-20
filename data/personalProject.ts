import { SkillInterest, SkillType } from '../types/skill';

const PersonalProjects = {
	en: {
		title: 'Personal Projects',
		description:
			'Most relevant projects done in my personal time can be found here.',
		link: 'See project',
		items: [
			{
				id: 'personal-project-en-4',
				title: 'Personal Portfolio',
				date: '2024',
				description:
					'Designed and developed a website to showcase my portfolio. Development of a chatbot empowered by OpenAI to provide intelligent responses and natural conversations.',
				skills: [
					{
						name: 'Next.js',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Typescript',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Tailwind',
						type: SkillType.style,
						interest: SkillInterest.high,
					},
					{
						name: 'Sass',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Vercel',
						type: SkillType.infrastructure,
						interest: SkillInterest.medium,
					},
					{
						name: 'a11y',
						type: SkillType.accessibility,
						interest: SkillInterest.high,
					},
					{
						name: 'OpenAI API',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
				],
				img: 'personal-project_personal-portfolio.png',
				url: 'https://www.elenaorfe.com',
				category: 'web-elenaorfe',
			},
			{
				id: 'personal-project-en-3',
				title: 'Architecture and interior design',
				date: '2021',
				description:
					'Design and development of a professional architecture and interior design website. The development was designed to enable the owner to update content through the CMS, while also offering the flexibility to operate it as a headless system, facilitating integration with modern frameworks.',
				skills: [
					{
						name: 'Next.js',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Typescript',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Tailwind',
						type: SkillType.style,
						interest: SkillInterest.high,
					},
					{
						name: 'GraphQL',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Wordpress',
						type: SkillType.cms,
						interest: SkillInterest.medium,
					},
					{
						name: 'Web hosting',
						type: SkillType.infrastructure,
						interest: SkillInterest.low,
					},
					{
						name: 'a11y',
						type: SkillType.accessibility,
						interest: SkillInterest.high,
					},
				],
				img: 'personal-project_dosce.png',
				url: 'https://www.doscestudio.com',
				category: 'web-dosce',
			},
			{
				id: 'personal-project-en-2',
				title: 'Portfolio Art Curator',
				date: '2020',
				description:
					'Design and development of an art curator portfolio. The development was design to allow the owner to update the content through the CMS but with the flexibility of using it as a headless in order to allow the development with modern frameworks.',
				skills: [
					{
						name: 'Next.js',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Typescript',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Tailwind',
						type: SkillType.style,
						interest: SkillInterest.high,
					},
					{
						name: 'GraphQL',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Wordpress',
						type: SkillType.cms,
						interest: SkillInterest.medium,
					},
					{
						name: 'Web hosting',
						type: SkillType.infrastructure,
						interest: SkillInterest.low,
					},
					{
						name: 'a11y',
						type: SkillType.accessibility,
						interest: SkillInterest.high,
					},
				],
				img: 'personal-project_marinariera.png',
				url: 'https://www.marinariera.com',
				category: 'web-marinariera',
			},
			{
				id: 'personal-project-en-1',
				title: 'Scout Association',
				date: '2019',
				description:
					'Redesigned and developed the WordPress theme for an association. The owner manages content primarily to share the latest news and events associated with the organization.',
				skills: [
					{
						name: 'PHP',
						type: SkillType.frontend,
						interest: SkillInterest.low,
					},
					{
						name: 'Wordpress',
						type: SkillType.cms,
						interest: SkillInterest.medium,
					},
					{
						name: 'Bootstrap',
						type: SkillType.style,
						interest: SkillInterest.high,
					},
					{
						name: 'Web hosting',
						type: SkillType.infrastructure,
						interest: SkillInterest.low,
					},
				],
				img: 'personal-project_gs125.png',
				url: 'https://www.gs125.com',
				category: 'web-gs125',
			},
		],
	},
	es: {
		title: 'Proyectos Personales',
		description: 'Proyectos más relevantes realizados en mi tiempo libre.',
		link: 'Ver proyecto',
		items: [
			{
				id: 'personal-project-es-4',
				title: 'Portfolio Personal',
				date: '2024',
				description:
					'Diseño y desarrollo de una página web para mostrar mi portfolio. Desarrollo de un chatbot que utiliza la API de OpenAI para ofrecer respuestas inteligentes y conversaciones naturales.',
				skills: [
					{
						name: 'Next.js',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Typescript',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Tailwind',
						type: SkillType.style,
						interest: SkillInterest.high,
					},
					{
						name: 'Sass',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Vercel',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'a11y',
						type: SkillType.accessibility,
						interest: SkillInterest.high,
					},
					{
						name: 'OpenAI API',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
				],
				img: 'personal-project_personal-portfolio.png',
				url: 'https://www.elenaorfe.com',
				category: 'web-elenaorfe',
			},
			{
				id: 'personal-project-es-3',
				title: 'Arquitectura y diseño de interiores',
				date: '2021',
				description:
					'Diseño y desarrollo de un portfolio para un estudio de arquitectura y diseño de interiores. El desarrollo de la página web fue diseñado para que el propietario actualice el contenido a través del CMS pero con la flexibilidad de usarlo como headless para permitir el desarrollo con frameworks modernos.',
				skills: [
					{
						name: 'Next.js',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Typescript',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Tailwind',
						type: SkillType.style,
						interest: SkillInterest.high,
					},
					{
						name: 'GraphQL',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Wordpress',
						type: SkillType.cms,
						interest: SkillInterest.medium,
					},
					{
						name: 'Web hosting',
						type: SkillType.infrastructure,
						interest: SkillInterest.low,
					},
					{
						name: 'a11y',
						type: SkillType.accessibility,
						interest: SkillInterest.high,
					},
				],
				img: 'personal-project_dosce.png',
				url: 'https://www.doscestudio.com',
				category: 'web-dosce',
			},
			{
				id: 'personal-project-es-2',
				title: 'Portfolio Restauradora',
				date: '2020',
				description:
					'Diseño y desarrollo de un portfolio para una restauradora-conservadora de bienes culturales. El desarrollo de la página web fue diseñado para que el propietario actualice el contenido a través del CMS pero con la flexibilidad de usarlo como headless para permitir el desarrollo con frameworks modernos.',
				skills: [
					{
						name: 'Next.js',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Typescript',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Tailwind',
						type: SkillType.style,
						interest: SkillInterest.high,
					},
					{
						name: 'GraphQL',
						type: SkillType.frontend,
						interest: SkillInterest.high,
					},
					{
						name: 'Wordpress',
						type: SkillType.cms,
						interest: SkillInterest.medium,
					},
					{
						name: 'Web hosting',
						type: SkillType.infrastructure,
						interest: SkillInterest.low,
					},
					{
						name: 'a11y',
						type: SkillType.accessibility,
						interest: SkillInterest.high,
					},
				],
				img: 'personal-project_marinariera.png',
				url: 'https://www.marinariera.com',
				category: 'web-marinariera',
			},
			{
				id: 'personal-project-es-1',
				title: 'Asociación Scout',
				date: '2019',
				description:
					'Rediseño y desarrollo de un tema de Wordpress para una asociación. El contenido de la página web es actualizado por el propietario con la finalidad de compartir las últimas noticias y eventos relacionados con la asociación.',
				skills: [
					{
						name: 'PHP',
						type: SkillType.frontend,
						interest: SkillInterest.low,
					},
					{
						name: 'Wordpress',
						type: SkillType.cms,
						interest: SkillInterest.medium,
					},
					{
						name: 'Bootstrap',
						type: SkillType.style,
						interest: SkillInterest.high,
					},
					{
						name: 'Web hosting',
						type: SkillType.infrastructure,
						interest: SkillInterest.low,
					},
				],
				img: 'personal-project_gs125.png',
				url: 'https://www.gs125.com',
				category: 'web-gs125',
			},
		],
	},
};

export default PersonalProjects;
