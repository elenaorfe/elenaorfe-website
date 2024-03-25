import React from 'react';
import { Translations } from '../types/common';
import { Education } from '../types/education';
import { getYear } from '../utils/date';
import Card from './Card';
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
					<Card key={item.id}>
						<div className="p-4">
							<p className="text-base text-[--color-text-base]">{item.title}</p>
							<p className="text-xs text-[--color-text-muted]">
								{getYear(item.period.startDate)} -{' '}
								{item.period.endDate !== null
									? getYear(item.period.endDate)
									: translations.date.now}
							</p>
							<p className="text-sm text-[--color-text-muted]">
								{item.entity.name} ({item.entity.location.country})
							</p>
						</div>
					</Card>
				))}
			</div>
		</section>
	);
};

export default EducationSection;
