import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Lang } from '../types/common';
import { LocalizedLanguage } from '../types/languages';
import Title from './Title';

type LanguagesProps = {
	languages: LocalizedLanguage;
};

const Languages = ({ languages }: LanguagesProps) => {
	const { locale } = useRouter();

	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

	return (
		<section>
			<Title text={languages[currentLocale]?.title} />
			<div className="lg:grid lg:grid-cols-3 space-y-4 lg:space-y-0 gap-4">
				{languages[currentLocale]?.items?.map((item) => (
					<div className="card" key={item.id}>
						<p className="text-label">{item.name}</p>
						<p className="text-description">{item.level}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Languages;
