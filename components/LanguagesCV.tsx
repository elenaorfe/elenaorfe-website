import { Language } from '../types/languages';
import HorizontalProgressBar from './HorizontalProgressBar';
import SectionTitle from './TitleCV';

interface LanguageCVProps {
	languages: Language[];
	translations: any;
}

const LanguageCV: React.FC<LanguageCVProps> = ({ languages, translations }) => {
	return (
		<section className="w-full">
			<SectionTitle text={translations.language.title}></SectionTitle>
			{languages.map((language) => (
				<HorizontalProgressBar
					label={language.name}
					level={language.level}
					key={language.id}
				/>
			))}
		</section>
	);
};

export default LanguageCV;
