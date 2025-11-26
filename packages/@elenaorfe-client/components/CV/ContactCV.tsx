import { Icon } from '@iconify/react';
import React from 'react';
import { Contact } from '../../types/contact';
import MetaText from '../Typography/MetaText';

type ContactProps = {
	contact: Contact[];
};

type ContactItemProps = {
	source: Contact;
};

const ContactItem = (props: ContactItemProps): React.JSX.Element => {
	const { source } = props;
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
				className="my-auto h-4 w-4 text-gray-500 print:h-2 print:w-2"
			/>
			<MetaText
				text={
					source.href === null ? source.icon.label : removePrefix(source.href)
				}
			/>
		</React.Fragment>
	);
};

const ContactCV = (props: ContactProps): React.JSX.Element => {
	const { contact } = props;

	return (
		<div>
			{contact
				.filter((source) => source.showInCV)
				.map((source) =>
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
