import React, { createContext, useEffect, useState } from 'react';
import { Theme } from '../types/common';

type ThemeContextProps = {
	theme: string;
	toggleTheme: () => void;
};

const ThemeContextDefault = {
	theme: Theme.LIGHT,
	toggleTheme: () => undefined,
};

export const ThemeContext =
	createContext<ThemeContextProps>(ThemeContextDefault);

const ThemeContextProvider = ({
	children,
}: {
	children: React.ReactElement;
}): React.ReactElement => {
	// State to hold the current theme
	const [theme, setTheme] = useState(Theme.LIGHT);

	// Function to toggle between light and dark themes
	const toggleTheme = (): void => {
		setTheme((prevTheme) =>
			prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
		);
	};

	const handleDarkModeChange = (isDarkMode: boolean): void => {
		// Add or remove the dark class in html tag
		document.documentElement.classList.toggle('dark', isDarkMode);
		setTheme(isDarkMode ? Theme.DARK : Theme.LIGHT);
	};

	useEffect(() => {
		const isDarkMode = window.matchMedia?.(
			'(prefers-color-scheme: dark)',
		).matches;

		handleDarkModeChange(isDarkMode);

		const darkModeMediaQuery = window.matchMedia(
			'(prefers-color-scheme: dark)',
		);

		darkModeMediaQuery.addEventListener('change', (e) =>
			handleDarkModeChange(e.matches),
		);

		return () => {
			darkModeMediaQuery.removeEventListener('change', (e) =>
				handleDarkModeChange(e.matches),
			);
		};
	}, []);

	useEffect(() => {
		handleDarkModeChange(theme === Theme.DARK);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
