import React from 'react';
import { generateGroupedSkills } from '../utils/skills';
import SectionTitle from './TitleCV';
import BaseText from './Typography/BaseText';
import BoldText from './Typography/BoldText';

interface SkillsCVProps {
	translations: any;
}

const SkillsCV: React.FC<SkillsCVProps> = ({ translations }) => {
	const groupedSkills = generateGroupedSkills();

	return (
		<section className="w-full">
			<SectionTitle text={translations.skills.title}></SectionTitle>
			<div className="leading-3">
				{Object.keys(generateGroupedSkills()).map((skillGroup, index) => {
					return (
						<React.Fragment key={skillGroup}>
							<BoldText
								text={skillGroup}
								style={`capitalize ${index === 0 ? '' : 'ml-1'}`}
							/>
							{groupedSkills[skillGroup].map((skill: string) => (
								<BaseText text={` · ${skill}`} key={`skill-${skill}`} />
							))}
						</React.Fragment>
					);
				})}
			</div>
		</section>
	);
};

export default SkillsCV;
