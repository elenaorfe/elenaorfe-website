import Image from 'next/image';
import React from 'react';
import profilePic from '../public/assets/img/profile_cover_letter.png';

const AboutCoverLetter: React.FC = () => {
	return (
		<section>
			<h2 className="mb-2 text-lg font-semibold">A brief introduction</h2>
			<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
				<Image
					src={profilePic}
					alt=""
					className="mx-auto h-[250px] w-[250px]"
				/>
				<div className="lg:col-span-2">
					<p className="mb-4 hyphens-auto text-justify">
						I was born in Malaga, Spain. I graduate myself in Industrial
						Engineering, right after found myself happily diving into the world
						of software development where I found my passion for coding and
						design.
					</p>
					<p className="mb-4 hyphens-auto text-justify">
						In my 8+ years experience, I was working in a couple of companies
						with the privilege of participate on projects with teams located all
						around the globe.
					</p>
					<p className="mb-4 hyphens-auto text-justify">
						In my free time, I like to surf and run. I&apos;ve completed a
						couple of half marathons. Also I have passion for handcrafts,
						particularly amigurumis, the Japanese art of crocheting.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutCoverLetter;
