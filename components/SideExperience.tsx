import React from 'react';
import Title from './Title';
import { Experience } from '../types/experience';
import { getYear } from '../utils/date';

interface SideExperiencesProps {
	sideExperiences: Experience;
	translations: any;
}

const SideExperience: React.FC<SideExperiencesProps> = ({
	sideExperiences,
	translations,
}) => {
	return (
		<section className="mb-8">
			<Title text={translations.sideExperience.title} />
			<div className="md:grid grid-cols-2 space-y-8 md:space-y-0 gap-8">
				{sideExperiences.projects.map((project) => (
					<div className="card flex flex-col" key={project.id}>
						<div>
							<h2 className="font-bold text-center">{project.name}</h2>
							<p className="text-description text-center">
								{getYear(project.period.startDate)}
							</p>
						</div>
						<div className="h-full flex flex-col justify-between">
							<p className="text-justify">{project.description.details}</p>
							<div>
								<div className="flex flex-wrap mt-4">
									{project.skills?.map((skill, skillIndex) => (
										<div
											className="text-meta"
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
										className="flex text-xs text-primary-600 justify-center gap-4 mt-4"
										aria-label={`Visit ${project.name}'s project (opens in a new window)`}
									>
										{project.url}
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SideExperience;
