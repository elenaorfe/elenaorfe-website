import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from '@next/font/google';
import ThemeContextProvider from '../context/ThemeContextProvider';
import AppContextProvider from '../context/AppContextProvider';

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['300', '600'],
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
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
