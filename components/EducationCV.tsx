import React from 'react';
import SectionTitle from './TitleCV';
import BaseText from './Typography/BaseText';
import BoldText from './Typography/BoldText';
import MetaText from './Typography/MetaText';
import { Education } from '../types/education';
import { getYear } from '../utils/date';

interface EducationCVProps {
	education: Education[];
	translations: any;
}

const EducationCV: React.FC<EducationCVProps> = ({
	education,
	translations,
}) => {
	return (
		<section className="w-full">
			<SectionTitle text={translations.education.title}></SectionTitle>
			{education.map((item, index) => (
				<div
					key={item.id}
					className={`leading-3 ${index < education.length - 1 ? 'mb-2' : ''}`}
				>
					<div className="flex justify-between gap-2">
						<BoldText text={item.title} />
						<MetaText
							text={`${getYear(item.period.startDate).toString()}-${
								item.period.endDate !== null
									? getYear(item.period.endDate).toString()
									: (translations.date.now as string)
							}`}
						/>
					</div>
					<BaseText text={item.entity.location.city} />
				</div>
			))}
		</section>
	);
};

export default EducationCV;
