import React, { createContext, useEffect } from 'react';
import { Theme } from '../types/common';

export const ThemeContext = createContext<{ theme: Theme }>({
	theme: Theme.LIGHT,
});

const ThemeContextProvider = ({
	children,
}: {
	children: React.ReactElement;
}): React.ReactElement => {
	const handleDarkModeChange = (isDarkMode: boolean): void => {
		document
			.getElementsByTagName('html')[0]
			?.setAttribute('data-theme', isDarkMode ? Theme.DARK : Theme.LIGHT);
	};

	useEffect(() => {
		const isDarkMode = window.matchMedia?.(
			'(prefers-color-scheme: dark)'
		).matches;

		handleDarkModeChange(isDarkMode);

		const darkModeMediaQuery = window.matchMedia(
			'(prefers-color-scheme: dark)'
		);

		darkModeMediaQuery.addEventListener('change', (e) =>
			handleDarkModeChange(e.matches)
		);

		return () => {
			darkModeMediaQuery.removeEventListener('change', (e) =>
				handleDarkModeChange(e.matches)
			);
		};
	}, []);

	return (
		<ThemeContext.Provider value={{ theme: Theme.LIGHT }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
