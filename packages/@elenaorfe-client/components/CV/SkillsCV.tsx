import React from 'react';
import { Translations } from '../../types/common';
import { generateGroupedSkills } from '../../utils/skills';
import BaseText from '../Typography/BaseText';
import BoldText from '../Typography/BoldText';
import SectionTitle from './TitleCV';

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
							{index > 0 && <BaseText style="text-gray-500" text=" • " />}
							<BoldText style="capitalize" text={skillGroup} />
							<BaseText style="text-gray-500" text=" • " />
							<BaseText
								style="text-gray-500"
								text={groupedSkills[skillGroup]
									.sort((a, b) => a.localeCompare(b))
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
