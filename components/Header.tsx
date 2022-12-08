import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { Lang } from '../types/common';
import { HeaderLink } from '../types/header';
import styles from '../styles/Header.module.css';

type HeaderProps = {
	headerLinks: any;
};

const Header = ({ headerLinks }: HeaderProps) => {
	const [showLanguageMenu, setShowLanguageMenu] = useState(false);
	const [language, setLanguage] = useState(Lang.en);
	const { locale } = useRouter();

	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

	const toggleLanguageMenu = () => {
		// Toggle language menu
		setShowLanguageMenu(!showLanguageMenu);

		// Focus on the first language
		const firstListItem = document.getElementById('language-picker-item-first');
		firstListItem?.focus();
	};

	return (
		<header>
			<div className="flex justify-end space-x-4">
				{headerLinks[currentLocale]?.items.map((link: HeaderLink) => (
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
						></ion-icon>
					</a>
				))}
				{/* Language selector */}
				<div>
					<button
						className="flex relative cursor-pointer"
						onClick={toggleLanguageMenu}
						aria-label="Select your language"
						aria-expanded={showLanguageMenu}
						aria-controls="language-picker-dropdown"
					>
						<ion-icon
							aria-hidden={true}
							name="globe-outline"
							aria-label="Select language"
						></ion-icon>
					</button>
					<div
						className={`${
							styles.menuLanguageDropdown
						} absolute right-0 mr-8 border border-gray rounded bg-white mt-4 z-10 text-right ${
							showLanguageMenu ? 'block' : 'hidden'
						}`}
						aria-hidden={!showLanguageMenu}
						aria-describedby="language-picker-description"
						id="language-picker-dropdown"
					>
						<p className="hidden" id="language-picker-description">
							Select language
						</p>
						<ul className="language-picker__list" role="listbox">
							<li
								className={`${styles.menuLanguageDropdownItem} ${
									language === Lang.en
										? styles.menuLanguageDropdownItemSelected
										: ''
								}`}
							>
								<a
									lang="en"
									hrefLang="en"
									href="#"
									aria-selected={true}
									role="option"
									data-value="english"
									onClick={() => setLanguage(Lang.en)}
									id="language-picker-item-first"
								>
									English
								</a>
							</li>
							<li
								className={`${styles.menuLanguageDropdownItem} ${
									language === Lang.es
										? styles.menuLanguageDropdownItemSelected
										: ''
								}`}
							>
								<a
									lang="es"
									hrefLang="es"
									href="#"
									role="option"
									aria-selected={false}
									data-value="español"
									onClick={() => setLanguage(Lang.es)}
								>
									Español
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
