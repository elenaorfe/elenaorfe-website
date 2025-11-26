import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import React from 'react';

type Props = DocumentInitialProps & { locale?: string };

export default class MyDocument extends Document<Props> {
	static async getInitialProps(ctx: DocumentContext): Promise<Props> {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps, locale: ctx.locale ?? 'en' };
	}

	render(): React.ReactElement {
		const locale = this.props.locale ?? 'en';

		return (
			<Html lang={locale} className="m-0 p-0">
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
}
