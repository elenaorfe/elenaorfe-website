import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import EducationSection from '../../components/CV/EducationCV';
import HeaderCV from '../../components/CV/HeaderCV';
import LanguageCV from '../../components/CV/LanguagesCV';
import SideExperience from '../../components/CV/SideExperienceCV';
import WorkExperience from '../../components/CV/WorkExperienceCV';
import aboutDataEN from '../../data/en/about.json';
import contactDataEN from '../../data/en/contact.json';
import educationDataEN from '../../data/en/education.json';
import experienceDataEN from '../../data/en/experience.json';
import languageDataEN from '../../data/en/language.json';
import aboutDataES from '../../data/es/about.json';
import contactDataES from '../../data/es/contact.json';
import educationDataES from '../../data/es/education.json';
import experienceDataES from '../../data/es/experience.json';
import languageDataES from '../../data/es/language.json';
import translationsEN from '../../i18n/en.json';
import translationsES from '../../i18n/es.json';
import { LocalizedAbout } from '../../types/about';
import { Lang } from '../../types/common';
import { LocalizedContact } from '../../types/contact';
import { LocalizedEducation } from '../../types/education';
import { LocalizedExperience } from '../../types/experience';
import { LocalizedLanguage } from '../../types/languages';

type CVProps = {
	aboutData: LocalizedAbout;
	contactData: LocalizedContact;
	educationData: LocalizedEducation;
	experiencesData: LocalizedExperience;
	languageData: LocalizedLanguage;
};

const CV = (props: CVProps): React.JSX.Element => {
	const {
		aboutData,
		contactData,
		educationData,
		experiencesData,
		languageData,
	} = props;
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
			<WorkExperience
				workExperiences={experiencesData[currentLocale].filter(
					(experience) => experience.type === 'professional',
				)}
				translations={translations}
			/>
			<div className="flex gap-6">
				<div className="w-1/2">
					<SideExperience
						sideExperiences={
							experiencesData[currentLocale].filter(
								(experience) => experience.type === 'side',
							)[0]
						}
						translations={translations}
					/>
				</div>
				<div className="w-1/2">
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
