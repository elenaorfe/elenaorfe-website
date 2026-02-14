/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
	},
};

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
});

// See https://github.com/GoogleChrome/workbox/issues/1790
module.exports =
	process.env.NODE_ENV === 'development' ? nextConfig : withPWA(nextConfig);
