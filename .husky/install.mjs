// Skip Husky install in production and CI
console.log('process.env.VERCEL_ENV', process.env.VERCEL_ENV);
console.log('process.env.CI', process.env.CI);
console.log('!process.env.CI', !process.env.CI);
if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
	(await import('husky')).default;
	console.log('Husky installed 🎉');
}
