import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Lang } from '../types/common';
import { ContactLink } from '../types/contact';

type HeaderProps = {
	headerLinks: any;
};

const Contact = ({ headerLinks }: HeaderProps) => {
	const { locale } = useRouter();

	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

	return (
		<section className="flex justify-center my-4">
			<div className="chip chip-primary flex space-x-4">
				{headerLinks[currentLocale]?.items.map((link: ContactLink) => (
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
						></ion-icon>
					</a>
				))}
			</div>
		</section>
	);
};

export default Contact;
