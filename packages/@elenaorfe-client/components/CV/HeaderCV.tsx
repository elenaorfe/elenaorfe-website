import Image from 'next/image';
import React from 'react';
import profilePic from '../../public/assets/img/profile_cv.jpeg';
import { About } from '../../types/about';
import { Contact } from '../../types/contact';
import { Experience } from '../../types/experience';
import { getYearsBetween } from '../../utils/date';
import Divider from '../Divider';
import BaseText from '../Typography/BaseText';
import Heading1 from '../Typography/Heading1';
import ContactSection from './ContactCV';

type HeaderProps = {
	about: About;
	contact: Contact[];
	workExperiences: Experience[];
};

const HeaderCV = (props: HeaderProps): React.JSX.Element => {
	const { about, contact, workExperiences } = props;
	const { name, role, description } = about;
	const startWorkingDate =
		workExperiences[workExperiences.length - 1].period.startDate;
	const yearsOfExperience = getYearsBetween(startWorkingDate).toString();

	return (
		<section>
			<div className="flex items-center gap-4">
				<Image
					src={profilePic}
					alt="Elena Ortega profile picture"
					width={80}
					height={80}
					className="rounded-full border-2 border-gray-300 border-opacity-75"
				/>
				<div className="w-full">
					<div className="flex justify-between gap-2">
						<Heading1 text={name} />
						<BaseText text={role} style="capitalize my-auto" />
					</div>
					<Divider />
					<div className="flex justify-between gap-2">
						<BaseText
							text={description?.summary.replace(
								'{{yearsOfExperience}}',
								yearsOfExperience,
							)}
						/>
						<ContactSection contact={contact} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeaderCV;
