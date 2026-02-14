import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useMemo } from 'react';
import Message from '../components/Message';
import Notification from '../components/Notification';
import About from '../components/Portfolio/About';
import Contact from '../components/Portfolio/Contact';
import Courses from '../components/Portfolio/Courses';
import Education from '../components/Portfolio/Education';
import Languages from '../components/Portfolio/Languages';
import SideExperience from '../components/Portfolio/SideExperience';
import WorkExperience from '../components/Portfolio/WorkExperience';
import AppContext from '../context/AppContext';
import aboutDataEN from '../data/en/about.json';
import contactDataEN from '../data/en/contact.json';
import coursesDataEN from '../data/en/courses.json';
import educationDataEN from '../data/en/education.json';
import experienceDataEN from '../data/en/experience.json';
import languageDataEN from '../data/en/language.json';
import aboutDataES from '../data/es/about.json';
import contactDataES from '../data/es/contact.json';
import coursesDataES from '../data/es/courses.json';
import educationDataES from '../data/es/education.json';
import experienceDataES from '../data/es/experience.json';
import languageDataES from '../data/es/language.json';
import translationsEN from '../i18n/en.json';
import translationsES from '../i18n/es.json';
import { LocalizedAbout } from '../types/about';
import { Lang } from '../types/common';
import { LocalizedContact } from '../types/contact';
import { LocalizedCourse } from '../types/course';
import { LocalizedEducation } from '../types/education';
import { LocalizedExperience } from '../types/experience';
import { LocalizedLanguage } from '../types/languages';

type HomeProps = {
	aboutData: LocalizedAbout;
	contactData: LocalizedContact;
	coursesData: LocalizedCourse;
	educationData: LocalizedEducation;
	experiencesData: LocalizedExperience;
	languageData: LocalizedLanguage;
};

const Home = (props: HomeProps): React.JSX.Element => {
	const {
		aboutData,
		contactData,
		coursesData,
		educationData,
		experiencesData,
		languageData,
	} = props;
	const { notifications, setNotifications } = useContext(AppContext);
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);
	const translations = currentLocale === 'es' ? translationsES : translationsEN;

	return (
		<div className="container mx-auto space-y-12 px-4 md:px-12 lg:my-8">
			<Head>
				<title>Elena | Frontend Engineer</title>
				<meta
					name="description"
					content="Frontend engineer focused in React & NextJS"
				/>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:type" content="website"></meta>
				<meta property="og:url" content="https://www.elenaorfe.com/"></meta>
				<meta
					property="og:title"
					content="Elena Ortega | Frontend Engineer"
				></meta>
				<meta
					property="og:description"
					content="Elena Ortega | Frontend Engineer"
				></meta>
				<meta
					property="og:image"
					content="https://www.elenaorfe.com/assets/img/profile_cover_letter.png"
				></meta>
				<meta
					property="twitter:url"
					content="https://www.elenaorfe.com/"
				></meta>
				<meta
					property="twitter:title"
					content="Elena Ortega | Frontend Engineer"
				></meta>
				<meta
					property="twitter:description"
					content="Frontend engineer focused in React & NextJS"
				></meta>
			</Head>

			<a
				href="#main-content"
				className="sr-only rounded-sm bg-white px-4 py-2 text-black shadow-sm focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
			>
				{translations.skipToContent}
			</a>

			<h1 className="sr-only">
				{aboutData[currentLocale].name} - {aboutData[currentLocale].role}
			</h1>

			<main id="main-content" tabIndex={-1}>
				<About
					about={aboutData[currentLocale]}
					workExperience={experiencesData[currentLocale].filter(
						(experience) => experience.type === 'professional',
					)}
					sideExperiences={experiencesData[currentLocale].filter(
						(experience) => experience.type === 'side',
					)}
					translations={translations}
				/>
				<Contact
					contact={contactData[currentLocale]}
					translations={translations}
				/>
				<WorkExperience
					workExperiences={experiencesData[currentLocale].filter(
						(experience) => experience.type === 'professional',
					)}
					translations={translations}
					language={currentLocale}
				/>
				<SideExperience
					sideExperiences={
						experiencesData[currentLocale].filter(
							(experience) => experience.type === 'side',
						)[0]
					}
					translations={translations}
				/>
				<Courses
					courses={coursesData[currentLocale]}
					translations={translations}
				/>
				<div className="gap-8 md:grid md:grid-cols-2">
					<Education
						education={educationData[currentLocale]}
						translations={translations}
					/>
					<Languages
						languages={languageData[currentLocale]}
						translations={translations}
					/>
				</div>
				{notifications.length > 0 &&
					notifications.map((notification, index: number) => (
						<Notification
							key={`notification-${index}`}
							onClose={() => setNotifications([])}
							autoCloseTimeout={5000}
						>
							<Message
								text={notification.message}
								type={notification.type}
								fullWidth={false}
							/>
						</Notification>
					))}
			</main>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	return {
		props: {
			aboutData: { en: aboutDataEN, es: aboutDataES },
			contactData: { en: contactDataEN, es: contactDataES },
			coursesData: { en: coursesDataEN, es: coursesDataES },
			educationData: { en: educationDataEN, es: educationDataES },
			experiencesData: { en: experienceDataEN, es: experienceDataES },
			languageData: { en: languageDataEN, es: languageDataES },
		},
		revalidate: 10,
	};
};
