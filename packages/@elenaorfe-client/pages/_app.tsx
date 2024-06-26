import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import React from 'react';
import AppContextProvider from '../context/AppContextProvider';
import ThemeContextProvider from '../context/ThemeContextProvider';
import '../styles/globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['300', '400', '500', '600'],
});

export default function App(props: AppProps): React.JSX.Element {
	const { Component, pageProps } = props;

	return (
		<ThemeContextProvider>
			<AppContextProvider>
				<div className={`${poppins.variable} font-sans`}>
					<Component {...pageProps} />
				</div>
			</AppContextProvider>
		</ThemeContextProvider>
	);
}
