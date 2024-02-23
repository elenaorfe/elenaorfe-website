import { useMemo } from 'react';
import { GetStaticProps, NextPage } from 'next';
import Script from 'next/script';
import { useRouter } from 'next/router';
import EducationSection from '../../components/EducationCV';
import HeaderCV from '../../components/HeaderCV';
import LanguageCV from '../../components/LanguagesCV';
import SideExperience from '../../components/SideExperienceCV';
import Skills from '../../components/SkillsCV';
import WorkExperience from '../../components/WorkExperienceCV';
import aboutData from '../../data/about';
import educationData from '../../data/education';
import headerData from '../../data/header';
import skillData from '../../data/skill';
import languageData from '../../data/language';
import personalProjectData from '../../data/personalProject';
import workExperienceData from '../../data/workExperience';
import { LocalizedAbout } from '../../types/about';
import { LocalizedHeader } from '../../types/contact';
import { Lang } from '../../types/common';
import { LocalizedEducation } from '../../types/education';
import { LocalizedLanguage } from '../../types/languages';
import { LocalizedPersonalProject } from '../../types/personalProject';
import { LocalizedSkill } from '../../types/skill';
import { LocalizedWorkExperience } from '../../types/workExperience';

interface CVProps {
	about: LocalizedAbout;
	contact: LocalizedHeader;
	workExperience: LocalizedWorkExperience;
	personalExperience: LocalizedPersonalProject;
	languages: LocalizedLanguage;
	skills: LocalizedSkill;
	education: LocalizedEducation;
}

const CV: NextPage<CVProps> = ({
	about,
	contact,
	workExperience,
	personalExperience,
	languages,
	skills,
	education,
}: CVProps) => {
	const { locale } = useRouter();

	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

	return (
		<div className="container mx-auto my-4">
			<HeaderCV about={about[currentLocale]} contact={contact[currentLocale]} />
			<div className="flex gap-6">
				<div>
					<WorkExperience workExperience={workExperience[currentLocale]} />
				</div>
				<div className="w-3/4">
					<SideExperience sideExperience={personalExperience[currentLocale]} />
					<Skills skills={skills[currentLocale]} />
					<EducationSection education={education[currentLocale]} />
					<LanguageCV languages={languages[currentLocale]} />
				</div>
			</div>
			<Script
				type="module"
				src="https://unpkg.com/ionicons@latest/dist/ionicons.js"
			/>
		</div>
	);
};

export const getStaticProps: GetStaticProps<CVProps> = async () => {
	return {
		props: {
			about: aboutData,
			contact: headerData,
			workExperience: workExperienceData,
			personalExperience: personalProjectData,
			languages: languageData,
			skills: skillData,
			education: educationData,
		},
		revalidate: 10,
	};
};

export default CV;
