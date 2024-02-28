import React from 'react';
import Image from 'next/image';
import { About } from '../types/about';
import styles from '../styles/About.module.css';
import profilePic from '../public/assets/img/profile.png';

interface AboutProps {
	about: About;
}

const AboutSection: React.FC<AboutProps> = ({ about }) => {
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
