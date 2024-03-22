import React from 'react';
import { Translations } from '../types/common';
import { Education } from '../types/education';
import { getYear } from '../utils/date';
import Title from './Title';

interface EducationProp {
	education: Education[];
	translations: Translations;
}

const EducationSection: React.FC<EducationProp> = ({
	education,
	translations,
}) => {
	return (
		<section>
			<Title text={translations.education.title} />
			<div className="grid grid-cols-1 gap-4">
				{education.map((item: Education) => (
					<div className="card" key={item.id}>
						<p className="text-label">{item.title}</p>
						<p className="text-meta">
							{getYear(item.period.startDate)} -{' '}
							{item.period.endDate !== null
								? getYear(item.period.endDate)
								: translations.date.now}
						</p>
						<p className="text-description">
							{item.entity.name} ({item.entity.location.country})
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default EducationSection;
