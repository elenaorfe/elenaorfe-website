import { Translations } from '../../types/common';
import { Language } from '../../types/languages';
import HorizontalProgressBar from '../HorizontalProgressBar';
import SectionTitle from './TitleCV';

type LanguageCVProps = {
	languages: Language[];
	translations: Translations;
};

const LanguageCV = (props: LanguageCVProps): React.JSX.Element => {
	const { languages, translations } = props;

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
