import React from 'react';
import { Translations } from '../../types/common';
import { Education } from '../../types/education';
import { getYear } from '../../utils/date';
import Title from '../Title';

type EducationProp = {
	education: Education[];
	translations: Translations;
};

const EducationSection = (props: EducationProp): React.JSX.Element => {
	const { education, translations } = props;

	return (
		<section>
			<Title text={translations.education.title} />
			<ul className="grid grid-cols-1 gap-4">
				{education.map((item: Education) => (
					<li key={item.id} className="card p-4">
						<p className="text-base text-slate-900 dark:text-slate-100">
							{item.title}
						</p>
						<p className="text-xs text-slate-500">
							{getYear(item.period.startDate)} -{' '}
							{item.period.endDate !== null
								? getYear(item.period.endDate)
								: translations.date.now}
						</p>
						<p className="text-sm text-slate-500">
							{item.entity.name} ({item.entity.location.country})
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default EducationSection;
