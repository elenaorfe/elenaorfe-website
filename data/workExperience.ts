import { SkillInterest, SkillType } from '../types/skill';

const WorkExperience = {
	en: {
		title: 'Work experience',
		description: 'Professional projects can be found here',
		items: [
			{
				id: 'work-experience-en-2',
				company: 'Gofore',
				role: 'Senior Software Developer & Culture Coach',
				description:
					"Gofore is pioneering the digital transformation and thriving on customer success. As member of the Gofore's crew, I participated in various international projects and handled diverse tasks for the Spanish office, including leading the Great Place to Work certification, establishing the Malaga office, and conducting technical interviews as part of the recruitment process.",
				dateStart: 'January 2019',
				dateEnd: 'Now',
				logo: 'logo_gofore.png',
				color: 'orange',
				projects: [
					{
						id: 'work-experience-2-project-en-6',
						duration: 'October 2021 - Now',
						dateStart: '2021-10-01',
						dateEnd: null,
						title: 'Mobile Application for a Client in the Mobility sector',
						role: 'Lead Developer',
						location: 'Remote work',
						description: {
							short:
								'Developed an iOS and Android application using React Native that successfully amassed over 1.5 million users and achieved top ranking as the 1st free iOS app and secured 4th position on Android in Sweden.',
						},
						achievements: [
							'Developed an iOS and Android application using React Native, enabling customers to park, charge their cars, and access other mobility solutions.',
							'Served as the Lead Developer while also acting as the backup for the release manager, ensuring project deployment and coordination.',
							'Created a reusable UI components library.',
							'Utilized GraphQL and the Apollo GraphQL library to transform and transfer data efficiently between the client and microservices.',
							'Designed and implemented an architecture to customize the UI for third-party providers, such as Azure and payment system providers.',
							'Collaborated closely with customer support teams to promptly address and resolve technical issues.',
							'Achieved top ranking as the 1st free iOS app and secured 4th position on Android in Sweden.',
							'Successfully amassed over 1.5 million users.',
						],
						skills: [
							{
								name: 'React Native',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'ReactJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Typescript',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Storybook',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'GraphQL',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Parcel',
								type: SkillType.infrastructure,
								interest: SkillInterest.medium,
							},
							{
								name: 'Jest',
								type: SkillType.testing,
								interest: SkillInterest.high,
							},
							{
								name: 'Datadog',
								type: SkillType.tool,
								interest: SkillInterest.medium,
							},
							{
								name: 'Firebase',
								type: SkillType.infrastructure,
								interest: SkillInterest.medium,
							},
							{
								name: 'Fastlane',
								type: SkillType.infrastructure,
								interest: SkillInterest.medium,
							},
							{
								name: 'Gitlab',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-2-project-en-5',
						duration: 'February 2021 - September 2021',
						dateStart: '2021-02-01',
						dateEnd: '2021-09-30',
						title:
							'Web & Mobile Application for a Client in the Prevention of Hazards sector',
						role: 'Fullstack developer',
						location: 'Remote work',
						description: {
							short:
								'Led the development of a hazard prevention web platform, integrated interactive floor plans, safety guidelines. Provided primary support during the culmination phase, maintaining React Native iOS and Android applications.',
						},
						achievements: [
							'Spearheaded the development of a hazard prevention platform, focusing on creating a CMS that enabled managers to efficiently build documentation related to fire prevention',
							'Implemented features allowing for the integration of interactive floor plans and safety guidelines within the platform.',
							'Stepped in as the primary support for the project`s culmination phase, conducting essential maintenance tasks on both the iOS and Android applications developed with React Native.',
						],
						skills: [
							{
								name: 'ReactJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Typescript',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scss',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'React Native',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Firebase',
								type: SkillType.infrastructure,
								interest: SkillInterest.medium,
							},
							{
								name: 'NodeJS',
								type: SkillType.runtime,
								interest: SkillInterest.medium,
							},
							{
								name: 'Github',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Trello',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-2-project-en-4',
						duration: 'October 2020 - January 2021',
						dateStart: '2020-10-01',
						dateEnd: '2021-01-31',
						title: 'Web Application for a Client in the University sector',
						role: 'Frontend developer',
						location: 'Remote work',
						description: {
							short:
								'Developed a hate speech detection dashboard to collect and analyze data from multiple social media platforms, incorporating intuitive graphical representations to illustrate hate speech trends and patterns.',
						},
						achievements: [
							'Led the development of a hate speech detection dashboard designed to gather and analyze data from various social media platforms, including Twitter, Reddit, and others.',
							'Designed intuitive graphical representations within the dashboard to visually depict trends, patterns, and reports related to hate speech occurrences.',
						],
						skills: [
							{
								name: 'Angular',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Typescript',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scss',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bootstrap',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'D3',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Gitlab',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Jira',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-2-project-en-3',
						duration: 'September 2019 - October 2020',
						dateStart: '2019-09-01',
						dateEnd: '2020-10-31',
						title: 'Web aplication for a Client in the IoT sector',
						role: 'Frontend developer',
						location: 'Finland + Remote work',
						description: {
							short:
								'Led the migration from AngularJS to Angular and developed new features for a cloud-based measurement data monitoring system.',
						},
						achievements: [
							'Worked for a leading measurement equipment manufacturer that offered a cloud-based measurement data monitoring system, enabling customers to remotely monitor measurement and alarm information at various sites.',
							'Managed the migration from AngularJS to Angular and developed new features.',
						],
						skills: [
							{
								name: 'AngularJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Angular',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Typescript',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scss',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bootstrap',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Responsive Design',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Leaflet maps',
								type: SkillType.frontend,
								interest: SkillInterest.medium,
							},
							{
								name: 'i18n',
								type: SkillType.frontend,
								interest: SkillInterest.medium,
							},
							{
								name: 'Karma',
								type: SkillType.testing,
								interest: SkillInterest.high,
							},
							{
								name: 'RESTful API',
								type: SkillType.frontend,
								interest: SkillInterest.medium,
							},
							{
								name: 'Webpack',
								type: SkillType.infrastructure,
								interest: SkillInterest.medium,
							},
							{
								name: 'Gitlab',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Jira',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-2-project-en-2',
						duration: 'June 2019 - August 2019',
						dateStart: '2019-06-01',
						dateEnd: '2019-08-31',
						title: 'Web application for a Client in the University',
						role: 'Frontend developer',
						location: 'Finland + Remote work',
						description: {
							short:
								'Led a project where I integrated customer-developed API endpoints into a visual map, facilitating the mapping of stores within shopping malls through a custom CMS.',
						},
						achievements: [
							'Led a project where I integrated customer-developed API endpoints into a visual map, facilitating the mapping of stores within shopping malls.',
						],
						skills: [
							{
								name: 'Figma',
								type: SkillType.style,
								interest: SkillInterest.low,
							},
							{
								name: 'ReactJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Sass',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Material UI',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Here Maps',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'i18n',
								type: SkillType.tool,
								interest: SkillInterest.high,
							},
							{
								name: 'RESTful API',
								type: SkillType.frontend,
								interest: SkillInterest.low,
							},
							{
								name: 'Babel',
								type: SkillType.runtime,
								interest: SkillInterest.low,
							},
							{
								name: 'Webpack',
								type: SkillType.runtime,
								interest: SkillInterest.low,
							},
							{
								name: 'Jest',
								type: SkillType.testing,
								interest: SkillInterest.high,
							},
							{
								name: 'Selenium',
								type: SkillType.testing,
								interest: SkillInterest.high,
							},
							{
								name: 'Gitlab',
								type: SkillType.tool,
								interest: SkillInterest.high,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Trello',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-2-project-en-1',
						duration: 'January 2019 - May 2019',
						dateStart: '2019-01-01',
						dateEnd: '2019-05-31',
						title: 'Web application for internal use',
						role: 'Frontend developer',
						location: 'Spain',
						description: {
							short:
								'Developed a user interface optimized for office needs, delivering tailored information, and integrated the application with various social media APIs.',
						},
						achievements: [
							'Designed the user interface to deliver pertinent information tailored for office use.',
							'Integrated the application with social media APIs.',
						],
						skills: [
							{
								name: 'Sketch',
								type: SkillType.style,
								interest: SkillInterest.low,
							},
							{
								name: 'Marvel',
								type: SkillType.style,
								interest: SkillInterest.low,
							},
							{
								name: 'ReactJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Sass',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Material UI',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bitbucket',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Trello',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
				],
			},
			{
				id: 'work-experience-en-1',
				company: 'Accenture',
				role: 'Consultant',
				description:
					'Leading digital transformation of international banks. Certification as a trainer of the product that was integrated into the different customers.',
				dateStart: 'June 2015',
				dateEnd: 'December 2018',
				logo: 'logo_accenture.png',
				color: 'purple',
				projects: [
					{
						id: 'work-experience-1-project-en-4',
						duration: 'February 2018 - December 2018',
						dateStart: '2018-02-01',
						dateEnd: '2018-12-31',
						title: 'Web application for a Client in the Insurance sector',
						role: 'Frontend developer',
						location: 'Austria',
						description: {
							short:
								'Led the digital transformation initiative for one of the largest insurance groups in Austria, Central, and Eastern Europe, spearheading the definition, analysis, and implementation of software products.',
						},
						achievements: [
							'Lead the digital transformation of one of the largest insurance groups of Austria, Central and Eastern Europe.',
							'Spearheaded the software product definition, requirements, analysis and implementation.',
						],
						skills: [
							{
								name: 'AngularJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'EC6',
								type: SkillType.frontend,
								interest: SkillInterest.low,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Sass',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bootstrap',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Responsive Design',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Handlebars',
								type: SkillType.frontend,
								interest: SkillInterest.low,
							},
							{
								name: 'RESTful API',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Jira',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Github',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-1-project-en-3',
						duration: 'May 2017 - January 2018',
						dateStart: '2017-05-01',
						dateEnd: '2018-01-31',
						title: 'Web application for a Client in the Bank sector',
						role: 'Frontend developer',
						location: 'Colombia + Remote work',
						description: {
							short:
								'Engaged in the digital transformation of a significant financial group, involving analysis of customer requirements, enhancement of form-based workflows, task estimation, form modeling, and frontend development.',
						},
						achievements: [
							'Participation in the digital transformation of an important financial group.',
							'Analysing of customer requirements and improving form-based flows.',
							'Estimation of tasks, modeling forms and frontend development.',
						],
						skills: [
							{
								name: 'Javascript',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'jQuery',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'CSS',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bootstrap',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Responsive Design',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'RESTful API',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Jira',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Github',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-1-project-en-2',
						duration: 'May 2016 - April 2017',
						dateStart: '2016-05-01',
						dateEnd: '2017-04-31',
						title: 'Web application for a Client in the Bank sector.',
						role: 'Frontend developer',
						location: 'Mexico',
						description: {
							short:
								'Developed a credit card portal, involving analysis of customer requirements and tasks estimation, followed by frontend development.',
						},
						achievements: [
							'Creation of a credit card portal.',
							'Analyze customer requirements.',
							'Tasks estimations and frontend development.',
						],
						skills: [
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
							{
								name: 'AngularJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Sass',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bootstrap',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Responsive Design',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'RESTful API',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Jira',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Github',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-1-project-en-1',
						duration: 'June 2015 - April 2016',
						dateStart: '2015-06-01',
						dateEnd: '2016-04-30',
						title: 'R&D Projects',
						role: 'Frontend developer',
						location: 'Spain',
						description: {
							short:
								'Implemented new features and enhancements for company products within the R&D department, utilizing MV* architecture, integrating social networks into a multichannel platform, and incorporating a workflow engine into a Java application.',
						},
						achievements: [
							'Development of new features and improvements of the company products as part of the R&D department.',
							'Development of a MV* architecture.',
							'Integration of social networks inside a multichannel platform.',
							'Implementation of a workflow engine in a Java application.',
						],
						skills: [
							{
								name: 'AngularJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'CSS',
								type: SkillType.style,
								interest: SkillInterest.high,
							},

							{
								name: 'Mocha',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Facebook API',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Twitter API',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Yammer API',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Java',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Oracle D',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Activiti',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Alfresco',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
				],
			},
		],
	},
	es: {
		title: 'Experiencia profesional',
		description: 'Proyectos realizados en el entorno laboral.',
		items: [
			{
				id: 'work-experience-es-2',
				company: 'Gofore',
				role: 'Senior Software developer & Culture Coach',
				description:
					'Participación en diferentes proyectos internacionales. Involucración en tareas de la oficina de España y participación en las entrevistas técnicas como parte del proceso de selección de personal.',
				dateStart: 'Enero 2019',
				dateEnd: 'Actualidad',
				logo: 'logo_gofore.png',
				color: 'orange',
				projects: [
					{
						id: 'work-experience-2-project-es-6',
						duration: 'Octubre 2021 - Ahora',
						dateStart: '2021-10-01',
						dateEnd: null,
						title: 'Aplicación móvil para un Cliente en el sector de Mobilidad',
						role: 'Lead Developer',
						location: 'Trabajo Remoto',
						description: {
							short:
								'Desarrollo de una aplicación iOS y Android usando React Native que es usada por más de 1.5 millones de usuarios y ha logrado el primer puesto como aplicación gratuita en iOS y aseguró la 4ª posición en Android en Suecia.',
						},
						achievements: [
							'Desarrollo de una aplicación de aparcamientos para móviles y web',
							'Creación de una librería de componentes reusables.',
							'Uso de GraphQL y de la librería ApolloGraphQL para transformar y transferir datos entre el cliente y los microservicios.',
							'Diseño e implementación de la arquitectura necesaria para personalizar el UI de proveedores externos.',
							'Colaboración directa con el equipo de atención al cliente para resolver problemas técnicos.',
							'La aplicación ha logrado el primer puesto como aplicación gratuita en iOS y aseguró la 4ª posición en Android en Suecia.',
							'La aplicación es usada por más de 1.5 millones de usuarios.',
						],
						skills: [
							{
								name: 'React Native',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'ReactJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Typescript',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Storybook',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'GraphQL',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Parcel',
								type: SkillType.infrastructure,
								interest: SkillInterest.medium,
							},
							{
								name: 'Jest',
								type: SkillType.testing,
								interest: SkillInterest.high,
							},
							{
								name: 'Datadog',
								type: SkillType.tool,
								interest: SkillInterest.medium,
							},
							{
								name: 'Firebase',
								type: SkillType.infrastructure,
								interest: SkillInterest.medium,
							},
							{
								name: 'Fastlane',
								type: SkillType.infrastructure,
								interest: SkillInterest.medium,
							},
							{
								name: 'Gitlab',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-2-project-es-5',
						duration: 'Febrero 2021 - Septiembre 2021',
						dateStart: '2021-02-01',
						dateEnd: '2021-09-30',
						title:
							'Web para un Cliente en el sector de Prevención de Riesgos Laborales',
						role: 'Fullstack developer',
						location: 'Trabajo Remoto',
						description: {
							short:
								'Lideré el desarrollo de una plataforma web de prevención de riesgos, integrando planos interactivos y pautas de seguridad. Brindé soporte principal durante la fase de culminación, manteniendo aplicaciones React Native para iOS y Android.',
						},
						achievements: [
							'Anexión al equipo como un apoyo experto en el desarrollo e implementación de una aplicación de escritorio y móvil',
							'Análisis y estimación de nuevas funcionalidades. Lanzamiento a producción de las aplicaciones móviles.',
						],
						skills: [
							{
								name: 'ReactJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Typescript',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scss',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'React Native',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Firebase',
								type: SkillType.infrastructure,
								interest: SkillInterest.medium,
							},
							{
								name: 'NodeJS',
								type: SkillType.runtime,
								interest: SkillInterest.medium,
							},
							{
								name: 'Github',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Trello',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-2-project-es-4',
						duration: 'Octubre 2020 - Enero 2021',
						dateStart: '2020-10-01',
						dateEnd: '2021-01-31',
						title: 'Web para un Cliente en el sector Universidad',
						role: 'Frontend developer',
						location: 'Trabajo Remoto',
						description: {
							short:
								'Panel para recopilar y analizar datos de múltiples plataformas de redes sociales, incorporando representaciones gráficas intuitivas para ilustrar tendencias y patrones de discurso de odio.',
						},
						achievements: [
							'Rediseño y desarrollo de una herramienta web para la clasificación y visualización de conversaciones de odio en redes sociales.',
							'Integración con las principales redes sociales (Twitter, Reddit and 4chain) para mostrar widgets que analizan las publicaciones relacionadas con temas de actualidad.',
						],
						skills: [
							{
								name: 'Angular',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Typescript',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scss',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bootstrap',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'D3',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Gitlab',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Jira',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-2-project-es-3',
						duration: 'Septiembre 2019 - Octubre 2020',
						dateStart: '2019-09-01',
						dateEnd: '2020-10-31',
						title: 'Web para un Cliente en el sector IoT',
						role: 'Frontend developer',
						location: 'Finlandia + Trabajo Remoto',
						description: {
							short:
								'Migración de AngularJS a Angular y desarrollo nuevas características para un sistema de monitoreo de datos de medición basado en la nube.',
						},
						achievements: [
							'Trabajando para un fabricante líder de equipos de medición que proporciona un sistema de monitoreo de datos de medición basado en la nube, el cual permite a los clientes monitorear remotamente la medición y la información de alarmas en los sitios.',
							'El proyecto tiene el objetivo de actualizar las tecnologías del sistema para permitir un mejor rendimiento y facilidad de mantenimiento.',
							'Migración de AngularJS a Angular y posterior desarrollo de nuevas funcionalidades.',
						],
						skills: [
							{
								name: 'AngularJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Angular',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Typescript',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scss',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bootstrap',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Responsive Design',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Leaflet maps',
								type: SkillType.frontend,
								interest: SkillInterest.medium,
							},
							{
								name: 'i18n',
								type: SkillType.frontend,
								interest: SkillInterest.medium,
							},
							{
								name: 'Karma',
								type: SkillType.testing,
								interest: SkillInterest.high,
							},
							{
								name: 'RESTful API',
								type: SkillType.frontend,
								interest: SkillInterest.medium,
							},
							{
								name: 'Webpack',
								type: SkillType.infrastructure,
								interest: SkillInterest.medium,
							},
							{
								name: 'Gitlab',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Jira',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-2-project-es-2',
						duration: 'Junio 2019 - Agosto 2019',
						dateStart: '2019-06-01',
						dateEnd: '2019-08-31',
						title: 'Web para un Cliente en el sector Universidad',
						role: 'Frontend developer',
						location: 'Finlandia + Trabajo Remoto',
						description: {
							short:
								'Proyecto de integración de API en un mapa visual, facilitando la ubicación de tiendas dentro de centros comerciales a través de un CMS personalizado.',
						},
						achievements: [
							'Configurar y desarrollar una aplicación web para gestionar el contenido de una aplicación de mapas.',
						],
						skills: [
							{
								name: 'Figma',
								type: SkillType.style,
								interest: SkillInterest.low,
							},
							{
								name: 'ReactJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Sass',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Material UI',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Here Maps',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'i18n',
								type: SkillType.tool,
								interest: SkillInterest.high,
							},
							{
								name: 'RESTful API',
								type: SkillType.frontend,
								interest: SkillInterest.low,
							},
							{
								name: 'Babel',
								type: SkillType.runtime,
								interest: SkillInterest.low,
							},
							{
								name: 'Webpack',
								type: SkillType.runtime,
								interest: SkillInterest.low,
							},
							{
								name: 'Jest',
								type: SkillType.testing,
								interest: SkillInterest.high,
							},
							{
								name: 'Selenium',
								type: SkillType.testing,
								interest: SkillInterest.high,
							},
							{
								name: 'Gitlab',
								type: SkillType.tool,
								interest: SkillInterest.high,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Trello',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-2-project-es-1',
						duration: 'Enero 2019 - Mayo 2019',
						dateStart: '2019-01-01',
						dateEnd: '2019-05-31',
						title: 'Web para un proyecto interno',
						role: 'Frontend developer',
						location: 'España',
						description: {
							short:
								'Desarrollo de una interfaz de usuario optimizada para las necesidades de la oficina, entregando información personalizada e integrando la aplicación con varios APIs de redes sociales.',
						},
						achievements: [
							'Diseño de la interfaz de usuario.',
							'Configurar e implementar la aplicación.',
							'Integración con API de redes sociales (Outlook, Twitter y Slack)',
						],
						skills: [
							{
								name: 'Sketch',
								type: SkillType.style,
								interest: SkillInterest.low,
							},
							{
								name: 'Marvel',
								type: SkillType.style,
								interest: SkillInterest.low,
							},
							{
								name: 'ReactJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Sass',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Material UI',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bitbucket',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Trello',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
				],
			},
			{
				id: 'work-experience-es-1',
				company: 'Accenture',
				role: 'Consultor',
				description:
					'Liderando la transformación digital de bancos internacionales. Certificación como formadora para la impartición de cursos sobre el producto implementado en los diferentes clientes.',
				dateStart: 'Junio 2015',
				dateEnd: 'Diciembre 2018',
				logo: 'logo_accenture.png',
				color: 'purple',
				projects: [
					{
						id: 'work-experience-1-project-es-4',
						duration: 'Febrero 2018 - Diciembre 2018',
						dateStart: '2018-02-01',
						dateEnd: '2018-12-31',
						title:
							'Web para un Cliente en el sector de las Compañías de Seguros',
						role: 'Frontend developer',
						location: 'Austria',
						description: {
							short:
								'Lideración de la iniciativa de transformación digital para uno de los grupos de seguros más grandes en Austria, Europa Central y del Este, encabezando la definición, análisis e implementación de productos de software.',
						},
						achievements: [
							'Lideré la transformación digital de uno de los mayores grupos de seguros en sus principales mercados de Austria y Europa Central y del Este.',
							'Análisis, definición e implantación del producto.',
						],
						skills: [
							{
								name: 'AngularJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'EC6',
								type: SkillType.frontend,
								interest: SkillInterest.low,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Sass',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bootstrap',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Responsive Design',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Handlebars',
								type: SkillType.frontend,
								interest: SkillInterest.low,
							},
							{
								name: 'RESTful API',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Jira',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Github',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-1-project-es-3',
						duration: 'Mayo 2017 - Enero 2018',
						dateStart: '2017-05-01',
						dateEnd: '2018-01-31',
						title: 'Web para un Cliente en el sector Bancario',
						role: 'Frontend developer',
						location: 'Colombia + Trabajo Remoto',
						description: {
							short:
								'Participación en la transformación digital de un importante grupo financiero, involucración en el análisis de los requisitos del cliente, mejora de flujos de trabajo basados en formularios, estimación de tareas, modelado de formularios y desarrollo frontend.',
						},
						achievements: [
							'Participación en la transformación digital de un grupo financiero relevante.',
							'Análisis de los requisitos del cliente y mejora de los flujos basados en formularios.',
							'Estimación de tareas, modelado de formularios y desarrollo frontend.',
						],
						skills: [
							{
								name: 'Javascript',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'jQuery',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'CSS',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bootstrap',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Responsive Design',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'RESTful API',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Jira',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Github',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-1-project-es-2',
						duration: 'Mayo 2016 - Abril 2017',
						dateStart: '2016-05-01',
						dateEnd: '2017-04-31',
						title: 'Web para un Cliente en el sector Bancario',
						role: 'Frontend developer',
						location: 'México',
						description: {
							short:
								'Desarrollo de un portal de tarjetas de crédito, lo cual implicó el análisis de los requisitos del cliente y la estimación de tareas, seguido por el desarrollo del frontend.',
						},
						achievements: [
							'Creación de un portal de tarjetas de crédito.',
							'Estimación de tareas y desarrollo frontend',
						],
						skills: [
							{
								name: 'AngularJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Sass',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Bootstrap',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Responsive Design',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'RESTful API',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'Scrum',
								type: SkillType.methodology,
								interest: SkillInterest.low,
							},
							{
								name: 'Jira',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'Github',
								type: SkillType.tool,
								interest: SkillInterest.low,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
					{
						id: 'work-experience-1-project-es-1',
						duration: 'Junio 2015 - Abril 2016',
						dateStart: '2015-06-01',
						dateEnd: '2016-04-30',
						title: 'Diversos proyectos',
						role: 'Frontend developer',
						location: 'España',
						description: {
							short:
								'Implementación de nuevas características y mejoras para los productos de la empresa dentro del departamento de I+D, utilizando una arquitectura de modelo vista controlador (MV*), integrando redes sociales en una plataforma multicanal e incorporando un motor de flujo de trabajo en una aplicación Java.',
						},
						achievements: [
							'Desarrollo de nuevas funcionalidades y mejoras de los productos de la compañía como parte del departamento de I+D',
							'Desarrollo de una arquitectura MV*.',
							'Integración de redes sociales en una plataforma multicanal.',
							'Desarrollo de un motor de flujo de trabajo en una applicación Java',
						],
						skills: [
							{
								name: 'AngularJS',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'HTML',
								type: SkillType.frontend,
								interest: SkillInterest.high,
							},
							{
								name: 'CSS',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Mocha',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Facebook API',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Twitter API',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Yammer API',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Java',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Oracle D',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Activiti',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'Alfresco',
								type: SkillType.style,
								interest: SkillInterest.high,
							},
							{
								name: 'English',
								type: SkillType.language,
								interest: SkillInterest.low,
							},
						],
					},
				],
			},
		],
	},
};

export default WorkExperience;
