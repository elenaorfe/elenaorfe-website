import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Raleway } from '@next/font/google';
import ThemeContextProvider from '../context/ThemeContextProvider';
import AppContextProvider from '../context/AppContextProvider';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<ThemeContextProvider>
			<AppContextProvider>
				<div className={`${raleway.variable} font-sans`}>
					<Component {...pageProps} />
				</div>
			</AppContextProvider>
		</ThemeContextProvider>
	);
}
