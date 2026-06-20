import Image from 'next/image';
import React from 'react';
import profilePic from '../../public/assets/img/profile_cover_letter.png';

const AboutCoverLetter = (): React.JSX.Element => {
	return (
		<section>
			<h2 className="mb-4 text-lg font-semibold">A brief introduction</h2>
			<div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-3 lg:gap-8">
				<div className="space-y-4 lg:col-span-2">
					<p className="hyphens-auto text-justify">
						I was born in Malaga, Spain. I graduate myself in Industrial
						Engineering, right after found myself happily diving into the world
						of software development where I found my passion for coding and
						design.
					</p>
					<p className="hyphens-auto text-justify">
						In my 8+ years experience, I was working in a couple of companies
						with the privilege of participate on projects with teams located all
						around the globe.
					</p>
					<p className="hyphens-auto text-justify">
						In my free time, I like to surf and run. I&apos;ve completed a
						couple of half marathons. Also I have passion for handcrafts,
						particularly{' '}
						<a
							href="https://en.wikipedia.org/wiki/Amigurumi"
							target="_blank"
							rel="noreferrer"
							className="text-persian-green-500"
						>
							amigurumis
						</a>
						, the Japanese art of crocheting.
					</p>
				</div>
				<Image
					src={profilePic}
					alt="Elena Ortega smiling happily"
					className="mx-auto h-auto w-[250px] lg:ml-auto lg:mr-0"
				/>
			</div>
		</section>
	);
};

export default AboutCoverLetter;
