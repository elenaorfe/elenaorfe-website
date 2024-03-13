import { useContext, useMemo } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import About from '../components/About';
import Courses from '../components/Courses';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Languages from '../components/Languages';
import SideExperience from '../components/SideExperience';
import WorkExperience from '../components/WorkExperience';
import aboutDataEN from '../data/en/about.json';
import aboutDataES from '../data/es/about.json';
import contactDataEN from '../data/en/contact.json';
import contactDataES from '../data/es/contact.json';
import experienceDataEN from '../data/en/experience.json';
import experienceDataES from '../data/es/experience.json';
import languageDataEN from '../data/en/language.json';
import languageDataES from '../data/es/language.json';
import coursesDataEN from '../data/en/courses.json';
import coursesDataES from '../data/es/courses.json';
import educationDataEN from '../data/en/education.json';
import educationDataES from '../data/es/education.json';
import { LocalizedAbout } from '../types/about';
import { LocalizedCourse } from '../types/course';
import { LocalizedEducation } from '../types/education';
import { LocalizedContact } from '../types/contact';
import { LocalizedLanguage } from '../types/languages';
import { Lang } from '../types/common';
import { LocalizedExperience } from '../types/experience';
import Notification from '../components/Notification';
import ErrorMessage from '../components/ErrorMessage';
import Skills from '../components/Skills';
import AppContext from '../context/AppContext';
import translationsEN from '../i18n/en.json';
import translationsES from '../i18n/es.json';

interface HomeProps {
	aboutData: LocalizedAbout;
	contactData: LocalizedContact;
	coursesData: LocalizedCourse;
	educationData: LocalizedEducation;
	experiencesData: LocalizedExperience;
	languageData: LocalizedLanguage;
}

const Home: NextPage<HomeProps> = ({
	aboutData,
	contactData,
	coursesData,
	educationData,
	experiencesData,
	languageData,
}: HomeProps) => {
	const { errorMessage, setErrorMessage } = useContext(AppContext);
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);
	const translations = currentLocale === 'es' ? translationsES : translationsEN;

	return (
		<div className="container mx-auto px-4 md:px-12 lg:my-8 space-y-12">
			<Head>
				<title>Elena | Frontend Engineer</title>
				<meta
					name="description"
					content="Frontend engineer focused in React & NextJS"
				/>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<main>
				<About
					about={aboutData[currentLocale]}
					workExperience={experiencesData[currentLocale].filter(
						(experience) => experience.type === 'professional'
					)}
					sideExperiences={experiencesData[currentLocale].filter(
						(experience) => experience.type === 'side'
					)}
					translations={translations}
				/>
				<Contact
					contact={contactData[currentLocale]}
					translations={translations}
				/>
				<WorkExperience
					workExperiences={experiencesData[currentLocale].filter(
						(experience) => experience.type === 'professional'
					)}
					translations={translations}
				/>
				<SideExperience
					sideExperiences={
						experiencesData[currentLocale].filter(
							(experience) => experience.type === 'side'
						)[0]
					}
					translations={translations}
				/>
				<div className="md:grid md:grid-cols-2 gap-8">
					<Courses
						courses={coursesData[currentLocale]}
						translations={translations}
					/>
					<div className="space-y-8">
						<Education
							education={educationData[currentLocale]}
							translations={translations}
						/>
						<Languages
							languages={languageData[currentLocale]}
							translations={translations}
						/>
					</div>
				</div>
				<Skills translations={translations} />
				{errorMessage !== undefined && (
					<Notification
						onClose={() => setErrorMessage(undefined)}
						autoCloseTimeout={5000}
					>
						<ErrorMessage text={errorMessage} fullWidth={false} />
					</Notification>
				)}
			</main>
			<Script
				type="module"
				src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.esm.js"
			/>
			<Script
				noModule
				src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.js"
			/>
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
