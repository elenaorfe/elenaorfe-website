import React from 'react';
import { Language } from '../types/languages';
import Title from './Title';

interface LanguagesProps {
	languages: Language[];
	translations: any;
}

const Languages: React.FC<LanguagesProps> = ({ languages, translations }) => {
	return (
		<section>
			<Title text={translations.language.title} />
			<div className="lg:grid lg:grid-cols-3 space-y-4 lg:space-y-0 gap-4 mb-8">
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
