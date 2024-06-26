import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document(): React.JSX.Element {
	return (
		<Html lang="en" className="m-0 p-0">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png"></link>
				<meta name="theme-color" content="#fff" />
			</Head>
			<body className="m-0 bg-white p-0 font-light text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
