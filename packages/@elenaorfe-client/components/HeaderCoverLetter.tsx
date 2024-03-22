import React from 'react';
import aboutData from '../data/en/about.json';
import Chip from './Chip';

const HeaderCoverLetter: React.FC = () => {
	return (
		<section>
			<p className="text-2xl md:text-4xl">{aboutData.name}</p>
			<p className="text-2xl text-[--color-primary] md:text-4xl">
				{aboutData.role}
			</p>
			<Chip withOpacity={true}>
				<div className="flex items-center">
					<strong>Applicant</strong>
					<svg
						width={2}
						height={2}
						fill="currentColor"
						aria-hidden="true"
						className="mx-2"
					>
						<circle cx="1" cy="1" r="1"></circle>
					</svg>
					<span>Design Engineer</span>
				</div>
			</Chip>
		</section>
	);
};

export default HeaderCoverLetter;
