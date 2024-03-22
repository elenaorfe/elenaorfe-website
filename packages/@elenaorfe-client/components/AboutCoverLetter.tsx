import React from 'react';

const AboutCoverLetter: React.FC = () => {
	return (
		<section className="mb-16">
			<h2 className="text-lg font-bold">A brief introduction</h2>
			<p className="mb-4">
				I&apos;m Elena, I was born in the beautiful city of Malaga (Spain). I
				graduate myself in Industrial Engineering, right after found myself
				happily diving into the world of software development where I found my
				passion for coding and design.
			</p>
			<p className="mb-4">
				In my 8+ years experience, I was working in a couple of consultancy
				companies with the privilege of working on English projects with teams
				located all around the globe. From Mexico to Colombia, the Philippines
				to Vienna, Finland to countless other corners of the world.
			</p>
			<p>
				This is me in a nutshell and if you&apos;d like to learn more about my
				career, feel free to connect with me on{' '}
				<a
					href="https://www.linkedin.com/in/elenaorfe"
					target="_blank"
					rel="noreferrer"
					className="text-[--color-primary]"
				>
					LinkedIn
				</a>{' '}
				or visit{' '}
				<a
					href="https://www.elenaorfe.com"
					target="_blank"
					rel="noreferrer"
					className="text-[--color-primary]"
				>
					my personal website
				</a>
				.
			</p>
		</section>
	);
};

export default AboutCoverLetter;
