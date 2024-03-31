import React from 'react';
import { Translations } from '../types/common';
import { generateGroupedSkills } from '../utils/skills';
import SectionTitle from './TitleCV';
import BaseText from './Typography/BaseText';
import BoldText from './Typography/BoldText';

type SkillsCVProps = {
	translations: Translations;
};

const SkillsCV = (props: SkillsCVProps): React.JSX.Element => {
	const { translations } = props;
	const groupedSkills = generateGroupedSkills();

	return (
		<section className="w-full">
			<SectionTitle text={translations.skills.title}></SectionTitle>
			<div className="leading-3">
				{Object.keys(generateGroupedSkills()).map((skillGroup, index) => {
					return (
						<React.Fragment key={skillGroup}>
							{index > 0 && <BaseText text=" • " />}
							<BoldText text={skillGroup} style="capitalize" />
							<BaseText text=" • " />
							<BaseText
								text={groupedSkills[skillGroup]
									.map((skill) => skill)
									.join(' • ')}
							/>
						</React.Fragment>
					);
				})}
			</div>
		</section>
	);
};

export default SkillsCV;
