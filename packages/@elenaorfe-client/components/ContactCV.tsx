import { Icon } from '@iconify/react';
import React from 'react';
import { Contact } from '../types/contact';
import BaseText from './Typography/BaseText';

interface ContactProps {
	contact: Contact[];
}

interface ContactItemProps {
	source: Contact;
}

const ContactItem: React.FC<ContactItemProps> = ({ source }) => {
	const removePrefix = (link: string): string => {
		const prefixesToRemove: string[] = ['mailto:', 'https://www.', 'https://'];

		for (const prefix of prefixesToRemove) {
			if (link.startsWith(prefix)) {
				return link.slice(prefix.length);
			}
		}

		return link;
	};

	return (
		<React.Fragment>
			<Icon
				icon={`mage:${source.icon.name}`}
				aria-label={source.icon.label}
				className="my-auto h-4 w-4 text-gray-400 print:h-2 print:w-2"
			/>
			<BaseText
				text={
					source.href === null ? source.icon.label : removePrefix(source.href)
				}
			/>
		</React.Fragment>
	);
};

const ContactCV: React.FC<ContactProps> = ({ contact }) => {
	return (
		<div>
			{contact.map((source) =>
				source.type === 'link' && source.href !== null ? (
					<a
						className="flex gap-1 no-underline"
						key={source.id}
						href={source.href}
						target="_blank"
						rel="noreferrer"
					>
						<ContactItem source={source} />
					</a>
				) : (
					<div className="flex gap-1" key={source.id}>
						<ContactItem source={source} />
					</div>
				),
			)}
		</div>
	);
};

export default ContactCV;
