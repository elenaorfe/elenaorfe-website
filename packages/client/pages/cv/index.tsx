import { useMemo } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import EducationSection from '../../components/EducationCV';
import HeaderCV from '../../components/HeaderCV';
import LanguageCV from '../../components/LanguagesCV';
import SideExperience from '../../components/SideExperienceCV';
import Skills from '../../components/SkillsCV';
import WorkExperience from '../../components/WorkExperienceCV';
import aboutDataEN from '../../data/en/about.json';
import aboutDataES from '../../data/es/about.json';
import contactDataEN from '../../data/en/contact.json';
import contactDataES from '../../data/es/contact.json';
import experienceDataEN from '../../data/en/experience.json';
import experienceDataES from '../../data/es/experience.json';
import educationDataEN from '../../data/en/education.json';
import educationDataES from '../../data/es/education.json';
import languageDataEN from '../../data/en/language.json';
import languageDataES from '../../data/es/language.json';
import { LocalizedAbout } from '../../types/about';
import { LocalizedContact } from '../../types/contact';
import { Lang } from '../../types/common';
import { LocalizedEducation } from '../../types/education';
import { LocalizedLanguage } from '../../types/languages';
import { LocalizedExperience } from '../../types/experience';
import translationsEN from '../../i18n/en.json';
import translationsES from '../../i18n/es.json';

interface CVProps {
	aboutData: LocalizedAbout;
	contactData: LocalizedContact;
	educationData: LocalizedEducation;
	experiencesData: LocalizedExperience;
	languageData: LocalizedLanguage;
}

const CV: NextPage<CVProps> = ({
	aboutData,
	contactData,
	educationData,
	experiencesData,
	languageData,
}: CVProps) => {
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);
	const translations = currentLocale === 'es' ? translationsES : translationsEN;

	return (
		<div className="container mx-auto my-4">
			<HeaderCV
				about={aboutData[currentLocale]}
				contact={contactData[currentLocale]}
				workExperiences={experiencesData[currentLocale].filter(
					(experience) => experience.type === 'professional',
				)}
			/>
			<div className="flex gap-6">
				<div>
					<WorkExperience
						workExperiences={experiencesData[currentLocale].filter(
							(experience) => experience.type === 'professional',
						)}
						translations={translations}
					/>
				</div>
				<div className="w-3/4">
					<SideExperience
						sideExperiences={
							experiencesData[currentLocale].filter(
								(experience) => experience.type === 'side',
							)[0]
						}
						translations={translations}
					/>
					<Skills translations={translations} />
					<EducationSection
						education={educationData[currentLocale]}
						translations={translations}
					/>
					<LanguageCV
						languages={languageData[currentLocale]}
						translations={translations}
					/>
				</div>
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps<CVProps> = async () => {
	return {
		props: {
			aboutData: { en: aboutDataEN, es: aboutDataES },
			contactData: { en: contactDataEN, es: contactDataES },
			educationData: { en: educationDataEN, es: educationDataES },
			experiencesData: { en: experienceDataEN, es: experienceDataES },
			languageData: { en: languageDataEN, es: languageDataES },
		},
		revalidate: 10,
	};
};

export default CV;
