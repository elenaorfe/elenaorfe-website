import React from 'react';
import SectionTitle from './TitleCV';
import BaseText from './Typography/BaseText';
import BoldText from './Typography/BoldText';
import MetaText from './Typography/MetaText';
import { Education } from '../types/education';

interface EducationCVProps {
	education: Education;
}

const EducationCV: React.FC<EducationCVProps> = ({ education }) => {
	return (
		<section className="w-full">
			<SectionTitle text={education.title}></SectionTitle>
			{education.items.map((item, index) => (
				<div
					key={item.id}
					className={`leading-3 ${
						index < education.items.length - 1 ? 'mb-2' : ''
					}`}
				>
					<div className="flex justify-between gap-2">
						<BoldText text={item.title} />
						<MetaText text={item.date} />
					</div>
					<BaseText text={item.description} />
				</div>
			))}
		</section>
	);
};

export default EducationCV;
