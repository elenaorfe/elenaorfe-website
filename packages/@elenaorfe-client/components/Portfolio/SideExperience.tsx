import { Icon } from '@iconify/react';
import React from 'react';
import { Translations } from '../../types/common';
import { Experience } from '../../types/experience';
import { getYear } from '../../utils/date';
import Card from '../Card';
import Title from '../Title';

type SideExperiencesProps = {
	sideExperiences: Experience;
	translations: Translations;
};

const SideExperience = (props: SideExperiencesProps): React.JSX.Element => {
	const { sideExperiences, translations } = props;

	return (
		<section className="mb-8">
			<Title text={translations.sideExperience.title} />
			<div className="grid-cols-2 gap-8 space-y-4 md:grid md:space-y-0">
				{sideExperiences.projects.map((project) => (
					<Card key={project.id}>
						<div className="flex h-full flex-col p-4">
							<div>
								<h3 className="text-center font-semibold">{project.name}</h3>
								<div className="flex items-center justify-center gap-2">
									<p className="text-center text-sm text-slate-500">
										{getYear(project.period.startDate)}
									</p>
									{project.url !== null && (
										<a
											href={project.url}
											target="_blank"
											rel="noreferrer"
											className="text-persian-green-600 text-sm"
											aria-label={`Visit ${project.name}'s project (opens in a new window)`}
										>
											<Icon icon="mdi:external-link" width={16} height={16} />
										</a>
									)}
								</div>
							</div>
							<div className="flex h-full flex-col justify-between">
								<p className="break-after-column hyphens-auto text-justify">
									{project.description.details}
								</p>
								<div className="mt-4 flex flex-wrap">
									{project.skills?.map((skill, skillIndex) => (
										<div
											className="text-xs text-slate-500"
											key={`personalProject-skill-${skillIndex}`}
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
						</div>
					</Card>
				))}
			</div>
		</section>
	);
};

export default SideExperience;
