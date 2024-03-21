import React from 'react';
import { Language } from '../types/languages';
import Title from './Title';
import { Translations } from '../types/common';

interface LanguagesProps {
	languages: Language[];
	translations: Translations;
}

const Languages: React.FC<LanguagesProps> = ({ languages, translations }) => {
	return (
		<section>
			<Title text={translations.language.title} />
			<div className="mb-8 gap-4 space-y-4 lg:grid lg:grid-cols-3 lg:space-y-0">
				{languages.map((language) => (
					<div className="card" key={language.id}>
						<p className="text-label">{language.name}</p>
						<p className="text-description">{language.proficiency}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Languages;
