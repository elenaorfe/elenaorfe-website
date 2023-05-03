import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Lang } from '../types/common';
import {
	LocalizedWorkExperience,
	WorkExperienceItem,
} from '../types/workExperience';
import Title from './Title';

type WorkExperienceProps = {
	workExperience: LocalizedWorkExperience;
};

const WorkExperience = ({ workExperience }: WorkExperienceProps) => {
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

	return (
		<section className="mb-8">
			<Title text={workExperience[currentLocale]?.title} />
			{workExperience[currentLocale]?.items?.map((item: WorkExperienceItem) => (
				<div className="card my-4" key={`workExperience-${item.id}`}>
					<div className="flex md:space-x-4 mb-4 border-b-2 border-gray-200 md:border-0">
						<div className="circle hidden md:flex">
							<Image
								src={`/assets/img/${item.logo}`}
								className="rounded-full"
								alt=""
								width={200}
								height={200}
							/>
						</div>
						<div>
							<h2 className="font-bold lg:text-lg">{item.company} - {item.role}</h2>
							<p className="text-meta">
								{item.dateStart} - {item.dateEnd}
							</p>
						</div>
					</div>
					<div>
						<p className="mb-4">{item.description}</p>
						<div className="mt-4">
							{item.projects.map((project, projectIndex) => (
								<div
									key={`project-${project.id}`}
									className={
										projectIndex < item.projects.length - 1
											? 'border-b border-gray-200 py-4'
											: 'pt-4'
									}
								>
									<p className="font-bold mb-2">{project.title}</p>
									<div className="flex space-x-2 mb-2">
										<div>
											<p className="text-description">{project.role}</p>
											<div className="flex flex-col md:flex-row">
												<p className="text-meta mb-2">
													{project.duration}
												</p>
												<p className="text-meta mx-2 hidden md:block" aria-hidden>•</p>
												<p className="text-meta mb-2">
													{project.location}
												</p>
											</div>
										</div>
									</div>
									<ul className="mb-2">
										{project.achievements?.map((achievement, achievementIndex) => (
											<li key={`achievement-${achievementIndex}`}>
												<ion-icon name="remove-outline" size="small"></ion-icon>
												<span className="ml-1">{achievement}</span>
											</li>
										))}
									</ul>
									<div className="flex flex-wrap">
										{project.skills?.map((skill, skillIndex) => (
											<div
												className="text-meta"
												key={`project-${project.id}-skill-${skillIndex}`}
											>
												<span>{skill}</span>
												{skillIndex < project.skills.length - 1 && (
													<span className="mx-1" aria-hidden>•</span>
												)}
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default WorkExperience;
