/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
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

module.exports = withPWA(nextConfig);
