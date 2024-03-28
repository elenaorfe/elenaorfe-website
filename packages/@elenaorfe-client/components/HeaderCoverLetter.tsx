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
				className={`sticky top-0 z-40 mx-auto ${isSticky ? 'border-b border-slate-100/75 bg-white py-2 shadow-lg md:border-b-2 dark:border-slate-700/75 dark:bg-slate-900' : ''}`}
			>
				<div
					className={`flex justify-between px-4 sm:mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl ${isSticky ? '' : 'mt-16'}`}
				>
					<div
						className={`${isSticky ? 'flex flex-wrap items-center gap-2 md:gap-4' : ''}`}
					>
						<p
							className={`transition-[font] duration-300 ${isSticky ? 'text-lg md:text-xl' : 'text-2xl md:text-4xl'}`}
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
					<div className={`flex flex-col items-end gap-2`}>
						<ThemeSwitch />
						<Image
							src={profilePic}
							alt=""
							className={`transition duration-300 ${isSticky ? 'h-0 w-0 scale-0' : 'h-[125px] w-[125px] md:h-[250px] md:w-[250px]'}`}
						/>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
};

export default HeaderCoverLetter;
