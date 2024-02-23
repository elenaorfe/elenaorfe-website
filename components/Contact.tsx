import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
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
					aria-label={i18n[currentLocale].contact.download.label}
					size="large"
					title={i18n[currentLocale].contact.download.label}
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
				{headerLinks[currentLocale]?.items.map(
					(link: ContactLink) =>
						link.href !== null && (
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
						)
				)}
				<DownloadCVButton />
				<ChatBot />
			</div>
		</section>
	);
};

export default Contact;
