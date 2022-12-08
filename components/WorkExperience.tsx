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
				<div className="my-4" key={`workExperience-${item.id}`}>
					<div className="card-header">
						<h2 className="text-white uppercase lg:text-lg">{item.name}</h2>
						<p className="text-sm text-white">
							{item.dateStart} - {item.dateEnd}
						</p>
						<div className="rounded-full h-12 w-12 bg-white flex items-center justify-center mx-auto my-2">
							<Image
								src={`/assets/img/${item.logo}`}
								className="rounded-full"
								alt=""
								width={200}
								height={200}
							/>
						</div>
					</div>
					<div className="card-body">
						<p className="mb-8">{item.description}</p>
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
										<ion-icon
											name="people-outline"
											className="text-2xl text-gray-500"
										></ion-icon>
										<div>
											<p className="text-gray-500">{project.role}</p>
											<div className="flex flex-col md:flex-row">
												<p className="text-sm text-gray-500 mb-2">
													{project.duration}
												</p>
												<p className="mx-2 hidden md:block">•</p>
												<p className="text-sm text-gray-500 mb-2">
													{project.location}
												</p>
											</div>
										</div>
									</div>
									<p className="mb-2">{project.description}</p>
									<div className="flex flex-wrap">
										{project.skills?.map((skill, skillIndex) => (
											<div
												className="text-xs text-gray-500"
												key={`project-${project.id}-skill-${skillIndex}`}
											>
												<span>{skill}</span>
												{skillIndex < project.skills.length - 1 && (
													<span className="mx-1">•</span>
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
