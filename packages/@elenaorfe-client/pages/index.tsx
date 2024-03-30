import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useMemo } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Courses from '../components/Courses';
import Education from '../components/Education';
import Languages from '../components/Languages';
import Message from '../components/Message';
import Notification from '../components/Notification';
import SideExperience from '../components/SideExperience';
import WorkExperience from '../components/WorkExperience';
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
			<main>
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
					notifications.map((notification, index) => (
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
