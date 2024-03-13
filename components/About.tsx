import React from 'react';
import Image from 'next/image';
import { About } from '../types/about';
import styles from '../styles/About.module.css';
import profilePic from '../public/assets/img/profile.png';
import { Experience } from '../types/experience';
import { getYearsBetween } from '../utils/date';

interface AboutProps {
	about: About;
	workExperience: Experience[];
	sideExperiences: Experience[];
	translations: any;
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
		0
	);
	const numberOfSideProjects = sideExperiences?.reduce(
		(acc, exp) => acc + exp.projects.length,
		0
	);

	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
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
						className="mb-4 text-justify"
						key={`about-description-details-${index}`}
					>
						<p>{aboutDetail}</p>
					</div>
				))}
				<div className="flex gap-4 justify-center">
					<div className="card text-center max-w-32">
						<div className="font-bold text-xl">{yearsOfExperience}+</div>
						<div className="text-gray-400">
							{translations.about.yearsOfExperience}
						</div>
					</div>
					<div className="card text-center max-w-32">
						<div className="font-bold text-xl">{numberOfCompanyProjects}</div>
						<div className="text-gray-400">
							{translations.about.companyProjects}
						</div>
					</div>
					<div className="card text-center max-w-32">
						<div className="font-bold text-xl">{numberOfSideProjects}</div>
						<div className="text-gray-400">
							{translations.about.sideProjects}
						</div>
					</div>
				</div>
			</div>
			<div className="order-1 lg:order-2 m-auto">
				<Image
					src={profilePic}
					alt=""
					width={500}
					height={500}
					className="lg:absolute lg:top-0 lg:right-0"
				/>
			</div>
		</section>
	);
};

export default AboutSection;
