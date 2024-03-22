import { Icon } from '@iconify/react';
import React from 'react';
import skillData from '../data/en/skills.json';
import translations from '../i18n/en.json';
import {
	getYearsOfExperience,
	getYearsOfExperienceBySkill,
} from '../utils/skills';
import Card from './Card';

interface ExperienceTileProps {
	showGeneralExperience: boolean;
	skillIds: string[];
}

const ExperienceTile: React.FC<ExperienceTileProps> = ({
	showGeneralExperience = true,
	skillIds,
}) => {
	const skills = skillIds
		.map((skillId) => skillData.find((skill) => skill.id === skillId))
		.filter((skill) => skill !== undefined) as Array<{
		id: string;
		name: string;
		icon: string;
	}>;

	const CardContent: React.FC<{
		icon: string;
		years: number;
	}> = ({ icon, years }) => (
		<div className="flex items-center gap-1 p-2">
			<Icon icon={icon} className="text-xl" />
			<div className="text-center">
				<p className="font-bold leading-3">+{years}</p>
				<p className="line-clamp-1 text-xs text-gray-400">
					{translations.date.years}
				</p>
			</div>
		</div>
	);

	return (
		<div className="my-4 flex gap-2 md:gap-4">
			{showGeneralExperience && (
				<Card key="experience-tile-general">
					<CardContent
						icon="mdi:clock-time-three-outline"
						years={getYearsOfExperience()}
					/>
				</Card>
			)}
			{skills.map((skill) => (
				<Card key={`skill-${skill.name}`}>
					<div className="flex items-center gap-1 p-2">
						<Icon icon={skill.icon} className="text-xl" />
						<div className="text-center">
							<p className="font-bold leading-3">
								+{getYearsOfExperienceBySkill(skill.id)}
							</p>
							<p className="line-clamp-1 text-xs text-gray-400">
								{translations.date.years}
							</p>
						</div>
					</div>
				</Card>
			))}
		</div>
	);
};

export default ExperienceTile;
