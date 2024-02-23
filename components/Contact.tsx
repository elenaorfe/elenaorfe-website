import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { Lang } from '../types/common';
import { ContactLink } from '../types/contact';
import ChatBot from './ChatBot';
import Spinner from './Spinner';
import i18n from '../data/i18n/translations.json';

interface HeaderProps {
	headerLinks: any;
}

const DownloadCVButton: React.FC = () => {
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);
	const [loading, setLoading] = useState(false);

	const handleDownload = (): void => {
		setLoading(true);
		const currentUrl = window.location.href;

		fetch(`/api/generate-pdf?url=${encodeURIComponent(currentUrl)}`)
			.then(async (response) => await response.blob())
			.then((pdfBlob) => {
				// Create a temporary link element
				const link = document.createElement('a');
				link.href = URL.createObjectURL(pdfBlob);
				link.download = 'CV_ElenaOrtega.pdf';

				// Trigger the click event on the link
				link.click();

				// Cleanup: remove the link from the DOM
				URL.revokeObjectURL(link.href);
			})
			.catch((error) => {
				console.error('PDF download error:', error);
			})
			.finally(() => setLoading(false));
	};

	return loading ? (
		<Spinner />
	) : (
		<React.Fragment>
			<button onClick={handleDownload}>
				<ion-icon
					name="download-outline"
					aria-label={i18n[currentLocale].contact.download}
					size="large"
					title={i18n[currentLocale].contact.download}
				></ion-icon>
			</button>
		</React.Fragment>
	);
};

const Contact: React.FC<HeaderProps> = ({ headerLinks }) => {
	const { locale } = useRouter();

	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

	return (
		<section className="flex justify-center my-4">
			<div className="chip chip-primary flex items-center gap-4">
				{headerLinks[currentLocale]?.items
					.filter((link: ContactLink) => link.href !== null)
					.map((link: ContactLink) => (
						<a
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex"
							aria-label={link.label}
							key={`header-link-${link.icon.name}`}
						>
							<ion-icon
								name={link.icon.name}
								aria-label={link.icon.label}
								size="large"
								title={link.icon.label}
							></ion-icon>
						</a>
					))}
				<DownloadCVButton />
				<ChatBot />
			</div>
		</section>
	);
};

export default Contact;
