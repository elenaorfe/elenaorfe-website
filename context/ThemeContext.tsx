import React, { ReactNode, useEffect, useState } from 'react';
import { Theme } from '../types/common';

const ThemeContext = React.createContext('light');

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

	useEffect(() => {
		// Get system preferences to define the theme.
		const darkMode = window?.matchMedia('(prefers-color-scheme: dark)');
		darkMode.addEventListener('change', (e) => {
			setTheme(e.matches ? Theme.DARK : Theme.LIGHT);
		});
		// TODO unsubscribe?
	}, []);

	useEffect(() => {
		// TODO needed or could be moved on the listener?
		document.getElementsByTagName('html')[0]?.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeContextProvider };
