import React from 'react';
import { generateGroupedSkills } from '../utils/skills';
import SectionTitle from './TitleCV';
import BaseText from './Typography/BaseText';
import BoldText from './Typography/BoldText';
import { SkillType } from '../types/skill';

interface SkillsCVProps {
	skills: { title: string };
}

const SkillsCV: React.FC<SkillsCVProps> = ({ skills }) => {
	const groupedSkills = generateGroupedSkills();

	return (
		<section className="w-full">
			<SectionTitle text={skills.title}></SectionTitle>
			<div className="leading-3">
				{Object.keys(generateGroupedSkills()).map((skillGroup, index) => {
					return (
						<React.Fragment key={skillGroup}>
							<BoldText
								text={skillGroup}
								style={`capitalize ${index === 0 ? '' : 'ml-1'}`}
							/>
							{groupedSkills[skillGroup as SkillType].map((skill: string) => (
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
