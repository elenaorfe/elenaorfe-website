import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import translationsEN from '../i18n/en.json';
import translationsES from '../i18n/es.json';
import { Lang } from '../types/common';

export default function Custom404(): JSX.Element {
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);
	const translations = currentLocale === 'es' ? translationsES : translationsEN;
	const details = translations.pageNotFound.details.split(/{{|}}/);

	return (
		<div className="container mx-auto">
			<div className="flex h-screen items-center">
				<div>
					<h1 className="text-2xl">{translations.pageNotFound.title}</h1>
					<p className="text-lg">
						{details[0]}
						<Link href="/" className="text-persian-green-500 no-underline">
							{details[1]}
						</Link>
						{details[2]}
					</p>
				</div>
			</div>
		</div>
	);
}
