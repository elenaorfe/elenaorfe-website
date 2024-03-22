import experiencesDataEN from '../data/en/experience.json';
import skillTypes from '../data/en/skills.json';
import { Skill } from '../types/common';
import { Experience, Project } from '../types/experience';
import { Chart } from '../types/skill';
import { getMonthsBetween, getYearsBetween } from './date';

export const generateSkills = (): any => {
	let skills: Chart[] = [];

	const updateSkillsArray = (
		skillsArray: Chart[],
		skill: Skill,
		weight: number,
	): Chart[] => {
		const { name, type } = skill;
		// Check if the name already exists in the array
		const existingSkill = skillsArray.find((skill: any) => skill.name === name);

		if (existingSkill === null || existingSkill === undefined) {
			const color =
				type === 'frontend'
					? '#55b1a5'
					: type === 'style' || type === 'accessibility'
						? '#77c1b7'
						: type === 'backend' || type === 'runtime'
							? '#92cdc5'
							: type === 'cms'
								? '#a8d7d1'
								: '#b9dfda';
			skillsArray.push({
				name,
				weight,
				color,
			});
		} else {
			existingSkill.weight += weight;
		}

		return skillsArray;
	};

	const calculateDurationInMonths = (project: Project): number => {
		const startDate = new Date(project.period.startDate);
		const endDate =
			project.period.endDate === null
				? new Date()
				: new Date(project.period.endDate);

		const startYear = startDate.getFullYear();
		const startMonth = startDate.getMonth();

		const endYear = endDate.getFullYear();
		const endMonth = endDate.getMonth();

		return (endYear - startYear) * 12 + (endMonth - startMonth);
	};

	experiencesDataEN.forEach((experience) =>
		experience.projects.forEach((project: Project) => {
			const durationInMonths = calculateDurationInMonths(project);
			project.skills.forEach((skill: Skill) => {
				if (skill.interest !== 'low' && durationInMonths !== undefined) {
					skills = updateSkillsArray(skills, skill, durationInMonths);
				}
			});
		}),
	);

	// Filter out undefined values and get the minimum and maximum of propertyName
	const filteredArray = skills.filter((skill) => skill.weight !== undefined);
	const minWeight = Math.min(...filteredArray.map((skill) => skill.weight));
	const maxWeight = Math.max(...filteredArray.map((skill) => skill.weight));

	// Calculate thresholds for each font size group
	const threshold1 = minWeight + (maxWeight - minWeight) / 3;
	const threshold2 = minWeight + (2 * (maxWeight - minWeight)) / 3;

	// Assign font sizes based on the groups
	// Assign color based on SkillType
	skills.forEach((skill) => {
		if (skill.weight !== undefined) {
			if (skill.weight <= threshold1) {
				skill.fontSize = 10;
			} else if (skill.weight <= threshold2) {
				skill.fontSize = 12;
			} else {
				skill.fontSize = 14;
			}
		} else {
			skill.fontSize = 0;
		}
	});

	return {
		name: 'skills',
		children: skills,
	};
};

const updateGroupedSkills = (skills: any, skill: any): any => {
	if (skill.interest !== 'low') {
		if (skills[skill.type] === undefined) {
			skills[skill.type] = [skill.name];
		} else {
			const existingSkill = skills[skill.type].find(
				(existingSkill: any) => existingSkill === skill.name,
			);
			if (existingSkill === undefined) {
				skills[skill.type].push(skill.name);
			}
		}
	}
	return skills;
};

export const generateGroupedSkills = (): { [key: string]: string[] } => {
	let skills: { [key: string]: string[] } = {} as any;

	experiencesDataEN.forEach((workExperience) =>
		workExperience.projects.forEach((project: Project) => {
			project.skills.forEach((skill: Skill) => {
				skills = updateGroupedSkills(skills, skill);
			});
		}),
	);

	return skills;
};

export const getYearsOfExperience = (): number => {
	const startWorkingDate = new Date(
		Math.min(
			...experiencesDataEN
				.filter((experience: Experience) => experience.type === 'professional')
				.map((experience: Experience) =>
					new Date(experience.period.startDate).getTime(),
				),
		),
	);

	return getYearsBetween(startWorkingDate.toDateString());
};

export const getYearsOfExperienceBySkill = (skillName: string): number => {
	// Const find if another skill is related to the same skill
	const relatedSkillsName = skillTypes
		.filter((skillType) => skillType.relatesTo?.includes(skillName))
		.map((skillType) => skillType.id);

	let monthsOfExperice = 0;
	experiencesDataEN.forEach((experience) => {
		experience.projects.forEach((project: Project) => {
			const projectWithSkill = project.skills.find(
				(skill) =>
					skill.id === skillName || relatedSkillsName.includes(skill.id),
			);
			if (projectWithSkill !== undefined) {
				monthsOfExperice += getMonthsBetween(
					project.period.startDate,
					project.period.endDate ?? undefined,
				);
			}
		});
	});
	return Math.round(monthsOfExperice / 12);
};
