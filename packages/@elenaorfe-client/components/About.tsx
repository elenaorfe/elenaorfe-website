import Image from 'next/image';
import React from 'react';
import profilePic from '../public/assets/img/profile.png';
import styles from '../styles/About.module.css';
import { About } from '../types/about';
import { Translations } from '../types/common';
import { Experience } from '../types/experience';
import { getYearsBetween } from '../utils/date';

interface AboutProps {
	about: About;
	workExperience: Experience[];
	sideExperiences: Experience[];
	translations: Translations;
}

const AboutSection: React.FC<AboutProps> = ({
	about,
	workExperience,
	sideExperiences,
	translations,
}) => {
	const startWorkingDate =
		workExperience[workExperience.length - 1].period.startDate;
	const yearsOfExperience = getYearsBetween(startWorkingDate).toString();
	const numberOfCompanyProjects = workExperience?.reduce(
		(acc, exp) => acc + exp.projects.length,
		0,
	);
	const numberOfSideProjects = sideExperiences?.reduce(
		(acc, exp) => acc + exp.projects.length,
		0,
	);

	return (
		<section className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
			<div className="order-2 lg:order-1">
				<div>
					<h1 className={styles.title}>{about.name}, </h1>
					<h2 className={styles.subtitle}>{about.role}</h2>
				</div>
				{about.status.openToWork && (
					<div className="mb-8">
						<span className="chip chip-secondary">
							{about.status.description}
						</span>
					</div>
				)}
				{about.description.details.map((aboutDetail, index) => (
					<div
						className="mb-4 break-after-column hyphens-auto text-justify"
						key={`about-description-details-${index}`}
					>
						<p>
							{aboutDetail.replace('{{yearsOfExperience}}', yearsOfExperience)}
						</p>
					</div>
				))}
				<div className="flex justify-center gap-2 md:gap-4">
					<div className="card max-w-28 text-center">
						<div className="text-xl font-bold">{yearsOfExperience}+</div>
						<div className="line-clamp-2 text-sm text-gray-400">
							{translations.about.yearsOfExperience}
						</div>
					</div>
					<div className="card max-w-28 text-center">
						<div className="text-xl font-bold">{numberOfCompanyProjects}</div>
						<div className="line-clamp-2 text-sm text-gray-400">
							{translations.about.companyProjects}
						</div>
					</div>
					<div className="card max-w-28 text-center">
						<div className="text-xl font-bold">{numberOfSideProjects}</div>
						<div className="line-clamp-2 text-sm text-gray-400">
							{translations.about.sideProjects}
						</div>
					</div>
				</div>
			</div>
			<div className="order-1 m-auto lg:order-2">
				<Image
					src={profilePic}
					alt=""
					width={500}
					height={500}
					className="lg:absolute lg:right-0 lg:top-0"
				/>
			</div>
		</section>
	);
};

export default AboutSection;
