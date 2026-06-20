import React, { useEffect, useState } from 'react';
import aboutData from '../../data/en/about.json';
import Chip from '../Chip';
import ExperienceTile from '../ExperienceTile';
import ThemeSwitch from '../ThemeSwitch';

const HeaderCoverLetter = (): React.JSX.Element => {
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
			<header className="relative mt-16">
				<div
					className={
						isSticky
							? 'fixed left-0 right-0 top-0 z-10 border-b border-slate-100/75 bg-white py-2 shadow-lg md:border-b-2 dark:border-slate-700/75 dark:bg-slate-900'
							: ''
					}
				>
					<div className="flex justify-between gap-4 px-4 sm:mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
						<div
							className={
								isSticky ? 'flex flex-wrap items-center gap-1 lg:gap-4' : ''
							}
						>
							<p
								className={`transition-[font] duration-300 ${isSticky ? 'text-lg md:text-xl' : 'text-2xl md:text-4xl'}`}
							>
								{aboutData.name}
							</p>
							<p
								className={`text-persian-green-500 text-2xl md:text-4xl ${isSticky ? 'hidden' : ''}`}
							>
								{aboutData.role}
							</p>
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
						<div>
							<ThemeSwitch />
						</div>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
};

export default HeaderCoverLetter;
