import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Lang } from '../types/common';
import { LocalizedEducation } from '../types/education';
import Title from './Title';

interface EducationProp {
	education: LocalizedEducation;
}

const Education = ({ education }: EducationProp): JSX.Element => {
	const { locale } = useRouter();

	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

	return (
		<section>
			<Title text={education[currentLocale]?.title} />
			<div className="grid grid-cols-1 gap-4">
				{education[currentLocale]?.items?.map((item) => (
					<div className="card" key={item.id}>
						<p className="text-label">{item.title}</p>
						<p className="text-meta">{item.date}</p>
						<p className="text-description">{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;
