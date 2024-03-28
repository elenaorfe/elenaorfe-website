import React from 'react';

const AboutCoverLetter: React.FC = () => {
	return (
		<section className="mb-16">
			<h2 className="mb-2 text-lg font-bold">A brief introduction</h2>
			<p className="mb-4 hyphens-auto text-justify">
				I&apos;m Elena, I was born in the beautiful city of Malaga, Spain. I
				graduate myself in Industrial Engineering, right after found myself
				happily diving into the world of software development where I found my
				passion for coding and design.
			</p>
			<p className="mb-4 hyphens-auto text-justify">
				In my 8+ years experience, I was working in a couple of companies with
				the privilege of participate on English projects with teams located all
				around the globe. From Mexico to Colombia, the Philippines to Vienna,
				Finland to countless other corners of the world.
			</p>
			<p className="mb-4 hyphens-auto text-justify">
				In my free time, I like to surf and run. I&apos;ve completed a couple of
				half marathons. Also I have passion for handcrafts, particularly
				amigurumis, the Japanese art of crocheting.
			</p>
			<p className="mb-4 hyphens-auto text-justify">
				This is me in a nutshell, feel free to connect with me on{' '}
				<a
					href="https://www.linkedin.com/in/elenaorfe"
					target="_blank"
					rel="noreferrer"
					className="text-persian-green-500"
				>
					LinkedIn
				</a>{' '}
				or visit{' '}
				<a
					href="https://www.elenaorfe.com"
					target="_blank"
					rel="noreferrer"
					className="text-persian-green-500"
				>
					my personal website
				</a>
				.
			</p>
		</section>
	);
};

export default AboutCoverLetter;
