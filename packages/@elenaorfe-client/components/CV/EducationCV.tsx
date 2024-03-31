import React from 'react';
import { Translations } from '../../types/common';
import { Education } from '../../types/education';
import { getYear } from '../../utils/date';
import BaseText from '../Typography/BaseText';
import BoldText from '../Typography/BoldText';
import MetaText from '../Typography/MetaText';
import SectionTitle from './TitleCV';

type EducationCVProps = {
	education: Education[];
	translations: Translations;
};

const EducationCV = (props: EducationCVProps): React.JSX.Element => {
	const { education, translations } = props;

	return (
		<section className="w-full">
			<SectionTitle text={translations.education.title}></SectionTitle>
			{education.map((item, index) => (
				<div
					key={item.id}
					className={`leading-3 ${index < education.length - 1 ? 'mb-2' : ''}`}
				>
					<div className="flex justify-between gap-2">
						<BoldText text={item.title} style="flex-1" />
						<MetaText
							text={`${getYear(item.period.startDate).toString()}-${
								item.period.endDate !== null
									? getYear(item.period.endDate).toString()
									: (translations.date.now as string)
							}`}
							style="flex-none my-auto"
						/>
					</div>
					<BaseText text={item.entity.location.city} />
				</div>
			))}
		</section>
	);
};

export default EducationCV;
