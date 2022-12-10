import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Lang } from '../types/common';
import { LocalizedPersonalProject } from '../types/personalProject';
import Title from './Title';

type PersonalProjectProps = {
	personalProject: LocalizedPersonalProject;
};

const PersonalProject = ({ personalProject }: PersonalProjectProps) => {
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

	return (
		<section className="mb-8">
			<Title text={personalProject[currentLocale]?.title} />
			<div className="md:grid grid-cols-2 space-y-8 md:space-y-0 gap-8">
				{personalProject[currentLocale]?.items?.map((item) => (
					<div
						className="card flex flex-col"
						key={`personal-project-${item.id}`}
					>
						<div>
							<h2 className="uppercase text-center text-sm lg:text-base">
								{item.title}
							</h2>
							<p className="text-sm text-center">{item.date}</p>
						</div>
						<div className="h-full flex flex-col justify-between">
							<p className="text-justify">{item.description}</p>
							<div>
								<div className="flex flex-wrap mt-4">
									{item.skills?.map((skill, skillIndex) => (
										<div
											className="text-xs text-gray-500"
											key={`personalProject-skill-${skillIndex}`}
										>
											<span>{skill}</span>
											{skillIndex < item.skills.length - 1 && (
												<span className="mx-1">•</span>
											)}
										</div>
									))}
								</div>
								<a
									href={item.url}
									target="_blank"
									rel="noreferrer"
									className="flex text-xs text-primary-600 justify-center gap-4 mt-4"
									aria-label={`Visit ${item.title}\'s project (opens in a new window)`}
								>
									{personalProject[currentLocale]?.link}
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default PersonalProject;
