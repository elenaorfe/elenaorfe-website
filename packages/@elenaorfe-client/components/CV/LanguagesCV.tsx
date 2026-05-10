import { Translations } from '../../types/common';
import { Language } from '../../types/languages';
import BaseText from '../Typography/BaseText';
import MetaText from '../Typography/MetaText';
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
				<div key={language.id} className="flex justify-between gap-2">
					<BaseText text={language.name} />
					<MetaText text={language.proficiency} />
				</div>
			))}
		</section>
	);
};

export default LanguageCV;
