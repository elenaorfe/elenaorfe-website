import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import About from '../components/About';
import Courses from '../components/Courses';
import Education from '../components/Education';
import Header from '../components/Header';
import Languages from '../components/Languages';
import PersonalProject from '../components/PersonalProject';
import WorkExperience from '../components/WorkExperience';
import aboutData from '../data/about';
import coursesData from '../data/course';
import educationData from '../data/education';
import headerLinksData from '../data/header';
import languageData from '../data/language';
import personalProjectData from '../data/personalProject';
import workExperienceData from '../data/workExperience';
import { LocalizedAbout } from '../types/about';
import { LocalizedCourse } from '../types/course';
import { LocalizedEducation } from '../types/education';
import { LocalizedHeader } from '../types/header';
import { LocalizedLanguage } from '../types/languages';
import { LocalizedPersonalProject } from '../types/personalProject';
import { LocalizedWorkExperience } from '../types/workExperience';

type HomeProps = {
	about: LocalizedAbout;
	courses: LocalizedCourse;
	education: LocalizedEducation;
	headerLinks: LocalizedHeader;
	language: LocalizedLanguage;
	personalProject: LocalizedPersonalProject;
	workExperience: LocalizedWorkExperience;
};

const Home: NextPage<HomeProps> = ({
	about,
	courses,
	education,
	headerLinks,
	language,
	personalProject,
	workExperience,
}: HomeProps) => {
	return (
		<div className="container mx-auto px-4 md:px-12 my-8 space-y-12">
			<Head>
				<title>Elena | Frontend Engineer</title>
				<meta
					name="description"
					content="Frontend engineer focused in React & NextJS"
				/>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header headerLinks={headerLinks} />
			<main>
				<About about={about} />
				<WorkExperience workExperience={workExperience} />
				<PersonalProject personalProject={personalProject} />
				<div className="md:grid md:grid-cols-2 gap-8">
					<Courses courses={courses} />
					<div className="space-y-8">
						<Education education={education} />
						<Languages languages={language} />
					</div>
				</div>
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
			workExperience: workExperienceData,
		},
		revalidate: 10,
	};
};
