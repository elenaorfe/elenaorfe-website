import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Lang } from '../types/common';
import { Contact } from '../types/contact';
import ChatBot from './ChatBot';
import Spinner from './Spinner';

interface ContactProps {
	contact: Contact[];
	translations: any;
}

interface DownloadCVButtonProps {
	translations: any;
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
			<button onClick={handleDownload}>
				<ion-icon
					name="download-outline"
					aria-label={translations.contact.download.label}
					size="large"
					title={translations.contact.download.label}
				></ion-icon>
			</button>
		</React.Fragment>
	);
};

const ContactSection: React.FC<ContactProps> = ({ contact, translations }) => {
	return (
		<section className="flex justify-center my-4">
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
								key={`contact-source-${source.id}`}
							>
								<ion-icon
									name={source.icon.name}
									aria-label={source.icon.label}
									size="large"
									title={source.icon.label}
								></ion-icon>
							</a>
						)
				)}
				<DownloadCVButton translations={translations} />
				<ChatBot translations={translations} />
			</div>
		</section>
	);
};

export default ContactSection;
