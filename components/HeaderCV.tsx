import React from 'react';
import Image from 'next/image';
import Contact from './ContactCV';
import Divider from './Divider';
import BaseText from './Typography/BaseText';
import Heading1 from './Typography/Heading1';
import profilePic from '../public/assets/img/profile_cv.jpeg';
import { About } from '../types/about';

interface HeaderProps {
	about: About;
	contact: any;
}

const HeaderCV: React.FC<HeaderProps> = ({ about, contact }) => {
	const { name, role, summary } = about;

	return (
		<section>
			<div className="flex items-center gap-4">
				<Image
					src={profilePic}
					alt=""
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
						<BaseText text={summary} />
						<Contact contact={contact} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeaderCV;
