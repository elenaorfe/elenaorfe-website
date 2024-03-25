import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import aboutData from '../data/en/about.json';
import profilePic from '../public/assets/img/profile.png';
import Chip from './Chip';
import ExperienceTile from './ExperienceTile';
import ThemeSwitch from './ThemeSwitch';

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
				className={`sticky top-0 z-40 bg-[--color-background] px-4 md:mx-auto md:px-0 ${isSticky ? 'border-b border-[--color-text-inverted] border-opacity-75 py-2 shadow-lg md:border-b-2' : 'max-w-5xl '}`}
			>
				<div
					className={`flex justify-between ${isSticky ? 'mx-auto max-w-5xl' : 'mt-16'}`}
				>
					<div
						className={`${isSticky ? 'flex flex-wrap items-center gap-2 md:gap-4' : ''}`}
					>
						<p
							className={`transition-all duration-300 ${isSticky ? 'text-lg md:text-xl' : 'text-2xl md:text-4xl'}`}
						>
							{aboutData.name}
						</p>
						{!isSticky && (
							<p className="text-persian-green-500 text-2xl md:text-4xl">
								{aboutData.role}
							</p>
						)}
						<Chip isOpaque={false}>
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
					<div
						className={`flex ${isSticky ? 'items-center' : 'items-center md:items-start'}`}
					>
						<ThemeSwitch />
					</div>
				</div>
			</header>
			<Image
				src={profilePic}
				alt=""
				className={`absolute right-0 top-0 z-50 h-[100px] w-[100px] transition duration-300 md:h-[250px] md:w-[250px] ${isSticky ? 'scale-0 opacity-0' : ''}`}
			/>
		</React.Fragment>
	);
};

export default HeaderCoverLetter;
