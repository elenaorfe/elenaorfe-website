import React from 'react';
import { Education } from '../types/education';
import Title from './Title';
import { getYear } from '../utils/date';

interface EducationProp {
	education: Education[];
	translations: any;
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
