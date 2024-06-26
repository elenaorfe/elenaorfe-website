import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { Lang, Translations } from '../../types/common';
import { Contact } from '../../types/contact';
import ChatBot from '../ChatBot/ChatBot';
import Chip from '../Chip';
import ContactForm from '../ContactForm';
import Modal from '../Modal';
import Spinner from '../Spinner';

type ContactProps = {
	contact: Contact[];
	translations: Translations;
};

type DownloadCVButtonProps = {
	translations: Translations;
};

type ContactButtonProps = {
	source: Contact;
	translations: Translations;
};

const DownloadCVButton = (props: DownloadCVButtonProps): React.JSX.Element => {
	const { translations } = props;
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
				id="download-cv-button"
			>
				<Icon icon="mage:file-download" width={32} height={32} />
			</button>
		</React.Fragment>
	);
};

const ContactButton = (props: ContactButtonProps): React.JSX.Element => {
	const { source, translations } = props;
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
				id="contact-form-open-button"
			>
				<Icon icon="mage:email" width={32} height={32} />
			</button>
			<Modal
				id="contact-form-modal"
				ariaLabel="Contact form"
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

const ContactSection = (props: ContactProps): React.JSX.Element => {
	const { contact, translations } = props;
	return (
		<section className="my-8 flex justify-center">
			<Chip>
				<div className="flex items-center gap-4 py-2">
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
			</Chip>
		</section>
	);
};

export default ContactSection;
