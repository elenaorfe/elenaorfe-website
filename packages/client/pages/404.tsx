import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Lang } from '../types/common';
import translationsEN from '../i18n/en.json';
import translationsES from '../i18n/es.json';

export default function Custom404(): JSX.Element {
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);
	const translations = currentLocale === 'es' ? translationsES : translationsEN;
	const details = translations.pageNotFound.details.split(/{{|}}/);

	return (
		<div className="container mx-auto">
			<div className="flex items-center h-screen">
				<div>
					<h1 className="text-2xl">{translations.pageNotFound.title}</h1>
					<p className="text-lg">
						{details[0]}
						<Link href="/" className="text-[--color-primary] no-underline">
							{details[1]}
						</Link>
						{details[2]}
					</p>
				</div>
			</div>
		</div>
	);
}