import Image from 'next/image';
import React from 'react';
import { Lang, Translations } from '../../types/common';
import { Experience } from '../../types/experience';
import { formatDate, formatJoinDate } from '../../utils/date';
import Card from '../Card';
import Title from '../Title';

type WorkExperienceProps = {
	workExperiences: Experience[];
	translations: Translations;
	language: Lang;
};

const WorkExperience = (props: WorkExperienceProps): React.JSX.Element => {
	const { workExperiences, translations, language } = props;

	const getDuration = (
		startDate: string,
		endDate: string | null,
		language: Lang,
	): string => {
		// Get the days between two dates
		const start = new Date(startDate);
		const end = endDate === null ? new Date() : new Date(endDate);
		const diff = Math.abs(end.getTime() - start.getTime());
		const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
		// Get the months between two dates
		const months = Math.floor(days / 30);
		// Get the years and months
		const years = Math.floor(months / 12);
		const remainingMonths = months % 12;
		// Create the duration string
		let duration = '';
		if (years > 0) {
			duration += `${years} ${
				years > 1
					? (translations.date.years as string)
					: (translations.date.year as string)
			}`;
		}
		if (years > 0 && remainingMonths > 0) {
			duration += ` ${translations.date.join as string} `;
		}
		if (remainingMonths > 0) {
			duration += `${remainingMonths} ${
				remainingMonths > 1
					? (translations.date.months as string)
					: (translations.date.month as string)
			}`;
		}
		if (duration === '') {
			duration = formatJoinDate(startDate, language);
		}
		return duration;
	};

	return (
		<section className="mb-8">
			<Title text={translations.workExperience.title} />
			{workExperiences.map((workExperience) => (
				<Card key={workExperience.id}>
					<div className="my-4 p-4">
						{workExperience.company !== null && (
							<div className="flex gap-4">
								<div className="my-auto flex h-4 w-4 items-center justify-center rounded-full lg:h-8 lg:w-8">
									<Image
										src={`/assets/img/${workExperience.company.logo}`}
										alt=""
										width={200}
										height={200}
										sizes="(min-width: 640px) 3vw, (min-width: 768px) 2vw, (min-width: 1024px) 3vw, 2vw"
									/>
								</div>
								<div>
									<h2 className="text-lg font-semibold">
										{workExperience.company.name}
									</h2>
									<p className="text-xs text-slate-500">
										{formatDate(workExperience.period.startDate)} -{' '}
										{workExperience.period.endDate === null
											? (translations.date.now as string)
											: formatDate(workExperience.period.endDate)}
									</p>
								</div>
							</div>
						)}
						<div>
							{workExperience.projects.map((project, projectIndex) => (
								<div
									key={project.id}
									className={
										projectIndex < workExperience.projects.length - 1
											? 'border-b border-gray-200 py-4'
											: 'pt-4'
									}
								>
									<p className="font-semibold">{project.name}</p>
									<div className="flex space-x-2">
										<div>
											<p className="text-sm text-slate-500">{project.role}</p>
											<div className="flex flex-row">
												<p className="mb-2 text-xs text-slate-500">
													{getDuration(
														project.period.startDate,
														project.period.endDate,
														language,
													)}
												</p>
												<p className="mx-2 text-xs text-slate-500" aria-hidden>
													•
												</p>
												<p className="mb-2 text-xs text-slate-500">
													{project.location}
												</p>
											</div>
										</div>
									</div>
									<ul className="mb-2">
										{project.description.details?.map(
											(achievement, achievementIndex) => (
												<li key={`achievement-${achievementIndex}`}>
													<span className="ml-1">- {achievement}</span>
												</li>
											),
										)}
									</ul>
									<div className="flex flex-wrap">
										{project.skills?.map((skill, skillIndex) => (
											<div
												className="text-xs text-slate-500"
												key={`project-${project.id}-skill-${skillIndex}`}
											>
												<span>{skill.name}</span>
												{skillIndex < project.skills.length - 1 && (
													<span className="mx-1" aria-hidden>
														•
													</span>
												)}
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</Card>
			))}
		</section>
	);
};

export default WorkExperience;
