import { Language } from '../types/languages';
import HorizontalProgressBar from './HorizontalProgressBar';
import SectionTitle from './TitleCV';

interface LanguageCVProps {
	languages: Language;
}

const LanguageCV: React.FC<LanguageCVProps> = ({ languages }) => {
	return (
		<section className="w-full">
			<SectionTitle text={languages.title}></SectionTitle>
			{languages.items.map((language) => (
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
