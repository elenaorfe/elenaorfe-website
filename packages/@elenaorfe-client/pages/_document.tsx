import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png"></link>
				<meta name="theme-color" content="#fff" />
			</Head>
			<body className="bg-[--color-background] text-[--color-text-base]">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
