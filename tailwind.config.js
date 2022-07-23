module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				'primary-200': '#BAF0F3',
				'primary-500': '#3F978F',
				'primary-600': '#378182',
			},
			fontFamily: {
				sans: ['Raleway', 'Helvetica Neue', 'sans-serif'],
			},
			flex: {
				3: '1 0 25%;',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
