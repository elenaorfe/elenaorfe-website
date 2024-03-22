import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { Lang, Translations } from '../types/common';
import { Contact } from '../types/contact';
import ChatBot from './ChatBot';
import ContactForm from './ContactForm';
import Modal from './Modal';
import Spinner from './Spinner';

interface ContactProps {
	contact: Contact[];
	translations: Translations;
}

interface DownloadCVButtonProps {
	translations: Translations;
}

interface ContactButtonProps {
	source: Contact;
	translations: Translations;
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({
	translations,
}) => {
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);
	const [loading, setLoading] = useState(false);

	const handleDownload = (): void => {
		setLoading(true);

		try {
			const url =
				currentLocale === 'es'
					? '/assets/documents/CV_ElenaOrtega_ES.pdf'
					: '/assets/documents/CV_ElenaOrtega.pdf';
			const anchor = document.createElement('a');
			anchor.href = url;
			anchor.download = 'CV_ElenaOrtega.pdf';
			document.body.appendChild(anchor);

			// Event listener to remove the anchor element after the download is complete
			anchor.addEventListener('click', () => {
				setTimeout(() => {
					URL.revokeObjectURL(anchor.href);
					document.body.removeChild(anchor);
				}, 100);
			});

			anchor.click();
		} catch (error) {
			console.error('PDF download error:', error);
		} finally {
			setLoading(false);
		}
	};

	return loading ? (
		<Spinner />
	) : (
		<React.Fragment>
			<button
				onClick={handleDownload}
				aria-label={translations.contact.download.label}
				title={translations.contact.download.label}
			>
				<Icon icon="mage:file-download" width={32} height={32} />
			</button>
		</React.Fragment>
	);
};

const ContactButton: React.FC<ContactButtonProps> = ({
	source,
	translations,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	return (
		<React.Fragment>
			<button
				className="leading-[0rem]"
				onClick={openModal}
				aria-label={source.a11yLabel}
				title={source.icon.label}
			>
				<Icon icon="mage:email" width={32} height={32} />
			</button>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				isFullScreen={false}
				mainContent={() => (
					<ContactForm callback={closeModal} translations={translations} />
				)}
			/>
		</React.Fragment>
	);
};

const ContactSection: React.FC<ContactProps> = ({ contact, translations }) => {
	return (
		<section className="my-8 flex justify-center">
			<div className="chip chip-primary flex items-center gap-4">
				{contact.map(
					(source) =>
						source.type === 'link' &&
						source.href !== null && (
							<a
								href={source.href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex"
								aria-label={source.a11yLabel}
								title={source.icon.label}
								key={`contact-source-${source.id}`}
							>
								<Icon
									icon={`mage:${source.icon.name}`}
									width={32}
									height={32}
								/>
							</a>
						),
				)}
				<DownloadCVButton translations={translations} />
				<ContactButton source={contact[2]} translations={translations} />
				<ChatBot translations={translations} />
			</div>
		</section>
	);
};

export default ContactSection;
