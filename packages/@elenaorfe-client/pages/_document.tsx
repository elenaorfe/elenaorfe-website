import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
	return (
		<Html lang="en" className="m-0 p-0">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png"></link>
				<meta name="theme-color" content="#fff" />
			</Head>
			<body className="m-0 bg-[--color-background] p-0 text-[--color-text-base]">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
