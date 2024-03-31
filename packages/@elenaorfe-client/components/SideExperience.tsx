import React from 'react';
import { Translations } from '../types/common';
import { Experience } from '../types/experience';
import { getYear } from '../utils/date';
import Card from './Card';
import Title from './Title';

interface SideExperiencesProps {
	sideExperiences: Experience;
	translations: Translations;
}

const SideExperience: React.FC<SideExperiencesProps> = ({
	sideExperiences,
	translations,
}) => {
	return (
		<section className="mb-8">
			<Title text={translations.sideExperience.title} />
			<div className="grid-cols-2 gap-8 space-y-4 md:grid md:space-y-0">
				{sideExperiences.projects.map((project) => (
					<Card key={project.id}>
						<div className="flex flex-col p-4">
							<div>
								<h2 className="text-center font-semibold">{project.name}</h2>
								<p className="text-center text-sm text-slate-500">
									{getYear(project.period.startDate)}
								</p>
							</div>
							<div className="flex h-full flex-col justify-between">
								<p className="break-after-column hyphens-auto text-justify">
									{project.description.details}
								</p>
								<div>
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
									{project.url !== null && (
										<a
											href={project.url}
											target="_blank"
											rel="noreferrer"
											className="text-primary-600 mt-4 flex justify-center gap-4 text-xs"
											aria-label={`Visit ${project.name}'s project (opens in a new window)`}
										>
											{project.url}
										</a>
									)}
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
