import React from 'react';
import { Translations } from '../types/common';
import { Language } from '../types/languages';
import Card from './Card';
import Title from './Title';

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
					<Card key={language.id}>
						<div className="p-4">
							<p className="text-base text-slate-900 dark:text-slate-100">
								{language.name}
							</p>
							<p className="text-sm text-slate-500">{language.proficiency}</p>
						</div>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Languages;
