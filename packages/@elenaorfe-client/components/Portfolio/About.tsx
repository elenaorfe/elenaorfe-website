import Image from 'next/image';
import React from 'react';
import profilePic from '../../public/assets/img/profile.png';
import { About } from '../../types/about';
import { Translations } from '../../types/common';
import { Experience } from '../../types/experience';
import { getYearsBetween } from '../../utils/date';
import Card from '../Card';
import Chip from '../Chip';

type AboutProps = {
	about: About;
	workExperience: Experience[];
	sideExperiences: Experience[];
	translations: Translations;
};

type CardContentProps = {
	yearsOfExperience: string | number;
	label: string;
};

const CardContent = (props: CardContentProps): React.JSX.Element => {
	const { yearsOfExperience, label } = props;
	return (
		<div className="max-w-28 p-4 text-center">
			<div className="text-xl font-semibold">{yearsOfExperience}+</div>
			<div className="line-clamp-2 text-sm text-gray-400">{label}</div>
		</div>
	);
};

const AboutSection = (props: AboutProps): React.JSX.Element => {
	const { about, workExperience, sideExperiences, translations } = props;
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
					<h1 className="text-2xl md:text-4xl">{about.name}, </h1>
					<h2 className="text-persian-green-500 mb-4 block text-2xl md:mb-2 md:text-4xl">
						{about.role}
					</h2>
				</div>
				{about.status.openToWork && (
					<div className="mb-8">
						<Chip isOpaque={false}>
							<span>{about.status.description}</span>
						</Chip>
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
					<Card>
						<CardContent
							yearsOfExperience={yearsOfExperience}
							label={translations.about.yearsOfExperience}
						/>
					</Card>
					<Card>
						<CardContent
							yearsOfExperience={numberOfCompanyProjects}
							label={translations.about.companyProjects}
						/>
					</Card>
					<Card>
						<CardContent
							yearsOfExperience={numberOfSideProjects}
							label={translations.about.sideProjects}
						/>
					</Card>
				</div>
			</div>
			<div className="order-1 m-auto lg:order-2">
				<Image
					src={profilePic}
					alt="Elena Ortega smiling happily"
					width={500}
					height={500}
					className="lg:absolute lg:right-0 lg:top-0"
				/>
			</div>
		</section>
	);
};

export default AboutSection;
