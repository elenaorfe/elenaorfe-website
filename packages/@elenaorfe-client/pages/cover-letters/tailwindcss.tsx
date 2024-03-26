import Head from 'next/head';
import React from 'react';
import AboutCoverLetter from '../../components/AboutCoverLetter';
import ContributionsCoverLetter from '../../components/ContributionsCoverLetter';
import HeaderCoverLetter from '../../components/HeaderCoverLetter';
import MotivationCoverLetter from '../../components/MotivationCoverLetter';
import ProjectsCoverLetter from '../../components/ProjectsCoverLetter';

const TailwindCSSCoverLetter: React.FC = () => {
	return (
		<div>
			<Head>
				<title>Elena | Applicant · Design Engineer for Tailwind Labs</title>
				<meta
					name="description"
					content="Cover letter for the Design Engineer position at Tailwind Labs."
				/>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<HeaderCoverLetter />
			<div className="mx-4 max-w-5xl py-16 md:mx-auto">
				<main>
					<AboutCoverLetter />
					<ProjectsCoverLetter />
					<ContributionsCoverLetter />
					<MotivationCoverLetter />
				</main>
			</div>
		</div>
	);
};

export default TailwindCSSCoverLetter;
