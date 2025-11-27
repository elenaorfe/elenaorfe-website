import React from 'react';
import { Translations } from '../../types/common';
import { Language } from '../../types/languages';
import Title from '../Title';

type LanguagesProps = {
	languages: Language[];
	translations: Translations;
};

const Languages = (props: LanguagesProps): React.JSX.Element => {
	const { languages, translations } = props;

	return (
		<section>
			<Title text={translations.language.title} />
			<ul className="mb-8 gap-4 space-y-4 lg:grid lg:grid-cols-3 lg:space-y-0">
				{languages.map((language) => (
					<li key={language.id} className="card p-4">
						<p className="text-base text-slate-900 dark:text-slate-100">
							{language.name}
						</p>
						<p className="text-sm text-slate-500">{language.proficiency}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Languages;
