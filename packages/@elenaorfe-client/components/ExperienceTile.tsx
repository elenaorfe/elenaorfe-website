import { Icon } from '@iconify/react';
import React from 'react';
import skillData from '../data/en/skills.json';
import translations from '../i18n/en.json';
import {
	getYearsOfExperience,
	getYearsOfExperienceBySkill,
} from '../utils/skills';
import Card from './Card';

type ExperienceTileProps = {
	showGeneralExperience: boolean;
	skillIds: string[];
	isCompact?: boolean;
};

type CardContentProps = {
	icon: string;
	years: number;
};

const ExperienceTile = (props: ExperienceTileProps): React.JSX.Element => {
	const { showGeneralExperience = true, skillIds, isCompact = false } = props;
	const skills = skillIds
		.map((skillId) => skillData.find((skill) => skill.id === skillId))
		.filter((skill) => skill !== undefined) as Array<{
		id: string;
		name: string;
		icon: string;
	}>;

	const CardContent = ({
		icon,
		years,
	}: CardContentProps): React.JSX.Element => (
		<div
			className={`flex items-center gap-1 ${isCompact ? 'px-2 py-1' : 'px-2 py-1 md:p-2'}`}
		>
			<Icon
				icon={icon}
				className={
					isCompact
						? 'text-xs text-gray-400 md:text-sm'
						: 'text-xs text-slate-900 md:text-xl dark:text-slate-100'
				}
			/>
			<div className="text-center">
				<p
					className={`leading-3 ${isCompact ? 'text-xs text-gray-400 md:text-sm' : 'text-xs font-semibold md:text-[1rem]'}`}
				>
					{years}+
				</p>
				{!isCompact && (
					<p className="line-clamp-1 hidden text-xs text-gray-400 md:block">
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
