import React from 'react';
import { ContactLink } from '../types/contact';
import styles from '../styles/CVContact.module.css';
import BaseText from './Typography/BaseText';

interface ContactProps {
	contact: any;
}

interface ContactItemProps {
	link: ContactLink;
}

const ContactItem: React.FC<ContactItemProps> = ({ link }) => {
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
			<ion-icon name={link.icon.name} aria-label={link.icon.label}></ion-icon>
			<BaseText
				text={link.href === null ? link.label : removePrefix(link.href)}
			/>
		</React.Fragment>
	);
};

const ContactCV: React.FC<ContactProps> = ({ contact }) => {
	return (
		<div className={styles.cv_contact}>
			{contact?.items.map((link: ContactLink) =>
				link.href === null ? (
					<div className="flex gap-1" key={`contact-link-${link.label}`}>
						<ContactItem link={link} />
					</div>
				) : (
					<a
						className="flex gap-1 no-underline"
						key={`contact-link-${link.label}`}
						href={link.href}
						target="_blank"
						rel="noreferrer"
					>
						<ContactItem link={link} />
					</a>
				)
			)}
		</div>
	);
};

export default ContactCV;
