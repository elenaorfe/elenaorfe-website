// Skip Husky install in production and CI
if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
	(await import('husky')).default;
	console.log('Husky installed 🎉');
}
