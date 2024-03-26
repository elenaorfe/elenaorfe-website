/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'persian-green': {
					50: '#f2fbf9',
					100: '#d3f4ed',
					200: '#a6e9db',
					300: '#72d6c6',
					400: '#44bdac',
					500: '#2a9d8f',
					600: '#208177',
					700: '#1d6861',
					800: '#1c534f',
					900: '#1b4642',
					950: '#0a2928',
				},
			},
			fontFamily: {
				sans: ['var(--font-poppins)'],
			},
		},
	},
	plugins: [],
};
