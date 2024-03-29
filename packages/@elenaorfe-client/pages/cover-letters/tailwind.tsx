import Head from 'next/head';
import React from 'react';
import AboutCoverLetter from '../../components/CoverLetter/AboutCoverLetter';
import ContributionsCoverLetter from '../../components/CoverLetter/ContributionsCoverLetter';
import GoodByeCoverLetter from '../../components/CoverLetter/GoodByeCoverLetter';
import HeaderCoverLetter from '../../components/CoverLetter/HeaderCoverLetter';
import IntroCoverLetter from '../../components/CoverLetter/IntroCoverLetter';
import MotivationCoverLetter from '../../components/CoverLetter/MotivationCoverLetter';
import ProjectsCoverLetter from '../../components/CoverLetter/ProjectsCoverLetter';
import TeachingCoverLetter from '../../components/CoverLetter/TeachingCoverLetter';

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
			<div className="px-4 py-16 sm:mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
				<main className="space-y-16">
					<IntroCoverLetter />
					<AboutCoverLetter />
					<ProjectsCoverLetter />
					<ContributionsCoverLetter />
					<MotivationCoverLetter />
					<TeachingCoverLetter />
					<GoodByeCoverLetter />
				</main>
			</div>
		</div>
	);
};

export default TailwindCSSCoverLetter;
