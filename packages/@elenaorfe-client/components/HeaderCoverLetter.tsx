import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import aboutData from '../data/en/about.json';
import profilePic from '../public/assets/img/profile.png';
import Chip from './Chip';
import ExperienceTile from './ExperienceTile';

const HeaderCoverLetter: React.FC = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = (): void => {
			const offset = window.scrollY;
			if (offset > 60 && !isSticky) {
				setIsSticky(true);
			} else if (offset === 0) {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isSticky]);

	return (
		<React.Fragment>
			<header
				className={`sticky top-0 z-40 bg-[--color-background] px-4 ${isSticky ? 'border-b border-[--color-text-shade-03] border-opacity-75 py-2 shadow-lg md:border-b-2' : ''}`}
			>
				<div
					className={`mx-auto max-w-5xl items-center ${isSticky ? 'mx-4 flex flex-wrap gap-2 md:mx-auto md:gap-4' : 'mt-16'}`}
				>
					<p
						className={`transition-all ${isSticky ? 'text-lg md:text-xl' : 'text-2xl md:text-4xl'}`}
					>
						{aboutData.name}
					</p>
					{!isSticky && (
						<p className="text-2xl text-[--color-primary] md:text-4xl">
							{aboutData.role}
						</p>
					)}
					<Chip withOpacity={true}>
						<div className="flex items-center">
							<strong className="text-xs">Applicant</strong>
							<svg
								width={2}
								height={2}
								fill="currentColor"
								aria-hidden="true"
								className="mx-2"
							>
								<circle cx="1" cy="1" r="1"></circle>
							</svg>
							<span className="text-xs">Design Engineer</span>
						</div>
					</Chip>
					<ExperienceTile
						showGeneralExperience={true}
						skillIds={['reactjs', 'typescript', 'tailwindcss']}
						isCompact={isSticky}
					/>
				</div>
			</header>
			{!isSticky && (
				<Image
					src={profilePic}
					alt=""
					className="absolute right-0 top-0 z-50 h-[100px] w-[100px] md:h-[250px] md:w-[250px]"
				/>
			)}
		</React.Fragment>
	);
};

export default HeaderCoverLetter;
