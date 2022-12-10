import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Raleway } from '@next/font/google';
import { ThemeContextProvider } from '../context/ThemeContext';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeContextProvider>
			<div className={`${raleway.variable} font-sans`}>
				<Component {...pageProps} />
			</div>
		</ThemeContextProvider>
	);
}
