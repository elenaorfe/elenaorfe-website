import React from 'react';
import { Contact } from '../types/contact';
import styles from '../styles/CVContact.module.css';
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
			<ion-icon name={source.icon.name} aria-label={source.icon.label} />
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
		<div className={styles.cv_contact}>
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
				)
			)}
		</div>
	);
};

export default ContactCV;
