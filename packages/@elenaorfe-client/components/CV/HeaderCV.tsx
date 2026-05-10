import React from 'react';
import { About } from '../../types/about';
import { Contact } from '../../types/contact';
import { Experience } from '../../types/experience';
import { getYearsBetween } from '../../utils/date';
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
	const { name, description } = about;
	const startWorkingDate =
		workExperiences[workExperiences.length - 1].period.startDate;
	const yearsOfExperience = getYearsBetween(startWorkingDate).toString();

	return (
		<section>
			<div className="flex items-center gap-4">
				<div className="w-full">
					<Heading1 text={name} />
					<div className="flex justify-between gap-2">
						<div className="flex flex-col">
							<BaseText
								text={description?.summary.replace(
									'{{yearsOfExperience}}',
									yearsOfExperience,
								)}
							/>
						</div>
						<ContactSection contact={contact} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeaderCV;
