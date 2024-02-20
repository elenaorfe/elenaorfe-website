import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import About from '../components/About';
import Courses from '../components/Courses';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Languages from '../components/Languages';
import PersonalProject from '../components/PersonalProject';
import WorkExperience from '../components/WorkExperience';
import aboutData from '../data/about';
import coursesData from '../data/course';
import educationData from '../data/education';
import headerLinksData from '../data/header';
import languageData from '../data/language';
import personalProjectData from '../data/personalProject';
import skillData from '../data/skill';
import workExperienceData from '../data/workExperience';
import { LocalizedAbout } from '../types/about';
import { LocalizedCourse } from '../types/course';
import { LocalizedEducation } from '../types/education';
import { LocalizedHeader } from '../types/contact';
import { LocalizedLanguage } from '../types/languages';
import { LocalizedPersonalProject } from '../types/personalProject';
import { LocalizedWorkExperience } from '../types/workExperience';
import Notification from '../components/Notification';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import ErrorMessage from '../components/ErrorMessage';
import Skills from '../components/Skills';
import { LocalizedSkill } from '../types/skill';

interface HomeProps {
	about: LocalizedAbout;
	courses: LocalizedCourse;
	education: LocalizedEducation;
	headerLinks: LocalizedHeader;
	language: LocalizedLanguage;
	personalProject: LocalizedPersonalProject;
	skills: LocalizedSkill;
	workExperience: LocalizedWorkExperience;
}

const Home: NextPage<HomeProps> = ({
	about,
	courses,
	education,
	headerLinks,
	language,
	personalProject,
	skills,
	workExperience,
}: HomeProps) => {
	const { errorMessage, setErrorMessage } = useContext(AppContext);

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
				<About about={about} />
				<Contact headerLinks={headerLinks} />
				<WorkExperience workExperience={workExperience} />
				<PersonalProject personalProject={personalProject} />
				<div className="md:grid md:grid-cols-2 gap-8">
					<Courses courses={courses} />
					<div className="space-y-8">
						<Education education={education} />
						<Languages languages={language} />
					</div>
				</div>
				<Skills skills={skills} />
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
				src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
			/>
			<Script
				noModule
				src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
			/>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	return {
		props: {
			about: aboutData,
			courses: coursesData,
			education: educationData,
			headerLinks: headerLinksData,
			language: languageData,
			personalProject: personalProjectData,
			skills: skillData,
			workExperience: workExperienceData,
		},
		revalidate: 10,
	};
};
