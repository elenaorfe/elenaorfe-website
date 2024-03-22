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
	isCompact?: boolean;
}

const ExperienceTile: React.FC<ExperienceTileProps> = ({
	showGeneralExperience = true,
	skillIds,
	isCompact = false,
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
			<Icon
				icon={icon}
				className={
					isCompact
						? 'text-xs text-gray-400 md:text-sm'
						: 'text-xl text-[--color-text-shade-01]'
				}
			/>
			<div className="text-center">
				<p
					className={`leading-3 ${isCompact ? 'text-xs text-gray-400 md:text-sm' : 'font-bold'}`}
				>
					+{years}
				</p>
				{!isCompact && (
					<p className="line-clamp-1 text-xs text-gray-400">
						{translations.date.years}
					</p>
				)}
			</div>
		</div>
	);

	return (
		<div className={`flex gap-2 ${isCompact ? 'my-1' : 'my-4 md:gap-4'}`}>
			{showGeneralExperience && (
				<Card key="experience-tile-general" hasShadow={!isCompact}>
					<CardContent
						icon="mdi:clock-time-three-outline"
						years={getYearsOfExperience()}
					/>
				</Card>
			)}
			{skills.map((skill) => (
				<Card key={`skill-${skill.name}`} hasShadow={!isCompact}>
					<CardContent
						icon={skill.icon}
						years={getYearsOfExperienceBySkill(skill.id)}
					/>
				</Card>
			))}
		</div>
	);
};

export default ExperienceTile;
